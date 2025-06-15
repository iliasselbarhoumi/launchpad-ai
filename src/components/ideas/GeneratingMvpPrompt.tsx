import React from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import LovableIcon from "../icons/LovableIcon";

const generatingMessages = [
  "Deconstructing your idea...",
  "Identifying core value proposition...",
  "Formulating user stories...",
  "Crafting the perfect prompt...",
  "Almost ready...",
];

const GeneratingMvpPrompt = ({ progress }: { progress: number }) => {
  const currentMessageIndex = Math.min(
    Math.floor(progress / (100 / generatingMessages.length)),
    generatingMessages.length - 1
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-center py-20 bg-white rounded-xl border border-slate-200/80 flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative w-24 h-24 mb-6">
        <motion.div
          animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <LovableIcon className="w-20 h-20 text-launchpad-purple opacity-20" />
        </motion.div>
        <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center bg-gradient-to-br from-launchpad-purple/10 to-launchpad-purple-light/10">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <LovableIcon className="w-12 h-12 text-launchpad-purple" />
          </motion.div>
        </div>
      </div>

      <h3 className="text-2xl font-bold font-display text-slate-800 mb-4">
        Generating Your MVP Prompt
      </h3>

      <div className="w-full max-w-md mx-auto px-4">
        <Progress value={progress} className="h-2 mb-2 transition-all" />
        <p className="text-slate-500 text-sm h-5 transition-all">
          {progress < 100
            ? generatingMessages[currentMessageIndex]
            : "Here's your MVP prompt!"}
        </p>
      </div>
    </motion.div>
  );
};

export default GeneratingMvpPrompt;
