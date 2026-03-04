import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { useInternetIdentity } from "@/hooks/useInternetIdentity";
import { ConfidenceLevel, DiagnosticMode, SessionStatus } from "@/types/local";
import {
  AlertCircle,
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  Bot,
  Calculator,
  CheckCircle2,
  ChevronRight,
  Download,
  HelpCircle,
  History,
  Info,
  Lightbulb,
  Loader2,
  MessageCircle,
  RotateCcw,
  ShieldAlert,
  ThermometerSun,
  TrendingUp,
  TriangleAlert,
  WifiOff,
  Wrench,
  XCircle,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { GUEST_RESTRICTION_MESSAGE } from "../../utils/guestRestrictions";

interface TroubleshooterTabProps {
  isGuest: boolean;
}

type SessionPhase =
  | "mode-selection"
  | "diagnostic-flow"
  | "summary"
  | "history"
  | "analytics"
  | "ac-beginner";

interface DiagnosticStep {
  id: string;
  title: string;
  category?: string;
  question: string;
  explanation?: string;
  safetyWarning?: string;
  beginnerTip?: string;
  expertNote?: string;
  inputType: "yesNo" | "choice" | "measurement" | "number";
  options?: string[];
  measurements?: Array<{
    label: string;
    key: string;
    unit: string;
    min?: number;
    max?: number;
    optimal?: { min: number; max: number };
  }>;
  numberLabel?: string;
  numberUnit?: string;
  autoCalculate?: boolean;
  relatedDiagram?: string;
  relatedCalculator?: string;
  relatedLesson?: string;
}

interface DiagnosticAnswer {
  value: string;
  measurements?: Record<string, string>;
}

interface FaultProbability {
  cause: string;
  probability: number;
  severity: "low" | "medium" | "high";
  relatedMeasurements: string[];
  studyModuleLink?: string;
  calculatorLink?: string;
  explanation?: string;
}

interface AIRecommendation {
  type: "safety" | "caution" | "info" | "learning" | "followup";
  priority: "critical" | "high" | "medium" | "low";
  message: string;
  actionLink?: { label: string; path: string };
  isFollowUpQuestion?: boolean;
  expectedAnswerType?: "yesNo" | "text" | "number";
}

interface DiagnosticSession {
  id: bigint;
  mode: DiagnosticMode;
  symptom: string;
  currentStepIndex: number;
  answers: Record<string, DiagnosticAnswer>;
  measurements: Record<string, string>;
  calculations: Record<
    string,
    { value: number; status: "good" | "caution" | "critical" }
  >;
  confidence: number;
  startTime: number;
  status: SessionStatus;
  voiceGuidanceEnabled: boolean;
  aiAssistanceEnabled: boolean;
  faultProbabilities: FaultProbability[];
  aiRecommendations: AIRecommendation[];
  followUpAnswers: Record<string, string>;
  isOffline?: boolean;
}

interface DiagnosticFlowDefinition {
  name: string;
  description: string;
  steps: DiagnosticStep[];
}

const coolingDiagnosticFlow: DiagnosticFlowDefinition = {
  name: "Cooling System Troubleshooting",
  description:
    "Complete step-by-step cooling system diagnostic with adaptive AI assistance",
  steps: [
    {
      id: "thermostat-verification",
      title: "Thermostat Verification",
      category: "Basic Checks",
      question:
        "Is the thermostat set to COOL mode and set temperature is below room temperature?",
      explanation:
        "The thermostat controls when the system runs. If not set correctly, the system will not cool.",
      beginnerTip:
        'Check that the display shows "COOL" mode and the set temperature is at least 3-5°F below the current room temperature. This is the first and easiest check to perform.',
      expertNote:
        "Verify thermostat is receiving 24VAC and properly wired. Check for loose connections.",
      inputType: "yesNo",
      relatedLesson: "/study/core-lessons/electrical",
    },
    {
      id: "power-check",
      title: "Power Check",
      category: "Basic Checks",
      question: "Is the outdoor unit receiving power and running?",
      explanation:
        "The outdoor unit (condenser) must run for the system to cool. Check if the fan is spinning and the compressor is humming.",
      beginnerTip:
        "Go outside and look at the outdoor unit. You should see the fan spinning and hear the compressor running. If not, check the circuit breaker and disconnect switch.",
      safetyWarning:
        "ELECTRICAL HAZARD: Do not touch electrical components. Keep hands away from moving fan blades. Turn off power before any inspection.",
      expertNote:
        "Check voltage at contactor, verify proper phase voltage, inspect for loose connections.",
      inputType: "yesNo",
      relatedLesson: "/study/core-lessons/electrical",
    },
    {
      id: "air-filter",
      title: "Air Filter Inspection",
      category: "Basic Checks",
      question: "What is the condition of the air filter?",
      explanation:
        "A dirty filter restricts airflow, reducing cooling capacity and potentially causing the evaporator coil to freeze.",
      beginnerTip:
        "Remove the filter and hold it up to light. If you cannot see light through it, it needs replacement. This is one of the most common causes of cooling problems.",
      expertNote:
        "Check filter MERV rating and ensure proper fit. Inspect for bypass airflow around filter.",
      inputType: "choice",
      options: ["Clean", "Slightly dirty", "Very dirty", "Completely blocked"],
      relatedLesson: "/study/core-lessons/airflow",
    },
    {
      id: "airflow-assessment",
      title: "Airflow Assessment",
      category: "Basic Checks",
      question: "How would you describe the airflow from the supply vents?",
      explanation:
        "Proper airflow is essential for cooling. Weak airflow indicates blower motor, ductwork, or filter issues.",
      beginnerTip:
        "Hold your hand near a supply vent. You should feel strong, steady airflow. Weak airflow means something is restricting air movement.",
      expertNote:
        "Measure static pressure and CFM if possible. Compare to manufacturer specifications.",
      inputType: "choice",
      options: ["Strong", "Moderate", "Weak", "Very weak or none"],
      relatedCalculator: "/calculators",
      relatedLesson: "/study/core-lessons/airflow",
    },
    {
      id: "temperature-measurements",
      title: "Temperature Measurements",
      category: "Measurements",
      question: "Record supply and return air temperatures",
      explanation:
        "The temperature difference (Delta T) between supply and return air should typically be 15-20°F for proper cooling.",
      beginnerTip:
        "Use a digital thermometer. Measure at the supply vent (cold air) and return grille (warm air). The difference tells us how well the system is cooling.",
      expertNote:
        "Take measurements at steady-state operation (after 15 minutes of runtime). Account for outdoor ambient conditions.",
      inputType: "measurement",
      measurements: [
        {
          label: "Return Air Temp",
          key: "returnTemp",
          unit: "°F",
          min: 60,
          max: 90,
          optimal: { min: 70, max: 80 },
        },
        {
          label: "Supply Air Temp",
          key: "supplyTemp",
          unit: "°F",
          min: 40,
          max: 70,
          optimal: { min: 50, max: 60 },
        },
      ],
      autoCalculate: true,
      relatedCalculator: "/calculators",
      relatedLesson: "/study/core-lessons/thermodynamics",
    },
    {
      id: "refrigerant-pressure",
      title: "Refrigerant Pressure Check",
      category: "Measurements",
      question: "Record suction and discharge pressures",
      explanation:
        "Refrigerant pressures indicate the health of the refrigeration cycle. These measurements are critical for diagnosing charge and system issues.",
      safetyWarning:
        "REFRIGERANT SAFETY: Only qualified technicians should connect gauges to the refrigerant system. Improper handling can cause injury or environmental damage.",
      beginnerTip:
        "Connect gauges to service ports. Blue gauge shows suction (low) pressure, red gauge shows discharge (high) pressure. Compare to pressure-temperature charts for your refrigerant type.",
      expertNote:
        "Compare pressures to manufacturer specifications for the refrigerant type and ambient conditions. Check for proper subcooling and superheat.",
      inputType: "measurement",
      measurements: [
        {
          label: "Suction Pressure",
          key: "suctionPressure",
          unit: "PSI",
          min: 0,
          max: 150,
          optimal: { min: 60, max: 80 },
        },
        {
          label: "Discharge Pressure",
          key: "dischargePressure",
          unit: "PSI",
          min: 0,
          max: 500,
          optimal: { min: 200, max: 300 },
        },
      ],
      relatedLesson: "/study/core-lessons/refrigeration",
      relatedCalculator: "/calculators",
    },
    {
      id: "superheat-subcooling",
      title: "Superheat & Subcooling",
      category: "Measurements",
      question: "Enter superheat and subcooling values",
      explanation:
        "Superheat and subcooling are critical indicators of proper refrigerant charge. These measurements tell us if the system has the right amount of refrigerant.",
      beginnerTip:
        "Superheat should typically be 8-12°F, subcooling 10-15°F for most systems. Higher superheat means low charge, lower superheat means overcharge.",
      expertNote:
        "Adjust target values based on system type (TXV vs fixed orifice) and manufacturer specs. Consider outdoor ambient temperature.",
      inputType: "measurement",
      measurements: [
        {
          label: "Superheat",
          key: "superheat",
          unit: "°F",
          min: 0,
          max: 50,
          optimal: { min: 8, max: 12 },
        },
        {
          label: "Subcooling",
          key: "subcooling",
          unit: "°F",
          min: 0,
          max: 30,
          optimal: { min: 10, max: 15 },
        },
      ],
      relatedCalculator: "/calculators",
      relatedLesson: "/study/epa-608/core",
    },
    {
      id: "compressor-check",
      title: "Compressor Operation Check",
      category: "Measurements",
      question: "Record compressor amp draw and nameplate amperage",
      explanation:
        "Compressor amp draw should be within 10% of nameplate rating. High or low amp draw indicates electrical or mechanical problems.",
      safetyWarning:
        "ELECTRICAL SAFETY: Use a clamp meter. Do not touch live electrical components. Ensure proper insulation on meter leads.",
      beginnerTip:
        "Clamp the meter around one wire going to the compressor. Compare the reading to the nameplate on the outdoor unit. They should be close.",
      expertNote:
        "Check RLA (Rated Load Amps) and LRA (Locked Rotor Amps). Test capacitor if amp draw is high.",
      inputType: "measurement",
      measurements: [
        {
          label: "Measured Amp Draw",
          key: "ampDraw",
          unit: "A",
          min: 0,
          max: 50,
        },
        {
          label: "Nameplate Amp",
          key: "nameplateAmp",
          unit: "A",
          min: 0,
          max: 50,
        },
      ],
      autoCalculate: true,
      relatedLesson: "/study/core-lessons/electrical",
    },
    {
      id: "condenser-coil",
      title: "Condenser Coil Condition",
      category: "Deeper Inspection",
      question: "What is the condition of the outdoor condenser coil?",
      explanation:
        "A dirty condenser coil reduces heat rejection, causing high head pressure and reduced cooling capacity.",
      beginnerTip:
        "Look at the outdoor coil fins. They should be clean and straight, not bent or clogged with debris. A dirty coil makes the system work harder and less efficiently.",
      expertNote:
        "Inspect both sides of coil. Check for fin damage, debris between fins, and proper clearance around unit.",
      inputType: "choice",
      options: ["Clean", "Slightly dirty", "Very dirty", "Blocked with debris"],
      relatedLesson: "/study/core-lessons/refrigeration",
    },
    {
      id: "leak-detection",
      title: "Refrigerant Leak Detection",
      category: "Deeper Inspection",
      question: "Are there any signs of refrigerant leaks?",
      explanation:
        "Look for oil stains, bubbles at connections, or use an electronic leak detector. Leaks must be repaired before adding refrigerant.",
      safetyWarning:
        "EPA REGULATION: Never vent refrigerant to atmosphere - it is illegal and harmful to the environment. Proper recovery is required.",
      beginnerTip:
        "Common leak points include service valves, coil connections, and brazed joints. Oil stains often indicate refrigerant leaks.",
      expertNote:
        "Use electronic leak detector with proper sensitivity. Check all brazed joints, flare connections, and Schrader valves.",
      inputType: "yesNo",
      relatedLesson: "/study/epa-608/core",
    },
  ],
};

// Enhanced AI Analysis Engine with Mode-Adaptive Behavior
const AdaptiveAIEngine = {
  analyzeStep(
    stepId: string,
    answer: DiagnosticAnswer,
    _allAnswers: Record<string, DiagnosticAnswer>,
    _measurements: Record<string, string>,
    mode: DiagnosticMode,
    _followUpAnswers: Record<string, string>,
  ): { faults: FaultProbability[]; recommendations: AIRecommendation[] } {
    const faults: FaultProbability[] = [];
    const recommendations: AIRecommendation[] = [];
    const isBeginnerMode = mode === DiagnosticMode.beginner;

    // Analyze based on step with mode-adaptive responses
    switch (stepId) {
      case "thermostat-verification":
        if (answer.value === "no") {
          faults.push({
            cause: "Thermostat configuration issue",
            probability: 85,
            severity: "high",
            relatedMeasurements: ["thermostat"],
            studyModuleLink: "/study/core-lessons/electrical",
            explanation: isBeginnerMode
              ? "The thermostat is not set correctly. This is the most common and easiest problem to fix."
              : "Thermostat mode or setpoint misconfiguration detected.",
          });

          recommendations.push({
            type: "caution",
            priority: "high",
            message: isBeginnerMode
              ? "Thermostat issue detected. Make sure it's set to COOL mode and the temperature is set at least 3-5°F below room temperature. Check the batteries if it's battery-powered."
              : "Verify thermostat mode, setpoint, and 24VAC power supply.",
            actionLink: {
              label: "Learn about thermostats",
              path: "/study/core-lessons/electrical",
            },
          });

          // AI Follow-up question
          recommendations.push({
            type: "followup",
            priority: "medium",
            message: "What type of thermostat system are you working with?",
            isFollowUpQuestion: true,
            expectedAnswerType: "text",
          });
        } else {
          recommendations.push({
            type: "info",
            priority: "low",
            message: isBeginnerMode
              ? "Good! The thermostat is set correctly. Let's continue checking other components."
              : "Thermostat configuration verified.",
          });
        }
        break;

      case "power-check":
        if (answer.value === "no") {
          faults.push({
            cause: "Electrical power issue",
            probability: 90,
            severity: "high",
            relatedMeasurements: ["power", "voltage"],
            studyModuleLink: "/study/core-lessons/electrical",
            explanation: isBeginnerMode
              ? "The outdoor unit is not getting power or not running. This could be a tripped breaker, blown fuse, or bad contactor."
              : "Power supply failure or contactor malfunction.",
          });

          recommendations.push({
            type: "safety",
            priority: "critical",
            message: isBeginnerMode
              ? "SAFETY ALERT: Check circuit breakers and disconnect switches first. If they're on, DO NOT proceed with electrical work unless you are qualified. Electrical work can be dangerous."
              : "SAFETY: Verify breakers, disconnect, and fuses. Check voltage at contactor. Use proper PPE.",
            actionLink: {
              label: "Electrical safety guide",
              path: "/study/core-lessons/electrical",
            },
          });

          // AI Follow-up questions
          recommendations.push({
            type: "followup",
            priority: "high",
            message: "Are the circuit breakers in the ON position?",
            isFollowUpQuestion: true,
            expectedAnswerType: "yesNo",
          });
        }
        break;

      case "air-filter":
        if (
          answer.value === "Very dirty" ||
          answer.value === "Completely blocked"
        ) {
          faults.push({
            cause: "Severe airflow restriction due to dirty filter",
            probability: 91,
            severity: "high",
            relatedMeasurements: ["airflow", "deltaT"],
            explanation: isBeginnerMode
              ? "A very dirty or blocked filter is choking your system. This is one of the most common problems and the easiest to fix."
              : "Critical airflow restriction detected.",
          });

          recommendations.push({
            type: "caution",
            priority: "high",
            message: isBeginnerMode
              ? "Replace the air filter immediately! A blocked filter can cause the evaporator coil to freeze and damage the system. This is likely your main problem."
              : "Replace filter immediately. Severe restriction may have caused coil freezing or system damage.",
            actionLink: {
              label: "Airflow principles",
              path: "/study/core-lessons/airflow",
            },
          });

          // AI Follow-up
          recommendations.push({
            type: "followup",
            priority: "medium",
            message: "How long has this filter been in service?",
            isFollowUpQuestion: true,
            expectedAnswerType: "text",
          });
        } else if (answer.value === "Slightly dirty") {
          recommendations.push({
            type: "info",
            priority: "medium",
            message: isBeginnerMode
              ? "The filter is slightly dirty. Consider replacing it soon to maintain good airflow and efficiency."
              : "Filter approaching replacement interval. Monitor airflow.",
          });
        } else {
          recommendations.push({
            type: "info",
            priority: "low",
            message: isBeginnerMode
              ? "Good! The filter is clean. The problem is likely elsewhere."
              : "Filter condition acceptable.",
          });
        }
        break;

      // Additional step analysis would continue here...
      default:
        break;
    }

    return { faults, recommendations };
  },

  generateSmartSummary(
    session: DiagnosticSession,
    mode: DiagnosticMode,
  ): {
    summary: string;
    nextSteps: string[];
    learningRecommendations: string[];
  } {
    const isBeginnerMode = mode === DiagnosticMode.beginner;
    const topFaults = session.faultProbabilities.slice(0, 3);

    const summary = isBeginnerMode
      ? `Based on your diagnostic session, I've identified ${topFaults.length} likely causes for the cooling problem. The most probable issue is: ${topFaults[0]?.cause || "Unknown"}. This diagnostic took ${Math.round((Date.now() - session.startTime) / 60000)} minutes to complete.`
      : `Diagnostic analysis complete. ${topFaults.length} fault probabilities identified with ${session.confidence}% confidence. Primary fault: ${topFaults[0]?.cause || "Unknown"}.`;

    const nextSteps = isBeginnerMode
      ? [
          "Review the top 3 likely causes listed below",
          "Start with the highest probability issue first",
          "Gather the recommended tools and parts",
          "Follow safety procedures before starting repairs",
          "Consider calling a professional if you're unsure",
        ]
      : [
          "Verify top fault probabilities with additional testing",
          "Procure necessary parts and tools",
          "Execute repairs following manufacturer specifications",
          "Perform post-repair verification testing",
        ];

    const learningRecommendations = isBeginnerMode
      ? [
          "Review the study modules linked in the recommendations",
          "Watch related video tutorials in the Community tab",
          "Practice with the interactive tools in the Study section",
        ]
      : [
          "Review advanced diagnostic techniques for similar faults",
          "Study manufacturer technical bulletins",
        ];

    return { summary, nextSteps, learningRecommendations };
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// AC Beginner Diagnostic – data types, step definitions, and component
// ─────────────────────────────────────────────────────────────────────────────

interface ACBeginnerStep {
  id: string;
  stepNumber: number;
  title: string;
  question: string;
  explanation: string;
  safetyNote?: string;
  yesOutcome: {
    message: string;
    nextStepId: string | "done";
    severity: "ok" | "warn" | "critical";
  };
  noOutcome: {
    message: string;
    nextStepId: string | "done";
    severity: "ok" | "warn" | "critical";
  };
}

const acBeginnerSteps: ACBeginnerStep[] = [
  {
    id: "thermostat",
    stepNumber: 1,
    title: "Thermostat Settings",
    question:
      "Is the thermostat set to COOL mode with the set temperature lower than the current room temperature?",
    explanation:
      "The thermostat tells the AC when to run. If it's not set to COOL or the target temp is too high, the unit won't turn on.",
    yesOutcome: {
      message:
        "Good – thermostat looks correct. Let's check the air filter next.",
      nextStepId: "air-filter",
      severity: "ok",
    },
    noOutcome: {
      message:
        "Set the thermostat to COOL mode and lower the set point at least 3–5°F below room temperature. Wait 5 minutes and check if the AC starts.",
      nextStepId: "done",
      severity: "warn",
    },
  },
  {
    id: "air-filter",
    stepNumber: 2,
    title: "Air Filter Condition",
    question: "Is the air filter clean and free of heavy dust buildup?",
    explanation:
      "A clogged filter blocks airflow, which can cause the system to shut down on safety or the evaporator coil to freeze over.",
    yesOutcome: {
      message: "Filter looks good. Let's check the outdoor unit next.",
      nextStepId: "outdoor-condenser",
      severity: "ok",
    },
    noOutcome: {
      message:
        "Replace the air filter now. A blocked filter is one of the most common reasons an AC stops working. After replacing, wait 30 minutes for any frozen coil to thaw before restarting.",
      nextStepId: "done",
      severity: "warn",
    },
  },
  {
    id: "outdoor-condenser",
    stepNumber: 3,
    title: "Outdoor Condenser Operation",
    question:
      "Is the outdoor condenser unit running? (fan spinning, unit humming)",
    explanation:
      "The outdoor unit houses the compressor and condenser fan. If it's completely silent and still, power or a safety control may be the issue.",
    safetyNote:
      "Do not reach into the outdoor unit or touch electrical parts. Observe only from outside the unit.",
    yesOutcome: {
      message: "Outdoor unit is running. Let's check the electrical breaker.",
      nextStepId: "breaker",
      severity: "ok",
    },
    noOutcome: {
      message:
        "The outdoor unit isn't running. This could mean a tripped breaker, a blown fuse, or a safety shutoff. Let's check the breaker next.",
      nextStepId: "breaker",
      severity: "warn",
    },
  },
  {
    id: "breaker",
    stepNumber: 4,
    title: "Electrical Breaker Status",
    question:
      "Are the circuit breakers for the AC system fully in the ON position (none tripped or in the middle)?",
    explanation:
      "A tripped breaker looks like it's halfway between ON and OFF. Reset it once by turning it fully OFF, then back ON. If it trips again, stop and call a technician.",
    safetyNote:
      "Only reset a breaker once. A breaker that keeps tripping indicates a deeper electrical problem — do not force it.",
    yesOutcome: {
      message:
        "Breakers are on. Let's look for ice on the evaporator coil or refrigerant lines.",
      nextStepId: "ice-check",
      severity: "ok",
    },
    noOutcome: {
      message:
        "Reset the tripped breaker once: flip it fully OFF, then back ON. Wait 3–5 minutes and try the thermostat again. If it trips a second time, call a licensed technician — do not reset again.",
      nextStepId: "done",
      severity: "critical",
    },
  },
  {
    id: "ice-check",
    stepNumber: 5,
    title: "Ice on Evaporator Coil or Lines",
    question:
      "Do you see ice or frost on the indoor unit (evaporator coil) or the refrigerant lines running to it?",
    explanation:
      "Ice buildup usually means restricted airflow (dirty filter, blocked vents) or low refrigerant. The system should be shut off and allowed to thaw before it can run again.",
    yesOutcome: {
      message:
        "Turn the system OFF at the thermostat and let the ice thaw for 2–4 hours with the fan set to ON only. Check that all vents are open and unblocked. After thawing, check and replace the filter before restarting. If it freezes again, you likely have a refrigerant issue — call a technician.",
      nextStepId: "done",
      severity: "warn",
    },
    noOutcome: {
      message:
        "No ice found. Let's check the condenser coil for dirt or blockage.",
      nextStepId: "condenser-coil",
      severity: "ok",
    },
  },
  {
    id: "condenser-coil",
    stepNumber: 6,
    title: "Condenser Coil Cleanliness",
    question:
      "Is the outdoor condenser coil free of dirt, leaves, grass, or debris?",
    explanation:
      "A dirty or blocked condenser coil can't release heat properly, causing the system to overheat and shut off on high-pressure safety.",
    yesOutcome: {
      message:
        "Condenser coil looks clean. Let's check for potential refrigerant issues as a final step.",
      nextStepId: "refrigerant",
      severity: "ok",
    },
    noOutcome: {
      message:
        "Gently rinse the condenser coil with a garden hose from the inside out (if accessible) or clear visible debris. Do not use a pressure washer. After cleaning, let it dry and try restarting the system.",
      nextStepId: "refrigerant",
      severity: "warn",
    },
  },
  {
    id: "refrigerant",
    stepNumber: 7,
    title: "Possible Refrigerant Issues",
    question:
      "Has the system been cooling normally up until recently, with no history of refrigerant work or leaks?",
    explanation:
      "If the system was working fine and all the above checks pass, low refrigerant from a slow leak is possible. Refrigerant cannot be added without finding and repairing the leak first — this requires a licensed technician.",
    yesOutcome: {
      message:
        "All basic checks pass. The system may have a refrigerant leak or a deeper mechanical issue. Contact a licensed HVAC technician for further diagnosis — mention that you've already checked thermostat settings, filter, breakers, ice, and condenser coil.",
      nextStepId: "done",
      severity: "warn",
    },
    noOutcome: {
      message:
        "If the system has had recent refrigerant work or a known leak history, contact your HVAC technician to check the charge and inspect for leaks. Do not attempt to add refrigerant yourself — it requires EPA certification and proper equipment.",
      nextStepId: "done",
      severity: "critical",
    },
  },
];

interface BeginnerAnswer {
  stepId: string;
  stepTitle: string;
  stepNumber: number;
  answer: "yes" | "no";
  outcome: ACBeginnerStep["yesOutcome"];
}

function BeginnerACDiagnostic({ onBack }: { onBack: () => void }) {
  const [currentStepId, setCurrentStepId] = useState<string>("thermostat");
  const [answers, setAnswers] = useState<BeginnerAnswer[]>([]);
  const [isDone, setIsDone] = useState(false);
  const [pendingOutcome, setPendingOutcome] = useState<{
    outcome: ACBeginnerStep["yesOutcome"];
    answer: "yes" | "no";
  } | null>(null);

  const currentStep = acBeginnerSteps.find((s) => s.id === currentStepId);
  const completedCount = answers.length;
  const totalSteps = acBeginnerSteps.length;
  const progressValue = (completedCount / totalSteps) * 100;

  const handleAnswer = (answer: "yes" | "no") => {
    if (!currentStep) return;
    const outcome =
      answer === "yes" ? currentStep.yesOutcome : currentStep.noOutcome;
    setPendingOutcome({ outcome, answer });
  };

  const handleContinue = () => {
    if (!currentStep || !pendingOutcome) return;

    const newAnswer: BeginnerAnswer = {
      stepId: currentStep.id,
      stepTitle: currentStep.title,
      stepNumber: currentStep.stepNumber,
      answer: pendingOutcome.answer,
      outcome: pendingOutcome.outcome,
    };

    const updatedAnswers = [...answers, newAnswer];
    setAnswers(updatedAnswers);
    setPendingOutcome(null);

    if (pendingOutcome.outcome.nextStepId === "done") {
      setIsDone(true);
    } else {
      setCurrentStepId(pendingOutcome.outcome.nextStepId);
    }
  };

  const handleRestart = () => {
    setCurrentStepId("thermostat");
    setAnswers([]);
    setIsDone(false);
    setPendingOutcome(null);
  };

  const severityConfig = {
    ok: {
      className:
        "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950",
      iconColor: "text-green-600 dark:text-green-400",
      titleColor: "text-green-800 dark:text-green-200",
      Icon: CheckCircle2,
      label: "Good",
    },
    warn: {
      className:
        "border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950",
      iconColor: "text-amber-600 dark:text-amber-400",
      titleColor: "text-amber-800 dark:text-amber-200",
      Icon: AlertTriangle,
      label: "Attention Needed",
    },
    critical: {
      className: "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950",
      iconColor: "text-red-600 dark:text-red-400",
      titleColor: "text-red-800 dark:text-red-200",
      Icon: XCircle,
      label: "Stop – Action Required",
    },
  };

  // Summary: find most critical finding
  const mostCritical = answers.reduce<"ok" | "warn" | "critical">((acc, a) => {
    if (a.outcome.severity === "critical") return "critical";
    if (a.outcome.severity === "warn" && acc !== "critical") return "warn";
    return acc;
  }, "ok");

  const criticalFindings = answers.filter(
    (a) => a.outcome.severity === "critical",
  );
  const warnFindings = answers.filter((a) => a.outcome.severity === "warn");
  const okFindings = answers.filter((a) => a.outcome.severity === "ok");

  if (isDone) {
    return (
      <div className="space-y-4">
        {/* Header */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Diagnostic Complete
                </CardTitle>
                <CardDescription>
                  AC Not Turning On – Beginner Diagnostic Summary
                </CardDescription>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={onBack}
                data-ocid="ac_beginner.back_button"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Menu
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-5">
            {/* Progress bar showing all steps completed */}
            <div className="space-y-1">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>
                  {completedCount} of {totalSteps} checks completed
                </span>
                <span>{Math.round(progressValue)}%</span>
              </div>
              <Progress value={progressValue} className="h-2" />
            </div>

            {/* Overall status */}
            <div
              className={`rounded-lg border p-4 ${severityConfig[mostCritical].className}`}
            >
              <div className="flex items-center gap-2">
                {(() => {
                  const Ic = severityConfig[mostCritical].Icon;
                  return (
                    <Ic
                      className={`h-5 w-5 ${severityConfig[mostCritical].iconColor}`}
                    />
                  );
                })()}
                <span
                  className={`font-semibold ${severityConfig[mostCritical].titleColor}`}
                >
                  {mostCritical === "ok"
                    ? "All checks passed – deeper diagnosis needed"
                    : mostCritical === "warn"
                      ? "Action items identified – see findings below"
                      : "Critical issue found – immediate action required"}
                </span>
              </div>
            </div>

            {/* What to do next */}
            <div>
              <h3 className="mb-3 font-semibold text-base">What To Do Next</h3>
              <div className="space-y-2">
                {criticalFindings.length > 0 && (
                  <Alert variant="destructive">
                    <XCircle className="h-4 w-4" />
                    <AlertTitle>Critical – Address First</AlertTitle>
                    <AlertDescription>
                      {criticalFindings.map((f) => (
                        <p key={f.stepId} className="mt-1">
                          <strong>{f.stepTitle}:</strong> {f.outcome.message}
                        </p>
                      ))}
                    </AlertDescription>
                  </Alert>
                )}
                {warnFindings.length > 0 && (
                  <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-800 dark:bg-amber-950">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                      <span className="font-semibold text-sm text-amber-800 dark:text-amber-200">
                        Attention Needed
                      </span>
                    </div>
                    {warnFindings.map((f) => (
                      <p
                        key={f.stepId}
                        className="text-sm text-amber-900 dark:text-amber-100 mt-1"
                      >
                        <strong>{f.stepTitle}:</strong> {f.outcome.message}
                      </p>
                    ))}
                  </div>
                )}
                {okFindings.length > 0 &&
                  criticalFindings.length === 0 &&
                  warnFindings.length === 0 && (
                    <div className="rounded-lg border border-green-200 bg-green-50 p-3 dark:border-green-800 dark:bg-green-950">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                        <span className="font-semibold text-sm text-green-800 dark:text-green-200">
                          All Basic Checks Passed
                        </span>
                      </div>
                      <p className="text-sm text-green-900 dark:text-green-100">
                        No obvious issues were found with the basic checks. A
                        licensed HVAC technician should perform a deeper system
                        diagnosis.
                      </p>
                    </div>
                  )}
              </div>
            </div>

            <Separator />

            {/* Step-by-step answer log */}
            <div>
              <h3 className="mb-3 font-semibold text-base">Check Results</h3>
              <div className="space-y-2">
                {answers.map((a) => {
                  const cfg = severityConfig[a.outcome.severity];
                  const Ic = cfg.Icon;
                  return (
                    <div
                      key={a.stepId}
                      className={`flex items-start gap-3 rounded-lg border p-3 ${cfg.className}`}
                    >
                      <div className="mt-0.5 flex-shrink-0">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/60 dark:bg-black/30 text-xs font-bold text-foreground">
                          {a.stepNumber}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span
                            className={`text-sm font-semibold ${cfg.titleColor}`}
                          >
                            {a.stepTitle}
                          </span>
                          <Badge
                            variant="outline"
                            className="text-xs capitalize"
                          >
                            {a.answer}
                          </Badge>
                        </div>
                        <p className="text-sm text-foreground/80">
                          {a.outcome.message}
                        </p>
                      </div>
                      <Ic
                        className={`h-4 w-4 flex-shrink-0 mt-0.5 ${cfg.iconColor}`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <Button
                variant="outline"
                className="flex-1"
                onClick={handleRestart}
                data-ocid="ac_beginner.restart_button"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Start Over
              </Button>
              <Button
                className="flex-1"
                onClick={onBack}
                data-ocid="ac_beginner.back_button"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Troubleshooter
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <ThermometerSun className="h-5 w-5 text-primary" />
                AC Not Turning On – Beginner Diagnostic
              </CardTitle>
              <CardDescription>
                Step {completedCount + 1} of {totalSteps} • No tools or meters
                needed
              </CardDescription>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={onBack}
              data-ocid="ac_beginner.back_button"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Menu
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-5">
          {/* Progress */}
          <div className="space-y-1">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Progress</span>
              <span>
                {completedCount}/{totalSteps} checks
              </span>
            </div>
            <Progress value={progressValue} className="h-2" />
          </div>

          {currentStep && !pendingOutcome && (
            <div className="space-y-4">
              {/* Step badge + title */}
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  {currentStep.stepNumber}
                </span>
                <h3 className="text-lg font-semibold">{currentStep.title}</h3>
              </div>

              {/* Question */}
              <p className="text-base font-medium text-foreground">
                {currentStep.question}
              </p>

              {/* Explanation */}
              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>{currentStep.explanation}</AlertDescription>
              </Alert>

              {/* Safety note */}
              {currentStep.safetyNote && (
                <Alert variant="destructive">
                  <ShieldAlert className="h-4 w-4" />
                  <AlertTitle>Safety Note</AlertTitle>
                  <AlertDescription>{currentStep.safetyNote}</AlertDescription>
                </Alert>
              )}

              {/* Yes / No buttons */}
              <div className="flex gap-3 pt-1">
                <Button
                  className="flex-1 h-12 text-base"
                  onClick={() => handleAnswer("yes")}
                  data-ocid="ac_beginner.yes_button"
                >
                  <CheckCircle2 className="mr-2 h-5 w-5" />
                  Yes
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 h-12 text-base"
                  onClick={() => handleAnswer("no")}
                  data-ocid="ac_beginner.no_button"
                >
                  <XCircle className="mr-2 h-5 w-5" />
                  No
                </Button>
              </div>
            </div>
          )}

          {/* Outcome message shown after answering */}
          {currentStep && pendingOutcome && (
            <div className="space-y-4">
              {/* Recap what was asked */}
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  {currentStep.stepNumber}
                </span>
                <h3 className="text-lg font-semibold">{currentStep.title}</h3>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Your answer:</span>
                <Badge
                  variant={
                    pendingOutcome.answer === "yes" ? "default" : "outline"
                  }
                  className="capitalize"
                >
                  {pendingOutcome.answer}
                </Badge>
              </div>

              {/* Outcome card */}
              {(() => {
                const cfg = severityConfig[pendingOutcome.outcome.severity];
                const Ic = cfg.Icon;
                return (
                  <div className={`rounded-lg border p-4 ${cfg.className}`}>
                    <div className="flex items-start gap-3">
                      <Ic
                        className={`h-5 w-5 flex-shrink-0 mt-0.5 ${cfg.iconColor}`}
                      />
                      <div>
                        <p
                          className={`font-semibold text-sm mb-1 ${cfg.titleColor}`}
                        >
                          {cfg.label}
                        </p>
                        <p className="text-sm text-foreground/90">
                          {pendingOutcome.outcome.message}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })()}

              <Button
                className="w-full"
                onClick={handleContinue}
                data-ocid="ac_beginner.continue_button"
              >
                {pendingOutcome.outcome.nextStepId === "done" ? (
                  <>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    View Summary
                  </>
                ) : (
                  <>
                    Continue
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Previously answered steps */}
      {answers.length > 0 && !pendingOutcome && (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
              <History className="h-4 w-4" />
              Completed Checks
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 pt-0">
            {answers.map((a) => {
              const cfg = severityConfig[a.outcome.severity];
              const Ic = cfg.Icon;
              return (
                <div
                  key={a.stepId}
                  className="flex items-center gap-3 rounded-md border border-border bg-muted/30 px-3 py-2"
                >
                  <span className="text-xs text-muted-foreground w-4 text-center">
                    {a.stepNumber}
                  </span>
                  <span className="flex-1 text-sm">{a.stepTitle}</span>
                  <Badge variant="outline" className="text-xs capitalize">
                    {a.answer}
                  </Badge>
                  <Ic className={`h-4 w-4 ${cfg.iconColor}`} />
                </div>
              );
            })}
          </CardContent>
        </Card>
      )}

      <div className="flex gap-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleRestart}
          data-ocid="ac_beginner.restart_button"
          className="text-muted-foreground"
        >
          <RotateCcw className="mr-1.5 h-3.5 w-3.5" />
          Start Over
        </Button>
      </div>
    </div>
  );
}

export default function TroubleshooterTab({ isGuest }: TroubleshooterTabProps) {
  const [phase, setPhase] = useState<SessionPhase>("mode-selection");
  const [currentSession, setCurrentSession] =
    useState<DiagnosticSession | null>(null);
  const [currentAnswer, setCurrentAnswer] = useState<DiagnosticAnswer>({
    value: "",
    measurements: {},
  });

  const { identity: _identity } = useInternetIdentity();

  const startNewSession = (mode: DiagnosticMode) => {
    const newSession: DiagnosticSession = {
      id: BigInt(Date.now()),
      mode,
      symptom: "No cooling",
      currentStepIndex: 0,
      answers: {},
      measurements: {},
      calculations: {},
      confidence: 0,
      startTime: Date.now(),
      status: SessionStatus.inProgress,
      voiceGuidanceEnabled: false,
      aiAssistanceEnabled: true,
      faultProbabilities: [],
      aiRecommendations: [],
      followUpAnswers: {},
    };
    setCurrentSession(newSession);
    setPhase("diagnostic-flow");
  };

  const handleExportReport = () => {
    if (isGuest) {
      toast.error(GUEST_RESTRICTION_MESSAGE);
      return;
    }

    if (!currentSession) {
      toast.error("No session to export");
      return;
    }

    const reportContent = `HVAC Diagnostic Report
Generated: ${new Date().toLocaleString()}
Mode: ${currentSession.mode}
Symptom: ${currentSession.symptom}
Confidence: ${currentSession.confidence}%

Top Fault Probabilities:
${currentSession.faultProbabilities.map((f, i) => `${i + 1}. ${f.cause} (${f.probability}%)`).join("\n")}

Recommendations:
${currentSession.aiRecommendations.map((r, i) => `${i + 1}. ${r.message}`).join("\n")}
`;

    const blob = new Blob([reportContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `hvac-diagnostic-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast.success("Report exported successfully");
  };

  const handleAnswerStep = () => {
    if (!currentSession) return;

    const currentStep =
      coolingDiagnosticFlow.steps[currentSession.currentStepIndex];

    // Run AI analysis
    const analysis = AdaptiveAIEngine.analyzeStep(
      currentStep.id,
      currentAnswer,
      currentSession.answers,
      currentSession.measurements,
      currentSession.mode,
      currentSession.followUpAnswers,
    );

    // Update session with answer and AI analysis
    const updatedSession = {
      ...currentSession,
      answers: { ...currentSession.answers, [currentStep.id]: currentAnswer },
      faultProbabilities: [
        ...currentSession.faultProbabilities,
        ...analysis.faults,
      ],
      aiRecommendations: [
        ...currentSession.aiRecommendations,
        ...analysis.recommendations,
      ],
      currentStepIndex: currentSession.currentStepIndex + 1,
    };

    setCurrentSession(updatedSession);
    setCurrentAnswer({ value: "", measurements: {} });

    // Check if we've completed all steps
    if (updatedSession.currentStepIndex >= coolingDiagnosticFlow.steps.length) {
      setCurrentSession({ ...updatedSession, status: SessionStatus.completed });
      setPhase("summary");
    }
  };

  const renderModeSelection = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wrench className="h-5 w-5" />
          HVAC Troubleshooter
        </CardTitle>
        <CardDescription>
          AI-powered diagnostic assistant with step-by-step guidance
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Alert>
          <Bot className="h-4 w-4" />
          <AlertTitle>Choose Your Experience Level</AlertTitle>
          <AlertDescription>
            Select the mode that matches your HVAC experience. The AI assistant
            will adapt its guidance accordingly.
          </AlertDescription>
        </Alert>

        <div className="grid gap-4 md:grid-cols-2">
          <button
            type="button"
            onClick={() => startNewSession(DiagnosticMode.beginner)}
            className="rounded-lg border-2 border-border bg-card p-6 text-left transition-all hover:border-primary hover:shadow-lg"
          >
            <div className="mb-4 flex items-center gap-2">
              <HelpCircle className="h-8 w-8 text-primary" />
              <Badge>Beginner</Badge>
            </div>
            <h3 className="mb-2 text-lg font-semibold">Beginner Mode</h3>
            <p className="text-sm text-muted-foreground">
              Step-by-step guidance with detailed explanations, safety warnings,
              and learning tips. Perfect for technicians in training or
              homeowners.
            </p>
          </button>

          <button
            type="button"
            onClick={() => startNewSession(DiagnosticMode.expert)}
            className="rounded-lg border-2 border-border bg-card p-6 text-left transition-all hover:border-primary hover:shadow-lg"
          >
            <div className="mb-4 flex items-center gap-2">
              <Zap className="h-8 w-8 text-primary" />
              <Badge variant="secondary">Expert</Badge>
            </div>
            <h3 className="mb-2 text-lg font-semibold">Expert Mode</h3>
            <p className="text-sm text-muted-foreground">
              Streamlined diagnostic flow with technical details, advanced
              measurements, and professional-level analysis. For experienced
              HVAC technicians.
            </p>
          </button>

          <button
            type="button"
            onClick={() => setPhase("ac-beginner")}
            className="rounded-lg border-2 border-border bg-card p-6 text-left transition-all hover:border-primary hover:shadow-lg md:col-span-2"
            data-ocid="troubleshooter.ac_beginner.button"
          >
            <div className="mb-4 flex items-center gap-2">
              <ThermometerSun className="h-8 w-8 text-primary" />
              <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 dark:bg-orange-950 dark:text-orange-300">
                Beginner
              </Badge>
            </div>
            <h3 className="mb-1 text-lg font-semibold">AC Not Turning On</h3>
            <p className="text-sm text-muted-foreground font-medium mb-1">
              Beginner Diagnostic
            </p>
            <p className="text-sm text-muted-foreground">
              A simple step-by-step checklist for beginners. Checks thermostat,
              filter, outdoor unit, breaker, ice, condenser coil, and
              refrigerant — no tools or meters needed.
            </p>
          </button>
        </div>
      </CardContent>
    </Card>
  );

  const renderDiagnosticFlow = () => {
    if (!currentSession) return null;

    const currentStep =
      coolingDiagnosticFlow.steps[currentSession.currentStepIndex];
    const progress =
      ((currentSession.currentStepIndex + 1) /
        coolingDiagnosticFlow.steps.length) *
      100;
    const isBeginnerMode = currentSession.mode === DiagnosticMode.beginner;

    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5" />
                  {coolingDiagnosticFlow.name}
                </CardTitle>
                <CardDescription>
                  Step {currentSession.currentStepIndex + 1} of{" "}
                  {coolingDiagnosticFlow.steps.length} •{" "}
                  <Badge variant={isBeginnerMode ? "default" : "secondary"}>
                    {isBeginnerMode ? "Beginner" : "Expert"} Mode
                  </Badge>
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPhase("mode-selection")}
                >
                  Exit
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} />
            </div>

            {currentStep.category && (
              <Badge variant="outline" className="text-sm">
                {currentStep.category}
              </Badge>
            )}

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">{currentStep.title}</h3>
              <p className="text-base text-foreground">
                {currentStep.question}
              </p>

              {currentStep.explanation && (
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>{currentStep.explanation}</AlertDescription>
                </Alert>
              )}

              {currentStep.safetyWarning && (
                <Alert variant="destructive">
                  <ShieldAlert className="h-4 w-4" />
                  <AlertTitle>Safety Warning</AlertTitle>
                  <AlertDescription>
                    {currentStep.safetyWarning}
                  </AlertDescription>
                </Alert>
              )}

              {isBeginnerMode && currentStep.beginnerTip && (
                <Alert>
                  <HelpCircle className="h-4 w-4" />
                  <AlertTitle>Beginner Tip</AlertTitle>
                  <AlertDescription>{currentStep.beginnerTip}</AlertDescription>
                </Alert>
              )}

              {!isBeginnerMode && currentStep.expertNote && (
                <Alert>
                  <Zap className="h-4 w-4" />
                  <AlertTitle>Expert Note</AlertTitle>
                  <AlertDescription>{currentStep.expertNote}</AlertDescription>
                </Alert>
              )}

              {/* Input based on step type */}
              {currentStep.inputType === "yesNo" && (
                <div className="flex gap-4">
                  <Button
                    variant={
                      currentAnswer.value === "yes" ? "default" : "outline"
                    }
                    className="flex-1"
                    onClick={() => setCurrentAnswer({ value: "yes" })}
                  >
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Yes
                  </Button>
                  <Button
                    variant={
                      currentAnswer.value === "no" ? "default" : "outline"
                    }
                    className="flex-1"
                    onClick={() => setCurrentAnswer({ value: "no" })}
                  >
                    <XCircle className="mr-2 h-4 w-4" />
                    No
                  </Button>
                </div>
              )}

              {currentStep.inputType === "choice" && currentStep.options && (
                <Select
                  value={currentAnswer.value}
                  onValueChange={(value) => setCurrentAnswer({ value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    {currentStep.options.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}

              {currentStep.inputType === "measurement" &&
                currentStep.measurements && (
                  <div className="space-y-4">
                    {currentStep.measurements.map((measurement) => (
                      <div key={measurement.key} className="space-y-2">
                        <Label htmlFor={measurement.key}>
                          {measurement.label} ({measurement.unit})
                        </Label>
                        <Input
                          id={measurement.key}
                          type="number"
                          step="0.1"
                          placeholder={`Enter ${measurement.label.toLowerCase()}`}
                          value={
                            currentAnswer.measurements?.[measurement.key] || ""
                          }
                          onChange={(e) =>
                            setCurrentAnswer({
                              ...currentAnswer,
                              measurements: {
                                ...currentAnswer.measurements,
                                [measurement.key]: e.target.value,
                              },
                            })
                          }
                        />
                      </div>
                    ))}
                  </div>
                )}
            </div>

            <div className="flex justify-between pt-4">
              <Button
                variant="outline"
                onClick={() => {
                  if (currentSession.currentStepIndex > 0) {
                    setCurrentSession({
                      ...currentSession,
                      currentStepIndex: currentSession.currentStepIndex - 1,
                    });
                  }
                }}
                disabled={currentSession.currentStepIndex === 0}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <Button
                onClick={handleAnswerStep}
                disabled={!currentAnswer.value}
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* AI Recommendations Panel */}
        {currentSession.aiRecommendations.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                AI Assistant Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {currentSession.aiRecommendations.slice(-3).map((rec, index) => (
                <Alert
                  // biome-ignore lint/suspicious/noArrayIndexKey: recommendations have no stable ID
                  key={`rec-${index}`}
                  variant={rec.type === "safety" ? "destructive" : "default"}
                >
                  {rec.type === "safety" && <ShieldAlert className="h-4 w-4" />}
                  {rec.type === "caution" && (
                    <AlertTriangle className="h-4 w-4" />
                  )}
                  {rec.type === "info" && <Lightbulb className="h-4 w-4" />}
                  {rec.type === "learning" && <BookOpen className="h-4 w-4" />}
                  {rec.type === "followup" && (
                    <MessageCircle className="h-4 w-4" />
                  )}
                  <AlertDescription>{rec.message}</AlertDescription>
                </Alert>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    );
  };

  const renderSummary = () => {
    if (!currentSession) return null;

    const smartSummary = AdaptiveAIEngine.generateSmartSummary(
      currentSession,
      currentSession.mode,
    );

    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Diagnostic Complete
                </CardTitle>
                <CardDescription>
                  AI-powered analysis and recommendations
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={handleExportReport}
                  disabled={isGuest}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Export Report
                </Button>
                <Button onClick={() => setPhase("mode-selection")}>
                  New Diagnostic
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert>
              <Bot className="h-4 w-4" />
              <AlertTitle>Summary</AlertTitle>
              <AlertDescription>{smartSummary.summary}</AlertDescription>
            </Alert>

            <div>
              <h3 className="mb-3 text-lg font-semibold">
                Top Fault Probabilities
              </h3>
              <div className="space-y-3">
                {currentSession.faultProbabilities
                  .slice(0, 5)
                  .map((fault, index) => (
                    <div
                      // biome-ignore lint/suspicious/noArrayIndexKey: faults have no stable ID
                      key={`fault-${index}`}
                      className="rounded-lg border border-border bg-card p-4"
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-medium">{fault.cause}</span>
                        <Badge
                          variant={
                            fault.severity === "high"
                              ? "destructive"
                              : fault.severity === "medium"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {fault.probability}%
                        </Badge>
                      </div>
                      {fault.explanation && (
                        <p className="text-sm text-muted-foreground">
                          {fault.explanation}
                        </p>
                      )}
                    </div>
                  ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-semibold">Next Steps</h3>
              <ul className="space-y-2">
                {smartSummary.nextSteps.map((step, index) => (
                  <li
                    // biome-ignore lint/suspicious/noArrayIndexKey: steps are static and order-stable
                    key={`step-${index}`}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-sm">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-semibold">
                Learning Recommendations
              </h3>
              <ul className="space-y-2">
                {smartSummary.learningRecommendations.map((rec, index) => (
                  <li
                    // biome-ignore lint/suspicious/noArrayIndexKey: recs are static and order-stable
                    key={`learnrec-${index}`}
                    className="flex items-start gap-2"
                  >
                    <BookOpen className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-sm">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {phase === "mode-selection" && renderModeSelection()}
      {phase === "diagnostic-flow" && renderDiagnosticFlow()}
      {phase === "summary" && renderSummary()}
      {phase === "ac-beginner" && (
        <BeginnerACDiagnostic onBack={() => setPhase("mode-selection")} />
      )}
    </div>
  );
}
