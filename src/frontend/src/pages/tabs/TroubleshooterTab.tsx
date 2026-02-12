import { useState } from 'react';
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
import { useInternetIdentity } from '@/hooks/useInternetIdentity';
import { DiagnosticMode, SessionStatus, ConfidenceLevel } from '@/types/local';
import { toast } from 'sonner';
import { GUEST_RESTRICTION_MESSAGE } from '../../utils/guestRestrictions';

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

      // Additional step analysis would continue here...
      default:
        break;
    }

    return { faults, recommendations };
  }

  static generateSmartSummary(
    session: DiagnosticSession,
    mode: DiagnosticMode
  ): { summary: string; nextSteps: string[]; learningRecommendations: string[] } {
    const isBeginnerMode = mode === DiagnosticMode.beginner;
    const topFaults = session.faultProbabilities.slice(0, 3);

    const summary = isBeginnerMode
      ? `Based on your diagnostic session, I've identified ${topFaults.length} likely causes for the cooling problem. The most probable issue is: ${topFaults[0]?.cause || 'Unknown'}. This diagnostic took ${Math.round((Date.now() - session.startTime) / 60000)} minutes to complete.`
      : `Diagnostic analysis complete. ${topFaults.length} fault probabilities identified with ${session.confidence}% confidence. Primary fault: ${topFaults[0]?.cause || 'Unknown'}.`;

    const nextSteps = isBeginnerMode
      ? [
          'Review the top 3 likely causes listed below',
          'Start with the highest probability issue first',
          'Gather the recommended tools and parts',
          'Follow safety procedures before starting repairs',
          'Consider calling a professional if you\'re unsure',
        ]
      : [
          'Verify top fault probabilities with additional testing',
          'Procure necessary parts and tools',
          'Execute repairs following manufacturer specifications',
          'Perform post-repair verification testing',
        ];

    const learningRecommendations = isBeginnerMode
      ? [
          'Review the study modules linked in the recommendations',
          'Watch related video tutorials in the Community tab',
          'Practice with the interactive tools in the Study section',
        ]
      : [
          'Review advanced diagnostic techniques for similar faults',
          'Study manufacturer technical bulletins',
        ];

    return { summary, nextSteps, learningRecommendations };
  }
}

