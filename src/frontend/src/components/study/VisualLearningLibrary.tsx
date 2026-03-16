import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, ExternalLink, Play, Search, Wrench } from "lucide-react";
import type { StudyMode } from "../../types/study";

interface VisualLearningLibraryProps {
  onNavigate: (
    view:
      | "home"
      | "core-lessons"
      | "epa-608"
      | "progress"
      | "multimeter-training"
      | "uei-dl589-guide"
      | "hvac-electrical-fundamentals"
      | "digital-gauges-probes"
      | "electrical-troubleshooting"
      | "visual-learning",
  ) => void;
  studyMode?: StudyMode;
}

// ─── Diagram Data ──────────────────────────────────────────────────────────────

const diagrams = [
  {
    id: 1,
    title: "Refrigeration Cycle",
    troubleshootingTopic: "Low/High Charge",
    explanation:
      "The refrigeration cycle moves heat from indoors to outdoors using refrigerant phase changes. The high-side carries hot compressed gas; the low-side carries cold expanded liquid/vapor. Proper charge and airflow are critical to cycle efficiency.",
    videos: [
      {
        label: "HVAC 3D Refrigeration Circuit",
        url: "https://youtu.be/p6GXJdRUz9E",
      },
    ],
    diagram: (
      <div className="flex flex-col items-center gap-1 p-3 text-xs font-mono select-none">
        <div className="flex items-center gap-2">
          <div className="rounded border-2 border-orange-400 bg-orange-400/20 px-3 py-2 text-center font-bold text-orange-700 dark:text-orange-300">
            COMPRESSOR
            <br />
            <span className="text-[10px] font-normal">
              high temp / pressure
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-orange-500">↓ hot gas</div>
        <div className="flex w-full items-center gap-2">
          <div className="flex-1 rounded border-2 border-red-400 bg-red-400/20 px-2 py-2 text-center font-bold text-red-700 dark:text-red-300">
            CONDENSER
            <br />
            <span className="text-[10px] font-normal">heat rejection</span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-blue-500">↓ liquid</div>
        <div className="flex w-full items-center gap-2">
          <div className="flex-1 rounded border-2 border-yellow-400 bg-yellow-400/20 px-2 py-2 text-center font-bold text-yellow-700 dark:text-yellow-300">
            METERING DEVICE
            <br />
            <span className="text-[10px] font-normal">TXV / fixed orifice</span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-blue-500">↓ flash</div>
        <div className="flex w-full items-center gap-2">
          <div className="flex-1 rounded border-2 border-blue-400 bg-blue-400/20 px-2 py-2 text-center font-bold text-blue-700 dark:text-blue-300">
            EVAPORATOR
            <br />
            <span className="text-[10px] font-normal">heat absorption</span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-orange-400">
          ⟲ vapor → compressor
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "24V Control Circuit",
    troubleshootingTopic: "No Call for Cooling",
    explanation:
      "The 24V control circuit carries low-voltage signals to energize contactors, relays, and the furnace board. Most HVAC controls operate at 24VAC from a step-down transformer. A break anywhere in this loop prevents equipment from starting.",
    videos: [
      {
        label: "HVAC Low Voltage Circuit Explained",
        url: "https://youtu.be/5UU2c5e2ork",
      },
      {
        label: "How Power Moves Through AC Schematic",
        url: "https://youtu.be/VtC25cV1mU0",
      },
    ],
    diagram: (
      <div className="flex flex-col items-center gap-1 p-3 text-xs font-mono select-none">
        <div className="rounded border-2 border-purple-400 bg-purple-400/20 px-3 py-1.5 text-center font-bold text-purple-700 dark:text-purple-300">
          TRANSFORMER
          <br />
          <span className="text-[10px] font-normal">240V → 24V</span>
        </div>
        <div className="flex gap-4 text-[10px]">
          <span className="text-red-500">R (24V HOT)</span>
          <span className="text-blue-500">C (COMMON)</span>
        </div>
        <div className="flex items-center gap-1">↓</div>
        <div className="rounded border-2 border-green-400 bg-green-400/20 px-3 py-1.5 text-center font-bold text-green-700 dark:text-green-300">
          THERMOSTAT
          <br />
          <span className="text-[10px] font-normal">Y — call for cool</span>
        </div>
        <div className="flex items-center gap-1">↓ Y wire</div>
        <div className="rounded border-2 border-orange-400 bg-orange-400/20 px-3 py-1.5 text-center font-bold text-orange-700 dark:text-orange-300">
          CONTACTOR COIL
          <br />
          <span className="text-[10px] font-normal">24V energizes coil</span>
        </div>
        <div className="flex items-center gap-1">↓</div>
        <div className="text-blue-500 font-bold">
          C (COMMON) ← back to transformer
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Contactor Wiring",
    troubleshootingTopic: "Contactor Failure",
    explanation:
      "A contactor is an electrically-controlled switch. The 24V coil pulls in the contacts to pass 240V to the compressor and condenser fan motor. Worn contacts, a failed coil, or low 24V are the most common failure points.",
    videos: [
      {
        label: "How to Test HVAC Relays, Contactors & Transformers",
        url: "https://youtu.be/4ja6GynaxQ0",
      },
    ],
    diagram: (
      <div className="flex flex-col items-center gap-1 p-3 text-xs font-mono select-none">
        <div className="flex gap-4">
          <div className="rounded border-2 border-red-500 bg-red-500/20 px-2 py-1 text-center font-bold text-red-700 dark:text-red-300">
            L1
            <br />
            <span className="text-[10px]">240V</span>
          </div>
          <div className="rounded border-2 border-red-500 bg-red-500/20 px-2 py-1 text-center font-bold text-red-700 dark:text-red-300">
            L2
            <br />
            <span className="text-[10px]">240V</span>
          </div>
        </div>
        <div className="text-center text-[10px] text-muted-foreground">
          line voltage in
        </div>
        <div className="w-full rounded border-2 border-slate-400 bg-slate-400/20 px-2 py-2 text-center">
          <span className="font-bold">CONTACTOR</span>
          <div className="mt-1 flex justify-center gap-4 text-[10px]">
            <span className="rounded border border-purple-400 bg-purple-400/20 px-1 text-purple-700 dark:text-purple-300">
              coil: 24V
            </span>
          </div>
        </div>
        <div className="text-center text-[10px] text-muted-foreground">
          load voltage out
        </div>
        <div className="flex gap-4">
          <div className="rounded border-2 border-blue-500 bg-blue-500/20 px-2 py-1 text-center font-bold text-blue-700 dark:text-blue-300">
            T1
            <br />
            <span className="text-[10px]">→ Comp</span>
          </div>
          <div className="rounded border-2 border-blue-500 bg-blue-500/20 px-2 py-1 text-center font-bold text-blue-700 dark:text-blue-300">
            T2
            <br />
            <span className="text-[10px]">→ Fan</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Capacitor Wiring",
    troubleshootingTopic: "Motor Won't Start",
    explanation:
      "Run capacitors provide the phase-shifted current needed to start and run single-phase motors. A failed capacitor typically causes hard start, humming, or no operation. Always check µF rating matches the nameplate.",
    videos: [
      {
        label: "Basic Electrical for HVAC Residential",
        url: "https://youtu.be/RTJlq9acCSw",
      },
    ],
    diagram: (
      <div className="flex flex-col items-center gap-2 p-3 text-xs font-mono select-none">
        <div className="rounded-full border-4 border-yellow-400 bg-yellow-400/10 px-4 py-5 text-center">
          <div className="font-bold text-yellow-700 dark:text-yellow-300">
            CAP
          </div>
          <div className="text-[10px]">µF / VAC</div>
        </div>
        <div className="flex w-full justify-between gap-1">
          <div className="flex flex-col items-center gap-0.5">
            <div className="h-4 w-0.5 bg-slate-400" />
            <div className="rounded border border-orange-400 bg-orange-400/20 px-1.5 py-0.5 font-bold text-orange-700 dark:text-orange-300">
              HERM
            </div>
            <div className="text-[10px] text-muted-foreground">
              → Compressor
            </div>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <div className="h-4 w-0.5 bg-slate-400" />
            <div className="rounded border border-green-400 bg-green-400/20 px-1.5 py-0.5 font-bold text-green-700 dark:text-green-300">
              FAN
            </div>
            <div className="text-[10px] text-muted-foreground">→ Fan Motor</div>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <div className="h-4 w-0.5 bg-slate-400" />
            <div className="rounded border border-blue-400 bg-blue-400/20 px-1.5 py-0.5 font-bold text-blue-700 dark:text-blue-300">
              C
            </div>
            <div className="text-[10px] text-muted-foreground">Common</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Compressor Windings",
    troubleshootingTopic: "Compressor Testing",
    explanation:
      "Single-phase compressors have three winding terminals — Common, Start, and Run. Checking resistance across all three terminals identifies open, grounded, or shorted windings. The S→R reading should equal C→S plus C→R.",
    videos: [
      { label: "HVAC Multimeter 101 3D", url: "https://youtu.be/fa8NM7JzISM" },
    ],
    diagram: (
      <div className="flex flex-col items-center gap-2 p-3 text-xs font-mono select-none">
        <div className="relative flex h-24 w-36 items-center justify-center rounded-full border-2 border-slate-400 bg-slate-400/10">
          <span className="text-[10px] text-muted-foreground">compressor</span>
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded border-2 border-blue-500 bg-blue-500/20 px-1.5 py-0.5 font-bold text-blue-700 dark:text-blue-300">
            C
          </div>
          <div className="absolute -bottom-3 left-4 rounded border-2 border-orange-500 bg-orange-500/20 px-1.5 py-0.5 font-bold text-orange-700 dark:text-orange-300">
            S
          </div>
          <div className="absolute -bottom-3 right-4 rounded border-2 border-green-500 bg-green-500/20 px-1.5 py-0.5 font-bold text-green-700 dark:text-green-300">
            R
          </div>
        </div>
        <div className="mt-2 rounded bg-muted px-3 py-2 text-[10px] leading-4">
          <div className="font-bold">Ohm Readings (example):</div>
          <div>
            C → S: <span className="text-orange-600 font-bold">8 Ω</span>{" "}
            (highest)
          </div>
          <div>
            C → R: <span className="text-green-600 font-bold">4 Ω</span>{" "}
            (medium)
          </div>
          <div>
            S → R: <span className="text-blue-600 font-bold">12 Ω</span> (sum)
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: "Heat Pump Reversing Valve",
    troubleshootingTopic: "Heat Pump Mode Switching",
    explanation:
      "The reversing valve switches the refrigerant flow direction to change between heating and cooling modes. The solenoid is energized (or de-energized depending on manufacturer) to switch modes. A stuck valve causes the unit to stay in one mode.",
    videos: [
      {
        label: "HVAC 3D Refrigeration Circuit",
        url: "https://youtu.be/p6GXJdRUz9E",
      },
    ],
    diagram: (
      <div className="flex flex-col items-center gap-1 p-3 text-xs font-mono select-none">
        <div className="w-full rounded border-2 border-violet-400 bg-violet-400/10 p-2 text-center">
          <div className="font-bold text-violet-700 dark:text-violet-300">
            4-WAY REVERSING VALVE
          </div>
          <div className="mt-1 flex justify-center gap-1">
            <span className="rounded bg-violet-400/30 px-1 text-[9px]">
              solenoid coil
            </span>
          </div>
        </div>
        <div className="flex w-full gap-2 text-[10px]">
          <div className="flex-1 rounded border border-blue-400 bg-blue-400/10 p-1 text-center">
            <div className="font-bold text-blue-700 dark:text-blue-300">
              COOLING
            </div>
            <div className="text-muted-foreground">suction→outdoor coil</div>
            <div className="text-muted-foreground">coil energized</div>
          </div>
          <div className="flex-1 rounded border border-red-400 bg-red-400/10 p-1 text-center">
            <div className="font-bold text-red-700 dark:text-red-300">
              HEATING
            </div>
            <div className="text-muted-foreground">suction→indoor coil</div>
            <div className="text-muted-foreground">coil de-energized</div>
          </div>
        </div>
        <div className="mt-1 flex gap-3 text-[9px] text-muted-foreground">
          <span>S = suction</span>
          <span>D = discharge</span>
          <span>A/B = coils</span>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: "Single Phase vs Three Phase",
    troubleshootingTopic: "Power Supply Issues",
    explanation:
      "Single-phase power (240V) powers most residential HVAC. Three-phase (208/460V) powers commercial compressors and large motors with better efficiency and smoother rotation. Three-phase motors do not require start capacitors.",
    videos: [
      {
        label: "Basic Electrical for HVAC Residential",
        url: "https://youtu.be/RTJlq9acCSw",
      },
    ],
    diagram: (
      <div className="flex w-full gap-2 p-3 text-xs font-mono select-none">
        <div className="flex-1 rounded border-2 border-blue-400 bg-blue-400/10 p-2">
          <div className="mb-1 text-center font-bold text-blue-700 dark:text-blue-300">
            1-PHASE
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-red-500" />
              <span className="text-[10px]">L1 (hot)</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-black dark:bg-white" />
              <span className="text-[10px]">L2 (hot)</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-[10px]">Neutral / GND</span>
            </div>
          </div>
          <div className="mt-2 text-center text-[9px] text-muted-foreground">
            240V residential
          </div>
        </div>
        <div className="flex-1 rounded border-2 border-orange-400 bg-orange-400/10 p-2">
          <div className="mb-1 text-center font-bold text-orange-700 dark:text-orange-300">
            3-PHASE
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-red-500" />
              <span className="text-[10px]">L1</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-black dark:bg-white" />
              <span className="text-[10px]">L2</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <span className="text-[10px]">L3</span>
            </div>
          </div>
          <div className="mt-2 text-center text-[9px] text-muted-foreground">
            208/460V commercial
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    title: "Pressure-Temperature Chart",
    troubleshootingTopic: "Superheat/Subcooling Calculation",
    explanation:
      "The PT chart relates refrigerant saturation pressure to temperature. Technicians use it to calculate superheat and subcooling and identify system abnormalities. Always use the correct chart for the refrigerant being serviced.",
    videos: [
      {
        label: "HVAC AC Pressure, Superheat & Subcooling",
        url: "https://youtu.be/5UU2c5e2ork",
      },
    ],
    diagram: (
      <div className="p-3 text-xs font-mono select-none overflow-x-auto">
        <div className="mb-1 text-center font-bold">PT Chart (Saturation)</div>
        <table className="w-full border-collapse text-[10px]">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-2 py-1 text-left">
                Temp °F
              </th>
              <th className="border border-border px-2 py-1 text-center">
                R-22 psig
              </th>
              <th className="border border-border px-2 py-1 text-center">
                R-410A psig
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-2 py-0.5">40°F</td>
              <td className="border border-border px-2 py-0.5 text-center text-blue-600 font-bold">
                69
              </td>
              <td className="border border-border px-2 py-0.5 text-center text-blue-600 font-bold">
                118
              </td>
            </tr>
            <tr className="bg-muted/40">
              <td className="border border-border px-2 py-0.5">68°F</td>
              <td className="border border-border px-2 py-0.5 text-center">
                105
              </td>
              <td className="border border-border px-2 py-0.5 text-center">
                154
              </td>
            </tr>
            <tr>
              <td className="border border-border px-2 py-0.5">86°F</td>
              <td className="border border-border px-2 py-0.5 text-center">
                139
              </td>
              <td className="border border-border px-2 py-0.5 text-center text-orange-600 font-bold">
                200
              </td>
            </tr>
            <tr className="bg-muted/40">
              <td className="border border-border px-2 py-0.5">105°F</td>
              <td className="border border-border px-2 py-0.5 text-center text-red-600 font-bold">
                181
              </td>
              <td className="border border-border px-2 py-0.5 text-center text-red-600 font-bold">
                261
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: 9,
    title: "Superheat & Subcooling Examples",
    troubleshootingTopic: "Refrigerant Charge Diagnosis",
    explanation:
      "Superheat confirms full vaporization at the evaporator exit. Subcooling confirms full condensation at the condenser outlet. Together they reveal charge level, TXV performance, and airflow issues to pinpoint system faults.",
    videos: [
      {
        label: "HVAC AC Pressure, Superheat & Subcooling",
        url: "https://youtu.be/5UU2c5e2ork",
      },
      {
        label: "HVAC Refrigerant Pressure Gauges",
        url: "https://youtu.be/eEZAgzkS_sA",
      },
    ],
    diagram: (
      <div className="flex w-full gap-2 p-3 text-xs font-mono select-none">
        <div className="flex-1 rounded border-2 border-blue-400 bg-blue-400/10 p-2">
          <div className="mb-1 text-center font-bold text-blue-700 dark:text-blue-300">
            SUPERHEAT
          </div>
          <div className="text-[10px] space-y-1">
            <div>
              Suction Temp: <span className="font-bold">55°F</span>
            </div>
            <div>
              Sat. Temp @<br />
              suction press: <span className="font-bold">40°F</span>
            </div>
            <div className="rounded bg-blue-400/30 px-1 py-0.5 font-bold">
              SH = 55 - 40 = 15°F
            </div>
            <div className="text-muted-foreground text-[9px]">
              Target: 10-15°F
            </div>
          </div>
        </div>
        <div className="flex-1 rounded border-2 border-orange-400 bg-orange-400/10 p-2">
          <div className="mb-1 text-center font-bold text-orange-700 dark:text-orange-300">
            SUBCOOLING
          </div>
          <div className="text-[10px] space-y-1">
            <div>
              Sat. Temp @<br />
              head press: <span className="font-bold">120°F</span>
            </div>
            <div>
              Liquid Line: <span className="font-bold">108°F</span>
            </div>
            <div className="rounded bg-orange-400/30 px-1 py-0.5 font-bold">
              SC = 120 - 108 = 12°F
            </div>
            <div className="text-muted-foreground text-[9px]">
              Target: 10-15°F
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

// ─── Video Categories ──────────────────────────────────────────────────────────

const videoCategories = [
  {
    id: "electrical",
    label: "Electrical Troubleshooting",
    color: "text-yellow-600 dark:text-yellow-400",
    bg: "bg-yellow-400/10 border-yellow-400/30",
    videos: [
      {
        title: "Basic Electrical for HVAC Residential",
        description:
          "Covers circuit fundamentals, wiring safety, and HVAC-specific electrical concepts for residential systems.",
        url: "https://youtu.be/RTJlq9acCSw",
      },
      {
        title: "How Power Moves Through An AC System Schematic",
        description:
          "Visual walkthrough of line and low-voltage paths through a complete AC system wiring diagram.",
        url: "https://youtu.be/VtC25cV1mU0",
      },
      {
        title: "How to Test HVAC Relays, Contactors & Transformers",
        description:
          "Step-by-step multimeter testing procedures for key electrical components.",
        url: "https://youtu.be/4ja6GynaxQ0",
      },
      {
        title: "How to Wire a Thermostat for Beginners",
        description:
          "Beginner guide to thermostat wiring terminals, color codes, and common configurations.",
        url: "https://youtu.be/mIsXWXicB48",
      },
      {
        title: "HVAC Low Voltage Circuit Explained",
        description:
          "Explains the 24V control circuit, transformer, and how signals move through the system.",
        url: "https://youtu.be/5UU2c5e2ork",
      },
    ],
  },
  {
    id: "refrigeration",
    label: "Refrigeration Diagnostics",
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-400/10 border-blue-400/30",
    videos: [
      {
        title: "HVAC 3D Refrigeration Circuit",
        description:
          "3D animated walkthrough of refrigerant flow through a complete refrigeration circuit.",
        url: "https://youtu.be/p6GXJdRUz9E",
      },
      {
        title: "HVAC AC Pressure, Superheat & Subcooling Explained",
        description:
          "Covers how to measure and interpret superheat and subcooling for accurate diagnostics.",
        url: "https://youtu.be/5UU2c5e2ork",
      },
      {
        title: "HVAC Metering Device Basics",
        description:
          "Explains TXV and fixed orifice metering devices — operation, differences, and diagnostic tips.",
        url: "https://youtu.be/qV-DIqIxPGk",
      },
      {
        title: "HVAC (Recovery) 3D — Removing Refrigerant from Running System",
        description:
          "3D visualization of the refrigerant recovery process from an active AC system.",
        url: "https://youtu.be/fROHlPXw_H0",
      },
      {
        title: "HVAC Refrigerant Line 3D",
        description:
          "3D diagram showing suction line, liquid line, and refrigerant state throughout the system.",
        url: "https://youtu.be/j6-n2xSn90A",
      },
    ],
  },
  {
    id: "tools",
    label: "HVAC Tools & Measurements",
    color: "text-green-600 dark:text-green-400",
    bg: "bg-green-400/10 border-green-400/30",
    videos: [
      {
        title: "HVAC Multimeter 101 3D",
        description:
          "3D animated guide to using a multimeter for HVAC diagnostics — voltage, resistance, and continuity.",
        url: "https://youtu.be/fa8NM7JzISM",
      },
      {
        title: "HVAC Refrigerant Pressure Gauges",
        description:
          "How to read and connect manifold gauge sets for R-22, R-410A, and other refrigerants.",
        url: "https://youtu.be/eEZAgzkS_sA",
      },
      {
        title: "HVAC Vacuum Procedures",
        description:
          "Proper evacuation techniques, micron gauge use, and triple-evacuation best practices.",
        url: "https://youtu.be/TllrD0Mt2LU",
      },
      {
        title: "HVAC How to Evacuate AC System",
        description:
          "Step-by-step evacuation walkthrough including valve isolation and target micron levels.",
        url: "https://youtu.be/JsnQeUSuUMU",
      },
    ],
  },
  {
    id: "system",
    label: "System Operation & Schematics",
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-400/10 border-purple-400/30",
    videos: [
      {
        title: "HVAC AC Types",
        description:
          "Overview of split systems, package units, mini-splits, and commercial HVAC configurations.",
        url: "https://youtu.be/moBjCghTCsE",
      },
      {
        title: "HVAC Fundamentals Playlist",
        description:
          "Complete beginner-to-intermediate playlist covering all core HVAC concepts.",
        url: "https://youtube.com/playlist?list=PLjmMtP2_3aVu2d399fJl8mjRMfIR3YJVy",
      },
      {
        title: "EPA 608 Prep Playlist",
        description:
          "Full EPA 608 certification prep series covering Core, Type I, II, and III.",
        url: "https://youtube.com/playlist?list=PLjmMtP2_3aVtT8MuGKncaNsgE-osu61G_",
      },
      {
        title: "EPA 608 Core Prep Part 1",
        description:
          "Covers ozone depletion, Clean Air Act, refrigerant safety, and recovery fundamentals.",
        url: "https://youtu.be/BLtBaCt81i4",
      },
      {
        title: "EPA 608 Core Prep Part 2",
        description:
          "Continues EPA Core topics including substitute refrigerants and shipping regulations.",
        url: "https://youtu.be/gi-RkhawFGU",
      },
    ],
  },
];

// ─── Component ─────────────────────────────────────────────────────────────────

export default function VisualLearningLibrary({
  onNavigate,
}: VisualLearningLibraryProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-2xl font-bold tracking-tight">
          Visual Learning Library
        </h2>
        <p className="text-muted-foreground">
          Labeled HVAC diagrams and categorized training videos to reinforce
          concepts visually.
        </p>
      </div>

      <Tabs defaultValue="diagrams" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger
            value="diagrams"
            data-ocid="visual-learning.diagrams.tab"
          >
            HVAC Diagrams
          </TabsTrigger>
          <TabsTrigger value="videos" data-ocid="visual-learning.videos.tab">
            Training Videos
          </TabsTrigger>
        </TabsList>

        {/* ── DIAGRAMS TAB ── */}
        <TabsContent value="diagrams" className="mt-6 space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {diagrams.map((d, idx) => (
              <Card
                key={d.id}
                className="overflow-hidden transition-all hover:shadow-lg"
                data-ocid={`visual-learning.diagram.item.${idx + 1}`}
              >
                {/* Diagram Visual */}
                <div className="border-b border-border bg-muted/30 min-h-[160px] flex items-center justify-center">
                  {d.diagram}
                </div>

                <CardHeader className="pb-2 pt-4">
                  <CardTitle className="text-base">{d.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {d.explanation}
                  </p>

                  <div className="flex items-center gap-2">
                    <Wrench className="h-3.5 w-3.5 text-primary shrink-0" />
                    <Badge variant="secondary" className="text-xs">
                      {d.troubleshootingTopic}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {d.videos.map((v) => (
                      <a
                        key={v.url}
                        href={v.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-7 gap-1.5 text-xs"
                        >
                          <Play className="h-3 w-3" />
                          Watch Video
                          <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                        </Button>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Integration Bar */}
          <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="py-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-medium text-muted-foreground">
                  Explore Related:
                </span>
                <Button
                  size="sm"
                  variant="secondary"
                  className="gap-1.5"
                  onClick={() => onNavigate("home")}
                  data-ocid="visual-learning.study.button"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  Study Modules
                </Button>
                <Badge
                  variant="outline"
                  className="cursor-default gap-1.5 px-3 py-1.5 text-xs"
                >
                  <Search className="h-3 w-3" />
                  Search Knowledge Base
                </Badge>
                <Badge
                  variant="outline"
                  className="cursor-default gap-1.5 px-3 py-1.5 text-xs"
                >
                  <Wrench className="h-3 w-3" />
                  Use Troubleshooter Tools
                </Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ── VIDEOS TAB ── */}
        <TabsContent value="videos" className="mt-6 space-y-8">
          {videoCategories.map((cat, catIdx) => (
            <div key={cat.id} className="space-y-3">
              <div
                className={`flex items-center gap-2 rounded-lg border px-4 py-2 ${cat.bg}`}
              >
                <h3 className={`font-semibold ${cat.color}`}>{cat.label}</h3>
                <Badge variant="secondary" className="ml-auto text-xs">
                  {cat.videos.length} videos
                </Badge>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {cat.videos.map((v, vIdx) => (
                  <Card
                    key={v.url}
                    className="flex items-start gap-3 p-4 transition-all hover:shadow-md"
                    data-ocid={`visual-learning.video.item.${catIdx * 10 + vIdx + 1}`}
                  >
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Play className="h-4 w-4 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1 space-y-1">
                      <p className="text-sm font-medium leading-snug">
                        {v.title}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {v.description}
                      </p>
                      <a href={v.url} target="_blank" rel="noopener noreferrer">
                        <Button
                          size="sm"
                          variant="outline"
                          className="mt-1.5 h-7 gap-1.5 text-xs"
                        >
                          Watch Video
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </a>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
