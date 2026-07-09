# Bác Hơi — Changelog

A running log of notable changes to the Bác Hơi app. Newest first.
Format: date → Added / Changed / Fixed / Ops.
Outstanding work is in the "Planned / Outstanding" section below and, with priorities, in `PROGRESS-CHECKLIST.md`.

---

## Planned / Outstanding (not yet built)

_Full prioritised list lives in `PROGRESS-CHECKLIST.md`._

- **Backups** — regular export of spots / reviews / photos / profiles (top priority).
- **Bucket file-size + image-type limit** (Supabase → Storage → `spot-photos` → Settings).
- **Privacy policy + Terms of use.**
- **18+ age confirmation / disclaimer** (alcohol app) — before public launch.
- **Cross-device test pass** — iOS Safari, Android, desktop.
- Act on **tester feedback** (`BiaHoi_Feedback_Form`).
- _Later:_ code cleanup / split, custom domain (`bachoi.app`), analytics (Plausible), push notifications.

---

## 2026-07-07 — image compression + size cap (shell v56)

**Changed**
- **Photo uploads are now compressed harder** — resized to 1280px max and JPEG-optimised with an iterative quality step to keep each photo under ~900 KB (was 1600px/0.82 with no real cap). Still clear on phones, but far smaller — the single biggest lever on storage + bandwidth.
- **Avatars compressed too** — resized to 400px (they display tiny), typically ~30–60 KB.
- **Hard guards** — non-image files rejected; absurdly large originals (>25 MB) rejected before processing.
- **Long cache header** (`cache-control: 30 days`) on uploaded spot photos so repeat views don't re-spend egress.

_Recommended one-time Supabase settings (dashboard → Storage → spot-photos bucket → Settings): set a File size limit of ~2 MB and restrict Allowed MIME types to images — a server-side backstop behind the client compression._

---

## 2026-07-07 — header tweaks (shell v55)

**Changed**
- More space between the logo and the "Bác Hơi" wordmark in the header.
- Removed the duplicate "About Bác Hơi" item from the account menu (it now lives in the logo menu).

---

## 2026-07-07 — More button + Phase 2 Step C: memorial + ghost pins (shell v54)

**Fixed**
- **"⋯ More" button** now matches the other action buttons — it was a `<details>/<summary>` that rendered inconsistently; it's now a normal button opening a clean **Options** modal (Report / Edit / Status / Delete).

**Added — Phase 2 Step C (the archive payoff)** _(no new SQL)_
- **Logo dropdown menu** — tapping the top-left logo opens: Home, About, **Lost spots**, a **Ghost pins** toggle, and a live archive stat ("X documented · Y lost").
- **Lost spots memorial** — permanently-closed spots leave the normal map/list and live in a memorial view, each with its photo, closing date, and an auto-epitaph (its best review).
- **Ghost pins** — closed spots can be shown on the map as faint grey pins (off by default, toggled from the logo menu; remembered).
- **Header chevrons** — small ▾ indicators on the logo and the profile avatar so it's clear they open menus.

_Phase 2 complete. Remaining polish/ideas (later): "still here?" nudges, "last confirmed by you" credit, mission-framed profile stats._

---

## 2026-07-07 — toast fix + Phase 2 Step B: closure flow (shell v53)

**Fixed**
- **Toasts no longer clip or vanish too fast** — long messages now wrap within the screen (max-width, centered) instead of running off both edges, and the display time scales with message length (≈2.6–7 s).

**Added — Phase 2 Step B (closure flow)** _(no new SQL)_
- **Community "Might be closing" flag** — a new report reason lets anyone flag an at-risk spot; it lands in the admin queue.
- **Admin confirm** — the admin Status dialog now has a "⚠ Mark as at-risk" toggle, and setting a spot to Closed stamps a `closed_at` date (for the upcoming memorial).
- **"⚠ At risk" badge** shows on the spot detail and peek for confirmed at-risk spots.

_Next in Phase 2 (Step C): the logo-menu Lost Spots memorial + toggle-able ghost pins, and the header chevrons._

---

