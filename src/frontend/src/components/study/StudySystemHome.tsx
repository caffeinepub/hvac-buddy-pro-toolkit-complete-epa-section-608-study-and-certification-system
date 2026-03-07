import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  Gauge,
  GraduationCap,
  Shield,
  TrendingUp,
  Wrench,
  Zap,
} from "lucide-react";
import type { StudyMode } from "../../types/study";

interface StudySystemHomeProps {
  onNavigate: (
    view:
      | "home"
      | "core-lessons"
      | "epa-608"
      | "progress"
      | "multimeter-training"
      | "uei-dl589-guide"
      | "hvac-electrical-fundamentals"
      | "digital-gauges-probes",
  ) => void;
  studyMode: StudyMode;
}

export default function StudySystemHome({
  onNavigate,
  studyMode,
}: StudySystemHomeProps) {
  const isBeginner = studyMode.__kind__ === "beginner";

  return (
    <div className="space-y-6">
      {/* Hero Section with Visual */}
      <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="grid gap-6 md:grid-cols-2">
          <CardHeader className="pb-6">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <GraduationCap className="h-7 w-7 text-primary" />
                  Interactive HVAC Study System
                </CardTitle>
                <CardDescription className="mt-2 text-base">
                  Master HVAC fundamentals and prepare for EPA 608 certification
                </CardDescription>
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary inline-block">
              {isBeginner ? "Beginner Mode" : "Expert Mode"}
            </div>
          </CardHeader>
          <div className="hidden md:block">
            <img
              src="/assets/generated/hvac-technician-hero.dim_800x600.jpg"
              alt="HVAC technician working on system"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <CardContent className="pt-0">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-start gap-3 rounded-lg bg-card p-4">
              <BookOpen className="h-6 w-6 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold">Core Lessons</h3>
                <p className="text-sm text-muted-foreground">
                  Theory, formulas, and interactive diagrams
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-card p-4">
              <Shield className="h-6 w-6 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold">EPA 608 Prep</h3>
                <p className="text-sm text-muted-foreground">
                  Certification practice questions
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-card p-4">
              <Zap className="h-6 w-6 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold">Hands-On Practice</h3>
                <p className="text-sm text-muted-foreground">
                  Interactive exercises
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Module Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Core HVAC Lessons */}
        <Card className="overflow-hidden transition-all hover:shadow-lg">
          <div className="aspect-video overflow-hidden bg-muted">
            <img
              src="/assets/generated/hvac-textbook-cover.dim_400x500.png"
              alt="Modern Refrigeration & Air Conditioning textbook"
              className="h-full w-full object-cover"
            />
          </div>
          <CardHeader>
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <CardTitle>Core HVAC Lessons</CardTitle>
            <CardDescription>
              Based on "Modern Refrigeration & Air Conditioning" textbook with
              interactive visual diagrams
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Thermodynamics & Heat Transfer</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Refrigeration Cycle Fundamentals</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Airflow & Duct Design</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Electrical Systems & Components</span>
              </div>
            </div>
            <Button
              onClick={() => onNavigate("core-lessons")}
              className="w-full"
            >
              Start Learning
            </Button>
          </CardContent>
        </Card>

        {/* EPA 608 Certification */}
        <Card className="overflow-hidden transition-all hover:shadow-lg">
          <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
            <img
              src="/assets/generated/epa-608-badge-transparent.dim_200x200.png"
              alt="EPA 608 Certification Badge"
              className="h-32 w-32 object-contain"
            />
          </div>
          <CardHeader>
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <CardTitle>EPA Section 608 Prep</CardTitle>
            <CardDescription>
              Complete certification study guide and practice exams with visual
              aids
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Type I: Small Appliances</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Type II: High-Pressure Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Type III: Low-Pressure Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Universal Certification</span>
              </div>
            </div>
            <Button onClick={() => onNavigate("epa-608")} className="w-full">
              Begin Prep
            </Button>
          </CardContent>
        </Card>

        {/* Multimeter Training */}
        <Card className="overflow-hidden transition-all hover:shadow-lg border-accent/30">
          <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-accent/10 to-primary/10">
            <img
              src="/assets/generated/digital-multimeter.dim_400x300.png"
              alt="Digital Multimeter"
              className="h-40 w-auto object-contain"
            />
          </div>
          <CardHeader>
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-accent/10">
              <Gauge className="h-8 w-8 text-accent" />
            </div>
            <CardTitle>Multimeter Training</CardTitle>
            <CardDescription>
              Master electrical testing with comprehensive multimeter and clamp
              meter training
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>Continuity Testing (Power OFF)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>Resistance (Ohms) Measurement</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>Voltage (VAC) Testing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>Amperage (Clamp Meter)</span>
              </div>
            </div>
            <Button
              onClick={() => onNavigate("multimeter-training")}
              className="w-full"
              variant="secondary"
            >
              Start Training
            </Button>
          </CardContent>
        </Card>

        {/* UEi DL589 Multimeter Guide - NEW */}
        <Card className="overflow-hidden transition-all hover:shadow-lg border-primary/30">
          <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
            <img
              src="/assets/generated/digital-multimeter.dim_400x300.png"
              alt="UEi DL589 Multimeter"
              className="h-40 w-auto object-contain"
            />
          </div>
          <CardHeader>
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
              <Wrench className="h-8 w-8 text-primary" />
            </div>
            <CardTitle>UEi DL589 Multimeter Guide</CardTitle>
            <CardDescription>
              Complete reference guide for the UEi DL589 with HVAC-specific
              applications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>AC/DC Voltage & Amperage</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Resistance & Continuity</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Capacitance & Temperature</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Frequency & Delta T</span>
              </div>
            </div>
            <Button
              onClick={() => onNavigate("uei-dl589-guide")}
              className="w-full"
              variant="outline"
            >
              View Guide
            </Button>
          </CardContent>
        </Card>

        {/* HVAC Electrical Fundamentals */}
        <Card className="overflow-hidden transition-all hover:shadow-lg border-accent/30">
          <CardHeader>
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-accent/10">
              <Zap className="h-8 w-8 text-accent" />
            </div>
            <CardTitle>HVAC Electrical Fundamentals</CardTitle>
            <CardDescription>
              Essential electrical theory for HVAC technicians — from Ohm's Law
              to Variable Frequency Drives
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>Voltage, Current &amp; Ohm's Law</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>Series &amp; Parallel Circuits</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>Motors, Contactors &amp; Protection</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>Variable Frequency Drives (VFD)</span>
              </div>
            </div>
            <Button
              onClick={() => onNavigate("hvac-electrical-fundamentals")}
              className="w-full"
              data-ocid="study.hvac-electrical.primary_button"
            >
              Start Learning
            </Button>
          </CardContent>
        </Card>

        {/* Digital Gauges & Smart Probes */}
        <Card className="overflow-hidden transition-all hover:shadow-lg border-primary/30">
          <CardHeader>
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
              <Gauge className="h-8 w-8 text-primary" />
            </div>
            <CardTitle>Digital Gauges &amp; Smart Probes</CardTitle>
            <CardDescription>
              Master modern HVAC diagnostic instruments — digital manifolds,
              pressure probes, temperature clamps, and micron gauges
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Digital Manifold Gauges</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Pressure Probes &amp; Wireless Sensors</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Temperature Clamps — Superheat &amp; Subcooling</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Micron Gauges &amp; Evacuation Standards</span>
              </div>
            </div>
            <Button
              onClick={() => onNavigate("digital-gauges-probes")}
              className="w-full"
              data-ocid="study.digital-gauges.primary_button"
            >
              Start Training
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Study Mode Selection Visual */}
      <Card className="overflow-hidden border-accent/20 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="hidden md:block">
            <img
              src="/assets/generated/study-mode-selection.dim_600x400.png"
              alt="Study mode selection interface"
              className="h-full w-full object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Track Your Progress
            </CardTitle>
            <CardDescription>
              View completed modules, quiz scores, and identify areas for
              improvement with visual analytics
            </CardDescription>
            <div className="pt-4">
              <Button
                onClick={() => onNavigate("progress")}
                variant="outline"
                className="w-full"
              >
                View Progress Dashboard
              </Button>
            </div>
          </CardHeader>
        </div>
      </Card>

      {/* Interactive Learning Features */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="transition-all hover:shadow-md">
          <CardContent className="pt-6">
            <div className="mb-4 flex h-20 items-center justify-center">
              <img
                src="/assets/generated/flashcard-stack.dim_400x300.png"
                alt="Flashcard learning system"
                className="h-full w-auto object-contain"
              />
            </div>
            <h3 className="mb-2 text-center font-semibold">Flashcards</h3>
            <p className="text-center text-sm text-muted-foreground">
              Master key terms and concepts with spaced repetition
            </p>
          </CardContent>
        </Card>

        <Card className="transition-all hover:shadow-md">
          <CardContent className="pt-6">
            <div className="mb-4 flex h-20 items-center justify-center">
              <img
                src="/assets/generated/quiz-interface.dim_600x400.png"
                alt="Interactive quiz interface"
                className="h-full w-auto object-contain"
              />
            </div>
            <h3 className="mb-2 text-center font-semibold">Practice Quizzes</h3>
            <p className="text-center text-sm text-muted-foreground">
              Test your knowledge with instant feedback
            </p>
          </CardContent>
        </Card>

        <Card className="transition-all hover:shadow-md">
          <CardContent className="pt-6">
            <div className="mb-4 flex h-20 items-center justify-center">
              <img
                src="/assets/generated/progress-dashboard.dim_800x500.png"
                alt="Progress tracking dashboard"
                className="h-full w-auto object-contain"
              />
            </div>
            <h3 className="mb-2 text-center font-semibold">
              Progress Analytics
            </h3>
            <p className="text-center text-sm text-muted-foreground">
              Track your learning journey with detailed metrics
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
