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
import { AlertTriangle, Gauge } from "lucide-react";
import type { StudyMode } from "../../types/study";

interface DigitalGaugesAndSmartProbesProps {
  studyMode: StudyMode;
}

const ALL_SECTIONS = [
  "section-1",
  "section-2",
  "section-3",
  "section-4",
  "section-5",
  "section-6",
];

export default function DigitalGaugesAndSmartProbes({
  studyMode,
}: DigitalGaugesAndSmartProbesProps) {
  const isBeginner = studyMode.__kind__ === "beginner";

  return (
    <div className="space-y-6" data-ocid="digital-gauges.section">
      {/* Module Header */}
      <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
        <CardHeader>
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/15">
              <Gauge className="h-8 w-8 text-primary" />
            </div>
            <div>
              <CardTitle className="text-2xl leading-tight">
                Digital Gauges &amp; Smart Probes
              </CardTitle>
              <CardDescription className="mt-1 text-base">
                Master modern HVAC diagnostic instruments — from digital
                manifold gauges to micron gauges and wireless probes
              </CardDescription>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge variant="secondary">6 Sections</Badge>
                <Badge
                  variant="outline"
                  className="text-primary border-primary/30"
                >
                  {isBeginner ? "Beginner Friendly" : "Expert Mode"}
                </Badge>
                <Badge
                  variant="outline"
                  className="text-accent border-accent/30"
                >
                  Field-Ready Skills
                </Badge>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Accordion Sections */}
      <Accordion
        type="multiple"
        defaultValue={ALL_SECTIONS}
        className="space-y-3"
      >
        {/* ─────────────────────────────────────────────
            Section 1: Digital Manifold Gauges
        ───────────────────────────────────────────── */}
        <Card className="overflow-hidden">
          <AccordionItem value="section-1" className="border-none">
            <AccordionTrigger
              className="px-6 py-4 text-base font-semibold hover:no-underline"
              data-ocid="digital-gauges.section-1.toggle"
            >
              <span className="flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                  1
                </span>
                Digital Manifold Gauges
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <CardContent className="space-y-5 pt-0">
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Explanation
                  </h3>
                  <div className="space-y-3 text-sm leading-relaxed">
                    <p>
                      A <strong>digital manifold gauge set</strong> replaces
                      traditional analog gauges with a digital display that
                      shows pressure readings, temperature readings, and
                      calculated values such as superheat and subcooling
                      simultaneously. Most modern digital manifolds connect to a
                      smartphone app via Bluetooth, allowing technicians to log
                      data, view trends, and share reports in the field.
                    </p>
                    <p>
                      The manifold connects to the system using the{" "}
                      <strong>low-side (suction) port</strong> — typically the
                      larger blue hose — and the{" "}
                      <strong>high-side (discharge) port</strong> — the smaller
                      red hose. Once connected and the refrigerant type is
                      selected, the manifold automatically displays saturation
                      temperatures corresponding to the measured pressures using
                      built-in pressure-temperature charts.
                    </p>
                    <p>
                      High-end models such as the Testo 550i, Yellow Jacket
                      Titan, and Fieldpiece Job Link display superheat,
                      subcooling, and system efficiency data without manual
                      calculations.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Reading Suction &amp; Head Pressure
                  </h3>
                  <ul className="rounded-md bg-muted/50 p-3 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        <strong>Suction pressure (low side):</strong> Measured
                        at the suction service valve on the compressor or the
                        suction line Schrader port. For R-410A systems running
                        at 40°F evaporator saturation, expect approximately 118
                        psig suction pressure.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        <strong>Head pressure (high side):</strong> Measured at
                        the discharge service valve or liquid line service
                        valve. For R-410A with 115°F condenser saturation,
                        expect approximately 400 psig head pressure.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        Always select the correct refrigerant type on the
                        manifold before reading — using the wrong refrigerant
                        profile will display incorrect saturation temperatures.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        Use the manifold's built-in P/T (pressure-temperature)
                        conversion to identify evaporator and condenser
                        saturation temperatures instantly.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Best Practices
                  </h3>
                  <ul className="rounded-md bg-muted/50 p-3 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>
                        Zero out the manifold before connecting to remove
                        atmospheric pressure offset errors.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>
                        Allow the system to run at steady state (10–15 minutes)
                        before recording diagnostic readings.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>
                        Use quick-connect low-loss fittings to minimize
                        refrigerant loss when connecting and disconnecting
                        hoses.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>
                        Log readings to the app and compare to manufacturer
                        charging charts for accurate diagnosis.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Typical Operating Pressures (Reference)
                  </h3>
                  <div className="rounded-md bg-primary/10 p-3 font-mono text-sm space-y-1">
                    <div>R-410A — Suction: 118–125 psig @ 40°F sat. evap.</div>
                    <div>
                      R-410A — Head: 380–420 psig @ 110–120°F sat. cond.
                    </div>
                    <div>R-22 — Suction: 68–70 psig @ 40°F sat. evap.</div>
                    <div>R-22 — Head: 225–250 psig @ 110–120°F sat. cond.</div>
                    <div className="pt-1 text-xs text-muted-foreground">
                      Values vary with outdoor ambient and indoor load
                      conditions
                    </div>
                  </div>
                </div>

                <Alert className="border-amber-300 bg-amber-50 text-amber-900 dark:bg-amber-950 dark:text-amber-100">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Safety Note:</strong> R-410A operates at
                    approximately 70% higher pressures than R-22. Never use
                    R-22-rated hoses or fittings on an R-410A system. Always
                    wear safety glasses when connecting gauge hoses to
                    pressurized systems. Purge hoses of air before connecting to
                    a charged system to prevent contamination.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </AccordionContent>
          </AccordionItem>
        </Card>

        {/* ─────────────────────────────────────────────
            Section 2: Pressure Probes
        ───────────────────────────────────────────── */}
        <Card className="overflow-hidden">
          <AccordionItem value="section-2" className="border-none">
            <AccordionTrigger
              className="px-6 py-4 text-base font-semibold hover:no-underline"
              data-ocid="digital-gauges.section-2.toggle"
            >
              <span className="flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                  2
                </span>
                Pressure Probes
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <CardContent className="space-y-5 pt-0">
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Explanation
                  </h3>
                  <div className="space-y-3 text-sm leading-relaxed">
                    <p>
                      <strong>Pressure probes</strong> are standalone wireless
                      or wired sensors that attach directly to Schrader valve
                      ports on HVAC systems. Unlike a traditional manifold, they
                      have no center hose and therefore hold zero refrigerant —
                      making them ideal for monitoring without risking any
                      refrigerant loss.
                    </p>
                    <p>
                      Wireless pressure probes (such as Fieldpiece Job Link
                      probes or Testo Smart Probes) communicate via Bluetooth to
                      a smartphone or tablet. The technician can monitor
                      pressures from inside the building while the outdoor unit
                      runs, eliminating the need to stand at the condenser.
                    </p>
                    <p>
                      Some systems support four probes simultaneously: suction,
                      discharge, liquid line, and suction line — providing a
                      complete picture of system performance from one app
                      screen.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    HVAC Field Examples
                  </h3>
                  <ul className="rounded-md bg-muted/50 p-3 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        Attach a suction probe to the low-side Schrader and a
                        discharge probe to the high-side Schrader; walk indoors
                        to check airflow while monitoring pressures remotely.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        Use a pressure probe on the liquid line to identify a
                        restriction — a significant pressure drop between the
                        condenser outlet and the TXV inlet indicates a clogged
                        filter-drier or kinked line.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        Leave probes installed during a call-back to log
                        pressure data over time and identify intermittent faults
                        the system exhibits only at certain outdoor
                        temperatures.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Placement Rules &amp; Best Practices
                  </h3>
                  <ul className="rounded-md bg-muted/50 p-3 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>
                        Always use a Schrader valve core removal tool to confirm
                        the core is intact before attaching a probe — a missing
                        core will cause immediate refrigerant loss.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>
                        Select the correct refrigerant type in the app before
                        reading — the probe reports raw pressure; the app
                        converts to saturation temperature.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>
                        Wireless probes have a Bluetooth range of approximately
                        100–150 feet in open air — walls and metal panels reduce
                        range significantly.
                      </span>
                    </li>
                  </ul>
                </div>

                <Alert className="border-amber-300 bg-amber-50 text-amber-900 dark:bg-amber-950 dark:text-amber-100">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Safety Note:</strong> Pressure probes thread onto
                    live Schrader ports. Ensure the probe's valve core depressor
                    is fully retracted before threading on — threading on with
                    the depressor extended will immediately open the Schrader
                    valve and spray refrigerant. Wear safety glasses at all
                    times when connecting probes to pressurized refrigerant
                    circuits.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </AccordionContent>
          </AccordionItem>
        </Card>

        {/* ─────────────────────────────────────────────
            Section 3: Temperature Clamps
        ───────────────────────────────────────────── */}
        <Card className="overflow-hidden">
          <AccordionItem value="section-3" className="border-none">
            <AccordionTrigger
              className="px-6 py-4 text-base font-semibold hover:no-underline"
              data-ocid="digital-gauges.section-3.toggle"
            >
              <span className="flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                  3
                </span>
                Temperature Clamps
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <CardContent className="space-y-5 pt-0">
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Explanation
                  </h3>
                  <div className="space-y-3 text-sm leading-relaxed">
                    <p>
                      <strong>Temperature clamps</strong> (also called pipe
                      clamp thermistors or pipe clamp probes) are spring-loaded
                      sensors that clamp around refrigerant lines to measure
                      surface temperature. Because they measure the outside of
                      the pipe rather than the refrigerant itself, accurate
                      readings require good thermal contact and proper
                      insulation of the probe from surrounding air.
                    </p>
                    <p>
                      They are the primary tool for measuring the temperatures
                      needed to calculate <strong>superheat</strong> and{" "}
                      <strong>subcooling</strong> when combined with the
                      corresponding pressure reading. Digital manifold sets and
                      smart probe kits typically include two or four temperature
                      clamps that log wirelessly to the same app.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    HVAC Field Examples
                  </h3>
                  <ul className="rounded-md bg-muted/50 p-3 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        <strong>Superheat measurement:</strong> Clamp onto the
                        suction line as close to the outdoor unit as possible
                        (after the evaporator). Read the suction line
                        temperature and compare to the evaporator saturation
                        temperature from the suction pressure reading.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        <strong>Subcooling measurement:</strong> Clamp onto the
                        liquid line leaving the condenser. Compare this
                        temperature to the condenser saturation temperature from
                        the head pressure reading.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        Clamp on the return air and supply air ducts to
                        calculate Delta T (temperature split) across the coil —
                        a quick check of system cooling performance.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Placement Rules &amp; Best Practices
                  </h3>
                  <ul className="rounded-md bg-muted/50 p-3 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>
                        Clean the pipe surface with a rag before clamping — oil,
                        dirt, and paint insulate the sensor and cause inaccurate
                        readings.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>
                        Wrap the probe and pipe with insulating foam or a rag to
                        block ambient air from skewing the temperature reading —
                        especially critical in hot outdoor environments.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>
                        Allow 5 minutes for the probe to stabilize before
                        recording a superheat or subcooling measurement — probes
                        take time to reach thermal equilibrium with the pipe.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>
                        For superheat, place the suction clamp at the point
                        where you connect the gauges — this gives the most
                        consistent reference point.
                      </span>
                    </li>
                  </ul>
                </div>

                <Alert className="border-amber-300 bg-amber-50 text-amber-900 dark:bg-amber-950 dark:text-amber-100">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Safety Note:</strong> The suction line on a running
                    system can be cold enough to cause frostbite with prolonged
                    contact. The liquid and discharge lines can be hot enough to
                    burn skin. Always use the clamp probe — do not hold bare
                    hands on refrigerant lines. Inspect probe leads for damage
                    before use.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </AccordionContent>
          </AccordionItem>
        </Card>

        {/* ─────────────────────────────────────────────
            Section 4: Micron Gauges
        ───────────────────────────────────────────── */}
        <Card className="overflow-hidden">
          <AccordionItem value="section-4" className="border-none">
            <AccordionTrigger
              className="px-6 py-4 text-base font-semibold hover:no-underline"
              data-ocid="digital-gauges.section-4.toggle"
            >
              <span className="flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                  4
                </span>
                Micron Gauges
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <CardContent className="space-y-5 pt-0">
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Explanation
                  </h3>
                  <div className="space-y-3 text-sm leading-relaxed">
                    <p>
                      A <strong>micron gauge</strong> (also called a
                      thermocouple vacuum gauge) measures absolute pressure in
                      the deep vacuum range during system evacuation. While
                      manifold gauges measure in psig (positive pressure) or
                      inHg (inches of mercury), micron gauges measure in{" "}
                      <strong>microns</strong> — units of absolute pressure far
                      below atmospheric.
                    </p>
                    <p>
                      One micron equals one millitorr, or one one-thousandth of
                      a torr. Atmospheric pressure is approximately 760,000
                      microns. The goal during HVAC evacuation is to pull the
                      system down to <strong>500 microns or below</strong> and
                      confirm it holds (decay test), proving the system is free
                      of moisture, air, and non-condensables.
                    </p>
                    <p>
                      Common micron gauges include the Yellow Jacket Titan,
                      Fieldpiece SVG3, JB Industries Eliminator, and Appion
                      G5Twin Smart Gauge.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    How to Use a Micron Gauge
                  </h3>
                  <ul className="rounded-md bg-muted/50 p-3 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        Connect the micron gauge directly to the system —
                        ideally to the center service port of the manifold or a
                        dedicated Schrader port on the system. Do not connect it
                        through a long hose run, which slows the reading
                        response.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        Evacuate to below 500 microns. Once reached, close the
                        manifold valves and isolate the system from the vacuum
                        pump. Watch the gauge for a 15-minute decay test.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        If the micron level rises quickly and stabilizes at a
                        high number (above 2,000), a leak is present. If it
                        rises slowly and levels off between 1,000–2,000 microns,
                        moisture is trapped in the system. If it holds below 500
                        microns, the system is clean and tight.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Evacuation Target Levels
                  </h3>
                  <div className="rounded-md bg-primary/10 p-3 font-mono text-sm space-y-1">
                    <div>Target pull-down: ≤ 500 microns</div>
                    <div>Acceptable hold after isolation: ≤ 500 microns</div>
                    <div>Moisture suspected: 1,000–2,000 microns hold</div>
                    <div>Leak present: rapid rise to &gt; 2,000 microns</div>
                    <div>ASHRAE/ESCO standard: 500 microns (0.5 torr)</div>
                    <div className="pt-1 text-xs text-muted-foreground">
                      Some contractors target 300 microns for maximum system
                      cleanliness
                    </div>
                  </div>
                </div>

                <Alert className="border-amber-300 bg-amber-50 text-amber-900 dark:bg-amber-950 dark:text-amber-100">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Safety Note:</strong> Never use a micron gauge to
                    measure positive refrigerant pressure — it is a vacuum
                    instrument only and will be damaged by pressures above
                    atmospheric. Ensure the vacuum pump is rated for the
                    refrigerant being used. Avoid cross-contaminating the micron
                    gauge sensor with oil — oil in the sensor destroys accuracy.
                    Use an inline oil trap on the vacuum hose if needed.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </AccordionContent>
          </AccordionItem>
        </Card>

        {/* ─────────────────────────────────────────────
            Section 5: Measuring Superheat & Subcooling
        ───────────────────────────────────────────── */}
        <Card className="overflow-hidden">
          <AccordionItem value="section-5" className="border-none">
            <AccordionTrigger
              className="px-6 py-4 text-base font-semibold hover:no-underline"
              data-ocid="digital-gauges.section-5.toggle"
            >
              <span className="flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                  5
                </span>
                Measuring Superheat &amp; Subcooling
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <CardContent className="space-y-5 pt-0">
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Superheat
                  </h3>
                  <div className="space-y-3 text-sm leading-relaxed">
                    <p>
                      <strong>Superheat</strong> is the number of degrees the
                      refrigerant vapor has been heated above its saturation
                      (boiling) temperature at a given pressure. It is measured
                      at the evaporator outlet or suction line at the outdoor
                      unit. Superheat confirms all liquid refrigerant has
                      completely boiled off before re-entering the compressor —
                      this is critical because liquid entering a compressor
                      causes immediate mechanical damage (slugging).
                    </p>
                    <p>
                      Superheat is used to charge fixed-orifice metering systems
                      (capillary tube or piston). For TXV systems, superheat at
                      the suction line is not as useful for charging but is used
                      to verify TXV operation.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Subcooling
                  </h3>
                  <div className="space-y-3 text-sm leading-relaxed">
                    <p>
                      <strong>Subcooling</strong> is the number of degrees the
                      liquid refrigerant has been cooled below its saturation
                      (condensing) temperature at a given pressure. It is
                      measured at the liquid line leaving the condenser.
                      Subcooling confirms the refrigerant is fully condensed and
                      slightly cooled, ensuring a solid liquid column reaches
                      the metering device. A low subcooling indicates low charge
                      or a restriction before the measuring point.
                    </p>
                    <p>
                      Subcooling is the primary charging method for TXV systems.
                      Typical target subcooling is <strong>10–15°F</strong> for
                      most residential equipment — always verify against
                      manufacturer specifications.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Field Calculation Steps
                  </h3>
                  <ul className="rounded-md bg-muted/50 p-3 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        <strong>Superheat:</strong> Measure suction pressure →
                        convert to saturation temp using P/T chart → measure
                        actual suction line temp with clamp probe → Superheat =
                        Actual Temp − Saturation Temp
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        <strong>Subcooling:</strong> Measure head pressure →
                        convert to saturation temp using P/T chart → measure
                        actual liquid line temp with clamp probe → Subcooling =
                        Saturation Temp − Actual Temp
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        <strong>Field Example:</strong> R-410A system — suction
                        pressure 118 psig → saturation temp 40°F. Suction clamp
                        reads 55°F. Superheat = 55 − 40 = 15°F. Normal for a
                        fixed-orifice system.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        <strong>Field Example:</strong> R-410A system — head
                        pressure 400 psig → saturation temp 115°F. Liquid line
                        clamp reads 103°F. Subcooling = 115 − 103 = 12°F. Normal
                        for a TXV system.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Key Formulas
                  </h3>
                  <div className="rounded-md bg-primary/10 p-3 font-mono text-sm space-y-1">
                    <div>
                      Superheat = Suction Line Temp − Saturation Temp (suction
                      pressure)
                    </div>
                    <div>
                      Subcooling = Saturation Temp (head pressure) − Liquid Line
                      Temp
                    </div>
                    <div className="pt-2 text-xs text-muted-foreground">
                      Normal superheat (fixed orifice): 10–25°F depending on
                      conditions
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Normal superheat (TXV): 8–12°F at the evaporator outlet
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Normal subcooling (TXV systems): 10–15°F
                    </div>
                  </div>
                </div>

                <Alert className="border-amber-300 bg-amber-50 text-amber-900 dark:bg-amber-950 dark:text-amber-100">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Safety Note:</strong> Superheat below 5°F indicates
                    liquid refrigerant is reaching the compressor — a dangerous
                    condition that can cause compressor failure within minutes.
                    If superheat is critically low, do not add refrigerant.
                    Check for an overcharged system, flooded TXV, or low airflow
                    across the evaporator first. Always identify the root cause
                    before adding refrigerant.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </AccordionContent>
          </AccordionItem>
        </Card>

        {/* ─────────────────────────────────────────────
            Section 6: Evacuation and Micron Levels
        ───────────────────────────────────────────── */}
        <Card className="overflow-hidden">
          <AccordionItem value="section-6" className="border-none">
            <AccordionTrigger
              className="px-6 py-4 text-base font-semibold hover:no-underline"
              data-ocid="digital-gauges.section-6.toggle"
            >
              <span className="flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                  6
                </span>
                Evacuation and Micron Levels
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <CardContent className="space-y-5 pt-0">
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Why Proper Evacuation Matters
                  </h3>
                  <div className="space-y-3 text-sm leading-relaxed">
                    <p>
                      When an HVAC system is opened for service or installed
                      new, air and moisture enter the refrigerant circuit. Air
                      is a non-condensable gas that raises head pressure and
                      reduces system efficiency. Moisture reacts chemically with
                      refrigerant and oil to form acids that corrode compressor
                      windings and copper piping from the inside.
                    </p>
                    <p>
                      Proper evacuation removes air, moisture, and other
                      contaminants by pulling the system into a deep vacuum.
                      Because water boils at approximately 35°F at 500 microns
                      of pressure, pulling below 500 microns causes any trapped
                      moisture to vaporize so the vacuum pump can remove it.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    HVAC Field Examples
                  </h3>
                  <ul className="rounded-md bg-muted/50 p-3 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        New system installation: evacuate from both high and low
                        sides simultaneously using a two-port vacuum manifold.
                        Pull to 300 microns, isolate, and perform a 15-minute
                        decay test before charging.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        After replacing a compressor: triple evacuation (pull to
                        1,500 microns → break with dry nitrogen → pull again
                        twice more) removes residual moisture and metal
                        contamination from the burnout.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        Micron level stalls at 2,000 microns during pull-down:
                        indicates trapped moisture, too-small vacuum pump, or
                        clogged vacuum hoses. Change pump oil, use a dedicated
                        3/8" vacuum hose, and continue pulling.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Common Mistakes &amp; Best Practices
                  </h3>
                  <ul className="rounded-md bg-muted/50 p-3 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>
                        <strong>Mistake:</strong> Using the manifold gauge hoses
                        to pull a vacuum — standard 1/4" hoses restrict flow
                        significantly. Use dedicated large-bore (3/8") vacuum
                        hoses directly to the system service valves.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>
                        <strong>Mistake:</strong> Using a manifold gauge to
                        verify vacuum — manifold gauges cannot read below 27–29
                        inHg accurately. Always use a dedicated micron gauge.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>
                        <strong>Best Practice:</strong> Change vacuum pump oil
                        before every evacuation job. Contaminated oil reduces
                        pump efficiency and prevents achieving target micron
                        levels.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>
                        <strong>Best Practice:</strong> Pull the vacuum from the
                        largest-diameter fitting closest to the system — the
                        liquid line and suction line service valves, not hose
                        fittings — to reduce restriction.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>
                        <strong>Best Practice:</strong> Keep the system warm
                        during evacuation (above 50°F ambient if possible) —
                        cold systems hold moisture more stubbornly and slow
                        pull-down.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Evacuation Reference Guide
                  </h3>
                  <div className="rounded-md bg-primary/10 p-3 font-mono text-sm space-y-1">
                    <div>Atmospheric pressure: ~760,000 microns</div>
                    <div>Target evacuation level: ≤ 500 microns</div>
                    <div>Excellent evacuation: ≤ 300 microns</div>
                    <div>Moisture boiling point at 500 microns: ~35°F</div>
                    <div>Decay test duration: minimum 15 minutes isolated</div>
                    <div>Pass: holds ≤ 500 microns after decay test</div>
                    <div>Fail (leak): rapid rise to &gt; 2,000 microns</div>
                    <div>Fail (moisture): slow rise, levels at 1,000–2,000</div>
                    <div className="pt-1 text-xs text-muted-foreground">
                      Triple-evacuation required after burnout or open system
                    </div>
                  </div>
                </div>

                <Alert className="border-amber-300 bg-amber-50 text-amber-900 dark:bg-amber-950 dark:text-amber-100">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Safety Note:</strong> Never use oxygen or compressed
                    air to pressure-test refrigerant circuits. Use only dry
                    nitrogen. Oxygen mixed with compressor oil is flammable and
                    explosive. Never open a system to atmosphere without
                    recovering refrigerant first — releasing refrigerant
                    intentionally violates EPA Section 608 regulations and is
                    subject to significant fines.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </AccordionContent>
          </AccordionItem>
        </Card>
      </Accordion>

      {/* Module Summary Card */}
      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gauge className="h-5 w-5 text-primary" />
            Module Summary
          </CardTitle>
          <CardDescription>
            Key takeaways from Digital Gauges &amp; Smart Probes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                label: "Digital Manifolds",
                detail:
                  "Select the correct refrigerant type before reading. Allow 10–15 min steady state. Use quick-connect fittings.",
              },
              {
                label: "Pressure Probes",
                detail:
                  "Zero-loss connection to Schrader ports. Wireless monitoring from inside. Verify core is intact before connecting.",
              },
              {
                label: "Temperature Clamps",
                detail:
                  "Clean the pipe surface. Insulate the probe from air. Allow 5 min to stabilize before recording.",
              },
              {
                label: "Micron Gauges",
                detail:
                  "Use only for vacuum measurement. Target ≤ 500 microns. 15-minute decay test to confirm a clean, tight system.",
              },
              {
                label: "Superheat Formula",
                detail:
                  "Suction Line Temp − Saturation Temp (from suction pressure). Normal: 10–25°F (fixed orifice).",
              },
              {
                label: "Subcooling Formula",
                detail:
                  "Saturation Temp (from head pressure) − Liquid Line Temp. Normal: 10–15°F (TXV systems).",
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