## 2026-07-07 — feed fixes + Phase 2 Step A: check-ins (shell v52)

**Fixed (Latest feed)**
- Removed the duplicate "⚲ Filter spots" button (the toolbar "Filters" stays).
- "What's New" title is now centered and larger.
- Feed cards now show **author attribution** ("by <name>") on every item, in both Everyone and Following.

**Added — Phase 2 Step A** _(needs `phase2_archive_setup.sql` run in Supabase)_
- **Check-ins + freshness** — each spot shows a "🕓 Last checked in …" line and a **✓ Check in** button. Checking in is **nearby-gated** (geolocation must place you within ~250 m) and **rate-limited** to once per spot per 8 h. A trigger keeps `spots.last_checkin_at` fresh.
- Schema also adds `at_risk` / `closed_at` / `closed_note` for the upcoming closure + memorial steps.

_Next in Phase 2: community at-risk flags + admin-confirmed closures, then the logo-menu memorial with ghost pins + header chevrons._

---

## 2026-07-07 — Phase 1: feed toggle + leaderboard (shell v51)

**Added** _(no new SQL — reuses the follows table)_
- **Everyone / Following toggle** on the Latest feed. "Following" shows activity (new spots, reviews, photos) only from people you follow; when you follow no one yet, it suggests top contributors with a one-tap Follow.
- **Leaderboard All / Following filter** — compare your contributions with just the people you follow (you're always included), or everyone.

---

## 2026-07-07 — Phase 1: profiles + follow (shell v50)

**Added** _(needs `phase1_social_setup.sql` run in Supabase)_
- **Follow** — one-way follow/unfollow button on member profiles, with live **follower / following** counts.
- **My Top spots** — pick and order up to 5 recommended spots (from spots you've reviewed or saved); shown on your profile for others to try.
- **Bio** — a short (160-char) editable line on your profile.
- **Members-only profiles** — profile pages now require sign-in to view; logged-out visitors get a "members only" prompt (the per-user public/private toggle was dropped as agreed).

_Next in Phase 1: the Everyone/Following feed toggle and the friends leaderboard filter (Step 3)._

---

## 2026-07-07 — Vietnam-wide copy (shell v49)

**Changed**
- **Vietnam-wide wording** — welcome screens, share text, quests subtitle, About, and the manifest description now read "Vietnam" instead of "Hanoi", so the app frames nationwide with Hanoi kept as the origin ("born in Hanoi"). Hanoi remains the core for the District Champion badge (12 urban districts).

---

## 2026-07-07 — badge card, unique names, About (shell v48)

**Added**
- **Badge celebration card** — earning a badge now shows a large centered card (big icon, badge name + description, confetti) that lingers ~4.5s and fades, replacing the quick 3s toast. Taps pass through so it never blocks what you're doing.
- **Unique display names** — sign-up and rename now reject names that are already taken (case-insensitive) or reserved (admin, official, moderator, etc.). Run `unique_usernames_setup.sql` for the database-level guarantee (finds existing duplicates first, then adds a unique index).
- **About Bác Hơi** — a new "About" screen in the account menu: what the app is, community-run, a responsible-drinking note, and links to Privacy & Terms. Contact detail to follow with the project email.

_Broader anti-abuse (captcha on sign-up, Cloudflare rate-limiting) remains part of the paid/domain phase._

---

## 2026-07-07 — newcomer limit + review fixes (shell v47)

**Changed**
- **Newcomer review limit raised** 100 → **250 characters**.
- **Faster Active status** — writing **2 reviews** now auto-promotes a Newcomer to Active (was 3 reviews + 1 spot, or 5 spots). The profile quest simplified to a single "Write 2 reviews" path.

**Fixed**
- **Review "Show more"** — the trailing "…" no longer stays visible when a review is expanded; it shows only while collapsed, so a fully expanded review reads cleanly with just "Show less".

---

## 2026-07-07 — legal + age gate (shell v46)

**Added**
- **18+ age gate** — a blocking first-load screen asking users to confirm they're 18 or older, with a responsible-drinking note and links to the Terms and Privacy Policy. Remembered via localStorage (`bhAge18`) so it only appears once; "I'm under 18" shows a polite block. _(Future: optional birthdate entry once the custom domain is set up.)_
- **Privacy Policy** — in-app screen (`showPrivacy`) covering account email, user-posted content, geolocation for Near me (not stored server-side), local storage, Supabase/cloud storage, no data sale, user deletion rights, and 18+ scope.
- **Terms of Use** — in-app screen (`showTerms`): 18+ eligibility, community/accuracy disclaimer, user-content licence, acceptable use, alcohol/responsibility clause, liability disclaimer, third-party services, and **Vietnam** governing law.
- Both reachable from the **account menu**, the **sign-in modal**, and the **age gate**. Contact address deliberately left as a placeholder until a project email exists.

---

## 2026-07-07 — peek address + open details (shell v45)

**Changed**
- **Address back on the peek** — a muted one-line address (📍) now sits under the chips so the peek isn't bare. Overall beer-glass rating stays in place next to reviews + price.
- **Details always visible** — in the expanded spot view, the category ratings (beer quality, food, atmosphere, etc.) plus District / Address / Seating / Payment are no longer hidden behind a "Details ▾" dropdown; they show by default.

---

## 2026-07-07 — peek bar redesign (shell v44)

**Changed**
- **Peek bar redesign** — the spot preview no longer clips at the bottom. Height is now **adaptive** (fits its content instead of a hard 180px cap), the name **clamps to two lines**, rating + reviews + price sit on **one line**, and a **"Swipe up for details" footer** is pinned with a hairline so it's always visible. Chips shown: **Verified**, **Open now / Closed**, and up to **2 vibes**. The address was dropped from the peek (still in the full detail sheet).

---

## 2026-07-07 — What's New feed + bug batch (shell v43)

**Added**
- **"What's New" feed replaces Explore** — the first island button is now **✨ Latest**, opening a feed of recent activity (new spots, new reviews, new photos, newest first) instead of a flat rating-sorted list of every spot. Tapping any item opens that spot.
- **"Find" via surfaced filters** — the What's New panel keeps the search box and a **⚲ Filter spots** button on top, opening the existing district / vibe / rating / price filters. Proximity (Near me) + these filters together cover "find a spot" without a redundant list view.
- **Richer peek bar** — the pop-up spot preview now shows up to 2 **vibe chips** and the **price per glass** alongside the rating, so users can judge a spot without opening the full sheet.

_Note: "Photo of the Month" (most-liked photo → uploader, ×N with a Gallery Legend prestige tier) was already live via the monthly-awards system; no change needed._

**Fixed**
- **Add-spot reopen** — dropping a pin now remembers the location (`_addDraftCoords`). If you close the add sheet before saving, tapping **Add** reopens the form at the same pin instead of forcing a restart. Draft clears on cancel and on successful save.
- **Near-me overriding everything** — the geolocation callback only re-renders the list when no other panel/peek is open, so opening Profile (or anything else) while Near me is active no longer snaps back to the near-me list.
- **Near-me active state** — the island button now clearly highlights gold when active (`.fi-near-on`) and returns to normal when cleared.
- **False guest text** — spot sheet no longer tells signed-out users "You can still add spots without an account." Auth prompt now reads "Sign in to add spots, rate & review."

**Security**
- **Removed the admin key code.** The hard-coded `ADMIN_CODE` and its client-side role check are gone — no one can read the source to grant themselves admin. Admin is now only grantable by an existing admin.

---

## 🏷️ v0.0.1 — 2026-07-03 — baseline save-state

First tagged version. Captures the app after the badge rework, monthly awards,
notifications, and header streamline. `APP_VERSION` added (shows in the account
menu footer); see `VERSION.md` for the full feature manifest. Everything from
here is v0.0.2+ (UX overhaul: colour, typography, spot sheet, island, logo action).

---

## 2026-07-03 — Back button rebuilt (bulletproof) + peek swipe — ⏳ pending deploy

### Fixed
- **Back button (real fix).** The re-arm approach relied on pushing history *during* the back event, which mobile browsers silently drop — so back exited the app after two presses. Rewrote navigation to push **one real history entry per level on the opening tap** (`navPush(sig)`, re-render-safe), with every panel/peek/modal/list opener migrated to its own signature and in-app "← back" links routed through `history.back()`. Back now walks detail → list → map → exit, verified against 4 flows in a simulation. Removed the old `_histPushed`/re-arm machinery.
- **Peek swipe-up** — grab handle + "tap or swipe up for details ↑" hint, plus an upward-swipe gesture to expand.
- Cache → v41.

---

## 2026-07-03 — v0.8.x: typography + contrast, Save/back/dark fixes — ⏳ pending deploy

Closes the v0.8.x UX overhaul. Also in this batch: Save button restyled to match Share; back-button re-arm (walks detail → list → map, exits only at root); dark-mode **toggle switch** in the menu.

### Changed / Fixed
- **Typography bump** — lifted the main reading text out of the 11–13px range: review text, spot-detail rows, list meta, muted helpers, modals, reviewer line, rating grid now 13–14px (base body already 16px).
- **Contrast (WCAG AA)** — darkened `--muted` (#857c6b → #6b6457) so secondary text clears 4.5:1 on the warm surfaces in light mode (dark-mode muted already passed).
- **Save button** — dropped the odd muted-pill styling; now matches Share, turns gold only when saved.
- **Back button** — registers a history entry for the list/peek too, and re-arms after each level, so the phone back button closes sheets in order and only exits at the map.
- **Dark mode** — menu now has a proper on/off **toggle switch** (gold when on), flips in place.
- Cache → v38.

---

## 2026-07-03 — v0.8.x: spot-sheet reorder (decision-first) — ⏳ pending deploy

### Changed
- **Spot detail reordered to lead with the decision** — top now shows name, verified/open chips, hero photo, overall rating, and a compact **Price · Hours · Distance** row. Secondary info (5-category breakdown, District, Address, Seating, Payment, Vibe, Added by) moved into a collapsible **Details** section.
- **Actions split** — primary user actions stay prominent (Directions, Verify, Save, Share); owner/moderator actions (Report, Edit, Status, Delete) moved behind a **⋯ More** menu, so Report no longer sits next to Delete.
- Cache → v34.

---

## 2026-07-03 — v0.8.x: warm-minimal + dark-premium colour system — ⏳ pending deploy

Replaces the Old Quarter petrol scheme after design exploration (see swatch rounds).
Amber stays the single hero accent throughout — the "neutral base + one accent" pattern of top apps.

### Changed
- **Light theme "warm minimal"** — warm off-white surfaces (`--paper #ebe4d6`, `--card #f6f1e7`), **espresso chrome** (`--nav-bg #241b12`), warm ink. Fixes the harsh-white panels the right way (warmth + spacing, not a loud colour).
- **Dark theme "dark premium"** — warm near-black (`--paper #14110c`, `--card #1e1811`), amber pops hardest; dark surfaces re-tinted warm.
- **Splash → beer amber** `#a86e12` with foam-white bubbles + cream tagline (was petrol green). `manifest.json` `background_color` matches; `theme_color` → espresso.
- Petrol kept only as a subtle secondary accent (links/Save/bell) — candidate to warm up later.
- Cache → v32. Deploy `index.html` + `sw.js` + `manifest.json`.

---

## 2026-07-03 — v0.0.2: splash, island rebuild, logo home — ⏳ pending deploy

### Added
- **Animated splash** — on load, the logo fizzes in bottom-to-top over a full-screen field of rising bubbles on the Old Quarter petrol, tagline "Your Bia Hơi Map". Plays once, fades to the map when spots are ready (min ~1s so it's seen; 4.5s safety timeout).
- **Logo = home** — tapping the header logo/wordmark closes panels, clears filters, re-renders the list, and recenters the map on Hanoi.

### Changed
- **Bottom island rebuilt** → **Explore · Saved · ➕ Add · Rewards** (Add is the gold raised button). Removed Games and Me (both live in the account menu / header avatar); merged Near me + List into Explore; Rewards opens the Quests/badges screen.
- Header slimmed back down on phones (the a11y 44px min was inflating the bar; kept 44px targets in lists/forms only).

### Ops
- Cache → v28.

---

## 2026-07-03 — v0.0.2: Old Quarter colour scheme — ⏳ pending deploy

### Changed
- **New colour scheme "Old Quarter"** applied app-wide via the root variables: amber stays primary, a **petrol accent** added (`--accent` #0e6e6e, plus `--accent-dark`/`--accent-soft`), neutrals cooled from muddy brown to a cleaner petrol-grey (`--ink`, `--muted`, `--line`), and the header/island chrome is now **dark petrol** (`--nav-bg` #16302e). Dark-mode surfaces re-tinted from warm brown to petrol. Verified stays green.
- **OS splash matches** — `manifest.json` `background_color` + `theme_color` → #16302e, so the native splash blends into the app (no more flat brown).
- Cache → v26.

### Still to come in v0.0.2
- Animated in-app splash on the real logo (awaiting pick: Rise & fizz / Shine / Petrol pulse — see `splash-preview.html`).
- Spot-sheet reorder (decision-first + Details expander; owner actions into overflow), Explore/Rewards island rebuild, logo → home action, typography bump (14–16px body), and the WCAG AA contrast check. Accent (petrol) gets woven into components during those rebuilds.

---

## 2026-07-03 — Accessibility pass 1 + versioning — ⏳ pending deploy

### Added
- **App versioning** — `APP_VERSION` (0.0.1), shown in the account-menu footer; `VERSION.md` manifest.

### Changed / Fixed (a11y)
- **Modal focus management** — modals now take focus on open and restore it on close (`role="dialog"`, `aria-modal`); Escape already closed them.
- **aria-labels** on icon-only buttons (bell, hamburger, leaderboard, quests, lightbox close/prev/next) for screen readers + hover tooltips.
- **Tap targets** — island buttons ≥52px; small buttons ≥44px on phones.
- _Deferred to v0.0.2 visual pass:_ body-text size bump + full colour-contrast audit (grouped with the new colour scheme). Cache → v25.

---

## 2026-07-03 — Streamlined mobile header — ⏳ pending deploy

### Changed
- **Mobile header decluttered** — clear split: the bottom island is navigation, the header is brand + notifications + account. On phones (≤600px): the ☰ hamburger is hidden (the island's "List" already opens the panel; hamburger still shows on tablet where there's no island), the account shows **avatar only** (name + role moved into the account menu, fixing the cut-off), and **Share** moved from a header button into the account menu (also available on desktop there). "+ Add spot" was already hidden on phones (island has Add).

---

## 2026-07-02 — Notifications & inbox — ⏳ pending deploy

### Added
- **Notifications 🔔** — a bell in the header with an unread-count badge that opens an inbox of your notifications. Fired automatically for four events: someone **likes your photo**, **replies to your review**, marks your review **helpful**, or an admin **verifies your spot**. Tapping a notification opens the relevant spot. Opening the inbox marks all read; the app polls every 90s for new ones.

### Ops
- New table `notifications` + DB triggers on `photo_likes`, `review_replies`, and `spots`; `toggle_helpful` updated to also notify the review author (`notifications_setup.sql`). All inserts happen via SECURITY DEFINER functions (RLS lets each user read/update only their own). Cache → v23.

---

## 2026-07-02 — Monthly awards (repeatable ×N badges) — ⏳ pending deploy

### Added
- **Monthly awards** — three awards crowned automatically each month: 🖼️ Photo of the Month (most-liked photo uploaded that month), ✍️ Reviewer of the Month (most reviews), 📍 Explorer of the Month (most new spots). Each win adds to a ×N count; winning the same award ×10 unlocks a prestige badge (🏛️ Gallery / Review / Explorer Legend). Shown in a new "🏅 Monthly Awards" section on the Quests screen.

### Ops
- New table `monthly_awards` + `crown_monthly_winners()` SECURITY DEFINER function + pg_cron schedule (`monthly_awards_setup.sql`). **Enable the pg_cron extension** (Supabase → Database → Extensions → pg_cron) so the 1st-of-month job runs; crowning uses Hanoi time. Test/backfill a past month with `select crown_monthly_winners('2026-06');`. Cache → v22.

---

## 2026-07-02 — Report form redesign + badge rework — ⏳ pending deploy

### Added
- **7 new badges** — 🧭 Completionist (5 fully-filled spots + photo), 🌱 Trendsetter (a spot you added draws 10 reviewers), 🏅 Century Club (100 reviews), 🍜 Foodie (Food rated on 20 spots), 🔁 The Usual (same spot 5×), 🔥 Streak (reviews across 5 weeks), 🖼️ Snapshot Star (a photo gets 15 likes). Total badges now **37**.

### Changed
- **Report a spot** — replaced the bland browser prompt with a proper in-app form matching the app style: pick a reason (Closed down · Wrong location · Duplicate · Inappropriate · Other), optional details, styled submit. Works in light & dark mode.
- **Badge thresholds raised** across the board for more grind/prestige (spec in `BADGES-PLAN.md`) — e.g. Scout 5→10, Cartographer 15→25, Regular 10→20, Critic 25→30, Trusted 3→10, Old Quarter 5→15, Tây Hồ 3→10, and **Legend 15→25 badges**. Pioneer needs 5 first-reviews. Welcome copy updated 29→37.
- **Time badges reworked to "review 3 places" (by when you post, Hanoi time)** — 🌅 Early Bird = review 3 places 9am–noon; 🌇 Golden Hours = review 3 places 5–7pm; 🌃 Night Owl = review 3 places 10pm–3am. All count distinct spots and use the review timestamp (not the spot's opening hours). Early Bird narrowed to 9am–noon so late-night reviews don't count.

### Fixed
- **Reports now save for everyone** — reporting used to silently fail for non-owner/newcomer users (blocked by the spots UPDATE RLS). New `add_report` SECURITY DEFINER RPC appends the report safely, so any signed-in user's report reaches the admin Reports tab. (Makes Safety Inspector earnable.)
- **Helpful votes now save on others' reviews** — voting used to hit the reviews UPDATE RLS and silently fail. New `toggle_helpful` RPC toggles the vote safely. (Makes Crowd Favourite & Community Pillar earnable.) _Fixed: RPC now handles the `text[]` helpful column (was erroring `COALESCE text[]/jsonb`)._
- **Replying to reviews fixed** — posting a reply failed with "permission denied for table review_replies" (missing table grants). Added grants + RLS policies (`review_replies_setup.sql`): anyone reads, signed-in users post as themselves, own/admin can delete.

### Ops
- Service-worker cache → v18. New DB functions: `add_report` (`reports_rpc_setup.sql`) and `toggle_helpful` (`helpful_votes_rpc_setup.sql`); `reviews_created_at.sql` ensures reviews have a timestamp (for Golden Hours).
- **After deploy:** Stein runs admin → **Recalc all badges** to apply the new tougher rules (this overwrites, so users drop badges they no longer qualify for — intended).
- **Deploy note:** cache → **v20**. The label/progress mismatch was a real bug, not a bad upload: the **Quests screen (`showQuests`) had its own hardcoded copy of every threshold** (separate from `badgesFor`/`badgeProgressList`), still on the old numbers and missing the 7 new badges. Now rewritten to match. **Lesson: badge thresholds live in THREE places — `badgesFor`, `badgeProgressList`, and `showQuests` — keep all three in sync.**
- New/updated SQL this round: `helpful_votes_rpc_setup.sql` (fixed for text[]), `review_replies_setup.sql`.

---

## 2026-07-01 — Games, backups, district badge, cleanup — ✅ deployed & live

### Added
- **Games & Share** — tabbed Games screen (Một Hai Ba Dô · Horse Racing · Look Up · Sevens) in the menu and the mobile island; **Share** moved to a header button (native share sheet on mobile, QR + copy link on desktop).
- **Backups** — one-click "Download full backup" (JSON) in Admin → Overview; an in-app weekly reminder bar for admins that persists until a backup is run; last-backup date stored in Supabase (`app_settings`) so it survives clearing site data / new devices.
- **"District Champion" 👑 badge** — review a spot in all 12 Hanoi urban districts; district list expanded to the real 12.
- **Photo likes** — ❤️ + live count on each photo (new `photo_likes` table).

### Changed / Fixed
- Fixed the mobile bottom-sheet closing itself when scrolling a spot's details.
- Logged-out header tidied — Join + Sign in combined into one "Sign in"; buttons no longer wrap and thicken the bar.
- Added a clear Like button inside the photo lightbox (full-screen view), not just the grid.
- Removed all "New / New this week" (list strip, island button, dedicated view); island slot is now 🎲 Games.
- Admins can now delete announcements (added the missing table-level delete grant).

### Ops
- Service-worker cache → v13. New Supabase table: `app_settings` (+ RLS/grants).

---

## 2026-06-30 (later) — Security hardening + UX fixes — ✅ deployed & live

### Security
- RLS audited across all tables; confirmed enabled everywhere.
- Closed admin role-escalation hole (profiles `protect_profile_role` trigger).
- Login now required to add spots & reviews (insert bound to `auth.uid()`); logged-out users are view-only and prompted to sign in.
- Admin moderation: can delete any photo & reply; storage deletes restricted to owner/admin.

### Added
- **Users can edit their own reviews** (ratings + text).

### Changed / Fixed
- Removed the duplicate welcome screen (fixed new-user flicker); welcome is English-only now ("Explore the map").
- iOS: added Add-to-Home-Screen install instructions (Apple has no auto-install prompt).
- Announcements: new posts no longer replace old ones; users see each unseen one in turn; admin **Manage** panel to view/edit/turn on-off/delete.
- Renamed "Bia Hơi Legends" → "Bác Hơi Legends" for brand consistency.

### Ops
- Service-worker cache → v8.

---

## 2026-06-30 — Rebrand to "Bác Hơi" + announcements — ✅ deployed & live

### Changed
- **Rebranded** "Bia Hơi Hanoi" → **Bác Hơi** across the app, page title, share text, `manifest.json`, and service worker.
- **New logo & app icons** — header now shows the logo image + "Bác Hơi" wordmark (was a 🍺 emoji); regenerated `icon-192.png` / `icon-512.png` from `LOGO.png` (full-bleed gold so they work as maskable PWA icons).
- **Ratings** — "Atmosphere & location" → **Atmosphere**; "Value for money" → **Staff / Service** (label change only; existing scores remap).
- **Add-a-spot flow** reframed so the description reads as a *neutral* "what is this place," with the personal review as a clearly separate step after saving.

### Added
- **Editable usernames** — profile → ✎ Edit name (updates the profile and the user's past reviews).
- **Photo auto-shrink** — every uploaded photo is resized/compressed in the browser (max 1600px).
- **Admin announcement banner** — Admin Panel → 📣 Announce. Posts a message all users see on next open (dismissible). New `announcements` Supabase table + RLS + grants.

### Fixed
- **Peek panel** was clipping the spot name/photo on mobile — now resets scroll.
- **Welcome screen** could trap new users with no way to dismiss — added tap-outside / ✕ / scroll.
- **Outage:** an `index.html` got truncated when copied via the shell (stale mount) and broke the live app (blank map, frozen loading). Restored the file and corrected the project's editing guidance so it can't recur.

### Ops
- Service-worker cache bumped to **`biahoi-shell-v5`**.
- Removed the outdated June-9 context file; `Bac Hoi Tech Brief/CLAUDE.md` is now the canonical briefing.
- **Lesson recorded:** edit/sync these files with the file tools, never the shell; always test `index.html` locally before uploading; new Supabase tables need RLS **and** grants.

---

<!-- Template for new entries:
## YYYY-MM-DD — short summary
### Added / Changed / Fixed / Ops
- ...
-->
