import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  Briefcase,
  ChevronRight,
  HelpCircle,
  Home,
  Wrench,
  X,
} from "lucide-react";
import { useState } from "react";

interface OnboardingScreen {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface OnboardingWalkthroughProps {
  onComplete: () => void;
  onSkip: () => void;
}

const screens: OnboardingScreen[] = [
  {
    icon: <Home className="h-12 w-12 text-primary" />,
    title: "Welcome to HVAC Buddy Pro",
    description:
      "Your complete toolkit for HVAC diagnostics, EPA certification prep, and field work management. Start from the dashboard to access all features.",
  },
  {
    icon: <Wrench className="h-12 w-12 text-primary" />,
    title: "Diagnostics & Troubleshooter",
    description:
      "Get AI-powered diagnostic assistance and step-by-step troubleshooting guidance for any HVAC system issue.",
  },
  {
    icon: <BookOpen className="h-12 w-12 text-primary" />,
    title: "Study & Exams",
    description:
      "Master EPA 608 certification with comprehensive study modules, practice exams, and video tutorials.",
  },
  {
    icon: <Briefcase className="h-12 w-12 text-primary" />,
    title: "Jobs & Logging",
    description:
      "Manage customer jobs, log measurements, and generate professional service reports with photo documentation.",
  },
  {
    icon: <HelpCircle className="h-12 w-12 text-primary" />,
    title: "Help & Videos",
    description:
      "Access expert help, educational videos, and community resources whenever you need assistance.",
  },
];

export default function OnboardingWalkthrough({
  onComplete,
  onSkip,
}: OnboardingWalkthroughProps) {
  const [currentScreen, setCurrentScreen] = useState(0);

  const handleNext = () => {
    if (currentScreen < screens.length - 1) {
      setCurrentScreen(currentScreen + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onSkip();
  };

  const screen = screens[currentScreen];
  const isLastScreen = currentScreen === screens.length - 1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <Card className="w-full max-w-md mx-4 shadow-lg">
        <CardHeader className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4"
            onClick={handleSkip}
            aria-label="Skip walkthrough"
          >
            <X className="h-4 w-4" />
          </Button>
          <div className="flex justify-center mb-4">{screen.icon}</div>
          <CardTitle className="text-center text-xl sm:text-2xl">
            {screen.title}
          </CardTitle>
          <CardDescription className="text-center text-sm sm:text-base mt-2">
            {screen.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center gap-2 mt-4">
            {screens.map((_, index) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: static fixed-length dot indicators
                key={`dot-${index}`}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentScreen ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between gap-2">
          <Button variant="outline" onClick={handleSkip} className="flex-1">
            Skip
          </Button>
          <Button onClick={handleNext} className="flex-1">
            {isLastScreen ? "Get Started" : "Next"}
            {!isLastScreen && <ChevronRight className="ml-2 h-4 w-4" />}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
