import { EpaSection, QuestionDifficulty } from "../types/local";
import type { EpaExamQuestion } from "../types/local";

// Original EPA 608 Exam Question Bank
// Total: 105 questions (30 Core, 25 Type I, 25 Type II, 25 Type III)

export const EPA_QUESTION_BANK: EpaExamQuestion[] = [
  // ============================================================================
  // EPA CORE SECTION - 30 Questions
  // ============================================================================
  {
    id: BigInt(1),
    section: EpaSection.core,
    difficulty: QuestionDifficulty.easy,
    question:
      "What is the primary environmental concern associated with CFC and HCFC refrigerants?",
    options: [
      "They contribute to ozone depletion in the stratosphere",
      "They cause acid rain",
      "They increase oxygen levels in the atmosphere",
      "They reduce greenhouse gas emissions",
    ],
    correctAnswer: "They contribute to ozone depletion in the stratosphere",
    explanation:
      "CFCs and HCFCs contain chlorine atoms that break down ozone molecules in the stratosphere, leading to ozone layer depletion and increased UV radiation reaching Earth.",
    regulatoryReference: "EPA Section 608 - Clean Air Act",
    lessonLink: "/study/epa-608/core/ozone-depletion",
    topicCategory: "Environmental Impact",
  },
  {
    id: BigInt(2),
    section: EpaSection.core,
    difficulty: QuestionDifficulty.medium,
    question:
      "According to EPA regulations, what is the maximum penalty for knowingly venting refrigerant into the atmosphere?",
    options: [
      "$10,000 per day per violation",
      "$37,500 per day per violation",
      "$5,000 per violation",
      "$50,000 per year",
    ],
    correctAnswer: "$37,500 per day per violation",
    explanation:
      "The EPA can impose civil penalties up to $37,500 per day per violation for knowingly venting refrigerants. Criminal penalties can also apply for willful violations.",
    regulatoryReference: "EPA Section 608 - Penalties",
    lessonLink: "/study/epa-608/core/regulations",
    topicCategory: "Regulations and Penalties",
  },
  {
    id: BigInt(3),
    section: EpaSection.core,
    difficulty: QuestionDifficulty.easy,
    question:
      "Which refrigerant has the highest Ozone Depletion Potential (ODP)?",
    options: [
      "R-12 (CFC)",
      "R-410A (HFC)",
      "R-134a (HFC)",
      "R-600a (Hydrocarbon)",
    ],
    correctAnswer: "R-12 (CFC)",
    explanation:
      "R-12 is a CFC refrigerant with an ODP of 1.0, the highest among common refrigerants. HFCs like R-410A and R-134a have zero ODP, while hydrocarbons also have zero ODP.",
    regulatoryReference: "EPA Section 608 - Refrigerant Properties",
    lessonLink: "/study/epa-608/core/refrigerant-classification",
    topicCategory: "Refrigerant Properties",
  },
  {
    id: BigInt(4),
    section: EpaSection.core,
    difficulty: QuestionDifficulty.hard,
    question:
      "What is the minimum required evacuation level for a high-pressure appliance with a charge of 200 pounds or more before disposal?",
    options: [
      "0 psig",
      "4 inches of mercury vacuum",
      "10 inches of mercury vacuum",
      "15 inches of mercury vacuum",
    ],
    correctAnswer: "10 inches of mercury vacuum",
    explanation:
      "For high-pressure appliances with charges of 200 pounds or more, EPA requires evacuation to 10 inches of mercury vacuum before disposal to minimize refrigerant release.",
    regulatoryReference: "EPA Section 608 - Recovery Requirements",
    lessonLink: "/study/epa-608/core/recovery-procedures",
    topicCategory: "Recovery Standards",
  },
  {
    id: BigInt(5),
    section: EpaSection.core,
    difficulty: QuestionDifficulty.medium,
    question:
      'Which of the following is considered a "de minimis" release under EPA regulations?',
    options: [
      "Refrigerant released during normal system operation",
      "Refrigerant released during proper connection and disconnection of hoses",
      "Intentional venting during service",
      "Leaks from damaged equipment",
    ],
    correctAnswer:
      "Refrigerant released during proper connection and disconnection of hoses",
    explanation:
      "De minimis releases are small, unavoidable releases that occur during proper service procedures, such as connecting and disconnecting hoses. Intentional venting is prohibited.",
    regulatoryReference: "EPA Section 608 - De Minimis Release",
    lessonLink: "/study/epa-608/core/regulations",
    topicCategory: "Regulations",
  },
  {
    id: BigInt(6),
    section: EpaSection.core,
    difficulty: QuestionDifficulty.easy,
    question: 'What does the term "reclaim" mean in refrigerant handling?',
    options: [
      "Reprocessing refrigerant to new product specifications",
      "Removing refrigerant from a system",
      "Cleaning refrigerant with a filter-drier",
      "Storing refrigerant in a recovery cylinder",
    ],
    correctAnswer: "Reprocessing refrigerant to new product specifications",
    explanation:
      "Reclaiming means reprocessing refrigerant to ARI 700 standards, which are equivalent to new product specifications. This is more thorough than recycling.",
    regulatoryReference: "EPA Section 608 - Definitions",
    lessonLink: "/study/epa-608/core/recovery-procedures",
    topicCategory: "Refrigerant Handling",
  },
  {
    id: BigInt(7),
    section: EpaSection.core,
    difficulty: QuestionDifficulty.medium,
    question:
      "How long must technicians keep records of refrigerant purchases and sales?",
    options: ["1 year", "3 years", "5 years", "10 years"],
    correctAnswer: "3 years",
    explanation:
      "EPA requires technicians and businesses to maintain records of refrigerant purchases and sales for at least 3 years for compliance verification.",
    regulatoryReference: "EPA Section 608 - Recordkeeping",
    lessonLink: "/study/epa-608/core/regulations",
    topicCategory: "Recordkeeping",
  },
  {
    id: BigInt(8),
    section: EpaSection.core,
    difficulty: QuestionDifficulty.hard,
    question:
      "What is the required leak repair threshold for commercial refrigeration equipment with a charge of 50 pounds or more?",
    options: [
      "10% annual leak rate",
      "20% annual leak rate",
      "30% annual leak rate",
      "35% annual leak rate",
    ],
    correctAnswer: "20% annual leak rate",
    explanation:
      "Commercial refrigeration equipment with 50+ pounds of refrigerant must be repaired if the annual leak rate exceeds 20%. Industrial process refrigeration has a 30% threshold.",
    regulatoryReference: "EPA Section 608 - Leak Repair",
    lessonLink: "/study/epa-608/core/leak-detection",
    topicCategory: "Leak Repair Requirements",
  },
  {
    id: BigInt(9),
    section: EpaSection.core,
    difficulty: QuestionDifficulty.easy,
    question:
      "Which color cylinder is typically used for recovered refrigerant?",
    options: ["Gray with yellow top", "White", "Green", "Blue"],
    correctAnswer: "Gray with yellow top",
    explanation:
      "Gray cylinders with yellow tops are designated for recovered refrigerant. Never use disposable cylinders (white or green) for recovery.",
    regulatoryReference: "EPA Section 608 - Cylinder Identification",
    lessonLink: "/study/epa-608/core/recovery-procedures",
    topicCategory: "Equipment Standards",
  },
  {
    id: BigInt(10),
    section: EpaSection.core,
    difficulty: QuestionDifficulty.medium,
    question:
      'What is the primary difference between "recovery" and "recycling" of refrigerant?',
    options: [
      "Recovery removes refrigerant; recycling cleans it for reuse",
      "Recovery is faster than recycling",
      "Recycling requires EPA certification",
      "Recovery can only be done on small appliances",
    ],
    correctAnswer:
      "Recovery removes refrigerant; recycling cleans it for reuse",
    explanation:
      "Recovery is the process of removing refrigerant from a system. Recycling involves cleaning the refrigerant through oil separation and filtration for reuse.",
    regulatoryReference: "EPA Section 608 - Definitions",
    lessonLink: "/study/epa-608/core/recovery-procedures",
    topicCategory: "Refrigerant Handling",
  },
  {
    id: BigInt(11),
    section: EpaSection.core,
    difficulty: QuestionDifficulty.hard,
    question:
      "When must a technician evacuate a system to the prescribed level before opening it for major repairs?",
    options: [
      "Only if the system is leaking",
      "Always, unless the system is being disposed of",
      "Only for systems with more than 200 pounds of refrigerant",
      "Never, recovery is sufficient",
    ],
    correctAnswer: "Always, unless the system is being disposed of",
    explanation:
      "EPA requires evacuation to prescribed levels before opening any system for major repairs to minimize refrigerant release, except when the appliance is being disposed of.",
    regulatoryReference: "EPA Section 608 - Service Requirements",
    lessonLink: "/study/epa-608/core/recovery-procedures",
    topicCategory: "Service Procedures",
  },
  {
    id: BigInt(12),
    section: EpaSection.core,
    difficulty: QuestionDifficulty.easy,
    question:
      "Which organization sets the standards for refrigerant purity after reclaiming?",
    options: [
      "ARI (Air-Conditioning, Heating, and Refrigeration Institute)",
      "EPA (Environmental Protection Agency)",
      "OSHA (Occupational Safety and Health Administration)",
      "ASHRAE (American Society of Heating, Refrigerating and Air-Conditioning Engineers)",
    ],
    correctAnswer:
      "ARI (Air-Conditioning, Heating, and Refrigeration Institute)",
    explanation:
      "ARI Standard 700 specifies the purity requirements for reclaimed refrigerants, ensuring they meet new product specifications.",
    regulatoryReference: "EPA Section 608 - Standards",
    lessonLink: "/study/epa-608/core/recovery-procedures",
    topicCategory: "Industry Standards",
  },
  {
    id: BigInt(13),
    section: EpaSection.core,
    difficulty: QuestionDifficulty.medium,
    question:
      "What is the maximum time allowed to repair a leak once it exceeds the threshold?",
    options: ["14 days", "30 days", "60 days", "90 days"],
    correctAnswer: "30 days",
    explanation:
      "Once a leak exceeds the threshold rate, repairs must be completed within 30 days. Extensions may be granted if parts are on order.",
    regulatoryReference: "EPA Section 608 - Leak Repair Timeline",
    lessonLink: "/study/epa-608/core/leak-detection",
    topicCategory: "Leak Repair Requirements",
  },
  {
    id: BigInt(14),
    section: EpaSection.core,
    difficulty: QuestionDifficulty.hard,
    question:
      "Which refrigerant has the highest Global Warming Potential (GWP)?",
    options: ["R-404A", "R-134a", "R-410A", "R-290 (Propane)"],
    correctAnswer: "R-404A",
    explanation:
      "R-404A has a GWP of approximately 3,922, significantly higher than R-410A (2,088), R-134a (1,430), and R-290 (3). Higher GWP means greater climate impact.",
    regulatoryReference: "EPA Section 608 - Refrigerant Properties",
    lessonLink: "/study/epa-608/core/environmental-impact",
    topicCategory: "Environmental Impact",
  },
  {
    id: BigInt(15),
    section: EpaSection.core,
    difficulty: QuestionDifficulty.easy,
    question: "What does EPA Section 608 primarily regulate?",
    options: [
      "Refrigerant handling and disposal",
      "Equipment manufacturing standards",
      "Technician wages",
      "Building codes",
    ],
    correctAnswer: "Refrigerant handling and disposal",
    explanation:
      "EPA Section 608 of the Clean Air Act regulates the handling, recovery, recycling, and disposal of refrigerants to protect the ozone layer and environment.",
    regulatoryReference: "EPA Section 608 - Overview",
    lessonLink: "/study/epa-608/core/regulations",
    topicCategory: "Regulations",
  },
  {
    id: BigInt(16),
    section: EpaSection.core,
    difficulty: QuestionDifficulty.medium,
    question:
      "What is the minimum sensitivity requirement for leak detectors used in EPA compliance?",
    options: [
      "0.1 ounce per year",
      "0.5 ounce per year",
      "1.0 ounce per year",
      "2.0 ounces per year",
    ],
    correctAnswer: "0.5 ounce per year",
    explanation:
      "EPA requires leak detectors to have a sensitivity of at least 0.5 ounce per year (or 0.25 ounce per year for certain applications) to effectively detect refrigerant leaks.",
    regulatoryReference: "EPA Section 608 - Leak Detection Standards",
    lessonLink: "/study/epa-608/core/leak-detection",
    topicCategory: "Equipment Standards",
  },
  {
    id: BigInt(17),
    section: EpaSection.core,
    difficulty: QuestionDifficulty.hard,
    question:
      "When recovering refrigerant from a system for disposal, what is the required recovery level for appliances containing less than 200 pounds of refrigerant?",
    options: [
      "0 psig",
      "4 inches of mercury vacuum",
      "10 inches of mercury vacuum",
      "15 inches of mercury vacuum",
    ],
    correctAnswer: "4 inches of mercury vacuum",
    explanation:
      "For appliances with less than 200 pounds of refrigerant being disposed of, EPA requires recovery to 4 inches of mercury vacuum to minimize environmental impact.",
    regulatoryReference: "EPA Section 608 - Recovery Requirements",
    lessonLink: "/study/epa-608/core/recovery-procedures",
    topicCategory: "Recovery Standards",
  },
  {
    id: BigInt(18),
    section: EpaSection.core,
    difficulty: QuestionDifficulty.easy,
    question: "Which type of refrigerant does NOT deplete the ozone layer?",
    options: [
      "HFC (Hydrofluorocarbon)",
      "CFC (Chlorofluorocarbon)",
      "HCFC (Hydrochlorofluorocarbon)",
      "All refrigerants deplete ozone",
    ],
    correctAnswer: "HFC (Hydrofluorocarbon)",
    explanation:
      "HFCs contain no chlorine atoms and therefore have zero Ozone Depletion Potential (ODP). CFCs and HCFCs contain chlorine and do deplete ozone.",
    regulatoryReference: "EPA Section 608 - Refrigerant Classification",
    lessonLink: "/study/epa-608/core/refrigerant-classification",
    topicCategory: "Refrigerant Properties",
  },
  {
    id: BigInt(19),
    section: EpaSection.core,
    difficulty: QuestionDifficulty.medium,
    question:
      "What must be done before disposing of an appliance containing refrigerant?",
    options: [
      "Recover refrigerant to required levels",
      "Drain the oil",
      "Remove the compressor",
      "Flush the system with nitrogen",
    ],
    correctAnswer: "Recover refrigerant to required levels",
    explanation:
      "EPA requires all refrigerant to be recovered to specified vacuum levels before disposing of any appliance to prevent atmospheric release.",
    regulatoryReference: "EPA Section 608 - Disposal Requirements",
    lessonLink: "/study/epa-608/core/recovery-procedures",
    topicCategory: "Disposal Procedures",
  },
  {
    id: BigInt(20),
    section: EpaSection.core,
    difficulty: QuestionDifficulty.hard,
    question: "Which statement about refrigerant cylinders is correct?",
    options: [
      "Recovery cylinders must never be filled above 80% of capacity",
      "Disposable cylinders can be refilled once",
      "All cylinders can be used for any refrigerant",
      "Cylinder color indicates refrigerant type",
    ],
    correctAnswer:
      "Recovery cylinders must never be filled above 80% of capacity",
    explanation:
      "Recovery cylinders should never exceed 80% liquid capacity to allow for thermal expansion. Disposable cylinders must never be refilled, and cylinder color indicates use (not refrigerant type).",
    regulatoryReference: "EPA Section 608 - Cylinder Safety",
    lessonLink: "/study/epa-608/core/recovery-procedures",
    topicCategory: "Safety Procedures",
  },
  {
    id: BigInt(21),
    section: EpaSection.core,
    difficulty: QuestionDifficulty.easy,
    question: "What is the purpose of the Montreal Protocol?",
    options: [
      "Phase out ozone-depleting substances globally",
      "Regulate greenhouse gas emissions",
      "Set refrigerant pricing standards",
      "Establish technician certification requirements",
    ],
    correctAnswer: "Phase out ozone-depleting substances globally",
    explanation:
      "The Montreal Protocol is an international treaty designed to protect the ozone layer by phasing out production and consumption of ozone-depleting substances.",
    regulatoryReference: "EPA Section 608 - International Agreements",
    lessonLink: "/study/epa-608/core/environmental-impact",
    topicCategory: "Environmental Policy",
  },
  {
    id: BigInt(22),
    section: EpaSection.core,
    difficulty: QuestionDifficulty.medium,
    question:
      "What is required when shipping recovered refrigerant for reclamation?",
    options: [
      "DOT-approved cylinders and proper labeling",
      "Only EPA approval",
      "No special requirements",
      "Refrigerant must be recycled first",
    ],
    correctAnswer: "DOT-approved cylinders and proper labeling",
    explanation:
      "Recovered refrigerant must be shipped in DOT-approved cylinders with proper hazard labels and documentation for safety and regulatory compliance.",
    regulatoryReference: "EPA Section 608 - Transportation",
    lessonLink: "/study/epa-608/core/recovery-procedures",
    topicCategory: "Transportation Requirements",
  },
  {
    id: BigInt(23),
    section: EpaSection.core,
    difficulty: QuestionDifficulty.hard,
    question: "What is the annual leak rate calculation based on?",
    options: [
      "Refrigerant added divided by system charge",
      "Total refrigerant in system",
      "Number of leaks detected",
      "Age of equipment",
    ],
    correctAnswer: "Refrigerant added divided by system charge",
    explanation:
      "Annual leak rate is calculated by dividing the amount of refrigerant added during a 12-month period by the total system charge, expressed as a percentage.",
    regulatoryReference: "EPA Section 608 - Leak Rate Calculation",
    lessonLink: "/study/epa-608/core/leak-detection",
    topicCategory: "Leak Calculations",
  },
  {
    id: BigInt(24),
    section: EpaSection.core,
    difficulty: QuestionDifficulty.easy,
    question:
      "Which certification type allows a technician to work on all types of equipment?",
    options: ["Universal", "Type I", "Type II", "Type III"],
    correctAnswer: "Universal",
    explanation:
      "Universal certification combines Type I, II, and III, allowing technicians to service all types of refrigeration and air conditioning equipment.",
    regulatoryReference: "EPA Section 608 - Certification Types",
    lessonLink: "/study/epa-608/core/certification",
    topicCategory: "Certification",
  },
  {
    id: BigInt(25),
    section: EpaSection.core,
    difficulty: QuestionDifficulty.medium,
    question:
      "What must be done if a system cannot be repaired within the required timeframe?",
    options: [
      "Develop a retrofit or retirement plan",
      "Continue operating and add refrigerant",
      "Vent the refrigerant",
      "Ignore the requirement",
    ],
    correctAnswer: "Develop a retrofit or retirement plan",
    explanation:
      "If repairs cannot be completed within 30 days, a retrofit or retirement plan must be developed and submitted to EPA within the required timeframe.",
    regulatoryReference: "EPA Section 608 - Leak Repair Extensions",
    lessonLink: "/study/epa-608/core/leak-detection",
    topicCategory: "Compliance Procedures",
  },
  {
    id: BigInt(26),
    section: EpaSection.core,
    difficulty: QuestionDifficulty.hard,
    question:
      'What is the difference between "passive" and "active" recovery methods?',
    options: [
      "Passive uses system pressure; active uses recovery machine",
      "Passive is faster than active",
      "Active is only for large systems",
      "There is no difference",
    ],
    correctAnswer: "Passive uses system pressure; active uses recovery machine",
    explanation:
      "Passive recovery relies on system pressure to push refrigerant into the recovery cylinder. Active recovery uses a recovery machine to pull refrigerant, achieving lower vacuum levels.",
    regulatoryReference: "EPA Section 608 - Recovery Methods",
    lessonLink: "/study/epa-608/core/recovery-procedures",
    topicCategory: "Recovery Techniques",
  },
  {
    id: BigInt(27),
    section: EpaSection.core,
    difficulty: QuestionDifficulty.easy,
    question: "What does ASHRAE stand for?",
    options: [
      "American Society of Heating, Refrigerating and Air-Conditioning Engineers",
      "Association of Safety and Health in Refrigeration Applications",
      "Advanced Systems for HVAC and Refrigeration Equipment",
      "Automated Service for Heating and Air Conditioning",
    ],
    correctAnswer:
      "American Society of Heating, Refrigerating and Air-Conditioning Engineers",
    explanation:
      "ASHRAE is the professional organization that develops standards and guidelines for HVAC and refrigeration systems, including refrigerant safety classifications.",
    regulatoryReference: "EPA Section 608 - Industry Organizations",
    lessonLink: "/study/epa-608/core/standards",
    topicCategory: "Industry Standards",
  },
  {
    id: BigInt(28),
    section: EpaSection.core,
    difficulty: QuestionDifficulty.medium,
    question: "When is refrigerant mixing prohibited?",
    options: [
      "When recovering into a cylinder containing a different refrigerant",
      "When charging a system",
      "When recycling refrigerant",
      "Mixing is always allowed",
    ],
    correctAnswer:
      "When recovering into a cylinder containing a different refrigerant",
    explanation:
      "Mixing different refrigerants in a recovery cylinder is prohibited as it creates a contaminated blend that cannot be recycled or reclaimed effectively.",
    regulatoryReference: "EPA Section 608 - Recovery Procedures",
    lessonLink: "/study/epa-608/core/recovery-procedures",
    topicCategory: "Recovery Standards",
  },
  {
    id: BigInt(29),
    section: EpaSection.core,
    difficulty: QuestionDifficulty.hard,
    question:
      "What is the required evacuation level for a low-pressure appliance before disposal?",
    options: [
      "25 mm of mercury absolute",
      "29 inches of mercury vacuum",
      "0 psig",
      "15 inches of mercury vacuum",
    ],
    correctAnswer: "25 mm of mercury absolute",
    explanation:
      "Low-pressure appliances (centrifugal chillers) must be evacuated to 25 mm of mercury absolute (approximately 29 inches of mercury vacuum) before disposal.",
    regulatoryReference: "EPA Section 608 - Low-Pressure Recovery",
    lessonLink: "/study/epa-608/core/recovery-procedures",
    topicCategory: "Recovery Standards",
  },
  {
    id: BigInt(30),
    section: EpaSection.core,
    difficulty: QuestionDifficulty.easy,
    question: "What is the primary purpose of EPA Section 608 certification?",
    options: [
      "Ensure technicians understand proper refrigerant handling",
      "Increase technician wages",
      "Regulate equipment manufacturers",
      "Set building codes",
    ],
    correctAnswer: "Ensure technicians understand proper refrigerant handling",
    explanation:
      "EPA Section 608 certification ensures that technicians have the knowledge and skills to properly handle refrigerants, minimizing environmental harm and ensuring regulatory compliance.",
    regulatoryReference: "EPA Section 608 - Certification Purpose",
    lessonLink: "/study/epa-608/core/certification",
    topicCategory: "Certification",
  },

  // ============================================================================
  // TYPE I SECTION - 25 Questions
  // ============================================================================
  {
    id: BigInt(31),
    section: EpaSection.typeI,
    difficulty: QuestionDifficulty.easy,
    question:
      "What is the maximum refrigerant charge for a Type I small appliance?",
    options: [
      "5 pounds or less",
      "10 pounds or less",
      "15 pounds or less",
      "20 pounds or less",
    ],
    correctAnswer: "5 pounds or less",
    explanation:
      "Type I certification covers small appliances containing 5 pounds or less of refrigerant, such as household refrigerators, freezers, and window air conditioners.",
    regulatoryReference: "EPA Section 608 - Type I Definition",
    lessonLink: "/study/epa-608/type1/overview",
    topicCategory: "Type I Classification",
  },
  {
    id: BigInt(32),
    section: EpaSection.typeI,
    difficulty: QuestionDifficulty.medium,
    question:
      "What is the required recovery level for a small appliance with a non-functioning compressor?",
    options: [
      "0 psig",
      "4 inches of mercury vacuum",
      "10 inches of mercury vacuum",
      "15 inches of mercury vacuum",
    ],
    correctAnswer: "0 psig",
    explanation:
      "When the compressor is not functioning, recovery to 0 psig is acceptable for small appliances because achieving deeper vacuum is not practical without a working compressor.",
    regulatoryReference: "EPA Section 608 - Type I Recovery",
    lessonLink: "/study/epa-608/type1/recovery",
    topicCategory: "Recovery Requirements",
  },
  {
    id: BigInt(33),
    section: EpaSection.typeI,
    difficulty: QuestionDifficulty.hard,
    question:
      "What is the required recovery level for a small appliance with a functioning compressor?",
    options: [
      "4 inches of mercury vacuum",
      "10 inches of mercury vacuum",
      "15 inches of mercury vacuum",
      "0 psig",
    ],
    correctAnswer: "4 inches of mercury vacuum",
    explanation:
      "For small appliances with functioning compressors, EPA requires recovery to 4 inches of mercury vacuum to ensure maximum refrigerant removal.",
    regulatoryReference: "EPA Section 608 - Type I Recovery",
    lessonLink: "/study/epa-608/type1/recovery",
    topicCategory: "Recovery Requirements",
  },
  {
    id: BigInt(34),
    section: EpaSection.typeI,
    difficulty: QuestionDifficulty.easy,
    question: "Which of the following is an example of a Type I appliance?",
    options: [
      "Household refrigerator",
      "Commercial ice machine",
      "Rooftop air conditioner",
      "Centrifugal chiller",
    ],
    correctAnswer: "Household refrigerator",
    explanation:
      "Household refrigerators typically contain less than 5 pounds of refrigerant and are classified as Type I small appliances.",
    regulatoryReference: "EPA Section 608 - Type I Examples",
    lessonLink: "/study/epa-608/type1/overview",
    topicCategory: "Type I Classification",
  },
  {
    id: BigInt(35),
    section: EpaSection.typeI,
    difficulty: QuestionDifficulty.medium,
    question:
      "What is the most common refrigerant used in household refrigerators manufactured after 1995?",
    options: ["R-134a", "R-12", "R-22", "R-410A"],
    correctAnswer: "R-134a",
    explanation:
      "R-134a (HFC) replaced R-12 (CFC) in household refrigerators after 1995 due to its zero ozone depletion potential.",
    regulatoryReference: "EPA Section 608 - Type I Refrigerants",
    lessonLink: "/study/epa-608/type1/refrigerants",
    topicCategory: "Refrigerant Types",
  },
  {
    id: BigInt(36),
    section: EpaSection.typeI,
    difficulty: QuestionDifficulty.hard,
    question:
      "When recovering refrigerant from a small appliance, what should be done if the recovery cylinder becomes full?",
    options: [
      "Stop recovery and use a different cylinder",
      "Continue recovery into the same cylinder",
      "Vent excess refrigerant",
      "Mix refrigerants in the cylinder",
    ],
    correctAnswer: "Stop recovery and use a different cylinder",
    explanation:
      "Never overfill a recovery cylinder beyond 80% capacity. Stop recovery and switch to a different cylinder to prevent safety hazards from pressure buildup.",
    regulatoryReference: "EPA Section 608 - Cylinder Safety",
    lessonLink: "/study/epa-608/type1/recovery",
    topicCategory: "Safety Procedures",
  },
  {
    id: BigInt(37),
    section: EpaSection.typeI,
    difficulty: QuestionDifficulty.easy,
    question:
      "What type of recovery equipment is typically used for small appliances?",
    options: [
      "Self-contained recovery unit",
      "System-dependent recovery",
      "Passive recovery only",
      "No recovery equipment needed",
    ],
    correctAnswer: "Self-contained recovery unit",
    explanation:
      "Self-contained recovery units are portable devices specifically designed for recovering refrigerant from small appliances efficiently.",
    regulatoryReference: "EPA Section 608 - Type I Equipment",
    lessonLink: "/study/epa-608/type1/equipment",
    topicCategory: "Recovery Equipment",
  },
  {
    id: BigInt(38),
    section: EpaSection.typeI,
    difficulty: QuestionDifficulty.medium,
    question:
      "What is the purpose of a piercing valve when servicing small appliances?",
    options: [
      "Access sealed systems without service ports",
      "Increase system pressure",
      "Measure refrigerant charge",
      "Detect leaks",
    ],
    correctAnswer: "Access sealed systems without service ports",
    explanation:
      "Piercing valves (saddle valves) allow technicians to access sealed refrigeration systems that lack service ports for recovery and charging operations.",
    regulatoryReference: "EPA Section 608 - Type I Service",
    lessonLink: "/study/epa-608/type1/service-procedures",
    topicCategory: "Service Tools",
  },
  {
    id: BigInt(39),
    section: EpaSection.typeI,
    difficulty: QuestionDifficulty.hard,
    question:
      "What should be done with a small appliance that is not cost-effective to repair?",
    options: [
      "Recover refrigerant before disposal",
      "Dispose of it without recovery",
      "Vent the refrigerant",
      "Sell it as-is",
    ],
    correctAnswer: "Recover refrigerant before disposal",
    explanation:
      "All refrigerant must be recovered to required levels before disposing of any appliance, regardless of repair cost or appliance value.",
    regulatoryReference: "EPA Section 608 - Disposal Requirements",
    lessonLink: "/study/epa-608/type1/disposal",
    topicCategory: "Disposal Procedures",
  },
  {
    id: BigInt(40),
    section: EpaSection.typeI,
    difficulty: QuestionDifficulty.easy,
    question:
      "Which component in a household refrigerator is responsible for compressing refrigerant?",
    options: ["Compressor", "Evaporator", "Condenser", "Expansion device"],
    correctAnswer: "Compressor",
    explanation:
      "The compressor increases refrigerant pressure and temperature, circulating it through the refrigeration cycle.",
    regulatoryReference: "EPA Section 608 - System Components",
    lessonLink: "/study/epa-608/type1/system-basics",
    topicCategory: "System Components",
  },
  {
    id: BigInt(41),
    section: EpaSection.typeI,
    difficulty: QuestionDifficulty.medium,
    question:
      "What is the typical operating pressure range for the low side of an R-134a household refrigerator?",
    options: ["0-10 psig", "20-30 psig", "50-60 psig", "100-120 psig"],
    correctAnswer: "0-10 psig",
    explanation:
      "R-134a household refrigerators typically operate with low-side pressures between 0-10 psig, corresponding to evaporator temperatures around 0°F.",
    regulatoryReference: "EPA Section 608 - Operating Pressures",
    lessonLink: "/study/epa-608/type1/system-basics",
    topicCategory: "System Operation",
  },
  {
    id: BigInt(42),
    section: EpaSection.typeI,
    difficulty: QuestionDifficulty.hard,
    question:
      "When is it acceptable to use passive recovery on a small appliance?",
    options: [
      "When the compressor is not functioning",
      "Always",
      "Never",
      "Only for R-12 systems",
    ],
    correctAnswer: "When the compressor is not functioning",
    explanation:
      "Passive recovery (using system pressure only) is acceptable when the compressor is not functioning, as active recovery requires a working compressor to achieve required vacuum levels.",
    regulatoryReference: "EPA Section 608 - Recovery Methods",
    lessonLink: "/study/epa-608/type1/recovery",
    topicCategory: "Recovery Techniques",
  },
  {
    id: BigInt(43),
    section: EpaSection.typeI,
    difficulty: QuestionDifficulty.easy,
    question:
      "What is the primary safety concern when working with small appliance compressors?",
    options: [
      "Electrical shock hazard",
      "High temperature",
      "Noise levels",
      "Weight",
    ],
    correctAnswer: "Electrical shock hazard",
    explanation:
      "Small appliance compressors operate on household electrical current and pose electrical shock hazards. Always disconnect power before servicing.",
    regulatoryReference: "EPA Section 608 - Safety",
    lessonLink: "/study/epa-608/type1/safety",
    topicCategory: "Safety Procedures",
  },
  {
    id: BigInt(44),
    section: EpaSection.typeI,
    difficulty: QuestionDifficulty.medium,
    question:
      "What should be checked before recovering refrigerant from a small appliance?",
    options: [
      "Recovery cylinder has adequate capacity",
      "Appliance is plugged in",
      "Outdoor temperature",
      "Time of day",
    ],
    correctAnswer: "Recovery cylinder has adequate capacity",
    explanation:
      "Always verify the recovery cylinder has sufficient capacity and is not filled beyond 80% to safely accept the refrigerant being recovered.",
    regulatoryReference: "EPA Section 608 - Recovery Procedures",
    lessonLink: "/study/epa-608/type1/recovery",
    topicCategory: "Recovery Procedures",
  },
  {
    id: BigInt(45),
    section: EpaSection.typeI,
    difficulty: QuestionDifficulty.hard,
    question:
      "What is the maximum allowable pressure for a DOT 39 recovery cylinder at 130°F?",
    options: ["260 psig", "300 psig", "400 psig", "500 psig"],
    correctAnswer: "260 psig",
    explanation:
      "DOT 39 cylinders have a service pressure of 260 psig at 130°F. Never exceed this pressure to prevent cylinder failure.",
    regulatoryReference: "EPA Section 608 - Cylinder Specifications",
    lessonLink: "/study/epa-608/type1/equipment",
    topicCategory: "Equipment Standards",
  },
  {
    id: BigInt(46),
    section: EpaSection.typeI,
    difficulty: QuestionDifficulty.easy,
    question: "What does a frost-covered evaporator coil typically indicate?",
    options: [
      "Restricted airflow or low refrigerant charge",
      "Overcharge of refrigerant",
      "Normal operation",
      "High ambient temperature",
    ],
    correctAnswer: "Restricted airflow or low refrigerant charge",
    explanation:
      "Excessive frost on the evaporator coil usually indicates restricted airflow (dirty coil, blocked fan) or insufficient refrigerant charge.",
    regulatoryReference: "EPA Section 608 - Troubleshooting",
    lessonLink: "/study/epa-608/type1/troubleshooting",
    topicCategory: "Diagnostics",
  },
  {
    id: BigInt(47),
    section: EpaSection.typeI,
    difficulty: QuestionDifficulty.medium,
    question:
      "What is the purpose of the capillary tube in a small appliance refrigeration system?",
    options: [
      "Meter refrigerant flow and reduce pressure",
      "Increase refrigerant pressure",
      "Filter refrigerant",
      "Store refrigerant",
    ],
    correctAnswer: "Meter refrigerant flow and reduce pressure",
    explanation:
      "The capillary tube is a fixed metering device that controls refrigerant flow and reduces pressure from the high side to the low side of the system.",
    regulatoryReference: "EPA Section 608 - System Components",
    lessonLink: "/study/epa-608/type1/system-basics",
    topicCategory: "System Components",
  },
  {
    id: BigInt(48),
    section: EpaSection.typeI,
    difficulty: QuestionDifficulty.hard,
    question:
      "When recovering refrigerant from multiple small appliances, what is the best practice?",
    options: [
      "Use separate cylinders for different refrigerant types",
      "Mix all refrigerants in one cylinder",
      "Vent refrigerant between recoveries",
      "Recovery is not required for multiple units",
    ],
    correctAnswer: "Use separate cylinders for different refrigerant types",
    explanation:
      "Never mix different refrigerant types in the same cylinder. Use dedicated cylinders for each refrigerant type to prevent contamination.",
    regulatoryReference: "EPA Section 608 - Recovery Best Practices",
    lessonLink: "/study/epa-608/type1/recovery",
    topicCategory: "Recovery Procedures",
  },
  {
    id: BigInt(49),
    section: EpaSection.typeI,
    difficulty: QuestionDifficulty.easy,
    question:
      "What is the typical refrigerant charge for a household refrigerator?",
    options: ["2-4 ounces", "1-2 pounds", "5-10 pounds", "15-20 pounds"],
    correctAnswer: "2-4 ounces",
    explanation:
      "Most household refrigerators contain only 2-4 ounces of refrigerant, well below the 5-pound Type I threshold.",
    regulatoryReference: "EPA Section 608 - Type I Charges",
    lessonLink: "/study/epa-608/type1/overview",
    topicCategory: "System Specifications",
  },
  {
    id: BigInt(50),
    section: EpaSection.typeI,
    difficulty: QuestionDifficulty.medium,
    question:
      "What should be done if refrigerant is accidentally released during small appliance service?",
    options: [
      "Document the incident and minimize future releases",
      "Ignore it as it is a small amount",
      "Report it to EPA immediately",
      "Charge the customer extra",
    ],
    correctAnswer: "Document the incident and minimize future releases",
    explanation:
      "While small de minimis releases may occur during proper service, technicians should document incidents and take steps to minimize future releases.",
    regulatoryReference: "EPA Section 608 - Incident Reporting",
    lessonLink: "/study/epa-608/type1/compliance",
    topicCategory: "Compliance",
  },
  {
    id: BigInt(51),
    section: EpaSection.typeI,
    difficulty: QuestionDifficulty.hard,
    question:
      "What is the proper procedure for installing a piercing valve on a sealed system?",
    options: [
      "Install valve, tighten, then pierce the line",
      "Pierce first, then install valve",
      "Piercing valves are not allowed",
      "No special procedure required",
    ],
    correctAnswer: "Install valve, tighten, then pierce the line",
    explanation:
      "Proper piercing valve installation requires securing the valve to the line first, then using the valve stem to pierce the tubing to minimize refrigerant loss.",
    regulatoryReference: "EPA Section 608 - Service Procedures",
    lessonLink: "/study/epa-608/type1/service-procedures",
    topicCategory: "Service Techniques",
  },
  {
    id: BigInt(52),
    section: EpaSection.typeI,
    difficulty: QuestionDifficulty.easy,
    question:
      "What is the primary function of the condenser in a refrigeration system?",
    options: [
      "Reject heat from the refrigerant",
      "Absorb heat into the refrigerant",
      "Compress the refrigerant",
      "Expand the refrigerant",
    ],
    correctAnswer: "Reject heat from the refrigerant",
    explanation:
      "The condenser removes heat from the high-pressure, high-temperature refrigerant vapor, causing it to condense into a liquid.",
    regulatoryReference: "EPA Section 608 - System Components",
    lessonLink: "/study/epa-608/type1/system-basics",
    topicCategory: "System Components",
  },
  {
    id: BigInt(53),
    section: EpaSection.typeI,
    difficulty: QuestionDifficulty.medium,
    question:
      "What indicates a properly operating hermetic compressor in a small appliance?",
    options: [
      "Warm to touch and cycling normally",
      "Very hot to touch",
      "Cold to touch",
      "Making loud noises",
    ],
    correctAnswer: "Warm to touch and cycling normally",
    explanation:
      "A properly operating hermetic compressor should be warm (not hot) to the touch and cycle on and off based on temperature demand.",
    regulatoryReference: "EPA Section 608 - System Operation",
    lessonLink: "/study/epa-608/type1/troubleshooting",
    topicCategory: "Diagnostics",
  },
  {
    id: BigInt(54),
    section: EpaSection.typeI,
    difficulty: QuestionDifficulty.hard,
    question:
      "When is it necessary to evacuate a small appliance system before charging?",
    options: [
      "After opening the system for repairs",
      "Never",
      "Only for new installations",
      "Only if the system is leaking",
    ],
    correctAnswer: "After opening the system for repairs",
    explanation:
      "Evacuation is required after opening a system to remove air and moisture, which can cause system damage and reduce efficiency.",
    regulatoryReference: "EPA Section 608 - Service Procedures",
    lessonLink: "/study/epa-608/type1/service-procedures",
    topicCategory: "Service Procedures",
  },
  {
    id: BigInt(55),
    section: EpaSection.typeI,
    difficulty: QuestionDifficulty.easy,
    question:
      "What is the purpose of the filter-drier in a refrigeration system?",
    options: [
      "Remove moisture and contaminants",
      "Increase refrigerant pressure",
      "Cool the refrigerant",
      "Meter refrigerant flow",
    ],
    correctAnswer: "Remove moisture and contaminants",
    explanation:
      "The filter-drier removes moisture, acids, and particulate contaminants from the refrigerant to protect system components and maintain efficiency.",
    regulatoryReference: "EPA Section 608 - System Components",
    lessonLink: "/study/epa-608/type1/system-basics",
    topicCategory: "System Components",
  },

  // ============================================================================
  // TYPE II SECTION - 25 Questions
  // ============================================================================
  {
    id: BigInt(56),
    section: EpaSection.typeII,
    difficulty: QuestionDifficulty.easy,
    question: "What type of equipment does Type II certification cover?",
    options: [
      "High-pressure appliances except small appliances and MVACs",
      "Small appliances only",
      "Low-pressure appliances only",
      "Motor vehicle air conditioners",
    ],
    correctAnswer: "High-pressure appliances except small appliances and MVACs",
    explanation:
      "Type II covers high-pressure systems (evaporator pressure above 45 psig) such as commercial refrigeration, residential and commercial air conditioning, and heat pumps.",
    regulatoryReference: "EPA Section 608 - Type II Definition",
    lessonLink: "/study/epa-608/type2/overview",
    topicCategory: "Type II Classification",
  },
  {
    id: BigInt(57),
    section: EpaSection.typeII,
    difficulty: QuestionDifficulty.medium,
    question:
      "What is the required recovery level for a Type II appliance with a charge of 200 pounds or more?",
    options: [
      "10 inches of mercury vacuum",
      "4 inches of mercury vacuum",
      "15 inches of mercury vacuum",
      "0 psig",
    ],
    correctAnswer: "10 inches of mercury vacuum",
    explanation:
      "High-pressure appliances with 200+ pounds of refrigerant must be recovered to 10 inches of mercury vacuum to minimize environmental impact.",
    regulatoryReference: "EPA Section 608 - Type II Recovery",
    lessonLink: "/study/epa-608/type2/recovery",
    topicCategory: "Recovery Requirements",
  },
  {
    id: BigInt(58),
    section: EpaSection.typeII,
    difficulty: QuestionDifficulty.hard,
    question:
      "What is the required recovery level for a Type II appliance with a charge less than 200 pounds?",
    options: [
      "4 inches of mercury vacuum",
      "10 inches of mercury vacuum",
      "15 inches of mercury vacuum",
      "0 psig",
    ],
    correctAnswer: "4 inches of mercury vacuum",
    explanation:
      "High-pressure appliances with less than 200 pounds of refrigerant require recovery to 4 inches of mercury vacuum before disposal or major repairs.",
    regulatoryReference: "EPA Section 608 - Type II Recovery",
    lessonLink: "/study/epa-608/type2/recovery",
    topicCategory: "Recovery Requirements",
  },
  {
    id: BigInt(59),
    section: EpaSection.typeII,
    difficulty: QuestionDifficulty.easy,
    question:
      "Which refrigerant is commonly used in residential air conditioning systems?",
    options: ["R-410A", "R-12", "R-123", "R-134a"],
    correctAnswer: "R-410A",
    explanation:
      "R-410A is the most common refrigerant in modern residential air conditioning systems, replacing R-22 due to environmental regulations.",
    regulatoryReference: "EPA Section 608 - Type II Refrigerants",
    lessonLink: "/study/epa-608/type2/refrigerants",
    topicCategory: "Refrigerant Types",
  },
  {
    id: BigInt(60),
    section: EpaSection.typeII,
    difficulty: QuestionDifficulty.medium,
    question: "What is the purpose of a liquid line filter-drier?",
    options: [
      "Remove moisture and contaminants from liquid refrigerant",
      "Increase refrigerant pressure",
      "Cool the refrigerant",
      "Meter refrigerant flow",
    ],
    correctAnswer: "Remove moisture and contaminants from liquid refrigerant",
    explanation:
      "Liquid line filter-driers remove moisture, acids, and particles from the refrigerant before it reaches the metering device, protecting system components.",
    regulatoryReference: "EPA Section 608 - System Components",
    lessonLink: "/study/epa-608/type2/system-basics",
    topicCategory: "System Components",
  },
  {
    id: BigInt(61),
    section: EpaSection.typeII,
    difficulty: QuestionDifficulty.hard,
    question:
      "What is the typical superheat range for a properly charged TXV system?",
    options: ["8-12°F", "20-25°F", "30-40°F", "0-5°F"],
    correctAnswer: "8-12°F",
    explanation:
      "Systems with thermostatic expansion valves (TXV) typically maintain superheat between 8-12°F, as the TXV automatically adjusts refrigerant flow.",
    regulatoryReference: "EPA Section 608 - System Operation",
    lessonLink: "/study/epa-608/type2/charging",
    topicCategory: "System Diagnostics",
  },
  {
    id: BigInt(62),
    section: EpaSection.typeII,
    difficulty: QuestionDifficulty.easy,
    question: "What does a high superheat reading typically indicate?",
    options: [
      "Low refrigerant charge or restricted metering device",
      "Overcharged system",
      "Normal operation",
      "Compressor failure",
    ],
    correctAnswer: "Low refrigerant charge or restricted metering device",
    explanation:
      "High superheat indicates insufficient refrigerant in the evaporator, usually caused by undercharge or a restricted metering device.",
    regulatoryReference: "EPA Section 608 - Diagnostics",
    lessonLink: "/study/epa-608/type2/troubleshooting",
    topicCategory: "Diagnostics",
  },
  {
    id: BigInt(63),
    section: EpaSection.typeII,
    difficulty: QuestionDifficulty.medium,
    question: "What is the purpose of subcooling in a refrigeration system?",
    options: [
      "Ensure liquid refrigerant enters the metering device",
      "Increase system pressure",
      "Cool the compressor",
      "Remove moisture",
    ],
    correctAnswer: "Ensure liquid refrigerant enters the metering device",
    explanation:
      "Subcooling ensures the refrigerant is fully liquid before reaching the metering device, preventing flash gas and improving system efficiency.",
    regulatoryReference: "EPA Section 608 - System Operation",
    lessonLink: "/study/epa-608/type2/charging",
    topicCategory: "System Operation",
  },
  {
    id: BigInt(64),
    section: EpaSection.typeII,
    difficulty: QuestionDifficulty.hard,
    question:
      "What is the typical subcooling range for a properly charged fixed-orifice system?",
    options: ["10-15°F", "5-8°F", "20-25°F", "0-5°F"],
    correctAnswer: "10-15°F",
    explanation:
      "Fixed-orifice (piston or capillary tube) systems typically require 10-15°F subcooling for proper charge, as they do not automatically adjust like TXV systems.",
    regulatoryReference: "EPA Section 608 - Charging Methods",
    lessonLink: "/study/epa-608/type2/charging",
    topicCategory: "Charging Procedures",
  },
  {
    id: BigInt(65),
    section: EpaSection.typeII,
    difficulty: QuestionDifficulty.easy,
    question:
      "What is the primary purpose of a compressor in an air conditioning system?",
    options: [
      "Increase refrigerant pressure and temperature",
      "Cool the refrigerant",
      "Remove moisture",
      "Filter the refrigerant",
    ],
    correctAnswer: "Increase refrigerant pressure and temperature",
    explanation:
      "The compressor increases refrigerant pressure and temperature, enabling heat rejection in the condenser and circulation through the system.",
    regulatoryReference: "EPA Section 608 - System Components",
    lessonLink: "/study/epa-608/type2/system-basics",
    topicCategory: "System Components",
  },
  {
    id: BigInt(66),
    section: EpaSection.typeII,
    difficulty: QuestionDifficulty.medium,
    question:
      "What should be done before recovering refrigerant from a system with a burned-out compressor?",
    options: [
      "Install a filter-drier in the recovery line",
      "Recover normally without precautions",
      "Vent the refrigerant",
      "Add new refrigerant first",
    ],
    correctAnswer: "Install a filter-drier in the recovery line",
    explanation:
      "Burned-out compressors contaminate refrigerant with acids and carbon. A filter-drier in the recovery line protects the recovery machine from damage.",
    regulatoryReference: "EPA Section 608 - Recovery Procedures",
    lessonLink: "/study/epa-608/type2/recovery",
    topicCategory: "Recovery Procedures",
  },
  {
    id: BigInt(67),
    section: EpaSection.typeII,
    difficulty: QuestionDifficulty.hard,
    question: "What is the purpose of a crankcase heater on a compressor?",
    options: [
      "Prevent refrigerant from condensing in the compressor oil",
      "Increase compressor efficiency",
      "Cool the compressor",
      "Filter the oil",
    ],
    correctAnswer: "Prevent refrigerant from condensing in the compressor oil",
    explanation:
      "Crankcase heaters keep compressor oil warm during off-cycles, preventing liquid refrigerant from condensing in the oil and causing damage on startup.",
    regulatoryReference: "EPA Section 608 - System Components",
    lessonLink: "/study/epa-608/type2/system-basics",
    topicCategory: "System Components",
  },
  {
    id: BigInt(68),
    section: EpaSection.typeII,
    difficulty: QuestionDifficulty.easy,
    question:
      "What is the typical operating pressure for R-410A on the high side at 95°F ambient?",
    options: ["400-450 psig", "250-300 psig", "150-200 psig", "500-550 psig"],
    correctAnswer: "400-450 psig",
    explanation:
      "R-410A operates at significantly higher pressures than R-22. At 95°F ambient, high-side pressure typically ranges from 400-450 psig.",
    regulatoryReference: "EPA Section 608 - Operating Pressures",
    lessonLink: "/study/epa-608/type2/system-basics",
    topicCategory: "System Operation",
  },
  {
    id: BigInt(69),
    section: EpaSection.typeII,
    difficulty: QuestionDifficulty.medium,
    question: "What is the purpose of a thermostatic expansion valve (TXV)?",
    options: [
      "Maintain constant superheat by modulating refrigerant flow",
      "Increase system pressure",
      "Cool the refrigerant",
      "Remove moisture",
    ],
    correctAnswer: "Maintain constant superheat by modulating refrigerant flow",
    explanation:
      "The TXV automatically adjusts refrigerant flow to maintain optimal superheat, improving efficiency across varying load conditions.",
    regulatoryReference: "EPA Section 608 - Metering Devices",
    lessonLink: "/study/epa-608/type2/system-basics",
    topicCategory: "System Components",
  },
  {
    id: BigInt(70),
    section: EpaSection.typeII,
    difficulty: QuestionDifficulty.hard,
    question:
      "What is the proper procedure for adding refrigerant to the high side of an operating system?",
    options: [
      "Add liquid refrigerant slowly to prevent slugging",
      "Add vapor refrigerant quickly",
      "Never add to the high side",
      "Add refrigerant with system off",
    ],
    correctAnswer: "Add liquid refrigerant slowly to prevent slugging",
    explanation:
      "When adding to the high side of an operating system, liquid refrigerant must be added slowly to prevent liquid slugging and compressor damage.",
    regulatoryReference: "EPA Section 608 - Charging Procedures",
    lessonLink: "/study/epa-608/type2/charging",
    topicCategory: "Charging Procedures",
  },
  {
    id: BigInt(71),
    section: EpaSection.typeII,
    difficulty: QuestionDifficulty.easy,
    question: "What does a low suction pressure typically indicate?",
    options: [
      "Low refrigerant charge or restricted airflow",
      "Overcharged system",
      "Normal operation",
      "High ambient temperature",
    ],
    correctAnswer: "Low refrigerant charge or restricted airflow",
    explanation:
      "Low suction pressure usually indicates insufficient refrigerant or restricted airflow across the evaporator coil.",
    regulatoryReference: "EPA Section 608 - Diagnostics",
    lessonLink: "/study/epa-608/type2/troubleshooting",
    topicCategory: "Diagnostics",
  },
  {
    id: BigInt(72),
    section: EpaSection.typeII,
    difficulty: QuestionDifficulty.medium,
    question: "What is the purpose of an accumulator in a heat pump system?",
    options: [
      "Prevent liquid refrigerant from entering the compressor",
      "Increase system pressure",
      "Cool the refrigerant",
      "Filter the refrigerant",
    ],
    correctAnswer: "Prevent liquid refrigerant from entering the compressor",
    explanation:
      "The accumulator collects liquid refrigerant and oil, allowing only vapor to enter the compressor, preventing liquid slugging damage.",
    regulatoryReference: "EPA Section 608 - System Components",
    lessonLink: "/study/epa-608/type2/system-basics",
    topicCategory: "System Components",
  },
  {
    id: BigInt(73),
    section: EpaSection.typeII,
    difficulty: QuestionDifficulty.hard,
    question:
      "What is the recommended evacuation time for a typical residential split system?",
    options: [
      "Minimum 30-45 minutes to achieve 500 microns",
      "5-10 minutes",
      "1-2 hours",
      "Evacuation is not necessary",
    ],
    correctAnswer: "Minimum 30-45 minutes to achieve 500 microns",
    explanation:
      "Proper evacuation requires achieving and holding 500 microns or less, typically taking 30-45 minutes for residential systems to remove air and moisture.",
    regulatoryReference: "EPA Section 608 - Evacuation Procedures",
    lessonLink: "/study/epa-608/type2/service-procedures",
    topicCategory: "Service Procedures",
  },
  {
    id: BigInt(74),
    section: EpaSection.typeII,
    difficulty: QuestionDifficulty.easy,
    question: "What is the purpose of a reversing valve in a heat pump?",
    options: [
      "Change refrigerant flow direction for heating and cooling",
      "Increase system pressure",
      "Filter the refrigerant",
      "Remove moisture",
    ],
    correctAnswer: "Change refrigerant flow direction for heating and cooling",
    explanation:
      "The reversing valve redirects refrigerant flow, allowing the heat pump to provide both heating and cooling by reversing the refrigeration cycle.",
    regulatoryReference: "EPA Section 608 - Heat Pump Components",
    lessonLink: "/study/epa-608/type2/heat-pumps",
    topicCategory: "System Components",
  },
  {
    id: BigInt(75),
    section: EpaSection.typeII,
    difficulty: QuestionDifficulty.medium,
    question:
      "What should be done if a system has a non-condensable gas contamination?",
    options: [
      "Recover refrigerant and evacuate the system",
      "Add more refrigerant",
      "Ignore it",
      "Vent the system",
    ],
    correctAnswer: "Recover refrigerant and evacuate the system",
    explanation:
      "Non-condensable gases (air) increase head pressure and reduce efficiency. The system must be recovered, evacuated, and recharged to remove contamination.",
    regulatoryReference: "EPA Section 608 - System Contamination",
    lessonLink: "/study/epa-608/type2/troubleshooting",
    topicCategory: "Service Procedures",
  },
  {
    id: BigInt(76),
    section: EpaSection.typeII,
    difficulty: QuestionDifficulty.hard,
    question:
      "What is the proper method for leak checking a system after repairs?",
    options: [
      "Pressurize with nitrogen and use leak detector",
      "Pressurize with refrigerant only",
      "Visual inspection only",
      "No leak check needed",
    ],
    correctAnswer: "Pressurize with nitrogen and use leak detector",
    explanation:
      "Proper leak checking involves pressurizing the system with dry nitrogen (up to system test pressure) and using an electronic leak detector or soap solution.",
    regulatoryReference: "EPA Section 608 - Leak Detection",
    lessonLink: "/study/epa-608/type2/service-procedures",
    topicCategory: "Service Procedures",
  },
  {
    id: BigInt(77),
    section: EpaSection.typeII,
    difficulty: QuestionDifficulty.easy,
    question:
      "What is the typical temperature split across an evaporator coil?",
    options: ["15-20°F", "5-10°F", "30-40°F", "50-60°F"],
    correctAnswer: "15-20°F",
    explanation:
      "A properly operating air conditioning system typically has a 15-20°F temperature difference between return air and supply air across the evaporator.",
    regulatoryReference: "EPA Section 608 - System Performance",
    lessonLink: "/study/epa-608/type2/diagnostics",
    topicCategory: "System Diagnostics",
  },
  {
    id: BigInt(78),
    section: EpaSection.typeII,
    difficulty: QuestionDifficulty.medium,
    question: "What causes high head pressure and high suction pressure?",
    options: [
      "Overcharged system or non-condensables",
      "Undercharged system",
      "Restricted metering device",
      "Low airflow",
    ],
    correctAnswer: "Overcharged system or non-condensables",
    explanation:
      "High pressures on both sides typically indicate an overcharged system or non-condensable gases (air) in the refrigerant.",
    regulatoryReference: "EPA Section 608 - Diagnostics",
    lessonLink: "/study/epa-608/type2/troubleshooting",
    topicCategory: "Diagnostics",
  },
  {
    id: BigInt(79),
    section: EpaSection.typeII,
    difficulty: QuestionDifficulty.hard,
    question: "What is the purpose of a suction line accumulator?",
    options: [
      "Protect compressor from liquid refrigerant and return oil",
      "Increase system efficiency",
      "Filter refrigerant",
      "Increase pressure",
    ],
    correctAnswer: "Protect compressor from liquid refrigerant and return oil",
    explanation:
      "The suction line accumulator prevents liquid refrigerant from entering the compressor while ensuring oil returns to the compressor for lubrication.",
    regulatoryReference: "EPA Section 608 - System Components",
    lessonLink: "/study/epa-608/type2/system-basics",
    topicCategory: "System Components",
  },
  {
    id: BigInt(80),
    section: EpaSection.typeII,
    difficulty: QuestionDifficulty.easy,
    question:
      "What is the recommended method for charging a system with a zeotropic refrigerant blend?",
    options: [
      "Charge as liquid to prevent fractionation",
      "Charge as vapor only",
      "Charge method does not matter",
      "Never charge zeotropic blends",
    ],
    correctAnswer: "Charge as liquid to prevent fractionation",
    explanation:
      "Zeotropic blends (like R-410A) must be charged as liquid to prevent fractionation, which occurs when components separate during vapor charging.",
    regulatoryReference: "EPA Section 608 - Charging Procedures",
    lessonLink: "/study/epa-608/type2/charging",
    topicCategory: "Charging Procedures",
  },

  // ============================================================================
  // TYPE III SECTION - 25 Questions
  // ============================================================================
  {
    id: BigInt(81),
    section: EpaSection.typeIII,
    difficulty: QuestionDifficulty.easy,
    question: "What type of equipment does Type III certification cover?",
    options: [
      "Low-pressure appliances (centrifugal chillers)",
      "High-pressure appliances",
      "Small appliances",
      "Motor vehicle air conditioners",
    ],
    correctAnswer: "Low-pressure appliances (centrifugal chillers)",
    explanation:
      "Type III covers low-pressure appliances where the evaporator operates below atmospheric pressure (typically centrifugal chillers using R-123 or R-11).",
    regulatoryReference: "EPA Section 608 - Type III Definition",
    lessonLink: "/study/epa-608/type3/overview",
    topicCategory: "Type III Classification",
  },
  {
    id: BigInt(82),
    section: EpaSection.typeIII,
    difficulty: QuestionDifficulty.medium,
    question:
      "What is the required recovery level for a low-pressure appliance before disposal?",
    options: [
      "25 mm of mercury absolute",
      "4 inches of mercury vacuum",
      "10 inches of mercury vacuum",
      "0 psig",
    ],
    correctAnswer: "25 mm of mercury absolute",
    explanation:
      "Low-pressure appliances must be recovered to 25 mm of mercury absolute (approximately 29 inches of mercury vacuum) before disposal.",
    regulatoryReference: "EPA Section 608 - Type III Recovery",
    lessonLink: "/study/epa-608/type3/recovery",
    topicCategory: "Recovery Requirements",
  },
  {
    id: BigInt(83),
    section: EpaSection.typeIII,
    difficulty: QuestionDifficulty.hard,
    question: "What is the primary safety concern with R-123 refrigerant?",
    options: [
      "Toxicity and potential for air infiltration",
      "High flammability",
      "Extreme pressure",
      "Corrosiveness to metals",
    ],
    correctAnswer: "Toxicity and potential for air infiltration",
    explanation:
      "R-123 has higher toxicity than other common refrigerants and low-pressure systems can draw in air if leaks exist, creating safety and performance issues.",
    regulatoryReference: "EPA Section 608 - Type III Safety",
    lessonLink: "/study/epa-608/type3/safety",
    topicCategory: "Safety Concerns",
  },
  {
    id: BigInt(84),
    section: EpaSection.typeIII,
    difficulty: QuestionDifficulty.easy,
    question: "What is a centrifugal chiller?",
    options: [
      "A large cooling system using a centrifugal compressor",
      "A small appliance",
      "A type of heat pump",
      "A refrigerant recovery machine",
    ],
    correctAnswer: "A large cooling system using a centrifugal compressor",
    explanation:
      "Centrifugal chillers are large-capacity cooling systems that use centrifugal compressors and typically operate at low pressures with refrigerants like R-123.",
    regulatoryReference: "EPA Section 608 - Type III Equipment",
    lessonLink: "/study/epa-608/type3/overview",
    topicCategory: "Equipment Types",
  },
  {
    id: BigInt(85),
    section: EpaSection.typeIII,
    difficulty: QuestionDifficulty.medium,
    question: "Why do low-pressure chillers require a purge unit?",
    options: [
      "Remove non-condensable gases that enter through leaks",
      "Increase system pressure",
      "Cool the refrigerant",
      "Add refrigerant",
    ],
    correctAnswer: "Remove non-condensable gases that enter through leaks",
    explanation:
      "Low-pressure systems operate below atmospheric pressure, allowing air to be drawn in through leaks. Purge units remove these non-condensables to maintain efficiency.",
    regulatoryReference: "EPA Section 608 - Type III Components",
    lessonLink: "/study/epa-608/type3/system-basics",
    topicCategory: "System Components",
  },
  {
    id: BigInt(86),
    section: EpaSection.typeIII,
    difficulty: QuestionDifficulty.hard,
    question: "What is the typical evaporator pressure for an R-123 chiller?",
    options: [
      "Below atmospheric pressure (vacuum)",
      "50-70 psig",
      "100-150 psig",
      "200-300 psig",
    ],
    correctAnswer: "Below atmospheric pressure (vacuum)",
    explanation:
      "R-123 chillers operate with evaporator pressures below atmospheric pressure (typically 5-10 inches of mercury vacuum), which is why they are classified as low-pressure.",
    regulatoryReference: "EPA Section 608 - Operating Pressures",
    lessonLink: "/study/epa-608/type3/system-basics",
    topicCategory: "System Operation",
  },
  {
    id: BigInt(87),
    section: EpaSection.typeIII,
    difficulty: QuestionDifficulty.easy,
    question: "What indicates air contamination in a low-pressure chiller?",
    options: [
      "High condenser pressure and temperature",
      "Low condenser pressure",
      "Normal operation",
      "Low evaporator pressure",
    ],
    correctAnswer: "High condenser pressure and temperature",
    explanation:
      "Non-condensable gases (air) accumulate in the condenser, increasing pressure and temperature, reducing efficiency and indicating the need for purging.",
    regulatoryReference: "EPA Section 608 - Diagnostics",
    lessonLink: "/study/epa-608/type3/troubleshooting",
    topicCategory: "Diagnostics",
  },
  {
    id: BigInt(88),
    section: EpaSection.typeIII,
    difficulty: QuestionDifficulty.medium,
    question:
      "What is the purpose of a rupture disc on a low-pressure chiller?",
    options: [
      "Prevent excessive pressure from damaging the vessel",
      "Increase system efficiency",
      "Remove non-condensables",
      "Add refrigerant",
    ],
    correctAnswer: "Prevent excessive pressure from damaging the vessel",
    explanation:
      "Rupture discs are pressure relief devices that burst at a predetermined pressure to prevent vessel damage, protecting personnel and equipment.",
    regulatoryReference: "EPA Section 608 - Safety Devices",
    lessonLink: "/study/epa-608/type3/safety",
    topicCategory: "Safety Devices",
  },
  {
    id: BigInt(89),
    section: EpaSection.typeIII,
    difficulty: QuestionDifficulty.hard,
    question:
      "What is the recommended method for charging refrigerant into a low-pressure chiller?",
    options: [
      "Charge liquid into the evaporator",
      "Charge vapor into the condenser",
      "Charge through the purge unit",
      "Charging is not allowed",
    ],
    correctAnswer: "Charge liquid into the evaporator",
    explanation:
      "Low-pressure chillers are typically charged with liquid refrigerant into the evaporator to ensure proper system fill and minimize charging time.",
    regulatoryReference: "EPA Section 608 - Charging Procedures",
    lessonLink: "/study/epa-608/type3/service-procedures",
    topicCategory: "Charging Procedures",
  },
  {
    id: BigInt(90),
    section: EpaSection.typeIII,
    difficulty: QuestionDifficulty.easy,
    question:
      "What is the primary advantage of centrifugal chillers over reciprocating chillers?",
    options: [
      "Higher efficiency and capacity",
      "Lower cost",
      "Easier maintenance",
      "Smaller size",
    ],
    correctAnswer: "Higher efficiency and capacity",
    explanation:
      "Centrifugal chillers offer superior efficiency and can handle much larger cooling loads than reciprocating chillers, making them ideal for large commercial applications.",
    regulatoryReference: "EPA Section 608 - Equipment Comparison",
    lessonLink: "/study/epa-608/type3/overview",
    topicCategory: "Equipment Types",
  },
  {
    id: BigInt(91),
    section: EpaSection.typeIII,
    difficulty: QuestionDifficulty.medium,
    question:
      "What should be monitored during recovery from a low-pressure chiller?",
    options: [
      "System pressure and recovery machine oil level",
      "Outdoor temperature only",
      "Time of day",
      "Nothing needs monitoring",
    ],
    correctAnswer: "System pressure and recovery machine oil level",
    explanation:
      "Monitor system pressure to ensure proper recovery levels and check recovery machine oil for contamination, as low-pressure systems can have significant oil carryover.",
    regulatoryReference: "EPA Section 608 - Recovery Procedures",
    lessonLink: "/study/epa-608/type3/recovery",
    topicCategory: "Recovery Procedures",
  },
  {
    id: BigInt(92),
    section: EpaSection.typeIII,
    difficulty: QuestionDifficulty.hard,
    question: "What is the purpose of the economizer in a centrifugal chiller?",
    options: [
      "Improve efficiency by subcooling liquid refrigerant",
      "Increase system pressure",
      "Remove non-condensables",
      "Filter refrigerant",
    ],
    correctAnswer: "Improve efficiency by subcooling liquid refrigerant",
    explanation:
      "The economizer subcools liquid refrigerant before the evaporator and provides additional vapor to an intermediate stage of compression, improving overall system efficiency.",
    regulatoryReference: "EPA Section 608 - System Components",
    lessonLink: "/study/epa-608/type3/system-basics",
    topicCategory: "System Components",
  },
  {
    id: BigInt(93),
    section: EpaSection.typeIII,
    difficulty: QuestionDifficulty.easy,
    question: "What type of compressor is used in a centrifugal chiller?",
    options: [
      "Centrifugal compressor",
      "Reciprocating compressor",
      "Scroll compressor",
      "Rotary compressor",
    ],
    correctAnswer: "Centrifugal compressor",
    explanation:
      "Centrifugal chillers use centrifugal compressors that compress refrigerant using rotating impellers, suitable for large-capacity applications.",
    regulatoryReference: "EPA Section 608 - Compressor Types",
    lessonLink: "/study/epa-608/type3/system-basics",
    topicCategory: "System Components",
  },
  {
    id: BigInt(94),
    section: EpaSection.typeIII,
    difficulty: QuestionDifficulty.medium,
    question:
      "What is the typical condenser pressure for an R-123 chiller at 85°F water temperature?",
    options: ["10-15 psig", "50-70 psig", "150-200 psig", "300-400 psig"],
    correctAnswer: "10-15 psig",
    explanation:
      "R-123 operates at relatively low pressures. At 85°F condenser water temperature, typical condenser pressure is 10-15 psig.",
    regulatoryReference: "EPA Section 608 - Operating Pressures",
    lessonLink: "/study/epa-608/type3/system-basics",
    topicCategory: "System Operation",
  },
  {
    id: BigInt(95),
    section: EpaSection.typeIII,
    difficulty: QuestionDifficulty.hard,
    question:
      "What is the purpose of the float valve in a low-pressure chiller?",
    options: [
      "Maintain proper refrigerant level in the evaporator",
      "Increase system pressure",
      "Remove non-condensables",
      "Filter refrigerant",
    ],
    correctAnswer: "Maintain proper refrigerant level in the evaporator",
    explanation:
      "The float valve automatically maintains the correct refrigerant level in the evaporator, ensuring optimal heat transfer and system performance.",
    regulatoryReference: "EPA Section 608 - Metering Devices",
    lessonLink: "/study/epa-608/type3/system-basics",
    topicCategory: "System Components",
  },
  {
    id: BigInt(96),
    section: EpaSection.typeIII,
    difficulty: QuestionDifficulty.easy,
    question: "Why must low-pressure chillers be leak-tested more frequently?",
    options: [
      "They operate below atmospheric pressure and can draw in air",
      "They use more refrigerant",
      "They are older equipment",
      "EPA requires more frequent testing",
    ],
    correctAnswer:
      "They operate below atmospheric pressure and can draw in air",
    explanation:
      "Low-pressure systems operate in vacuum, so leaks allow air infiltration rather than refrigerant escape, requiring frequent leak testing to maintain efficiency.",
    regulatoryReference: "EPA Section 608 - Leak Testing",
    lessonLink: "/study/epa-608/type3/maintenance",
    topicCategory: "Maintenance Requirements",
  },
  {
    id: BigInt(97),
    section: EpaSection.typeIII,
    difficulty: QuestionDifficulty.medium,
    question:
      "What is the proper procedure for opening a low-pressure chiller for maintenance?",
    options: [
      "Recover refrigerant, evacuate, and pressurize with nitrogen",
      "Simply open the vessel",
      "Vent refrigerant first",
      "No special procedure needed",
    ],
    correctAnswer:
      "Recover refrigerant, evacuate, and pressurize with nitrogen",
    explanation:
      "Proper procedure requires recovering refrigerant to required levels, evacuating the system, and pressurizing with dry nitrogen to prevent air and moisture entry.",
    regulatoryReference: "EPA Section 608 - Service Procedures",
    lessonLink: "/study/epa-608/type3/service-procedures",
    topicCategory: "Service Procedures",
  },
  {
    id: BigInt(98),
    section: EpaSection.typeIII,
    difficulty: QuestionDifficulty.hard,
    question:
      "What is the purpose of the oil separator in a centrifugal chiller?",
    options: [
      "Remove oil from refrigerant vapor before it enters the condenser",
      "Add oil to the compressor",
      "Cool the oil",
      "Filter refrigerant",
    ],
    correctAnswer:
      "Remove oil from refrigerant vapor before it enters the condenser",
    explanation:
      "Oil separators remove oil from discharge vapor, returning it to the compressor and preventing oil accumulation in the condenser and evaporator.",
    regulatoryReference: "EPA Section 608 - System Components",
    lessonLink: "/study/epa-608/type3/system-basics",
    topicCategory: "System Components",
  },
  {
    id: BigInt(99),
    section: EpaSection.typeIII,
    difficulty: QuestionDifficulty.easy,
    question:
      "What is the typical cooling capacity range for centrifugal chillers?",
    options: [
      "100-10,000+ tons",
      "1-50 tons",
      "50-100 tons",
      "Less than 10 tons",
    ],
    correctAnswer: "100-10,000+ tons",
    explanation:
      "Centrifugal chillers are large-capacity systems typically ranging from 100 to over 10,000 tons of cooling capacity for commercial and industrial applications.",
    regulatoryReference: "EPA Section 608 - Equipment Specifications",
    lessonLink: "/study/epa-608/type3/overview",
    topicCategory: "Equipment Specifications",
  },
  {
    id: BigInt(100),
    section: EpaSection.typeIII,
    difficulty: QuestionDifficulty.medium,
    question: "What causes surge in a centrifugal compressor?",
    options: [
      "Low refrigerant flow or high discharge pressure",
      "High refrigerant flow",
      "Normal operation",
      "Low ambient temperature",
    ],
    correctAnswer: "Low refrigerant flow or high discharge pressure",
    explanation:
      "Surge occurs when refrigerant flow is too low or discharge pressure is too high, causing flow reversal and potentially damaging the compressor.",
    regulatoryReference: "EPA Section 608 - Compressor Operation",
    lessonLink: "/study/epa-608/type3/troubleshooting",
    topicCategory: "Diagnostics",
  },
  {
    id: BigInt(101),
    section: EpaSection.typeIII,
    difficulty: QuestionDifficulty.hard,
    question:
      "What is the purpose of the pre-rotation vanes (inlet guide vanes) on a centrifugal compressor?",
    options: [
      "Control capacity by adjusting refrigerant flow angle",
      "Increase discharge pressure",
      "Filter refrigerant",
      "Remove oil",
    ],
    correctAnswer: "Control capacity by adjusting refrigerant flow angle",
    explanation:
      "Pre-rotation vanes adjust the angle of refrigerant entering the impeller, providing efficient capacity control without cycling the compressor on and off.",
    regulatoryReference: "EPA Section 608 - Capacity Control",
    lessonLink: "/study/epa-608/type3/system-basics",
    topicCategory: "System Components",
  },
  {
    id: BigInt(102),
    section: EpaSection.typeIII,
    difficulty: QuestionDifficulty.easy,
    question: "What is the primary water circuit in a chiller called?",
    options: [
      "Evaporator water (chilled water)",
      "Condenser water",
      "Cooling tower water",
      "Process water",
    ],
    correctAnswer: "Evaporator water (chilled water)",
    explanation:
      "The evaporator water circuit, also called chilled water, is the primary circuit that delivers cooling to the building or process.",
    regulatoryReference: "EPA Section 608 - Water Circuits",
    lessonLink: "/study/epa-608/type3/system-basics",
    topicCategory: "System Components",
  },
  {
    id: BigInt(103),
    section: EpaSection.typeIII,
    difficulty: QuestionDifficulty.medium,
    question:
      "What should be done if a low-pressure chiller shows signs of water contamination?",
    options: [
      "Recover refrigerant, repair leak, evacuate, and recharge",
      "Add more refrigerant",
      "Ignore it",
      "Vent the system",
    ],
    correctAnswer: "Recover refrigerant, repair leak, evacuate, and recharge",
    explanation:
      "Water contamination requires complete system recovery, leak repair, thorough evacuation to remove moisture, and recharging with fresh refrigerant.",
    regulatoryReference: "EPA Section 608 - System Contamination",
    lessonLink: "/study/epa-608/type3/troubleshooting",
    topicCategory: "Service Procedures",
  },
  {
    id: BigInt(104),
    section: EpaSection.typeIII,
    difficulty: QuestionDifficulty.hard,
    question:
      "What is the typical approach temperature for a centrifugal chiller?",
    options: [
      "1-3°F between leaving chilled water and evaporator refrigerant",
      "10-15°F",
      "20-30°F",
      "40-50°F",
    ],
    correctAnswer:
      "1-3°F between leaving chilled water and evaporator refrigerant",
    explanation:
      "Approach temperature (difference between leaving chilled water and evaporator refrigerant temperature) is typically 1-3°F in efficient centrifugal chillers.",
    regulatoryReference: "EPA Section 608 - System Performance",
    lessonLink: "/study/epa-608/type3/diagnostics",
    topicCategory: "System Performance",
  },
  {
    id: BigInt(105),
    section: EpaSection.typeIII,
    difficulty: QuestionDifficulty.easy,
    question: "What is the purpose of the cooling tower in a chiller system?",
    options: [
      "Reject heat from the condenser water",
      "Cool the chilled water",
      "Add refrigerant",
      "Filter water",
    ],
    correctAnswer: "Reject heat from the condenser water",
    explanation:
      "The cooling tower rejects heat absorbed by the condenser water to the atmosphere through evaporative cooling, completing the heat rejection process.",
    regulatoryReference: "EPA Section 608 - System Components",
    lessonLink: "/study/epa-608/type3/system-basics",
    topicCategory: "System Components",
  },
];

// Helper function to get questions by section
export function getQuestionsBySection(section: EpaSection): EpaExamQuestion[] {
  return EPA_QUESTION_BANK.filter((q) => q.section === section);
}

// Helper function to get random questions for exam
export function getRandomQuestions(
  section: EpaSection,
  count: number,
): EpaExamQuestion[] {
  const sectionQuestions = getQuestionsBySection(section);
  const shuffled = [...sectionQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Helper function to shuffle answer options
export function shuffleAnswerOptions(
  question: EpaExamQuestion,
): EpaExamQuestion {
  const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);
  return {
    ...question,
    options: shuffledOptions,
  };
}
