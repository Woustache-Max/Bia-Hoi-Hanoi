# Bác Hơi — Architecture

Technical companion to `README.md`. Written for a developer inheriting the project. It explains how the front end is organised, how the Supabase backend is shaped, the conventions to respect, the known gotchas, and a sensible path to modernise if you want to.

---

## 1. Big picture
A single-page, no-build, vanilla-JS PWA. `index.html` loads Leaflet + the Supabase client (CDN), `styles.css`, and `app.js`. On load, `app.js` connects to Supabase, pulls all spots (+ nested reviews and photos) into memory, renders the Leaflet map and the sidebar list, and wires up the UI. Everything after that is client-side rendering driven by in-memory state and Supabase reads/writes.

There is no router and no component framework. UI is rendered by functions that set `innerHTML` on a few containers (mainly `#sidebarBody`) and by Leaflet for the map.

## 2. Front-end state (globals in `app.js`)
- `spots` — array of all spots, each with nested `reviews` and `photos`. The master client-side dataset.
- `cur` — the current signed-in user (their `profiles` row + email), or `null`.
- `profilesCache` — id → profile, populated as needed (reviewers, spot creators, leaderboard, feed authors).
- `map`, `cluster` — the Leaflet map and marker cluster group.
- `window._following` — a `Set` of user ids the current user follows (lazy-loaded via `ensureFollowing()`).
- `window._feedTab` (`'everyone'|'following'`), `window._lbScope` (`'all'|'following'`), `window._showGhosts` (bool, persisted in `localStorage`), `window._addDraftCoords`, `_peekSpotId`, `_navSig`, etc. — small pieces of view state.

Data mapping: DB rows are converted to client shape by `dbToSpot()` and `dbToReview()` (snake_case columns → camelCase fields). When adding a DB column you must add it to `dbToSpot`/`dbToReview` to use it on the client.

## 3. How the UI is organised
`app.js` is one file, organised by feature (look for the section-header comments). The rough map of features → functions:
- **Map:** `drawMarkers`, `visibleSpots`, `pinIcon`, `ghostIcon`, `highlightMarker`.
- **List / feed:** `renderList`, `showWhatsNew` (the “Latest” feed with Everyone/Following toggle), `followSuggestHTML`.
- **Spot detail / peek:** `showDetail`, `peekDetail`, `toggleMore`, `spotMoreMenu`.
- **Add / edit spot:** `startAdd`, `startPinDrop`, `confirmPinDrop`, `renderAddForm`, `saveSpot`.
- **Reviews:** `reviewFormHTML`, `submitReview`, `saveReviewEdit`, `sortedReviews`, `voteHelpful`, replies.
- **Photos:** `uploadPhoto`, `proceedUpload`, `compressImage` (client-side compression), `viewPhoto`, `likePhoto`.
- **Social:** `showProfile`, `toggleFollow`, `ensureFollowing`, `editBio`, `editTopSpots`, `showLeaderboard` (with All/Following scope).
- **Archive:** `checkIn`, `checkinAgo`, at-risk flagging (via report reason), `applyStatus`/`applyAtRisk`, `showLostSpots`, ghost pins.
- **Badges / quests:** `badgesFor`, `badgeProgressList`, `showQuests`, `checkBadges`, `showBadgeToast`, monthly awards.
- **Auth:** `authModal`, `doSignup`, `doLogin`, `logout`, `nameIssue` (unique display names).
- **Admin:** the admin panel, `setStatus`, moderation, backups.
- **Menus / chrome:** header, `toggleUserMenu`, `toggleLogoMenu` (logo dropdown: About, Lost spots, ghost-pin toggle, archive stats), `showAbout`, `showPrivacy`, `showTerms`, `showAgeGate`.
- **Helpers:** `esc`, `byId`, `spotAvg`, `revAvg`, `dist`, `timeAgo`, `isOpen`, `showToast`, `modal`/`closeModal`.

## 4. Navigation / back-button model
Mobile back-button support is handled manually with the History API. Each time the user opens a level (peek, detail, panel, modal) the code calls `navPush('<signature>')`, which pushes one history entry keyed by a signature string. A single `popstate` handler closes the current level. `bhBack()` is the in-app back link. If you add a new full-screen view, give it a `navPush('...')` on open so Back works.

## 5. Roles and progression
Roles: `newcomer` → `active` → `admin`.
- Newcomers have a review character limit; writing **2 reviews** auto-promotes them to `active` (`questComplete` / `checkAndUpgrade`). An invite code (`ACTIVE_CODE`) can also grant `active`.
- Admin is granted only by an existing admin (there is deliberately no admin invite code in the client).

