import React from "react";
import { motion } from "framer-motion";

interface LoaderProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-16 h-16",
    lg: "w-24 h-24",
    xl: "w-32 h-32",
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative">
        {/* Outer rotating ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 border-r-pink-500"
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width:
              size === "sm"
                ? "48px"
                : size === "md"
                ? "80px"
                : size === "lg"
                ? "112px"
                : "144px",
            height:
              size === "sm"
                ? "48px"
                : size === "md"
                ? "80px"
                : size === "lg"
                ? "112px"
                : "144px",
          }}
        />

        {/* Middle rotating ring */}
        <motion.div
          className="absolute inset-2 rounded-full border-2 border-transparent border-b-blue-500 border-l-purple-400"
          animate={{ rotate: -360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Inner pulsing glow */}
        <motion.div
          className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Main logo with rotation and effects */}
        <motion.div
          className={`relative ${sizeClasses[size]} flex items-center justify-center`}
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: {
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <motion.img
            src="/logo-icon.png"
            alt="Loading..."
            className="w-full h-full object-contain drop-shadow-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Sparkle effects */}
          <motion.div
            className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
          />
          <motion.div
            className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-pink-400 rounded-full"
            animate={{
              scale: [0, 1, 0],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;
