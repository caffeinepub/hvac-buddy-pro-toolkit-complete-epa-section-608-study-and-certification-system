import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, Award, Target, CheckCircle2, AlertTriangle, BookOpen, Zap, Brain } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function EPA608ReadinessDashboard() {
  // Mock data - in real implementation, this would come from backend
  const readinessData = {
    core: {
      studyCompleted: true,
      practiceScore: 88,
      examScore: 85,
      readiness: 85,
      weakAreas: ['Recordkeeping requirements'],
      topicMastery: {
        'Environmental awareness': 95,
        'Recovery procedures': 90,
        'Regulations': 75,
        'Safety protocols': 88,
      },
    },
    type1: {
      studyCompleted: true,
      practiceScore: 92,
      examScore: 90,
      readiness: 90,
      weakAreas: [],
      topicMastery: {
        'Small appliance identification': 95,
        'Recovery procedures': 92,
        'Disposal procedures': 88,
        'Safety considerations': 90,
      },
    },
    type2: {
      studyCompleted: true,
      practiceScore: 76,
      examScore: 72,
      readiness: 72,
      weakAreas: ['Leak detection standards', 'System evacuation'],
      topicMastery: {
        'Recovery procedures': 85,
        'Leak detection': 65,
        'System evacuation': 60,
        'Refrigerant storage': 80,
      },
    },
    type3: {
      studyCompleted: false,
      practiceScore: 0,
      examScore: 0,
      readiness: 0,
      weakAreas: ['All topics - not started'],
      topicMastery: {
        'Centrifugal chillers': 0,
        'Vacuum recovery': 0,
        'Purge units': 0,
        'Safety protocols': 0,
      },
    },
    universal: {
      studyCompleted: false,
      practiceScore: 0,
      examScore: 0,
      readiness: 0,
      weakAreas: ['Complete Type III first'],
      topicMastery: {},
    },
  };

  const sections = [
    { id: 'core', title: 'EPA Core Section', icon: '/assets/generated/epa-core-master-badge.dim_200x200.png' },
    { id: 'type1', title: 'Type I: Small Appliances', icon: '/assets/generated/type-i-certified-badge.dim_200x200.png' },
    { id: 'type2', title: 'Type II: High-Pressure', icon: '/assets/generated/type-ii-certified-badge.dim_200x200.png' },
    { id: 'type3', title: 'Type III: Low-Pressure', icon: '/assets/generated/type-iii-certified-badge.dim_200x200.png' },
    { id: 'universal', title: 'Universal Certification', icon: '/assets/generated/epa-608-universal-badge-transparent.dim_200x200.png' },
  ];

  const getReadinessColor = (readiness: number) => {
    if (readiness >= 85) return 'text-green-600';
    if (readiness >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getReadinessLabel = (readiness: number) => {
    if (readiness >= 85) return 'Ready';
    if (readiness >= 70) return 'Nearly Ready';
    if (readiness > 0) return 'Needs Study';
    return 'Not Started';
  };

  const getMasteryColor = (score: number) => {
    if (score >= 85) return 'bg-green-500';
    if (score >= 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const overallReadiness = Math.round(
    (readinessData.core.readiness + 
     readinessData.type1.readiness + 
     readinessData.type2.readiness + 
     readinessData.type3.readiness) / 4
  );

  // Calculate next recommended topic
  const getNextRecommendedTopic = () => {
    if (readinessData.type3.readiness === 0) {
      return { section: 'Type III', topic: 'Begin centrifugal chiller fundamentals' };
    }
    if (readinessData.type2.readiness < 85) {
      return { section: 'Type II', topic: 'Focus on leak detection and system evacuation' };
    }
    if (readinessData.core.readiness < 85) {
      return { section: 'Core', topic: 'Review recordkeeping requirements' };
    }
    return { section: 'Universal', topic: 'Begin comprehensive review' };
  };

  const nextTopic = getNextRecommendedTopic();

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <TrendingUp className="h-7 w-7 text-primary" />
            EPA 608 Readiness Dashboard
          </CardTitle>
          <CardDescription className="text-base">
            Track your preparation progress and identify areas for improvement
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center">
            <img
              src="/assets/generated/epa-readiness-meter.dim_400x300.png"
              alt="EPA Readiness Meter"
              className="h-48 w-auto object-contain"
            />
          </div>
        </CardContent>
      </Card>

      {/* Overall Readiness */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Overall Readiness
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <p className="text-5xl font-bold mb-2">{overallReadiness}%</p>
            <p className="text-lg text-muted-foreground">
              {getReadinessLabel(overallReadiness)}
            </p>
          </div>
          <Progress value={overallReadiness} className="h-3" />
          <p className="text-sm text-center text-muted-foreground">
            Based on study completion, practice scores, and exam simulation performance
          </p>
        </CardContent>
      </Card>

      {/* Next Recommended Topic */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            Next Recommended Topic
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Brain className="h-12 w-12 text-primary" />
            <div className="flex-1">
              <p className="font-semibold text-lg">{nextTopic.section}</p>
              <p className="text-muted-foreground">{nextTopic.topic}</p>
            </div>
            <Button>
              <BookOpen className="mr-2 h-4 w-4" />
              Start Learning
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Section Readiness with Tabs */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Section Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="topics">Topic Mastery</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4 mt-4">
              <div className="grid gap-6 md:grid-cols-2">
                {sections.map((section) => {
                  const data = readinessData[section.id as keyof typeof readinessData];
                  const isPassing = data.readiness >= 70;
                  const isReady = data.readiness >= 85;

                  return (
                    <Card key={section.id} className={isReady ? 'border-green-500/30' : isPassing ? 'border-yellow-500/30' : 'border-muted'}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-lg mb-2">{section.title}</CardTitle>
                            <div className="flex items-center gap-2 mb-3">
                              <Badge variant={isReady ? 'default' : isPassing ? 'outline' : 'secondary'}>
                                {getReadinessLabel(data.readiness)}
                              </Badge>
                              <span className={`text-2xl font-bold ${getReadinessColor(data.readiness)}`}>
                                {data.readiness}%
                              </span>
                            </div>
                          </div>
                          <img
                            src={section.icon}
                            alt={section.title}
                            className={`h-16 w-16 object-contain ${data.readiness === 0 ? 'opacity-30 grayscale' : ''}`}
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Progress value={data.readiness} className="h-2" />
                        </div>

                        <div className="grid grid-cols-3 gap-2 text-center text-sm">
                          <div>
                            <p className="text-muted-foreground">Study</p>
                            <p className="font-semibold">
                              {data.studyCompleted ? (
                                <CheckCircle2 className="h-4 w-4 inline text-green-500" />
                              ) : (
                                <span className="text-muted-foreground">-</span>
                              )}
                            </p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Practice</p>
                            <p className="font-semibold">{data.practiceScore > 0 ? `${data.practiceScore}%` : '-'}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Exam</p>
                            <p className="font-semibold">{data.examScore > 0 ? `${data.examScore}%` : '-'}</p>
                          </div>
                        </div>

                        {data.weakAreas.length > 0 && (
                          <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/5 p-3">
                            <p className="text-sm font-medium mb-2 flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-yellow-600" />
                              Focus Areas:
                            </p>
                            <ul className="list-disc pl-5 space-y-1">
                              {data.weakAreas.map((area, idx) => (
                                <li key={idx} className="text-sm text-muted-foreground">{area}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <BookOpen className="mr-2 h-4 w-4" />
                            Study
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Target className="mr-2 h-4 w-4" />
                            Practice
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="topics" className="space-y-4 mt-4">
              {sections.map((section) => {
                const data = readinessData[section.id as keyof typeof readinessData];
                const topics = Object.entries(data.topicMastery);

                if (topics.length === 0) return null;

                return (
                  <Card key={section.id}>
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <img src={section.icon} alt={section.title} className="h-8 w-8 object-contain" />
                        {section.title} - Topic Mastery
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {topics.map(([topic, score]) => (
                        <div key={topic} className="space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">{topic}</span>
                            <span className={`font-semibold ${getReadinessColor(score)}`}>{score}%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className={`h-full ${getMasteryColor(score)} transition-all`}
                              style={{ width: `${score}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                );
              })}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Study Recommendations */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Personalized Study Plan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-lg border bg-background">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium">Core Section - Ready for Exam</p>
                <p className="text-sm text-muted-foreground">Review recordkeeping requirements before taking the exam</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg border bg-background">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium">Type I - Ready for Exam</p>
                <p className="text-sm text-muted-foreground">Excellent preparation! You can take the certification exam</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg border bg-background">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <p className="font-medium">Type II - Additional Study Recommended</p>
                <p className="text-sm text-muted-foreground">Focus on leak detection standards (65%) and system evacuation (60%) - both below 70% threshold</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg border bg-background">
              <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
              <div>
                <p className="font-medium">Type III - Begin Study</p>
                <p className="text-sm text-muted-foreground">Complete the study content and practice quizzes before attempting the exam. Start with centrifugal chiller fundamentals.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section Readiness Badges */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            Section Readiness Badges
          </CardTitle>
          <CardDescription>
            Earn badges by achieving high readiness levels in each section
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {sections.map((section) => {
              const data = readinessData[section.id as keyof typeof readinessData];
              const isReady = data.readiness >= 85;

              return (
                <div key={section.id} className="text-center">
                  <img
                    src={section.icon}
                    alt={section.title}
                    className={`h-20 w-20 mx-auto mb-2 ${!isReady ? 'opacity-30 grayscale' : ''}`}
                  />
                  <p className="text-xs font-medium">{section.title}</p>
                  {isReady ? (
                    <Badge variant="default" className="mt-1">Earned</Badge>
                  ) : (
                    <Badge variant="outline" className="mt-1">Locked</Badge>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
