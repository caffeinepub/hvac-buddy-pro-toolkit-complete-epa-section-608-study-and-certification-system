// Guest session persistence utility using sessionStorage
// Provides deterministic guest session management across browser refreshes

export interface GuestSessionData {
  name: string;
  company: string;
  studyMode: "beginner" | "expert";
  sessionStart: number;
}

const GUEST_SESSION_KEY = "hvac_buddy_guest_session";

/**
 * Save guest session to sessionStorage
 */
export function saveGuestSession(data: GuestSessionData): void {
  try {
    sessionStorage.setItem(GUEST_SESSION_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Failed to save guest session:", error);
  }
}

/**
 * Load guest session from sessionStorage
 */
export function loadGuestSession(): GuestSessionData | null {
  try {
    const data = sessionStorage.getItem(GUEST_SESSION_KEY);
    if (!data) return null;
    return JSON.parse(data);
  } catch (error) {
    console.error("Failed to load guest session:", error);
    return null;
  }
}

/**
 * Clear guest session from sessionStorage
 * This is the single, deterministic way to exit guest mode
 */
export function clearGuestSession(): void {
  try {
    sessionStorage.removeItem(GUEST_SESSION_KEY);
  } catch (error) {
    console.error("Failed to clear guest session:", error);
  }
}

/**
 * Check if a guest session exists
 */
export function hasGuestSession(): boolean {
  return loadGuestSession() !== null;
}
