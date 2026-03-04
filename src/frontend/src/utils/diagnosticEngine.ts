/**
 * HVAC Diagnostic Engine
 *
 * A pure frontend utility that evaluates six numeric HVAC system measurements
 * against defined normal operating ranges to detect seven specific fault patterns.
 *
 * @example
 * ```typescript
 * import { runDiagnostics } from './diagnosticEngine';
 *
 * const results = runDiagnostics({
 *   suctionPressure: 58,
 *   headPressure: 260,
 *   superheat: 25,
 *   subcool: 6,
 *   compressorAmps: 14,
 *   deltaT: 16,
 * });
 *
 * // results is an array of DiagnosticResult sorted by confidence (High → Medium → Low)
 * console.log(results);
 * ```
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** Confidence level for a matched fault pattern */
export type ConfidenceLevel = "High" | "Medium" | "Low";

/** A single diagnostic result for a matched fault pattern */
export interface DiagnosticResult {
  /** Human-readable name of the likely fault */
  likelyCause: string;
  /** How confident the engine is in this diagnosis */
  confidenceLevel: ConfidenceLevel;
  /** Explanation of why this pattern was detected, referencing actual input values */
  explanation: string;
  /** Recommended field action to confirm or resolve the fault */
  recommendedNextStep: string;
}

/** Six numeric HVAC measurements required by the diagnostic engine */
export interface DiagnosticInputs {
  /** Low-side (suction) pressure in PSIG */
  suctionPressure: number;
  /** High-side (head/discharge) pressure in PSIG */
  headPressure: number;
  /** Superheat at the suction line in °F */
  superheat: number;
  /** Subcooling at the liquid line in °F */
  subcool: number;
  /** Compressor amperage draw in Amps */
  compressorAmps: number;
  /** Temperature differential (return air minus supply air) in °F */
  deltaT: number;
}

// ---------------------------------------------------------------------------
// Normal Operating Ranges (R-410A residential split system baseline)
// ---------------------------------------------------------------------------

const RANGES = {
  suctionPressure: { low: 100, high: 130 }, // PSIG
  headPressure: { low: 250, high: 350 }, // PSIG
  superheat: { low: 10, high: 20 }, // °F
  subcool: { low: 10, high: 15 }, // °F
  compressorAmps: { low: 8, high: 20 }, // A (wide range; used for relative checks)
  deltaT: { low: 18, high: 22 }, // °F
} as const;

// ---------------------------------------------------------------------------
// Confidence scoring helpers
// ---------------------------------------------------------------------------

const CONFIDENCE_ORDER: Record<ConfidenceLevel, number> = {
  High: 3,
  Medium: 2,
  Low: 1,
};

function scoreToConfidence(score: number, maxScore: number): ConfidenceLevel {
  const ratio = score / maxScore;
  if (ratio >= 0.75) return "High";
  if (ratio >= 0.45) return "Medium";
  return "Low";
}

// ---------------------------------------------------------------------------
// Pattern detection functions
// ---------------------------------------------------------------------------

/**
 * Pattern 1 – Low Refrigerant Charge
 * Indicators: low suction pressure, high superheat, low subcool
 */
function detectLowCharge(inputs: DiagnosticInputs): DiagnosticResult | null {
  const { suctionPressure, superheat, subcool } = inputs;

  let score = 0;
  const maxScore = 3;

  if (suctionPressure < RANGES.suctionPressure.low) score++;
  if (superheat > RANGES.superheat.high) score++;
  if (subcool < RANGES.subcool.low) score++;

  if (score === 0) return null;

  const confidence = scoreToConfidence(score, maxScore);

  return {
    likelyCause: "Low Refrigerant Charge",
    confidenceLevel: confidence,
    explanation: `Suction pressure is ${suctionPressure} PSIG (normal: ${RANGES.suctionPressure.low}–${RANGES.suctionPressure.high} PSIG), superheat is ${superheat}°F (normal: ${RANGES.superheat.low}–${RANGES.superheat.high}°F), and subcooling is ${subcool}°F (normal: ${RANGES.subcool.low}–${RANGES.subcool.high}°F). Low suction pressure combined with elevated superheat and reduced subcooling strongly suggests insufficient refrigerant in the system.`,
    recommendedNextStep:
      "Inspect all accessible refrigerant connections and components for leaks using an electronic leak detector. " +
      "If a leak is confirmed, repair it before recharging the system to the manufacturer's specified charge weight.",
  };
}

/**
 * Pattern 2 – Refrigerant Overcharge
 * Indicators: high suction pressure, high head pressure, low superheat, high subcool
 */
