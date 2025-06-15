import { z } from "zod";

const stringToArray = z.preprocess((val) => {
  if (typeof val === "string" && val.length > 0) {
    return val
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
  }
  if (Array.isArray(val)) {
    return val;
  }
  return [];
}, z.array(z.string()).min(1, { message: "Please enter at least one item." }));

export const profileSchema = z
  .object({
    // Step 1: Background & Expertise
    coreInterestsAndExpertise: stringToArray,
    keyProblems: z
      .string()
      .min(10, {
        message: "Please describe key problems in at least 10 characters.",
      }),

    // Step 2: Resources & Commitment
    timeCommitment: z.enum(["less-than-10", "10-20", "20-plus", "full-time"], {
      required_error: "Please select your time commitment.",
    }),
    initialInvestment: z.enum(
      ["less-than-1000", "1000-5000", "5000-20000", "20000-plus"],
      { required_error: "Please select your available budget." }
    ),
    teamPreference: z.enum(["solo", "small-team", "growing-team"], {
      required_error: "Please select your team preference.",
    }),

    // Step 3: Product & Business Vision
    problemDomains: z
      .array(z.string())
      .min(1, "Please select at least one problem domain."),
    otherProblemDomain: z.string().optional(),
    targetAudience: z
      .array(z.string())
      .min(1, "Please select at least one target audience."),
    specificDemographics: z.string().optional(),
    preferredAIRole: z
      .array(z.string())
      .min(1, "Please select at least one AI role.")
      .max(2, "You can select up to 2 AI roles."),
    monetizationPreference: z
      .array(z.string())
      .min(1, "Please select at least one preference.")
      .max(2, "You can select up to 2 monetization preferences."),
    longTermVision: z
      .string()
      .min(10, {
        message:
          "Please describe your long-term vision in at least 10 characters.",
      }),
  })
  .refine(
    (data) =>
      !(
        data.problemDomains.includes("Other") &&
        (!data.otherProblemDomain || data.otherProblemDomain.trim() === "")
      ),
    {
      message: 'Please specify the "Other" problem domain.',
      path: ["otherProblemDomain"],
    }
  )
  .refine(
    (data) =>
      !(
        data.targetAudience.includes("Specific Demographics") &&
        (!data.specificDemographics || data.specificDemographics.trim() === "")
      ),
    {
      message: "Please specify the demographics.",
      path: ["specificDemographics"],
    }
  );

export type ProfileFormData = z.infer<typeof profileSchema>;
