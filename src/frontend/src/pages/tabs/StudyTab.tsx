import CoreLessonsModule from "@/components/study/CoreLessonsModule";
import EPA608Module from "@/components/study/EPA608Module";
import HVACElectricalFundamentals from "@/components/study/HVACElectricalFundamentals";
import MultimeterTrainingModule from "@/components/study/MultimeterTrainingModule";
import ProgressDashboard from "@/components/study/ProgressDashboard";
import StudySystemHome from "@/components/study/StudySystemHome";
import UEiDL589MultimeterGuide from "@/components/study/UEiDL589MultimeterGuide";
import { Button } from "@/components/ui/button";
import { useGetCallerUserProfile } from "@/hooks/useQueries";
import { useState } from "react";
import { StudyMode } from "../../types/local";
import type { StudyMode as LocalStudyMode } from "../../types/study";

export default function StudyTab() {
  const [currentView, setCurrentView] = useState<
    | "home"
    | "core-lessons"
    | "epa-608"
    | "progress"
    | "multimeter-training"
    | "uei-dl589-guide"
    | "hvac-electrical-fundamentals"
  >("home");
  const { data: userProfile } = useGetCallerUserProfile();

  // Convert backend StudyMode enum value to local StudyMode type
  const studyMode: LocalStudyMode = userProfile?.studyMode
    ? (userProfile.studyMode as any) === StudyMode.beginner ||
      (userProfile.studyMode as any) === "beginner"
      ? { __kind__: "beginner" as const }
      : { __kind__: "expert" as const }
    : { __kind__: "beginner" as const };

  if (currentView === "core-lessons") {
    return (
      <div className="space-y-6">
        <Button variant="ghost" onClick={() => setCurrentView("home")}>
          ← Back to Study Home
        </Button>
        <CoreLessonsModule studyMode={studyMode} />
      </div>
    );
  }

  if (currentView === "epa-608") {
    return (
      <div className="space-y-6">
        <Button variant="ghost" onClick={() => setCurrentView("home")}>
          ← Back to Study Home
        </Button>
        <EPA608Module studyMode={studyMode} />
      </div>
    );
  }

  if (currentView === "progress") {
    return (
      <div className="space-y-6">
        <Button variant="ghost" onClick={() => setCurrentView("home")}>
          ← Back to Study Home
        </Button>
        <ProgressDashboard />
      </div>
    );
  }

  if (currentView === "multimeter-training") {
    return (
      <div className="space-y-6">
        <Button variant="ghost" onClick={() => setCurrentView("home")}>
          ← Back to Study Home
        </Button>
        <MultimeterTrainingModule studyMode={studyMode} />
      </div>
    );
  }

  if (currentView === "uei-dl589-guide") {
    return (
      <div className="space-y-6">
        <Button variant="ghost" onClick={() => setCurrentView("home")}>
          ← Back to Study Home
        </Button>
        <UEiDL589MultimeterGuide studyMode={studyMode} />
      </div>
    );
  }

  if (currentView === "hvac-electrical-fundamentals") {
    return (
      <div className="space-y-6">
        <Button
          variant="ghost"
          onClick={() => setCurrentView("home")}
          data-ocid="hvac-electrical.secondary_button"
        >
          ← Back to Study Home
        </Button>
        <HVACElectricalFundamentals studyMode={studyMode} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <StudySystemHome onNavigate={setCurrentView} studyMode={studyMode} />
    </div>
  );
}
