---
sidebar_position: 5
title: SMART on FHIR
description: Build SMART on FHIR apps for Ciyex Hub
---

# SMART on FHIR

Ciyex Hub supports the **SMART App Launch Framework** (v2.0), allowing third-party web apps to launch within the EHR with patient context.

## How SMART Launch Works

```
1. User clicks "Launch" in EHR
        │
        ▼
2. EHR sends launch request to your app
   GET https://yourapp.com/launch?iss={fhir_base}&launch={token}
        │
        ▼
3. Your app exchanges the launch token for an access token
   POST /oauth/token (authorization_code grant)
        │
        ▼
4. Your app queries FHIR API with the access token
   GET /fhir/Patient/{id}
        │
        ▼
5. Your app renders its UI in the EHR iframe
```

## App Registration

When submitting your SMART app to Ciyex Hub, include:

```json
{
  "smartLaunchUrl": "https://yourapp.com/launch",
  "smartRedirectUrls": "https://yourapp.com/callback",
  "fhirResources": ["Patient", "Observation", "Condition"],
  "fhirScopes": "launch patient/Patient.read patient/Observation.read"
}
```

## Launch Context

When launched from the EHR, your app receives:

| Parameter | Description |
|-----------|-------------|
| `patient` | Patient FHIR ID |
| `encounter` | Encounter FHIR ID (if in encounter context) |
| `practitioner` | Current provider FHIR ID |
| `organization` | Practice organization ID |

## FHIR Scopes

Request only the scopes your app needs:

```
patient/Patient.read        — Read patient demographics
patient/Observation.read    — Read observations/vitals
patient/Condition.read      — Read problem list
patient/Encounter.read      — Read encounters
patient/MedicationRequest.read — Read prescriptions
system/CodeSystem.read      — Read code systems
```

## Testing

Use the development environment for testing SMART launches:

```
FHIR Base URL: https://dev-api.ciyex.org/fhir
Auth Endpoint: https://dev.aran.me/realms/ciyex/protocol/openid-connect/auth
Token Endpoint: https://dev.aran.me/realms/ciyex/protocol/openid-connect/token
```