function detectOvercharge(inputs: DiagnosticInputs): DiagnosticResult | null {
  const { suctionPressure, headPressure, superheat, subcool } = inputs;

  let score = 0;
  const maxScore = 4;

  if (suctionPressure > RANGES.suctionPressure.high) score++;
  if (headPressure > RANGES.headPressure.high) score++;
  if (superheat < RANGES.superheat.low) score++;
  if (subcool > RANGES.subcool.high) score++;

  if (score === 0) return null;

  const confidence = scoreToConfidence(score, maxScore);

  return {
    likelyCause: "Refrigerant Overcharge",
    confidenceLevel: confidence,
    explanation: `Suction pressure is ${suctionPressure} PSIG (normal: ≤${RANGES.suctionPressure.high} PSIG), head pressure is ${headPressure} PSIG (normal: ≤${RANGES.headPressure.high} PSIG), superheat is ${superheat}°F (normal: ≥${RANGES.superheat.low}°F), and subcooling is ${subcool}°F (normal: ≤${RANGES.subcool.high}°F). Elevated pressures on both sides with low superheat and high subcooling indicate excess refrigerant flooding the system.`,
    recommendedNextStep:
      "Recover refrigerant in small increments (0.5 lb at a time) into a certified recovery cylinder, " +
      "rechecking pressures and superheat/subcooling after each recovery until values fall within normal range.",
  };
}

/**
 * Pattern 3 – Dirty / Fouled Condenser Coil
 * Indicators: high head pressure, normal-to-high suction pressure, high subcool
 */
function detectDirtyCondenser(
  inputs: DiagnosticInputs,
): DiagnosticResult | null {
  const { suctionPressure, headPressure, subcool } = inputs;

  let score = 0;
  const maxScore = 3;

  if (headPressure > RANGES.headPressure.high) score++;
  if (suctionPressure >= RANGES.suctionPressure.low) score++; // normal or high
  if (subcool > RANGES.subcool.high) score++;

  if (score === 0) return null;

  const confidence = scoreToConfidence(score, maxScore);

  return {
    likelyCause: "Dirty Condenser Coil",
    confidenceLevel: confidence,
    explanation: `Head pressure is ${headPressure} PSIG (normal: ≤${RANGES.headPressure.high} PSIG) while suction pressure is ${suctionPressure} PSIG (within or above normal range) and subcooling is ${subcool}°F (normal: ≤${RANGES.subcool.high}°F). High discharge pressure with normal suction and elevated subcooling points to restricted heat rejection at the condenser, commonly caused by dirt, debris, or fin damage blocking airflow.`,
    recommendedNextStep:
      "Inspect the condenser coil for dirt, debris, or fin damage. " +
      "Clean the coil with an approved coil cleaner and rinse thoroughly. " +
      "Verify condenser fan motor RPM and blade pitch are within specification.",
  };
}

/**
 * Pattern 4 – Low Indoor Airflow
 * Indicators: low delta T, high superheat
 */
function detectLowIndoorAirflow(
  inputs: DiagnosticInputs,
): DiagnosticResult | null {
  const { superheat, deltaT } = inputs;

  let score = 0;
  const maxScore = 2;

  if (deltaT < RANGES.deltaT.low) score++;
  if (superheat > RANGES.superheat.high) score++;

  if (score === 0) return null;

  const confidence = scoreToConfidence(score, maxScore);

  return {
    likelyCause: "Low Indoor Airflow",
    confidenceLevel: confidence,
    explanation: `Delta T is ${deltaT}°F (normal: ${RANGES.deltaT.low}–${RANGES.deltaT.high}°F) and superheat is ${superheat}°F (normal: ${RANGES.superheat.low}–${RANGES.superheat.high}°F). A low temperature differential across the coil combined with elevated superheat suggests insufficient air volume moving across the evaporator, preventing proper heat transfer.`,
    recommendedNextStep:
      "Check and replace the air filter if dirty. " +
      "Inspect all supply and return registers for blockages. " +
      "Verify blower motor speed, capacitor condition, and that all duct dampers are open. " +
      "Measure static pressure across the air handler to confirm airflow restriction.",
  };
}

/**
 * Pattern 5 – Liquid Line Restriction
 * Indicators: low suction pressure, high subcool, low-to-normal head pressure
 */
function detectLiquidLineRestriction(
  inputs: DiagnosticInputs,
): DiagnosticResult | null {
  const { suctionPressure, headPressure, subcool } = inputs;

  let score = 0;
  const maxScore = 3;

  if (suctionPressure < RANGES.suctionPressure.low) score++;
  if (subcool > RANGES.subcool.high) score++;
  if (headPressure <= RANGES.headPressure.high) score++; // head pressure is NOT elevated

  if (score === 0) return null;

  const confidence = scoreToConfidence(score, maxScore);

  return {
    likelyCause: "Liquid Line Restriction",
    confidenceLevel: confidence,
    explanation: `Suction pressure is ${suctionPressure} PSIG (normal: ≥${RANGES.suctionPressure.low} PSIG), subcooling is ${subcool}°F (normal: ≤${RANGES.subcool.high}°F), and head pressure is ${headPressure} PSIG (not elevated). Low suction pressure with high subcooling but normal head pressure indicates a restriction in the liquid line (e.g., clogged filter-drier, kinked line, or partially closed service valve) starving the metering device.`,
    recommendedNextStep:
      "Check the liquid line filter-drier for a temperature or pressure drop across it (a cold or frosted drier indicates blockage). " +
      "Inspect all liquid line service valves to confirm they are fully open. " +
      "Replace the filter-drier if a restriction is confirmed.",
  };
}

