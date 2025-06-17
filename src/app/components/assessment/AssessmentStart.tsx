import React from "react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface AssessmentStartProps {
  onStart: () => void;
}

const AssessmentStart: React.FC<AssessmentStartProps> = ({ onStart }) => {
  return (
    <div className="text-center">
      <Badge
        variant="secondary"
        className="mb-4 bg-launchpad-purple/10 text-launchpad-purple border-launchpad-purple/20"
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
        onClick={onStart}
        size="lg"
        className="bg-launchpad-purple hover:bg-launchpad-purple-hover hover-lift press-effect"
      >
        Start Assessment <ArrowRight className="ml-2" />
      </Button>
    </div>
  );
};

export default AssessmentStart;
