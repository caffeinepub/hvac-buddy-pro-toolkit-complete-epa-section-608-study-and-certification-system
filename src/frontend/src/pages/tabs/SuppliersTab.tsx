import { Alert, AlertDescription } from "@/components/ui/alert";
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
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  Edit,
  ExternalLink,
  Filter,
  Globe,
  MapPin,
  Phone,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface Supplier {
  id: string;
  name: string;
  category: string;
  address: string;
  city: string;
  zip: string;
  phone: string;
  website?: string;
  hours?: string;
  distance?: string;
  notes?: string;
  isUserAdded: boolean;
}

const SUPPLIER_CATEGORIES = [
  "All",
  "Equipment Distributors",
  "Specialty Parts",
  "Tools & Instruments",
  "Electrical Supplies",
  "Ductwork & Sheet Metal",
  "Insulation & Materials",
];

// Preloaded Orlando-area suppliers (within 50 miles of ZIP 32819)
const PRELOADED_SUPPLIERS: Supplier[] = [
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
    isUserAdded: false,
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
    isUserAdded: false,
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
    isUserAdded: false,
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
    isUserAdded: false,
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
    isUserAdded: false,
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
    isUserAdded: false,
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
    isUserAdded: false,
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
    isUserAdded: false,
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
    isUserAdded: false,
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
    isUserAdded: false,
  },
];

interface SuppliersTabProps {
  isGuest: boolean;
}

