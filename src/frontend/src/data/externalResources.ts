// HVAC Buddy – External Resource Summaries
// Curated, summarized educational guidance from trusted HVAC industry sources.
// No full articles are reproduced. All summaries are original educational content
// inspired by publicly available guidance from these organizations.

export type ExternalResourceTier = "epa" | "manufacturer" | "news" | "training";

export interface ExternalResource {
  id: number;
  title: string;
  source: string;
  tier: ExternalResourceTier;
  url: string;
  summary: string;
  keyPoints: string[];
  tags: string[];
}

export const externalResources: ExternalResource[] = [
  // ── EPA Section 608 Guidance ──────────────────────────────────────────
  {
    id: 101,
    title: "EPA Section 608: Overview of Refrigerant Recovery Requirements",
    source: "EPA Section 608 Guidance",
    tier: "epa",
    url: "https://www.epa.gov/section608",
    summary:
      "EPA Section 608 regulations require technicians to recover refrigerants before opening or disposing of appliances. Recovery levels depend on the type of equipment and the recovery unit's manufacture date. The rules prevent venting of ozone-depleting and high-GWP refrigerants into the atmosphere.",
    keyPoints: [
      "Recovery required before opening any system containing refrigerant",
      "Recovery levels differ for systems below and above 200 lbs",
      "Technicians must be certified by an EPA-approved program",
      "Venting CFCs, HCFCs, and HFCs is prohibited",
      "Recovery equipment must be tested and certified per ARI 740",
    ],
    tags: [
      "epa",
      "section 608",
      "recovery",
      "refrigerant",
      "certification",
      "regulations",
      "venting",
    ],
  },
  {
    id: 102,
    title: "EPA Section 608: Technician Certification Types Explained",
    source: "EPA Section 608 Guidance",
    tier: "epa",
    url: "https://www.epa.gov/section608/technician-certification-refrigerant-handling",
    summary:
      "There are four EPA 608 certification types: Type I for small appliances (sealed hermetic systems with 5 lbs or less), Type II for high-pressure systems, Type III for low-pressure systems, and Universal which covers all three. Passing each section requires knowledge of refrigerant handling, safety, and environmental regulations.",
    keyPoints: [
      "Type I: small appliances under 5 lbs refrigerant",
      "Type II: high-pressure systems like R-410A and R-22 AC units",
      "Type III: low-pressure chillers using R-11, R-123",
      "Universal: all three types combined",
      "Certification is required by law to purchase regulated refrigerants",
    ],
    tags: [
      "certification",
      "type I",
      "type II",
      "type III",
      "universal",
      "epa 608",
      "technician",
    ],
  },
  {
    id: 103,
    title: "EPA Section 608: Leak Inspection and Repair Requirements",
    source: "EPA Section 608 Guidance",
    tier: "epa",
    url: "https://www.epa.gov/section608/leak-repair-requirements",
    summary:
      "Owners of equipment with more than 50 lbs of refrigerant must repair leaks within 30 days of detection. Annual leak rates above defined thresholds trigger repair obligations. Leak inspections must be documented. Retrofit or retirement of the system may be required if repairs are not feasible.",
    keyPoints: [
      "Systems over 50 lbs: leak repair within 30 days",
      "Commercial and industrial systems have annual leak rate thresholds",
      "Leak inspections must be recorded",
      "Technicians must use approved leak detection methods",
      "Electronic, UV dye, and bubble detection are common methods",
    ],
    tags: [
      "leak",
      "leak detection",
      "repair",
      "inspection",
      "epa",
      "section 608",
      "compliance",
    ],
  },
  {
    id: 104,
    title: "EPA Section 608: Substitute Refrigerants and SNAP Program",
    source: "EPA Section 608 Guidance",
    tier: "epa",
    url: "https://www.epa.gov/snap",
    summary:
      "The EPA's SNAP (Significant New Alternatives Policy) program evaluates and lists acceptable refrigerant substitutes as alternatives to ozone-depleting substances. HFOs and low-GWP blends like R-454B and R-32 are among the newer alternatives being adopted as the industry transitions away from R-410A.",
    keyPoints: [
      "SNAP program approves and lists acceptable refrigerant alternatives",
      "R-410A phase-down is underway per AIM Act",
      "HFOs have very low GWP but some are A2L (mildly flammable)",
      "A2L refrigerants require updated safety practices",
      "Always verify SNAP approval before using a substitute",
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
      "phase-down",
    ],
  },
  {
    id: 105,
    title: "EPA Section 608: Recordkeeping and Reporting",
    source: "EPA Section 608 Guidance",
    tier: "epa",
    url: "https://www.epa.gov/section608",
    summary:
      "Technicians and equipment owners must maintain records of refrigerant purchases, recovery quantities, and leak repair activities. Records must be kept for at least three years. Distributors are required to verify technician certification before selling regulated refrigerants in containers larger than 20 lbs.",
    keyPoints: [
      "Records must be kept for a minimum of 3 years",
      "Document all refrigerant added to systems over 50 lbs",
      "Recovery cylinder logs must include refrigerant type and quantity",
      "Distributors verify certification before selling regulated refrigerants",
      "Improper recordkeeping can result in fines",
    ],
    tags: [
      "recordkeeping",
      "reporting",
      "compliance",
      "epa",
      "section 608",
      "documentation",
    ],
  },

  // ── ACHR News – Technical Articles (summarized) ───────────────────────
  {
    id: 201,
    title: "Understanding Superheat and Subcooling in HVAC Systems",
    source: "ACHR News",
    tier: "news",
    url: "https://www.achrnews.com",
    summary:
      "Superheat is the temperature rise of refrigerant vapor above its saturation point at the evaporator outlet. Subcooling is the temperature drop of liquid refrigerant below saturation at the condenser outlet. Both values are critical diagnostic tools — abnormal readings indicate low charge, overcharge, metering device problems, or airflow issues.",
    keyPoints: [
      "Target superheat: typically 8–12°F for fixed metering, 10–18°F for TXV",
      "Target subcooling: typically 10–18°F for most systems",
      "Low superheat = overcharge or TXV overfeed",
      "High superheat = low charge or TXV restriction",
      "Measure at service ports with gauges and temp clamp",
    ],
    tags: [
      "superheat",
      "subcooling",
      "charging",
      "diagnostics",
      "TXV",
      "metering",
      "pressure",
    ],
  },
  {
    id: 202,
    title: "Diagnosing Common Compressor Failures in the Field",
    source: "ACHR News",
    tier: "news",
    url: "https://www.achrnews.com",
    summary:
      "Compressor failures account for a significant portion of HVAC service calls. Common causes include liquid slugging, loss of lubrication, overheating, electrical failure, and contamination. Techs should check winding resistance, supply voltage, amp draw, and discharge temperature before condemning a compressor.",
    keyPoints: [
      "Check winding resistance: C-R, C-S, R-S should add up",
      "Liquid slugging from refrigerant migration causes mechanical failure",
      "High compression ratios increase heat and wear",
      "Overcharge or low airflow leads to high head pressure and burnout",
      "Check amp draw against nameplate RLA before replacement",
    ],
    tags: [
      "compressor",
      "failure",
      "winding",
      "diagnosis",
      "amp draw",
      "troubleshooting",
      "burnout",
    ],
  },
  {
    id: 203,
    title: "Best Practices for Refrigerant Recovery and Reclaim",
    source: "ACHR News",
    tier: "news",
    url: "https://www.achrnews.com",
    summary:
      "Proper refrigerant recovery protects the environment and is required by law. Use dedicated recovery equipment for each refrigerant type to prevent cross-contamination. Monitor recovery cylinder weight to avoid overfilling. Reclaim refrigerant to ARI 700 standards before reusing in a different owner's system.",
    keyPoints: [
      "Never mix refrigerant types in a recovery cylinder",
      "Recovery cylinders: max fill is 80% of water capacity",
      "Use a scale to track cylinder weight during recovery",
      "Refrigerant contaminated with oil may need reclaim",
      "Reclaiming is required when transferring to another owner's system",
    ],
    tags: [
      "recovery",
      "reclaim",
      "refrigerant",
      "cylinder",
      "contamination",
      "epa",
      "section 608",
    ],
  },
  {
    id: 204,
    title: "Airflow Diagnostics: Measuring and Correcting CFM Issues",
    source: "ACHR News",
    tier: "news",
    url: "https://www.achrnews.com",
    summary:
      "Proper airflow (typically 350–400 CFM per ton) is essential for efficient system operation. Low airflow causes high superheat, coil icing, and poor dehumidification. Techs can estimate airflow using the temperature split method (target 18–22°F delta T) or measure directly with a flow hood or anemometer.",
    keyPoints: [
      "Target 350–400 CFM per ton of capacity",
      "Dirty filters and coils reduce airflow significantly",
      "Use delta-T method: 18–22°F between supply and return",
      "Blocked registers and duct leaks reduce system efficiency",
      "Static pressure testing identifies duct restrictions",
    ],
    tags: [
      "airflow",
      "CFM",
      "delta T",
      "duct",
      "static pressure",
      "diagnostics",
      "blower",
    ],
  },
  {
    id: 205,
    title: "A2L Refrigerants: Safety Practices for Technicians",
    source: "ACHR News",
    tier: "news",
    url: "https://www.achrnews.com",
    summary:
      "A2L refrigerants like R-32, R-454B, and R-466A are mildly flammable and are replacing R-410A in new systems. Technicians must follow updated safety protocols including proper ventilation, no open flames near refrigerant, and using listed flammable-rated recovery equipment. Training on A2L handling is now a key industry requirement.",
    keyPoints: [
      "A2L = lower flammability limit, mildly flammable class",
      "Requires flammable-rated recovery and vacuum equipment",
      "Good ventilation reduces ignition risk during service",
      "No open flames near A2L refrigerants",
      "New equipment will use A2L as R-410A is phased down",
    ],
    tags: [
      "A2L",
      "R-454B",
      "R-32",
      "flammable",
      "refrigerant",
      "safety",
      "phase-down",
    ],
  },

  // ── Manufacturer Technical Education ─────────────────────────────────
  {
    id: 301,
    title: "Trane: Understanding Variable Speed Technology in HVAC",
    source: "Trane Technologies",
    tier: "manufacturer",
    url: "https://www.trane.com/commercial/north-america/us/en/products-systems/technologies.html",
    summary:
      "Variable speed drives in HVAC equipment (compressors and blower motors) modulate output to match actual building load rather than cycling on/off at full capacity. Trane's inverter-driven systems reduce energy consumption by 30–50% and improve humidity control and comfort at partial load conditions.",
    keyPoints: [
      "Variable speed compressors adjust capacity continuously",
      "Reduces short cycling and wear compared to single-speed units",
      "Better humidity control at part-load conditions",
      "EER and SEER ratings are higher for variable speed systems",
      "Requires VFD-aware service practices and diagnostics",
    ],
    tags: [
      "variable speed",
      "inverter",
      "VFD",
      "trane",
      "efficiency",
      "compressor",
      "SEER",
    ],
  },
  {
    id: 302,
    title: "Carrier: Refrigerant Charging Best Practices",
    source: "Carrier Technical Education",
    tier: "manufacturer",
    url: "https://www.carrier.com/residential/en/us/support/product-resources/",
    summary:
      "Carrier recommends charging systems to manufacturer specifications using subcooling for TXV-equipped systems and superheat for fixed-orifice systems. Always weigh refrigerant into the system using certified scales. Never use sight glass alone as the primary charging indicator — verify with gauge readings and temperature measurements.",
    keyPoints: [
      "Use subcooling method for TXV systems (check manufacturer specs)",
      "Use superheat method for fixed-orifice systems",
      "Weigh refrigerant charges on certified digital scales",
      "Sight glass is a secondary check only",
      "Never mix refrigerant types or blend incompatible oils",
    ],
    tags: [
      "charging",
      "carrier",
      "subcooling",
      "superheat",
      "TXV",
      "fixed orifice",
      "scale",
    ],
  },
  {
    id: 303,
    title: "Lennox: Diagnosing Heat Pump Reversing Valve Issues",
    source: "Lennox Technical Resources",
    tier: "manufacturer",
    url: "https://www.lennox.com/pros",
    summary:
      "The reversing valve switches refrigerant flow direction to provide heating and cooling in heat pump systems. A stuck or leaking reversing valve causes the system to run in the wrong mode or show abnormal pressures. Diagnosis involves checking the solenoid coil (24V), valve body movement, and pressure differential across the valve body.",
    keyPoints: [
      "Stuck in cooling: unit won't heat even in heat mode",
      "Stuck in heating: unit won't cool even in cooling mode",
      "Check 24V solenoid coil with multimeter",
      "Tapping the valve body can sometimes unstick a sluggish valve",
      "Leaking valve body requires replacement",
    ],
    tags: [
      "reversing valve",
      "heat pump",
      "lennox",
      "solenoid",
      "diagnosis",
      "troubleshooting",
    ],
  },
  {
    id: 304,
    title: "Carrier: Troubleshooting High Head Pressure",
    source: "Carrier Technical Education",
    tier: "manufacturer",
    url: "https://www.carrier.com/residential/en/us/support/product-resources/",
    summary:
      "High head pressure indicates the system is struggling to reject heat in the condenser. Common causes include a dirty condenser coil, low condenser airflow (fan failure), overcharge, non-condensables, or high ambient temperatures. Check condenser coil cleanliness, fan operation, and verify charge levels using subcooling.",
    keyPoints: [
      "Dirty condenser coils are the most common cause",
      "Condenser fan failures cause rapid head pressure increase",
      "Overcharge raises both head and suction pressure",
      "Non-condensables (air, nitrogen) cause high discharge pressure",
      "High ambient temps above 115°F can trigger high-pressure lockout",
    ],
    tags: [
      "high head pressure",
      "condenser",
      "carrier",
      "overcharge",
      "non-condensable",
      "fan",
      "diagnostics",
    ],
  },
  {
    id: 305,
    title: "Trane: Electrical Safety and Lockout/Tagout Procedures",
    source: "Trane Technologies",
    tier: "manufacturer",
    url: "https://www.trane.com/commercial/north-america/us/en/products-systems/service-and-parts.html",
    summary:
      "Lockout/Tagout (LOTO) is a federally required safety procedure for isolating energy sources before servicing HVAC equipment. Trane's training guidelines require technicians to shut off all power sources, apply personal locks, and verify zero energy before opening electrical panels or disconnecting components.",
    keyPoints: [
      "LOTO required before any electrical service work",
      "Use personal padlock and tag on every energy source",
      "Verify zero voltage with a calibrated meter",
      "OSHA 29 CFR 1910.147 governs lockout/tagout",
      "Multiple technicians each use their own lock",
    ],
    tags: [
      "lockout",
      "tagout",
      "LOTO",
      "electrical",
      "safety",
      "OSHA",
      "trane",
    ],
  },

  // ── HVAC Excellence & ESCO Institute Training ─────────────────────────
  {
    id: 401,
    title: "ESCO Institute: EPA 608 Study Guide Overview",
    source: "ESCO Institute",
    tier: "training",
    url: "https://www.escogroup.org",
    summary:
      "The ESCO Institute's EPA 608 preparatory program is one of the most widely used certification training resources in the industry. It covers all four certification sections (Core, Type I, II, III) with detailed explanations of refrigerant chemistry, recovery procedures, environmental regulations, and safety practices aligned to EPA requirements.",
    keyPoints: [
      "Core section: ozone, environmental law, refrigerant safety",
      "Type I: small appliances, hermetic systems",
      "Type II: high-pressure residential and commercial systems",
      "Type III: low-pressure chiller systems",
      "Practice exams help identify weak areas before the test",
    ],
    tags: [
      "ESCO",
      "EPA 608",
      "study guide",
      "certification",
      "core",
      "type I",
      "type II",
      "type III",
    ],
  },
  {
    id: 402,
    title: "HVAC Excellence: Refrigeration Service Technician Standards",
    source: "HVAC Excellence",
    tier: "training",
    url: "https://www.hvacexcellence.org",
    summary:
      "HVAC Excellence sets national skill standards for refrigeration service technicians, covering system fundamentals, electrical diagnostics, system servicing, and customer interaction. Their certification programs verify competency in areas including refrigerant handling, electrical troubleshooting, and system performance evaluation.",
    keyPoints: [
      "Standards cover both residential and commercial HVAC",
      "Competency verified across system startup, service, and diagnostics",
      "Electrical knowledge is a core certification requirement",
      "Certification demonstrates field-ready skills to employers",
      "Continuing education maintains certification status",
    ],
    tags: [
      "HVAC Excellence",
      "certification",
      "technician",
      "standards",
      "refrigeration",
      "electrical",
      "professional",
    ],
  },
  {
    id: 403,
    title: "ESCO Institute: Refrigerant Safety and Handling Principles",
    source: "ESCO Institute",
    tier: "training",
    url: "https://www.escogroup.org",
    summary:
      "Proper refrigerant handling reduces environmental impact and protects technician safety. Key practices include wearing appropriate PPE (safety glasses, gloves), working in ventilated areas, using refrigerant identifiers before service, and following DOT transport regulations for cylinders. All technicians must be EPA-certified.",
    keyPoints: [
      "Always wear safety glasses and gloves when handling refrigerant",
      "Refrigerant vapor can displace oxygen in enclosed spaces",
      "Use refrigerant identifier to verify type before recovery",
      "ASHRAE 15 requires ventilation and safety cutoffs in machine rooms",
      "Skin contact with liquid refrigerant causes frostbite",
    ],
    tags: [
      "PPE",
      "safety",
      "refrigerant",
      "handling",
      "ESCO",
      "ASHRAE",
      "ventilation",
    ],
  },
  {
    id: 404,
    title: "HVAC Excellence: Electrical Troubleshooting Standards for Techs",
    source: "HVAC Excellence",
    tier: "training",
    url: "https://www.hvacexcellence.org",
    summary:
      "HVAC Excellence competency standards require technicians to safely diagnose electrical faults using multimeters, clamp meters, and wiring diagrams. This includes testing voltage, current, resistance, and continuity on contactors, motors, transformers, and control boards following proper lockout/tagout protocols.",
    keyPoints: [
      "Use wiring diagrams before and during electrical diagnosis",
      "Test components in sequence: power source → controls → load",
      "Verify supply voltage matches nameplate before condemning components",
      "Always LOTO before resistance or continuity testing",
      "Megohm testing checks motor winding insulation integrity",
    ],
    tags: [
      "electrical",
      "troubleshooting",
      "multimeter",
      "contactor",
      "motor",
      "wiring",
      "HVAC Excellence",
    ],
  },
  {
    id: 405,
    title: "ESCO Institute: System Evacuation and Dehydration Procedures",
    source: "ESCO Institute",
    tier: "training",
    url: "https://www.escogroup.org",
    summary:
      "Proper evacuation removes non-condensables and moisture from a refrigerant system before charging. The industry standard is pulling the system to 500 microns or lower and holding for at least 15 minutes. Use a dedicated micron gauge (not a manifold gauge) for accurate readings. Moisture left in the system causes ice formation and acid damage.",
    keyPoints: [
      "Target evacuation level: 500 microns or lower",
      "Use a micron gauge, not a manifold gauge for vacuum measurement",
      "Triple evacuation method recommended for systems exposed to moisture",
      "Decay test: hold vacuum for 15 minutes after pump isolation",
      "Rising micron level during decay test indicates moisture or leak",
    ],
    tags: [
      "evacuation",
      "micron",
      "vacuum",
      "dehydration",
      "ESCO",
      "moisture",
      "charging",
    ],
  },
];

export function searchExternalResources(query: string): ExternalResource[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase().trim();
  const words = q.split(/\s+/);

  return externalResources
    .map((resource) => {
      const searchText = [
        resource.title,
        resource.summary,
        ...resource.tags,
        ...resource.keyPoints,
        resource.source,
      ]
        .join(" ")
        .toLowerCase();

      const score = words.reduce((acc, word) => {
        if (resource.title.toLowerCase().includes(word)) return acc + 3;
        if (resource.tags.some((t) => t.toLowerCase().includes(word)))
          return acc + 2;
        if (searchText.includes(word)) return acc + 1;
        return acc;
      }, 0);

      return { resource, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ resource }) => resource);
}
