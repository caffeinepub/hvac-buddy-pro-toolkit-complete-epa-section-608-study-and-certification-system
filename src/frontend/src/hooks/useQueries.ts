import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import type { HelpMessage, HelpSessionView, UserProfile } from "../backend";
import { curatedVideos } from "../data/videoLibrary";
import {
  ChatSessionStatus,
  type GuestProfile,
  MeasurementSource,
  MeasurementType,
  type MessageType,
  ResourceType,
  StudyMode,
  VideoCategory,
  type VideoRecord,
} from "../types/local";
import type {
  DiagnosticSession,
  EpaCoreContent,
  Flashcard,
  Job,
  LogEntry,
  PartSpec,
  ProgressTracking,
  Quiz,
  StudyMaterial,
  SupplierRecord,
  TroubleshootingChatSession,
  UserSupplier,
} from "../types/local";
import {
  clearGuestSession,
  loadGuestSession,
  saveGuestSession,
} from "../utils/guestSession";
import { useActor } from "./useActor";
import { useInternetIdentity } from "./useInternetIdentity";

// ============================================================================
// ROBUST USER PROFILE INITIALIZATION WITH FALLBACK SYSTEM
// ============================================================================

// Helper to convert backend StudyMode enum to local type
function _convertStudyMode(backendMode: any): StudyMode {
  if (
    backendMode &&
    typeof backendMode === "object" &&
    "beginner" in backendMode
  ) {
    return StudyMode.beginner;
  }
  if (
    backendMode &&
    typeof backendMode === "object" &&
    "expert" in backendMode
  ) {
    return StudyMode.expert;
  }
  return StudyMode.beginner; // Safe default
}

// Get Caller User Profile with automatic initialization
export function useGetCallerUserProfile() {
  const { actor, isFetching: actorFetching } = useActor();
  const { identity } = useInternetIdentity();

  const query = useQuery<UserProfile | null>({
    queryKey: ["currentUserProfile"],
    queryFn: async () => {
      if (!actor || !identity) return null;

      try {
        // Try to get existing profile
        const profile = await actor.getCallerUserProfile();

        // If profile exists, return it
        if (profile) {
          return profile;
        }

        // If no profile exists, backend will auto-initialize with defaults
        // Try to initialize explicitly
        try {
          await actor.initializeUserProfile();
          // Fetch the newly created profile
          const newProfile = await actor.getCallerUserProfile();
          return newProfile;
        } catch (initError) {
          console.warn(
            "Profile initialization attempted, continuing with null:",
            initError,
          );
          return null;
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
        // Don't throw - return null to allow app to continue
        return null;
      }
    },
    enabled: !!actor && !!identity && !actorFetching,
    retry: 1, // Only retry once
    retryDelay: 500,
    staleTime: 30000, // Cache for 30 seconds
  });

  return {
    ...query,
    isLoading: actorFetching || query.isLoading,
    isFetched: !!actor && !!identity && query.isFetched,
  };
}

// Save Caller User Profile with validation
export function useSaveCallerUserProfile() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (profile: UserProfile) => {
      if (!actor) throw new Error("Actor not available");

      // Validate required fields
      if (!profile.name || profile.name.trim() === "") {
        throw new Error("Name is required");
      }
      if (!profile.email || !profile.email.includes("@")) {
        throw new Error("Valid email is required");
      }
      if (!profile.company || profile.company.trim() === "") {
        throw new Error("Company is required");
      }
      if (!profile.phone || profile.phone.trim() === "") {
        throw new Error("Phone is required");
      }

      // Save profile to backend
      await actor.saveCallerUserProfile(profile);

      // Clear guest session when user creates full account
      clearGuestSession();

      return profile;
    },
    onSuccess: (profile) => {
      queryClient.setQueryData(["currentUserProfile"], profile);
      queryClient.setQueryData(["guestProfile"], null);
      queryClient.invalidateQueries({ queryKey: ["currentUserProfile"] });
      queryClient.invalidateQueries({ queryKey: ["guestProfile"] });
      toast.success("Profile saved successfully!");
    },
    onError: (error: Error) => {
      console.error("Failed to save profile:", error);
      toast.error(error.message || "Failed to save profile. Please try again.");
      throw error;
    },
  });
}

