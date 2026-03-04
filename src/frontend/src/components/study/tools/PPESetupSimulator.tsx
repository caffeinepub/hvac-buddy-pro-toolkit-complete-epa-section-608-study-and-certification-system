import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  AlertTriangle,
  CheckCircle2,
  Info,
  ShieldCheck,
  X,
} from "lucide-react";
import { useState } from "react";

interface PPESetupSimulatorProps {
  studyMode: { __kind__: "beginner" | "expert" };
}

type PPEItem = {
  id: string;
  name: string;
  required: boolean;
  category: "head" | "eyes" | "hands" | "body" | "feet" | "respiratory";
  description: string;
};

export default function PPESetupSimulator({
  studyMode,
}: PPESetupSimulatorProps) {
  const [scenario, setScenario] = useState<
    "refrigerant" | "electrical" | "brazing" | "general"
  >("refrigerant");
  const [selectedPPE, setSelectedPPE] = useState<Set<string>>(new Set());
  const [showResults, setShowResults] = useState(false);

  const isBeginner = studyMode.__kind__ === "beginner";

  const ppeItems: Record<string, PPEItem[]> = {
    refrigerant: [
      {
        id: "safety-glasses",
        name: "Safety Glasses",
        required: true,
        category: "eyes",
        description: "Protects eyes from refrigerant spray",
      },
      {
        id: "gloves-nitrile",
        name: "Nitrile Gloves",
        required: true,
        category: "hands",
        description: "Chemical-resistant hand protection",
      },
      {
        id: "long-sleeves",
        name: "Long Sleeve Shirt",
        required: true,
        category: "body",
        description: "Protects skin from refrigerant contact",
      },
      {
        id: "closed-toe",
        name: "Closed-Toe Shoes",
        required: true,
        category: "feet",
        description: "Protects feet from spills and drops",
      },
      {
        id: "respirator",
        name: "Respirator",
        required: false,
        category: "respiratory",
        description: "For confined spaces or poor ventilation",
      },
      {
        id: "hard-hat",
        name: "Hard Hat",
        required: false,
        category: "head",
        description: "Not typically required for refrigerant work",
      },
      {
        id: "face-shield",
        name: "Face Shield",
        required: false,
        category: "eyes",
        description: "Extra protection for large systems",
      },
    ],
    electrical: [
      {
        id: "safety-glasses",
        name: "Safety Glasses",
        required: true,
        category: "eyes",
        description: "Arc flash protection",
      },
      {
        id: "gloves-insulated",
        name: "Insulated Gloves",
        required: true,
        category: "hands",
        description: "Electrical shock protection",
      },
      {
        id: "long-sleeves",
        name: "Long Sleeve Shirt",
        required: true,
        category: "body",
        description: "Arc flash protection",
      },
      {
        id: "closed-toe",
        name: "Insulated Boots",
        required: true,
        category: "feet",
        description: "Electrical shock protection",
      },
      {
        id: "hard-hat",
        name: "Hard Hat",
        required: false,
        category: "head",
        description: "Overhead hazard protection",
      },
      {
        id: "face-shield",
        name: "Face Shield",
        required: false,
        category: "eyes",
        description: "Arc flash protection for high voltage",
      },
      {
        id: "gloves-nitrile",
        name: "Nitrile Gloves",
        required: false,
        category: "hands",
        description: "Not suitable for electrical work",
      },
    ],
    brazing: [
      {
        id: "welding-goggles",
        name: "Welding Goggles",
        required: true,
        category: "eyes",
        description: "Protects from UV and infrared light",
      },
      {
        id: "gloves-leather",
        name: "Leather Gloves",
        required: true,
        category: "hands",
        description: "Heat and spark protection",
      },
      {
        id: "long-sleeves",
        name: "Flame-Resistant Shirt",
        required: true,
        category: "body",
        description: "Protects from sparks and heat",
      },
      {
        id: "closed-toe",
        name: "Leather Boots",
        required: true,
        category: "feet",
        description: "Protects from hot metal and sparks",
      },
      {
        id: "respirator",
        name: "Respirator",
        required: true,
        category: "respiratory",
        description: "Protects from brazing fumes",
      },
      {
        id: "safety-glasses",
        name: "Safety Glasses",
        required: false,
        category: "eyes",
        description: "Not sufficient for brazing",
      },
      {
        id: "gloves-nitrile",
        name: "Nitrile Gloves",
        required: false,
        category: "hands",
        description: "Not heat-resistant",
      },
    ],
    general: [
      {
        id: "safety-glasses",
        name: "Safety Glasses",
        required: true,
        category: "eyes",
        description: "Basic eye protection",
      },
      {
        id: "gloves-work",
        name: "Work Gloves",
        required: true,
        category: "hands",
        description: "General hand protection",
      },
      {
        id: "closed-toe",
        name: "Steel-Toe Boots",
        required: true,
        category: "feet",
        description: "Foot protection from falling objects",
      },
      {
        id: "long-sleeves",
        name: "Long Sleeve Shirt",
        required: false,
        category: "body",
        description: "Additional skin protection",
      },
      {
        id: "hard-hat",
        name: "Hard Hat",
        required: false,
        category: "head",
        description: "For overhead work",
      },
    ],
  };

  const currentScenario = ppeItems[scenario];
  const requiredItems = currentScenario.filter((item) => item.required);
  const _optionalItems = currentScenario.filter((item) => !item.required);

  const togglePPE = (id: string) => {
    const newSelected = new Set(selectedPPE);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedPPE(newSelected);
    setShowResults(false);
  };

  const checkSetup = () => {
    setShowResults(true);
  };

  const resetSetup = () => {
    setSelectedPPE(new Set());
    setShowResults(false);
  };

  const getResults = () => {
    const requiredSelected = requiredItems.filter((item) =>
      selectedPPE.has(item.id),
    );
    const requiredMissing = requiredItems.filter(
      (item) => !selectedPPE.has(item.id),
    );
    const incorrectSelected = Array.from(selectedPPE)
      .map((id) => currentScenario.find((item) => item.id === id))
      .filter(
        (item) =>
          item &&
          !item.required &&
          item.description.toLowerCase().includes("not"),
      );

    const score = (requiredSelected.length / requiredItems.length) * 100;
    const isPerfect =
      requiredMissing.length === 0 && incorrectSelected.length === 0;

    return {
      requiredSelected,
      requiredMissing,
      incorrectSelected,
      score,
      isPerfect,
    };
  };

  const results = showResults ? getResults() : null;

  const scenarioDescriptions = {
    refrigerant:
      "Recovering refrigerant from a residential AC system. Potential hazards: refrigerant spray, frostbite, chemical exposure.",
    electrical:
      "Testing electrical components with multimeter. Potential hazards: electrical shock, arc flash, burns.",
    brazing:
      "Brazing copper refrigerant lines. Potential hazards: burns, UV exposure, toxic fumes, fire.",
    general:
      "General HVAC maintenance and inspection. Potential hazards: cuts, scrapes, falling objects.",
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-primary" />
          PPE Setup Simulator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {isBeginner && (
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              Personal Protective Equipment (PPE) is essential for HVAC work.
              Different tasks require different protection. Select the
              appropriate PPE for each scenario to ensure safety compliance.
            </AlertDescription>
          </Alert>
        )}

        <div className="space-y-2">
          <Label className="text-base font-semibold">
            Select Work Scenario
          </Label>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
            {(["refrigerant", "electrical", "brazing", "general"] as const).map(
              (s) => (
                <Button
                  key={s}
                  variant={scenario === s ? "default" : "outline"}
                  onClick={() => {
                    setScenario(s);
                    setSelectedPPE(new Set());
                    setShowResults(false);
                  }}
                  className="capitalize"
                >
                  {s}
                </Button>
              ),
            )}
          </div>
        </div>

        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2">Scenario Description</h4>
            <p className="text-sm text-muted-foreground">
              {scenarioDescriptions[scenario]}
            </p>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h4 className="font-semibold">Select Your PPE</h4>
          <div className="grid gap-3 md:grid-cols-2">
            {currentScenario.map((item) => {
              const isSelected = selectedPPE.has(item.id);
              const isIncorrect =
                showResults &&
                results &&
                results.incorrectSelected.some((i) => i?.id === item.id);
              const isMissing =
                showResults &&
                results &&
                results.requiredMissing.some((i) => i.id === item.id);

              return (
                <Card
                  key={item.id}
                  className={`cursor-pointer transition-all ${
                    isSelected ? "border-primary bg-primary/5" : ""
                  } ${isIncorrect ? "border-red-500 bg-red-500/10" : ""} ${
                    isMissing ? "border-yellow-500 bg-yellow-500/10" : ""
                  }`}
                  onClick={() => togglePPE(item.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        checked={isSelected}
                        onCheckedChange={() => togglePPE(item.id)}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold">{item.name}</h4>
                          {item.required && (
                            <Badge variant="destructive" className="text-xs">
                              Required
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.description}
                        </p>
                        {isIncorrect && (
                          <div className="flex items-center gap-1 mt-2 text-red-600 text-sm">
                            <X className="h-3 w-3" />
                            <span>Incorrect for this scenario</span>
                          </div>
                        )}
                        {isMissing && (
                          <div className="flex items-center gap-1 mt-2 text-yellow-600 text-sm">
                            <AlertTriangle className="h-3 w-3" />
                            <span>Required - not selected</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="flex gap-2">
          <Button onClick={checkSetup} className="flex-1">
            <CheckCircle2 className="mr-2 h-4 w-4" />
            Check My Setup
          </Button>
          <Button onClick={resetSetup} variant="outline">
            Reset
          </Button>
        </div>

        {showResults && results && (
          <Card
            className={`border-2 ${
              results.isPerfect
                ? "border-green-500 bg-green-500/10"
                : results.score >= 70
                  ? "border-yellow-500 bg-yellow-500/10"
                  : "border-red-500 bg-red-500/10"
            }`}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {results.isPerfect ? (
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                  ) : (
                    <AlertTriangle className="h-10 w-10 text-yellow-600" />
                  )}
                  <div>
                    <div className="text-2xl font-bold">
                      {results.score.toFixed(0)}%
                    </div>
                    <Badge variant="outline">
                      {results.isPerfect
                        ? "Perfect Setup"
                        : results.score >= 70
                          ? "Needs Improvement"
                          : "Unsafe"}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {results.requiredMissing.length > 0 && (
                  <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Missing Required PPE:</strong>
                      <ul className="list-disc list-inside mt-1">
                        {results.requiredMissing.map((item) => (
                          <li key={item.id}>{item.name}</li>
                        ))}
                      </ul>
                    </AlertDescription>
                  </Alert>
                )}

                {results.incorrectSelected.length > 0 && (
                  <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Incorrect PPE Selected:</strong>
                      <ul className="list-disc list-inside mt-1">
                        {results.incorrectSelected.map(
                          (item) =>
                            item && (
                              <li key={item.id}>
                                {item.name} - {item.description}
                              </li>
                            ),
                        )}
                      </ul>
                    </AlertDescription>
                  </Alert>
                )}

                {results.isPerfect && (
                  <Alert className="border-green-500/50 bg-green-500/10">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <AlertDescription>
                      <strong>Excellent!</strong> You've selected all required
                      PPE and avoided incorrect items. This setup meets safety
                      standards for {scenario} work.
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {isBeginner && (
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">PPE Safety Guidelines</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Always inspect PPE before use for damage or wear</li>
                <li>Replace damaged or expired PPE immediately</li>
                <li>Ensure proper fit - loose PPE is ineffective</li>
                <li>Never remove PPE while hazard is present</li>
                <li>Follow manufacturer instructions for care and storage</li>
                <li>Employer must provide appropriate PPE at no cost</li>
              </ul>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
}

function Label({
  children,
  className,
}: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`text-sm font-medium ${className || ""}`}>{children}</span>
  );
}
