# CLAUDE.md — Bác Hơi Project Briefing

This file gives Claude (or any AI assistant) full context on the Bác Hơi codebase so it can work effectively without re-reading the whole app each session.

---

## What This Is

**Bác Hơi** is a crowdsourced map of bia hơi spots in Hanoi, Vietnam. The name is a play on "Bác Hồ" (Uncle Ho / Ho Chi Minh) — "Bác Hơi" means "Uncle Beer." It's a completely independent project, unaffiliated with any school or employer.

**Prepared and owned by:** Stein Carpenter  
**Live URL:** https://[stein's GitHub Pages URL — check project_biahoi_deployment.md in memory]  
**GitHub repo:** see memory  
**Stack:** Single-file HTML, Leaflet, Supabase JS v2, PWA

---

## Recent Changes (2026-06-30)

- **Rebranded "Bia Hơi Hanoi" → "Bác Hơi"** across the app, page title, share text, `manifest.json`, and `sw.js`.
- **New logo:** `LOGO.png` (source, 1254×1254) → regenerated `icon-192.png` / `icon-512.png` (the black border was filled with the gold background so the icon is full-bleed and works as a maskable PWA icon). Header now shows `<img class="logo" src="icon-192.png">` + a "Bác Hơi" wordmark (previously a 🍺 emoji).
- **Ratings changed:** "Atmosphere & location" → **Atmosphere**; "Value for money" → **Staff / Service**. The db key `value` is REUSED for Staff/Service (label-only change, no schema migration).
- **Editable usernames:** profile → ✎ Edit name (`editUsername()`); updates `profiles.name` and the denormalised `reviews.who`.
- **Photo auto-shrink:** every upload is resized (`compressImage`, max 1600px, ~0.82 JPEG quality).
- **New-spot flow reframed:** the description field is now a *neutral* "what is this place" entry; the personal star review is a clearly separate step after the spot is saved.
- **Peek panel** clipping fixed (`sb.scrollTop=0` when entering peek mode).
- **Announcements** feature added (admin broadcast banner) — see the `announcements` table below.
- **Service worker cache** is now `biahoi-shell-v5`.
- **⚠ Lesson learned (caused a live outage):** the shell (`bash`) mount served a STALE, TRUNCATED view of the HTML files, and a `cp` in bash wrote a truncated `index.html` that broke the live app. **Edit and sync with the file tools, never bash.** See "How to Edit & Sync" below.

---

## File Structure

```
Bia Hoi Hanoi MapApp/
├── bia-hoi-hanoi.html   ← The entire app. ~3000 lines, ~170KB+
├── index.html           ← ALWAYS a copy of bia-hoi-hanoi.html (GitHub Pages entry point)
├── manifest.json        ← PWA manifest
├── sw.js                ← Service worker
├── icon-192.png         ← App icon
├── icon-512.png         ← App icon (large)
├── CLAUDE.md            ← This file
└── roadmap_build/
    └── gen_roadmap.js   ← Node.js script to regenerate the product roadmap .docx
```

---

## ⚠️ CRITICAL: How to Edit & Sync the HTML File

**Use the file tools (Read / Edit / Write) for ALL edits.** They operate on the real file on disk and have proven reliable, even on this ~180KB file. (This REVERSES older advice in this doc that said to use bash/Python scripts — that advice caused a live outage.)

**DO NOT use the shell (`bash`) to read, copy, validate, or write these HTML files.** The shell's view of the project folder can go **stale and truncated**. On 2026-06-30, `cp bia-hoi-hanoi.html index.html` run in bash copied a stale, cut-off view and produced a truncated `index.html`; once uploaded it broke the entire live app (header showed, but blank map + frozen loading skeletons). The file tools showed the file complete the whole time — only bash was wrong. `wc`, `tail`, `cat`, `grep`, and `node --check` in bash can all report a truncated file that isn't actually truncated on disk.

### Editing
1. Edit `bia-hoi-hanoi.html` (the master) with the **Edit** tool.
2. Keep `index.html` byte-identical to the master. **Sync it using the file tools, never `cp` in bash.**

