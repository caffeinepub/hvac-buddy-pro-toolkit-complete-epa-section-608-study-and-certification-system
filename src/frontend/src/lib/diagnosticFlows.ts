export interface DiagnosticStep {
  id: string;
  title: string;
  category?: string;
  question: string;
  explanation?: string;
  safetyWarning?: string;
  inputType: 'yesNo' | 'choice' | 'measurement' | 'number';
  options?: string[];
  measurements?: Array<{ label: string; key: string; unit: string }>;
  numberLabel?: string;
  numberUnit?: string;
}

export interface DiagnosticAnswer {
  value: string;
  measurements?: Record<string, string>;
}

export interface DiagnosticSession {
  symptom: string;
  currentStepIndex: number;
  answers: Record<string, DiagnosticAnswer>;
  measurements: Record<string, string>;
  confidence: number;
  startTime: number;
}

export interface DiagnosticFlowDefinition {
  name: string;
  description: string;
  steps: DiagnosticStep[];
}

export const diagnosticFlows: Record<string, DiagnosticFlowDefinition> = {
  'no-cooling': {
    name: 'No Cooling / Warm Air',
    description: 'Diagnostic flow for systems not providing adequate cooling',
    steps: [
      {
        id: 'thermostat-check',
        title: 'Thermostat Verification',
        category: 'Basic Checks',
        question: 'Is the thermostat set to COOL mode and below room temperature?',
        explanation:
          'The thermostat controls when the system runs. If it is not set correctly, the system will not cool. This is the first and easiest check.',
        inputType: 'yesNo',
      },
      {
        id: 'power-check',
        title: 'Power Supply',
        category: 'Basic Checks',
        question: 'Is the outdoor unit receiving power and running?',
        explanation:
          'The outdoor unit (condenser) must run for the system to cool. Check if the fan is spinning and the compressor is humming.',
        inputType: 'yesNo',
      },
      {
        id: 'filter-check',
        title: 'Air Filter Inspection',
        category: 'Basic Checks',
        question: 'Is the air filter clean and allowing proper airflow?',
        explanation:
          'A dirty filter restricts airflow, reducing cooling capacity and potentially causing the evaporator coil to freeze. This is one of the most common issues.',
        inputType: 'choice',
        options: ['Clean', 'Slightly dirty', 'Very dirty', 'Not checked'],
      },
      {
        id: 'airflow-check',
        title: 'Airflow Assessment',
        category: 'Basic Checks',
        question: 'Is there strong airflow coming from the supply vents?',
        explanation:
          'Weak airflow indicates a problem with the blower motor, ductwork, or severe filter restriction. Proper airflow is essential for cooling.',
        inputType: 'choice',
        options: ['Strong', 'Moderate', 'Weak', 'None'],
      },
      {
        id: 'temperature-readings',
        title: 'Temperature Measurements',
        category: 'Measurements',
        question: 'Record supply and return air temperatures',
        explanation:
          'The temperature difference (delta T) between supply and return air should typically be 15-20°F. This helps identify cooling capacity issues.',
        safetyWarning: 'Ensure proper ventilation when taking measurements near the unit.',
        inputType: 'measurement',
        measurements: [
          { label: 'Supply Air Temp', key: 'supplyTemp', unit: '°F' },
          { label: 'Return Air Temp', key: 'returnTemp', unit: '°F' },
        ],
      },
      {
        id: 'refrigerant-pressures',
        title: 'Refrigerant Pressure Check',
        category: 'Measurements',
        question: 'Record suction and discharge pressures',
        explanation:
          'Refrigerant pressures indicate the health of the refrigeration cycle. Low pressures suggest a refrigerant leak, while high pressures may indicate airflow or condenser issues.',
        safetyWarning:
          'Only qualified technicians should connect gauges to the refrigerant system. Improper handling can cause injury or environmental damage.',
        inputType: 'measurement',
        measurements: [
          { label: 'Suction Pressure', key: 'suctionPressure', unit: 'PSI' },
          { label: 'Discharge Pressure', key: 'dischargePressure', unit: 'PSI' },
        ],
      },
      {
        id: 'superheat-subcooling',
        title: 'Superheat & Subcooling',
        category: 'Measurements',
        question: 'Calculate or measure superheat and subcooling values',
        explanation:
          'Superheat and subcooling are critical indicators of proper refrigerant charge. Superheat should typically be 8-12°F, and subcooling 10-15°F for most systems.',
        inputType: 'measurement',
        measurements: [
          { label: 'Superheat', key: 'superheat', unit: '°F' },
          { label: 'Subcooling', key: 'subcooling', unit: '°F' },
        ],
      },
      {
        id: 'compressor-check',
        title: 'Compressor Operation',
        category: 'Deeper Inspection',
        question: 'Is the compressor running and drawing proper amperage?',
        explanation:
          'The compressor is the heart of the system. It should run smoothly without excessive noise or vibration. Check amp draw against the nameplate rating.',
        inputType: 'yesNo',
      },
      {
        id: 'condenser-coil',
        title: 'Condenser Coil Condition',
        category: 'Deeper Inspection',
        question: 'Is the outdoor condenser coil clean and free of debris?',
        explanation:
          'A dirty condenser coil reduces heat rejection, causing high head pressure and reduced cooling capacity. Clean coils are essential for efficiency.',
        inputType: 'choice',
        options: ['Clean', 'Slightly dirty', 'Very dirty', 'Blocked'],
      },
      {
        id: 'leak-check',
        title: 'Refrigerant Leak Detection',
        category: 'Deeper Inspection',
        question: 'Are there any signs of refrigerant leaks (oil stains, bubbles, electronic leak detector)?',
        explanation:
          'Refrigerant leaks cause low charge and poor cooling. Common leak points include service valves, coil connections, and brazed joints.',
        safetyWarning:
          'Refrigerant must be properly recovered before repairs. Never vent refrigerant to atmosphere - it is illegal and harmful to the environment.',
        inputType: 'yesNo',
      },
    ],
  },
  'no-heating': {
    name: 'No Heating',
    description: 'Diagnostic flow for heating systems not providing adequate heat',
    steps: [
      {
        id: 'thermostat-heat',
        title: 'Thermostat Mode',
        category: 'Basic Checks',
        question: 'Is the thermostat set to HEAT mode and above room temperature?',
        explanation: 'Verify the thermostat is calling for heat and set to the correct mode.',
        inputType: 'yesNo',
      },
      {
        id: 'power-heat',
        title: 'Power Supply',
        category: 'Basic Checks',
        question: 'Is the heating unit receiving power?',
        explanation: 'Check circuit breakers and disconnect switches for the heating system.',
        inputType: 'yesNo',
      },
      {
        id: 'filter-heat',
        title: 'Air Filter',
        category: 'Basic Checks',
        question: 'Is the air filter clean?',
        explanation: 'A dirty filter can cause the system to overheat and shut down on the limit switch.',
        inputType: 'choice',
        options: ['Clean', 'Slightly dirty', 'Very dirty'],
      },
      {
        id: 'ignition-check',
        title: 'Ignition System',
        category: 'Deeper Inspection',
        question: 'Is the ignition system functioning (pilot light or electronic ignition)?',
        explanation: 'For gas furnaces, verify the ignition source is working properly.',
        safetyWarning: 'If you smell gas, evacuate immediately and call the gas company. Do not attempt repairs.',
        inputType: 'yesNo',
      },
      {
        id: 'flame-sensor',
        title: 'Flame Sensor',
        category: 'Deeper Inspection',
        question: 'Is the flame sensor clean and properly positioned?',
        explanation: 'A dirty flame sensor can cause the burner to shut off after a few seconds.',
        inputType: 'choice',
        options: ['Clean', 'Dirty', 'Not checked'],
      },
    ],
  },
  'short-cycling': {
    name: 'Short Cycling',
    description: 'System turning on and off too frequently',
    steps: [
      {
        id: 'cycle-duration',
        title: 'Cycle Duration',
        category: 'Basic Checks',
        question: 'How long does the system run before shutting off?',
        explanation: 'Normal cycles should be 10-15 minutes. Shorter cycles indicate a problem.',
        inputType: 'number',
        numberLabel: 'Cycle duration',
        numberUnit: 'minutes',
      },
      {
        id: 'thermostat-location',
        title: 'Thermostat Location',
        category: 'Basic Checks',
        question: 'Is the thermostat in a good location (away from drafts, direct sunlight, heat sources)?',
        explanation: 'Poor thermostat placement can cause false readings and short cycling.',
        inputType: 'yesNo',
      },
      {
        id: 'filter-cycling',
        title: 'Air Filter',
        category: 'Basic Checks',
        question: 'Is the air filter clean?',
        explanation: 'A dirty filter can cause the system to overheat and cycle on the limit switch.',
        inputType: 'choice',
        options: ['Clean', 'Dirty', 'Very dirty'],
      },
      {
        id: 'refrigerant-cycling',
        title: 'Refrigerant Charge',
        category: 'Measurements',
        question: 'Are refrigerant pressures within normal range?',
        explanation: 'Low refrigerant can cause short cycling due to low pressure cutout.',
        inputType: 'yesNo',
      },
    ],
  },
  'no-power': {
    name: 'Unit Not Turning On',
    description: 'System has no power or will not start',
    steps: [
      {
        id: 'breaker-check',
        title: 'Circuit Breaker',
        category: 'Basic Checks',
        question: 'Is the circuit breaker in the ON position?',
        explanation: 'A tripped breaker is the most common cause of no power. Check both indoor and outdoor breakers.',
        inputType: 'yesNo',
      },
      {
        id: 'disconnect-check',
        title: 'Disconnect Switch',
        category: 'Basic Checks',
        question: 'Is the outdoor disconnect switch in the ON position?',
        explanation: 'The disconnect switch may have been turned off for maintenance or accidentally.',
        inputType: 'yesNo',
      },
      {
        id: 'fuse-check',
        title: 'Fuse Inspection',
        category: 'Basic Checks',
        question: 'Are the fuses in the disconnect box intact?',
        explanation: 'Blown fuses indicate an electrical problem that must be diagnosed before replacement.',
        safetyWarning: 'Turn off power before inspecting fuses. Use proper safety equipment.',
        inputType: 'choice',
        options: ['Both good', 'One blown', 'Both blown', 'Not checked'],
      },
      {
        id: 'thermostat-power',
        title: 'Thermostat Power',
        category: 'Deeper Inspection',
        question: 'Is the thermostat display lit and functioning?',
        explanation: 'No display may indicate a blown transformer or wiring issue.',
        inputType: 'yesNo',
      },
      {
        id: 'contactor-check',
        title: 'Contactor Operation',
        category: 'Deeper Inspection',
        question: 'Does the contactor pull in when the thermostat calls for cooling?',
        explanation: 'A failed contactor or coil will prevent the compressor and fan from running.',
        safetyWarning: 'Do not touch electrical components while power is on. Use insulated tools.',
        inputType: 'yesNo',
      },
    ],
  },
  'frozen-coil': {
    name: 'Frozen Coil',
    description: 'Evaporator coil is frozen with ice buildup',
    steps: [
      {
        id: 'ice-extent',
        title: 'Ice Buildup Assessment',
        category: 'Basic Checks',
        question: 'How much ice is on the coil?',
        explanation: 'The extent of ice buildup helps determine thaw time and severity of the underlying issue.',
        inputType: 'choice',
        options: ['Light frost', 'Partial ice', 'Completely frozen', 'Ice on refrigerant lines'],
      },
      {
        id: 'system-off',
        title: 'System Shutdown',
        category: 'Basic Checks',
        question: 'Has the system been turned off to allow thawing?',
        explanation: 'The coil must thaw completely before diagnosis can continue. This may take 2-8 hours.',
        safetyWarning: 'Place towels or a pan under the unit to catch water from melting ice.',
        inputType: 'yesNo',
      },
      {
        id: 'filter-frozen',
        title: 'Air Filter Condition',
        category: 'Basic Checks',
        question: 'What is the condition of the air filter?',
        explanation: 'A dirty filter is the most common cause of frozen coils due to restricted airflow.',
        inputType: 'choice',
        options: ['Clean', 'Slightly dirty', 'Very dirty', 'Completely blocked'],
      },
      {
        id: 'blower-speed',
        title: 'Blower Motor Operation',
        category: 'Deeper Inspection',
        question: 'Is the blower motor running at proper speed?',
        explanation: 'A slow or failing blower motor reduces airflow, causing the coil to freeze.',
        inputType: 'choice',
        options: ['Normal speed', 'Running slow', 'Not running', 'Intermittent'],
      },
      {
        id: 'refrigerant-frozen',
        title: 'Refrigerant Charge',
        category: 'Measurements',
        question: 'After thawing, are refrigerant pressures normal?',
        explanation: 'Low refrigerant charge causes low evaporator pressure and temperature, leading to freezing.',
        inputType: 'yesNo',
      },
    ],
  },
  'poor-airflow': {
    name: 'Poor Airflow',
    description: 'Weak or insufficient air coming from vents',
    steps: [
      {
        id: 'airflow-strength',
        title: 'Airflow Assessment',
        category: 'Basic Checks',
        question: 'How would you describe the airflow from the vents?',
        explanation: 'Quantifying the airflow helps determine the severity of the restriction.',
        inputType: 'choice',
        options: ['Slightly weak', 'Moderately weak', 'Very weak', 'Almost none'],
      },
      {
        id: 'filter-airflow',
        title: 'Air Filter',
        category: 'Basic Checks',
        question: 'What is the condition of the air filter?',
        explanation: 'A dirty filter is the most common cause of poor airflow.',
        inputType: 'choice',
        options: ['Clean', 'Slightly dirty', 'Very dirty', 'Completely blocked'],
      },
      {
        id: 'vents-open',
        title: 'Supply Vents',
        category: 'Basic Checks',
        question: 'Are all supply vents open and unobstructed?',
        explanation: 'Closed or blocked vents reduce airflow and can cause system problems.',
        inputType: 'yesNo',
      },
      {
        id: 'return-vents',
        title: 'Return Air Vents',
        category: 'Basic Checks',
        question: 'Are return air vents clear and unobstructed?',
        explanation: 'Blocked return vents starve the system of air, reducing overall airflow.',
        inputType: 'yesNo',
      },
      {
        id: 'blower-airflow',
        title: 'Blower Motor',
        category: 'Deeper Inspection',
        question: 'Is the blower motor running properly?',
        explanation: 'A failing blower motor or capacitor can cause reduced airflow.',
        inputType: 'yesNo',
      },
      {
        id: 'ductwork-check',
        title: 'Ductwork Inspection',
        category: 'Deeper Inspection',
        question: 'Are there any visible duct leaks or disconnections?',
        explanation: 'Leaky or disconnected ducts waste conditioned air and reduce airflow to living spaces.',
        inputType: 'choice',
        options: ['No leaks visible', 'Minor leaks', 'Major leaks', 'Disconnected ducts'],
      },
    ],
  },
  'high-humidity': {
    name: 'High Humidity',
    description: 'Indoor humidity levels are too high',
    steps: [
      {
        id: 'humidity-level',
        title: 'Humidity Measurement',
        category: 'Basic Checks',
        question: 'What is the indoor relative humidity?',
        explanation: 'Indoor humidity should typically be 30-50%. Higher levels indicate a dehumidification problem.',
        inputType: 'number',
        numberLabel: 'Relative humidity',
        numberUnit: '%',
      },
      {
        id: 'runtime-humidity',
        title: 'System Runtime',
        category: 'Basic Checks',
        question: 'How long does the system run per cycle?',
        explanation: 'Short cycles (under 10 minutes) do not allow adequate dehumidification.',
        inputType: 'choice',
        options: ['Less than 5 min', '5-10 min', '10-15 min', 'Over 15 min'],
      },
      {
        id: 'coil-humidity',
        title: 'Evaporator Coil',
        category: 'Deeper Inspection',
        question: 'Is the evaporator coil clean?',
        explanation: 'A dirty coil reduces dehumidification capacity.',
        inputType: 'choice',
        options: ['Clean', 'Slightly dirty', 'Very dirty'],
      },
      {
        id: 'drain-humidity',
        title: 'Condensate Drain',
        category: 'Deeper Inspection',
        question: 'Is the condensate drain line clear and draining properly?',
        explanation: 'A clogged drain can cause water backup and humidity problems.',
        inputType: 'yesNo',
      },
    ],
  },
  'breaker-tripping': {
    name: 'Breaker Tripping',
    description: 'Circuit breaker trips when system runs',
    steps: [
      {
        id: 'trip-timing',
        title: 'Trip Timing',
        category: 'Basic Checks',
        question: 'When does the breaker trip?',
        explanation: 'The timing of the trip helps identify the failing component.',
        inputType: 'choice',
        options: ['Immediately on startup', 'After a few seconds', 'After several minutes', 'Randomly'],
      },
      {
        id: 'breaker-size',
        title: 'Breaker Rating',
        category: 'Basic Checks',
        question: 'Is the breaker properly sized for the unit?',
        explanation: 'Check the unit nameplate and compare to breaker amperage rating.',
        safetyWarning: 'Never install a larger breaker without verifying wire gauge is adequate.',
        inputType: 'yesNo',
      },
      {
        id: 'compressor-amps',
        title: 'Compressor Amperage',
        category: 'Measurements',
        question: 'What is the compressor amp draw?',
        explanation: 'High amp draw indicates a failing compressor or electrical problem.',
        safetyWarning: 'Use a clamp meter to measure amps. Do not touch live wires.',
        inputType: 'number',
        numberLabel: 'Amp draw',
        numberUnit: 'A',
      },
      {
        id: 'capacitor-breaker',
        title: 'Capacitor Condition',
        category: 'Deeper Inspection',
        question: 'Is the compressor capacitor in good condition?',
        explanation: 'A weak or failed capacitor causes high amp draw and can trip the breaker.',
        inputType: 'choice',
        options: ['Good', 'Weak', 'Failed', 'Not tested'],
      },
    ],
  },
  'unusual-noises': {
    name: 'Unusual Noises',
    description: 'System making abnormal sounds',
    steps: [
      {
        id: 'noise-type',
        title: 'Noise Description',
        category: 'Basic Checks',
        question: 'What type of noise is the system making?',
        explanation: 'Different noises indicate different problems.',
        inputType: 'choice',
        options: [
          'Squealing/Screeching',
          'Grinding',
          'Rattling',
          'Banging/Clanking',
          'Hissing',
          'Buzzing',
          'Clicking',
        ],
      },
      {
        id: 'noise-location',
        title: 'Noise Location',
        category: 'Basic Checks',
        question: 'Where is the noise coming from?',
        explanation: 'Identifying the location helps narrow down the source.',
        inputType: 'choice',
        options: ['Indoor unit', 'Outdoor unit', 'Ductwork', 'Unsure'],
      },
      {
        id: 'noise-timing',
        title: 'Noise Timing',
        category: 'Basic Checks',
        question: 'When does the noise occur?',
        explanation: 'The timing of the noise provides clues about the cause.',
        inputType: 'choice',
        options: ['On startup', 'While running', 'On shutdown', 'Constantly'],
      },
      {
        id: 'fan-blades',
        title: 'Fan Blade Inspection',
        category: 'Deeper Inspection',
        question: 'Are the fan blades clean and undamaged?',
        explanation: 'Damaged or dirty fan blades can cause rattling or grinding noises.',
        safetyWarning: 'Turn off power before inspecting fan blades.',
        inputType: 'choice',
        options: ['Clean and straight', 'Dirty', 'Bent/damaged', 'Debris present'],
      },
      {
        id: 'mounting-hardware',
        title: 'Mounting Hardware',
        category: 'Deeper Inspection',
        question: 'Are all mounting bolts and screws tight?',
        explanation: 'Loose hardware can cause rattling and vibration noises.',
        inputType: 'yesNo',
      },
    ],
  },
};
