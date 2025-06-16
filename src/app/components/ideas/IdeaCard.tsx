import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/app/components/ui/badge";
import { Card, CardTitle } from "@/app/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/app/components/ui/button";
import { Zap } from "lucide-react";
import { useRouter } from "next/router";
import LovableIcon from "../icons/LovableIcon";

export interface Idea {
  id: number;
  title: string;
  description: string;
  tags: string[];
}

interface IdeaCardProps {
  idea: Idea;
  view: "grid" | "list";
  index: number;
}

const IdeaCard: React.FC<IdeaCardProps> = ({ idea, view, index }) => {
  const isGridView = view === "grid";
  const router = useRouter();

  const handleMvpPromptClick = () => {
    router.push(`/ideas/${idea.id}/mvp-prompt`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      layout
    >
      <Card
        className={cn(
          "h-full hover-lift transition-all duration-300 group overflow-hidden",
          isGridView ? "flex flex-col" : "flex flex-col sm:flex-row"
        )}
      >
        <div
          className={cn(
            "p-0 relative",
            isGridView ? "h-32" : "sm:w-48 sm:h-auto flex-shrink-0"
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-launchpad-purple/80 to-launchpad-purple-light/80 transition-all duration-500 group-hover:scale-110" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://source.unsplash.com/random/400x300?abstract&${idea.id}')`,
            }}
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="flex flex-col flex-grow p-4">
          <CardTitle className="text-lg font-display font-semibold mb-2 group-hover:text-launchpad-purple transition-colors">
            {idea.title}
          </CardTitle>
          <p className="text-slate-600 text-sm flex-grow mb-3">
            {idea.description}
          </p>
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2">
              {idea.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="font-normal">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-slate-200/80 flex items-center justify-end gap-2">
              <Button
                variant="outline"
                size="sm"
                className="press-effect"
                onClick={handleMvpPromptClick}
              >
                <LovableIcon />
                MVP Prompt
              </Button>
              <Button size="sm" className="press-effect">
                <Zap className="h-4 w-4" />
                Generate Business Plan
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default IdeaCard;
