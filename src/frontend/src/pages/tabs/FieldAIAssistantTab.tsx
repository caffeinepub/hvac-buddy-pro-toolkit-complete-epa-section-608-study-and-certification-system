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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
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
  ImageIcon,
  Loader2,
  PlayCircle,
  Save,
  Search,
  Sparkles,
  Thermometer,
  Wrench,
  Zap,
} from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";

interface FieldAIAssistantTabProps {
  isGuest: boolean;
}

// ─── Types ───────────────────────────────────────────────────────────────────────────

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
  diagrams?: string[];
}

interface MeasurementResult {
  issue: string;
  confidence: number;
  explanation: string;
  nextStep: string;
}

interface DiagnosticSession {
  id: string;
  symptom: string;
  response: AIResponse;
  timestamp: string;
  status: "Resolved" | "In Progress";
}

interface SavedJob {
  id: string;
  customerName: string;
  address: string;
  systemType: string;
  refrigerantType: string;
  symptoms: string;
  measurements: {
    suctionPressure: string;
    headPressure: string;
    superheat: string;
    subcooling: string;
    tempSplit: string;
  };
  finalRepair: string;
  status: string;
  createdAt: string;
  diagnosticInfo?: string;
}

// ─── AI Knowledge Base ─────────────────────────────────────────────────────────────

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
    diagrams: [
      "Refrigeration Cycle Diagram",
      "Pressure-Temperature Chart",
      "Superheat & Subcooling Diagram",
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
    diagrams: ["Refrigeration Cycle Diagram", "Pressure-Temperature Chart"],
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
    diagrams: [
      "Contactor Wiring Diagram",
      "Capacitor Wiring Diagram",
      "Compressor Winding Diagram",
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
      "Inspect air filter and check blower CFM — low airflow causes low suction pressure.",
      "Visually inspect evaporator coil for ice buildup.",
      "If superheat is high (>25°F), suspect low charge or liquid line restriction.",
      "If superheat is low (<6°F), suspect restricted TXV or metering device.",
      "Perform leak check if low charge is confirmed.",
    ],
    tools: [
      "Digital manifold gauges",
      "Temperature clamps",
      "Leak detector",
      "Micron gauge",
    ],
    parts: [
      "TXV / metering device",
      "Filter drier",
      "Refrigerant",
      "Evaporator coil",
    ],
    safety:
      "Use refrigerant-safe gloves and goggles. Follow EPA 608 recovery procedures.",
    videos: [
      {
        title: "HVAC Metering Device Basics",
        url: "https://youtu.be/qV-DIqIxPGk",
      },
      {
        title: "HVAC AC Pressure, Superheat & Subcooling Explained",
        url: "https://youtu.be/5UU2c5e2ork",
      },
    ],
    modules: ["Digital Gauges & Smart Probes", "Refrigeration Diagnostics"],
    kbArticles: [
      "Superheat & Subcooling Calculations",
      "Metering Device Diagnostics",
    ],
    diagrams: ["Refrigeration Cycle Diagram", "Pressure-Temperature Chart"],
    estimatedTime: "1.5–4 hours",
  },
  "fan running no cooling": {
    symptom: "Fan Running, No Cooling",
    causes: [
      "Compressor not running",
      "Failed capacitor",
      "Faulty contactor",
      "High pressure lockout",
      "Low refrigerant",
    ],
    steps: [
      "Confirm indoor blower is running.",
      "Check if outdoor compressor is running by listening and feeling for vibration.",
      "Test contactor coil voltage — should read 24VAC when thermostat calls for cooling.",
      "Discharge and test run capacitor with capacitance meter.",
      "Measure compressor amp draw with clamp meter.",
      "Connect manifold gauges to check operating pressures.",
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
    diagrams: ["Contactor Wiring Diagram", "24V Control Circuit"],
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
      "Coil cleaning chemicals are corrosive — wear gloves and eye protection. Turn off power before servicing condenser fan.",
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
    diagrams: ["Refrigeration Cycle Diagram", "Pressure-Temperature Chart"],
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
    diagrams: ["Refrigeration Cycle Diagram", "Superheat & Subcooling Diagram"],
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
    diagrams: ["Refrigeration Cycle Diagram", "24V Control Circuit"],
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
      "Copper fittings and braze alloy",
    ],
    safety:
      "NEVER vent refrigerant — EPA 608 violation and environmental hazard. Wear gloves and goggles. Nitrogen pressure testing can be dangerous — use a regulator and never exceed system test pressure.",
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
    modules: ["EPA 608 Certification", "Digital Gauges & Smart Probes"],
    kbArticles: ["Refrigerant Recovery Requirements", "Leak Detection Methods"],
    diagrams: ["Refrigeration Cycle Diagram", "Pressure-Temperature Chart"],
    estimatedTime: "2–5 hours",
  },
  "no heat heat pump": {
    symptom: "No Heat (Heat Pump)",
    causes: [
      "Reversing valve stuck in cooling position",
      "Defrost board failure preventing heat mode",
      "Low refrigerant charge",
      "Heat strips not energizing (emergency heat)",
      "Outdoor ambient too low for heat pump to operate efficiently",
    ],
    steps: [
      "Verify thermostat is set to heating mode and set point is above room temperature.",
      "Check if reversing valve coil is energized in heat mode (24VAC at coil terminals).",
      "Connect manifold gauges — in heat mode, the outdoor coil is the evaporator.",
      "Check defrost board for fault codes or stuck operation.",
      "Test heat strip operation (if electric backup) — check sequencers and elements.",
      "Verify outdoor ambient is above minimum operating temperature for the unit.",
    ],
    tools: [
      "Digital manifold gauges",
      "Multimeter",
      "Clamp meter",
      "Thermometer",
    ],
    parts: [
      "Reversing valve",
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
    diagrams: [
      "Heat Pump Reversing Valve Diagram",
      "Refrigeration Cycle Diagram",
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
    diagrams: ["Compressor Winding Diagram", "Contactor Wiring Diagram"],
    estimatedTime: "1.5–3 hours",
  },
  // ─── NEW ENTRIES ───
  "weak airflow": {
    symptom: "Weak Airflow",
    causes: [
      "Dirty/clogged air filter",
      "Blocked return air grille",
      "Collapsed duct or disconnected section",
      "Blower motor failure or capacitor issue",
      "Evaporator coil iced over",
      "Undersized duct system",
    ],
    steps: [
      "Check and replace air filter.",
      "Inspect all supply and return grilles for blockages.",
      "Measure static pressure across air handler.",
      "Check blower motor amps vs. rated FLA.",
      "Inspect evaporator coil for ice buildup.",
      "Check blower capacitor with capacitance meter.",
      "Inspect accessible ductwork for disconnects or collapses.",
    ],
    tools: [
      "Manometer/magnehelic",
      "Clamp meter",
      "Capacitance meter",
      "Flashlight",
    ],
    parts: [
      "Air filter",
      "Blower capacitor",
      "Blower motor",
      "Duct tape/mastic",
    ],
    safety:
      "Disconnect power before accessing blower compartment. Do not bypass safety switches.",
    videos: [
      {
        title: "HVAC Multimeter 101 (3D)",
        url: "https://youtu.be/fa8NM7JzISM",
      },
      {
        title: "HVAC Refrigerant Pressure Gauges",
        url: "https://youtu.be/eEZAgzkS_sA",
      },
    ],
    modules: ["Digital Gauges & Smart Probes", "HVAC Electrical Fundamentals"],
    kbArticles: ["Airflow Fundamentals", "Blower Motor Diagnostics"],
    diagrams: ["Refrigeration Cycle Diagram", "Compressor Winding Diagram"],
    estimatedTime: "45–90 min",
  },
  "thermostat not responding": {
    symptom: "Thermostat Not Responding",
    causes: [
      "Thermostat wiring fault",
      "Blown 24V fuse on control board",
      "Transformer failure",
      "Thermostat batteries dead or thermostat failed",
      "Loose wire at R, C, G, Y, or W terminals",
      "Control board fault",
    ],
    steps: [
      "Check thermostat display — replace batteries if blank.",
      "Verify 24VAC at R and C terminals.",
      "Check low-voltage fuse on air handler/furnace board.",
      "Measure transformer output (24–28VAC expected).",
      "Inspect all thermostat wire terminals for loose connections.",
      "Jumper R to Y and R to G at air handler to test contactor and blower independently.",
      "If unit responds to jumper test, suspect thermostat or wiring.",
    ],
    tools: ["Multimeter", "Voltage tester", "Small screwdriver set"],
    parts: ["24V fuse (3A or 5A)", "Control transformer", "Thermostat"],
    safety:
      "Always verify 240V power is off at breaker before working inside air handler. Low-voltage wiring can still cause board damage if shorted.",
    videos: [
      {
        title: "How to Wire a Thermostat for Beginners",
        url: "https://youtu.be/mIsXWXicB48",
      },
      {
        title: "HVAC Low Voltage Circuit Explained",
        url: "https://youtu.be/5UU2c5e2ork",
      },
      {
        title: "How Power Moves Through An AC System Schematic",
        url: "https://youtu.be/VtC25cV1mU0",
      },
    ],
    modules: [
      "HVAC Electrical Fundamentals",
      "Electrical Troubleshooting for HVAC Systems",
    ],
    kbArticles: ["24V Control Circuit Basics", "Thermostat Wiring Guide"],
    diagrams: ["24V Control Circuit", "Contactor Wiring Diagram"],
    estimatedTime: "30–60 min",
  },
  "low refrigerant": {
    symptom: "Low Refrigerant Charge",
    causes: [
      "Refrigerant leak at service valve, evaporator coil, or line set",
      "Undercharge from install",
      "Schrader valve core leak",
    ],
    steps: [
      "Check suction and head pressure against PT chart for refrigerant type.",
      "Calculate superheat (suction line temp − saturation temp at suction pressure).",
      "Calculate subcooling (sat. temp at head pressure − liquid line temp).",
      "Inspect accessible components for oil stains indicating leak.",
      "Use electronic leak detector at common leak points.",
      "If confirmed low, recover, repair leak, evacuate, recharge to spec.",
    ],
    tools: [
      "Manifold gauge set",
      "Electronic leak detector",
      "Thermometer clamps",
      "PT chart",
    ],
    parts: [
      "Refrigerant (per system spec)",
      "Schrader cores",
      "Leak sealant (if applicable)",
    ],
    safety:
      "Wear safety glasses and gloves when working with refrigerant. Never vent refrigerant — EPA Section 608 violation. Recover refrigerant before opening system.",
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
        title: "HVAC Refrigerant Recovery (3D)",
        url: "https://youtu.be/fROHlPXw_H0",
      },
    ],
    modules: ["Digital Gauges & Smart Probes", "EPA 608 Certification"],
    kbArticles: [
      "Refrigerant Recovery Requirements",
      "Superheat & Subcooling Calculations",
    ],
    diagrams: [
      "Refrigeration Cycle Diagram",
      "Pressure-Temperature Chart",
      "Superheat & Subcooling Diagram",
    ],
    estimatedTime: "60–120 min",
  },
  "low charge": {
    symptom: "Low Refrigerant Charge",
    causes: [
      "Refrigerant leak at service valve, evaporator coil, or line set",
      "Undercharge from install",
      "Schrader valve core leak",
    ],
    steps: [
      "Check suction and head pressure against PT chart for refrigerant type.",
      "Calculate superheat and subcooling.",
      "Inspect for oil stains indicating refrigerant leak.",
      "Use electronic leak detector.",
      "If confirmed low, recover, repair leak, evacuate, recharge to spec.",
    ],
    tools: [
      "Manifold gauge set",
      "Electronic leak detector",
      "Thermometer clamps",
      "PT chart",
    ],
    parts: ["Refrigerant (per system spec)", "Schrader cores", "Filter drier"],
    safety:
      "Wear safety glasses and gloves when working with refrigerant. Never vent refrigerant — EPA Section 608 violation.",
    videos: [
      {
        title: "HVAC AC Pressure, Superheat & Subcooling Explained",
        url: "https://youtu.be/5UU2c5e2ork",
      },
      {
        title: "HVAC Refrigerant Recovery (3D)",
        url: "https://youtu.be/fROHlPXw_H0",
      },
    ],
    modules: ["Digital Gauges & Smart Probes", "EPA 608 Certification"],
    kbArticles: [
      "Refrigerant Recovery Requirements",
      "Superheat & Subcooling Calculations",
    ],
    diagrams: ["Refrigeration Cycle Diagram", "Pressure-Temperature Chart"],
    estimatedTime: "60–120 min",
  },
};

