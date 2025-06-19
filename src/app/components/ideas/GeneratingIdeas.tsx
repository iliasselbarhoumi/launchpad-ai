import React from "react";
import { motion } from "framer-motion";
import { Progress } from "@/app/components/ui/progress";
import { Bot, Lightbulb } from "lucide-react";

const generatingMessages = [
  "Analyzing your profile...",
  "Scanning for market gaps...",
  "Brainstorming concepts...",
  "Applying AI magic...",
  "Finalizing your brilliant idea...",
];

const GeneratingIdea = ({ progress }: { progress: number }) => {
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
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center opacity-20"
        >
          <Bot
            className="w-24 h-24 text-launcherpad-purple absolute"
            style={{ transform: "translate(40px, -40px) rotate(45deg)" }}
          />
          <Bot
            className="w-24 h-24 text-sky-400 absolute"
            style={{ transform: "translate(-40px, 40px) rotate(-45deg)" }}
          />
        </motion.div>
        <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center bg-gradient-to-br from-launcherpad-purple/10 to-launcherpad-purple-light/10 backdrop-blur-sm animate-pulse-glow">
          <Lightbulb
            className="w-12 h-12 text-launcherpad-purple animate-bounce-subtle"
            strokeWidth={1.5}
          />
        </div>
      </div>

      <h3 className="text-2xl font-bold font-display text-slate-800 mb-4">
        Crafting Your Next Big Idea
      </h3>

      <div className="w-full max-w-md mx-auto px-4">
        <Progress value={progress} className="h-2 mb-2 transition-all" />
        <p className="text-slate-500 text-sm h-5 transition-all">
          {progress < 100
            ? generatingMessages[currentMessageIndex]
            : "Here's your new idea!"}
        </p>
      </div>
    </motion.div>
  );
};

export default GeneratingIdea;
