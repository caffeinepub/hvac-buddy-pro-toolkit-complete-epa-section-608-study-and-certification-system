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
import {
  AlertTriangle,
  CheckCircle2,
  Info,
  ShieldAlert,
  Zap,
} from "lucide-react";
import { useState } from "react";

interface DigitalMultimeterProps {
  studyMode: { __kind__: "beginner" | "expert" };
}

export default function DigitalMultimeter({
  studyMode,
}: DigitalMultimeterProps) {
  const [mode, setMode] = useState<"voltage" | "amperage" | "resistance">(
    "voltage",
  );
  const [reading, setReading] = useState<number>(240);
  const [component, setComponent] = useState<string>("compressor");

  const isBeginner = studyMode.__kind__ === "beginner";

  const componentSpecs = {
    compressor: { voltage: [220, 240], amperage: [15, 25], resistance: [1, 5] },
    condenser: { voltage: [220, 240], amperage: [3, 8], resistance: [10, 30] },
    blower: { voltage: [110, 120], amperage: [5, 12], resistance: [8, 20] },
    contactor: { voltage: [24, 24], amperage: [0.1, 0.5], resistance: [0, 1] },
  };

  const currentSpec = componentSpecs[component as keyof typeof componentSpecs];
  const ranges = currentSpec[mode];

  const getStatus = () => {
    if (reading >= ranges[0] && reading <= ranges[1]) {
      return { color: "green", text: "Normal", icon: CheckCircle2 };
    }
    if (reading >= ranges[0] * 0.8 && reading <= ranges[1] * 1.2) {
      return { color: "yellow", text: "Caution", icon: AlertTriangle };
    }
    return { color: "red", text: "Critical", icon: ShieldAlert };
  };

  const status = getStatus();
  const StatusIcon = status.icon;

  const getFeedback = () => {
    if (mode === "voltage") {
      if (reading < ranges[0]) {
        return "Low voltage detected. Check power supply, connections, and circuit breaker. Low voltage can cause motor damage and inefficient operation.";
      }
      if (reading > ranges[1]) {
        return "High voltage detected. This can damage components. Verify utility supply and transformer settings.";
      }
      return `Voltage is within normal range for ${component}. Power supply is adequate.`;
    }
    if (mode === "amperage") {
      if (reading < ranges[0]) {
        return "Low amperage may indicate: open circuit, failed component, or incorrect wiring. Verify component operation.";
      }
      if (reading > ranges[1]) {
        return "High amperage indicates overload. Check for: locked rotor, shorted windings, mechanical binding, or low voltage. SAFETY HAZARD - disconnect power immediately.";
      }
      return "Amperage is within normal operating range. Component is drawing expected current.";
    }
    if (reading < ranges[0]) {
      return "Very low resistance may indicate shorted windings or direct short circuit. Component likely failed.";
    }
    if (reading > ranges[1]) {
      return "High resistance may indicate: open circuit, corroded connections, or failed component. Check continuity.";
    }
    return "Resistance is within normal range. Component windings appear intact.";
  };

  const getSafetyWarning = () => {
    if (mode === "voltage" && reading > 50) {
      return "DANGER: High voltage present. Use proper PPE and follow lockout/tagout procedures.";
    }
    if (mode === "amperage" && reading > ranges[1]) {
      return "WARNING: Overcurrent condition detected. Disconnect power immediately to prevent fire hazard.";
    }
    return null;
  };

  const safetyWarning = getSafetyWarning();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-primary" />
          Digital Multimeter Simulator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {isBeginner && (
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              A multimeter measures voltage (V), amperage (A), and resistance
              (Ω). Always follow electrical safety procedures: turn off power,
              verify with meter, and use proper PPE. Never measure resistance on
              live circuits.
            </AlertDescription>
          </Alert>
        )}

        {safetyWarning && (
          <Alert variant="destructive">
            <ShieldAlert className="h-4 w-4" />
            <AlertDescription>
              <strong>SAFETY ALERT:</strong> {safetyWarning}
            </AlertDescription>
          </Alert>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Measurement Mode</Label>
            <Select
              value={mode}
              onValueChange={(v) => setMode(v as typeof mode)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="voltage">Voltage (VAC)</SelectItem>
                <SelectItem value="amperage">Amperage (A)</SelectItem>
                <SelectItem value="resistance">Resistance (Ω)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Component Under Test</Label>
            <Select value={component} onValueChange={setComponent}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="compressor">Compressor Motor</SelectItem>
                <SelectItem value="condenser">Condenser Fan</SelectItem>
                <SelectItem value="blower">Blower Motor</SelectItem>
                <SelectItem value="contactor">Contactor Coil</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label>
            Reading: {reading.toFixed(1)}{" "}
            {mode === "voltage" ? "VAC" : mode === "amperage" ? "A" : "Ω"}
          </Label>
          <input
            type="range"
            min="0"
            max={mode === "voltage" ? 300 : mode === "amperage" ? 40 : 100}
            step={mode === "voltage" ? 1 : mode === "amperage" ? 0.5 : 0.5}
            value={reading}
            onChange={(e) => setReading(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>0</span>
            <span>
              Normal: {ranges[0]}-{ranges[1]}
            </span>
            <span>
              {mode === "voltage" ? "300" : mode === "amperage" ? "40" : "100"}
            </span>
          </div>
        </div>

        <Card
          className={`border-2 border-${status.color}-500 bg-${status.color}-500/10`}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-center gap-4">
              <StatusIcon className={`h-12 w-12 text-${status.color}-600`} />
              <div className="text-center">
                <div className="text-4xl font-bold">
                  {reading.toFixed(1)}{" "}
                  {mode === "voltage" ? "VAC" : mode === "amperage" ? "A" : "Ω"}
                </div>
                <Badge
                  variant="outline"
                  className={`mt-2 border-${status.color}-500 text-${status.color}-700`}
                >
                  {status.text}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Alert
          className={`border-${status.color}-500/50 bg-${status.color}-500/10`}
        >
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Analysis:</strong> {getFeedback()}
          </AlertDescription>
        </Alert>

        {isBeginner && (
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Safety Reminders</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Always verify power is off before measuring resistance</li>
                <li>Use proper meter settings to avoid damage</li>
                <li>Check test leads for damage before use</li>
                <li>Never exceed meter's voltage/current ratings</li>
                <li>Follow lockout/tagout procedures on all electrical work</li>
              </ul>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
}
