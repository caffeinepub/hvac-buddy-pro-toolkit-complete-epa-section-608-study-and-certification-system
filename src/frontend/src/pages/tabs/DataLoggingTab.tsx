import { Alert, AlertDescription } from "@/components/ui/alert";
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
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Calendar,
  ClipboardList,
  Download,
  Plus,
  Trash2,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useAddLogEntry, useGetLogEntries } from "../../hooks/useQueries";
import { DataType } from "../../types/local";
import { GUEST_RESTRICTION_MESSAGE } from "../../utils/guestRestrictions";

interface DataLoggingTabProps {
  isGuest: boolean;
}

interface LogEntryForm {
  dataType: DataType;
  value: string;
  relatedJob: string;
  notes: string;
}

export default function DataLoggingTab({ isGuest }: DataLoggingTabProps) {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [formData, setFormData] = useState<LogEntryForm>({
    dataType: DataType.temperature,
    value: "",
    relatedJob: "",
    notes: "",
  });

  const { data: logEntries = [], isLoading } = useGetLogEntries();
  const addLogEntry = useAddLogEntry();

  const handleAddEntry = () => {
    if (isGuest) {
      toast.error(GUEST_RESTRICTION_MESSAGE);
      return;
    }

    if (!formData.value) {
      toast.error("Please enter a measurement value");
      return;
    }

    const value = Number.parseFloat(formData.value);
    if (Number.isNaN(value)) {
      toast.error("Please enter a valid number");
      return;
    }

    addLogEntry.mutate(
      {
        dataType: formData.dataType,
        value,
        relatedJob: formData.relatedJob ? BigInt(formData.relatedJob) : null,
      },
      {
        onSuccess: () => {
          setIsAddDialogOpen(false);
          setFormData({
            dataType: DataType.temperature,
            value: "",
            relatedJob: "",
            notes: "",
          });
          toast.success("Log entry added successfully");
        },
      },
    );
  };

  const handleExportData = () => {
    if (isGuest) {
      toast.error(GUEST_RESTRICTION_MESSAGE);
      return;
    }

    if (logEntries.length === 0) {
      toast.error("No data to export");
      return;
    }

    const csvContent = [
      ["Timestamp", "Data Type", "Value", "Job ID", "Notes"].join(","),
      ...logEntries.map((entry) =>
        [
          new Date(Number(entry.timestamp) / 1000000).toLocaleString(),
          entry.dataType,
          entry.value,
          entry.relatedJob?.toString() || "N/A",
          "",
        ].join(","),
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `hvac-data-log-${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast.success("Data exported successfully");
  };

  const getDataTypeLabel = (type: DataType): string => {
    const labels = {
      [DataType.temperature]: "Temperature (°F)",
      [DataType.pressure]: "Pressure (PSI)",
      [DataType.amperage]: "Amperage (A)",
      [DataType.refrigerantWeight]: "Refrigerant Weight (lbs)",
      [DataType.vibration]: "Vibration (Hz)",
    };
    return labels[type];
  };

  const getDataTypeUnit = (type: DataType): string => {
    const units = {
      [DataType.temperature]: "°F",
      [DataType.pressure]: "PSI",
      [DataType.amperage]: "A",
      [DataType.refrigerantWeight]: "lbs",
      [DataType.vibration]: "Hz",
    };
    return units[type];
  };

  // Calculate quick statistics
  const stats = {
    totalEntries: logEntries.length,
    avgTemp:
      logEntries
        .filter((e) => e.dataType === DataType.temperature)
        .reduce((sum, e) => sum + e.value, 0) /
        logEntries.filter((e) => e.dataType === DataType.temperature).length ||
      0,
    avgPressure:
      logEntries
        .filter((e) => e.dataType === DataType.pressure)
        .reduce((sum, e) => sum + e.value, 0) /
        logEntries.filter((e) => e.dataType === DataType.pressure).length || 0,
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <ClipboardList className="h-5 w-5" />
                Data Logging
              </CardTitle>
              <CardDescription>
                Record and track HVAC system measurements over time
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={handleExportData}
                variant="outline"
                disabled={isGuest || logEntries.length === 0}
                data-ocid="logging.export_button"
              >
                <Download className="mr-2 h-4 w-4" />
                Export CSV
              </Button>
              <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogTrigger asChild>
                  <Button disabled={isGuest}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Entry
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Log Entry</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="dataType">Measurement Type</Label>
                      <Select
                        value={formData.dataType}
                        onValueChange={(value) =>
                          setFormData({
                            ...formData,
                            dataType: value as DataType,
                          })
                        }
                      >
                        <SelectTrigger id="dataType">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value={DataType.temperature}>
                            Temperature (°F)
                          </SelectItem>
                          <SelectItem value={DataType.pressure}>
                            Pressure (PSI)
                          </SelectItem>
                          <SelectItem value={DataType.amperage}>
                            Amperage (A)
                          </SelectItem>
                          <SelectItem value={DataType.refrigerantWeight}>
                            Refrigerant Weight (lbs)
                          </SelectItem>
                          <SelectItem value={DataType.vibration}>
                            Vibration (Hz)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="value">Value</Label>
                      <Input
                        id="value"
                        type="number"
                        step="0.1"
                        placeholder="Enter measurement value"
                        value={formData.value}
                        onChange={(e) =>
                          setFormData({ ...formData, value: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="relatedJob">
                        Related Job ID (Optional)
                      </Label>
                      <Input
                        id="relatedJob"
                        type="number"
                        placeholder="Enter job ID"
                        value={formData.relatedJob}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            relatedJob: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      onClick={handleAddEntry}
                      disabled={addLogEntry.isPending}
                    >
                      {addLogEntry.isPending ? "Adding..." : "Add Entry"}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Quick Statistics */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Entries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <ClipboardList className="h-4 w-4 text-primary" />
                  <span className="text-2xl font-bold">
                    {stats.totalEntries}
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Avg Temperature
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span className="text-2xl font-bold">
                    {stats.avgTemp.toFixed(1)}°F
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Avg Pressure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span className="text-2xl font-bold">
                    {stats.avgPressure.toFixed(1)} PSI
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Data Table */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Recent Entries (Last 50)
            </h3>
            {isLoading ? (
              <div className="flex items-center justify-center py-8">
                <div className="text-muted-foreground">Loading entries...</div>
              </div>
            ) : logEntries.length === 0 ? (
              <Alert>
                <Calendar className="h-4 w-4" />
                <AlertDescription>
                  No log entries yet. Start recording measurements to track
                  system performance over time.
                </AlertDescription>
              </Alert>
            ) : (
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Job ID</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {logEntries.slice(0, 50).map((entry) => (
                      <TableRow key={entry.id.toString()}>
                        <TableCell className="text-sm">
                          {new Date(
                            Number(entry.timestamp) / 1000000,
                          ).toLocaleString()}
                        </TableCell>
                        <TableCell className="text-sm">
                          {getDataTypeLabel(entry.dataType)}
                        </TableCell>
                        <TableCell className="text-sm font-medium">
                          {entry.value} {getDataTypeUnit(entry.dataType)}
                        </TableCell>
                        <TableCell className="text-sm">
                          {entry.relatedJob?.toString() || "N/A"}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
