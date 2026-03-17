import { c as createLucideIcon, r as reactExports, an as DataType, ao as useGetLogEntries, ap as useAddLogEntry, j as jsxRuntimeExports, C as Card, a as CardHeader, b as CardTitle, d as CardDescription, k as Button, w as Dialog, aq as DialogTrigger, x as DialogContent, y as DialogHeader, z as DialogTitle, L as Label, I as Input, ar as DialogFooter, e as CardContent, A as Alert, g as AlertDescription, p as ue } from "./index-DobHR2Wc.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CR_7uthw.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-Ce1eSmHC.js";
import { G as GUEST_RESTRICTION_MESSAGE } from "./guestRestrictions-DGOueCI8.js";
import { D as Download } from "./download-DTnSMTaW.js";
import { P as Plus } from "./plus-Cx73yhGt.js";
import { T as TrendingUp } from "./trending-up-F6ACvPol.js";
import "./index-BsdchjIc.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "M12 11h4", key: "1jrz19" }],
  ["path", { d: "M12 16h4", key: "n85exb" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
];
const ClipboardList = createLucideIcon("clipboard-list", __iconNode);
function DataLoggingTab({ isGuest }) {
  const [isAddDialogOpen, setIsAddDialogOpen] = reactExports.useState(false);
  const [formData, setFormData] = reactExports.useState({
    dataType: DataType.temperature,
    value: "",
    relatedJob: "",
    notes: ""
  });
  const { data: logEntries = [], isLoading } = useGetLogEntries();
  const addLogEntry = useAddLogEntry();
  const handleAddEntry = () => {
    if (isGuest) {
      ue.error(GUEST_RESTRICTION_MESSAGE);
      return;
    }
    if (!formData.value) {
      ue.error("Please enter a measurement value");
      return;
    }
    const value = Number.parseFloat(formData.value);
    if (Number.isNaN(value)) {
      ue.error("Please enter a valid number");
      return;
    }
    addLogEntry.mutate(
      {
        dataType: formData.dataType,
        value,
        relatedJob: formData.relatedJob ? BigInt(formData.relatedJob) : null
      },
      {
        onSuccess: () => {
          setIsAddDialogOpen(false);
          setFormData({
            dataType: DataType.temperature,
            value: "",
            relatedJob: "",
            notes: ""
          });
          ue.success("Log entry added successfully");
        }
      }
    );
  };
  const handleExportData = () => {
    if (isGuest) {
      ue.error(GUEST_RESTRICTION_MESSAGE);
      return;
    }
    if (logEntries.length === 0) {
      ue.error("No data to export");
      return;
    }
    const csvContent = [
      ["Timestamp", "Data Type", "Value", "Job ID", "Notes"].join(","),
      ...logEntries.map(
        (entry) => {
          var _a;
          return [
            new Date(Number(entry.timestamp) / 1e6).toLocaleString(),
            entry.dataType,
            entry.value,
            ((_a = entry.relatedJob) == null ? void 0 : _a.toString()) || "N/A",
            ""
          ].join(",");
        }
      )
    ].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `hvac-data-log-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    ue.success("Data exported successfully");
  };
  const getDataTypeLabel = (type) => {
    const labels = {
      [DataType.temperature]: "Temperature (°F)",
      [DataType.pressure]: "Pressure (PSI)",
      [DataType.amperage]: "Amperage (A)",
      [DataType.refrigerantWeight]: "Refrigerant Weight (lbs)",
      [DataType.vibration]: "Vibration (Hz)"
    };
    return labels[type];
  };
  const getDataTypeUnit = (type) => {
    const units = {
      [DataType.temperature]: "°F",
      [DataType.pressure]: "PSI",
      [DataType.amperage]: "A",
      [DataType.refrigerantWeight]: "lbs",
      [DataType.vibration]: "Hz"
    };
    return units[type];
  };
  const stats = {
    totalEntries: logEntries.length,
    avgTemp: logEntries.filter((e) => e.dataType === DataType.temperature).reduce((sum, e) => sum + e.value, 0) / logEntries.filter((e) => e.dataType === DataType.temperature).length || 0,
    avgPressure: logEntries.filter((e) => e.dataType === DataType.pressure).reduce((sum, e) => sum + e.value, 0) / logEntries.filter((e) => e.dataType === DataType.pressure).length || 0
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "h-5 w-5" }),
          "Data Logging"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Record and track HVAC system measurements over time" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            onClick: handleExportData,
            variant: "outline",
            disabled: isGuest || logEntries.length === 0,
            "data-ocid": "logging.export_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "mr-2 h-4 w-4" }),
              "Export CSV"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: isAddDialogOpen, onOpenChange: setIsAddDialogOpen, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { disabled: isGuest, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-2 h-4 w-4" }),
            "Add Entry"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Add Log Entry" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "dataType", children: "Measurement Type" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: formData.dataType,
                    onValueChange: (value) => setFormData({
                      ...formData,
                      dataType: value
                    }),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "dataType", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: DataType.temperature, children: "Temperature (°F)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: DataType.pressure, children: "Pressure (PSI)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: DataType.amperage, children: "Amperage (A)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: DataType.refrigerantWeight, children: "Refrigerant Weight (lbs)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: DataType.vibration, children: "Vibration (Hz)" })
                      ] })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "value", children: "Value" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "value",
                    type: "number",
                    step: "0.1",
                    placeholder: "Enter measurement value",
                    value: formData.value,
                    onChange: (e) => setFormData({ ...formData, value: e.target.value })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "relatedJob", children: "Related Job ID (Optional)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "relatedJob",
                    type: "number",
                    placeholder: "Enter job ID",
                    value: formData.relatedJob,
                    onChange: (e) => setFormData({
                      ...formData,
                      relatedJob: e.target.value
                    })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: handleAddEntry,
                disabled: addLogEntry.isPending,
                children: addLogEntry.isPending ? "Adding..." : "Add Entry"
              }
            ) })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: "Total Entries" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "h-4 w-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold", children: stats.totalEntries })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: "Avg Temperature" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-2xl font-bold", children: [
              stats.avgTemp.toFixed(1),
              "°F"
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: "Avg Pressure" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-2xl font-bold", children: [
              stats.avgPressure.toFixed(1),
              " PSI"
            ] })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 text-lg font-semibold", children: "Recent Entries (Last 50)" }),
        isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "Loading entries..." }) }) : logEntries.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: "No log entries yet. Start recording measurements to track system performance over time." })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Timestamp" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Value" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Job ID" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: logEntries.slice(0, 50).map((entry) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm", children: new Date(
                Number(entry.timestamp) / 1e6
              ).toLocaleString() }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm", children: getDataTypeLabel(entry.dataType) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "text-sm font-medium", children: [
                entry.value,
                " ",
                getDataTypeUnit(entry.dataType)
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm", children: ((_a = entry.relatedJob) == null ? void 0 : _a.toString()) || "N/A" })
            ] }, entry.id.toString());
          }) })
        ] }) })
      ] })
    ] })
  ] }) });
}
export {
  DataLoggingTab as default
};
