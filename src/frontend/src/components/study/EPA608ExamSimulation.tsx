import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  AlertTriangle,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  TrendingUp,
  XCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  getRandomQuestions,
  shuffleAnswerOptions,
} from "../../data/epaQuestionBank";
import {
  type EpaExamQuestion,
  EpaSection,
  QuestionDifficulty,
} from "../../types/local";
import type { StudyMode } from "../../types/study";

interface EPA608ExamSimulationProps {
  certType: "core" | "type1" | "type2" | "type3" | "universal";
  studyMode: StudyMode;
}

export default function EPA608ExamSimulation({
  certType,
  studyMode: _studyMode,
}: EPA608ExamSimulationProps) {
  const [examStarted, setExamStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [examQuestions, setExamQuestions] = useState<EpaExamQuestion[]>([]);
  const [allowBacktracking, setAllowBacktracking] = useState(true);
  const [showExplanations, setShowExplanations] = useState(false);

  const getExamConfig = () => {
    const configs = {
      core: { duration: 60, questionCount: 30, section: EpaSection.core },
      type1: { duration: 60, questionCount: 25, section: EpaSection.typeI },
      type2: { duration: 60, questionCount: 25, section: EpaSection.typeII },
      type3: { duration: 60, questionCount: 25, section: EpaSection.typeIII },
      universal: {
        duration: 90,
        questionCount: 30,
        section: EpaSection.universal,
      },
    };
    return configs[certType];
  };

  const config = getExamConfig();

  useEffect(() => {
    if (examStarted && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            handleSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [examStarted, timeRemaining]);

  const startExam = () => {
    // Load questions from the question bank
    let questions: EpaExamQuestion[] = [];

    if (certType === "universal") {
      // Universal exam: Mix questions from all sections proportionally
      const coreQuestions = getRandomQuestions(EpaSection.core, 10);
      const type1Questions = getRandomQuestions(EpaSection.typeI, 7);
      const type2Questions = getRandomQuestions(EpaSection.typeII, 7);
      const type3Questions = getRandomQuestions(EpaSection.typeIII, 6);
      questions = [
        ...coreQuestions,
        ...type1Questions,
        ...type2Questions,
        ...type3Questions,
      ];
    } else {
      // Single section exam
      questions = getRandomQuestions(config.section, config.questionCount);
    }

    // Shuffle answer options for each question
    const shuffledQuestions = questions.map((q) => shuffleAnswerOptions(q));

    setExamQuestions(shuffledQuestions);
    setTimeRemaining(config.duration * 60);
    setExamStarted(true);
    setCurrentQuestion(0);
    setSelectedAnswers(new Array(shuffledQuestions.length).fill(""));
    setShowResults(false);
    setShowExplanations(false);
  };

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answer;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < examQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (allowBacktracking && currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
    setExamStarted(false);
  };

  const calculateScore = () => {
    let correct = 0;
    examQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  if (!examStarted && !showResults) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            {getCertTitle(certType)} - Exam Simulation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-orange-500/50 bg-orange-500/10">
            <AlertTriangle className="h-4 w-4 text-orange-600" />
            <AlertDescription className="text-orange-900 dark:text-orange-100">
              <strong>Authentic Exam Experience:</strong> This simulation uses
              original, non-copyrighted questions that mimic the real EPA 608
              certification exam. No hints or explanations will be provided
              during the test. You must score 70% or higher to pass.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <Clock className="h-8 w-8 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Time Limit
                      </p>
                      <p className="text-2xl font-bold">
                        {config.duration} minutes
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <Award className="h-8 w-8 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Questions</p>
                      <p className="text-2xl font-bold">
                        {config.questionCount}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Exam Rules:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>
                  Questions are randomized from a comprehensive question pool
                </li>
                <li>Answer options are shuffled for each exam attempt</li>
                <li>One question displayed per screen</li>
                <li>No hints or explanations during the exam</li>
                <li>Timer starts immediately when you begin</li>
                <li>Exam auto-submits when time expires</li>
                <li>70% or higher is required to pass</li>
                <li>Detailed explanations provided after submission</li>
              </ul>
            </div>

            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-1">
                <p className="font-medium">Allow Backtracking</p>
                <p className="text-sm text-muted-foreground">
                  {allowBacktracking
                    ? "You can review previous questions"
                    : "Cannot return to previous questions"}
                </p>
              </div>
              <Switch
                checked={allowBacktracking}
                onCheckedChange={setAllowBacktracking}
              />
            </div>

            <Button onClick={startExam} className="w-full" size="lg">
              Start Exam Simulation
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const percentage = (score / examQuestions.length) * 100;
    const passed = percentage >= 70;

    // Calculate section breakdown
    const sectionBreakdown: Record<string, { correct: number; total: number }> =
      {};
    examQuestions.forEach((q, idx) => {
      const sectionName = q.section;
      if (!sectionBreakdown[sectionName]) {
        sectionBreakdown[sectionName] = { correct: 0, total: 0 };
      }
      sectionBreakdown[sectionName].total++;
      if (selectedAnswers[idx] === q.correctAnswer) {
        sectionBreakdown[sectionName].correct++;
      }
    });

    return (
      <div className="space-y-6">
        <Card className={passed ? "border-green-500" : "border-red-500"}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award
                className={`h-6 w-6 ${passed ? "text-green-500" : "text-red-500"}`}
              />
              Exam Simulation Results
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <p className="mb-2 text-5xl font-bold">
                {score} / {examQuestions.length}
              </p>
              <p className="text-3xl font-semibold mb-4">
                {percentage.toFixed(1)}%
              </p>
              {passed ? (
                <div className="space-y-2">
                  <Badge className="text-lg px-4 py-2 bg-green-500">
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                    PASSED
                  </Badge>
                  <p className="text-lg text-green-600 dark:text-green-400">
                    Excellent! You're ready for the certification exam! 🎉
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  <Badge variant="destructive" className="text-lg px-4 py-2">
                    <XCircle className="mr-2 h-5 w-5" />
                    NOT PASSED
                  </Badge>
                  <p className="text-lg text-red-600 dark:text-red-400">
                    Review the content and try again. You need 70% to pass.
                  </p>
                </div>
              )}
            </div>

            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Section Score Breakdown
                </h3>
                <div className="space-y-3">
                  {Object.entries(sectionBreakdown).map(([section, data]) => {
                    const sectionPercentage = (data.correct / data.total) * 100;
                    return (
                      <div key={section} className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium capitalize">
                            {section}
                          </span>
                          <span className="font-semibold">
                            {data.correct}/{data.total} (
                            {sectionPercentage.toFixed(0)}%)
                          </span>
                        </div>
                        <Progress value={sectionPercentage} className="h-2" />
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-1">
                <p className="font-medium">Show Question Review</p>
                <p className="text-sm text-muted-foreground">
                  View detailed explanations for each question
                </p>
              </div>
              <Switch
                checked={showExplanations}
                onCheckedChange={setShowExplanations}
              />
            </div>

            {showExplanations && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Question-by-Question Review
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {examQuestions.map((q, idx) => {
                    const isCorrect = selectedAnswers[idx] === q.correctAnswer;
                    const userAnswer =
                      selectedAnswers[idx] || "No answer selected";

                    return (
                      <div
                        // biome-ignore lint/suspicious/noArrayIndexKey: exam questions have no stable ID
                        key={`result-${idx}`}
                        className="space-y-3"
                      >
                        <div className="flex items-start gap-3">
                          {isCorrect ? (
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                          )}
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-2 flex-wrap">
                              <Badge variant="outline">
                                Question {idx + 1}
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                {q.difficulty}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {q.topicCategory}
                              </Badge>
                            </div>
                            <p className="font-medium">{q.question}</p>

                            <div className="space-y-1 text-sm">
                              <p
                                className={
                                  isCorrect
                                    ? "text-green-600 dark:text-green-400"
                                    : "text-red-600 dark:text-red-400"
                                }
                              >
                                <strong>Your answer:</strong> {userAnswer}
                              </p>
                              {!isCorrect && (
                                <p className="text-green-600 dark:text-green-400">
                                  <strong>Correct answer:</strong>{" "}
                                  {q.correctAnswer}
                                </p>
                              )}
                            </div>

                            <div className="bg-muted/50 p-3 rounded-lg">
                              <p className="text-sm font-medium mb-1">
                                Explanation:
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {q.explanation}
                              </p>
                            </div>

                            <div className="text-xs text-muted-foreground">
                              <p>
                                <strong>Reference:</strong>{" "}
                                {q.regulatoryReference}
                              </p>
                            </div>
                          </div>
                        </div>
                        {idx < examQuestions.length - 1 && <Separator />}
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            )}

            <div className="flex gap-3">
              <Button onClick={startExam} className="flex-1">
                Retake Exam
              </Button>
              <Button
                variant="outline"
                onClick={() => window.history.back()}
                className="flex-1"
              >
                Back to Study
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQ = examQuestions[currentQuestion];
  const isAnswered =
    selectedAnswers[currentQuestion] !== undefined &&
    selectedAnswers[currentQuestion] !== "";
  const answeredCount = selectedAnswers.filter((a) => a && a !== "").length;

  return (
    <div className="space-y-6">
      <Card className="border-orange-500/20 bg-orange-500/5">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-orange-500" />
              <div>
                <p className="text-sm text-muted-foreground">Time Remaining</p>
                <p className="text-2xl font-bold">
                  {formatTime(timeRemaining)}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Progress</p>
              <p className="text-2xl font-bold">
                {answeredCount} / {examQuestions.length}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">
                Question {currentQuestion + 1} of {examQuestions.length}
              </CardTitle>
              <div className="flex items-center gap-2">
                <Badge variant="outline">{currentQ.difficulty}</Badge>
                <Badge variant="secondary" className="text-xs">
                  {currentQ.topicCategory}
                </Badge>
              </div>
            </div>
            <Progress
              value={((currentQuestion + 1) / examQuestions.length) * 100}
            />
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="mb-4 text-lg font-semibold leading-relaxed">
              {currentQ.question}
            </h3>
            <RadioGroup
              value={selectedAnswers[currentQuestion] || ""}
              onValueChange={handleAnswerSelect}
            >
              <div className="space-y-3">
                {currentQ.options.map((option, idx) => (
                  <div
                    // biome-ignore lint/suspicious/noArrayIndexKey: options are static and order-stable
                    key={`option-${idx}`}
                    className="flex items-start space-x-3 rounded-lg border p-3 hover:bg-accent/50 transition-colors"
                  >
                    <RadioGroupItem
                      value={option}
                      id={`option-${idx}`}
                      className="mt-1"
                    />
                    <Label
                      htmlFor={`option-${idx}`}
                      className="flex-1 cursor-pointer leading-relaxed"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          <div className="flex items-center justify-between pt-4 border-t">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0 || !allowBacktracking}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            <div className="text-sm text-muted-foreground">
              {isAnswered ? "Answer selected" : "Select an answer"}
            </div>
            {currentQuestion < examQuestions.length - 1 ? (
              <Button onClick={handleNext}>
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} variant="default">
                Submit Exam
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function getCertTitle(certType: string): string {
  const titles = {
    core: "EPA Core Section",
    type1: "Type I: Small Appliances",
    type2: "Type II: High-Pressure Systems",
    type3: "Type III: Low-Pressure Systems",
    universal: "Universal Certification",
  };
  return titles[certType as keyof typeof titles];
}
