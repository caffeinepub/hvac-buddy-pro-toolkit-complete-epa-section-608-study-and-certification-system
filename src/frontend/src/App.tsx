import { Toaster } from "@/components/ui/sonner";
import { useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { ThemeProvider } from "next-themes";
import { Suspense, useEffect } from "react";
import Footer from "./components/Footer";
import GuestBanner from "./components/GuestBanner";
import Header from "./components/Header";
import OnboardingWalkthrough from "./components/OnboardingWalkthrough";
import ProfileSetupModal from "./components/ProfileSetupModal";
import { useInternetIdentity } from "./hooks/useInternetIdentity";
import {
  useClearGuestProfile,
  useGetCallerUserProfile,
  useGetGuestProfile,
  useIsWalkthroughCompleted,
  useMarkWalkthroughCompleted,
} from "./hooks/useQueries";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import { clearGuestSession } from "./utils/guestSession";

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
  const queryClient = useQueryClient();
  const isAuthenticated = !!identity;

  // Fetch user profile (only when authenticated)
  const {
    data: userProfile,
    isLoading: profileLoading,
    isFetched: profileFetched,
  } = useGetCallerUserProfile();

  // Fetch guest profile (works without authentication)
  const { data: guestProfile } = useGetGuestProfile();

  const { data: walkthroughCompleted, isLoading: walkthroughLoading } =
    useIsWalkthroughCompleted();
  const markWalkthroughCompleted = useMarkWalkthroughCompleted();

  // Guest mode is active when there's a guest profile and no authenticated user profile
  const isGuest = !!guestProfile && !isAuthenticated;

  // Clear guest session when user authenticates
  useEffect(() => {
    if (isAuthenticated && guestProfile) {
      clearGuestSession();
      queryClient.setQueryData(["guestProfile"], null);
      queryClient.invalidateQueries({ queryKey: ["guestProfile"] });
    }
  }, [isAuthenticated, guestProfile, queryClient]);

  // Show loading state while initializing authentication
  if (loginStatus === "initializing") {
    return (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <LoadingScreen />
      </ThemeProvider>
    );
  }

  // Show loading while profiles are being fetched after authentication
  // Only show loading if we're still fetching AND haven't received any data yet
  if (
    isAuthenticated &&
    (profileLoading || walkthroughLoading) &&
    !profileFetched
  ) {
    return (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <LoadingScreen />
      </ThemeProvider>
    );
  }

  // Determine if we should show profile setup modal
  // Only show if: authenticated, profiles are fetched, no user profile exists, and not a guest
  const showProfileSetup =
    isAuthenticated && profileFetched && !userProfile && !guestProfile;

  // Determine if we should show onboarding walkthrough
  // Show if: (authenticated with profile OR guest mode), and walkthrough not completed
  const showOnboarding =
    ((isAuthenticated && userProfile) || isGuest) &&
    walkthroughCompleted === false;

  const handleOnboardingComplete = () => {
    markWalkthroughCompleted.mutate();
  };

  const handleOnboardingSkip = () => {
    markWalkthroughCompleted.mutate();
  };

  // Determine what to render
  const shouldShowDashboard = isAuthenticated || isGuest;
  const shouldShowLanding = !isAuthenticated && !isGuest;

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        {isGuest && <GuestBanner />}
        <main className="flex-1">
          <Suspense fallback={<LoadingScreen />}>
            {shouldShowLanding ? (
              <LandingPage />
            ) : showProfileSetup ? (
              <ProfileSetupModal isGuestUpgrade={false} />
            ) : shouldShowDashboard ? (
              <Dashboard isGuest={isGuest} />
            ) : (
              <LandingPage />
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
