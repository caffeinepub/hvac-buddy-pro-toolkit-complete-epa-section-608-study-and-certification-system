import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Trophy, Lock, Flame, Target, BookOpen, Award, CheckCircle2, Star } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface AchievementsDashboardProps {
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

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedDate?: string;
  progress: number;
  requirement: string;
  category: 'study' | 'practice' | 'streak' | 'mastery';
}

export default function AchievementsDashboard({ progressData }: AchievementsDashboardProps) {
  // Calculate achievements based on progress data
  const thermodynamicsCompleted = progressData.coreModules.thermodynamics?.completed && 
    progressData.coreModules.thermodynamics?.quizScore >= 90;
  
  const allEpaCompleted = Object.values(progressData.epaModules).every(m => m.completed && m.quizScore >= 70);
  
  const diagnosticPro = progressData.diagnosticSessions >= 10;
  
  const streakChampion = progressData.currentStreak >= 7;
  
  const quizMaster = Object.values(progressData.coreModules)
    .concat(Object.values(progressData.epaModules))
    .filter(m => m.completed)
    .every(m => m.quizScore >= 95);
  
  const totalExercises = Object.values(progressData.exercises).reduce((a, b) => a + b, 0);
  const handsOnExpert = totalExercises >= 30;
  
  const knowledgeSeeker = progressData.flashcardSessions >= 50;
  
  const allCoreCompleted = Object.values(progressData.coreModules).every(m => m.completed);
  const moduleCompletionist = allCoreCompleted;

  const achievements: Achievement[] = [
    {
      id: 'thermodynamics-master',
      name: 'Thermodynamics Master',
      description: 'Complete thermodynamics module with 90%+ quiz average',
      icon: '/assets/generated/thermodynamics-master-badge.dim_200x200.png',
      earned: thermodynamicsCompleted,
      earnedDate: thermodynamicsCompleted ? 'Dec 28, 2025' : undefined,
      progress: thermodynamicsCompleted ? 100 : (progressData.coreModules.thermodynamics?.completed ? 50 : 0),
      requirement: 'Complete module with 90%+ score',
      category: 'mastery',
    },
    {
      id: 'epa-certified-prep',
      name: 'EPA Certified Prep',
      description: 'Complete all EPA 608 sections with passing scores',
      icon: '/assets/generated/epa-certified-prep-badge.dim_200x200.png',
      earned: allEpaCompleted,
      earnedDate: allEpaCompleted ? 'Dec 30, 2025' : undefined,
      progress: (Object.values(progressData.epaModules).filter(m => m.completed && m.quizScore >= 70).length / 4) * 100,
      requirement: 'Pass all 4 EPA sections (70%+)',
      category: 'mastery',
    },
    {
      id: 'diagnostic-pro',
      name: 'Diagnostic Pro',
      description: 'Complete 10 diagnostic sessions with professional reports',
      icon: '/assets/generated/diagnostic-pro-badge.dim_200x200.png',
      earned: diagnosticPro,
      earnedDate: diagnosticPro ? 'Jan 1, 2026' : undefined,
      progress: (progressData.diagnosticSessions / 10) * 100,
      requirement: '10 diagnostic sessions',
      category: 'practice',
    },
    {
      id: 'study-streak-champion',
      name: 'Study Streak Champion',
      description: 'Maintain 7-day consecutive study streak',
      icon: '/assets/generated/study-streak-champion-badge.dim_200x200.png',
      earned: streakChampion,
      earnedDate: streakChampion ? 'Jan 2, 2026' : undefined,
      progress: (progressData.currentStreak / 7) * 100,
      requirement: '7 consecutive days',
      category: 'streak',
    },
    {
      id: 'quiz-master',
      name: 'Quiz Master',
      description: 'Achieve 95%+ average across all module quizzes',
      icon: '/assets/generated/quiz-master-badge.dim_200x200.png',
      earned: quizMaster,
      earnedDate: quizMaster ? 'Dec 29, 2025' : undefined,
      progress: quizMaster ? 100 : 60,
      requirement: '95%+ on all quizzes',
      category: 'mastery',
    },
    {
      id: 'hands-on-expert',
      name: 'Hands-On Expert',
      description: 'Complete all interactive exercises with perfect scores',
      icon: '/assets/generated/hands-on-expert-badge.dim_200x200.png',
      earned: handsOnExpert,
      earnedDate: handsOnExpert ? 'Dec 31, 2025' : undefined,
      progress: (totalExercises / 30) * 100,
      requirement: '30 exercise completions',
      category: 'practice',
    },
    {
      id: 'knowledge-seeker',
      name: 'Knowledge Seeker',
      description: 'Complete 50 flashcard sessions',
      icon: '/assets/generated/knowledge-seeker-badge.dim_200x200.png',
      earned: knowledgeSeeker,
      earnedDate: knowledgeSeeker ? 'Dec 27, 2025' : undefined,
      progress: (progressData.flashcardSessions / 50) * 100,
      requirement: '50 flashcard sessions',
      category: 'study',
    },
    {
      id: 'module-completionist',
      name: 'Module Completionist',
      description: 'Finish all HVAC core lesson modules',
      icon: '/assets/generated/module-completionist-badge.dim_200x200.png',
      earned: moduleCompletionist,
      earnedDate: moduleCompletionist ? 'Dec 26, 2025' : undefined,
      progress: (Object.values(progressData.coreModules).filter(m => m.completed).length / 4) * 100,
      requirement: 'Complete all 4 core modules',
      category: 'study',
    },
  ];

  const earnedAchievements = achievements.filter(a => a.earned);
  const lockedAchievements = achievements.filter(a => !a.earned);

  const getCategoryIcon = (category: Achievement['category']) => {
    switch (category) {
      case 'study': return <BookOpen className="h-4 w-4" />;
      case 'practice': return <Target className="h-4 w-4" />;
      case 'streak': return <Flame className="h-4 w-4" />;
      case 'mastery': return <Star className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: Achievement['category']) => {
    switch (category) {
      case 'study': return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'practice': return 'bg-green-500/10 text-green-600 border-green-500/20';
      case 'streak': return 'bg-orange-500/10 text-orange-600 border-orange-500/20';
      case 'mastery': return 'bg-purple-500/10 text-purple-600 border-purple-500/20';
    }
  };

  return (
    <div className="space-y-6">
      {/* Achievement Summary */}
      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-6 w-6 text-primary" />
            Achievement Collection
          </CardTitle>
          <CardDescription>
            You've earned {earnedAchievements.length} out of {achievements.length} badges
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Overall Progress</span>
              <span className="font-semibold">{((earnedAchievements.length / achievements.length) * 100).toFixed(0)}%</span>
            </div>
            <Progress value={(earnedAchievements.length / achievements.length) * 100} />
          </div>
        </CardContent>
      </Card>

      {/* Earned Badges */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            Earned Badges ({earnedAchievements.length})
          </CardTitle>
          <CardDescription>Your achievements and accomplishments</CardDescription>
        </CardHeader>
        <CardContent>
          {earnedAchievements.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              No badges earned yet. Keep studying to unlock achievements!
            </p>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {earnedAchievements.map((achievement) => (
                <TooltipProvider key={achievement.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 cursor-pointer hover:shadow-md transition-shadow">
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <div className="relative">
                              <img 
                                src={achievement.icon} 
                                alt={achievement.name}
                                className="h-16 w-16 rounded-full border-2 border-primary"
                              />
                              <CheckCircle2 className="absolute -bottom-1 -right-1 h-5 w-5 text-green-500 bg-background rounded-full" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold">{achievement.name}</h4>
                              <p className="text-sm text-muted-foreground">{achievement.description}</p>
                              <div className="mt-2 flex items-center gap-2">
                                <Badge variant="outline" className={getCategoryColor(achievement.category)}>
                                  {getCategoryIcon(achievement.category)}
                                  <span className="ml-1 capitalize">{achievement.category}</span>
                                </Badge>
                                {achievement.earnedDate && (
                                  <span className="text-xs text-muted-foreground">
                                    Earned {achievement.earnedDate}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="font-semibold">{achievement.name}</p>
                      <p className="text-sm">{achievement.requirement}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Locked Badges */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5 text-muted-foreground" />
            Locked Badges ({lockedAchievements.length})
          </CardTitle>
          <CardDescription>Keep learning to unlock these achievements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {lockedAchievements.map((achievement) => (
              <TooltipProvider key={achievement.id}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card className="border-muted cursor-pointer hover:border-primary/20 transition-colors">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="relative">
                            <img 
                              src={achievement.icon} 
                              alt={achievement.name}
                              className="h-16 w-16 rounded-full border-2 border-muted opacity-40 grayscale"
                            />
                            <Lock className="absolute -bottom-1 -right-1 h-5 w-5 text-muted-foreground bg-background rounded-full p-0.5" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-muted-foreground">{achievement.name}</h4>
                            <p className="text-sm text-muted-foreground">{achievement.description}</p>
                            <div className="mt-2 space-y-2">
                              <Badge variant="outline" className={getCategoryColor(achievement.category)}>
                                {getCategoryIcon(achievement.category)}
                                <span className="ml-1 capitalize">{achievement.category}</span>
                              </Badge>
                              <div className="space-y-1">
                                <div className="flex items-center justify-between text-xs">
                                  <span className="text-muted-foreground">{achievement.requirement}</span>
                                  <span className="font-semibold">{Math.min(achievement.progress, 100).toFixed(0)}%</span>
                                </div>
                                <Progress value={Math.min(achievement.progress, 100)} className="h-1.5" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-semibold">How to unlock:</p>
                    <p className="text-sm">{achievement.requirement}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Progress: {Math.min(achievement.progress, 100).toFixed(0)}%
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Streak Milestones */}
      <Card className="border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-red-500/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-orange-500" />
            Streak Milestones
          </CardTitle>
          <CardDescription>Track your consecutive study days and unlock special rewards</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { days: 3, reward: 'Bronze Streak', unlocked: progressData.longestStreak >= 3 },
              { days: 7, reward: 'Silver Streak', unlocked: progressData.longestStreak >= 7 },
              { days: 14, reward: 'Gold Streak', unlocked: progressData.longestStreak >= 14 },
              { days: 30, reward: 'Platinum Streak', unlocked: progressData.longestStreak >= 30 },
            ].map((milestone) => (
              <div key={milestone.days} className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center gap-3">
                  <Flame className={`h-5 w-5 ${milestone.unlocked ? 'text-orange-500' : 'text-muted-foreground'}`} />
                  <div>
                    <p className="font-medium">{milestone.days} Day Streak</p>
                    <p className="text-sm text-muted-foreground">{milestone.reward}</p>
                  </div>
                </div>
                {milestone.unlocked ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                ) : (
                  <Lock className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
