---
sidebar_position: 1
title: Developer Overview
description: Build and publish apps for Ciyex Hub
---

# Developer Guide

Build healthcare apps that integrate seamlessly with Ciyex EHR through Ciyex Hub.

## Architecture

Ciyex Hub uses a modular architecture where apps communicate with the EHR via standardized APIs:

```
┌─────────────────────────────────────────────────┐
│                  Your App                        │
│  (Any technology: React, SMART on FHIR, etc.)   │
└──────────────────────┬──────────────────────────┘
                       │
            ┌──────────┴──────────┐
            │   Ciyex Hub APIs    │
            │                     │
            │  • FHIR R4 API      │
            │  • REST API         │
            │  • Webhook Events   │
            │  • Extension Points │
            └──────────┬──────────┘
                       │
┌──────────────────────┴──────────────────────────┐
│              Ciyex EHR Platform                  │
│  (Patient data, encounters, claims, etc.)        │
└─────────────────────────────────────────────────┘
```

## Integration Types

### 1. Native Apps

Built directly into the Ciyex EHR platform. These apps use the internal Java service layer and can contribute:

- **Patient chart tabs** — Custom tabs in the patient chart
- **Encounter extensions** — Additional sections in encounter forms
- **Banner alerts** — Contextual alerts in the patient chart
- **Sidebar entries** — New navigation items

### 2. SMART on FHIR Apps

External web apps that launch within the EHR using the SMART App Launch Framework:

- Launch with patient context (patient ID, encounter ID)
- Access FHIR resources with scoped OAuth2 tokens
- Run in an iframe or new window
- Standards-compliant — works with any SMART-enabled EHR

### 3. Background Services

Headless services that process data without a UI:

- File storage backends
- Messaging delivery
- AI inference
- Data synchronization

## App Lifecycle

```
1. Develop      → Build your app using FHIR/REST APIs
2. Submit       → Submit to the developer portal for review
3. Review       → Ciyex team reviews for security and compliance
4. Publish      → App appears in the marketplace catalog
5. Install      → Practices discover and install your app
6. Monitor      → Track usage, reviews, and performance
```

## Getting Started

1. [API Reference](/docs/developer-guide/api-reference) — Explore available endpoints
2. [Submit an App](/docs/developer-guide/submit-app) — Submission process and requirements
3. [Webhook Events](/docs/developer-guide/webhooks) — Subscribe to EHR events
4. [SMART on FHIR](/docs/developer-guide/smart-on-fhir) — Build SMART apps
5. [Extension Points](/docs/developer-guide/extension-points) — Embed UI in the EHR