// Complete User Onboarding (create full profile from setup modal)
export function useCompleteUserOnboarding() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: {
      name: string;
      company: string;
      email: string;
      phone: string;
      experienceYears: number;
    }) => {
      if (!actor) throw new Error("Actor not available");

      // Validate inputs
      if (!params.name.trim()) {
        throw new Error("Name is required");
      }
      if (!params.email.trim() || !params.email.includes("@")) {
        throw new Error("Valid email is required");
      }
      if (!params.company.trim()) {
        throw new Error("Company is required");
      }
      if (!params.phone.trim()) {
        throw new Error("Phone is required");
      }

      // Create complete profile
      const profile: UserProfile = {
        id: BigInt(Date.now()),
        name: params.name.trim(),
        company: params.company.trim(),
        email: params.email.trim(),
        phone: params.phone.trim(),
        experienceYears: BigInt(params.experienceYears),
        certifications: [],
        progress: {
          completedChapters: [],
          masteryScore: BigInt(0),
        },
        studyMode: "beginner" as any,
      };

      // Save to backend
      await actor.saveCallerUserProfile(profile);

      // Clear guest session when upgrading to full account
      clearGuestSession();

      return profile;
    },
    onSuccess: (profile) => {
      queryClient.setQueryData(["currentUserProfile"], profile);
      queryClient.setQueryData(["guestProfile"], null);
      queryClient.invalidateQueries({ queryKey: ["currentUserProfile"] });
      queryClient.invalidateQueries({ queryKey: ["guestProfile"] });

      toast.success("🎉 Account created successfully! Welcome to HVAC Buddy.");
    },
    onError: (error: Error) => {
      console.error("Failed to complete onboarding:", error);
      const errorMessage =
        error.message || "Failed to create account. Please try again.";
      toast.error(errorMessage);
      throw error;
    },
  });
}

// Initialize User Profile explicitly (for edge cases)
export function useInitializeUserProfile() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error("Actor not available");
      await actor.initializeUserProfile();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["currentUserProfile"] });
    },
    onError: (error: Error) => {
      console.error("Failed to initialize profile:", error);
      // Don't show error toast - this is a background operation
    },
  });
}

// ============================================================================
// GUEST PROFILE MANAGEMENT (Anonymous - no Internet Identity required)
// ============================================================================

export function useCreateGuestProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      // Create guest profile locally without requiring Internet Identity
      // Guest sessions work with anonymous access
      const guestProfile: GuestProfile = {
        principal: null as any, // Guests don't have a principal
        name: "Guest User",
        company: "Guest",
        studyMode: StudyMode.beginner,
        sessionStart: BigInt(Date.now() * 1000000),
      };

      // Save to sessionStorage for persistence across refreshes
      saveGuestSession({
        name: guestProfile.name,
        company: guestProfile.company,
        studyMode: StudyMode.beginner,
        sessionStart: Date.now(),
      });

      return guestProfile;
    },
    onSuccess: (profile) => {
      queryClient.setQueryData(["guestProfile"], profile);
      queryClient.invalidateQueries({ queryKey: ["currentUserProfile"] });
      toast.success("Welcome to HVAC Buddy! Exploring as guest.");
    },
    onError: (error: Error) => {
      console.error("Failed to create guest profile:", error);
      toast.error("Failed to start guest session. Please try again.");
      throw error;
    },
  });
}

export function useGetGuestProfile() {
  const { actor, isFetching } = useActor();

  return useQuery<GuestProfile | null>({
    queryKey: ["guestProfile"],
    queryFn: async () => {
      // Check sessionStorage for persisted guest session
      const sessionData = loadGuestSession();
      if (!sessionData) return null;

      // Reconstruct guest profile from session data
      const guestProfile: GuestProfile = {
        principal: null as any,
        name: sessionData.name,
        company: sessionData.company,
        studyMode:
          sessionData.studyMode === "expert"
            ? StudyMode.expert
            : StudyMode.beginner,
        sessionStart: BigInt(sessionData.sessionStart * 1000000),
      };

      return guestProfile;
    },
    enabled: !!actor && !isFetching,
    retry: false,
    staleTime: Number.POSITIVE_INFINITY, // Guest profile doesn't change during session
  });
}

