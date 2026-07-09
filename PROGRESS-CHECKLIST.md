# Bác Hơi — Working Checklist

_Forward-looking to-do only. What already shipped is in `CHANGELOG.md`._
_Last updated: 2026-07-07. Cache is at **v43** (pending upload). Notifications, badge rework, monthly awards (incl. Photo of the Month), the UX overhaul, and the What's New feed are all DONE._

---

## ▶️ Next up

1. **Vietnam-wide copy** — de-Hanoi the wording (taglines, welcome, empty states, meta) so it reads nationwide with Hanoi as the dense core. Text-only, no logic.
2. **Pre-launch (free to prepare):** privacy policy + terms, 18+ age gate, cross-device test pass, work through tester feedback.
3. **Paid phase (do together):** custom domain → Cloudflare → production login email.
4. ⏰ Edit **Horse Racing** rules to your house style (send me your version).

---

## 🆓 Free — do now (dev only, no cost)

**Fixes**
- [x] Bottom-sheet closes while scrolling a spot (mobile) — _fixed, pending deploy_
- [x] Removed ALL "New / New this week" (list strip + island button + view); island slot is now 🎲 **Games** — done, pending deploy
- [x] Fixed backup-nag bug: last-backup date now stored in Supabase (`app_settings`), survives clearing site data — needs `settings_setup.sql` + deploy
- [x] Confirmed `profiles` exposes no emails (no email column) — clean

**Safety**
- [x] **Backups** — one-click "Download full backup" (JSON) in Admin → Overview + an **in-app weekly reminder bar** for admins that persists until a backup is run. Store files locally. (Data + photo URLs; image files stay in Supabase Storage.)

**Fun / retention**
- [x] **Games & Share** in the menu — "Một, Hai, Ba, Dô!" drinking game + shareable QR code (done, pending deploy)
- [x] Games screen tabbed (Một Hai Ba Dô · Horse Racing · Look Up · Sevens); Share moved to header 📲 button (native share + QR) — done, pending deploy
- [ ] ⏰ REMINDER: edit Horse Racing rules to Stein's house style (Stein to send his version)
- [x] **Badges rework (part 1)** — raised thresholds + refined criteria (per `BADGES-PLAN.md`), added 7 new badges (Snapshot Star · The Usual · Completionist · Trendsetter · Foodie · Streak · Century Club); welcome copy 29→37 — done, pending deploy. **After deploy: run admin → Recalc all badges.**
- [x] **Badges rework (part 2)** — 3 monthly repeatable "×N" awards (🖼️ Photo / ✍️ Reviewer / 📍 Explorer of the Month), auto-crowned by a pg_cron `crown_monthly_winners()` function; `monthly_awards` table; ×10 → prestige badge; ×N shown in the Quests screen — done, pending deploy. **Setup: enable pg_cron extension + run `monthly_awards_setup.sql`.**
- [x] **Report a spot redesigned** — styled in-app form (reason chips + optional details) replacing the browser prompt — done, pending deploy. _(Stein may still send a design photo to refine styling.)_
- [x] **Reporting plumbing fixed** — `add_report` RPC lets any signed-in user's report save (was RLS-blocked for non-owners) — done, needs `reports_rpc_setup.sql` run + deploy.
- [x] **Fix helpful-votes plumbing** — `toggle_helpful` RPC so votes on others' reviews persist (Crowd Favourite / Community Pillar now earnable) — done, needs `helpful_votes_rpc_setup.sql` run + deploy.
- [x] District list expanded to Hanoi's 12 urban districts + new **"District Champion" 👑** badge (review in all 12) — done, pending deploy
- [x] **Photo "likes"** — ❤️ + live count on each photo (grid). Live & working.
- [x] Like button added to the photo lightbox (full-screen view) — done, pending deploy
- [x] Fixed logged-out header (combined Join+Sign in into one "Sign in"; no more wrapping/thick bar) — done, pending deploy
- [ ] **"Most-liked photo of the month" badge** (now that likes exist)
- [ ] Big-spender / bill-photo monthly fun _(unverifiable — keep it playful, not a real contest)_
- [ ] **In-app notifications** ("your review was marked helpful") + a notification bell/inbox

**Framing**
- [ ] De-Hanoi the copy so it reads Vietnam-wide (esp. North & Central; keep Hanoi the dense core)

**Free but watch cost as you grow**
- [ ] "Most visited this week" tab — needs view-tracking (each open = a DB write)

**Before public launch (free to prepare)**
- [ ] Privacy policy + Terms of use
- [ ] 18+ age confirmation / disclaimer
- [ ] Cross-device test pass (iOS Safari, Android, desktop)
- [ ] Work through tester feedback (`BiaHoi_Feedback_Form`)

---

## 💸 Needs a paid asset (a "paid phase" — do together)

- [ ] **Custom domain** (e.g. `bachoi.app`) — the key that unlocks the next three
- [ ] Cloudflare bot protection / IP bans / edge rate-limiting _(needs domain)_
- [ ] Production login emails via custom SMTP (Resend/SendGrid) — Supabase's built-in email isn't for production _(needs domain for deliverability)_
- [ ] Passwords + optional 2FA — _only if you move off magic-link login_
- [ ] Bigger Supabase plan as storage/traffic grow
- [ ] Automate backups (GitHub Action + `pg_dump`, or Supabase paid backups) — then retire the in-app weekly nudge
- [ ] Analytics (Plausible)

---

## 🅿️ Parked (revisit later / not now)

- [ ] Real-time multiplayer in-hơi game — big build, low payoff now
- [ ] Vietnam-wide city/region data model — after Hanoi is dense
- [ ] Code cleanup / split the single HTML — after features stabilise
- [ ] Push notifications

---

## 🔁 Habits (every change)

- Open `index.html` locally before uploading · bump `sw.js` cache each deploy · update `CHANGELOG.md` · new Supabase tables need RLS **and** grants · edit with the file tools, never the shell (see `CLAUDE.md`).
