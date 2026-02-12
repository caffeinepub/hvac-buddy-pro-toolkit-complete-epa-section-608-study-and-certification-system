import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useCreateGuestProfile } from '../hooks/useQueries';
import { Loader2 } from 'lucide-react';

export default function LandingPage() {
  const { login, isLoggingIn } = useInternetIdentity();
  const createGuest = useCreateGuestProfile();

  const handleGuestLogin = async () => {
    try {
      await createGuest.mutateAsync();
    } catch (error) {
      console.error('Guest login failed:', error);
    }
  };

  const isLoading = isLoggingIn || createGuest.isPending;

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <div className="mx-auto mb-8 flex justify-center">
          <img
            src="/assets/generated/hvac-buddy-icon-transparent.dim_200x200.png"
            alt="HVAC Buddy"
            className="h-32 w-32"
          />
        </div>
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground">
          HVAC Buddy: HVAC Pro Toolkit
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
          A hybrid study and field workflow app for HVAC professionals to learn faster and work smarter.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={login}
            disabled={isLoading}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 disabled:opacity-50"
          >
            {isLoggingIn ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Logging in...
              </>
            ) : (
              'Create Full Account'
            )}
          </button>
          <button
            onClick={handleGuestLogin}
            disabled={isLoading}
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-background px-8 py-4 text-lg font-semibold text-primary shadow-lg transition-all hover:bg-primary/10 disabled:opacity-50"
          >
            {createGuest.isPending ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Loading...
              </>
            ) : (
              <>
                <img src="/assets/generated/guest-login-icon-transparent.dim_64x64.png" alt="" className="h-5 w-5" />
                Continue as Guest
              </>
            )}
          </button>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Guest mode: Explore all features without saving progress
        </p>
      </section>

      {/* Hero Image */}
      <section className="mb-16">
        <img
          src="/assets/generated/hvac-technician-hero.dim_800x600.jpg"
          alt="HVAC Technician at Work"
          className="mx-auto rounded-2xl shadow-2xl"
        />
      </section>

      {/* Features Grid */}
      <section className="mb-16">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
          Everything You Need in One Toolkit
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon="🔧"
            title="Smart Troubleshooter"
            description="Get step-by-step guidance for common HVAC issues with estimated labor times and parts needed."
          />
          <FeatureCard
            icon="📚"
            title="EPA 608 Study System"
            description="Master EPA certification with ESCO-aligned content, interactive tools, adaptive quizzes, and exam simulations."
          />
          <FeatureCard
            icon="📋"
            title="Job Management"
            description="Track work orders, customer details, time, parts, and generate invoices effortlessly."
          />
          <FeatureCard
            icon="🔍"
            title="Parts Database"
            description="Quick reference for refrigerants, specs, and part cross-references with barcode scanning."
          />
          <FeatureCard
            icon="📸"
            title="Photo Diagnostic"
            description="Capture images of components and get instant identification and relevant data."
          />
          <FeatureCard
            icon="🧮"
            title="Quick Calculators"
            description="Field calculators for superheat, subcooling, load estimates, and electrical loads."
          />
          <FeatureCard
            icon="📊"
            title="Data Logging"
            description="Record temperature, pressure, amps, and more with automatic timestamping and trends."
          />
          <FeatureCard
            icon="🛠️"
            title="Interactive Simulators"
            description="Practice with 8 realistic HVAC tools: pressure gauge, thermometer, multimeter, leak detector, and more."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 p-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-foreground">Ready to Level Up Your HVAC Game?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          Join HVAC professionals who are learning faster and working smarter with HVAC Buddy.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={login}
            disabled={isLoading}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 disabled:opacity-50"
          >
            {isLoggingIn ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Logging in...
              </>
            ) : (
              'Start Free Today'
            )}
          </button>
          <button
            onClick={handleGuestLogin}
            disabled={isLoading}
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-background px-8 py-4 text-lg font-semibold text-primary shadow-lg transition-all hover:bg-primary/10 disabled:opacity-50"
          >
            {createGuest.isPending ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Loading...
              </>
            ) : (
              <>
                <img src="/assets/generated/guest-login-icon-transparent.dim_64x64.png" alt="" className="h-5 w-5" />
                Try as Guest
              </>
            )}
          </button>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
      <div className="mb-4 text-4xl">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold text-card-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
