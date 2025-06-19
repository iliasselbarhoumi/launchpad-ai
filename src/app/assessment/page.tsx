"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Question, questions } from "../components/assessment/questions";
import ProgressBar from "../components/assessment/ProgressBar";
import QuestionCard from "../components/assessment/QuestionCard";
import AssessmentStart from "../components/assessment/AssessmentStart";
import AssessmentCompleted from "../components/assessment/AssessmentCompleted";
import SectionTransition from "../components/assessment/SectionTransition";
import { Button } from "../components/ui/button";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

type AssessmentStatus =
  | "start"
  | "assessing"
  | "sectionTransition"
  | "completed";

const Assessment = () => {
  const router = useRouter();
  const { user } = useUser();
  const [status, setStatus] = useState<AssessmentStatus>("start");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [questions, setQuestions] = useState<Question[]>([]);
  const [direction, setDirection] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [assessmentId, setAssessmentId] = useState<string | null>(null);
  const [assessment, setAssessment] = useState(null);

  useEffect(() => {
    getQuestions();
    getAssessment();
  }, []);

  console.log("assessment", assessment);
  console.log("assessmentId", assessmentId);

  const getAssessment = async () => {
    setLoading(true);
    setError(null);
    fetch(`/api/assessment?user_id=${user.id}`)
      .then(async (res) => {
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error || "Failed to fetch questions");
        }
        return res.json();
      })
      .then((data) => {
        console.log("data", data);
        setAssessment(data.assessment[0]);
        setAssessmentId(data.assessment[0].id);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  const getQuestions = async () => {
    setLoading(true);
    setError(null);
    fetch(`/api/questions`)
      .then(async (res) => {
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error || "Failed to fetch questions");
        }
        return res.json();
      })
      .then((data) => {
        setQuestions(data.questions);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  const startAssessment = async () => {
    const res = await fetch("/api/assessment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: user.id }),
    });
    const data = await res.json();
    if (data.success) {
      setAssessmentId(data.assessmentId);
      setStatus("sectionTransition");
    }
  };

  const handleStart = () => {
    startAssessment();
  };

  const handleAnswer = (value: number) => {
    setDirection(1);
    setAnswers((prev) => ({
      ...prev,
      [questions[currentQuestionIndex].id]: value,
    }));

    setTimeout(() => {
      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex >= questions.length) {
        setStatus("completed");
        setTimeout(() => {
          router.push("/result");
        }, 2000);
      } else {
        const currentSection = questions[currentQuestionIndex].section;
        const nextSection = questions[nextQuestionIndex].section;

        if (currentSection !== nextSection) {
          setStatus("sectionTransition");
        }
        setCurrentQuestionIndex(nextQuestionIndex);
      }
    }, 300);
  };

  const handleContinueSection = () => {
    setStatus("assessing");
  };

  const goToPrevious = () => {
    if (currentQuestionIndex > 0) {
      if (status === "sectionTransition") {
        setStatus("assessing");
      }
      setDirection(-1);
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  const renderAssessmentContent = () => {
    if (status === "assessing") {
      return (
        <motion.div
          key={currentQuestionIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        >
          <QuestionCard
            question={questions[currentQuestionIndex]}
            answers={answers}
            onAnswer={handleAnswer}
          />
        </motion.div>
      );
    }

    if (status === "sectionTransition") {
      return (
        <SectionTransition
          completedSection={
            currentQuestionIndex > 0
              ? questions[currentQuestionIndex - 1].section
              : undefined
          }
          nextSection={questions[currentQuestionIndex].section}
          onContinue={handleContinueSection}
        />
      );
    }

    return null;
  };

  console.log(answers);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {status === "start" && (
            <motion.div
              key="start"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <AssessmentStart isReady={!loading} onStart={handleStart} />
            </motion.div>
          )}

          {status === "completed" && (
            <motion.div
              key="completed"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <AssessmentCompleted />
            </motion.div>
          )}

          {(status === "assessing" || status === "sectionTransition") && (
            <motion.div
              key="assessment"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-800">
                  Your{" "}
                  <span className="gradient-text">Entrepreneurial DNA</span>
                </h1>
              </div>

              <ProgressBar
                current={currentQuestionIndex}
                total={questions.length}
              />

              <div className="mt-8">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  {renderAssessmentContent()}
                </AnimatePresence>
              </div>

              <div className="flex justify-between items-center mt-8">
                <Button
                  variant="ghost"
                  onClick={goToPrevious}
                  disabled={currentQuestionIndex === 0}
                  className="hover-lift press-effect disabled:opacity-50 text-slate-600"
                >
                  <ArrowUp className="mr-2 h-4 w-4 rotate-[-90deg]" />
                  Previous
                </Button>
                <div />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Assessment;
