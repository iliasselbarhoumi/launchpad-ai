import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Edit,
  Lightbulb,
  Heart,
  Bot,
  Megaphone,
  Landmark,
  Briefcase,
  User,
  Palette,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import IdeaCard, { Idea } from "@/components/ideas/IdeaCard";
import ViewSwitcher from "@/components/ideas/ViewSwitcher";
import { mockIdeas } from "@/data/ideas";
import { useJourney } from "@/hooks/use-journey";
import GeneratingIdea from "@/components/ideas/GeneratingIdeas";

const chipConfig: {
  [key: string]: { icon: React.ReactNode; color: string; emoji: string };
} = {
  "Health & Wellness": {
    icon: <Heart size={14} />,
    color: "bg-rose-50 text-rose-600 border-rose-200/80",
    emoji: "❤️",
  },
  Personalization: {
    icon: <Palette size={14} />,
    color: "bg-sky-50 text-sky-600 border-sky-200/80",
    emoji: "🎨",
  },
  Automation: {
    icon: <Bot size={14} />,
    color: "bg-purple-50 text-purple-600 border-purple-200/80",
    emoji: "🤖",
  },
  "Marketing & Sales": {
    icon: <Megaphone size={14} />,
    color: "bg-amber-50 text-amber-600 border-amber-200/80",
    emoji: "📣",
  },
  "Financial Management": {
    icon: <Landmark size={14} />,
    color: "bg-teal-50 text-teal-600 border-teal-200/80",
    emoji: "🏦",
  },
  B2B: {
    icon: <Briefcase size={14} />,
    color: "bg-slate-100 text-slate-600 border-slate-200/80",
    emoji: "🏢",
  },
  Freelancers: {
    icon: <User size={14} />,
    color: "bg-indigo-50 text-indigo-600 border-indigo-200/80",
    emoji: "👤",
  },
  default: {
    icon: <Lightbulb size={14} />,
    color: "bg-gray-100 text-gray-600 border-gray-200/80",
    emoji: "💡",
  },
};

const GenerateIdeas = () => {
  const [view, setView] = useState<"grid" | "list">("grid");
  const { profileData, generatedIdeas } = useJourney();
  const navigate = useNavigate();

  const [ideas, setIdeas] = useState<Idea[]>(
    generatedIdeas.length > 0 ? generatedIdeas : []
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isGenerating) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(interval);
            return prev;
          }
          return prev + Math.floor(Math.random() * 15) + 5;
        });
      }, 400);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isGenerating]);

  const handleGenerateIdea = () => {
    if (isGenerating) return;

    setIsGenerating(true);
    setProgress(0);

    setTimeout(() => {
      setProgress(100);
      const newIdea: Idea = mockIdeas[ideas.length % mockIdeas.length];
      setIdeas((prev) => [{ ...newIdea }, ...prev]);

      setTimeout(() => {
        setIsGenerating(false);
      }, 500);
    }, 3000);
  };

  const profileChips = Array.from(
    new Set([
      ...(profileData?.coreInterestsAndExpertise || []),
      ...(profileData?.problemDomains?.filter((d) => d !== "Other") || []),
      ...(profileData?.targetAudience?.filter(
        (d) => d !== "Specific Demographics"
      ) || []),
    ])
  ).slice(0, 5);

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-7xl mx-auto p-4 sm:p-6 pt-28">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-4">
            Your Idea Launchpad
          </h1>
          <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-shrink-0 font-semibold text-slate-700 flex items-center gap-2">
              <span role="img" aria-label="settings">
                ⚙️
              </span>
              Profile Filters:
            </div>
            <div className="flex flex-wrap gap-2 flex-grow">
              {profileChips.length > 0 ? (
                profileChips.map((chip) => {
                  const config = chipConfig[chip] || chipConfig.default;
                  return (
                    <Badge
                      key={chip}
                      variant="outline"
                      className={cn(
                        "flex items-center gap-1.5 transition-all hover:shadow-md hover:-translate-y-px",
                        config.color
                      )}
                    >
                      {config.icon}
                      <span className="font-medium">{chip}</span>
                      <span className="hidden sm:inline-block ml-1">
                        {config.emoji}
                      </span>
                    </Badge>
                  );
                })
              ) : (
                <span className="text-sm text-slate-500">
                  No profile data found. Complete your profile for better ideas!
                </span>
              )}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/build-profile")}
              className="bg-white flex-shrink-0 press-effect"
            >
              <Edit />
              Edit Profile
            </Button>
          </div>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <p className="text-slate-500 text-sm w-full text-left">
            {isGenerating
              ? "Please wait while we generate your idea..."
              : ideas.length > 0
              ? `Showing ${ideas.length} generated ideas.`
              : "Let's generate your first idea!"}
          </p>
          <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto justify-end">
            <ViewSwitcher view={view} setView={setView} />
            <Button
              onClick={handleGenerateIdea}
              disabled={isGenerating}
              className="press-effect"
            >
              <Lightbulb />
              Generate New Idea
            </Button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {isGenerating ? (
            <motion.div key="generating-state">
              <GeneratingIdea progress={progress} />
            </motion.div>
          ) : ideas.length > 0 ? (
            <motion.div
              key="ideas-list"
              layout
              className={cn(
                "grid gap-6 transition-all duration-500",
                view === "grid" ? "md:grid-cols-2" : "grid-cols-1"
              )}
            >
              {ideas.map((idea, index) => (
                <IdeaCard key={idea.id} idea={idea} view={view} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 bg-white rounded-xl border border-slate-200/80"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center bg-gradient-to-br from-launchpad-purple/10 to-launchpad-purple-light/10">
                <Lightbulb
                  className="w-10 h-10 text-launchpad-purple"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-xl font-bold font-display text-slate-800">
                Ready to find your big idea?
              </h3>
              <p className="text-slate-500 mt-2 mb-6 max-w-md mx-auto">
                Click the "Generate Idea" button to get your first AI-powered
                Micro-SaaS concept tailored to your profile.
              </p>
              <Button
                onClick={handleGenerateIdea}
                size="lg"
                className="press-effect"
                disabled={isGenerating}
              >
                <Lightbulb />
                Generate Your First Idea
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default GenerateIdeas;
