// Shared guest restriction messaging and utilities

export const GUEST_RESTRICTION_MESSAGE = 'Create an account to save and unlock this feature.';

export function showGuestRestrictionToast(toast: any) {
  toast.error(GUEST_RESTRICTION_MESSAGE);
}

export function isGuestRestricted(isGuest: boolean, action: string): boolean {
  return isGuest;
}
