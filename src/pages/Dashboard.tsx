import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  Check,
  User,
  Lightbulb,
  ClipboardCheck,
  ChevronRight,
} from "lucide-react";
import { useJourney } from "@/hooks/use-journey";
import { useAuth } from "@/hooks/use-auth";
import { useUser } from "@clerk/clerk-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const { userMock } = useAuth();
  const { user } = useUser();

  const {
    getJourneyProgress,
    assessmentResults,
    generatedIdeas,
    selectedIdea,
    mvpPlan,
  } = useJourney();

  const journeyProgress = getJourneyProgress();

  const journeySteps = [
    {
      title: "Assessment Complete",
      description: "Discover your entrepreneurial DNA",
      completed: !!assessmentResults,
      action: () => navigate("/result"),
      icon: Check,
      color: "bg-green-500",
    },
    {
      title: "Build Profile",
      description: "Define your interests and resources",
      completed: true,
      action: () => navigate("/build-profile"),
      icon: User,
      color: "bg-blue-500",
    },
    {
      title: "Generate Ideas",
      description: "AI-powered Micro-SaaS concepts",
      completed: generatedIdeas.length > 0,
      action: () => navigate("/ideas/list"),
      icon: Lightbulb,
      color: "bg-purple-500",
    },
    {
      title: "Plan MVP",
      description: "Ready-to-build roadmap",
      completed: !!mvpPlan,
      action: () => {}, // No action yet
      icon: ClipboardCheck,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="max-w-6xl mx-auto p-4 pt-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12 hover-lift">
                <AvatarImage src={user?.imageUrl} alt={user?.fullName || ""} />
                <AvatarFallback className="bg-gradient-to-r from-launchpad-purple to-launchpad-purple-light text-white font-semibold">
                  {user?.fullName}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl md:text-3xl font-display font-bold">
                  Welcome back, {user?.firstName || "Entrepreneur"}!
                </h1>
                <p className="text-slate-600">
                  Continue your journey to entrepreneurial success
                </p>
              </div>
            </div>
          </div>

          <Card className="shadow-sm hover-lift">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-display">
                  Your Journey Progress
                </CardTitle>
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20"
                >
                  {journeyProgress}% Complete
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Progress
                value={journeyProgress}
                className="h-2 [&>div]:bg-gradient-to-r [&>div]:from-launchpad-purple [&>div]:to-launchpad-purple-light"
              />
              <p className="text-slate-600 text-sm mt-2">
                {journeyProgress === 100
                  ? "🎉 Congratulations! You've completed your entrepreneurial journey setup."
                  : "Complete all steps to unlock your full entrepreneurial potential."}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`hover-lift cursor-pointer transition-all duration-500 group h-full flex flex-col
                ${
                  step.completed
                    ? "ring-2 ring-green-500/30"
                    : "ring-1 ring-slate-200"
                }`}
                onClick={step.action}
              >
                <CardContent className="p-6 text-center flex-grow flex flex-col justify-center">
                  <div
                    className={`
                    w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center transition-all duration-300
                    ${
                      step.completed
                        ? "bg-gradient-to-br from-green-500 to-green-400"
                        : step.color
                    } group-hover:scale-110
                  `}
                  >
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm flex-grow">
                    {step.description}
                  </p>
                  {step.completed && (
                    <Badge
                      variant="outline"
                      className="mt-3 bg-green-100 text-green-800 border-green-200 self-center"
                    >
                      ✓ Complete
                    </Badge>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-xl font-display font-semibold mb-4">
            Quick Actions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card
              className="hover-lift cursor-pointer group"
              onClick={() => navigate("/result")}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-semibold mb-2">
                      View Assessment Results
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Review your entrepreneurial profile
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-slate-400 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>

            <Card
              className="hover-lift cursor-pointer group"
              onClick={() => {
                navigate("/ideas/list");
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-semibold mb-2">
                      Generate Ideas
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Get personalized Micro-SaaS concepts
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-slate-400 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
