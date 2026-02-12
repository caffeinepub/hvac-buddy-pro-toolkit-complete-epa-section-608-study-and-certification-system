import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ClipboardList, Plus, Download, Trash2, Calendar, TrendingUp } from 'lucide-react';
import { useAddLogEntry, useGetLogEntries } from '../../hooks/useQueries';
import { DataType } from '../../types/local';
import { toast } from 'sonner';

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
    value: '',
    relatedJob: '',
    notes: '',
  });

  const { data: logEntries = [], isLoading } = useGetLogEntries();
  const addLogEntry = useAddLogEntry();

  const handleAddEntry = () => {
    if (isGuest) {
      toast.error('Guest users cannot save log entries. Create an account to save your data.');
      return;
    }

    if (!formData.value) {
      toast.error('Please enter a measurement value');
      return;
    }

    const value = parseFloat(formData.value);
    if (isNaN(value)) {
      toast.error('Please enter a valid number');
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
            value: '',
            relatedJob: '',
            notes: '',
          });
          toast.success('Log entry added successfully');
        },
      }
    );
  };

  const handleExportData = () => {
    if (logEntries.length === 0) {
      toast.error('No data to export');
      return;
    }

    const csvContent = [
      ['Timestamp', 'Type', 'Value', 'Job ID'].join(','),
      ...logEntries.map((entry) =>
        [
          new Date(Number(entry.timestamp) / 1000000).toLocaleString(),
          entry.dataType,
          entry.value,
          entry.relatedJob?.toString() || 'N/A',
        ].join(',')
      ),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hvac-data-log-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast.success('Data exported successfully');
  };

  const getDataTypeLabel = (type: DataType): string => {
    const labels = {
      [DataType.temperature]: 'Temperature (°F)',
      [DataType.pressure]: 'Pressure (PSI)',
      [DataType.amperage]: 'Amperage (A)',
      [DataType.refrigerantWeight]: 'Refrigerant Weight (lbs)',
      [DataType.vibration]: 'Vibration (Hz)',
    };
    return labels[type];
  };

  const getDataTypeUnit = (type: DataType): string => {
    const units = {
      [DataType.temperature]: '°F',
      [DataType.pressure]: 'PSI',
      [DataType.amperage]: 'A',
      [DataType.refrigerantWeight]: 'lbs',
      [DataType.vibration]: 'Hz',
    };
    return units[type];
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <ClipboardList className="h-5 w-5" />
                Data Logging & Measurements
              </CardTitle>
              <CardDescription>
                Record and track system measurements with timestamp tracking for diagnostic analysis
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleExportData} disabled={logEntries.length === 0}>
                <Download className="mr-2 h-4 w-4" />
                Export CSV
              </Button>
              <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Entry
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Measurement Entry</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="dataType">Measurement Type</Label>
                      <Select
                        value={formData.dataType}
                        onValueChange={(value) => setFormData({ ...formData, dataType: value as DataType })}
                      >
                        <SelectTrigger id="dataType">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value={DataType.temperature}>Temperature (°F)</SelectItem>
                          <SelectItem value={DataType.pressure}>Pressure (PSI)</SelectItem>
                          <SelectItem value={DataType.amperage}>Amperage (A)</SelectItem>
                          <SelectItem value={DataType.refrigerantWeight}>Refrigerant Weight (lbs)</SelectItem>
                          <SelectItem value={DataType.vibration}>Vibration (Hz)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="value">
                        Value ({getDataTypeUnit(formData.dataType)}) <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="value"
                        type="number"
                        step="0.1"
                        value={formData.value}
                        onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                        placeholder="Enter measurement value"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="relatedJob">Related Job ID (Optional)</Label>
                      <Input
                        id="relatedJob"
                        type="number"
                        value={formData.relatedJob}
                        onChange={(e) => setFormData({ ...formData, relatedJob: e.target.value })}
                        placeholder="Enter job ID if applicable"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Notes (Optional)</Label>
                      <Input
                        id="notes"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Additional notes or context"
                      />
                    </div>

                    {isGuest && (
                      <Alert>
                        <AlertDescription>
                          Guest users cannot save log entries. Create an account to save your measurement data.
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleAddEntry} disabled={addLogEntry.isPending || isGuest}>
                      {addLogEntry.isPending ? 'Adding...' : 'Add Entry'}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <ClipboardList className="h-4 w-4" />
            <AlertDescription>
              Track temperature, pressure, amperage, refrigerant weight, and vibration measurements with automatic
              timestamp recording. Export data for analysis and reporting.
            </AlertDescription>
          </Alert>

          {/* Quick Stats */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Entries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{logEntries.length}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Temperature Logs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {logEntries.filter((e) => e.dataType === DataType.temperature).length}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Pressure Logs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {logEntries.filter((e) => e.dataType === DataType.pressure).length}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Amperage Logs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {logEntries.filter((e) => e.dataType === DataType.amperage).length}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Data Table */}
          <div className="rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Timestamp
                    </div>
                  </TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Job ID</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center text-muted-foreground">
                      Loading entries...
                    </TableCell>
                  </TableRow>
                ) : logEntries.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center text-muted-foreground">
                      No log entries yet. Click "Add Entry" to record your first measurement.
                    </TableCell>
                  </TableRow>
                ) : (
                  logEntries
                    .slice()
                    .reverse()
                    .slice(0, 50)
                    .map((entry) => (
                      <TableRow key={entry.id.toString()}>
                        <TableCell className="font-mono text-sm">
                          {new Date(Number(entry.timestamp) / 1000000).toLocaleString()}
                        </TableCell>
                        <TableCell>{getDataTypeLabel(entry.dataType)}</TableCell>
                        <TableCell className="font-semibold">
                          {entry.value} {getDataTypeUnit(entry.dataType)}
                        </TableCell>
                        <TableCell>{entry.relatedJob?.toString() || 'N/A'}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon" disabled={isGuest}>
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                )}
              </TableBody>
            </Table>
          </div>

          {logEntries.length > 50 && (
            <p className="text-center text-sm text-muted-foreground">
              Showing most recent 50 entries of {logEntries.length} total
            </p>
          )}

          {/* Feature Cards */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Calendar className="h-5 w-5 text-primary" />
                  Timestamp Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Automatic timestamp recording for every measurement ensures accurate chronological tracking and
                  historical analysis.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Trend Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Track measurement trends over time to identify patterns, diagnose issues, and optimize system
                  performance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Download className="h-5 w-5 text-primary" />
                  Data Export
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Export measurement data to CSV format for external analysis, reporting, and integration with other
                  tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

