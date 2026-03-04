# HVAC Buddy: Pro Toolkit

## Current State

The Study tab (`StudyTab.tsx`) currently supports these views:
- `home` → `StudySystemHome`
- `core-lessons` → `CoreLessonsModule`
- `epa-608` → `EPA608Module`
- `progress` → `ProgressDashboard`
- `multimeter-training` → `MultimeterTrainingModule`
- `uei-dl589-guide` → `UEiDL589MultimeterGuide`

`StudySystemHome.tsx` renders module cards for each of the above. The view state is a string union typed in both `StudyTab.tsx` and the `onNavigate` prop signature of `StudySystemHome.tsx`.

## Requested Changes (Diff)

### Add
- New view key: `"hvac-electrical-fundamentals"` added to the view state union in `StudyTab.tsx`.
- New component: `src/frontend/src/components/study/HVACElectricalFundamentals.tsx`
  - A self-contained educational module with 7 structured sections:
    1. Voltage, Current, Resistance and Ohm's Law
    2. Types of Circuits (series, parallel, open, short)
    3. Power Circuits vs Control Circuits in HVAC
    4. Single-Phase vs Three-Phase Power
    5. Electrical Protection (breakers, fuses, grounding)
    6. Motors, Contactors and Overload Protection
    7. Variable Frequency Drives (VFD)
  - Each section includes: simple explanation, HVAC examples, key formulas (formatted in a formula box), and safety notes (styled as a warning callout).
  - Tabbed or accordion layout for section navigation.
  - No simulations or complex interactions — educational content only.
- New card in `StudySystemHome.tsx` for "HVAC Electrical Fundamentals" linking to the new view.
- `onNavigate` prop type updated to include `"hvac-electrical-fundamentals"`.

### Modify
- `StudyTab.tsx`:
  - Add `"hvac-electrical-fundamentals"` to the `currentView` state union.
  - Add a conditional render block for the new view that renders `HVACElectricalFundamentals`.
  - Import the new component.
- `StudySystemHome.tsx`:
  - Update `onNavigate` prop type to include `"hvac-electrical-fundamentals"`.
  - Add a new module card for "HVAC Electrical Fundamentals" in the main module grid.

### Remove
- Nothing removed.

## Implementation Plan

1. Create `HVACElectricalFundamentals.tsx` with all 7 sections as static educational content:
   - Use accordion or tab layout for section navigation.
   - Section content structure: heading, explanation paragraphs, HVAC examples list, formula box (highlighted card/code block style), safety callout (warning/alert style with icon).
   - Apply `data-ocid` deterministic markers to all interactive controls (section tabs/accordions, back button).
2. Update `StudyTab.tsx`:
   - Extend `currentView` state type to include `"hvac-electrical-fundamentals"`.
   - Add import for `HVACElectricalFundamentals`.
   - Add conditional render for the new view with a back button.
3. Update `StudySystemHome.tsx`:
   - Extend `onNavigate` prop type.
   - Add a new Card in the module grid for "HVAC Electrical Fundamentals" with a Zap icon, short description, bullet list of 4 topics, and a "Start Learning" button.
