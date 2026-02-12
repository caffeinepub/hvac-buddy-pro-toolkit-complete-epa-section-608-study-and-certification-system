// Comprehensive Refrigerant Specification Database
// Complete industry data for common HVAC refrigerants

export interface RefrigerantSpec {
  name: string;
  ashraeClass: string;
  type: 'CFC' | 'HCFC' | 'HFC' | 'HFO' | 'Blend' | 'Natural';
  gwp: number;
  odp: number;
  glideF: number;
  typicalEvapSatTempF: number;
  evapPressure40Fpsig: number;
  typicalCondSatTempF: number;
  oilType: string;
  chargingMethod: string;
  a2lWarning: boolean;
  dewPointRule: boolean;
  bubblePointRule: boolean;
  typicalApplications: string;
  notes: string;
}

export const REFRIGERANT_DATABASE: RefrigerantSpec[] = [
  {
    name: 'R-22',
    ashraeClass: 'A1',
    type: 'HCFC',
    gwp: 1810,
    odp: 0.055,
    glideF: 0,
    typicalEvapSatTempF: 40,
    evapPressure40Fpsig: 68.5,
    typicalCondSatTempF: 120,
    oilType: 'Mineral or Alkylbenzene',
    chargingMethod: 'Vapor or liquid',
    a2lWarning: false,
    dewPointRule: false,
    bubblePointRule: false,
    typicalApplications: 'Legacy residential and commercial AC, heat pumps, medium-temp refrigeration',
    notes: 'Phase-out complete for new equipment as of 2010. Service existing systems only. Being replaced by R-410A, R-32, R-454B.'
  },
  {
    name: 'R-410A',
    ashraeClass: 'A1',
    type: 'HFC',
    gwp: 2088,
    odp: 0,
    glideF: 0.3,
    typicalEvapSatTempF: 40,
    evapPressure40Fpsig: 118,
    typicalCondSatTempF: 120,
    oilType: 'POE (Polyolester)',
    chargingMethod: 'Liquid only (zeotropic blend)',
    a2lWarning: false,
    dewPointRule: false,
    bubblePointRule: false,
    typicalApplications: 'Residential and commercial AC, heat pumps, VRF systems',
    notes: 'Most common refrigerant in modern residential AC. Higher pressure than R-22. Requires POE oil. Phase-down beginning 2025.'
  },
  {
    name: 'R-32',
    ashraeClass: 'A2L',
    type: 'HFC',
    gwp: 675,
    odp: 0,
    glideF: 0,
    typicalEvapSatTempF: 40,
    evapPressure40Fpsig: 107,
    typicalCondSatTempF: 120,
    oilType: 'POE (Polyolester)',
    chargingMethod: 'Vapor or liquid',
    a2lWarning: true,
    dewPointRule: false,
    bubblePointRule: false,
    typicalApplications: 'Residential and commercial AC, heat pumps, VRF systems',
    notes: 'Lower GWP alternative to R-410A. Mildly flammable (A2L). Gaining popularity in new equipment. Higher efficiency potential.'
  },
  {
    name: 'R-454B',
    ashraeClass: 'A2L',
    type: 'HFO',
    gwp: 466,
    odp: 0,
    glideF: 1.0,
    typicalEvapSatTempF: 40,
    evapPressure40Fpsig: 115,
    typicalCondSatTempF: 120,
    oilType: 'POE (Polyolester)',
    chargingMethod: 'Liquid only (zeotropic blend)',
    a2lWarning: true,
    dewPointRule: true,
    bubblePointRule: true,
    typicalApplications: 'Residential and commercial AC, heat pumps, direct R-410A replacement',
    notes: 'Low-GWP R-410A replacement. Mildly flammable (A2L). Near drop-in replacement with similar pressures. Charge as liquid.'
  },
  {
    name: 'R-1234yf',
    ashraeClass: 'A2L',
    type: 'HFO',
    gwp: 4,
    odp: 0,
    glideF: 0,
    typicalEvapSatTempF: 40,
    evapPressure40Fpsig: 72,
    typicalCondSatTempF: 120,
    oilType: 'POE (Polyolester)',
    chargingMethod: 'Vapor or liquid',
    a2lWarning: true,
    dewPointRule: false,
    bubblePointRule: false,
    typicalApplications: 'Automotive AC, mobile refrigeration',
    notes: 'Ultra-low GWP. Mildly flammable (A2L). Primary refrigerant for automotive AC. Similar properties to R-134a.'
  },
  {
    name: 'R-404A',
    ashraeClass: 'A1',
    type: 'HFC',
    gwp: 3922,
    odp: 0,
    glideF: 0.8,
    typicalEvapSatTempF: -10,
    evapPressure40Fpsig: 92,
    typicalCondSatTempF: 120,
    oilType: 'POE (Polyolester)',
    chargingMethod: 'Liquid only (zeotropic blend)',
    a2lWarning: false,
    dewPointRule: true,
    bubblePointRule: true,
    typicalApplications: 'Commercial refrigeration, low-temp and medium-temp applications',
    notes: 'High GWP - phase-down in progress. Being replaced by R-448A, R-449A, R-407A. Charge as liquid to prevent fractionation.'
  },
  {
    name: 'R-134a',
    ashraeClass: 'A1',
    type: 'HFC',
    gwp: 1430,
    odp: 0,
    glideF: 0,
    typicalEvapSatTempF: 40,
    evapPressure40Fpsig: 37,
    typicalCondSatTempF: 120,
    oilType: 'POE (Polyolester)',
    chargingMethod: 'Vapor or liquid',
    a2lWarning: false,
    dewPointRule: false,
    bubblePointRule: false,
    typicalApplications: 'Automotive AC, chillers, commercial refrigeration, appliances',
    notes: 'Replaced R-12 in automotive and appliances. Lower pressure than R-22. Phase-down beginning 2025.'
  },
  {
    name: 'R-407C',
    ashraeClass: 'A1',
    type: 'HFC',
    gwp: 1774,
    odp: 0,
    glideF: 7.0,
    typicalEvapSatTempF: 40,
    evapPressure40Fpsig: 70,
    typicalCondSatTempF: 120,
    oilType: 'POE (Polyolester)',
    chargingMethod: 'Liquid only (zeotropic blend)',
    a2lWarning: false,
    dewPointRule: true,
    bubblePointRule: true,
    typicalApplications: 'Commercial AC, heat pumps, medium-temp refrigeration',
    notes: 'R-22 retrofit option. High glide requires careful charging. Charge as liquid. Monitor superheat and subcooling carefully.'
  },
  {
    name: 'R-448A',
    ashraeClass: 'A1',
    type: 'HFO',
    gwp: 1387,
    odp: 0,
    glideF: 5.0,
    typicalEvapSatTempF: -10,
    evapPressure40Fpsig: 88,
    typicalCondSatTempF: 120,
    oilType: 'POE (Polyolester)',
    chargingMethod: 'Liquid only (zeotropic blend)',
    a2lWarning: false,
    dewPointRule: true,
    bubblePointRule: true,
    typicalApplications: 'Commercial refrigeration, R-404A and R-22 replacement',
    notes: 'Lower GWP R-404A replacement. Non-flammable. Charge as liquid. Monitor glide during charging and leak repair.'
  },
  {
    name: 'R-449A',
    ashraeClass: 'A1',
    type: 'HFO',
    gwp: 1397,
    odp: 0,
    glideF: 5.5,
    typicalEvapSatTempF: -10,
    evapPressure40Fpsig: 89,
    typicalCondSatTempF: 120,
    oilType: 'POE (Polyolester)',
    chargingMethod: 'Liquid only (zeotropic blend)',
    a2lWarning: false,
    dewPointRule: true,
    bubblePointRule: true,
    typicalApplications: 'Commercial refrigeration, R-404A and R-22 replacement',
    notes: 'Lower GWP R-404A replacement. Non-flammable. Similar to R-448A. Charge as liquid.'
  },
  {
    name: 'R-452B',
    ashraeClass: 'A2L',
    type: 'HFO',
    gwp: 698,
    odp: 0,
    glideF: 1.5,
    typicalEvapSatTempF: 40,
    evapPressure40Fpsig: 115,
    typicalCondSatTempF: 120,
    oilType: 'POE (Polyolester)',
    chargingMethod: 'Liquid only (zeotropic blend)',
    a2lWarning: true,
    dewPointRule: true,
    bubblePointRule: true,
    typicalApplications: 'Commercial AC, heat pumps, R-410A replacement',
    notes: 'Low-GWP R-410A replacement. Mildly flammable (A2L). Similar pressures to R-410A. Charge as liquid.'
  },
  {
    name: 'R-513A',
    ashraeClass: 'A1',
    type: 'HFO',
    gwp: 631,
    odp: 0,
    glideF: 0.3,
    typicalEvapSatTempF: 40,
    evapPressure40Fpsig: 72,
    typicalCondSatTempF: 120,
    oilType: 'POE (Polyolester)',
    chargingMethod: 'Liquid only (zeotropic blend)',
    a2lWarning: false,
    dewPointRule: false,
    bubblePointRule: false,
    typicalApplications: 'Chillers, commercial AC, R-134a replacement',
    notes: 'Low-GWP R-134a replacement. Non-flammable. Lower pressure than R-410A. Charge as liquid.'
  },
  {
    name: 'R-290 (Propane)',
    ashraeClass: 'A3',
    type: 'Natural',
    gwp: 3,
    odp: 0,
    glideF: 0,
    typicalEvapSatTempF: 40,
    evapPressure40Fpsig: 109,
    typicalCondSatTempF: 120,
    oilType: 'Mineral or POE',
    chargingMethod: 'Vapor or liquid',
    a2lWarning: false,
    dewPointRule: false,
    bubblePointRule: false,
    typicalApplications: 'Commercial refrigeration, small appliances, limited residential use',
    notes: 'Ultra-low GWP natural refrigerant. HIGHLY FLAMMABLE (A3). Strict charge limits and safety requirements. Excellent efficiency.'
  },
  {
    name: 'R-600a (Isobutane)',
    ashraeClass: 'A3',
    type: 'Natural',
    gwp: 3,
    odp: 0,
    glideF: 0,
    typicalEvapSatTempF: 40,
    evapPressure40Fpsig: 36,
    typicalCondSatTempF: 120,
    oilType: 'Mineral or POE',
    chargingMethod: 'Vapor or liquid',
    a2lWarning: false,
    dewPointRule: false,
    bubblePointRule: false,
    typicalApplications: 'Household refrigerators and freezers, small appliances',
    notes: 'Ultra-low GWP natural refrigerant. HIGHLY FLAMMABLE (A3). Common in modern household refrigerators. Very small charges.'
  },
  {
    name: 'R-717 (Ammonia)',
    ashraeClass: 'B2L',
    type: 'Natural',
    gwp: 0,
    odp: 0,
    glideF: 0,
    typicalEvapSatTempF: -10,
    evapPressure40Fpsig: 73,
    typicalCondSatTempF: 120,
    oilType: 'Mineral (oil-less systems common)',
    chargingMethod: 'Vapor or liquid',
    a2lWarning: false,
    dewPointRule: false,
    bubblePointRule: false,
    typicalApplications: 'Industrial refrigeration, cold storage, ice rinks, food processing',
    notes: 'Zero GWP natural refrigerant. TOXIC and mildly flammable (B2L). Excellent efficiency. Requires specialized training and equipment.'
  },
  {
    name: 'R-744 (CO2)',
    ashraeClass: 'A1',
    type: 'Natural',
    gwp: 1,
    odp: 0,
    glideF: 0,
    typicalEvapSatTempF: -10,
    evapPressure40Fpsig: 528,
    typicalCondSatTempF: 88,
    oilType: 'POE (specialized)',
    chargingMethod: 'Liquid only',
    a2lWarning: false,
    dewPointRule: false,
    bubblePointRule: false,
    typicalApplications: 'Commercial refrigeration, heat pumps, transcritical systems',
    notes: 'Ultra-low GWP natural refrigerant. VERY HIGH PRESSURE (up to 1500 psig). Non-toxic, non-flammable. Requires specialized equipment.'
  },
  {
    name: 'R-123',
    ashraeClass: 'B1',
    type: 'HCFC',
    gwp: 77,
    odp: 0.02,
    glideF: 0,
    typicalEvapSatTempF: 40,
    evapPressure40Fpsig: -5,
    typicalCondSatTempF: 120,
    oilType: 'Mineral or Alkylbenzene',
    chargingMethod: 'Liquid into evaporator',
    a2lWarning: false,
    dewPointRule: false,
    bubblePointRule: false,
    typicalApplications: 'Low-pressure centrifugal chillers',
    notes: 'Low-pressure refrigerant (operates in vacuum). TOXIC (B1 classification). Phase-out in progress. Requires purge unit. Service existing systems only.'
  },
  {
    name: 'R-12',
    ashraeClass: 'A1',
    type: 'CFC',
    gwp: 10900,
    odp: 1.0,
    glideF: 0,
    typicalEvapSatTempF: 40,
    evapPressure40Fpsig: 51,
    typicalCondSatTempF: 120,
    oilType: 'Mineral',
    chargingMethod: 'Vapor or liquid',
    a2lWarning: false,
    dewPointRule: false,
    bubblePointRule: false,
    typicalApplications: 'Legacy automotive AC, appliances (pre-1995)',
    notes: 'BANNED - Production ceased 1996. High ODP and GWP. Service existing systems only with reclaimed refrigerant. Replaced by R-134a.'
  },
  {
    name: 'R-502',
    ashraeClass: 'A1',
    type: 'CFC',
    gwp: 4657,
    odp: 0.33,
    glideF: 0,
    typicalEvapSatTempF: -10,
    evapPressure40Fpsig: 84,
    typicalCondSatTempF: 120,
    oilType: 'Mineral or Alkylbenzene',
    chargingMethod: 'Vapor or liquid',
    a2lWarning: false,
    dewPointRule: false,
    bubblePointRule: false,
    typicalApplications: 'Legacy low-temp commercial refrigeration',
    notes: 'BANNED - Production ceased 1996. High ODP and GWP. Service existing systems only with reclaimed refrigerant. Replaced by R-404A, R-407A.'
  }
];

