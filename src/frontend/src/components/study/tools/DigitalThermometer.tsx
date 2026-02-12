import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { Thermometer, Info, CheckCircle2, AlertTriangle } from 'lucide-react';

interface DigitalThermometerProps {
  studyMode: { __kind__: 'beginner' | 'expert' };
}

export default function DigitalThermometer({ studyMode }: DigitalThermometerProps) {
  const [suctionTemp, setSuctionTemp] = useState<number>(50);
  const [saturationTemp, setSaturationTemp] = useState<number>(40);
  const [liquidTemp, setLiquidTemp] = useState<number>(95);
  const [condensingTemp, setCondensingTemp] = useState<number>(110);

  const isBeginner = studyMode.__kind__ === 'beginner';

  const superheat = suctionTemp - saturationTemp;
  const subcooling = condensingTemp - liquidTemp;

  const getSuperheatStatus = () => {
    if (superheat >= 8 && superheat <= 12) return { color: 'green', text: 'Normal', icon: CheckCircle2 };
    if (superheat >= 5 && superheat <= 15) return { color: 'yellow', text: 'Caution', icon: AlertTriangle };
    return { color: 'red', text: 'Critical', icon: AlertTriangle };
  };

  const getSubcoolingStatus = () => {
    if (subcooling >= 10 && subcooling <= 15) return { color: 'green', text: 'Normal', icon: CheckCircle2 };
    if (subcooling >= 7 && subcooling <= 18) return { color: 'yellow', text: 'Caution', icon: AlertTriangle };
    return { color: 'red', text: 'Critical', icon: AlertTriangle };
  };

  const superheatStatus = getSuperheatStatus();
  const subcoolingStatus = getSubcoolingStatus();
  const SuperheatIcon = superheatStatus.icon;
  const SubcoolingIcon = subcoolingStatus.icon;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Thermometer className="h-5 w-5 text-primary" />
          Digital Thermometer & Superheat/Subcooling Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {isBeginner && (
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              Superheat measures how much vapor is heated above saturation temperature. Subcooling measures
              how much liquid is cooled below condensing temperature. Both indicate proper system charge.
            </AlertDescription>
          </Alert>
        )}

        <div className="space-y-4">
          <h3 className="font-semibold">Superheat Measurement</h3>
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
              <Label>Saturation Temperature (°F)</Label>
              <Input
                type="number"
                value={saturationTemp}
                onChange={(e) => setSaturationTemp(Number(e.target.value))}
              />
            </div>
          </div>

          <Card className={`border-2 border-${superheatStatus.color}-500 bg-${superheatStatus.color}-500/10`}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Superheat</p>
                  <p className="text-3xl font-bold">{superheat.toFixed(1)}°F</p>
                </div>
                <div className="flex items-center gap-2">
                  <SuperheatIcon className={`h-8 w-8 text-${superheatStatus.color}-600`} />
                  <Badge variant="outline" className={`border-${superheatStatus.color}-500`}>
                    {superheatStatus.text}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">Subcooling Measurement</h3>
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
              <Label>Condensing Temperature (°F)</Label>
              <Input
                type="number"
                value={condensingTemp}
                onChange={(e) => setCondensingTemp(Number(e.target.value))}
              />
            </div>
          </div>

          <Card className={`border-2 border-${subcoolingStatus.color}-500 bg-${subcoolingStatus.color}-500/10`}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Subcooling</p>
                  <p className="text-3xl font-bold">{subcooling.toFixed(1)}°F</p>
                </div>
                <div className="flex items-center gap-2">
                  <SubcoolingIcon className={`h-8 w-8 text-${subcoolingStatus.color}-600`} />
                  <Badge variant="outline" className={`border-${subcoolingStatus.color}-500`}>
                    {subcoolingStatus.text}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Diagnosis:</strong>{' '}
            {superheat < 5 && 'Low superheat indicates possible overcharge or TXV malfunction. '}
            {superheat > 15 && 'High superheat indicates possible undercharge or restricted metering device. '}
            {subcooling < 7 && 'Low subcooling indicates possible undercharge. '}
            {subcooling > 18 && 'High subcooling indicates possible overcharge or restricted liquid line. '}
            {superheat >= 8 && superheat <= 12 && subcooling >= 10 && subcooling <= 15 &&
              'System charge appears correct. Both superheat and subcooling are within normal range.'}
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
}