### Verify before every upload (with the FILE tools, not bash)
- **Read** the last ~10 lines of `index.html` and confirm it ends with `</html>`.
- **Grep** for a couple of strings you just edited to confirm they're present.
- If the live site ever shows the header but a **blank map and frozen loading skeletons**, that is the signature of a **truncated `index.html`** — restore the missing tail with the file tools.

---

## Architecture Overview

The app is a **single HTML file** with:
- Inline CSS (~450 lines of `:root` variables + component styles)
- Inline JavaScript (~2400 lines)
- External: Leaflet 1.9.4 (CDN), MarkerCluster 1.5.3 (CDN), Supabase JS v2 (CDN), Be Vietnam Pro font (Google Fonts)

### Layout
```
┌──────────────────────────────────────────────────┐
│  header (nav bar, logo, user info, buttons)      │
├──────────────────────┬───────────────────────────┤
│  #map (Leaflet)      │  #sidebar (390px)         │
│  full remaining      │  - toolbar (search, sort) │
│  height              │  - filters (collapsible)  │
│                      │  - list panels OR         │
│                      │    spot detail view        │
└──────────────────────┴───────────────────────────┘
```

Mobile: sidebar collapses — map is full screen. Sidebar slides up as a bottom sheet when a spot is tapped.

---

## CSS Design System

All colors are CSS variables in `:root`:

| Variable | Value | Usage |
|----------|-------|-------|
| `--gold` | `#f5b301` | Primary brand, buttons, header accent |
| `--gold-dark` | `#b9780f` | Hover states |
| `--ink` | `#1f1a12` | Body text |
| `--paper` | `#fffaf0` | Page background |
| `--card` | `#fff` | Sidebar, panels |
| `--muted` | `#7a7263` | Secondary text |
| `--line` | `#ece3d2` | Borders, dividers |
| `--green` | `#2e7d32` | Open status, verified |
| `--red` | `#c0392b` | Closed, error states |
| `--blue` | `#185fa5` | Links, info |
| `--orange` | `#e65100` | Unverified status |
| `--nav-bg` | `#1f1a12` | Header background |

Dark mode overrides all variables under `[data-theme="dark"]`. Toggle stored in `localStorage('theme')`.

**Font:** `'Be Vietnam Pro'` — weights 400, 500, 600, 700, 800.

---

## Key Constants (top of `<script>`)

```js
const SUPABASE_URL  = 'https://genqahabkjsmnoqbnkob.supabase.co';
const SUPABASE_ANON = '...long JWT...';
const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

const HANOI = [21.0285, 105.8542];   // map center

const DISTRICTS = ["Hoàn Kiếm","Ba Đình","Đống Đa","Hai Bà Trưng","Tây Hồ",
                   "Cầu Giấy","Thanh Xuân","Long Biên","Hoàng Mai","Other"];

const VIBES = ["Touristy","Local-only","Lively","Chill","Cheap",
               "Riverside","Lakeside","Rooftop","Good View","Balcony",
               "Live music","Good for groups","Street-side","Friendly"];

const SEATING_OPTS = ["Indoor","Outdoor","Stools","Wooden chairs","Metal chairs",
                      "Plastic chairs","Metal tables","Plastic tables","Comfortable"];

const RCATS = [["beer","Beer quality"],["food","Food & snacks"],
               ["atmosphere","Atmosphere"],["clean","Cleanliness"],
               ["value","Staff / Service"]];
// NOTE (2026-06-30): db key 'value' is REUSED for "Staff / Service" (label only,
// no schema change). Old "value for money" scores now display as Staff/Service.

const BADGES = [...];  // array of badge definitions: {id, name, emoji, desc, check fn}

const QUEST_A_SPOTS   = 1;   // newcomer → active: path A requires
const QUEST_A_REVIEWS = 3;   //   1 spot added + 3 reviews
const QUEST_B_SPOTS   = 5;   // path B: review 5 different spots
```

---

## Global State

