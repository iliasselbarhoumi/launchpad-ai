import React from "react";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group";

const timeCommitmentOptions = [
  { value: "less-than-10", label: "Less than 10 hours (Casual Exploration)" },
  { value: "10-20", label: "10-20 hours (Dedicated Side Project)" },
  { value: "20-plus", label: "20+ hours (Intensive Pursuit)" },
  { value: "full-time", label: "Full-time (Ready to Launch)" },
];

const investmentOptions = [
  { value: "less-than-1000", label: "Less than $1,000 (Lean Bootstrapping)" },
  { value: "1000-5000", label: "$1,000 - $5,000 (Modest Start)" },
  {
    value: "5000-20000",
    label: "$5,000 - $20,000 (Significant Initial Capital)",
  },
  { value: "20000-plus", label: "$20,000+ (Ambitious Funding)" },
];

const teamPreferenceOptions = [
  { value: "solo", label: "Solo (I prefer to build independently)" },
  {
    value: "small-team",
    label: "Small Team (Open to 1-2 co-founders/partners)",
  },
  {
    value: "growing-team",
    label: "Growing Team (Plan for more than 3 people)",
  },
];

const Step2Resources = () => {
  const { control } = useFormContext();

  return (
    <div className="space-y-8">
      <FormField
        control={control}
        name="timeCommitment"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>Time Commitment Per Week</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-1"
              >
                {timeCommitmentOptions.map((option) => (
                  <FormItem
                    key={option.value}
                    className="flex items-center space-x-3 space-y-0"
                  >
                    <FormControl>
                      <RadioGroupItem value={option.value} />
                    </FormControl>
                    <FormLabel className="font-normal">
                      {option.label}
                    </FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="initialInvestment"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>Initial Investment Budget</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-1"
              >
                {investmentOptions.map((option) => (
                  <FormItem
                    key={option.value}
                    className="flex items-center space-x-3 space-y-0"
                  >
                    <FormControl>
                      <RadioGroupItem value={option.value} />
                    </FormControl>
                    <FormLabel className="font-normal">
                      {option.label}
                    </FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="teamPreference"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>Team Preference</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-1"
              >
                {teamPreferenceOptions.map((option) => (
                  <FormItem
                    key={option.value}
                    className="flex items-center space-x-3 space-y-0"
                  >
                    <FormControl>
                      <RadioGroupItem value={option.value} />
                    </FormControl>
                    <FormLabel className="font-normal">
                      {option.label}
                    </FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default Step2Resources;
