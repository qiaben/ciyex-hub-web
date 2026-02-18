---
sidebar_position: 4
title: Webhook Events
description: Ciyex Hub webhook event reference
---

# Webhook Events

Ciyex Hub dispatches webhook events to both **app vendors** and the **EHR instance** when subscription lifecycle events occur.

## Event Types

| Event | Description |
|-------|-------------|
| `subscription.created` | A practice subscribed to an app |
| `subscription.cancelled` | A practice cancelled their subscription |
| `subscription.paused` | A subscription was paused (e.g., payment issue) |
| `usage.reported` | Usage data was reported for a metered app |

## Payload Structure

### subscription.created

```json
{
  "event": "subscription.created",
  "app": {
    "id": "10000000-0000-0000-0000-000000000006",
    "slug": "ciyex-telehealth",
    "name": "Ciyex Telehealth",
    "iconUrl": "https://cdn.ciyex.com/icons/telehealth.svg",
    "category": "TELEHEALTH",
    "extensionPoints": ["patient-chart:action-bar"],
    "smartLaunchUrl": null,
    "fhirScopes": "patient/Encounter.read patient/Appointment.read"
  },
  "subscription": {
    "id": "uuid",
    "status": "active",
    "orgAlias": "my-practice"
  },
  "timestamp": "2026-02-18T10:30:00Z"
}
```

### subscription.cancelled

```json
{
  "event": "subscription.cancelled",
  "app": { ... },
  "subscription": {
    "id": "uuid",
    "status": "cancelled",
    "orgAlias": "my-practice"
  },
  "timestamp": "2026-02-18T10:30:00Z"
}
```

## Security

### HMAC-SHA256 Signature

All webhook payloads are signed with HMAC-SHA256. Verify the signature to ensure the payload is authentic:

**Headers sent with each webhook:**

| Header | Description |
|--------|-------------|
| `X-Marketplace-Event` | Event type (e.g., `subscription.created`) |
| `X-Marketplace-Delivery-Id` | Unique delivery ID |
| `X-Marketplace-Signature` | HMAC-SHA256 signature |

**Verification (Java):**

```java
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.util.HexFormat;

String payload = request.getBody();
String signature = request.getHeader("X-Marketplace-Signature");

Mac mac = Mac.getInstance("HmacSHA256");
mac.init(new SecretKeySpec(secret.getBytes(), "HmacSHA256"));
String expected = HexFormat.of().formatHex(mac.doFinal(payload.getBytes()));

if (!expected.equals(signature)) {
    throw new SecurityException("Invalid webhook signature");
}
```

## Delivery

- Webhooks are delivered via **HTTP POST** to the registered URL
- Content type: `application/json`
- Delivery is **asynchronous** (non-blocking)
- Failed deliveries are **retried** with exponential backoff
- Delivery attempts are logged in `WebhookDeliveryLog`

## Setting Up Vendor Webhooks

Register webhook endpoints through the Developer Portal:

```http
POST /api/v1/developer/webhooks
Authorization: Bearer <token>
Content-Type: application/json

{
  "url": "https://yourapp.com/webhooks/ciyex",
  "secret": "your-shared-secret",
  "events": ["subscription.created", "subscription.cancelled"]
}
```

## EHR Internal Webhooks

The marketplace automatically sends subscription events to the subscribing org's EHR instance at:

```
POST {practice.callbackUrl}/api/internal/marketplace-webhook
```

This is handled automatically — no configuration needed from the practice.
