---
sidebar_position: 3
title: Submit an App
description: How to submit your app to the Ciyex Hub marketplace
---

# Submit an App

Ready to publish your app on Ciyex Hub? Follow this guide to submit your app for review.

## Requirements

Before submitting, ensure your app meets these requirements:

### Technical Requirements

- [ ] Uses **FHIR R4** for clinical data exchange
- [ ] Implements **OAuth2/OpenID Connect** for authentication
- [ ] Supports **HTTPS** for all endpoints
- [ ] Provides a valid **config schema** (JSON Schema) for app settings
- [ ] Handles **multi-tenancy** (org-scoped data isolation)

### Security Requirements

- [ ] **HIPAA compliant** — encryption at rest and in transit
- [ ] No PHI stored outside of the EHR's approved storage
- [ ] Audit logging for all data access
- [ ] Input validation and sanitization
- [ ] No known security vulnerabilities

### Documentation Requirements

- [ ] App description (100+ words)
- [ ] Feature list
- [ ] At least one screenshot or demo
- [ ] Configuration guide
- [ ] Support contact information

## Submission Process

### 1. Register as a Developer

Create a vendor account through the [Developer Portal](https://ciyexhub.com/developers):

```json
POST /api/v1/vendors
{
  "name": "Your Company",
  "contactEmail": "dev@yourcompany.com",
  "website": "https://yourcompany.com",
  "bio": "Brief description of your company"
}
```

### 2. Create Your App Listing

Submit your app details:

```json
POST /api/v1/developer/apps
{
  "name": "My Healthcare App",
  "slug": "my-healthcare-app",
  "category": "CLINICAL",
  "description": "What your app does...",
  "iconUrl": "https://...",
  "features": ["Feature 1", "Feature 2"],
  "configSchema": { ... },
  "fhirResources": ["Patient", "Observation"],
  "fhirScopes": "patient/Patient.read patient/Observation.read"
}
```

### 3. Add Pricing Plans

```json
POST /api/v1/developer/apps/{slug}/pricing
{
  "name": "Standard",
  "model": "FIXED",
  "basePrice": 49.00,
  "trialDays": 14
}
```

### 4. Submit for Review

```json
POST /api/v1/developer/apps/{slug}/submit
```

### 5. Review Process

The Ciyex team will review your app for:

- Security and HIPAA compliance
- API integration quality
- User experience
- Documentation completeness

Review typically takes **3-5 business days**.

### 6. Publication

Once approved, your app is published to the marketplace and visible to all Ciyex EHR users.

## Webhooks for Developers

Set up webhooks to receive subscription events for your app:

```json
POST /api/v1/developer/webhooks
{
  "url": "https://yourapp.com/webhooks/ciyex",
  "secret": "your-webhook-secret",
  "events": ["subscription.created", "subscription.cancelled"]
}
```

See [Webhook Events](/docs/developer-guide/webhooks) for the full event reference.
