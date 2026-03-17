import { c as createLucideIcon, j as jsxRuntimeExports, r as reactExports, B as Bot, i as Badge, C as Card, a as CardHeader, b as CardTitle, e as CardContent, L as Label, I as Input, k as Button, aj as LoaderCircle, W as Wrench, w as Dialog, x as DialogContent, y as DialogHeader, z as DialogTitle, p as ue, a2 as Search, m as BookOpen } from "./index-DobHR2Wc.js";
import { R as Root, a as CollapsibleTrigger$1, b as CollapsibleContent$1 } from "./index-Bw8csQ-2.js";
import { S as ScrollArea } from "./scroll-area-owNR0oJt.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CR_7uthw.js";
import { T as Textarea } from "./textarea-CTRG8Om1.js";
import { S as Sparkles } from "./sparkles-BYGufEW2.js";
import { T as Thermometer, C as Clock } from "./thermometer-DUzuKOO0.js";
import { a as ChevronUp, C as ChevronDown } from "./index-BsdchjIc.js";
import { Z as Zap } from "./zap-Blqi1eaL.js";
import { H as History } from "./history-qHtl1Kfh.js";
import { C as CirclePlay } from "./circle-play-Bb_rdsbt.js";
import { E as ExternalLink } from "./external-link-1Nq1J8dI.js";
import { T as TriangleAlert } from "./triangle-alert-MdLkgWJo.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
];
const Image = createLucideIcon("image", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
];
const Save = createLucideIcon("save", __iconNode);
function Collapsible({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { "data-slot": "collapsible", ...props });
}
function CollapsibleTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CollapsibleTrigger$1,
    {
      "data-slot": "collapsible-trigger",
      ...props
    }
  );
}
function CollapsibleContent({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CollapsibleContent$1,
    {
      "data-slot": "collapsible-content",
      ...props
    }
  );
}
const KNOWLEDGE_BASE = {
  "ac not cooling": {
    symptom: "AC Not Cooling",
    causes: [
      "Low refrigerant charge (most common)",
      "Dirty or blocked condenser coil",
      "Faulty or failed compressor",
      "Restricted metering device / TXV",
      "Low indoor airflow — dirty filter or blower issue"
    ],
    steps: [
      "Check and adjust thermostat settings — ensure cooling mode and setpoint is below room temp.",
      "Inspect air filter — replace if clogged. A dirty filter severely reduces airflow.",
      "Verify outdoor unit is running — check compressor and condenser fan operation.",
      "Connect digital manifold gauges. Record suction and head pressure.",
      "Calculate superheat (8–12°F TXV / 10–20°F fixed orifice) and subcooling (8–14°F).",
      "Inspect condenser coil for blockage — clean if fins are dirty or matted.",
      "If pressures are low, perform a leak check with electronic leak detector."
    ],
    tools: [
      "Digital manifold gauges (Bluetooth preferred)",
      "Clamp meter (compressor amp draw)",
      "Digital thermometer / temperature clamps",
      "Electronic refrigerant leak detector",
      "Flashlight"
    ],
    parts: [
      'Air filter (1" or 4" media)',
      "Refrigerant (R-410A or R-22 as required)",
      "Dual run capacitor (if fan/compressor issues found)",
      "Contactor (if pitted or burnt)",
      "Filter drier (if refrigerant system opened)"
    ],
    safety: "Turn off power at disconnect before accessing electrical components. Wear refrigerant-rated gloves and goggles when handling refrigerants. Follow EPA 608 recovery procedures — never vent refrigerant.",
    videos: [
      {
        title: "HVAC AC Pressure, Superheat & Subcooling Explained",
        url: "https://youtu.be/5UU2c5e2ork"
      },
      {
        title: "HVAC Refrigerant Pressure Gauges",
        url: "https://youtu.be/eEZAgzkS_sA"
      },
      {
        title: "HVAC Metering Device Basics",
        url: "https://youtu.be/qV-DIqIxPGk"
      }
    ],
    modules: [
      "Digital Gauges & Smart Probes",
      "Multimeter Training",
      "Refrigeration Diagnostics"
    ],
    kbArticles: [
      "Superheat & Subcooling Explained",
      "Refrigeration Cycle Fundamentals",
      "Pressure-Temperature Relationships"
    ],
    diagrams: [
      "Refrigeration Cycle Diagram",
      "Pressure-Temperature Chart",
      "Superheat & Subcooling Diagram"
    ],
    estimatedTime: "1.5–3 hours"
  },
  "no cooling": {
    symptom: "AC Not Cooling",
    causes: [
      "Low refrigerant charge (most common)",
      "Dirty or blocked condenser coil",
      "Faulty or failed compressor",
      "Restricted metering device / TXV",
      "Low indoor airflow — dirty filter or blower issue"
    ],
    steps: [
      "Check and adjust thermostat settings.",
      "Inspect and replace air filter if clogged.",
      "Verify outdoor unit operation — compressor and fan running.",
      "Connect manifold gauges and record suction / head pressures.",
      "Calculate superheat and subcooling values.",
      "Inspect condenser coil cleanliness.",
      "Perform leak check if pressures indicate low charge."
    ],
    tools: [
      "Digital manifold gauges",
      "Clamp meter",
      "Digital thermometer",
      "Leak detector"
    ],
    parts: [
      "Air filter",
      "Refrigerant (R-410A or R-22)",
      "Dual run capacitor",
      "Contactor"
    ],
    safety: "Power off before accessing electrical components. Use PPE when handling refrigerant. Follow EPA 608 recovery procedures.",
    videos: [
      {
        title: "HVAC AC Pressure, Superheat & Subcooling Explained",
        url: "https://youtu.be/5UU2c5e2ork"
      },
      {
        title: "HVAC Refrigerant Pressure Gauges",
        url: "https://youtu.be/eEZAgzkS_sA"
      }
    ],
    modules: ["Digital Gauges & Smart Probes", "Multimeter Training"],
    kbArticles: [
      "Superheat & Subcooling Explained",
      "Refrigeration Cycle Fundamentals"
    ],
    diagrams: ["Refrigeration Cycle Diagram", "Pressure-Temperature Chart"],
    estimatedTime: "1.5–3 hours"
  },
  "compressor not starting": {
    symptom: "Compressor Not Starting",
    causes: [
      "Failed run capacitor (most common cause of hard starts)",
      "Faulty or burnt contactor",
      "High pressure lockout (overheated condenser)",
      "Low voltage supply (should be within 10% of nameplate)",
      "Open internal overload protector",
      "Hard start kit required"
    ],
    steps: [
      "Verify power is reaching the unit — check disconnect and breaker.",
      "Inspect contactor — look for pitted, burnt, or stuck contacts.",
      "Discharge and test run capacitor with capacitance meter. Compare to nameplate (±6% acceptable).",
      "Measure supply voltage at the contactor — should be within ±10% of nameplate.",
      "Check high-pressure and low-pressure switches for lockout condition.",
      "If compressor hums but won't start, test for locked rotor. Consider hard start kit.",
      "Allow internal overload 30 minutes to reset if compressor was recently running hot."
    ],
    tools: [
      "Digital multimeter (UEi DL589 or equivalent)",
      "Capacitance meter",
      "Clamp meter (check LRA vs RLA)",
      "Digital manifold gauges"
    ],
    parts: [
      "Dual run capacitor (match µF and voltage rating exactly)",
      "Start capacitor (if hard start kit needed)",
      "Contactor (match coil voltage and amp rating)",
      "Hard start kit (SPP6 or equivalent)"
    ],
    safety: "Always discharge capacitors before testing — stored charge can cause severe shock. Use lockout/tagout procedures. Never bypass safety controls.",
    videos: [
      {
        title: "How to Test HVAC Relays, Contactors, and Transformers",
        url: "https://youtu.be/4ja6GynaxQ0"
      },
      {
        title: "HVAC Multimeter 101 (3D)",
        url: "https://youtu.be/fa8NM7JzISM"
      }
    ],
    modules: [
      "Multimeter Training",
      "UEi DL589 Multimeter Guide",
      "Electrical Troubleshooting for HVAC Systems"
    ],
    kbArticles: [
      "Testing Contactors and Capacitors",
      "HVAC Electrical Safety",
      "Compressor Diagnostics"
    ],
    diagrams: [
      "Contactor Wiring Diagram",
      "Capacitor Wiring Diagram",
      "Compressor Winding Diagram"
    ],
    estimatedTime: "1–2.5 hours"
  },
  "low suction pressure": {
    symptom: "Low Suction Pressure",
    causes: [
      "Low refrigerant charge — active leak suspected",
      "Restricted TXV or metering device",
      "Low indoor airflow (dirty filter, coil, or blower)",
      "Dirty or iced evaporator coil",
      "Liquid line restriction (kinked line or failed drier)"
    ],
    steps: [
      "Connect gauges — record suction and head pressure with a calibrated digital manifold.",
      "Calculate superheat at the suction line: target 8–12°F for TXV systems.",
      "Inspect air filter and check blower CFM — low airflow causes low suction pressure.",
      "Visually inspect evaporator coil for ice buildup.",
      "If superheat is high (>25°F), suspect low charge or liquid line restriction.",
      "If superheat is low (<6°F), suspect restricted TXV or metering device.",
      "Perform leak check if low charge is confirmed."
    ],
    tools: [
      "Digital manifold gauges",
      "Temperature clamps",
      "Leak detector",
      "Micron gauge"
    ],
    parts: [
      "TXV / metering device",
      "Filter drier",
      "Refrigerant",
      "Evaporator coil"
    ],
    safety: "Use refrigerant-safe gloves and goggles. Follow EPA 608 recovery procedures.",
    videos: [
      {
        title: "HVAC Metering Device Basics",
        url: "https://youtu.be/qV-DIqIxPGk"
      },
      {
        title: "HVAC AC Pressure, Superheat & Subcooling Explained",
        url: "https://youtu.be/5UU2c5e2ork"
      }
    ],
    modules: ["Digital Gauges & Smart Probes", "Refrigeration Diagnostics"],
    kbArticles: [
      "Superheat & Subcooling Calculations",
      "Metering Device Diagnostics"
    ],
    diagrams: ["Refrigeration Cycle Diagram", "Pressure-Temperature Chart"],
    estimatedTime: "1.5–4 hours"
  },
  "fan running no cooling": {
    symptom: "Fan Running, No Cooling",
    causes: [
      "Compressor not running",
      "Failed capacitor",
      "Faulty contactor",
      "High pressure lockout",
      "Low refrigerant"
    ],
    steps: [
      "Confirm indoor blower is running.",
      "Check if outdoor compressor is running by listening and feeling for vibration.",
      "Test contactor coil voltage — should read 24VAC when thermostat calls for cooling.",
      "Discharge and test run capacitor with capacitance meter.",
      "Measure compressor amp draw with clamp meter.",
      "Connect manifold gauges to check operating pressures."
    ],
    tools: [
      "Clamp meter",
      "Digital multimeter",
      "Digital manifold gauges",
      "Capacitance meter"
    ],
    parts: ["Dual run capacitor", "Contactor", "Refrigerant", "Hard start kit"],
    safety: "Do not touch outdoor unit with power on without proper PPE. Discharge capacitors before testing. Use lockout/tagout at disconnect.",
    videos: [
      {
        title: "How to Test HVAC Relays, Contactors, and Transformers",
        url: "https://youtu.be/4ja6GynaxQ0"
      },
      {
        title: "HVAC Multimeter 101 (3D)",
        url: "https://youtu.be/fa8NM7JzISM"
      }
    ],
    modules: [
      "Electrical Troubleshooting for HVAC Systems",
      "Multimeter Training"
    ],
    kbArticles: ["Testing Contactors and Capacitors", "Compressor Diagnostics"],
    diagrams: ["Contactor Wiring Diagram", "24V Control Circuit"],
    estimatedTime: "1–2 hours"
  },
  "high head pressure": {
    symptom: "High Head Pressure",
    causes: [
      "Dirty or blocked condenser coil — most common",
      "Condenser fan not running or spinning slowly",
      "Overcharge of refrigerant",
      "Non-condensable gases (air) in the system",
      "Ambient temperature too high (above system design range)"
    ],
    steps: [
      "Record head pressure and compare to PT chart for current ambient temperature.",
      "Inspect condenser coil — clean if fins are clogged with debris or dirt.",
      "Verify condenser fan is running at correct speed — measure amp draw.",
      "Check subcooling: if >15°F, system may be overcharged.",
      "If subcooling is normal but head pressure is high, suspect condenser airflow issue.",
      "Check for non-condensables: isolate system, let pressures stabilize, compare to PT chart."
    ],
    tools: [
      "Digital manifold gauges",
      "Thermometer",
      "Clamp meter",
      "Coil cleaning equipment"
    ],
    parts: [
      "Condenser fan motor (if failed)",
      "Condenser fan blade",
      "Capacitor (condenser fan)",
      "Coil cleaning solution"
    ],
    safety: "Coil cleaning chemicals are corrosive — wear gloves and eye protection. Turn off power before servicing condenser fan.",
    videos: [
      {
        title: "HVAC AC Pressure, Superheat & Subcooling Explained",
        url: "https://youtu.be/5UU2c5e2ork"
      },
      {
        title: "HVAC Refrigerant Pressure Gauges",
        url: "https://youtu.be/eEZAgzkS_sA"
      }
    ],
    modules: ["Digital Gauges & Smart Probes", "Refrigeration Diagnostics"],
    kbArticles: [
      "Reading Refrigerant Pressure Patterns",
      "Condenser Coil Maintenance"
    ],
    diagrams: ["Refrigeration Cycle Diagram", "Pressure-Temperature Chart"],
    estimatedTime: "1–3 hours"
  },
  "frozen coil": {
    symptom: "Frozen Evaporator Coil",
    causes: [
      "Low indoor airflow — dirty filter, blocked vents, or failed blower",
      "Low refrigerant charge causing suction pressure to drop below freezing",
      "Running system in very low ambient temperatures",
      "Dirty evaporator coil restricting airflow",
      "Blower motor failure or reduced speed"
    ],
    steps: [
      "Turn system to Fan Only mode — allow coil to fully defrost before continuing (30–60 min).",
      "Inspect and replace air filter — a clogged filter is the #1 cause of frozen coils.",
      "Check all supply and return vents — ensure none are closed or blocked.",
      "After defrost, turn on cooling and measure suction pressure.",
      "Measure supply and return air temperature delta T (should be 16–22°F).",
      "If pressures are low after defrost and airflow is adequate, suspect low refrigerant charge.",
      "Inspect blower motor operation — verify CFM is adequate."
    ],
    tools: [
      "Digital manifold gauges",
      "Digital thermometer",
      "Clamp meter",
      "Flashlight"
    ],
    parts: [
      "Air filter",
      "Blower motor (if failed)",
      "Blower capacitor",
      "Refrigerant"
    ],
    safety: "Never chip or scrape ice from coil — you can puncture the coil. Allow natural defrost. Ensure drain pan is clear to prevent water damage.",
    videos: [
      {
        title: "HVAC AC Pressure, Superheat & Subcooling Explained",
        url: "https://youtu.be/5UU2c5e2ork"
      },
      {
        title: "HVAC 3D Refrigeration Circuit",
        url: "https://youtu.be/p6GXJdRUz9E"
      }
    ],
    modules: ["Digital Gauges & Smart Probes", "Refrigeration Diagnostics"],
    kbArticles: ["Airflow Diagnostics", "Superheat & Subcooling Explained"],
    diagrams: ["Refrigeration Cycle Diagram", "Superheat & Subcooling Diagram"],
    estimatedTime: "1.5–3 hours (plus defrost wait time)"
  },
  "short cycling": {
    symptom: "Short Cycling",
    causes: [
      "Refrigerant overcharge or undercharge",
      "High pressure switch tripping (dirty condenser or overcharge)",
      "Low pressure switch tripping (low refrigerant or airflow issue)",
      "Thermostat location in direct sunlight or near a heat source",
      "Oversized equipment for the space",
      "Dirty air filter causing evaporator to freeze and trip pressure switch"
    ],
    steps: [
      "Record how long system runs before shutting off.",
      "Check for any active fault codes on the thermostat or control board.",
      "Connect manifold gauges and watch pressures during operation.",
      "Check if high or low pressure switch is tripping — use manifold to monitor.",
      "Inspect filter and coil for airflow restriction.",
      "Verify thermostat location is not causing false temperature readings."
    ],
    tools: ["Digital manifold gauges", "Digital multimeter", "Thermometer"],
    parts: [
      "High pressure switch (if failed)",
      "Low pressure switch (if failed)",
      "Thermostat (if faulty)",
      "Air filter"
    ],
    safety: "Short cycling causes compressor wear and premature failure. Address root cause before leaving — do not simply reset safeties without diagnosing why they tripped.",
    videos: [
      {
        title: "HVAC AC Pressure, Superheat & Subcooling Explained",
        url: "https://youtu.be/5UU2c5e2ork"
      }
    ],
    modules: [
      "Digital Gauges & Smart Probes",
      "Electrical Troubleshooting for HVAC Systems"
    ],
    kbArticles: [
      "Pressure Switch Diagnostics",
      "Refrigeration Cycle Fundamentals"
    ],
    diagrams: ["Refrigeration Cycle Diagram", "24V Control Circuit"],
    estimatedTime: "1–2.5 hours"
  },
  "refrigerant leak": {
    symptom: "Refrigerant Leak",
    causes: [
      "Vibration-eroded service port or Schrader valve",
      "Corrosion at coil joint (formicary corrosion on copper)",
      "Pinhole leak in evaporator or condenser coil",
      "Loose or improperly flared fitting",
      "Cracked line set from physical damage"
    ],
    steps: [
      "Use electronic leak detector to pinpoint leak location — start at service ports, coils, and fittings.",
      "Mark leak location and take photos before recovery.",
      "Recover all refrigerant per EPA 608 requirements before opening the system.",
      "Repair leak: braze or replace component as needed.",
      "Install new filter drier whenever system is opened.",
      "Pressure test with dry nitrogen to verify repair (minimum 150 psi for 15 minutes).",
      "Evacuate system to 500 microns or below, verify with micron gauge.",
      "Recharge with correct refrigerant type and weight per nameplate."
    ],
    tools: [
      "Electronic leak detector",
      "Recovery machine",
      "Nitrogen regulator and tank",
      "Micron gauge",
      "Digital manifold gauges",
      "Torch and brazing equipment"
    ],
    parts: [
      "Filter drier (always replace after opening system)",
      "Refrigerant (correct type per nameplate)",
      "Schrader valve cores",
      "Copper fittings and braze alloy"
    ],
    safety: "NEVER vent refrigerant — EPA 608 violation and environmental hazard. Wear gloves and goggles. Nitrogen pressure testing can be dangerous — use a regulator and never exceed system test pressure.",
    videos: [
      {
        title: "HVAC Refrigerant Recovery (3D)",
        url: "https://youtu.be/fROHlPXw_H0"
      },
      {
        title: "HVAC How to Evacuate AC System",
        url: "https://youtu.be/JsnQeUSuUMU"
      },
      { title: "HVAC Vacuum Procedures", url: "https://youtu.be/TllrD0Mt2LU" }
    ],
    modules: ["EPA 608 Certification", "Digital Gauges & Smart Probes"],
    kbArticles: ["Refrigerant Recovery Requirements", "Leak Detection Methods"],
    diagrams: ["Refrigeration Cycle Diagram", "Pressure-Temperature Chart"],
    estimatedTime: "2–5 hours"
  },
  "no heat heat pump": {
    symptom: "No Heat (Heat Pump)",
    causes: [
      "Reversing valve stuck in cooling position",
      "Defrost board failure preventing heat mode",
      "Low refrigerant charge",
      "Heat strips not energizing (emergency heat)",
      "Outdoor ambient too low for heat pump to operate efficiently"
    ],
    steps: [
      "Verify thermostat is set to heating mode and set point is above room temperature.",
      "Check if reversing valve coil is energized in heat mode (24VAC at coil terminals).",
      "Connect manifold gauges — in heat mode, the outdoor coil is the evaporator.",
      "Check defrost board for fault codes or stuck operation.",
      "Test heat strip operation (if electric backup) — check sequencers and elements.",
      "Verify outdoor ambient is above minimum operating temperature for the unit."
    ],
    tools: [
      "Digital manifold gauges",
      "Multimeter",
      "Clamp meter",
      "Thermometer"
    ],
    parts: [
      "Reversing valve",
      "Defrost board",
      "Defrost thermostat",
      "Heat strip elements"
    ],
    safety: "Heat pump systems can have energized components even when outdoor unit appears off. Use lockout/tagout. Heat strips operate at high voltage — verify power is off before servicing.",
    videos: [
      {
        title: "HVAC AC Pressure, Superheat & Subcooling Explained",
        url: "https://youtu.be/5UU2c5e2ork"
      },
      {
        title: "How to Test HVAC Relays, Contactors, and Transformers",
        url: "https://youtu.be/4ja6GynaxQ0"
      }
    ],
    modules: [
      "Electrical Troubleshooting for HVAC Systems",
      "Digital Gauges & Smart Probes"
    ],
    kbArticles: [
      "Heat Pump Reversing Valve Operation",
      "Defrost System Diagnostics"
    ],
    diagrams: [
      "Heat Pump Reversing Valve Diagram",
      "Refrigeration Cycle Diagram"
    ],
    estimatedTime: "2–4 hours"
  },
  "electrical tripping": {
    symptom: "Circuit Breaker Tripping",
    causes: [
      "Compressor drawing locked rotor amps (LRA) — failing compressor",
      "Grounded compressor winding",
      "Weak or incorrectly sized breaker",
      "Short circuit in wiring to outdoor unit",
      "Failed contactor causing intermittent short"
    ],
    steps: [
      "Before resetting breaker: use multimeter to check for shorts at the load side.",
      "Disconnect compressor leads and test winding resistance — check for ground fault.",
      "Reset breaker and immediately clamp-meter the line — does it trip on startup surge?",
      "Compare compressor amp draw to RLA on nameplate.",
      "Inspect all wiring for chafing, rodent damage, or burnt insulation.",
      "Test contactor contacts for continuity when de-energized — should be open.",
      "If compressor is drawing high amps with good capacitor, try hard start kit before condemning."
    ],
    tools: [
      "Digital multimeter",
      "Clamp meter",
      "Insulation resistance tester (megohmmeter)"
    ],
    parts: [
      "Compressor",
      "Contactor",
      "Hard start kit",
      "Breaker (if undersized)"
    ],
    safety: "Never repeatedly reset a tripping breaker — it indicates a real fault. Repeated resets can cause fires. Meggering a compressor requires isolating all capacitors and controls first.",
    videos: [
      {
        title: "HVAC Multimeter 101 (3D)",
        url: "https://youtu.be/fa8NM7JzISM"
      },
      {
        title: "Basic Electrical for HVAC Residential",
        url: "https://youtu.be/RTJlq9acCSw"
      }
    ],
    modules: [
      "Multimeter Training",
      "HVAC Electrical Fundamentals",
      "Electrical Troubleshooting for HVAC Systems"
    ],
    kbArticles: ["Compressor Electrical Testing", "HVAC Electrical Safety"],
    diagrams: ["Compressor Winding Diagram", "Contactor Wiring Diagram"],
    estimatedTime: "1.5–3 hours"
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
      "Undersized duct system"
    ],
    steps: [
      "Check and replace air filter.",
      "Inspect all supply and return grilles for blockages.",
      "Measure static pressure across air handler.",
      "Check blower motor amps vs. rated FLA.",
      "Inspect evaporator coil for ice buildup.",
      "Check blower capacitor with capacitance meter.",
      "Inspect accessible ductwork for disconnects or collapses."
    ],
    tools: [
      "Manometer/magnehelic",
      "Clamp meter",
      "Capacitance meter",
      "Flashlight"
    ],
    parts: [
      "Air filter",
      "Blower capacitor",
      "Blower motor",
      "Duct tape/mastic"
    ],
    safety: "Disconnect power before accessing blower compartment. Do not bypass safety switches.",
    videos: [
      {
        title: "HVAC Multimeter 101 (3D)",
        url: "https://youtu.be/fa8NM7JzISM"
      },
      {
        title: "HVAC Refrigerant Pressure Gauges",
        url: "https://youtu.be/eEZAgzkS_sA"
      }
    ],
    modules: ["Digital Gauges & Smart Probes", "HVAC Electrical Fundamentals"],
    kbArticles: ["Airflow Fundamentals", "Blower Motor Diagnostics"],
    diagrams: ["Refrigeration Cycle Diagram", "Compressor Winding Diagram"],
    estimatedTime: "45–90 min"
  },
  "thermostat not responding": {
    symptom: "Thermostat Not Responding",
    causes: [
      "Thermostat wiring fault",
      "Blown 24V fuse on control board",
      "Transformer failure",
      "Thermostat batteries dead or thermostat failed",
      "Loose wire at R, C, G, Y, or W terminals",
      "Control board fault"
    ],
    steps: [
      "Check thermostat display — replace batteries if blank.",
      "Verify 24VAC at R and C terminals.",
      "Check low-voltage fuse on air handler/furnace board.",
      "Measure transformer output (24–28VAC expected).",
      "Inspect all thermostat wire terminals for loose connections.",
      "Jumper R to Y and R to G at air handler to test contactor and blower independently.",
      "If unit responds to jumper test, suspect thermostat or wiring."
    ],
    tools: ["Multimeter", "Voltage tester", "Small screwdriver set"],
    parts: ["24V fuse (3A or 5A)", "Control transformer", "Thermostat"],
    safety: "Always verify 240V power is off at breaker before working inside air handler. Low-voltage wiring can still cause board damage if shorted.",
    videos: [
      {
        title: "How to Wire a Thermostat for Beginners",
        url: "https://youtu.be/mIsXWXicB48"
      },
      {
        title: "HVAC Low Voltage Circuit Explained",
        url: "https://youtu.be/5UU2c5e2ork"
      },
      {
        title: "How Power Moves Through An AC System Schematic",
        url: "https://youtu.be/VtC25cV1mU0"
      }
    ],
    modules: [
      "HVAC Electrical Fundamentals",
      "Electrical Troubleshooting for HVAC Systems"
    ],
    kbArticles: ["24V Control Circuit Basics", "Thermostat Wiring Guide"],
    diagrams: ["24V Control Circuit", "Contactor Wiring Diagram"],
    estimatedTime: "30–60 min"
  },
  "low refrigerant": {
    symptom: "Low Refrigerant Charge",
    causes: [
      "Refrigerant leak at service valve, evaporator coil, or line set",
      "Undercharge from install",
      "Schrader valve core leak"
    ],
    steps: [
      "Check suction and head pressure against PT chart for refrigerant type.",
      "Calculate superheat (suction line temp − saturation temp at suction pressure).",
      "Calculate subcooling (sat. temp at head pressure − liquid line temp).",
      "Inspect accessible components for oil stains indicating leak.",
      "Use electronic leak detector at common leak points.",
      "If confirmed low, recover, repair leak, evacuate, recharge to spec."
    ],
    tools: [
      "Manifold gauge set",
      "Electronic leak detector",
      "Thermometer clamps",
      "PT chart"
    ],
    parts: [
      "Refrigerant (per system spec)",
      "Schrader cores",
      "Leak sealant (if applicable)"
    ],
    safety: "Wear safety glasses and gloves when working with refrigerant. Never vent refrigerant — EPA Section 608 violation. Recover refrigerant before opening system.",
    videos: [
      {
        title: "HVAC AC Pressure, Superheat & Subcooling Explained",
        url: "https://youtu.be/5UU2c5e2ork"
      },
      {
        title: "HVAC Refrigerant Pressure Gauges",
        url: "https://youtu.be/eEZAgzkS_sA"
      },
      {
        title: "HVAC Refrigerant Recovery (3D)",
        url: "https://youtu.be/fROHlPXw_H0"
      }
    ],
    modules: ["Digital Gauges & Smart Probes", "EPA 608 Certification"],
    kbArticles: [
      "Refrigerant Recovery Requirements",
      "Superheat & Subcooling Calculations"
    ],
    diagrams: [
      "Refrigeration Cycle Diagram",
      "Pressure-Temperature Chart",
      "Superheat & Subcooling Diagram"
    ],
    estimatedTime: "60–120 min"
  },
  "low charge": {
    symptom: "Low Refrigerant Charge",
    causes: [
      "Refrigerant leak at service valve, evaporator coil, or line set",
      "Undercharge from install",
      "Schrader valve core leak"
    ],
    steps: [
      "Check suction and head pressure against PT chart for refrigerant type.",
      "Calculate superheat and subcooling.",
      "Inspect for oil stains indicating refrigerant leak.",
      "Use electronic leak detector.",
      "If confirmed low, recover, repair leak, evacuate, recharge to spec."
    ],
    tools: [
      "Manifold gauge set",
      "Electronic leak detector",
      "Thermometer clamps",
      "PT chart"
    ],
    parts: ["Refrigerant (per system spec)", "Schrader cores", "Filter drier"],
    safety: "Wear safety glasses and gloves when working with refrigerant. Never vent refrigerant — EPA Section 608 violation.",
    videos: [
      {
        title: "HVAC AC Pressure, Superheat & Subcooling Explained",
        url: "https://youtu.be/5UU2c5e2ork"
      },
      {
        title: "HVAC Refrigerant Recovery (3D)",
        url: "https://youtu.be/fROHlPXw_H0"
      }
    ],
    modules: ["Digital Gauges & Smart Probes", "EPA 608 Certification"],
    kbArticles: [
      "Refrigerant Recovery Requirements",
      "Superheat & Subcooling Calculations"
    ],
    diagrams: ["Refrigeration Cycle Diagram", "Pressure-Temperature Chart"],
    estimatedTime: "60–120 min"
  }
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
  "Refrigerant leak"
];
function lookupResponse(query) {
  const q = query.toLowerCase().trim();
  for (const key of Object.keys(KNOWLEDGE_BASE)) {
    if (q.includes(key)) return KNOWLEDGE_BASE[key];
  }
  const keywords = {
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
    "low refrigerant": "low refrigerant"
  };
  for (const [kw, key] of Object.entries(keywords)) {
    if (q.includes(kw)) return KNOWLEDGE_BASE[key];
  }
  return null;
}
function analyzeMeasurements(vals, refrigerantType) {
  const suction = Number.parseFloat(vals.suctionPressure);
  const head = Number.parseFloat(vals.headPressure);
  const sh = Number.parseFloat(vals.superheat);
  const sc = Number.parseFloat(vals.subcooling);
  const split = Number.parseFloat(vals.tempSplit);
  const hasAny = [suction, head, sh, sc, split].some((v) => !Number.isNaN(v));
  if (!hasAny) return [];
  const ranges = refrigerantType === "R-22" ? {
    suctionLow: 58,
    suctionHigh: 75,
    headLow: 200,
    headHigh: 260,
    shLow: 8,
    shHigh: 18,
    scLow: 8,
    scHigh: 15,
    splitLow: 16,
    splitHigh: 22
  } : {
    suctionLow: 102,
    suctionHigh: 145,
    headLow: 250,
    headHigh: 350,
    shLow: 8,
    shHigh: 18,
    scLow: 8,
    scHigh: 18,
    splitLow: 16,
    splitHigh: 22
  };
  const results = [];
  const lowSuction = !Number.isNaN(suction) && suction < ranges.suctionLow - 7;
  const highSuction = !Number.isNaN(suction) && suction > ranges.suctionHigh + 10;
  const lowHead = !Number.isNaN(head) && head < ranges.headLow - 20;
  const highHead = !Number.isNaN(head) && head > ranges.headHigh + 40;
  const lowSH = !Number.isNaN(sh) && sh < ranges.shLow - 2;
  const highSH = !Number.isNaN(sh) && sh > ranges.shHigh + 7;
  const lowSC = !Number.isNaN(sc) && sc < ranges.scLow - 3;
  const highSC = !Number.isNaN(sc) && sc > ranges.scHigh + 2;
  const lowSplit = !Number.isNaN(split) && split < ranges.splitLow - 4;
  const highSplit = !Number.isNaN(split) && split > ranges.splitHigh + 3;
  if (!Number.isNaN(suction) && suction < 10 && !Number.isNaN(head) && head < 50) {
    results.push({
      issue: "System Not Running / Electrical Control Problem",
      confidence: 70,
      explanation: "Pressures are extremely low (near ambient). The system is not operating. Check electrical controls, contactor, and thermostat before further refrigerant diagnostics.",
      nextStep: "Verify power, thermostat call, contactor operation, and control board before refrigerant diagnostics."
    });
    return results;
  }
  if (lowSuction && highSH && lowSC) {
    results.push({
      issue: "Low Refrigerant Charge",
      confidence: 90,
      explanation: `Low suction (${vals.suctionPressure} psig), high superheat (${vals.superheat}°F), and low subcooling (${vals.subcooling}°F) together are a classic low-charge pattern. The system is starved for refrigerant.`,
      nextStep: "Perform a leak check. If leak confirmed, recover refrigerant, repair, evacuate, and recharge to nameplate weight."
    });
  }
  if (lowSuction && lowSH && !lowSC) {
    results.push({
      issue: "Metering Device Restriction (TXV / EEV)",
      confidence: 85,
      explanation: `Low suction (${vals.suctionPressure} psig) with low superheat (${vals.superheat}°F) and normal/high subcooling suggests a restricted or underfeeding metering device.`,
      nextStep: "Check TXV bulb attachment, sensing bulb orientation, and system superheat at multiple conditions. Consider replacing TXV."
    });
  }
  if (highHead && !lowSuction && highSC) {
    results.push({
      issue: "Dirty Condenser Coil / High Ambient",
      confidence: 80,
      explanation: `High head pressure (${vals.headPressure} psig) with high subcooling (${vals.subcooling}°F) and normal suction indicates condenser heat rejection issues or refrigerant overcharge.`,
      nextStep: "Inspect and clean condenser coil. Check condenser fan operation and ambient temperature. Verify refrigerant charge."
    });
  }
  if (lowSuction && lowSH && !results.some((r) => r.issue.includes("Metering"))) {
    results.push({
      issue: "Indoor Airflow Restriction",
      confidence: 75,
      explanation: "Low suction and low superheat without clear metering device symptoms often indicate restricted indoor airflow — dirty filter, blocked return, or failed blower.",
      nextStep: "Replace air filter, inspect evaporator coil for icing, check blower motor operation and amp draw."
    });
  }
  if (lowSplit && !lowSuction && !highSuction) {
    results.push({
      issue: "Airflow Restriction",
      confidence: 70,
      explanation: `Low temperature split (${vals.tempSplit}°F) with normal pressures suggests reduced indoor airflow. The system is running but not transferring enough heat.`,
      nextStep: "Check air filter, blower speed, return/supply duct static pressure. Ensure all vents are open."
    });
  }
  if (highSuction && highHead && lowSH) {
    results.push({
      issue: "Refrigerant Overcharge",
      confidence: 85,
      explanation: `High suction (${vals.suctionPressure} psig), high head (${vals.headPressure} psig), and low superheat (${vals.superheat}°F) indicate the system is overcharged with refrigerant.`,
      nextStep: "Recover excess refrigerant and recharge by weight. Recheck superheat and subcooling."
    });
  }
  if (highSplit && !lowSuction && !highSuction) {
    results.push({
      issue: "Possible Dirty Evaporator Coil",
      confidence: 65,
      explanation: `High temperature split (${vals.tempSplit}°F) with otherwise normal pressures may indicate a partially blocked evaporator coil limiting capacity.`,
      nextStep: "Inspect evaporator coil for debris or microbial growth. Clean with approved coil cleaner."
    });
  }
  if (lowHead && !lowSuction) {
    results.push({
      issue: "Low Condensing Pressure / Condenser Fan Issue",
      confidence: 70,
      explanation: `Head pressure is lower than expected (${vals.headPressure} psig). This can indicate a condenser fan running too fast, very low ambient temperature, or partial refrigerant loss.`,
      nextStep: "Verify condenser fan motor speed and direction. Check ambient temperature vs system operating range."
    });
  }
  if (results.length === 0) {
    results.push({
      issue: "Readings Within Normal Range",
      confidence: 80,
      explanation: "The entered measurements appear to be within normal operating parameters. If the customer complaint persists, consider non-refrigerant causes (airflow, controls, or zoning).",
      nextStep: "Verify measurements are accurate. Check airflow, thermostat calibration, and building envelope."
    });
  }
  return results;
}
function SafetyWarning({ text }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 rounded-md border border-amber-500/40 bg-amber-500/10 px-4 py-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "mt-0.5 h-4 w-4 shrink-0 text-amber-500" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-amber-600 dark:text-amber-400 mb-0.5", children: "Safety Warning" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-700 dark:text-amber-300 leading-relaxed", children: text })
    ] })
  ] });
}
function ConfidenceBadge({ confidence }) {
  const color = confidence >= 80 ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" : confidence >= 65 ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" : "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: `inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${color}`,
      children: [
        confidence,
        "% confidence"
      ]
    }
  );
}
function ResponseCard({ response }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-primary/20 bg-primary/5 p-4 space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-7 w-7 items-center justify-center rounded-full bg-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-4 w-4 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "Field HVAC Assistant" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          "Diagnosis: ",
          response.symptom
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Badge,
        {
          variant: "outline",
          className: "ml-auto text-xs border-primary/30 text-primary",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-1 h-3 w-3" }),
            " AI Powered"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Probable Causes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: response.causes.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-destructive/15 text-[10px] font-bold text-destructive", children: i + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c })
      ] }, c)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Step-by-Step Diagnostic Checks" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-2", children: response.steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary", children: i + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-relaxed", children: s })
      ] }, s)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "h-3 w-3" }),
          " Recommended Tools"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: response.tools.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary shrink-0" }),
          t
        ] }, t)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-3 w-3" }),
          " Possible Replacement Parts"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: response.parts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" }),
          p
        ] }, p)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SafetyWarning, { text: response.safety }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Estimated repair time:",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: response.estimatedTime })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-muted/30 p-3 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Sources — Internal Resources Prioritized" }),
      response.diagrams && response.diagrams.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-muted-foreground mb-1.5 flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "h-3 w-3" }),
          " Diagrams"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: response.diagrams.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Badge,
          {
            variant: "outline",
            className: "text-xs cursor-pointer hover:bg-muted",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "mr-1 h-3 w-3" }),
              d
            ]
          },
          d
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-muted-foreground mb-1.5 flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-3 w-3" }),
          " Study Modules"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: response.modules.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "mr-1 h-3 w-3" }),
          m
        ] }, m)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-muted-foreground mb-1.5 flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "h-3 w-3" }),
          " Training Videos"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: response.videos.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: v.url,
            target: "_blank",
            rel: "noopener noreferrer",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: "outline",
                className: "text-xs cursor-pointer hover:bg-primary/10",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "mr-1 h-3 w-3" }),
                  v.title.length > 30 ? `${v.title.slice(0, 30)}…` : v.title
                ]
              }
            )
          },
          v.url
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-muted-foreground mb-1.5 flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-3 w-3" }),
          " Knowledge Base"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: response.kbArticles.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: a }, a)) })
      ] })
    ] })
  ] });
}
function ResourcesSidebar({ response }) {
  if (!response) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center h-48 text-center text-muted-foreground",
        "data-ocid": "field-ai.resources_panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-8 w-8 mb-2 opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Ask a question to see related resources" })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "field-ai.resources_panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Internal Resources" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-[10px] py-0", children: "Prioritized" })
    ] }),
    response.diagrams && response.diagrams.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "h-3 w-3" }),
        " Diagrams"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: response.diagrams.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center justify-between rounded-md border border-border bg-card p-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium line-clamp-1", children: d }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "ghost",
                className: "h-6 text-xs px-2 text-primary",
                children: "View"
              }
            )
          ]
        },
        d
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-3 w-3" }),
        " Study Modules"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: response.modules.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center justify-between rounded-md border border-border bg-card p-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium line-clamp-1", children: m }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "ghost",
                className: "h-6 text-xs px-2 text-primary",
                children: "Open"
              }
            )
          ]
        },
        m
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "h-3 w-3" }),
        " Training Videos"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: response.videos.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-md border border-border bg-card p-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium line-clamp-2 mb-1", children: v.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: v.url, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "h-6 text-xs px-2 w-full",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "mr-1 h-3 w-3" }),
                  " Watch"
                ]
              }
            ) })
          ]
        },
        v.url
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-3 w-3" }),
        " Knowledge Base"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: response.kbArticles.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center justify-between rounded-md border border-border bg-card p-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs line-clamp-1", children: a }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "ghost",
                className: "h-6 text-xs px-2 text-primary shrink-0",
                children: "View"
              }
            )
          ]
        },
        a
      )) })
    ] })
  ] });
}
const EMPTY_JOB = {
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
    tempSplit: ""
  },
  finalRepair: "",
  status: "Open",
  diagnosticInfo: ""
};
function FieldAIAssistantTab({
  isGuest: _isGuest
}) {
  const [symptomInput, setSymptomInput] = reactExports.useState("");
  const [isAnalyzing, setIsAnalyzing] = reactExports.useState(false);
  const [sessions, setSessions] = reactExports.useState([]);
  const [activeResponse, setActiveResponse] = reactExports.useState(null);
  const [reviewSession, setReviewSession] = reactExports.useState(
    null
  );
  const [measurePanelOpen, setMeasurePanelOpen] = reactExports.useState(false);
  const [measureVals, setMeasureVals] = reactExports.useState({
    suctionPressure: "",
    headPressure: "",
    superheat: "",
    subcooling: "",
    tempSplit: ""
  });
  const [measureRefrigerant, setMeasureRefrigerant] = reactExports.useState("R-410A");
  const [measureResults, setMeasureResults] = reactExports.useState([]);
  const [isAnalyzingMeasure, setIsAnalyzingMeasure] = reactExports.useState(false);
  const [jobPanelOpen, setJobPanelOpen] = reactExports.useState(false);
  const [jobForm, setJobForm] = reactExports.useState(EMPTY_JOB);
  const [savedJobs, setSavedJobs] = reactExports.useState([]);
  const [expandedJobId, setExpandedJobId] = reactExports.useState(null);
  const [isSavingJob, setIsSavingJob] = reactExports.useState(false);
  const chatBottomRef = reactExports.useRef(null);
  const submitSymptom = (symptom) => {
    const query = symptom.trim();
    if (!query) return;
    setIsAnalyzing(true);
    setSymptomInput("");
    setTimeout(() => {
      const result = lookupResponse(query);
      if (result) {
        setActiveResponse(result);
        const newSession = {
          id: `session-${Date.now()}`,
          symptom: query,
          response: result,
          timestamp: (/* @__PURE__ */ new Date()).toLocaleString(),
          status: "In Progress"
        };
        setSessions((prev) => [newSession, ...prev]);
        ue.success("Diagnosis ready");
      } else {
        ue.error(
          "No matching diagnosis found. Try a more specific symptom like 'AC not cooling' or 'compressor not starting'."
        );
      }
      setIsAnalyzing(false);
      setTimeout(
        () => {
          var _a;
          return (_a = chatBottomRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
        },
        100
      );
    }, 900);
  };
  const handleAnalyzeMeasurements = () => {
    const hasAny = Object.values(measureVals).some((v) => v.trim());
    if (!hasAny) {
      ue.error("Enter at least one measurement value.");
      return;
    }
    setIsAnalyzingMeasure(true);
    setTimeout(() => {
      const results = analyzeMeasurements(measureVals, measureRefrigerant);
      setMeasureResults(results);
      setIsAnalyzingMeasure(false);
      ue.success(
        `${results.length} pattern${results.length !== 1 ? "s" : ""} detected`
      );
    }, 800);
  };
  const handleSaveJob = () => {
    if (!jobForm.customerName.trim()) {
      ue.error("Customer name is required.");
      return;
    }
    setIsSavingJob(true);
    setTimeout(() => {
      const diagSnap = measureResults.length > 0 ? JSON.stringify(measureResults) : "";
      const newJob = {
        id: `job-${Date.now()}`,
        createdAt: (/* @__PURE__ */ new Date()).toLocaleString(),
        ...jobForm,
        diagnosticInfo: diagSnap || jobForm.diagnosticInfo
      };
      setSavedJobs((prev) => [newJob, ...prev]);
      setJobForm(EMPTY_JOB);
      setIsSavingJob(false);
      ue.success(`Job saved for ${newJob.customerName}`);
    }, 600);
  };
  const markResolved = (id) => {
    setSessions(
      (prev) => prev.map((s) => s.id === id ? { ...s, status: "Resolved" } : s)
    );
    ue.success("Marked as resolved");
  };
  const setMeasInput = (k, v) => setMeasureVals((prev) => ({ ...prev, [k]: v }));
  const setJobMeas = (k, v) => setJobForm((f) => ({ ...f, measurements: { ...f.measurements, [k]: v } }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between flex-wrap gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 border border-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-5 w-5 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-bold flex items-center gap-2", children: [
          "Field HVAC Assistant",
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "text-[10px] bg-primary/20 text-primary border-primary/30 font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-1 h-2.5 w-2.5" }),
            " AI Powered"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Real-time HVAC diagnostics, repair guidance, and job documentation" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Collapsible,
      {
        open: measurePanelOpen,
        onOpenChange: setMeasurePanelOpen,
        "data-ocid": "field-hvac.measurement_panel",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-blue-500/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "cursor-pointer hover:bg-muted/30 transition-colors rounded-t-lg pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Thermometer, { className: "h-4 w-4 text-blue-500" }),
              "Measurement Analysis",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "outline",
                  className: "text-xs border-blue-500/30 text-blue-600 dark:text-blue-400",
                  children: "Pattern Detection"
                }
              )
            ] }),
            measurePanelOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4 text-muted-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 text-muted-foreground" })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-0 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Refrigerant Type" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: measureRefrigerant,
                    onValueChange: (v) => setMeasureRefrigerant(v),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "field-hvac.refrigerant_select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "R-410A", children: "R-410A" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "R-22", children: "R-22" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "R-32", children: "R-32" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "R-454B", children: "R-454B" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "R-407C", children: "R-407C" })
                      ] })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Suction Pressure (psig)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "number",
                    value: measureVals.suctionPressure,
                    onChange: (e) => setMeasInput("suctionPressure", e.target.value),
                    placeholder: "e.g. 125",
                    "data-ocid": "field-hvac.suction_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Head Pressure (psig)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "number",
                    value: measureVals.headPressure,
                    onChange: (e) => setMeasInput("headPressure", e.target.value),
                    placeholder: "e.g. 295",
                    "data-ocid": "field-hvac.head_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Superheat (°F)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "number",
                    value: measureVals.superheat,
                    onChange: (e) => setMeasInput("superheat", e.target.value),
                    placeholder: "e.g. 12",
                    "data-ocid": "field-hvac.superheat_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Subcooling (°F)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "number",
                    value: measureVals.subcooling,
                    onChange: (e) => setMeasInput("subcooling", e.target.value),
                    placeholder: "e.g. 10",
                    "data-ocid": "field-hvac.subcooling_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Temp Split (°F)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "number",
                    value: measureVals.tempSplit,
                    onChange: (e) => setMeasInput("tempSplit", e.target.value),
                    placeholder: "e.g. 20",
                    "data-ocid": "field-hvac.tempsplit_input"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: handleAnalyzeMeasurements,
                disabled: isAnalyzingMeasure,
                "data-ocid": "field-hvac.analyze_measurements_button",
                children: isAnalyzingMeasure ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
                  "Analyzing..."
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-2 h-4 w-4" }),
                  "Analyze Measurements"
                ] })
              }
            ),
            measureResults.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Detected Patterns" }),
              measureResults.map((r, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "rounded-lg border border-border p-3 space-y-2",
                  "data-ocid": `field-hvac.measurement_result.${idx + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: r.issue }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ConfidenceBadge, { confidence: r.confidence })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: r.explanation }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-1.5 rounded-md bg-muted/50 px-2.5 py-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3 w-3 text-primary mt-0.5 shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium", children: r.nextStep })
                    ] })
                  ]
                },
                r.issue
              ))
            ] })
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Collapsible,
      {
        open: jobPanelOpen,
        onOpenChange: setJobPanelOpen,
        "data-ocid": "field-hvac.job_panel",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-primary/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "cursor-pointer hover:bg-muted/30 transition-colors rounded-t-lg pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "h-4 w-4 text-primary" }),
              "Create Job & Diagnose",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: "Job Integration" })
            ] }),
            jobPanelOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4 text-muted-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 text-muted-foreground" })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-0 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Customer Name *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: jobForm.customerName,
                    onChange: (e) => setJobForm((f) => ({
                      ...f,
                      customerName: e.target.value
                    })),
                    placeholder: "e.g. John Smith",
                    "data-ocid": "field-hvac.customer_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Address" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: jobForm.address,
                    onChange: (e) => setJobForm((f) => ({ ...f, address: e.target.value })),
                    placeholder: "e.g. 123 Main St, Orlando, FL"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-3 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "System Type" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: jobForm.systemType,
                    onValueChange: (v) => setJobForm((f) => ({ ...f, systemType: v })),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Split System", children: "Split System" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Package Unit", children: "Package Unit" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Heat Pump", children: "Heat Pump" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Mini-Split", children: "Mini-Split" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Other", children: "Other" })
                      ] })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Refrigerant Type" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: jobForm.refrigerantType,
                    onValueChange: (v) => setJobForm((f) => ({ ...f, refrigerantType: v })),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "R-410A", children: "R-410A" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "R-22", children: "R-22" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "R-32", children: "R-32" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "R-454B", children: "R-454B" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "R-407C", children: "R-407C" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Other", children: "Other" })
                      ] })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Status" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: jobForm.status,
                    onValueChange: (v) => setJobForm((f) => ({ ...f, status: v })),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Open", children: "Open" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "In Progress", children: "In Progress" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Completed", children: "Completed" })
                      ] })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Issue / Symptoms" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  value: jobForm.symptoms,
                  onChange: (e) => setJobForm((f) => ({ ...f, symptoms: e.target.value })),
                  placeholder: "e.g. AC not cooling, customer reports warm air, outdoor unit running...",
                  rows: 2
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "flex items-center gap-1.5 text-sm font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Thermometer, { className: "h-3.5 w-3.5" }),
                " Field Measurements"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3 rounded-lg border border-border p-3 bg-muted/20", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Suction Pressure (psig)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      value: jobForm.measurements.suctionPressure,
                      onChange: (e) => setJobMeas("suctionPressure", e.target.value),
                      placeholder: "e.g. 125"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Head Pressure (psig)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      value: jobForm.measurements.headPressure,
                      onChange: (e) => setJobMeas("headPressure", e.target.value),
                      placeholder: "e.g. 295"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Superheat (°F)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      value: jobForm.measurements.superheat,
                      onChange: (e) => setJobMeas("superheat", e.target.value),
                      placeholder: "e.g. 12"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Subcooling (°F)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      value: jobForm.measurements.subcooling,
                      onChange: (e) => setJobMeas("subcooling", e.target.value),
                      placeholder: "e.g. 10"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Temp Split (°F)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      value: jobForm.measurements.tempSplit,
                      onChange: (e) => setJobMeas("tempSplit", e.target.value),
                      placeholder: "e.g. 20"
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Final Repair Performed" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  value: jobForm.finalRepair,
                  onChange: (e) => setJobForm((f) => ({ ...f, finalRepair: e.target.value })),
                  placeholder: "Fill in after completing the repair (e.g. Replaced dual run capacitor 45/5 µF, recharged R-410A...)",
                  rows: 2
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: handleSaveJob,
                disabled: isSavingJob,
                "data-ocid": "field-hvac.save_job_button",
                children: isSavingJob ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
                  "Saving..."
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "mr-2 h-4 w-4" }),
                  "Save Job"
                ] })
              }
            )
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-4 w-4 text-primary" }),
          "Ask the Field HVAC Assistant"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 text-xs text-muted-foreground font-medium", children: "Quick symptoms:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: QUICK_SYMPTOMS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "h-7 text-xs rounded-full hover:bg-primary/10 hover:border-primary/40 hover:text-primary transition-colors",
                onClick: () => submitSymptom(s),
                "data-ocid": `field-ai.symptom_chip.${i + 1}`,
                children: s
              },
              s
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                value: symptomInput,
                onChange: (e) => setSymptomInput(e.target.value),
                onKeyDown: (e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    submitSymptom(symptomInput);
                  }
                },
                placeholder: "Describe the symptom or ask a question (e.g. 'AC not cooling', 'thermostat not responding', 'weak airflow')...",
                rows: 3,
                "data-ocid": "field-ai.symptom_input"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: () => submitSymptom(symptomInput),
                disabled: isAnalyzing || !symptomInput.trim(),
                className: "w-full sm:w-auto",
                "data-ocid": "field-ai.submit_button",
                children: isAnalyzing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
                  "Analyzing..."
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-2 h-4 w-4" }),
                  "Get Diagnosis"
                ] })
              }
            )
          ] }),
          activeResponse && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponseCard, { response: activeResponse }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: chatBottomRef })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm", children: "Related Resources" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-[500px] pr-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResourcesSidebar, { response: activeResponse }) }) })
      ] }) })
    ] }),
    sessions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-ocid": "field-ai.history_panel", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "cursor-pointer hover:bg-muted/30 transition-colors rounded-t-lg pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "h-4 w-4" }),
          "Session History",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: sessions.length })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 text-muted-foreground" })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-0 space-y-2", children: sessions.map((session, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "rounded-lg border border-border p-3 hover:bg-muted/20 transition-colors",
          "data-ocid": `field-ai.session_item.${idx + 1}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium truncate", children: session.symptom }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: session.timestamp })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "outline",
                  className: `text-[10px] ${session.status === "Resolved" ? "border-green-500/40 text-green-600 dark:text-green-400" : "border-yellow-500/40 text-yellow-600 dark:text-yellow-400"}`,
                  children: session.status
                }
              ),
              session.status !== "Resolved" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "ghost",
                  className: "h-6 text-xs px-2",
                  onClick: () => markResolved(session.id),
                  children: "Resolve"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "ghost",
                  className: "h-6 text-xs px-2 text-primary",
                  onClick: () => setReviewSession(session),
                  children: "Review"
                }
              )
            ] })
          ] })
        },
        session.id
      )) }) })
    ] }) }),
    savedJobs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "h-4 w-4 text-primary" }),
        "Job History",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: savedJobs.length })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-2", children: savedJobs.map((job, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-lg border border-border overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "w-full text-left p-3 hover:bg-muted/20 transition-colors",
                onClick: () => setExpandedJobId(expandedJobId === job.id ? null : job.id),
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-0.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: job.customerName }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: job.systemType }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: job.refrigerantType }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: job.status })
                    ] }),
                    job.symptoms && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground line-clamp-1", children: job.symptoms }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: job.createdAt })
                  ] }),
                  expandedJobId === job.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4 text-muted-foreground shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 text-muted-foreground shrink-0" })
                ] })
              }
            ),
            expandedJobId === job.id && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border p-3 space-y-3 bg-muted/10", children: [
              Object.values(job.measurements).some((v) => v) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Thermometer, { className: "h-3 w-3" }),
                  " Measurements Entered"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2", children: [
                  job.measurements.suctionPressure && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Suction:" }),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                      job.measurements.suctionPressure,
                      " psig"
                    ] })
                  ] }),
                  job.measurements.headPressure && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Head:" }),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                      job.measurements.headPressure,
                      " psig"
                    ] })
                  ] }),
                  job.measurements.superheat && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Superheat:" }),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                      job.measurements.superheat,
                      "°F"
                    ] })
                  ] }),
                  job.measurements.subcooling && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Subcooling:" }),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                      job.measurements.subcooling,
                      "°F"
                    ] })
                  ] }),
                  job.measurements.tempSplit && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Temp Split:" }),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                      job.measurements.tempSplit,
                      "°F"
                    ] })
                  ] })
                ] })
              ] }),
              job.diagnosticInfo && (() => {
                let parsed = null;
                try {
                  parsed = JSON.parse(job.diagnosticInfo);
                } catch {
                }
                if (!parsed || !Array.isArray(parsed)) return null;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3" }),
                    " AI Suggested Issues"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: parsed.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "rounded-md border border-border p-2",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 mb-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold", children: r.issue }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            ConfidenceBadge,
                            {
                              confidence: r.confidence
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: r.nextStep })
                      ]
                    },
                    r.issue
                  )) })
                ] });
              })(),
              job.finalRepair && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-green-500/30 bg-green-500/10 p-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-green-700 dark:text-green-400 mb-0.5", children: "Final Repair" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", children: job.finalRepair })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground text-right", children: [
                "Job #",
                idx + 1,
                " · ",
                job.createdAt
              ] })
            ] })
          ]
        },
        job.id
      )) })
    ] }),
    reviewSession && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: !!reviewSession,
        onOpenChange: (o) => !o && setReviewSession(null),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-2xl max-h-[90vh] overflow-y-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-4 w-4 text-primary" }),
            "Session Review: ",
            reviewSession.symptom
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponseCard, { response: reviewSession.response }) })
        ] })
      }
    )
  ] });
}
export {
  FieldAIAssistantTab as default
};