/**
 * Pattern 6 – TXV Overfeeding
 * Indicators: low superheat, high suction pressure
 */
function detectTxvOverfeed(inputs: DiagnosticInputs): DiagnosticResult | null {
  const { suctionPressure, superheat } = inputs;

  let score = 0;
  const maxScore = 2;

  if (superheat < RANGES.superheat.low) score++;
  if (suctionPressure > RANGES.suctionPressure.high) score++;

  if (score === 0) return null;

  const confidence = scoreToConfidence(score, maxScore);

  return {
    likelyCause: "TXV Overfeeding",
    confidenceLevel: confidence,
    explanation: `Superheat is ${superheat}°F (normal: ≥${RANGES.superheat.low}°F) and suction pressure is ${suctionPressure} PSIG (normal: ≤${RANGES.suctionPressure.high} PSIG). Low superheat combined with elevated suction pressure suggests the thermostatic expansion valve is feeding too much refrigerant into the evaporator, risking liquid slugging at the compressor.`,
    recommendedNextStep:
      "Inspect the TXV sensing bulb for proper contact and insulation on the suction line. " +
      "Verify the bulb is correctly positioned (at the 4 o'clock position on a horizontal line). " +
      "If the bulb is secure, the TXV may need adjustment or replacement.",
  };
}

/**
 * Pattern 7 – TXV Underfeeding
 * Indicators: high superheat, low suction pressure
 */
function detectTxvUnderfeed(inputs: DiagnosticInputs): DiagnosticResult | null {
  const { suctionPressure, superheat } = inputs;

  let score = 0;
  const maxScore = 2;

  if (superheat > RANGES.superheat.high) score++;
  if (suctionPressure < RANGES.suctionPressure.low) score++;

  if (score === 0) return null;

  const confidence = scoreToConfidence(score, maxScore);

  return {
    likelyCause: "TXV Underfeeding",
    confidenceLevel: confidence,
    explanation: `Superheat is ${superheat}°F (normal: ≤${RANGES.superheat.high}°F) and suction pressure is ${suctionPressure} PSIG (normal: ≥${RANGES.suctionPressure.low} PSIG). High superheat with low suction pressure indicates the TXV is not feeding enough refrigerant into the evaporator, causing the coil to run starved and reducing system capacity.`,
    recommendedNextStep:
      "Check the TXV sensing bulb for loss of charge (a warm bulb that does not respond to temperature changes). " +
      "Inspect the external equalizer line for blockage. " +
      "Verify the TXV is not stuck closed or partially blocked by debris. " +
      "Replace the TXV if it cannot be adjusted to achieve 10–20°F superheat.",
  };
}

// ---------------------------------------------------------------------------
// Main exported function
// ---------------------------------------------------------------------------

/**
 * Runs all seven HVAC fault pattern detectors against the provided measurements
 * and returns matched results sorted by confidence level (High → Medium → Low).
 *
 * @param inputs - Six numeric HVAC measurements
 * @returns Array of DiagnosticResult objects (may be empty if no patterns match)
 *
 * @example
 * ```typescript
 * const results = runDiagnostics({
 *   suctionPressure: 58,
 *   headPressure: 260,
 *   superheat: 28,
 *   subcool: 4,
 *   compressorAmps: 10,
 *   deltaT: 14,
 * });
 * // Likely returns Low Charge (High confidence) and TXV Underfeed (Medium confidence)
 * ```
 */
export function runDiagnostics(inputs: DiagnosticInputs): DiagnosticResult[] {
  const detectors = [
    detectLowCharge,
    detectOvercharge,
    detectDirtyCondenser,
    detectLowIndoorAirflow,
    detectLiquidLineRestriction,
    detectTxvOverfeed,
    detectTxvUnderfeed,
  ];

  const results: DiagnosticResult[] = [];

  for (const detect of detectors) {
    const result = detect(inputs);
    if (result !== null) {
      results.push(result);
    }
  }

  // Sort by confidence descending: High (3) → Medium (2) → Low (1)
  results.sort(
    (a, b) =>
      CONFIDENCE_ORDER[b.confidenceLevel] - CONFIDENCE_ORDER[a.confidenceLevel],
  );

  return results;
}

/**
 * Returns the normal operating ranges used by the diagnostic engine.
 * Useful for displaying reference values in the UI.
 */
export function getNormalRanges() {
  return { ...RANGES };
}
