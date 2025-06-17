import { useState } from "react";
import type { Idea } from "@/app/components/ideas/IdeaCard";
import { mockIdeas } from "@/data/ideas";

export const useJourney = () => {
  const assessmentResults = true;
  const generatedIdeas: Idea[] = [];
  const selectedIdea = null;
  const mvpPlan = null;

  // Mock profile data until it's properly implemented
  const profileData = {
    coreInterestsAndExpertise: [
      "Health & Wellness",
      "Personalization",
      "Automation",
    ],
    problemDomains: ["Marketing & Sales", "Financial Management"],
    targetAudience: ["B2B", "Freelancers"],
  };

  const getJourneyProgress = () => {
    let completedSteps = 0;
    const totalSteps = 4;
    if (assessmentResults) completedSteps++;
    // Profile creation is step 2 - not implemented
    if (generatedIdeas.length > 0) completedSteps++;
    if (mvpPlan) completedSteps++;

    return (completedSteps / totalSteps) * 100;
  };

  return {
    getJourneyProgress,
    assessmentResults,
    generatedIdeas,
    selectedIdea,
    mvpPlan,
    profileData,
  };
};
