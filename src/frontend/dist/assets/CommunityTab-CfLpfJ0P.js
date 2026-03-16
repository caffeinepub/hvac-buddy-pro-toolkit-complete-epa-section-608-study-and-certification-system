import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, a2 as Search, m as BookOpen, as as Video, at as CircleAlert, au as curatedVideos, av as useStartHelpSession, aw as useGetHelpSession, ax as useAddHelpMessage, ay as useClearHelpSession, k as Button, C as Card, a as CardHeader, b as CardTitle, B as Bot, d as CardDescription, e as CardContent, A as Alert, g as AlertDescription, S as Separator, aj as LoaderCircle, az as User, I as Input, aA as MessageType, p as ue, M as MessageCircle, i as Badge, aB as MessageSender, aC as ResourceType, q as Calculator, aD as ChatSessionStatus, aE as MeasurementType, aF as MeasurementSource, T as Tabs, V as VideoCategory, s as TabsList, t as TabsTrigger, v as TabsContent, aG as isPlaylist, aH as getEmbedUrl, W as Wrench, aI as MapPin } from "./index-mwwh698k.js";
import { R as RelatedVideos, a as RotateCcw, L as ListVideo } from "./RelatedVideos-Bhwsaet7.js";
import { A as ArrowLeft, T as ThermometerSun } from "./thermometer-sun-eRXD6PVY.js";
import { Z as Zap } from "./zap-BZ2IlPo7.js";
import { G as Globe } from "./globe-iyvJjwVZ.js";
import { a as ChevronUp, C as ChevronDown } from "./index-CWqymlTU.js";
import { E as ExternalLink } from "./external-link-DUvK9SJz.js";
import { S as ScrollArea } from "./scroll-area-CUEGubt_.js";
import { S as Sparkles } from "./sparkles-CWy0s3SI.js";
import { T as Textarea } from "./textarea-lgEsXHoV.js";
import { T as TriangleAlert } from "./triangle-alert-Drtfw0nc.js";
import { D as Droplets, G as Gauge, W as Wind } from "./wind-H2NHC-Ys.js";
import { D as Download } from "./download-D0jIdtQt.js";
import { M as Mic } from "./mic-BDgAUJEZ.js";
import { C as CirclePlay } from "./circle-play-BV2dI25e.js";
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
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
const externalResources = [
  // ── EPA Section 608 Guidance ──────────────────────────────────────────
  {
    id: 101,
    title: "EPA Section 608: Overview of Refrigerant Recovery Requirements",
    source: "EPA Section 608 Guidance",
    tier: "epa",
    url: "https://www.epa.gov/section608",
    summary: "EPA Section 608 regulations require technicians to recover refrigerants before opening or disposing of appliances. Recovery levels depend on the type of equipment and the recovery unit's manufacture date. The rules prevent venting of ozone-depleting and high-GWP refrigerants into the atmosphere.",
    keyPoints: [
      "Recovery required before opening any system containing refrigerant",
      "Recovery levels differ for systems below and above 200 lbs",
      "Technicians must be certified by an EPA-approved program",
      "Venting CFCs, HCFCs, and HFCs is prohibited",
      "Recovery equipment must be tested and certified per ARI 740"
    ],
    tags: [
      "epa",
      "section 608",
      "recovery",
      "refrigerant",
      "certification",
      "regulations",
      "venting"
    ]
  },
  {
    id: 102,
    title: "EPA Section 608: Technician Certification Types Explained",
    source: "EPA Section 608 Guidance",
    tier: "epa",
    url: "https://www.epa.gov/section608/technician-certification-refrigerant-handling",
    summary: "There are four EPA 608 certification types: Type I for small appliances (sealed hermetic systems with 5 lbs or less), Type II for high-pressure systems, Type III for low-pressure systems, and Universal which covers all three. Passing each section requires knowledge of refrigerant handling, safety, and environmental regulations.",
    keyPoints: [
      "Type I: small appliances under 5 lbs refrigerant",
      "Type II: high-pressure systems like R-410A and R-22 AC units",
      "Type III: low-pressure chillers using R-11, R-123",
      "Universal: all three types combined",
      "Certification is required by law to purchase regulated refrigerants"
    ],
    tags: [
      "certification",
      "type I",
      "type II",
      "type III",
      "universal",
      "epa 608",
      "technician"
    ]
  },
  {
    id: 103,
    title: "EPA Section 608: Leak Inspection and Repair Requirements",
    source: "EPA Section 608 Guidance",
    tier: "epa",
    url: "https://www.epa.gov/section608/leak-repair-requirements",
    summary: "Owners of equipment with more than 50 lbs of refrigerant must repair leaks within 30 days of detection. Annual leak rates above defined thresholds trigger repair obligations. Leak inspections must be documented. Retrofit or retirement of the system may be required if repairs are not feasible.",
    keyPoints: [
      "Systems over 50 lbs: leak repair within 30 days",
      "Commercial and industrial systems have annual leak rate thresholds",
      "Leak inspections must be recorded",
      "Technicians must use approved leak detection methods",
      "Electronic, UV dye, and bubble detection are common methods"
    ],
    tags: [
      "leak",
      "leak detection",
      "repair",
      "inspection",
      "epa",
      "section 608",
      "compliance"
    ]
  },
  {
    id: 104,
    title: "EPA Section 608: Substitute Refrigerants and SNAP Program",
    source: "EPA Section 608 Guidance",
    tier: "epa",
    url: "https://www.epa.gov/snap",
    summary: "The EPA's SNAP (Significant New Alternatives Policy) program evaluates and lists acceptable refrigerant substitutes as alternatives to ozone-depleting substances. HFOs and low-GWP blends like R-454B and R-32 are among the newer alternatives being adopted as the industry transitions away from R-410A.",
    keyPoints: [
      "SNAP program approves and lists acceptable refrigerant alternatives",
      "R-410A phase-down is underway per AIM Act",
      "HFOs have very low GWP but some are A2L (mildly flammable)",
      "A2L refrigerants require updated safety practices",
      "Always verify SNAP approval before using a substitute"
    ],
    tags: [
      "SNAP",
      "substitute",
      "HFO",
      "A2L",
      "R-454B",
      "R-32",
      "refrigerant",
      "GWP",
      "epa",
      "phase-down"
    ]
  },
  {
    id: 105,
    title: "EPA Section 608: Recordkeeping and Reporting",
    source: "EPA Section 608 Guidance",
    tier: "epa",
    url: "https://www.epa.gov/section608",
    summary: "Technicians and equipment owners must maintain records of refrigerant purchases, recovery quantities, and leak repair activities. Records must be kept for at least three years. Distributors are required to verify technician certification before selling regulated refrigerants in containers larger than 20 lbs.",
    keyPoints: [
      "Records must be kept for a minimum of 3 years",
      "Document all refrigerant added to systems over 50 lbs",
      "Recovery cylinder logs must include refrigerant type and quantity",
      "Distributors verify certification before selling regulated refrigerants",
      "Improper recordkeeping can result in fines"
    ],
    tags: [
      "recordkeeping",
      "reporting",
      "compliance",
      "epa",
      "section 608",
      "documentation"
    ]
  },
  // ── ACHR News – Technical Articles (summarized) ───────────────────────
  {
    id: 201,
    title: "Understanding Superheat and Subcooling in HVAC Systems",
    source: "ACHR News",
    tier: "news",
    url: "https://www.achrnews.com",
    summary: "Superheat is the temperature rise of refrigerant vapor above its saturation point at the evaporator outlet. Subcooling is the temperature drop of liquid refrigerant below saturation at the condenser outlet. Both values are critical diagnostic tools — abnormal readings indicate low charge, overcharge, metering device problems, or airflow issues.",
    keyPoints: [
      "Target superheat: typically 8–12°F for fixed metering, 10–18°F for TXV",
      "Target subcooling: typically 10–18°F for most systems",
      "Low superheat = overcharge or TXV overfeed",
      "High superheat = low charge or TXV restriction",
      "Measure at service ports with gauges and temp clamp"
    ],
    tags: [
      "superheat",
      "subcooling",
      "charging",
      "diagnostics",
      "TXV",
      "metering",
      "pressure"
    ]
  },
  {
    id: 202,
    title: "Diagnosing Common Compressor Failures in the Field",
    source: "ACHR News",
    tier: "news",
    url: "https://www.achrnews.com",
    summary: "Compressor failures account for a significant portion of HVAC service calls. Common causes include liquid slugging, loss of lubrication, overheating, electrical failure, and contamination. Techs should check winding resistance, supply voltage, amp draw, and discharge temperature before condemning a compressor.",
    keyPoints: [
      "Check winding resistance: C-R, C-S, R-S should add up",
      "Liquid slugging from refrigerant migration causes mechanical failure",
      "High compression ratios increase heat and wear",
      "Overcharge or low airflow leads to high head pressure and burnout",
      "Check amp draw against nameplate RLA before replacement"
    ],
    tags: [
      "compressor",
      "failure",
      "winding",
      "diagnosis",
      "amp draw",
      "troubleshooting",
      "burnout"
    ]
  },
  {
    id: 203,
    title: "Best Practices for Refrigerant Recovery and Reclaim",
    source: "ACHR News",
    tier: "news",
    url: "https://www.achrnews.com",
    summary: "Proper refrigerant recovery protects the environment and is required by law. Use dedicated recovery equipment for each refrigerant type to prevent cross-contamination. Monitor recovery cylinder weight to avoid overfilling. Reclaim refrigerant to ARI 700 standards before reusing in a different owner's system.",
    keyPoints: [
      "Never mix refrigerant types in a recovery cylinder",
      "Recovery cylinders: max fill is 80% of water capacity",
      "Use a scale to track cylinder weight during recovery",
      "Refrigerant contaminated with oil may need reclaim",
      "Reclaiming is required when transferring to another owner's system"
    ],
    tags: [
      "recovery",
      "reclaim",
      "refrigerant",
      "cylinder",
      "contamination",
      "epa",
      "section 608"
    ]
  },
  {
    id: 204,
    title: "Airflow Diagnostics: Measuring and Correcting CFM Issues",
    source: "ACHR News",
    tier: "news",
    url: "https://www.achrnews.com",
    summary: "Proper airflow (typically 350–400 CFM per ton) is essential for efficient system operation. Low airflow causes high superheat, coil icing, and poor dehumidification. Techs can estimate airflow using the temperature split method (target 18–22°F delta T) or measure directly with a flow hood or anemometer.",
    keyPoints: [
      "Target 350–400 CFM per ton of capacity",
      "Dirty filters and coils reduce airflow significantly",
      "Use delta-T method: 18–22°F between supply and return",
      "Blocked registers and duct leaks reduce system efficiency",
      "Static pressure testing identifies duct restrictions"
    ],
    tags: [
      "airflow",
      "CFM",
      "delta T",
      "duct",
      "static pressure",
      "diagnostics",
      "blower"
    ]
  },
  {
    id: 205,
    title: "A2L Refrigerants: Safety Practices for Technicians",
    source: "ACHR News",
    tier: "news",
    url: "https://www.achrnews.com",
    summary: "A2L refrigerants like R-32, R-454B, and R-466A are mildly flammable and are replacing R-410A in new systems. Technicians must follow updated safety protocols including proper ventilation, no open flames near refrigerant, and using listed flammable-rated recovery equipment. Training on A2L handling is now a key industry requirement.",
    keyPoints: [
      "A2L = lower flammability limit, mildly flammable class",
      "Requires flammable-rated recovery and vacuum equipment",
      "Good ventilation reduces ignition risk during service",
      "No open flames near A2L refrigerants",
      "New equipment will use A2L as R-410A is phased down"
    ],
    tags: [
      "A2L",
      "R-454B",
      "R-32",
      "flammable",
      "refrigerant",
      "safety",
      "phase-down"
    ]
  },
  // ── Manufacturer Technical Education ─────────────────────────────────
  {
    id: 301,
    title: "Trane: Understanding Variable Speed Technology in HVAC",
    source: "Trane Technologies",
    tier: "manufacturer",
    url: "https://www.trane.com/commercial/north-america/us/en/products-systems/technologies.html",
    summary: "Variable speed drives in HVAC equipment (compressors and blower motors) modulate output to match actual building load rather than cycling on/off at full capacity. Trane's inverter-driven systems reduce energy consumption by 30–50% and improve humidity control and comfort at partial load conditions.",
    keyPoints: [
      "Variable speed compressors adjust capacity continuously",
      "Reduces short cycling and wear compared to single-speed units",
      "Better humidity control at part-load conditions",
      "EER and SEER ratings are higher for variable speed systems",
      "Requires VFD-aware service practices and diagnostics"
    ],
    tags: [
      "variable speed",
      "inverter",
      "VFD",
      "trane",
      "efficiency",
      "compressor",
      "SEER"
    ]
  },
  {
    id: 302,
    title: "Carrier: Refrigerant Charging Best Practices",
    source: "Carrier Technical Education",
    tier: "manufacturer",
    url: "https://www.carrier.com/residential/en/us/support/product-resources/",
    summary: "Carrier recommends charging systems to manufacturer specifications using subcooling for TXV-equipped systems and superheat for fixed-orifice systems. Always weigh refrigerant into the system using certified scales. Never use sight glass alone as the primary charging indicator — verify with gauge readings and temperature measurements.",
    keyPoints: [
      "Use subcooling method for TXV systems (check manufacturer specs)",
      "Use superheat method for fixed-orifice systems",
      "Weigh refrigerant charges on certified digital scales",
      "Sight glass is a secondary check only",
      "Never mix refrigerant types or blend incompatible oils"
    ],
    tags: [
      "charging",
      "carrier",
      "subcooling",
      "superheat",
      "TXV",
      "fixed orifice",
      "scale"
    ]
  },
  {
    id: 303,
    title: "Lennox: Diagnosing Heat Pump Reversing Valve Issues",
    source: "Lennox Technical Resources",
    tier: "manufacturer",
    url: "https://www.lennox.com/pros",
    summary: "The reversing valve switches refrigerant flow direction to provide heating and cooling in heat pump systems. A stuck or leaking reversing valve causes the system to run in the wrong mode or show abnormal pressures. Diagnosis involves checking the solenoid coil (24V), valve body movement, and pressure differential across the valve body.",
    keyPoints: [
      "Stuck in cooling: unit won't heat even in heat mode",
      "Stuck in heating: unit won't cool even in cooling mode",
      "Check 24V solenoid coil with multimeter",
      "Tapping the valve body can sometimes unstick a sluggish valve",
      "Leaking valve body requires replacement"
    ],
    tags: [
      "reversing valve",
      "heat pump",
      "lennox",
      "solenoid",
      "diagnosis",
      "troubleshooting"
    ]
  },
  {
    id: 304,
    title: "Carrier: Troubleshooting High Head Pressure",
    source: "Carrier Technical Education",
    tier: "manufacturer",
    url: "https://www.carrier.com/residential/en/us/support/product-resources/",
    summary: "High head pressure indicates the system is struggling to reject heat in the condenser. Common causes include a dirty condenser coil, low condenser airflow (fan failure), overcharge, non-condensables, or high ambient temperatures. Check condenser coil cleanliness, fan operation, and verify charge levels using subcooling.",
    keyPoints: [
      "Dirty condenser coils are the most common cause",
      "Condenser fan failures cause rapid head pressure increase",
      "Overcharge raises both head and suction pressure",
      "Non-condensables (air, nitrogen) cause high discharge pressure",
      "High ambient temps above 115°F can trigger high-pressure lockout"
    ],
    tags: [
      "high head pressure",
      "condenser",
      "carrier",
      "overcharge",
      "non-condensable",
      "fan",
      "diagnostics"
    ]
  },
  {
    id: 305,
    title: "Trane: Electrical Safety and Lockout/Tagout Procedures",
    source: "Trane Technologies",
    tier: "manufacturer",
    url: "https://www.trane.com/commercial/north-america/us/en/products-systems/service-and-parts.html",
    summary: "Lockout/Tagout (LOTO) is a federally required safety procedure for isolating energy sources before servicing HVAC equipment. Trane's training guidelines require technicians to shut off all power sources, apply personal locks, and verify zero energy before opening electrical panels or disconnecting components.",
    keyPoints: [
      "LOTO required before any electrical service work",
      "Use personal padlock and tag on every energy source",
      "Verify zero voltage with a calibrated meter",
      "OSHA 29 CFR 1910.147 governs lockout/tagout",
      "Multiple technicians each use their own lock"
    ],
    tags: [
      "lockout",
      "tagout",
      "LOTO",
      "electrical",
      "safety",
      "OSHA",
      "trane"
    ]
  },
  // ── HVAC Excellence & ESCO Institute Training ─────────────────────────
  {
    id: 401,
    title: "ESCO Institute: EPA 608 Study Guide Overview",
    source: "ESCO Institute",
    tier: "training",
    url: "https://www.escogroup.org",
    summary: "The ESCO Institute's EPA 608 preparatory program is one of the most widely used certification training resources in the industry. It covers all four certification sections (Core, Type I, II, III) with detailed explanations of refrigerant chemistry, recovery procedures, environmental regulations, and safety practices aligned to EPA requirements.",
    keyPoints: [
      "Core section: ozone, environmental law, refrigerant safety",
      "Type I: small appliances, hermetic systems",
      "Type II: high-pressure residential and commercial systems",
      "Type III: low-pressure chiller systems",
      "Practice exams help identify weak areas before the test"
    ],
    tags: [
      "ESCO",
      "EPA 608",
      "study guide",
      "certification",
      "core",
      "type I",
      "type II",
      "type III"
    ]
  },
  {
    id: 402,
    title: "HVAC Excellence: Refrigeration Service Technician Standards",
    source: "HVAC Excellence",
    tier: "training",
    url: "https://www.hvacexcellence.org",
    summary: "HVAC Excellence sets national skill standards for refrigeration service technicians, covering system fundamentals, electrical diagnostics, system servicing, and customer interaction. Their certification programs verify competency in areas including refrigerant handling, electrical troubleshooting, and system performance evaluation.",
    keyPoints: [
      "Standards cover both residential and commercial HVAC",
      "Competency verified across system startup, service, and diagnostics",
      "Electrical knowledge is a core certification requirement",
      "Certification demonstrates field-ready skills to employers",
      "Continuing education maintains certification status"
    ],
    tags: [
      "HVAC Excellence",
      "certification",
      "technician",
      "standards",
      "refrigeration",
      "electrical",
      "professional"
    ]
  },
  {
    id: 403,
    title: "ESCO Institute: Refrigerant Safety and Handling Principles",
    source: "ESCO Institute",
    tier: "training",
    url: "https://www.escogroup.org",
    summary: "Proper refrigerant handling reduces environmental impact and protects technician safety. Key practices include wearing appropriate PPE (safety glasses, gloves), working in ventilated areas, using refrigerant identifiers before service, and following DOT transport regulations for cylinders. All technicians must be EPA-certified.",
    keyPoints: [
      "Always wear safety glasses and gloves when handling refrigerant",
      "Refrigerant vapor can displace oxygen in enclosed spaces",
      "Use refrigerant identifier to verify type before recovery",
      "ASHRAE 15 requires ventilation and safety cutoffs in machine rooms",
      "Skin contact with liquid refrigerant causes frostbite"
    ],
    tags: [
      "PPE",
      "safety",
      "refrigerant",
      "handling",
      "ESCO",
      "ASHRAE",
      "ventilation"
    ]
  },
  {
    id: 404,
    title: "HVAC Excellence: Electrical Troubleshooting Standards for Techs",
    source: "HVAC Excellence",
    tier: "training",
    url: "https://www.hvacexcellence.org",
    summary: "HVAC Excellence competency standards require technicians to safely diagnose electrical faults using multimeters, clamp meters, and wiring diagrams. This includes testing voltage, current, resistance, and continuity on contactors, motors, transformers, and control boards following proper lockout/tagout protocols.",
    keyPoints: [
      "Use wiring diagrams before and during electrical diagnosis",
      "Test components in sequence: power source → controls → load",
      "Verify supply voltage matches nameplate before condemning components",
      "Always LOTO before resistance or continuity testing",
      "Megohm testing checks motor winding insulation integrity"
    ],
    tags: [
      "electrical",
      "troubleshooting",
      "multimeter",
      "contactor",
      "motor",
      "wiring",
      "HVAC Excellence"
    ]
  },
  {
    id: 405,
    title: "ESCO Institute: System Evacuation and Dehydration Procedures",
    source: "ESCO Institute",
    tier: "training",
    url: "https://www.escogroup.org",
    summary: "Proper evacuation removes non-condensables and moisture from a refrigerant system before charging. The industry standard is pulling the system to 500 microns or lower and holding for at least 15 minutes. Use a dedicated micron gauge (not a manifold gauge) for accurate readings. Moisture left in the system causes ice formation and acid damage.",
    keyPoints: [
      "Target evacuation level: 500 microns or lower",
      "Use a micron gauge, not a manifold gauge for vacuum measurement",
      "Triple evacuation method recommended for systems exposed to moisture",
      "Decay test: hold vacuum for 15 minutes after pump isolation",
      "Rising micron level during decay test indicates moisture or leak"
    ],
    tags: [
      "evacuation",
      "micron",
      "vacuum",
      "dehydration",
      "ESCO",
      "moisture",
      "charging"
    ]
  }
];
function searchExternalResources(query) {
  if (!query.trim()) return [];
  const q = query.toLowerCase().trim();
  const words = q.split(/\s+/);
  return externalResources.map((resource) => {
    const searchText = [
      resource.title,
      resource.summary,
      ...resource.tags,
      ...resource.keyPoints,
      resource.source
    ].join(" ").toLowerCase();
    const score = words.reduce((acc, word) => {
      if (resource.title.toLowerCase().includes(word)) return acc + 3;
      if (resource.tags.some((t) => t.toLowerCase().includes(word)))
        return acc + 2;
      if (searchText.includes(word)) return acc + 1;
      return acc;
    }, 0);
    return { resource, score };
  }).filter(({ score }) => score > 0).sort((a, b) => b.score - a.score).map(({ resource }) => resource);
}
const knowledgeBaseArticles = [
  // ──────────────────────────────────────────────
  // HVAC FUNDAMENTALS
  // ──────────────────────────────────────────────
  {
    id: 1,
    title: "How the Refrigeration Cycle Works",
    category: "hvac-fundamentals",
    source: "HVAC Buddy – Fundamentals",
    summary: "The vapor-compression refrigeration cycle moves heat from inside a building to the outside using four main components: compressor, condenser, metering device, and evaporator. Refrigerant absorbs heat in the evaporator as it evaporates, then releases it in the condenser as it condenses back to liquid. Understanding this cycle is the foundation of all HVAC diagnostics.",
    keyPoints: [
      "Compressor raises refrigerant pressure and temperature",
      "Condenser rejects heat to outdoor air",
      "Metering device reduces pressure before evaporator",
      "Evaporator absorbs heat from indoor air",
      "Refrigerant changes state between liquid and vapor"
    ],
    tags: [
      "refrigeration cycle",
      "compressor",
      "condenser",
      "evaporator",
      "metering device",
      "fundamentals"
    ],
    relatedVideoIds: [6, 7, 8],
    studyModuleLink: "core-lessons",
    studyModuleLabel: "Core Lessons Module"
  },
  {
    id: 2,
    title: "Types of Air Conditioning Systems",
    category: "hvac-fundamentals",
    source: "HVAC Buddy – Fundamentals",
    summary: "Residential and commercial HVAC systems come in several configurations. Split systems separate the compressor/condenser outdoors from the air handler indoors. Package units combine all components in one cabinet. Mini-splits are ductless and offer zone control. Heat pumps reverse the refrigeration cycle to provide both heating and cooling from one system.",
    keyPoints: [
      "Split systems: most common residential type",
      "Package units: all-in-one rooftop or ground-mounted",
      "Mini-splits: ductless, flexible zoning",
      "Heat pumps: heat and cool in one unit",
      "PTAC units: common in hotels and apartments"
    ],
    tags: [
      "split system",
      "heat pump",
      "mini-split",
      "package unit",
      "ductless",
      "ac types"
    ],
    relatedVideoIds: [9],
    studyModuleLink: "core-lessons",
    studyModuleLabel: "Core Lessons Module"
  },
  {
    id: 3,
    title: "Metering Devices: TXV vs Fixed Orifice",
    category: "hvac-fundamentals",
    source: "HVAC Buddy – Fundamentals",
    summary: "The metering device controls refrigerant flow into the evaporator. Thermostatic Expansion Valves (TXV) modulate based on superheat, providing consistent performance across varying conditions. Fixed orifice devices (piston or cap tube) are simpler and less expensive but cannot adjust to load changes. Choosing the correct charging method depends on which metering device is installed.",
    keyPoints: [
      "TXV maintains consistent superheat automatically",
      "Fixed orifice uses subcooling charging method",
      "TXV uses superheat charging method",
      "EEV (electronic expansion valve) used in inverter systems",
      "Stuck TXV causes high or low superheat depending on failure mode"
    ],
    tags: [
      "TXV",
      "metering device",
      "piston",
      "capillary tube",
      "EEV",
      "superheat",
      "subcooling"
    ],
    relatedVideoIds: [7, 11],
    studyModuleLink: "core-lessons",
    studyModuleLabel: "Core Lessons Module"
  },
  {
    id: 4,
    title: "Superheat and Subcooling: Charging Methods",
    category: "hvac-fundamentals",
    source: "HVAC Buddy – Diagnostics",
    summary: "Superheat is the temperature of vapor above its saturation point measured at the suction line. Subcooling is how far below saturation temperature the liquid has cooled at the liquid line. These two measurements are the primary tools for verifying refrigerant charge. Fixed orifice systems use superheat; TXV systems rely on subcooling. Normal target ranges vary by refrigerant and system design.",
    keyPoints: [
      "Superheat = suction line temp minus saturation temp at suction pressure",
      "Subcooling = condensing saturation temp minus liquid line temp",
      "Target superheat for R-22: 8-12°F (varies by outdoor temp)",
      "Target subcooling for TXV systems: 10-15°F",
      "Low superheat = overcharge or TXV overfeed",
      "High superheat = undercharge or restriction"
    ],
    tags: [
      "superheat",
      "subcooling",
      "charging",
      "R-410A",
      "R-22",
      "TXV",
      "diagnosis"
    ],
    relatedVideoIds: [11, 14],
    studyModuleLink: "core-lessons",
    studyModuleLabel: "Core Lessons Module"
  },
  {
    id: 5,
    title: "Airflow Fundamentals: CFM and Delta T",
    category: "hvac-fundamentals",
    source: "HVAC Buddy – Fundamentals",
    summary: "Proper airflow is critical for efficiency and comfort. The standard design target is 400 CFM per ton of cooling capacity. Delta T (the temperature difference between supply and return air) should be 18–22°F in cooling mode and 40–70°F in heating mode. Insufficient airflow leads to coil freeze-up, poor dehumidification, and reduced efficiency.",
    keyPoints: [
      "400 CFM per ton is the standard design target",
      "Delta T 18-22°F indicates good cooling airflow",
      "Dirty filters are the most common cause of low airflow",
      "Low airflow causes evaporator coil to freeze",
      "Static pressure testing reveals duct system restrictions"
    ],
    tags: [
      "airflow",
      "CFM",
      "delta T",
      "static pressure",
      "duct",
      "evaporator freeze"
    ],
    relatedVideoIds: [6],
    studyModuleLink: "core-lessons",
    studyModuleLabel: "Core Lessons Module"
  },
  // ──────────────────────────────────────────────
  // EPA 608
  // ──────────────────────────────────────────────
  {
    id: 6,
    title: "EPA Section 608: Overview and Certification Types",
    category: "epa-608",
    source: "EPA Section 608 Guidance",
    summary: "EPA Section 608 of the Clean Air Act requires technicians who service, maintain, repair, or dispose of refrigerant-containing equipment to be certified. Four certification types exist: Type I covers small appliances, Type II covers high-pressure systems, Type III covers low-pressure chillers, and Universal covers all three. Each requires a passing score of 70% or higher on the relevant exam sections.",
    keyPoints: [
      "Certification required before purchasing refrigerant",
      "Type I: small appliances (5 lbs or less)",
      "Type II: high-pressure (residential/commercial AC)",
      "Type III: low-pressure (chillers, R-123)",
      "Universal = Type I + II + III combined",
      "70% passing score on each section"
    ],
    tags: [
      "EPA 608",
      "certification",
      "Type I",
      "Type II",
      "Type III",
      "Universal",
      "refrigerant"
    ],
    relatedVideoIds: [1, 2, 19],
    studyModuleLink: "epa-608",
    studyModuleLabel: "EPA 608 Study Module"
  },
  {
    id: 7,
    title: "Ozone Depletion and the Clean Air Act",
    category: "epa-608",
    source: "EPA Section 608 Guidance",
    summary: "Chlorofluorocarbons (CFCs) and hydrochlorofluorocarbons (HCFCs) release chlorine when they break down in the stratosphere, catalytically destroying ozone molecules. The Montreal Protocol drove a global phaseout of CFCs, and the Clean Air Act gives the EPA authority to regulate refrigerant venting, recovery, and disposal in the U.S. Ozone depletion potential (ODP) and global warming potential (GWP) are the two key environmental metrics for refrigerants.",
    keyPoints: [
      "CFCs have both ODP and high GWP",
      "HCFCs have lower ODP, now being phased out",
      "HFCs have zero ODP but significant GWP",
      "HFOs have near-zero ODP and very low GWP",
      "Venting refrigerant intentionally is illegal and subject to fines"
    ],
    tags: [
      "ozone depletion",
      "ODP",
      "GWP",
      "CFC",
      "HCFC",
      "Montreal Protocol",
      "Clean Air Act"
    ],
    relatedVideoIds: [1, 2],
    studyModuleLink: "epa-608",
    studyModuleLabel: "EPA 608 Study Module"
  },
  {
    id: 8,
    title: "Refrigerant Recovery Requirements by System Type",
    category: "epa-608",
    source: "EPA Section 608 Guidance",
    summary: "Before opening any refrigerant circuit, technicians must recover refrigerant to required levels. Recovery requirements differ by system type and size. High-pressure systems must be evacuated to 0–15 inches Hg vacuum depending on system size. Low-pressure systems require 25–29 inches Hg. Small appliances under 5 lbs may use passive recovery. Recovered refrigerant must be stored in approved cylinders and cannot be mixed.",
    keyPoints: [
      "Passive recovery: allowed for small appliances only",
      "Active recovery: required for systems above 5 lbs",
      "Recovery cylinders must be DOT-approved",
      "Never mix refrigerant types in a cylinder",
      "Recovery equipment must meet EPA recovery efficiency standards",
      "System must be tagged after refrigerant removal"
    ],
    tags: [
      "recovery",
      "EPA",
      "evacuation",
      "small appliance",
      "high pressure",
      "low pressure",
      "cylinder"
    ],
    relatedVideoIds: [12, 3, 4, 5],
    studyModuleLink: "epa-608",
    studyModuleLabel: "EPA 608 Study Module"
  },
  {
    id: 9,
    title: "Leak Detection and Repair Requirements",
    category: "epa-608",
    source: "EPA Section 608 Guidance",
    summary: "EPA regulations require that refrigerant leaks exceeding trigger rates (10% annually for comfort cooling, 20% for commercial refrigeration) must be repaired within 30 days. Before opening a leaking system, technicians must use an EPA-approved leak detector. Electronic leak detectors, UV dye, and soap bubbles are all accepted methods. Failing to repair known leaks is a violation subject to significant penalties.",
    keyPoints: [
      "10% annual leak rate triggers mandatory repair for comfort cooling",
      "Repair deadline: within 30 days of detection",
      "Approved methods: electronic, UV dye, soap bubbles",
      "Halide torch not acceptable for HFCs",
      "Records must be kept for systems with 50+ lbs of refrigerant"
    ],
    tags: [
      "leak detection",
      "leak repair",
      "EPA",
      "electronic detector",
      "UV dye",
      "compliance"
    ],
    relatedVideoIds: [1, 2, 19],
    studyModuleLink: "epa-608",
    studyModuleLabel: "EPA 608 Study Module"
  },
  // ──────────────────────────────────────────────
  // ELECTRICAL
  // ──────────────────────────────────────────────
  {
    id: 10,
    title: "Ohm's Law and Basic HVAC Electrical Circuits",
    category: "electrical",
    source: "HVAC Buddy – Electrical Fundamentals",
    summary: "Ohm's Law states that Voltage (V) = Current (I) × Resistance (R). In HVAC electrical systems, understanding this relationship helps technicians calculate expected current draw, identify resistance faults, and size wire and breakers correctly. Power (watts) is calculated as P = V × I. Series circuits have one path for current; parallel circuits provide multiple paths and are standard in HVAC control wiring.",
    keyPoints: [
      "V = I × R (Ohm's Law)",
      "P = V × I (power formula)",
      "Series: current is the same, voltage divides",
      "Parallel: voltage is the same, current divides",
      "Open circuit = infinite resistance, no current flow",
      "Short circuit = near-zero resistance, dangerously high current"
    ],
    tags: [
      "Ohm's Law",
      "voltage",
      "current",
      "resistance",
      "series",
      "parallel",
      "electrical"
    ],
    relatedVideoIds: [16, 21],
    studyModuleLink: "hvac-electrical-fundamentals",
    studyModuleLabel: "HVAC Electrical Fundamentals"
  },
  {
    id: 11,
    title: "Control Circuits vs Power Circuits in HVAC",
    category: "electrical",
    source: "HVAC Buddy – Electrical Fundamentals",
    summary: "HVAC systems use two distinct electrical circuits. The power circuit operates at line voltage (208–240V) and runs the compressor, condenser fan, and blower motors. The control circuit runs at 24V AC from a step-down transformer and carries signals from the thermostat to contactors, relays, and safety switches. Diagnosing which circuit has the fault is the first step in any electrical troubleshooting call.",
    keyPoints: [
      "Power circuit: 208–240V, runs motors and compressors",
      "Control circuit: 24V AC from step-down transformer",
      "Thermostat wires are part of the 24V control circuit",
      "Contactor coil energized by 24V control signal",
      "Safety switches (high pressure, low pressure, freeze stat) open the control circuit"
    ],
    tags: [
      "control circuit",
      "power circuit",
      "24V",
      "transformer",
      "contactor",
      "thermostat",
      "electrical"
    ],
    relatedVideoIds: [16, 17, 18, 21],
    studyModuleLink: "hvac-electrical-fundamentals",
    studyModuleLabel: "HVAC Electrical Fundamentals"
  },
  {
    id: 12,
    title: "Using a Multimeter for HVAC Diagnostics",
    category: "electrical",
    source: "HVAC Buddy – Multimeter Training",
    summary: "A digital multimeter is an essential HVAC diagnostic tool. Voltage (VAC/VDC) is measured with power ON across two points. Resistance (Ohms) and continuity are measured with power OFF and the component isolated. Amperage is measured with a clamp meter around a single conductor with power ON. Matching the meter function to the measurement task prevents damage and ensures accurate readings.",
    keyPoints: [
      "Voltage: power ON, probes across component",
      "Resistance/Continuity: power OFF, component isolated",
      "Amperage: clamp around ONE conductor only",
      "OL on resistance = open circuit (wire or winding broken)",
      "Capacitance: power OFF, capacitor discharged first",
      "Always verify meter leads are in correct ports"
    ],
    tags: [
      "multimeter",
      "voltage",
      "resistance",
      "continuity",
      "amperage",
      "clamp meter",
      "diagnostics"
    ],
    relatedVideoIds: [13, 17],
    studyModuleLink: "multimeter-training",
    studyModuleLabel: "Multimeter Training Module"
  },
  {
    id: 13,
    title: "Testing Contactors, Relays, and Transformers",
    category: "electrical",
    source: "HVAC Buddy – Multimeter Training",
    summary: "Contactors and relays switch high-voltage loads on and off using a low-voltage coil. A failing contactor may show pitted contacts (high resistance across contacts when closed) or an open coil (OL on resistance reading). Transformers step line voltage down to 24V; test by measuring primary voltage input and secondary voltage output. A fuse on the secondary side protects against short circuits in the control circuit.",
    keyPoints: [
      "Contactor coil resistance: typically 8–20 ohms",
      "Pitted contacts cause voltage drop under load",
      "Test contacts: measure resistance across them — should read near 0 when closed",
      "Transformer primary: 208–240V, secondary: 24–28V",
      "24V fuse blowing indicates a short in the control wiring"
    ],
    tags: [
      "contactor",
      "relay",
      "transformer",
      "multimeter",
      "coil resistance",
      "contacts",
      "24V"
    ],
    relatedVideoIds: [17, 13, 21],
    studyModuleLink: "multimeter-training",
    studyModuleLabel: "Multimeter Training Module"
  },
  // ──────────────────────────────────────────────
  // REFRIGERATION
  // ──────────────────────────────────────────────
  {
    id: 14,
    title: "Refrigerant Properties and Classification",
    category: "refrigeration",
    source: "EPA Section 608 Guidance",
    summary: "Refrigerants are classified by ASHRAE into safety groups based on toxicity (A = low, B = higher) and flammability (1 = none, 2L = mildly flammable, 2 = flammable, 3 = highly flammable). Common HVAC refrigerants include R-410A (A1), R-22 (A1), R-32 (A2L), and R-454B (A2L). Understanding classification guides safe handling, leak response, and equipment compatibility.",
    keyPoints: [
      "A1 = lowest hazard (R-22, R-410A, R-134a)",
      "A2L = mildly flammable (R-32, R-454B, R-1234yf)",
      "A2 = flammable, A3 = highly flammable",
      "Never mix refrigerant types",
      "A2L refrigerants require special handling precautions",
      "ODP zero for all HFCs and HFOs"
    ],
    tags: [
      "refrigerant",
      "ASHRAE classification",
      "A2L",
      "R-410A",
      "R-22",
      "R-32",
      "safety group",
      "flammability"
    ],
    relatedVideoIds: [12, 8],
    studyModuleLink: "epa-608",
    studyModuleLabel: "EPA 608 Study Module"
  },
  {
    id: 15,
    title: "Evacuation Procedures and Micron Gauge Use",
    category: "refrigeration",
    source: "HVAC Buddy – Digital Gauges & Smart Probes",
    summary: "Before charging a system, technicians must evacuate it to remove air and moisture. A micron gauge measures vacuum in microns of mercury (absolute). The target vacuum level is 500 microns or lower. After isolating the vacuum pump, the system should hold below 1000 microns for at least 10 minutes to pass a decay test. Using oversized hoses and a quality vacuum pump improves evacuation speed.",
    keyPoints: [
      "500 microns or lower is standard target",
      "Decay test: isolate pump, recheck after 10 minutes",
      "Rising microns after isolation = system still has moisture or a leak",
      "Never use manifold gauge hoses for deep vacuum — use dedicated hoses",
      "Change vacuum pump oil frequently for best performance"
    ],
    tags: [
      "evacuation",
      "micron gauge",
      "vacuum",
      "decay test",
      "moisture",
      "refrigerant charge"
    ],
    relatedVideoIds: [10, 15],
    studyModuleLink: "digital-gauges-probes",
    studyModuleLabel: "Digital Gauges & Smart Probes"
  },
  {
    id: 16,
    title: "Refrigerant Lines: Sizing and Best Practices",
    category: "refrigeration",
    source: "Manufacturer Technical Education – Carrier / Trane",
    summary: "Refrigerant line sets consist of a larger suction line (insulated) and a smaller liquid line. Suction line sizing is critical — too large causes low velocity and poor oil return; too small creates excessive pressure drop. Manufacturer specs provide maximum line lengths and elevation changes. Long line sets require additional refrigerant charge. All field-installed lines must be properly supported and protected from abrasion.",
    keyPoints: [
      "Suction line must be insulated to prevent heat gain",
      "Liquid line is typically smaller diameter",
      "Max line length and elevation per manufacturer spec",
      "Long lines require additional refrigerant charge per foot",
      "Oil traps required when suction line rises vertically"
    ],
    tags: [
      "line set",
      "suction line",
      "liquid line",
      "line sizing",
      "oil return",
      "installation"
    ],
    relatedVideoIds: [8, 6],
    studyModuleLink: "core-lessons",
    studyModuleLabel: "Core Lessons Module"
  },
  // ──────────────────────────────────────────────
  // DIAGNOSTICS
  // ──────────────────────────────────────────────
  {
    id: 17,
    title: "Pattern-Based AC Diagnostics: Reading Pressures",
    category: "diagnostics",
    source: "HVAC Buddy – Diagnostics",
    summary: "Suction and discharge pressures reveal system condition when interpreted together. Low suction + low discharge typically indicates undercharge or low airflow. High suction + high discharge points to overcharge or dirty condenser. Normal suction with high discharge suggests a dirty condenser coil or a refrigerant overcharge. Always compare readings against the pressure-temperature relationship of the specific refrigerant in use.",
    keyPoints: [
      "Low suction + low discharge = undercharge or low airflow",
      "High suction + high discharge = overcharge",
      "High discharge only = dirty condenser or overcharge",
      "Low suction only = restriction or low airflow",
      "Use PT chart for the specific refrigerant in the system"
    ],
    tags: [
      "pressures",
      "suction",
      "discharge",
      "head pressure",
      "undercharge",
      "overcharge",
      "diagnostics"
    ],
    relatedVideoIds: [11, 14],
    studyModuleLink: "core-lessons",
    studyModuleLabel: "Core Lessons Module"
  },
  {
    id: 18,
    title: "Compressor Diagnostics and Testing",
    category: "diagnostics",
    source: "HVAC Buddy – Diagnostics",
    summary: "The compressor is the heart of the refrigeration system. High amp draw above nameplate RLA indicates mechanical wear, tight bearings, or voltage problems. Low amp draw with poor cooling may mean worn valves. Winding resistance testing with the power OFF can reveal open or shorted windings. A properly functioning compressor should have balanced winding resistance across all terminals (C, S, R).",
    keyPoints: [
      "Measure winding resistance: C-S, C-R, S-R",
      "S-R = C-S + C-R approximately (check balance)",
      "OL reading on any winding = open compressor",
      "0 ohms between any terminal and ground = grounded compressor",
      "High amps + poor cooling = worn valves"
    ],
    tags: [
      "compressor",
      "winding resistance",
      "RLA",
      "amp draw",
      "open compressor",
      "grounded",
      "diagnostics"
    ],
    relatedVideoIds: [13, 14],
    studyModuleLink: "core-lessons",
    studyModuleLabel: "Core Lessons Module"
  },
  {
    id: 19,
    title: "Manifold Gauge Reading and Interpretation",
    category: "diagnostics",
    source: "HVAC Buddy – Digital Gauges & Smart Probes",
    summary: "Digital manifold gauges display suction pressure, head pressure, superheat, and subcooling simultaneously when connected to the system and temperature probes. Read suction pressure on the low-side (blue) port and discharge pressure on the high-side (red) port. Many gauges include built-in PT charts — select the refrigerant type before reading. Always connect and disconnect with the system off or using ball-valve manifolds to avoid refrigerant release.",
    keyPoints: [
      "Blue = low side (suction), Red = high side (discharge)",
      "Set refrigerant type on digital gauges before use",
      "Superheat and subcooling calculated automatically with temp probes",
      "Gauge isolation valves prevent refrigerant release on disconnect",
      "Compare readings to PT chart for refrigerant in use"
    ],
    tags: [
      "manifold gauge",
      "digital gauge",
      "suction",
      "discharge",
      "superheat",
      "subcooling",
      "PT chart"
    ],
    relatedVideoIds: [14, 11],
    studyModuleLink: "digital-gauges-probes",
    studyModuleLabel: "Digital Gauges & Smart Probes"
  },
  {
    id: 20,
    title: "Troubleshooting a System That Won't Cool",
    category: "diagnostics",
    source: "HVAC Buddy – Troubleshooting Guides",
    summary: "When an AC system runs but fails to cool, work through the diagnostic sequence: verify thermostat settings and filter condition, check outdoor unit operation, measure supply and return temperatures, then measure pressures and superheat. The most common causes are low refrigerant charge, dirty condenser coil, restricted airflow, or failed metering device. Safety switches (high pressure, low pressure, freeze stat) may be tripping to protect the system.",
    keyPoints: [
      "Check thermostat and filter before touching refrigerant",
      "Measure Delta T — below 15°F indicates a problem",
      "Condenser coil should be warm, not scalding (overcharge) or cool (undercharge)",
      "Frozen evaporator = low airflow or low charge",
      "Safety switch trip = underlying problem needs diagnosis"
    ],
    tags: [
      "not cooling",
      "troubleshooting",
      "delta T",
      "frozen coil",
      "safety switch",
      "diagnosis"
    ],
    relatedVideoIds: [11, 14, 10],
    studyModuleLink: "core-lessons",
    studyModuleLabel: "Core Lessons Module"
  },
  // ──────────────────────────────────────────────
  // SAFETY
  // ──────────────────────────────────────────────
  {
    id: 21,
    title: "Refrigerant Safety and Personal Protective Equipment",
    category: "safety",
    source: "EPA Section 608 Guidance",
    summary: "All refrigerants require careful handling to prevent injury. Even non-toxic A1 refrigerants can cause frostbite on skin contact and displace oxygen in confined spaces. Always wear safety glasses when connecting or disconnecting hoses. Avoid inhaling vapors — work in ventilated areas. A2L refrigerants require additional precautions including ignition source control. Never heat refrigerant cylinders — they can explode.",
    keyPoints: [
      "Safety glasses required when handling refrigerant",
      "Gloves recommended — refrigerant liquid causes frostbite",
      "Never heat a refrigerant cylinder",
      "A2L refrigerants: eliminate ignition sources in work area",
      "R-123 (Type III): higher toxicity — use in ventilated areas only",
      "Oxygen displacement risk in confined spaces"
    ],
    tags: [
      "safety",
      "PPE",
      "refrigerant",
      "A2L",
      "frostbite",
      "ventilation",
      "cylinder"
    ],
    relatedVideoIds: [12, 1, 2],
    studyModuleLink: "epa-608",
    studyModuleLabel: "EPA 608 Study Module"
  },
  {
    id: 22,
    title: "Electrical Safety: Lockout/Tagout and PPE",
    category: "safety",
    source: "HVAC Buddy – Electrical Fundamentals",
    summary: "Electrical safety begins with de-energizing equipment before service. Lockout/Tagout (LOTO) procedures require physically locking the disconnect in the off position and tagging it so others know not to re-energize. Always verify zero voltage with a meter before touching wires. Wear insulated gloves when working near live conductors. Capacitors store lethal voltage even after power is off — discharge them before handling.",
    keyPoints: [
      "Lockout/tagout before opening any panel or electrical component",
      "Verify zero voltage with a live meter — never assume power is off",
      "Capacitors hold charge after power removal — discharge first",
      "Use insulated tools rated for the voltage level",
      "Arc flash risk exists at higher voltages — use rated PPE"
    ],
    tags: [
      "electrical safety",
      "lockout tagout",
      "LOTO",
      "capacitor discharge",
      "PPE",
      "arc flash"
    ],
    relatedVideoIds: [16, 17, 21],
    studyModuleLink: "hvac-electrical-fundamentals",
    studyModuleLabel: "HVAC Electrical Fundamentals"
  },
  {
    id: 23,
    title: "Safe Refrigerant Cylinder Handling and Storage",
    category: "safety",
    source: "EPA Section 608 Guidance",
    summary: "Refrigerant cylinders must be stored upright, in cool well-ventilated areas, away from heat sources and direct sunlight. Recovery cylinders must not be filled beyond 80% of their water capacity. DOT regulations govern cylinder transport — cylinders must be secured upright and protected from damage. Cylinders must be color-coded by refrigerant type and labeled with contents, hazard class, and owner information.",
    keyPoints: [
      "Store cylinders upright in ventilated areas",
      "Do not fill recovery cylinders above 80% capacity",
      "Never heat cylinders to increase pressure",
      "Color coding: R-22 = light green, R-410A = rose/pink",
      "DOT cylinders required for transport",
      "Label all recovery cylinders with refrigerant type"
    ],
    tags: [
      "cylinder",
      "storage",
      "DOT",
      "recovery",
      "color code",
      "refrigerant",
      "safety"
    ],
    relatedVideoIds: [12],
    studyModuleLink: "epa-608",
    studyModuleLabel: "EPA 608 Study Module"
  }
];
const KB_CATEGORIES = [
  { value: "all", label: "All Topics" },
  { value: "hvac-fundamentals", label: "HVAC Fundamentals" },
  { value: "epa-608", label: "EPA 608" },
  { value: "electrical", label: "Electrical" },
  { value: "refrigeration", label: "Refrigeration" },
  { value: "diagnostics", label: "Diagnostics" },
  { value: "safety", label: "Safety" }
];
function searchKnowledgeBase(query, category) {
  const q = query.toLowerCase().trim();
  return knowledgeBaseArticles.filter((article) => {
    const matchesCategory = category === "all" || article.category === category;
    if (!matchesCategory) return false;
    if (!q) return true;
    return article.title.toLowerCase().includes(q) || article.summary.toLowerCase().includes(q) || article.tags.some((t) => t.toLowerCase().includes(q)) || article.keyPoints.some((kp) => kp.toLowerCase().includes(q));
  });
}
const CATEGORY_COLORS = {
  "hvac-fundamentals": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  "epa-608": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  electrical: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  refrigeration: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300",
  diagnostics: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  safety: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
};
const CATEGORY_LABELS$1 = {
  "hvac-fundamentals": "HVAC Fundamentals",
  "epa-608": "EPA 608",
  electrical: "Electrical",
  refrigeration: "Refrigeration",
  diagnostics: "Diagnostics",
  safety: "Safety"
};
const TIER_COLORS = {
  epa: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  manufacturer: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  news: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  training: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
};
const TIER_LABELS = {
  epa: "EPA Guidance",
  manufacturer: "Manufacturer",
  news: "ACHR News",
  training: "Training Institute"
};
function scoreArticles(articles, query) {
  if (!query.trim()) {
    return articles.map((article) => ({ article, score: 1 }));
  }
  const words = query.toLowerCase().split(/\s+/);
  return articles.map((article) => {
    let score = 0;
    for (const word of words) {
      if (article.title.toLowerCase().includes(word)) score += 4;
      if (article.tags.some((t) => t.toLowerCase().includes(word)))
        score += 2;
      if (article.summary.toLowerCase().includes(word)) score += 1;
      if (article.keyPoints.some((kp) => kp.toLowerCase().includes(word)))
        score += 1;
    }
    return { article, score };
  }).filter(({ score }) => score > 0).sort((a, b) => b.score - a.score);
}
function scoreVideos(videos, query) {
  if (!query.trim()) return [];
  const words = query.toLowerCase().split(/\s+/);
  return videos.map((video) => {
    var _a, _b;
    let score = 0;
    for (const word of words) {
      if (video.title.toLowerCase().includes(word)) score += 4;
      if ((_a = video.description) == null ? void 0 : _a.toLowerCase().includes(word)) score += 2;
      if ((_b = video.linkedLessonTopic) == null ? void 0 : _b.toLowerCase().includes(word)) score += 2;
    }
    return { video, score };
  }).filter(({ score }) => score > 0).sort((a, b) => b.score - a.score);
}
function InternalArticleCard({
  article,
  onNavigateToStudy
}) {
  const [expanded, setExpanded] = reactExports.useState(false);
  const relatedVideos = curatedVideos.filter(
    (v) => article.relatedVideoIds.includes(Number(v.id))
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-lg border border-border bg-card p-4 space-y-3 transition-shadow hover:shadow-md",
      "data-ocid": "ai-kb.internal.article.card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${CATEGORY_COLORS[article.category]}`,
                  children: CATEGORY_LABELS$1[article.category]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: article.source })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm leading-snug", children: article.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-4 w-4 text-muted-foreground shrink-0 mt-0.5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: article.summary }),
        expanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-muted/50 p-3 space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground mb-2", children: "Key Points" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: article.keyPoints.map((point, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static list
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-sm flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary mt-0.5", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: point })
            ] }, i)
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setExpanded(!expanded),
              className: "inline-flex items-center gap-1 text-xs text-primary hover:underline",
              "data-ocid": "ai-kb.internal.article.toggle",
              children: expanded ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-3 w-3" }),
                " Hide points"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3 w-3" }),
                " Key points"
              ] })
            }
          ),
          article.studyModuleLink && onNavigateToStudy && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => onNavigateToStudy(article.studyModuleLink),
              className: "inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary hover:bg-primary/20 transition-colors",
              "data-ocid": "ai-kb.internal.article.study_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-3 w-3" }),
                article.studyModuleLabel ?? "Study Module"
              ]
            }
          ),
          relatedVideos.map((video) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: video.url,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-1.5 rounded-md bg-red-50 dark:bg-red-900/20 px-2.5 py-1 text-xs font-medium text-red-700 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors",
              "data-ocid": "ai-kb.internal.article.video_link",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "h-3 w-3" }),
                video.title,
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-2.5 w-2.5 opacity-60" })
              ]
            },
            Number(video.id)
          ))
        ] })
      ]
    }
  );
}
function VideoResultCard({ video }) {
  const isPlaylist2 = video.url.includes("playlist?list=");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: video.url,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "flex items-start gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary hover:shadow-md transition-all group",
      "data-ocid": "ai-kb.video.card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 relative", children: [
          video.thumbnailUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: video.thumbnailUrl,
              alt: video.title,
              className: "w-20 h-14 object-cover rounded-md"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-14 rounded-md bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "h-6 w-6 text-muted-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-black/60 rounded-full p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "h-3 w-3 text-white" }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full bg-red-100 dark:bg-red-900/30 px-2 py-0.5 text-xs font-medium text-red-700 dark:text-red-300", children: isPlaylist2 ? "Playlist" : "Video" }),
            video.linkedLessonTopic && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground truncate", children: video.linkedLessonTopic })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm leading-snug group-hover:text-primary transition-colors", children: video.title }),
          video.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 line-clamp-2", children: video.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-4 w-4 text-muted-foreground shrink-0 mt-0.5 group-hover:text-primary transition-colors" })
      ]
    }
  );
}
function ExternalResourceCard({ resource }) {
  const [expanded, setExpanded] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-lg border border-border bg-card p-4 space-y-3 transition-shadow hover:shadow-md",
      "data-ocid": "ai-kb.external.resource.card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${TIER_COLORS[resource.tier]}`,
                  children: TIER_LABELS[resource.tier]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-medium", children: resource.source })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm leading-snug", children: resource.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-4 w-4 text-muted-foreground shrink-0 mt-0.5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: resource.summary }),
        expanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-muted/50 p-3 space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground mb-2", children: "Key Guidance Points" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: resource.keyPoints.map((point, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static list
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-sm flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary mt-0.5", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: point })
            ] }, i)
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setExpanded(!expanded),
              className: "inline-flex items-center gap-1 text-xs text-primary hover:underline",
              "data-ocid": "ai-kb.external.resource.toggle",
              children: expanded ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-3 w-3" }),
                " Hide points"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3 w-3" }),
                " Key points"
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: resource.url,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 text-xs font-medium hover:bg-muted/80 transition-colors",
              "data-ocid": "ai-kb.external.resource.source_link",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" }),
                "Visit ",
                resource.source
              ]
            }
          )
        ] })
      ]
    }
  );
}
function SectionHeader({
  icon,
  label,
  count,
  badge
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pb-2 border-b border-border", children: [
    icon,
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto text-xs text-muted-foreground", children: [
      count,
      " result",
      count !== 1 ? "s" : ""
    ] }),
    badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary", children: badge })
  ] });
}
function AIKnowledgeBaseSearch({
  onBack,
  onNavigateToStudy,
  initialQuery = ""
}) {
  const [query, setQuery] = reactExports.useState(initialQuery);
  const [activeCategory, setActiveCategory] = reactExports.useState(
    "all"
  );
  const rawArticles = searchKnowledgeBase(query, activeCategory);
  const rankedArticles = reactExports.useMemo(() => {
    if (!query.trim()) return rawArticles.map((a) => a);
    return scoreArticles(rawArticles, query).map(({ article }) => article);
  }, [rawArticles, query]);
  const rankedVideos = reactExports.useMemo(() => {
    if (!query.trim()) return [];
    const articleLinkedIds = new Set(
      rankedArticles.flatMap((a) => a.relatedVideoIds)
    );
    return scoreVideos(curatedVideos, query).filter(({ video }) => !articleLinkedIds.has(Number(video.id))).slice(0, 6).map(({ video }) => video);
  }, [query, rankedArticles]);
  const rankedExternal = reactExports.useMemo(() => {
    if (!query.trim()) return [];
    return searchExternalResources(query).slice(0, 5);
  }, [query]);
  const totalResults = rankedArticles.length + rankedVideos.length + rankedExternal.length;
  const hasQuery = query.trim().length > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: onBack,
        className: "flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors",
        "data-ocid": "ai-kb.back_button",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
          "Back to Community"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-5 w-5 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold", children: "HVAC Knowledge Base" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground", children: "AI Search" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: "Search across study modules, video tutorials, and trusted HVAC industry resources" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          value: query,
          onChange: (e) => setQuery(e.target.value),
          placeholder: "Search topics, keywords, or HVAC concepts…",
          className: "w-full rounded-lg border border-border bg-background pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50",
          "data-ocid": "ai-kb.search_input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", "data-ocid": "ai-kb.category_filter", children: KB_CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setActiveCategory(cat.value),
        className: `rounded-full px-3 py-1 text-xs font-medium transition-colors ${activeCategory === cat.value ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`,
        "data-ocid": `ai-kb.category.${cat.value}.tab`,
        children: cat.label
      },
      cat.value
    )) }),
    hasQuery && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
      totalResults,
      " result",
      totalResults !== 1 ? "s" : "",
      " for “",
      query,
      "”",
      totalResults > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1 text-muted-foreground/70", children: [
        "— ",
        rankedArticles.length,
        " study articles · ",
        rankedVideos.length,
        " ",
        "videos · ",
        rankedExternal.length,
        " external resources"
      ] })
    ] }),
    !hasQuery && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wide", children: "Browse by Category" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2 sm:grid-cols-3", children: [
          "hvac-fundamentals",
          "epa-608",
          "electrical",
          "refrigeration",
          "diagnostics",
          "safety"
        ].map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              setActiveCategory(cat);
              setQuery(CATEGORY_LABELS$1[cat]);
            },
            className: `rounded-lg border border-border bg-card px-4 py-3 text-left text-sm font-medium hover:border-primary hover:bg-primary/5 transition-colors ${CATEGORY_COLORS[cat]}`,
            "data-ocid": "ai-kb.category.button",
            children: CATEGORY_LABELS$1[cat]
          },
          cat
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-lg border border-dashed border-border bg-muted/20 p-5 text-center",
          "data-ocid": "ai-kb.empty_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "mx-auto mb-3 h-8 w-8 text-primary/50" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-muted-foreground", children: "Start searching to see ranked results" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Results are organized by internal modules, videos, and trusted external resources" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide", children: "Popular Topics" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: [
          "superheat",
          "refrigerant recovery",
          "multimeter",
          "compressor",
          "EPA 608",
          "subcooling",
          "evacuation",
          "electrical",
          "leak detection",
          "heat pump",
          "A2L refrigerant",
          "airflow"
        ].map((topic) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setQuery(topic),
            className: "rounded-full bg-muted px-3 py-1 text-xs hover:bg-primary/10 hover:text-primary transition-colors",
            "data-ocid": "ai-kb.popular_topic.button",
            children: topic
          },
          topic
        )) })
      ] })
    ] }),
    hasQuery && rankedArticles.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-ocid": "ai-kb.internal_results", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-4 w-4 text-primary" }),
          label: "Internal Study Content",
          count: rankedArticles.length,
          badge: "App Content"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: rankedArticles.map((article) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        InternalArticleCard,
        {
          article,
          onNavigateToStudy
        },
        article.id
      )) })
    ] }),
    hasQuery && rankedVideos.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-ocid": "ai-kb.video_results", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "h-4 w-4 text-red-500" }),
          label: "Video Library Tutorials",
          count: rankedVideos.length
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: rankedVideos.map((video) => /* @__PURE__ */ jsxRuntimeExports.jsx(VideoResultCard, { video }, Number(video.id))) })
    ] }),
    hasQuery && rankedExternal.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-ocid": "ai-kb.external_results", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-4 w-4 text-indigo-500" }),
          label: "Trusted HVAC Resources",
          count: rankedExternal.length
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: rankedExternal.map((resource) => /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalResourceCard, { resource }, resource.id)) })
    ] }),
    hasQuery && totalResults === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16 text-center",
        "data-ocid": "ai-kb.no_results.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "mb-3 h-10 w-10 text-muted-foreground/50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-medium text-muted-foreground", children: [
            "No results found for “",
            query,
            "”"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Try different keywords or browse by category" })
        ]
      }
    ),
    hasQuery && /* @__PURE__ */ jsxRuntimeExports.jsx(
      RelatedVideos,
      {
        keywords: query.trim().split(/\s+/).filter((w) => w.length > 2),
        title: "Video Tutorials",
        maxVideos: 2
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-start gap-2 rounded-md bg-muted/50 px-4 py-3 text-xs text-muted-foreground",
        "data-ocid": "ai-kb.disclaimer",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-3.5 w-3.5 shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Summaries are original educational guidance based on EPA Section 608 regulations, ESCO Institute, HVAC Excellence, ACHR News, and manufacturer technical education principles. Not a substitute for official documentation, manufacturer instructions, or professional training." })
        ]
      }
    )
  ] });
}
function HelpAIChat({ onBack }) {
  const [inputMessage, setInputMessage] = reactExports.useState("");
  const scrollRef = reactExports.useRef(null);
  const startSession = useStartHelpSession();
  const { data: session, isLoading: sessionLoading } = useGetHelpSession();
  const addMessage = useAddHelpMessage();
  const clearSession = useClearHelpSession();
  reactExports.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [session == null ? void 0 : session.messages]);
  reactExports.useEffect(() => {
    if (!session && !startSession.isPending) {
      startSession.mutate();
    }
  }, []);
  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    const userMessage = inputMessage.trim();
    setInputMessage("");
    try {
      await addMessage.mutateAsync({
        content: userMessage,
        messageType: MessageType.text
      });
      setTimeout(() => {
        generateAIResponse(userMessage);
      }, 1e3);
    } catch (_error) {
      ue.error("Failed to send message");
    }
  };
  const generateAIResponse = (userInput) => {
    const input = userInput.toLowerCase();
    let aiResponse = "";
    if (input.includes("epa") || input.includes("608") || input.includes("certification")) {
      aiResponse = `**EPA 608 Certification Information**

The EPA 608 certification is required for technicians who maintain, service, repair, or dispose of equipment that could release refrigerants into the atmosphere.

**Certification Types:**
• **Type I**: Small appliances (5 lbs or less of refrigerant)
• **Type II**: High-pressure systems (residential/commercial AC, heat pumps)
• **Type III**: Low-pressure systems (centrifugal chillers)
• **Universal**: All of the above

**Exam Format:**
• Core section (required for all): 25 questions
• Type-specific sections: 25 questions each
• Passing score: 70% or higher
• Open book exam allowed

**Study Resources:**
Check out our comprehensive EPA 608 study modules in the Study tab, which include:
- Complete lesson content for all sections
- Practice quizzes with detailed explanations
- Video tutorials
- Interactive tools and simulators

Would you like specific information about any certification type?`;
    } else if (input.includes("refrigerant") || input.includes("recovery") || input.includes("charge")) {
      aiResponse = `**Refrigerant Handling & Recovery**

Proper refrigerant handling is critical for EPA compliance and system performance.

**Key Safety Rules:**
⚠️ Always wear safety glasses and gloves
⚠️ Work in well-ventilated areas
⚠️ Never vent refrigerant to atmosphere
⚠️ Use proper recovery equipment

**Recovery Requirements:**
• Active recovery required for systems with >15 lbs
• Passive recovery allowed for small appliances
• Must achieve required vacuum levels
• Proper cylinder labeling and storage

**Charging Best Practices:**
• Weigh in refrigerant when possible
• Use subcooling method for TXV systems
• Use superheat method for fixed orifice systems
• Check manufacturer specifications

**Tools Available:**
Use our Superheat/Subcooling Calculator in the Calculators tab for accurate charge verification.

Need help with a specific refrigerant or recovery procedure?`;
    } else if (input.includes("troubleshoot") || input.includes("diagnos") || input.includes("not cooling")) {
      aiResponse = `**HVAC Troubleshooting Guidance**

I can help you diagnose HVAC system issues! For comprehensive diagnostic assistance, I recommend using our **AI Troubleshooter** in the Troubleshooter tab.

**Common Issues & Quick Checks:**

**No Cooling:**
1. Check thermostat settings (mode, temperature)
2. Verify power to outdoor unit
3. Check air filter condition
4. Inspect for frozen coils

**Poor Cooling:**
1. Measure supply/return temperatures (Delta T)
2. Check refrigerant pressures
3. Verify proper airflow (CFM)
4. Inspect outdoor coil for blockage

**System Won't Start:**
1. Check breakers and disconnects
2. Test thermostat operation
3. Check safety switches
4. Verify control voltage

**Safety First:**
⚠️ Always turn off power before working on electrical components
⚠️ Use proper PPE (safety glasses, gloves)
⚠️ Follow lockout/tagout procedures

Would you like detailed guidance on a specific issue?`;
    } else if (input.includes("superheat") || input.includes("subcooling")) {
      aiResponse = `**Superheat & Subcooling Explained**

These are critical measurements for verifying proper refrigerant charge.

**Superheat:**
• Measures how much vapor is heated above saturation temperature
• Calculation: Suction line temp - Suction saturation temp
• Used for fixed orifice/piston systems
• Target: 8-12°F for most residential systems

**Subcooling:**
• Measures how much liquid is cooled below saturation temperature
• Calculation: Condensing saturation temp - Liquid line temp
• Used for TXV systems
• Target: 10-15°F for most systems

**When to Use Each:**
• **TXV Systems**: Use subcooling method
• **Fixed Orifice**: Use superheat method
• **Heat Pumps**: Check both in cooling mode

**Tools:**
Use our Superheat/Subcooling Calculator in the Calculators tab for automatic calculations with target ranges.

Need help interpreting your readings?`;
    } else if (input.includes("electrical") || input.includes("wiring") || input.includes("voltage")) {
      aiResponse = `**Electrical Troubleshooting & Safety**

⚠️ **SAFETY WARNING**: Electrical work can be dangerous. Always follow proper safety procedures.

**Safety Precautions:**
• Turn off power at breaker
• Use lockout/tagout procedures
• Test for voltage before touching
• Use insulated tools
• Wear safety glasses
• Never work on live circuits unless absolutely necessary

**Common Electrical Checks:**

**Voltage Testing:**
• Line voltage: 208-240V (residential)
• Control voltage: 24V AC
• Check voltage at contactor
• Verify proper grounding

**Component Testing:**
• Contactors: Check coil resistance and contacts
• Capacitors: Test with capacitor meter
• Transformers: Check primary and secondary voltage
• Relays: Verify coil voltage and contact continuity

**Wiring Issues:**
• Loose connections cause high resistance
• Corroded terminals reduce current flow
• Undersized wire causes voltage drop
• Check for proper wire gauge

**Resources:**
• Watch our Electrical Controls videos in the Video Library
• Use the Multimeter Simulator in Study Tools
• Check wiring diagrams in manufacturer documentation

What specific electrical issue are you experiencing?`;
    } else if (input.includes("airflow") || input.includes("cfm") || input.includes("duct")) {
      aiResponse = `**Airflow & Duct System Guidance**

Proper airflow is essential for system efficiency and comfort.

**Target Airflow:**
• Residential: 400 CFM per ton of cooling
• Commercial: Varies by application
• Measure at supply registers or return grille

**Common Airflow Problems:**

**Restricted Airflow:**
• Dirty air filter (most common)
• Blocked return or supply vents
• Undersized ductwork
• Dirty evaporator coil
• Blower motor issues

**Excessive Airflow:**
• Oversized blower
• Incorrect fan speed setting
• Duct leakage

**Duct Sizing:**
Use our Duct Sizing Calculator in the Calculators tab to determine proper duct sizes for your application.

**Measurement Tools:**
• Anemometer for velocity
• Manometer for static pressure
• Temperature probes for Delta T

**Target Delta T:**
• Cooling: 18-22°F temperature drop
• Heating: 40-70°F temperature rise

Need help calculating CFM or sizing ducts?`;
    } else if (input.includes("help") || input.includes("how") || input.includes("what")) {
      aiResponse = `I'm here to help with any HVAC-related questions! I can assist with:

**Technical Topics:**
• EPA 608 certification preparation
• Refrigerant handling and recovery
• System diagnostics and troubleshooting
• Electrical systems and controls
• Airflow and duct design
• Superheat and subcooling calculations
• Equipment specifications
• Safety procedures

**App Features:**
• How to use the Troubleshooter
• Study materials and exam prep
• Calculator tools
• Video library resources
• Parts and refrigerant database

**Common Questions:**
• "How do I check refrigerant charge?"
• "What are EPA 608 requirements?"
• "How do I troubleshoot no cooling?"
• "What is superheat and subcooling?"
• "How do I test electrical components?"

What would you like to know more about?`;
    } else {
      aiResponse = `I understand you're asking about "${userInput}". Let me provide some guidance.

For the most accurate and detailed assistance, please provide more specific information about:
• What system or component you're working with
• What symptoms or issues you're experiencing
• What measurements or observations you've made
• What you've already tried

**Quick Access:**
• **Troubleshooter Tab**: Step-by-step diagnostic guidance
• **Study Tab**: EPA 608 prep and HVAC fundamentals
• **Calculators Tab**: Superheat, subcooling, load calculations
• **Video Library**: Visual tutorials and demonstrations
• **Parts Tab**: Refrigerant specifications and equipment data

How can I help you further?`;
    }
    addMessage.mutate({
      content: aiResponse,
      messageType: MessageType.text
    });
  };
  const handleClearChat = async () => {
    try {
      await clearSession.mutateAsync();
      ue.success("Chat cleared");
      setTimeout(() => {
        startSession.mutate();
      }, 500);
    } catch (_error) {
      ue.error("Failed to clear chat");
    }
  };
  const handleFollowUpClick = (followUp) => {
    setInputMessage(followUp);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", onClick: onBack, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-bold flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-primary" }),
            "Ask AI a Question"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Get instant answers to your HVAC questions" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          size: "sm",
          onClick: handleClearChat,
          disabled: clearSession.isPending,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "mr-2 h-4 w-4" }),
            "Clear Chat"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-5 w-5 text-primary" }),
          "AI Assistant"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Ask me anything about HVAC systems, EPA certification, troubleshooting, or app features" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: "This AI assistant uses the same diagnostic engine as the Troubleshooter. For step-by-step system diagnostics, use the Troubleshooter tab." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-[500px] pr-4", ref: scrollRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: sessionLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin text-muted-foreground" }) }) : (session == null ? void 0 : session.messages) && session.messages.length > 0 ? session.messages.map((message) => {
          const isUser = message.sender === "user";
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `flex gap-3 ${isUser ? "flex-row-reverse" : ""}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${isUser ? "bg-primary" : "bg-gradient-to-br from-primary/20 to-accent/20"}`,
                    children: isUser ? /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4 text-primary-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-4 w-4 text-primary" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `flex-1 space-y-1 ${isUser ? "items-end" : ""}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: `rounded-lg p-3 ${isUser ? "bg-primary text-primary-foreground ml-8" : "bg-muted mr-8"}`,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "whitespace-pre-wrap text-sm leading-relaxed", children: message.content })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-3 text-xs text-muted-foreground", children: new Date(
                        Number(message.timestamp) / 1e6
                      ).toLocaleTimeString() })
                    ]
                  }
                )
              ]
            },
            message.id.toString()
          );
        }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-12 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-12 w-12 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-2 text-lg font-semibold", children: "Welcome to AI Help!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 max-w-md text-sm text-muted-foreground", children: "Ask me anything about HVAC systems, EPA certification, troubleshooting techniques, or how to use this app. I'm here to help!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground", children: "Try asking:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2", children: [
              "How do I prepare for EPA 608 certification?",
              "What causes low superheat?",
              "How do I troubleshoot a system that won't cool?",
              "What are the refrigerant recovery requirements?"
            ].map((question) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "justify-start text-left h-auto py-2 px-3",
                onClick: () => handleFollowUpClick(question),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: question })
              },
              question
            )) })
          ] })
        ] }) }) }),
        (session == null ? void 0 : session.followUps) && session.followUps.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground", children: "Suggested follow-up questions:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: session.followUps.map((followUp, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => handleFollowUpClick(followUp),
              className: "text-xs",
              children: followUp
            },
            `followup-${index}`
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "Ask a question about HVAC, EPA 608, troubleshooting, or app features...",
              value: inputMessage,
              onChange: (e) => setInputMessage(e.target.value),
              onKeyDown: (e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              },
              className: "flex-1"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "icon",
              onClick: handleSendMessage,
              disabled: !inputMessage.trim() || addMessage.isPending,
              children: addMessage.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center", children: "Press Enter to send • This AI provides educational guidance and should not replace professional judgment" })
      ] })
    ] })
  ] });
}
const COMMON_SYMPTOMS = [
  { label: "No Cooling", icon: ThermometerSun },
  { label: "Frozen Evaporator Coil", icon: Droplets },
  { label: "High/Low Pressure", icon: Gauge },
  { label: "Compressor Issues", icon: CircleAlert },
  { label: "Airflow Problems", icon: Wind },
  { label: "Electrical Problems", icon: Zap },
  { label: "Refrigerant Leaks", icon: Droplets },
  { label: "Strange Noises", icon: TriangleAlert }
];
function TroubleshootingChat({
  onBack
}) {
  const [session, setSession] = reactExports.useState(null);
  const [inputMessage, setInputMessage] = reactExports.useState("");
  const [isVoiceInput, setIsVoiceInput] = reactExports.useState(false);
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const scrollRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [session == null ? void 0 : session.messages]);
  const handleStartSession = async (symptom) => {
    setIsLoading(true);
    const newSession = {
      id: BigInt(Date.now()),
      messages: [],
      linkedResources: [],
      measurements: [],
      status: ChatSessionStatus.inProgress
    };
    setSession(newSession);
    setInputMessage("");
    setTimeout(() => {
      addAIMessage(
        newSession.id,
        `I understand you're experiencing "${symptom}". Let me help you diagnose this issue step by step. First, let's start with some basic safety checks.

⚠️ **Safety First**: Before we begin, ensure the system is powered off at the breaker if you'll be working near electrical components.

Let's start with the basics:
1. Is the thermostat set to COOL mode?
2. Is the temperature set below the current room temperature?
3. Can you hear the outdoor unit running?`,
        MessageType.diagnosticStep
      );
      setIsLoading(false);
    }, 500);
  };
  const addUserMessage = (content) => {
    if (!session) return;
    const newMessage = {
      id: BigInt(Date.now()),
      sender: MessageSender.user,
      content,
      timestamp: BigInt(Date.now() * 1e6),
      messageType: MessageType.text
    };
    setSession({
      ...session,
      messages: [...session.messages, newMessage]
    });
  };
  const addAIMessage = (sessionId, content, messageType) => {
    if (!session || session.id !== sessionId) return;
    const newMessage = {
      id: BigInt(Date.now()),
      sender: MessageSender.assistant,
      content,
      timestamp: BigInt(Date.now() * 1e6),
      messageType
    };
    setSession({
      ...session,
      messages: [...session.messages, newMessage]
    });
  };
  const addResource = (sessionId, title, url, resourceType, description) => {
    if (!session || session.id !== sessionId) return;
    const newResource = {
      id: BigInt(Date.now()),
      title,
      url,
      resourceType,
      description
    };
    setSession({
      ...session,
      linkedResources: [...session.linkedResources, newResource]
    });
  };
  const addMeasurement = (sessionId, measurementType, value, units) => {
    if (!session || session.id !== sessionId) return;
    const newMeasurement = {
      id: BigInt(Date.now()),
      type: measurementType,
      value,
      units,
      timestamp: BigInt(Date.now() * 1e6),
      source: MeasurementSource.manual
    };
    setSession({
      ...session,
      measurements: [...session.measurements, newMeasurement]
    });
  };
  const handleSendMessage = async () => {
    if (!inputMessage.trim() || !session) return;
    const userMessage = inputMessage.trim();
    setInputMessage("");
    addUserMessage(userMessage);
    setTimeout(() => {
      generateAIResponse(userMessage, session.id);
    }, 1e3);
  };
  const generateAIResponse = (userInput, chatId) => {
    var _a;
    const input = userInput.toLowerCase();
    if (input.includes("yes") || input.includes("running")) {
      addAIMessage(
        chatId,
        `Good! The outdoor unit is running. Now let's check the airflow:

**Airflow Check**:
1. Check the air filter - is it clean or dirty?
2. Feel the supply vents - is air coming out?
3. Is the airflow strong or weak?

Please describe what you observe.`,
        MessageType.diagnosticStep
      );
      addResource(
        chatId,
        "Airflow Fundamentals",
        "/study/core-lessons/airflow",
        ResourceType.lesson,
        "Learn about proper airflow and common restrictions"
      );
    } else if (input.includes("no") || input.includes("not running")) {
      addAIMessage(
        chatId,
        `The outdoor unit is not running. Let's check the power:

**Power Check**:
1. Check the breaker - is it tripped?
2. Check the disconnect switch at the outdoor unit
3. Look for any visible damage to wiring

⚠️ **Safety Alert**: Do not touch any electrical components with wet hands or in wet conditions.

What do you find?`,
        MessageType.safetyAlert
      );
    } else if (input.includes("dirty") || input.includes("clogged")) {
      addAIMessage(
        chatId,
        `A dirty air filter is a common cause of cooling issues! This restricts airflow and can cause:
- Reduced cooling capacity
- Frozen evaporator coil
- Higher energy bills
- System damage

**Recommendation**: Replace the air filter with a new one of the correct size. After replacement, let the system run for 15-20 minutes and check if cooling improves.

📚 **Learn More**: I've added a link to our airflow lesson below.`,
        MessageType.recommendation
      );
      addResource(
        chatId,
        "Air Filter Maintenance",
        "/study/core-lessons/airflow",
        ResourceType.lesson,
        "Proper air filter selection and maintenance"
      );
    } else if (input.match(/\d+/)) {
      const value = Number.parseFloat(((_a = input.match(/\d+\.?\d*/)) == null ? void 0 : _a[0]) || "0");
      addMeasurement(chatId, MeasurementType.temperature, value, "°F");
      addAIMessage(
        chatId,
        `Thank you for providing that measurement (${value}°F). Let me analyze this data...

**Analysis**: Based on the temperature reading, I recommend checking the superheat and subcooling values for a more complete diagnosis.

🧮 **Tool**: Use our Superheat/Subcooling Calculator to determine if the refrigerant charge is correct.`,
        MessageType.recommendation
      );
      addResource(
        chatId,
        "Superheat/Subcooling Calculator",
        "/calculators",
        ResourceType.calculator,
        "Calculate superheat and subcooling values"
      );
    } else {
      addAIMessage(
        chatId,
        `I understand. Let me provide some general guidance:

**Next Steps**:
1. Take temperature measurements at the supply and return vents
2. Check refrigerant pressures if you have gauges
3. Inspect the outdoor coil for debris or blockage

Could you provide more specific details about what you're observing? For example:
- Temperature readings
- Pressure readings
- Visual observations
- Any unusual sounds or smells`,
        MessageType.question
      );
    }
  };
  const handleExportTranscript = () => {
    if (!session) return;
    const transcript = session.messages.map((msg) => {
      const sender = msg.sender === MessageSender.user ? "User" : "AI Assistant";
      const time = new Date(Number(msg.timestamp) / 1e6).toLocaleString();
      return `[${time}] ${sender}:
${msg.content}
`;
    }).join("\n");
    const blob = new Blob([transcript], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `hvac-chat-transcript-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    ue.success("Chat transcript exported successfully");
  };
  const handleCompleteSession = () => {
    if (!session) return;
    setSession({
      ...session,
      status: ChatSessionStatus.completed
    });
    ue.success("Chat session completed");
    setTimeout(() => onBack(), 500);
  };
  if (!session) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", onClick: onBack, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "AI Troubleshooting Chat" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Get instant diagnostic help with AI-powered guidance" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Describe Your HVAC Issue" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Select a common symptom below or describe your issue in your own words" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Safety First:" }),
              " Before starting diagnostics, ensure proper safety precautions. Turn off power at the breaker when working with electrical components."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-3 text-sm font-semibold", children: "Quick Selection - Common Issues:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4", children: COMMON_SYMPTOMS.map((symptom) => {
              const Icon = symptom.icon;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  className: "h-auto flex-col gap-2 p-4",
                  onClick: () => handleStartSession(symptom.label),
                  disabled: isLoading,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 text-primary" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: symptom.label })
                  ]
                },
                symptom.label
              );
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-3 text-sm font-semibold", children: "Or describe your issue:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                placeholder: "Example: My AC is running but not cooling the house. The outdoor unit is hot to the touch...",
                value: inputMessage,
                onChange: (e) => setInputMessage(e.target.value),
                className: "min-h-[100px]"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "mt-3 w-full",
                onClick: () => handleStartSession(inputMessage),
                disabled: !inputMessage.trim() || isLoading,
                children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
                  "Starting Chat..."
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "mr-2 h-4 w-4" }),
                  "Start Diagnostic Chat"
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-muted/50 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "mb-2 flex items-center gap-2 text-sm font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-4 w-4" }),
              "What to Expect"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Step-by-step diagnostic guidance" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Safety alerts and best practices" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Links to relevant study materials and tools" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Measurement tracking and analysis" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Exportable chat transcript" })
            ] })
          ] })
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", onClick: onBack, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold", children: "Diagnostic Chat Session" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "AI-powered troubleshooting assistance" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: handleExportTranscript, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "mr-2 h-4 w-4" }),
          "Export"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "default", size: "sm", onClick: handleCompleteSession, children: "Complete Session" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Chat Messages" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-3 w-3" }),
            "AI Assistant Active"
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-[500px] pr-4", ref: scrollRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin text-muted-foreground" }) }) : session.messages.map((message) => {
            const isUser = message.sender === MessageSender.user;
            const isAlert = message.messageType === MessageType.safetyAlert;
            const isRecommendation = message.messageType === MessageType.recommendation;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `flex gap-3 ${isUser ? "flex-row-reverse" : ""}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${isUser ? "bg-primary" : "bg-muted"}`,
                      children: isUser ? /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4 text-primary-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-4 w-4" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: `flex-1 space-y-1 ${isUser ? "items-end" : ""}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: `rounded-lg p-3 ${isUser ? "bg-primary text-primary-foreground" : isAlert ? "border-2 border-destructive bg-destructive/10" : isRecommendation ? "border-2 border-primary bg-primary/10" : "bg-muted"}`,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "whitespace-pre-wrap text-sm", children: message.content })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-3 text-xs text-muted-foreground", children: new Date(
                          Number(message.timestamp) / 1e6
                        ).toLocaleTimeString() })
                      ]
                    }
                  )
                ]
              },
              message.id.toString()
            );
          }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "Type your response or measurement...",
                value: inputMessage,
                onChange: (e) => setInputMessage(e.target.value),
                onKeyDown: (e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "icon",
                variant: "outline",
                onClick: () => setIsVoiceInput(!isVoiceInput),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Mic,
                  {
                    className: `h-4 w-4 ${isVoiceInput ? "text-destructive" : ""}`
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "icon",
                onClick: handleSendMessage,
                disabled: !inputMessage.trim(),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Learning Resources" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-[200px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: session.linkedResources && session.linkedResources.length > 0 ? session.linkedResources.map((resource) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: resource.url,
              className: "block rounded-lg border border-border p-3 transition-colors hover:bg-muted",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                resource.resourceType === ResourceType.lesson && /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-4 w-4 text-primary" }),
                resource.resourceType === ResourceType.calculator && /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "h-4 w-4 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: resource.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: resource.description })
                ] })
              ] })
            },
            resource.id.toString()
          )) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm text-muted-foreground", children: "No resources yet" }) }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Measurements" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-[200px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: session.measurements && session.measurements.length > 0 ? session.measurements.map((measurement) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-lg border border-border p-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium capitalize", children: measurement.type }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", children: [
                    measurement.value,
                    " ",
                    measurement.units
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: new Date(
                  Number(measurement.timestamp) / 1e6
                ).toLocaleTimeString() })
              ]
            },
            measurement.id.toString()
          )) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm text-muted-foreground", children: "No measurements yet" }) }) }) })
        ] })
      ] })
    ] })
  ] });
}
const TABS = [
  { key: "all", label: "All" },
  { key: VideoCategory.epa608Prep, label: "EPA 608 Certification Prep" },
  { key: VideoCategory.hvacFundamentals, label: "HVAC Fundamentals" },
  {
    key: VideoCategory.electricalCircuits,
    label: "Electrical & Control Circuits"
  },
  {
    key: VideoCategory.refrigerantDiagnostics,
    label: "Refrigerant Diagnostics"
  },
  {
    key: VideoCategory.hvacToolsService,
    label: "HVAC Tools & Service Procedures"
  }
];
const CATEGORY_BADGE_STYLES = {
  [VideoCategory.epa608Prep]: "bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-300/30",
  [VideoCategory.hvacFundamentals]: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-300/30",
  [VideoCategory.electricalCircuits]: "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-300/30",
  [VideoCategory.refrigerantDiagnostics]: "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border-cyan-300/30",
  [VideoCategory.hvacToolsService]: "bg-orange-500/15 text-orange-700 dark:text-orange-300 border-orange-300/30"
};
const CATEGORY_LABELS = {
  [VideoCategory.epa608Prep]: "EPA 608 Certification Prep",
  [VideoCategory.hvacFundamentals]: "HVAC Fundamentals",
  [VideoCategory.electricalCircuits]: "Electrical & Control Circuits",
  [VideoCategory.refrigerantDiagnostics]: "Refrigerant Diagnostics",
  [VideoCategory.hvacToolsService]: "HVAC Tools & Service"
};
function VideoCard({ video, index }) {
  const playlist = isPlaylist(video.url);
  const embedUrl = getEmbedUrl(video.url);
  const badgeStyle = CATEGORY_BADGE_STYLES[video.category] ?? "bg-muted text-muted-foreground";
  const catLabel = CATEGORY_LABELS[video.category] ?? "Training";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Card,
    {
      className: "overflow-hidden border border-border/70 transition-shadow hover:shadow-lg",
      "data-ocid": `video-library.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full", style: { paddingBottom: "56.25%" }, children: playlist ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: video.thumbnailUrl,
              alt: video.title,
              className: "absolute inset-0 h-full w-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ListVideo, { className: "h-10 w-10 text-white" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                className: "gap-1.5 text-xs",
                asChild: true,
                "data-ocid": `video-library.link.${index + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: video.url, target: "_blank", rel: "noopener noreferrer", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" }),
                  "Open Playlist"
                ] })
              }
            )
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          "iframe",
          {
            className: "absolute inset-0 h-full w-full",
            src: embedUrl,
            title: video.title,
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: true,
            loading: "lazy"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2 pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1 flex items-start justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base leading-snug", children: video.title }),
            playlist ? /* @__PURE__ */ jsxRuntimeExports.jsx(ListVideo, { className: "mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "mt-0.5 h-4 w-4 flex-shrink-0 text-primary" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `inline-block w-fit rounded-full border px-2 py-0.5 text-xs font-medium ${badgeStyle}`,
              children: catLabel
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4 pb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: video.description }),
          video.relatedModules && video.relatedModules.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-1.5 flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-foreground/60", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-3 w-3" }),
              "Study Modules"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: video.relatedModules.map((mod) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "secondary",
                className: "cursor-default text-xs",
                children: mod
              },
              mod
            )) })
          ] }),
          video.relatedTools && video.relatedTools.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-1.5 flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-foreground/60", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "h-3 w-3" }),
              "Related Tools"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: video.relatedTools.map((tool) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "outline",
                className: "cursor-default text-xs",
                children: tool
              },
              tool
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              className: "w-full gap-1.5 text-xs",
              asChild: true,
              "data-ocid": `video-library.link.${index + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: video.url, target: "_blank", rel: "noopener noreferrer", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3.5 w-3.5" }),
                "Watch on YouTube"
              ] })
            }
          )
        ] })
      ]
    }
  );
}
function VideoLibrary() {
  const [activeTab, setActiveTab] = reactExports.useState("all");
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const filtered = reactExports.useMemo(() => {
    let list = curatedVideos;
    if (activeTab !== "all") {
      list = list.filter((v) => v.category === activeTab);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (v) => v.title.toLowerCase().includes(q) || v.description.toLowerCase().includes(q) || v.linkedLessonTopic.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeTab, searchQuery]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", "data-ocid": "video-library.section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold tracking-tight", children: "Video Library" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Structured training videos organized by category. Embed players, descriptions, and links to study modules." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          className: "pl-9",
          placeholder: "Search videos by title, topic, or keyword…",
          value: searchQuery,
          onChange: (e) => setSearchQuery(e.target.value),
          "data-ocid": "video-library.search_input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: activeTab, onValueChange: (v) => setActiveTab(v), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "w-full pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TabsList, { className: "flex h-auto w-max gap-1 bg-transparent p-0", children: TABS.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        TabsTrigger,
        {
          value: tab.key,
          className: "whitespace-nowrap rounded-full border border-border/60 px-3 py-1.5 text-xs font-medium data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
          "data-ocid": "video-library.tab",
          children: tab.label
        },
        tab.key
      )) }) }),
      TABS.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: tab.key, className: "mt-6", children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-16 text-center",
          "data-ocid": "video-library.empty_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "mb-3 h-10 w-10 text-muted-foreground/40" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-muted-foreground", children: "No videos match your search" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground/60", children: "Try different keywords or select another category" })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 sm:grid-cols-2 xl:grid-cols-3", children: filtered.map((video, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        VideoCard,
        {
          video,
          index: idx
        },
        video.id.toString()
      )) }) }, tab.key))
    ] })
  ] });
}
function CommunityTab({
  isGuest: _isGuest,
  onNavigate
}) {
  const [showChat, setShowChat] = reactExports.useState(false);
  const [showVideos, setShowVideos] = reactExports.useState(false);
  const [showHelpAI, setShowHelpAI] = reactExports.useState(false);
  const [showKnowledgeBase, setShowKnowledgeBase] = reactExports.useState(false);
  const [selectedTopic, setSelectedTopic] = reactExports.useState("");
  if (showChat) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(TroubleshootingChat, { onBack: () => setShowChat(false) });
  }
  if (showVideos) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setShowVideos(false),
          className: "text-sm text-muted-foreground hover:text-foreground",
          children: "← Back to Community"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(VideoLibrary, {})
    ] });
  }
  if (showHelpAI) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(HelpAIChat, { onBack: () => setShowHelpAI(false) });
  }
  if (showKnowledgeBase) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AIKnowledgeBaseSearch,
      {
        onBack: () => {
          setShowKnowledgeBase(false);
          setSelectedTopic("");
        },
        initialQuery: selectedTopic
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5" }),
        "Community & Help"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Access troubleshooting resources, tutorials, and local supplier information" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: "Connect with other HVAC professionals, access knowledge base articles, watch video tutorials, and find local suppliers." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setShowHelpAI(true),
            className: "rounded-lg border-2 border-primary bg-gradient-to-br from-primary/10 to-accent/10 p-6 text-left transition-all hover:border-primary hover:shadow-lg",
            "data-ocid": "community.ask_ai.button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-10 w-10 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground", children: "NEW" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-2 text-lg font-semibold", children: "Ask AI a Question" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Get instant answers to your HVAC questions with our AI assistant. Ask about EPA certification, troubleshooting, or app features." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setShowChat(true),
            className: "rounded-lg border border-border bg-card p-6 text-left transition-all hover:border-primary hover:shadow-md",
            "data-ocid": "community.chat.button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "mb-4 h-10 w-10 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-2 text-lg font-semibold", children: "AI Troubleshooting Chat" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Get instant AI-powered diagnostic help with step-by-step guidance and educational resources." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setShowKnowledgeBase(true),
            className: "rounded-lg border border-border bg-card p-6 text-left transition-all hover:border-primary hover:shadow-md",
            "data-ocid": "community.kb.button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-10 w-10 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground", children: "AI Search" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-2 text-lg font-semibold", children: "Knowledge Base" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "AI-ranked search across study modules, video tutorials, EPA guidance, ACHR News, and manufacturer technical resources — all in one place." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setShowVideos(true),
            className: "rounded-lg border border-border bg-card p-6 text-left transition-all hover:border-primary hover:shadow-md",
            "data-ocid": "community.videos.button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "mb-4 h-10 w-10 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-2 text-lg font-semibold", children: "Video Library" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Watch comprehensive video tutorials covering EPA 608 certification, HVAC fundamentals, diagnostics, and more." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => onNavigate == null ? void 0 : onNavigate("suppliers"),
            className: "rounded-lg border border-border bg-card p-6 text-left transition-all hover:border-primary hover:shadow-md",
            "data-ocid": "community.local_suppliers.button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mb-4 h-10 w-10 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-2 text-lg font-semibold", children: "Local Suppliers" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Find nearby HVAC supply stores within 50 miles of Orlando, FL (ZIP 32819) with contact info, hours, and website links." })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-2 text-lg font-semibold", children: "Popular Topics" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: [
          "Refrigerant Recovery",
          "Duct Sealing",
          "Thermostat Wiring",
          "Compressor Diagnosis",
          "Airflow Issues",
          "Electrical Troubleshooting",
          "System Sizing",
          "Maintenance Schedules"
        ].map((topic) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              setSelectedTopic(topic);
              setShowKnowledgeBase(true);
            },
            className: "rounded-full bg-background px-3 py-1 text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer",
            "data-ocid": "community.topic.button",
            children: topic
          },
          topic
        )) })
      ] })
    ] })
  ] }) });
}
export {
  CommunityTab as default
};
