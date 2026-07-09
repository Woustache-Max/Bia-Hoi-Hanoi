# Bác Hơi — Versions

**Current: v0.8.0** (in the account-menu footer via `APP_VERSION`).

## Numbering scheme (SemVer: MAJOR.MINOR.PATCH)
The number signals **maturity / closeness to a stable public launch**, not how much work was done.
- **PATCH** (3rd digit) — bug fixes, tiny tweaks, no new features. e.g. `0.8.0 → 0.8.1`.
- **MINOR** (2nd digit) — new features, backwards-compatible. Resets patch. e.g. `0.8.1 → 0.9.0`.
- **MAJOR** (1st digit) — huge milestone / breaking change. Reserved for the **public launch** → `1.0.0`.

The leading `0.` = pre-launch / in development. We're at **0.8.0** = feature-rich, still real pre-launch work to do (spot-sheet polish, legal/18+, custom domain, cross-device testing) before `1.0.0`.
Bump the version on each release you'd want to name or roll back to, and tag it on GitHub (`git tag v0.8.0`).



Versioning starts here. `APP_VERSION` lives at the top of `index.html` and shows
in the account menu footer. Bump it with each notable release and tag the GitHub
commit (`git tag v0.0.x`) so every version is recoverable from history.

---

## v0.0.1 — 2026-07-03 (baseline save-state)

The app as it stands after the badge/awards/notifications/header work. Everything
below is live (or pending the current deploy).

**Core**
- Supabase-backed PWA mapping bia hơi spots across Hanoi; map + list + spot detail.
- Login required to contribute (magic-link); view-only when logged out.
- Add / edit spots, 5-category reviews (Beer · Food · Atmosphere · Cleanliness · Staff), photos with likes, replies, helpful votes, reports, verification.

**Gamification**
- 37 badges (raised thresholds), review-time Early Bird / Golden Hours / Night Owl.
- Monthly awards (Photo / Reviewer / Explorer of the Month) auto-crowned via pg_cron, ×10 prestige.
- Leaderboard, Legends wall, King of Thumbs, quests screen.

**Engagement / UX**
- Notifications 🔔 + inbox (photo like · reply · helpful · spot verified) via DB triggers.
- Games (Một Hai Ba Dô · Horse Racing · Look Up · Sevens), Share (native + QR).
- Admin panel (spots · users · reports · photos · activity · announce), announcements banner, one-click backups + weekly reminder.
- Streamlined mobile header (brand + bell + avatar; nav on the bottom island).

**Backend**
- Tables: spots, reviews, review_replies, profiles, photos, photo_likes, announcements, app_settings, monthly_awards, notifications.
- RLS + grants throughout; SECURITY DEFINER RPCs for report/vote/crown; triggers for notifications.

**Known / next (→ v0.0.2 UX overhaul)**
- New colour scheme (reduce gold overuse) + typography bump.
- Spot sheet: lead with the decision, details behind an expander; split user vs owner/admin actions.
- Island rebuild: merge Near me + List → "Explore", remove Games, decide new slots.
- Logo → home/reset action.
- Deeper accessibility (full contrast + aria sweep).
