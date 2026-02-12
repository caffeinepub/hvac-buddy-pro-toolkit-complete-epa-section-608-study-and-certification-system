import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, ClipboardCheck, GraduationCap, BarChart3, Wrench } from 'lucide-react';
import EPA608Content from './EPA608Content';
import EPA608Practice from './EPA608Practice';
import EPA608ExamSimulation from './EPA608ExamSimulation';
import EPA608ReadinessDashboard from './EPA608ReadinessDashboard';
import EPA608LessonModule from './EPA608LessonModule';
import InteractiveToolsHub from './InteractiveToolsHub';
import type { StudyMode } from '../../types/study';

interface EPA608ModuleProps {
  studyMode: StudyMode;
}

type CertType = 'core' | 'type1' | 'type2' | 'type3' | 'universal';

export default function EPA608Module({ studyMode }: EPA608ModuleProps) {
  const [selectedCert, setSelectedCert] = useState<CertType>('core');
  const [activeTab, setActiveTab] = useState<string>('study');
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);

  const certTypes = [
    { id: 'core' as CertType, name: 'Core Section', color: 'blue' },
    { id: 'type1' as CertType, name: 'Type I', color: 'green' },
    { id: 'type2' as CertType, name: 'Type II', color: 'orange' },
    { id: 'type3' as CertType, name: 'Type III', color: 'purple' },
    { id: 'universal' as CertType, name: 'Universal', color: 'red' },
  ];

  if (selectedLesson) {
    return (
      <div className="space-y-4">
        <Button variant="outline" onClick={() => setSelectedLesson(null)}>
          ← Back to Study Content
        </Button>
        <EPA608LessonModule
          section={selectedCert}
          moduleId={selectedLesson}
          studyMode={studyMode}
          onComplete={() => setSelectedLesson(null)}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>EPA Section 608 Certification Preparation</CardTitle>
          <p className="text-sm text-muted-foreground">
            Comprehensive study system aligned with ESCO Institute standards. Select your certification type
            and explore study content, practice quizzes, interactive tools, exam simulations, and readiness tracking.
          </p>
        </CardHeader>
        <CardContent>
          <div className="mb-6 flex flex-wrap gap-2">
            {certTypes.map((cert) => (
              <Button
                key={cert.id}
                variant={selectedCert === cert.id ? 'default' : 'outline'}
                onClick={() => setSelectedCert(cert.id)}
                className="flex-1 min-w-[120px]"
              >
                {cert.name}
              </Button>
            ))}
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="study" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Study</span>
              </TabsTrigger>
              <TabsTrigger value="practice" className="flex items-center gap-2">
                <ClipboardCheck className="h-4 w-4" />
                <span className="hidden sm:inline">Practice</span>
              </TabsTrigger>
              <TabsTrigger value="tools" className="flex items-center gap-2">
                <Wrench className="h-4 w-4" />
                <span className="hidden sm:inline">Tools</span>
              </TabsTrigger>
              <TabsTrigger value="exam" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                <span className="hidden sm:inline">Exam</span>
              </TabsTrigger>
              <TabsTrigger value="readiness" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                <span className="hidden sm:inline">Readiness</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="study" className="mt-6">
              <EPA608Content studyMode={studyMode} selectedSection={selectedCert} />
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4">Comprehensive Lesson Modules</h3>
                <div className="grid gap-3 md:grid-cols-2">
                  {selectedCert === 'core' && (
                    <>
                      <Button
                        variant="outline"
                        className="justify-start h-auto p-4"
                        onClick={() => setSelectedLesson('ozone-depletion')}
                      >
                        <div className="text-left">
                          <div className="font-semibold">Module 1: Ozone Depletion</div>
                          <div className="text-sm text-muted-foreground">Environmental impact and regulations</div>
                        </div>
                      </Button>
                      <Button
                        variant="outline"
                        className="justify-start h-auto p-4"
                        onClick={() => setSelectedLesson('refrigerant-classification')}
                      >
                        <div className="text-left">
                          <div className="font-semibold">Module 2: Refrigerant Classification</div>
                          <div className="text-sm text-muted-foreground">Properties and safety groups</div>
                        </div>
                      </Button>
                    </>
                  )}
                  {selectedCert === 'type1' && (
                    <Button
                      variant="outline"
                      className="justify-start h-auto p-4"
                      onClick={() => setSelectedLesson('small-appliance-systems')}
                    >
                      <div className="text-left">
                        <div className="font-semibold">Module 1: Small Appliance Systems</div>
                        <div className="text-sm text-muted-foreground">Components and recovery procedures</div>
                      </div>
                    </Button>
                  )}
                  {selectedCert === 'type2' && (
                    <Button
                      variant="outline"
                      className="justify-start h-auto p-4"
                      onClick={() => setSelectedLesson('high-pressure-systems')}
                    >
                      <div className="text-left">
                        <div className="font-semibold">Module 1: High-Pressure Systems</div>
                        <div className="text-sm text-muted-foreground">Identification and characteristics</div>
                      </div>
                    </Button>
                  )}
                  {selectedCert === 'type3' && (
                    <Button
                      variant="outline"
                      className="justify-start h-auto p-4"
                      onClick={() => setSelectedLesson('low-pressure-systems')}
                    >
                      <div className="text-left">
                        <div className="font-semibold">Module 1: Low-Pressure Systems</div>
                        <div className="text-sm text-muted-foreground">Centrifugal chillers and vacuum operation</div>
                      </div>
                    </Button>
                  )}
                  {selectedCert === 'universal' && (
                    <Button
                      variant="outline"
                      className="justify-start h-auto p-4"
                      onClick={() => setSelectedLesson('comprehensive-regulatory')}
                    >
                      <div className="text-left">
                        <div className="font-semibold">Module 1: Comprehensive Regulatory Knowledge</div>
                        <div className="text-sm text-muted-foreground">Cross-system compliance and best practices</div>
                      </div>
                    </Button>
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="practice" className="mt-6">
              <EPA608Practice certType={selectedCert} studyMode={studyMode} />
            </TabsContent>

            <TabsContent value="tools" className="mt-6">
              <InteractiveToolsHub studyMode={studyMode} />
            </TabsContent>

            <TabsContent value="exam" className="mt-6">
              <EPA608ExamSimulation certType={selectedCert} studyMode={studyMode} />
            </TabsContent>

            <TabsContent value="readiness" className="mt-6">
              <EPA608ReadinessDashboard />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
