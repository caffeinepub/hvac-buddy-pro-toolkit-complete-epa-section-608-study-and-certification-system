import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2, XCircle, Award, RotateCcw, BookOpen, Target } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import type { StudyMode } from '../../types/study';

interface EPA608PracticeProps {
  certType: 'core' | 'type1' | 'type2' | 'type3' | 'universal';
  studyMode: StudyMode;
}

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  objective: string;
}

export default function EPA608Practice({ certType, studyMode }: EPA608PracticeProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [adaptiveDifficulty, setAdaptiveDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');
  const [performanceScore, setPerformanceScore] = useState(0);

  const isBeginner = studyMode.__kind__ === 'beginner';

  const allQuestions = getQuestions(certType);
  
  // Adaptive question selection based on performance
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    // Initialize with adaptive question selection
    const selectedQuestions = selectAdaptiveQuestions(allQuestions, adaptiveDifficulty);
    setQuestions(selectedQuestions);
  }, [certType, adaptiveDifficulty]);

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answer;
    setSelectedAnswers(newAnswers);
    
    // Update performance tracking for adaptive difficulty
    const isCorrect = answer === questions[currentQuestion].correctAnswer;
    updatePerformanceScore(isCorrect);
    
    if (isBeginner) {
      setShowExplanation(true);
    }
  };

  const updatePerformanceScore = (isCorrect: boolean) => {
    const newScore = isCorrect ? performanceScore + 1 : performanceScore - 0.5;
    setPerformanceScore(Math.max(0, newScore));
    
    // Adjust difficulty based on performance (every 3 questions)
    if ((currentQuestion + 1) % 3 === 0) {
      const recentPerformance = newScore / (currentQuestion + 1);
      if (recentPerformance > 0.8 && adaptiveDifficulty !== 'hard') {
        setAdaptiveDifficulty(adaptiveDifficulty === 'easy' ? 'medium' : 'hard');
      } else if (recentPerformance < 0.5 && adaptiveDifficulty !== 'easy') {
        setAdaptiveDifficulty(adaptiveDifficulty === 'hard' ? 'medium' : 'easy');
      }
    }
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    setShowExplanation(false);
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setShowExplanation(false);
    setAdaptiveDifficulty('easy');
    setPerformanceScore(0);
    const selectedQuestions = selectAdaptiveQuestions(allQuestions, 'easy');
    setQuestions(selectedQuestions);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const getWeakAreas = () => {
    const weakObjectives: string[] = [];
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] !== q.correctAnswer) {
        if (!weakObjectives.includes(q.objective)) {
          weakObjectives.push(q.objective);
        }
      }
    });
    return weakObjectives;
  };

  const currentQ = questions[currentQuestion];
  const isAnswered = selectedAnswers[currentQuestion] !== undefined;
  const allAnswered = selectedAnswers.length === questions.length && selectedAnswers.every((a) => a);
  const isCorrect = selectedAnswers[currentQuestion] === currentQ?.correctAnswer;

  if (showResults) {
    const score = calculateScore();
    const percentage = (score / questions.length) * 100;
    const passed = percentage >= 70;
    const weakAreas = getWeakAreas();

    return (
      <div className="space-y-6">
        <Card className={passed ? 'border-green-500' : 'border-yellow-500'}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className={`h-6 w-6 ${passed ? 'text-green-500' : 'text-yellow-500'}`} />
              Practice Exam Results
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <p className="mb-2 text-4xl font-bold">
                {score} / {questions.length}
              </p>
              <p className="text-2xl font-semibold">{percentage.toFixed(0)}%</p>
              <p className="mt-2 text-lg">
                {passed ? (
                  <span className="text-green-600">Passing Score! 🎉</span>
                ) : (
                  <span className="text-yellow-600">Keep Studying</span>
                )}
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                {passed
                  ? 'Excellent work! You\'re ready for the certification exam.'
                  : 'Review the questions you missed and study the core content before retaking.'}
              </p>
            </div>

            {weakAreas.length > 0 && (
              <Card className="border-yellow-500/30 bg-yellow-500/5">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Target className="h-5 w-5 text-yellow-600" />
                    Focus Areas for Improvement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1">
                    {weakAreas.map((area, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">{area}</li>
                    ))}
                  </ul>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Performance below 70% in these areas. Review the study content for these topics before retaking the exam.
                  </p>
                </CardContent>
              </Card>
            )}

            <div className="space-y-3">
              <h3 className="font-semibold">Question Review</h3>
              {questions.map((q, idx) => {
                const userAnswer = selectedAnswers[idx];
                const isCorrect = userAnswer === q.correctAnswer;

                return (
                  <Card key={idx} className={isCorrect ? 'border-green-500/50' : 'border-red-500/50'}>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-2">
                        {isCorrect ? (
                          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                        ) : (
                          <XCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
                        )}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline" className="text-xs">
                              {q.difficulty}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{q.objective}</span>
                          </div>
                          <p className="font-medium text-sm">
                            {idx + 1}. {q.question}
                          </p>
                          <p className="mt-1 text-sm text-muted-foreground">Your answer: {userAnswer}</p>
                          {!isCorrect && (
                            <>
                              <p className="text-sm text-green-600">Correct: {q.correctAnswer}</p>
                              <p className="mt-2 text-sm text-muted-foreground italic">{q.explanation}</p>
                            </>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="flex gap-2">
              <Button onClick={handleReset} className="flex-1">
                <RotateCcw className="mr-2 h-4 w-4" />
                Retake Practice Exam
              </Button>
              <Button variant="outline" className="flex-1">
                <BookOpen className="mr-2 h-4 w-4" />
                Review Study Content
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!currentQ) {
    return <div>Loading questions...</div>;
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{getCertTitle(certType)} Practice Exam</CardTitle>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <div className="flex items-center gap-2">
                <Badge variant="outline">{currentQ.difficulty}</Badge>
                <span>
                  {selectedAnswers.filter((a) => a).length} answered
                </span>
              </div>
            </div>
            <Progress value={((currentQuestion + 1) / questions.length) * 100} />
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="mb-2 text-xs text-muted-foreground">
              EPA Objective: {currentQ.objective}
            </div>
            <h3 className="mb-4 text-lg font-semibold">{currentQ.question}</h3>
            <RadioGroup value={selectedAnswers[currentQuestion] || ''} onValueChange={handleAnswerSelect}>
              <div className="space-y-3">
                {currentQ.options.map((option, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <RadioGroupItem value={option} id={`option-${idx}`} className="mt-1" />
                    <Label htmlFor={`option-${idx}`} className="flex-1 cursor-pointer leading-relaxed">
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          {showExplanation && isAnswered && (
            <Alert className={isCorrect ? 'border-green-500' : 'border-yellow-500'}>
              <div className="flex items-start gap-2">
                {isCorrect ? (
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-500" />
                ) : (
                  <XCircle className="h-5 w-5 flex-shrink-0 text-yellow-500" />
                )}
                <div>
                  <p className="font-semibold">{isCorrect ? 'Correct!' : 'Incorrect'}</p>
                  <AlertDescription className="mt-1">
                    <strong>Explanation:</strong> {currentQ.explanation}
                  </AlertDescription>
                  <AlertDescription className="mt-2 text-xs">
                    <strong>EPA Objective:</strong> {currentQ.objective}
                  </AlertDescription>
                </div>
              </div>
            </Alert>
          )}

          <div className="flex items-center justify-between">
            <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>
              Previous
            </Button>
            {currentQuestion < questions.length - 1 ? (
              <Button onClick={handleNext} disabled={!isAnswered}>
                Next
              </Button>
            ) : (
              <Button onClick={handleSubmit} disabled={!allAnswered}>
                Submit Exam
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function getCertTitle(certType: string): string {
  const titles = {
    core: 'EPA Core Section',
    type1: 'Type I: Small Appliances',
    type2: 'Type II: High-Pressure Systems',
    type3: 'Type III: Low-Pressure Systems',
    universal: 'Universal Certification',
  };
  return titles[certType as keyof typeof titles];
}

function selectAdaptiveQuestions(allQuestions: Question[], difficulty: 'easy' | 'medium' | 'hard'): Question[] {
  // Select questions based on current difficulty level
  const easyQuestions = allQuestions.filter(q => q.difficulty === 'easy');
  const mediumQuestions = allQuestions.filter(q => q.difficulty === 'medium');
  const hardQuestions = allQuestions.filter(q => q.difficulty === 'hard');

  let selected: Question[] = [];
  
  if (difficulty === 'easy') {
    selected = [...easyQuestions.slice(0, 8), ...mediumQuestions.slice(0, 2)];
  } else if (difficulty === 'medium') {
    selected = [...easyQuestions.slice(0, 3), ...mediumQuestions.slice(0, 5), ...hardQuestions.slice(0, 2)];
  } else {
    selected = [...mediumQuestions.slice(0, 4), ...hardQuestions.slice(0, 6)];
  }

  return selected.slice(0, 10);
}

function getQuestions(certType: string): Question[] {
  const coreQuestions: Question[] = [
    {
      question: 'What is the primary purpose of the Montreal Protocol?',
      options: ['Reduce global warming', 'Phase out ozone-depleting substances', 'Regulate refrigerant prices', 'Standardize recovery equipment'],
      correctAnswer: 'Phase out ozone-depleting substances',
      explanation: 'The Montreal Protocol is an international treaty designed to phase out the production and use of ozone-depleting substances to protect the stratospheric ozone layer.',
      difficulty: 'easy',
      objective: 'Environmental awareness and regulatory background',
    },
    {
      question: 'Which refrigerant has the highest Ozone Depletion Potential (ODP)?',
      options: ['R-410A', 'R-134a', 'R-12', 'R-32'],
      correctAnswer: 'R-12',
      explanation: 'R-12 is a CFC with an ODP of 1.0, the baseline for measuring ozone depletion. R-410A and R-134a are HFCs with zero ODP.',
      difficulty: 'easy',
      objective: 'Refrigerant classification and environmental impact',
    },
    {
      question: 'What does GWP stand for?',
      options: ['Global Warming Potential', 'Gas Weight Pressure', 'General Working Pressure', 'Greenhouse Warning Protocol'],
      correctAnswer: 'Global Warming Potential',
      explanation: 'GWP measures a refrigerant\'s heat-trapping ability compared to CO2 over a 100-year period.',
      difficulty: 'easy',
      objective: 'Environmental impact assessment',
    },
    {
      question: 'What is the maximum penalty for knowingly venting refrigerants?',
      options: ['$10,000 per violation', '$27,500 per violation', '$44,539 per day', '$100,000 per violation'],
      correctAnswer: '$44,539 per day',
      explanation: 'EPA can fine up to $44,539 per day for knowingly venting refrigerants under Section 608 of the Clean Air Act.',
      difficulty: 'medium',
      objective: 'Regulatory compliance and penalties',
    },
    {
      question: 'How long must refrigerant purchase records be kept?',
      options: ['1 year', '2 years', '3 years', '5 years'],
      correctAnswer: '3 years',
      explanation: 'EPA requires refrigerant records to be maintained for at least 3 years for systems with 50+ lbs charge.',
      difficulty: 'easy',
      objective: 'Recordkeeping requirements',
    },
    {
      question: 'Which recovery method is NOT acceptable for EPA compliance?',
      options: ['Self-contained recovery', 'System-dependent recovery', 'Passive recovery', 'Push-pull recovery'],
      correctAnswer: 'Passive recovery',
      explanation: 'Passive recovery (gravity method) does not meet EPA requirements. Active recovery using certified equipment is required.',
      difficulty: 'medium',
      objective: 'Recovery procedures and equipment',
    },
    {
      question: 'What is the required recovery level for high-pressure systems with operating compressors?',
      options: ['0 psig', '4 inches Hg vacuum', '10 inches Hg vacuum', '15 inches Hg vacuum'],
      correctAnswer: '10 inches Hg vacuum',
      explanation: 'High-pressure systems with operating compressors must be recovered to 10 inches Hg vacuum before opening the system.',
      difficulty: 'medium',
      objective: 'Recovery procedures for different system types',
    },
    {
      question: 'What is the maximum liquid fill capacity for recovery cylinders?',
      options: ['60%', '70%', '80%', '90%'],
      correctAnswer: '80%',
      explanation: 'Recovery cylinders must never be filled above 80% liquid capacity to allow for thermal expansion and prevent cylinder rupture.',
      difficulty: 'medium',
      objective: 'Refrigerant storage and handling safety',
    },
    {
      question: 'Which organization certifies recovery equipment to industry standards?',
      options: ['EPA', 'AHRI', 'ASHRAE', 'OSHA'],
      correctAnswer: 'AHRI',
      explanation: 'AHRI (Air-Conditioning, Heating, and Refrigeration Institute) certifies recovery equipment to ARI 740 standards.',
      difficulty: 'hard',
      objective: 'Equipment certification and standards',
    },
    {
      question: 'What is the leak rate threshold requiring repair for comfort cooling systems?',
      options: ['5%', '10%', '20%', '35%'],
      correctAnswer: '10%',
      explanation: 'Comfort cooling systems must repair leaks if the annual leak rate exceeds 10% of the full charge.',
      difficulty: 'hard',
      objective: 'Leak detection and repair requirements',
    },
    {
      question: 'How many ozone molecules can one chlorine atom destroy?',
      options: ['100', '1,000', '10,000', '100,000'],
      correctAnswer: '100,000',
      explanation: 'One chlorine atom can destroy over 100,000 ozone molecules through a catalytic chain reaction, demonstrating the severe impact of CFCs.',
      difficulty: 'hard',
      objective: 'Environmental impact of refrigerants',
    },
    {
      question: 'What is the ODP of HCFC-22?',
      options: ['0', '0.055', '0.5', '1.0'],
      correctAnswer: '0.055',
      explanation: 'HCFC-22 has an ODP of 0.055, significantly lower than CFCs but still contributing to ozone depletion, which is why it is being phased out.',
      difficulty: 'hard',
      objective: 'Refrigerant classification and ODP values',
    },
  ];

  const type1Questions: Question[] = [
    {
      question: 'What is the maximum amount of refrigerant in a small appliance?',
      options: ['5 pounds or less', '10 pounds or less', '15 pounds or less', '20 pounds or less'],
      correctAnswer: '5 pounds or less',
      explanation: 'Small appliances are defined as containing 5 pounds or less of refrigerant under EPA Section 608 regulations.',
      difficulty: 'easy',
      objective: 'Small appliance identification and classification',
    },
    {
      question: 'What recovery level is required for small appliances?',
      options: ['0 psig', '10 inches Hg vacuum', '15 inches Hg vacuum', '29 inches Hg vacuum'],
      correctAnswer: '0 psig',
      explanation: 'Small appliances must be recovered to 0 psig (atmospheric pressure) before disposal. No vacuum is required.',
      difficulty: 'easy',
      objective: 'Recovery requirements for small appliances',
    },
    {
      question: 'Which type of recovery equipment is required for small appliances?',
      options: [
        'Self-contained recovery unit',
        'System-dependent recovery',
        'Passive recovery only',
        'No equipment required',
      ],
      correctAnswer: 'Self-contained recovery unit',
      explanation: 'Small appliances require self-contained (active) recovery equipment that uses its own compressor. Passive recovery is not EPA-compliant.',
      difficulty: 'medium',
      objective: 'Recovery equipment requirements',
    },
    {
      question: 'What must be done before disposing of a small appliance?',
      options: [
        'Recover the refrigerant',
        'Remove the compressor',
        'Drain the oil',
        'Clean the coils',
      ],
      correctAnswer: 'Recover the refrigerant',
      explanation: 'Refrigerant must be recovered to 0 psig before disposal to prevent environmental release and comply with EPA regulations.',
      difficulty: 'easy',
      objective: 'Disposal procedures and environmental protection',
    },
    {
      question: 'Which refrigerant is commonly found in household refrigerators manufactured after 1995?',
      options: ['R-12', 'R-22', 'R-134a', 'R-410A'],
      correctAnswer: 'R-134a',
      explanation: 'R-134a replaced R-12 in household refrigerators after 1995. It is an HFC with zero ODP but has a GWP of 1,430.',
      difficulty: 'medium',
      objective: 'Refrigerant identification in small appliances',
    },
    {
      question: 'What is a common leak location in small appliances?',
      options: ['Compressor terminals', 'Evaporator coils', 'Filter drier connections', 'All of the above'],
      correctAnswer: 'All of the above',
      explanation: 'Common leak locations include compressor terminals (vibration), evaporator coils (corrosion), and filter drier connections (poor brazing).',
      difficulty: 'medium',
      objective: 'Leak detection in small appliances',
    },
    {
      question: 'What safety hazard must be addressed before servicing small appliances?',
      options: ['High voltage', 'Capacitor discharge', 'Refrigerant pressure', 'All of the above'],
      correctAnswer: 'All of the above',
      explanation: 'Small appliances present multiple hazards: high voltage from power supply, capacitor discharge (can be lethal), and refrigerant under pressure.',
      difficulty: 'hard',
      objective: 'Safety procedures for small appliance service',
    },
    {
      question: 'What is the target vacuum level for evacuating a small appliance after repair?',
      options: ['100 microns', '500 microns', '1000 microns', 'No vacuum required'],
      correctAnswer: '500 microns',
      explanation: 'After leak repair, evacuate to 500 microns or below to remove air and moisture. This ensures proper system operation and prevents acid formation.',
      difficulty: 'hard',
      objective: 'Evacuation procedures for small appliances',
    },
    {
      question: 'How long should a vacuum be held to verify no leaks in a small appliance?',
      options: ['5 minutes', '15 minutes', '30 minutes', '1 hour'],
      correctAnswer: '30 minutes',
      explanation: 'Hold vacuum for 30 minutes and monitor for pressure rise. If pressure remains stable, system is leak-free and ready for charging.',
      difficulty: 'medium',
      objective: 'Leak verification procedures',
    },
    {
      question: 'What is the proper method for charging a small appliance?',
      options: ['Vapor charge only', 'Liquid charge only', 'Weigh in exact charge', 'Charge by pressure'],
      correctAnswer: 'Weigh in exact charge',
      explanation: 'Small appliances have critical charges and must be charged by weight to manufacturer specifications. Overcharging or undercharging reduces efficiency.',
      difficulty: 'hard',
      objective: 'Refrigerant charging procedures',
    },
  ];

  const type2Questions: Question[] = [
    {
      question: 'What is the required recovery level for high-pressure systems with a non-functioning compressor?',
      options: ['0 psig', '4 inches Hg vacuum', '10 inches Hg vacuum', '15 inches Hg vacuum'],
      correctAnswer: '0 psig',
      explanation: 'Systems with non-functioning compressors must be recovered to 0 psig. Systems with operating compressors require 10 inches Hg vacuum.',
      difficulty: 'medium',
      objective: 'Recovery requirements for high-pressure systems',
    },
    {
      question: 'Which refrigerant is commonly used in modern residential air conditioning?',
      options: ['R-22', 'R-410A', 'R-12', 'R-502'],
      correctAnswer: 'R-410A',
      explanation: 'R-410A is the current standard for residential AC systems, replacing R-22. It has zero ODP but a GWP of 2,088.',
      difficulty: 'easy',
      objective: 'Refrigerant identification in high-pressure systems',
    },
    {
      question: 'What is the leak rate threshold requiring repair for commercial refrigeration?',
      options: ['10%', '20%', '35%', '50%'],
      correctAnswer: '35%',
      explanation: 'Commercial refrigeration with 50+ lbs must repair if annual leak rate exceeds 35%. Comfort cooling threshold is 10%.',
      difficulty: 'medium',
      objective: 'Leak repair requirements and thresholds',
    },
    {
      question: 'When must leak repairs be verified?',
      options: [
        'Within 14 days',
        'Within 30 days',
        'Within 60 days',
        'Within 90 days',
      ],
      correctAnswer: 'Within 30 days',
      explanation: 'Leak repairs must be completed and verified within 30 days of detection using initial verification test. Follow-up verification required within 12 months.',
      difficulty: 'medium',
      objective: 'Leak repair verification procedures',
    },
    {
      question: 'What is the target vacuum level for proper system evacuation?',
      options: ['100 microns', '500 microns', '1000 microns', '5000 microns'],
      correctAnswer: '500 microns',
      explanation: 'Target vacuum level is 500 microns or below to ensure removal of air and moisture. Use electronic vacuum gauge for accurate measurement.',
      difficulty: 'medium',
      objective: 'Evacuation procedures and standards',
    },
    {
      question: 'What is the push-pull recovery method?',
      options: [
        'Recovering from both high and low sides simultaneously',
        'Liquid line to inlet, vapor line to outlet',
        'Using two recovery machines',
        'Alternating between vapor and liquid recovery',
      ],
      correctAnswer: 'Liquid line to inlet, vapor line to outlet',
      explanation: 'Push-pull method connects liquid line to recovery machine inlet and vapor line to outlet, significantly speeding up recovery process.',
      difficulty: 'hard',
      objective: 'Advanced recovery techniques',
    },
    {
      question: 'What pressure should nitrogen be used for leak testing high-pressure systems?',
      options: ['50 psig', '100 psig', '150 psig', '200 psig'],
      correctAnswer: '150 psig',
      explanation: 'Pressurize to 150 psig with dry nitrogen for leak testing (or system test pressure, whichever is lower). Never exceed manufacturer test pressure.',
      difficulty: 'hard',
      objective: 'Pressure testing procedures',
    },
    {
      question: 'Why is the triple evacuation method recommended?',
      options: [
        'Faster than single evacuation',
        'Required by EPA',
        'More effective at removing moisture',
        'Uses less energy',
      ],
      correctAnswer: 'More effective at removing moisture',
      explanation: 'Triple evacuation (evacuate, break with nitrogen, repeat) is most effective at removing moisture from systems that have been open to atmosphere.',
      difficulty: 'hard',
      objective: 'Advanced evacuation techniques',
    },
    {
      question: 'What indicates a refrigerant leak during vacuum hold test?',
      options: ['Vacuum improves', 'Vacuum stays constant', 'Vacuum rises (pressure increases)', 'Vacuum gauge fails'],
      correctAnswer: 'Vacuum rises (pressure increases)',
      explanation: 'If vacuum rises (pressure increases) during hold test, system has a leak. Stable vacuum indicates leak-free system ready for charging.',
      difficulty: 'medium',
      objective: 'Leak detection and verification',
    },
    {
      question: 'What is the purpose of a filter drier in a refrigeration system?',
      options: [
        'Increase system pressure',
        'Remove moisture and contaminants',
        'Regulate refrigerant flow',
        'Improve compressor efficiency',
      ],
      correctAnswer: 'Remove moisture and contaminants',
      explanation: 'Filter driers remove moisture, acid, and contaminants from refrigerant. Replace after system has been open or contaminated to prevent compressor damage.',
      difficulty: 'medium',
      objective: 'System components and maintenance',
    },
  ];

  const type3Questions: Question[] = [
    {
      question: 'What is the required recovery level for low-pressure systems?',
      options: ['0 psig', '10 inches Hg vacuum', '25mm Hg absolute', '29 inches Hg vacuum'],
      correctAnswer: '25mm Hg absolute',
      explanation: 'Low-pressure systems must be recovered to 25mm Hg absolute (equivalent to 29 inches Hg vacuum) before opening the system.',
      difficulty: 'medium',
      objective: 'Recovery requirements for low-pressure systems',
    },
    {
      question: 'Which type of system is considered low-pressure?',
      options: [
        'Residential air conditioner',
        'Centrifugal chiller',
        'Household refrigerator',
        'Commercial freezer',
      ],
      correctAnswer: 'Centrifugal chiller',
      explanation: 'Centrifugal chillers typically use R-123 and operate at low pressure (below atmospheric pressure in evaporator).',
      difficulty: 'easy',
      objective: 'Low-pressure system identification',
    },
    {
      question: 'What is a common refrigerant used in low-pressure systems?',
      options: ['R-410A', 'R-22', 'R-123', 'R-134a'],
      correctAnswer: 'R-123',
      explanation: 'R-123 is commonly used in low-pressure centrifugal chillers. It is an HCFC with low ODP (0.02) and allows efficient operation at low pressures.',
      difficulty: 'easy',
      objective: 'Refrigerant identification in low-pressure systems',
    },
    {
      question: 'Why are low-pressure systems more prone to air and moisture contamination?',
      options: [
        'They use more refrigerant',
        'They operate below atmospheric pressure',
        'They have larger compressors',
        'They run at higher temperatures',
      ],
      correctAnswer: 'They operate below atmospheric pressure',
      explanation: 'Operating below atmospheric pressure (vacuum) allows air and moisture to enter through leaks rather than refrigerant escaping.',
      difficulty: 'medium',
      objective: 'Low-pressure system characteristics',
    },
    {
      question: 'What is the purpose of a purge unit in low-pressure systems?',
      options: [
        'Increase system pressure',
        'Remove non-condensable gases',
        'Add refrigerant',
        'Cool the condenser',
      ],
      correctAnswer: 'Remove non-condensable gases',
      explanation: 'Purge units automatically remove non-condensable gases (air) that accumulate in low-pressure systems, maintaining efficiency.',
      difficulty: 'medium',
      objective: 'Purge unit operation and purpose',
    },
    {
      question: 'What is the maximum pressure for leak testing low-pressure systems with nitrogen?',
      options: ['10 psig', '50 psig', '100 psig', '150 psig'],
      correctAnswer: '10 psig',
      explanation: 'Low-pressure systems have lower test pressures than high-pressure systems. Typically pressurize to 10 psig maximum to avoid damage.',
      difficulty: 'hard',
      objective: 'Pressure testing procedures for low-pressure systems',
    },
    {
      question: 'What is the ASHRAE safety classification for R-123?',
      options: ['A1', 'A2', 'B1', 'B2'],
      correctAnswer: 'B1',
      explanation: 'R-123 is classified as B1: higher toxicity (B) but non-flammable (1). Requires refrigerant monitors and adequate ventilation.',
      difficulty: 'hard',
      objective: 'Refrigerant safety classifications',
    },
    {
      question: 'What is the recommended ventilation rate for R-123 mechanical rooms?',
      options: ['0.25 cfm/sq ft', '0.5 cfm/sq ft', '1.0 cfm/sq ft', '2.0 cfm/sq ft'],
      correctAnswer: '0.5 cfm/sq ft',
      explanation: 'Mechanical rooms with R-123 require minimum 0.5 cfm per square foot ventilation to maintain safe air quality.',
      difficulty: 'hard',
      objective: 'Safety requirements for low-pressure systems',
    },
    {
      question: 'How often should a properly maintained low-pressure system purge?',
      options: ['Every hour', '4 times per day', 'Once per day', 'Once per week'],
      correctAnswer: '4 times per day',
      explanation: 'A leak-free, properly maintained low-pressure system should purge no more than 4 times per day. Frequent purging indicates leaks.',
      difficulty: 'medium',
      objective: 'System maintenance and leak detection',
    },
    {
      question: 'What is the typical approach temperature for a properly operating condenser?',
      options: ['1-2°F', '2-4°F', '5-7°F', '8-10°F'],
      correctAnswer: '2-4°F',
      explanation: 'Approach temperature (difference between leaving water temp and condensing temp) should be 2-4°F. Higher values indicate fouled tubes or poor water flow.',
      difficulty: 'hard',
      objective: 'Condenser performance and maintenance',
    },
  ];

  const universalQuestions: Question[] = [
    ...coreQuestions.slice(0, 3),
    ...type1Questions.slice(0, 2),
    ...type2Questions.slice(0, 3),
    ...type3Questions.slice(0, 2),
  ];

  const questions = {
    core: coreQuestions,
    type1: type1Questions,
    type2: type2Questions,
    type3: type3Questions,
    universal: universalQuestions,
  };

  return questions[certType as keyof typeof questions];
}
