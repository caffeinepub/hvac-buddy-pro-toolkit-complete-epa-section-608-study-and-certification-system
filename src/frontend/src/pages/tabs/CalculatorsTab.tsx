import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator } from "lucide-react";
import { useState } from "react";

export default function CalculatorsTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Quick Calculators
        </CardTitle>
        <CardDescription>
          Field calculators for common HVAC calculations
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="superheat">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="superheat">Superheat</TabsTrigger>
            <TabsTrigger value="subcooling">Subcooling</TabsTrigger>
            <TabsTrigger value="load">Load Est.</TabsTrigger>
            <TabsTrigger value="duct">Duct Size</TabsTrigger>
            <TabsTrigger value="electrical">Electrical</TabsTrigger>
          </TabsList>

          <TabsContent value="superheat" className="space-y-4">
            <SuperheatCalculator />
          </TabsContent>

          <TabsContent value="subcooling" className="space-y-4">
            <SubcoolingCalculator />
          </TabsContent>

          <TabsContent value="load" className="space-y-4">
            <LoadCalculator />
          </TabsContent>

          <TabsContent value="duct" className="space-y-4">
            <DuctSizingCalculator />
          </TabsContent>

          <TabsContent value="electrical" className="space-y-4">
            <ElectricalCalculator />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

function SuperheatCalculator() {
  const [suctionTemp, setSuctionTemp] = useState("");
  const [suctionPressure, setSuctionPressure] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    // Simplified calculation - in reality would use pressure-temperature charts
    const satTemp = Number(suctionPressure) * 0.5 + 32; // Simplified conversion
    const superheat = Number(suctionTemp) - satTemp;
    setResult(superheat);
  };

  return (
    <div className="space-y-4">
      <Alert>
        <AlertDescription>
          Superheat = Suction Line Temperature - Saturation Temperature (from
          pressure)
        </AlertDescription>
      </Alert>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="suctionTemp">Suction Line Temperature (°F)</Label>
          <Input
            id="suctionTemp"
            type="number"
            value={suctionTemp}
            onChange={(e) => setSuctionTemp(e.target.value)}
            placeholder="e.g., 55"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="suctionPressure">Suction Pressure (PSI)</Label>
          <Input
            id="suctionPressure"
            type="number"
            value={suctionPressure}
            onChange={(e) => setSuctionPressure(e.target.value)}
            placeholder="e.g., 68"
          />
        </div>
      </div>
      <Button onClick={calculate} disabled={!suctionTemp || !suctionPressure}>
        Calculate Superheat
      </Button>
      {result !== null && (
        <div className="rounded-lg border border-primary bg-primary/5 p-4">
          <p className="text-sm text-muted-foreground">Superheat:</p>
          <p className="text-2xl font-bold text-primary">
            {result.toFixed(1)}°F
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Target range: 8-12°F for fixed orifice, 5-7°F for TXV systems
          </p>
        </div>
      )}
    </div>
  );
}

function SubcoolingCalculator() {
  const [liquidTemp, setLiquidTemp] = useState("");
  const [liquidPressure, setLiquidPressure] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const satTemp = Number(liquidPressure) * 0.4 + 80; // Simplified conversion
    const subcooling = satTemp - Number(liquidTemp);
    setResult(subcooling);
  };

  return (
    <div className="space-y-4">
      <Alert>
        <AlertDescription>
          Subcooling = Saturation Temperature (from pressure) - Liquid Line
          Temperature
        </AlertDescription>
      </Alert>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="liquidTemp">Liquid Line Temperature (°F)</Label>
          <Input
            id="liquidTemp"
            type="number"
            value={liquidTemp}
            onChange={(e) => setLiquidTemp(e.target.value)}
            placeholder="e.g., 95"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="liquidPressure">Liquid Pressure (PSI)</Label>
          <Input
            id="liquidPressure"
            type="number"
            value={liquidPressure}
            onChange={(e) => setLiquidPressure(e.target.value)}
            placeholder="e.g., 250"
          />
        </div>
      </div>
      <Button onClick={calculate} disabled={!liquidTemp || !liquidPressure}>
        Calculate Subcooling
      </Button>
      {result !== null && (
        <div className="rounded-lg border border-primary bg-primary/5 p-4">
          <p className="text-sm text-muted-foreground">Subcooling:</p>
          <p className="text-2xl font-bold text-primary">
            {result.toFixed(1)}°F
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Target range: 10-15°F for most systems
          </p>
        </div>
      )}
    </div>
  );
}

