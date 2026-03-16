import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetVideos } from "@/hooks/useQueries";
import { VideoCategory } from "@/types/local";
import {
  AlertTriangle,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  Info,
  Lightbulb,
  List,
  PlayCircle,
  Shield,
} from "lucide-react";
import { useState } from "react";
import type { StudyMode } from "../../types/study";

interface LessonModule {
  id: string;
  title: string;
  theory: string;
  concepts: string[];
  safetyRules: string[];
  realWorldExamples: string[];
  keyTerms: { term: string; definition: string }[];
  diagrams: { src: string; caption: string; alt: string }[];
  practiceScenarios: {
    scenario: string;
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
    difficulty: "easy" | "medium" | "hard";
  }[];
}

interface EPA608LessonModuleProps {
  section: "core" | "type1" | "type2" | "type3" | "universal";
  moduleId: string;
  studyMode: StudyMode;
  onComplete?: () => void;
}

function isPlaylist(url: string): boolean {
  return url.includes("playlist?list=");
}

interface VideoLinkButtonProps {
  title: string;
  url: string;
  description?: string;
}

function VideoLinkButton({ title, url, description }: VideoLinkButtonProps) {
  const isPlaylistLink = isPlaylist(url);

  return (
    <div className="space-y-2">
      <div className="rounded-lg border bg-card p-4">
        <div className="flex items-start gap-3 mb-3">
          {isPlaylistLink ? (
            <List className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
          ) : (
            <PlayCircle className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
          )}
          <div className="flex-1">
            <h4 className="font-semibold text-sm mb-1">{title}</h4>
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>
        </div>
        <Button asChild className="w-full" variant="default">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            {isPlaylistLink ? "Open Playlist" : "Watch Video"}
          </a>
        </Button>
      </div>
    </div>
  );
}