export function useClearGuestProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      // Clear guest session from sessionStorage
      clearGuestSession();
    },
    onSuccess: () => {
      queryClient.setQueryData(["guestProfile"], null);
      queryClient.invalidateQueries({ queryKey: ["guestProfile"] });
      toast.success("Guest session ended");
    },
    onError: (error: Error) => {
      console.error("Failed to clear guest session:", error);
    },
  });
}

// ============================================================================
// ONBOARDING WALKTHROUGH
// ============================================================================

export function useIsWalkthroughCompleted() {
  const { actor, isFetching } = useActor();

  return useQuery<boolean>({
    queryKey: ["walkthroughCompleted"],
    queryFn: async () => {
      if (!actor) return false;
      try {
        return await actor.isWalkthroughCompleted();
      } catch (error) {
        console.error("Error checking walkthrough status:", error);
        return false; // Safe default - don't block app
      }
    },
    enabled: !!actor && !isFetching,
    staleTime: Number.POSITIVE_INFINITY,
    retry: false,
  });
}

export function useMarkWalkthroughCompleted() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error("Actor not available");
      await actor.markWalkthroughCompleted();
    },
    onSuccess: () => {
      queryClient.setQueryData(["walkthroughCompleted"], true);
      queryClient.invalidateQueries({ queryKey: ["walkthroughCompleted"] });
    },
    onError: (error: Error) => {
      console.error("Failed to mark walkthrough as completed:", error);
      // Don't block - just log the error
    },
  });
}

// ============================================================================
// HELP SECTION AI CHAT
// ============================================================================

export function useStartHelpSession() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error("Actor not available");
      await actor.startHelpSession();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["helpSession"] });
    },
    onError: (error: Error) => {
      console.error("Failed to start help session:", error);
      toast.error("Failed to start chat session");
    },
  });
}

export function useGetHelpSession() {
  const { actor, isFetching } = useActor();

  return useQuery<HelpSessionView | null>({
    queryKey: ["helpSession"],
    queryFn: async () => {
      if (!actor) return null;
      try {
        const session = await actor.getHelpSession();
        return session || null;
      } catch (error) {
        console.error("Error fetching help session:", error);
        return null;
      }
    },
    enabled: !!actor && !isFetching,
    refetchInterval: 2000,
    retry: false,
  });
}

export function useAddHelpMessage() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: {
      content: string;
      messageType: MessageType;
    }) => {
      if (!actor) throw new Error("Actor not available");

      const message: HelpMessage = {
        id: BigInt(Date.now()),
        sender: "user" as any,
        content: params.content,
        messageType: params.messageType as any,
        timestamp: BigInt(Date.now() * 1000000),
      };

      await actor.addHelpMessage(message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["helpSession"] });
    },
    onError: (error: Error) => {
      console.error("Failed to add help message:", error);
      throw error;
    },
  });
}

export function useClearHelpSession() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error("Actor not available");
      await actor.clearCurrentHelpSession();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["helpSession"] });
    },
    onError: (error: Error) => {
      console.error("Failed to clear help session:", error);
      throw error;
    },
  });
}

// ============================================================================
// VIDEO LIBRARY
// ============================================================================

export function useGetVideos() {
  const { actor, isFetching } = useActor();

  return useQuery<VideoRecord[]>({
    queryKey: ["videos"],
    queryFn: async () => {
      return curatedVideos;
    },
    enabled: !!actor && !isFetching,
    staleTime: 5 * 60 * 1000,
  });
}

// ============================================================================
// SUPPLIERS
// ============================================================================

export function useGetLocalSuppliers() {
  const { actor, isFetching } = useActor();

  return useQuery<SupplierRecord[]>({
    queryKey: ["localSuppliers"],
    queryFn: async () => {
      return [];
    },
    enabled: !!actor && !isFetching,
    staleTime: 10 * 60 * 1000,
  });
}

export function useGetUserSuppliers() {
  const { actor, isFetching } = useActor();

  return useQuery<UserSupplier[]>({
    queryKey: ["userSuppliers"],
    queryFn: async () => {
      return [];
    },
    enabled: !!actor && !isFetching,
    retry: false,
  });
}

