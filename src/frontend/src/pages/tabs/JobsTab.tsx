import { useState } from 'react';
import { useCreateJob } from '../../hooks/useQueries';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Briefcase, Plus, Loader2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { toast } from 'sonner';

interface JobsTabProps {
  isGuest: boolean;
}

export default function JobsTab({ isGuest }: JobsTabProps) {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [customerId, setCustomerId] = useState('');
  const [description, setDescription] = useState('');
  const createJob = useCreateJob();

  const handleCreateJob = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isGuest) {
      toast.error('Guest users cannot create jobs. Create an account to save your work.');
      return;
    }
    
    createJob.mutate(
      {
        customerId: BigInt(customerId || 0),
        description,
        startTime: BigInt(Date.now() * 1000000),
        partsUsed: [],
      },
      {
        onSuccess: () => {
          setIsCreateDialogOpen(false);
          setCustomerId('');
          setDescription('');
        },
      }
    );
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
              <CardDescription>Manage work orders, track time, and organize customer information</CardDescription>
            </div>
            <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  New Job
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Job</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleCreateJob} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="customerId">Customer ID</Label>
                    <Input
                      id="customerId"
                      type="number"
                      value={customerId}
                      onChange={(e) => setCustomerId(e.target.value)}
                      placeholder="Enter customer ID"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Job Description</Label>
                    <Textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Describe the work to be done..."
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={createJob.isPending}>
                    {createJob.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating...
                      </>
                    ) : (
                      'Create Job'
                    )}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <Alert>
            <Briefcase className="h-4 w-4" />
            <AlertDescription>
              Job management features include work order tracking, customer details, unit history, photo attachments,
              time tracking, parts inventory, invoicing templates, and estimate builder tools.
            </AlertDescription>
          </Alert>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="mb-2 font-semibold">Work Orders</h3>
              <p className="text-sm text-muted-foreground">Create and track service jobs with detailed information</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="mb-2 font-semibold">Customer Management</h3>
              <p className="text-sm text-muted-foreground">Store customer details and unit history</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="mb-2 font-semibold">Time Tracking</h3>
              <p className="text-sm text-muted-foreground">Log hours and calculate labor costs</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="mb-2 font-semibold">Invoicing</h3>
              <p className="text-sm text-muted-foreground">Generate professional invoices and estimates</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
