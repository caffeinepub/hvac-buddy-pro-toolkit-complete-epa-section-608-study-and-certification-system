import { VideoCategory, type VideoRecord } from "@/types/local";

// Comprehensive curated YouTube video library for HVAC Buddy with exact user-provided URLs
export const curatedVideos: VideoRecord[] = [
  // EPA Core Videos - Parts 1 & 2
  {
    id: BigInt(1),
    title: "EPA 608 Core Prep Part 1",
    category: VideoCategory.epaCore,
    description:
      "Complete overview of EPA Section 608 Core certification requirements, ozone depletion science, and environmental regulations.",
    url: "https://youtu.be/BLtBaCt81i4?si=rFaJuUEkVyrE_kz8",
    linkedLessonTopic: "EPA Core - Ozone Depletion & Environmental Impact",
    duration: 1800,
    thumbnailUrl: "https://img.youtube.com/vi/BLtBaCt81i4/mqdefault.jpg",
  },
  {
    id: BigInt(2),
    title: "EPA 608 Core Prep Part 2",
    category: VideoCategory.epaCore,
    description:
      "Detailed explanation of refrigerant properties, EPA regulations, recovery procedures, and leak detection requirements.",
    url: "https://youtu.be/gi-RkhawFGU?si=yUT_VHBiySgWhQry",
    linkedLessonTopic: "EPA Core - Refrigerant Classification & Recovery",
    duration: 1800,
    thumbnailUrl: "https://img.youtube.com/vi/gi-RkhawFGU/mqdefault.jpg",
  },

  // EPA Type I Videos
  {
    id: BigInt(3),
    title: "EPA 608 Type I Prep",
    category: VideoCategory.typeI,
    description:
      "Complete guide to Type I certification covering small appliance systems (5 lbs or less refrigerant), hermetic compressors, and recovery procedures.",
    url: "https://youtu.be/wZH058B3x54?si=Is3oAJlyG42NULjK",
    linkedLessonTopic: "Type I - Small Appliance Systems",
    duration: 1650,
    thumbnailUrl: "https://img.youtube.com/vi/wZH058B3x54/mqdefault.jpg",
  },

  // EPA Type II Videos
  {
    id: BigInt(4),
    title: "EPA 608 Type II Prep",
    category: VideoCategory.typeII,
    description:
      "Comprehensive guide to Type II certification for high-pressure systems including residential and commercial AC systems, R-410A service, and leak repair requirements.",
    url: "https://youtu.be/Mnl_KY-D59A?si=JHWgLvhErhQdqGM7",
    linkedLessonTopic: "Type II - High-Pressure Systems",
    duration: 2400,
    thumbnailUrl: "https://img.youtube.com/vi/Mnl_KY-D59A/mqdefault.jpg",
  },

  // EPA Type III Videos
  {
    id: BigInt(5),
    title: "EPA 608 Type III Prep",
    category: VideoCategory.typeIII,
    description:
      "Complete guide to Type III certification covering low-pressure systems, centrifugal chillers, purge units, and R-123 safety procedures.",
    url: "https://youtu.be/CXMLkI1WMcQ?si=zSxsnk8GFa_BTRBK",
    linkedLessonTopic: "Type III - Low-Pressure Systems",
    duration: 2700,
    thumbnailUrl: "https://img.youtube.com/vi/CXMLkI1WMcQ/mqdefault.jpg",
  },

  // HVAC Fundamentals Videos
  {
    id: BigInt(6),
    title: "3D Refrigeration Circuit",
    category: VideoCategory.hvacFundamentals,
    description:
      "Complete 3D visualization of the vapor-compression refrigeration cycle with component interactions and thermodynamic processes.",
    url: "https://youtu.be/p6GXJdRUz9E?si=9kWbb892aHJarPAS",
    linkedLessonTopic: "Fundamentals - Refrigeration Cycle",
    duration: 1800,
    thumbnailUrl: "https://img.youtube.com/vi/p6GXJdRUz9E/mqdefault.jpg",
  },
  {
    id: BigInt(7),
    title: "Metering Device Basics",
    category: VideoCategory.hvacFundamentals,
    description:
      "Understanding TXV, EEV, and capillary tube metering devices and how they control refrigerant flow in HVAC systems.",
    url: "https://youtu.be/qV-DIqIxPGk?si=Orvlt9DFSDOdpbJx",
    linkedLessonTopic: "Fundamentals - Metering Devices",
    duration: 1950,
    thumbnailUrl: "https://img.youtube.com/vi/qV-DIqIxPGk/mqdefault.jpg",
  },
  {
    id: BigInt(8),
    title: "Refrigerant Line 3D",
    category: VideoCategory.hvacFundamentals,
    description:
      "3D visualization of refrigerant line routing, sizing, and proper installation techniques for optimal system performance.",
    url: "https://youtu.be/j6-n2xSn90A?si=JwBXTmLelVWHIFGh",
    linkedLessonTopic: "Fundamentals - Refrigerant Lines",
    duration: 1500,
    thumbnailUrl: "https://img.youtube.com/vi/j6-n2xSn90A/mqdefault.jpg",
  },
  {
    id: BigInt(9),
    title: "AC Types",
    category: VideoCategory.hvacFundamentals,
    description:
      "Overview of different air conditioning system types including split systems, package units, heat pumps, and ductless mini-splits.",
    url: "https://youtu.be/moBjCghTCsE?si=HlTEqhfn8dRD30CW",
    linkedLessonTopic: "Fundamentals - AC System Types",
    duration: 2100,
    thumbnailUrl: "https://img.youtube.com/vi/moBjCghTCsE/mqdefault.jpg",
  },

  // Diagnostics & Tools Videos
  {
    id: BigInt(10),
    title: "Evacuation",
    category: VideoCategory.diagnosticsMeasurements,
    description:
      "Proper evacuation techniques using vacuum pumps, achieving deep vacuum levels, and verifying system integrity before charging.",
    url: "https://youtu.be/JsnQeUSuUMU?si=XXHU7nvbOBqksVuW",
    linkedLessonTopic: "Diagnostics - Evacuation Procedures",
    duration: 1650,
    thumbnailUrl: "https://img.youtube.com/vi/JsnQeUSuUMU/mqdefault.jpg",
  },
  {
    id: BigInt(11),
    title: "AC Pressure & Subcooling",
    category: VideoCategory.diagnosticsMeasurements,
    description:
      "Measuring and interpreting AC system pressures and subcooling for proper system charging and performance diagnosis.",
    url: "https://youtu.be/5UU2c5e2ork?si=5QNU1mMVHLg3gvd-",
    linkedLessonTopic: "Diagnostics - Pressure & Subcooling",
    duration: 1500,
    thumbnailUrl: "https://img.youtube.com/vi/5UU2c5e2ork/mqdefault.jpg",
  },
  {
    id: BigInt(12),
    title: "Recovery 3D",
    category: VideoCategory.diagnosticsMeasurements,
    description:
      "3D visualization of refrigerant recovery procedures, equipment setup, and EPA-compliant recovery techniques.",
    url: "https://youtu.be/fROHlPXw_H0?si=_kHhV1XAcsTm7cMH",
    linkedLessonTopic: "Diagnostics - Recovery Procedures",
    duration: 1800,
    thumbnailUrl: "https://img.youtube.com/vi/fROHlPXw_H0/mqdefault.jpg",
  },
  {
    id: BigInt(13),
    title: "Multimeter 3D",
    category: VideoCategory.diagnosticsMeasurements,
    description:
      "3D demonstration of digital multimeter operation for testing voltage, amperage, and resistance in HVAC electrical systems.",
    url: "https://youtu.be/fa8NM7JzISM?si=khLhNXLFlhpo8cuF",
    linkedLessonTopic: "Diagnostics - Multimeter Use",
    duration: 1800,
    thumbnailUrl: "https://img.youtube.com/vi/fa8NM7JzISM/mqdefault.jpg",
  },
  {
    id: BigInt(14),
    title: "Gauges",
    category: VideoCategory.diagnosticsMeasurements,
    description:
      "Proper manifold gauge setup, pressure reading interpretation, and troubleshooting techniques using gauge readings.",
    url: "https://youtu.be/eEZAgzkS_sA?si=X3OxmeDCIiGC6gMd",
    linkedLessonTopic: "Diagnostics - Manifold Gauges",
    duration: 1500,
    thumbnailUrl: "https://img.youtube.com/vi/eEZAgzkS_sA/mqdefault.jpg",
  },
  {
    id: BigInt(15),
    title: "Vacuum Procedures",
    category: VideoCategory.diagnosticsMeasurements,
    description:
      "Step-by-step vacuum pump operation, micron gauge usage, and achieving proper vacuum levels for system evacuation.",
    url: "https://youtu.be/TllrD0Mt2LU?si=TuCJo6Y7udnflhJc",
    linkedLessonTopic: "Diagnostics - Vacuum Procedures",
    duration: 1650,
    thumbnailUrl: "https://img.youtube.com/vi/TllrD0Mt2LU/mqdefault.jpg",
  },

  // Electrical Controls Videos
  {
    id: BigInt(16),
    title: "Low Voltage",
    category: VideoCategory.electricalControls,
    description:
      "Understanding low voltage control systems, thermostat wiring, and 24V control circuits in HVAC equipment.",
    url: "https://youtu.be/5UU2c5e2ork?si=5QNU1mMVHLg3gvd-",
    linkedLessonTopic: "Electrical - Low Voltage Controls",
    duration: 2100,
    thumbnailUrl: "https://img.youtube.com/vi/5UU2c5e2ork/mqdefault.jpg",
  },
  {
    id: BigInt(17),
    title: "Testing Relays/Transformers",
    category: VideoCategory.electricalControls,
    description:
      "Proper testing procedures for relays, contactors, and transformers using multimeters and diagnostic techniques.",
    url: "https://youtu.be/4ja6GynaxQ0?si=C9TaQTjYv4qH6oBU",
    linkedLessonTopic: "Electrical - Relay & Transformer Testing",
    duration: 1500,
    thumbnailUrl: "https://img.youtube.com/vi/4ja6GynaxQ0/mqdefault.jpg",
  },
  {
    id: BigInt(18),
    title: "Thermostat Wiring",
    category: VideoCategory.electricalControls,
    description:
      "Complete guide to thermostat wiring including color codes, common wire issues, and smart thermostat installation.",
    url: "https://youtu.be/mIsXWXicB48?si=3wLIQ_9ItGin5ggL",
    linkedLessonTopic: "Electrical - Thermostat Wiring",
    duration: 1800,
    thumbnailUrl: "https://img.youtube.com/vi/mIsXWXicB48/mqdefault.jpg",
  },

  // Basic Electrical for HVAC Residential
  {
    id: BigInt(21),
    title: "Basic Electrical for HVAC Residential",
    category: VideoCategory.electricalControls,
    description:
      "Foundational electrical concepts for residential HVAC systems, covering circuits, components, and wiring fundamentals for techs and students.",
    url: "https://youtu.be/RTJlq9acCSw?si=jtw-fDMBhf1iloTz",
    linkedLessonTopic: "Electrical - Residential HVAC Fundamentals",
    duration: 1800,
    thumbnailUrl: "https://img.youtube.com/vi/RTJlq9acCSw/mqdefault.jpg",
  },

  // EPA Playlists
  {
    id: BigInt(19),
    title: "EPA 608 Prep Playlist",
    category: VideoCategory.epaPlaylists,
    description:
      "Complete EPA 608 certification preparation playlist covering Core, Type I, Type II, Type III, and Universal certification content.",
    url: "https://youtube.com/playlist?list=PLjmMtP2_3aVtT8MuGKncaNsgE-osu61G_&si=Rtys6U4w8YnsuDxP",
    linkedLessonTopic: "EPA 608 - Complete Certification Series",
    duration: 18000,
    thumbnailUrl: "https://img.youtube.com/vi/BLtBaCt81i4/mqdefault.jpg",
  },
  {
    id: BigInt(20),
    title: "HVAC Fundamentals Playlist",
    category: VideoCategory.epaPlaylists,
    description:
      "Comprehensive HVAC fundamentals playlist covering refrigeration cycle, system components, diagnostics, and troubleshooting techniques.",
    url: "https://youtube.com/playlist?list=PLjmMtP2_3aVu2d399fJl8mjRMfIR3YJVy&si=Ao5vkjIqnJ2IoECh",
    linkedLessonTopic: "HVAC - Complete Fundamentals Series",
    duration: 15000,
    thumbnailUrl: "https://img.youtube.com/vi/p6GXJdRUz9E/mqdefault.jpg",
  },
];
