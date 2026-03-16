# HVAC Buddy: Pro Toolkit

## Current State

The app is a comprehensive HVAC training and fieldwork platform with tabs for Troubleshooter, Study, Jobs, Parts, Suppliers, Photo, Calculators, Logging, and Community. The Jobs tab manages service jobs with customer info, system type, status, and issue description. The TroubleshootingChat component provides basic AI-assisted chat with symptom selection and rule-based responses. The Community tab has a Knowledge Base, Help AI, and Video Library.

## Requested Changes (Diff)

### Add
- New `FieldAIAssistant` tab in the Dashboard as a top-level module alongside Jobs
- `FieldAIAssistant.tsx` component with:
  - Chat interface for HVAC diagnostics accepting free-text symptoms
  - AI response engine with: probable causes, step-by-step diagnostic checks, recommended tools, possible replacement parts, safety warnings
  - Related resources panel showing videos, study modules, and KB articles contextually
  - Job AI Analysis panel: when a job symptom is entered, generate parts list, tool list, diagnostic plan, and estimated repair time
  - Session history so technicians can review past diagnostic sessions
  - Internal resource prioritization (study modules, KB articles, videos shown before external links)

### Modify
- `Dashboard.tsx` — add new "Field AI" tab with Bot icon, lazy-loaded
- `JobsTab.tsx` — add "Analyze with AI" button on job cards and in create/edit dialog to send job symptoms to Field AI Assistant

### Remove
- Nothing removed

## Implementation Plan

1. Create `src/frontend/src/pages/tabs/FieldAIAssistantTab.tsx` — full AI chat module with:
   - Symptom input (free text + quick chips)
   - AI knowledge base responses keyed to HVAC symptom patterns
   - Related resources sidebar (videos, study modules, KB articles)
   - Job integration panel (analyze job symptoms, generate parts/tools/time estimate)
   - Session history list with past sessions reviewable
2. Update `Dashboard.tsx` to add the new Field AI tab (10 tabs total)
3. Update `JobsTab.tsx` to add an "AI Analysis" button that opens Field AI with the job's issue description pre-loaded
