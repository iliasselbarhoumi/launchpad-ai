import React from "react";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import MultiSelectCreatable from "@/components/ui/multi-select-creatable";

const Step1Background = () => {
  const { control } = useFormContext();

  return (
    <div className="space-y-6">
      <FormField
        control={control}
        name="coreInterestsAndExpertise"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Your Core Interests & Expertise Areas</FormLabel>
            <FormControl>
              <MultiSelectCreatable
                {...field}
                placeholder="Add an interest and press Enter or comma"
              />
            </FormControl>
            <FormDescription>
              What topics, hobbies, industries, or specific skills do you
              genuinely enjoy or excel at? Separate items with a comma or Enter.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="keyProblems"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Key Problems You've Experienced</FormLabel>
            <FormControl>
              <Textarea
                rows={4}
                placeholder="What frustrations or unmet needs have you personally encountered in your work, daily life, or hobbies?"
                {...field}
              />
            </FormControl>
            <FormDescription>
              Example: Too much manual data entry, difficulty finding reliable
              freelancers.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default Step1Background;
