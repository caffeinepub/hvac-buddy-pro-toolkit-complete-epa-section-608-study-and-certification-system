import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useGetCallerUserProfile } from '@/hooks/useQueries';
import StudySystemHome from '@/components/study/StudySystemHome';
import CoreLessonsModule from '@/components/study/CoreLessonsModule';
import EPA608Module from '@/components/study/EPA608Module';
import ProgressDashboard from '@/components/study/ProgressDashboard';
import MultimeterTrainingModule from '@/components/study/MultimeterTrainingModule';
import UEiDL589MultimeterGuide from '@/components/study/UEiDL589MultimeterGuide';
import { StudyMode as LocalStudyMode } from '../../types/study';
import { StudyMode } from '../../types/local';

export default function StudyTab() {
  const [currentView, setCurrentView] = useState<'home' | 'core-lessons' | 'epa-608' | 'progress' | 'multimeter-training' | 'uei-dl589-guide'>('home');
  const { data: userProfile } = useGetCallerUserProfile();

  // Convert backend StudyMode enum value to local StudyMode type
  const studyMode: LocalStudyMode = userProfile?.studyMode
    ? ((userProfile.studyMode as any) === StudyMode.beginner || (userProfile.studyMode as any) === 'beginner'
        ? { __kind__: 'beginner' as const }
        : { __kind__: 'expert' as const })
    : { __kind__: 'beginner' as const };

  if (currentView === 'core-lessons') {
    return (
      <div className="space-y-6">
        <Button variant="ghost" onClick={() => setCurrentView('home')}>
          ← Back to Study Home
        </Button>
        <CoreLessonsModule studyMode={studyMode} />
      </div>
    );
  }

  if (currentView === 'epa-608') {
    return (
      <div className="space-y-6">
        <Button variant="ghost" onClick={() => setCurrentView('home')}>
          ← Back to Study Home
        </Button>
        <EPA608Module studyMode={studyMode} />
      </div>
    );
  }

  if (currentView === 'progress') {
    return (
      <div className="space-y-6">
        <Button variant="ghost" onClick={() => setCurrentView('home')}>
          ← Back to Study Home
        </Button>
        <ProgressDashboard />
      </div>
    );
  }

  if (currentView === 'multimeter-training') {
    return (
      <div className="space-y-6">
        <Button variant="ghost" onClick={() => setCurrentView('home')}>
          ← Back to Study Home
        </Button>
        <MultimeterTrainingModule studyMode={studyMode} />
      </div>
    );
  }

  if (currentView === 'uei-dl589-guide') {
    return (
      <div className="space-y-6">
        <Button variant="ghost" onClick={() => setCurrentView('home')}>
          ← Back to Study Home
        </Button>
        <UEiDL589MultimeterGuide studyMode={studyMode} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <StudySystemHome
        onNavigate={setCurrentView}
        studyMode={studyMode}
      />
    </div>
  );
}
