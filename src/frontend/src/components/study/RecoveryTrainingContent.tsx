import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Info, 
  AlertTriangle, 
  CheckCircle2, 
  Wrench, 
  Gauge, 
  Droplet,
  Wind,
  ZoomIn,
  Award
} from 'lucide-react';
import type { StudyMode } from '../../types/study';

interface RecoveryTrainingContentProps {
  studyMode: StudyMode;
}

interface ChecklistItem {
  id: string;
  description: string;
  completed: boolean;
}

export default function RecoveryTrainingContent({ studyMode }: RecoveryTrainingContentProps) {
  const isBeginner = studyMode.__kind__ === 'beginner';
  const [selectedDiagram, setSelectedDiagram] = useState<string | null>(null);
  const [recoveryChecklist, setRecoveryChecklist] = useState<ChecklistItem[]>([
    { id: '1', description: 'Connect manifold gauges to system service ports', completed: false },
    { id: '2', description: 'Connect recovery cylinder to center port', completed: false },
    { id: '3', description: 'Open recovery cylinder valve', completed: false },
    { id: '4', description: 'Start recovery machine', completed: false },
    { id: '5', description: 'Monitor pressure gauges during recovery', completed: false },
    { id: '6', description: 'Wait for system to reach required vacuum level', completed: false },
    { id: '7', description: 'Close all valves and shut off recovery machine', completed: false },
    { id: '8', description: 'Disconnect equipment and label cylinder', completed: false },
  ]);

  const [pumpDownChecklist, setPumpDownChecklist] = useState<ChecklistItem[]>([
    { id: '1', description: 'Close liquid line service valve', completed: false },
    { id: '2', description: 'Allow compressor to run and pump refrigerant to condenser', completed: false },
    { id: '3', description: 'Monitor suction pressure dropping to 0-2 psig', completed: false },
    { id: '4', description: 'Close suction service valve when pressure stabilizes', completed: false },
    { id: '5', description: 'Turn off compressor immediately', completed: false },
    { id: '6', description: 'Verify system is isolated and ready for service', completed: false },
  ]);

  const [vacuumChecklist, setVacuumChecklist] = useState<ChecklistItem[]>([
    { id: '1', description: 'Connect vacuum pump to system service port', completed: false },
    { id: '2', description: 'Connect micron gauge to system', completed: false },
    { id: '3', description: 'Open service valves and start vacuum pump', completed: false },
    { id: '4', description: 'Monitor micron gauge reading', completed: false },
    { id: '5', description: 'Continue evacuation until below 500 microns', completed: false },
    { id: '6', description: 'Perform decay test (close valves, watch for pressure rise)', completed: false },
    { id: '7', description: 'If decay test passes, close valves and remove pump', completed: false },
    { id: '8', description: 'System ready for refrigerant charge', completed: false },
  ]);

  const toggleChecklistItem = (
    checklist: ChecklistItem[],
    setChecklist: React.Dispatch<React.SetStateAction<ChecklistItem[]>>,
    itemId: string
  ) => {
    setChecklist(checklist.map(item => 
      item.id === itemId ? { ...item, completed: !item.completed } : item
    ));
  };

  const calculateProgress = (checklist: ChecklistItem[]) => {
    const completed = checklist.filter(item => item.completed).length;
    return (completed / checklist.length) * 100;
  };

  const resetChecklist = (setChecklist: React.Dispatch<React.SetStateAction<ChecklistItem[]>>) => {
    setChecklist(prev => prev.map(item => ({ ...item, completed: false })));
  };

  const diagrams = [
    {
      id: 'manifold',
      title: 'Manifold Gauge Setup',
      image: '/assets/generated/manifold-gauge-setup.dim_800x600.png',
      description: 'Proper manifold gauge connections for recovery and service procedures',
      tooltips: [
        'Blue gauge: Low-pressure (suction) side',
        'Red gauge: High-pressure (discharge) side',
        'Yellow hose: Center port for recovery cylinder or vacuum pump',
        'Always connect gauges before starting recovery',
      ],
    },
    {
      id: 'cylinder',
      title: 'Recovery Cylinder Connections',
      image: '/assets/generated/recovery-cylinder-connections.dim_700x500.png',
      description: 'Safe recovery cylinder setup and connection procedures',
      tooltips: [
        'Use only DOT-approved recovery cylinders',
        'Never fill cylinders above 80% capacity',
        'Connect liquid port to liquid line for faster recovery',
        'Label cylinders with refrigerant type and date',
      ],
    },
    {
      id: 'vacuum',
      title: 'Vacuum Pump Layout',
      image: '/assets/generated/vacuum-pump-layout.dim_800x600.png',
      description: 'Vacuum pump setup for proper system evacuation',
      tooltips: [
        'Connect micron gauge as close to system as possible',
        'Use large-diameter hoses to minimize restriction',
        'Ensure vacuum pump oil is clean and at proper level',
        'Target vacuum level: below 500 microns',
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header with Badge */}
      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Wrench className="h-6 w-6 text-primary" />
                Recovery, Pump-Down & Vacuum Process Training
              </CardTitle>
              <CardDescription className="mt-2">
                Comprehensive field training for refrigerant recovery and system evacuation procedures
              </CardDescription>
            </div>
            <img
              src="/assets/generated/recovery-pro-badge.dim_200x200.png"
              alt="Recovery Pro Badge"
              className="h-16 w-16 object-contain"
            />
          </div>
        </CardHeader>
      </Card>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="recovery">Recovery</TabsTrigger>
          <TabsTrigger value="pumpdown">Pump-Down</TabsTrigger>
          <TabsTrigger value="vacuum">Evacuation</TabsTrigger>
          <TabsTrigger value="exercises">Exercises</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-4 pt-4">
          {isBeginner && (
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                This module covers essential procedures for safely recovering refrigerant, performing pump-down operations, and evacuating HVAC systems. Master these skills for EPA 608 certification and professional field work.
              </AlertDescription>
            </Alert>
          )}

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Droplet className="h-5 w-5 text-blue-500" />
                  Refrigerant Recovery
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Learn active and passive recovery methods, proper equipment setup, and EPA-mandated recovery levels for different system types.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Gauge className="h-5 w-5 text-orange-500" />
                  Pump-Down Procedure
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Master the pump-down sequence for isolating refrigerant in the condenser before service work or component replacement.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Wind className="h-5 w-5 text-green-500" />
                  System Evacuation
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Achieve proper vacuum levels below 500 microns to remove moisture and non-condensables from HVAC systems.
              </CardContent>
            </Card>
          </div>

          {/* Interactive Diagrams */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ZoomIn className="h-5 w-5 text-primary" />
                Interactive Equipment Diagrams
              </CardTitle>
              <CardDescription>
                Click on any diagram to view detailed setup instructions and safety tips
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {diagrams.map((diagram) => (
                  <div
                    key={diagram.id}
                    className="group cursor-pointer overflow-hidden rounded-lg border transition-all hover:shadow-lg"
                    onClick={() => setSelectedDiagram(diagram.id)}
                  >
                    <img
                      src={diagram.image}
                      alt={diagram.title}
                      className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="p-3">
                      <h4 className="font-semibold">{diagram.title}</h4>
                      <p className="mt-1 text-xs text-muted-foreground">{diagram.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Diagram Modal */}
          {selectedDiagram && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
              onClick={() => setSelectedDiagram(null)}
            >
              <Card className="max-w-4xl" onClick={(e) => e.stopPropagation()}>
                <CardHeader>
                  <CardTitle>
                    {diagrams.find(d => d.id === selectedDiagram)?.title}
                  </CardTitle>
                  <CardDescription>
                    {diagrams.find(d => d.id === selectedDiagram)?.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <img
                    src={diagrams.find(d => d.id === selectedDiagram)?.image}
                    alt={diagrams.find(d => d.id === selectedDiagram)?.title}
                    className="w-full rounded-lg"
                  />
                  <div className="space-y-2">
                    <h4 className="font-semibold">Key Points:</h4>
                    <ul className="space-y-1">
                      {diagrams.find(d => d.id === selectedDiagram)?.tooltips.map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button onClick={() => setSelectedDiagram(null)} className="w-full">
                    Close
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </TabsContent>

        {/* Recovery Tab */}
        <TabsContent value="recovery" className="space-y-4 pt-4">
          <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
            <Alert className="border-yellow-500">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Safety Warning:</strong> Always wear safety glasses and gloves when handling refrigerants. Work in well-ventilated areas. Never vent refrigerants to atmosphere - EPA violations carry severe penalties.
              </AlertDescription>
            </Alert>

            <div>
              <h3 className="text-lg font-semibold">Active vs Passive Recovery</h3>
              <div className="mt-2 grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Active Recovery</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p className="text-muted-foreground">
                      Uses a recovery machine to actively pull refrigerant from the system into a recovery cylinder.
                    </p>
                    <div className="space-y-1">
                      <p className="font-medium">Advantages:</p>
                      <ul className="list-disc pl-5 text-muted-foreground">
                        <li>Faster recovery process</li>
                        <li>Achieves lower vacuum levels</li>
                        <li>Required for most systems</li>
                        <li>More efficient refrigerant removal</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Passive Recovery</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p className="text-muted-foreground">
                      Relies on pressure difference to push refrigerant from system to recovery cylinder.
                    </p>
                    <div className="space-y-1">
                      <p className="font-medium">Limitations:</p>
                      <ul className="list-disc pl-5 text-muted-foreground">
                        <li>Only for small appliances (Type I)</li>
                        <li>Slower recovery process</li>
                        <li>Cannot achieve deep vacuum</li>
                        <li>Limited by pressure differential</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Refrigerant Storage Requirements</h3>
              <ul className="list-disc pl-5 text-muted-foreground">
                <li><strong>DOT-Approved Cylinders:</strong> Use only cylinders rated for refrigerant storage with current certification dates</li>
                <li><strong>80% Fill Rule:</strong> Never fill recovery cylinders above 80% liquid capacity to allow for thermal expansion</li>
                <li><strong>Proper Labeling:</strong> Label cylinders with refrigerant type, recovery date, and "CONTAMINATED" if mixed refrigerants</li>
                <li><strong>Storage Conditions:</strong> Store upright in cool, dry location away from heat sources and direct sunlight</li>
                <li><strong>Color Coding:</strong> Gray cylinders with yellow tops indicate recovered refrigerant</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Oil Management During Recovery</h3>
              <p className="text-muted-foreground">
                Refrigerant oil circulates with refrigerant and must be properly managed during recovery:
              </p>
              <ul className="list-disc pl-5 text-muted-foreground">
                <li><strong>Oil Separation:</strong> Recovery machines separate oil from refrigerant - drain oil regularly per manufacturer specs</li>
                <li><strong>Oil Return:</strong> Some oil remains in recovery cylinder - account for this when recharging systems</li>
                <li><strong>Oil Level Checks:</strong> Monitor compressor oil level after recovery - add oil if needed before recharging</li>
                <li><strong>Oil Compatibility:</strong> Ensure replacement oil matches system requirements (POE, mineral, etc.)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">EPA-Mandated Recovery Levels</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-2 text-left">System Type</th>
                      <th className="border border-border p-2 text-left">Required Level</th>
                      <th className="border border-border p-2 text-left">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="border border-border p-2">Small Appliances (Type I)</td>
                      <td className="border border-border p-2">0 psig</td>
                      <td className="border border-border p-2">Atmospheric pressure acceptable</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2">High-Pressure (Type II)</td>
                      <td className="border border-border p-2">0 psig or 10" Hg</td>
                      <td className="border border-border p-2">Depends on equipment</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2">Low-Pressure (Type III)</td>
                      <td className="border border-border p-2">25mm Hg absolute</td>
                      <td className="border border-border p-2">29" Hg vacuum required</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recovery Checklist */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Step-by-Step Recovery Checklist</span>
                  <Badge variant="outline">
                    {recoveryChecklist.filter(i => i.completed).length} / {recoveryChecklist.length}
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Follow this checklist for safe and compliant refrigerant recovery
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Progress value={calculateProgress(recoveryChecklist)} className="h-2" />
                <div className="space-y-2">
                  {recoveryChecklist.map((item) => (
                    <div key={item.id} className="flex items-start gap-3 rounded-lg border p-3">
                      <Checkbox
                        checked={item.completed}
                        onCheckedChange={() => toggleChecklistItem(recoveryChecklist, setRecoveryChecklist, item.id)}
                        className="mt-0.5"
                      />
                      <label className="flex-1 cursor-pointer text-sm">
                        {item.description}
                      </label>
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  onClick={() => resetChecklist(setRecoveryChecklist)}
                  className="w-full"
                >
                  Reset Checklist
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Pump-Down Tab */}
        <TabsContent value="pumpdown" className="space-y-4 pt-4">
          <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
            {isBeginner && (
              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  Pump-down isolates refrigerant in the condenser/receiver, allowing safe service work on other components without full system recovery.
                </AlertDescription>
              </Alert>
            )}

            <div>
              <h3 className="text-lg font-semibold">When to Use Pump-Down</h3>
              <ul className="list-disc pl-5 text-muted-foreground">
                <li>Replacing evaporator coil or expansion device</li>
                <li>Servicing compressor without full recovery</li>
                <li>Repairing leaks in low-pressure side</li>
                <li>Quick service on systems with receiver</li>
                <li>Minimizing refrigerant loss during repairs</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Pump-Down Procedure</h3>
              <p className="text-muted-foreground">
                The pump-down process uses the compressor to move refrigerant from the low side to the high side, where it's stored in the condenser and receiver:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                <li><strong>Close Liquid Line Valve:</strong> Front-seat the liquid line service valve to stop refrigerant flow to evaporator</li>
                <li><strong>Run Compressor:</strong> Allow compressor to continue running - it will pump refrigerant from evaporator to condenser</li>
                <li><strong>Monitor Suction Pressure:</strong> Watch low-side gauge drop to 0-2 psig as refrigerant is pumped out</li>
                <li><strong>Close Suction Valve:</strong> When pressure stabilizes at low level, front-seat suction service valve</li>
                <li><strong>Shut Off Compressor:</strong> Turn off compressor immediately after closing suction valve</li>
                <li><strong>Verify Isolation:</strong> Check that both service valves are closed and system is isolated</li>
              </ol>
            </div>

            <Alert className="border-yellow-500">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Critical Safety:</strong> Never let suction pressure go into vacuum during pump-down. Stop at 0-2 psig to prevent pulling air and moisture into the system. Always shut off compressor immediately after closing suction valve.
              </AlertDescription>
            </Alert>

            <div>
              <h3 className="text-lg font-semibold">Pump-Down Limitations</h3>
              <ul className="list-disc pl-5 text-muted-foreground">
                <li>Only works on systems with service valves and adequate receiver capacity</li>
                <li>Cannot be used if condenser or liquid line needs service</li>
                <li>Not suitable for systems with leaks on high-pressure side</li>
                <li>May not capture all refrigerant - some remains in evaporator and lines</li>
                <li>Not a substitute for proper recovery when required by EPA regulations</li>
              </ul>
            </div>

            {/* Pump-Down Checklist */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Pump-Down Sequence Checklist</span>
                  <Badge variant="outline">
                    {pumpDownChecklist.filter(i => i.completed).length} / {pumpDownChecklist.length}
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Follow this sequence carefully to safely isolate refrigerant
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Progress value={calculateProgress(pumpDownChecklist)} className="h-2" />
                <div className="space-y-2">
                  {pumpDownChecklist.map((item) => (
                    <div key={item.id} className="flex items-start gap-3 rounded-lg border p-3">
                      <Checkbox
                        checked={item.completed}
                        onCheckedChange={() => toggleChecklistItem(pumpDownChecklist, setPumpDownChecklist, item.id)}
                        className="mt-0.5"
                      />
                      <label className="flex-1 cursor-pointer text-sm">
                        {item.description}
                      </label>
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  onClick={() => resetChecklist(setPumpDownChecklist)}
                  className="w-full"
                >
                  Reset Checklist
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Vacuum/Evacuation Tab */}
        <TabsContent value="vacuum" className="space-y-4 pt-4">
          <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Importance of Proper Evacuation</h3>
              <p className="text-muted-foreground">
                Achieving a deep vacuum below 500 microns is critical for system performance and longevity:
              </p>
              <ul className="list-disc pl-5 text-muted-foreground">
                <li><strong>Moisture Removal:</strong> Water boils at 72°F under 500 microns vacuum, allowing complete moisture removal</li>
                <li><strong>Non-Condensable Removal:</strong> Air and other gases that don't condense must be evacuated</li>
                <li><strong>System Efficiency:</strong> Moisture and air reduce cooling capacity and increase operating pressures</li>
                <li><strong>Compressor Protection:</strong> Moisture forms acids that damage compressor components and oil</li>
                <li><strong>Prevent Freeze-Ups:</strong> Moisture can freeze at expansion device, blocking refrigerant flow</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Evacuation Equipment</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Vacuum Pump</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <p>Two-stage vacuum pump capable of reaching 50 microns or lower</p>
                    <ul className="list-disc pl-5">
                      <li>Check oil level and condition before use</li>
                      <li>Use large-diameter hoses (3/8" minimum)</li>
                      <li>Keep hoses as short as possible</li>
                      <li>Ensure pump is rated for system size</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Micron Gauge</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <p>Electronic vacuum gauge reading in microns (1/1000 of mm Hg)</p>
                    <ul className="list-disc pl-5">
                      <li>Connect directly to system, not pump</li>
                      <li>Place as far from pump as possible</li>
                      <li>Calibrate regularly per manufacturer</li>
                      <li>Target: below 500 microns</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Evacuation Procedure</h3>
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                <li><strong>System Preparation:</strong> Ensure all leaks are repaired and system is clean and dry</li>
                <li><strong>Connect Equipment:</strong> Attach vacuum pump and micron gauge to system service ports</li>
                <li><strong>Initial Evacuation:</strong> Open service valves and start vacuum pump - pull to 1000 microns</li>
                <li><strong>First Nitrogen Break:</strong> Break vacuum with dry nitrogen to atmospheric pressure</li>
                <li><strong>Second Evacuation:</strong> Pull vacuum again to 500 microns or lower</li>
                <li><strong>Decay Test:</strong> Close valves, shut off pump, monitor micron gauge for 15 minutes</li>
                <li><strong>Pass Criteria:</strong> Pressure rise should be less than 100 microns in 15 minutes</li>
                <li><strong>Triple Evacuation:</strong> For critical systems, repeat nitrogen break and evacuation a third time</li>
              </ol>
            </div>

            <Alert className="border-blue-500">
              <Info className="h-4 w-4" />
              <AlertDescription>
                <strong>Pro Tip:</strong> The triple evacuation method (evacuate, break with nitrogen, evacuate again) is the most effective way to remove moisture. Each evacuation cycle removes more water vapor than the previous one.
              </AlertDescription>
            </Alert>

            <div>
              <h3 className="text-lg font-semibold">Troubleshooting Vacuum Issues</h3>
              <div className="space-y-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Cannot Reach 500 Microns</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <ul className="list-disc pl-5">
                      <li>Check for leaks using leak detector</li>
                      <li>Verify vacuum pump oil is clean</li>
                      <li>Ensure hoses are not restricted</li>
                      <li>System may have excessive moisture - continue evacuation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Pressure Rises During Decay Test</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <ul className="list-disc pl-5">
                      <li>Small rise (under 100 microns): Acceptable, moisture outgassing</li>
                      <li>Large rise (over 500 microns): System has leak, locate and repair</li>
                      <li>Steady rise: Check all valve positions and connections</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Vacuum Checklist */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Evacuation Process Checklist</span>
                  <Badge variant="outline">
                    {vacuumChecklist.filter(i => i.completed).length} / {vacuumChecklist.length}
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Complete evacuation procedure for moisture-free system
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Progress value={calculateProgress(vacuumChecklist)} className="h-2" />
                <div className="space-y-2">
                  {vacuumChecklist.map((item) => (
                    <div key={item.id} className="flex items-start gap-3 rounded-lg border p-3">
                      <Checkbox
                        checked={item.completed}
                        onCheckedChange={() => toggleChecklistItem(vacuumChecklist, setVacuumChecklist, item.id)}
                        className="mt-0.5"
                      />
                      <label className="flex-1 cursor-pointer text-sm">
                        {item.description}
                      </label>
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  onClick={() => resetChecklist(setVacuumChecklist)}
                  className="w-full"
                >
                  Reset Checklist
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Exercises Tab */}
        <TabsContent value="exercises" className="space-y-4 pt-4">
          <RecoveryExercises studyMode={studyMode} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function RecoveryExercises({ studyMode }: { studyMode: StudyMode }) {
  const [micronReading, setMicronReading] = useState('');
  const [micronResult, setMicronResult] = useState<{ correct: boolean; message: string } | null>(null);
  
  const [valveSetup, setValveSetup] = useState<string[]>([]);
  const [valveResult, setValveResult] = useState<{ correct: boolean; message: string } | null>(null);

  const correctValveOrder = [
    'Connect manifold gauges to service ports',
    'Connect recovery cylinder to center port',
    'Open recovery cylinder valve',
    'Start recovery machine',
    'Monitor pressure gauges',
  ];

  const valveOptions = [
    'Start recovery machine',
    'Connect manifold gauges to service ports',
    'Monitor pressure gauges',
    'Open recovery cylinder valve',
    'Connect recovery cylinder to center port',
  ];

  const checkMicronReading = () => {
    const reading = parseFloat(micronReading);
    if (isNaN(reading)) {
      setMicronResult({ correct: false, message: 'Please enter a valid number' });
      return;
    }

    if (reading < 500) {
      setMicronResult({
        correct: true,
        message: `Excellent! ${reading} microns is below the 500 micron target. System is properly evacuated and ready for refrigerant charge.`,
      });
    } else if (reading < 1000) {
      setMicronResult({
        correct: false,
        message: `${reading} microns is close but not quite there. Continue evacuation to reach below 500 microns for optimal moisture removal.`,
      });
    } else {
      setMicronResult({
        correct: false,
        message: `${reading} microns is too high. System needs more evacuation time. Check for leaks if vacuum doesn't improve.`,
      });
    }
  };

  const checkValveSetup = () => {
    const isCorrect = JSON.stringify(valveSetup) === JSON.stringify(correctValveOrder);
    
    if (isCorrect) {
      setValveResult({
        correct: true,
        message: 'Perfect! You have the correct valve setup sequence for safe refrigerant recovery.',
      });
    } else {
      setValveResult({
        correct: false,
        message: 'Not quite right. Review the recovery procedure and try again. Remember: connect equipment first, then open valves, then start machine.',
      });
    }
  };

  return (
    <div className="space-y-6">
      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          Practice these exercises to reinforce your understanding of recovery procedures and vacuum measurements.
        </AlertDescription>
      </Alert>

      {/* Micron Reading Exercise */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gauge className="h-5 w-5 text-primary" />
            Exercise 1: Vacuum Level Assessment
          </CardTitle>
          <CardDescription>
            You're evacuating a system and need to determine if the vacuum level is acceptable
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="micronReading">Enter Micron Gauge Reading</Label>
            <Input
              id="micronReading"
              type="number"
              value={micronReading}
              onChange={(e) => setMicronReading(e.target.value)}
              placeholder="e.g., 450"
            />
            <p className="text-xs text-muted-foreground">
              Hint: Target vacuum level is below 500 microns
            </p>
          </div>
          <Button onClick={checkMicronReading} disabled={!micronReading}>
            Check Reading
          </Button>
          {micronResult && (
            <Alert className={micronResult.correct ? 'border-green-500' : 'border-yellow-500'}>
              <div className="flex items-start gap-2">
                {micronResult.correct ? (
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-500" />
                ) : (
                  <AlertTriangle className="h-5 w-5 flex-shrink-0 text-yellow-500" />
                )}
                <AlertDescription>{micronResult.message}</AlertDescription>
              </div>
            </Alert>
          )}
        </CardContent>
      </Card>

      {/* Valve Setup Exercise */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="h-5 w-5 text-primary" />
            Exercise 2: Recovery Equipment Setup Sequence
          </CardTitle>
          <CardDescription>
            Arrange the steps in the correct order for safe refrigerant recovery
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Drag or click to arrange steps in correct order:</Label>
            <div className="space-y-2">
              {valveSetup.map((step, index) => (
                <div key={index} className="flex items-center gap-2 rounded-lg border bg-primary/5 p-3">
                  <Badge variant="outline">{index + 1}</Badge>
                  <span className="flex-1 text-sm">{step}</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setValveSetup(valveSetup.filter((_, i) => i !== index))}
                  >
                    Remove
                  </Button>
                </div>
              ))}
            </div>
            {valveSetup.length < valveOptions.length && (
              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground">Available steps:</Label>
                <div className="flex flex-wrap gap-2">
                  {valveOptions
                    .filter((option) => !valveSetup.includes(option))
                    .map((option) => (
                      <Button
                        key={option}
                        size="sm"
                        variant="outline"
                        onClick={() => setValveSetup([...valveSetup, option])}
                      >
                        {option}
                      </Button>
                    ))}
                </div>
              </div>
            )}
          </div>
          <Button
            onClick={checkValveSetup}
            disabled={valveSetup.length !== valveOptions.length}
          >
            Check Sequence
          </Button>
          {valveResult && (
            <Alert className={valveResult.correct ? 'border-green-500' : 'border-yellow-500'}>
              <div className="flex items-start gap-2">
                {valveResult.correct ? (
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-500" />
                ) : (
                  <AlertTriangle className="h-5 w-5 flex-shrink-0 text-yellow-500" />
                )}
                <AlertDescription>{valveResult.message}</AlertDescription>
              </div>
            </Alert>
          )}
        </CardContent>
      </Card>

      {/* EPA Context Integration */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            EPA 608 Exam Connection
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p className="text-muted-foreground">
            These recovery and evacuation procedures are heavily tested on the EPA 608 certification exam:
          </p>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li><strong>Type I:</strong> Recovery levels for small appliances (0 psig)</li>
            <li><strong>Type II:</strong> Active recovery requirements and vacuum levels</li>
            <li><strong>Type III:</strong> Low-pressure system evacuation procedures</li>
            <li><strong>Universal:</strong> All recovery methods and equipment requirements</li>
          </ul>
          <p className="mt-3 text-muted-foreground">
            Practice these procedures thoroughly - they represent a significant portion of exam questions and are essential for field work.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
