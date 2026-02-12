import { useInternetIdentity } from './hooks/useInternetIdentity';
import { useGetCallerUserProfile, useGetGuestProfile, useIsWalkthroughCompleted, useMarkWalkthroughCompleted } from './hooks/useQueries';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import Header from './components/Header';
import Footer from './components/Footer';
import ProfileSetupModal from './components/ProfileSetupModal';
import Dashboard from './pages/Dashboard';
import GuestBanner from './components/GuestBanner';
import LandingPage from './pages/LandingPage';
import OnboardingWalkthrough from './components/OnboardingWalkthrough';
import { Loader2 } from 'lucide-react';
import { Suspense } from 'react';

// Loading fallback component
function LoadingScreen() {
  return (
    <div className="flex h-screen items-center justify-center bg-background">
      <div className="text-center">
        <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
        <p className="mt-4 text-muted-foreground">Loading HVAC Buddy...</p>
      </div>
    </div>
  );
}

export default function App() {
  const { identity, loginStatus } = useInternetIdentity();
  const isAuthenticated = !!identity;
  
  // Fetch user profile with automatic initialization fallback
  const { data: userProfile, isLoading: profileLoading, isFetched: profileFetched } = useGetCallerUserProfile();
  const { data: guestProfile, isLoading: guestLoading, isFetched: guestFetched } = useGetGuestProfile();
  const { data: walkthroughCompleted, isLoading: walkthroughLoading } = useIsWalkthroughCompleted();
  const markWalkthroughCompleted = useMarkWalkthroughCompleted();

  const isGuest = isAuthenticated && !!guestProfile && !userProfile;

  // Show loading state while initializing authentication
  if (loginStatus === 'initializing') {
    return (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <LoadingScreen />
      </ThemeProvider>
    );
  }

  // Show loading while profiles are being fetched after authentication
  // Only show loading if we're still fetching AND haven't received any data yet
  if (isAuthenticated && (profileLoading || guestLoading || walkthroughLoading) && !profileFetched && !guestFetched) {
    return (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <LoadingScreen />
      </ThemeProvider>
    );
  }

  // Determine if we should show profile setup modal
  // Only show if: authenticated, profiles are fetched, no user profile exists, and not a guest
  // If profile is null after fetching, backend will have auto-initialized it, so we show setup
  const showProfileSetup = isAuthenticated && profileFetched && guestFetched && !userProfile && !guestProfile;

  // Determine if we should show onboarding walkthrough
  // Show if: authenticated, has profile (user or guest), and walkthrough not completed
  const showOnboarding = isAuthenticated && (userProfile || guestProfile) && walkthroughCompleted === false;

  const handleOnboardingComplete = () => {
    markWalkthroughCompleted.mutate();
  };

  const handleOnboardingSkip = () => {
    markWalkthroughCompleted.mutate();
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        {isGuest && <GuestBanner />}
        <main className="flex-1">
          <Suspense fallback={<LoadingScreen />}>
            {!isAuthenticated ? (
              <LandingPage />
            ) : showProfileSetup ? (
              <ProfileSetupModal isGuestUpgrade={false} />
            ) : (
              <Dashboard isGuest={isGuest} />
            )}
          </Suspense>
        </main>
        <Footer />
        <Toaster richColors closeButton position="top-right" duration={4000} />
        
        {/* Show onboarding walkthrough if needed */}
        {showOnboarding && (
          <OnboardingWalkthrough
            onComplete={handleOnboardingComplete}
            onSkip={handleOnboardingSkip}
          />
        )}
      </div>
    </ThemeProvider>
  );
}

