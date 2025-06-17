import React from "react";
import { Progress } from "@/app/components/ui/progress";

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-slate-600">
          Question {current + 1} of {total}
        </span>
        <span className="text-sm font-medium text-launchpad-purple">
          {Math.round(progress)}% Complete
        </span>
      </div>
      <Progress
        value={progress}
        className="h-2 [&>div]:bg-gradient-to-r [&>div]:from-launchpad-purple [&>div]:to-launchpad-purple-light"
      />
    </div>
  );
};

export default ProgressBar;
