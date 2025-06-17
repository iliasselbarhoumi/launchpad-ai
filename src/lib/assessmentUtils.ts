import { questions, Question } from "@/app/components/assessment/questions";

export interface ScoreCategory {
  name: string;
  score: number;
  maxScore: number;
  percentage: number;
}

export interface ScoreSection {
  name: string;
  score: number;
  maxScore: number;
  percentage: number;
  categories: ScoreCategory[];
}

export interface AssessmentScores {
  totalScore: number;
  maxTotalScore: number;
  totalPercentage: number;
  sections: ScoreSection[];
}

export const calculateScores = (
  answers: Record<string, number>
): AssessmentScores => {
  const sections: Record<
    string,
    { questions: Question[]; categories: Record<string, Question[]> }
  > = {};

  // Group questions by section and category
  for (const question of questions) {
    if (!sections[question.section]) {
      sections[question.section] = { questions: [], categories: {} };
    }
    sections[question.section].questions.push(question);

    if (!sections[question.section].categories[question.category]) {
      sections[question.section].categories[question.category] = [];
    }
    sections[question.section].categories[question.category].push(question);
  }

  let totalScore = 0;
  const maxTotalScore = questions.length * 4;

  const calculatedSections: ScoreSection[] = Object.entries(sections).map(
    ([sectionName, sectionData]) => {
      let sectionScore = 0;
      const sectionMaxScore = sectionData.questions.length * 4;

      const calculatedCategories: ScoreCategory[] = Object.entries(
        sectionData.categories
      ).map(([categoryName, categoryQuestions]) => {
        const categoryMaxScore = categoryQuestions.length * 4;
        const categoryScore = categoryQuestions.reduce(
          (sum, q) => sum + (answers[q.id] || 0),
          0
        );
        sectionScore += categoryScore;

        return {
          name: categoryName,
          score: categoryScore,
          maxScore: categoryMaxScore,
          percentage: Math.round((categoryScore / categoryMaxScore) * 100),
        };
      });

      totalScore += sectionScore;

      return {
        name: sectionName,
        score: sectionScore,
        maxScore: sectionMaxScore,
        percentage: Math.round((sectionScore / sectionMaxScore) * 100),
        categories: calculatedCategories,
      };
    }
  );

  return {
    totalScore,
    maxTotalScore,
    totalPercentage: Math.round((totalScore / maxTotalScore) * 100),
    sections: calculatedSections,
  };
};

export const getArchetype = (
  percentage: number
): { title: string; description: string } => {
  if (percentage >= 80) {
    return {
      title: "High Potential Entrepreneur",
      description:
        "You possess many of the core traits and a solid foundation for entrepreneurial success. Launcherpad will help you channel your strengths into actionable plans.",
    };
  }
  if (percentage >= 55) {
    return {
      title: "Aspiring Entrepreneur",
      description:
        "You have strong potential and a clear desire to build. Launcherpad will help you identify and develop key areas to maximize your chances of success.",
    };
  }
  return {
    title: "Explorer / Growth Seeker",
    description:
      "You're clearly curious about entrepreneurship! Your results suggest some areas where focused learning and mindset shifts could significantly boost your readiness. Launcherpad will guide you through these foundational steps.",
  };
};
