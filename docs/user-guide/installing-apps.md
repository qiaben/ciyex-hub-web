---
sidebar_position: 2
title: Installing Apps
description: How to install apps from Ciyex Hub into your EHR
---

# Installing Apps

Installing an app from Ciyex Hub takes just a few clicks.

## Prerequisites

- You must be logged in with an **admin** or **practice manager** role
- Your practice must have an active Ciyex EHR subscription

## Installation Steps

### 1. Find the App

Navigate to the Hub browse page and find the app you want to install. You can search or browse by category.

### 2. Open App Details

Click on the app card to open the detail page.

### 3. Click Install

Click the **Install** button on the app detail page.

- **Free apps** — Install immediately with no payment required
- **Paid apps** — You'll be prompted to select a pricing plan and enter payment information (via Stripe)
- **Trial apps** — Start your free trial immediately; billing begins after the trial period

### 4. Configure (Optional)

After installation, you can configure the app's settings:

- Click **Configure** on the installed app card
- Adjust settings specific to your practice
- Click **Save**

### 5. Start Using

The app is now active in your EHR. Depending on the app type:

- **Sidebar apps** — Appear as new menu items
- **Chart extensions** — Show up in patient chart tabs or banners
- **Encounter extensions** — Appear in encounter forms
- **Background services** — Run automatically (e.g., messaging, file storage)

## What Happens During Installation

When you install an app, Ciyex Hub:

1. Creates a **subscription** in the marketplace
2. Sends a **webhook** to your ciyex-api instance
3. Creates an **app installation record** in your EHR database
4. Registers any **extension points** the app provides
5. The app becomes available in your EHR workflow

```
You click "Install"
        │
        ▼
  Marketplace creates subscription
        │
        ▼
  Webhook → ciyex-api
        │
        ▼
  App installation record created
        │
        ▼
  Extension points registered
        │
        ▼
  App visible in EHR! ✅
```

## Verifying Installation

1. Go to **Ciyex Hub → Installed** to see all installed apps
2. The app should show status **Active**
3. Check your EHR sidebar or patient chart for any new UI elements

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Install button disabled | Check you have admin permissions |
| App not appearing in EHR | Wait 30 seconds, then refresh the page |
| Payment failed | Verify payment method in your practice billing settings |
| App shows "Suspended" | Check your subscription status or contact support |
