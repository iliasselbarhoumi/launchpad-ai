import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

import { AssessmentScores, getArchetype } from "@/lib/assessmentUtils";
import ResultRadarChart from "./ResultRadarChart";
import SectionBreakdown from "./SectionBreakdown";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

interface ProfileDisplayProps {
  scores: AssessmentScores;
}

const ProfileDisplay: React.FC<ProfileDisplayProps> = ({ scores }) => {
  const archetype = getArchetype(scores.totalPercentage);

  const descriptionParts = archetype.description.split("Launchpad AI");
  const descriptionWithHighlight =
    descriptionParts.length > 1 ? (
      <>
        {descriptionParts[0]}
        <span className="font-bold bg-gradient-to-r from-launchpad-red to-launchpad-purple bg-clip-text text-transparent">
          Launchpad AI
        </span>
        {descriptionParts[1]}
      </>
    ) : (
      archetype.description
    );

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-display font-bold">
            Your <span className="gradient-text">Entrepreneurial DNA</span>{" "}
            Profile
          </CardTitle>
          <CardDescription>
            Here's a summary of your assessment results.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0 border-t grid md:grid-cols-2">
          <div className="text-center flex flex-col items-center justify-center p-8 lg:p-12 bg-slate-50 border-b md:border-b-0 md:border-r">
            <h3 className="text-2xl font-bold text-launchpad-purple">
              {archetype.title}
            </h3>

            <div className="relative my-6 flex items-center justify-center h-48 w-48">
              <div className="absolute inset-0 bg-launchpad-purple/5 rounded-full animate-pulse-glow"></div>
              <div className="relative text-8xl font-bold gradient-text">
                {scores.totalPercentage}%
              </div>
            </div>

            <p className="text-slate-600 mt-2 max-w-sm mx-auto text-base">
              {descriptionWithHighlight}
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-white font-bold press-effect hover-lift hover:shadow-lg transition-all duration-300 border border-slate-200 hover:bg-slate-100"
              >
                <Link to="/profile">
                  <span className="text-black">Start Your Journey with</span>{" "}
                  <span className="bg-gradient-to-r from-launchpad-red to-launchpad-purple bg-clip-text text-transparent">
                    Launchpad AI
                  </span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center p-6">
            <ResultRadarChart data={scores.sections} />
          </div>
        </CardContent>
      </Card>

      <SectionBreakdown sections={scores.sections} />
    </motion.div>
  );
};

export default ProfileDisplay;
