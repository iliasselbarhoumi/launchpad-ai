import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { Idea } from "./IdeaCard";
import LovableIcon from "../icons/LovableIcon";

interface MvpPromptResultProps {
  prompt: string;
  idea: Idea;
}

const MvpPromptResult: React.FC<MvpPromptResultProps> = ({ prompt, idea }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    toast.success("Prompt copied to clipboard!");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-3xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 font-display text-2xl">
            <span className="w-8 h-8 rounded-md flex items-center justify-center bg-gradient-to-br from-launchpad-purple/10 to-launchpad-purple-light/10 text-launchpad-purple flex-shrink-0">
              <LovableIcon className="w-5 h-5" />
            </span>
            <span>MVP Prompt for: {idea.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative p-4 bg-slate-50 rounded-lg border border-slate-200">
            <pre className="text-sm text-slate-700 whitespace-pre-wrap font-sans">
              <code>{prompt}</code>
            </pre>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2 p-6">
          <Button variant="secondary" onClick={handleCopy}>
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
            {copied ? "Copied!" : "Copy Prompt"}
          </Button>
          <a
            href="https://lovable.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              <LovableIcon className="w-4 h-4" />
              Go to Lovable
            </Button>
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default MvpPromptResult;
