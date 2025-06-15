import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AnswerButton from './AnswerButton';
import { Question, scaleLabels } from './questions';

interface QuestionCardProps {
  question: Question;
  answers: Record<string, number>;
  onAnswer: (value: number) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, answers, onAnswer }) => {
  return (
    <Card className="w-full max-w-2xl mx-auto border-gray-200 shadow-xl shadow-slate-200/50 rounded-2xl">
      <CardHeader className="text-center pb-4">
        <Badge variant="outline" className="mx-auto mb-3 border-launchpad-purple/30 text-launchpad-purple bg-launchpad-purple/5 font-semibold">
          {question.category}
        </Badge>
        <CardTitle className="text-xl md:text-2xl font-display font-bold leading-relaxed text-slate-800">
          {question.text}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pt-2">
        <div className="grid gap-3 mt-4">
          {scaleLabels.map((label, index) => {
            const value = index + 1;
            return (
              <AnswerButton
                key={value}
                label={label}
                value={value}
                isSelected={answers[question.id] === value}
                onClick={onAnswer}
              />
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
