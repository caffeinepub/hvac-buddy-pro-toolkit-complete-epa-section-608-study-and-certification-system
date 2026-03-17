# HVAC Buddy: Pro Toolkit

## Current State
The app has a `FieldAIAssistantTab` that handles symptom-based chat with a static KNOWLEDGE_BASE, quick symptom chips, session history, and a basic "Analyze a Job" panel. The `JobsTab` has a `LocalJob` interface with customer name, address, system type, model, serial, issue description, and status — but lacks refrigerant type, measurements, final repair, and diagnostic info fields.

## Requested Changes (Diff)

### Add
- New symptoms to KNOWLEDGE_BASE: "weak airflow", "thermostat not responding", expanded coverage
- Measurement Analysis panel inside Field HVAC Assistant: input fields for suction pressure, head pressure, superheat, subcooling, temperature split — with pattern-matching logic that suggests likely issues (low refrigerant charge, airflow restriction, dirty condenser coil, metering device restriction, electrical control problem) with confidence levels
- Enhanced job creation form inside the assistant: customer name, system type, refrigerant type, symptoms (text), measurements (all 5 fields), final repair performed
- Diagnostic info storage per job: each saved job stores the full AI response + measurements + suggested issues
- Job history review inside the assistant: past jobs showing symptoms, measurements, diagnosis, and repair
- Related Resources section: diagrams (labeled links), training videos (YouTube buttons), study modules, KB articles — shown alongside every AI response
- Safety reminders surfaced prominently for electrical and refrigerant work

### Modify
- `FieldAIAssistantTab`: rename/rebrand to "Field HVAC Assistant", expand KNOWLEDGE_BASE with new symptoms, add measurement analysis panel, upgrade job creation form with all required fields, store diagnostic data with each job
- `JobsTab`: expand `LocalJob` interface to include `refrigerantType`, `symptoms`, `measurements` (object with 5 fields), `finalRepair`, `diagnosticInfo` (AI response snapshot)
- Resource sidebar: ensure it shows diagrams, videos (YouTube link buttons), study modules, and KB articles for every response

### Remove
- Nothing removed

## Implementation Plan
1. Expand `LocalJob` interface in `JobsTab.tsx` with new fields; update the job creation dialog to include refrigerant type, measurements, final repair inputs; display these fields in job detail cards
2. Rewrite `FieldAIAssistantTab.tsx`:
   a. Add "weak airflow" and "thermostat not responding" entries to KNOWLEDGE_BASE
   b. Add a Measurement Analysis panel with 5 numeric inputs and pattern-matching logic returning confidence-ranked suggestions
   c. Upgrade job creation form inside assistant to include all required fields (customer name, system type, refrigerant type, symptoms, measurements, final repair)
   d. Store diagnostic snapshot (AI response + measurements analysis) with each saved job
   e. Show job history with full diagnostic detail review
   f. Ensure ResourcesSidebar shows diagrams, video buttons, study modules, KB articles for every response
   g. Rebrand header to "Field HVAC Assistant"
