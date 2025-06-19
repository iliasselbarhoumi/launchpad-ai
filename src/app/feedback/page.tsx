"use client";

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

import { Button } from "@/app/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { Textarea } from "@/app/components/ui/textarea";
import { Input } from "@/app/components/ui/input";
import { toast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { FeedbackRating } from "@/app/components/FeedbackRating";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import PreviousFeedback from "../components/feedback/PreviousFeedback";

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

export default function FeedbackPage() {
  const { user } = useUser();
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

  const onSubmit = async (data: FeedbackFormValues) => {
    setIsSubmitting(true);

    try {
      // Prepare the message for the database

      // Add type information to the message
      const selectedType = feedbackTypes.find(
        (type) => type.value === data.type
      );

      // Make API call to save feedback
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: selectedType.value,
          other_type_details: data.other_type_details,
          comments: data.comments,
          rating: data.rating,
          user_id: user.id,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit feedback");
      }

      // Success handling
      toast({
        title: "Feedback submitted successfully!",
        description: "Thank you for your feedback. We appreciate your input.",
        variant: "default",
      });

      // Reset form
      form.reset();
    } catch (error) {
      console.error("Error submitting feedback:", error);

      toast({
        title: "Error submitting feedback",
        description:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Main Feedback Form */}
          <div className="flex justify-center">
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
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
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

          {/* Previous Feedback Section */}
          <div className="animate-fade-in">
            <PreviousFeedback userID={user.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
