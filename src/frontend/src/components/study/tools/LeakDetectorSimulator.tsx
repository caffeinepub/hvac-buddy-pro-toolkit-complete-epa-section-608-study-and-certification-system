import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
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
  Search,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useEffect, useState } from "react";

interface LeakDetectorSimulatorProps {
  studyMode: { __kind__: "beginner" | "expert" };
}

export default function LeakDetectorSimulator({
  studyMode,
}: LeakDetectorSimulatorProps) {
  const [location, setLocation] = useState<string>("compressor");
  const [sensitivity, setSensitivity] = useState<number>(5);
  const [isScanning, setIsScanning] = useState(false);
  const [leakLevel, setLeakLevel] = useState<number>(0);
  const [audioEnabled, setAudioEnabled] = useState(true);

  const isBeginner = studyMode.__kind__ === "beginner";

  const leakLocations = {
    compressor: { leak: 85, description: "Compressor discharge fitting" },
    "service-valve": { leak: 95, description: "Service valve stem" },
    "flare-fitting": { leak: 70, description: "Flare connection" },
    evaporator: { leak: 40, description: "Evaporator coil" },
    condenser: { leak: 30, description: "Condenser coil" },
    "liquid-line": { leak: 15, description: "Liquid line" },
    "suction-line": { leak: 10, description: "Suction line" },
  };

  const currentLocation = leakLocations[location as keyof typeof leakLocations];

  useEffect(() => {
    if (isScanning) {
      const interval = setInterval(() => {
        const targetLeak = currentLocation.leak;
        const variance = (Math.random() - 0.5) * 10;
        const adjustedLeak = Math.max(0, Math.min(100, targetLeak + variance));
        setLeakLevel(adjustedLeak);
      }, 200);

      return () => clearInterval(interval);
    }
    setLeakLevel(0);
  }, [isScanning, currentLocation]);

  const getLeakStatus = () => {
    const adjustedLevel = leakLevel * (sensitivity / 5);
    if (adjustedLevel < 20) {
      return {
        color: "green",
        text: "No Leak",
        icon: CheckCircle2,
        severity: "none",
      };
    }
    if (adjustedLevel < 50) {
      return {
        color: "yellow",
        text: "Minor Leak",
        icon: AlertTriangle,
        severity: "minor",
      };
    }
    if (adjustedLevel < 80) {
      return {
        color: "orange",
        text: "Moderate Leak",
        icon: AlertTriangle,
        severity: "moderate",
      };
    }
    return {
      color: "red",
      text: "Major Leak",
      icon: AlertTriangle,
      severity: "major",
    };
  };

  const status = getLeakStatus();
  const StatusIcon = status.icon;
  const adjustedLevel = leakLevel * (sensitivity / 5);

  const getBeepFrequency = () => {
    if (adjustedLevel < 20) return 0;
    if (adjustedLevel < 50) return 2000;
    if (adjustedLevel < 80) return 1000;
    return 500;
  };

  const getRecommendation = () => {
    if (status.severity === "none") {
      return "No leak detected at this location. Continue systematic inspection of all connections and joints.";
    }
    if (status.severity === "minor") {
      return "Minor leak detected. Mark location, tighten connection, and re-test. May require service valve replacement or flare re-work.";
    }
    if (status.severity === "moderate") {
      return "Moderate leak detected. Immediate repair required. Recover refrigerant, repair leak, evacuate system, and recharge.";
    }
    return "MAJOR LEAK DETECTED! System losing significant refrigerant. Immediate shutdown and repair required. Check for loose fittings, damaged components, or corrosion.";
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Search className="h-5 w-5 text-primary" />
          Electronic Leak Detector Simulator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {isBeginner && (
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              Electronic leak detectors sense refrigerant molecules in the air.
              Move the probe slowly (1-2 inches per second) around all
              connections, joints, and components. Higher sensitivity detects
              smaller leaks but may cause false positives.
            </AlertDescription>
          </Alert>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Inspection Location</Label>
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="compressor">Compressor Fittings</SelectItem>
                <SelectItem value="service-valve">Service Valves</SelectItem>
                <SelectItem value="flare-fitting">Flare Connections</SelectItem>
                <SelectItem value="evaporator">Evaporator Coil</SelectItem>
                <SelectItem value="condenser">Condenser Coil</SelectItem>
                <SelectItem value="liquid-line">Liquid Line</SelectItem>
                <SelectItem value="suction-line">Suction Line</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Sensitivity Level: {sensitivity}</Label>
            <input
              type="range"
              min="1"
              max="10"
              value={sensitivity}
              onChange={(e) => setSensitivity(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Low (1)</span>
              <span>High (10)</span>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <Button
            onClick={() => setIsScanning(!isScanning)}
            className="flex-1"
            variant={isScanning ? "destructive" : "default"}
          >
            {isScanning ? "Stop Scanning" : "Start Scanning"}
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setAudioEnabled(!audioEnabled)}
          >
            {audioEnabled ? (
              <Volume2 className="h-4 w-4" />
            ) : (
              <VolumeX className="h-4 w-4" />
            )}
          </Button>
        </div>

        {isScanning && (
          <>
            <Card
              className={`border-2 border-${status.color}-500 bg-${status.color}-500/10`}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <StatusIcon
                        className={`h-10 w-10 text-${status.color}-600`}
                      />
                      <div>
                        <div className="text-2xl font-bold">
                          {adjustedLevel.toFixed(0)}%
                        </div>
                        <Badge
                          variant="outline"
                          className={`border-${status.color}-500 text-${status.color}-700`}
                        >
                          {status.text}
                        </Badge>
                      </div>
                    </div>
                    {audioEnabled && adjustedLevel > 20 && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Volume2 className="h-4 w-4 animate-pulse" />
                        <span>Beeping: {getBeepFrequency()}ms</span>
                      </div>
                    )}
                  </div>
                  <Progress value={adjustedLevel} className="h-3" />
                  <p className="text-sm text-muted-foreground">
                    Scanning: {currentLocation.description}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Alert
              className={`border-${status.color}-500/50 bg-${status.color}-500/10`}
            >
              <Info className="h-4 w-4" />
              <AlertDescription>
                <strong>Recommendation:</strong> {getRecommendation()}
              </AlertDescription>
            </Alert>
          </>
        )}

        {isBeginner && (
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">
                Leak Detection Best Practices
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Start with low sensitivity to find major leaks first</li>
                <li>Move probe slowly - 1 to 2 inches per second</li>
                <li>Check all fittings, joints, and service ports</li>
                <li>
                  Refrigerant is heavier than air - check below components
                </li>
                <li>
                  Use soap bubbles to confirm electronic detector findings
                </li>
                <li>Always repair leaks before adding refrigerant</li>
              </ul>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
}