| Variable | Type | Description |
|----------|------|-------------|
| `spots` | `Array` | All spots loaded from Supabase (with embedded reviews) |
| `cur` | `Object\|null` | Current user `{id, name, role, since, email}` |
| `profilesCache` | `Object` | `uuid → profile` — avoids re-fetching |
| `repliesCache` | `Object` | `reviewId → [replies]` |
| `adding` | `Boolean` | True when in "add spot" pin-drop mode |
| `tmpMarker` | `L.Marker\|null` | Temporary pin marker during add flow |
| `window._pendingPin` | `{lat,lng}\|null` | Coordinates chosen in pin-drop step |
| `window._addFormData` | `Object\|null` | Form field values saved when switching to pin-drop |
| `window._pendingUploadSpotId` | `String\|null` | Spot ID awaiting photo upload |
| `adminData` | `Object` | `{spots,users,reviews}` — loaded only in admin panel |

---

## Supabase Tables

### `spots`
| Column | Type | Notes |
|--------|------|-------|
| `id` | uuid | PK |
| `name` | text | Required |
| `lat`, `lng` | float8 | Required |
| `district` | text | |
| `address` | text | Nominatim reverse geocode |
| `price_per_glass` | int4 | VND |
| `open_h`, `close_h` | float4 | Hour as decimal (e.g. 16.5 = 4:30pm) |
| `seating` | text | Comma-separated from SEATING_OPTS |
| `payment` | text | |
| `vibes` | text[] | Array from VIBES |
| `description` | text | |
| `status` | text | `'active'`, `'closed_perm'`, `'temp_closed'` |
| `verified` | boolean | |
| `verified_by`, `verified_at` | uuid, timestamptz | |
| `reports` | jsonb | Array of report objects |
| `cover_photo_url` | text | |
| `created_by` | uuid | FK → profiles |
| `created_at` | timestamptz | |

### `reviews`
| Column | Type | Notes |
|--------|------|-------|
| `id` | uuid | PK |
| `spot_id` | uuid | FK → spots |
| `user_id` | uuid | FK → profiles |
| `who` | text | Display name snapshot |
| `ratings` | jsonb | `{beer, food, atmosphere, clean, value}` each 1–5 |
| `txt` | text | Written review body |
| `review_date` | date | |
| `helpful` | uuid[] | Users who marked helpful |

### `review_replies`
| Column | Type | Notes |
|--------|------|-------|
| `id` | uuid | PK |
| `review_id` | uuid | FK → reviews |
| `user_id` | uuid | FK → profiles |
| `who` | text | |
| `txt` | text | |
| `created_at` | timestamptz | |

### `profiles`
| Column | Type | Notes |
|--------|------|-------|
| `id` | uuid | PK, matches `auth.users.id` |
| `name` | text | Display name |
| `role` | text | `'newcomer'`, `'active'`, `'trusted'`, `'admin'` |
| `since` | timestamptz | Join date |
| `email` | text | |
| `badges` | text[] | Badge IDs earned |
| `bookmarks` | uuid[] | Spot IDs bookmarked |
| `avatar_url` | text | |
| `title` | text | Optional flair title |

### `photos`
| Column | Type | Notes |
|--------|------|-------|
| `id` | uuid | PK |
| `spot_id` | uuid | FK → spots |
| `uploaded_by` | uuid | FK → profiles |
| `url` | text | Public CDN URL |
| `path` | text | Storage path (for deletion) |
| `thumbs_up`, `full_uncle` | int4 | Reaction counts |
| `flagged` | boolean | |

### `announcements` (admin broadcast banner — added 2026-06-30)
| Column | Type | Notes |
|--------|------|-------|
| `id` | bigint identity | PK |
| `title` | text | |
| `body` | text | |
| `active` | boolean | Only the newest `active=true` row is shown |
| `created_at` | timestamptz | |

- Setup: `announcements_setup.sql`. RLS: public read; admin-only insert/update.
- **Requires table GRANTs** or you get *"permission denied for table announcements"*:
  `grant select on public.announcements to anon, authenticated;`
  `grant insert, update on public.announcements to authenticated;`
