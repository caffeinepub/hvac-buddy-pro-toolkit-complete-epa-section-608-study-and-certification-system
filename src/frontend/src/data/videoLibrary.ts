import { VideoCategory, type VideoRecord } from "@/types/local";

// Comprehensive curated YouTube video library for HVAC Buddy
// Organized into 5 structured categories with descriptions, related modules & tools
export const curatedVideos: VideoRecord[] = [
  // ── EPA 608 Certification Prep ───────────────────────────────────────────────
  {
    id: BigInt(1),
    title: "EPA 608 Core Prep Part 1",
    category: VideoCategory.epa608Prep,
    description:
      "Complete overview of EPA Section 608 Core requirements, ozone depletion science, Clean Air Act regulations, and refrigerant safety fundamentals.",
    url: "https://youtu.be/BLtBaCt81i4",
    linkedLessonTopic: "EPA Core - Ozone Depletion & Environmental Impact",
    duration: 1800,
    thumbnailUrl: "https://img.youtube.com/vi/BLtBaCt81i4/mqdefault.jpg",
    relatedModules: ["EPA 608 Study System", "Refrigeration Fundamentals"],
    relatedTools: ["Refrigerant Diagnostic Tool"],
  },
  {
    id: BigInt(2),
    title: "EPA 608 Core Prep Part 2",
    category: VideoCategory.epa608Prep,
    description:
      "Deep dive into refrigerant recovery procedures, substitute refrigerants, safe handling, and shipping regulations under EPA 608.",
    url: "https://youtu.be/gi-RkhawFGU",
    linkedLessonTopic: "EPA Core - Recovery & Regulations",
    duration: 1800,
    thumbnailUrl: "https://img.youtube.com/vi/gi-RkhawFGU/mqdefault.jpg",
    relatedModules: ["EPA 608 Study System", "Refrigeration Fundamentals"],
    relatedTools: ["Refrigerant Diagnostic Tool"],
  },
  {
    id: BigInt(3),
    title: "EPA 608 Type 1 Prep",
    category: VideoCategory.epa608Prep,
    description:
      "Small appliance certification prep covering sealed systems under 5 lbs, passive/active recovery methods, and disposal requirements.",
    url: "https://youtu.be/wZH058B3x54",
    linkedLessonTopic: "Type I - Small Appliance Systems",
    duration: 1650,
    thumbnailUrl: "https://img.youtube.com/vi/wZH058B3x54/mqdefault.jpg",
    relatedModules: ["EPA 608 Study System"],
    relatedTools: ["Refrigerant Diagnostic Tool"],
  },
  {
    id: BigInt(4),
    title: "EPA 608 Type 2 Prep",
    category: VideoCategory.epa608Prep,
    description:
      "High-pressure system certification covering R-410A service, leak detection, recovery levels, and EPA-compliant charging procedures.",
    url: "https://youtu.be/Mnl_KY-D59A",
    linkedLessonTopic: "Type II - High-Pressure Systems",
    duration: 2400,
    thumbnailUrl: "https://img.youtube.com/vi/Mnl_KY-D59A/mqdefault.jpg",
    relatedModules: ["EPA 608 Study System", "Refrigeration Fundamentals"],
    relatedTools: ["Refrigerant Diagnostic Tool"],
  },
  {
    id: BigInt(5),
    title: "EPA 608 Type 3 Prep",
    category: VideoCategory.epa608Prep,
    description:
      "Low-pressure chiller certification covering R-123, purge units, chiller evacuation, leak testing, and recharging procedures.",
    url: "https://youtu.be/CXMLkI1WMcQ",
    linkedLessonTopic: "Type III - Low-Pressure Chillers",
    duration: 2700,
    thumbnailUrl: "https://img.youtube.com/vi/CXMLkI1WMcQ/mqdefault.jpg",
    relatedModules: ["EPA 608 Study System"],
    relatedTools: ["Refrigerant Diagnostic Tool"],
  },
  {
    id: BigInt(6),
    title: "EPA 608 Full Prep Playlist",
    category: VideoCategory.epa608Prep,
    description:
      "Complete EPA 608 certification playlist covering Core, Type I, II, III topics in a structured learning sequence.",
    url: "https://youtube.com/playlist?list=PLjmMtP2_3aVtT8MuGKncaNsgE-osu61G_",
    linkedLessonTopic: "EPA 608 - Full Certification Series",
    duration: 18000,
    thumbnailUrl: "https://img.youtube.com/vi/BLtBaCt81i4/mqdefault.jpg",
    relatedModules: ["EPA 608 Study System"],
    relatedTools: [],
  },

  // ── HVAC Fundamentals ────────────────────────────────────────────────────────
  {
    id: BigInt(7),
    title: "HVAC Fundamentals Playlist",
    category: VideoCategory.hvacFundamentals,
    description:
      "Comprehensive HVAC fundamentals playlist covering the refrigeration cycle, system components, airflow principles, and core technical concepts.",
    url: "https://youtube.com/playlist?list=PLjmMtP2_3aVu2d399fJl8mjRMfIR3YJVy",
    linkedLessonTopic: "HVAC - Complete Fundamentals Series",
    duration: 15000,
    thumbnailUrl: "https://img.youtube.com/vi/p6GXJdRUz9E/mqdefault.jpg",
    relatedModules: ["Refrigeration Fundamentals", "HVAC Tools Training"],
    relatedTools: [],
  },
  {
    id: BigInt(8),
    title: "HVAC AC Types",
    category: VideoCategory.hvacFundamentals,
    description:
      "Overview of split systems, package units, heat pumps, and ductless mini-splits — how each type operates and is applied in the field.",
    url: "https://youtu.be/moBjCghTCsE",
    linkedLessonTopic: "Fundamentals - AC System Types",
    duration: 2100,
    thumbnailUrl: "https://img.youtube.com/vi/moBjCghTCsE/mqdefault.jpg",
    relatedModules: ["Refrigeration Fundamentals"],
    relatedTools: ["Refrigerant Diagnostic Tool"],
  },
  {
    id: BigInt(9),
    title: "HVAC Refrigerant Line 3D",
    category: VideoCategory.hvacFundamentals,
    description:
      "3D visualization of refrigerant line routing, sizing rules, and proper installation for optimal system efficiency.",
    url: "https://youtu.be/j6-n2xSn90A",
    linkedLessonTopic: "Fundamentals - Refrigerant Lines",
    duration: 1500,
    thumbnailUrl: "https://img.youtube.com/vi/j6-n2xSn90A/mqdefault.jpg",
    relatedModules: ["Refrigeration Fundamentals"],
    relatedTools: ["Refrigerant Diagnostic Tool"],
  },
  {
    id: BigInt(10),
    title: "HVAC 3D Refrigeration Circuit",
    category: VideoCategory.hvacFundamentals,
    description:
      "Detailed 3D animation of the vapor-compression cycle — compressor, condenser, metering device, and evaporator interactions shown in real time.",
    url: "https://youtu.be/p6GXJdRUz9E",
    linkedLessonTopic: "Fundamentals - Refrigeration Cycle",
    duration: 1800,
    thumbnailUrl: "https://img.youtube.com/vi/p6GXJdRUz9E/mqdefault.jpg",
    relatedModules: ["Refrigeration Fundamentals", "Superheat and Subcooling"],
    relatedTools: ["Refrigerant Diagnostic Tool"],
  },

  // ── Electrical & Control Circuits ────────────────────────────────────────────
  {
    id: BigInt(11),
    title: "How Power Moves Through An AC System Schematic",
    category: VideoCategory.electricalCircuits,
    description:
      "Step-by-step walkthrough of how power flows through a complete AC system schematic, covering 24V control circuits, high-voltage power, contactors, and safety switches.",
    url: "https://youtu.be/VtC25cV1mU0",
    linkedLessonTopic: "Electrical - AC System Schematics",
    duration: 1800,
    thumbnailUrl: "https://img.youtube.com/vi/VtC25cV1mU0/mqdefault.jpg",
    relatedModules: ["Electrical Fundamentals", "HVAC Tools Training"],
    relatedTools: ["Guided Electrical Diagnostic Tool"],
  },
  {
    id: BigInt(12),
    title: "HVAC Low Voltage Circuit Explained",
    category: VideoCategory.electricalCircuits,
    description:
      "Clear explanation of 24V low-voltage control circuits — how the thermostat, transformer, contactor coil, and safety switches interact.",
    url: "https://youtu.be/5UU2c5e2ork",
    linkedLessonTopic: "Electrical - Low Voltage Control Circuits",
    duration: 2100,
    thumbnailUrl: "https://img.youtube.com/vi/5UU2c5e2ork/mqdefault.jpg",
    relatedModules: ["Electrical Fundamentals"],
    relatedTools: ["Guided Electrical Diagnostic Tool"],
  },
  {
    id: BigInt(13),
    title: "How to Wire a Thermostat for Beginners",
    category: VideoCategory.electricalCircuits,
    description:
      "Beginner-friendly guide to thermostat wiring color codes, common terminal designations (R, C, Y, W, G), and installation best practices.",
    url: "https://youtu.be/mIsXWXicB48",
    linkedLessonTopic: "Electrical - Thermostat Wiring",
    duration: 1800,
    thumbnailUrl: "https://img.youtube.com/vi/mIsXWXicB48/mqdefault.jpg",
    relatedModules: ["Electrical Fundamentals"],
    relatedTools: ["Guided Electrical Diagnostic Tool"],
  },
  {
    id: BigInt(14),
    title: "How to Test HVAC Relays, Contactors and Transformers",
    category: VideoCategory.electricalCircuits,
    description:
      "Multimeter-based testing procedures for relays, contactors, and transformers — including coil resistance checks, contact testing, and voltage verification.",
    url: "https://youtu.be/4ja6GynaxQ0",
    linkedLessonTopic: "Electrical - Relay & Transformer Testing",
    duration: 1500,
    thumbnailUrl: "https://img.youtube.com/vi/4ja6GynaxQ0/mqdefault.jpg",
    relatedModules: ["Multimeter Training", "Electrical Fundamentals"],
    relatedTools: ["Guided Electrical Diagnostic Tool"],
  },
  {
    id: BigInt(15),
    title: "HVAC Multimeter 101 (3D)",
    category: VideoCategory.electricalCircuits,
    description:
      "3D demonstration of digital multimeter setup and use for HVAC — testing voltage, resistance, continuity, and amperage in real system scenarios.",
    url: "https://youtu.be/fa8NM7JzISM",
    linkedLessonTopic: "Electrical - Multimeter Use in HVAC",
    duration: 1800,
    thumbnailUrl: "https://img.youtube.com/vi/fa8NM7JzISM/mqdefault.jpg",
    relatedModules: ["Multimeter Training"],
    relatedTools: ["Guided Electrical Diagnostic Tool"],
  },

  // ── Refrigerant Diagnostics ──────────────────────────────────────────────────
  {
    id: BigInt(16),
    title: "HVAC AC Pressure, Superheat & Subcooling Explained",
    category: VideoCategory.refrigerantDiagnostics,
    description:
      "Detailed breakdown of how to read system pressures, calculate superheat and subcooling, and use these values to diagnose charge level and system faults.",
    url: "https://youtu.be/5UU2c5e2ork",
    linkedLessonTopic: "Diagnostics - Superheat & Subcooling",
    duration: 2100,
    thumbnailUrl: "https://img.youtube.com/vi/5UU2c5e2ork/mqdefault.jpg",
    relatedModules: ["Superheat and Subcooling", "Refrigeration Fundamentals"],
    relatedTools: ["Refrigerant Diagnostic Tool"],
  },
  {
    id: BigInt(17),
    title: "HVAC Refrigerant Pressure Gauges",
    category: VideoCategory.refrigerantDiagnostics,
    description:
      "How to set up and read manifold gauge sets, interpret high-side and low-side pressure readings, and connect gauges safely to HVAC systems.",
    url: "https://youtu.be/eEZAgzkS_sA",
    linkedLessonTopic: "Diagnostics - Manifold Gauge Use",
    duration: 1500,
    thumbnailUrl: "https://img.youtube.com/vi/eEZAgzkS_sA/mqdefault.jpg",
    relatedModules: ["Refrigeration Fundamentals", "HVAC Tools Training"],
    relatedTools: ["Refrigerant Diagnostic Tool"],
  },
  {
    id: BigInt(18),
    title: "HVAC Metering Device Basics",
    category: VideoCategory.refrigerantDiagnostics,
    description:
      "Explanation of TXV, EEV, and fixed orifice metering devices — how each controls refrigerant flow and what failures look like in system pressures.",
    url: "https://youtu.be/qV-DIqIxPGk",
    linkedLessonTopic: "Diagnostics - Metering Devices",
    duration: 1950,
    thumbnailUrl: "https://img.youtube.com/vi/qV-DIqIxPGk/mqdefault.jpg",
    relatedModules: ["Refrigeration Fundamentals", "Superheat and Subcooling"],
    relatedTools: ["Refrigerant Diagnostic Tool"],
  },

  // ── HVAC Tools & Service Procedures ─────────────────────────────────────────
  {
    id: BigInt(19),
    title: "HVAC How to Evacuate AC System",
    category: VideoCategory.hvacToolsService,
    description:
      "Proper system evacuation procedure — vacuum pump connection, deep vacuum targets, decay testing, and verifying leak-free integrity before charging.",
    url: "https://youtu.be/JsnQeUSuUMU",
    linkedLessonTopic: "Service - System Evacuation",
    duration: 1650,
    thumbnailUrl: "https://img.youtube.com/vi/JsnQeUSuUMU/mqdefault.jpg",
    relatedModules: ["HVAC Tools Training", "Refrigeration Fundamentals"],
    relatedTools: ["Refrigerant Diagnostic Tool"],
  },
  {
    id: BigInt(20),
    title: "HVAC Vacuum Procedures",
    category: VideoCategory.hvacToolsService,
    description:
      "Step-by-step guide to using a vacuum pump and micron gauge — understanding vacuum levels, triple evacuation, and what a proper decay test looks like.",
    url: "https://youtu.be/TllrD0Mt2LU",
    linkedLessonTopic: "Service - Vacuum & Micron Testing",
    duration: 1650,
    thumbnailUrl: "https://img.youtube.com/vi/TllrD0Mt2LU/mqdefault.jpg",
    relatedModules: ["HVAC Tools Training"],
    relatedTools: ["Refrigerant Diagnostic Tool"],
  },
  {
    id: BigInt(21),
    title: "HVAC Refrigerant Recovery (3D)",
    category: VideoCategory.hvacToolsService,
    description:
      "3D animated walkthrough of EPA-compliant refrigerant recovery from a running AC system — equipment setup, tank handling, and recovery completion checks.",
    url: "https://youtu.be/fROHlPXw_H0",
    linkedLessonTopic: "Service - Refrigerant Recovery",
    duration: 1800,
    thumbnailUrl: "https://img.youtube.com/vi/fROHlPXw_H0/mqdefault.jpg",
    relatedModules: ["HVAC Tools Training", "EPA 608 Study System"],
    relatedTools: ["Refrigerant Diagnostic Tool"],
  },
  {
    id: BigInt(22),
    title: "Basic Electrical for HVAC Residential",
    category: VideoCategory.electricalCircuits,
    description:
      "Residential electrical fundamentals for HVAC technicians — service entrance, panels, breakers, wiring, and safety best practices for residential AC systems.",
    url: "https://youtu.be/RTJlq9acCSw",
    linkedLessonTopic: "Electrical - Residential Electrical Systems",
    duration: 2100,
    thumbnailUrl: "https://img.youtube.com/vi/RTJlq9acCSw/mqdefault.jpg",
    relatedModules: ["Electrical Fundamentals", "Multimeter Training"],
    relatedTools: ["Guided Electrical Diagnostic Tool"],
  },
];

// Helper: extract YouTube embed URL from various YouTube URL formats
export function getEmbedUrl(url: string): string {
  // Playlist
  const playlistMatch = url.match(/[?&]list=([^&]+)/);
  if (playlistMatch) {
    return `https://www.youtube.com/embed/videoseries?list=${playlistMatch[1]}`;
  }
  // youtu.be short URL
  const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
  if (shortMatch) {
    return `https://www.youtube.com/embed/${shortMatch[1]}`;
  }
  // youtube.com/watch?v=
  const watchMatch = url.match(/[?&]v=([^&]+)/);
  if (watchMatch) {
    return `https://www.youtube.com/embed/${watchMatch[1]}`;
  }
  return url;
}

// Helper: check if a URL is a playlist
export function isPlaylist(url: string): boolean {
  return url.includes("playlist?list=");
}

// Helper: extract video ID
export function getVideoId(url: string): string | null {
  const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
  if (shortMatch) return shortMatch[1];
  const watchMatch = url.match(/[?&]v=([^&]+)/);
  if (watchMatch) return watchMatch[1];
  return null;
}
