import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { AlertCircle, CheckCircle2, Wrench, ArrowRight, ArrowLeft, XCircle, AlertTriangle, Download, HelpCircle, Zap, History, Loader2, BarChart3, WifiOff, Bot, TrendingUp, BookOpen, Calculator, Lightbulb, MessageCircle, ShieldAlert } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useGetDiagnosticSessions, useSaveDiagnosticSession } from '@/hooks/useQueries';
import { useInternetIdentity } from '@/hooks/useInternetIdentity';
import { DiagnosticMode, SessionStatus, ConfidenceLevel } from '@/types/local';
import { toast } from 'sonner';

interface TroubleshooterTabProps {
  isGuest: boolean;
}

type SessionPhase = 'mode-selection' | 'diagnostic-flow' | 'summary' | 'history' | 'analytics';

interface DiagnosticStep {
  id: string;
  title: string;
  category?: string;
  question: string;
  explanation?: string;
  safetyWarning?: string;
  beginnerTip?: string;
  expertNote?: string;
  inputType: 'yesNo' | 'choice' | 'measurement' | 'number';
  options?: string[];
  measurements?: Array<{ label: string; key: string; unit: string; min?: number; max?: number; optimal?: { min: number; max: number } }>;
  numberLabel?: string;
  numberUnit?: string;
  autoCalculate?: boolean;
  relatedDiagram?: string;
  relatedCalculator?: string;
  relatedLesson?: string;
}

interface DiagnosticAnswer {
  value: string;
  measurements?: Record<string, string>;
}

interface FaultProbability {
  cause: string;
  probability: number;
  severity: 'low' | 'medium' | 'high';
  relatedMeasurements: string[];
  studyModuleLink?: string;
  calculatorLink?: string;
  explanation?: string;
}

interface AIRecommendation {
  type: 'safety' | 'caution' | 'info' | 'learning' | 'followup';
  priority: 'critical' | 'high' | 'medium' | 'low';
  message: string;
  actionLink?: { label: string; path: string };
  isFollowUpQuestion?: boolean;
  expectedAnswerType?: 'yesNo' | 'text' | 'number';
}

interface DiagnosticSession {
  id: bigint;
  mode: DiagnosticMode;
  symptom: string;
  currentStepIndex: number;
  answers: Record<string, DiagnosticAnswer>;
  measurements: Record<string, string>;
  calculations: Record<string, { value: number; status: 'good' | 'caution' | 'critical' }>;
  confidence: number;
  startTime: number;
  status: SessionStatus;
  voiceGuidanceEnabled: boolean;
  aiAssistanceEnabled: boolean;
  faultProbabilities: FaultProbability[];
  aiRecommendations: AIRecommendation[];
  followUpAnswers: Record<string, string>;
  isOffline?: boolean;
}

interface DiagnosticFlowDefinition {
  name: string;
  description: string;
  steps: DiagnosticStep[];
}

const coolingDiagnosticFlow: DiagnosticFlowDefinition = {
  name: 'Cooling System Troubleshooting',
  description: 'Complete step-by-step cooling system diagnostic with adaptive AI assistance',
  steps: [
    {
      id: 'thermostat-verification',
      title: 'Thermostat Verification',
      category: 'Basic Checks',
      question: 'Is the thermostat set to COOL mode and set temperature is below room temperature?',
      explanation: 'The thermostat controls when the system runs. If not set correctly, the system will not cool.',
      beginnerTip: 'Check that the display shows "COOL" mode and the set temperature is at least 3-5°F below the current room temperature. This is the first and easiest check to perform.',
      expertNote: 'Verify thermostat is receiving 24VAC and properly wired. Check for loose connections.',
      inputType: 'yesNo',
      relatedLesson: '/study/core-lessons/electrical',
    },
    {
      id: 'power-check',
      title: 'Power Check',
      category: 'Basic Checks',
      question: 'Is the outdoor unit receiving power and running?',
      explanation: 'The outdoor unit (condenser) must run for the system to cool. Check if the fan is spinning and the compressor is humming.',
      beginnerTip: 'Go outside and look at the outdoor unit. You should see the fan spinning and hear the compressor running. If not, check the circuit breaker and disconnect switch.',
      safetyWarning: 'ELECTRICAL HAZARD: Do not touch electrical components. Keep hands away from moving fan blades. Turn off power before any inspection.',
      expertNote: 'Check voltage at contactor, verify proper phase voltage, inspect for loose connections.',
      inputType: 'yesNo',
      relatedLesson: '/study/core-lessons/electrical',
    },
    {
      id: 'air-filter',
      title: 'Air Filter Inspection',
      category: 'Basic Checks',
      question: 'What is the condition of the air filter?',
      explanation: 'A dirty filter restricts airflow, reducing cooling capacity and potentially causing the evaporator coil to freeze.',
      beginnerTip: 'Remove the filter and hold it up to light. If you cannot see light through it, it needs replacement. This is one of the most common causes of cooling problems.',
      expertNote: 'Check filter MERV rating and ensure proper fit. Inspect for bypass airflow around filter.',
      inputType: 'choice',
      options: ['Clean', 'Slightly dirty', 'Very dirty', 'Completely blocked'],
      relatedLesson: '/study/core-lessons/airflow',
    },
    {
      id: 'airflow-assessment',
      title: 'Airflow Assessment',
      category: 'Basic Checks',
      question: 'How would you describe the airflow from the supply vents?',
      explanation: 'Proper airflow is essential for cooling. Weak airflow indicates blower motor, ductwork, or filter issues.',
      beginnerTip: 'Hold your hand near a supply vent. You should feel strong, steady airflow. Weak airflow means something is restricting air movement.',
      expertNote: 'Measure static pressure and CFM if possible. Compare to manufacturer specifications.',
      inputType: 'choice',
      options: ['Strong', 'Moderate', 'Weak', 'Very weak or none'],
      relatedCalculator: '/calculators',
      relatedLesson: '/study/core-lessons/airflow',
    },
    {
      id: 'temperature-measurements',
      title: 'Temperature Measurements',
      category: 'Measurements',
      question: 'Record supply and return air temperatures',
      explanation: 'The temperature difference (Delta T) between supply and return air should typically be 15-20°F for proper cooling.',
      beginnerTip: 'Use a digital thermometer. Measure at the supply vent (cold air) and return grille (warm air). The difference tells us how well the system is cooling.',
      expertNote: 'Take measurements at steady-state operation (after 15 minutes of runtime). Account for outdoor ambient conditions.',
      inputType: 'measurement',
      measurements: [
        { label: 'Return Air Temp', key: 'returnTemp', unit: '°F', min: 60, max: 90, optimal: { min: 70, max: 80 } },
        { label: 'Supply Air Temp', key: 'supplyTemp', unit: '°F', min: 40, max: 70, optimal: { min: 50, max: 60 } },
      ],
      autoCalculate: true,
      relatedCalculator: '/calculators',
      relatedLesson: '/study/core-lessons/thermodynamics',
    },
    {
      id: 'refrigerant-pressure',
      title: 'Refrigerant Pressure Check',
      category: 'Measurements',
      question: 'Record suction and discharge pressures',
      explanation: 'Refrigerant pressures indicate the health of the refrigeration cycle. These measurements are critical for diagnosing charge and system issues.',
      safetyWarning: 'REFRIGERANT SAFETY: Only qualified technicians should connect gauges to the refrigerant system. Improper handling can cause injury or environmental damage.',
      beginnerTip: 'Connect gauges to service ports. Blue gauge shows suction (low) pressure, red gauge shows discharge (high) pressure. Compare to pressure-temperature charts for your refrigerant type.',
      expertNote: 'Compare pressures to manufacturer specifications for the refrigerant type and ambient conditions. Check for proper subcooling and superheat.',
      inputType: 'measurement',
      measurements: [
        { label: 'Suction Pressure', key: 'suctionPressure', unit: 'PSI', min: 0, max: 150, optimal: { min: 60, max: 80 } },
        { label: 'Discharge Pressure', key: 'dischargePressure', unit: 'PSI', min: 0, max: 500, optimal: { min: 200, max: 300 } },
      ],
      relatedLesson: '/study/core-lessons/refrigeration',
      relatedCalculator: '/calculators',
    },
    {
      id: 'superheat-subcooling',
      title: 'Superheat & Subcooling',
      category: 'Measurements',
      question: 'Enter superheat and subcooling values',
      explanation: 'Superheat and subcooling are critical indicators of proper refrigerant charge. These measurements tell us if the system has the right amount of refrigerant.',
      beginnerTip: 'Superheat should typically be 8-12°F, subcooling 10-15°F for most systems. Higher superheat means low charge, lower superheat means overcharge.',
      expertNote: 'Adjust target values based on system type (TXV vs fixed orifice) and manufacturer specs. Consider outdoor ambient temperature.',
      inputType: 'measurement',
      measurements: [
        { label: 'Superheat', key: 'superheat', unit: '°F', min: 0, max: 50, optimal: { min: 8, max: 12 } },
        { label: 'Subcooling', key: 'subcooling', unit: '°F', min: 0, max: 30, optimal: { min: 10, max: 15 } },
      ],
      relatedCalculator: '/calculators',
      relatedLesson: '/study/epa-608/core',
    },
    {
      id: 'compressor-check',
      title: 'Compressor Operation Check',
      category: 'Measurements',
      question: 'Record compressor amp draw and nameplate amperage',
      explanation: 'Compressor amp draw should be within 10% of nameplate rating. High or low amp draw indicates electrical or mechanical problems.',
      safetyWarning: 'ELECTRICAL SAFETY: Use a clamp meter. Do not touch live electrical components. Ensure proper insulation on meter leads.',
      beginnerTip: 'Clamp the meter around one wire going to the compressor. Compare the reading to the nameplate on the outdoor unit. They should be close.',
      expertNote: 'Check RLA (Rated Load Amps) and LRA (Locked Rotor Amps). Test capacitor if amp draw is high.',
      inputType: 'measurement',
      measurements: [
        { label: 'Measured Amp Draw', key: 'ampDraw', unit: 'A', min: 0, max: 50 },
        { label: 'Nameplate Amp', key: 'nameplateAmp', unit: 'A', min: 0, max: 50 },
      ],
      autoCalculate: true,
      relatedLesson: '/study/core-lessons/electrical',
    },
    {
      id: 'condenser-coil',
      title: 'Condenser Coil Condition',
      category: 'Deeper Inspection',
      question: 'What is the condition of the outdoor condenser coil?',
      explanation: 'A dirty condenser coil reduces heat rejection, causing high head pressure and reduced cooling capacity.',
      beginnerTip: 'Look at the outdoor coil fins. They should be clean and straight, not bent or clogged with debris. A dirty coil makes the system work harder and less efficiently.',
      expertNote: 'Inspect both sides of coil. Check for fin damage, debris between fins, and proper clearance around unit.',
      inputType: 'choice',
      options: ['Clean', 'Slightly dirty', 'Very dirty', 'Blocked with debris'],
      relatedLesson: '/study/core-lessons/refrigeration',
    },
    {
      id: 'leak-detection',
      title: 'Refrigerant Leak Detection',
      category: 'Deeper Inspection',
      question: 'Are there any signs of refrigerant leaks?',
      explanation: 'Look for oil stains, bubbles at connections, or use an electronic leak detector. Leaks must be repaired before adding refrigerant.',
      safetyWarning: 'EPA REGULATION: Never vent refrigerant to atmosphere - it is illegal and harmful to the environment. Proper recovery is required.',
      beginnerTip: 'Common leak points include service valves, coil connections, and brazed joints. Oil stains often indicate refrigerant leaks.',
      expertNote: 'Use electronic leak detector with proper sensitivity. Check all brazed joints, flare connections, and Schrader valves.',
      inputType: 'yesNo',
      relatedLesson: '/study/epa-608/core',
    },
  ],
};