- Shown by `checkAnnouncement()` as a banner; dismissed per-device via `localStorage('bhAnnounceSeen')`. Posted from **Admin Panel → 📣 Announce** tab (`postAnnouncement` / `clearAnnouncements`).
- **General rule:** any NEW Supabase table needs both RLS policies AND table GRANTs to anon/authenticated.

**Storage bucket:** `spot-photos` (public bucket)

---

## User Roles

```
newcomer → active → trusted → admin
```

- **newcomer:** Can add spots, read reviews. Cannot write reviews. Spot visible but flagged unverified.
- **active:** Full reviews. Spots auto-verified. Unlocked via Quest system.
- **trusted:** Same as active + implicit trust signals.
- **admin:** Full access including admin panel (delete spots/users, recalculate badges, manage photos).

Quest unlock (newcomer → active):
- Path A: add 1 spot + write 3 reviews
- Path B: review 5 different spots

---

## Key Functions

### Data Loading
- **`init()`** (line ~2454) — Entry point. Sets up auth listener, loads spots, sets map, renders list.
- **`loadSpots()`** — Fetches all spots with embedded reviews from Supabase. Populates `spots[]`, builds map markers.

### Map & Markers
- **`pinIcon(closed, unverified)`** — Returns a `L.divIcon` for the custom gold/red/orange pins.
- **`cluster`** — `L.markerClusterGroup` instance. All markers added here, not directly to `map`.
- **`tmpMarker`** — Temporary draggable marker used during the add-spot pin-drop flow.

### Spot Display
- **`renderList(sortByDist)`** — Renders the sidebar spot list. Applies current search/filter state.
- **`peekDetail(id)`** — Shows a compact preview panel (click on list item).
- **`showDetail(id)`** — Full spot detail view in sidebar. Fetches fresh data, renders reviews, photos.
- **`dbToSpot(row)`** — Converts a raw Supabase row into the app's spot object shape.
- **`dbToReview(row)`** — Converts a raw review row.

### Add / Edit Spot Flow
1. **`startAdd(editId)`** — Opens the add/edit form. If `editId` is null, it's a new spot.
2. **`renderAddForm(editId, lat, lng)`** — Renders the HTML form. Called by `startAdd` and after pin-drop.
3. **`startPinDrop()`** — Saves current form data to `window._addFormData`, enters pin-drop mode.
4. **`window._pendingPin`** — Set when user taps/clicks map in pin-drop mode.
5. **`saveSpot(editId)`** — Validates, then upserts to Supabase. Handles both new and edit.

### Validation (saveSpot)
- Name field: red border + `#fff5f5` tint + `#f_name_err` inline div visible
- Pin field: red border on lat/lng inputs + `#f_pin_err` inline div visible
- First invalid field scrolled into view via `scrollIntoView({behavior:'smooth',block:'center'})`

### Auth
- **`db.auth.onAuthStateChange`** — Listens for login/logout. On login, loads profile from `profiles` table.
- Auth UI is a modal triggered by header "Sign in" button.
- Magic link email auth (no passwords).

### Utilities
- **`esc(t)`** — HTML-escapes a string. Use on ALL user-supplied data before inserting into innerHTML.
- **`byId(id)`** — Finds a spot in `spots[]` by id.
- **`dist(lat1,lng1,lat2,lng2)`** — Haversine distance in km.
- **`isOpen(spot)`** — Returns true/false based on current time vs. open_h/close_h.
- **`fmtHr(h)`** — Formats a decimal hour to "4pm", "10:30am" etc.
- **`val(id)`** — `document.getElementById(id).value.trim()` shorthand.
- **`modal(html)`** / **`closeModal()`** — Shows/hides the app's modal overlay.
- **`glassStr(n)`** — Returns beer emoji rating string (🍺🍺🍺).

### Admin Panel
- Accessed via admin-only button in header.
- Functions prefixed with `admin` or inside `renderAdminPanel()`.
- Can view all spots, users, photos, reviews, delete, recalculate badges.

---

## Deployment

**Host:** GitHub Pages  
**Entry point:** `index.html` (must always be a copy of `bia-hoi-hanoi.html`)

Deploy by pushing to `main`:
```bash
git add -A
git commit -m "your message"
git push
```

