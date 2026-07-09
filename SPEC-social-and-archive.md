# Bác Hơi — Spec: Social Foundation + Living Archive

_Draft for review. Nothing here is built yet. Decisions locked with Stein on 2026-07-07._

## Guiding principle
The **global, spot-centric record is the heart** (the documentation mission). The **social layer is a garnish** that helps people contribute and return. Every feature is judged by one test: *does it document the culture, or does it just connect people?* No direct messaging — ever. Sharing stays via QR / copy-link / share sheet.

---

## Locked decisions
- **Following feed** = an `[Everyone] · [Following]` toggle inside the existing **Latest** feed (no new island slot).
- **Profiles** = **members-only** — any signed-in user can view any profile page; logged-out visitors cannot browse profiles. **No per-user visibility toggle.** Profiles include a short **bio**.
- **Moderation** = extend the existing **report** flow to reviews / photos / profiles. **No block feature** (there's no messaging to block).
- **Follow** = one-way, no approval (like Instagram).
- **Check-in** = shows "last checked in here …" freshness on a spot; also surfaces to followers.
- **Closure flow** = community flags *at-risk* / reports closed → **admin confirms** the final "lost" status.
- **Lost spots** = memorial in a new **logo dropdown menu** + toggle-able faint **ghost pins** on the map.
- **Header affordances** = small chevron on the profile photo and the logo so users know they open menus.
- **Pulse (live "come join")** = parked in the "maybe later" pile.

---

## Phase 1 — Social foundation (buildable now)

### 1.1 Enriched, visibility-controlled profiles
Profile page (`showProfile`) gains:
- **Follow / Following** button + **follower / following counts**.
- **My Top spots** (up to 5, hand-picked and ordered by the owner, from spots they've reviewed or saved).
- **Dedication stats**: join date, spots documented, reviews, photos, current streak.
- **Short bio** (length-capped, reportable).
- **Owner-only settings**: edit Top spots; edit bio.
- Existing badges grid + spots/reviews lists stay.

### 1.2 Follow system
- One-way follow, no approval. Follow button on any viewable profile.
- "New follower" → a notification (existing `notifications` system). Followed-user *activity* is NOT a per-event notification (too noisy) — it lives in the feed.

### 1.3 Everyone / Following toggle on Latest
- Segmented control atop the feed. **Everyone** = current global activity. **Following** = same activity types, filtered to people you follow.
- Empty state for new users: "Follow people to see their activity" + a few suggested top contributors.

### 1.4 Friends leaderboard filter
- Add `[All] · [Following]` to the leaderboard so people compete with their circle, not just global whales.

---

## Phase 2 — Living archive (the unique heart)

### 2.1 Check-ins + freshness
- A **"✓ Still here / Check in"** button on each spot.
- Records a check-in; the spot then shows **"Last checked in …"** in relative time:
  - today → "Last check-in at 16:00 today"
  - within a week → "Checked in 3 days ago"
  - older → "over a week ago" / "over a month ago"
  - never → "Not yet confirmed — have you been here? Check in."
- A check-in also appears in the **Following** feed (light social).
- Spots with no confirmation in a long time surface a gentle **"still here?"** nudge.

### 2.2 At-risk + closure flow
- Users can **flag a spot as at-risk** ("looks like it might be closing") — reuses the existing report plumbing with a dedicated reason.
- An **admin confirms** status changes: `active → temp_closed → perm_closed`. Community flags never change status directly.
- An `at_risk` badge shows on flagged spots until resolved.

### 2.3 Lost-spots memorial + ghost pins
- Closed spots (`perm_closed`) are **never deleted** — they move to a **memorial archive** reached from the **logo dropdown menu**.
- Each memorial entry keeps the spot's best photo + a short **epitaph** (when it closed, a note) as a record of what was lost.
- The map gains toggle-able **ghost pins** (faint, greyed) for closed spots — off by default, switched from the logo menu.

### 2.4 Logo dropdown menu
- Tapping the top-left logo opens: **About**, **Lost Spots (memorial)**, **Ghost pins** toggle, and **archive stats** ("1,204 documented · 37 lost · 88% confirmed this month").
- Chevron indicator added to the logo and the profile photo.

---

## Phase 3 — Parked
- **Live Pulse** ("I'm at X now, come join, here's the vibe") — revisit post-launch once there's density and a safety design (followers-only visibility, short expiry, approximate pins).

---

## Data model (Supabase)

**New tables**
- `follows` — `follower_id`, `following_id`, `created_at`. PK (follower_id, following_id). RLS: insert/delete only your own rows (`follower_id = auth.uid()`); select public. Grants to authenticated/anon.
- `check_ins` — `id`, `spot_id`, `user_id`, `created_at`. RLS: insert your own; select public. Nearby-gated in the client (must be within ~250 m). Rate-limited (one per user per spot per ~8h). No free text → no moderation surface.

**Changed tables**
- `profiles`: add `top_spots jsonb default '[]'` (ordered spot ids, max 5) and `bio text` (short, length-capped). **No visibility column** — profile *pages* are gated in-app to signed-in users.
- `spots`: reuse existing `status` ('active' | 'temp_closed' | 'perm_closed') for lost spots. Add `at_risk boolean default false`; `last_checkin_at timestamptz`; _optional_ `closed_at date`, `closed_note text` for the memorial epitaph.
- `notifications`: add a `new_follower` type.

**Moderation, minimal build**
- Extend the existing `add_report` flow to accept **review / photo / profile** targets (not just spots). **No `blocks` table.**

**Computed, no schema change**
- Follower/following counts, friends-leaderboard filter, Following feed — all derived from `follows` client-side.

---

## Potential issues & mitigations

1. **Members-only is "soft" privacy.** Profile *pages* are gated in-app to signed-in users (simple auth check), but names/avatars still appear on public reviews/leaderboard because contributions are inherently public. So logged-out browsing of *profiles* is blocked, but a determined person can still see who reviewed a given spot. This is an honest, reasonable floor — not hard privacy. (The per-user private/public toggle was dropped as partly-illusory and overly complex.)
2. **Cold-start empty Following feed.** New users follow no one. → Strong empty state + **suggested follows** (top documentarians).
4. **Check-in gaming / spam.** → Rate-limit (one check-in per user per spot per ~8h); freshness uses the *most recent* check-in so spam doesn't compound.
5. **Freshness ≠ guarantee.** "Confirmed 2 days ago" can still be wrong. → Keep copy soft ("last checked in"), never "open".
6. **Malicious closure flags.** → Already mitigated: community flags don't change status; admin confirms. But admin workload scales with the map — note it.
7. **Notification noise.** → Only "new follower" notifies; activity lives in the feed.
8. **Ghost-pin clutter.** → Off by default, distinct faint style.
9. **Harassment via follow.** No messaging limits this, but a follower could still be unwanted. → Consider a lightweight **block/hide** (see open questions).
10. **Free-text surfaces = moderation.** Bios and epitaphs are user text. → Keep short, reportable, or restrict epitaphs to admin/original contributor.
11. **Migration.** Existing profiles default to 'members'; existing `perm_closed` spots retroactively populate the memorial (free launch content).

---

## New UX ideas (for consideration)

- **"Last confirmed by you."** When your check-in is the most recent, a small credit shows on the spot. Cheap, rewarding, drives freshness.
- **Suggested follows = "Top documentarians."** Seeds the Following feed and frames following around contribution, not clout.
- **Mission-framed profile stats.** "12 spots documented · 3 you added later closed (preserved forever)." Ties personal activity to the preservation goal.
- **Epitaph from the community.** A lost spot keeps its top-liked photo and highest-rated review as its memorial — emotionally strong, zero extra input.
- **"Adopt a spot" (later).** Watch a spot and get nudged to re-confirm it — gamifies keeping the record fresh.
- **Onboarding nudge.** On reaching Active (2 reviews), prompt "Pick your Top 5" and "Follow a few top locals."
- **Archive counter on the splash / logo menu.** Makes the mission tangible every visit.

---

## Open questions

**Resolved (2026-07-07):**
1. **Check-in proximity** — ✅ **Require being nearby** (geolocation must confirm the user is within range; denied-location users can't check in).
2. **Following feed contents** — ✅ **Include check-ins** (rate-limit keeps noise down).
4. **Bios on profiles** — ✅ **Add a short bio** (length-capped, reportable).

3. **Block / hide** — ✅ **Report only** (extend report to reviews/photos/profiles; no block).
8. **Profile visibility** — ✅ **Members-only, no toggle** (signed-in users can view any profile page; logged-out cannot browse profiles).

**Defaults set (override anytime):**
5. **Top spots source** — from spots you've **reviewed or saved**.
6. **Epitaph** — auto-built from the spot's **top-liked photo + best review**; **admin** may add a short closing note.
7. **Check-in rate limit** — **8h** per user per spot.

_Note: nearby check-in reuses the existing `dist()` helper + the user's location (as used by "Near me"); suggested radius ~250 m._

---

## Suggested build order
1. **Phase 1** — profiles (visibility + Top spots + dedication) → follow → Everyone/Following toggle → friends leaderboard.
2. **Phase 2** — check-ins + freshness → at-risk/closure flow → logo menu + memorial + ghost pins.
3. **Phase 3** — parked Pulse.
Each phase ships as its own deploy(s), each new table with RLS **and** grants, both HTML files in lockstep, cache bumped.
