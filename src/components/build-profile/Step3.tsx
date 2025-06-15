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
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const problemDomains = [
  { id: "Productivity & Efficiency", label: "Productivity & Efficiency" },
  { id: "Education & Learning", label: "Education & Learning" },
  { id: "Health & Wellness", label: "Health & Wellness" },
  { id: "Marketing & Sales", label: "Marketing & Sales" },
  { id: "Financial Management", label: "Financial Management" },
  { id: "Content Creation", label: "Content Creation" },
  { id: "Community Building", label: "Community Building" },
  {
    id: "Niche Industry Solutions (e.g., LegalTech, PropTech, EduTech)",
    label: "Niche Industry Solutions (e.g., LegalTech, PropTech, EduTech)",
  },
  {
    id: "Environmental & Social Impact",
    label: "Environmental & Social Impact",
  },
  { id: "Other", label: "Other" },
];

const targetAudiences = [
  { id: "Other Businesses (B2B)", label: "Other Businesses (B2B)" },
  { id: "Individual Consumers (B2C)", label: "Individual Consumers (B2C)" },
  { id: "Freelancers / Solopreneurs", label: "Freelancers / Solopreneurs" },
  {
    id: "Small to Medium Businesses (SMBs)",
    label: "Small to Medium Businesses (SMBs)",
  },
  {
    id: "Specific Demographics",
    label: "Specific Demographics (e.g., Parents, Students, Senior Citizens)",
  },
];

const aiRoles = [
  { id: "Automation", label: "Automation (AI handles repetitive tasks)" },
  {
    id: "Content Generation",
    label: "Content Generation (AI creates text, images, code)",
  },
  {
    id: "Data Insights",
    label: "Data Insights (AI analyzes data for patterns/intelligence)",
  },
  {
    id: "Personalization",
    label: "Personalization (AI customizes user experiences)",
  },
  {
    id: "Recommendations",
    label: "Recommendations (AI suggests actions, products, content)",
  },
  {
    id: "Forecasting",
    label: "Forecasting (AI predicts future trends/outcomes)",
  },
];

const monetizationOptions = [
  { id: "Subscription", label: "Subscription (Monthly/Annual Fees)" },
  { id: "Freemium", label: "Freemium (Free basic, paid advanced)" },
  { id: "Usage-Based", label: "Usage-Based (Pay-per-use, credits)" },
  { id: "One-Time Purchase", label: "One-Time Purchase" },
  {
    id: "Tiered Pricing",
    label: "Tiered Pricing (Different features at different prices)",
  },
];

const Step3Vision = () => {
  const { control, watch } = useFormContext();
  const watchProblemDomains = watch("problemDomains");
  const watchTargetAudience = watch("targetAudience");

  const renderCheckboxGroup = (
    name: string,
    items: { id: string; label: string }[],
    description: string,
    isMultiSelect: boolean,
    max?: number
  ) => (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem>
          <div className="mb-4">
            <FormLabel className="text-base">{description}</FormLabel>
            {max && <FormDescription>Select up to {max}.</FormDescription>}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((item) => (
              <FormField
                key={item.id}
                control={control}
                name={name}
                render={({ field }) => (
                  <FormItem
                    key={item.id}
                    className="flex flex-row items-start space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(item.id)}
                        onCheckedChange={(checked) => {
                          const currentValue = field.value || [];
                          if (checked) {
                            if (!max || currentValue.length < max) {
                              field.onChange([...currentValue, item.id]);
                            }
                          } else {
                            field.onChange(
                              currentValue.filter((value) => value !== item.id)
                            );
                          }
                        }}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">{item.label}</FormLabel>
                  </FormItem>
                )}
              />
            ))}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  return (
    <div className="space-y-8">
      {renderCheckboxGroup(
        "problemDomains",
        problemDomains,
        "Problem Domains You're Passionate About",
        true
      )}
      {watchProblemDomains?.includes("Other") && (
        <FormField
          control={control}
          name="otherProblemDomain"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Specify "Other" Problem Domain</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      {renderCheckboxGroup(
        "targetAudience",
        targetAudiences,
        "Who Do You Want to Help? (Target Audience)",
        true
      )}
      {watchTargetAudience?.includes("Specific Demographics") && (
        <FormField
          control={control}
          name="specificDemographics"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Specify Demographics</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="e.g., Parents, Students, Senior Citizens"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      {renderCheckboxGroup(
        "preferredAIRole",
        aiRoles,
        "How AI Should Be Used in Your Product",
        true,
        2
      )}
      {renderCheckboxGroup(
        "monetizationPreference",
        monetizationOptions,
        "Your Preferred Monetization Model",
        true,
        2
      )}

      <FormField
        control={control}
        name="longTermVision"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Your Long-term Vision</FormLabel>
            <FormControl>
              <Textarea
                rows={4}
                placeholder="Example: To empower small businesses, revolutionize learning, make complex tasks effortless."
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default Step3Vision;