export default function EPA608LessonModule({
  section,
  moduleId,
  studyMode,
  onComplete,
}: EPA608LessonModuleProps) {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const isBeginner = studyMode.__kind__ === "beginner";
  const lesson = getLessonModule(section, moduleId);
  const { data: allVideos = [] } = useGetVideos();

  // Get relevant videos for this section
  const topicKeywordMap: Record<string, string> = {
    core: "EPA Core",
    type1: "Type I",
    type2: "Type II",
    type3: "Type III",
    universal: "EPA",
  };
  const keyword = topicKeywordMap[section] ?? "EPA";
  const sectionVideos = allVideos.filter(
    (v) =>
      v.category === VideoCategory.epa608Prep &&
      v.linkedLessonTopic.includes(keyword),
  );

  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    if (isBeginner) {
      setShowExplanation(true);
    }
  };

  const handleNextScenario = () => {
    if (currentScenario < lesson.practiceScenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else if (onComplete) {
      onComplete();
    }
  };

  const currentPractice = lesson.practiceScenarios[currentScenario];
  const isCorrect = selectedAnswer === currentPractice?.correctAnswer;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            {lesson.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="theory" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="theory">Theory</TabsTrigger>
              <TabsTrigger value="safety">Safety</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
              <TabsTrigger value="terms">Key Terms</TabsTrigger>
              <TabsTrigger value="practice">Practice</TabsTrigger>
            </TabsList>

            <TabsContent value="theory" className="space-y-4 pt-4">
              {isBeginner && (
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    Take your time to understand each concept. This material is
                    essential for EPA 608 certification.
                  </AlertDescription>
                </Alert>
              )}

              {/* Video Link Buttons */}
              {sectionVideos.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <PlayCircle className="h-5 w-5 text-primary" />
                    Related Educational Videos
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {sectionVideos.slice(0, 2).map((video) => (
                      <VideoLinkButton
                        key={video.id.toString()}
                        title={video.title}
                        url={video.url}
                        description={video.description}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="prose prose-sm dark:prose-invert max-w-none">
                <h3 className="text-lg font-semibold">Theory and Concepts</h3>
                <p className="text-muted-foreground">{lesson.theory}</p>

                <div className="mt-4 space-y-3">
                  {lesson.concepts.map((concept, idx) => (
                    <div
                      // biome-ignore lint/suspicious/noArrayIndexKey: concepts are static and order-stable
                      key={`concept-${idx}`}
                      className="rounded-lg border bg-muted/50 p-3"
                    >
                      <p className="text-sm">{concept}</p>
                    </div>
                  ))}
                </div>

                {lesson.diagrams.length > 0 && (
                  <div className="mt-6 space-y-4">
                    <h4 className="text-base font-semibold">
                      Visual Learning Aids
                    </h4>
                    {lesson.diagrams.map((diagram, idx) => (
                      <div
                        // biome-ignore lint/suspicious/noArrayIndexKey: diagrams are static and order-stable
                        key={`diagram-${idx}`}
                        className="space-y-2"
                      >
                        <img
                          src={diagram.src}
                          alt={diagram.alt}
                          className="h-64 w-full rounded-lg border object-contain"
                        />
                        <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                          <p className="text-sm font-medium text-primary flex items-center gap-2">
                            <Lightbulb className="h-4 w-4" />
                            Diagram Guide:
                          </p>
                          <p className="mt-1 text-sm text-foreground">
                            {diagram.caption}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="safety" className="space-y-4 pt-4">
              <Alert className="border-yellow-500/50 bg-yellow-500/10">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <AlertDescription className="text-yellow-900 dark:text-yellow-100">
                  Safety is paramount. Always follow proper procedures and use
                  appropriate protective equipment.
                </AlertDescription>
              </Alert>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Safety Rules and Best Practices
                </h3>
                {lesson.safetyRules.map((rule, idx) => (
                  <Card
                    // biome-ignore lint/suspicious/noArrayIndexKey: rules are static and order-stable
                    key={`rule-${idx}`}
                    className="border-yellow-500/30"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500/20 text-sm font-bold text-yellow-700">
                          {idx + 1}
                        </div>
                        <p className="text-sm">{rule}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="examples" className="space-y-4 pt-4">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">
                  Real-World HVAC Examples
                </h3>
                <p className="text-sm text-muted-foreground">
                  These examples connect theory to practical field applications
                  and diagnostic workflows.
                </p>
                {lesson.realWorldExamples.map((example, idx) => (
                  <Card
                    // biome-ignore lint/suspicious/noArrayIndexKey: examples are static and order-stable
                    key={`example-${idx}`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                        <p className="text-sm">{example}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="terms" className="space-y-4 pt-4">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">
                  Key Terms and Definitions
                </h3>
                {lesson.keyTerms.map((term, idx) => (
                  <Card
                    // biome-ignore lint/suspicious/noArrayIndexKey: terms are static and order-stable
                    key={`term-${idx}`}
                  >
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-primary">
                        {term.term}
                      </h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {term.definition}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="practice" className="space-y-4 pt-4">
              {currentPractice && (
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">
                        Scenario-Based Practice
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">
                          {currentPractice.difficulty}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {currentScenario + 1} of{" "}
                          {lesson.practiceScenarios.length}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg bg-muted/50 p-4">
                      <p className="text-sm font-medium">Scenario:</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {currentPractice.scenario}
                      </p>
                    </div>

                    <div>
                      <p className="mb-3 font-medium">
                        {currentPractice.question}
                      </p>
                      <div className="space-y-2">
                        {currentPractice.options.map((option, idx) => (
                          <button
                            type="button"
                            // biome-ignore lint/suspicious/noArrayIndexKey: options are static and order-stable
                            key={`practice-option-${idx}`}
                            onClick={() => handleAnswerSelect(option)}
                            className={`w-full rounded-lg border p-3 text-left text-sm transition-colors ${
                              selectedAnswer === option
                                ? "border-primary bg-primary/10"
                                : "hover:bg-muted/50"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    {showExplanation && selectedAnswer && (
                      <Alert
                        className={
                          isCorrect ? "border-green-500" : "border-yellow-500"
                        }
                      >
                        <div className="flex items-start gap-2">
                          {isCorrect ? (
                            <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-500" />
                          ) : (
                            <AlertTriangle className="h-5 w-5 flex-shrink-0 text-yellow-500" />
                          )}
                          <div>
                            <p className="font-semibold">
                              {isCorrect ? "Correct!" : "Incorrect"}
                            </p>
                            <AlertDescription className="mt-1">
                              <strong>Explanation:</strong>{" "}
                              {currentPractice.explanation}
                            </AlertDescription>
                            {!isCorrect && (
                              <AlertDescription className="mt-2">
                                <strong>Correct Answer:</strong>{" "}
                                {currentPractice.correctAnswer}
                              </AlertDescription>
                            )}
                          </div>
                        </div>
                      </Alert>
                    )}

                    <Button
                      onClick={handleNextScenario}
                      disabled={!selectedAnswer}
                      className="w-full"
                    >
                      {currentScenario < lesson.practiceScenarios.length - 1
                        ? "Next Scenario"
                        : "Complete Lesson"}
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

function getLessonModule(
  section: string,
  moduleId: string,
): LessonModule | null {
  const modules: Record<string, Record<string, LessonModule>> = {
    core: {
      "ozone-depletion": {
        id: "ozone-depletion",
        title: "Module 1: Ozone Depletion and Environmental Impact",
        theory:
          "The stratospheric ozone layer, located 10-30 miles above Earth, protects life from harmful ultraviolet (UV) radiation. Ozone (O3) molecules absorb UV-B and UV-C radiation, preventing it from reaching the surface. When CFCs and HCFCs are released into the atmosphere, they eventually reach the stratosphere where UV radiation breaks them apart, releasing chlorine atoms. These chlorine atoms catalytically destroy ozone molecules through a chain reaction, with one chlorine atom capable of destroying over 100,000 ozone molecules before being removed from the stratosphere.",
        concepts: [
          "Stratospheric ozone layer formation: Oxygen molecules (O2) are split by UV radiation into individual oxygen atoms, which then combine with other O2 molecules to form ozone (O3).",
          "Ozone depletion mechanism: CFCs release chlorine atoms in the stratosphere. Chlorine reacts with ozone (Cl + O3 → ClO + O2), then ClO reacts with oxygen atoms (ClO + O → Cl + O2), regenerating chlorine to continue the cycle.",
          "Antarctic ozone hole: Discovered in 1985, this seasonal thinning of the ozone layer over Antarctica demonstrated the severity of CFC damage. Polar stratospheric clouds enhance ozone destruction.",
          "Montreal Protocol success: International cooperation has led to 98% reduction in ODS production, with ozone layer expected to recover to 1980 levels by 2060-2070.",
        ],
        safetyRules: [
          "Never knowingly vent refrigerants containing CFCs, HCFCs, or HFCs - violates Clean Air Act with penalties up to $44,539 per day per violation.",
          "Use only EPA-certified recovery equipment meeting AHRI 740 standards to ensure proper refrigerant capture.",
          "Wear UV-protective clothing and sunscreen when working outdoors - increased UV exposure from ozone depletion raises skin cancer risk.",
          "Store recovered refrigerants in DOT-approved cylinders with proper labeling to prevent environmental release.",
          "Report any large refrigerant releases immediately to facility management and follow emergency response procedures.",
        ],
        realWorldExamples: [
          "Supermarket refrigeration leak scenario: A 200-lb R-404A system with a 40% annual leak rate must be repaired under EPA regulations. The leak releases refrigerant equivalent to 166,000 lbs of CO2 in global warming impact, demonstrating why leak repair is critical.",
          "Residential AC replacement: When replacing an old R-22 system, proper recovery prevents release of refrigerant with ODP of 0.055. Recovering 10 lbs of R-22 prevents destruction of approximately 550,000 lbs of ozone.",
          "Chiller retrofit project: Converting a 500-lb R-123 chiller to lower-GWP refrigerant requires complete recovery and proper disposal, preventing both ozone depletion and climate impact.",
          "Mobile AC service: Recovering R-134a from vehicle AC systems prevents release of refrigerant with GWP of 1,430, equivalent to 14.3 lbs of CO2 per pound of refrigerant.",
        ],
        keyTerms: [
          {
            term: "Stratosphere",
            definition:
              "Layer of Earth's atmosphere extending from about 10 to 30 miles above the surface, where the ozone layer is located. Temperature increases with altitude in this layer.",
          },
          {
            term: "Ozone Depletion Potential (ODP)",
            definition:
              "Measure of a substance's ability to destroy stratospheric ozone relative to CFC-11 (baseline of 1.0). CFCs have ODP of 0.6-1.0, HCFCs 0.01-0.1, HFCs have zero ODP.",
          },
          {
            term: "Global Warming Potential (GWP)",
            definition:
              "Measure of heat-trapping ability compared to CO2 over 100 years. R-410A has GWP of 2,088, meaning it traps 2,088 times more heat than CO2.",
          },
          {
            term: "Montreal Protocol",
            definition:
              "International treaty signed in 1987 to phase out production and use of ozone-depleting substances. Considered the most successful environmental agreement in history.",
          },
          {
            term: "Chlorofluorocarbons (CFCs)",
            definition:
              "Fully halogenated refrigerants like R-12 and R-502 with highest ODP (0.6-1.0). Production banned since 1996, but still found in older equipment.",
          },
          {
            term: "Hydrochlorofluorocarbons (HCFCs)",
            definition:
              "Partially halogenated refrigerants like R-22 with lower ODP (0.01-0.1). Being phased out - no new production after 2020, but reclaimed R-22 still available.",
          },
        ],
        diagrams: [
          {
            src: "/assets/generated/epa-core-ozone-depletion-diagram.dim_800x600.png",
            caption:
              "Ozone depletion cycle showing how chlorine atoms from CFCs catalytically destroy ozone molecules. One chlorine atom can destroy over 100,000 ozone molecules through repeated reactions.",
            alt: "Diagram showing ozone depletion mechanism with chlorine atoms",
          },
        ],
        practiceScenarios: [
          {
            scenario:
              "You are servicing a commercial refrigeration system that uses R-404A. The system has a full charge of 150 lbs and requires 60 lbs of refrigerant added annually.",
            question:
              "What is the annual leak rate, and does it require repair under EPA regulations?",
            options: [
              "40% leak rate - repair required for commercial refrigeration",
              "40% leak rate - no repair required",
              "60% leak rate - repair required",
              "25% leak rate - no repair required",
            ],
            correctAnswer:
              "40% leak rate - repair required for commercial refrigeration",
            explanation:
              "Annual leak rate = (60 lbs added / 150 lbs full charge) × 100% = 40%. Commercial refrigeration systems must repair leaks exceeding 35% annual rate. This system exceeds the threshold and requires repair within 30 days.",
            difficulty: "medium",
          },
          {
            scenario:
              "A customer asks why you cannot simply vent the R-22 from their old air conditioner before disposal.",
            question:
              "What is the correct explanation for why venting is prohibited?",
            options: [
              "R-22 has ODP of 0.055 and contributes to ozone depletion; venting violates Clean Air Act with fines up to $44,539 per day",
              "Venting is only prohibited for CFCs, not HCFCs like R-22",
              "Venting is allowed for systems being disposed of",
              "Venting is prohibited only for systems over 50 lbs",
            ],
            correctAnswer:
              "R-22 has ODP of 0.055 and contributes to ozone depletion; venting violates Clean Air Act with fines up to $44,539 per day",
            explanation:
              "Section 608 of the Clean Air Act prohibits knowingly venting any refrigerant during service, maintenance, repair, or disposal. R-22 is an HCFC with ODP of 0.055, meaning it destroys ozone. Violations can result in civil penalties up to $44,539 per day.",
            difficulty: "easy",
          },
          {
            scenario:
              "You discover a leak in a rooftop unit containing 80 lbs of R-410A. The system has been losing 12 lbs per year.",
            question: "Is leak repair required under EPA regulations?",
            options: [
              "Yes - 15% leak rate exceeds 10% threshold for comfort cooling",
              "No - R-410A has zero ODP so leak repair is optional",
              "Yes - all leaks must be repaired regardless of rate",
              "No - leak rate is below 35% threshold",
            ],
            correctAnswer:
              "Yes - 15% leak rate exceeds 10% threshold for comfort cooling",
            explanation:
              "Leak rate = (12 lbs / 80 lbs) × 100% = 15%. Comfort cooling systems must repair leaks exceeding 10% annual rate. Even though R-410A has zero ODP, it has high GWP (2,088) and leak repair is required to prevent climate impact.",
            difficulty: "hard",
          },
        ],
      },
      "refrigerant-classification": {
        id: "refrigerant-classification",
        title: "Module 2: Refrigerant Classification and Properties",
        theory:
          "Refrigerants are classified by chemical composition, safety characteristics, and environmental impact. Understanding these classifications is essential for proper selection, handling, and regulatory compliance. The ASHRAE Standard 34 safety classification system uses a letter (A or B) for toxicity and a number (1, 2L, 2, or 3) for flammability. Environmental classifications include ODP (ozone depletion potential) and GWP (global warming potential), which determine regulatory phase-out schedules and handling requirements.",
        concepts: [
          "CFC refrigerants (R-12, R-502): Fully halogenated with highest ODP (0.6-1.0). Production banned since 1996. Still found in older equipment. Must be recovered and reclaimed, never vented.",
          "HCFC refrigerants (R-22, R-123): Partially halogenated with lower ODP (0.01-0.1). Phase-out in progress - no new production after 2020. Reclaimed R-22 still available for servicing existing equipment.",
          "HFC refrigerants (R-410A, R-134a, R-404A): Zero ODP but high GWP (1,300-4,000). Current standard for most applications. Being phased down under Kigali Amendment due to climate impact.",
          "HFO refrigerants (R-1234yf, R-1234ze, R-454B): Zero ODP and very low GWP (<1-500). Next-generation refrigerants. Some have A2L classification (mildly flammable) requiring special handling.",
          "Natural refrigerants (R-290 propane, R-744 CO2, R-717 ammonia): Low environmental impact but safety concerns. R-290 is A3 (highly flammable), R-717 is B2L (toxic and mildly flammable).",
        ],
        safetyRules: [
          "Always verify refrigerant type before servicing - mixing refrigerants creates contamination requiring expensive disposal and can damage equipment.",
          "Use refrigerant identifiers to detect contaminated or mixed refrigerants before connecting recovery equipment - contaminated refrigerant can damage recovery machines.",
          "Follow ASHRAE 34 safety guidelines for A2L refrigerants - ensure adequate ventilation, use spark-proof tools, and install refrigerant monitors where required.",
          "Never use A3 refrigerants (R-290, R-600a) in systems not specifically designed for them - explosion hazard from ignition sources.",
          "Store refrigerant cylinders upright in cool, dry location below 125°F - high temperatures can cause cylinder rupture.",
        ],
        realWorldExamples: [
          "R-22 phase-out impact: HVAC technician encounters 15-year-old R-22 system needing compressor replacement. Must decide between expensive R-22 recharge using reclaimed refrigerant ($150/lb) or system replacement with R-410A equipment. Economic analysis shows replacement is cost-effective.",
          "R-410A to R-454B retrofit: Commercial building converts rooftop units from R-410A (GWP 2,088) to R-454B (GWP 466) to meet sustainability goals. Requires oil change, system modifications, and technician training on A2L refrigerant handling.",
          "Contaminated refrigerant identification: Service call finds R-22 system with abnormal pressures. Refrigerant identifier shows contamination with R-40 (methyl chloride). System requires complete refrigerant removal, disposal as hazardous waste, leak repair, evacuation, and recharge with virgin R-22.",
          "Supermarket CO2 cascade system: New installation uses R-744 (CO2) for low-temperature cases and R-134a for medium-temperature. Requires specialized high-pressure equipment rated for CO2's 1,400 psig operating pressures.",
        ],
        keyTerms: [
          {
            term: "ASHRAE Standard 34",
            definition:
              "Safety classification system for refrigerants using letter (A=lower toxicity, B=higher toxicity) and number (1=no flame propagation, 2L=lower flammability, 2=flammable, 3=higher flammability).",
          },
          {
            term: "Azeotropic Blend",
            definition:
              "Refrigerant mixture that behaves like a single component - does not fractionate during phase change. Example: R-507A. Can be charged as liquid or vapor.",
          },
          {
            term: "Zeotropic Blend",
            definition:
              "Refrigerant mixture with components that have different boiling points - can fractionate during leaks. Example: R-410A, R-404A. Must be charged as liquid to prevent fractionation.",
          },
          {
            term: "Temperature Glide",
            definition:
              "Temperature change during evaporation or condensation in zeotropic blends. Affects system performance and charging procedures. R-404A has 0.5°F glide, R-407C has 10°F glide.",
          },
          {
            term: "Saturation Temperature",
            definition:
              "Temperature at which refrigerant changes phase (boiling or condensing) at a given pressure. Used to calculate superheat and subcooling.",
          },
          {
            term: "Critical Temperature",
            definition:
              "Temperature above which refrigerant cannot be condensed regardless of pressure. Limits maximum operating temperature. R-410A critical temp is 158°F.",
          },
        ],
        diagrams: [
          {
            src: "/assets/generated/refrigerant-classification-chart.dim_700x500.png",
            caption:
              "Comprehensive refrigerant classification chart showing chemical families (CFC, HCFC, HFC, HFO), safety groups (A1, A2L, A3, B1), ODP values, and GWP ratings. Use this chart to select appropriate refrigerants for different applications.",
            alt: "Refrigerant classification chart with safety groups and environmental ratings",
          },
        ],
        practiceScenarios: [
          {
            scenario:
              "You are servicing an R-410A system and notice the refrigerant cylinder is labeled as R-410A but the pressure gauge reading does not match the expected pressure for the ambient temperature.",
            question:
              "What should you do before connecting your recovery equipment?",
            options: [
              "Use a refrigerant identifier to verify cylinder contents - may be contaminated or mislabeled",
              "Proceed with recovery - label is sufficient verification",
              "Check cylinder color - yellow indicates R-410A",
              "Smell the refrigerant to identify it",
            ],
            correctAnswer:
              "Use a refrigerant identifier to verify cylinder contents - may be contaminated or mislabeled",
            explanation:
              "Always use a refrigerant identifier before connecting recovery equipment. Contaminated or mixed refrigerants can damage recovery machines and create hazardous conditions. Cylinder color is not a reliable indicator - only proper labeling and identifier verification ensure correct refrigerant.",
            difficulty: "medium",
          },
          {
            scenario:
              "A customer wants to retrofit their R-22 system to use R-410A refrigerant to avoid high R-22 costs.",
            question: "What is the correct response?",
            options: [
              "R-410A operates at 60% higher pressure than R-22 - system components not rated for R-410A pressures will fail. Complete system replacement required.",
              "Simple refrigerant swap is possible after recovering R-22 and changing oil",
              "Add R-410A directly to existing R-22 charge for blended operation",
              "R-410A can be used if system is pressure tested to 400 psig",
            ],
            correctAnswer:
              "R-410A operates at 60% higher pressure than R-22 - system components not rated for R-410A pressures will fail. Complete system replacement required.",
            explanation:
              "R-410A operates at significantly higher pressures than R-22 (about 60% higher). Existing R-22 system components (compressor, coils, valves, hoses) are not rated for these pressures and will fail. Additionally, R-410A requires POE oil instead of mineral oil. Retrofit is not feasible - complete system replacement is necessary.",
            difficulty: "hard",
          },
          {
            scenario:
              "You are installing a new system using R-32 refrigerant, which has an A2L safety classification.",
            question:
              "What special precautions are required for A2L refrigerants?",
            options: [
              "Ensure adequate ventilation, use spark-proof tools in confined spaces, install refrigerant monitors if required by code, follow manufacturer brazing procedures",
              "No special precautions - A2L refrigerants are non-flammable",
              "Only use explosion-proof electrical equipment",
              "A2L refrigerants cannot be used in occupied spaces",
            ],
            correctAnswer:
              "Ensure adequate ventilation, use spark-proof tools in confined spaces, install refrigerant monitors if required by code, follow manufacturer brazing procedures",
            explanation:
              "A2L refrigerants have lower flammability but still require precautions. Ensure adequate ventilation to prevent concentration buildup. Use spark-proof tools when working in confined spaces. Install refrigerant monitors if required by local codes. Follow manufacturer procedures for brazing to minimize refrigerant release. A2L refrigerants can be used in occupied spaces with proper safety measures.",
            difficulty: "hard",
          },
        ],
      },
    },
    type1: {
      "small-appliance-systems": {
        id: "small-appliance-systems",
        title: "Module 1: Small Appliance Systems and Components",
        theory:
          "Small appliances are defined as containing 5 pounds or less of refrigerant and include household refrigerators, freezers, window air conditioners, portable AC units, dehumidifiers, and vending machines. These systems typically use hermetically sealed compressors, capillary tube metering devices, and operate on the vapor-compression refrigeration cycle. Understanding component identification and system operation is essential for proper service and EPA compliance.",
        concepts: [
          "Hermetic compressor design: Motor and compressor sealed in welded steel shell. Cannot be field-serviced - entire unit replaced if failed. Motor cooled by refrigerant vapor. Common in refrigerators and small AC units.",
          "Capillary tube metering: Fixed-orifice expansion device - no moving parts. Refrigerant flow rate determined by tube length and diameter. System charge is critical - overcharge or undercharge significantly affects performance.",
          "Sealed system characteristics: No service ports on many small appliances. Pierce-type valves required for refrigerant access. System opened only for major repairs. Designed for specific refrigerant charge.",
          "Defrost systems: Manual defrost (older freezers), automatic defrost with timer and heater (refrigerators), hot gas defrost (some commercial units). Defrost cycle affects refrigerant pressures during service.",
        ],
        safetyRules: [
          "Always disconnect power and discharge capacitors before servicing - capacitors can store lethal charge even when unit is unplugged. Use insulated screwdriver across terminals.",
          "Wear safety glasses and insulated gloves when recovering refrigerant - liquid refrigerant causes instant frostbite (boiling point -15°F to -51°F depending on refrigerant).",
          "Work in ventilated area - refrigerants are heavier than air and displace oxygen in confined spaces, creating asphyxiation hazard.",
          "Use proper lifting techniques when moving appliances - refrigerators can weigh 200-300 lbs. Get assistance for heavy units.",
          "Never use oxygen to pressurize systems - creates explosion hazard with compressor oil. Use only dry nitrogen for pressure testing.",
        ],
        realWorldExamples: [
          "Refrigerator compressor failure diagnosis: Customer reports refrigerator not cooling. Technician finds compressor hot but not running. Checks for power at compressor terminals - 120V present. Compressor windings test open with ohmmeter. Diagnosis: failed compressor. Economic analysis shows replacement refrigerator more cost-effective than compressor replacement ($400 repair vs $600 new refrigerator).",
          "Window AC unit leak detection: Unit cooling poorly, frost on suction line. Pressure test reveals leak at evaporator coil. Leak repair cost ($250) plus refrigerant ($100) exceeds 60% of replacement cost. Recommend replacement per economic guidelines.",
          "Refrigerator disposal procedure: Appliance recycling facility processes 50 refrigerators daily. Each unit recovered to 0 psig using self-contained recovery equipment. Average recovery time 8 minutes per unit. Refrigerant stored in DOT-approved cylinders for reclamation. Compressor oil drained separately. Capacitors removed for proper disposal.",
          "Portable dehumidifier service: Unit not removing moisture. Technician finds low refrigerant charge. Leak detection reveals pinhole in evaporator coil from corrosion. Repair not economical. Customer educated on proper humidity levels to prevent future corrosion in replacement unit.",
        ],
        keyTerms: [
          {
            term: "Hermetic Compressor",
            definition:
              "Compressor with motor and pump sealed in welded steel shell. Motor cooled by refrigerant vapor. Cannot be field-serviced - entire unit replaced if failed. Common in small appliances.",
          },
          {
            term: "Capillary Tube",
            definition:
              'Fixed-orifice metering device - small diameter copper tube (0.026" to 0.064" ID) that meters refrigerant flow by friction. Length and diameter determine flow rate. No moving parts.',
          },
          {
            term: "Sealed System",
            definition:
              "Refrigeration system with all components permanently sealed - no service ports. Requires pierce-type valves for refrigerant access. Designed for specific charge - critical charge system.",
          },
          {
            term: "Pierce-Type Valve",
            definition:
              "Service valve that pierces refrigerant line to create access port. Used on sealed systems without service ports. Must be properly sealed after use to prevent leaks.",
          },
          {
            term: "Critical Charge",
            definition:
              "System where exact refrigerant charge is essential for proper operation. Overcharge or undercharge significantly affects performance. Common in capillary tube systems.",
          },
          {
            term: "Automatic Expansion Valve (AXV)",
            definition:
              "Metering device that maintains constant evaporator pressure. Used in some window AC units. Simpler than TXV but less efficient at varying loads.",
          },
        ],
        diagrams: [
          {
            src: "/assets/generated/type-i-recovery-setup.dim_700x500.png",
            caption:
              "Proper recovery equipment setup for small appliances. Self-contained recovery unit connects to both high and low side using pierce-type valves. Recovery cylinder must not exceed 80% liquid capacity. Monitor recovery until system reaches 0 psig.",
            alt: "Small appliance recovery equipment setup diagram",
          },
        ],
        practiceScenarios: [
          {
            scenario:
              "You are servicing a household refrigerator that is not cooling. The compressor is hot to touch but not running. You have 120V at the compressor terminals.",
            question: "What is the most likely diagnosis?",
            options: [
              "Failed compressor with open windings - requires replacement",
              "Low refrigerant charge - add refrigerant",
              "Defrost timer stuck - replace timer",
              "Dirty condenser coils - clean coils",
            ],
            correctAnswer:
              "Failed compressor with open windings - requires replacement",
            explanation:
              "Compressor hot but not running with power present indicates failed compressor. Open windings prevent motor from starting. Ohmmeter test across compressor terminals would show infinite resistance. Compressor replacement on refrigerator typically not economical - recommend appliance replacement.",
            difficulty: "medium",
          },
          {
            scenario:
              "You need to recover refrigerant from a window air conditioner for disposal. The unit has no service ports.",
            question: "What is the correct procedure?",
            options: [
              "Install pierce-type valves on suction and liquid lines, connect self-contained recovery equipment, recover to 0 psig",
              "Cut refrigerant lines and let refrigerant escape - disposal units exempt from recovery",
              "Use system-dependent recovery method",
              "Passive recovery is acceptable for small appliances",
            ],
            correctAnswer:
              "Install pierce-type valves on suction and liquid lines, connect self-contained recovery equipment, recover to 0 psig",
            explanation:
              "Small appliances without service ports require pierce-type valves for refrigerant access. Self-contained (active) recovery equipment is required - passive recovery is not EPA-compliant. Must recover to 0 psig before disposal. System-dependent recovery not possible with non-operating compressor.",
            difficulty: "easy",
          },
          {
            scenario:
              "A customer asks if you can repair a leak in their 10-year-old refrigerator evaporator coil. Repair cost is $300, refrigerant $75, total $375. New refrigerator costs $650.",
            question: "What is the appropriate recommendation?",
            options: [
              "Recommend replacement - repair cost exceeds 50% of replacement cost and unit is 10 years old",
              "Perform repair - always repair rather than replace",
              "Perform repair - refrigerator should last 20 years",
              "Recommend repair only if customer insists",
            ],
            correctAnswer:
              "Recommend replacement - repair cost exceeds 50% of replacement cost and unit is 10 years old",
            explanation:
              "Economic repair limit guideline: when repair cost exceeds 50-60% of replacement cost, replacement is typically more cost-effective. $375 repair is 58% of $650 replacement cost. Additionally, 10-year-old unit may have other components near end of life. New unit will be more energy efficient and have warranty.",
            difficulty: "hard",
          },
        ],
      },
    },
    type2: {
      "high-pressure-systems": {
        id: "high-pressure-systems",
        title:
          "Module 1: High-Pressure System Identification and Characteristics",
        theory:
          "High-pressure refrigeration systems use refrigerants that operate above atmospheric pressure in both evaporator and condenser. These include residential and commercial air conditioning, heat pumps, commercial refrigeration, and most air-cooled systems. Common refrigerants include R-410A, R-22, R-404A, R-407C, and R-134a. Operating pressures typically range from 50-450 psig depending on refrigerant type and ambient conditions. Understanding system characteristics is essential for proper service, recovery, and EPA compliance.",
        concepts: [
          "Semi-hermetic compressor design: Motor and compressor in bolted housing - can be field-serviced. Valve plates, pistons, and bearings replaceable. Used in commercial refrigeration and larger AC systems. More expensive than hermetic but longer service life.",
          "Shell-and-tube heat exchangers: Refrigerant flows through tubes, water flows through shell (or vice versa). Used in water-cooled condensers and chillers. Requires regular tube cleaning to maintain efficiency. Tube leaks allow water into refrigerant circuit.",
          "Direct expansion (DX) evaporators: Refrigerant evaporates directly in evaporator coil. Most common in AC and refrigeration. Requires proper superheat control. Thermostatic expansion valve (TXV) or electronic expansion valve (EEV) meters refrigerant flow.",
          "High-pressure refrigerant characteristics: R-410A operates at 60% higher pressure than R-22. Requires components rated for higher pressures. R-404A used in commercial refrigeration. R-407C retrofit refrigerant for R-22 systems.",
        ],
        safetyRules: [
          "Always wear safety glasses and gloves when connecting or disconnecting refrigerant lines - high pressure can cause refrigerant spray causing instant frostbite.",
          "Use hoses and equipment rated for system pressure - R-410A requires hoses rated to 800 psig working pressure. Undersized hoses can burst.",
          "Never exceed system test pressure during leak testing - typically 150 psig for high-pressure systems. Overpressure can rupture components.",
          "Ensure recovery cylinder is rated for refrigerant type - R-410A requires DOT 4BA or 4BW cylinders rated to 400 psig service pressure.",
          "Monitor recovery cylinder weight - never exceed 80% liquid capacity. Overfilled cylinders can rupture from thermal expansion.",
        ],
        realWorldExamples: [
          "Supermarket refrigeration leak repair: Walk-in cooler with 80 lbs R-404A charge losing 35 lbs annually (44% leak rate). EPA requires repair within 30 days. Leak found at evaporator coil connection. Technician recovers refrigerant, repairs leak with silver brazing, pressure tests to 150 psig, evacuates to 500 microns, recharges system. Follow-up verification test in 30 days confirms repair.",
          "Rooftop unit R-22 to R-407C retrofit: 10-ton rooftop unit with failed compressor. R-22 cost prohibitive. Retrofit to R-407C: recover R-22, replace compressor, change to POE oil, install new filter drier, evacuate to 500 microns, charge with R-407C. System operates with similar capacity and efficiency.",
          "Residential AC installation: New 3-ton R-410A system installation. Technician pressure tests with nitrogen to 150 psig, holds 24 hours - no leaks. Evacuates with vacuum pump to 500 microns, holds vacuum 30 minutes - stable. Charges system with 9.5 lbs R-410A per manufacturer specifications. Verifies proper superheat (10°F) and subcooling (12°F).",
          "Commercial refrigeration recovery: Supermarket case with 120 lbs R-404A requires compressor replacement. Technician uses push-pull recovery method: liquid line to recovery machine inlet, vapor line to outlet. Recovery time reduced from 45 minutes to 15 minutes. System recovered to 10 inches Hg vacuum (operating compressor).",
        ],
        keyTerms: [
          {
            term: "Semi-Hermetic Compressor",
            definition:
              "Compressor with motor and pump in bolted housing that can be disassembled for service. Valve plates, pistons, and bearings replaceable. Used in commercial refrigeration and larger AC systems.",
          },
          {
            term: "Shell-and-Tube Heat Exchanger",
            definition:
              "Heat exchanger with one fluid flowing through tubes and another flowing through shell around tubes. Used in water-cooled condensers and evaporators. Requires regular cleaning.",
          },
          {
            term: "Direct Expansion (DX)",
            definition:
              "Evaporator where refrigerant evaporates directly in coil. Most common type in AC and refrigeration. Requires proper superheat control with TXV or EEV.",
          },
          {
            term: "Thermostatic Expansion Valve (TXV)",
            definition:
              "Metering device that maintains constant superheat by sensing suction line temperature and evaporator pressure. Adjusts refrigerant flow to match load. Most common in commercial systems.",
          },
          {
            term: "Push-Pull Recovery",
            definition:
              "Recovery method connecting liquid line to recovery machine inlet and vapor line to outlet. Significantly faster than vapor-only recovery. Requires recovery machine with liquid pump.",
          },
          {
            term: "Subcooling",
            definition:
              "Amount liquid refrigerant is cooled below saturation temperature at condenser outlet. Indicates proper charge. Typical range 10-15°F. Low subcooling indicates undercharge.",
          },
        ],
        diagrams: [
          {
            src: "/assets/generated/type-ii-system-schematic.dim_800x600.png",
            caption:
              "High-pressure refrigeration system schematic showing compressor, condenser, metering device (TXV), and evaporator. Pressure and temperature relationships shown for R-410A system. Note higher operating pressures compared to R-22.",
            alt: "High-pressure refrigeration system schematic with pressure and temperature values",
          },
        ],
        practiceScenarios: [
          {
            scenario:
              "You are recovering refrigerant from a 5-ton R-410A rooftop unit with an operating compressor. The system has been running and is at normal operating pressures.",
            question: "What is the required recovery level?",
            options: [
              "10 inches Hg vacuum - required for high-pressure systems with operating compressor",
              "0 psig - atmospheric pressure sufficient",
              "15 inches Hg vacuum - deeper vacuum always better",
              "4 inches Hg vacuum - minimum for R-410A",
            ],
            correctAnswer:
              "10 inches Hg vacuum - required for high-pressure systems with operating compressor",
            explanation:
              "EPA requires high-pressure systems with operating compressors to be recovered to 10 inches Hg vacuum before opening the system. This ensures maximum refrigerant recovery and minimizes environmental release. Systems with non-operating compressors require recovery to 0 psig.",
            difficulty: "easy",
          },
          {
            scenario:
              "A commercial refrigeration system with 150 lbs R-404A full charge has required 60 lbs of refrigerant added over the past year. No refrigerant was recovered for recycling.",
            question:
              "What is the annual leak rate and what action is required?",
            options: [
              "40% leak rate - exceeds 35% threshold for commercial refrigeration, repair required within 30 days",
              "40% leak rate - no action required, threshold is 50%",
              "60% leak rate - calculated from refrigerant added",
              "25% leak rate - below threshold, no action required",
            ],
            correctAnswer:
              "40% leak rate - exceeds 35% threshold for commercial refrigeration, repair required within 30 days",
            explanation:
              "Annual leak rate = (Amount added - Amount recovered) / Full charge × 100% = (60 - 0) / 150 × 100% = 40%. Commercial refrigeration systems must repair leaks exceeding 35% annual rate. Repair must be completed and verified within 30 days of detection.",
            difficulty: "medium",
          },
          {
            scenario:
              "You are pressure testing a repaired R-410A system with dry nitrogen. The system nameplate shows maximum working pressure of 450 psig.",
            question: "What is the correct test pressure?",
            options: [
              "150 psig - standard test pressure for high-pressure systems, or system test pressure if lower",
              "450 psig - test to maximum working pressure",
              "300 psig - use 2/3 of maximum working pressure",
              "500 psig - exceed working pressure to ensure no leaks",
            ],
            correctAnswer:
              "150 psig - standard test pressure for high-pressure systems, or system test pressure if lower",
            explanation:
              "Standard pressure test for high-pressure systems is 150 psig with dry nitrogen, or system test pressure specified by manufacturer, whichever is lower. Never exceed system test pressure - can rupture components. Hold pressure for 24 hours and monitor for pressure drop indicating leaks.",
            difficulty: "hard",
          },
        ],
      },
    },
    type3: {
      "low-pressure-systems": {
        id: "low-pressure-systems",
        title: "Module 1: Low-Pressure System Fundamentals",
        theory:
          "Low-pressure refrigeration systems operate below atmospheric pressure in the evaporator, typically using centrifugal compressors and R-123 refrigerant. These large commercial and industrial chillers (100+ tons capacity) produce chilled water for building HVAC systems. Operating below atmospheric pressure means any leak allows air and moisture to enter rather than refrigerant to escape. Understanding vacuum operation, purge units, and leak detection challenges is essential for proper service and EPA compliance.",
        concepts: [
          "Centrifugal compressor operation: High-speed impeller (10,000-20,000 RPM) accelerates refrigerant vapor, converting velocity to pressure. No pistons or valves. Capacity controlled by inlet guide vanes or variable speed drive. Efficient for large capacities but requires minimum load to prevent surge.",
          "Sub-atmospheric pressure operation: Evaporator operates at 5-10 psig (vacuum conditions). Allows refrigerant to boil at higher temperatures (around 40°F for R-123), improving efficiency for chilled water production. Condenser operates at 10-15 psig (above atmospheric).",
          "Air and moisture infiltration: Vacuum conditions mean any leak allows air and moisture to enter system. Air accumulates in condenser (non-condensable), reducing efficiency. Moisture causes acid formation and copper plating. Purge unit continuously removes air.",
          "Water-cooled heat exchangers: Shell-and-tube design for both evaporator and condenser. Water treatment critical to prevent scale and corrosion. Tube leaks allow water into refrigerant circuit, requiring immediate shutdown and repair.",
        ],
        safetyRules: [
          "R-123 is Class B1 refrigerant (higher toxicity) - ensure mechanical room has minimum 0.5 cfm/sq ft ventilation and refrigerant monitors with alarms set to 50 ppm TLV.",
          "Never exceed 10 psig when pressure testing low-pressure systems - components not rated for high pressure. Use low-pressure gauges (0-30 psig range).",
          "Wear appropriate PPE including gloves and safety glasses - R-123 can cause skin irritation. Have SDS readily available in work area.",
          "Ensure adequate ventilation before entering mechanical room - R-123 is heavier than air and displaces oxygen. Use refrigerant monitor to verify safe levels.",
          "Follow confined space entry procedures when working inside chiller - requires atmospheric testing, ventilation, and standby person.",
        ],
        realWorldExamples: [
          "Chiller tube leak diagnosis: Building engineer notices purge unit running continuously (every 15 minutes instead of 4 times daily). Refrigerant analysis shows high moisture content. Pressure test reveals leak in evaporator tubes. Water entering refrigerant circuit. Chiller shut down, tubes plugged or replaced, system evacuated to 500 microns, recharged with R-123.",
          "Purge unit maintenance: 500-ton chiller purge unit not operating. Technician finds purge compressor failed. Temporary manual purging required until replacement arrives. Air accumulation causes head pressure to rise from 12 psig to 18 psig, reducing capacity by 15%. Demonstrates importance of purge unit operation.",
          "Chiller retrofit project: 20-year-old R-11 chiller converted to R-123. R-11 production banned since 1996. Retrofit requires: recover R-11 for reclamation, pressure test, evacuate to 500 microns, charge with R-123, update purge unit, install refrigerant monitors, train operators on R-123 safety.",
          "Vacuum recovery procedure: Decommissioning 300-ton R-123 chiller. Recovery equipment designed for low-pressure systems connects to both evaporator and condenser. Recovery takes 6 hours to reach 25mm Hg absolute (29 inches Hg vacuum). 450 lbs R-123 recovered and sent to reclaimer.",
        ],
        keyTerms: [
          {
            term: "Centrifugal Compressor",
            definition:
              "Compressor using high-speed rotating impeller to accelerate refrigerant vapor, converting velocity to pressure. No pistons or valves. Efficient for large capacities (100+ tons). Requires minimum load to prevent surge.",
          },
          {
            term: "Purge Unit",
            definition:
              "Device that removes non-condensable gases (air) from low-pressure systems. High-efficiency purges recover refrigerant vapor before venting air. Should operate no more than 4 times daily in leak-free system.",
          },
          {
            term: "Non-Condensables",
            definition:
              "Gases (primarily air) that do not condense at condenser temperature. Accumulate in condenser, increasing head pressure and reducing efficiency. Removed by purge unit.",
          },
          {
            term: "Approach Temperature",
            definition:
              "Difference between leaving water temperature and refrigerant saturation temperature in heat exchanger. Should be 2-4°F. Higher values indicate fouled tubes or poor water flow.",
          },
          {
            term: "Surge",
            definition:
              "Unstable operation in centrifugal compressor when flow rate drops below minimum. Causes vibration, noise, and potential damage. Prevented by maintaining minimum load or using hot gas bypass.",
          },
          {
            term: "Copper Plating",
            definition:
              "Copper deposits on compressor bearings caused by moisture and acid in system. Indicates contamination requiring oil change, filter drier replacement, and possible bearing replacement.",
          },
        ],
        diagrams: [
          {
            src: "/assets/generated/type-iii-chiller-diagram.dim_800x600.png",
            caption:
              "Low-pressure centrifugal chiller schematic showing evaporator (5-10 psig), compressor, condenser (10-15 psig), and purge unit. Note sub-atmospheric pressure in evaporator. Purge unit removes air that enters through leaks. Water-cooled shell-and-tube heat exchangers require regular maintenance.",
            alt: "Low-pressure centrifugal chiller system diagram with pressure values",
          },
        ],
        practiceScenarios: [
          {
            scenario:
              "You are recovering refrigerant from a 400-ton R-123 centrifugal chiller that is being decommissioned.",
            question:
              "What is the required recovery level for low-pressure systems?",
            options: [
              "25mm Hg absolute (29 inches Hg vacuum) - required for low-pressure systems",
              "10 inches Hg vacuum - same as high-pressure systems",
              "0 psig - atmospheric pressure sufficient",
              "15mm Hg absolute - deeper vacuum always better",
            ],
            correctAnswer:
              "25mm Hg absolute (29 inches Hg vacuum) - required for low-pressure systems",
            explanation:
              "EPA requires low-pressure systems to be recovered to 25mm Hg absolute, equivalent to 29 inches Hg vacuum. This ensures maximum refrigerant recovery from systems operating below atmospheric pressure. Recovery equipment must be specifically designed for low-pressure systems.",
            difficulty: "easy",
          },
          {
            scenario:
              "A building engineer reports that the chiller purge unit is running every 15 minutes instead of the normal 4 times per day. Head pressure has increased from 12 psig to 17 psig.",
            question: "What is the most likely cause and required action?",
            options: [
              "System has air leak allowing air infiltration - locate and repair leak, then evacuate and recharge if necessary",
              "Purge unit malfunction - replace purge unit",
              "Normal operation during hot weather - no action required",
              "Overcharge of refrigerant - recover excess refrigerant",
            ],
            correctAnswer:
              "System has air leak allowing air infiltration - locate and repair leak, then evacuate and recharge if necessary",
            explanation:
              "Frequent purging indicates air entering system through leak. Low-pressure systems operate below atmospheric pressure, so leaks allow air in rather than refrigerant out. Air accumulates in condenser (non-condensable), increasing head pressure and reducing efficiency. Must locate and repair leak, then evacuate system to remove air and moisture.",
            difficulty: "medium",
          },
          {
            scenario:
              "You are pressure testing a repaired low-pressure chiller with dry nitrogen to verify leak repair.",
            question:
              "What is the correct test pressure for low-pressure systems?",
            options: [
              "10 psig maximum - low-pressure systems not rated for high pressure",
              "150 psig - standard test pressure for all systems",
              "50 psig - use moderate pressure for safety",
              "5 psig - match normal operating pressure",
            ],
            correctAnswer:
              "10 psig maximum - low-pressure systems not rated for high pressure",
            explanation:
              "Low-pressure systems are designed for sub-atmospheric operation and are not rated for high pressures. Maximum test pressure is typically 10 psig with dry nitrogen. Exceeding this pressure can rupture components. Use low-pressure gauges (0-30 psig range) for accurate readings. Hold pressure for 24 hours and monitor for leaks.",
            difficulty: "hard",
          },
        ],
      },
    },
    universal: {
      "comprehensive-regulatory": {
        id: "comprehensive-regulatory",
        title: "Module 1: Comprehensive Regulatory Knowledge",
        theory:
          "Universal certification requires comprehensive understanding of EPA Section 608 regulations across all system types (small appliances, high-pressure, and low-pressure systems). This includes recovery requirements, leak repair thresholds, recordkeeping, certification requirements, and enforcement. Understanding how regulations apply to different scenarios and system types is essential for professional HVAC work and legal compliance.",
        concepts: [
          'Recovery level requirements by system type: Small appliances (0 psig), high-pressure with operating compressor (10" Hg vacuum), high-pressure with non-operating compressor (0 psig), low-pressure systems (25mm Hg absolute).',
          "Leak repair thresholds: Comfort cooling (10% annual rate), commercial refrigeration (35%), industrial process refrigeration (35%). Repair required within 30 days, verification within 30 days, follow-up within 12 months.",
          "Recordkeeping requirements: Systems with 50+ lbs must maintain records of refrigerant purchased, added, and recovered for 3 years. Include dates, quantities, system information, technician name.",
          "Certification requirements: All technicians must be EPA 608 certified before working with refrigerants. Certification is for life - no renewal required. Four types: Type I, II, III, and Universal.",
          "Venting prohibitions: Knowingly venting CFCs, HCFCs, or HFCs during service, maintenance, repair, or disposal is illegal. De minimis releases (unavoidable small releases when connecting/disconnecting hoses) are allowed.",
        ],
        safetyRules: [
          "Always verify technician certification before allowing refrigerant work - employers liable for uncertified technicians. Keep certification cards readily available for EPA inspection.",
          "Maintain detailed service records for all refrigerant work - EPA can request records during inspections. Electronic records acceptable if readily accessible.",
          "Use only EPA-certified recovery equipment meeting AHRI 740 standards - equipment must be appropriate for refrigerant type and system pressure.",
          "Never mix refrigerants in recovery cylinders - creates contamination requiring expensive disposal. Use separate cylinders for each refrigerant type.",
          "Report suspected violations to EPA - whistleblower rewards available. Both technicians and employers can be held liable for violations.",
        ],
        realWorldExamples: [
          "Multi-system facility compliance: Hospital with 20 rooftop units (R-410A), 5 walk-in coolers (R-404A), and 2 centrifugal chillers (R-123). Facility manager maintains comprehensive refrigerant management program: tracks all refrigerant purchases and additions, performs quarterly leak inspections, maintains 3-year records, ensures all technicians are certified, uses separate recovery cylinders for each refrigerant type.",
          "EPA enforcement case: HVAC contractor caught venting R-22 during system changeout. EPA investigation finds pattern of violations over 2 years. Contractor fined $250,000, required to implement compliance program, and technicians required to complete additional training. Case demonstrates EPA actively enforces regulations.",
          "Leak repair compliance scenario: Supermarket with 15 refrigeration cases totaling 300 lbs R-404A charge. Annual refrigerant additions total 120 lbs (40% leak rate). Exceeds 35% threshold. Facility must: identify and repair leaks within 30 days, verify repairs within 30 days, perform follow-up verification within 12 months, maintain detailed records of all work.",
          "Cross-system recovery project: Technician servicing facility with multiple system types. Uses Type I recovery equipment for small appliances (refrigerators, vending machines), Type II equipment for rooftop units and walk-in coolers, Type III equipment for centrifugal chiller. Maintains separate recovery cylinders for R-134a, R-410A, R-404A, and R-123.",
        ],
        keyTerms: [
          {
            term: "Universal Certification",
            definition:
              "EPA 608 certification covering all system types (Type I, II, and III). Allows technician to work on any equipment containing refrigerants. Requires passing comprehensive exam covering all sections.",
          },
          {
            term: "De Minimis Release",
            definition:
              "Unavoidable small refrigerant releases during normal service operations (connecting/disconnecting hoses). Allowed under EPA regulations. Does not include intentional venting or purging.",
          },
          {
            term: "Knowing Release",
            definition:
              "Intentional or negligent release of refrigerant during service, maintenance, repair, or disposal. Illegal under Section 608 with penalties up to $44,539 per day per violation.",
          },
          {
            term: "AHRI 740 Standard",
            definition:
              "Industry standard for recovery and recycling equipment certification. Equipment must meet this standard to be EPA-compliant. Specifies performance requirements and testing procedures.",
          },
          {
            term: "Reclaimed Refrigerant",
            definition:
              "Refrigerant processed to ARI 700 standard (same purity as virgin refrigerant). Can be resold. Requires specialized reclamation facility. More expensive than recycling but produces virgin-equivalent product.",
          },
          {
            term: "Recycled Refrigerant",
            definition:
              "Refrigerant cleaned using oil separation and single-pass filter drier. Suitable for reuse in same system or same owner's equipment. Less expensive than reclamation but lower purity.",
          },
        ],
        diagrams: [
          {
            src: "/assets/generated/universal-certification-pathway.dim_700x600.png",
            caption:
              "Universal certification pathway showing integration of Type I, II, and III knowledge. Comprehensive understanding of recovery requirements, leak repair thresholds, and regulatory compliance across all system types. Universal technicians can work on any refrigeration or AC equipment.",
            alt: "Universal EPA 608 certification pathway diagram",
          },
        ],
        practiceScenarios: [
          {
            scenario:
              "You are servicing a facility with a 3-ton residential AC unit (R-410A), a walk-in cooler (R-404A, 80 lbs), and a household refrigerator (R-134a). Each system requires different service procedures.",
            question: "What recovery levels are required for each system?",
            options: [
              'AC unit: 10" Hg vacuum (operating compressor), Walk-in: 10" Hg vacuum, Refrigerator: 0 psig',
              'All systems: 10" Hg vacuum',
              "All systems: 0 psig",
              'AC unit: 0 psig, Walk-in: 10" Hg vacuum, Refrigerator: 10" Hg vacuum',
            ],
            correctAnswer:
              'AC unit: 10" Hg vacuum (operating compressor), Walk-in: 10" Hg vacuum, Refrigerator: 0 psig',
            explanation:
              "Recovery requirements vary by system type: High-pressure systems (AC unit and walk-in cooler) with operating compressors require 10 inches Hg vacuum. Small appliances (refrigerator with 5 lbs or less) require 0 psig. Universal technicians must know requirements for all system types.",
            difficulty: "medium",
          },
          {
            scenario:
              "A facility has three systems requiring leak repair: (1) Residential AC with 6 lbs charge, 1.5 lbs added annually (2) Commercial refrigeration with 100 lbs charge, 40 lbs added annually (3) Chiller with 200 lbs charge, 25 lbs added annually.",
            question:
              "Which systems require leak repair under EPA regulations?",
            options: [
              "Systems 1 and 2 - AC exceeds 10% threshold (25%), commercial refrigeration exceeds 35% threshold (40%)",
              "All three systems require repair",
              "Only system 2 - commercial refrigeration",
              "None - leak repair is optional",
            ],
            correctAnswer:
              "Systems 1 and 2 - AC exceeds 10% threshold (25%), commercial refrigeration exceeds 35% threshold (40%)",
            explanation:
              "Leak rates: (1) AC: 1.5/6 = 25% exceeds 10% comfort cooling threshold (2) Commercial: 40/100 = 40% exceeds 35% threshold (3) Chiller: 25/200 = 12.5% below 35% industrial process threshold. Systems 1 and 2 require repair within 30 days.",
            difficulty: "hard",
          },
          {
            scenario:
              'During a service call, you discover a technician without EPA 608 certification working on a refrigeration system. The facility manager says they are "training" and working under supervision.',
            question: "What is the correct response?",
            options: [
              "Technician must be EPA 608 certified before working with refrigerants - no exceptions for training. Employer liable for violations.",
              "Training exemption allows uncertified work under supervision",
              "Certification only required for recovery operations",
              "Certification only required for systems over 50 lbs",
            ],
            correctAnswer:
              "Technician must be EPA 608 certified before working with refrigerants - no exceptions for training. Employer liable for violations.",
            explanation:
              "EPA Section 608 requires all technicians who maintain, service, repair, or dispose of equipment containing refrigerants to be certified. No exceptions for training or supervision. Employers must verify certification before allowing refrigerant work. Both technician and employer can be fined for violations.",
            difficulty: "hard",
          },
        ],
      },
    },
  };

  return modules[section]?.[moduleId] || null;
}
