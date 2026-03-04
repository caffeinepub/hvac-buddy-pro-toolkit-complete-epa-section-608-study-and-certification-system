import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertTriangle, CheckCircle2, Info, Wind } from "lucide-react";
import { useState } from "react";

interface AirflowSimulatorProps {
  studyMode: { __kind__: "beginner" | "expert" };
}

export default function AirflowSimulator({ studyMode }: AirflowSimulatorProps) {
  const [ductWidth, setDuctWidth] = useState<number>(12);
  const [ductHeight, setDuctHeight] = useState<number>(8);
  const [velocity, setVelocity] = useState<number>(800);
  const [systemType, setSystemType] = useState<string>("residential");

  const isBeginner = studyMode.__kind__ === "beginner";

  // Calculate CFM (Cubic Feet per Minute)
  const ductArea = (ductWidth * ductHeight) / 144; // Convert sq inches to sq feet
  const cfm = Math.round(ductArea * velocity);

  // Calculate tonnage (400 CFM per ton is standard)
  const tonnage = (cfm / 400).toFixed(2);

  const systemRequirements = {
    residential: { cfmPerTon: 400, minVelocity: 600, maxVelocity: 900 },
    commercial: { cfmPerTon: 350, minVelocity: 700, maxVelocity: 1200 },
    "high-velocity": { cfmPerTon: 400, minVelocity: 1500, maxVelocity: 2500 },
  };

  const requirements =
    systemRequirements[systemType as keyof typeof systemRequirements];

  const getVelocityStatus = () => {
    if (
      velocity >= requirements.minVelocity &&
      velocity <= requirements.maxVelocity
    ) {
      return { color: "green", text: "Optimal", icon: CheckCircle2 };
    }
    if (velocity < requirements.minVelocity) {
      return { color: "yellow", text: "Low Velocity", icon: AlertTriangle };
    }
    return { color: "red", text: "High Velocity", icon: AlertTriangle };
  };

  const getCFMStatus = () => {
    const expectedCFM = Number.parseFloat(tonnage) * requirements.cfmPerTon;
    const variance = Math.abs(cfm - expectedCFM) / expectedCFM;

    if (variance < 0.1) {
      return { color: "green", text: "Optimal", icon: CheckCircle2 };
    }
    if (variance < 0.2) {
      return { color: "yellow", text: "Acceptable", icon: AlertTriangle };
    }
    return { color: "red", text: "Poor", icon: AlertTriangle };
  };

  const velocityStatus = getVelocityStatus();
  const cfmStatus = getCFMStatus();
  const VelocityIcon = velocityStatus.icon;
  const CFMIcon = cfmStatus.icon;

  const getFeedback = () => {
    const issues: string[] = [];

    if (velocity < requirements.minVelocity) {
      issues.push(
        "Low velocity may cause: poor air distribution, stratification, and reduced comfort. Consider smaller duct size or increased fan speed.",
      );
    }
    if (velocity > requirements.maxVelocity) {
      issues.push(
        "High velocity causes: excessive noise, increased static pressure, and higher energy costs. Consider larger duct size or reduced fan speed.",
      );
    }

    const expectedCFM = Number.parseFloat(tonnage) * requirements.cfmPerTon;
    if (cfm < expectedCFM * 0.9) {
      issues.push(
        "Insufficient airflow for system capacity. Check for: restricted filters, closed dampers, undersized ductwork, or blower issues.",
      );
    }
    if (cfm > expectedCFM * 1.1) {
      issues.push(
        "Excessive airflow may reduce dehumidification and cause short cycling. Verify system sizing and adjust fan speed.",
      );
    }

    if (issues.length === 0) {
      return "Airflow is within optimal range for system type and capacity. System should provide good comfort and efficiency.";
    }

    return issues.join(" ");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wind className="h-5 w-5 text-primary" />
          Airflow Measurement & CFM Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {isBeginner && (
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              CFM (Cubic Feet per Minute) measures airflow volume. Proper
              airflow is critical for system efficiency and comfort. Standard
              residential systems require 400 CFM per ton of cooling capacity.
              Formula: CFM = Duct Area (sq ft) × Velocity (ft/min)
            </AlertDescription>
          </Alert>
        )}

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>System Type</Label>
            <Select value={systemType} onValueChange={setSystemType}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="residential">
                  Residential (400 CFM/ton)
                </SelectItem>
                <SelectItem value="commercial">
                  Commercial (350 CFM/ton)
                </SelectItem>
                <SelectItem value="high-velocity">
                  High Velocity (400 CFM/ton)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Duct Width (inches)</Label>
              <Input
                type="number"
                value={ductWidth}
                onChange={(e) => setDuctWidth(Number(e.target.value))}
                min="4"
                max="48"
              />
            </div>
            <div className="space-y-2">
              <Label>Duct Height (inches)</Label>
              <Input
                type="number"
                value={ductHeight}
                onChange={(e) => setDuctHeight(Number(e.target.value))}
                min="4"
                max="48"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Air Velocity: {velocity} FPM (Feet Per Minute)</Label>
            <input
              type="range"
              min="200"
              max="3000"
              step="50"
              value={velocity}
              onChange={(e) => setVelocity(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>200 FPM</span>
              <span>
                Optimal: {requirements.minVelocity}-{requirements.maxVelocity}{" "}
                FPM
              </span>
              <span>3000 FPM</span>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card
            className={`border-2 border-${velocityStatus.color}-500 bg-${velocityStatus.color}-500/10`}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Air Velocity</p>
                  <p className="text-2xl font-bold">{velocity} FPM</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <VelocityIcon
                    className={`h-8 w-8 text-${velocityStatus.color}-600`}
                  />
                  <Badge
                    variant="outline"
                    className={`border-${velocityStatus.color}-500`}
                  >
                    {velocityStatus.text}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className={`border-2 border-${cfmStatus.color}-500 bg-${cfmStatus.color}-500/10`}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Airflow</p>
                  <p className="text-2xl font-bold">{cfm} CFM</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <CFMIcon className={`h-8 w-8 text-${cfmStatus.color}-600`} />
                  <Badge
                    variant="outline"
                    className={`border-${cfmStatus.color}-500`}
                  >
                    {cfmStatus.text}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-4">
            <div className="grid gap-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Duct Area:</span>
                <span className="font-semibold">
                  {ductArea.toFixed(2)} sq ft
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">System Capacity:</span>
                <span className="font-semibold">{tonnage} tons</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Expected CFM:</span>
                <span className="font-semibold">
                  {Math.round(
                    Number.parseFloat(tonnage) * requirements.cfmPerTon,
                  )}{" "}
                  CFM
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Analysis:</strong> {getFeedback()}
          </AlertDescription>
        </Alert>

        {isBeginner && (
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Airflow Measurement Tips</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>
                  Measure velocity at center of duct for most accurate reading
                </li>
                <li>Take multiple readings and average for better accuracy</li>
                <li>
                  Ensure straight duct run (10× duct diameter) before
                  measurement
                </li>
                <li>Check static pressure to diagnose airflow restrictions</li>
                <li>Verify filter is clean before taking measurements</li>
              </ul>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
}