// Enhanced AI Analysis Engine with Mode-Adaptive Behavior
class AdaptiveAIEngine {
  static analyzeStep(
    stepId: string,
    answer: DiagnosticAnswer,
    allAnswers: Record<string, DiagnosticAnswer>,
    measurements: Record<string, string>,
    mode: DiagnosticMode,
    followUpAnswers: Record<string, string>
  ): { faults: FaultProbability[]; recommendations: AIRecommendation[] } {
    const faults: FaultProbability[] = [];
    const recommendations: AIRecommendation[] = [];
    const isBeginnerMode = mode === DiagnosticMode.beginner;

    // Analyze based on step with mode-adaptive responses
    switch (stepId) {
      case 'thermostat-verification':
        if (answer.value === 'no') {
          faults.push({
            cause: 'Thermostat configuration issue',
            probability: 85,
            severity: 'high',
            relatedMeasurements: ['thermostat'],
            studyModuleLink: '/study/core-lessons/electrical',
            explanation: isBeginnerMode 
              ? 'The thermostat is not set correctly. This is the most common and easiest problem to fix.'
              : 'Thermostat mode or setpoint misconfiguration detected.',
          });
          
          recommendations.push({
            type: 'caution',
            priority: 'high',
            message: isBeginnerMode
              ? 'Thermostat issue detected. Make sure it\'s set to COOL mode and the temperature is set at least 3-5°F below room temperature. Check the batteries if it\'s battery-powered.'
              : 'Verify thermostat mode, setpoint, and 24VAC power supply.',
            actionLink: { label: 'Learn about thermostats', path: '/study/core-lessons/electrical' },
          });

          // AI Follow-up question
          recommendations.push({
            type: 'followup',
            priority: 'medium',
            message: 'What type of thermostat system are you working with?',
            isFollowUpQuestion: true,
            expectedAnswerType: 'text',
          });
        } else {
          recommendations.push({
            type: 'info',
            priority: 'low',
            message: isBeginnerMode
              ? 'Good! The thermostat is set correctly. Let\'s continue checking other components.'
              : 'Thermostat configuration verified.',
          });
        }
        break;

      case 'power-check':
        if (answer.value === 'no') {
          faults.push({
            cause: 'Electrical power issue',
            probability: 90,
            severity: 'high',
            relatedMeasurements: ['power', 'voltage'],
            studyModuleLink: '/study/core-lessons/electrical',
            explanation: isBeginnerMode
              ? 'The outdoor unit is not getting power or not running. This could be a tripped breaker, blown fuse, or bad contactor.'
              : 'Power supply failure or contactor malfunction.',
          });
          
          recommendations.push({
            type: 'safety',
            priority: 'critical',
            message: isBeginnerMode
              ? 'SAFETY ALERT: Check circuit breakers and disconnect switches first. If they\'re on, DO NOT proceed with electrical work unless you are qualified. Electrical work can be dangerous.'
              : 'SAFETY: Verify breakers, disconnect, and fuses. Check voltage at contactor. Use proper PPE.',
            actionLink: { label: 'Electrical safety guide', path: '/study/core-lessons/electrical' },
          });

          // AI Follow-up questions
          recommendations.push({
            type: 'followup',
            priority: 'high',
            message: 'Are the circuit breakers in the ON position?',
            isFollowUpQuestion: true,
            expectedAnswerType: 'yesNo',
          });
        }
        break;

      case 'air-filter':
        if (answer.value === 'Very dirty' || answer.value === 'Completely blocked') {
          faults.push({
            cause: 'Severe airflow restriction due to dirty filter',
            probability: 91,
            severity: 'high',
            relatedMeasurements: ['airflow', 'deltaT'],
            explanation: isBeginnerMode
              ? 'A very dirty or blocked filter is choking your system. This is one of the most common problems and the easiest to fix.'
              : 'Critical airflow restriction detected.',
          });
          
          recommendations.push({
            type: 'caution',
            priority: 'high',
            message: isBeginnerMode
              ? 'Replace the air filter immediately! A blocked filter can cause the evaporator coil to freeze and damage the system. This is likely your main problem.'
              : 'Replace filter immediately. Severe restriction may have caused coil freezing or system damage.',
            actionLink: { label: 'Airflow principles', path: '/study/core-lessons/airflow' },
          });

          // AI Follow-up
          recommendations.push({
            type: 'followup',
            priority: 'medium',
            message: 'How long has this filter been in service?',
            isFollowUpQuestion: true,
            expectedAnswerType: 'text',
          });
        } else if (answer.value === 'Slightly dirty') {
          recommendations.push({
            type: 'info',
            priority: 'medium',
            message: isBeginnerMode
              ? 'The filter is slightly dirty. Consider replacing it soon to maintain good airflow and efficiency.'
              : 'Filter approaching replacement interval. Monitor airflow.',
          });
        } else {
          recommendations.push({
            type: 'info',
            priority: 'low',
            message: isBeginnerMode
              ? 'Good! The filter is clean. The problem is likely elsewhere.'
              : 'Filter condition acceptable.',
          });
        }
        break;

      case 'airflow-assessment':
        if (answer.value === 'Weak' || answer.value === 'Very weak or none') {
          faults.push({
            cause: 'Airflow restriction or blower motor issue',
            probability: 85,
            severity: 'high',
            relatedMeasurements: ['airflow', 'deltaT', 'staticPressure'],
            calculatorLink: '/calculators',
            explanation: isBeginnerMode
              ? 'Weak airflow means something is blocking air movement or the blower motor is not working properly.'
              : 'Significant airflow deficiency detected.',
          });
          
          recommendations.push({
            type: 'caution',
            priority: 'high',
            message: isBeginnerMode
              ? 'Weak airflow detected. Check the filter again, make sure all vents are open, and inspect the blower motor. Poor airflow causes many problems.'
              : 'Investigate filter, ductwork restrictions, blower motor operation, and static pressure.',
            actionLink: { label: 'Airflow calculator', path: '/calculators' },
          });

          // AI Follow-up
          recommendations.push({
            type: 'followup',
            priority: 'high',
            message: 'Are you measuring static pressure or just assessing visually/audibly?',
            isFollowUpQuestion: true,
            expectedAnswerType: 'text',
          });
        }
        break;

      case 'temperature-measurements':
        if (answer.measurements) {
          const returnTemp = parseFloat(answer.measurements.returnTemp || '0');
          const supplyTemp = parseFloat(answer.measurements.supplyTemp || '0');
          const deltaT = returnTemp - supplyTemp;

          // Abnormal reading detection
          if (returnTemp < 60 || returnTemp > 90) {
            recommendations.push({
              type: 'safety',
              priority: 'critical',
              message: `ABNORMAL READING: Return air temperature (${returnTemp}°F) is outside normal range (60-90°F). Verify measurement accuracy.`,
            });
          }

          if (supplyTemp < 40 || supplyTemp > 70) {
            recommendations.push({
              type: 'safety',
              priority: 'critical',
              message: `ABNORMAL READING: Supply air temperature (${supplyTemp}°F) is outside normal range (40-70°F). Check for measurement errors or severe system issues.`,
            });
          }

          if (deltaT < 12) {
            faults.push({
              cause: 'Low refrigerant charge or airflow issue',
              probability: 78,
              severity: 'high',
              relatedMeasurements: ['deltaT', 'superheat', 'subcooling'],
              calculatorLink: '/calculators',
              studyModuleLink: '/study/core-lessons/refrigeration',
              explanation: isBeginnerMode
                ? 'The temperature drop is too small. This usually means low refrigerant or poor airflow.'
                : 'Insufficient temperature differential indicates charge or airflow deficiency.',
            });
            
            recommendations.push({
              type: 'caution',
              priority: 'high',
              message: isBeginnerMode
                ? `Delta T is ${deltaT.toFixed(1)}°F (too low). Normal is 15-20°F. This suggests low refrigerant or airflow problems. We need to check refrigerant pressures next.`
                : `Delta T: ${deltaT.toFixed(1)}°F (low). Verify refrigerant charge and airflow. Target: 15-20°F.`,
              actionLink: { label: 'Superheat/Subcooling calculator', path: '/calculators' },
            });

            // AI Follow-up
            recommendations.push({
              type: 'followup',
              priority: 'high',
              message: 'Are these measurements taken at steady-state operation (after 15+ minutes of runtime)?',
              isFollowUpQuestion: true,
              expectedAnswerType: 'yesNo',
            });
          } else if (deltaT > 24) {
            faults.push({
              cause: 'Excessive airflow restriction',
              probability: 82,
              severity: 'high',
              relatedMeasurements: ['deltaT', 'airflow'],
              explanation: isBeginnerMode
                ? 'The temperature drop is too large. This means severe airflow restriction - the air is staying in the coil too long.'
                : 'Excessive temperature differential indicates critical airflow restriction.',
            });
            
            recommendations.push({
              type: 'caution',
              priority: 'high',
              message: isBeginnerMode
                ? `Delta T is ${deltaT.toFixed(1)}°F (too high). This indicates severe airflow restriction. Check filter and blower immediately!`
                : `Delta T: ${deltaT.toFixed(1)}°F (high). Critical airflow restriction. Inspect filter, blower, and ductwork.`,
            });
          } else {
            recommendations.push({
              type: 'info',
              priority: 'low',
              message: isBeginnerMode
                ? `Delta T is ${deltaT.toFixed(1)}°F - within normal range (15-20°F). Temperature split looks good!`
                : `Delta T: ${deltaT.toFixed(1)}°F - acceptable range.`,
            });
          }

          // AI Follow-up for outdoor conditions
          recommendations.push({
            type: 'followup',
            priority: 'medium',
            message: 'What is the outdoor ambient temperature?',
            isFollowUpQuestion: true,
            expectedAnswerType: 'number',
          });
        }
        break;

      case 'refrigerant-pressure':
        if (answer.measurements) {
          const suctionPressure = parseFloat(answer.measurements.suctionPressure || '0');
          const dischargePressure = parseFloat(answer.measurements.dischargePressure || '0');

          // Abnormal reading detection
          if (suctionPressure < 30 || suctionPressure > 120) {
            recommendations.push({
              type: 'safety',
              priority: 'critical',
              message: `ABNORMAL SUCTION PRESSURE: ${suctionPressure} PSI is outside typical range (30-120 PSI). Verify gauge accuracy and refrigerant type.`,
            });
          }

          if (dischargePressure < 150 || dischargePressure > 450) {
            recommendations.push({
              type: 'safety',
              priority: 'critical',
              message: `ABNORMAL DISCHARGE PRESSURE: ${dischargePressure} PSI is outside typical range (150-450 PSI). Check for system issues or measurement errors.`,
            });
          }

          // AI Follow-up questions
          recommendations.push({
            type: 'followup',
            priority: 'high',
            message: 'What refrigerant type is this system using (R-410A, R-22, R-32, etc.)?',
            isFollowUpQuestion: true,
            expectedAnswerType: 'text',
          });

          recommendations.push({
            type: 'followup',
            priority: 'medium',
            message: 'Are these pressures at steady-state operation?',
            isFollowUpQuestion: true,
            expectedAnswerType: 'yesNo',
          });
        }
        break;

      case 'superheat-subcooling':
        if (answer.measurements) {
          const superheat = parseFloat(answer.measurements.superheat || '0');
          const subcooling = parseFloat(answer.measurements.subcooling || '0');

          // Abnormal reading detection
          if (superheat < 0 || superheat > 40) {
            recommendations.push({
              type: 'safety',
              priority: 'critical',
              message: `ABNORMAL SUPERHEAT: ${superheat}°F is outside acceptable range. Verify measurement technique and system operation.`,
            });
          }

          if (subcooling < 0 || subcooling > 25) {
            recommendations.push({
              type: 'safety',
              priority: 'critical',
              message: `ABNORMAL SUBCOOLING: ${subcooling}°F is outside acceptable range. Check measurement accuracy and system condition.`,
            });
          }

          if (superheat > 15 && subcooling < 8) {
            faults.push({
              cause: 'Low refrigerant charge',
              probability: 85,
              severity: 'high',
              relatedMeasurements: ['superheat', 'subcooling', 'pressures'],
              studyModuleLink: '/study/epa-608/core',
              calculatorLink: '/calculators',
              explanation: isBeginnerMode
                ? 'High superheat and low subcooling are classic signs of low refrigerant. The system needs more refrigerant, but check for leaks first!'
                : 'Refrigerant undercharge confirmed by superheat/subcooling analysis.',
            });
            
            recommendations.push({
              type: 'caution',
              priority: 'high',
              message: isBeginnerMode
                ? `High superheat (${superheat}°F) and low subcooling (${subcooling}°F) indicate low refrigerant charge. IMPORTANT: Find and repair any leaks before adding refrigerant!`
                : `Superheat: ${superheat}°F (high), Subcooling: ${subcooling}°F (low). Undercharge detected. Perform leak check before charging.`,
              actionLink: { label: 'EPA 608 refrigerant handling', path: '/study/epa-608/core' },
            });

            // AI Follow-up
            recommendations.push({
              type: 'followup',
              priority: 'high',
              message: 'Have you performed a leak check yet?',
              isFollowUpQuestion: true,
              expectedAnswerType: 'yesNo',
            });
          } else if (superheat < 5 && subcooling > 18) {
            faults.push({
              cause: 'Overcharged refrigerant',
              probability: 80,
              severity: 'medium',
              relatedMeasurements: ['superheat', 'subcooling'],
              studyModuleLink: '/study/epa-608/core',
              explanation: isBeginnerMode
                ? 'Low superheat and high subcooling mean too much refrigerant. The system needs refrigerant removed.'
                : 'Refrigerant overcharge indicated by superheat/subcooling values.',
            });
            
            recommendations.push({
              type: 'caution',
              priority: 'high',
              message: isBeginnerMode
                ? `Low superheat (${superheat}°F) and high subcooling (${subcooling}°F) indicate overcharge. System needs refrigerant recovery to correct charge.`
                : `Superheat: ${superheat}°F (low), Subcooling: ${subcooling}°F (high). Overcharge detected. Recovery required.`,
            });
          } else if (superheat >= 8 && superheat <= 12 && subcooling >= 10 && subcooling <= 15) {
            recommendations.push({
              type: 'info',
              priority: 'low',
              message: isBeginnerMode
                ? `Excellent! Superheat (${superheat}°F) and subcooling (${subcooling}°F) are within optimal ranges. Refrigerant charge is correct.`
                : `Superheat: ${superheat}°F, Subcooling: ${subcooling}°F - optimal range. Charge verified.`,
            });
          }

          // AI Follow-up for system type
          recommendations.push({
            type: 'followup',
            priority: 'medium',
            message: 'Is this a TXV (thermostatic expansion valve) or fixed orifice system?',
            isFollowUpQuestion: true,
            expectedAnswerType: 'text',
          });
        }
        break;

      case 'compressor-check':
        if (answer.measurements) {
          const ampDraw = parseFloat(answer.measurements.ampDraw || '0');
          const nameplateAmp = parseFloat(answer.measurements.nameplateAmp || '0');
          const variance = ((ampDraw - nameplateAmp) / nameplateAmp) * 100;

          // Abnormal reading detection
          if (ampDraw > nameplateAmp * 1.3) {
            recommendations.push({
              type: 'safety',
              priority: 'critical',
              message: `DANGEROUS: Compressor amp draw (${ampDraw.toFixed(1)}A) is ${Math.abs(variance).toFixed(1)}% above nameplate. System may trip breaker or damage compressor. Investigate immediately!`,
            });
          }

          if (Math.abs(variance) > 15) {
            faults.push({
              cause: 'Compressor inefficiency or electrical issue',
              probability: 68,
              severity: 'medium',
              relatedMeasurements: ['ampDraw', 'pressures'],
              studyModuleLink: '/study/core-lessons/electrical',
              explanation: isBeginnerMode
                ? 'The compressor is drawing too much or too little current. This could be a bad capacitor, failing compressor, or electrical problem.'
                : 'Compressor electrical performance outside acceptable range.',
            });
            
            recommendations.push({
              type: 'caution',
              priority: 'high',
              message: isBeginnerMode
                ? `Compressor amp draw is ${variance > 0 ? 'high' : 'low'} (${Math.abs(variance).toFixed(1)}% variance). Check the capacitor first - it's the most common cause. Then check compressor condition.`
                : `Amp variance: ${Math.abs(variance).toFixed(1)}%. Test capacitor, verify voltage, assess compressor condition.`,
              actionLink: { label: 'Electrical troubleshooting', path: '/study/core-lessons/electrical' },
            });

            // AI Follow-up
            recommendations.push({
              type: 'followup',
              priority: 'high',
              message: 'Is the compressor making any unusual sounds (grinding, rattling, or loud humming)?',
              isFollowUpQuestion: true,
              expectedAnswerType: 'yesNo',
            });
          } else {
            recommendations.push({
              type: 'info',
              priority: 'low',
              message: isBeginnerMode
                ? `Good! Compressor amp draw (${ampDraw.toFixed(1)}A) is within acceptable range of nameplate (${nameplateAmp.toFixed(1)}A). Compressor is operating normally.`
                : `Amp draw: ${ampDraw.toFixed(1)}A - acceptable variance from nameplate.`,
            });
          }
        }
        break;

      case 'condenser-coil':
        if (answer.value === 'Very dirty' || answer.value === 'Blocked with debris') {
          faults.push({
            cause: 'Dirty condenser coil reducing heat rejection',
            probability: 72,
            severity: 'medium',
            relatedMeasurements: ['pressures', 'efficiency'],
            explanation: isBeginnerMode
              ? 'A dirty outdoor coil can\'t reject heat properly. This causes high pressure and reduces cooling.'
              : 'Condenser heat rejection compromised by coil contamination.',
          });
          
          recommendations.push({
            type: 'caution',
            priority: 'high',
            message: isBeginnerMode
              ? 'Dirty condenser coil detected. Clean the coil to restore proper heat rejection and system efficiency. This is affecting your cooling capacity.'
              : 'Clean condenser coil. Contamination impacting heat rejection and system efficiency.',
          });

          // AI Follow-up
          recommendations.push({
            type: 'followup',
            priority: 'medium',
            message: 'What is the condition of the outdoor coil fins (straight, bent, damaged)?',
            isFollowUpQuestion: true,
            expectedAnswerType: 'text',
          });
        }
        break;

      case 'leak-detection':
        if (answer.value === 'yes') {
          faults.push({
            cause: 'Refrigerant leak detected',
            probability: 95,
            severity: 'high',
            relatedMeasurements: ['pressures', 'charge'],
            studyModuleLink: '/study/epa-608/core',
            explanation: isBeginnerMode
              ? 'A refrigerant leak must be repaired before adding refrigerant. It\'s illegal and harmful to just add refrigerant without fixing the leak.'
              : 'Refrigerant leak confirmed. EPA regulations require repair before recharging.',
          });
          
          recommendations.push({
            type: 'safety',
            priority: 'critical',
            message: isBeginnerMode
              ? 'REFRIGERANT LEAK DETECTED: You must repair the leak before adding refrigerant. EPA regulations require proper recovery and repair. Never vent refrigerant to atmosphere!'
              : 'LEAK DETECTED: Perform EPA-compliant recovery, repair leak, pressure test, evacuate, and recharge per regulations.',
            actionLink: { label: 'EPA 608 leak repair procedures', path: '/study/epa-608/core' },
          });

          // AI Follow-up questions
          recommendations.push({
            type: 'followup',
            priority: 'high',
            message: 'What type of leak detection method are you using (electronic, soap bubbles, UV dye)?',
            isFollowUpQuestion: true,
            expectedAnswerType: 'text',
          });

          recommendations.push({
            type: 'followup',
            priority: 'high',
            message: 'Are you detecting leaks in multiple locations?',
            isFollowUpQuestion: true,
            expectedAnswerType: 'yesNo',
          });
        }
        break;
    }

    return { faults, recommendations };
  }

