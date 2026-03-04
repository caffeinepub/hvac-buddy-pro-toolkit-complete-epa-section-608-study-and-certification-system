import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calculator,
  Droplets,
  Gauge,
  Search,
  ShieldCheck,
  Thermometer,
  Wind,
  Zap,
} from "lucide-react";
import { useState } from "react";
import AirflowSimulator from "./tools/AirflowSimulator";
import DigitalMultimeter from "./tools/DigitalMultimeter";
import DigitalPressureGauge from "./tools/DigitalPressureGauge";
import DigitalThermometer from "./tools/DigitalThermometer";
import LeakDetectorSimulator from "./tools/LeakDetectorSimulator";
import PPESetupSimulator from "./tools/PPESetupSimulator";
import SuperheatSubcoolingCalculator from "./tools/SuperheatSubcoolingCalculator";
import VirtualRecoveryUnit from "./tools/VirtualRecoveryUnit";

interface InteractiveToolsHubProps {
  studyMode: { __kind__: "beginner" | "expert" };
}

type ToolType =
  | "pressure-gauge"
  | "thermometer"
  | "multimeter"
  | "leak-detector"
  | "airflow"
  | "recovery-unit"
  | "ppe-setup"
  | "calculator";

export default function InteractiveToolsHub({
  studyMode,
}: InteractiveToolsHubProps) {
  const [selectedTool, setSelectedTool] = useState<ToolType | null>(null);

  const tools = [
    {
      id: "pressure-gauge" as ToolType,
      name: "Digital Pressure Gauge",
      icon: Gauge,
      description: "Measure system pressures with color-coded safety zones",
      image: "/assets/generated/digital-pressure-gauge.dim_400x300.png",
    },
    {
      id: "thermometer" as ToolType,
      name: "Digital Thermometer",
      icon: Thermometer,
      description:
        "Temperature measurement with superheat/subcooling calculations",
      image: "/assets/generated/digital-thermometer-probe.dim_400x300.png",
    },
    {
      id: "multimeter" as ToolType,
      name: "Digital Multimeter",
      icon: Zap,
      description: "Electrical measurements with safety warnings",
      image: "/assets/generated/digital-multimeter.dim_400x300.png",
    },
    {
      id: "leak-detector" as ToolType,
      name: "Leak Detector",
      icon: Search,
      description: "Electronic leak detection with audio feedback",
      image: "/assets/generated/leak-detector-simulator.dim_400x300.png",
    },
    {
      id: "airflow" as ToolType,
      name: "Airflow Measurement",
      icon: Wind,
      description: "CFM calculations and system performance analysis",
      image: "/assets/generated/airflow-measurement-tool.dim_400x300.png",
    },
    {
      id: "recovery-unit" as ToolType,
      name: "Virtual Recovery Unit",
      icon: Droplets,
      description:
        "Step-by-step recovery procedures with efficiency monitoring",
      image: "/assets/generated/virtual-recovery-unit.dim_600x400.png",
    },
    {
      id: "ppe-setup" as ToolType,
      name: "PPE Setup",
      icon: ShieldCheck,
      description: "Drag-and-drop safety equipment selection",
      image: "/assets/generated/ppe-safety-equipment.dim_600x400.png",
    },
    {
      id: "calculator" as ToolType,
      name: "Superheat/Subcooling Calculator",
      icon: Calculator,
      description: "Real-time calculations with visual indicators",
      image: "/assets/generated/pressure-gauge.dim_400x300.jpg",
    },
  ];

  if (selectedTool) {
    return (
      <div className="space-y-4">
        <Button variant="outline" onClick={() => setSelectedTool(null)}>
          ← Back to Tools
        </Button>
        {selectedTool === "pressure-gauge" && (
          <DigitalPressureGauge studyMode={studyMode} />
        )}
        {selectedTool === "thermometer" && (
          <DigitalThermometer studyMode={studyMode} />
        )}
        {selectedTool === "multimeter" && (
          <DigitalMultimeter studyMode={studyMode} />
        )}
        {selectedTool === "leak-detector" && (
          <LeakDetectorSimulator studyMode={studyMode} />
        )}
        {selectedTool === "airflow" && (
          <AirflowSimulator studyMode={studyMode} />
        )}
        {selectedTool === "recovery-unit" && (
          <VirtualRecoveryUnit studyMode={studyMode} />
        )}
        {selectedTool === "ppe-setup" && (
          <PPESetupSimulator studyMode={studyMode} />
        )}
        {selectedTool === "calculator" && (
          <SuperheatSubcoolingCalculator studyMode={studyMode} />
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Interactive HVAC Tools & Simulators</CardTitle>
          <p className="text-sm text-muted-foreground">
            Practice using professional HVAC equipment with realistic
            simulators. Each tool provides color-coded feedback and learning
            prompts to reinforce EPA 608 concepts.
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Card
                  key={tool.id}
                  className="cursor-pointer transition-all hover:border-primary hover:shadow-md"
                  onClick={() => setSelectedTool(tool.id)}
                >
                  <CardContent className="p-4">
                    <div className="mb-3 flex items-center justify-center">
                      <img
                        src={tool.image}
                        alt={tool.name}
                        className="h-32 w-full rounded-lg object-contain"
                      />
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{tool.name}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {tool.description}
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-3 w-full"
                        >
                          Launch Tool
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
