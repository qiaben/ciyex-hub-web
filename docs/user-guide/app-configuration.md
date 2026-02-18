---
sidebar_position: 4
title: App Configuration
description: How to configure installed apps
---

# App Configuration

Each app in Ciyex Hub can be customized with organization-specific settings.

## Accessing App Settings

1. Go to **Ciyex Hub → Installed**
2. Click **Configure** on the app card
3. The configuration form opens with the app's settings

## Configuration Schema

Each app defines a **configSchema** that describes its available settings. The Hub dynamically renders a form based on this schema.

### Setting Types

| Type | Example |
|------|---------|
| **Boolean** | Enable/disable SMS messaging |
| **String** | Default sender email address |
| **Enum** | Choose video provider (Twilio vs Jitsi) |
| **Integer** | Max session duration in minutes |
| **Array** | List of supported payer IDs |

## Example Configurations

### Ciyex Communications

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `email_provider` | Enum | SENDGRID | Email delivery provider |
| `sms_enabled` | Boolean | false | Enable SMS messaging |
| `fax_enabled` | Boolean | false | Enable fax support |
| `default_sender_email` | String | — | Default from address |

### Ciyex Telehealth

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `video_provider` | Enum | TWILIO | Video platform |
| `recording_enabled` | Boolean | false | Record sessions |
| `waiting_room_enabled` | Boolean | true | Enable waiting room |
| `max_session_duration_minutes` | Integer | 60 | Max call length |

### Ciyex RCM

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `clearinghouse` | Enum | — | Claims clearinghouse |
| `auto_scrub_claims` | Boolean | true | Auto-validate claims |
| `auto_post_payments` | Boolean | false | Auto-post ERA payments |
| `ai_coding_enabled` | Boolean | true | AI coding suggestions |

## Saving Configuration

1. Modify the settings as needed
2. Click **Save**
3. Changes take effect immediately for your organization
4. Other organizations are not affected by your changes

## Configuration via API

You can also update configuration programmatically:

```bash
PUT /api/app-installations/{appSlug}/config
Content-Type: application/json
Authorization: Bearer <token>

{
  "sms_enabled": true,
  "default_sender_email": "noreply@yourpractice.com"
}
```
