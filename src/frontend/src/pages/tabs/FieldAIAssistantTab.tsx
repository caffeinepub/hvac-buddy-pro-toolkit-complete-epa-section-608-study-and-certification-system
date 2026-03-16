import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertTriangle,
  BookOpen,
  Bot,
  ChevronDown,
  ChevronUp,
  Clock,
  ExternalLink,
  History,
  Loader2,
  PlayCircle,
  Save,
  Search,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";

interface FieldAIAssistantTabProps {
  isGuest: boolean;
}

// ─── AI Knowledge Base ────────────────────────────────────────────────────────

interface VideoRef {
  title: string;
  url: string;
}

interface AIResponse {
  symptom: string;
  causes: string[];
  steps: string[];
  tools: string[];
  parts: string[];
  safety: string;
  videos: VideoRef[];
  modules: string[];
  kbArticles: string[];
  estimatedTime: string;
}

const KNOWLEDGE_BASE: Record<string, AIResponse> = {
  "ac not cooling": {
    symptom: "AC Not Cooling",
    causes: [
      "Low refrigerant charge (most common)",
      "Dirty or blocked condenser coil",
      "Faulty or failed compressor",
      "Restricted metering device / TXV",
      "Low indoor airflow — dirty filter or blower issue",
    ],
    steps: [
      "Check and adjust thermostat settings — ensure cooling mode and setpoint is below room temp.",
      "Inspect air filter — replace if clogged. A dirty filter severely reduces airflow.",
      "Verify outdoor unit is running — check compressor and condenser fan operation.",
      "Connect digital manifold gauges. Record suction and head pressure.",
      "Calculate superheat (8–12°F TXV / 10–20°F fixed orifice) and subcooling (8–14°F).",
      "Inspect condenser coil for blockage — clean if fins are dirty or matted.",
      "If pressures are low, perform a leak check with electronic leak detector.",
    ],
    tools: [
      "Digital manifold gauges (Bluetooth preferred)",
      "Clamp meter (compressor amp draw)",
      "Digital thermometer / temperature clamps",
      "Electronic refrigerant leak detector",
      "Flashlight",
    ],
    parts: [
      'Air filter (1" or 4" media)',
      "Refrigerant (R-410A or R-22 as required)",
      "Dual run capacitor (if fan/compressor issues found)",
      "Contactor (if pitted or burnt)",
      "Filter drier (if refrigerant system opened)",
    ],
    safety:
      "Turn off power at disconnect before accessing electrical components. Wear refrigerant-rated gloves and goggles when handling refrigerants. Follow EPA 608 recovery procedures — never vent refrigerant.",
    videos: [
      {
        title: "HVAC AC Pressure, Superheat & Subcooling Explained",
        url: "https://youtu.be/5UU2c5e2ork",
      },
      {
        title: "HVAC Refrigerant Pressure Gauges",
        url: "https://youtu.be/eEZAgzkS_sA",
      },
      {
        title: "HVAC Metering Device Basics",
        url: "https://youtu.be/qV-DIqIxPGk",
      },
    ],
    modules: [
      "Digital Gauges & Smart Probes",
      "Multimeter Training",
      "Refrigeration Diagnostics",
    ],
    kbArticles: [
      "Superheat & Subcooling Explained",
      "Refrigeration Cycle Fundamentals",
      "Pressure-Temperature Relationships",
    ],
    estimatedTime: "1.5–3 hours",
  },
  "no cooling": {
    symptom: "AC Not Cooling",
    causes: [
      "Low refrigerant charge (most common)",
      "Dirty or blocked condenser coil",
      "Faulty or failed compressor",
      "Restricted metering device / TXV",
      "Low indoor airflow — dirty filter or blower issue",
    ],
    steps: [
      "Check and adjust thermostat settings.",
      "Inspect and replace air filter if clogged.",
      "Verify outdoor unit operation — compressor and fan running.",
      "Connect manifold gauges and record suction / head pressures.",
      "Calculate superheat and subcooling values.",
      "Inspect condenser coil cleanliness.",
      "Perform leak check if pressures indicate low charge.",
    ],
    tools: [
      "Digital manifold gauges",
      "Clamp meter",
      "Digital thermometer",
      "Leak detector",
    ],
    parts: [
      "Air filter",
      "Refrigerant (R-410A or R-22)",
      "Dual run capacitor",
      "Contactor",
    ],
    safety:
      "Power off before accessing electrical components. Use PPE when handling refrigerant. Follow EPA 608 recovery procedures.",
    videos: [
      {
        title: "HVAC AC Pressure, Superheat & Subcooling Explained",
        url: "https://youtu.be/5UU2c5e2ork",
      },
      {
        title: "HVAC Refrigerant Pressure Gauges",
        url: "https://youtu.be/eEZAgzkS_sA",
      },
    ],
    modules: ["Digital Gauges & Smart Probes", "Multimeter Training"],
    kbArticles: [
      "Superheat & Subcooling Explained",
      "Refrigeration Cycle Fundamentals",
    ],
    estimatedTime: "1.5–3 hours",
  },
  "compressor not starting": {
    symptom: "Compressor Not Starting",
    causes: [
      "Failed run capacitor (most common cause of hard starts)",
      "Faulty or burnt contactor",
      "High pressure lockout (overheated condenser)",
      "Low voltage supply (should be within 10% of nameplate)",
      "Open internal overload protector",
      "Hard start kit required",
    ],
    steps: [
      "Verify power is reaching the unit — check disconnect and breaker.",
      "Inspect contactor — look for pitted, burnt, or stuck contacts.",
      "Discharge and test run capacitor with capacitance meter. Compare to nameplate (±6% acceptable).",
      "Measure supply voltage at the contactor — should be within ±10% of nameplate.",
      "Check high-pressure and low-pressure switches for lockout condition.",
      "If compressor hums but won't start, test for locked rotor. Consider hard start kit.",
      "Allow internal overload 30 minutes to reset if compressor was recently running hot.",
    ],
    tools: [
      "Digital multimeter (UEi DL589 or equivalent)",
      "Capacitance meter",
      "Clamp meter (check LRA vs RLA)",
      "Digital manifold gauges",
    ],
    parts: [
      "Dual run capacitor (match µF and voltage rating exactly)",
      "Start capacitor (if hard start kit needed)",
      "Contactor (match coil voltage and amp rating)",
      "Hard start kit (SPP6 or equivalent)",
    ],
    safety:
      "Always discharge capacitors before testing — stored charge can cause severe shock. Use lockout/tagout procedures. Never bypass safety controls.",
    videos: [
      {
        title: "How to Test HVAC Relays, Contactors, and Transformers",
        url: "https://youtu.be/4ja6GynaxQ0",
      },
      {
        title: "HVAC Multimeter 101 (3D)",
        url: "https://youtu.be/fa8NM7JzISM",
      },
    ],
    modules: [
      "Multimeter Training",
      "UEi DL589 Multimeter Guide",
      "Electrical Troubleshooting for HVAC Systems",
    ],
    kbArticles: [
      "Testing Contactors and Capacitors",
      "HVAC Electrical Safety",
      "Compressor Diagnostics",
    ],
    estimatedTime: "1–2.5 hours",
  },
  "low suction pressure": {
    symptom: "Low Suction Pressure",
    causes: [
      "Low refrigerant charge — active leak suspected",
      "Restricted TXV or metering device",
      "Low indoor airflow (dirty filter, coil, or blower)",
      "Dirty or iced evaporator coil",
      "Liquid line restriction (kinked line or failed drier)",
    ],
    steps: [
      "Connect gauges — record suction and head pressure with a calibrated digital manifold.",
      "Calculate superheat at the suction line: target 8–12°F for TXV systems.",
      "Inspect air filter and evaporator coil — look for icing or heavy dust buildup.",
      "Check outdoor airflow — condenser fan should be pulling air through top of unit.",
      "If superheat is very high + low suction pressure: suspect low charge or metering restriction.",
      "Perform electronic leak check on service ports, coil joints, and line set fittings.",
      "Check liquid line drier — elevated temperature drop across drier indicates blockage.",
    ],
    tools: [
      "Digital manifold gauges",
      "Temperature clamps (suction line measurement)",
      "Electronic leak detector",
      "Micron gauge (if evacuating to repair leak)",
    ],
    parts: [
      "Filter drier (after any leak repair)",
      "TXV / metering device",
      "Refrigerant (per EPA 608 procedures)",
      "Evaporator coil (if leaking)",
    ],
    safety:
      "Use refrigerant-rated gloves and goggles. Follow EPA 608 recovery procedures before opening any refrigerant circuit. Never add refrigerant without repairing the leak first.",
    videos: [
      {
        title: "HVAC AC Pressure, Superheat & Subcooling Explained",
        url: "https://youtu.be/5UU2c5e2ork",
      },
      {
        title: "HVAC Metering Device Basics",
        url: "https://youtu.be/qV-DIqIxPGk",
      },
    ],
    modules: ["Digital Gauges & Smart Probes", "Refrigeration Diagnostics"],
    kbArticles: [
      "Superheat & Subcooling Explained",
      "TXV Diagnostics",
      "Refrigerant Leak Detection",
    ],
    estimatedTime: "1.5–4 hours",
  },
  "fan running no cooling": {
    symptom: "Fan Running, No Cooling",
    causes: [
      "Compressor not running — contactor or capacitor failure",
      "Failed dual run capacitor (fan runs, compressor won't start)",
      "High pressure lockout — condenser overheated",
      "Low refrigerant charge",
      "Open internal compressor overload",
    ],
    steps: [
      "Confirm indoor blower is running and circulating air.",
      "Go to outdoor unit — listen and feel for compressor vibration.",
      "Check contactor — is it pulled in (closed)? Measure coil voltage (24V expected).",
      "Test run capacitor — failure here is the most common cause of fan-only operation.",
      "Connect manifold gauges to verify pressures.",
      "If contactor is pulled in and capacitor is good, check high/low pressure switches.",
      "Measure compressor amp draw with clamp meter.",
    ],
    tools: [
      "Clamp meter",
      "Digital multimeter",
      "Digital manifold gauges",
      "Capacitance meter",
    ],
    parts: ["Dual run capacitor", "Contactor", "Refrigerant", "Hard start kit"],
    safety:
      "Do not touch outdoor unit with power on without proper PPE. Discharge capacitors before testing. Use lockout/tagout at disconnect.",
    videos: [
      {
        title: "How to Test HVAC Relays, Contactors, and Transformers",
        url: "https://youtu.be/4ja6GynaxQ0",
      },
      {
        title: "HVAC Multimeter 101 (3D)",
        url: "https://youtu.be/fa8NM7JzISM",
      },
    ],
    modules: [
      "Electrical Troubleshooting for HVAC Systems",
      "Multimeter Training",
    ],
    kbArticles: ["Testing Contactors and Capacitors", "Compressor Diagnostics"],
    estimatedTime: "1–2 hours",
  },
  "high head pressure": {
    symptom: "High Head Pressure",
    causes: [
      "Dirty or blocked condenser coil — most common",
      "Condenser fan not running or spinning slowly",
      "Overcharge of refrigerant",
      "Non-condensable gases (air) in the system",
      "Ambient temperature too high (above system design range)",
    ],
    steps: [
      "Record head pressure and compare to PT chart for current ambient temperature.",
      "Inspect condenser coil — clean if fins are clogged with debris or dirt.",
      "Verify condenser fan is running at correct speed — measure amp draw.",
      "Check subcooling: if >15°F, system may be overcharged.",
      "If subcooling is normal but head pressure is high, suspect condenser airflow issue.",
      "Check for non-condensables: isolate system, let pressures stabilize, compare to PT chart.",
    ],
    tools: [
      "Digital manifold gauges",
      "Thermometer",
      "Clamp meter",
      "Coil cleaning equipment",
    ],
    parts: [
      "Condenser fan motor (if failed)",
      "Condenser fan blade",
      "Capacitor (condenser fan)",
      "Coil cleaning solution",
    ],
    safety:
      "Coil cleaning chemicals are corrosive — wear gloves and eye protection. Turn off power before servicing condenser fan. High head pressure can cause refrigerant circuit failures.",
    videos: [
      {
        title: "HVAC AC Pressure, Superheat & Subcooling Explained",
        url: "https://youtu.be/5UU2c5e2ork",
      },
      {
        title: "HVAC Refrigerant Pressure Gauges",
        url: "https://youtu.be/eEZAgzkS_sA",
      },
    ],
    modules: ["Digital Gauges & Smart Probes", "Refrigeration Diagnostics"],
    kbArticles: [
      "Reading Refrigerant Pressure Patterns",
      "Condenser Coil Maintenance",
    ],
    estimatedTime: "1–3 hours",
  },
  "frozen coil": {
    symptom: "Frozen Evaporator Coil",
    causes: [
      "Low indoor airflow — dirty filter, blocked vents, or failed blower",
      "Low refrigerant charge causing suction pressure to drop below freezing",
      "Running system in very low ambient temperatures",
      "Dirty evaporator coil restricting airflow",
      "Blower motor failure or reduced speed",
    ],
    steps: [
      "Turn system to Fan Only mode — allow coil to fully defrost before continuing (30–60 min).",
      "Inspect and replace air filter — a clogged filter is the #1 cause of frozen coils.",
      "Check all supply and return vents — ensure none are closed or blocked.",
      "After defrost, turn on cooling and measure suction pressure.",
      "Measure supply and return air temperature delta T (should be 16–22°F).",
      "If pressures are low after defrost and airflow is adequate, suspect low refrigerant charge.",
      "Inspect blower motor operation — verify CFM is adequate.",
    ],
    tools: [
      "Digital manifold gauges",
      "Digital thermometer",
      "Clamp meter",
      "Flashlight",
    ],
    parts: [
      "Air filter",
      "Blower motor (if failed)",
      "Blower capacitor",
      "Refrigerant",
    ],
    safety:
      "Never chip or scrape ice from coil — you can puncture the coil. Allow natural defrost. Ensure drain pan is clear to prevent water damage.",
    videos: [
      {
        title: "HVAC AC Pressure, Superheat & Subcooling Explained",
        url: "https://youtu.be/5UU2c5e2ork",
      },
      {
        title: "HVAC 3D Refrigeration Circuit",
        url: "https://youtu.be/p6GXJdRUz9E",
      },
    ],
    modules: ["Digital Gauges & Smart Probes", "Refrigeration Diagnostics"],
    kbArticles: ["Airflow Diagnostics", "Superheat & Subcooling Explained"],
    estimatedTime: "1.5–3 hours (plus defrost wait time)",
  },
  "short cycling": {
    symptom: "Short Cycling",
    causes: [
      "Refrigerant overcharge or undercharge",
      "High pressure switch tripping (dirty condenser or overcharge)",
      "Low pressure switch tripping (low refrigerant or airflow issue)",
      "Thermostat location in direct sunlight or near a heat source",
      "Oversized equipment for the space",
      "Dirty air filter causing evaporator to freeze and trip pressure switch",
    ],
    steps: [
      "Record how long system runs before shutting off.",
      "Check for any active fault codes on the thermostat or control board.",
      "Connect manifold gauges and watch pressures during operation.",
      "Check if high or low pressure switch is tripping — use manifold to monitor.",
      "Inspect filter and coil for airflow restriction.",
      "Verify thermostat location is not causing false temperature readings.",
      "Compare equipment capacity to Manual J load calculation if possible.",
    ],
    tools: ["Digital manifold gauges", "Digital multimeter", "Thermometer"],
    parts: [
      "High pressure switch (if failed)",
      "Low pressure switch (if failed)",
      "Thermostat (if faulty)",
      "Air filter",
    ],
    safety:
      "Short cycling causes compressor wear and premature failure. Address root cause before leaving — do not simply reset safeties without diagnosing why they tripped.",
    videos: [
      {
        title: "HVAC AC Pressure, Superheat & Subcooling Explained",
        url: "https://youtu.be/5UU2c5e2ork",
      },
    ],
    modules: [
      "Digital Gauges & Smart Probes",
      "Electrical Troubleshooting for HVAC Systems",
    ],
    kbArticles: [
      "Pressure Switch Diagnostics",
      "Refrigeration Cycle Fundamentals",
    ],
    estimatedTime: "1–2.5 hours",
  },
  "refrigerant leak": {
    symptom: "Refrigerant Leak",
    causes: [
      "Vibration-eroded service port or Schrader valve",
      "Corrosion at coil joint (formicary corrosion on copper)",
      "Pinhole leak in evaporator or condenser coil",
      "Loose or improperly flared fitting",
      "Cracked line set from physical damage",
    ],
    steps: [
      "Use electronic leak detector to pinpoint leak location — start at service ports, coils, and fittings.",
      "Mark leak location and take photos before recovery.",
      "Recover all refrigerant per EPA 608 requirements before opening the system.",
      "Repair leak: braze or replace component as needed.",
      "Install new filter drier whenever system is opened.",
      "Pressure test with dry nitrogen to verify repair (minimum 150 psi for 15 minutes).",
      "Evacuate system to 500 microns or below, verify with micron gauge.",
      "Recharge with correct refrigerant type and weight per nameplate.",
    ],
    tools: [
      "Electronic leak detector",
      "Recovery machine",
      "Nitrogen regulator and tank",
      "Micron gauge",
      "Digital manifold gauges",
      "Torch and brazing equipment",
    ],
    parts: [
      "Filter drier (always replace after opening system)",
      "Refrigerant (correct type per nameplate)",
      "Schrader valve cores",
      "Copper fittings and braze alloy (if repairing line)",
    ],
    safety:
      "NEVER vent refrigerant — EPA 608 violation and environmental hazard. Wear gloves and goggles. Nitrogen pressure testing can be dangerous — use a regulator and never exceed system test pressure. Brazing requires fire safety equipment.",
    videos: [
      {
        title: "HVAC Refrigerant Recovery (3D)",
        url: "https://youtu.be/fROHlPXw_H0",
      },
      {
        title: "HVAC How to Evacuate AC System",
        url: "https://youtu.be/JsnQeUSuUMU",
      },
      { title: "HVAC Vacuum Procedures", url: "https://youtu.be/TllrD0Mt2LU" },
    ],
    modules: [
      "Digital Gauges & Smart Probes",
      "Refrigerant Handling Procedures",
    ],
    kbArticles: [
      "EPA 608 Recovery Requirements",
      "Refrigerant Leak Detection",
      "Evacuation Best Practices",
    ],
    estimatedTime: "2–5 hours",
  },
  "no heat heat pump": {
    symptom: "No Heat (Heat Pump)",
    causes: [
      "Reversing valve stuck in cooling position",
      "Low refrigerant charge affecting heating performance",
      "Defrost system not functioning (ice buildup on outdoor coil)",
      "Backup/auxiliary heat strips not energizing",
      "Outdoor unit fan not running",
    ],
    steps: [
      "Verify thermostat is in Heat mode and set above room temperature.",
      "Check outdoor unit — is it running? Is there ice buildup?",
      "Listen for reversing valve solenoid click when switching between heat and cool.",
      "Connect gauges — in heating mode, suction side is outdoor coil, head side is indoor.",
      "Check defrost board and defrost thermostat operation.",
      "Test emergency/auxiliary heat strips with clamp meter — verify amp draw.",
      "If reversing valve solenoid coil is failed, it may need replacement.",
    ],
    tools: [
      "Digital manifold gauges",
      "Clamp meter",
      "Digital multimeter",
      "Thermometer",
    ],
    parts: [
      "Reversing valve (complete assembly if internally stuck)",
      "Reversing valve solenoid coil",
      "Defrost board",
      "Defrost thermostat",
      "Heat strip elements",
    ],
    safety:
      "Heat pump systems can have energized components even when outdoor unit appears off. Use lockout/tagout. Heat strips operate at high voltage — verify power is off before servicing.",
    videos: [
      {
        title: "HVAC AC Pressure, Superheat & Subcooling Explained",
        url: "https://youtu.be/5UU2c5e2ork",
      },
      {
        title: "How to Test HVAC Relays, Contactors, and Transformers",
        url: "https://youtu.be/4ja6GynaxQ0",
      },
    ],
    modules: [
      "Electrical Troubleshooting for HVAC Systems",
      "Digital Gauges & Smart Probes",
    ],
    kbArticles: [
      "Heat Pump Reversing Valve Operation",
      "Defrost System Diagnostics",
    ],
    estimatedTime: "2–4 hours",
  },
  "electrical tripping": {
    symptom: "Circuit Breaker Tripping",
    causes: [
      "Compressor drawing locked rotor amps (LRA) — failing compressor",
      "Grounded compressor winding",
      "Weak or incorrectly sized breaker",
      "Short circuit in wiring to outdoor unit",
      "Failed contactor causing intermittent short",
    ],
    steps: [
      "Before resetting breaker: use multimeter to check for shorts at the load side.",
      "Disconnect compressor leads and test winding resistance — check for ground fault.",
      "Reset breaker and immediately clamp-meter the line — does it trip on startup surge?",
      "Compare compressor amp draw to RLA on nameplate.",
      "Inspect all wiring for chafing, rodent damage, or burnt insulation.",
      "Test contactor contacts for continuity when de-energized — should be open.",
      "If compressor is drawing high amps with good capacitor, try hard start kit before condemning.",
    ],
    tools: [
      "Digital multimeter",
      "Clamp meter",
      "Insulation resistance tester (megohmmeter)",
    ],
    parts: [
      "Compressor",
      "Contactor",
      "Hard start kit",
      "Breaker (if undersized)",
    ],
    safety:
      "Never repeatedly reset a tripping breaker — it indicates a real fault. Repeated resets can cause fires. Meggering a compressor requires isolating all capacitors and controls first.",
    videos: [
      {
        title: "HVAC Multimeter 101 (3D)",
        url: "https://youtu.be/fa8NM7JzISM",
      },
      {
        title: "Basic Electrical for HVAC Residential",
        url: "https://youtu.be/RTJlq9acCSw",
      },
    ],
    modules: [
      "Multimeter Training",
      "HVAC Electrical Fundamentals",
      "Electrical Troubleshooting for HVAC Systems",
    ],
    kbArticles: ["Compressor Electrical Testing", "HVAC Electrical Safety"],
    estimatedTime: "1.5–3 hours",
  },
};

