import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle, Zap } from "lucide-react";
import type { StudyMode } from "../../types/study";

interface HVACElectricalFundamentalsProps {
  studyMode: StudyMode;
}

const ALL_SECTIONS = [
  "section-1",
  "section-2",
  "section-3",
  "section-4",
  "section-5",
  "section-6",
  "section-7",
];

export default function HVACElectricalFundamentals({
  studyMode,
}: HVACElectricalFundamentalsProps) {
  const isBeginner = studyMode.__kind__ === "beginner";

  return (
    <div className="space-y-6" data-ocid="hvac-electrical.section">
      {/* Module Header */}
      <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
        <CardHeader>
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/15">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <div>
              <CardTitle className="text-2xl leading-tight">
                HVAC Electrical Fundamentals
              </CardTitle>
              <CardDescription className="mt-1 text-base">
                Essential electrical theory for HVAC technicians — from Ohm's
                Law to Variable Frequency Drives
              </CardDescription>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge variant="secondary">7 Sections</Badge>
                <Badge
                  variant="outline"
                  className="text-primary border-primary/30"
                >
                  {isBeginner ? "Beginner Friendly" : "Expert Mode"}
                </Badge>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Accordion of all 7 sections */}
      <Accordion
        type="multiple"
        defaultValue={ALL_SECTIONS}
        className="space-y-3"
      >
        {/* ─────────────────────────────────────────────
            Section 1: Voltage, Current, Resistance & Ohm's Law
        ───────────────────────────────────────────── */}
        <Card className="overflow-hidden">
          <AccordionItem value="section-1" className="border-none">
            <AccordionTrigger
              className="px-6 py-4 text-base font-semibold hover:no-underline"
              data-ocid="hvac-electrical.section-1.toggle"
            >
              <span className="flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                  1
                </span>
                Voltage, Current, Resistance &amp; Ohm's Law
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <CardContent className="space-y-5 pt-0">
                {/* Explanation */}
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Explanation
                  </h3>
                  <p className="text-sm leading-relaxed">
                    <strong>Voltage (V)</strong> is the electrical pressure that
                    pushes current through a circuit — think of it like water
                    pressure in a pipe. <strong>Current (I)</strong> is the flow
                    of electrons through a conductor, measured in amperes (A).
                    Too much current without protection causes heat and fire.{" "}
                    <strong>Resistance (R)</strong> opposes the flow of current,
                    measured in ohms (Ω). Every wire, motor winding, and coil
                    has resistance. Together, these three quantities are
                    governed by <strong>Ohm's Law</strong> — one of the most
                    fundamental relationships in electricity. If you know any
                    two values, you can always calculate the third.
                  </p>
                </div>

                {/* HVAC Examples */}
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    HVAC Examples
                  </h3>
                  <ul className="rounded-md bg-muted/50 p-3 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        24VAC control circuit powering a thermostat and
                        contactor coil
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        240VAC compressor circuit — high voltage, high current
                        demands
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        Measuring transformer secondary voltage to verify 24V
                        output under load
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        Calculating expected current draw for a 240V/5,000W heat
                        strip: I = W / V = 5000 / 240 ≈ 20.8A
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Key Formulas */}
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Key Formulas
                  </h3>
                  <div className="rounded-md bg-primary/10 p-3 font-mono text-sm space-y-1">
                    <div>
                      V = I × R &nbsp;&nbsp;(Voltage = Current × Resistance)
                    </div>
                    <div>
                      I = V / R &nbsp;&nbsp;(Current = Voltage ÷ Resistance)
                    </div>
                    <div>
                      R = V / I &nbsp;&nbsp;(Resistance = Voltage ÷ Current)
                    </div>
                    <div className="pt-1 text-xs text-muted-foreground">
                      V = Volts &nbsp;|&nbsp; I = Amps &nbsp;|&nbsp; R = Ohms
                      (Ω)
                    </div>
                  </div>
                </div>

                {/* Safety Note */}
                <Alert className="border-amber-300 bg-amber-50 text-amber-900 dark:bg-amber-950 dark:text-amber-100">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Safety Note:</strong> Never measure resistance on an
                    energized circuit. Always turn power OFF and verify zero
                    voltage with your meter before measuring ohms or continuity.
                    Measuring resistance on a live circuit can destroy your
                    meter and create a shock hazard.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </AccordionContent>
          </AccordionItem>
        </Card>

        {/* ─────────────────────────────────────────────
            Section 2: Types of Circuits
        ───────────────────────────────────────────── */}
        <Card className="overflow-hidden">
          <AccordionItem value="section-2" className="border-none">
            <AccordionTrigger
              className="px-6 py-4 text-base font-semibold hover:no-underline"
              data-ocid="hvac-electrical.section-2.toggle"
            >
              <span className="flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                  2
                </span>
                Types of Circuits (Series, Parallel, Open, Short)
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <CardContent className="space-y-5 pt-0">
                {/* Explanation */}
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Explanation
                  </h3>
                  <div className="space-y-3 text-sm leading-relaxed">
                    <p>
                      <strong>Series Circuit:</strong> Components share the same
                      current path, one after another. All components must
                      conduct for current to flow. If any single component opens
                      (breaks), the entire circuit stops.
                    </p>
                    <p>
                      <strong>Parallel Circuit:</strong> Components share the
                      same voltage source but have independent current paths.
                      One component opening does not stop others — each branch
                      operates independently.
                    </p>
                    <p>
                      <strong>Open Circuit:</strong> A broken or incomplete
                      path. No current can flow. Common causes: blown fuse, open
                      switch, broken wire, or failed component.
                    </p>
                    <p>
                      <strong>Short Circuit:</strong> An unintended
                      low-resistance path that bypasses normal load. Excessive
                      current flows, generating dangerous heat and potentially
                      causing fire or arc flash.
                    </p>
                  </div>
                </div>

                {/* HVAC Examples */}
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    HVAC Examples
                  </h3>
                  <ul className="rounded-md bg-muted/50 p-3 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        <strong>Series:</strong> High-pressure switch,
                        low-pressure switch, and freeze stat wired in series —
                        all three must close for the unit to run
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        <strong>Parallel:</strong> Fan motor and compressor
                        wired in parallel to the same 240V supply — either can
                        run independently
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        <strong>Open:</strong> A blown 5A control circuit fuse
                        creates an open circuit — thermostat has no power
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        <strong>Short:</strong> Compressor winding insulation
                        failure touching the casing — creates a short to ground,
                        tripping the breaker
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Key Formulas */}
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Key Formulas
                  </h3>
                  <div className="rounded-md bg-primary/10 p-3 font-mono text-sm space-y-1">
                    <div>Series: R_total = R1 + R2 + R3 + ...</div>
                    <div>Parallel: 1/R_total = 1/R1 + 1/R2 + 1/R3</div>
                    <div>
                      Parallel (2 resistors): R_total = (R1 × R2) / (R1 + R2)
                    </div>
                    <div className="pt-1 text-xs text-muted-foreground">
                      Series voltage adds up &nbsp;|&nbsp; Parallel current adds
                      up
                    </div>
                  </div>
                </div>

                {/* Safety Note */}
                <Alert className="border-amber-300 bg-amber-50 text-amber-900 dark:bg-amber-950 dark:text-amber-100">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Safety Note:</strong> A short circuit can cause
                    fires, arc flash, and equipment destruction. Never bypass
                    safety switches or jumper across circuit components to
                    diagnose a problem — identify and repair the actual fault
                    first. Bypassing is a temporary test only, never a repair.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </AccordionContent>
          </AccordionItem>
        </Card>

        {/* ─────────────────────────────────────────────
            Section 3: Power Circuits vs Control Circuits
        ───────────────────────────────────────────── */}
        <Card className="overflow-hidden">
          <AccordionItem value="section-3" className="border-none">
            <AccordionTrigger
              className="px-6 py-4 text-base font-semibold hover:no-underline"
              data-ocid="hvac-electrical.section-3.toggle"
            >
              <span className="flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                  3
                </span>
                Power Circuits vs Control Circuits in HVAC
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <CardContent className="space-y-5 pt-0">
                {/* Explanation */}
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Explanation
                  </h3>
                  <div className="space-y-3 text-sm leading-relaxed">
                    <p>
                      <strong>Power Circuits</strong> carry the high voltage
                      needed to run motors, compressors, and heating elements.
                      In residential HVAC this is typically 208–240VAC single
                      phase; commercial equipment often uses 460VAC three-phase.
                      These circuits deliver the energy that does the actual
                      work.
                    </p>
                    <p>
                      <strong>Control Circuits</strong> carry low-voltage
                      (24VAC) signals that switch equipment on and off. The
                      thermostat, safety switches, control board, and contactor
                      coil are all part of the control circuit. Control circuits
                      consume very little power but tell the power circuit when
                      to run.
                    </p>
                    <p>
                      The two circuits work together: the thermostat (control)
                      tells the contactor coil to energize, which closes the
                      high-voltage contacts (power) and starts the compressor.
                    </p>
                  </div>
                </div>

                {/* HVAC Examples */}
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    HVAC Examples
                  </h3>
                  <ul className="rounded-md bg-muted/50 p-3 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        240VAC feeds the compressor contactor (power circuit)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        24VAC transformer output powers the thermostat and
                        control board (control circuit)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        Thermostat cooling call (Y wire) sends 24VAC to
                        contactor coil → coil energizes → contacts close →
                        compressor starts
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        Blown 5A fuse on control circuit = no 24V = unit won't
                        respond to thermostat even if power circuit is fine
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Key Formulas */}
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Key Formulas
                  </h3>
                  <div className="rounded-md bg-primary/10 p-3 font-mono text-sm space-y-1">
                    <div>Power (W) = V × I</div>
                    <div>kW = W / 1,000</div>
                    <div>
                      Transformer turns ratio: V_pri / V_sec = N_pri / N_sec
                    </div>
                    <div className="pt-1 text-xs text-muted-foreground">
                      240:24 transformer = 10:1 turns ratio
                    </div>
                  </div>
                </div>

                {/* Safety Note */}
                <Alert className="border-amber-300 bg-amber-50 text-amber-900 dark:bg-amber-950 dark:text-amber-100">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Safety Note:</strong> Always identify whether you
                    are working in a power circuit (high voltage) or control
                    circuit (24V) before probing. Power circuits can cause fatal
                    shock. Control circuits are generally safer but can still
                    cause injury — and a short in the control circuit will blow
                    the transformer fuse.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </AccordionContent>
          </AccordionItem>
        </Card>

        {/* ─────────────────────────────────────────────
            Section 4: Single-Phase vs Three-Phase Power
        ───────────────────────────────────────────── */}
        <Card className="overflow-hidden">
          <AccordionItem value="section-4" className="border-none">
            <AccordionTrigger
              className="px-6 py-4 text-base font-semibold hover:no-underline"
              data-ocid="hvac-electrical.section-4.toggle"
            >
              <span className="flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                  4
                </span>
                Single-Phase vs Three-Phase Power
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <CardContent className="space-y-5 pt-0">
                {/* Explanation */}
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Explanation
                  </h3>
                  <div className="space-y-3 text-sm leading-relaxed">
                    <p>
                      <strong>Single-Phase Power</strong> uses two conductors
                      (hot and neutral) and delivers power in a single
                      alternating waveform. It is the standard for residential
                      HVAC at 120V or 240V. Single-phase motors require starting
                      capacitors because they don't have the rotating magnetic
                      field three-phase provides naturally.
                    </p>
                    <p>
                      <strong>Three-Phase Power</strong> uses three hot
                      conductors, each carrying power 120° apart. This creates a
                      smooth, continuous rotating magnetic field — ideal for
                      motors. Three-phase is more efficient, runs motors more
                      smoothly, and is standard in commercial/industrial HVAC at
                      208V, 240V, or 480V.
                    </p>
                  </div>
                </div>

                {/* HVAC Examples */}
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    HVAC Examples
                  </h3>
                  <ul className="rounded-md bg-muted/50 p-3 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        Residential split system — single-phase 240V, uses run
                        and start capacitors
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        Rooftop unit on a commercial building — three-phase
                        208/230V, no capacitors needed
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        Large chiller plant — three-phase 460V for maximum
                        efficiency at high loads
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        Phase loss on a three-phase compressor causes single
                        phasing — motor overheats and fails rapidly
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Key Formulas */}
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Key Formulas
                  </h3>
                  <div className="rounded-md bg-primary/10 p-3 font-mono text-sm space-y-1">
                    <div>Single-phase power: P = V × I × PF</div>
                    <div>Three-phase power: P = V × I × 1.732 × PF</div>
                    <div>3-phase amps: I = kW × 1,000 / (V × 1.732 × PF)</div>
                    <div className="pt-1 text-xs text-muted-foreground">
                      1.732 = √3 &nbsp;|&nbsp; PF = Power Factor (typically
                      0.85–0.95)
                    </div>
                  </div>
                </div>

                {/* Safety Note */}
                <Alert className="border-amber-300 bg-amber-50 text-amber-900 dark:bg-amber-950 dark:text-amber-100">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Safety Note:</strong> Three-phase systems carry
                    higher energy and phase-to-phase voltages. Phase loss
                    (losing one leg) allows the motor to try to run on two
                    phases, drawing excessive current and overheating rapidly.
                    Always verify all three phases are present and balanced
                    before starting equipment.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </AccordionContent>
          </AccordionItem>
        </Card>

        {/* ─────────────────────────────────────────────
            Section 5: Electrical Protection
        ───────────────────────────────────────────── */}
        <Card className="overflow-hidden">
          <AccordionItem value="section-5" className="border-none">
            <AccordionTrigger
              className="px-6 py-4 text-base font-semibold hover:no-underline"
              data-ocid="hvac-electrical.section-5.toggle"
            >
              <span className="flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                  5
                </span>
                Electrical Protection (Breakers, Fuses, Grounding)
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <CardContent className="space-y-5 pt-0">
                {/* Explanation */}
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Explanation
                  </h3>
                  <div className="space-y-3 text-sm leading-relaxed">
                    <p>
                      <strong>Circuit Breakers</strong> automatically open a
                      circuit when current exceeds a safe level, protecting
                      wiring from overheating. They can be reset after the fault
                      is corrected. Breakers are sized for the wire, not the
                      load.
                    </p>
                    <p>
                      <strong>Fuses</strong> also interrupt excessive current,
                      but do so by melting a metal element — they must be
                      replaced after operation. Fuses on control circuits are
                      typically small (3–5A) and protect the transformer and
                      control board wiring.
                    </p>
                    <p>
                      <strong>Grounding</strong> provides a low-resistance path
                      back to earth for fault current. Equipment grounding bonds
                      all metal enclosures and frames together. If a live wire
                      contacts the case, fault current flows through the ground
                      wire, causing the breaker to trip before you receive a
                      shock.
                    </p>
                  </div>
                </div>

                {/* HVAC Examples */}
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    HVAC Examples
                  </h3>
                  <ul className="rounded-md bg-muted/50 p-3 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        A 35A two-pole breaker in the disconnect box protects
                        the condenser wiring (breaker sized per NEC 440)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        A blown 5A control circuit fuse indicates a short in the
                        24V wiring — find and fix the short before replacing
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        Grounding the condenser frame ensures a
                        live-wire-to-case fault trips the breaker — protecting
                        anyone who touches the unit
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        HACR-type breakers (Heating, Air Conditioning,
                        Refrigeration) are required for HVAC equipment — they
                        handle motor inrush current without nuisance tripping
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Key Formulas */}
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Key Formulas
                  </h3>
                  <div className="rounded-md bg-primary/10 p-3 font-mono text-sm space-y-1">
                    <div>
                      Max breaker/fuse = 225% of compressor RLA (NEC 440)
                    </div>
                    <div>
                      Wire ampacity ≥ load amps (plus 25% safety margin)
                    </div>
                    <div>
                      OCPD rating must be on equipment nameplate or MCA/MOCP
                    </div>
                    <div className="pt-1 text-xs text-muted-foreground">
                      MCA = Minimum Circuit Ampacity &nbsp;|&nbsp; MOCP = Max
                      Overcurrent Protection
                    </div>
                  </div>
                </div>

                {/* Safety Note */}
                <Alert className="border-amber-300 bg-amber-50 text-amber-900 dark:bg-amber-950 dark:text-amber-100">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Safety Note:</strong> Never oversize a fuse or
                    breaker to stop it from tripping — this removes protection
                    and is a serious fire hazard. A tripping breaker is a
                    symptom; investigate the cause. Never install a 30A fuse in
                    a 15A fuse holder, even temporarily.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </AccordionContent>
          </AccordionItem>
        </Card>

        {/* ─────────────────────────────────────────────
            Section 6: Motors, Contactors & Overload Protection
        ───────────────────────────────────────────── */}
        <Card className="overflow-hidden">
          <AccordionItem value="section-6" className="border-none">
            <AccordionTrigger
              className="px-6 py-4 text-base font-semibold hover:no-underline"
              data-ocid="hvac-electrical.section-6.toggle"
            >
              <span className="flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                  6
                </span>
                Motors, Contactors &amp; Overload Protection
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <CardContent className="space-y-5 pt-0">
                {/* Explanation */}
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Explanation
                  </h3>
                  <div className="space-y-3 text-sm leading-relaxed">
                    <p>
                      <strong>Motors</strong> convert electrical energy into
                      mechanical rotation. In HVAC, motors drive compressors,
                      condenser fans, and blowers. Key nameplate data includes
                      voltage, full load amps (FLA), RPM, and horsepower.
                    </p>
                    <p>
                      <strong>Contactors</strong> are high-current
                      electromechanical switches. A small 24VAC signal energizes
                      the contactor coil, which magnetically closes large
                      contacts that connect line-voltage power to the motor.
                      Contactors allow a low-voltage control circuit to safely
                      switch a high-current power circuit.
                    </p>
                    <p>
                      <strong>Overload Protectors</strong> (thermal or
                      electronic) monitor motor current. If the motor draws too
                      many amps — due to mechanical binding, low voltage, or a
                      failing winding — the overload trips, opening the circuit
                      before the motor overheats and burns out.
                    </p>
                  </div>
                </div>

                {/* HVAC Examples */}
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    HVAC Examples
                  </h3>
                  <ul className="rounded-md bg-muted/50 p-3 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        Compressor motor powered via 2-pole contactor energized
                        by the 24V thermostat cooling call
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        Condenser fan motor with an internal thermal overload —
                        trips if motor overheats, auto-resets when cool
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        ECM (Electronically Commutated Motor) blower with
                        built-in current and thermal protection — more efficient
                        than PSC motors
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        Pitted or worn contactor tips cause high resistance,
                        voltage drop, and motor overheating — inspect contacts
                        annually
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Key Formulas */}
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Key Formulas
                  </h3>
                  <div className="rounded-md bg-primary/10 p-3 font-mono text-sm space-y-1">
                    <div>FLA = Full Load Amps (from nameplate)</div>
                    <div>Overload trip ≈ 115–125% of FLA</div>
                    <div>
                      Power Factor (PF) = Real Power (W) / Apparent Power (VA)
                    </div>
                    <div>
                      Motor efficiency = Output Power / Input Power × 100%
                    </div>
                    <div className="pt-1 text-xs text-muted-foreground">
                      LRA = Locked Rotor Amps (startup) &nbsp;|&nbsp; RLA =
                      Rated Load Amps (running)
                    </div>
                  </div>
                </div>

                {/* Safety Note */}
                <Alert className="border-amber-300 bg-amber-50 text-amber-900 dark:bg-amber-950 dark:text-amber-100">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Safety Note:</strong> Always verify a contactor has
                    de-energized before touching any load-side wiring. Measure
                    voltage on both the line side AND load side before declaring
                    safe. Worn or pitted contactor tips cause arc events and
                    motor damage — replace contactors showing visible pitting or
                    discoloration.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </AccordionContent>
          </AccordionItem>
        </Card>

        {/* ─────────────────────────────────────────────
            Section 7: Variable Frequency Drives (VFD)
        ───────────────────────────────────────────── */}
        <Card className="overflow-hidden">
          <AccordionItem value="section-7" className="border-none">
            <AccordionTrigger
              className="px-6 py-4 text-base font-semibold hover:no-underline"
              data-ocid="hvac-electrical.section-7.toggle"
            >
              <span className="flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                  7
                </span>
                Variable Frequency Drives (VFD)
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <CardContent className="space-y-5 pt-0">
                {/* Explanation */}
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Explanation
                  </h3>
                  <div className="space-y-3 text-sm leading-relaxed">
                    <p>
                      A <strong>Variable Frequency Drive (VFD)</strong> controls
                      the speed of an AC induction motor by varying both the
                      frequency and voltage of the AC power supplied to it.
                      Lower frequency = slower motor speed. Higher frequency =
                      faster motor speed. The VFD first converts incoming AC to
                      DC, then electronically recreates AC at the desired
                      frequency.
                    </p>
                    <p>
                      In HVAC, VFDs allow modulating capacity instead of simple
                      on/off cycling — saving significant energy, especially at
                      partial loads. They also reduce mechanical stress on
                      motors, bearings, and belts by providing soft starts and
                      smooth speed changes.
                    </p>
                    <p>
                      VFDs are used on blower motors, compressors
                      (inverter-driven units), condenser fans, cooling tower
                      fans, and chilled water pumps.
                    </p>
                  </div>
                </div>

                {/* HVAC Examples */}
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    HVAC Examples
                  </h3>
                  <ul className="rounded-md bg-muted/50 p-3 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        Variable-speed air handler blower with VFD modulating
                        airflow to maintain duct static pressure setpoint
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        Inverter-driven mini-split compressor running at partial
                        capacity for precise temperature control and high
                        efficiency (SEER 20+)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        Cooling tower fan VFD controlled by condenser water
                        return temperature — fan slows in cool weather, saving
                        fan energy
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        Chilled water pump VFD on a variable primary flow system
                        — pump speed tracks chilled water valve positions
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Key Formulas */}
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Key Formulas
                  </h3>
                  <div className="rounded-md bg-primary/10 p-3 font-mono text-sm space-y-1">
                    <div>Motor speed: RPM = (120 × Hz) / Number of poles</div>
                    <div>Affinity law (power): P2 = P1 × (N2/N1)³</div>
                    <div>
                      Speed 80% → Power ≈ 51% &nbsp;(20% speed drop = 49% power
                      savings)
                    </div>
                    <div>
                      V/Hz ratio must stay constant to maintain motor torque
                    </div>
                    <div className="pt-1 text-xs text-muted-foreground">
                      N = speed (RPM) &nbsp;|&nbsp; Reducing speed 20% saves
                      ~49% of power (cube law)
                    </div>
                  </div>
                </div>

                {/* Safety Note */}
                <Alert className="border-amber-300 bg-amber-50 text-amber-900 dark:bg-amber-950 dark:text-amber-100">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Safety Note:</strong> VFD capacitors store
                    high-voltage DC charge that remains dangerous after power is
                    removed. Always wait the manufacturer-specified discharge
                    time (typically 5–10 minutes) and verify with a true-RMS
                    meter that voltage is at 0V before opening the drive
                    enclosure. VFD output uses high-frequency switching — use
                    only a true-RMS meter for accurate readings.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </AccordionContent>
          </AccordionItem>
        </Card>
      </Accordion>

      {/* Summary Card */}
      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            Module Summary
          </CardTitle>
          <CardDescription>
            Key concepts to remember from HVAC Electrical Fundamentals
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                label: "Ohm's Law",
                detail: "V = I × R — know any two, solve the third",
              },
              {
                label: "Series vs Parallel",
                detail:
                  "Series: one open stops all. Parallel: independent paths.",
              },
              {
                label: "Control vs Power",
                detail: "24V controls the switch; 240V does the work.",
              },
              {
                label: "Three-Phase",
                detail: "Use 1.732 (√3) for three-phase power calculations.",
              },
              {
                label: "Protection",
                detail:
                  "Never oversize protection devices — they prevent fires.",
              },
              {
                label: "VFD Cube Law",
                detail:
                  "Speed ↓20% = Power ↓49%. Small speed changes = big savings.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-2 rounded-lg bg-card p-3"
              >
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <div>
                  <span className="text-sm font-semibold">{item.label}:</span>{" "}
                  <span className="text-sm text-muted-foreground">
                    {item.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
