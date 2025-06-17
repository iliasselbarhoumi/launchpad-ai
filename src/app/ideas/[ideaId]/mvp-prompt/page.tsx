"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { mockIdeas } from "@/data/ideas";
import { Idea } from "@/app/components/ideas/IdeaCard";
import { Button } from "@/app/components/ui/button";
import GeneratingMvpPrompt from "@/app/components/ideas/GeneratingMvpPrompt";
import MvpPromptResult from "@/app/components/ideas/MvpPromptResult";
import { useRouter, useParams } from "next/navigation";

const generatePromptForIdea = (idea: Idea): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const prompt = `
Generate an MVP (Minimum Viable Product) for the following idea: "${
        idea.title
      }".

Description: ${idea.description}

Core features to include:
1.  **User Authentication**: Allow users to sign up and log in.
2.  **Core Functionality**: Implement the main feature described above. For "${
        idea.title
      }", this would be the ability to ${
        idea.description.toLowerCase().split(" ")[0]
      } ${idea.description.toLowerCase().split(" ")[1]}.
3.  **Simple Dashboard**: A basic interface where users can interact with the core functionality.
4.  **Settings Page**: Allow users to manage their account details.

Technology stack suggestions:
-   Frontend: React with Tailwind CSS
-   Backend: Node.js with Express or a BaaS like Supabase/Firebase
-   Database: PostgreSQL or Firestore

The output should be a clear, step-by-step plan that a developer could follow to build this MVP.
            `.trim();
      resolve(prompt);
    }, 3000);
  });
};

const MvpPromptPage = () => {
  const { ideaId } = useParams<{ ideaId: string }>();
  const router = useRouter();
  const [idea, setIdea] = useState<Idea | null>(null);
  const [isGenerating, setIsGenerating] = useState(true);
  const [progress, setProgress] = useState(0);
  const [generatedPrompt, setGeneratedPrompt] = useState<string>("");

  useEffect(() => {
    const allIdeas = [...mockIdeas];
    const foundIdea = allIdeas.find((i) => i.id.toString() === ideaId);
    console.log(foundIdea);
    if (foundIdea) {
      setIdea(foundIdea);
    } else {
      router.push("/ideas/list");
    }
  }, [ideaId, router]);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isGenerating && idea) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(interval);
            return prev;
          }
          return prev + Math.floor(Math.random() * 15) + 5;
        });
      }, 400);

      generatePromptForIdea(idea).then((prompt) => {
        setGeneratedPrompt(prompt);
        setProgress(100);
        setTimeout(() => setIsGenerating(false), 500);
      });
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isGenerating, idea]);

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-7xl mx-auto p-4 sm:p-6 pt-28">
        <div className="mb-6">
          <Button variant="ghost" onClick={() => router.push("/ideas/list")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Ideas
          </Button>
        </div>
        <AnimatePresence mode="wait">
          {isGenerating ? (
            <GeneratingMvpPrompt key="generating" progress={progress} />
          ) : idea && generatedPrompt ? (
            <MvpPromptResult
              key="result"
              idea={idea}
              prompt={generatedPrompt}
            />
          ) : null}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default MvpPromptPage;
