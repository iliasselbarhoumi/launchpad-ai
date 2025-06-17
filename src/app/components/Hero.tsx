import React, { useRef } from "react";
import AnimatedBackground from "./AnimatedBackground";
import { ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";
import PlatformDemo from "./hero/PlatformDemo";
import StatsSection from "./hero/StatsSection";

const Hero = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const demoRef = useRef<HTMLDivElement>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative min-h-screen pt-12 pb-32 overflow-hidden ">
      <AnimatedBackground />

      <div className="container-section relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-launchpad-purple/10 text-launchpad-purple mb-6"
          >
            <span className="text-sm font-medium font-inter tracking-wide">
              🚀 Democratizing Entrepreneurship
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-inter font-bold text-4xl md:text-5xl lg:text-7xl tracking-tight max-w-4xl mx-auto mb-6 text-launchpad-dark-blue leading-[1.1]"
          >
            From <span className="text-[#EA384C] font-extrabold">Employee</span>{" "}
            to{" "}
            <span className="text-[#6936F5] font-extrabold">Entrepreneur</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-inter text-xl text-launchpad-dark-blue/80 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            AI brings your vision to life, with personalized insights every step
            of the way
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16"
          >
            <a
              href="#cta"
              className="button-primary flex items-center group font-inter font-medium"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#how-it-works" className="button-outline font-inter">
              See How It Works
            </a>
          </motion.div>

          {/* Modern Platform Showcase */}
          <motion.div ref={demoRef} variants={itemVariants}>
            <PlatformDemo />
          </motion.div>

          {/* Stats Section - Enhanced with better styling and icons */}
          <StatsSection statsRef={statsRef} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
