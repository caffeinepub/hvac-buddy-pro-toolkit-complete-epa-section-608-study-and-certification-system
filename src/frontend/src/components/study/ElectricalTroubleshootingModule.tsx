import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle, BookOpen, ExternalLink, Zap } from "lucide-react";
import { useState } from "react";
import type { StudyMode } from "../../types/study";

interface ElectricalTroubleshootingModuleProps {
  studyMode: StudyMode;
}

const VIDEO_URL = "https://youtu.be/VtC25cV1mU0";
const VIDEO_TITLE = "How Power Moves Through An AC System Schematic";

// Practice scenarios data
const PRACTICE_SCENARIOS = [
  {
    id: 1,
    title: "Scenario A: Condenser Not Starting",
    situation:
      "A homeowner calls — the air conditioner runs for a few seconds and shuts off. You arrive and find the indoor air handler blowing air, but the outdoor condensing unit is not running. The thermostat is set to cool and shows a call for cooling.",
    question: "What is your first electrical check and why?",
    hint: "Think about what component is responsible for energizing the compressor and condenser fan at the same time.",
    answer:
      "Check the contactor in the outdoor unit first. A stuck-open contactor prevents 240V from reaching the compressor and condenser fan, even when the 24V control circuit is calling for cooling. Measure 24V across the contactor coil with the thermostat calling for cool. If 24V is present and the contactor is not pulled in, the coil is faulty. If 24V is absent, trace the control circuit back toward the thermostat.",
    linkedLesson: "Contactor Troubleshooting",
  },
  {
    id: 2,
    title: "Scenario B: No 24V at Contactor Coil",
    situation:
      "You measure 0 VAC across a contactor coil while the thermostat is calling for cooling. The transformer secondary measures 26 VAC under no-load. Your next step is to trace the control circuit.",
    question:
      "List the components you would check in order, starting from the transformer secondary.",
    hint: "Control circuit components are wired in series — an open anywhere in the circuit will drop voltage to zero.",
    answer:
      "Check in this order: (1) Low-voltage fuse on the control board — a blown fuse is the most common cause. (2) High-pressure switch — measure voltage across it; if you read 24V, the switch is open. (3) Low-pressure switch — same test. (4) Thermostat R and Y terminals — confirm 24V is present at R, and that Y closes when cooling is demanded. (5) Contactor coil resistance — a shorted coil can blow the fuse immediately on reset.",
    linkedLesson: "24V Control Circuit Basics",
  },
  {
    id: 3,
    title: "Scenario C: Reading a Simple Schematic",
    situation:
      "You are looking at a wiring diagram for a split-system air conditioner. You see two separate sections: one labeled '240 VAC' and one labeled '24 VAC'. Components in the 24 VAC section include the thermostat, transformer secondary, control board, and contactor coil.",
    question:
      "Explain what happens electrically from the moment the thermostat closes the Y terminal to the moment the compressor starts.",
    hint: "Follow current flow from the transformer through each control component to the contactor coil, then through the contactor to the compressor.",
    answer:
      "When Y closes at the thermostat: (1) A complete 24V circuit forms: transformer secondary → R wire → thermostat R terminal → Y terminal when closed → Y wire → safety switches (high-pressure, low-pressure) in series → contactor coil → common (C wire) → transformer secondary. (2) Current flows through the coil, creating a magnetic field. (3) The magnetic field pulls in the contactor armature, closing the high-voltage contacts. (4) 240V now flows through the closed contacts to the compressor and condenser fan motor. (5) Both the compressor and fan start.",
    linkedLesson: "Reading HVAC Schematics",
  },
  {
    id: 4,
    title: "Scenario D: Transformer Output Low",
    situation:
      "A system keeps blowing the 3A low-voltage fuse. You replace the fuse and it blows again immediately when you set the thermostat to cool. The transformer secondary reads 28 VAC with the fuse removed.",
    question:
      "What is the most likely cause, and how do you confirm it before replacing parts?",
    hint: "A fuse blows immediately when current demand exceeds the fuse rating. Where is the excess current coming from?",
    answer:
      "A short circuit in the 24V control wiring or a shorted component is pulling excess current. Confirm by: (1) Disconnect the Y wire at the air handler control board — if the fuse holds now, the short is in the condenser wiring or contactor coil. (2) If the fuse still blows, disconnect wires one at a time at the control board until the fuse holds — this isolates the shorted leg. (3) Measure resistance across the contactor coil (should be 15–60 ohms depending on model); a shorted coil reads near zero. (4) Inspect 24V wiring for any bare copper touching the equipment chassis.",
    linkedLesson: "Transformer Testing",
  },
];