export default function TroubleshooterTab({ isGuest }: TroubleshooterTabProps) {
  const [phase, setPhase] = useState<SessionPhase>('mode-selection');
  const [currentSession, setCurrentSession] = useState<DiagnosticSession | null>(null);
  const [currentAnswer, setCurrentAnswer] = useState<DiagnosticAnswer>({ value: '', measurements: {} });

  const { identity } = useInternetIdentity();

  const startNewSession = (mode: DiagnosticMode) => {
    const newSession: DiagnosticSession = {
      id: BigInt(Date.now()),
      mode,
      symptom: 'No cooling',
      currentStepIndex: 0,
      answers: {},
      measurements: {},
      calculations: {},
      confidence: 0,
      startTime: Date.now(),
      status: SessionStatus.inProgress,
      voiceGuidanceEnabled: false,
      aiAssistanceEnabled: true,
      faultProbabilities: [],
      aiRecommendations: [],
      followUpAnswers: {},
    };
    setCurrentSession(newSession);
    setPhase('diagnostic-flow');
  };

  const handleExportReport = () => {
    if (isGuest) {
      toast.error(GUEST_RESTRICTION_MESSAGE);
      return;
    }

    if (!currentSession) {
      toast.error('No session to export');
      return;
    }

    const reportContent = `HVAC Diagnostic Report
Generated: ${new Date().toLocaleString()}
Mode: ${currentSession.mode}
Symptom: ${currentSession.symptom}
Confidence: ${currentSession.confidence}%

Top Fault Probabilities:
${currentSession.faultProbabilities.map((f, i) => `${i + 1}. ${f.cause} (${f.probability}%)`).join('\n')}

Recommendations:
${currentSession.aiRecommendations.map((r, i) => `${i + 1}. ${r.message}`).join('\n')}
`;

    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hvac-diagnostic-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast.success('Report exported successfully');
  };

  const handleAnswerStep = () => {
    if (!currentSession) return;

    const currentStep = coolingDiagnosticFlow.steps[currentSession.currentStepIndex];
    
    // Run AI analysis
    const analysis = AdaptiveAIEngine.analyzeStep(
      currentStep.id,
      currentAnswer,
      currentSession.answers,
      currentSession.measurements,
      currentSession.mode,
      currentSession.followUpAnswers
    );

    // Update session with answer and AI analysis
    const updatedSession = {
      ...currentSession,
      answers: { ...currentSession.answers, [currentStep.id]: currentAnswer },
      faultProbabilities: [...currentSession.faultProbabilities, ...analysis.faults],
      aiRecommendations: [...currentSession.aiRecommendations, ...analysis.recommendations],
      currentStepIndex: currentSession.currentStepIndex + 1,
    };

    setCurrentSession(updatedSession);
    setCurrentAnswer({ value: '', measurements: {} });

    // Check if we've completed all steps
    if (updatedSession.currentStepIndex >= coolingDiagnosticFlow.steps.length) {
      setCurrentSession({ ...updatedSession, status: SessionStatus.completed });
      setPhase('summary');
    }
  };

  const renderModeSelection = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wrench className="h-5 w-5" />
          HVAC Troubleshooter
        </CardTitle>
        <CardDescription>AI-powered diagnostic assistant with step-by-step guidance</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Alert>
          <Bot className="h-4 w-4" />
          <AlertTitle>Choose Your Experience Level</AlertTitle>
          <AlertDescription>
            Select the mode that matches your HVAC experience. The AI assistant will adapt its guidance accordingly.
          </AlertDescription>
        </Alert>

        <div className="grid gap-4 md:grid-cols-2">
          <button
            onClick={() => startNewSession(DiagnosticMode.beginner)}
            className="rounded-lg border-2 border-border bg-card p-6 text-left transition-all hover:border-primary hover:shadow-lg"
          >
            <div className="mb-4 flex items-center gap-2">
              <HelpCircle className="h-8 w-8 text-primary" />
              <Badge>Beginner</Badge>
            </div>
            <h3 className="mb-2 text-lg font-semibold">Beginner Mode</h3>
            <p className="text-sm text-muted-foreground">
              Step-by-step guidance with detailed explanations, safety warnings, and learning tips. Perfect for
              technicians in training or homeowners.
            </p>
          </button>

          <button
            onClick={() => startNewSession(DiagnosticMode.expert)}
            className="rounded-lg border-2 border-border bg-card p-6 text-left transition-all hover:border-primary hover:shadow-lg"
          >
            <div className="mb-4 flex items-center gap-2">
              <Zap className="h-8 w-8 text-primary" />
              <Badge variant="secondary">Expert</Badge>
            </div>
            <h3 className="mb-2 text-lg font-semibold">Expert Mode</h3>
            <p className="text-sm text-muted-foreground">
              Streamlined diagnostic flow with technical details, advanced measurements, and professional-level
              analysis. For experienced HVAC technicians.
            </p>
          </button>
        </div>
      </CardContent>
    </Card>
  );

  const renderDiagnosticFlow = () => {
    if (!currentSession) return null;

    const currentStep = coolingDiagnosticFlow.steps[currentSession.currentStepIndex];
    const progress = ((currentSession.currentStepIndex + 1) / coolingDiagnosticFlow.steps.length) * 100;
    const isBeginnerMode = currentSession.mode === DiagnosticMode.beginner;

    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5" />
                  {coolingDiagnosticFlow.name}
                </CardTitle>
                <CardDescription>
                  Step {currentSession.currentStepIndex + 1} of {coolingDiagnosticFlow.steps.length} •{' '}
                  <Badge variant={isBeginnerMode ? 'default' : 'secondary'}>
                    {isBeginnerMode ? 'Beginner' : 'Expert'} Mode
                  </Badge>
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => setPhase('mode-selection')}>
                  Exit
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} />
            </div>

            {currentStep.category && (
              <Badge variant="outline" className="text-sm">
                {currentStep.category}
              </Badge>
            )}

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">{currentStep.title}</h3>
              <p className="text-base text-foreground">{currentStep.question}</p>

              {currentStep.explanation && (
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>{currentStep.explanation}</AlertDescription>
                </Alert>
              )}

              {currentStep.safetyWarning && (
                <Alert variant="destructive">
                  <ShieldAlert className="h-4 w-4" />
                  <AlertTitle>Safety Warning</AlertTitle>
                  <AlertDescription>{currentStep.safetyWarning}</AlertDescription>
                </Alert>
              )}

              {isBeginnerMode && currentStep.beginnerTip && (
                <Alert>
                  <HelpCircle className="h-4 w-4" />
                  <AlertTitle>Beginner Tip</AlertTitle>
                  <AlertDescription>{currentStep.beginnerTip}</AlertDescription>
                </Alert>
              )}

              {!isBeginnerMode && currentStep.expertNote && (
                <Alert>
                  <Zap className="h-4 w-4" />
                  <AlertTitle>Expert Note</AlertTitle>
                  <AlertDescription>{currentStep.expertNote}</AlertDescription>
                </Alert>
              )}

              {/* Input based on step type */}
              {currentStep.inputType === 'yesNo' && (
                <div className="flex gap-4">
                  <Button
                    variant={currentAnswer.value === 'yes' ? 'default' : 'outline'}
                    className="flex-1"
                    onClick={() => setCurrentAnswer({ value: 'yes' })}
                  >
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Yes
                  </Button>
                  <Button
                    variant={currentAnswer.value === 'no' ? 'default' : 'outline'}
                    className="flex-1"
                    onClick={() => setCurrentAnswer({ value: 'no' })}
                  >
                    <XCircle className="mr-2 h-4 w-4" />
                    No
                  </Button>
                </div>
              )}

              {currentStep.inputType === 'choice' && currentStep.options && (
                <Select value={currentAnswer.value} onValueChange={(value) => setCurrentAnswer({ value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    {currentStep.options.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}

              {currentStep.inputType === 'measurement' && currentStep.measurements && (
                <div className="space-y-4">
                  {currentStep.measurements.map((measurement) => (
                    <div key={measurement.key} className="space-y-2">
                      <Label htmlFor={measurement.key}>
                        {measurement.label} ({measurement.unit})
                      </Label>
                      <Input
                        id={measurement.key}
                        type="number"
                        step="0.1"
                        placeholder={`Enter ${measurement.label.toLowerCase()}`}
                        value={currentAnswer.measurements?.[measurement.key] || ''}
                        onChange={(e) =>
                          setCurrentAnswer({
                            ...currentAnswer,
                            measurements: {
                              ...currentAnswer.measurements,
                              [measurement.key]: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex justify-between pt-4">
              <Button
                variant="outline"
                onClick={() => {
                  if (currentSession.currentStepIndex > 0) {
                    setCurrentSession({
                      ...currentSession,
                      currentStepIndex: currentSession.currentStepIndex - 1,
                    });
                  }
                }}
                disabled={currentSession.currentStepIndex === 0}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <Button onClick={handleAnswerStep} disabled={!currentAnswer.value}>
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* AI Recommendations Panel */}
        {currentSession.aiRecommendations.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                AI Assistant Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {currentSession.aiRecommendations.slice(-3).map((rec, index) => (
                <Alert
                  key={index}
                  variant={rec.type === 'safety' ? 'destructive' : 'default'}
                >
                  {rec.type === 'safety' && <ShieldAlert className="h-4 w-4" />}
                  {rec.type === 'caution' && <AlertTriangle className="h-4 w-4" />}
                  {rec.type === 'info' && <Lightbulb className="h-4 w-4" />}
                  {rec.type === 'learning' && <BookOpen className="h-4 w-4" />}
                  {rec.type === 'followup' && <MessageCircle className="h-4 w-4" />}
                  <AlertDescription>{rec.message}</AlertDescription>
                </Alert>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    );
  };

  const renderSummary = () => {
    if (!currentSession) return null;

    const smartSummary = AdaptiveAIEngine.generateSmartSummary(currentSession, currentSession.mode);

    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Diagnostic Complete
                </CardTitle>
                <CardDescription>AI-powered analysis and recommendations</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={handleExportReport} disabled={isGuest}>
                  <Download className="mr-2 h-4 w-4" />
                  Export Report
                </Button>
                <Button onClick={() => setPhase('mode-selection')}>
                  New Diagnostic
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert>
              <Bot className="h-4 w-4" />
              <AlertTitle>Summary</AlertTitle>
              <AlertDescription>{smartSummary.summary}</AlertDescription>
            </Alert>

            <div>
              <h3 className="mb-3 text-lg font-semibold">Top Fault Probabilities</h3>
              <div className="space-y-3">
                {currentSession.faultProbabilities.slice(0, 5).map((fault, index) => (
                  <div key={index} className="rounded-lg border border-border bg-card p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-medium">{fault.cause}</span>
                      <Badge
                        variant={
                          fault.severity === 'high'
                            ? 'destructive'
                            : fault.severity === 'medium'
                              ? 'default'
                              : 'secondary'
                        }
                      >
                        {fault.probability}%
                      </Badge>
                    </div>
                    {fault.explanation && (
                      <p className="text-sm text-muted-foreground">{fault.explanation}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-semibold">Next Steps</h3>
              <ul className="space-y-2">
                {smartSummary.nextSteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-sm">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-semibold">Learning Recommendations</h3>
              <ul className="space-y-2">
                {smartSummary.learningRecommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <BookOpen className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-sm">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {phase === 'mode-selection' && renderModeSelection()}
      {phase === 'diagnostic-flow' && renderDiagnosticFlow()}
      {phase === 'summary' && renderSummary()}
    </div>
  );
}
