import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface SectionTransitionProps {
  completedSection?: string;
  nextSection: string;
  onContinue: () => void;
}

const sectionDetails: Record<string, { title: string; description: string }> = {
  "Mindset & Personality": {
    title: "Section 1: Mindset & Personality",
    description: 'The "Entrepreneurial Spirit"',
  },
  "Knowledge & Skills": {
    title: "Section 2: Knowledge & Skills",
    description: 'The "Practical Aptitude"',
  },
  "Motivation & Vision": {
    title: "Section 3: Motivation & Vision",
    description: 'The "Drive"',
  },
};

const SectionTransition: React.FC<SectionTransitionProps> = ({
  completedSection,
  nextSection,
  onContinue,
}) => {
  const nextSectionDetails = sectionDetails[nextSection];
  const isFirstSection = !completedSection;

  return (
    <motion.div
      key="section-transition"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="text-center flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-xl shadow-slate-200/60"
    >
      {!isFirstSection && (
        <CheckCircle2 className="w-16 h-16 text-launchpad-green mb-4" />
      )}
      <h2 className="text-2xl font-display font-bold text-slate-800 mb-2">
        {isFirstSection ? "Ready to Start?" : "Section Complete!"}
      </h2>
      <p className="text-slate-600 text-lg mb-8 max-w-lg">
        {isFirstSection ? (
          <>
            First up is <strong>{nextSectionDetails.title}</strong>:{" "}
            <em>{nextSectionDetails.description}</em>.
          </>
        ) : (
          <>
            You've finished the <strong>{completedSection}</strong> section.
            Next up:{" "}
            <strong>
              {nextSectionDetails.title}: {nextSectionDetails.description}
            </strong>
            .
          </>
        )}
      </p>
      <Button
        onClick={onContinue}
        size="lg"
        className="bg-launchpad-purple hover:bg-launchpad-purple/90"
      >
        {isFirstSection ? "Begin Section" : "Continue"}
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </motion.div>
  );
};

export default SectionTransition;
