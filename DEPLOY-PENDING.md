# Deploy — pending (v43)

Everything below is built, syntax-checked, and saved locally. It publishes when you upload to GitHub.

## 1. SQL to run
**None.** This batch is all client-side, plus one already-live feature:
- The "What's New" feed and the surfaced Find filters use existing data — no schema change.
- "Photo of the Month" (most-liked photo → uploader) was already installed via `monthly_awards_setup.sql` and is being crowned by `crown_monthly_winners()`. Nothing to run.

## 2. Upload to GitHub
- [ ] `index.html` and `sw.js` (cache is now **v43**)
- If the deploy times out: repo → **Settings → Environments → github-pages** → cancel any stuck deployment, then **Re-run**. A trivial commit also nudges a fresh deploy.

## 3. After it's live
- [ ] Hard-refresh / clear site data (DevTools → Application → Clear site data) to load v43.
- [ ] Quick tests:
  - Island first button now reads **✨ Latest** → opens the What's New feed (new spots / reviews / photos, newest first).
  - **⚲ Filter spots** in the feed header opens district / vibe / rating / price filters; picking one shows a filtered list.
  - Peek bar (tap a spot) shows vibe chips + price per glass.
  - Add a spot, close the sheet mid-way, tap **Add** again → it reopens at your dropped pin (no restart).
  - Turn on **Near me**, open your Profile → it should NOT snap back to the near-me list.
  - Signed out, open a spot → the auth line reads "Sign in to add spots, rate & review" (no false "add spots without an account").

## What shipped in this batch (v43)
What's New feed replacing Explore, Find via surfaced filters, richer peek bar (vibe + price), add-spot reopen fix, near-me no longer hijacking other pages + gold active state, corrected guest text, and **removal of the admin key code** (security).
