# 🕵️ JoinSpy — Advanced Discord Join & Invite Tracker (Overview)

> **Status:** Public Preview • **License:** Proprietary — Not Open Source • **Distribution:** Binary-only release. This README is informational and does not grant any rights to the source code.

JoinSpy is an advanced **Discord security and analytics bot** that tracks how users join your server, analyzes their account for suspicious activity, and helps moderators act **before trouble starts**. It’s designed for community safety and growth tracking with a **Global Reputation System** and an optional **Watchlist Network** to flag risky accounts across multiple servers.

---

## 📌 What JoinSpy Does

### 👥 Invite & Join Tracking
- Tracks **how users joined** and ties joins to inviter data when available (standard and vanity).

### 🛡 Global Reputation System
- Scores users **-100 to 100** on join using:
  - Account age
  - Known watchlist flags
  - Join patterns (raids, mass joins, alt behavior)
- Reputation is displayed in join logs to speed up moderation.

**Reputation Score Levels:**
| Range         | Meaning |
|---------------|---------|
| ❌ **-100 to -75** | High Risk |
| ⚠️ **-74 to -50**  | Suspicious |
| 🟡 **-49 to 0**    | Neutral |
| 🟢 **1 to 50**     | Trusted |
| ✅ **51 to 75**    | Highly Trusted |
| 🌟 **76 to 100**   | Veteran |

### 📋 Global & Local Watchlists
- Keep a **local watchlist** for your server.
- (Opt‑in) Use the **JoinSpy Network Watchlist** for cross‑server alerts.
- Get **real‑time pings** when a flagged user joins.

### 📈 Join Analytics
- `/stats` — last 7 days join activity.
- Top inviters and high‑risk join trends.
- `/metrics` — global JoinSpy counters (joins tracked, watchlist hits).

### 📜 Detailed Logging
- Rich embeds to a **staff log channel** show:
  - Inviter details
  - Account age
  - Global reputation score
  - Watchlist matches

---

## 🚀 Getting Started

1. **Invite JoinSpy** using the official link (with preselected permissions).  
2. Run **`/setlogs`** to select your staff log channel.  
3. Use **`/status`** or **`/ping`** to confirm the bot is online.  
4. Trigger a test join to see your **JoinSpy log embed**.

**Required permissions:** View Channels, Send Messages, Embed Links.  
**Optional:** Manage Messages, Manage Webhooks, Manage Roles.

---

## 📜 Commands (current build)

> This list reflects the folders in the repo screenshot you provided and only includes those commands.

| Command         | Description (summary) |
|-----------------|------------------------|
| `/audit`        | Pull a recent joins/mod actions audit summary for staff review. |
| `/ban`          | Ban a user (with optional reason & DM). |
| `/globalrep`    | Show a user's **global reputation** score (-100 to 100). |
| `/help`         | Show the help menu and category summaries. |
| `/kick`         | Kick a user (with optional reason & DM). |
| `/leaderboard`  | Show inviters/engagement leaderboard (server-scoped). |
| `/lookup`       | Detailed profile: inviter (if available), rep score, watchlist flags. |
| `/metrics`      | Global bot counters (joins tracked, watchlist hits, etc.). |
| `/ping`         | Latency/uptime check. |
| `/postupdate`   | Owner/dev command to post a changelog/update embed. |
| `/setlogs`      | Choose the channel where JoinSpy sends staff logs. |
| `/stats`        | 7‑day join analytics and trends. |
| `/status`       | Bot/system status embed for quick diagnostics. |
| `/timeout`      | Apply a timed mute (Discord timeout) to a user. |
| `/watchlist`    | Manage the **local** watchlist (add/remove/list). |

> If any command is guild‑permission restricted (e.g., ban/kick/timeout), JoinSpy will enforce Discord permissions and bot role hierarchy.

---

## 🔐 Data & Privacy

- Stores **user IDs**, join metadata, and reputation values needed for functionality.
- **No message content** is stored.
- **Global watchlist is opt‑in**; data isn’t shared outside JoinSpy Network participants.
- Data is never sold. Support requests may reference anonymized metrics to improve reliability.

If you need data removed for compliance, contact support with **server ID** and **user ID**.

---

## 🛡 Security Practices (Operational)

- Tokens and database credentials kept in secure secrets storage.
- Input sanitized and rate‑limited to prevent abuse.
- Optional “quarantine” role flow for high‑risk joins (server‑configurable).

---

## 🧭 Roadmap (Short‑Term)

- Auto‑moderation rules based on reputation thresholds.
- Growth heatmaps and invite decay analytics.
- Web dashboard for logs/analytics.
- Cross‑server join pattern graphs (privacy‑preserving).

---

## 🆘 Support

- **Support Server:** Use the official Discord for help, bug reports, and feature requests.
- **Bug Reports:** Use `/postupdate` to broadcast release notes; submit issues via support server. *(If `/reportbug` is added later, this README will be updated.)*
- **Status Notices:** Outages and maintenance windows are announced in the support server.

---

## ⚖️ License & Usage Terms

- **Proprietary software.** All rights reserved.
- You are granted **non‑transferable, revocable** rights to **run** the bot in your Discord servers via our official distribution.  
- **No source code redistribution, reverse engineering, or derivative works** permitted.  
- By inviting/using JoinSpy you agree to the **Terms of Service** and **Privacy Policy** posted in the support server and/or official site.

**© 2025 JoinSpy. All rights reserved.**
