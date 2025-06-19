import React from "react";
import { motion } from "framer-motion";

export interface StepContentProps {
  stepNumber: number;
  title: string;
  description: string;
  highlightText: string;
  highlightDetails: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const StepContent: React.FC<StepContentProps> = ({
  stepNumber,
  title,
  description,
  highlightText,
  highlightDetails,
  icon,
  isActive,
  onClick,
}) => {
  return (
    <motion.div
      className={`relative px-4 py-3 cursor-pointer transition-all duration-300 w-full ${
        isActive
          ? "bg-white border-l-4 border-launcherpad-purple rounded-r-lg"
          : "bg-gray-50/60 border-l-4 border-gray-200 rounded-r-lg hover:bg-gray-50/80"
      }`}
      onClick={onClick}
      initial={{ opacity: 0.9, x: -10 }}
      animate={{
        opacity: 1,
        x: 0,
        borderColor: isActive ? "#6936F5" : "#e5e7eb",
        backgroundColor: isActive ? "white" : "#f9fafb",
      }}
      transition={{ duration: 0.3 }}
      whileHover={{ x: isActive ? 0 : 5 }}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <motion.div
            className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm ${
              isActive
                ? "bg-launcherpad-purple text-white"
                : "bg-gray-200 text-launcherpad-dark-blue"
            }`}
            animate={{
              backgroundColor: isActive ? "#6936F5" : "#e5e7eb",
              color: isActive ? "white" : "#222233",
            }}
            transition={{ duration: 0.3 }}
          >
            {stepNumber}
          </motion.div>
        </div>

        <div className="flex-1">
          <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-launcherpad-purple/10 text-launcherpad-purple mb-1">
            {icon}
          </div>

          <h3 className="text-base font-bold text-launcherpad-dark-blue mb-1">
            {title}
          </h3>

          <p className="text-sm text-launcherpad-dark-blue/80 mb-2 line-clamp-2">
            {description}
          </p>

          {isActive && (
            <motion.div
              className="bg-white rounded-md p-2 text-xs text-launcherpad-dark-blue/90 border border-gray-100"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <span className="font-medium text-launcherpad-dark-blue">
                {highlightText}
              </span>{" "}
              {highlightDetails}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default StepContent;
