import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2, XCircle, Calculator } from 'lucide-react';
import type { StudyMode } from '../../types/study';

interface HandsOnExercisesProps {
  studyMode: StudyMode;
}

type Exercise = 'deltaT' | 'superheat' | 'subcooling' | 'airflow';

export default function HandsOnExercises({ studyMode }: HandsOnExercisesProps) {
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

  const exercises = [
    {
      id: 'deltaT' as const,
      title: 'Delta T Calculation',
      description: 'Practice calculating temperature difference across the evaporator coil',
    },
    {
      id: 'superheat' as const,
      title: 'Superheat Measurement',
      description: 'Learn to measure and calculate superheat for proper refrigerant charge',
    },
    {
      id: 'subcooling' as const,
      title: 'Subcooling Calculation',
      description: 'Practice subcooling calculations for condenser performance',
    },
    {
      id: 'airflow' as const,
      title: 'Airflow Assessment',
      description: 'Calculate CFM and assess airflow adequacy',
    },
  ];

  if (selectedExercise) {
    return (
      <div className="space-y-4">
        <Button variant="outline" size="sm" onClick={() => setSelectedExercise(null)}>
          ← Back to Exercises
        </Button>
        <ExerciseContent exerciseId={selectedExercise} studyMode={studyMode} />
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {exercises.map((exercise) => (
        <Card key={exercise.id} className="transition-all hover:shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Calculator className="h-4 w-4 text-primary" />
              {exercise.title}
            </CardTitle>
            <CardDescription className="text-sm">{exercise.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => setSelectedExercise(exercise.id)} size="sm" className="w-full">
              Start Exercise
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function ExerciseContent({ exerciseId, studyMode }: { exerciseId: Exercise; studyMode: StudyMode }) {
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [result, setResult] = useState<{ value: number; correct: boolean } | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const isBeginner = studyMode.__kind__ === 'beginner';

  const exercises = {
    deltaT: {
      title: 'Delta T Calculation Exercise',
      instruction: 'Calculate the temperature difference (Delta T) across the evaporator coil.',
      fields: [
        { name: 'returnTemp', label: 'Return Air Temperature (°F)', hint: 'Temperature of air entering the system' },
        { name: 'supplyTemp', label: 'Supply Air Temperature (°F)', hint: 'Temperature of air leaving the system' },
      ],
      calculate: (vals: Record<string, string>) => {
        const returnTemp = parseFloat(vals.returnTemp);
        const supplyTemp = parseFloat(vals.supplyTemp);
        const deltaT = returnTemp - supplyTemp;
        const correct = deltaT >= 14 && deltaT <= 22;
        return { value: deltaT, correct };
      },
      feedback: {
        correct: 'Excellent! Delta T is within the normal range of 14-22°F for proper cooling.',
        incorrect: 'Delta T should typically be between 14-22°F. Values outside this range may indicate issues.',
      },
      example: 'Example: Return 75°F, Supply 55°F → Delta T = 20°F (Good)',
    },
    superheat: {
      title: 'Superheat Calculation Exercise',
      instruction: 'Calculate superheat to verify proper refrigerant charge.',
      fields: [
        { name: 'suctionTemp', label: 'Suction Line Temperature (°F)', hint: 'Temperature at compressor suction' },
        { name: 'saturationTemp', label: 'Saturation Temperature (°F)', hint: 'From pressure-temperature chart' },
      ],
      calculate: (vals: Record<string, string>) => {
        const suctionTemp = parseFloat(vals.suctionTemp);
        const saturationTemp = parseFloat(vals.saturationTemp);
        const superheat = suctionTemp - saturationTemp;
        const correct = superheat >= 8 && superheat <= 12;
        return { value: superheat, correct };
      },
      feedback: {
        correct: 'Perfect! Superheat is within the typical range of 8-12°F for proper charge.',
        incorrect: 'Superheat should typically be 8-12°F. Low superheat may indicate overcharge, high may indicate undercharge.',
      },
      example: 'Example: Suction 50°F, Saturation 40°F → Superheat = 10°F (Good)',
    },
    subcooling: {
      title: 'Subcooling Calculation Exercise',
      instruction: 'Calculate subcooling to assess condenser performance.',
      fields: [
        { name: 'condensingTemp', label: 'Condensing Temperature (°F)', hint: 'From high-side pressure chart' },
        { name: 'liquidTemp', label: 'Liquid Line Temperature (°F)', hint: 'Temperature at condenser outlet' },
      ],
      calculate: (vals: Record<string, string>) => {
        const condensingTemp = parseFloat(vals.condensingTemp);
        const liquidTemp = parseFloat(vals.liquidTemp);
        const subcooling = condensingTemp - liquidTemp;
        const correct = subcooling >= 10 && subcooling <= 15;
        return { value: subcooling, correct };
      },
      feedback: {
        correct: 'Great! Subcooling is within the normal range of 10-15°F.',
        incorrect: 'Subcooling should typically be 10-15°F. Low subcooling may indicate undercharge or airflow issues.',
      },
      example: 'Example: Condensing 120°F, Liquid 108°F → Subcooling = 12°F (Good)',
    },
    airflow: {
      title: 'Airflow Calculation Exercise',
      instruction: 'Calculate CFM to verify adequate airflow for the system.',
      fields: [
        { name: 'btuCapacity', label: 'System Capacity (BTU/hr)', hint: 'Rated cooling capacity' },
        { name: 'deltaT', label: 'Temperature Difference (°F)', hint: 'Return minus supply temperature' },
      ],
      calculate: (vals: Record<string, string>) => {
        const btuCapacity = parseFloat(vals.btuCapacity);
        const deltaT = parseFloat(vals.deltaT);
        const cfm = btuCapacity / (1.08 * deltaT);
        const expectedCfm = btuCapacity / 12000 * 400;
        const correct = Math.abs(cfm - expectedCfm) / expectedCfm < 0.15;
        return { value: Math.round(cfm), correct };
      },
      feedback: {
        correct: 'Excellent! Airflow is adequate for the system capacity (approximately 400 CFM per ton).',
        incorrect: 'Airflow should be approximately 400 CFM per ton of cooling. Check for restrictions or fan issues.',
      },
      example: 'Example: 24,000 BTU/hr, 20°F ΔT → CFM = 24,000/(1.08×20) = 1,111 CFM',
    },
  };

  const exercise = exercises[exerciseId];

  const handleCalculate = () => {
    const result = exercise.calculate(inputs);
    setResult(result);
    setShowFeedback(true);
  };

  const handleReset = () => {
    setInputs({});
    setResult(null);
    setShowFeedback(false);
  };

  const allFieldsFilled = exercise.fields.every((field) => inputs[field.name]?.trim());

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{exercise.title}</CardTitle>
        <CardDescription>{exercise.instruction}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {isBeginner && (
          <Alert>
            <AlertDescription>
              <strong>Tip:</strong> {exercise.example}
            </AlertDescription>
          </Alert>
        )}

        <div className="space-y-4">
          {exercise.fields.map((field) => (
            <div key={field.name} className="space-y-2">
              <Label htmlFor={field.name}>{field.label}</Label>
              <Input
                id={field.name}
                type="number"
                step="0.1"
                value={inputs[field.name] || ''}
                onChange={(e) => setInputs({ ...inputs, [field.name]: e.target.value })}
                placeholder={field.hint}
              />
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <Button onClick={handleCalculate} disabled={!allFieldsFilled} className="flex-1">
            <Calculator className="mr-2 h-4 w-4" />
            Calculate
          </Button>
          <Button onClick={handleReset} variant="outline">
            Reset
          </Button>
        </div>

        {showFeedback && result && (
          <Alert className={result.correct ? 'border-green-500' : 'border-yellow-500'}>
            <div className="flex items-start gap-2">
              {result.correct ? (
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-500" />
              ) : (
                <XCircle className="h-5 w-5 flex-shrink-0 text-yellow-500" />
              )}
              <div className="flex-1">
                <p className="font-semibold">
                  Result: {result.value}
                  {exerciseId === 'airflow' ? ' CFM' : '°F'}
                </p>
                <AlertDescription className="mt-1">
                  {result.correct ? exercise.feedback.correct : exercise.feedback.incorrect}
                </AlertDescription>
              </div>
            </div>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