GitHub Pages rebuilds automatically in ~30–60 seconds. No build step needed — it's all static files.

**After any HTML edit (safe routine):**
1. Edit `bia-hoi-hanoi.html` with the Edit tool.
2. Sync `index.html` to match — with the **file tools, NOT `cp` in bash**.
3. **Bump the cache:** increment `SHELL_CACHE` in `sw.js` (e.g. `biahoi-shell-v5` → `v6`) so users get the new version instead of a stale cached copy.
4. **Verify with the Read tool** that `index.html` ends with `</html>` and contains your edits.
5. Deploy. Stein currently deploys by **uploading the changed files in the GitHub web UI** (repo `Woustache-Max/Bia-Hoi-Hanoi` → Add file → Upload files → Commit) — not `git push`. Files that may change: `index.html`, `sw.js`, and for branding `manifest.json`, `icon-192.png`, `icon-512.png`.
6. After deploy: hard-refresh (Ctrl+Shift+R); on mobile, fully close the tab / clear site data so the new service worker activates.

Current service-worker cache version: **`biahoi-shell-v5`**.

---

## PWA

- `manifest.json` — name, colors, icons, `display: standalone`
- `sw.js` — caches static assets for offline use
- Works as "Add to Home Screen" on iOS and Android
- Theme color: `#f5b301` (gold)

---

## Nominatim (Reverse Geocoding)

When a user drops a pin, the app calls the Nominatim API to auto-fill the address and district fields:

```
https://nominatim.openstreetmap.org/reverse?lat=...&lon=...&format=json
```

No API key required. Nominatim has a usage policy: max 1 request/second, must include a valid `User-Agent`. Current implementation includes a custom user-agent string.

---

## Known Gotchas & Conventions

1. **Always sync index.html** after any edit to `bia-hoi-hanoi.html`. They must be identical — and sync with the FILE TOOLS, not `cp` in bash (see "How to Edit & Sync").
2. **Use the Read/Edit/Write file tools, NOT bash, for these HTML files.** The shell mount can show a stale, truncated view and silently corrupt copies. (This reverses the old advice that said to use Python-via-bash.)
3. **Verify before upload:** Read the tail of `index.html` and confirm it ends with `</html>`. Live site shows blank map + frozen skeletons = truncated script; restore the tail.
4. **Vietnamese characters** — the ơ in "Bác Hơi" / "bia hơi" is U+01A1 (lowercase ơ) and U+01A0 (uppercase Ơ). In all-caps headings "HƠI" is correct. In mixed-case "Hơi" — the ơ must be lowercase.
5. **Supabase RLS (Row Level Security)** — ensure policies allow anon read on spots/reviews and authenticated insert/update. If data stops loading, check RLS policies in the Supabase dashboard.
6. **The `spots` array is the source of truth** — reviews are embedded in each spot object after loading. Supabase is re-queried on full detail view to get fresh data.
7. **`db.auth.getSession()`** returns a session object on page load — use this to restore login state.
8. **Photo storage path** — stored in the `spot-photos` bucket. Public URL constructed via `db.storage.from('spot-photos').getPublicUrl(path)`.
9. **Cluster icon custom CSS** — the `.bh-cluster` div uses inline CSS classes `sm`, `md`, `lg` for sizing. Styles are in the `<style>` block.
10. **Dark mode** — `data-theme="dark"` attribute on `<html>` element, toggled by a button in the dropdown menu, persisted to `localStorage('theme')`.

---

## Product Roadmap Document

A full product roadmap (Word .docx) is maintained separately:
- **File:** `BacHoi_ProductRoadmap_v4.docx` (in this folder)
- **Generator:** `roadmap_build/gen_roadmap.js` (Node.js, uses `docx` npm package)
- **Regenerate:** `cd roadmap_build && node gen_roadmap.js` — output to a new version filename since old file may be open in Word

---

*Last updated: 2026-06-30 — rebrand to Bác Hơi, new logo/icons, rating relabels, username editing, photo auto-shrink, announcements, and the bash-truncation outage fix + corrected editing guidance.*
