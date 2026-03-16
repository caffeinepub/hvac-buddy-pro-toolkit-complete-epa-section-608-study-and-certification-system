import RelatedVideos from "@/components/RelatedVideos";
import CoreLessonsModule from "@/components/study/CoreLessonsModule";
import DigitalGaugesAndSmartProbes from "@/components/study/DigitalGaugesAndSmartProbes";
import EPA608Module from "@/components/study/EPA608Module";
import ElectricalTroubleshootingModule from "@/components/study/ElectricalTroubleshootingModule";
import HVACElectricalFundamentals from "@/components/study/HVACElectricalFundamentals";
import MultimeterTrainingModule from "@/components/study/MultimeterTrainingModule";
import ProgressDashboard from "@/components/study/ProgressDashboard";
import StudySystemHome from "@/components/study/StudySystemHome";
import UEiDL589MultimeterGuide from "@/components/study/UEiDL589MultimeterGuide";
import VisualLearningLibrary from "@/components/study/VisualLearningLibrary";
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
    | "digital-gauges-probes"
    | "electrical-troubleshooting"
    | "visual-learning"
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
        <Button
          variant="ghost"
          onClick={() => setCurrentView("home")}
          data-ocid="core-lessons.back.button"
        >
          ← Back to Study Home
        </Button>
        <CoreLessonsModule studyMode={studyMode} />
      </div>
    );
  }

  if (currentView === "epa-608") {
    return (
      <div className="space-y-6">
        <Button
          variant="ghost"
          onClick={() => setCurrentView("home")}
          data-ocid="epa-608.back.button"
        >
          ← Back to Study Home
        </Button>
        <EPA608Module studyMode={studyMode} />
      </div>
    );
  }

  if (currentView === "progress") {
    return (
      <div className="space-y-6">
        <Button
          variant="ghost"
          onClick={() => setCurrentView("home")}
          data-ocid="progress.back.button"
        >
          ← Back to Study Home
        </Button>
        <ProgressDashboard />
      </div>
    );
  }

  if (currentView === "multimeter-training") {
    return (
      <div className="space-y-6">
        <Button
          variant="ghost"
          onClick={() => setCurrentView("home")}
          data-ocid="multimeter-training.back.button"
        >
          ← Back to Study Home
        </Button>
        <MultimeterTrainingModule studyMode={studyMode} />
        <RelatedVideos
          keywords={["multimeter", "voltage", "resistance", "electrical"]}
        />
      </div>
    );
  }

  if (currentView === "uei-dl589-guide") {
    return (
      <div className="space-y-6">
        <Button
          variant="ghost"
          onClick={() => setCurrentView("home")}
          data-ocid="uei-dl589.back.button"
        >
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
        <RelatedVideos
          keywords={["electrical", "circuit", "voltage", "schematic"]}
        />
      </div>
    );
  }

  if (currentView === "digital-gauges-probes") {
    return (
      <div className="space-y-6">
        <Button
          variant="ghost"
          onClick={() => setCurrentView("home")}
          data-ocid="digital-gauges.secondary_button"
        >
          ← Back to Study Home
        </Button>
        <DigitalGaugesAndSmartProbes studyMode={studyMode} />
        <RelatedVideos
          keywords={["gauge", "pressure", "superheat", "subcooling"]}
        />
      </div>
    );
  }

  if (currentView === "electrical-troubleshooting") {
    return (
      <div className="space-y-6">
        <Button
          variant="ghost"
          onClick={() => setCurrentView("home")}
          data-ocid="electrical-troubleshooting.secondary_button"
        >
          ← Back to Study Home
        </Button>
        <ElectricalTroubleshootingModule studyMode={studyMode} />
        <RelatedVideos
          keywords={["electrical", "contactor", "transformer", "schematic"]}
        />
      </div>
    );
  }

  if (currentView === "visual-learning") {
    return (
      <div className="space-y-6">
        <Button
          variant="ghost"
          onClick={() => setCurrentView("home")}
          data-ocid="visual-learning.back.button"
        >
          ← Back to Study Home
        </Button>
        <VisualLearningLibrary
          onNavigate={setCurrentView}
          studyMode={studyMode}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <StudySystemHome onNavigate={setCurrentView} studyMode={studyMode} />
    </div>
  );
}