const QUICK_SYMPTOMS = [
  "AC not cooling",
  "Compressor not starting",
  "Low suction pressure",
  "Weak airflow",
  "Thermostat not responding",
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
    airflow: "weak airflow",
    "weak air": "weak airflow",
    thermostat: "thermostat not responding",
    "low charge": "low refrigerant",
    "low refrigerant": "low refrigerant",
  };
  for (const [kw, key] of Object.entries(keywords)) {
    if (q.includes(kw)) return KNOWLEDGE_BASE[key];
  }
  return null;
}

// ─── Measurement Analysis ───────────────────────────────────────────────────────

type RefrigerantType = "R-410A" | "R-22" | "R-32" | "R-454B" | "R-407C";

interface MeasurementVals {
  suctionPressure: string;
  headPressure: string;
  superheat: string;
  subcooling: string;
  tempSplit: string;
}

function analyzeMeasurements(
  vals: MeasurementVals,
  refrigerantType: RefrigerantType,
): MeasurementResult[] {
  const suction = Number.parseFloat(vals.suctionPressure);
  const head = Number.parseFloat(vals.headPressure);
  const sh = Number.parseFloat(vals.superheat);
  const sc = Number.parseFloat(vals.subcooling);
  const split = Number.parseFloat(vals.tempSplit);

  const hasAny = [suction, head, sh, sc, split].some((v) => !Number.isNaN(v));
  if (!hasAny) return [];

  const ranges =
    refrigerantType === "R-22"
      ? {
          suctionLow: 58,
          suctionHigh: 75,
          headLow: 200,
          headHigh: 260,
          shLow: 8,
          shHigh: 18,
          scLow: 8,
          scHigh: 15,
          splitLow: 16,
          splitHigh: 22,
        }
      : {
          suctionLow: 102,
          suctionHigh: 145,
          headLow: 250,
          headHigh: 350,
          shLow: 8,
          shHigh: 18,
          scLow: 8,
          scHigh: 18,
          splitLow: 16,
          splitHigh: 22,
        };

  const results: MeasurementResult[] = [];

  const lowSuction = !Number.isNaN(suction) && suction < ranges.suctionLow - 7;
  const highSuction =
    !Number.isNaN(suction) && suction > ranges.suctionHigh + 10;
  const lowHead = !Number.isNaN(head) && head < ranges.headLow - 20;
  const highHead = !Number.isNaN(head) && head > ranges.headHigh + 40;
  const lowSH = !Number.isNaN(sh) && sh < ranges.shLow - 2;
  const highSH = !Number.isNaN(sh) && sh > ranges.shHigh + 7;
  const lowSC = !Number.isNaN(sc) && sc < ranges.scLow - 3;
  const highSC = !Number.isNaN(sc) && sc > ranges.scHigh + 2;
  const lowSplit = !Number.isNaN(split) && split < ranges.splitLow - 4;
  const highSplit = !Number.isNaN(split) && split > ranges.splitHigh + 3;

  // All very low — system not running
  if (
    !Number.isNaN(suction) &&
    suction < 10 &&
    !Number.isNaN(head) &&
    head < 50
  ) {
    results.push({
      issue: "System Not Running / Electrical Control Problem",
      confidence: 70,
      explanation:
        "Pressures are extremely low (near ambient). The system is not operating. Check electrical controls, contactor, and thermostat before further refrigerant diagnostics.",
      nextStep:
        "Verify power, thermostat call, contactor operation, and control board before refrigerant diagnostics.",
    });
    return results;
  }

  // Pattern 1: Low charge
  if (lowSuction && highSH && lowSC) {
    results.push({
      issue: "Low Refrigerant Charge",
      confidence: 90,
      explanation: `Low suction (${vals.suctionPressure} psig), high superheat (${vals.superheat}°F), and low subcooling (${vals.subcooling}°F) together are a classic low-charge pattern. The system is starved for refrigerant.`,
      nextStep:
        "Perform a leak check. If leak confirmed, recover refrigerant, repair, evacuate, and recharge to nameplate weight.",
    });
  }

  // Pattern 2: TXV restriction
  if (lowSuction && lowSH && !lowSC) {
    results.push({
      issue: "Metering Device Restriction (TXV / EEV)",
      confidence: 85,
      explanation: `Low suction (${vals.suctionPressure} psig) with low superheat (${vals.superheat}°F) and normal/high subcooling suggests a restricted or underfeeding metering device.`,
      nextStep:
        "Check TXV bulb attachment, sensing bulb orientation, and system superheat at multiple conditions. Consider replacing TXV.",
    });
  }

  // Pattern 3: Dirty condenser / overcharge
  if (highHead && !lowSuction && highSC) {
    results.push({
      issue: "Dirty Condenser Coil / High Ambient",
      confidence: 80,
      explanation: `High head pressure (${vals.headPressure} psig) with high subcooling (${vals.subcooling}°F) and normal suction indicates condenser heat rejection issues or refrigerant overcharge.`,
      nextStep:
        "Inspect and clean condenser coil. Check condenser fan operation and ambient temperature. Verify refrigerant charge.",
    });
  }

  // Pattern 4: Airflow restriction (low suction + low superheat)
  if (
    lowSuction &&
    lowSH &&
    !results.some((r) => r.issue.includes("Metering"))
  ) {
    results.push({
      issue: "Indoor Airflow Restriction",
      confidence: 75,
      explanation:
        "Low suction and low superheat without clear metering device symptoms often indicate restricted indoor airflow — dirty filter, blocked return, or failed blower.",
      nextStep:
        "Replace air filter, inspect evaporator coil for icing, check blower motor operation and amp draw.",
    });
  }

  // Pattern 5: Airflow from split only
  if (lowSplit && !lowSuction && !highSuction) {
    results.push({
      issue: "Airflow Restriction",
      confidence: 70,
      explanation: `Low temperature split (${vals.tempSplit}°F) with normal pressures suggests reduced indoor airflow. The system is running but not transferring enough heat.`,
      nextStep:
        "Check air filter, blower speed, return/supply duct static pressure. Ensure all vents are open.",
    });
  }

  // Pattern 6: Overcharge
  if (highSuction && highHead && lowSH) {
    results.push({
      issue: "Refrigerant Overcharge",
      confidence: 85,
      explanation: `High suction (${vals.suctionPressure} psig), high head (${vals.headPressure} psig), and low superheat (${vals.superheat}°F) indicate the system is overcharged with refrigerant.`,
      nextStep:
        "Recover excess refrigerant and recharge by weight. Recheck superheat and subcooling.",
    });
  }

  // Pattern 7: Dirty evaporator
  if (highSplit && !lowSuction && !highSuction) {
    results.push({
      issue: "Possible Dirty Evaporator Coil",
      confidence: 65,
      explanation: `High temperature split (${vals.tempSplit}°F) with otherwise normal pressures may indicate a partially blocked evaporator coil limiting capacity.`,
      nextStep:
        "Inspect evaporator coil for debris or microbial growth. Clean with approved coil cleaner.",
    });
  }

  // Low head
  if (lowHead && !lowSuction) {
    results.push({
      issue: "Low Condensing Pressure / Condenser Fan Issue",
      confidence: 70,
      explanation: `Head pressure is lower than expected (${vals.headPressure} psig). This can indicate a condenser fan running too fast, very low ambient temperature, or partial refrigerant loss.`,
      nextStep:
        "Verify condenser fan motor speed and direction. Check ambient temperature vs system operating range.",
    });
  }

  if (results.length === 0) {
    results.push({
      issue: "Readings Within Normal Range",
      confidence: 80,
      explanation:
        "The entered measurements appear to be within normal operating parameters. If the customer complaint persists, consider non-refrigerant causes (airflow, controls, or zoning).",
      nextStep:
        "Verify measurements are accurate. Check airflow, thermostat calibration, and building envelope.",
    });
  }

  return results;
}

