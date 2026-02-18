---
sidebar_position: 1
title: FAQ
description: Frequently asked questions about Ciyex Hub
---

# Frequently Asked Questions

## General

### What is Ciyex Hub?

Ciyex Hub is the integrated app marketplace for Ciyex EHR. It allows healthcare practices to discover, install, and manage apps that extend their electronic health records.

### Is Ciyex Hub free to use?

Browsing and accessing the Hub is free. Individual apps may be free or have their own pricing. Many core apps (Medical Codes, Screen Builder, Care Gaps) are completely free.

### How many apps are available?

Ciyex Hub currently offers 10+ first-party apps built by Ciyex Health, with more being added regularly. Third-party developers can also submit apps.

## Installation

### Who can install apps?

Users with **admin** or **practice manager** roles can install and uninstall apps. Regular providers can use installed apps but cannot modify installations.

### Do apps require downtime to install?

No. Apps install instantly with zero downtime. The app becomes available in your EHR immediately after installation.

### Can I install the same app on multiple practices?

Yes. Each practice (organization) manages its own app installations independently. Installing an app on one practice does not affect others.

## Security

### Are apps HIPAA compliant?

Yes. Every app in Ciyex Hub is required to be HIPAA compliant. First-party apps are built with HIPAA compliance by design. Third-party apps undergo security review before publication.

### Is my data safe?

All data communication uses HTTPS encryption. Apps access data through the FHIR API with scoped OAuth2 tokens — they only see data they're authorized to access.

### Are app launches audited?

Yes. Every app launch is logged with the user ID, timestamp, patient context, and launch type. This audit trail is available in your EHR's audit log settings.

## Billing

### How does billing work?

All billing is processed through Stripe. You can view invoices, manage payment methods, and track usage from the Hub Usage dashboard.

### Can I cancel at any time?

Yes. You can uninstall any app at any time. Fixed-price subscriptions are prorated, and usage-based apps stop charging immediately.

### What happens when a trial ends?

You'll be notified before the trial ends. If you don't add a payment method, the app will be suspended but not uninstalled. Your configuration is preserved.

## Developers

### Can I build my own apps?

Yes! See the [Developer Guide](/docs/developer-guide/overview) to get started. You can build SMART on FHIR apps, native extensions, or background services.

### How do I submit an app?

Follow the [Submit an App](/docs/developer-guide/submit-app) guide. Apps go through a review process for security and quality before publication.

### What revenue share does the marketplace take?

The platform fee varies by pricing model. Contact the Ciyex team for developer partnership details.
