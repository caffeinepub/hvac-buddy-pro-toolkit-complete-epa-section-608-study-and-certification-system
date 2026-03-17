import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, C as Card, a as CardHeader, b as CardTitle, aI as MapPin, d as CardDescription, k as Button, e as CardContent, a2 as Search, I as Input, A as Alert, g as AlertDescription, i as Badge, aJ as Phone, w as Dialog, x as DialogContent, y as DialogHeader, z as DialogTitle, al as DialogDescription, L as Label, ar as DialogFooter, p as ue } from "./index-DobHR2Wc.js";
import { S as ScrollArea } from "./scroll-area-owNR0oJt.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CR_7uthw.js";
import { T as Textarea } from "./textarea-CTRG8Om1.js";
import { P as Plus } from "./plus-Cx73yhGt.js";
import { F as Funnel } from "./funnel-BtFmfBjw.js";
import { S as SquarePen } from "./square-pen-CRVIDquI.js";
import { G as Globe } from "./globe-34pVUFLs.js";
import { E as ExternalLink } from "./external-link-1Nq1J8dI.js";
import "./index-BsdchjIc.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
const SUPPLIER_CATEGORIES = [
  "All",
  "Equipment Distributors",
  "Specialty Parts",
  "Tools & Instruments",
  "Electrical Supplies",
  "Ductwork & Sheet Metal",
  "Insulation & Materials"
];
const PRELOADED_SUPPLIERS = [
  {
    id: "1",
    name: "Johnstone Supply - Orlando",
    category: "Equipment Distributors",
    address: "4550 L.B. McLeod Road",
    city: "Orlando",
    zip: "32811",
    phone: "(407) 425-6821",
    website: "https://www.johnstonesupply.com",
    hours: "Mon-Fri: 7:00 AM - 5:00 PM, Sat: 8:00 AM - 12:00 PM",
    distance: "3.2 miles",
    isUserAdded: false
  },
  {
    id: "2",
    name: "Ferguson HVAC - Orlando",
    category: "Equipment Distributors",
    address: "2900 Forsyth Road",
    city: "Orlando",
    zip: "32807",
    phone: "(407) 277-3700",
    website: "https://www.ferguson.com",
    hours: "Mon-Fri: 7:00 AM - 5:00 PM",
    distance: "5.8 miles",
    isUserAdded: false
  },
  {
    id: "3",
    name: "Baker Distributing - Orlando",
    category: "Equipment Distributors",
    address: "5401 South Orange Blossom Trail",
    city: "Orlando",
    zip: "32809",
    phone: "(407) 851-5959",
    website: "https://www.bakerdist.com",
    hours: "Mon-Fri: 7:00 AM - 5:00 PM, Sat: 8:00 AM - 12:00 PM",
    distance: "6.5 miles",
    isUserAdded: false
  },
  {
    id: "4",
    name: "Gemaire Distributors - Orlando",
    category: "Equipment Distributors",
    address: "4141 Metric Drive",
    city: "Winter Park",
    zip: "32792",
    phone: "(407) 671-3100",
    website: "https://www.gemaire.com",
    hours: "Mon-Fri: 7:00 AM - 5:00 PM",
    distance: "8.1 miles",
    isUserAdded: false
  },
  {
    id: "5",
    name: "Tradewinds Climate Systems",
    category: "Specialty Parts",
    address: "1234 Industrial Blvd",
    city: "Orlando",
    zip: "32824",
    phone: "(407) 555-0123",
    website: "https://www.tradewindsclimate.com",
    hours: "Mon-Fri: 8:00 AM - 5:00 PM",
    distance: "10.3 miles",
    isUserAdded: false
  },
  {
    id: "6",
    name: "HVAC Supply Warehouse",
    category: "Specialty Parts",
    address: "5678 Commerce Way",
    city: "Apopka",
    zip: "32703",
    phone: "(407) 555-0456",
    hours: "Mon-Fri: 7:30 AM - 5:30 PM, Sat: 8:00 AM - 1:00 PM",
    distance: "15.7 miles",
    isUserAdded: false
  },
  {
    id: "7",
    name: "Pro Tools HVAC Supply",
    category: "Tools & Instruments",
    address: "9012 Tech Drive",
    city: "Orlando",
    zip: "32817",
    phone: "(407) 555-0789",
    website: "https://www.protoolshvac.com",
    hours: "Mon-Fri: 8:00 AM - 6:00 PM, Sat: 9:00 AM - 3:00 PM",
    distance: "4.9 miles",
    isUserAdded: false
  },
  {
    id: "8",
    name: "Graybar Electric - Orlando",
    category: "Electrical Supplies",
    address: "3456 Electrical Ave",
    city: "Orlando",
    zip: "32805",
    phone: "(407) 555-1234",
    website: "https://www.graybar.com",
    hours: "Mon-Fri: 7:00 AM - 5:00 PM",
    distance: "7.2 miles",
    isUserAdded: false
  },
  {
    id: "9",
    name: "Central Florida Sheet Metal",
    category: "Ductwork & Sheet Metal",
    address: "7890 Industrial Park",
    city: "Longwood",
    zip: "32750",
    phone: "(407) 555-5678",
    hours: "Mon-Fri: 7:00 AM - 4:00 PM",
    distance: "18.4 miles",
    isUserAdded: false
  },
  {
    id: "10",
    name: "Insulation Depot Orlando",
    category: "Insulation & Materials",
    address: "2345 Materials Blvd",
    city: "Orlando",
    zip: "32822",
    phone: "(407) 555-9012",
    website: "https://www.insulationdepot.com",
    hours: "Mon-Fri: 7:30 AM - 5:00 PM",
    distance: "12.1 miles",
    isUserAdded: false
  }
];
function SuppliersTab({ isGuest }) {
  const [suppliers, setSuppliers] = reactExports.useState(PRELOADED_SUPPLIERS);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [selectedCategory, setSelectedCategory] = reactExports.useState("All");
  const [showAddDialog, setShowAddDialog] = reactExports.useState(false);
  const [editingSupplier, setEditingSupplier] = reactExports.useState(null);
  const [newSupplier, setNewSupplier] = reactExports.useState({
    name: "",
    category: "Equipment Distributors",
    address: "",
    city: "",
    zip: "",
    phone: "",
    website: "",
    hours: "",
    notes: ""
  });
  const filteredSuppliers = suppliers.filter((supplier) => {
    const matchesSearch = supplier.name.toLowerCase().includes(searchQuery.toLowerCase()) || supplier.city.toLowerCase().includes(searchQuery.toLowerCase()) || supplier.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || supplier.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  const sortedSuppliers = [...filteredSuppliers].sort((a, b) => {
    if (!a.distance || !b.distance) return 0;
    const distA = Number.parseFloat(a.distance);
    const distB = Number.parseFloat(b.distance);
    return distA - distB;
  });
  const handleAddSupplier = () => {
    if (isGuest) {
      ue.error(
        "Guest users cannot add suppliers. Create an account to save custom suppliers."
      );
      return;
    }
    if (!newSupplier.name || !newSupplier.phone || !newSupplier.city) {
      ue.error("Please fill in required fields: Name, Phone, and City");
      return;
    }
    const supplier = {
      id: `user-${Date.now()}`,
      name: newSupplier.name,
      category: newSupplier.category || "Equipment Distributors",
      address: newSupplier.address || "",
      city: newSupplier.city,
      zip: newSupplier.zip || "",
      phone: newSupplier.phone,
      website: newSupplier.website,
      hours: newSupplier.hours,
      notes: newSupplier.notes,
      isUserAdded: true
    };
    setSuppliers([...suppliers, supplier]);
    setShowAddDialog(false);
    setNewSupplier({
      name: "",
      category: "Equipment Distributors",
      address: "",
      city: "",
      zip: "",
      phone: "",
      website: "",
      hours: "",
      notes: ""
    });
    ue.success("Supplier added successfully");
  };
  const handleEditSupplier = (supplier) => {
    if (isGuest) {
      ue.error(
        "Guest users cannot edit suppliers. Create an account to manage custom suppliers."
      );
      return;
    }
    if (!supplier.isUserAdded) {
      ue.error("Cannot edit preloaded suppliers");
      return;
    }
    setEditingSupplier(supplier);
    setNewSupplier(supplier);
    setShowAddDialog(true);
  };
  const handleUpdateSupplier = () => {
    if (!editingSupplier) return;
    const updatedSuppliers = suppliers.map(
      (s) => s.id === editingSupplier.id ? {
        ...s,
        ...newSupplier
      } : s
    );
    setSuppliers(updatedSuppliers);
    setShowAddDialog(false);
    setEditingSupplier(null);
    setNewSupplier({
      name: "",
      category: "Equipment Distributors",
      address: "",
      city: "",
      zip: "",
      phone: "",
      website: "",
      hours: "",
      notes: ""
    });
    ue.success("Supplier updated successfully");
  };
  const handleDeleteSupplier = (supplierId) => {
    if (isGuest) {
      ue.error(
        "Guest users cannot delete suppliers. Create an account to manage custom suppliers."
      );
      return;
    }
    const supplier = suppliers.find((s) => s.id === supplierId);
    if (!(supplier == null ? void 0 : supplier.isUserAdded)) {
      ue.error("Cannot delete preloaded suppliers");
      return;
    }
    setSuppliers(suppliers.filter((s) => s.id !== supplierId));
    ue.success("Supplier deleted successfully");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5" }),
            "Local HVAC Suppliers"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Find nearby HVAC supply stores within 50 miles of Orlando, FL (ZIP 32819)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => setShowAddDialog(true), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-2 h-4 w-4" }),
          "Add Supplier"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "Search by name, city, or category...",
                value: searchQuery,
                onChange: (e) => setSearchQuery(e.target.value),
                className: "pl-9"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: selectedCategory,
                onValueChange: setSelectedCategory,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectTrigger, { className: "w-[220px]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "mr-2 h-4 w-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Category" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: SUPPLIER_CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: cat, children: cat }, cat)) })
                ]
              }
            ),
            (selectedCategory !== "All" || searchQuery) && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                },
                children: "Clear Filters"
              }
            )
          ] })
        ] }),
        isGuest && /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: "Guest users can view suppliers but cannot add custom suppliers. Create an account to save your own supplier contacts." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-[600px] pr-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: sortedSuppliers.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: "No suppliers found matching your search criteria. Try adjusting your filters." })
        ] }) : sortedSuppliers.map((supplier) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-lg border border-border bg-card p-4 transition-all hover:shadow-md",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-start justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-card-foreground", children: supplier.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: supplier.category }),
                    supplier.isUserAdded && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: "Custom" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                    supplier.address && `${supplier.address}, `,
                    supplier.city,
                    ", FL ",
                    supplier.zip
                  ] }),
                  supplier.distance && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-muted-foreground", children: [
                    "📍 ",
                    supplier.distance,
                    " from Orlando"
                  ] })
                ] }),
                supplier.isUserAdded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "ghost",
                      size: "icon",
                      onClick: () => handleEditSupplier(supplier),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "h-4 w-4" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "ghost",
                      size: "icon",
                      onClick: () => handleDeleteSupplier(supplier.id),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4 text-destructive" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-muted-foreground" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: `tel:${supplier.phone}`,
                      className: "hover:underline",
                      children: supplier.phone
                    }
                  )
                ] }),
                supplier.website && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-4 w-4 text-muted-foreground" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: supplier.website,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "flex items-center gap-1 hover:underline",
                      children: [
                        "Visit Website",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" })
                      ]
                    }
                  )
                ] }),
                supplier.hours && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Hours:" }),
                  " ",
                  supplier.hours
                ] }),
                supplier.notes && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 rounded-md bg-muted/50 p-2 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Notes:" }),
                  " ",
                  supplier.notes
                ] })
              ] })
            ]
          },
          supplier.id
        )) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-sm text-muted-foreground", children: [
          "Showing ",
          sortedSuppliers.length,
          " of ",
          suppliers.length,
          " suppliers"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: showAddDialog,
        onOpenChange: (open) => {
          if (!open) {
            setShowAddDialog(false);
            setEditingSupplier(null);
            setNewSupplier({
              name: "",
              category: "Equipment Distributors",
              address: "",
              city: "",
              zip: "",
              phone: "",
              website: "",
              hours: "",
              notes: ""
            });
          }
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: editingSupplier ? "Edit Supplier" : "Add New Supplier" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: editingSupplier ? "Update supplier information" : "Add a custom supplier to your personal directory" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "max-h-[500px] pr-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "name", children: [
                  "Supplier Name ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "name",
                    value: newSupplier.name,
                    onChange: (e) => setNewSupplier({ ...newSupplier, name: e.target.value }),
                    placeholder: "ABC Supply Company"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "category", children: "Category" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: newSupplier.category,
                    onValueChange: (value) => setNewSupplier({ ...newSupplier, category: value }),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "category", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: SUPPLIER_CATEGORIES.filter((c) => c !== "All").map(
                        (cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: cat, children: cat }, cat)
                      ) })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "address", children: "Street Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "address",
                  value: newSupplier.address,
                  onChange: (e) => setNewSupplier({ ...newSupplier, address: e.target.value }),
                  placeholder: "123 Main Street"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "city", children: [
                  "City ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "city",
                    value: newSupplier.city,
                    onChange: (e) => setNewSupplier({ ...newSupplier, city: e.target.value }),
                    placeholder: "Orlando"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "zip", children: "ZIP Code" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "zip",
                    value: newSupplier.zip,
                    onChange: (e) => setNewSupplier({ ...newSupplier, zip: e.target.value }),
                    placeholder: "32819"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "phone", children: [
                  "Phone ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "phone",
                    value: newSupplier.phone,
                    onChange: (e) => setNewSupplier({ ...newSupplier, phone: e.target.value }),
                    placeholder: "(407) 555-0123"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "website", children: "Website" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "website",
                  value: newSupplier.website,
                  onChange: (e) => setNewSupplier({ ...newSupplier, website: e.target.value }),
                  placeholder: "https://www.example.com"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "hours", children: "Business Hours" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "hours",
                  value: newSupplier.hours,
                  onChange: (e) => setNewSupplier({ ...newSupplier, hours: e.target.value }),
                  placeholder: "Mon-Fri: 8:00 AM - 5:00 PM"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "notes", children: "Notes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "notes",
                  value: newSupplier.notes,
                  onChange: (e) => setNewSupplier({ ...newSupplier, notes: e.target.value }),
                  placeholder: "Additional information, contact person, special services, etc.",
                  rows: 3
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                onClick: () => {
                  setShowAddDialog(false);
                  setEditingSupplier(null);
                  setNewSupplier({
                    name: "",
                    category: "Equipment Distributors",
                    address: "",
                    city: "",
                    zip: "",
                    phone: "",
                    website: "",
                    hours: "",
                    notes: ""
                  });
                },
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: editingSupplier ? handleUpdateSupplier : handleAddSupplier,
                children: editingSupplier ? "Update Supplier" : "Add Supplier"
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
export {
  SuppliersTab as default
};
