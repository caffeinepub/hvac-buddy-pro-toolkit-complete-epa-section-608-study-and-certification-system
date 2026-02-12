import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
import { useState, useEffect } from 'react';
import { Droplets, AlertTriangle, CheckCircle2, Info, Play, Pause, RotateCcw } from 'lucide-react';

interface VirtualRecoveryUnitProps {
  studyMode: { __kind__: 'beginner' | 'expert' };
}

export default function VirtualRecoveryUnit({ studyMode }: VirtualRecoveryUnitProps) {
  const [refrigerantType, setRefrigerantType] = useState<string>('R-410A');
  const [recoveryMode, setRecoveryMode] = useState<'vapor' | 'liquid' | 'push-pull'>('vapor');
  const [isRecovering, setIsRecovering] = useState(false);
  const [recoveredAmount, setRecoveredAmount] = useState<number>(0);
  const [systemPressure, setSystemPressure] = useState<number>(120);
  const [cylinderPressure, setCylinderPressure] = useState<number>(0);
  const [safetyChecks, setSafetyChecks] = useState({
    cylinderVerified: false,
    hoseConnected: false,
    valvesOpen: false,
    scaleZeroed: false,
  });

  const isBeginner = studyMode.__kind__ === 'beginner';

  const refrigerantData = {
    'R-410A': { totalCharge: 8.5, maxCylinderPressure: 400, recoveryRate: 0.15 },
    'R-22': { totalCharge: 6.0, maxCylinderPressure: 300, recoveryRate: 0.12 },
    'R-134a': { totalCharge: 4.5, maxCylinderPressure: 200, recoveryRate: 0.10 },
    'R-404A': { totalCharge: 7.0, maxCylinderPressure: 350, recoveryRate: 0.13 },
  };

  const currentRefrigerant = refrigerantData[refrigerantType as keyof typeof refrigerantData];
  const recoveryProgress = (recoveredAmount / currentRefrigerant.totalCharge) * 100;
  const allSafetyChecksComplete = Object.values(safetyChecks).every(check => check);

  useEffect(() => {
    if (isRecovering && allSafetyChecksComplete) {
      const interval = setInterval(() => {
        setRecoveredAmount(prev => {
          const newAmount = prev + currentRefrigerant.recoveryRate;
          if (newAmount >= currentRefrigerant.totalCharge) {
            setIsRecovering(false);
            return currentRefrigerant.totalCharge;
          }
          return newAmount;
        });

        setSystemPressure(prev => {
          const newPressure = prev - (120 / currentRefrigerant.totalCharge) * currentRefrigerant.recoveryRate;
          return Math.max(0, newPressure);
        });

        setCylinderPressure(prev => {
          const newPressure = prev + (currentRefrigerant.maxCylinderPressure / currentRefrigerant.totalCharge) * currentRefrigerant.recoveryRate;
          return Math.min(currentRefrigerant.maxCylinderPressure, newPressure);
        });
      }, 500);

      return () => clearInterval(interval);
    }
  }, [isRecovering, allSafetyChecksComplete, currentRefrigerant]);

  const getRecoveryStatus = () => {
    if (recoveryProgress < 50) {
      return { color: 'blue', text: 'In Progress', icon: Play };
    } else if (recoveryProgress < 95) {
      return { color: 'yellow', text: 'Nearly Complete', icon: Play };
    } else if (recoveryProgress >= 100) {
      return { color: 'green', text: 'Complete', icon: CheckCircle2 };
    }
    return { color: 'blue', text: 'In Progress', icon: Play };
  };

  const status = getRecoveryStatus();
  const StatusIcon = status.icon;

  const handleReset = () => {
    setIsRecovering(false);
    setRecoveredAmount(0);
    setSystemPressure(120);
    setCylinderPressure(0);
    setSafetyChecks({
      cylinderVerified: false,
      hoseConnected: false,
      valvesOpen: false,
      scaleZeroed: false,
    });
  };

  const getEfficiencyRating = () => {
    if (recoveryMode === 'push-pull') return '95%';
    if (recoveryMode === 'liquid') return '85%';
    return '70%';
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Droplets className="h-5 w-5 text-primary" />
          Virtual Recovery Unit Simulator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {isBeginner && (
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              Recovery units remove refrigerant from systems for service or disposal. EPA regulations require
              recovery to specific vacuum levels. Always use certified recovery equipment and proper cylinders.
              Push-pull method is fastest but requires liquid and vapor connections.
            </AlertDescription>
          </Alert>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Refrigerant Type</Label>
            <Select value={refrigerantType} onValueChange={setRefrigerantType} disabled={isRecovering}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="R-410A">R-410A</SelectItem>
                <SelectItem value="R-22">R-22</SelectItem>
                <SelectItem value="R-134a">R-134a</SelectItem>
                <SelectItem value="R-404A">R-404A</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Recovery Mode</Label>
            <Select value={recoveryMode} onValueChange={(v) => setRecoveryMode(v as typeof recoveryMode)} disabled={isRecovering}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vapor">Vapor Recovery (Slow)</SelectItem>
                <SelectItem value="liquid">Liquid Recovery (Medium)</SelectItem>
                <SelectItem value="push-pull">Push-Pull (Fast)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-3">Pre-Recovery Safety Checklist</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="cylinder"
                  checked={safetyChecks.cylinderVerified}
                  onCheckedChange={(checked) => 
                    setSafetyChecks(prev => ({ ...prev, cylinderVerified: checked as boolean }))
                  }
                  disabled={isRecovering}
                />
                <label htmlFor="cylinder" className="text-sm cursor-pointer">
                  Verify recovery cylinder is certified and not expired
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="hoses"
                  checked={safetyChecks.hoseConnected}
                  onCheckedChange={(checked) => 
                    setSafetyChecks(prev => ({ ...prev, hoseConnected: checked as boolean }))
                  }
                  disabled={isRecovering}
                />
                <label htmlFor="hoses" className="text-sm cursor-pointer">
                  Connect recovery hoses to system and cylinder
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="valves"
                  checked={safetyChecks.valvesOpen}
                  onCheckedChange={(checked) => 
                    setSafetyChecks(prev => ({ ...prev, valvesOpen: checked as boolean }))
                  }
                  disabled={isRecovering}
                />
                <label htmlFor="valves" className="text-sm cursor-pointer">
                  Open service valves and verify connections
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="scale"
                  checked={safetyChecks.scaleZeroed}
                  onCheckedChange={(checked) => 
                    setSafetyChecks(prev => ({ ...prev, scaleZeroed: checked as boolean }))
                  }
                  disabled={isRecovering}
                />
                <label htmlFor="scale" className="text-sm cursor-pointer">
                  Zero electronic scale with empty cylinder
                </label>
              </div>
            </div>
          </CardContent>
        </Card>

        {!allSafetyChecksComplete && (
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              Complete all safety checks before starting recovery. Improper procedures can cause equipment
              damage, refrigerant loss, or personal injury.
            </AlertDescription>
          </Alert>
        )}

        <div className="flex gap-2">
          <Button
            onClick={() => setIsRecovering(!isRecovering)}
            disabled={!allSafetyChecksComplete || recoveryProgress >= 100}
            className="flex-1"
            variant={isRecovering ? 'destructive' : 'default'}
          >
            {isRecovering ? (
              <>
                <Pause className="mr-2 h-4 w-4" />
                Pause Recovery
              </>
            ) : (
              <>
                <Play className="mr-2 h-4 w-4" />
                Start Recovery
              </>
            )}
          </Button>
          <Button onClick={handleReset} variant="outline">
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset
          </Button>
        </div>

        {allSafetyChecksComplete && (
          <>
            <Card className={`border-2 border-${status.color}-500 bg-${status.color}-500/10`}>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <StatusIcon className={`h-10 w-10 text-${status.color}-600`} />
                      <div>
                        <div className="text-2xl font-bold">{recoveredAmount.toFixed(2)} lbs</div>
                        <Badge variant="outline" className={`border-${status.color}-500 text-${status.color}-700`}>
                          {status.text}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Total Charge</p>
                      <p className="text-lg font-semibold">{currentRefrigerant.totalCharge} lbs</p>
                    </div>
                  </div>
                  <Progress value={recoveryProgress} className="h-3" />
                  <p className="text-sm text-center text-muted-foreground">
                    {recoveryProgress.toFixed(1)}% Complete
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">System Pressure</p>
                  <p className="text-2xl font-bold">{systemPressure.toFixed(1)} PSI</p>
                  <Progress value={(systemPressure / 120) * 100} className="mt-2 h-2" />
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">Cylinder Pressure</p>
                  <p className="text-2xl font-bold">{cylinderPressure.toFixed(1)} PSI</p>
                  <Progress value={(cylinderPressure / currentRefrigerant.maxCylinderPressure) * 100} className="mt-2 h-2" />
                </CardContent>
              </Card>
            </div>

            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-4">
                <div className="grid gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Recovery Method:</span>
                    <span className="font-semibold capitalize">{recoveryMode.replace('-', ' ')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Efficiency Rating:</span>
                    <span className="font-semibold">{getEfficiencyRating()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">EPA Required Vacuum:</span>
                    <span className="font-semibold">
                      {refrigerantType === 'R-410A' || refrigerantType === 'R-22' ? '10 inches Hg' : '4 inches Hg'}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {recoveryProgress >= 100 && (
          <Alert className="border-green-500/50 bg-green-500/10">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertDescription>
              <strong>Recovery Complete!</strong> System pressure has reached required vacuum level.
              Close valves, disconnect hoses, and label recovery cylinder with refrigerant type and weight.
            </AlertDescription>
          </Alert>
        )}

        {isBeginner && (
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">EPA Recovery Requirements</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Use certified recovery equipment (EPA approved)</li>
                <li>Recover to required vacuum levels (varies by system type)</li>
                <li>Never vent refrigerant to atmosphere (illegal and harmful)</li>
                <li>Label cylinders with refrigerant type and date</li>
                <li>Do not mix refrigerant types in same cylinder</li>
                <li>Reclaim or properly dispose of recovered refrigerant</li>
              </ul>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
}
