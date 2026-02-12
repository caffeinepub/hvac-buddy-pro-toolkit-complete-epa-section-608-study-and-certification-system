import { useState } from 'react';
import { AlertCircle, X } from 'lucide-react';
import ProfileSetupModal from './ProfileSetupModal';

export default function GuestBanner() {
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const handleCloseUpgradeModal = () => {
    setShowUpgradeModal(false);
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
              <span className="font-semibold">Guest Mode:</span> You're exploring HVAC Buddy as a guest. Your
              progress won't be saved.{' '}
              <button
                onClick={() => setShowUpgradeModal(true)}
                className="font-semibold underline hover:no-underline"
              >
                Create an account
              </button>{' '}
              to save your work.
            </p>
          </div>
          <button
            onClick={() => setIsDismissed(true)}
            className="flex-shrink-0 text-amber-600 hover:text-amber-800 dark:text-amber-400 dark:hover:text-amber-200"
            aria-label="Dismiss banner"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {showUpgradeModal && (
        <ProfileSetupModal isGuestUpgrade={true} onClose={handleCloseUpgradeModal} />
      )}
    </>
  );
}