  static generateSmartSummary(
    session: DiagnosticSession,
    allSteps: DiagnosticStep[]
  ): { summary: string; actionableSteps: string[]; learningRecommendations: string[] } {
    const topFaults = session.faultProbabilities
      .sort((a, b) => b.probability - a.probability)
      .slice(0, 3);

    const isBeginnerMode = session.mode === DiagnosticMode.beginner;

    let summary = isBeginnerMode
      ? `Based on your diagnostic measurements and observations, `
      : `Diagnostic analysis complete. `;

    if (topFaults.length > 0) {
      summary += isBeginnerMode
        ? `the most likely problem is ${topFaults[0].cause.toLowerCase()} with ${topFaults[0].probability}% confidence. ${topFaults[0].explanation || ''}`
        : `Primary fault: ${topFaults[0].cause} (${topFaults[0].probability}% confidence). `;
    }

    const criticalRecommendations = session.aiRecommendations.filter((r) => r.priority === 'critical');
    if (criticalRecommendations.length > 0) {
      summary += isBeginnerMode
        ? ` IMPORTANT: ${criticalRecommendations[0].message}`
        : ` CRITICAL: ${criticalRecommendations[0].message}`;
    }

    const actionableSteps: string[] = [];
    const learningRecommendations: string[] = [];

    // Generate mode-appropriate actionable steps
    topFaults.forEach((fault) => {
      if (fault.cause.toLowerCase().includes('refrigerant')) {
        actionableSteps.push(
          isBeginnerMode
            ? 'Use an electronic leak detector to find refrigerant leaks'
            : 'Perform comprehensive leak detection'
        );
        actionableSteps.push(
          isBeginnerMode
            ? 'Double-check your superheat and subcooling measurements'
            : 'Verify superheat/subcooling calculations'
        );
        learningRecommendations.push('Review EPA 608 refrigerant handling and recovery procedures');
      }
      if (fault.cause.toLowerCase().includes('airflow')) {
        actionableSteps.push(
          isBeginnerMode
            ? 'Replace the air filter if it\'s dirty'
            : 'Replace air filter'
        );
        actionableSteps.push(
          isBeginnerMode
            ? 'Check the blower motor and its capacitor'
            : 'Inspect blower motor and capacitor'
        );
        learningRecommendations.push('Study airflow principles and CFM calculations');
      }
      if (fault.cause.toLowerCase().includes('electrical') || fault.cause.toLowerCase().includes('power')) {
        actionableSteps.push(
          isBeginnerMode
            ? 'Check all circuit breakers and fuses'
            : 'Verify electrical supply and protection devices'
        );
        actionableSteps.push(
          isBeginnerMode
            ? 'Test the capacitors and contactors with a meter'
            : 'Test capacitors and contactors'
        );
        learningRecommendations.push('Review electrical safety and troubleshooting fundamentals');
      }
    });

    if (actionableSteps.length === 0) {
      actionableSteps.push(
        isBeginnerMode
          ? 'Continue with regular maintenance and cleaning'
          : 'Perform standard maintenance procedures'
      );
      actionableSteps.push(
        isBeginnerMode
          ? 'Watch the system for the next 24 hours to see if problems return'
          : 'Monitor system performance over 24-hour period'
      );
    }

    if (learningRecommendations.length === 0) {
      learningRecommendations.push('Review refrigeration cycle fundamentals');
      learningRecommendations.push('Practice with interactive HVAC measurement tools');
    }

    return { summary, actionableSteps, learningRecommendations };
  }
}

