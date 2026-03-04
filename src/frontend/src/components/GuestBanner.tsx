import { useQueryClient } from "@tanstack/react-query";
import { AlertCircle, LogOut, X } from "lucide-react";
import { useState } from "react";
import { useClearGuestProfile } from "../hooks/useQueries";
import ProfileSetupModal from "./ProfileSetupModal";

export default function GuestBanner() {
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const clearGuest = useClearGuestProfile();
  const queryClient = useQueryClient();

  const handleCloseUpgradeModal = () => {
    setShowUpgradeModal(false);
  };

  const handleExitGuestMode = async () => {
    try {
      await clearGuest.mutateAsync();
      // Force a full app refresh to return to landing page
      queryClient.clear();
    } catch (error) {
      console.error("Failed to exit guest mode:", error);
    }
  };

  if (isDismissed) return null;

  return (
    <>
      <div className="border-b border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950">
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">
          <div className="flex items-center gap-3">
            <img
              src="/assets/generated/guest-mode-banner.dim_800x100.png"
              alt=""
              className="h-6 w-auto hidden sm:block"
            />
            <AlertCircle className="h-5 w-5 flex-shrink-0 text-amber-600 dark:text-amber-400 sm:hidden" />
            <p className="text-sm text-amber-900 dark:text-amber-100">
              <span className="font-semibold">Guest Mode:</span> You're
              exploring HVAC Buddy as a guest. Your progress won't be saved.{" "}
              <button
                type="button"
                onClick={() => setShowUpgradeModal(true)}
                className="font-semibold underline hover:no-underline"
              >
                Create an account
              </button>{" "}
              to save your work.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleExitGuestMode}
              disabled={clearGuest.isPending}
              className="flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-medium text-amber-700 hover:bg-amber-100 dark:text-amber-300 dark:hover:bg-amber-900 disabled:opacity-50"
              title="Exit Guest Mode"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Exit</span>
            </button>
            <button
              type="button"
              onClick={() => setIsDismissed(true)}
              className="flex-shrink-0 text-amber-600 hover:text-amber-800 dark:text-amber-400 dark:hover:text-amber-200"
              aria-label="Dismiss banner"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {showUpgradeModal && (
        <ProfileSetupModal
          isGuestUpgrade={true}
          onClose={handleCloseUpgradeModal}
        />
      )}
    </>
  );
}
