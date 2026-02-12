import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Info, BookOpen, ZoomIn, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { StudyMode } from '../../types/study';

interface LessonViewerProps {
  lessonId: 'thermodynamics' | 'refrigeration' | 'airflow' | 'electrical';
  studyMode: StudyMode;
}

interface DiagramData {
  title: string;
  image: string;
  description: string;
  tooltip: string;
  accessibilityText: string;
}

export default function LessonViewer({ lessonId, studyMode }: LessonViewerProps) {
  const isBeginner = studyMode.__kind__ === 'beginner';
  const [zoomedImage, setZoomedImage] = useState<DiagramData | null>(null);
  const [imageLoaded, setImageLoaded] = useState<Record<string, boolean>>({});

  const lessonContent = getLessonContent(lessonId);

  const handleImageLoad = (imageUrl: string) => {
    setImageLoaded(prev => ({ ...prev, [imageUrl]: true }));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            {lessonContent.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="theory" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="theory">Theory</TabsTrigger>
              <TabsTrigger value="diagrams">Diagrams</TabsTrigger>
              <TabsTrigger value="formulas">Formulas</TabsTrigger>
            </TabsList>

            <TabsContent value="theory" className="space-y-4 pt-4">
              {isBeginner && (
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>{lessonContent.beginnerTip}</AlertDescription>
                </Alert>
              )}
              <div className="prose prose-sm dark:prose-invert max-w-none">
                {lessonContent.theory.map((section, idx) => (
                  <div key={idx} className="mb-6">
                    <h3 className="text-lg font-semibold text-foreground">{section.heading}</h3>
                    <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="diagrams" className="space-y-4 pt-4">
              <Alert className="border-primary/20 bg-primary/5">
                <ZoomIn className="h-4 w-4 text-primary" />
                <AlertDescription>
                  <strong>Interactive Diagrams:</strong> Click on any diagram to zoom in for detailed examination. Hover over images to see key concepts.
                </AlertDescription>
              </Alert>
              <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
                {lessonContent.diagrams.map((diagram, idx) => (
                  <Card key={idx} className="group transition-all hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-sm sm:text-base">{diagram.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <button
                        onClick={() => setZoomedImage(diagram)}
                        className="relative w-full overflow-hidden rounded-lg bg-muted transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        aria-label={`Zoom ${diagram.title}`}
                      >
                        <div className="aspect-video relative">
                          {!imageLoaded[diagram.image] && (
                            <div className="absolute inset-0 flex items-center justify-center bg-muted">
                              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                            </div>
                          )}
                          <img
                            src={diagram.image}
                            alt={diagram.accessibilityText}
                            className={`h-full w-full object-cover transition-opacity duration-300 ${
                              imageLoaded[diagram.image] ? 'opacity-100' : 'opacity-0'
                            }`}
                            onLoad={() => handleImageLoad(diagram.image)}
                            loading="lazy"
                          />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all group-hover:bg-black/20">
                          <div className="rounded-full bg-white/90 p-2 sm:p-3 opacity-0 transition-opacity group-hover:opacity-100">
                            <ZoomIn className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                          </div>
                        </div>
                      </button>
                      <div className="space-y-2">
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{diagram.description}</p>
                        <div className="rounded-lg border border-primary/20 bg-primary/5 p-2 sm:p-3">
                          <p className="text-xs sm:text-sm font-medium text-primary">
                            <Info className="mr-1 inline h-3 w-3 sm:h-4 sm:w-4" />
                            Key Concept:
                          </p>
                          <p className="mt-1 text-xs sm:text-sm text-foreground leading-relaxed">{diagram.tooltip}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="formulas" className="space-y-4 pt-4">
              <div className="space-y-4">
                {lessonContent.formulas.map((formula, idx) => (
                  <Card key={idx}>
                    <CardContent className="pt-6">
                      <div className="mb-2 font-mono text-base sm:text-lg font-semibold text-primary break-all">{formula.formula}</div>
                      <p className="mb-2 text-sm font-medium">{formula.name}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{formula.explanation}</p>
                      {isBeginner && formula.example && (
                        <div className="mt-3 rounded-lg bg-muted p-3">
                          <p className="text-xs sm:text-sm">
                            <strong>Example:</strong> {formula.example}
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Zoom Dialog - Optimized for mobile */}
      <Dialog open={!!zoomedImage} onOpenChange={() => setZoomedImage(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-5xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between pr-8">
              <span className="text-sm sm:text-base">{zoomedImage?.title}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setZoomedImage(null)}
                className="h-8 w-8 absolute right-4 top-4"
              >
                <X className="h-4 w-4" />
              </Button>
            </DialogTitle>
          </DialogHeader>
          {zoomedImage && (
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg bg-muted">
                <img
                  src={zoomedImage.image}
                  alt={zoomedImage.accessibilityText}
                  className="w-full object-contain"
                  style={{ maxHeight: '60vh' }}
                  loading="eager"
                />
              </div>
              <div className="space-y-2">
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{zoomedImage.description}</p>
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-3 sm:p-4">
                  <p className="font-medium text-primary text-sm sm:text-base">
                    <Info className="mr-1 inline h-4 w-4" />
                    Key Concept:
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-foreground leading-relaxed">{zoomedImage.tooltip}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function getLessonContent(lessonId: string) {
  const content = {
    thermodynamics: {
      title: 'Thermodynamics & Heat Transfer',
      beginnerTip:
        'Thermodynamics is the study of heat and energy. Understanding these principles is essential for HVAC work.',
      theory: [
        {
          heading: 'First Law of Thermodynamics',
          content:
            'Energy cannot be created or destroyed, only converted from one form to another. In HVAC systems, we convert electrical energy into cooling or heating by moving heat from one place to another.',
        },
        {
          heading: 'Second Law of Thermodynamics',
          content:
            'Heat naturally flows from hot to cold. HVAC systems use refrigerants and mechanical work to move heat against this natural flow, allowing us to cool spaces in hot weather.',
        },
        {
          heading: 'Heat Transfer Methods',
          content:
            'Heat transfers through three methods: Conduction (direct contact), Convection (fluid movement), and Radiation (electromagnetic waves). HVAC systems utilize all three methods.',
        },
        {
          heading: 'Temperature-Pressure Relationship',
          content:
            'For refrigerants, temperature and pressure are directly related. As pressure increases, so does the boiling point temperature. This relationship is fundamental to the refrigeration cycle.',
        },
      ],
      diagrams: [
        {
          title: 'Heat Transfer Principles',
          image: '/assets/generated/thermodynamics-diagram.dim_600x400.png',
          description: 'Illustration of conduction, convection, and radiation heat transfer methods used in HVAC systems',
          tooltip: 'This diagram shows the three fundamental heat transfer methods: conduction through solid materials, convection through fluid movement, and radiation through electromagnetic waves.',
          accessibilityText: 'Diagram illustrating three heat transfer methods: conduction, convection, and radiation with arrows showing heat flow direction',
        },
        {
          title: 'Pressure-Temperature Relationship',
          image: '/assets/generated/pressure-gauge.dim_400x300.jpg',
          description: 'Pressure gauge showing the relationship between refrigerant pressure and temperature',
          tooltip: 'Pressure and temperature are directly related in refrigerants. Higher pressure means higher boiling point temperature, which is critical for the refrigeration cycle operation.',
          accessibilityText: 'Pressure gauge with measurement scales showing pressure-temperature correlation for refrigerants',
        },
      ],
      formulas: [
        {
          name: 'Sensible Heat',
          formula: 'Q = m × c × ΔT',
          explanation: 'Heat required to change temperature without phase change. Q=heat, m=mass, c=specific heat, ΔT=temperature change',
          example: 'To raise 1 lb of water by 10°F: Q = 1 × 1 × 10 = 10 BTU',
        },
        {
          name: 'Latent Heat',
          formula: 'Q = m × L',
          explanation: 'Heat required for phase change at constant temperature. L is the latent heat of vaporization or fusion',
          example: 'To evaporate 1 lb of water: Q = 1 × 970 = 970 BTU',
        },
      ],
    },
    refrigeration: {
      title: 'Refrigeration Cycle',
      beginnerTip:
        'The refrigeration cycle is the heart of HVAC systems. Follow each component step-by-step to understand how cooling happens.',
      theory: [
        {
          heading: 'The Complete Cycle',
          content:
            'The refrigeration cycle moves heat from inside a space to outside using a refrigerant that changes between liquid and gas states. The cycle has four main components working together.',
        },
        {
          heading: 'Evaporator (Indoor Coil)',
          content:
            'Low-pressure liquid refrigerant enters and absorbs heat from indoor air, causing it to evaporate into a gas. This is where cooling happens - heat is removed from the air.',
        },
        {
          heading: 'Compressor',
          content:
            'The compressor pumps the low-pressure gas and compresses it into high-pressure, high-temperature gas. This requires electrical energy and is the heart of the system.',
        },
        {
          heading: 'Condenser (Outdoor Coil)',
          content:
            'High-pressure gas releases heat to outdoor air and condenses back into a liquid. The outdoor fan helps dissipate this heat to the environment.',
        },
        {
          heading: 'Expansion Valve',
          content:
            'The high-pressure liquid passes through a restriction, causing a pressure drop. This creates low-pressure liquid ready to absorb heat again in the evaporator.',
        },
      ],
      diagrams: [
        {
          title: 'Complete Refrigeration Cycle',
          image: '/assets/generated/refrigeration-cycle-diagram.dim_800x600.jpg',
          description: 'Full refrigeration cycle showing evaporator, compressor, condenser, and expansion valve with refrigerant state changes',
          tooltip: 'This diagram shows the refrigerant flow through the complete cycle: evaporating in the indoor coil (absorbing heat), being compressed, condensing in the outdoor coil (releasing heat), and expanding back to low pressure.',
          accessibilityText: 'Complete refrigeration cycle diagram with four main components: evaporator, compressor, condenser, and expansion valve, showing refrigerant flow and state changes',
        },
      ],
      formulas: [
        {
          name: 'Cooling Capacity',
          formula: 'Capacity (BTU/hr) = CFM × 1.08 × ΔT',
          explanation: 'Calculate cooling capacity based on airflow (CFM) and temperature difference',
          example: 'With 400 CFM and 20°F ΔT: 400 × 1.08 × 20 = 8,640 BTU/hr',
        },
        {
          name: 'Coefficient of Performance (COP)',
          formula: 'COP = Cooling Output / Energy Input',
          explanation: 'Efficiency ratio - higher COP means more efficient system',
          example: 'If 12,000 BTU output uses 1,000W: COP = 12,000/3,412 = 3.5',
        },
      ],
    },
    airflow: {
      title: 'Airflow & Duct Design',
      beginnerTip:
        'Proper airflow is critical for system efficiency. Learn how air moves through ducts and how to measure it correctly.',
      theory: [
        {
          heading: 'Airflow Fundamentals',
          content:
            'Air moves from high pressure to low pressure. HVAC systems use fans to create pressure differences that move air through ducts and into conditioned spaces.',
        },
        {
          heading: 'Static Pressure',
          content:
            'Static pressure is the resistance to airflow in the duct system. Too much resistance reduces airflow and system efficiency. Measured in inches of water column (in. w.c.).',
        },
        {
          heading: 'Velocity and CFM',
          content:
            'Velocity is air speed (feet per minute). CFM (cubic feet per minute) is the volume of air moved. CFM = Velocity × Duct Area. Proper CFM is essential for comfort and efficiency.',
        },
        {
          heading: 'Duct Sizing',
          content:
            'Ducts must be sized correctly to deliver proper airflow without excessive noise or pressure drop. Larger ducts have less resistance but cost more and take more space.',
        },
      ],
      diagrams: [
        {
          title: 'HVAC Tools and Measurement',
          image: '/assets/generated/hvac-tools.dim_600x400.jpg',
          description: 'Professional HVAC tools used for airflow measurement and system diagnostics',
          tooltip: 'These tools are essential for measuring airflow, static pressure, and system performance. Proper measurement techniques ensure accurate diagnostics and optimal system operation.',
          accessibilityText: 'Collection of HVAC diagnostic tools including pressure gauges, thermometers, and airflow measurement devices',
        },
      ],
      formulas: [
        {
          name: 'CFM Calculation',
          formula: 'CFM = (Area in sq ft) × (Velocity in FPM)',
          explanation: 'Calculate airflow volume from duct area and air velocity',
          example: 'For 1 sq ft duct at 800 FPM: CFM = 1 × 800 = 800 CFM',
        },
        {
          name: 'Required CFM for Cooling',
          formula: 'CFM = (BTU/hr) / (1.08 × ΔT)',
          explanation: 'Determine required airflow for desired cooling capacity',
          example: 'For 24,000 BTU/hr with 20°F ΔT: CFM = 24,000/(1.08×20) = 1,111 CFM',
        },
      ],
    },
    electrical: {
      title: 'Electrical Fundamentals',
      beginnerTip:
        'Electrical safety is paramount. Always follow proper procedures and never work on live circuits without proper training.',
      theory: [
        {
          heading: 'Basic Electrical Theory',
          content:
            'Electricity flows through circuits. Voltage (V) is electrical pressure, Current (I) is flow rate in amps, and Resistance (R) opposes flow. These relate through Ohm\'s Law: V = I × R.',
        },
        {
          heading: 'AC vs DC Power',
          content:
            'HVAC systems use AC (alternating current) power from the utility. Control circuits often use 24V AC for safety. Compressors and fans use 120V or 240V AC.',
        },
        {
          heading: 'Motor Types',
          content:
            'Common HVAC motors include PSC (permanent split capacitor), ECM (electronically commutated), and three-phase motors. Each has different characteristics and applications.',
        },
        {
          heading: 'Safety Procedures',
          content:
            'Always disconnect power before servicing. Use a multimeter to verify power is off. Never bypass safety devices. Wear proper PPE and follow lockout/tagout procedures.',
        },
      ],
      diagrams: [
        {
          title: 'HVAC Electrical Wiring Diagram',
          image: '/assets/generated/electrical-wiring-diagram.dim_700x500.png',
          description: 'Typical residential HVAC electrical schematic showing control and power circuits with safety devices',
          tooltip: 'This wiring diagram shows the electrical connections between the thermostat, control board, compressor, fan motor, and safety devices. Understanding these connections is essential for troubleshooting electrical issues.',
          accessibilityText: 'Detailed electrical wiring schematic for residential HVAC system showing thermostat connections, control circuits, power circuits, and safety interlocks',
        },
      ],
      formulas: [
        {
          name: 'Ohm\'s Law',
          formula: 'V = I × R',
          explanation: 'Relationship between voltage, current, and resistance',
          example: 'If 10A flows through 12Ω: V = 10 × 12 = 120V',
        },
        {
          name: 'Power Calculation',
          formula: 'P (Watts) = V × I',
          explanation: 'Calculate electrical power consumption',
          example: 'At 240V and 15A: P = 240 × 15 = 3,600W (3.6 kW)',
        },
      ],
    },
  };

  return content[lessonId as keyof typeof content];
}

