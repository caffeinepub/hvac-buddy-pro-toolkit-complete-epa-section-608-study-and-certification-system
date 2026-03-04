import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Activity, Target, TrendingDown, TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface AnalyticsVisualizationProps {
  progressData: {
    coreModules: Record<string, { completed: boolean; quizScore: number }>;
    epaModules: Record<string, { completed: boolean; quizScore: number }>;
    exercises: Record<string, number>;
    diagnosticSessions: number;
    flashcardSessions: number;
    currentStreak: number;
    longestStreak: number;
  };
}

export default function AnalyticsVisualization({
  progressData,
}: AnalyticsVisualizationProps) {
  // Prepare data for module performance chart
  const modulePerformanceData = [
    {
      name: "Thermodynamics",
      score: progressData.coreModules.thermodynamics?.quizScore || 0,
      status: progressData.coreModules.thermodynamics?.completed
        ? "completed"
        : "incomplete",
    },
    {
      name: "Refrigeration",
      score: progressData.coreModules.refrigeration?.quizScore || 0,
      status: progressData.coreModules.refrigeration?.completed
        ? "completed"
        : "incomplete",
    },
    {
      name: "Airflow",
      score: progressData.coreModules.airflow?.quizScore || 0,
      status: progressData.coreModules.airflow?.completed
        ? "completed"
        : "incomplete",
    },
    {
      name: "Electrical",
      score: progressData.coreModules.electrical?.quizScore || 0,
      status: progressData.coreModules.electrical?.completed
        ? "completed"
        : "incomplete",
    },
  ];

  // EPA performance data
  const epaPerformanceData = [
    {
      name: "Type I",
      score: progressData.epaModules.type1?.quizScore || 0,
      passing: (progressData.epaModules.type1?.quizScore || 0) >= 70,
    },
    {
      name: "Type II",
      score: progressData.epaModules.type2?.quizScore || 0,
      passing: (progressData.epaModules.type2?.quizScore || 0) >= 70,
    },
    {
      name: "Type III",
      score: progressData.epaModules.type3?.quizScore || 0,
      passing: (progressData.epaModules.type3?.quizScore || 0) >= 70,
    },
    {
      name: "Universal",
      score: progressData.epaModules.universal?.quizScore || 0,
      passing: (progressData.epaModules.universal?.quizScore || 0) >= 70,
    },
  ];

  // Progress timeline data (mock historical data)
  const timelineData = [
    { week: "Week 1", modules: 0, quizAvg: 0 },
    { week: "Week 2", modules: 1, quizAvg: 85 },
    { week: "Week 3", modules: 2, quizAvg: 88 },
    { week: "Week 4", modules: 4, quizAvg: 86 },
  ];

  // Strengths and weaknesses radar data
  const skillsData = [
    { skill: "Theory", score: 90 },
    { skill: "Practical", score: 75 },
    { skill: "Diagnostics", score: 85 },
    { skill: "EPA Knowledge", score: 82 },
    { skill: "Calculations", score: 88 },
  ];

  // Identify strengths and weaknesses
  const completedModules = modulePerformanceData.filter(
    (m) => m.status === "completed",
  );
  const strengths = completedModules.filter((m) => m.score >= 85);
  const weaknesses = completedModules.filter((m) => m.score < 85);

  const getScoreColor = (score: number) => {
    if (score >= 90) return "#22c55e"; // green
    if (score >= 80) return "#3b82f6"; // blue
    if (score >= 70) return "#eab308"; // yellow
    return "#ef4444"; // red
  };

  return (
    <div className="space-y-6">
      {/* Analytics Header */}
      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            Performance Analytics
          </CardTitle>
          <CardDescription>
            Detailed insights into your learning progress and performance trends
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Strengths and Weaknesses Summary */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-green-500/20 bg-green-500/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <TrendingUp className="h-5 w-5 text-green-600" />
              Your Strengths
            </CardTitle>
            <CardDescription>Topics where you excel</CardDescription>
          </CardHeader>
          <CardContent>
            {strengths.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                Complete more modules to identify strengths
              </p>
            ) : (
              <div className="space-y-2">
                {strengths.map((module) => (
                  <div
                    key={module.name}
                    className="flex items-center justify-between p-2 rounded-lg bg-background/50"
                  >
                    <span className="font-medium">{module.name}</span>
                    <Badge variant="default" className="bg-green-500">
                      {module.score}%
                    </Badge>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="border-yellow-500/20 bg-yellow-500/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <TrendingDown className="h-5 w-5 text-yellow-600" />
              Areas to Improve
            </CardTitle>
            <CardDescription>Topics that need more focus</CardDescription>
          </CardHeader>
          <CardContent>
            {weaknesses.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                Great job! No weak areas identified yet
              </p>
            ) : (
              <div className="space-y-2">
                {weaknesses.map((module) => (
                  <div
                    key={module.name}
                    className="flex items-center justify-between p-2 rounded-lg bg-background/50"
                  >
                    <span className="font-medium">{module.name}</span>
                    <Badge
                      variant="outline"
                      className="border-yellow-500 text-yellow-600"
                    >
                      {module.score}%
                    </Badge>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Core Module Performance Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Core HVAC Module Performance</CardTitle>
          <CardDescription>Quiz scores across all core modules</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={modulePerformanceData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="name" className="text-xs" />
              <YAxis domain={[0, 100]} className="text-xs" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--background))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Bar
                dataKey="score"
                fill="hsl(var(--primary))"
                radius={[8, 8, 0, 0]}
                shape={(props: any) => {
                  const { x, y, width, height, payload } = props;
                  const color = getScoreColor(payload.score);
                  return (
                    <rect
                      x={x}
                      y={y}
                      width={width}
                      height={height}
                      fill={color}
                      rx={8}
                      ry={8}
                    />
                  );
                }}
              />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 flex items-center justify-center gap-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <span>90-100% Excellent</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-blue-500" />
              <span>80-89% Good</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <span>70-79% Fair</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <span>&lt;70% Needs Work</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* EPA Performance Chart */}
      <Card>
        <CardHeader>
          <CardTitle>EPA 608 Certification Performance</CardTitle>
          <CardDescription>Practice exam scores (passing: 70%)</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={epaPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="name" className="text-xs" />
              <YAxis domain={[0, 100]} className="text-xs" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--background))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Bar
                dataKey="score"
                fill="hsl(var(--primary))"
                radius={[8, 8, 0, 0]}
                shape={(props: any) => {
                  const { x, y, width, height, payload } = props;
                  const color = payload.passing ? "#22c55e" : "#ef4444";
                  return (
                    <rect
                      x={x}
                      y={y}
                      width={width}
                      height={height}
                      fill={color}
                      rx={8}
                      ry={8}
                    />
                  );
                }}
              />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 flex items-center justify-center gap-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <span>Passing (≥70%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <span>Not Passing (&lt;70%)</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Progress Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Learning Progress Timeline</CardTitle>
          <CardDescription>Your improvement over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={timelineData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="week" className="text-xs" />
              <YAxis yAxisId="left" domain={[0, 5]} className="text-xs" />
              <YAxis
                yAxisId="right"
                orientation="right"
                domain={[0, 100]}
                className="text-xs"
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--background))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="modules"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                name="Modules Completed"
                dot={{ fill: "hsl(var(--primary))", r: 4 }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="quizAvg"
                stroke="hsl(var(--accent))"
                strokeWidth={2}
                name="Quiz Average (%)"
                dot={{ fill: "hsl(var(--accent))", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Skills Radar Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Skills Assessment
          </CardTitle>
          <CardDescription>
            Overall competency across different areas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={skillsData}>
              <PolarGrid className="stroke-muted" />
              <PolarAngleAxis dataKey="skill" className="text-xs" />
              <PolarRadiusAxis domain={[0, 100]} className="text-xs" />
              <Radar
                name="Your Skills"
                dataKey="score"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.3}
                strokeWidth={2}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--background))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
