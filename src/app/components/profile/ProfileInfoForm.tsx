import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { ArrowRight, Loader2 } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import {
  ProfileInfoFormData,
  profileInfoSchema,
} from "@/lib/profileInfoSchema";
import { useRouter } from "next/navigation";

const ProfileInfoForm = () => {
  const router = useRouter();
  const { userMock } = useAuth();
  const { toast } = useToast();
  const [isSaving, setIsSaving] = React.useState(false);

  const form = useForm<ProfileInfoFormData>({
    resolver: zodResolver(profileInfoSchema),
    defaultValues: {
      name: userMock?.name || "",
      avatarUrl: userMock?.avatar || "",
      email: userMock?.email || "",
    },
  });

  const onSubmit = (data: ProfileInfoFormData) => {
    setIsSaving(true);
    console.log("Profile updated:", data);

    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      toast({
        title: "Profile Updated",
        description: "Your changes have been saved successfully.",
      });
    }, 1000);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-md">
      <CardHeader>
        <CardTitle className="font-display text-2xl">
          Profile Settings
        </CardTitle>
        <CardDescription>
          Manage your account settings and profile information.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="avatarUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Avatar URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://your-avatar-url.com/image.png"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormItem>
              <FormLabel>Account Status</FormLabel>
              <div className="flex items-center justify-between rounded-lg border bg-slate-50/50 p-4">
                <div className="space-y-0.5">
                  <p className="font-semibold text-slate-800">Free Plan</p>
                  <p className="text-sm text-slate-500">
                    Access to core features to start your journey.
                  </p>
                </div>
                <Button
                  className="text-purple-700 hover:text-purple-400"
                  type="button"
                  variant="outline"
                  onClick={() => router.push("/billing")}
                >
                  Manage Billing
                </Button>
              </div>
            </FormItem>

            <FormItem>
              <FormLabel>Joined</FormLabel>
              <Input
                readOnly
                disabled
                value={
                  userMock?.joined
                    ? format(new Date(userMock.joined), "MMMM dd, yyyy")
                    : "N/A"
                }
              />
            </FormItem>

            <div className="flex justify-end pt-4 border-t">
              <Button type="submit" disabled={isSaving}>
                {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Save Changes
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ProfileInfoForm;
