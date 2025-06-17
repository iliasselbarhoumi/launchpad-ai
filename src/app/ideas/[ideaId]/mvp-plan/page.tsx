"use client";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { mockIdeas } from "@/data/ideas";
import { Idea } from "@/app/components/ideas/IdeaCard";
import { Button } from "@/app/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Plan } from "@/components/ideas/MvpPlanResult";
import MvpPlanResult from "@/components/ideas/MvpPlanResult";
import GeneratingMvpPlan from "@/components/ideas/GeneratingMvpPlan";
import { useRouter } from "next/navigation";

// This would be a call to an AI service in a real app
const generateBusinessPlanForIdea = (idea: Idea): Promise<Plan> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const plan = {
        businessConcept: {
          elevatorPitch: `An AI-powered SaaS tool based on "${idea.title}" that automatically generates SEO-optimized product descriptions for e-commerce businesses, enhancing search engine visibility and saving time.`,
          problem: `E-commerce businesses often struggle to create unique, SEO-friendly product descriptions for ideas like "${idea.description}", leading to poor search engine rankings and reduced sales.`,
          solution: `An AI-driven platform that generates high-quality, SEO-optimized product descriptions, reducing manual effort and improving online visibility.`,
          targetAudience: "Small to medium-sized online retailers.",
          uniqueValueProposition: `Automated, high-quality, SEO-optimized product descriptions tailored to individual products, enhancing search visibility and sales.`,
        },
        marketIntelligence: {
          marketSize:
            "The global e-commerce market is projected to reach $6.3 trillion by 2024, indicating a vast potential customer base for tools that enhance online sales.",
          marketData: [
            { name: "TAM", value: 6300, fill: "hsl(var(--primary) / 0.6)" },
            { name: "SAM", value: 1500, fill: "hsl(var(--primary) / 0.4)" },
            { name: "SOM", value: 50, fill: "hsl(var(--primary) / 0.2)" },
          ],
          trends: [
            "Increasing adoption of AI in content creation for e-commerce.",
            "Growing demand for personalization in online shopping.",
            "Shift towards direct-to-consumer (DTC) models.",
          ],
          competitors: [
            {
              name: "Jasper AI",
              strengths: "Established brand, wide range of templates.",
              weaknesses: "Can be expensive, less specialized in e-commerce.",
              gap: "Opportunity for a focused, affordable solution for online stores.",
            },
            {
              name: "Copy.ai",
              strengths: "User-friendly interface, good for short-form copy.",
              weaknesses: "SEO features are not as advanced.",
              gap: "Provide superior SEO optimization features.",
            },
          ],
        },
        productStrategy: {
          coreFeatures: [
            {
              name: "AI-Powered Description Generation",
              description:
                "Automatically generates SEO-optimized product descriptions based on product details.",
              priority: "High",
              aiPowered: true,
            },
            {
              name: "SEO Analysis",
              description:
                "Evaluates and suggests improvements for product descriptions to enhance search engine visibility.",
              priority: "High",
              aiPowered: true,
            },
            {
              name: "Bulk Processing",
              description:
                "Allows users to generate descriptions for multiple products simultaneously.",
              priority: "Medium",
              aiPowered: true,
            },
          ],
          futureFeatures: [
            {
              name: "Multilingual Support",
              description:
                "Generate product descriptions in multiple languages to cater to a global audience.",
              priority: "Medium",
              aiPowered: true,
            },
            {
              name: "E-commerce Platform Integration",
              description:
                "Seamless integration with major e-commerce platforms like Shopify and WooCommerce.",
              priority: "High",
              aiPowered: false,
            },
          ],
          mvpScope:
            "Develop a web-based application that allows users to input product details and receive AI-generated, SEO-optimized product descriptions.",
        },
        goToMarket: {
          strategy:
            "Leverage online marketing channels, partnerships with e-commerce platforms, and content marketing to reach target customers.",
          channels: [
            "Content marketing (blogs, SEO)",
            "Social media advertising",
            "Partnerships with e-commerce platforms",
          ],
          initialTractionMetric:
            "Achieve 1,000 registered users within the first three months.",
        },
        financials: {
          model:
            "Subscription-based SaaS model with tiered pricing based on usage (e.g., Free, Basic, Pro).",
          monthlyBurn: 1500,
          risks: [
            {
              risk: "Limited initial capital",
              mitigation:
                "Focus on lean development and marketing strategies, leveraging free and low-cost tools.",
            },
            {
              risk: "Competition from established players",
              mitigation:
                "Differentiate by focusing on affordability and user-friendliness for small to medium-sized businesses.",
            },
          ],
        },
        evaluation: {
          score: 7.5,
          summary: `The idea for ${idea.title} has strong potential in a growing market. Success will depend on effective differentiation and execution of the go-to-market strategy.`,
          strategicOptionalities: [
            "Expand into other forms of e-commerce content (e.g., ad copy, email campaigns).",
            "Develop a B2B API for larger enterprises to integrate into their systems.",
          ],
        },
      };
      resolve(plan);
    }, 4000); // Simulate a longer generation time
  });
};

const MvpPlanPage = () => {
  const { ideaId } = useParams<{ ideaId: string }>();
  const router = useRouter();
  const [idea, setIdea] = useState<Idea | null>(null);
  const [isGenerating, setIsGenerating] = useState(true);
  const [progress, setProgress] = useState(0);
  const [generatedPlan, setGeneratedPlan] = useState<Plan | null>(null);

  useEffect(() => {
    const foundIdea = mockIdeas.find((i) => i.id.toString() === ideaId);
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
          return prev + Math.floor(Math.random() * 10) + 2;
        });
      }, 400);

      generateBusinessPlanForIdea(idea).then((plan) => {
        setGeneratedPlan(plan);
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
            <GeneratingMvpPlan key="generating" progress={progress} />
          ) : idea && generatedPlan ? (
            <MvpPlanResult key="result" idea={idea} plan={generatedPlan} />
          ) : null}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default MvpPlanPage;