## 6. Backend (Supabase)
**Project:** a single Supabase project (Postgres + Auth + Storage). URL + anon key are near the top of `app.js`.

**Tables (all with RLS):** `spots`, `reviews`, `review_replies`, `profiles`, `photos`, `photo_likes`, `follows`, `check_ins`, `announcements`, `app_settings`, `monthly_awards`, `notifications`.

**Storage:** bucket `spot-photos` (also holds `avatars/`). Recommended bucket settings: a ~2 MB file-size limit and image-only MIME types, as a server-side backstop behind the client compression.

**RPCs / functions / triggers:**
- `add_report(...)` — lets any signed-in user file a report (RLS-safe).
- `toggle_helpful(...)` — toggles a helpful vote on a review (`helpful` is a `text[]`).
- `crown_monthly_winners(period)` — monthly awards (Reviewer / Explorer / Photo of the Month); scheduled via `pg_cron`.
- `bump_spot_checkin` — trigger on `check_ins` that updates `spots.last_checkin_at`.
- Notification triggers create rows in `notifications` for helpful votes, photo likes, replies, verification, new follower.

**Setup scripts:** the `*.sql` files are each run once in the Supabase SQL editor. Roughly: `supabase_setup.sql` (core), `photos_setup.sql`, `photo_likes_setup.sql`, `badges_setup.sql`, `announcements_setup.sql`, `settings_setup.sql`, `reports_rpc_setup.sql`, `helpful_votes_rpc_setup.sql`, `review_replies_setup.sql`, `reviews_created_at.sql`, `monthly_awards_setup.sql`, `notifications_setup.sql`, `unique_usernames_setup.sql`, `phase1_social_setup.sql` (follows + profile columns), `phase2_archive_setup.sql` (check-ins + freshness/closure columns + trigger).

**Golden rule:** every new table needs **both** RLS policies **and** `grant`s to `anon`/`authenticated`, or reads/writes silently fail.

## 7. Conventions & gotchas (please respect)
- **Global functions.** `app.js` must stay a classic script; inline `onclick` handlers depend on globals. (See README.)
- **Service worker versioning.** Bump `SHELL_CACHE` in `sw.js` on every deploy, or users get stale files.
- **`dbToSpot` mapping.** New spot columns must be added there to reach the client.
- **Badge thresholds live in three places** — `badgesFor()`, `badgeProgressList()`, and `showQuests()` — keep them in sync, or the descriptions and progress bars disagree.
- **Image uploads are compressed client-side** (`compressImage`, ~1280px / iterative quality to stay under ~900 KB; avatars ~400px). This is the main control on storage + bandwidth cost — keep it.
- **`helpful` is a Postgres `text[]`,** not JSON — array operators, not JSON operators.
- **Encoding:** files are UTF-8 and contain Vietnamese diacritics. On Windows tooling, always read/write as UTF-8 (PowerShell’s default `Get-Content` can mangle them).
- **Deploy base path** is `/Bia-Hoi-Hanoi/`; the service worker caches absolute paths under it, so offline caching only works on the deployed site, not local preview.

## 8. Capacity notes
On the Supabase free tier the practical limits are **photo storage (1 GB)** and **monthly egress (5 GB)** — not the database (text data is tiny). Client-side image compression is what keeps both in check. See `STATUS-AND-ROADMAP.md` for the plan to move to a paid tier + custom domain + Cloudflare when traffic grows.

## 9. If you want to modernise it
The current buildless, single-file setup is deliberate — it keeps deployment to “upload static files”. If you want a more conventional structure, a low-risk path:
1. Introduce a bundler (e.g. **Vite** or **esbuild**). This removes the “functions must be global / load order matters” constraint, so you can safely split code into ES modules.
2. Split `app.js` along the feature boundaries in section 3 (map, spots, reviews, social, archive, badges, auth, admin, ui-helpers).
3. Replace inline `onclick="..."` handlers with `addEventListener` wiring as you modularise (this is the main mechanical task).
4. Consider TypeScript for the data shapes (`Spot`, `Review`, `Profile`) — they’re well-defined via `dbToSpot`/`dbToReview`.
5. Keep the Supabase schema and RLS as-is; they are independent of the front-end structure.
6. Add automated backups and move off the free tier before/at wider launch (see roadmap).

None of this is required — the app is fully functional as-is. Modularise only if a human team will be actively developing it.
