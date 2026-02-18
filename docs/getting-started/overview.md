---
sidebar_position: 1
title: Overview
description: Introduction to Ciyex Hub — the app marketplace for healthcare
---

# Welcome to Ciyex Hub

Ciyex Hub is the integrated app marketplace for **Ciyex EHR**. It allows healthcare practices to discover, install, and manage apps that extend their electronic health records with powerful capabilities.

## What is Ciyex Hub?

Think of Ciyex Hub as the "App Store" for your EHR. Instead of building custom integrations or juggling multiple vendor portals, you can:

- **Browse** a curated catalog of healthcare-specific apps
- **Install** apps directly into your EHR with one click
- **Manage** subscriptions, configurations, and usage from a single dashboard
- **Uninstall** apps cleanly when they're no longer needed

## Key Capabilities

### For Practices

| Feature | Description |
|---------|-------------|
| **One-Click Install** | Apps integrate directly into your EHR workflow |
| **Centralized Billing** | Manage all app subscriptions in one place |
| **Usage Tracking** | Monitor app usage and costs per provider |
| **Configuration** | Customize app settings per organization |
| **HIPAA Audit Trail** | Every app launch and data access is logged |

### For Developers

| Feature | Description |
|---------|-------------|
| **FHIR R4 API** | Build apps using healthcare interoperability standards |
| **SMART on FHIR** | Launch apps in patient or encounter context |
| **Extension Points** | Embed your UI in patient charts, encounter forms, and more |
| **Webhook Events** | React to EHR events in real time |
| **Developer Portal** | Submit, manage, and monitor your apps |

## Available Apps

Ciyex Hub launches with **10 first-party apps** built by Ciyex Health:

| App | Category | Pricing |
|-----|----------|---------|
| **Ciyex Medical Codes** | Clinical Reference | Free |
| **Ciyex Communications** | Communication | $0.01/message |
| **Ciyex Credentialing** | Operations | $149/month |
| **Ciyex File Storage** | Infrastructure | Free up to 5GB |
| **Ciyex Patient Payments** | Billing | 2.9% + $0.30/txn |
| **Ciyex Telehealth** | Telehealth | $1.50/session-min |
| **Ciyex RCM** | Revenue Cycle | 5% of collections |
| **Ciyex Screen Builder** | Platform | Free |
| **Ask Ciya (AI)** | AI | $0.002/1K tokens |
| **Care Gaps** | Clinical | Free |

## How It Works

```
┌──────────────────────────────────────────────────────┐
│                   Ciyex EHR                          │
│                                                      │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐             │
│  │ Patient  │  │ Encounter│  │Settings │             │
│  │  Chart   │  │  View    │  │  Page   │             │
│  └────┬─────┘  └────┬─────┘  └────┬────┘            │
│       │              │             │                  │
│       ▼              ▼             ▼                  │
│  ┌──────────────────────────────────────┐            │
│  │           Ciyex Hub                  │            │
│  │  ┌────┐ ┌────┐ ┌────┐ ┌────┐       │            │
│  │  │ RCM│ │Tele│ │ AI │ │Codes│ ...   │            │
│  │  └────┘ └────┘ └────┘ └────┘       │            │
│  └──────────────────────────────────────┘            │
│                      │                               │
│                      ▼                               │
│  ┌──────────────────────────────────────┐            │
│  │     Ciyex Hub Marketplace API        │            │
│  │  (Browse, Subscribe, Configure)      │            │
│  └──────────────────────────────────────┘            │
└──────────────────────────────────────────────────────┘
```

## Getting Started

1. **Open Ciyex Hub** — Click the "Ciyex Hub" icon in your EHR sidebar (the Store icon)
2. **Browse Apps** — Search and filter by category to find apps
3. **Install an App** — Click "Install" on any app card
4. **Configure** — Adjust app settings for your practice
5. **Use** — The app appears in your EHR workflow automatically

## Next Steps

- [Pricing Guide](/docs/getting-started/pricing) — Understand pricing models
- [Browsing Apps](/docs/user-guide/browsing-apps) — How to find the right apps
- [Installing Apps](/docs/user-guide/installing-apps) — Step-by-step installation guide