// ─── Sub-components ───────────────────────────────────────────────────────────────────

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

function ConfidenceBadge({ confidence }: { confidence: number }) {
  const color =
    confidence >= 80
      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      : confidence >= 65
        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
        : "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300";
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${color}`}
    >
      {confidence}% confidence
    </span>
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
            Field HVAC Assistant
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

      {/* Resources */}
      <div className="rounded-lg border border-border bg-muted/30 p-3 space-y-3">
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Sources — Internal Resources Prioritized
        </p>

        {response.diagrams && response.diagrams.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-1.5 flex items-center gap-1">
              <ImageIcon className="h-3 w-3" /> Diagrams
            </p>
            <div className="flex flex-wrap gap-1.5">
              {response.diagrams.map((d) => (
                <Badge
                  key={d}
                  variant="outline"
                  className="text-xs cursor-pointer hover:bg-muted"
                >
                  <ImageIcon className="mr-1 h-3 w-3" />
                  {d}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div>
          <p className="text-xs font-semibold text-muted-foreground mb-1.5 flex items-center gap-1">
            <BookOpen className="h-3 w-3" /> Study Modules
          </p>
          <div className="flex flex-wrap gap-1.5">
            {response.modules.map((m) => (
              <Badge key={m} variant="secondary" className="text-xs">
                <BookOpen className="mr-1 h-3 w-3" />
                {m}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-muted-foreground mb-1.5 flex items-center gap-1">
            <PlayCircle className="h-3 w-3" /> Training Videos
          </p>
          <div className="flex flex-wrap gap-1.5">
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
                  {v.title.length > 30
                    ? `${v.title.slice(0, 30)}\u2026`
                    : v.title}
                </Badge>
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-muted-foreground mb-1.5 flex items-center gap-1">
            <Search className="h-3 w-3" /> Knowledge Base
          </p>
          <div className="flex flex-wrap gap-1.5">
            {response.kbArticles.map((a) => (
              <Badge key={a} variant="outline" className="text-xs">
                {a}
              </Badge>
            ))}
          </div>
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

      {response.diagrams && response.diagrams.length > 0 && (
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
            <ImageIcon className="h-3 w-3" /> Diagrams
          </p>
          <div className="space-y-1.5">
            {response.diagrams.map((d) => (
              <div
                key={d}
                className="flex items-center justify-between rounded-md border border-border bg-card p-2"
              >
                <span className="text-xs font-medium line-clamp-1">{d}</span>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-6 text-xs px-2 text-primary"
                >
                  View
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

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

// ─── Main Component ───────────────────────────────────────────────────────────────────

const EMPTY_JOB: Omit<SavedJob, "id" | "createdAt"> = {
  customerName: "",
  address: "",
  systemType: "Split System",
  refrigerantType: "R-410A",
  symptoms: "",
  measurements: {
    suctionPressure: "",
    headPressure: "",
    superheat: "",
    subcooling: "",
    tempSplit: "",
  },
  finalRepair: "",
  status: "Open",
  diagnosticInfo: "",
};

export default function FieldAIAssistantTab({
  isGuest: _isGuest,
}: FieldAIAssistantTabProps) {
  const [symptomInput, setSymptomInput] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [sessions, setSessions] = useState<DiagnosticSession[]>([]);
  const [activeResponse, setActiveResponse] = useState<AIResponse | null>(null);
  const [reviewSession, setReviewSession] = useState<DiagnosticSession | null>(
    null,
  );

  // Measurement panel
  const [measurePanelOpen, setMeasurePanelOpen] = useState(false);
  const [measureVals, setMeasureVals] = useState<MeasurementVals>({
    suctionPressure: "",
    headPressure: "",
    superheat: "",
    subcooling: "",
    tempSplit: "",
  });
  const [measureRefrigerant, setMeasureRefrigerant] =
    useState<RefrigerantType>("R-410A");
  const [measureResults, setMeasureResults] = useState<MeasurementResult[]>([]);
  const [isAnalyzingMeasure, setIsAnalyzingMeasure] = useState(false);

  // Job panel
  const [jobPanelOpen, setJobPanelOpen] = useState(false);
  const [jobForm, setJobForm] =
    useState<Omit<SavedJob, "id" | "createdAt">>(EMPTY_JOB);
  const [savedJobs, setSavedJobs] = useState<SavedJob[]>([]);
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  const [isSavingJob, setIsSavingJob] = useState(false);

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

  const handleAnalyzeMeasurements = () => {
    const hasAny = Object.values(measureVals).some((v) => v.trim());
    if (!hasAny) {
      toast.error("Enter at least one measurement value.");
      return;
    }
    setIsAnalyzingMeasure(true);
    setTimeout(() => {
      const results = analyzeMeasurements(measureVals, measureRefrigerant);
      setMeasureResults(results);
      setIsAnalyzingMeasure(false);
      toast.success(
        `${results.length} pattern${results.length !== 1 ? "s" : ""} detected`,
      );
    }, 800);
  };

  const handleSaveJob = () => {
    if (!jobForm.customerName.trim()) {
      toast.error("Customer name is required.");
      return;
    }
    setIsSavingJob(true);
    setTimeout(() => {
      const diagSnap =
        measureResults.length > 0 ? JSON.stringify(measureResults) : "";
      const newJob: SavedJob = {
        id: `job-${Date.now()}`,
        createdAt: new Date().toLocaleString(),
        ...jobForm,
        diagnosticInfo: diagSnap || jobForm.diagnosticInfo,
      };
      setSavedJobs((prev) => [newJob, ...prev]);
      setJobForm(EMPTY_JOB);
      setIsSavingJob(false);
      toast.success(`Job saved for ${newJob.customerName}`);
    }, 600);
  };

  const markResolved = (id: string) => {
    setSessions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: "Resolved" } : s)),
    );
    toast.success("Marked as resolved");
  };

  const setMeasInput = (k: keyof MeasurementVals, v: string) =>
    setMeasureVals((prev) => ({ ...prev, [k]: v }));

  const setJobMeas = (k: keyof SavedJob["measurements"], v: string) =>
    setJobForm((f) => ({ ...f, measurements: { ...f.measurements, [k]: v } }));

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
              Field HVAC Assistant
              <Badge className="text-[10px] bg-primary/20 text-primary border-primary/30 font-medium">
                <Sparkles className="mr-1 h-2.5 w-2.5" /> AI Powered
              </Badge>
            </h2>
            <p className="text-sm text-muted-foreground">
              Real-time HVAC diagnostics, repair guidance, and job documentation
            </p>
          </div>
        </div>
      </div>

      {/* Measurement Analysis Panel */}
      <Collapsible
        open={measurePanelOpen}
        onOpenChange={setMeasurePanelOpen}
        data-ocid="field-hvac.measurement_panel"
      >
        <Card className="border-blue-500/20">
          <CollapsibleTrigger asChild>
            <CardHeader className="cursor-pointer hover:bg-muted/30 transition-colors rounded-t-lg pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Thermometer className="h-4 w-4 text-blue-500" />
                  Measurement Analysis
                  <Badge
                    variant="outline"
                    className="text-xs border-blue-500/30 text-blue-600 dark:text-blue-400"
                  >
                    Pattern Detection
                  </Badge>
                </CardTitle>
                {measurePanelOpen ? (
                  <ChevronUp className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                )}
              </div>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent className="pt-0 space-y-4">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="space-y-1.5">
                  <Label className="text-xs">Refrigerant Type</Label>
                  <Select
                    value={measureRefrigerant}
                    onValueChange={(v) =>
                      setMeasureRefrigerant(v as RefrigerantType)
                    }
                  >
                    <SelectTrigger data-ocid="field-hvac.refrigerant_select">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="R-410A">R-410A</SelectItem>
                      <SelectItem value="R-22">R-22</SelectItem>
                      <SelectItem value="R-32">R-32</SelectItem>
                      <SelectItem value="R-454B">R-454B</SelectItem>
                      <SelectItem value="R-407C">R-407C</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Suction Pressure (psig)</Label>
                  <Input
                    type="number"
                    value={measureVals.suctionPressure}
                    onChange={(e) =>
                      setMeasInput("suctionPressure", e.target.value)
                    }
                    placeholder="e.g. 125"
                    data-ocid="field-hvac.suction_input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Head Pressure (psig)</Label>
                  <Input
                    type="number"
                    value={measureVals.headPressure}
                    onChange={(e) =>
                      setMeasInput("headPressure", e.target.value)
                    }
                    placeholder="e.g. 295"
                    data-ocid="field-hvac.head_input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Superheat (°F)</Label>
                  <Input
                    type="number"
                    value={measureVals.superheat}
                    onChange={(e) => setMeasInput("superheat", e.target.value)}
                    placeholder="e.g. 12"
                    data-ocid="field-hvac.superheat_input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Subcooling (°F)</Label>
                  <Input
                    type="number"
                    value={measureVals.subcooling}
                    onChange={(e) => setMeasInput("subcooling", e.target.value)}
                    placeholder="e.g. 10"
                    data-ocid="field-hvac.subcooling_input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Temp Split (°F)</Label>
                  <Input
                    type="number"
                    value={measureVals.tempSplit}
                    onChange={(e) => setMeasInput("tempSplit", e.target.value)}
                    placeholder="e.g. 20"
                    data-ocid="field-hvac.tempsplit_input"
                  />
                </div>
              </div>

              <Button
                onClick={handleAnalyzeMeasurements}
                disabled={isAnalyzingMeasure}
                data-ocid="field-hvac.analyze_measurements_button"
              >
                {isAnalyzingMeasure ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Analyze Measurements
                  </>
                )}
              </Button>

              {measureResults.length > 0 && (
                <div className="space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Detected Patterns
                  </p>
                  {measureResults.map((r, idx) => (
                    <div
                      key={r.issue}
                      className="rounded-lg border border-border p-3 space-y-2"
                      data-ocid={`field-hvac.measurement_result.${idx + 1}`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm font-semibold">{r.issue}</p>
                        <ConfidenceBadge confidence={r.confidence} />
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {r.explanation}
                      </p>
                      <div className="flex items-start gap-1.5 rounded-md bg-muted/50 px-2.5 py-2">
                        <Zap className="h-3 w-3 text-primary mt-0.5 shrink-0" />
                        <p className="text-xs font-medium">{r.nextStep}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>

      {/* Job Creation Panel */}
      <Collapsible
        open={jobPanelOpen}
        onOpenChange={setJobPanelOpen}
        data-ocid="field-hvac.job_panel"
      >
        <Card className="border-primary/20">
          <CollapsibleTrigger asChild>
            <CardHeader className="cursor-pointer hover:bg-muted/30 transition-colors rounded-t-lg pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Wrench className="h-4 w-4 text-primary" />
                  Create Job &amp; Diagnose
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
              {/* Customer & Address */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label>Customer Name *</Label>
                  <Input
                    value={jobForm.customerName}
                    onChange={(e) =>
                      setJobForm((f) => ({
                        ...f,
                        customerName: e.target.value,
                      }))
                    }
                    placeholder="e.g. John Smith"
                    data-ocid="field-hvac.customer_input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label>Address</Label>
                  <Input
                    value={jobForm.address}
                    onChange={(e) =>
                      setJobForm((f) => ({ ...f, address: e.target.value }))
                    }
                    placeholder="e.g. 123 Main St, Orlando, FL"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <Label>System Type</Label>
                  <Select
                    value={jobForm.systemType}
                    onValueChange={(v) =>
                      setJobForm((f) => ({ ...f, systemType: v }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Split System">Split System</SelectItem>
                      <SelectItem value="Package Unit">Package Unit</SelectItem>
                      <SelectItem value="Heat Pump">Heat Pump</SelectItem>
                      <SelectItem value="Mini-Split">Mini-Split</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label>Refrigerant Type</Label>
                  <Select
                    value={jobForm.refrigerantType}
                    onValueChange={(v) =>
                      setJobForm((f) => ({ ...f, refrigerantType: v }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="R-410A">R-410A</SelectItem>
                      <SelectItem value="R-22">R-22</SelectItem>
                      <SelectItem value="R-32">R-32</SelectItem>
                      <SelectItem value="R-454B">R-454B</SelectItem>
                      <SelectItem value="R-407C">R-407C</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label>Status</Label>
                  <Select
                    value={jobForm.status}
                    onValueChange={(v) =>
                      setJobForm((f) => ({ ...f, status: v }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Open">Open</SelectItem>
                      <SelectItem value="In Progress">In Progress</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label>Issue / Symptoms</Label>
                <Textarea
                  value={jobForm.symptoms}
                  onChange={(e) =>
                    setJobForm((f) => ({ ...f, symptoms: e.target.value }))
                  }
                  placeholder="e.g. AC not cooling, customer reports warm air, outdoor unit running..."
                  rows={2}
                />
              </div>

              {/* Measurements */}
              <div className="space-y-2">
                <Label className="flex items-center gap-1.5 text-sm font-semibold">
                  <Thermometer className="h-3.5 w-3.5" /> Field Measurements
                </Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 rounded-lg border border-border p-3 bg-muted/20">
                  <div className="space-y-1">
                    <Label className="text-xs">Suction Pressure (psig)</Label>
                    <Input
                      value={jobForm.measurements.suctionPressure}
                      onChange={(e) =>
                        setJobMeas("suctionPressure", e.target.value)
                      }
                      placeholder="e.g. 125"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">Head Pressure (psig)</Label>
                    <Input
                      value={jobForm.measurements.headPressure}
                      onChange={(e) =>
                        setJobMeas("headPressure", e.target.value)
                      }
                      placeholder="e.g. 295"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">Superheat (°F)</Label>
                    <Input
                      value={jobForm.measurements.superheat}
                      onChange={(e) => setJobMeas("superheat", e.target.value)}
                      placeholder="e.g. 12"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">Subcooling (°F)</Label>
                    <Input
                      value={jobForm.measurements.subcooling}
                      onChange={(e) => setJobMeas("subcooling", e.target.value)}
                      placeholder="e.g. 10"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">Temp Split (°F)</Label>
                    <Input
                      value={jobForm.measurements.tempSplit}
                      onChange={(e) => setJobMeas("tempSplit", e.target.value)}
                      placeholder="e.g. 20"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label>Final Repair Performed</Label>
                <Textarea
                  value={jobForm.finalRepair}
                  onChange={(e) =>
                    setJobForm((f) => ({ ...f, finalRepair: e.target.value }))
                  }
                  placeholder="Fill in after completing the repair (e.g. Replaced dual run capacitor 45/5 µF, recharged R-410A...)"
                  rows={2}
                />
              </div>

              <Button
                onClick={handleSaveJob}
                disabled={isSavingJob}
                data-ocid="field-hvac.save_job_button"
              >
                {isSavingJob ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save Job
                  </>
                )}
              </Button>
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
                Ask the Field HVAC Assistant
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
                  placeholder="Describe the symptom or ask a question (e.g. 'AC not cooling', 'thermostat not responding', 'weak airflow')..."
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

              {activeResponse && (
                <div className="mt-2">
                  <ResponseCard response={activeResponse} />
                </div>
              )}
              <div ref={chatBottomRef} />
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Related Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px] pr-1">
                <ResourcesSidebar response={activeResponse} />
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Session History */}
      {sessions.length > 0 && (
        <Collapsible>
          <Card data-ocid="field-ai.history_panel">
            <CollapsibleTrigger asChild>
              <CardHeader className="cursor-pointer hover:bg-muted/30 transition-colors rounded-t-lg pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <History className="h-4 w-4" />
                    Session History
                    <Badge variant="secondary" className="text-xs">
                      {sessions.length}
                    </Badge>
                  </CardTitle>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardHeader>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CardContent className="pt-0 space-y-2">
                {sessions.map((session, idx) => (
                  <div
                    key={session.id}
                    className="rounded-lg border border-border p-3 hover:bg-muted/20 transition-colors"
                    data-ocid={`field-ai.session_item.${idx + 1}`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">
                          {session.symptom}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {session.timestamp}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <Badge
                          variant="outline"
                          className={`text-[10px] ${session.status === "Resolved" ? "border-green-500/40 text-green-600 dark:text-green-400" : "border-yellow-500/40 text-yellow-600 dark:text-yellow-400"}`}
                        >
                          {session.status}
                        </Badge>
                        {session.status !== "Resolved" && (
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-6 text-xs px-2"
                            onClick={() => markResolved(session.id)}
                          >
                            Resolve
                          </Button>
                        )}
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-6 text-xs px-2 text-primary"
                          onClick={() => setReviewSession(session)}
                        >
                          Review
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>
      )}

      {/* Job History */}
      {savedJobs.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Wrench className="h-4 w-4 text-primary" />
              Job History
              <Badge variant="secondary" className="text-xs">
                {savedJobs.length}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {savedJobs.map((job, idx) => (
              <div
                key={job.id}
                className="rounded-lg border border-border overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full text-left p-3 hover:bg-muted/20 transition-colors"
                  onClick={() =>
                    setExpandedJobId(expandedJobId === job.id ? null : job.id)
                  }
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-0.5">
                        <p className="text-sm font-semibold">
                          {job.customerName}
                        </p>
                        <Badge variant="outline" className="text-xs">
                          {job.systemType}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {job.refrigerantType}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {job.status}
                        </span>
                      </div>
                      {job.symptoms && (
                        <p className="text-xs text-muted-foreground line-clamp-1">
                          {job.symptoms}
                        </p>
                      )}
                      <p className="text-xs text-muted-foreground">
                        {job.createdAt}
                      </p>
                    </div>
                    {expandedJobId === job.id ? (
                      <ChevronUp className="h-4 w-4 text-muted-foreground shrink-0" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
                    )}
                  </div>
                </button>

                {expandedJobId === job.id && (
                  <div className="border-t border-border p-3 space-y-3 bg-muted/10">
                    {/* Measurements */}
                    {Object.values(job.measurements).some((v) => v) && (
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1">
                          <Thermometer className="h-3 w-3" /> Measurements
                          Entered
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {job.measurements.suctionPressure && (
                            <div className="text-xs">
                              <span className="text-muted-foreground">
                                Suction:
                              </span>{" "}
                              <span className="font-semibold">
                                {job.measurements.suctionPressure} psig
                              </span>
                            </div>
                          )}
                          {job.measurements.headPressure && (
                            <div className="text-xs">
                              <span className="text-muted-foreground">
                                Head:
                              </span>{" "}
                              <span className="font-semibold">
                                {job.measurements.headPressure} psig
                              </span>
                            </div>
                          )}
                          {job.measurements.superheat && (
                            <div className="text-xs">
                              <span className="text-muted-foreground">
                                Superheat:
                              </span>{" "}
                              <span className="font-semibold">
                                {job.measurements.superheat}°F
                              </span>
                            </div>
                          )}
                          {job.measurements.subcooling && (
                            <div className="text-xs">
                              <span className="text-muted-foreground">
                                Subcooling:
                              </span>{" "}
                              <span className="font-semibold">
                                {job.measurements.subcooling}°F
                              </span>
                            </div>
                          )}
                          {job.measurements.tempSplit && (
                            <div className="text-xs">
                              <span className="text-muted-foreground">
                                Temp Split:
                              </span>{" "}
                              <span className="font-semibold">
                                {job.measurements.tempSplit}°F
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* AI Diagnostic Snapshot */}
                    {job.diagnosticInfo &&
                      (() => {
                        let parsed: MeasurementResult[] | null = null;
                        try {
                          parsed = JSON.parse(job.diagnosticInfo);
                        } catch {
                          /* no-op */
                        }
                        if (!parsed || !Array.isArray(parsed)) return null;
                        return (
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1">
                              <Sparkles className="h-3 w-3" /> AI Suggested
                              Issues
                            </p>
                            <div className="space-y-2">
                              {parsed.map((r) => (
                                <div
                                  key={r.issue}
                                  className="rounded-md border border-border p-2"
                                >
                                  <div className="flex items-center justify-between gap-2 mb-1">
                                    <p className="text-xs font-semibold">
                                      {r.issue}
                                    </p>
                                    <ConfidenceBadge
                                      confidence={r.confidence}
                                    />
                                  </div>
                                  <p className="text-xs text-muted-foreground">
                                    {r.nextStep}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })()}

                    {/* Final Repair */}
                    {job.finalRepair && (
                      <div className="rounded-md border border-green-500/30 bg-green-500/10 p-2">
                        <p className="text-xs font-bold text-green-700 dark:text-green-400 mb-0.5">
                          Final Repair
                        </p>
                        <p className="text-xs">{job.finalRepair}</p>
                      </div>
                    )}

                    <p className="text-[10px] text-muted-foreground text-right">
                      Job #{idx + 1} · {job.createdAt}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Session Review Dialog */}
      {reviewSession && (
        <Dialog
          open={!!reviewSession}
          onOpenChange={(o) => !o && setReviewSession(null)}
        >
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Bot className="h-4 w-4 text-primary" />
                Session Review: {reviewSession.symptom}
              </DialogTitle>
            </DialogHeader>
            <div className="pt-2">
              <ResponseCard response={reviewSession.response} />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