export default function TroubleshooterTab({ isGuest }: TroubleshooterTabProps) {
  const [phase, setPhase] = useState<SessionPhase>('mode-selection');
  const [session, setSession] = useState<DiagnosticSession | null>(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const { identity } = useInternetIdentity();
  const { data: pastSessions, isLoading: sessionsLoading } = useGetDiagnosticSessions();
  const saveMutation = useSaveDiagnosticSession();

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      toast.success('Connection restored.');
    };
    const handleOffline = () => {
      setIsOnline(false);
      toast.warning('You are offline. Data will be saved locally.');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleModeSelect = (mode: DiagnosticMode, aiEnabled: boolean) => {
    const newSession: DiagnosticSession = {
      id: BigInt(Date.now()),
      mode,
      symptom: 'cooling',
      currentStepIndex: 0,
      answers: {},
      measurements: {},
      calculations: {},
      confidence: 0,
      startTime: Date.now(),
      status: SessionStatus.inProgress,
      voiceGuidanceEnabled: mode === DiagnosticMode.beginner,
      aiAssistanceEnabled: aiEnabled,
      faultProbabilities: [],
      aiRecommendations: [],
      followUpAnswers: {},
      isOffline: !isOnline,
    };
    setSession(newSession);
    setPhase('diagnostic-flow');
    if (aiEnabled) {
      toast.success(
        mode === DiagnosticMode.beginner
          ? 'AI Assistant activated in Beginner mode - detailed guidance enabled'
          : 'AI Assistant activated in Expert mode - concise analysis enabled'
      );
    }
  };

  const handleAnswer = (answer: DiagnosticAnswer) => {
    if (!session) return;

    const currentStep = coolingDiagnosticFlow.steps[session.currentStepIndex];
    const updatedAnswers = { ...session.answers, [currentStep.id]: answer };
    const updatedMeasurements = { ...session.measurements, ...(answer.measurements || {}) };

    let updatedSession = {
      ...session,
      answers: updatedAnswers,
      measurements: updatedMeasurements,
      confidence: Math.min(100, Math.round((Object.keys(updatedAnswers).length / coolingDiagnosticFlow.steps.length) * 100)),
    };

    // AI Analysis with mode-adaptive behavior
    if (session.aiAssistanceEnabled) {
      const analysis = AdaptiveAIEngine.analyzeStep(
        currentStep.id,
        answer,
        updatedAnswers,
        updatedMeasurements,
        session.mode,
        session.followUpAnswers
      );

      // Merge new faults with existing, avoiding duplicates
      const existingCauses = new Set(session.faultProbabilities.map((f) => f.cause));
      const newFaults = analysis.faults.filter((f) => !existingCauses.has(f.cause));

      updatedSession = {
        ...updatedSession,
        faultProbabilities: [...session.faultProbabilities, ...newFaults].sort((a, b) => b.probability - a.probability),
        aiRecommendations: [...session.aiRecommendations, ...analysis.recommendations],
      };
    }

    setSession(updatedSession);
  };

  const handleFollowUpAnswer = (questionText: string, answer: string) => {
    if (!session) return;
    setSession({
      ...session,
      followUpAnswers: { ...session.followUpAnswers, [questionText]: answer },
    });
  };

  const handleNext = () => {
    if (!session) return;
    const nextIndex = session.currentStepIndex + 1;
    if (nextIndex >= coolingDiagnosticFlow.steps.length) {
      setSession({ ...session, status: SessionStatus.completed });
      setPhase('summary');
    } else {
      setSession({ ...session, currentStepIndex: nextIndex });
    }
  };

  const handlePrevious = () => {
    if (!session || session.currentStepIndex === 0) return;
    setSession({ ...session, currentStepIndex: session.currentStepIndex - 1 });
  };

  const handleReset = () => {
    setSession(null);
    setPhase('mode-selection');
  };

  const handleToggleAI = () => {
    if (!session) return;
    const newAIState = !session.aiAssistanceEnabled;
    setSession({ ...session, aiAssistanceEnabled: newAIState });
    toast.success(newAIState ? 'AI Assistant enabled' : 'AI Assistant disabled');
  };

  const canProceed = () => {
    if (!session) return false;
    const currentStep = coolingDiagnosticFlow.steps[session.currentStepIndex];
    return !!session.answers[currentStep.id];
  };

  if (phase === 'mode-selection') {
    return (
      <ModeSelection
        onSelect={handleModeSelect}
        onViewHistory={() => setPhase('history')}
        onViewAnalytics={() => setPhase('analytics')}
        isGuest={isGuest}
        isOnline={isOnline}
      />
    );
  }

  if (phase === 'diagnostic-flow' && session) {
    const currentStep = coolingDiagnosticFlow.steps[session.currentStepIndex];
    const currentAnswer = session.answers[currentStep.id];

    return (
      <DiagnosticFlow
        session={session}
        currentStep={currentStep}
        currentAnswer={currentAnswer}
        totalSteps={coolingDiagnosticFlow.steps.length}
        onAnswer={handleAnswer}
        onNext={handleNext}
        onPrevious={handlePrevious}
        onReset={handleReset}
        onToggleAI={handleToggleAI}
        onFollowUpAnswer={handleFollowUpAnswer}
        canProceed={canProceed()}
        isOnline={isOnline}
      />
    );
  }

  if (phase === 'summary' && session) {
    return <DiagnosticSummary session={session} onReset={handleReset} isGuest={isGuest} />;
  }

  return null;
}

function ModeSelection({
  onSelect,
  onViewHistory,
  onViewAnalytics,
  isGuest,
  isOnline,
}: {
  onSelect: (mode: DiagnosticMode, aiEnabled: boolean) => void;
  onViewHistory: () => void;
  onViewAnalytics: () => void;
  isGuest: boolean;
  isOnline: boolean;
}) {
  const [aiEnabled, setAiEnabled] = useState(true);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-5 w-5" />
                Adaptive HVAC Diagnostic System
                {!isOnline && (
                  <Badge variant="outline">
                    <WifiOff className="mr-1 h-3 w-3" />
                    Offline
                  </Badge>
                )}
              </CardTitle>
              <CardDescription>Select your experience level for mode-adaptive AI troubleshooting</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* AI Assistant Toggle */}
          <Card className="border-blue-200 bg-blue-50/50 dark:border-blue-900 dark:bg-blue-950/20">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <CardTitle className="text-base">Adaptive AI Diagnostic Assistant</CardTitle>
                </div>
                <Switch checked={aiEnabled} onCheckedChange={setAiEnabled} />
              </div>
            </CardHeader>
            <CardContent className="space-y-2 pt-0">
              <p className="text-sm text-muted-foreground">
                {aiEnabled
                  ? 'AI adapts to your experience level, asks follow-up questions, detects abnormal readings, and provides mode-specific guidance.'
                  : 'Standard diagnostic mode without AI assistance.'}
              </p>
              {aiEnabled && (
                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="outline" className="text-xs">
                    <MessageCircle className="mr-1 h-3 w-3" />
                    Follow-up questions
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    <ShieldAlert className="mr-1 h-3 w-3" />
                    Safety alerts
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    Confidence ranking
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    <Calculator className="mr-1 h-3 w-3" />
                    Tool recommendations
                  </Badge>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card
              className="cursor-pointer border-2 transition-all hover:border-primary hover:shadow-lg"
              onClick={() => onSelect(DiagnosticMode.beginner, aiEnabled)}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <HelpCircle className="h-5 w-5 text-blue-500" />
                  Beginner Mode
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Detailed step-by-step guidance with explanations, safety warnings, and educational content
                </p>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>• Comprehensive explanations for each step</li>
                  <li>• Safety warnings and best practices</li>
                  <li>• Links to study materials and diagrams</li>
                  <li>• Detailed AI recommendations</li>
                </ul>
                <Button className="w-full">Start Beginner Mode</Button>
              </CardContent>
            </Card>

            <Card
              className="cursor-pointer border-2 transition-all hover:border-primary hover:shadow-lg"
              onClick={() => onSelect(DiagnosticMode.expert, aiEnabled)}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Zap className="h-5 w-5 text-amber-500" />
                  Expert Mode
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Streamlined interface with rapid data entry and concise technical analysis
                </p>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>• Condensed steps and minimal explanations</li>
                  <li>• Skip basic system checks option</li>
                  <li>• Technical terminology and shortcuts</li>
                  <li>• Concise AI analysis</li>
                </ul>
                <Button className="w-full">Start Expert Mode</Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function DiagnosticFlow({
  session,
  currentStep,
  currentAnswer,
  totalSteps,
  onAnswer,
  onNext,
  onPrevious,
  onReset,
  onToggleAI,
  onFollowUpAnswer,
  canProceed,
  isOnline,
}: {
  session: DiagnosticSession;
  currentStep: DiagnosticStep;
  currentAnswer: DiagnosticAnswer | undefined;
  totalSteps: number;
  onAnswer: (answer: DiagnosticAnswer) => void;
  onNext: () => void;
  onPrevious: () => void;
  onReset: () => void;
  onToggleAI: () => void;
  onFollowUpAnswer: (question: string, answer: string) => void;
  canProceed: boolean;
  isOnline: boolean;
}) {
  const progressPercent = ((session.currentStepIndex + 1) / totalSteps) * 100;
  const [measurementValues, setMeasurementValues] = useState<Record<string, string>>({});
  const isBeginnerMode = session.mode === DiagnosticMode.beginner;

  const handleMeasurementChange = (key: string, value: string) => {
    setMeasurementValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleMeasurementSubmit = () => {
    onAnswer({ value: 'measured', measurements: measurementValues });
  };

  // Get current step recommendations (last 5 for better context)
  const currentRecommendations = session.aiRecommendations.slice(-5);
  const followUpQuestions = currentRecommendations.filter((r) => r.isFollowUpQuestion);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CardTitle className="text-lg">
                {isBeginnerMode ? 'Guided' : 'Expert'} Cooling System Diagnostic
              </CardTitle>
              {!isOnline && (
                <Badge variant="outline">
                  <WifiOff className="mr-1 h-3 w-3" />
                  Offline
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Bot className={`h-4 w-4 ${session.aiAssistanceEnabled ? 'text-blue-600' : 'text-muted-foreground'}`} />
                <Switch checked={session.aiAssistanceEnabled} onCheckedChange={onToggleAI} />
              </div>
              <Badge variant="outline">
                Step {session.currentStepIndex + 1} of {totalSteps}
              </Badge>
            </div>
          </div>
          <Progress value={progressPercent} className="h-2" />
        </CardHeader>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main diagnostic card */}
        <div className="lg:col-span-2">
          <Card className="border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                {currentStep.title}
              </CardTitle>
              {currentStep.category && <Badge variant="outline">{currentStep.category}</Badge>}
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-base font-medium">{currentStep.question}</p>

              {isBeginnerMode && currentStep.explanation && (
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{currentStep.explanation}</AlertDescription>
                </Alert>
              )}

              {currentStep.safetyWarning && (
                <Alert variant="destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Safety Warning</AlertTitle>
                  <AlertDescription>{currentStep.safetyWarning}</AlertDescription>
                </Alert>
              )}

              {isBeginnerMode && currentStep.beginnerTip && (
                <Alert className="border-blue-200 bg-blue-50/50 dark:border-blue-900 dark:bg-blue-950/20">
                  <HelpCircle className="h-4 w-4 text-blue-600" />
                  <AlertTitle className="text-blue-900 dark:text-blue-100">Beginner Tip</AlertTitle>
                  <AlertDescription className="text-blue-900 dark:text-blue-100">{currentStep.beginnerTip}</AlertDescription>
                </Alert>
              )}

              {!isBeginnerMode && currentStep.expertNote && (
                <Alert className="border-amber-200 bg-amber-50/50 dark:border-amber-900 dark:bg-amber-950/20">
                  <Zap className="h-4 w-4 text-amber-600" />
                  <AlertTitle className="text-amber-900 dark:text-amber-100">Expert Note</AlertTitle>
                  <AlertDescription className="text-amber-900 dark:text-amber-100">{currentStep.expertNote}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-4">
                {currentStep.inputType === 'yesNo' && (
                  <div className="flex gap-3">
                    <Button
                      variant={currentAnswer?.value === 'yes' ? 'default' : 'outline'}
                      className="flex-1"
                      onClick={() => onAnswer({ value: 'yes' })}
                    >
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Yes
                    </Button>
                    <Button
                      variant={currentAnswer?.value === 'no' ? 'default' : 'outline'}
                      className="flex-1"
                      onClick={() => onAnswer({ value: 'no' })}
                    >
                      <XCircle className="mr-2 h-4 w-4" />
                      No
                    </Button>
                  </div>
                )}

                {currentStep.inputType === 'choice' && currentStep.options && (
                  <div className="space-y-2">
                    <Label>Select an option:</Label>
                    <Select value={currentAnswer?.value || ''} onValueChange={(value) => onAnswer({ value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose an option..." />
                      </SelectTrigger>
                      <SelectContent>
                        {currentStep.options.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {currentStep.inputType === 'measurement' && currentStep.measurements && (
                  <div className="space-y-4">
                    {currentStep.measurements.map((measurement) => (
                      <div key={measurement.key} className="space-y-2">
                        <Label htmlFor={measurement.key}>
                          {measurement.label} ({measurement.unit})
                          {measurement.optimal && (
                            <span className="ml-2 text-xs text-muted-foreground">
                              (Optimal: {measurement.optimal.min}-{measurement.optimal.max} {measurement.unit})
                            </span>
                          )}
                        </Label>
                        <Input
                          id={measurement.key}
                          type="number"
                          placeholder={`Enter ${measurement.label.toLowerCase()}`}
                          value={measurementValues[measurement.key] || ''}
                          onChange={(e) => handleMeasurementChange(measurement.key, e.target.value)}
                        />
                      </div>
                    ))}
                    <Button onClick={handleMeasurementSubmit} disabled={Object.keys(measurementValues).length === 0}>
                      Submit Measurements
                    </Button>
                  </div>
                )}
              </div>

              {/* Related resources */}
              {(currentStep.relatedLesson || currentStep.relatedCalculator || currentStep.relatedDiagram) && (
                <>
                  <Separator />
                  <div className="flex flex-wrap gap-2">
                    {currentStep.relatedLesson && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={currentStep.relatedLesson}>
                          <BookOpen className="mr-2 h-4 w-4" />
                          Related Lesson
                        </a>
                      </Button>
                    )}
                    {currentStep.relatedCalculator && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={currentStep.relatedCalculator}>
                          <Calculator className="mr-2 h-4 w-4" />
                          Calculator
                        </a>
                      </Button>
                    )}
                  </div>
                </>
              )}

              <Separator />
              <div className="flex items-center justify-between gap-4">
                <Button variant="outline" onClick={onPrevious} disabled={session.currentStepIndex === 0}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                <Button variant="ghost" onClick={onReset} size="sm">
                  Start Over
                </Button>
                <Button onClick={onNext} disabled={!canProceed}>
                  {session.currentStepIndex === totalSteps - 1 ? 'View Summary' : 'Next Step'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Assistant Panel */}
        {session.aiAssistanceEnabled && (
          <div className="space-y-4">
            <AIAssistantPanel
              faultProbabilities={session.faultProbabilities.slice(0, 3)}
              recommendations={currentRecommendations}
              followUpQuestions={followUpQuestions}
              confidence={session.confidence}
              mode={session.mode}
              onFollowUpAnswer={onFollowUpAnswer}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function AIAssistantPanel({
  faultProbabilities,
  recommendations,
  followUpQuestions,
  confidence,
  mode,
  onFollowUpAnswer,
}: {
  faultProbabilities: FaultProbability[];
  recommendations: AIRecommendation[];
  followUpQuestions: AIRecommendation[];
  confidence: number;
  mode: DiagnosticMode;
  onFollowUpAnswer: (question: string, answer: string) => void;
}) {
  const [followUpInput, setFollowUpInput] = useState<Record<string, string>>({});
  const isBeginnerMode = mode === DiagnosticMode.beginner;

  const handleFollowUpSubmit = (question: string) => {
    const answer = followUpInput[question];
    if (answer) {
      onFollowUpAnswer(question, answer);
      setFollowUpInput((prev) => ({ ...prev, [question]: '' }));
      toast.success('Response recorded');
    }
  };

  return (
    <Card className="border-blue-200 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:border-blue-900 dark:from-blue-950/20 dark:to-indigo-950/10">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Bot className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          AI Diagnostic Assistant
          <Badge variant="outline" className="ml-auto text-xs">
            {isBeginnerMode ? 'Beginner' : 'Expert'} Mode
          </Badge>
        </CardTitle>
        <CardDescription>
          {isBeginnerMode ? 'Detailed guidance and explanations' : 'Concise technical analysis'}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Confidence Score */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Diagnostic Confidence</span>
            <span className="text-muted-foreground">{confidence}%</span>
          </div>
          <Progress value={confidence} className="h-2" />
        </div>

        <Separator />

        {/* Fault Probabilities */}
        {faultProbabilities.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-sm font-semibold flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Likely Causes
            </h4>
            {faultProbabilities.map((fault, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{fault.cause}</span>
                  <Badge
                    variant={fault.severity === 'high' ? 'destructive' : fault.severity === 'medium' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {fault.probability}%
                  </Badge>
                </div>
                {isBeginnerMode && fault.explanation && (
                  <p className="text-xs text-muted-foreground">{fault.explanation}</p>
                )}
                <Progress
                  value={fault.probability}
                  className={`h-1.5 ${
                    fault.severity === 'high'
                      ? '[&>div]:bg-red-500'
                      : fault.severity === 'medium'
                        ? '[&>div]:bg-yellow-500'
                        : '[&>div]:bg-blue-500'
                  }`}
                />
                {(fault.studyModuleLink || fault.calculatorLink) && (
                  <div className="flex gap-2">
                    {fault.studyModuleLink && (
                      <Button variant="ghost" size="sm" className="h-7 text-xs" asChild>
                        <a href={fault.studyModuleLink}>
                          <BookOpen className="mr-1 h-3 w-3" />
                          Learn more
                        </a>
                      </Button>
                    )}
                    {fault.calculatorLink && (
                      <Button variant="ghost" size="sm" className="h-7 text-xs" asChild>
                        <a href={fault.calculatorLink}>
                          <Calculator className="mr-1 h-3 w-3" />
                          Calculator
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Recommendations */}
        {recommendations.filter((r) => !r.isFollowUpQuestion).length > 0 && (
          <>
            <Separator />
            <div className="space-y-3">
              <h4 className="text-sm font-semibold flex items-center gap-2">
                <Lightbulb className="h-4 w-4" />
                Recommendations
              </h4>
              {recommendations
                .filter((r) => !r.isFollowUpQuestion)
                .map((rec, index) => (
                  <Alert
                    key={index}
                    variant={rec.type === 'safety' ? 'destructive' : 'default'}
                    className={
                      rec.type === 'caution'
                        ? 'border-yellow-200 bg-yellow-50/50 dark:border-yellow-900 dark:bg-yellow-950/20'
                        : rec.type === 'learning'
                          ? 'border-blue-200 bg-blue-50/50 dark:border-blue-900 dark:bg-blue-950/20'
                          : ''
                    }
                  >
                    {rec.type === 'safety' && <ShieldAlert className="h-4 w-4" />}
                    {rec.type === 'caution' && <AlertCircle className="h-4 w-4 text-yellow-600" />}
                    {rec.type === 'info' && <CheckCircle2 className="h-4 w-4 text-green-600" />}
                    {rec.type === 'learning' && <BookOpen className="h-4 w-4 text-blue-600" />}
                    <AlertDescription className="text-xs">{rec.message}</AlertDescription>
                    {rec.actionLink && (
                      <Button variant="link" size="sm" className="mt-2 h-auto p-0 text-xs" asChild>
                        <a href={rec.actionLink.path}>{rec.actionLink.label} →</a>
                      </Button>
                    )}
                  </Alert>
                ))}
            </div>
          </>
        )}

        {/* Follow-up Questions */}
        {followUpQuestions.length > 0 && (
          <>
            <Separator />
            <div className="space-y-3">
              <h4 className="text-sm font-semibold flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Follow-up Questions
              </h4>
              {followUpQuestions.map((question, index) => (
                <div key={index} className="space-y-2 rounded-lg border border-blue-200 bg-blue-50/30 p-3 dark:border-blue-900 dark:bg-blue-950/10">
                  <p className="text-xs font-medium text-blue-900 dark:text-blue-100">{question.message}</p>
                  <div className="flex gap-2">
                    {question.expectedAnswerType === 'yesNo' ? (
                      <>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-7 flex-1 text-xs"
                          onClick={() => {
                            onFollowUpAnswer(question.message, 'yes');
                            toast.success('Response recorded');
                          }}
                        >
                          Yes
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-7 flex-1 text-xs"
                          onClick={() => {
                            onFollowUpAnswer(question.message, 'no');
                            toast.success('Response recorded');
                          }}
                        >
                          No
                        </Button>
                      </>
                    ) : (
                      <>
                        <Input
                          placeholder="Your answer..."
                          className="h-7 text-xs"
                          value={followUpInput[question.message] || ''}
                          onChange={(e) => setFollowUpInput((prev) => ({ ...prev, [question.message]: e.target.value }))}
                        />
                        <Button
                          size="sm"
                          className="h-7 text-xs"
                          onClick={() => handleFollowUpSubmit(question.message)}
                          disabled={!followUpInput[question.message]}
                        >
                          Submit
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {faultProbabilities.length === 0 && recommendations.length === 0 && (
          <div className="py-8 text-center text-sm text-muted-foreground">
            <Bot className="mx-auto mb-2 h-8 w-8 opacity-50" />
            <p>
              {isBeginnerMode
                ? 'AI will provide detailed analysis and guidance as you progress through each step.'
                : 'AI analysis will appear as diagnostic data is collected.'}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function DiagnosticSummary({ session, onReset, isGuest }: { session: DiagnosticSession; onReset: () => void; isGuest: boolean }) {
  const smartSummary = session.aiAssistanceEnabled
    ? AdaptiveAIEngine.generateSmartSummary(session, coolingDiagnosticFlow.steps)
    : null;

  const isBeginnerMode = session.mode === DiagnosticMode.beginner;

  return (
    <div className="space-y-6">
      <Card className="border-primary">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            Diagnostic Summary
            <Badge variant="outline" className="ml-auto">
              {isBeginnerMode ? 'Beginner' : 'Expert'} Mode
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm text-muted-foreground">Confidence Level</p>
              <p className="text-2xl font-semibold">{session.confidence}%</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Duration</p>
              <p className="text-2xl font-semibold">{Math.round((Date.now() - session.startTime) / 60000)} min</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Smart Summary */}
      {session.aiAssistanceEnabled && smartSummary && (
        <Card className="border-blue-200 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:border-blue-900 dark:from-blue-950/20 dark:to-indigo-950/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Bot className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              AI Smart Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="mb-2 text-sm font-semibold">Analysis</h4>
              <p className="text-sm text-muted-foreground">{smartSummary.summary}</p>
            </div>

            <Separator />

            <div>
              <h4 className="mb-3 text-sm font-semibold flex items-center gap-2">
                <Wrench className="h-4 w-4" />
                Actionable Next Steps
              </h4>
              <ul className="space-y-2">
                {smartSummary.actionableSteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            <div>
              <h4 className="mb-3 text-sm font-semibold flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Recommended Learning
              </h4>
              <ul className="space-y-2">
                {smartSummary.learningRecommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Lightbulb className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Top Fault Probabilities */}
      {session.faultProbabilities.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <TrendingUp className="h-5 w-5" />
              Identified Issues
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {session.faultProbabilities.slice(0, 5).map((fault, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{fault.cause}</span>
                  <Badge
                    variant={fault.severity === 'high' ? 'destructive' : fault.severity === 'medium' ? 'default' : 'secondary'}
                  >
                    {fault.probability}% confidence
                  </Badge>
                </div>
                {isBeginnerMode && fault.explanation && (
                  <p className="text-xs text-muted-foreground">{fault.explanation}</p>
                )}
                <Progress
                  value={fault.probability}
                  className={`h-2 ${
                    fault.severity === 'high'
                      ? '[&>div]:bg-red-500'
                      : fault.severity === 'medium'
                        ? '[&>div]:bg-yellow-500'
                        : '[&>div]:bg-blue-500'
                  }`}
                />
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      <div className="grid gap-3 sm:grid-cols-2">
        <Button onClick={onReset} variant="outline">
          Start New Diagnostic
        </Button>
        <Button disabled={isGuest}>
          <Download className="mr-2 h-4 w-4" />
          Download AI-Enhanced Report
        </Button>
      </div>
    </div>
  );
}
