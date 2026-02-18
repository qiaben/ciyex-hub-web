---
sidebar_position: 6
title: Extension Points
description: Embed your app's UI in the Ciyex EHR
---

# Extension Points

Extension points let your app contribute UI elements directly into the Ciyex EHR interface.

## Available Extension Points

| Extension Point | Location | Description |
|----------------|----------|-------------|
| `patient-chart:tab` | Patient Chart | Add a custom tab to the patient chart |
| `patient-chart:action-bar` | Patient Chart | Add action buttons to the chart toolbar |
| `patient-chart:banner-alert` | Patient Chart | Display contextual alerts above the chart |
| `encounter:form-footer` | Encounter Form | Add sections below the encounter form |
| `encounter:toolbar` | Encounter View | Add buttons to the encounter toolbar |

## How It Works

When your app declares extension points in its manifest, the EHR automatically:

1. Registers the extension point when the app is installed
2. Renders the app's UI component at the specified location
3. Passes context data (patient ID, encounter ID, etc.)
4. Removes the extension point when the app is uninstalled

## Declaring Extension Points

In your app submission, include the extension points array:

```json
{
  "extensionPoints": [
    "patient-chart:tab",
    "patient-chart:banner-alert"
  ]
}
```

## Example: Patient Chart Tab

The **Care Gaps** app uses `patient-chart:tab` to show a custom tab:

```
Patient Chart
├── Summary Tab
├── Vitals Tab
├── Medications Tab
├── Care Gaps Tab  ← Extension point
└── ...
```

## Example: Banner Alert

The **Care Gaps** app uses `patient-chart:banner-alert` to show alerts:

```
┌─────────────────────────────────────────┐
│ ⚠️ 3 care gaps detected for this patient │  ← Extension point
│ Overdue: Mammogram, A1C, Colonoscopy    │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│           Patient Chart Content          │
└─────────────────────────────────────────┘
```

## Context Data

Extension point components receive context props:

```typescript
interface ExtensionContext {
  patientId: string;      // FHIR Patient ID
  encounterId?: string;   // FHIR Encounter ID (if in encounter)
  orgAlias: string;       // Organization identifier
  userId: string;         // Current user ID
  appConfig: Record<string, any>;  // App-specific config
}
```

## Apps Using Extension Points

| App | Extension Points |
|-----|-----------------|
| Ciyex Telehealth | `patient-chart:action-bar` |
| Ciyex RCM | `encounter:form-footer`, `patient-chart:tab` |
| Ask Ciya (AI) | `patient-chart:tab`, `encounter:toolbar` |
| Care Gaps | `patient-chart:banner-alert`, `patient-chart:tab` |
