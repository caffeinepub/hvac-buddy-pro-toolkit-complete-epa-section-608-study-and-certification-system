import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle2, RotateCcw, XCircle } from "lucide-react";
import { useState } from "react";
import type { Quiz } from "../types/local";

interface QuizViewerProps {
  quiz: Quiz;
}

export default function QuizViewer({ quiz }: QuizViewerProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  if (quiz.questions.length === 0) {
    return (
      <p className="text-center text-muted-foreground">
        No quiz questions available.
      </p>
    );
  }

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answer;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
  };

  const calculateScore = () => {
    let correct = 0;
    quiz.questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const currentQ = quiz.questions[currentQuestion];
  const isAnswered = selectedAnswers[currentQuestion] !== undefined;
  const allAnswered =
    selectedAnswers.length === quiz.questions.length &&
    selectedAnswers.every((a) => a);

  if (showResults) {
    const score = calculateScore();
    const percentage = (score / quiz.questions.length) * 100;

    return (
      <div className="space-y-4">
        <Alert
          className={
            percentage >= 70 ? "border-green-500" : "border-yellow-500"
          }
        >
          <AlertDescription>
            <div className="text-center">
              <p className="mb-2 text-2xl font-bold">
                {score} / {quiz.questions.length}
              </p>
              <p className="text-lg">Score: {percentage.toFixed(0)}%</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {percentage >= 90
                  ? "Excellent! You have mastered this material."
                  : percentage >= 70
                    ? "Good job! Review the questions you missed."
                    : "Keep studying. Review the material and try again."}
              </p>
            </div>
          </AlertDescription>
        </Alert>

        <div className="space-y-3">
          {quiz.questions.map((q, idx) => {
            const userAnswer = selectedAnswers[idx];
            const isCorrect = userAnswer === q.correctAnswer;

            return (
              <Card
                // biome-ignore lint/suspicious/noArrayIndexKey: questions have no stable ID
                key={`question-${idx}`}
                className={isCorrect ? "border-green-500" : "border-red-500"}
              >
                <CardContent className="p-4">
                  <div className="mb-2 flex items-start gap-2">
                    {isCorrect ? (
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    ) : (
                      <XCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
                    )}
                    <div className="flex-1">
                      <p className="font-medium">
                        {idx + 1}. {q.question}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Your answer: {userAnswer}
                      </p>
                      {!isCorrect && (
                        <p className="text-sm text-green-600">
                          Correct answer: {q.correctAnswer}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Button onClick={handleReset} className="w-full">
          <RotateCcw className="mr-2 h-4 w-4" />
          Retake Quiz
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="text-center text-sm text-muted-foreground">
        Question {currentQuestion + 1} of {quiz.questions.length}
      </div>

      <Card>
        <CardContent className="p-6">
          <h3 className="mb-4 text-lg font-semibold">{currentQ.question}</h3>
          <RadioGroup
            value={selectedAnswers[currentQuestion] || ""}
            onValueChange={handleAnswerSelect}
          >
            <div className="space-y-3">
              {currentQ.options.map((option, idx) => (
                <div
                  // biome-ignore lint/suspicious/noArrayIndexKey: options are static and order-stable
                  key={`option-${idx}`}
                  className="flex items-center space-x-2"
                >
                  <RadioGroupItem value={option} id={`option-${idx}`} />
                  <Label
                    htmlFor={`option-${idx}`}
                    className="flex-1 cursor-pointer"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
        >
          Previous
        </Button>
        <div className="text-sm text-muted-foreground">
          {selectedAnswers.filter((a) => a).length} / {quiz.questions.length}{" "}
          answered
        </div>
        {currentQuestion < quiz.questions.length - 1 ? (
          <Button onClick={handleNext} disabled={!isAnswered}>
            Next
          </Button>
        ) : (
          <Button onClick={handleSubmit} disabled={!allAnswered}>
            Submit Quiz
          </Button>
        )}
      </div>
    </div>
  );
}
