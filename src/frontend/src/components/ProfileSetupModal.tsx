import { useState } from 'react';
import { useCompleteUserOnboarding } from '../hooks/useQueries';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, CheckCircle2, User, Building2, Mail, Phone, Briefcase } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface ProfileSetupModalProps {
  isGuestUpgrade: boolean;
}

export default function ProfileSetupModal({ isGuestUpgrade }: ProfileSetupModalProps) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experienceYears, setExperienceYears] = useState('0');
  const [showSuccess, setShowSuccess] = useState(false);

  const completeOnboarding = useCompleteUserOnboarding();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate inputs
    if (!name.trim()) {
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      return;
    }
    if (!company.trim()) {
      return;
    }
    if (!phone.trim()) {
      return;
    }

    try {
      await completeOnboarding.mutateAsync({
        name: name.trim(),
        company: company.trim(),
        email: email.trim(),
        phone: phone.trim(),
        experienceYears: parseInt(experienceYears) || 0,
      });

      // Show success message
      setShowSuccess(true);
    } catch (error) {
      console.error('Profile setup error:', error);
    }
  };

  if (showSuccess) {
    return (
      <Dialog open={true}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center space-y-4 py-8">
            <div className="rounded-full bg-green-100 p-3 dark:bg-green-900/20">
              <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold">Welcome to HVAC Buddy!</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Your account has been created successfully. You can now access all features.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={true}>
      <DialogContent className="sm:max-w-lg" onPointerDownOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {isGuestUpgrade ? 'Upgrade Your Account' : 'Complete Your Profile'}
          </DialogTitle>
          <DialogDescription>
            {isGuestUpgrade
              ? 'Create a full account to save your progress and access all features.'
              : 'Tell us a bit about yourself to get started with HVAC Buddy Pro.'}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Full Name *
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="John Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoFocus
            />
          </div>

          {/* Company */}
          <div className="space-y-2">
            <Label htmlFor="company" className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Company *
            </Label>
            <Input
              id="company"
              type="text"
              placeholder="ABC HVAC Services"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Phone *
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(555) 123-4567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {/* Experience Years */}
          <div className="space-y-2">
            <Label htmlFor="experience" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              Years of Experience
            </Label>
            <Input
              id="experience"
              type="number"
              min="0"
              max="50"
              placeholder="0"
              value={experienceYears}
              onChange={(e) => setExperienceYears(e.target.value)}
            />
          </div>

          {/* Error Message */}
          {completeOnboarding.isError && (
            <Alert variant="destructive">
              <AlertDescription>
                {completeOnboarding.error?.message || 'Failed to create profile. Please try again.'}
              </AlertDescription>
            </Alert>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full"
            disabled={completeOnboarding.isPending}
          >
            {completeOnboarding.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating Account...
              </>
            ) : (
              'Create Account'
            )}
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            * Required fields
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}

