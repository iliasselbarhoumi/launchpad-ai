"use client";
import React, { useMemo } from "react";
import { calculateScores } from "@/lib/assessmentUtils";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import ResultDisplay from "@/app/components/result/ResultDisplay";
import Link from "next/link";

const Result = () => {
  const assessmentData = null; //TODO use Redux for state management

  const scores = useMemo(() => {
    if (!assessmentData) return null;
    return calculateScores(assessmentData);
  }, [assessmentData]);

  if (!scores) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Card className="text-center p-4">
            <CardHeader>
              <CardTitle>No Assessment Data Found</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                Please complete the assessment to view your profile.
              </p>
              <Button asChild>
                <Link href="/assessment">Take Assessment</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="max-w-4xl mx-auto p-4 pt-8">
        <ResultDisplay scores={scores} />
      </div>
    </div>
  );
};

export default Result;