export default function SuppliersTab({ isGuest }: SuppliersTabProps) {
  const [suppliers, setSuppliers] = useState<Supplier[]>(PRELOADED_SUPPLIERS);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [editingSupplier, setEditingSupplier] = useState<Supplier | null>(null);
  const [newSupplier, setNewSupplier] = useState<Partial<Supplier>>({
    name: "",
    category: "Equipment Distributors",
    address: "",
    city: "",
    zip: "",
    phone: "",
    website: "",
    hours: "",
    notes: "",
  });

  // Filter suppliers
  const filteredSuppliers = suppliers.filter((supplier) => {
    const matchesSearch =
      supplier.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      supplier.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      supplier.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || supplier.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Sort by distance
  const sortedSuppliers = [...filteredSuppliers].sort((a, b) => {
    if (!a.distance || !b.distance) return 0;
    const distA = Number.parseFloat(a.distance);
    const distB = Number.parseFloat(b.distance);
    return distA - distB;
  });

  const handleAddSupplier = () => {
    if (isGuest) {
      toast.error(
        "Guest users cannot add suppliers. Create an account to save custom suppliers.",
      );
      return;
    }

    if (!newSupplier.name || !newSupplier.phone || !newSupplier.city) {
      toast.error("Please fill in required fields: Name, Phone, and City");
      return;
    }

    const supplier: Supplier = {
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
      isUserAdded: true,
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
      notes: "",
    });
    toast.success("Supplier added successfully");
  };

  const handleEditSupplier = (supplier: Supplier) => {
    if (isGuest) {
      toast.error(
        "Guest users cannot edit suppliers. Create an account to manage custom suppliers.",
      );
      return;
    }

    if (!supplier.isUserAdded) {
      toast.error("Cannot edit preloaded suppliers");
      return;
    }

    setEditingSupplier(supplier);
    setNewSupplier(supplier);
    setShowAddDialog(true);
  };

  const handleUpdateSupplier = () => {
    if (!editingSupplier) return;

    const updatedSuppliers = suppliers.map((s) =>
      s.id === editingSupplier.id
        ? {
            ...s,
            ...newSupplier,
          }
        : s,
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
      notes: "",
    });
    toast.success("Supplier updated successfully");
  };

  const handleDeleteSupplier = (supplierId: string) => {
    if (isGuest) {
      toast.error(
        "Guest users cannot delete suppliers. Create an account to manage custom suppliers.",
      );
      return;
    }

    const supplier = suppliers.find((s) => s.id === supplierId);
    if (!supplier?.isUserAdded) {
      toast.error("Cannot delete preloaded suppliers");
      return;
    }

    setSuppliers(suppliers.filter((s) => s.id !== supplierId));
    toast.success("Supplier deleted successfully");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Local HVAC Suppliers
              </CardTitle>
              <CardDescription>
                Find nearby HVAC supply stores within 50 miles of Orlando, FL
                (ZIP 32819)
              </CardDescription>
            </div>
            <Button onClick={() => setShowAddDialog(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Supplier
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search and Filter */}
          <div className="space-y-3">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search by name, city, or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-[220px]">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {SUPPLIER_CATEGORIES.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {(selectedCategory !== "All" || searchQuery) && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                >
                  Clear Filters
                </Button>
              )}
            </div>
          </div>

          {isGuest && (
            <Alert>
              <MapPin className="h-4 w-4" />
              <AlertDescription>
                Guest users can view suppliers but cannot add custom suppliers.
                Create an account to save your own supplier contacts.
              </AlertDescription>
            </Alert>
          )}

          {/* Suppliers List */}
          <ScrollArea className="h-[600px] pr-4">
            <div className="space-y-3">
              {sortedSuppliers.length === 0 ? (
                <Alert>
                  <MapPin className="h-4 w-4" />
                  <AlertDescription>
                    No suppliers found matching your search criteria. Try
                    adjusting your filters.
                  </AlertDescription>
                </Alert>
              ) : (
                sortedSuppliers.map((supplier) => (
                  <div
                    key={supplier.id}
                    className="rounded-lg border border-border bg-card p-4 transition-all hover:shadow-md"
                  >
                    <div className="mb-3 flex items-start justify-between">
                      <div className="flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <h3 className="font-semibold text-card-foreground">
                            {supplier.name}
                          </h3>
                          <Badge variant="outline">{supplier.category}</Badge>
                          {supplier.isUserAdded && (
                            <Badge variant="secondary">Custom</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {supplier.address && `${supplier.address}, `}
                          {supplier.city}, FL {supplier.zip}
                        </p>
                        {supplier.distance && (
                          <p className="mt-1 text-xs text-muted-foreground">
                            📍 {supplier.distance} from Orlando
                          </p>
                        )}
                      </div>
                      {supplier.isUserAdded && (
                        <div className="flex gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEditSupplier(supplier)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDeleteSupplier(supplier.id)}
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <a
                          href={`tel:${supplier.phone}`}
                          className="hover:underline"
                        >
                          {supplier.phone}
                        </a>
                      </div>

                      {supplier.website && (
                        <div className="flex items-center gap-2 text-sm">
                          <Globe className="h-4 w-4 text-muted-foreground" />
                          <a
                            href={supplier.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 hover:underline"
                          >
                            Visit Website
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      )}

                      {supplier.hours && (
                        <div className="text-sm">
                          <span className="font-medium">Hours:</span>{" "}
                          {supplier.hours}
                        </div>
                      )}

                      {supplier.notes && (
                        <div className="mt-2 rounded-md bg-muted/50 p-2 text-sm">
                          <span className="font-medium">Notes:</span>{" "}
                          {supplier.notes}
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </ScrollArea>

          <div className="text-center text-sm text-muted-foreground">
            Showing {sortedSuppliers.length} of {suppliers.length} suppliers
          </div>
        </CardContent>
      </Card>

      {/* Add/Edit Supplier Dialog */}
      <Dialog
        open={showAddDialog}
        onOpenChange={(open) => {
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
              notes: "",
            });
          }
        }}
      >
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {editingSupplier ? "Edit Supplier" : "Add New Supplier"}
            </DialogTitle>
            <DialogDescription>
              {editingSupplier
                ? "Update supplier information"
                : "Add a custom supplier to your personal directory"}
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-[500px] pr-4">
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Supplier Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    value={newSupplier.name}
                    onChange={(e) =>
                      setNewSupplier({ ...newSupplier, name: e.target.value })
                    }
                    placeholder="ABC Supply Company"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={newSupplier.category}
                    onValueChange={(value) =>
                      setNewSupplier({ ...newSupplier, category: value })
                    }
                  >
                    <SelectTrigger id="category">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {SUPPLIER_CATEGORIES.filter((c) => c !== "All").map(
                        (cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat}
                          </SelectItem>
                        ),
                      )}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Street Address</Label>
                <Input
                  id="address"
                  value={newSupplier.address}
                  onChange={(e) =>
                    setNewSupplier({ ...newSupplier, address: e.target.value })
                  }
                  placeholder="123 Main Street"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="city">
                    City <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="city"
                    value={newSupplier.city}
                    onChange={(e) =>
                      setNewSupplier({ ...newSupplier, city: e.target.value })
                    }
                    placeholder="Orlando"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP Code</Label>
                  <Input
                    id="zip"
                    value={newSupplier.zip}
                    onChange={(e) =>
                      setNewSupplier({ ...newSupplier, zip: e.target.value })
                    }
                    placeholder="32819"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">
                    Phone <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    value={newSupplier.phone}
                    onChange={(e) =>
                      setNewSupplier({ ...newSupplier, phone: e.target.value })
                    }
                    placeholder="(407) 555-0123"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  value={newSupplier.website}
                  onChange={(e) =>
                    setNewSupplier({ ...newSupplier, website: e.target.value })
                  }
                  placeholder="https://www.example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="hours">Business Hours</Label>
                <Input
                  id="hours"
                  value={newSupplier.hours}
                  onChange={(e) =>
                    setNewSupplier({ ...newSupplier, hours: e.target.value })
                  }
                  placeholder="Mon-Fri: 8:00 AM - 5:00 PM"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={newSupplier.notes}
                  onChange={(e) =>
                    setNewSupplier({ ...newSupplier, notes: e.target.value })
                  }
                  placeholder="Additional information, contact person, special services, etc."
                  rows={3}
                />
              </div>
            </div>
          </ScrollArea>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
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
                  notes: "",
                });
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={
                editingSupplier ? handleUpdateSupplier : handleAddSupplier
              }
            >
              {editingSupplier ? "Update Supplier" : "Add Supplier"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
