import React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface StepperProps {
  steps: { id: number; name: string }[];
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center w-full mt-2 p-4">
        {steps.map((step, stepIdx) => (
          <li
            key={step.name}
            className={cn(
              "relative",
              stepIdx !== steps.length - 1 ? "flex-1" : ""
            )}
          >
            {stepIdx < currentStep ? (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-launchpad-purple" />
                </div>
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-launchpad-purple hover:bg-launchpad-purple-hover">
                  <Check className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <span className="absolute -top-8 left-4 -translate-x-1/2 text-xs text-center w-32 hidden sm:block">
                  {step.name}
                </span>
              </>
            ) : stepIdx === currentStep ? (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <div
                  className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-launchpad-purple bg-white"
                  aria-current="step"
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full bg-launchpad-purple"
                    aria-hidden="true"
                  />
                </div>
                <span className="absolute -top-8 left-4 -translate-x-1/2 text-xs text-center w-32 text-launchpad-purple font-semibold hidden sm:block">
                  {step.name}
                </span>
              </>
            ) : (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <div className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400">
                  <span
                    className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
                    aria-hidden="true"
                  />
                </div>
                <span className="absolute -top-8 left-4 -translate-x-1/2 text-xs text-center w-32 hidden sm:block">
                  {step.name}
                </span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Stepper;
