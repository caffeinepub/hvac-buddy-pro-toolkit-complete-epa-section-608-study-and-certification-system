import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import { Calculator, AlertTriangle, CheckCircle2, Info, TrendingUp, TrendingDown } from 'lucide-react';

interface SuperheatSubcoolingCalculatorProps {
  studyMode: { __kind__: 'beginner' | 'expert' };
}

export default function SuperheatSubcoolingCalculator({ studyMode }: SuperheatSubcoolingCalculatorProps) {
  const [refrigerant, setRefrigerant] = useState<string>('R-410A');
  
  // Superheat inputs
  const [suctionTemp, setSuctionTemp] = useState<number>(50);
  const [suctionPressure, setSuctionPressure] = useState<number>(118);
  
  // Subcooling inputs
  const [liquidTemp, setLiquidTemp] = useState<number>(95);
  const [dischargePressure, setDischargePressure] = useState<number>(278);
  
  // Target charge inputs
  const [outdoorTemp, setOutdoorTemp] = useState<number>(75);
  const [indoorWetBulb, setIndoorWetBulb] = useState<number>(63);

  const isBeginner = studyMode.__kind__ === 'beginner';

  // Pressure-Temperature conversion tables (simplified)
  const ptCharts: Record<string, (pressure: number) => number> = {
    'R-410A': (p) => 0.0857 * p + 30,
    'R-22': (p) => 0.1143 * p + 25,
    'R-134a': (p) => 0.2286 * p + 15,
    'R-404A': (p) => 0.1 * p + 28,
  };

  const saturationTempSuction = ptCharts[refrigerant](suctionPressure);
  const saturationTempDischarge = ptCharts[refrigerant](dischargePressure);

  const superheat = suctionTemp - saturationTempSuction;
  const subcooling = saturationTempDischarge - liquidTemp;

  // Target superheat/subcooling based on conditions
  const getTargetSuperheat = () => {
    // Simplified target calculation
    const baseTarget = 10;
    const tempAdjustment = (outdoorTemp - 75) * 0.1;
    const humidityAdjustment = (indoorWetBulb - 63) * 0.15;
    return baseTarget + tempAdjustment + humidityAdjustment;
  };

  const getTargetSubcooling = () => {
    // Simplified target calculation
    const baseTarget = 12;
    const tempAdjustment = (outdoorTemp - 75) * 0.05;
    return baseTarget + tempAdjustment;
  };

  const targetSuperheat = getTargetSuperheat();
  const targetSubcooling = getTargetSubcooling();

  const getSuperheatStatus = () => {
    const diff = Math.abs(superheat - targetSuperheat);
    if (diff <= 2) return { color: 'green', text: 'Optimal', icon: CheckCircle2 };
    if (diff <= 5) return { color: 'yellow', text: 'Acceptable', icon: AlertTriangle };
    return { color: 'red', text: 'Out of Range', icon: AlertTriangle };
  };

  const getSubcoolingStatus = () => {
    const diff = Math.abs(subcooling - targetSubcooling);
    if (diff <= 2) return { color: 'green', text: 'Optimal', icon: CheckCircle2 };
    if (diff <= 4) return { color: 'yellow', text: 'Acceptable', icon: AlertTriangle };
    return { color: 'red', text: 'Out of Range', icon: AlertTriangle };
  };

  const superheatStatus = getSuperheatStatus();
  const subcoolingStatus = getSubcoolingStatus();
  const SuperheatIcon = superheatStatus.icon;
  const SubcoolingIcon = subcoolingStatus.icon;

  const getDiagnosis = () => {
    const issues: string[] = [];
    
    if (superheat < targetSuperheat - 5) {
      issues.push('LOW SUPERHEAT: System may be overcharged or TXV is flooding. Risk of liquid slugging to compressor.');
    } else if (superheat > targetSuperheat + 5) {
      issues.push('HIGH SUPERHEAT: System may be undercharged or metering device restricted. Reduced cooling capacity.');
    }
    
    if (subcooling < targetSubcooling - 4) {
      issues.push('LOW SUBCOOLING: System is undercharged. Add refrigerant and recheck.');
    } else if (subcooling > targetSubcooling + 4) {
      issues.push('HIGH SUBCOOLING: System may be overcharged or liquid line restricted. Remove refrigerant and recheck.');
    }
    
    if (issues.length === 0) {
      return 'System charge is correct. Both superheat and subcooling are within target range for current conditions.';
    }
    
    return issues.join(' ');
  };

  const getChargeRecommendation = () => {
    const superheatDiff = superheat - targetSuperheat;
    const subcoolingDiff = subcooling - targetSubcooling;
    
    if (superheatDiff > 5 && subcoolingDiff < -4) {
      return { action: 'Add Refrigerant', amount: 'Moderate', icon: TrendingUp };
    } else if (superheatDiff < -5 && subcoolingDiff > 4) {
      return { action: 'Remove Refrigerant', amount: 'Moderate', icon: TrendingDown };
    } else if (superheatDiff > 3) {
      return { action: 'Add Refrigerant', amount: 'Small', icon: TrendingUp };
    } else if (superheatDiff < -3) {
      return { action: 'Remove Refrigerant', amount: 'Small', icon: TrendingDown };
    }
    return { action: 'No Adjustment Needed', amount: 'Optimal', icon: CheckCircle2 };
  };

  const chargeRec = getChargeRecommendation();
  const ChargeIcon = chargeRec.icon;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-primary" />
          Advanced Superheat/Subcooling Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {isBeginner && (
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              This calculator determines proper system charge by comparing measured superheat and subcooling
              to target values based on operating conditions. Target values adjust for outdoor temperature
              and indoor humidity.
            </AlertDescription>
          </Alert>
        )}

        <Tabs defaultValue="measurements" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="measurements">Measurements</TabsTrigger>
            <TabsTrigger value="conditions">Conditions</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
          </TabsList>

          <TabsContent value="measurements" className="space-y-4">
            <div className="space-y-2">
              <Label>Refrigerant Type</Label>
              <Select value={refrigerant} onValueChange={setRefrigerant}>
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

            <div className="space-y-4">
              <h4 className="font-semibold">Superheat Measurements</h4>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Suction Line Temperature (°F)</Label>
                  <Input
                    type="number"
                    value={suctionTemp}
                    onChange={(e) => setSuctionTemp(Number(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Suction Pressure (PSI)</Label>
                  <Input
                    type="number"
                    value={suctionPressure}
                    onChange={(e) => setSuctionPressure(Number(e.target.value))}
                  />
                </div>
              </div>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-3">
                  <p className="text-sm">
                    <strong>Saturation Temperature:</strong> {saturationTempSuction.toFixed(1)}°F
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Subcooling Measurements</h4>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Liquid Line Temperature (°F)</Label>
                  <Input
                    type="number"
                    value={liquidTemp}
                    onChange={(e) => setLiquidTemp(Number(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Discharge Pressure (PSI)</Label>
                  <Input
                    type="number"
                    value={dischargePressure}
                    onChange={(e) => setDischargePressure(Number(e.target.value))}
                  />
                </div>
              </div>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-3">
                  <p className="text-sm">
                    <strong>Saturation Temperature:</strong> {saturationTempDischarge.toFixed(1)}°F
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="conditions" className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                Operating conditions affect target superheat and subcooling values. Enter current conditions
                for accurate charge assessment.
              </AlertDescription>
            </Alert>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Outdoor Ambient Temperature (°F)</Label>
                <Input
                  type="number"
                  value={outdoorTemp}
                  onChange={(e) => setOutdoorTemp(Number(e.target.value))}
                />
                <p className="text-xs text-muted-foreground">
                  Measure at condenser unit location
                </p>
              </div>

              <div className="space-y-2">
                <Label>Indoor Wet Bulb Temperature (°F)</Label>
                <Input
                  type="number"
                  value={indoorWetBulb}
                  onChange={(e) => setIndoorWetBulb(Number(e.target.value))}
                />
                <p className="text-xs text-muted-foreground">
                  Measure at return air grille with wet bulb thermometer
                </p>
              </div>
            </div>

            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">Calculated Targets</h4>
                <div className="grid gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Target Superheat:</span>
                    <span className="font-semibold">{targetSuperheat.toFixed(1)}°F</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Target Subcooling:</span>
                    <span className="font-semibold">{targetSubcooling.toFixed(1)}°F</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="results" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className={`border-2 border-${superheatStatus.color}-500 bg-${superheatStatus.color}-500/10`}>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Superheat</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-3xl font-bold">{superheat.toFixed(1)}°F</p>
                        <p className="text-xs text-muted-foreground">Target: {targetSuperheat.toFixed(1)}°F</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <SuperheatIcon className={`h-8 w-8 text-${superheatStatus.color}-600`} />
                        <Badge variant="outline" className={`border-${superheatStatus.color}-500`}>
                          {superheatStatus.text}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={`border-2 border-${subcoolingStatus.color}-500 bg-${subcoolingStatus.color}-500/10`}>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Subcooling</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-3xl font-bold">{subcooling.toFixed(1)}°F</p>
                        <p className="text-xs text-muted-foreground">Target: {targetSubcooling.toFixed(1)}°F</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <SubcoolingIcon className={`h-8 w-8 text-${subcoolingStatus.color}-600`} />
                        <Badge variant="outline" className={`border-${subcoolingStatus.color}-500`}>
                          {subcoolingStatus.text}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <ChargeIcon className="h-6 w-6 text-primary" />
                  <div>
                    <h4 className="font-semibold">{chargeRec.action}</h4>
                    <p className="text-sm text-muted-foreground">{chargeRec.amount} Adjustment</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                <strong>Diagnosis:</strong> {getDiagnosis()}
              </AlertDescription>
            </Alert>
          </TabsContent>
        </Tabs>

        {isBeginner && (
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Charging Best Practices</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Always use manufacturer's charging charts when available</li>
                <li>Allow system to run 15+ minutes before taking measurements</li>
                <li>Verify airflow is correct before adjusting charge</li>
                <li>Add/remove refrigerant in small increments</li>
                <li>Recheck measurements after each adjustment</li>
                <li>Document final superheat and subcooling values</li>
              </ul>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
}
