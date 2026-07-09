# Bác Hơi — Status & Roadmap

_Snapshot: 2026-07-07. Live build: **shell v48** (deployed & confirmed working)._
_Full history in `CHANGELOG.md`. Forward-looking detail in `PROGRESS-CHECKLIST.md`._

---

## ✅ Where we are (done & live)

- **Badges & rewards** — 37 badges, tuned thresholds, monthly awards (Reviewer / Explorer / **Photo of the Month**) auto-crowned by `crown_monthly_winners()`, ×10 prestige tiers, notifications bell + inbox.
- **Reviews plumbing** — styled report form, helpful-votes fix, review replies fix (all SQL run).
- **UX overhaul** — warm-minimal + dark-premium colour scheme, beer-amber splash, streamlined header + island, dark-mode toggle.
- **v42 batch** — add-spot reopen, Near me no longer hijacks other pages + gold active state, corrected guest text, **admin-key code removed (security)**.
- **v43** — "✨ Latest" What's New feed replaced Explore; district/vibe filters surfaced as the "Find" path.
- **v44** — peek bar redesigned: adaptive height (no more bottom cutoff), 2-line name clamp, pinned "Swipe up for details" footer.
- **v45** — address back on the peek; expanded "Details" (category ratings + District/Address/etc.) always visible, no dropdown.
- **v46** — 18+ age gate, Privacy Policy + Terms of Use (in-app, Vietnam law), reachable from menu / sign-in / gate.
- **v47** — newcomer review limit 100→250; Active status after 2 reviews; review "Show more" ellipsis fixed.
- **v48** — badge celebration card (big, ~4.5s, non-blocking); unique display names (client + `unique_usernames_setup.sql`); About Bác Hơi screen in the menu.

---

## 🔧 What's next — prioritised

### Priority 1 — Blocks public launch (free to build)
1. ~~**Back-button bug.**~~ ✅ RESOLVED & live.
2. ~~**Privacy policy + Terms of use.**~~ ✅ DONE (v46) — in-app screens, Vietnam governing law, contact placeholder.
3. ~~**18+ age confirmation / disclaimer.**~~ ✅ DONE (v46) — blocking first-load gate, remembered. _Future: optional birthdate entry once domain is set up._
4. **Cross-device test pass** — iOS Safari, Android Chrome, desktop. Catch layout/geolocation/PWA-install issues. **← next priority.**

### Priority 2 — Cheap polish (free, dev-only)
5. **Vietnam-wide copy** — de-Hanoi the wording (taglines, welcome, empty states, meta) so it reads nationwide with Hanoi as the core. Text-only.
6. **Visual beer-glass rating on the peek** (optional) — show 4.4 as a row of beer-glass icons instead of the number.
7. **Work through tester feedback** (`BiaHoi_Feedback_Form`).

### Priority 3 — Paid phase (costs money — do together)
8. **Custom domain** (e.g. `bachoi.app`) — the key that unlocks the next items.
9. **Cloudflare** bot protection / IP bans / edge rate-limiting _(needs domain)_.
10. **Production login emails** via custom SMTP (Resend/SendGrid) — Supabase's built-in email isn't production-grade _(needs domain)_.
11. **Bigger Supabase plan** as storage/traffic grow; **automated backups** (retire the in-app weekly nudge).
12. **Analytics** (Plausible).

### Priority 4 — Parked (later)
- Vibe **voting** (users vote a spot's vibes; top 2 float up) — needs a votes table + UI.
- Real-time multiplayer in-hơi game; Vietnam-wide data model; code cleanup / split the single HTML; web push notifications.

---

## 🧭 Recommended order
Do **Priority 1** next as one batch: fix the back-button (biggest UX wart), then privacy/terms + 18+ gate, then a cross-device test. That clears the road to a **1.0.0 public launch**. Priorities 2 are quick wins to fold in alongside. Priority 3 is a separate "paid day" we plan together.

## 🔁 Build habits (every change)
Edit **both** `index.html` and `bia-hoi-hanoi.html` in lockstep · bump `sw.js` cache · update `CHANGELOG.md` · new Supabase tables need RLS **and** grants · use file tools, not the shell.
