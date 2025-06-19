import React, { useState } from "react";
import { Target, Users, LineChart } from "lucide-react";
import StepContent from "./how-it-works/StepContent";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  // Steps data
  const steps = [
    {
      id: 1,
      icon: <Target className="w-4 h-4" />,
      title: "AI Identifies Where Your Buyers Engage",
      description:
        "Our AI scans social media to find where your target audience is most active, identifying the exact channels, topics, and content they engage with.",
      highlightText: "AI identifies:",
      highlightDetails:
        "Relevant conversations, active communities, and engagement opportunities",
      gifUrl: "/lovable-uploads/50d7bc89-98fd-49a5-b67f-94230c5d3ca5.png",
    },
    {
      id: 2,
      icon: <Users className="w-4 h-4" />,
      title: "AI Auto-Warms & Builds Trust",
      description:
        "Launcherpad creates meaningful touchpoints that position you as a trusted advisor by engaging with prospects' content and contributing value.",
      highlightText: "AI automates:",
      highlightDetails:
        "Targeted comments, relevant reactions, and personalized interactions",
      gifUrl:
        "https://api.microlink.io?url=https%3A%2F%2Fgiphy.com%2Fgifs%2Frevolutioncomedy-handshake-revolutioncomedy-icommitcombustion-kFHbqSdogIS0qtX6Pf&embed=true&screenshot=true&meta=false",
    },
    {
      id: 3,
      icon: <LineChart className="w-4 h-4" />,
      title: "AI Converts Warm Leads Into Pipeline",
      description:
        "With pre-established trust, your outreach achieves 15x higher conversion rates, turning social connections into qualified leads and deals.",
      highlightText: "AI delivers:",
      highlightDetails:
        "Warmed leads, engagement analytics, and conversion opportunities",
      gifUrl:
        "https://api.microlink.io?url=https%3A%2F%2Fgiphy.com%2Fgifs%2Fchart-jtECu4TAPnhbGv2iwx&embed=true&screenshot=true&meta=false",
    },
  ];

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
  };

  return (
    <section className="relative py-4 bg-white" id="how-it-works">
      <div className="container-section py-4">
        <div className="max-w-3xl mx-auto text-center mb-6">
          <div className="section-tag">From Ignored to Trusted</div>
          <h2 className="heading-lg text-launcherpad-dark-blue mb-4">
            How <span className="gradient-text">Launcherpad</span> Works in 3
            Steps
          </h2>
          <p className="text-launcherpad-dark-blue/80 text-lg max-w-2xl mx-auto">
            Our AI-driven platform automates social engagement for your sales
            and GTM teams, transforming cold outreach into warm connections.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gray-100 rounded-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row h-[600px]">
            {/* Steps Section - Now on the left */}
            <div className="lg:w-1/3 flex flex-col gap-1 p-4 bg-gray-50">
              {steps.map((step) => (
                <StepContent
                  key={step.id}
                  stepNumber={step.id}
                  title={step.title}
                  description={step.description}
                  highlightText={step.highlightText}
                  highlightDetails={step.highlightDetails}
                  icon={step.icon}
                  isActive={activeStep === step.id}
                  onClick={() => handleStepClick(step.id)}
                />
              ))}
            </div>

            {/* Image Display - Now covering the entire right section */}
            <div className="lg:w-2/3 relative h-full">
              {steps.map((step) => (
                <motion.div
                  key={step.id}
                  className="absolute inset-0 h-full w-full"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeStep === step.id ? 1 : 0,
                    zIndex: activeStep === step.id ? 10 : 1,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                >
                  <img
                    src={step.gifUrl}
                    alt={`Step ${step.id}: ${step.title}`}
                    className="w-full h-full object-cover object-center"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