function LoadCalculator() {
  const [sqft, setSqft] = useState("");
  const [ceilingHeight, setCeilingHeight] = useState("8");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    // Simplified load calculation: 25 BTU per sq ft
    const baseLoad = Number(sqft) * 25;
    const heightFactor = Number(ceilingHeight) / 8;
    const totalLoad = baseLoad * heightFactor;
    setResult(totalLoad);
  };

  return (
    <div className="space-y-4">
      <Alert>
        <AlertDescription>
          Simplified cooling load estimate based on square footage and ceiling
          height
        </AlertDescription>
      </Alert>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="sqft">Square Footage</Label>
          <Input
            id="sqft"
            type="number"
            value={sqft}
            onChange={(e) => setSqft(e.target.value)}
            placeholder="e.g., 1500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="ceilingHeight">Ceiling Height (ft)</Label>
          <Input
            id="ceilingHeight"
            type="number"
            value={ceilingHeight}
            onChange={(e) => setCeilingHeight(e.target.value)}
            placeholder="e.g., 8"
          />
        </div>
      </div>
      <Button onClick={calculate} disabled={!sqft}>
        Calculate Load
      </Button>
      {result !== null && (
        <div className="rounded-lg border border-primary bg-primary/5 p-4">
          <p className="text-sm text-muted-foreground">
            Estimated Cooling Load:
          </p>
          <p className="text-2xl font-bold text-primary">
            {result.toLocaleString()} BTU/hr
          </p>
          <p className="text-lg text-primary">
            {(result / 12000).toFixed(1)} Tons
          </p>
        </div>
      )}
    </div>
  );
}

function DuctSizingCalculator() {
  const [cfm, setCfm] = useState("");
  const [velocity, setVelocity] = useState("700");
  const [result, setResult] = useState<{
    diameter: number;
    area: number;
  } | null>(null);

  const calculate = () => {
    const area = Number(cfm) / Number(velocity);
    const diameter = Math.sqrt((area * 4) / Math.PI);
    setResult({ diameter, area });
  };

  return (
    <div className="space-y-4">
      <Alert>
        <AlertDescription>
          Calculate required duct size based on airflow (CFM) and velocity
        </AlertDescription>
      </Alert>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="cfm">Airflow (CFM)</Label>
          <Input
            id="cfm"
            type="number"
            value={cfm}
            onChange={(e) => setCfm(e.target.value)}
            placeholder="e.g., 400"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="velocity">Velocity (FPM)</Label>
          <Input
            id="velocity"
            type="number"
            value={velocity}
            onChange={(e) => setVelocity(e.target.value)}
            placeholder="e.g., 700"
          />
        </div>
      </div>
      <Button onClick={calculate} disabled={!cfm}>
        Calculate Duct Size
      </Button>
      {result !== null && (
        <div className="rounded-lg border border-primary bg-primary/5 p-4">
          <p className="text-sm text-muted-foreground">Required Duct Size:</p>
          <p className="text-2xl font-bold text-primary">
            {result.diameter.toFixed(1)}" diameter
          </p>
          <p className="text-sm text-muted-foreground">
            Cross-sectional area: {result.area.toFixed(2)} sq ft
          </p>
        </div>
      )}
    </div>
  );
}

function ElectricalCalculator() {
  const [voltage, setVoltage] = useState("240");
  const [amperage, setAmperage] = useState("");
  const [powerFactor, setPowerFactor] = useState("0.9");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const watts = Number(voltage) * Number(amperage) * Number(powerFactor);
    setResult(watts);
  };

  return (
    <div className="space-y-4">
      <Alert>
        <AlertDescription>
          Calculate electrical load: Watts = Voltage × Amperage × Power Factor
        </AlertDescription>
      </Alert>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="voltage">Voltage (V)</Label>
          <Input
            id="voltage"
            type="number"
            value={voltage}
            onChange={(e) => setVoltage(e.target.value)}
            placeholder="e.g., 240"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="amperage">Amperage (A)</Label>
          <Input
            id="amperage"
            type="number"
            value={amperage}
            onChange={(e) => setAmperage(e.target.value)}
            placeholder="e.g., 15"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="powerFactor">Power Factor</Label>
          <Input
            id="powerFactor"
            type="number"
            step="0.1"
            value={powerFactor}
            onChange={(e) => setPowerFactor(e.target.value)}
            placeholder="e.g., 0.9"
          />
        </div>
      </div>
      <Button onClick={calculate} disabled={!amperage}>
        Calculate Power
      </Button>
      {result !== null && (
        <div className="rounded-lg border border-primary bg-primary/5 p-4">
          <p className="text-sm text-muted-foreground">Electrical Load:</p>
          <p className="text-2xl font-bold text-primary">
            {result.toFixed(0)} Watts
          </p>
          <p className="text-lg text-primary">
            {(result / 1000).toFixed(2)} kW
          </p>
        </div>
      )}
    </div>
  );
}
