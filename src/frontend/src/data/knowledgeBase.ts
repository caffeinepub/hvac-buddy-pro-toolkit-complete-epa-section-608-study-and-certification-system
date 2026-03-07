// HVAC Buddy Knowledge Base
// Original summarized educational articles for the Knowledge Base search system.
// All content is original educational material — not copied from any source.

export type KBCategory =
  | "hvac-fundamentals"
  | "epa-608"
  | "electrical"
  | "refrigeration"
  | "diagnostics"
  | "safety";

export interface KBArticle {
  id: number;
  title: string;
  category: KBCategory;
  source: string;
  summary: string;
  keyPoints: string[];
  tags: string[];
  relatedVideoIds: number[]; // IDs matching curatedVideos in videoLibrary.ts
  studyModuleLink?: string; // route key in StudyTab
  studyModuleLabel?: string;
}

export const knowledgeBaseArticles: KBArticle[] = [
  // ──────────────────────────────────────────────
  // HVAC FUNDAMENTALS
  // ──────────────────────────────────────────────
  {
    id: 1,
    title: "How the Refrigeration Cycle Works",
    category: "hvac-fundamentals",
    source: "HVAC Buddy – Fundamentals",
    summary:
      "The vapor-compression refrigeration cycle moves heat from inside a building to the outside using four main components: compressor, condenser, metering device, and evaporator. Refrigerant absorbs heat in the evaporator as it evaporates, then releases it in the condenser as it condenses back to liquid. Understanding this cycle is the foundation of all HVAC diagnostics.",
    keyPoints: [
      "Compressor raises refrigerant pressure and temperature",
      "Condenser rejects heat to outdoor air",
      "Metering device reduces pressure before evaporator",
      "Evaporator absorbs heat from indoor air",
      "Refrigerant changes state between liquid and vapor",
    ],
    tags: [
      "refrigeration cycle",
      "compressor",
      "condenser",
      "evaporator",
      "metering device",
      "fundamentals",
    ],
    relatedVideoIds: [6, 7, 8],
    studyModuleLink: "core-lessons",
    studyModuleLabel: "Core Lessons Module",
  },
  {
    id: 2,
    title: "Types of Air Conditioning Systems",
    category: "hvac-fundamentals",
    source: "HVAC Buddy – Fundamentals",
    summary:
      "Residential and commercial HVAC systems come in several configurations. Split systems separate the compressor/condenser outdoors from the air handler indoors. Package units combine all components in one cabinet. Mini-splits are ductless and offer zone control. Heat pumps reverse the refrigeration cycle to provide both heating and cooling from one system.",
    keyPoints: [
      "Split systems: most common residential type",
      "Package units: all-in-one rooftop or ground-mounted",
      "Mini-splits: ductless, flexible zoning",
      "Heat pumps: heat and cool in one unit",
      "PTAC units: common in hotels and apartments",
    ],
    tags: [
      "split system",
      "heat pump",
      "mini-split",
      "package unit",
      "ductless",
      "ac types",
    ],
    relatedVideoIds: [9],
    studyModuleLink: "core-lessons",
    studyModuleLabel: "Core Lessons Module",
  },
  {
    id: 3,
    title: "Metering Devices: TXV vs Fixed Orifice",
    category: "hvac-fundamentals",
    source: "HVAC Buddy – Fundamentals",
    summary:
      "The metering device controls refrigerant flow into the evaporator. Thermostatic Expansion Valves (TXV) modulate based on superheat, providing consistent performance across varying conditions. Fixed orifice devices (piston or cap tube) are simpler and less expensive but cannot adjust to load changes. Choosing the correct charging method depends on which metering device is installed.",
    keyPoints: [
      "TXV maintains consistent superheat automatically",
      "Fixed orifice uses subcooling charging method",
      "TXV uses superheat charging method",
      "EEV (electronic expansion valve) used in inverter systems",
      "Stuck TXV causes high or low superheat depending on failure mode",
    ],
    tags: [
      "TXV",
      "metering device",
      "piston",
      "capillary tube",
      "EEV",
      "superheat",
      "subcooling",
    ],
    relatedVideoIds: [7, 11],
    studyModuleLink: "core-lessons",
    studyModuleLabel: "Core Lessons Module",
  },
  {
    id: 4,
    title: "Superheat and Subcooling: Charging Methods",
    category: "hvac-fundamentals",
    source: "HVAC Buddy – Diagnostics",
    summary:
      "Superheat is the temperature of vapor above its saturation point measured at the suction line. Subcooling is how far below saturation temperature the liquid has cooled at the liquid line. These two measurements are the primary tools for verifying refrigerant charge. Fixed orifice systems use superheat; TXV systems rely on subcooling. Normal target ranges vary by refrigerant and system design.",
    keyPoints: [
      "Superheat = suction line temp minus saturation temp at suction pressure",
      "Subcooling = condensing saturation temp minus liquid line temp",
      "Target superheat for R-22: 8-12°F (varies by outdoor temp)",
      "Target subcooling for TXV systems: 10-15°F",
      "Low superheat = overcharge or TXV overfeed",
      "High superheat = undercharge or restriction",
    ],
    tags: [
      "superheat",
      "subcooling",
      "charging",
      "R-410A",
      "R-22",
      "TXV",
      "diagnosis",
    ],
    relatedVideoIds: [11, 14],
    studyModuleLink: "core-lessons",
    studyModuleLabel: "Core Lessons Module",
  },
  {
    id: 5,
    title: "Airflow Fundamentals: CFM and Delta T",
    category: "hvac-fundamentals",
    source: "HVAC Buddy – Fundamentals",
    summary:
      "Proper airflow is critical for efficiency and comfort. The standard design target is 400 CFM per ton of cooling capacity. Delta T (the temperature difference between supply and return air) should be 18–22°F in cooling mode and 40–70°F in heating mode. Insufficient airflow leads to coil freeze-up, poor dehumidification, and reduced efficiency.",
    keyPoints: [
      "400 CFM per ton is the standard design target",
      "Delta T 18-22°F indicates good cooling airflow",
      "Dirty filters are the most common cause of low airflow",
      "Low airflow causes evaporator coil to freeze",
      "Static pressure testing reveals duct system restrictions",
    ],
    tags: [
      "airflow",
      "CFM",
      "delta T",
      "static pressure",
      "duct",
      "evaporator freeze",
    ],
    relatedVideoIds: [6],
    studyModuleLink: "core-lessons",
    studyModuleLabel: "Core Lessons Module",
  },

  // ──────────────────────────────────────────────
  // EPA 608
  // ──────────────────────────────────────────────
  {
    id: 6,
    title: "EPA Section 608: Overview and Certification Types",
    category: "epa-608",
    source: "EPA Section 608 Guidance",
    summary:
      "EPA Section 608 of the Clean Air Act requires technicians who service, maintain, repair, or dispose of refrigerant-containing equipment to be certified. Four certification types exist: Type I covers small appliances, Type II covers high-pressure systems, Type III covers low-pressure chillers, and Universal covers all three. Each requires a passing score of 70% or higher on the relevant exam sections.",
    keyPoints: [
      "Certification required before purchasing refrigerant",
      "Type I: small appliances (5 lbs or less)",
      "Type II: high-pressure (residential/commercial AC)",
      "Type III: low-pressure (chillers, R-123)",
      "Universal = Type I + II + III combined",
      "70% passing score on each section",
    ],
    tags: [
      "EPA 608",
      "certification",
      "Type I",
      "Type II",
      "Type III",
      "Universal",
      "refrigerant",
    ],
    relatedVideoIds: [1, 2, 19],
    studyModuleLink: "epa-608",
    studyModuleLabel: "EPA 608 Study Module",
  },
  {
    id: 7,
    title: "Ozone Depletion and the Clean Air Act",
    category: "epa-608",
    source: "EPA Section 608 Guidance",
    summary:
      "Chlorofluorocarbons (CFCs) and hydrochlorofluorocarbons (HCFCs) release chlorine when they break down in the stratosphere, catalytically destroying ozone molecules. The Montreal Protocol drove a global phaseout of CFCs, and the Clean Air Act gives the EPA authority to regulate refrigerant venting, recovery, and disposal in the U.S. Ozone depletion potential (ODP) and global warming potential (GWP) are the two key environmental metrics for refrigerants.",
    keyPoints: [
      "CFCs have both ODP and high GWP",
      "HCFCs have lower ODP, now being phased out",
      "HFCs have zero ODP but significant GWP",
      "HFOs have near-zero ODP and very low GWP",
      "Venting refrigerant intentionally is illegal and subject to fines",
    ],
    tags: [
      "ozone depletion",
      "ODP",
      "GWP",
      "CFC",
      "HCFC",
      "Montreal Protocol",
      "Clean Air Act",
    ],
    relatedVideoIds: [1, 2],
    studyModuleLink: "epa-608",
    studyModuleLabel: "EPA 608 Study Module",
  },
  {
    id: 8,
    title: "Refrigerant Recovery Requirements by System Type",
    category: "epa-608",
    source: "EPA Section 608 Guidance",
    summary:
      "Before opening any refrigerant circuit, technicians must recover refrigerant to required levels. Recovery requirements differ by system type and size. High-pressure systems must be evacuated to 0–15 inches Hg vacuum depending on system size. Low-pressure systems require 25–29 inches Hg. Small appliances under 5 lbs may use passive recovery. Recovered refrigerant must be stored in approved cylinders and cannot be mixed.",
    keyPoints: [
      "Passive recovery: allowed for small appliances only",
      "Active recovery: required for systems above 5 lbs",
      "Recovery cylinders must be DOT-approved",
      "Never mix refrigerant types in a cylinder",
      "Recovery equipment must meet EPA recovery efficiency standards",
      "System must be tagged after refrigerant removal",
    ],
    tags: [
      "recovery",
      "EPA",
      "evacuation",
      "small appliance",
      "high pressure",
      "low pressure",
      "cylinder",
    ],
    relatedVideoIds: [12, 3, 4, 5],
    studyModuleLink: "epa-608",
    studyModuleLabel: "EPA 608 Study Module",
  },
  {
    id: 9,
    title: "Leak Detection and Repair Requirements",
    category: "epa-608",
    source: "EPA Section 608 Guidance",
    summary:
      "EPA regulations require that refrigerant leaks exceeding trigger rates (10% annually for comfort cooling, 20% for commercial refrigeration) must be repaired within 30 days. Before opening a leaking system, technicians must use an EPA-approved leak detector. Electronic leak detectors, UV dye, and soap bubbles are all accepted methods. Failing to repair known leaks is a violation subject to significant penalties.",
    keyPoints: [
      "10% annual leak rate triggers mandatory repair for comfort cooling",
      "Repair deadline: within 30 days of detection",
      "Approved methods: electronic, UV dye, soap bubbles",
      "Halide torch not acceptable for HFCs",
      "Records must be kept for systems with 50+ lbs of refrigerant",
    ],
    tags: [
      "leak detection",
      "leak repair",
      "EPA",
      "electronic detector",
      "UV dye",
      "compliance",
    ],
    relatedVideoIds: [1, 2, 19],
    studyModuleLink: "epa-608",
    studyModuleLabel: "EPA 608 Study Module",
  },

  // ──────────────────────────────────────────────
  // ELECTRICAL
  // ──────────────────────────────────────────────
  {
    id: 10,
    title: "Ohm's Law and Basic HVAC Electrical Circuits",
    category: "electrical",
    source: "HVAC Buddy – Electrical Fundamentals",
    summary:
      "Ohm's Law states that Voltage (V) = Current (I) × Resistance (R). In HVAC electrical systems, understanding this relationship helps technicians calculate expected current draw, identify resistance faults, and size wire and breakers correctly. Power (watts) is calculated as P = V × I. Series circuits have one path for current; parallel circuits provide multiple paths and are standard in HVAC control wiring.",
    keyPoints: [
      "V = I × R (Ohm's Law)",
      "P = V × I (power formula)",
      "Series: current is the same, voltage divides",
      "Parallel: voltage is the same, current divides",
      "Open circuit = infinite resistance, no current flow",
      "Short circuit = near-zero resistance, dangerously high current",
    ],
    tags: [
      "Ohm's Law",
      "voltage",
      "current",
      "resistance",
      "series",
      "parallel",
      "electrical",
    ],
    relatedVideoIds: [16, 21],
    studyModuleLink: "hvac-electrical-fundamentals",
    studyModuleLabel: "HVAC Electrical Fundamentals",
  },
  {
    id: 11,
    title: "Control Circuits vs Power Circuits in HVAC",
    category: "electrical",
    source: "HVAC Buddy – Electrical Fundamentals",
    summary:
      "HVAC systems use two distinct electrical circuits. The power circuit operates at line voltage (208–240V) and runs the compressor, condenser fan, and blower motors. The control circuit runs at 24V AC from a step-down transformer and carries signals from the thermostat to contactors, relays, and safety switches. Diagnosing which circuit has the fault is the first step in any electrical troubleshooting call.",
    keyPoints: [
      "Power circuit: 208–240V, runs motors and compressors",
      "Control circuit: 24V AC from step-down transformer",
      "Thermostat wires are part of the 24V control circuit",
      "Contactor coil energized by 24V control signal",
      "Safety switches (high pressure, low pressure, freeze stat) open the control circuit",
    ],
    tags: [
      "control circuit",
      "power circuit",
      "24V",
      "transformer",
      "contactor",
      "thermostat",
      "electrical",
    ],
    relatedVideoIds: [16, 17, 18, 21],
    studyModuleLink: "hvac-electrical-fundamentals",
    studyModuleLabel: "HVAC Electrical Fundamentals",
  },
  {
    id: 12,
    title: "Using a Multimeter for HVAC Diagnostics",
    category: "electrical",
    source: "HVAC Buddy – Multimeter Training",
    summary:
      "A digital multimeter is an essential HVAC diagnostic tool. Voltage (VAC/VDC) is measured with power ON across two points. Resistance (Ohms) and continuity are measured with power OFF and the component isolated. Amperage is measured with a clamp meter around a single conductor with power ON. Matching the meter function to the measurement task prevents damage and ensures accurate readings.",
    keyPoints: [
      "Voltage: power ON, probes across component",
      "Resistance/Continuity: power OFF, component isolated",
      "Amperage: clamp around ONE conductor only",
      "OL on resistance = open circuit (wire or winding broken)",
      "Capacitance: power OFF, capacitor discharged first",
      "Always verify meter leads are in correct ports",
    ],
    tags: [
      "multimeter",
      "voltage",
      "resistance",
      "continuity",
      "amperage",
      "clamp meter",
      "diagnostics",
    ],
    relatedVideoIds: [13, 17],
    studyModuleLink: "multimeter-training",
    studyModuleLabel: "Multimeter Training Module",
  },
  {
    id: 13,
    title: "Testing Contactors, Relays, and Transformers",
    category: "electrical",
    source: "HVAC Buddy – Multimeter Training",
    summary:
      "Contactors and relays switch high-voltage loads on and off using a low-voltage coil. A failing contactor may show pitted contacts (high resistance across contacts when closed) or an open coil (OL on resistance reading). Transformers step line voltage down to 24V; test by measuring primary voltage input and secondary voltage output. A fuse on the secondary side protects against short circuits in the control circuit.",
    keyPoints: [
      "Contactor coil resistance: typically 8–20 ohms",
      "Pitted contacts cause voltage drop under load",
      "Test contacts: measure resistance across them — should read near 0 when closed",
      "Transformer primary: 208–240V, secondary: 24–28V",
      "24V fuse blowing indicates a short in the control wiring",
    ],
    tags: [
      "contactor",
      "relay",
      "transformer",
      "multimeter",
      "coil resistance",
      "contacts",
      "24V",
    ],
    relatedVideoIds: [17, 13, 21],
    studyModuleLink: "multimeter-training",
    studyModuleLabel: "Multimeter Training Module",
  },

  // ──────────────────────────────────────────────
  // REFRIGERATION
  // ──────────────────────────────────────────────
  {
    id: 14,
    title: "Refrigerant Properties and Classification",
    category: "refrigeration",
    source: "EPA Section 608 Guidance",
    summary:
      "Refrigerants are classified by ASHRAE into safety groups based on toxicity (A = low, B = higher) and flammability (1 = none, 2L = mildly flammable, 2 = flammable, 3 = highly flammable). Common HVAC refrigerants include R-410A (A1), R-22 (A1), R-32 (A2L), and R-454B (A2L). Understanding classification guides safe handling, leak response, and equipment compatibility.",
    keyPoints: [
      "A1 = lowest hazard (R-22, R-410A, R-134a)",
      "A2L = mildly flammable (R-32, R-454B, R-1234yf)",
      "A2 = flammable, A3 = highly flammable",
      "Never mix refrigerant types",
      "A2L refrigerants require special handling precautions",
      "ODP zero for all HFCs and HFOs",
    ],
    tags: [
      "refrigerant",
      "ASHRAE classification",
      "A2L",
      "R-410A",
      "R-22",
      "R-32",
      "safety group",
      "flammability",
    ],
    relatedVideoIds: [12, 8],
    studyModuleLink: "epa-608",
    studyModuleLabel: "EPA 608 Study Module",
  },
  {
    id: 15,
    title: "Evacuation Procedures and Micron Gauge Use",
    category: "refrigeration",
    source: "HVAC Buddy – Digital Gauges & Smart Probes",
    summary:
      "Before charging a system, technicians must evacuate it to remove air and moisture. A micron gauge measures vacuum in microns of mercury (absolute). The target vacuum level is 500 microns or lower. After isolating the vacuum pump, the system should hold below 1000 microns for at least 10 minutes to pass a decay test. Using oversized hoses and a quality vacuum pump improves evacuation speed.",
    keyPoints: [
      "500 microns or lower is standard target",
      "Decay test: isolate pump, recheck after 10 minutes",
      "Rising microns after isolation = system still has moisture or a leak",
      "Never use manifold gauge hoses for deep vacuum — use dedicated hoses",
      "Change vacuum pump oil frequently for best performance",
    ],
    tags: [
      "evacuation",
      "micron gauge",
      "vacuum",
      "decay test",
      "moisture",
      "refrigerant charge",
    ],
    relatedVideoIds: [10, 15],
    studyModuleLink: "digital-gauges-probes",
    studyModuleLabel: "Digital Gauges & Smart Probes",
  },
  {
    id: 16,
    title: "Refrigerant Lines: Sizing and Best Practices",
    category: "refrigeration",
    source: "Manufacturer Technical Education – Carrier / Trane",
    summary:
      "Refrigerant line sets consist of a larger suction line (insulated) and a smaller liquid line. Suction line sizing is critical — too large causes low velocity and poor oil return; too small creates excessive pressure drop. Manufacturer specs provide maximum line lengths and elevation changes. Long line sets require additional refrigerant charge. All field-installed lines must be properly supported and protected from abrasion.",
    keyPoints: [
      "Suction line must be insulated to prevent heat gain",
      "Liquid line is typically smaller diameter",
      "Max line length and elevation per manufacturer spec",
      "Long lines require additional refrigerant charge per foot",
      "Oil traps required when suction line rises vertically",
    ],
    tags: [
      "line set",
      "suction line",
      "liquid line",
      "line sizing",
      "oil return",
      "installation",
    ],
    relatedVideoIds: [8, 6],
    studyModuleLink: "core-lessons",
    studyModuleLabel: "Core Lessons Module",
  },

  // ──────────────────────────────────────────────
  // DIAGNOSTICS
  // ──────────────────────────────────────────────
  {
    id: 17,
    title: "Pattern-Based AC Diagnostics: Reading Pressures",
    category: "diagnostics",
    source: "HVAC Buddy – Diagnostics",
    summary:
      "Suction and discharge pressures reveal system condition when interpreted together. Low suction + low discharge typically indicates undercharge or low airflow. High suction + high discharge points to overcharge or dirty condenser. Normal suction with high discharge suggests a dirty condenser coil or a refrigerant overcharge. Always compare readings against the pressure-temperature relationship of the specific refrigerant in use.",
    keyPoints: [
      "Low suction + low discharge = undercharge or low airflow",
      "High suction + high discharge = overcharge",
      "High discharge only = dirty condenser or overcharge",
      "Low suction only = restriction or low airflow",
      "Use PT chart for the specific refrigerant in the system",
    ],
    tags: [
      "pressures",
      "suction",
      "discharge",
      "head pressure",
      "undercharge",
      "overcharge",
      "diagnostics",
    ],
    relatedVideoIds: [11, 14],
    studyModuleLink: "core-lessons",
    studyModuleLabel: "Core Lessons Module",
  },
  {
    id: 18,
    title: "Compressor Diagnostics and Testing",
    category: "diagnostics",
    source: "HVAC Buddy – Diagnostics",
    summary:
      "The compressor is the heart of the refrigeration system. High amp draw above nameplate RLA indicates mechanical wear, tight bearings, or voltage problems. Low amp draw with poor cooling may mean worn valves. Winding resistance testing with the power OFF can reveal open or shorted windings. A properly functioning compressor should have balanced winding resistance across all terminals (C, S, R).",
    keyPoints: [
      "Measure winding resistance: C-S, C-R, S-R",
      "S-R = C-S + C-R approximately (check balance)",
      "OL reading on any winding = open compressor",
      "0 ohms between any terminal and ground = grounded compressor",
      "High amps + poor cooling = worn valves",
    ],
    tags: [
      "compressor",
      "winding resistance",
      "RLA",
      "amp draw",
      "open compressor",
      "grounded",
      "diagnostics",
    ],
    relatedVideoIds: [13, 14],
    studyModuleLink: "core-lessons",
    studyModuleLabel: "Core Lessons Module",
  },
  {
    id: 19,
    title: "Manifold Gauge Reading and Interpretation",
    category: "diagnostics",
    source: "HVAC Buddy – Digital Gauges & Smart Probes",
    summary:
      "Digital manifold gauges display suction pressure, head pressure, superheat, and subcooling simultaneously when connected to the system and temperature probes. Read suction pressure on the low-side (blue) port and discharge pressure on the high-side (red) port. Many gauges include built-in PT charts — select the refrigerant type before reading. Always connect and disconnect with the system off or using ball-valve manifolds to avoid refrigerant release.",
    keyPoints: [
      "Blue = low side (suction), Red = high side (discharge)",
      "Set refrigerant type on digital gauges before use",
      "Superheat and subcooling calculated automatically with temp probes",
      "Gauge isolation valves prevent refrigerant release on disconnect",
      "Compare readings to PT chart for refrigerant in use",
    ],
    tags: [
      "manifold gauge",
      "digital gauge",
      "suction",
      "discharge",
      "superheat",
      "subcooling",
      "PT chart",
    ],
    relatedVideoIds: [14, 11],
    studyModuleLink: "digital-gauges-probes",
    studyModuleLabel: "Digital Gauges & Smart Probes",
  },
  {
    id: 20,
    title: "Troubleshooting a System That Won't Cool",
    category: "diagnostics",
    source: "HVAC Buddy – Troubleshooting Guides",
    summary:
      "When an AC system runs but fails to cool, work through the diagnostic sequence: verify thermostat settings and filter condition, check outdoor unit operation, measure supply and return temperatures, then measure pressures and superheat. The most common causes are low refrigerant charge, dirty condenser coil, restricted airflow, or failed metering device. Safety switches (high pressure, low pressure, freeze stat) may be tripping to protect the system.",
    keyPoints: [
      "Check thermostat and filter before touching refrigerant",
      "Measure Delta T — below 15°F indicates a problem",
      "Condenser coil should be warm, not scalding (overcharge) or cool (undercharge)",
      "Frozen evaporator = low airflow or low charge",
      "Safety switch trip = underlying problem needs diagnosis",
    ],
    tags: [
      "not cooling",
      "troubleshooting",
      "delta T",
      "frozen coil",
      "safety switch",
      "diagnosis",
    ],
    relatedVideoIds: [11, 14, 10],
    studyModuleLink: "core-lessons",
    studyModuleLabel: "Core Lessons Module",
  },

  // ──────────────────────────────────────────────
  // SAFETY
  // ──────────────────────────────────────────────
  {
    id: 21,
    title: "Refrigerant Safety and Personal Protective Equipment",
    category: "safety",
    source: "EPA Section 608 Guidance",
    summary:
      "All refrigerants require careful handling to prevent injury. Even non-toxic A1 refrigerants can cause frostbite on skin contact and displace oxygen in confined spaces. Always wear safety glasses when connecting or disconnecting hoses. Avoid inhaling vapors — work in ventilated areas. A2L refrigerants require additional precautions including ignition source control. Never heat refrigerant cylinders — they can explode.",
    keyPoints: [
      "Safety glasses required when handling refrigerant",
      "Gloves recommended — refrigerant liquid causes frostbite",
      "Never heat a refrigerant cylinder",
      "A2L refrigerants: eliminate ignition sources in work area",
      "R-123 (Type III): higher toxicity — use in ventilated areas only",
      "Oxygen displacement risk in confined spaces",
    ],
    tags: [
      "safety",
      "PPE",
      "refrigerant",
      "A2L",
      "frostbite",
      "ventilation",
      "cylinder",
    ],
    relatedVideoIds: [12, 1, 2],
    studyModuleLink: "epa-608",
    studyModuleLabel: "EPA 608 Study Module",
  },
  {
    id: 22,
    title: "Electrical Safety: Lockout/Tagout and PPE",
    category: "safety",
    source: "HVAC Buddy – Electrical Fundamentals",
    summary:
      "Electrical safety begins with de-energizing equipment before service. Lockout/Tagout (LOTO) procedures require physically locking the disconnect in the off position and tagging it so others know not to re-energize. Always verify zero voltage with a meter before touching wires. Wear insulated gloves when working near live conductors. Capacitors store lethal voltage even after power is off — discharge them before handling.",
    keyPoints: [
      "Lockout/tagout before opening any panel or electrical component",
      "Verify zero voltage with a live meter — never assume power is off",
      "Capacitors hold charge after power removal — discharge first",
      "Use insulated tools rated for the voltage level",
      "Arc flash risk exists at higher voltages — use rated PPE",
    ],
    tags: [
      "electrical safety",
      "lockout tagout",
      "LOTO",
      "capacitor discharge",
      "PPE",
      "arc flash",
    ],
    relatedVideoIds: [16, 17, 21],
    studyModuleLink: "hvac-electrical-fundamentals",
    studyModuleLabel: "HVAC Electrical Fundamentals",
  },
  {
    id: 23,
    title: "Safe Refrigerant Cylinder Handling and Storage",
    category: "safety",
    source: "EPA Section 608 Guidance",
    summary:
      "Refrigerant cylinders must be stored upright, in cool well-ventilated areas, away from heat sources and direct sunlight. Recovery cylinders must not be filled beyond 80% of their water capacity. DOT regulations govern cylinder transport — cylinders must be secured upright and protected from damage. Cylinders must be color-coded by refrigerant type and labeled with contents, hazard class, and owner information.",
    keyPoints: [
      "Store cylinders upright in ventilated areas",
      "Do not fill recovery cylinders above 80% capacity",
      "Never heat cylinders to increase pressure",
      "Color coding: R-22 = light green, R-410A = rose/pink",
      "DOT cylinders required for transport",
      "Label all recovery cylinders with refrigerant type",
    ],
    tags: [
      "cylinder",
      "storage",
      "DOT",
      "recovery",
      "color code",
      "refrigerant",
      "safety",
    ],
    relatedVideoIds: [12],
    studyModuleLink: "epa-608",
    studyModuleLabel: "EPA 608 Study Module",
  },
];

export const KB_CATEGORIES: { value: KBCategory | "all"; label: string }[] = [
  { value: "all", label: "All Topics" },
  { value: "hvac-fundamentals", label: "HVAC Fundamentals" },
  { value: "epa-608", label: "EPA 608" },
  { value: "electrical", label: "Electrical" },
  { value: "refrigeration", label: "Refrigeration" },
  { value: "diagnostics", label: "Diagnostics" },
  { value: "safety", label: "Safety" },
];

export function searchKnowledgeBase(
  query: string,
  category: KBCategory | "all",
): KBArticle[] {
  const q = query.toLowerCase().trim();

  return knowledgeBaseArticles.filter((article) => {
    const matchesCategory = category === "all" || article.category === category;

    if (!matchesCategory) return false;

    if (!q) return true;

    return (
      article.title.toLowerCase().includes(q) ||
      article.summary.toLowerCase().includes(q) ||
      article.tags.some((t) => t.toLowerCase().includes(q)) ||
      article.keyPoints.some((kp) => kp.toLowerCase().includes(q))
    );
  });
}
