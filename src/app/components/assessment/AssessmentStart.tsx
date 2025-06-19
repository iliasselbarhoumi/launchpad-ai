import React from "react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface AssessmentStartProps {
  isReady: boolean;
  onStart: () => void;
}

const AssessmentStart: React.FC<AssessmentStartProps> = ({
  isReady,
  onStart,
}) => {
  return (
    <div className="text-center">
      <Badge
        variant="secondary"
        className="mb-4 bg-launcherpad-purple/10 text-launcherpad-purple border-launcherpad-purple/20"
      >
        Entrepreneurial Assessment
      </Badge>
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-800">
        Discover Your <span className="gradient-text">Entrepreneurial DNA</span>
      </h1>
      <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-8">
        This quick assessment will help you understand your unique strengths and
        tendencies as an entrepreneur. Answer honestly for the most accurate
        insights.
      </p>
      <Button
        disabled={!isReady}
        onClick={onStart}
        size="lg"
        className="bg-launcherpad-purple hover:bg-launcherpad-purple-hover hover-lift press-effect"
      >
        {!isReady ? (
          "Preparing Assessment..."
        ) : (
          <>
            Start Assessment <ArrowRight className="ml-2" />
          </>
        )}
      </Button>
    </div>
  );
};

export default AssessmentStart;
