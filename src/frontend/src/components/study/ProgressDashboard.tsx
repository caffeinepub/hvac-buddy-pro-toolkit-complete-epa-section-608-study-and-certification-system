import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Award,
  BookOpen,
  CheckCircle2,
  Download,
  Flame,
  Target,
  TrendingDown,
  TrendingUp,
  Trophy,
} from "lucide-react";
import { useState } from "react";
import AchievementsDashboard from "./AchievementsDashboard";
import AnalyticsVisualization from "./AnalyticsVisualization";

export default function ProgressDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data - in real implementation, this would come from backend
  const progressData = {
    coreModules: {
      thermodynamics: { completed: true, quizScore: 92 },
      refrigeration: { completed: true, quizScore: 88 },
      airflow: { completed: false, quizScore: 0 },
      electrical: { completed: false, quizScore: 0 },
    },
    epaModules: {
      type1: { completed: true, quizScore: 88 },
      type2: { completed: true, quizScore: 76 },
      type3: { completed: false, quizScore: 0 },
      universal: { completed: false, quizScore: 0 },
    },
    exercises: {
      deltaT: 12,
      superheat: 8,
      subcooling: 6,
      airflow: 4,
    },
    diagnosticSessions: 12,
    flashcardSessions: 45,
    currentStreak: 7,
    longestStreak: 14,
  };

  const coreCompleted = Object.values(progressData.coreModules).filter(
    (m) => m.completed,
  ).length;
  const coreTotal = Object.keys(progressData.coreModules).length;
  const coreProgress = (coreCompleted / coreTotal) * 100;

  const epaCompleted = Object.values(progressData.epaModules).filter(
    (m) => m.completed,
  ).length;
  const epaTotal = Object.keys(progressData.epaModules).length;
  const epaProgress = (epaCompleted / epaTotal) * 100;

  const totalExercises = Object.values(progressData.exercises).reduce(
    (a, b) => a + b,
    0,
  );

  const allQuizScores = [
    ...Object.values(progressData.coreModules).map((m) => m.quizScore),
    ...Object.values(progressData.epaModules).map((m) => m.quizScore),
  ].filter((score) => score > 0);

  const averageScore =
    allQuizScores.length > 0
      ? allQuizScores.reduce((a, b) => a + b, 0) / allQuizScores.length
      : 0;

  const handleExportProgress = () => {
    // This would generate a comprehensive PDF with all achievements, badges, and analytics
    console.log("Exporting progress report...");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <TrendingUp className="h-7 w-7 text-primary" />
            Your Learning Progress
          </CardTitle>
          <CardDescription className="text-base">
            Track your achievements, streaks, and identify areas for improvement
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Learning Streak Banner */}
      <Card className="border-orange-500/30 bg-gradient-to-r from-orange-500/10 to-red-500/10">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-orange-500/20 p-3">
                <Flame className="h-8 w-8 text-orange-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {progressData.currentStreak} Day Streak!
                </p>
                <p className="text-sm text-muted-foreground">
                  Keep it up! Longest streak: {progressData.longestStreak} days
                </p>
              </div>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Trophy className="mr-2 h-4 w-4" />
                    View Milestones
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Next milestone: 14-day streak (7 days to go!)</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardContent>
      </Card>

      {/* Tabs for different views */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Summary Stats */}
          <div className="grid gap-6 md:grid-cols-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Modules Completed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">
                  {coreCompleted + epaCompleted}
                </p>
                <p className="text-sm text-muted-foreground">
                  out of {coreTotal + epaTotal} total
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Award className="h-5 w-5 text-primary" />
                  Average Quiz Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{averageScore.toFixed(0)}%</p>
                <p className="text-sm text-muted-foreground">
                  across {allQuizScores.length} quizzes
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Target className="h-5 w-5 text-primary" />
                  Exercises Completed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{totalExercises}</p>
                <p className="text-sm text-muted-foreground">
                  hands-on practice sessions
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Flame className="h-5 w-5 text-orange-500" />
                  Current Streak
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">
                  {progressData.currentStreak}
                </p>
                <p className="text-sm text-muted-foreground">
                  consecutive days
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core HVAC Progress */}
          <Card>
            <CardHeader>
              <CardTitle>Core HVAC Lessons Progress</CardTitle>
              <CardDescription>
                Track your progress through fundamental HVAC concepts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Overall Progress</span>
                  <span className="font-semibold">
                    {coreProgress.toFixed(0)}%
                  </span>
                </div>
                <Progress value={coreProgress} />
              </div>

              <div className="space-y-3">
                {Object.entries(progressData.coreModules).map(([key, data]) => (
                  <div
                    key={key}
                    className="flex items-center justify-between rounded-lg border p-3"
                  >
                    <div className="flex-1">
                      <p className="font-medium capitalize">{key}</p>
                      {data.completed && (
                        <div className="flex items-center gap-2">
                          <p className="text-sm text-muted-foreground">
                            Quiz Score: {data.quizScore}%
                          </p>
                          {data.quizScore >= 90 && (
                            <Badge variant="default" className="text-xs">
                              <Trophy className="mr-1 h-3 w-3" />
                              Excellent
                            </Badge>
                          )}
                        </div>
                      )}
                    </div>
                    {data.completed ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    ) : (
                      <span className="text-sm text-muted-foreground">
                        Not started
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* EPA 608 Progress */}
          <Card>
            <CardHeader>
              <CardTitle>EPA Section 608 Progress</CardTitle>
              <CardDescription>
                Certification preparation progress
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Overall Progress</span>
                  <span className="font-semibold">
                    {epaProgress.toFixed(0)}%
                  </span>
                </div>
                <Progress value={epaProgress} />
              </div>

              <div className="space-y-3">
                {Object.entries(progressData.epaModules).map(([key, data]) => (
                  <div
                    key={key}
                    className="flex items-center justify-between rounded-lg border p-3"
                  >
                    <div className="flex-1">
                      <p className="font-medium uppercase">{key}</p>
                      {data.completed && (
                        <p className="text-sm text-muted-foreground">
                          Practice Score: {data.quizScore}%{" "}
                          {data.quizScore >= 70
                            ? "✓ Passing"
                            : "✗ Review needed"}
                        </p>
                      )}
                    </div>
                    {data.completed ? (
                      <CheckCircle2
                        className={`h-5 w-5 ${data.quizScore >= 70 ? "text-green-500" : "text-yellow-500"}`}
                      />
                    ) : (
                      <span className="text-sm text-muted-foreground">
                        Not started
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Weak Areas */}
          <Card className="border-yellow-500/20 bg-yellow-500/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingDown className="h-5 w-5 text-yellow-600" />
                Areas for Improvement
              </CardTitle>
              <CardDescription>
                Focus on these topics to strengthen your knowledge
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Alert>
                <AlertDescription>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Complete Airflow & Duct Design module</li>
                    <li>Complete Electrical Fundamentals module</li>
                    <li>Improve Type II score (currently 76%, aim for 85%+)</li>
                    <li>Complete Type III and Universal practice exams</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements">
          <AchievementsDashboard progressData={progressData} />
        </TabsContent>

        <TabsContent value="analytics">
          <AnalyticsVisualization progressData={progressData} />
        </TabsContent>
      </Tabs>

      {/* Export Button */}
      <Card>
        <CardContent className="pt-6">
          <Button
            className="w-full"
            variant="outline"
            onClick={handleExportProgress}
          >
            <Download className="mr-2 h-4 w-4" />
            Export Professional Progress Report (PDF)
          </Button>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Download a comprehensive report with badges, achievements, and
            performance analytics
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