const QUICK_SYMPTOMS = [
  "AC not cooling",
  "Compressor not starting",
  "Low suction pressure",
  "Fan running, no cooling",
  "High head pressure",
  "Frozen coil",
  "Short cycling",
  "Refrigerant leak",
];

function lookupResponse(query: string): AIResponse | null {
  const q = query.toLowerCase().trim();
  for (const key of Object.keys(KNOWLEDGE_BASE)) {
    if (q.includes(key)) return KNOWLEDGE_BASE[key];
  }
  const keywords: Record<string, string> = {
    cool: "ac not cooling",
    cooling: "ac not cooling",
    compress: "compressor not starting",
    suction: "low suction pressure",
    "low pressure": "low suction pressure",
    "head pressure": "high head pressure",
    "high head": "high head pressure",
    frozen: "frozen coil",
    ice: "frozen coil",
    "short cycl": "short cycling",
    cycling: "short cycling",
    leak: "refrigerant leak",
    heat: "no heat heat pump",
    trip: "electrical tripping",
    breaker: "electrical tripping",
    "no start": "compressor not starting",
  };
  for (const [kw, key] of Object.entries(keywords)) {
    if (q.includes(kw)) return KNOWLEDGE_BASE[key];
  }
  return null;
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface DiagnosticSession {
  id: string;
  symptom: string;
  response: AIResponse;
  timestamp: string;
  status: "Resolved" | "In Progress";
}

interface JobAnalysis {
  symptom: string;
  diagnosticPlan: string[];
  partsList: { item: string; qty: number }[];
  toolList: string[];
  estimatedTime: string;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function SafetyWarning({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 rounded-md border border-amber-500/40 bg-amber-500/10 px-4 py-3">
      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
      <div>
        <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-0.5">
          Safety Warning
        </p>
        <p className="text-xs text-amber-700 dark:text-amber-300 leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}

function ResponseCard({ response }: { response: AIResponse }) {
  return (
    <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 space-y-4">
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/20">
          <Bot className="h-4 w-4 text-primary" />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">
            Field AI Assistant
          </p>
          <p className="text-xs text-muted-foreground">
            Diagnosis: {response.symptom}
          </p>
        </div>
        <Badge
          variant="outline"
          className="ml-auto text-xs border-primary/30 text-primary"
        >
          <Sparkles className="mr-1 h-3 w-3" /> AI Powered
        </Badge>
      </div>

      <div>
        <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Probable Causes
        </h4>
        <ul className="space-y-1">
          {response.causes.map((c, i) => (
            <li key={c} className="flex items-start gap-2 text-sm">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-destructive/15 text-[10px] font-bold text-destructive">
                {i + 1}
              </span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Step-by-Step Diagnostic Checks
        </h4>
        <ol className="space-y-2">
          {response.steps.map((s, i) => (
            <li key={s} className="flex items-start gap-3 text-sm">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                {i + 1}
              </span>
              <span className="leading-relaxed">{s}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
            <Wrench className="h-3 w-3" /> Recommended Tools
          </h4>
          <ul className="space-y-1">
            {response.tools.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
            <Search className="h-3 w-3" /> Possible Replacement Parts
          </h4>
          <ul className="space-y-1">
            {response.parts.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <SafetyWarning text={response.safety} />

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Clock className="h-4 w-4" />
        <span>
          Estimated repair time:{" "}
          <span className="font-medium text-foreground">
            {response.estimatedTime}
          </span>
        </span>
      </div>

      <div className="rounded-lg border border-border bg-muted/30 p-3 space-y-2">
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Sources — Internal Resources Prioritized
        </p>
        <div className="flex flex-wrap gap-1.5">
          {response.modules.map((m) => (
            <Badge key={m} variant="secondary" className="text-xs">
              <BookOpen className="mr-1 h-3 w-3" />
              {m}
            </Badge>
          ))}
          {response.videos.map((v) => (
            <a
              key={v.url}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Badge
                variant="outline"
                className="text-xs cursor-pointer hover:bg-primary/10"
              >
                <PlayCircle className="mr-1 h-3 w-3" />
                {v.title.length > 30 ? `${v.title.slice(0, 30)}…` : v.title}
              </Badge>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function ResourcesSidebar({ response }: { response: AIResponse | null }) {
  if (!response) {
    return (
      <div
        className="flex flex-col items-center justify-center h-48 text-center text-muted-foreground"
        data-ocid="field-ai.resources_panel"
      >
        <Zap className="h-8 w-8 mb-2 opacity-30" />
        <p className="text-sm">Ask a question to see related resources</p>
      </div>
    );
  }

  return (
    <div className="space-y-4" data-ocid="field-ai.resources_panel">
      <div className="flex items-center gap-2">
        <Zap className="h-4 w-4 text-primary" />
        <h3 className="text-sm font-semibold">Internal Resources</h3>
        <Badge variant="secondary" className="text-[10px] py-0">
          Prioritized
        </Badge>
      </div>

      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
          <BookOpen className="h-3 w-3" /> Study Modules
        </p>
        <div className="space-y-1.5">
          {response.modules.map((m) => (
            <div
              key={m}
              className="flex items-center justify-between rounded-md border border-border bg-card p-2"
            >
              <span className="text-xs font-medium line-clamp-1">{m}</span>
              <Button
                size="sm"
                variant="ghost"
                className="h-6 text-xs px-2 text-primary"
              >
                Open
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
          <PlayCircle className="h-3 w-3" /> Training Videos
        </p>
        <div className="space-y-1.5">
          {response.videos.map((v) => (
            <div
              key={v.url}
              className="rounded-md border border-border bg-card p-2"
            >
              <p className="text-xs font-medium line-clamp-2 mb-1">{v.title}</p>
              <a href={v.url} target="_blank" rel="noopener noreferrer">
                <Button
                  size="sm"
                  variant="outline"
                  className="h-6 text-xs px-2 w-full"
                >
                  <ExternalLink className="mr-1 h-3 w-3" /> Watch
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
          <Search className="h-3 w-3" /> Knowledge Base
        </p>
        <div className="space-y-1.5">
          {response.kbArticles.map((a) => (
            <div
              key={a}
              className="flex items-center justify-between rounded-md border border-border bg-card p-2"
            >
              <span className="text-xs line-clamp-1">{a}</span>
              <Button
                size="sm"
                variant="ghost"
                className="h-6 text-xs px-2 text-primary shrink-0"
              >
                View
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function FieldAIAssistantTab({
  isGuest,
}: FieldAIAssistantTabProps) {
  const [symptomInput, setSymptomInput] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [sessions, setSessions] = useState<DiagnosticSession[]>([]);
  const [activeResponse, setActiveResponse] = useState<AIResponse | null>(null);
  const [reviewSession, setReviewSession] = useState<DiagnosticSession | null>(
    null,
  );

  const [jobPanelOpen, setJobPanelOpen] = useState(false);
  const [jobSymptom, setJobSymptom] = useState("");
  const [jobSystemType, setJobSystemType] = useState("Split System");
  const [jobUnitAge, setJobUnitAge] = useState("");
  const [jobAnalysis, setJobAnalysis] = useState<JobAnalysis | null>(null);
  const [isAnalyzingJob, setIsAnalyzingJob] = useState(false);

  const chatBottomRef = useRef<HTMLDivElement>(null);

  const submitSymptom = (symptom: string) => {
    const query = symptom.trim();
    if (!query) return;

    setIsAnalyzing(true);
    setSymptomInput("");

    setTimeout(() => {
      const result = lookupResponse(query);
      if (result) {
        setActiveResponse(result);
        const newSession: DiagnosticSession = {
          id: `session-${Date.now()}`,
          symptom: query,
          response: result,
          timestamp: new Date().toLocaleString(),
          status: "In Progress",
        };
        setSessions((prev) => [newSession, ...prev]);
        toast.success("Diagnosis ready");
      } else {
        toast.error(
          "No matching diagnosis found. Try a more specific symptom like 'AC not cooling' or 'compressor not starting'.",
        );
      }
      setIsAnalyzing(false);
      setTimeout(
        () => chatBottomRef.current?.scrollIntoView({ behavior: "smooth" }),
        100,
      );
    }, 900);
  };

  const handleAnalyzeJob = () => {
    if (!jobSymptom.trim()) {
      toast.error("Please enter symptoms or issue description");
      return;
    }
    setIsAnalyzingJob(true);
    setTimeout(() => {
      const result = lookupResponse(jobSymptom);
      if (result) {
        const analysis: JobAnalysis = {
          symptom: jobSymptom,
          diagnosticPlan: result.steps.slice(0, 5),
          partsList: result.parts.map((p, i) => ({
            item: p,
            qty: i === 0 ? 2 : 1,
          })),
          toolList: result.tools,
          estimatedTime: result.estimatedTime,
        };
        setJobAnalysis(analysis);
        toast.success("Job analysis complete");
      } else {
        toast.error(
          "Could not analyze these symptoms. Try adding more specific details.",
        );
      }
      setIsAnalyzingJob(false);
    }, 1200);
  };

  const saveJobAnalysisToHistory = () => {
    if (!jobAnalysis) return;
    const result = lookupResponse(jobAnalysis.symptom);
    if (result) {
      const newSession: DiagnosticSession = {
        id: `session-${Date.now()}`,
        symptom: jobAnalysis.symptom,
        response: result,
        timestamp: new Date().toLocaleString(),
        status: "In Progress",
      };
      setSessions((prev) => [newSession, ...prev]);
      toast.success("Saved to job history");
    }
  };

  const markResolved = (id: string) => {
    setSessions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: "Resolved" } : s)),
    );
    toast.success("Marked as resolved");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 border border-primary/20">
            <Bot className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2">
              Field AI Assistant
              <Badge className="text-[10px] bg-primary/20 text-primary border-primary/30 font-medium">
                <Sparkles className="mr-1 h-2.5 w-2.5" /> AI Powered
              </Badge>
            </h2>
            <p className="text-sm text-muted-foreground">
              HVAC diagnostics, repair guidance, and job analysis
            </p>
          </div>
        </div>
      </div>

      {/* Job Analysis Panel (Collapsible) */}
      <Collapsible open={jobPanelOpen} onOpenChange={setJobPanelOpen}>
        <Card className="border-primary/20">
          <CollapsibleTrigger asChild>
            <CardHeader className="cursor-pointer hover:bg-muted/30 transition-colors rounded-t-lg pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Wrench className="h-4 w-4 text-primary" />
                  Analyze a Job
                  <Badge variant="outline" className="text-xs">
                    Job Integration
                  </Badge>
                </CardTitle>
                {jobPanelOpen ? (
                  <ChevronUp className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                )}
              </div>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent className="pt-0 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2 space-y-1.5">
                  <Label>Symptoms / Issue Description</Label>
                  <Textarea
                    value={jobSymptom}
                    onChange={(e) => setJobSymptom(e.target.value)}
                    placeholder="e.g. AC not cooling, compressor humming but not starting, customer reports warm air..."
                    rows={3}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label>System Type</Label>
                  <Select
                    value={jobSystemType}
                    onValueChange={setJobSystemType}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Split System">Split System</SelectItem>
                      <SelectItem value="Package Unit">Package Unit</SelectItem>
                      <SelectItem value="Heat Pump">Heat Pump</SelectItem>
                      <SelectItem value="Mini-Split">Mini-Split</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label>Unit Age (years, optional)</Label>
                  <input
                    type="number"
                    value={jobUnitAge}
                    onChange={(e) => setJobUnitAge(e.target.value)}
                    placeholder="e.g. 8"
                    className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  />
                </div>
              </div>
              <Button
                onClick={handleAnalyzeJob}
                disabled={isAnalyzingJob}
                data-ocid="field-ai.analyze_button"
              >
                {isAnalyzingJob ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Analyze Job
                  </>
                )}
              </Button>

              {jobAnalysis && (
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 space-y-4 mt-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-sm flex items-center gap-2">
                      <Bot className="h-4 w-4 text-primary" /> AI Job Analysis
                    </h4>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={saveJobAnalysisToHistory}
                    >
                      <Save className="mr-1.5 h-3.5 w-3.5" /> Save to History
                    </Button>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="mb-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Diagnostic Plan
                      </p>
                      <ol className="space-y-1">
                        {jobAnalysis.diagnosticPlan.map((step, i) => (
                          <li
                            key={step}
                            className="flex items-start gap-2 text-xs"
                          >
                            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/20 text-[10px] font-bold text-primary">
                              {i + 1}
                            </span>
                            <span className="leading-relaxed">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="mb-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          Tool List
                        </p>
                        <ul className="space-y-0.5">
                          {jobAnalysis.toolList.map((t) => (
                            <li
                              key={t}
                              className="flex items-center gap-1.5 text-xs"
                            >
                              <span className="h-1 w-1 rounded-full bg-primary" />
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs">
                        <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                        <span className="text-muted-foreground">
                          Est. time:
                        </span>
                        <span className="font-medium">
                          {jobAnalysis.estimatedTime}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="mb-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Estimated Parts List
                    </p>
                    <div className="rounded-md border border-border overflow-hidden">
                      <table className="w-full text-xs">
                        <thead className="bg-muted/50">
                          <tr>
                            <th className="text-left px-3 py-2 font-medium">
                              Part
                            </th>
                            <th className="text-center px-3 py-2 font-medium">
                              Qty
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {jobAnalysis.partsList.map((p) => (
                            <tr key={p.item} className="border-t border-border">
                              <td className="px-3 py-2">{p.item}</td>
                              <td className="px-3 py-2 text-center">{p.qty}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>

      {/* Main Layout: Chat + Sidebar */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Chat Panel */}
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Bot className="h-4 w-4 text-primary" />
                Ask the AI Assistant
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="mb-2 text-xs text-muted-foreground font-medium">
                  Quick symptoms:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {QUICK_SYMPTOMS.map((s, i) => (
                    <Button
                      key={s}
                      variant="outline"
                      size="sm"
                      className="h-7 text-xs rounded-full hover:bg-primary/10 hover:border-primary/40 hover:text-primary transition-colors"
                      onClick={() => submitSymptom(s)}
                      data-ocid={`field-ai.symptom_chip.${i + 1}`}
                    >
                      {s}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Textarea
                  value={symptomInput}
                  onChange={(e) => setSymptomInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      submitSymptom(symptomInput);
                    }
                  }}
                  placeholder="Describe the symptom or ask a question (e.g. 'AC not cooling', 'compressor humming but won't start')..."
                  rows={3}
                  data-ocid="field-ai.symptom_input"
                />
                <Button
                  onClick={() => submitSymptom(symptomInput)}
                  disabled={isAnalyzing || !symptomInput.trim()}
                  className="w-full sm:w-auto"
                  data-ocid="field-ai.submit_button"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Get Diagnosis
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {isAnalyzing && (
            <div className="flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
              <Loader2 className="h-5 w-5 animate-spin text-primary" />
              <div>
                <p className="text-sm font-medium">AI is analyzing symptoms…</p>
                <p className="text-xs text-muted-foreground">
                  Checking internal knowledge base and diagnostics
                </p>
              </div>
            </div>
          )}

          {activeResponse && !isAnalyzing && (
            <ResponseCard response={activeResponse} />
          )}

          <div ref={chatBottomRef} />
        </div>

        {/* Resources Sidebar */}
        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                Related Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px] pr-2">
                <ResourcesSidebar response={activeResponse} />
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Session History */}
      <Card data-ocid="field-ai.history_panel">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <History className="h-4 w-4" />
            Diagnostic Session History
            {sessions.length > 0 && (
              <Badge variant="secondary" className="ml-1">
                {sessions.length}
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {sessions.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 text-muted-foreground">
              <History className="h-8 w-8 mb-2 opacity-30" />
              <p className="text-sm">
                No sessions yet — ask a question to get started
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {sessions.map((session, i) => (
                <div
                  key={session.id}
                  className="rounded-lg border border-border bg-card p-3 flex items-start justify-between gap-3"
                  data-ocid={`field-ai.session_item.${i + 1}`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                      <p className="text-sm font-medium truncate">
                        {session.response.symptom}
                      </p>
                      <Badge
                        variant={
                          session.status === "Resolved"
                            ? "default"
                            : "secondary"
                        }
                        className="text-[10px] py-0"
                      >
                        {session.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {session.timestamp}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1 italic">
                      "{session.symptom}"
                    </p>
                  </div>
                  <div className="flex gap-1.5 shrink-0">
                    {session.status === "In Progress" && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-7 text-xs"
                        onClick={() => markResolved(session.id)}
                      >
                        Resolve
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-7 text-xs"
                      onClick={() => setReviewSession(session)}
                    >
                      Review
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Review Dialog */}
      <Dialog
        open={!!reviewSession}
        onOpenChange={(o) => !o && setReviewSession(null)}
      >
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Bot className="h-4 w-4 text-primary" />
              Session Review — {reviewSession?.response.symptom}
            </DialogTitle>
          </DialogHeader>
          {reviewSession && (
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                {reviewSession.timestamp}
                <Badge
                  variant={
                    reviewSession.status === "Resolved"
                      ? "default"
                      : "secondary"
                  }
                  className="text-[10px] py-0"
                >
                  {reviewSession.status}
                </Badge>
              </div>
              <ResponseCard response={reviewSession.response} />
              <div className="flex justify-end gap-2 pt-2">
                {reviewSession.status === "In Progress" && (
                  <Button
                    variant="outline"
                    onClick={() => {
                      markResolved(reviewSession.id);
                      setReviewSession(null);
                    }}
                  >
                    Mark Resolved
                  </Button>
                )}
                <Button onClick={() => setReviewSession(null)}>Close</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {isGuest && (
        <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 text-center">
          <p className="text-sm text-amber-700 dark:text-amber-300">
            <strong>Guest Mode:</strong> AI diagnostics are available to
            preview. Sign in to save session history and access full job
            integration.
          </p>
        </div>
      )}
    </div>
  );
}
