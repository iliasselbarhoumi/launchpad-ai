import React from "react";
import { Button } from "@/app/components/ui/button";
import { CircleCheck } from "lucide-react";
import { motion } from "framer-motion";

interface AnswerButtonProps {
  label: string;
  value: number;
  isSelected: boolean;
  onClick: (value: number) => void;
}

const AnswerButton: React.FC<AnswerButtonProps> = ({
  label,
  value,
  isSelected,
  onClick,
}) => {
  return (
    <Button
      variant={isSelected ? "default" : "outline"}
      size="lg"
      onClick={() => onClick(value)}
      className={`
        justify-start p-4 h-auto text-left press-effect transition-all duration-200 w-full
        ${
          isSelected
            ? "bg-launchpad-purple hover:bg-launchpad-purple/90 text-white shadow-lg shadow-launchpad-purple/20 animate-pulse-glow"
            : "bg-white border-slate-200 hover:border-launchpad-purple/50 hover:bg-launchpad-purple/5"
        }
      `}
    >
      <div className="flex items-center w-full">
        <div
          className={`
          w-7 h-7 rounded-full border-2 flex items-center justify-center mr-4 transition-all duration-200 shrink-0
          ${isSelected ? "border-white bg-white" : "border-slate-300"}
        `}
        >
          {isSelected ? (
            <CircleCheck className="h-4 w-4 text-launchpad-purple" />
          ) : (
            <span className="text-slate-500 font-semibold text-sm">
              {value}
            </span>
          )}
        </div>
        <span className="font-medium flex-1">{label}</span>
        {isSelected && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <CircleCheck className="h-5 w-5 text-white/50" />
          </motion.div>
        )}
      </div>
    </Button>
  );
};

export default AnswerButton;
