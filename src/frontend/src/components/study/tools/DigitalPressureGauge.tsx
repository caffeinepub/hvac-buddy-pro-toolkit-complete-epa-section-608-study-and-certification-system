import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { Gauge, AlertTriangle, CheckCircle2, Info } from 'lucide-react';

interface DigitalPressureGaugeProps {
  studyMode: { __kind__: 'beginner' | 'expert' };
}

export default function DigitalPressureGauge({ studyMode }: DigitalPressureGaugeProps) {
  const [refrigerant, setRefrigerant] = useState<string>('R-410A');
  const [pressure, setPressure] = useState<number>(120);
  const [side, setSide] = useState<'low' | 'high'>('low');
  const [ambientTemp, setAmbientTemp] = useState<number>(75);

  const isBeginner = studyMode.__kind__ === 'beginner';

  const refrigerantRanges = {
    'R-410A': { low: { normal: [60, 80], caution: [50, 100], critical: [0, 150] }, high: { normal: [250, 300], caution: [200, 350], critical: [0, 500] } },
    'R-22': { low: { normal: [65, 75], caution: [55, 85], critical: [0, 120] }, high: { normal: [200, 250], caution: [150, 300], critical: [0, 400] } },
    'R-134a': { low: { normal: [25, 35], caution: [15, 45], critical: [0, 80] }, high: { normal: [120, 150], caution: [100, 180], critical: [0, 250] } },
    'R-404A': { low: { normal: [35, 45], caution: [25, 55], critical: [0, 90] }, high: { normal: [200, 250], caution: [150, 300], critical: [0, 400] } },
  };

  const currentRange = refrigerantRanges[refrigerant as keyof typeof refrigerantRanges][side];

  const getStatus = () => {
    if (pressure >= currentRange.normal[0] && pressure <= currentRange.normal[1]) {
      return { color: 'green', text: 'Normal', icon: CheckCircle2 };
    } else if (pressure >= currentRange.caution[0] && pressure <= currentRange.caution[1]) {
      return { color: 'yellow', text: 'Caution', icon: AlertTriangle };
    } else {
      return { color: 'red', text: 'Critical', icon: AlertTriangle };
    }
  };

  const status = getStatus();
  const StatusIcon = status.icon;

  const getFeedback = () => {
    if (side === 'low') {
      if (pressure < currentRange.normal[0]) {
        return 'Low suction pressure may indicate: undercharge, restricted metering device, or low evaporator load. Check superheat and system charge.';
      } else if (pressure > currentRange.normal[1]) {
        return 'High suction pressure may indicate: overcharge, inefficient compressor, or high evaporator load. Check subcooling and compressor performance.';
      } else {
        return 'Suction pressure is within normal range. System appears to be operating correctly. Verify superheat for proper charge.';
      }
    } else {
      if (pressure < currentRange.normal[0]) {
        return 'Low discharge pressure may indicate: undercharge, low ambient temperature, or compressor inefficiency. Check system charge and compressor operation.';
      } else if (pressure > currentRange.normal[1]) {
        return 'High discharge pressure may indicate: overcharge, restricted condenser airflow, or high ambient temperature. Check condenser coil and fan operation.';
      } else {
        return 'Discharge pressure is within normal range. System appears to be operating correctly. Verify subcooling for proper charge.';
      }
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Gauge className="h-5 w-5 text-primary" />
          Digital Pressure Gauge Simulator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {isBeginner && (
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              Pressure gauges measure refrigerant pressure in PSI. Low side (blue) measures suction pressure,
              high side (red) measures discharge pressure. Proper pressures indicate correct system operation.
            </AlertDescription>
          </Alert>
        )}

        <div className="grid gap-4 md:grid-cols-2">
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

          <div className="space-y-2">
            <Label>Measurement Side</Label>
            <Select value={side} onValueChange={(v) => setSide(v as 'low' | 'high')}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low Side (Suction)</SelectItem>
                <SelectItem value="high">High Side (Discharge)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Ambient Temperature: {ambientTemp}°F</Label>
          <input
            type="range"
            min="50"
            max="110"
            value={ambientTemp}
            onChange={(e) => setAmbientTemp(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label>Pressure Reading: {pressure} PSI</Label>
          <input
            type="range"
            min="0"
            max={side === 'low' ? 150 : 500}
            value={pressure}
            onChange={(e) => setPressure(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <Card className={`border-2 border-${status.color}-500 bg-${status.color}-500/10`}>
          <CardContent className="p-6">
            <div className="flex items-center justify-center gap-4">
              <StatusIcon className={`h-12 w-12 text-${status.color}-600`} />
              <div className="text-center">
                <div className="text-4xl font-bold">{pressure} PSI</div>
                <Badge variant="outline" className={`mt-2 border-${status.color}-500 text-${status.color}-700`}>
                  {status.text}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Alert className={`border-${status.color}-500/50 bg-${status.color}-500/10`}>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Analysis:</strong> {getFeedback()}
          </AlertDescription>
        </Alert>

        {isBeginner && (
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Learning Tip</h4>
              <p className="text-sm text-muted-foreground">
                Normal pressure ranges vary by refrigerant type and ambient temperature. R-410A operates at
                60% higher pressures than R-22. Always use manufacturer specifications and pressure-temperature
                charts for accurate diagnosis.
              </p>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
}