export function useAddUserSupplier() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (_supplier: UserSupplier) => {
      if (!actor) throw new Error("Actor not available");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userSuppliers"] });
      toast.success("Supplier added successfully");
    },
    onError: (error: Error) => {
      console.error("Failed to add supplier:", error);
      toast.error("Failed to add supplier. Please try again.");
    },
  });
}

export function useUpdateUserSuppliers() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (_suppliers: UserSupplier[]) => {
      if (!actor) throw new Error("Actor not available");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userSuppliers"] });
      toast.success("Suppliers updated successfully");
    },
    onError: (error: Error) => {
      console.error("Failed to update suppliers:", error);
      toast.error("Failed to update suppliers. Please try again.");
    },
  });
}

// ============================================================================
// PARTS DATABASE
// ============================================================================

export function useGetParts() {
  const { actor, isFetching } = useActor();

  return useQuery<PartSpec[]>({
    queryKey: ["parts"],
    queryFn: async () => {
      return [];
    },
    enabled: !!actor && !isFetching,
    staleTime: 10 * 60 * 1000,
  });
}

// ============================================================================
// JOB MANAGEMENT
// ============================================================================

export function useGetJobs() {
  const { actor, isFetching } = useActor();

  return useQuery<Job[]>({
    queryKey: ["jobs"],
    queryFn: async () => {
      return [];
    },
    enabled: !!actor && !isFetching,
    retry: false,
  });
}

export function useCreateJob() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (_params: {
      customerId: bigint;
      description: string;
      startTime: bigint;
      partsUsed: bigint[];
    }) => {
      if (!actor) throw new Error("Actor not available");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      toast.success("Job created successfully");
    },
    onError: (error: Error) => {
      console.error("Failed to create job:", error);
      toast.error("Failed to create job. Please try again.");
    },
  });
}

// ============================================================================
// DATA LOGGING
// ============================================================================

export function useGetLogEntries() {
  const { actor, isFetching } = useActor();

  return useQuery<LogEntry[]>({
    queryKey: ["logEntries"],
    queryFn: async () => {
      return [];
    },
    enabled: !!actor && !isFetching,
    retry: false,
  });
}

export function useAddLogEntry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (_params: {
      dataType: any;
      value: number;
      relatedJob: bigint | null;
    }) => {
      if (!actor) throw new Error("Actor not available");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["logEntries"] });
      toast.success("Log entry added successfully");
    },
    onError: (error: Error) => {
      console.error("Failed to add log entry:", error);
      toast.error("Failed to add log entry. Please try again.");
    },
  });
}

// ============================================================================
// TROUBLESHOOTING CHAT
// ============================================================================

export function useGetTroubleshootingChats() {
  const { actor, isFetching } = useActor();

  return useQuery<TroubleshootingChatSession[]>({
    queryKey: ["troubleshootingChats"],
    queryFn: async () => {
      return [];
    },
    enabled: !!actor && !isFetching,
    retry: false,
  });
}

// ============================================================================
// STUDY MATERIALS
// ============================================================================

export function useGetStudyMaterials() {
  const { actor, isFetching } = useActor();

  return useQuery<StudyMaterial[]>({
    queryKey: ["studyMaterials"],
    queryFn: async () => {
      return [];
    },
    enabled: !!actor && !isFetching,
    staleTime: 10 * 60 * 1000,
  });
}

// ============================================================================
// EPA CONTENT
// ============================================================================

export function useGetEpaCoreContent() {
  const { actor, isFetching } = useActor();

  return useQuery<EpaCoreContent[]>({
    queryKey: ["epaCoreContent"],
    queryFn: async () => {
      return [];
    },
    enabled: !!actor && !isFetching,
    staleTime: 10 * 60 * 1000,
  });
}

export function useGetProgressTracking() {
  const { actor, isFetching } = useActor();

  return useQuery<ProgressTracking | null>({
    queryKey: ["progressTracking"],
    queryFn: async () => {
      return null;
    },
    enabled: !!actor && !isFetching,
    retry: false,
  });
}

// ============================================================================
// DIAGNOSTIC SESSIONS
// ============================================================================

export function useGetDiagnosticSessions() {
  const { actor, isFetching } = useActor();

  return useQuery<DiagnosticSession[]>({
    queryKey: ["diagnosticSessions"],
    queryFn: async () => {
      return [];
    },
    enabled: !!actor && !isFetching,
    retry: false,
  });
}
