import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Bug,
  ThumbsUp,
  MessageSquareWarning,
  Lightbulb,
  Ellipsis,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FeedbackRating } from "@/components/FeedbackRating";
import { cn } from "@/lib/utils";
import { FeedbackFormData, submitFeedback } from "@/api/feedback";

const feedbackSchema = z
  .object({
    type: z.enum(
      ["bug_report", "feature_request", "complaint", "compliment", "other"],
      {
        required_error: "Please select a feedback type.",
      }
    ),
    other_type_details: z.string().optional(),
    comments: z
      .string()
      .min(10, {
        message: "Comments must be at least 10 characters long.",
      })
      .max(500, {
        message: "Comments must not be longer than 500 characters.",
      }),
    rating: z.number().min(1).max(5).optional(),
  })
  .refine(
    (data) => {
      if (data.type === "other") {
        return !!data.other_type_details && data.other_type_details.length > 2;
      }
      return true;
    },
    {
      message: "Please provide more details for 'Other' type.",
      path: ["other_type_details"],
    }
  );

type FeedbackFormValues = z.infer<typeof feedbackSchema>;

const feedbackTypes = [
  {
    value: "bug_report",
    label: "Bug Report",
    icon: Bug,
    color: "text-red-500",
  },
  {
    value: "feature_request",
    label: "Feature Request",
    icon: Lightbulb,
    color: "text-purple-500",
  },
  {
    value: "complaint",
    label: "Complaint",
    icon: MessageSquareWarning,
    color: "text-orange-500",
  },
  {
    value: "compliment",
    label: "Compliment",
    icon: ThumbsUp,
    color: "text-green-500",
  },
  { value: "other", label: "Other", icon: Ellipsis, color: "text-gray-500" },
];

const FeedbackPage = () => {
  const form = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      rating: 5,
      comments: "",
      other_type_details: "",
    },
  });

  const feedbackType = form.watch("type");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  async function onSubmit(data: FeedbackFormData) {
    try {
      console.log(data);
      setIsSubmitting(true);
      await submitFeedback(data);
      toast({
        title: "Feedback Submitted!",
        description:
          "Thank you for your feedback. We appreciate you taking the time to help us improve.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit feedback. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-lg animate-fade-in">
        <CardHeader>
          <CardTitle className="text-3xl font-bold tracking-tight">
            Feedback
          </CardTitle>
          <CardDescription>
            We'd love to hear your thoughts. What can we improve?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a feedback type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {feedbackTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            <div className="flex items-center gap-2">
                              <type.icon
                                className={cn("w-4 h-4", type.color)}
                              />
                              <span>{type.label}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {feedbackType === "other" && (
                <FormField
                  control={form.control}
                  name="other_type_details"
                  render={({ field }) => (
                    <FormItem className="animate-fade-in">
                      <FormLabel>Please Specify</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="What type of feedback is this?"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              <FormField
                control={form.control}
                name="comments"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Comments</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your feedback..."
                        className="resize-none min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rating (optional)</FormLabel>
                    <FormControl>
                      <FeedbackRating
                        value={field.value}
                        onChange={field.onChange}
                        type={form.watch("type") || ""}
                        comments={form.watch("comments") || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Feedback"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeedbackPage;
