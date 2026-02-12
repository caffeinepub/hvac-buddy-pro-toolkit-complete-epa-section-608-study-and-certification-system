# Specification

## Summary
**Goal:** Make Guest Mode restrictions clearly understandable on the dashboard via a responsive checklist and ensure blocked guest actions consistently show an upgrade prompt.

**Planned changes:**
- Add a Guest Mode access checklist component shown when `isGuest` is true, listing what is available vs locked using the exact required labels.
- Implement responsive layout for the checklist (multi-column grid on wider screens; sidebar/stacked on small screens) without overflow/breakage.
- Add a “Create an account” / “Sign in to unlock” CTA in the checklist that opens the existing `ProfileSetupModal` with `isGuestUpgrade=true` without leaving the dashboard.
- Align guest restrictions to the checklist by blocking guest persistence/export/posting actions (where applicable) and showing a consistent user-facing message when blocked (including DataLogging export and diagnostic session save/export).

**User-visible outcome:** In Guest Mode, users see a clear checklist of what they can access vs what requires sign-in, can open an upgrade/sign-in modal directly from the dashboard, and receive consistent messaging when attempting locked save/export/post actions.
