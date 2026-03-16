import { r as reactExports, j as jsxRuntimeExports, C as Card, a as CardHeader, b as CardTitle, ai as Briefcase, d as CardDescription, k as Button, e as CardContent, w as Dialog, x as DialogContent, y as DialogHeader, z as DialogTitle, L as Label, I as Input, p as ue, B as Bot, a2 as Search, i as Badge, m as BookOpen } from "./index-mwwh698k.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-C2WzP03D.js";
import { T as Textarea } from "./textarea-lgEsXHoV.js";
import { G as GUEST_RESTRICTION_MESSAGE } from "./guestRestrictions-DGOueCI8.js";
import { D as Download } from "./download-D0jIdtQt.js";
import { P as Plus } from "./plus-P_ZpwnO0.js";
import { S as Sparkles } from "./sparkles-CWy0s3SI.js";
import { S as SquarePen } from "./square-pen-DoYrwAe1.js";
import { C as Clock } from "./clock-BtY1NsIa.js";
import { T as TriangleAlert } from "./triangle-alert-Drtfw0nc.js";
import { C as CirclePlay } from "./circle-play-BV2dI25e.js";
import "./index-CWqymlTU.js";
const EMPTY_FORM = {
  customerName: "",
  address: "",
  systemType: "Split System",
  unitModel: "",
  unitSerial: "",
  issueDescription: "",
  status: "open"
};
function statusBadge(status) {
  const config = {
    open: {
      label: "Open",
      className: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
    },
    "in-progress": {
      label: "In Progress",
      className: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
    },
    completed: {
      label: "Completed",
      className: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
    }
  };
  const { label, className } = config[status];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${className}`,
      children: label
    }
  );
}
const JOB_KNOWLEDGE_BASE = {
  "ac not cooling": {
    symptom: "AC Not Cooling",
    causes: [
      "Low refrigerant charge",
      "Dirty condenser coil",
      "Faulty compressor",
      "Restricted metering device",
      "Low indoor airflow"
    ],
    steps: [
      "Check thermostat settings",
      "Inspect and replace air filter",
      "Connect manifold gauges — check suction/head pressure",
      "Calculate superheat and subcooling",
      "Inspect condenser coil for blockage",
      "Perform leak check if pressures are low"
    ],
    tools: [
      "Digital manifold gauges",
      "Clamp meter",
      "Thermometer",
      "Electronic leak detector"
    ],
    parts: [
      "Air filter",
      "Refrigerant (R-410A or R-22)",
      "Dual run capacitor",
      "Contactor"
    ],
    safety: "Turn off power before accessing electrical components. Use PPE when handling refrigerant.",
    videos: [
      {
        title: "HVAC AC Pressure, Superheat & Subcooling Explained",
        url: "https://youtu.be/5UU2c5e2ork"
      }
    ],
    modules: ["Digital Gauges & Smart Probes", "Multimeter Training"],
    estimatedTime: "1.5–3 hours"
  },
  "compressor not starting": {
    symptom: "Compressor Not Starting",
    causes: [
      "Failed run capacitor",
      "Faulty contactor",
      "High pressure lockout",
      "Low voltage",
      "Hard start needed"
    ],
    steps: [
      "Check contactor for pitted/burnt contacts",
      "Test run capacitor with capacitance meter",
      "Check supply voltage",
      "Check high/low pressure switches",
      "Test start components"
    ],
    tools: [
      "Digital multimeter",
      "Capacitance meter",
      "Clamp meter",
      "Manifold gauges"
    ],
    parts: ["Run capacitor", "Start capacitor", "Contactor", "Hard start kit"],
    safety: "Always discharge capacitors before testing. Use lockout/tagout procedures.",
    videos: [
      {
        title: "How to Test HVAC Relays, Contactors, and Transformers",
        url: "https://youtu.be/4ja6GynaxQ0"
      }
    ],
    modules: [
      "Multimeter Training",
      "Electrical Troubleshooting for HVAC Systems"
    ],
    estimatedTime: "1–2.5 hours"
  },
  "low suction pressure": {
    symptom: "Low Suction Pressure",
    causes: [
      "Low refrigerant charge (leak)",
      "Restricted TXV/metering device",
      "Low indoor airflow",
      "Dirty evaporator coil",
      "Liquid line restriction"
    ],
    steps: [
      "Connect gauges and record suction/head pressure",
      "Calculate superheat",
      "Check airflow and evaporator coil",
      "Look for icing on evaporator",
      "Perform leak check"
    ],
    tools: [
      "Manifold gauges",
      "Temperature clamps",
      "Leak detector",
      "Micron gauge"
    ],
    parts: [
      "TXV / metering device",
      "Filter drier",
      "Refrigerant",
      "Evaporator coil"
    ],
    safety: "Use refrigerant-safe gloves and goggles. Follow EPA 608 recovery procedures.",
    videos: [
      {
        title: "HVAC Metering Device Basics",
        url: "https://youtu.be/qV-DIqIxPGk"
      }
    ],
    modules: ["Digital Gauges & Smart Probes"],
    estimatedTime: "1.5–4 hours"
  },
  "fan running no cooling": {
    symptom: "Fan Running, No Cooling",
    causes: [
      "Compressor not running",
      "Failed capacitor",
      "Faulty contactor",
      "High pressure lockout",
      "Low refrigerant"
    ],
    steps: [
      "Confirm indoor blower is running",
      "Check if outdoor compressor is running",
      "Test contactor coil voltage",
      "Check capacitor",
      "Measure suction pressure"
    ],
    tools: [
      "Clamp meter",
      "Multimeter",
      "Manifold gauges",
      "Capacitance meter"
    ],
    parts: ["Contactor", "Dual run capacitor", "Refrigerant"],
    safety: "Do not touch outdoor unit while power is on without proper PPE.",
    videos: [
      {
        title: "How to Test HVAC Relays, Contactors, and Transformers",
        url: "https://youtu.be/4ja6GynaxQ0"
      }
    ],
    modules: [
      "Electrical Troubleshooting for HVAC Systems",
      "Multimeter Training"
    ],
    estimatedTime: "1–2 hours"
  },
  "frozen coil": {
    symptom: "Frozen Evaporator Coil",
    causes: [
      "Low indoor airflow",
      "Low refrigerant charge",
      "Dirty evaporator coil",
      "Blower motor failure"
    ],
    steps: [
      "Switch to Fan Only mode and allow full defrost",
      "Replace air filter",
      "Check all vents are open",
      "After defrost: connect gauges and measure pressures",
      "Measure delta T"
    ],
    tools: ["Digital manifold gauges", "Digital thermometer", "Clamp meter"],
    parts: ["Air filter", "Blower motor", "Blower capacitor", "Refrigerant"],
    safety: "Never chip or scrape ice from coil — allow natural defrost. Ensure drain pan is clear.",
    videos: [
      {
        title: "HVAC AC Pressure, Superheat & Subcooling Explained",
        url: "https://youtu.be/5UU2c5e2ork"
      }
    ],
    modules: ["Digital Gauges & Smart Probes"],
    estimatedTime: "1.5–3 hours + defrost wait"
  },
  "refrigerant leak": {
    symptom: "Refrigerant Leak",
    causes: [
      "Vibration-eroded service port",
      "Formicary corrosion on coil",
      "Pinhole leak in coil",
      "Loose or improperly flared fitting"
    ],
    steps: [
      "Use electronic leak detector to locate leak",
      "Recover all refrigerant per EPA 608",
      "Repair leak",
      "Install new filter drier",
      "Pressure test with nitrogen",
      "Evacuate to 500 microns",
      "Recharge to nameplate weight"
    ],
    tools: [
      "Electronic leak detector",
      "Recovery machine",
      "Nitrogen regulator",
      "Micron gauge",
      "Manifold gauges"
    ],
    parts: [
      "Filter drier",
      "Refrigerant",
      "Schrader valve cores",
      "Copper fittings"
    ],
    safety: "NEVER vent refrigerant — EPA violation. Wear gloves and goggles. Use regulator for nitrogen pressure testing.",
    videos: [
      {
        title: "HVAC Refrigerant Recovery (3D)",
        url: "https://youtu.be/fROHlPXw_H0"
      },
      {
        title: "HVAC How to Evacuate AC System",
        url: "https://youtu.be/JsnQeUSuUMU"
      }
    ],
    modules: [
      "Refrigerant Handling Procedures",
      "Digital Gauges & Smart Probes"
    ],
    estimatedTime: "2–5 hours"
  }
};
function lookupJobResponse(query) {
  const q = query.toLowerCase();
  for (const key of Object.keys(JOB_KNOWLEDGE_BASE)) {
    if (q.includes(key)) return JOB_KNOWLEDGE_BASE[key];
  }
  const keywords = {
    cool: "ac not cooling",
    cooling: "ac not cooling",
    compress: "compressor not starting",
    suction: "low suction pressure",
    frozen: "frozen coil",
    ice: "frozen coil",
    leak: "refrigerant leak",
    refrigerant: "refrigerant leak",
    "no start": "compressor not starting"
  };
  for (const [kw, key] of Object.entries(keywords)) {
    if (q.includes(kw)) return JOB_KNOWLEDGE_BASE[key];
  }
  return null;
}
function JobAIAnalysisDialog({
  job,
  open,
  onClose
}) {
  const response = lookupJobResponse(job.issueDescription);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (o) => !o && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-2xl max-h-[90vh] overflow-y-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-4 w-4 text-primary" }),
      "AI Job Analysis — ",
      job.customerName
    ] }) }),
    !response ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-8 text-center text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "mx-auto h-10 w-10 mb-3 opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "No matching diagnosis found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-1", children: 'Try adding more specific symptoms to the job description (e.g. "AC not cooling", "compressor not starting")' })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-primary/20 bg-primary/5 p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground mb-1", children: "Analyzing symptom:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm italic", children: [
          '"',
          job.issueDescription,
          '"'
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Diagnostic Plan" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-1.5", children: response.steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary", children: i + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s })
        ] }, s)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-3 w-3" }),
            " Parts List"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: response.parts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" }),
            p
          ] }, p)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3" }),
            " Tool List"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: response.tools.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary shrink-0" }),
            t
          ] }, t)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Estimated repair time:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: response.estimatedTime })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 rounded-md border border-amber-500/40 bg-amber-500/10 px-4 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "mt-0.5 h-4 w-4 shrink-0 text-amber-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-amber-600 dark:text-amber-400 mb-0.5", children: "Safety Warning" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-700 dark:text-amber-300 leading-relaxed", children: response.safety })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-muted/30 p-3 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Related Resources" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5", children: [
          response.modules.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "mr-1 h-3 w-3" }),
            m
          ] }, m)),
          response.videos.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: v.url,
              target: "_blank",
              rel: "noopener noreferrer",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Badge,
                {
                  variant: "outline",
                  className: "text-xs cursor-pointer hover:bg-primary/10",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "mr-1 h-3 w-3" }),
                    v.title.length > 25 ? `${v.title.slice(0, 25)}…` : v.title
                  ]
                }
              )
            },
            v.url
          ))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, children: "Close" }) })
    ] })
  ] }) });
}
function JobsTab({ isGuest }) {
  const [jobs, setJobs] = reactExports.useState([]);
  const [isDialogOpen, setIsDialogOpen] = reactExports.useState(false);
  const [editingId, setEditingId] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState(EMPTY_FORM);
  const [aiAnalysisJob, setAiAnalysisJob] = reactExports.useState(null);
  const openNewJob = () => {
    if (isGuest) {
      ue.error(GUEST_RESTRICTION_MESSAGE);
      return;
    }
    setEditingId(null);
    setForm(EMPTY_FORM);
    setIsDialogOpen(true);
  };
  const openEditJob = (job) => {
    if (isGuest) {
      ue.error(GUEST_RESTRICTION_MESSAGE);
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
      status: job.status
    });
    setIsDialogOpen(true);
  };
  const handleSave = (e) => {
    e.preventDefault();
    if (!form.customerName.trim()) {
      ue.error("Customer name is required");
      return;
    }
    if (!form.issueDescription.trim()) {
      ue.error("Issue description is required");
      return;
    }
    if (editingId) {
      setJobs(
        (prev) => prev.map((j) => j.id === editingId ? { ...j, ...form } : j)
      );
      ue.success("Job updated successfully");
    } else {
      const newJob = {
        id: `job-${Date.now()}`,
        createdAt: (/* @__PURE__ */ new Date()).toLocaleString(),
        ...form
      };
      setJobs((prev) => [newJob, ...prev]);
      ue.success("Job created successfully");
    }
    setIsDialogOpen(false);
    setEditingId(null);
    setForm(EMPTY_FORM);
  };
  const handleExportCSV = () => {
    if (isGuest) {
      ue.error(GUEST_RESTRICTION_MESSAGE);
      return;
    }
    if (jobs.length === 0) {
      ue.error("No jobs to export");
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
      "Created At"
    ];
    const rows = jobs.map((j) => [
      `"${j.customerName}"`,
      `"${j.address}"`,
      `"${j.systemType}"`,
      `"${j.unitModel}"`,
      `"${j.unitSerial}"`,
      `"${j.issueDescription.replace(/"/g, '""')}"`,
      j.status,
      j.createdAt
    ]);
    const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `hvac-jobs-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    ue.success("Jobs exported successfully");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-5 w-5" }),
            "Job Management"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Create, track, and export service jobs with customer and unit details" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              onClick: handleExportCSV,
              disabled: jobs.length === 0,
              "data-ocid": "jobs.export_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "mr-2 h-4 w-4" }),
                "Export CSV"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: openNewJob, "data-ocid": "jobs.primary_button", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-2 h-4 w-4" }),
            "New Job"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: jobs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-14 text-center",
          "data-ocid": "jobs.empty_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "mb-3 h-10 w-10 text-muted-foreground/40" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-muted-foreground", children: "No jobs yet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: 'Click "New Job" to create your first work order' })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: jobs.map((job, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "rounded-lg border border-border bg-card p-4 transition-shadow hover:shadow-md",
          "data-ocid": `jobs.item.${index + 1}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm", children: job.customerName }),
                statusBadge(job.status)
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mb-1", children: [
                job.systemType,
                job.address ? ` · ${job.address}` : "",
                " ·",
                " ",
                job.createdAt
              ] }),
              job.issueDescription && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground line-clamp-2", children: job.issueDescription })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 shrink-0 flex-wrap justify-end", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  onClick: () => setAiAnalysisJob(job),
                  className: "border-primary/30 text-primary hover:bg-primary/10",
                  "data-ocid": `jobs.ai_analysis_button.${index + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-1.5 h-3.5 w-3.5" }),
                    "AI Analysis"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  onClick: () => openEditJob(job),
                  "data-ocid": `jobs.edit_button.${index + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "mr-1.5 h-3.5 w-3.5" }),
                    "Open / Edit"
                  ]
                }
              )
            ] })
          ] })
        },
        job.id
      )) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: isDialogOpen, onOpenChange: setIsDialogOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg max-h-[90vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: editingId ? "Edit Job" : "Create New Job" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSave, className: "space-y-4 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "customerName", children: "Customer Name *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "customerName",
              value: form.customerName,
              onChange: (e) => setForm((f) => ({ ...f, customerName: e.target.value })),
              placeholder: "e.g. John Smith",
              required: true,
              "data-ocid": "jobs.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "address", children: "Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "address",
              value: form.address,
              onChange: (e) => setForm((f) => ({ ...f, address: e.target.value })),
              placeholder: "e.g. 123 Main St, Orlando, FL",
              "data-ocid": "jobs.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "systemType", children: "System Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: form.systemType,
                onValueChange: (v) => setForm((f) => ({ ...f, systemType: v })),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "systemType", "data-ocid": "jobs.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Split System", children: "Split System" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Package Unit", children: "Package Unit" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Heat Pump", children: "Heat Pump" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Mini-Split", children: "Mini-Split" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Other", children: "Other" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "status", children: "Job Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: form.status,
                onValueChange: (v) => setForm((f) => ({ ...f, status: v })),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "status", "data-ocid": "jobs.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "open", children: "Open" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "in-progress", children: "In Progress" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "completed", children: "Completed" })
                  ] })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "unitModel", children: "Unit Model" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "unitModel",
                value: form.unitModel,
                onChange: (e) => setForm((f) => ({ ...f, unitModel: e.target.value })),
                placeholder: "e.g. Carrier 24ACC636A003",
                "data-ocid": "jobs.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "unitSerial", children: "Unit Serial" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "unitSerial",
                value: form.unitSerial,
                onChange: (e) => setForm((f) => ({ ...f, unitSerial: e.target.value })),
                placeholder: "e.g. 4819A12345",
                "data-ocid": "jobs.input"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "issueDescription", children: "Issue Description *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              id: "issueDescription",
              value: form.issueDescription,
              onChange: (e) => setForm((f) => ({ ...f, issueDescription: e.target.value })),
              placeholder: "Describe the reported issue and any initial findings...",
              rows: 4,
              required: true,
              "data-ocid": "jobs.textarea"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              variant: "outline",
              className: "flex-1",
              onClick: () => setIsDialogOpen(false),
              "data-ocid": "jobs.cancel_button",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "submit",
              className: "flex-1",
              "data-ocid": "jobs.save_button",
              children: editingId ? "Save Changes" : "Create Job"
            }
          )
        ] })
      ] })
    ] }) }),
    aiAnalysisJob && /* @__PURE__ */ jsxRuntimeExports.jsx(
      JobAIAnalysisDialog,
      {
        job: aiAnalysisJob,
        open: !!aiAnalysisJob,
        onClose: () => setAiAnalysisJob(null)
      }
    )
  ] });
}
export {
  JobsTab as default
};
