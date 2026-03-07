import GuestModeChecklist from "@/components/GuestModeChecklist";
import ProfileSetupModal from "@/components/ProfileSetupModal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2 } from "lucide-react";
import {
  BarChart3,
  BookOpen,
  Briefcase,
  Calculator,
  Camera,
  MapPin,
  MessageSquare,
  Search,
  Wrench,
} from "lucide-react";
import { Suspense, lazy, useState } from "react";

// Lazy load tab components for better performance
const TroubleshooterTab = lazy(() => import("./tabs/TroubleshooterTab"));
const StudyTab = lazy(() => import("./tabs/StudyTab"));
const JobsTab = lazy(() => import("./tabs/JobsTab"));
const PartsTab = lazy(() => import("./tabs/PartsTab"));
const PhotoDiagnosticTab = lazy(() => import("./tabs/PhotoDiagnosticTab"));
const CalculatorsTab = lazy(() => import("./tabs/CalculatorsTab"));
const DataLoggingTab = lazy(() => import("./tabs/DataLoggingTab"));
const CommunityTab = lazy(() => import("./tabs/CommunityTab"));
const SuppliersTab = lazy(() => import("./tabs/SuppliersTab"));

interface DashboardProps {
  isGuest: boolean;
}

// Loading fallback for lazy-loaded tabs
function TabLoader() {
  return (
    <div className="flex items-center justify-center py-12">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
}

export default function Dashboard({ isGuest }: DashboardProps) {
  const [activeTab, setActiveTab] = useState("troubleshooter");
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  const handleUpgrade = () => {
    setShowUpgradeModal(true);
  };

  const handleCloseUpgradeModal = () => {
    setShowUpgradeModal(false);
  };

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="mb-2 text-2xl sm:text-3xl font-bold text-foreground">
          HVAC Buddy Dashboard
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Your complete toolkit for HVAC diagnostics, learning, and field work
        </p>
      </div>

      {/* Guest Mode Checklist */}
      {isGuest && (
        <div className="mb-6 sm:mb-8">
          <GuestModeChecklist onUpgrade={handleUpgrade} />
        </div>
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-6 sm:mb-8 grid w-full grid-cols-3 gap-1 sm:gap-2 lg:grid-cols-9 h-auto">
          <TabsTrigger
            value="troubleshooter"
            className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3 py-2"
          >
            <Wrench className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Troubleshooter</span>
            <span className="sm:hidden">Diag</span>
          </TabsTrigger>
          <TabsTrigger
            value="study"
            className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3 py-2"
          >
            <BookOpen className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Study</span>
            <span className="sm:hidden">Learn</span>
          </TabsTrigger>
          <TabsTrigger
            value="jobs"
            className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3 py-2"
          >
            <Briefcase className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Jobs</span>
          </TabsTrigger>
          <TabsTrigger
            value="parts"
            className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3 py-2"
          >
            <Search className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Parts</span>
          </TabsTrigger>
          <TabsTrigger
            value="suppliers"
            className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3 py-2"
          >
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Suppliers</span>
            <span className="sm:hidden">Local</span>
          </TabsTrigger>
          <TabsTrigger
            value="photo"
            className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3 py-2"
          >
            <Camera className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Photo</span>
          </TabsTrigger>
          <TabsTrigger
            value="calculators"
            className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3 py-2"
          >
            <Calculator className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Calculators</span>
            <span className="sm:hidden">Calc</span>
          </TabsTrigger>
          <TabsTrigger
            value="logging"
            className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3 py-2"
          >
            <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Logging</span>
            <span className="sm:hidden">Log</span>
          </TabsTrigger>
          <TabsTrigger
            value="community"
            className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3 py-2"
          >
            <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Community</span>
            <span className="sm:hidden">Help</span>
          </TabsTrigger>
        </TabsList>

        <Suspense fallback={<TabLoader />}>
          <TabsContent value="troubleshooter" className="mt-0">
            <TroubleshooterTab isGuest={isGuest} />
          </TabsContent>
          <TabsContent value="study" className="mt-0">
            <StudyTab />
          </TabsContent>
          <TabsContent value="jobs" className="mt-0">
            <JobsTab isGuest={isGuest} />
          </TabsContent>
          <TabsContent value="parts" className="mt-0">
            <PartsTab />
          </TabsContent>
          <TabsContent value="suppliers" className="mt-0">
            <SuppliersTab isGuest={isGuest} />
          </TabsContent>
          <TabsContent value="photo" className="mt-0">
            <PhotoDiagnosticTab />
          </TabsContent>
          <TabsContent value="calculators" className="mt-0">
            <CalculatorsTab />
          </TabsContent>
          <TabsContent value="logging" className="mt-0">
            <DataLoggingTab isGuest={isGuest} />
          </TabsContent>
          <TabsContent value="community" className="mt-0">
            <CommunityTab isGuest={isGuest} onNavigate={setActiveTab} />
          </TabsContent>
        </Suspense>
      </Tabs>

      {/* Upgrade Modal */}
      {showUpgradeModal && (
        <ProfileSetupModal
          isGuestUpgrade={true}
          onClose={handleCloseUpgradeModal}
        />
      )}
    </div>
  );
}
