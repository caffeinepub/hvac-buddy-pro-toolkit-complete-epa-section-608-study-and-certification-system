import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Flame, Droplets, Wind, Zap, ChevronRight, Info } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import type { StudyMode } from '../../types/study';
import LessonViewer from './LessonViewer';
import HandsOnExercises from './HandsOnExercises';

interface CoreLessonsModuleProps {
  studyMode: StudyMode;
}

type LessonTopic = 'thermodynamics' | 'refrigeration' | 'airflow' | 'electrical' | null;

export default function CoreLessonsModule({ studyMode }: CoreLessonsModuleProps) {
  const [selectedLesson, setSelectedLesson] = useState<LessonTopic>(null);
  const isBeginner = studyMode.__kind__ === 'beginner';

  const lessons = [
    {
      id: 'thermodynamics' as const,
      title: 'Thermodynamics & Heat Transfer',
      icon: Flame,
      description: 'Laws of thermodynamics, heat transfer principles, and temperature-pressure relationships',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
    },
    {
      id: 'refrigeration' as const,
      title: 'Refrigeration Cycle',
      icon: Droplets,
      description: 'Complete cycle explanation with evaporator, compressor, condenser, and expansion valve',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      id: 'airflow' as const,
      title: 'Airflow & Duct Design',
      icon: Wind,
      description: 'Airflow principles, static pressure, velocity relationships, and measurement techniques',
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/10',
    },
    {
      id: 'electrical' as const,
      title: 'Electrical Fundamentals',
      icon: Zap,
      description: 'Basic electrical theory, motor types, wiring diagrams, and safety procedures',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
    },
  ];

  if (selectedLesson) {
    return (
      <div className="space-y-6">
        <Button variant="outline" onClick={() => setSelectedLesson(null)}>
          ← Back to Lessons
        </Button>
        <LessonViewer lessonId={selectedLesson} studyMode={studyMode} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Core HVAC Lessons
          </CardTitle>
          <CardDescription>
            Based on "Modern Refrigeration & Air Conditioning" - Complete fundamentals with theory, formulas, and
            diagrams
          </CardDescription>
        </CardHeader>
      </Card>

      {isBeginner && (
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Beginner Mode:</strong> Each lesson includes detailed explanations, visual aids, and step-by-step
            guidance. Take your time to understand each concept before moving forward.
          </AlertDescription>
        </Alert>
      )}

      {/* Lesson Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {lessons.map((lesson) => {
          const Icon = lesson.icon;
          return (
            <Card key={lesson.id} className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-lg ${lesson.bgColor}`}>
                  <Icon className={`h-7 w-7 ${lesson.color}`} />
                </div>
                <CardTitle>{lesson.title}</CardTitle>
                <CardDescription>{lesson.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={() => setSelectedLesson(lesson.id)} className="w-full">
                  Start Lesson
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Hands-On Exercises Section */}
      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
        <CardHeader>
          <CardTitle>Hands-On Exercises</CardTitle>
          <CardDescription>
            Practice real-world calculations and measurements with interactive exercises
          </CardDescription>
        </CardHeader>
        <CardContent>
          <HandsOnExercises studyMode={studyMode} />
        </CardContent>
      </Card>
    </div>
  );
}
