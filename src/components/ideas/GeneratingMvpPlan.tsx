import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Progress } from "@/app/components/ui/progress";

interface GeneratingMvpPlanProps {
  progress: number;
}

const GeneratingMvpPlan: React.FC<GeneratingMvpPlanProps> = ({ progress }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-center py-20 px-6 bg-white rounded-xl border border-slate-200/80 shadow-sm"
    >
      <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center bg-gradient-to-br from-launcherpad-purple/10 to-launcherpad-purple-light/10">
        <Briefcase
          className="w-10 h-10 text-launcherpad-purple"
          strokeWidth={1.5}
        />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-800 mb-3">
        Generating Your Business Plan
      </h2>
      <p className="text-slate-500 max-w-lg mx-auto mb-8">
        Our AI is analyzing market data, identifying target audiences, and
        drafting your comprehensive business plan. Please wait a moment.
      </p>
      <div className="max-w-md mx-auto">
        <Progress value={progress} className="h-2" />
        <p className="text-sm text-slate-500 mt-2 font-medium">
          {Math.round(progress)}% Complete
        </p>
      </div>
    </motion.div>
  );
};

export default GeneratingMvpPlan;
