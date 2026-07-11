# Bác Hơi

**Bác Hơi** is a crowdsourced map of *bia hơi* (fresh, cheap draft beer) spots across Vietnam — born in Hanoi. Anyone can find spots near them, read and write reviews, add photos, earn badges, follow other contributors, check in to confirm a spot is still open, and browse a memorial of spots that have closed. It is a small, community-run project.

This README is the **start-here** for anyone (including a future developer) picking up the code. For how it works under the hood, see **`ARCHITECTURE.md`**.

---

## What it's built with
- **Vanilla JavaScript** — no framework.
- **Leaflet** (via CDN) for the map.
- **Supabase** (Postgres + Auth + Storage) for the backend, via the Supabase JS client (CDN).
- **Progressive Web App (PWA)** — installable, works offline, with a service worker.
- **No build step.** It is a static site: plain HTML/CSS/JS files served as-is.

## The files
| File | What it is |
|------|------------|
| `index.html` | The single page. Small shell that loads the CSS and JS. |
| `styles.css` | All styles. |
| `app.js` | All application code (one classic, non-module script — see note below). |
| `sw.js` | Service worker (offline cache). Its `SHELL_CACHE` version is bumped on every deploy. |
| `manifest.json` | PWA manifest. |
| `icon-192.png`, `icon-512.png`, `LOGO.png` | App icons / logo. |
| `*.sql` | Supabase setup scripts (schema, RLS, grants, RPCs). **Do not edit casually — the live database depends on them.** |
| `*.md` | Project docs (see “Other docs” below). |

> **Important:** `app.js` is loaded as a **classic, non-module** script (`<script src="app.js" defer>`). The HTML uses hundreds of inline handlers like `onclick="showDetail('x')"`, which require the functions to be **global**. Do not convert `app.js` to an ES module or wrap it in a closure without also rewiring every inline handler.

## Run it locally
It's a static site, so any local web server works. From the project folder:

```bash
# Option A (Python)
python -m http.server 8080
# then open http://localhost:8080/index.html

# Option B (Node)
npx serve
```

Notes:
- The app talks to the **live** Supabase backend over the internet, so data and sign-in work locally.
- **Offline/PWA caching won't fully work locally.** The service worker caches absolute paths under `/Bia-Hoi-Hanoi/` (the real deploy path), which don't match `localhost` at the root. Test offline behaviour on the deployed site, not locally. Everything else (map, forms, buttons) tests fine locally.

## Deploy it
The app is hosted on **GitHub Pages** at a path ending in `/Bia-Hoi-Hanoi/`.

1. Upload the changed static files to the GitHub repo (typically `index.html`, `styles.css`, `app.js`, `sw.js`; plus `manifest.json` / icons if they changed). **If you changed which JS/CSS files exist, upload all of them together.**
2. Every deploy that changes the app should **bump the `SHELL_CACHE` version string in `sw.js`** (e.g. `biahoi-shell-v57` → `v58`). This is what makes browsers pick up the new version instead of a stale cache.
3. After it publishes, hard-refresh (Ctrl/Cmd+Shift+R) or clear site data to load the new version.

## The backend (Supabase)
- Auth is email + password. User records live in the `profiles` table; roles are `newcomer`, `active`, `admin`.
- Data lives in Postgres tables (spots, reviews, photos, follows, check-ins, etc.) — all protected by **Row-Level Security (RLS)**.
- Photos live in a Storage bucket named **`spot-photos`** (avatars live under an `avatars/` path in the same bucket). Uploads are compressed in the browser before storing.
- The Supabase **URL and anon (public) key** are near the top of `app.js`. The anon key is meant to be public; security is enforced by RLS, not by hiding the key.
- The `*.sql` files are the setup scripts, run once each in the Supabase SQL editor. See `ARCHITECTURE.md` for the full table + RPC list.

## Other docs
- **`ARCHITECTURE.md`** — how the code and backend are structured; conventions and gotchas; a suggested modernization path.
- **`REFACTOR-BRIEF.md`** — the brief used to clean up the codebase (single source of truth, CSS/JS split out).
- **`SPEC-social-and-archive.md`** — the design spec for the social layer and the “living archive” features.
- **`STATUS-AND-ROADMAP.md`** — where the project is and what’s planned next.
- **`CHANGELOG.md`** — history of changes, newest first.

## Housekeeping conventions
- Edit with care: this is a live app used by real people. Prefer small, tested changes.
- Bump the `sw.js` cache version on every deploy.
- New Supabase tables need **both** RLS policies **and** `grant`s.
- Test in a private/incognito browser tab (clean cache) before deploying.
