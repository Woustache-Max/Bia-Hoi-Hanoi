# Bác Hơi — Refactor Brief (for Claude Code)

**Read this file first.** It explains the app, the problem to fix, and the rules you must follow. The single most important rule: **this is a refactor, not a rewrite — the app's behaviour and appearance must stay exactly the same.** Change the *structure* of the code, never *what it does*.

---

## What the app is
Bác Hơi is a crowdsourced map of bia hơi (fresh draft beer) spots in Vietnam. It is a **Progressive Web App (PWA)** built with:
- **Plain vanilla JavaScript** (no framework), **Leaflet** for the map, and the **Supabase** JavaScript client for the backend (auth, database, file storage).
- **No build step.** It is a static site: HTML/CSS/JS files served directly. It is deployed by uploading files to **GitHub Pages**.
- PWA pieces: `manifest.json`, a service worker `sw.js`, and icon PNGs. It works offline and is installable.

## The problem to fix
1. **Duplication:** `index.html` and `bia-hoi-hanoi.html` are two ~3,700-line files that are **identical** and have been edited by hand in lockstep. This is the biggest pain point.
2. **Monolith:** each file contains everything inline — one enormous `<script>` and one enormous `<style>`. It is hard to read and navigate.

## The goal
A **single source of truth** with readable, modular files, deployable the same simple way (upload static files to GitHub Pages), with **identical behaviour**.

Recommended target (buildless — no bundler, keep it simple):
- `index.html` — small shell that links the CSS and JS.
- `styles.css` — the extracted styles.
- `app.js` — the extracted JavaScript (optionally split into a few clearly-named files loaded in order, e.g. `app.core.js`, `app.spots.js`, `app.social.js`, `app.admin.js`).
- Delete the duplicate `bia-hoi-hanoi.html`.
- Update `sw.js` to cache the new files.

Only introduce a build tool (like esbuild/Vite) if the user explicitly agrees — the current buildless, drag-to-GitHub workflow is a feature.

---

## HARD CONSTRAINTS — do not break these
- **Do not change behaviour or visuals.** Structure only.
- **Keep it a static site** deployable by uploading files to GitHub Pages. No server, no backend code.
- **Keep the JavaScript global, not modular.** The HTML uses *hundreds* of inline handlers like `onclick="showDetail('x')"`. These require the functions to be **global**. Load `app.js` as a **classic script** (`<script src="app.js" defer></script>`), NOT `type="module"`. Do not wrap everything in a module/closure that would hide those functions. If you split into multiple files, they must all share the global scope and load in the right order.
- **Do not touch the Supabase side:** do not rename tables, columns, RPC functions, the storage bucket (`spot-photos`), the project URL, or the anon key. Do not edit the `.sql` files. The live database depends on all of them exactly as they are.
- **Preserve all element IDs, class names, and global function names** the code references.
- **Keep the PWA working:** `manifest.json`, icons, offline. After changing which files exist, update `sw.js`'s cached file list and **bump its cache version** (the `SHELL_CACHE` string).

---

## Suggested staged plan (do ONE stage at a time; test and commit after each)
1. **Git first.** Initialise git (if needed) and commit the current, working state so every later step can be reverted.
2. **Extract CSS.** Move the inline `<style>` contents into `styles.css`; link it with `<link rel="stylesheet" href="styles.css">`. Test the app looks identical.
3. **Extract JS.** Move the inline `<script>` (the big app one, not the tiny Supabase/Leaflet CDN tags) into `app.js`; reference it with `<script src="app.js" defer></script>`. Test everything still works — especially inline `onclick` buttons (they prove the functions are still global).
4. **Delete the duplicate** `bia-hoi-hanoi.html`. Also delete the stale `bia-hoi-hanoi.BACKUP-*.html` if present.
5. **Update `sw.js`** so its shell cache lists `index.html`, `styles.css`, `app.js`, `manifest.json`, and the icons; bump `SHELL_CACHE`.
6. **(Optional) Split `app.js`** into a few clearly-named files by feature, still global, loaded in order. Test.
7. **Tidy:** remove dead/unused code and duplicate helpers; run **Prettier** for consistent formatting. Do not "improve" logic — just format and delete what is provably unused.
8. **Full smoke test, then deploy.**

## Smoke test after each stage (must all still work)
Load the app; map + pins render; open a spot (peek + full detail); add a spot; write a review; upload a photo (it should compress); mark helpful; follow a user; the Latest feed Everyone/Following toggle; check in to a spot; the logo menu (Lost spots, ghost pins toggle); the account menu; dark mode; sign in / sign out; admin Status dialog. If anything differs from before, you changed behaviour — revert and try again.

## File inventory
- **App (keep/refactor):** `index.html`, `bia-hoi-hanoi.html` (delete after consolidating), `sw.js`, `manifest.json`, `icon-192.png`, `icon-512.png`, `LOGO.png`.
- **Database (do NOT edit):** all `*.sql` files.
- **Docs (leave as-is):** `CHANGELOG.md`, `VERSION.md`, `STATUS-AND-ROADMAP.md`, `SPEC-social-and-archive.md`, `PROGRESS-CHECKLIST.md`, and the other `.md`/`.docx` files.

## Known things to look for
- The `renderNewPanel` function was already removed; watch for other orphaned functions.
- Some computed variables in the quest code are unused.
- Keep the two files identical only until step 4 — after that there is just one.
