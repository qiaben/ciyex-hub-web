---
sidebar_position: 2
title: Security
description: Ciyex Hub security model and practices
---

# Security

Ciyex Hub is built with healthcare-grade security at every layer.

## Authentication

- All API endpoints require **OAuth2/JWT** authentication via Keycloak
- Internal webhooks use **HMAC-SHA256** signature verification
- Public catalog endpoints (browse, search) are read-only and require no auth

## Authorization

- **Role-based access control (RBAC)** for app management
- Admin/Practice Manager roles can install, configure, and uninstall apps
- Provider roles can use installed apps but cannot modify installations
- Patient roles can access patient-facing features of installed apps

## Data Isolation

- **Multi-tenant architecture** with org-level data isolation
- Each organization's app installations, configs, and usage data are completely separate
- FHIR API requests are scoped to the authenticated user's organization
- PostgreSQL Row-Level Security (RLS) enforces data boundaries

## Encryption

- **In transit**: All communication over HTTPS/TLS 1.3
- **At rest**: Database encryption via PostgreSQL
- **Webhook payloads**: Signed with HMAC-SHA256

## Audit Logging

Every significant action is logged:

| Event | Logged Data |
|-------|-------------|
| App installed | Who, when, which app |
| App uninstalled | Who, when, which app |
| App launched | Who, when, patient context, launch type |
| Config changed | Who, when, what changed |
| Data accessed | FHIR resource type, patient ID, timestamp |

## App Review Process

Before publication, every app is reviewed for:

1. **Security scan** — Static analysis for vulnerabilities
2. **HIPAA compliance** — PHI handling, encryption, audit trails
3. **API usage** — Proper scoping, no excessive data access
4. **Authentication** — Correct OAuth2 implementation
5. **Data isolation** — Multi-tenant safety
