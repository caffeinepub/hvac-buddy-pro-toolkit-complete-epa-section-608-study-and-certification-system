import { c as createLucideIcon, j as jsxRuntimeExports, r as reactExports, B as Bot, i as Badge, C as Card, a as CardHeader, b as CardTitle, W as Wrench, e as CardContent, L as Label, k as Button, aj as LoaderCircle, w as Dialog, x as DialogContent, y as DialogHeader, z as DialogTitle, p as ue, a2 as Search, m as BookOpen } from "./index-mwwh698k.js";
import { R as Root, a as CollapsibleTrigger$1, b as CollapsibleContent$1 } from "./index-CjpgPwKE.js";
import { S as ScrollArea } from "./scroll-area-CUEGubt_.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-C2WzP03D.js";
import { T as Textarea } from "./textarea-lgEsXHoV.js";
import { S as Sparkles } from "./sparkles-CWy0s3SI.js";
import { a as ChevronUp, C as ChevronDown } from "./index-CWqymlTU.js";
import { C as Clock } from "./clock-BtY1NsIa.js";
import { Z as Zap } from "./zap-BZ2IlPo7.js";
import { H as History } from "./history-DzzfbrXV.js";
import { C as CirclePlay } from "./circle-play-BV2dI25e.js";
import { E as ExternalLink } from "./external-link-DUvK9SJz.js";
import { T as TriangleAlert } from "./triangle-alert-Drtfw0nc.js";
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
      "Inspect air filter and evaporator coil — look for icing or heavy dust buildup.",
      "Check outdoor airflow — condenser fan should be pulling air through top of unit.",
      "If superheat is very high + low suction pressure: suspect low charge or metering restriction.",
      "Perform electronic leak check on service ports, coil joints, and line set fittings.",
      "Check liquid line drier — elevated temperature drop across drier indicates blockage."
    ],
    tools: [
      "Digital manifold gauges",
      "Temperature clamps (suction line measurement)",
      "Electronic leak detector",
      "Micron gauge (if evacuating to repair leak)"
    ],
    parts: [
      "Filter drier (after any leak repair)",
      "TXV / metering device",
      "Refrigerant (per EPA 608 procedures)",
      "Evaporator coil (if leaking)"
    ],
    safety: "Use refrigerant-rated gloves and goggles. Follow EPA 608 recovery procedures before opening any refrigerant circuit. Never add refrigerant without repairing the leak first.",
    videos: [
      {
        title: "HVAC AC Pressure, Superheat & Subcooling Explained",
        url: "https://youtu.be/5UU2c5e2ork"
      },
      {
        title: "HVAC Metering Device Basics",
        url: "https://youtu.be/qV-DIqIxPGk"
      }
    ],
    modules: ["Digital Gauges & Smart Probes", "Refrigeration Diagnostics"],
    kbArticles: [
      "Superheat & Subcooling Explained",
      "TXV Diagnostics",
      "Refrigerant Leak Detection"
    ],
    estimatedTime: "1.5–4 hours"
  },
  "fan running no cooling": {
    symptom: "Fan Running, No Cooling",
    causes: [
      "Compressor not running — contactor or capacitor failure",
      "Failed dual run capacitor (fan runs, compressor won't start)",
      "High pressure lockout — condenser overheated",
      "Low refrigerant charge",
      "Open internal compressor overload"
    ],
    steps: [
      "Confirm indoor blower is running and circulating air.",
      "Go to outdoor unit — listen and feel for compressor vibration.",
      "Check contactor — is it pulled in (closed)? Measure coil voltage (24V expected).",
      "Test run capacitor — failure here is the most common cause of fan-only operation.",
      "Connect manifold gauges to verify pressures.",
      "If contactor is pulled in and capacitor is good, check high/low pressure switches.",
      "Measure compressor amp draw with clamp meter."
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
    safety: "Coil cleaning chemicals are corrosive — wear gloves and eye protection. Turn off power before servicing condenser fan. High head pressure can cause refrigerant circuit failures.",
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
      "Verify thermostat location is not causing false temperature readings.",
      "Compare equipment capacity to Manual J load calculation if possible."
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
      "Copper fittings and braze alloy (if repairing line)"
    ],
    safety: "NEVER vent refrigerant — EPA 608 violation and environmental hazard. Wear gloves and goggles. Nitrogen pressure testing can be dangerous — use a regulator and never exceed system test pressure. Brazing requires fire safety equipment.",
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
    modules: [
      "Digital Gauges & Smart Probes",
      "Refrigerant Handling Procedures"
    ],
    kbArticles: [
      "EPA 608 Recovery Requirements",
      "Refrigerant Leak Detection",
      "Evacuation Best Practices"
    ],
    estimatedTime: "2–5 hours"
  },
  "no heat heat pump": {
    symptom: "No Heat (Heat Pump)",
    causes: [
      "Reversing valve stuck in cooling position",
      "Low refrigerant charge affecting heating performance",
      "Defrost system not functioning (ice buildup on outdoor coil)",
      "Backup/auxiliary heat strips not energizing",
      "Outdoor unit fan not running"
    ],
    steps: [
      "Verify thermostat is in Heat mode and set above room temperature.",
      "Check outdoor unit — is it running? Is there ice buildup?",
      "Listen for reversing valve solenoid click when switching between heat and cool.",
      "Connect gauges — in heating mode, suction side is outdoor coil, head side is indoor.",
      "Check defrost board and defrost thermostat operation.",
      "Test emergency/auxiliary heat strips with clamp meter — verify amp draw.",
      "If reversing valve solenoid coil is failed, it may need replacement."
    ],
    tools: [
      "Digital manifold gauges",
      "Clamp meter",
      "Digital multimeter",
      "Thermometer"
    ],
    parts: [
      "Reversing valve (complete assembly if internally stuck)",
      "Reversing valve solenoid coil",
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
    estimatedTime: "1.5–3 hours"
  }
};
const QUICK_SYMPTOMS = [
  "AC not cooling",
  "Compressor not starting",
  "Low suction pressure",
  "Fan running, no cooling",
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
    "no start": "compressor not starting"
  };
  for (const [kw, key] of Object.entries(keywords)) {
    if (q.includes(kw)) return KNOWLEDGE_BASE[key];
  }
  return null;
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
function ResponseCard({ response }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-primary/20 bg-primary/5 p-4 space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-7 w-7 items-center justify-center rounded-full bg-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-4 w-4 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "Field AI Assistant" }),
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-muted/30 p-3 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Sources — Internal Resources Prioritized" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5", children: [
        response.modules.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "mr-1 h-3 w-3" }),
          m
        ] }, m)),
        response.videos.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx(
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
        ))
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
function FieldAIAssistantTab({
  isGuest
}) {
  const [symptomInput, setSymptomInput] = reactExports.useState("");
  const [isAnalyzing, setIsAnalyzing] = reactExports.useState(false);
  const [sessions, setSessions] = reactExports.useState([]);
  const [activeResponse, setActiveResponse] = reactExports.useState(null);
  const [reviewSession, setReviewSession] = reactExports.useState(
    null
  );
  const [jobPanelOpen, setJobPanelOpen] = reactExports.useState(false);
  const [jobSymptom, setJobSymptom] = reactExports.useState("");
  const [jobSystemType, setJobSystemType] = reactExports.useState("Split System");
  const [jobUnitAge, setJobUnitAge] = reactExports.useState("");
  const [jobAnalysis, setJobAnalysis] = reactExports.useState(null);
  const [isAnalyzingJob, setIsAnalyzingJob] = reactExports.useState(false);
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
  const handleAnalyzeJob = () => {
    if (!jobSymptom.trim()) {
      ue.error("Please enter symptoms or issue description");
      return;
    }
    setIsAnalyzingJob(true);
    setTimeout(() => {
      const result = lookupResponse(jobSymptom);
      if (result) {
        const analysis = {
          symptom: jobSymptom,
          diagnosticPlan: result.steps.slice(0, 5),
          partsList: result.parts.map((p, i) => ({
            item: p,
            qty: i === 0 ? 2 : 1
          })),
          toolList: result.tools,
          estimatedTime: result.estimatedTime
        };
        setJobAnalysis(analysis);
        ue.success("Job analysis complete");
      } else {
        ue.error(
          "Could not analyze these symptoms. Try adding more specific details."
        );
      }
      setIsAnalyzingJob(false);
    }, 1200);
  };
  const saveJobAnalysisToHistory = () => {
    if (!jobAnalysis) return;
    const result = lookupResponse(jobAnalysis.symptom);
    if (result) {
      const newSession = {
        id: `session-${Date.now()}`,
        symptom: jobAnalysis.symptom,
        response: result,
        timestamp: (/* @__PURE__ */ new Date()).toLocaleString(),
        status: "In Progress"
      };
      setSessions((prev) => [newSession, ...prev]);
      ue.success("Saved to job history");
    }
  };
  const markResolved = (id) => {
    setSessions(
      (prev) => prev.map((s) => s.id === id ? { ...s, status: "Resolved" } : s)
    );
    ue.success("Marked as resolved");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between flex-wrap gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 border border-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-5 w-5 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-bold flex items-center gap-2", children: [
          "Field AI Assistant",
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "text-[10px] bg-primary/20 text-primary border-primary/30 font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-1 h-2.5 w-2.5" }),
            " AI Powered"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "HVAC diagnostics, repair guidance, and job analysis" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible, { open: jobPanelOpen, onOpenChange: setJobPanelOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-primary/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "cursor-pointer hover:bg-muted/30 transition-colors rounded-t-lg pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "h-4 w-4 text-primary" }),
          "Analyze a Job",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: "Job Integration" })
        ] }),
        jobPanelOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4 text-muted-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 text-muted-foreground" })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-0 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2 space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Symptoms / Issue Description" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                value: jobSymptom,
                onChange: (e) => setJobSymptom(e.target.value),
                placeholder: "e.g. AC not cooling, compressor humming but not starting, customer reports warm air...",
                rows: 3
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "System Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: jobSystemType,
                onValueChange: setJobSystemType,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Split System", children: "Split System" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Package Unit", children: "Package Unit" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Heat Pump", children: "Heat Pump" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Mini-Split", children: "Mini-Split" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Unit Age (years, optional)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "number",
                value: jobUnitAge,
                onChange: (e) => setJobUnitAge(e.target.value),
                placeholder: "e.g. 8",
                className: "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: handleAnalyzeJob,
            disabled: isAnalyzingJob,
            "data-ocid": "field-ai.analyze_button",
            children: isAnalyzingJob ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
              "Analyzing..."
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-2 h-4 w-4" }),
              "Analyze Job"
            ] })
          }
        ),
        jobAnalysis && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-primary/20 bg-primary/5 p-4 space-y-4 mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-sm flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-4 w-4 text-primary" }),
              " AI Job Analysis"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                onClick: saveJobAnalysisToHistory,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "mr-1.5 h-3.5 w-3.5" }),
                  " Save to History"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Diagnostic Plan" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-1", children: jobAnalysis.diagnosticPlan.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-start gap-2 text-xs",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/20 text-[10px] font-bold text-primary", children: i + 1 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-relaxed", children: step })
                  ]
                },
                step
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Tool List" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-0.5", children: jobAnalysis.toolList.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "li",
                  {
                    className: "flex items-center gap-1.5 text-xs",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-primary" }),
                      t
                    ]
                  },
                  t
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5 text-muted-foreground" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Est. time:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: jobAnalysis.estimatedTime })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Estimated Parts List" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md border border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2 font-medium", children: "Part" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center px-3 py-2 font-medium", children: "Qty" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: jobAnalysis.partsList.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: p.item }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-center", children: p.qty })
              ] }, p.item)) })
            ] }) })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-4 w-4 text-primary" }),
            "Ask the AI Assistant"
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
                  placeholder: "Describe the symptom or ask a question (e.g. 'AC not cooling', 'compressor humming but won't start')...",
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
            ] })
          ] })
        ] }),
        isAnalyzing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-5 w-5 animate-spin text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "AI is analyzing symptoms…" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Checking internal knowledge base and diagnostics" })
          ] })
        ] }),
        activeResponse && !isAnalyzing && /* @__PURE__ */ jsxRuntimeExports.jsx(ResponseCard, { response: activeResponse }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: chatBottomRef })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4 text-primary" }),
          "Related Resources"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-[500px] pr-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResourcesSidebar, { response: activeResponse }) }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-ocid": "field-ai.history_panel", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "h-4 w-4" }),
        "Diagnostic Session History",
        sessions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "ml-1", children: sessions.length })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: sessions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-10 text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "h-8 w-8 mb-2 opacity-30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "No sessions yet — ask a question to get started" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: sessions.map((session, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-lg border border-border bg-card p-3 flex items-start justify-between gap-3",
          "data-ocid": `field-ai.session_item.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap mb-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium truncate", children: session.response.symptom }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: session.status === "Resolved" ? "default" : "secondary",
                    className: "text-[10px] py-0",
                    children: session.status
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: session.timestamp }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5 line-clamp-1 italic", children: [
                '"',
                session.symptom,
                '"'
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5 shrink-0", children: [
              session.status === "In Progress" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "h-7 text-xs",
                  onClick: () => markResolved(session.id),
                  children: "Resolve"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "h-7 text-xs",
                  onClick: () => setReviewSession(session),
                  children: "Review"
                }
              )
            ] })
          ]
        },
        session.id
      )) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: !!reviewSession,
        onOpenChange: (o) => !o && setReviewSession(null),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-2xl max-h-[90vh] overflow-y-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-4 w-4 text-primary" }),
            "Session Review — ",
            reviewSession == null ? void 0 : reviewSession.response.symptom
          ] }) }),
          reviewSession && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5" }),
              reviewSession.timestamp,
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: reviewSession.status === "Resolved" ? "default" : "secondary",
                  className: "text-[10px] py-0",
                  children: reviewSession.status
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ResponseCard, { response: reviewSession.response }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2 pt-2", children: [
              reviewSession.status === "In Progress" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  onClick: () => {
                    markResolved(reviewSession.id);
                    setReviewSession(null);
                  },
                  children: "Mark Resolved"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => setReviewSession(null), children: "Close" })
            ] })
          ] })
        ] })
      }
    ),
    isGuest && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-amber-700 dark:text-amber-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Guest Mode:" }),
      " AI diagnostics are available to preview. Sign in to save session history and access full job integration."
    ] }) })
  ] });
}
export {
  FieldAIAssistantTab as default
};