// Helper functions for filtering and searching
export function filterRefrigerants(filters: {
  minGwp?: number;
  maxGwp?: number;
  minEvapPressure?: number;
  maxEvapPressure?: number;
  type?: string;
  hasA2lWarning?: boolean;
}): RefrigerantSpec[] {
  return REFRIGERANT_DATABASE.filter(ref => {
    if (filters.minGwp !== undefined && ref.gwp < filters.minGwp) return false;
    if (filters.maxGwp !== undefined && ref.gwp > filters.maxGwp) return false;
    if (filters.minEvapPressure !== undefined && ref.evapPressure40Fpsig < filters.minEvapPressure) return false;
    if (filters.maxEvapPressure !== undefined && ref.evapPressure40Fpsig > filters.maxEvapPressure) return false;
    if (filters.type && ref.type !== filters.type) return false;
    if (filters.hasA2lWarning !== undefined && ref.a2lWarning !== filters.hasA2lWarning) return false;
    return true;
  });
}

export function searchRefrigerants(searchTerm: string): RefrigerantSpec[] {
  const term = searchTerm.toLowerCase();
  return REFRIGERANT_DATABASE.filter(ref =>
    ref.name.toLowerCase().includes(term) ||
    ref.typicalApplications.toLowerCase().includes(term) ||
    ref.notes.toLowerCase().includes(term) ||
    ref.type.toLowerCase().includes(term)
  );
}

export function getRefrigerantByName(name: string): RefrigerantSpec | undefined {
  return REFRIGERANT_DATABASE.find(ref => ref.name.toLowerCase() === name.toLowerCase());
}

export function getRefrigerantsByType(type: string): RefrigerantSpec[] {
  return REFRIGERANT_DATABASE.filter(ref => ref.type === type);
}

export function getA2LRefrigerants(): RefrigerantSpec[] {
  return REFRIGERANT_DATABASE.filter(ref => ref.a2lWarning);
}

export function getLowGWPRefrigerants(maxGwp: number = 700): RefrigerantSpec[] {
  return REFRIGERANT_DATABASE.filter(ref => ref.gwp <= maxGwp);
}
