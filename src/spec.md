# HVAC Buddy: Pro Toolkit

## Current State

The Community tab has a "Knowledge Base" card that is a non-functional placeholder (no click handler, no content). It displays a static description only.

Study modules exist as separate components:
- `MultimeterTrainingModule.tsx`
- `HVACElectricalFundamentals.tsx`
- `DigitalGaugesAndSmartProbes.tsx`
- `UEiDL589MultimeterGuide.tsx`
- `EPA608Module.tsx`, `CoreLessonsModule.tsx`

Video data lives in `src/data/videoLibrary.ts` as a typed `curatedVideos` array with categories, descriptions, URLs, and linked lesson topics.

## Requested Changes (Diff)

### Add
- `src/data/knowledgeBase.ts` — Static knowledge base article data. Each article has:
  - `id`, `title`, `summary`, `category`, `tags`, `relatedVideoIds` (array of video IDs from `videoLibrary.ts`), `studyModuleLink` (navigable route key), `source` (e.g., "EPA Section 608", "ACHR News", "Trane", "Carrier", "Lennox", "HVAC Buddy")
  - Categories: `hvac-fundamentals`, `epa-608`, `electrical`, `refrigeration`, `diagnostics`, `safety`
  - Articles cover: refrigeration cycle, EPA regulations, electrical fundamentals, diagnostics patterns, troubleshooting guides, refrigerant handling safety, multimeter use, gauge reading
- `src/components/community/KnowledgeBaseSearch.tsx` — Full Knowledge Base search UI:
  - Search input with live filtering across title, summary, and tags
  - Category filter tabs (All, HVAC Fundamentals, EPA 608, Electrical, Refrigeration, Diagnostics, Safety)
  - Result cards showing: article title, category badge, short summary (2-3 sentences), related video links (buttons that open YouTube in new tab), study module link button
  - Empty state when no results found
  - Back button to return to Community tab

### Modify
- `CommunityTab.tsx`:
  - Add `showKnowledgeBase` state
  - Render `KnowledgeBaseSearch` when active
  - Convert the static Knowledge Base card into a clickable button that sets `showKnowledgeBase(true)`

### Remove
- Nothing removed.

## Implementation Plan

1. Create `knowledgeBase.ts` with 20+ original summarized articles across all 6 categories, each referencing real video IDs and study module route keys.
2. Create `KnowledgeBaseSearch.tsx` with search input, category filters, and result cards showing summary + video links + module links.
3. Update `CommunityTab.tsx` to render the Knowledge Base view and wire the card button.
