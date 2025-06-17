import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/app/components/ui/form";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import Step1Background from "./Step1";
import Step2Resources from "./Step2";
import Step3Vision from "./Step3";
import { ProfileFormData, profileSchema } from "@/lib/profileSchema";
import Stepper from "./Stepper";
import { useRouter } from "next/navigation";

const steps = [
  {
    id: 1,
    name: "Background & Expertise",
    component: Step1Background,
    fields: ["coreInterestsAndExpertise", "keyProblems"],
  },
  {
    id: 2,
    name: "Resources & Commitment",
    component: Step2Resources,
    fields: ["timeCommitment", "initialInvestment", "teamPreference"],
  },
  {
    id: 3,
    name: "Product & Vision",
    component: Step3Vision,
    fields: [
      "problemDomains",
      "otherProblemDomain",
      "targetAudience",
      "specificDemographics",
      "preferredAIRole",
      "monetizationPreference",
      "longTermVision",
    ],
  },
];

const ProfileForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    mode: "onChange",
    defaultValues: {
      coreInterestsAndExpertise: [],
      keyProblems: "",
      problemDomains: [],
      targetAudience: [],
      preferredAIRole: [],
      monetizationPreference: [],
      longTermVision: "",
    },
  });

  const { trigger, handleSubmit } = form;

  const handleNext = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as (keyof ProfileFormData)[], {
      shouldFocus: true,
    });
    if (!output) return;

    if (currentStep < steps.length - 1) {
      setCurrentStep((step) => step + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((step) => step - 1);
    }
  };

  const onSubmit = (data: ProfileFormData) => {
    setIsSubmitting(true);
    console.log("Profile Data:", data);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Profile Submitted!",
        description: "Your entrepreneurial profile has been saved.",
      });
      router.push("/profile");
      // Potentially navigate away or show a success message
    }, 1500);
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <Card className="shadow-lg">
      <CardContent className="p-4 sm:p-8">
        <Stepper steps={steps} currentStep={currentStep} />
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <CurrentStepComponent />
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between items-center pt-4 border-t">
              <div>
                {currentStep > 0 && (
                  <Button
                    className="text-purple-700 hover:text-purple-400"
                    type="button"
                    variant="outline"
                    onClick={handlePrev}
                  >
                    Back
                  </Button>
                )}
              </div>
              <div>
                {currentStep < steps.length - 1 ? (
                  <Button type="button" onClick={handleNext}>
                    Next Step
                  </Button>
                ) : (
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Submit Profile
                  </Button>
                )}
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ProfileForm;
