---
sidebar_position: 2
title: API Reference
description: Ciyex Hub marketplace API reference
---

# API Reference

The Ciyex Hub Marketplace API provides endpoints for browsing apps, managing subscriptions, and configuring installations.

## Base URL

```
Production: https://ciyexhub.com/api/v1
Development: http://localhost:8081/api/v1
```

## Authentication

Most read endpoints (app catalog) are **public** and require no authentication.

Write endpoints (subscriptions, configuration) require a **Bearer token** from Keycloak:

```
Authorization: Bearer <jwt-token>
```

## App Catalog

### List Apps

```http
GET /api/v1/apps?category={category}&page={page}&size={size}&sort={sort}
```

**Query Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `category` | string | — | Filter by category |
| `page` | int | 0 | Page number |
| `size` | int | 20 | Page size |
| `sort` | string | name | Sort field |

**Response:** `Page<AppDto>`

### Search Apps

```http
GET /api/v1/apps/search?q={query}&category={category}
```

### Get App Details

```http
GET /api/v1/apps/{slug}
```

### Get Featured Apps

```http
GET /api/v1/apps/featured
```

### Get Categories

```http
GET /api/v1/apps/categories
```

### Get App Pricing

```http
GET /api/v1/apps/{slug}/pricing
```

## Subscriptions

### Create Subscription

```http
POST /api/v1/subscriptions
Authorization: Bearer <token>
Content-Type: application/json

{
  "appSlug": "ciyex-telehealth",
  "orgAlias": "my-practice",
  "pricingPlanId": "uuid-of-plan"
}
```

### Cancel Subscription

```http
POST /api/v1/subscriptions/{id}/cancel
Authorization: Bearer <token>
```

### Get Subscriptions

```http
GET /api/v1/subscriptions?orgAlias={orgAlias}
Authorization: Bearer <token>
```

## App Installations (ciyex-api)

These endpoints are on the EHR API, not the marketplace.

### List Installed Apps

```http
GET /api/app-installations
Authorization: Bearer <token>
```

### Get Installation

```http
GET /api/app-installations/{appSlug}
Authorization: Bearer <token>
```

### Check if Installed

```http
GET /api/app-installations/{appSlug}/installed
Authorization: Bearer <token>
```

### Update Configuration

```http
PUT /api/app-installations/{appSlug}/config
Authorization: Bearer <token>
Content-Type: application/json

{
  "key": "value"
}
```

### Log App Launch

```http
POST /api/app-installations/{appSlug}/launch
Authorization: Bearer <token>
Content-Type: application/json

{
  "patientId": "uuid",
  "encounterId": "uuid",
  "launchType": "native"
}
```

## Response Format

All EHR API endpoints return a standard response wrapper:

```json
{
  "success": true,
  "message": "Apps retrieved successfully",
  "data": [ ... ]
}
```

Error responses:

```json
{
  "success": false,
  "message": "App not found",
  "data": null
}
```