export default function ElectricalTroubleshootingModule({
  studyMode,
}: ElectricalTroubleshootingModuleProps) {
  const isBeginner = studyMode.__kind__ === "beginner";
  const [revealedAnswers, setRevealedAnswers] = useState<Set<number>>(
    new Set(),
  );

  const toggleAnswer = (id: number) => {
    setRevealedAnswers((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="space-y-6" data-ocid="electrical-troubleshooting.section">
      {/* Module Header */}
      <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
        <CardHeader>
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/15">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <div>
              <CardTitle className="text-2xl leading-tight">
                Electrical Troubleshooting for HVAC Systems
              </CardTitle>
              <CardDescription className="mt-1 text-base">
                Master control circuits, schematic reading, contactor diagnosis,
                and transformer testing with real-world HVAC examples
              </CardDescription>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge variant="secondary">4 Lessons</Badge>
                <Badge
                  variant="outline"
                  className="text-primary border-primary/30"
                >
                  {isBeginner ? "Beginner Mode" : "Expert Mode"}
                </Badge>
                <Badge
                  variant="outline"
                  className="border-accent/30 text-accent"
                >
                  4 Practice Scenarios
                </Badge>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Video Resource Banner */}
      <Card className="border-blue-500/30 bg-blue-500/5">
        <CardContent className="py-4">
          <div className="flex items-start gap-3">
            <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-blue-700 dark:text-blue-400">
                Recommended Video Resource
              </p>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {VIDEO_TITLE}
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="shrink-0 border-blue-500/40 text-blue-600 hover:bg-blue-500/10 dark:text-blue-400"
              asChild
              data-ocid="electrical-troubleshooting.video_button"
            >
              <a href={VIDEO_URL} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                Watch Video
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Lessons */}
      <Accordion
        type="multiple"
        defaultValue={["lesson-1"]}
        className="space-y-3"
        data-ocid="electrical-troubleshooting.panel"
      >
        {/* Lesson 1: 24V Control Circuit Basics */}
        <AccordionItem
          value="lesson-1"
          className="rounded-lg border border-border bg-card shadow-sm"
        >
          <AccordionTrigger className="px-5 py-4 hover:no-underline">
            <div className="flex items-center gap-3 text-left">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                1
              </div>
              <div>
                <p className="font-semibold">24V Control Circuit Basics</p>
                <p className="text-xs text-muted-foreground">
                  Understanding low-voltage control systems in residential HVAC
                </p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5">
            <div className="space-y-5">
              {/* Explanation */}
              <div>
                <h4 className="mb-2 font-semibold text-primary">
                  What Is the 24V Control Circuit?
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Nearly every residential split-system air conditioner uses a
                  low-voltage control circuit operating at 24 VAC to switch
                  higher-voltage loads. A step-down transformer inside the air
                  handler (or furnace) converts 120 V or 240 V supply power down
                  to approximately 24–28 VAC. This low voltage powers the
                  thermostat, safety switches, and the contactor coil that
                  ultimately energizes the compressor.
                </p>
                {isBeginner && (
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Think of the 24V circuit like a simple doorbell circuit — a
                    small amount of current flows through a loop that includes
                    the transformer, thermostat, and coil. When every switch in
                    the loop is closed, current flows and something happens (the
                    contactor pulls in). If any switch is open, nothing happens.
                  </p>
                )}
              </div>

              {/* HVAC Examples */}
              <div>
                <h4 className="mb-2 font-semibold text-primary">
                  HVAC Examples
                </h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>
                      <strong>R wire (red):</strong> 24V hot from transformer
                      secondary — present at every control point
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>
                      <strong>C wire (common):</strong> Return path back to
                      transformer; required for modern smart thermostats
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>
                      <strong>Y wire (yellow):</strong> Carries 24V to the
                      contactor coil when cooling is demanded
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>
                      <strong>G wire (green):</strong> Energizes the indoor
                      blower relay independently of cooling demand
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>
                      <strong>W wire (white):</strong> Calls for heat, energizes
                      the heat strip or furnace gas valve relay
                    </span>
                  </li>
                </ul>
              </div>

              {/* Safety Warning */}
              <Alert className="border-amber-500/40 bg-amber-500/10">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                <AlertDescription className="text-sm">
                  <strong>Safety:</strong> Although 24V will not shock you
                  fatally, always confirm the system is de-energized at the
                  disconnect before touching wiring inside the air handler or
                  condenser. Short-circuiting the 24V circuit can blow the
                  control fuse, damage the control board, or burn the
                  transformer.
                </AlertDescription>
              </Alert>

              {/* Troubleshooting Steps */}
              <div>
                <h4 className="mb-2 font-semibold text-primary">
                  Troubleshooting the 24V Circuit
                </h4>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                      1
                    </span>
                    <span>
                      Set the multimeter to VAC. Measure voltage at the
                      transformer secondary terminals — expect 24–28 VAC.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                      2
                    </span>
                    <span>
                      Check the low-voltage fuse (typically 3A) on the control
                      board. A blown fuse produces 0V at R.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                      3
                    </span>
                    <span>
                      Measure 24V at R on the thermostat subbase with the
                      thermostat calling for cool. Confirm Y reads 24V.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                      4
                    </span>
                    <span>
                      Measure across each safety switch (high-pressure,
                      low-pressure, freeze stat). Voltage across an open switch
                      indicates that switch is the break in the circuit.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                      5
                    </span>
                    <span>
                      Measure 24V across the contactor coil terminals. If
                      present and the contactor is not pulled in, the coil is
                      failed. Resistance across a good coil is typically 15–60
                      ohms.
                    </span>
                  </li>
                </ol>
              </div>

              {/* Video link */}
              <div className="flex items-center gap-2 rounded-lg border border-blue-500/20 bg-blue-500/5 p-3">
                <ExternalLink className="h-4 w-4 shrink-0 text-blue-500" />
                <span className="text-sm text-muted-foreground">
                  Watch:{" "}
                  <a
                    href={VIDEO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-600 underline-offset-4 hover:underline dark:text-blue-400"
                    data-ocid="electrical-troubleshooting.lesson1.link"
                  >
                    {VIDEO_TITLE}
                  </a>
                </span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Lesson 2: Reading HVAC Schematics */}
        <AccordionItem
          value="lesson-2"
          className="rounded-lg border border-border bg-card shadow-sm"
        >
          <AccordionTrigger className="px-5 py-4 hover:no-underline">
            <div className="flex items-center gap-3 text-left">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                2
              </div>
              <div>
                <p className="font-semibold">Reading HVAC Schematics</p>
                <p className="text-xs text-muted-foreground">
                  Interpreting wiring diagrams to trace faults quickly
                </p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5">
            <div className="space-y-5">
              {/* Explanation */}
              <div>
                <h4 className="mb-2 font-semibold text-primary">
                  Why Schematics Matter
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  A schematic (wiring diagram) is the electrical map of an HVAC
                  system. It shows every component, wire, and connection in a
                  simplified symbolic form. Technicians who can read schematics
                  can diagnose most electrical faults in minutes instead of
                  hours by following current flow logically rather than
                  guessing.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  HVAC schematics typically have two sections: the{" "}
                  <strong>line voltage section</strong> (240V or 120V) on one
                  side and the <strong>low-voltage section</strong> (24V) on the
                  other. Components are drawn as standard symbols: coils,
                  switches (NO/NC), contactors, motors, and resistors.
                </p>
              </div>

              {/* HVAC Examples */}
              <div>
                <h4 className="mb-2 font-semibold text-primary">
                  Common Symbols and What They Mean
                </h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>
                      <strong>Two parallel lines with a gap:</strong> Normally
                      Open (NO) contact — open until energized
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>
                      <strong>Two parallel lines with a diagonal:</strong>{" "}
                      Normally Closed (NC) contact — closed until energized or
                      tripped
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>
                      <strong>Circle with M:</strong> Motor — compressor,
                      condenser fan, or blower
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>
                      <strong>Rectangle or coil symbol with label:</strong>{" "}
                      Relay or contactor coil — when energized it closes the
                      associated contacts
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>
                      <strong>Diagonal arrow through circle:</strong>{" "}
                      Transformer — voltage in on one side, different voltage
                      out on the other
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>
                      <strong>Dashed lines between contacts and coil:</strong>{" "}
                      Mechanical linkage — these contacts move when the coil is
                      energized
                    </span>
                  </li>
                </ul>
              </div>

              {/* How to follow current flow */}
              <div>
                <h4 className="mb-2 font-semibold text-primary">
                  How to Follow Current Flow on a Schematic
                </h4>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                      1
                    </span>
                    <span>
                      Start at the power source (transformer secondary for 24V,
                      or L1/L2 for line voltage).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                      2
                    </span>
                    <span>
                      Trace from the hot leg through each switch or contact in
                      the circuit. A switch that is open breaks the circuit
                      here.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                      3
                    </span>
                    <span>
                      Identify the load (coil, motor, or resistor) at the end of
                      the path. Current flows through the load and returns on
                      the neutral/common leg.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                      4
                    </span>
                    <span>
                      When troubleshooting, use the "half-split" method: measure
                      voltage at the midpoint of the circuit to determine which
                      half contains the open.
                    </span>
                  </li>
                </ol>
              </div>

              {/* Safety Warning */}
              <Alert className="border-amber-500/40 bg-amber-500/10">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                <AlertDescription className="text-sm">
                  <strong>Safety:</strong> Always obtain the wiring diagram from
                  inside the unit's access panel before starting electrical
                  diagnosis. Never assume — a misread schematic can lead to
                  testing energized components without knowing it. Confirm your
                  power source and voltage before placing probes.
                </AlertDescription>
              </Alert>

              {/* Troubleshooting Steps */}
              <div>
                <h4 className="mb-2 font-semibold text-primary">
                  Schematic-Based Troubleshooting Workflow
                </h4>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                      1
                    </span>
                    <span>
                      Locate the schematic — usually taped inside the panel
                      cover of the air handler or condenser.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                      2
                    </span>
                    <span>
                      Identify the symptom circuit — for "condenser not running"
                      focus on the Y circuit from thermostat to contactor coil.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                      3
                    </span>
                    <span>
                      List all series components in that circuit — each one must
                      be closed/good for the circuit to work.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                      4
                    </span>
                    <span>
                      Test voltage across each component. Full source voltage
                      across a switch or contact indicates that component is
                      open (broken).
                    </span>
                  </li>
                </ol>
              </div>

              {/* Video link */}
              <div className="flex items-center gap-2 rounded-lg border border-blue-500/20 bg-blue-500/5 p-3">
                <ExternalLink className="h-4 w-4 shrink-0 text-blue-500" />
                <span className="text-sm text-muted-foreground">
                  Watch:{" "}
                  <a
                    href={VIDEO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-600 underline-offset-4 hover:underline dark:text-blue-400"
                    data-ocid="electrical-troubleshooting.lesson2.link"
                  >
                    {VIDEO_TITLE}
                  </a>
                </span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Lesson 3: Contactor Troubleshooting */}
        <AccordionItem
          value="lesson-3"
          className="rounded-lg border border-border bg-card shadow-sm"
        >
          <AccordionTrigger className="px-5 py-4 hover:no-underline">
            <div className="flex items-center gap-3 text-left">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                3
              </div>
              <div>
                <p className="font-semibold">Contactor Troubleshooting</p>
                <p className="text-xs text-muted-foreground">
                  Diagnosing and testing the contactor in condensing units
                </p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5">
            <div className="space-y-5">
              {/* Explanation */}
              <div>
                <h4 className="mb-2 font-semibold text-primary">
                  What Is a Contactor?
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  A contactor is an electromechanical switch that uses a 24V
                  coil to open and close high-voltage (240V) contacts. It is
                  essentially a heavy-duty relay designed to handle the large
                  inrush currents from the compressor and condenser fan motor.
                  When the 24V coil is energized, it magnetically pulls in a
                  metal armature that physically closes the high-voltage
                  contacts.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Most single-phase residential condensers use a 2-pole
                  contactor (two sets of contacts). Commercial and three-phase
                  units may use 3-pole contactors.
                </p>
              </div>

              {/* HVAC Examples */}
              <div>
                <h4 className="mb-2 font-semibold text-primary">
                  Common Contactor Failures
                </h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                    <span>
                      <strong>Pitted/burned contacts:</strong> High-amperage
                      arcing over time causes carbon build-up. Contacts fail to
                      close completely → compressor hums but does not start.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                    <span>
                      <strong>Welded/stuck contacts:</strong> Contacts fuse
                      together due to arcing. Compressor runs continuously even
                      when thermostat shuts off — dangerous.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                    <span>
                      <strong>Burned coil:</strong> Coil opens internally →
                      contactor never pulls in → no 240V to compressor.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                    <span>
                      <strong>Mechanical binding:</strong> Debris (insects,
                      corrosion) prevents armature from moving freely → delayed
                      or failed pull-in.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Safety Warning */}
              <Alert className="border-red-500/40 bg-red-500/10">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-sm">
                  <strong>Critical Safety Warning:</strong> The load-side
                  terminals of a contactor carry 240V. Even with the thermostat
                  off, the line-side terminals (L1 and L2) remain energized as
                  long as the disconnect is on. Always turn off the outdoor
                  disconnect before touching any contactor terminals. Verify
                  with your meter before touching.
                </AlertDescription>
              </Alert>

              {/* Troubleshooting Steps */}
              <div>
                <h4 className="mb-2 font-semibold text-primary">
                  Contactor Testing Procedure (Power ON Safe Checks)
                </h4>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                      1
                    </span>
                    <span>
                      With the thermostat calling for cooling, measure voltage
                      across the coil terminals (A1 and A2). Should read 24 VAC.
                      If 0V, the control circuit is open upstream — trace the
                      24V circuit back to the thermostat.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                      2
                    </span>
                    <span>
                      If 24V is present at the coil but the contactor is not
                      pulled in — the coil is burned out. Turn off power and
                      test coil resistance (expect 15–60 ohms; OL = open coil).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                      3
                    </span>
                    <span>
                      If the contactor pulls in, measure line-side voltage (L1
                      to L2) — should be 208–240 VAC. Then measure load-side (T1
                      to T2). Both should be equal. A significant voltage drop
                      across the contacts (e.g., 30V or more) indicates pitted
                      contacts.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                      4
                    </span>
                    <span>
                      <strong>Power OFF test:</strong> With power disconnected,
                      measure resistance across the open contacts (should be OL
                      when not pulled in). Any low resistance reading indicates
                      welded contacts — replace the contactor immediately.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                      5
                    </span>
                    <span>
                      Inspect the contact faces visually — replace any contactor
                      with deeply pitted, burned, or discolored contacts even if
                      it tests "functional." Contact failure under load will
                      occur soon.
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Lesson 4: Transformer Testing */}
        <AccordionItem
          value="lesson-4"
          className="rounded-lg border border-border bg-card shadow-sm"
        >
          <AccordionTrigger className="px-5 py-4 hover:no-underline">
            <div className="flex items-center gap-3 text-left">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                4
              </div>
              <div>
                <p className="font-semibold">Transformer Testing</p>
                <p className="text-xs text-muted-foreground">
                  Testing and diagnosing 24V control transformers
                </p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5">
            <div className="space-y-5">
              {/* Explanation */}
              <div>
                <h4 className="mb-2 font-semibold text-primary">
                  How the Control Transformer Works
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  The control transformer in an HVAC air handler or furnace
                  steps 120V or 240V supply voltage down to 24 VAC for the
                  control circuit. It consists of two coils wound around an iron
                  core: the primary (high-voltage side) and the secondary (24V
                  side). When AC flows through the primary, it induces a
                  proportional voltage in the secondary based on the turns
                  ratio.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  A healthy transformer with no load on the secondary typically
                  reads 26–28 VAC. Under normal load (thermostat and control
                  circuit energized) it should read 24–26 VAC. Below 20V under
                  load often indicates a weak or overloaded transformer.
                </p>
              </div>

              {/* HVAC Examples */}
              <div>
                <h4 className="mb-2 font-semibold text-primary">
                  Common Transformer Failures
                </h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                    <span>
                      <strong>Open primary winding:</strong> 0V at secondary
                      even though line voltage is present at primary terminals.
                      Usually caused by overvoltage or age.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                    <span>
                      <strong>Open secondary winding:</strong> 0V at secondary
                      with correct primary voltage. Primary windings are intact
                      but secondary coil has broken.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                    <span>
                      <strong>Overloaded transformer:</strong> Short circuit in
                      24V wiring causes thermal overload. Transformer may have
                      an internal auto-reset breaker — allow it to cool and test
                      again. If it keeps tripping, find and fix the short first.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                    <span>
                      <strong>Shorted turns:</strong> Transformer hums loudly
                      and runs hot. Secondary voltage reads lower than normal
                      even under light load.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Safety Warning */}
              <Alert className="border-amber-500/40 bg-amber-500/10">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                <AlertDescription className="text-sm">
                  <strong>Safety:</strong> The primary terminals of the
                  transformer carry 120V or 240V. Never touch primary terminals
                  with power on. Always confirm which terminals are primary and
                  which are secondary from the wiring diagram before testing. If
                  the transformer is hot to the touch or smells burned, turn off
                  power immediately.
                </AlertDescription>
              </Alert>

              {/* Troubleshooting Steps */}
              <div>
                <h4 className="mb-2 font-semibold text-primary">
                  Step-by-Step Transformer Test
                </h4>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                      1
                    </span>
                    <span>
                      <strong>Check primary voltage:</strong> With power ON and
                      multimeter on VAC, measure across the primary (high-side)
                      terminals. Should match the system voltage (120V or 240V).
                      If 0V here, the problem is upstream of the transformer
                      (breaker, fuse, or wiring).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                      2
                    </span>
                    <span>
                      <strong>Check secondary voltage (no load):</strong>{" "}
                      Measure across the secondary terminals with the 24V fuse
                      removed or the control circuit disconnected. Should read
                      26–28 VAC.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                      3
                    </span>
                    <span>
                      <strong>Check secondary voltage (under load):</strong>{" "}
                      Reinstall the fuse and measure secondary voltage while the
                      thermostat is calling for cooling. Voltage should remain
                      above 22 VAC. Voltage collapsing to under 20V under load
                      indicates a near-short in the control circuit or a failing
                      transformer.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                      4
                    </span>
                    <span>
                      <strong>Resistance check (power OFF):</strong> Disconnect
                      primary and secondary leads. Measure primary winding
                      resistance (typically 50–200 ohms) and secondary winding
                      resistance (1–10 ohms). OL on either winding means it is
                      open — replace the transformer.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                      5
                    </span>
                    <span>
                      If the transformer passes all tests but the fuse keeps
                      blowing, the transformer is not the problem — find and
                      isolate the short circuit in the 24V wiring before
                      replacing any transformer.
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Practice Diagnostic Scenarios */}
      <div
        className="space-y-4"
        data-ocid="electrical-troubleshooting.scenarios.section"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15">
            <BookOpen className="h-5 w-5 text-accent" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">
              Practice Diagnostic Scenarios
            </h2>
            <p className="text-sm text-muted-foreground">
              Read each scenario, think through your answer, then reveal the
              solution.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {PRACTICE_SCENARIOS.map((scenario) => (
            <Card
              key={scenario.id}
              className="overflow-hidden border-accent/20"
              data-ocid={`electrical-troubleshooting.scenario.item.${scenario.id}`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <Badge
                    variant="outline"
                    className="shrink-0 border-accent/30 text-accent"
                  >
                    Scenario {scenario.id}
                  </Badge>
                  <CardTitle className="text-base leading-snug">
                    {scenario.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="rounded-lg bg-muted/50 p-3">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {scenario.situation}
                  </p>
                </div>
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                  <p className="text-sm font-semibold text-primary">
                    {scenario.question}
                  </p>
                </div>
                {!revealedAnswers.has(scenario.id) && (
                  <p className="text-xs italic text-muted-foreground">
                    Hint: {scenario.hint}
                  </p>
                )}
                {revealedAnswers.has(scenario.id) && (
                  <div className="rounded-lg border border-green-500/30 bg-green-500/10 p-3">
                    <p className="mb-1 text-xs font-semibold uppercase text-green-600 dark:text-green-400">
                      Answer
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {scenario.answer}
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Related lesson:{" "}
                      <span className="font-medium">
                        {scenario.linkedLesson}
                      </span>
                    </p>
                  </div>
                )}
                <Button
                  variant={
                    revealedAnswers.has(scenario.id) ? "outline" : "secondary"
                  }
                  size="sm"
                  onClick={() => toggleAnswer(scenario.id)}
                  data-ocid={`electrical-troubleshooting.scenario.toggle.${scenario.id}`}
                >
                  {revealedAnswers.has(scenario.id)
                    ? "Hide Answer"
                    : "Reveal Answer"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
