import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Lock, BookOpen, Video, Search, MapPin, MessageCircle, Briefcase, BarChart3, Wrench, Users, FileText } from 'lucide-react';

interface GuestModeChecklistProps {
  onUpgrade: () => void;
}

export default function GuestModeChecklist({ onUpgrade }: GuestModeChecklistProps) {
  const visibleFeatures = [
    { icon: BookOpen, label: 'Study', status: 'Read-only' },
    { icon: Video, label: 'Videos', status: 'Read-only' },
    { icon: Search, label: 'Parts & Specs', status: 'Read-only' },
    { icon: MapPin, label: 'Suppliers', status: 'Read-only' },
    { icon: MessageCircle, label: 'AI Assistant', status: 'Limited' },
  ];

  const lockedFeatures = [
    { icon: Briefcase, label: 'Jobs' },
    { icon: BarChart3, label: 'Logs' },
    { icon: Wrench, label: 'Full Diagnostics' },
    { icon: FileText, label: 'Study Progress' },
    { icon: Users, label: 'Community' },
    { icon: FileText, label: 'Export Data' },
  ];

  return (
    <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:border-amber-900 dark:from-amber-950/30 dark:to-orange-950/30">
      <CardHeader>
        <CardTitle className="text-xl">Guest Mode Access</CardTitle>
        <p className="text-sm text-muted-foreground">
          You're exploring HVAC Buddy as a guest. Create an account to unlock all features.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Visible to guests section */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-foreground">Visible to guests</h3>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {visibleFeatures.map((feature) => (
              <div
                key={feature.label}
                className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50/50 p-3 dark:border-green-900 dark:bg-green-950/20"
              >
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-green-600 dark:text-green-400" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">{feature.label}</p>
                  <Badge variant="outline" className="mt-1 text-xs">
                    {feature.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Locked for guests section */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-foreground">Locked for guests</h3>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {lockedFeatures.map((feature) => (
              <div
                key={feature.label}
                className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50/50 p-3 dark:border-red-900 dark:bg-red-950/20"
              >
                <Lock className="h-4 w-4 flex-shrink-0 text-red-600 dark:text-red-400" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">{feature.label}</p>
                  <Badge variant="outline" className="mt-1 text-xs text-red-600 dark:text-red-400">
                    Sign in to unlock
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Upgrade CTA */}
        <div className="flex flex-col items-center gap-3 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 p-6 text-center">
          <p className="text-sm font-medium text-foreground">
            Ready to unlock all features and save your progress?
          </p>
          <Button onClick={onUpgrade} size="lg" className="w-full sm:w-auto">
            Create an Account
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
