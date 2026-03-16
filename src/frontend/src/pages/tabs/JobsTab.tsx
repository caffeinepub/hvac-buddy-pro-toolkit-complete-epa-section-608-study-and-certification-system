import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertTriangle,
  BookOpen,
  Bot,
  Briefcase,
  Clock,
  Download,
  Edit,
  PlayCircle,
  Plus,
  Search,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { GUEST_RESTRICTION_MESSAGE } from "../../utils/guestRestrictions";

interface JobsTabProps {
  isGuest: boolean;
}

type JobStatus = "open" | "in-progress" | "completed";
type SystemType =
  | "Split System"
  | "Package Unit"
  | "Heat Pump"
  | "Mini-Split"
  | "Other";

interface LocalJob {
  id: string;
  customerName: string;
  address: string;
  systemType: SystemType;
  unitModel: string;
  unitSerial: string;
  issueDescription: string;
  status: JobStatus;
  createdAt: string;
}

const EMPTY_FORM: Omit<LocalJob, "id" | "createdAt"> = {
  customerName: "",
  address: "",
  systemType: "Split System",
  unitModel: "",
  unitSerial: "",
  issueDescription: "",
  status: "open",
};

function statusBadge(status: JobStatus) {
  const config: Record<JobStatus, { label: string; className: string }> = {
    open: {
      label: "Open",
      className:
        "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    },
    "in-progress": {
      label: "In Progress",
      className:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
    },
    completed: {
      label: "Completed",
      className:
        "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    },
  };
  const { label, className } = config[status];
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${className}`}
    >
      {label}
    </span>
  );
}

// ─── AI Knowledge Base (subset for job analysis) ─────────────────────────────

interface VideoRef {
  title: string;
  url: string;
}

interface AIResponse {
  symptom: string;
  causes: string[];
  steps: string[];
  tools: string[];
  parts: string[];
  safety: string;
  videos: VideoRef[];
  modules: string[];
  estimatedTime: string;
}

const JOB_KNOWLEDGE_BASE: Record<string, AIResponse> = {
  "ac not cooling": {
    symptom: "AC Not Cooling",
    causes: [
      "Low refrigerant charge",
      "Dirty condenser coil",
      "Faulty compressor",
      "Restricted metering device",
      "Low indoor airflow",
    ],
    steps: [
      "Check thermostat settings",
      "Inspect and replace air filter",
      "Connect manifold gauges — check suction/head pressure",
      "Calculate superheat and subcooling",
      "Inspect condenser coil for blockage",
      "Perform leak check if pressures are low",
    ],
    tools: [
      "Digital manifold gauges",
      "Clamp meter",
      "Thermometer",
      "Electronic leak detector",
    ],
    parts: [
      "Air filter",
      "Refrigerant (R-410A or R-22)",
      "Dual run capacitor",
      "Contactor",
    ],
    safety:
      "Turn off power before accessing electrical components. Use PPE when handling refrigerant.",
    videos: [
      {
        title: "HVAC AC Pressure, Superheat & Subcooling Explained",
        url: "https://youtu.be/5UU2c5e2ork",
      },
    ],
    modules: ["Digital Gauges & Smart Probes", "Multimeter Training"],
    estimatedTime: "1.5–3 hours",
  },
  "compressor not starting": {
    symptom: "Compressor Not Starting",
    causes: [
      "Failed run capacitor",
      "Faulty contactor",
      "High pressure lockout",
      "Low voltage",
      "Hard start needed",
    ],
    steps: [
      "Check contactor for pitted/burnt contacts",
      "Test run capacitor with capacitance meter",
      "Check supply voltage",
      "Check high/low pressure switches",
      "Test start components",
    ],
    tools: [
      "Digital multimeter",
      "Capacitance meter",
      "Clamp meter",
      "Manifold gauges",
    ],
    parts: ["Run capacitor", "Start capacitor", "Contactor", "Hard start kit"],
    safety:
      "Always discharge capacitors before testing. Use lockout/tagout procedures.",
    videos: [
      {
        title: "How to Test HVAC Relays, Contactors, and Transformers",
        url: "https://youtu.be/4ja6GynaxQ0",
      },
    ],
    modules: [
      "Multimeter Training",
      "Electrical Troubleshooting for HVAC Systems",
    ],
    estimatedTime: "1–2.5 hours",
  },
  "low suction pressure": {
    symptom: "Low Suction Pressure",
    causes: [
      "Low refrigerant charge (leak)",
      "Restricted TXV/metering device",
      "Low indoor airflow",
      "Dirty evaporator coil",
      "Liquid line restriction",
    ],
    steps: [
      "Connect gauges and record suction/head pressure",
      "Calculate superheat",
      "Check airflow and evaporator coil",
      "Look for icing on evaporator",
      "Perform leak check",
    ],
    tools: [
      "Manifold gauges",
      "Temperature clamps",
      "Leak detector",
      "Micron gauge",
    ],
    parts: [
      "TXV / metering device",
      "Filter drier",
      "Refrigerant",
      "Evaporator coil",
    ],
    safety:
      "Use refrigerant-safe gloves and goggles. Follow EPA 608 recovery procedures.",
    videos: [
      {
        title: "HVAC Metering Device Basics",
        url: "https://youtu.be/qV-DIqIxPGk",
      },
    ],
    modules: ["Digital Gauges & Smart Probes"],
    estimatedTime: "1.5–4 hours",
  },
  "fan running no cooling": {
    symptom: "Fan Running, No Cooling",
    causes: [
      "Compressor not running",
      "Failed capacitor",
      "Faulty contactor",
      "High pressure lockout",
      "Low refrigerant",
    ],
    steps: [
      "Confirm indoor blower is running",
      "Check if outdoor compressor is running",
      "Test contactor coil voltage",
      "Check capacitor",
      "Measure suction pressure",
    ],
    tools: [
      "Clamp meter",
      "Multimeter",
      "Manifold gauges",
      "Capacitance meter",
    ],
    parts: ["Contactor", "Dual run capacitor", "Refrigerant"],
    safety: "Do not touch outdoor unit while power is on without proper PPE.",
    videos: [
      {
        title: "How to Test HVAC Relays, Contactors, and Transformers",
        url: "https://youtu.be/4ja6GynaxQ0",
      },
    ],
    modules: [
      "Electrical Troubleshooting for HVAC Systems",
      "Multimeter Training",
    ],
    estimatedTime: "1–2 hours",
  },
  "frozen coil": {
    symptom: "Frozen Evaporator Coil",
    causes: [
      "Low indoor airflow",
      "Low refrigerant charge",
      "Dirty evaporator coil",
      "Blower motor failure",
    ],
    steps: [
      "Switch to Fan Only mode and allow full defrost",
      "Replace air filter",
      "Check all vents are open",
      "After defrost: connect gauges and measure pressures",
      "Measure delta T",
    ],
    tools: ["Digital manifold gauges", "Digital thermometer", "Clamp meter"],
    parts: ["Air filter", "Blower motor", "Blower capacitor", "Refrigerant"],
    safety:
      "Never chip or scrape ice from coil — allow natural defrost. Ensure drain pan is clear.",
    videos: [
      {
        title: "HVAC AC Pressure, Superheat & Subcooling Explained",
        url: "https://youtu.be/5UU2c5e2ork",
      },
    ],
    modules: ["Digital Gauges & Smart Probes"],
    estimatedTime: "1.5–3 hours + defrost wait",
  },
  "refrigerant leak": {
    symptom: "Refrigerant Leak",
    causes: [
      "Vibration-eroded service port",
      "Formicary corrosion on coil",
      "Pinhole leak in coil",
      "Loose or improperly flared fitting",
    ],
    steps: [
      "Use electronic leak detector to locate leak",
      "Recover all refrigerant per EPA 608",
      "Repair leak",
      "Install new filter drier",
      "Pressure test with nitrogen",
      "Evacuate to 500 microns",
      "Recharge to nameplate weight",
    ],
    tools: [
      "Electronic leak detector",
      "Recovery machine",
      "Nitrogen regulator",
      "Micron gauge",
      "Manifold gauges",
    ],
    parts: [
      "Filter drier",
      "Refrigerant",
      "Schrader valve cores",
      "Copper fittings",
    ],
    safety:
      "NEVER vent refrigerant — EPA violation. Wear gloves and goggles. Use regulator for nitrogen pressure testing.",
    videos: [
      {
        title: "HVAC Refrigerant Recovery (3D)",
        url: "https://youtu.be/fROHlPXw_H0",
      },
      {
        title: "HVAC How to Evacuate AC System",
        url: "https://youtu.be/JsnQeUSuUMU",
      },
    ],
    modules: [
      "Refrigerant Handling Procedures",
      "Digital Gauges & Smart Probes",
    ],
    estimatedTime: "2–5 hours",
  },
};

function lookupJobResponse(query: string): AIResponse | null {
  const q = query.toLowerCase();
  for (const key of Object.keys(JOB_KNOWLEDGE_BASE)) {
    if (q.includes(key)) return JOB_KNOWLEDGE_BASE[key];
  }
  const keywords: Record<string, string> = {
    cool: "ac not cooling",
    cooling: "ac not cooling",
    compress: "compressor not starting",
    suction: "low suction pressure",
    frozen: "frozen coil",
    ice: "frozen coil",
    leak: "refrigerant leak",
    refrigerant: "refrigerant leak",
    "no start": "compressor not starting",
  };
  for (const [kw, key] of Object.entries(keywords)) {
    if (q.includes(kw)) return JOB_KNOWLEDGE_BASE[key];
  }
  return null;
}

function JobAIAnalysisDialog({
  job,
  open,
  onClose,
}: {
  job: LocalJob;
  open: boolean;
  onClose: () => void;
}) {
  const response = lookupJobResponse(job.issueDescription);

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Bot className="h-4 w-4 text-primary" />
            AI Job Analysis — {job.customerName}
          </DialogTitle>
        </DialogHeader>

        {!response ? (
          <div className="py-8 text-center text-muted-foreground">
            <Bot className="mx-auto h-10 w-10 mb-3 opacity-30" />
            <p className="text-sm font-medium">No matching diagnosis found</p>
            <p className="text-xs mt-1">
              Try adding more specific symptoms to the job description (e.g. "AC
              not cooling", "compressor not starting")
            </p>
          </div>
        ) : (
          <div className="space-y-4 pt-2">
            <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
              <p className="text-xs font-medium text-muted-foreground mb-1">
                Analyzing symptom:
              </p>
              <p className="text-sm italic">"{job.issueDescription}"</p>
            </div>

            <div>
              <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Diagnostic Plan
              </h4>
              <ol className="space-y-1.5">
                {response.steps.map((s, i) => (
                  <li key={s} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                  <Search className="h-3 w-3" /> Parts List
                </h4>
                <ul className="space-y-1">
                  {response.parts.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                  <Sparkles className="h-3 w-3" /> Tool List
                </h4>
                <ul className="space-y-1">
                  {response.tools.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">
                Estimated repair time:
              </span>
              <span className="font-semibold">{response.estimatedTime}</span>
            </div>

            <div className="flex items-start gap-2 rounded-md border border-amber-500/40 bg-amber-500/10 px-4 py-3">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
              <div>
                <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-0.5">
                  Safety Warning
                </p>
                <p className="text-xs text-amber-700 dark:text-amber-300 leading-relaxed">
                  {response.safety}
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-muted/30 p-3 space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Related Resources
              </p>
              <div className="flex flex-wrap gap-1.5">
                {response.modules.map((m) => (
                  <Badge key={m} variant="secondary" className="text-xs">
                    <BookOpen className="mr-1 h-3 w-3" />
                    {m}
                  </Badge>
                ))}
                {response.videos.map((v) => (
                  <a
                    key={v.url}
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge
                      variant="outline"
                      className="text-xs cursor-pointer hover:bg-primary/10"
                    >
                      <PlayCircle className="mr-1 h-3 w-3" />
                      {v.title.length > 25
                        ? `${v.title.slice(0, 25)}…`
                        : v.title}
                    </Badge>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <Button onClick={onClose}>Close</Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default function JobsTab({ isGuest }: JobsTabProps) {
  const [jobs, setJobs] = useState<LocalJob[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] =
    useState<Omit<LocalJob, "id" | "createdAt">>(EMPTY_FORM);
  const [aiAnalysisJob, setAiAnalysisJob] = useState<LocalJob | null>(null);

  const openNewJob = () => {
    if (isGuest) {
      toast.error(GUEST_RESTRICTION_MESSAGE);
      return;
    }
    setEditingId(null);
    setForm(EMPTY_FORM);
    setIsDialogOpen(true);
  };

  const openEditJob = (job: LocalJob) => {
    if (isGuest) {
      toast.error(GUEST_RESTRICTION_MESSAGE);
      return;
    }
    setEditingId(job.id);
    setForm({
      customerName: job.customerName,
      address: job.address,
      systemType: job.systemType,
      unitModel: job.unitModel,
      unitSerial: job.unitSerial,
      issueDescription: job.issueDescription,
      status: job.status,
    });
    setIsDialogOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.customerName.trim()) {
      toast.error("Customer name is required");
      return;
    }
    if (!form.issueDescription.trim()) {
      toast.error("Issue description is required");
      return;
    }

    if (editingId) {
      setJobs((prev) =>
        prev.map((j) => (j.id === editingId ? { ...j, ...form } : j)),
      );
      toast.success("Job updated successfully");
    } else {
      const newJob: LocalJob = {
        id: `job-${Date.now()}`,
        createdAt: new Date().toLocaleString(),
        ...form,
      };
      setJobs((prev) => [newJob, ...prev]);
      toast.success("Job created successfully");
    }

    setIsDialogOpen(false);
    setEditingId(null);
    setForm(EMPTY_FORM);
  };

  const handleExportCSV = () => {
    if (isGuest) {
      toast.error(GUEST_RESTRICTION_MESSAGE);
      return;
    }
    if (jobs.length === 0) {
      toast.error("No jobs to export");
      return;
    }
    const headers = [
      "Customer Name",
      "Address",
      "System Type",
      "Unit Model",
      "Unit Serial",
      "Issue Description",
      "Status",
      "Created At",
    ];
    const rows = jobs.map((j) => [
      `"${j.customerName}"`,
      `"${j.address}"`,
      `"${j.systemType}"`,
      `"${j.unitModel}"`,
      `"${j.unitSerial}"`,
      `"${j.issueDescription.replace(/"/g, '""')}"`,
      j.status,
      j.createdAt,
    ]);
    const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `hvac-jobs-${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Jobs exported successfully");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Job Management
              </CardTitle>
              <CardDescription>
                Create, track, and export service jobs with customer and unit
                details
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={handleExportCSV}
                disabled={jobs.length === 0}
                data-ocid="jobs.export_button"
              >
                <Download className="mr-2 h-4 w-4" />
                Export CSV
              </Button>
              <Button onClick={openNewJob} data-ocid="jobs.primary_button">
                <Plus className="mr-2 h-4 w-4" />
                New Job
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          {jobs.length === 0 ? (
            <div
              className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-14 text-center"
              data-ocid="jobs.empty_state"
            >
              <Briefcase className="mb-3 h-10 w-10 text-muted-foreground/40" />
              <p className="font-medium text-muted-foreground">No jobs yet</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Click "New Job" to create your first work order
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {jobs.map((job, index) => (
                <div
                  key={job.id}
                  className="rounded-lg border border-border bg-card p-4 transition-shadow hover:shadow-md"
                  data-ocid={`jobs.item.${index + 1}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <p className="font-semibold text-sm">
                          {job.customerName}
                        </p>
                        {statusBadge(job.status)}
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">
                        {job.systemType}
                        {job.address ? ` · ${job.address}` : ""} ·{" "}
                        {job.createdAt}
                      </p>
                      {job.issueDescription && (
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {job.issueDescription}
                        </p>
                      )}
                    </div>
                    <div className="flex gap-2 shrink-0 flex-wrap justify-end">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setAiAnalysisJob(job)}
                        className="border-primary/30 text-primary hover:bg-primary/10"
                        data-ocid={`jobs.ai_analysis_button.${index + 1}`}
                      >
                        <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                        AI Analysis
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openEditJob(job)}
                        data-ocid={`jobs.edit_button.${index + 1}`}
                      >
                        <Edit className="mr-1.5 h-3.5 w-3.5" />
                        Open / Edit
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Create / Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingId ? "Edit Job" : "Create New Job"}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSave} className="space-y-4 pt-2">
            <div className="space-y-2">
              <Label htmlFor="customerName">Customer Name *</Label>
              <Input
                id="customerName"
                value={form.customerName}
                onChange={(e) =>
                  setForm((f) => ({ ...f, customerName: e.target.value }))
                }
                placeholder="e.g. John Smith"
                required
                data-ocid="jobs.input"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                value={form.address}
                onChange={(e) =>
                  setForm((f) => ({ ...f, address: e.target.value }))
                }
                placeholder="e.g. 123 Main St, Orlando, FL"
                data-ocid="jobs.input"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="systemType">System Type</Label>
                <Select
                  value={form.systemType}
                  onValueChange={(v) =>
                    setForm((f) => ({ ...f, systemType: v as SystemType }))
                  }
                >
                  <SelectTrigger id="systemType" data-ocid="jobs.select">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Split System">Split System</SelectItem>
                    <SelectItem value="Package Unit">Package Unit</SelectItem>
                    <SelectItem value="Heat Pump">Heat Pump</SelectItem>
                    <SelectItem value="Mini-Split">Mini-Split</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">Job Status</Label>
                <Select
                  value={form.status}
                  onValueChange={(v) =>
                    setForm((f) => ({ ...f, status: v as JobStatus }))
                  }
                >
                  <SelectTrigger id="status" data-ocid="jobs.select">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="unitModel">Unit Model</Label>
                <Input
                  id="unitModel"
                  value={form.unitModel}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, unitModel: e.target.value }))
                  }
                  placeholder="e.g. Carrier 24ACC636A003"
                  data-ocid="jobs.input"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="unitSerial">Unit Serial</Label>
                <Input
                  id="unitSerial"
                  value={form.unitSerial}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, unitSerial: e.target.value }))
                  }
                  placeholder="e.g. 4819A12345"
                  data-ocid="jobs.input"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="issueDescription">Issue Description *</Label>
              <Textarea
                id="issueDescription"
                value={form.issueDescription}
                onChange={(e) =>
                  setForm((f) => ({ ...f, issueDescription: e.target.value }))
                }
                placeholder="Describe the reported issue and any initial findings..."
                rows={4}
                required
                data-ocid="jobs.textarea"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => setIsDialogOpen(false)}
                data-ocid="jobs.cancel_button"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1"
                data-ocid="jobs.save_button"
              >
                {editingId ? "Save Changes" : "Create Job"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* AI Analysis Dialog */}
      {aiAnalysisJob && (
        <JobAIAnalysisDialog
          job={aiAnalysisJob}
          open={!!aiAnalysisJob}
          onClose={() => setAiAnalysisJob(null)}
        />
      )}
    </div>
  );
}
