# HVAC Buddy: Pro Toolkit – Integrity Audit & Fix

## Current State

Full-stack HVAC training and field-tool app with these tabs: Troubleshooter, Study, Jobs, Parts, Suppliers, Photo, Calculators, Logging, Community.

**What exists and works:**
- Dashboard with 9 lazy-loaded tab components
- Study system: StudySystemHome → 8 module routes (core-lessons, epa-608, multimeter-training, uei-dl589-guide, hvac-electrical-fundamentals, digital-gauges-probes, electrical-troubleshooting, progress)
- Video Library: 22 curated videos with exact user-provided YouTube URLs; VideoCard renders link buttons (no embeds)
- AIKnowledgeBaseSearch: 3-tier search (internal KB articles → Video Library → External resources)
- knowledgeBase.ts: 23 original articles with relatedVideoIds and studyModuleLink
- externalResources.ts: EPA/manufacturer/ACHR/training summaries with real URLs
- SuppliersTab: 10 preloaded Orlando-area suppliers + user-add/edit/delete
- CommunityTab: 5 cards – Ask AI, AI Troubleshooter Chat, Knowledge Base (AI Search), Video Library, Local Suppliers
- Local Suppliers card in CommunityTab calls `onNavigate?.("suppliers")` → navigates to Suppliers tab
- TroubleshooterTab: full branching logic, pattern-based diagnostic engine, AC Beginner workflow
- DataLoggingTab: log entry form backed by useAddLogEntry / useGetLogEntries hooks
- JobsTab: New Job dialog backed by useCreateJob hook
- PartsTab: refrigerant database + HVAC parts data sheets + QR scanner
- CalculatorsTab: 5 functional calculators (Superheat, Subcooling, Load, Duct, Electrical)
- OnboardingWalkthrough: 5-screen first-run overlay
- User initialization: robust fallback system, guest mode, profile setup modal

**Known issues found in audit:**
1. **JobsTab is minimal** – only shows "Customer ID" (numeric) and "Description" fields, with static placeholder cards for Work Orders / Customer Management / Time Tracking / Invoicing. No list of existing jobs, no status, no address, no system type fields, no export. This is a placeholder-level implementation.
2. **DataLoggingTab is functional** but limited – works for adding entries, but export and delete are not wired if they exist.
3. **KnowledgeBase search (AI-ranked)** – works correctly but has no default/empty-state content showing when user first opens it; user sees a blank area before typing.
4. **VideoLibrary** – uses `useGetVideos()` hook which must map curatedVideos; verify it returns data (not loading forever).
5. **CommunityTab "Popular Topics" chips** – decorative only (no click action); they should ideally open the Knowledge Base search pre-filled with that topic.
6. **StudySystemHome** – "electrical-troubleshooting" back button uses non-standard data-ocid token ("back_button"); minor marker issue.
7. **OnboardingWalkthrough** – calls `markWalkthroughCompleted.mutate()` on both complete and skip; if the backend call fails silently, the walkthrough may re-appear. Need to add localStorage fallback.
8. **Navigation completeness** – All 9 tabs exist and are wired. Local Suppliers card → suppliers tab navigation is correctly implemented via `onNavigate?.("suppliers")`. No dead navigation links found.
9. **Duplicate video entries** – Video IDs 11 (AC Pressure & Subcooling, url: 5UU2c5e2ork) and 16 (Low Voltage, same url: 5UU2c5e2ork) use the same YouTube URL. This is a legitimate dual-categorization (Diagnostics and Electrical) not a true duplicate in data, but the VideoLibrary will show the same video link twice in "All" view.
10. **JobsTab needs expanded form** – The job creation form only collects customerId (number) and description. The user requested customer name, address, system type, unit model/serial, issue description, date/time, job status. The form needs to be upgraded to capture these fields even if they map to the existing backend Job type's description field as a structured string.

## Requested Changes (Diff)

### Add
- Onboarding localStorage fallback: before calling `markWalkthroughCompleted.mutate()`, also write a localStorage key `hvacbuddy_onboarding_done=true`. On App load, if localStorage shows done, skip showing the walkthrough even if backend returns false.
- Knowledge Base empty state: when no search has been entered yet, show a "Browse by Category" panel with 6 category buttons (HVAC Fundamentals, EPA 608, Electrical, Refrigeration, Diagnostics, Safety) that pre-fill the search and filter to that category.
- Popular Topics click handler: clicking a topic chip in CommunityTab should open the KnowledgeBase with that topic pre-searched.

### Modify
- **JobsTab**: Expand the New Job form to capture: Customer Name, Address, System Type (dropdown: split, package, heat pump, mini-split, other), Unit Model, Unit Serial, Issue Description, Job Status (open/in-progress/completed). Pack these fields into the description string as JSON on save. Display existing jobs in a list showing customer name, status badge, date, and description preview. Add a simple export-to-CSV button for the jobs list.
- **DataLoggingTab**: Verify delete and export buttons are wired; if export is a stub, wire it to a CSV download of current log entries.
- **VideoLibrary**: Add a note that IDs 11 and 16 share the same URL (5UU2c5e2ork) — deduplicate display by filtering out video 16 from "All" view to avoid showing identical links, keeping it only in its specific Electrical category.
- **OnboardingWalkthrough**: Add localStorage guard so the walkthrough is not shown again even if backend call fails.
- **StudySystemHome back-button** `data-ocid`: fix the "electrical-troubleshooting" back button token from "back_button" to "secondary_button" to match the allowed vocabulary.

### Remove
- Nothing removed.

## Implementation Plan

1. **JobsTab.tsx** – Replace minimal form + placeholder cards with a full-featured job management UI:
   - Expand New Job form with 7 fields (name, address, systemType, model, serial, issueDescription, status)
   - Store jobs in local React state (array) since the backend Job type is basic; pack structured fields into description as JSON
   - Render job list with cards showing customer name, status badge (color-coded), date, issue preview
   - Add "Export CSV" button that downloads all jobs as CSV
   - Keep guest restriction logic

2. **DataLoggingTab.tsx** – Add CSV export button wired to download all log entries as CSV file.

3. **CommunityTab.tsx** – Make Popular Topics chips open Knowledge Base with pre-filled search query; pass initial query as prop to AIKnowledgeBaseSearch.

4. **AIKnowledgeBaseSearch.tsx** – Accept optional `initialQuery?: string` prop; pre-fill the search input and run search on mount if provided. Add Browse by Category empty state when no query entered.

5. **OnboardingWalkthrough.tsx / App.tsx** – Add localStorage key `hvacbuddy_onboarding_done` as fallback; read it in App.tsx to suppress walkthrough display even when backend walkthroughCompleted is false.

6. **StudyTab.tsx** – Fix `data-ocid` on electrical-troubleshooting back button to use "secondary_button" token.

7. **VideoLibrary.tsx** – Filter out video ID 16 from the "all" tab filtered view (it shares URL with ID 11); keep it only in electricalControls category tab.
