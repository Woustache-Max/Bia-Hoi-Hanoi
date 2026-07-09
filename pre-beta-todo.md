# Bác Hơi — Pre-Beta To-Do

Four things to do before beta that will make you glad you did them early.

---

## 1. Get a proper domain name

**What:** Buy `bachoi.app` or `bachoi.vn` and point it at the app.

**Why:** Right now the URL looks like `stein.github.io/bia-hoi-hanoi` — fine for testing, unprofessional for beta testers. A real domain makes the project feel legit and is much easier to share.

**How:**
1. Check availability: go to [Namecheap](https://namecheap.com) or [Porkbun](https://porkbun.com) and search `bachoi.app` and `bachoi.vn`. Porkbun tends to be cheapest.
2. Buy it (~$10–15/year for .app, more for .vn). Pay with a card — no account needed on Porkbun.
3. In your domain registrar's DNS settings, add a `CNAME` record:
   - Host: `www` → Value: `[your-github-username].github.io`
   - Also add an `A` record for the apex domain (bare `bachoi.app` with no www) pointing to GitHub Pages IPs (GitHub publishes these — search "GitHub Pages custom domain apex").
4. In your GitHub repo settings → Pages → Custom domain: type `bachoi.app` and save. GitHub will auto-generate an SSL certificate (takes up to 24 hours).
5. In `manifest.json`, update the `start_url` and `scope` to the new domain.

**Cost:** ~$10–15/year. Worth it immediately.

---

## 2. Set up basic analytics

**What:** Know how many real people visit, what they do, and where they come from — without spying on them.

**Why:** When beta starts, you want to know if anyone is actually using the app, which features get tapped, and whether people are adding spots. Without analytics you're flying blind.

**Recommended tool:** [Plausible Analytics](https://plausible.io) — privacy-first, simple, GDPR-compliant. No cookies, no personal data. $9/month or self-hostable.

**How to add Plausible:**
1. Sign up at plausible.io and add your domain.
2. They give you one line of code to paste into your HTML `<head>`:
   ```html
   <script defer data-domain="bachoi.app" src="https://plausible.io/js/script.js"></script>
   ```
3. Open `bia-hoi-hanoi.html`, find the `</head>` tag, and paste that line just before it.
4. Run `cp bia-hoi-hanoi.html index.html` and push to GitHub.
5. Within a day you'll see a live dashboard with visitors, pages, countries, and devices.

**Free alternative:** Google Analytics 4 works but is much more complex and privacy-invasive. Stick with Plausible if you can.

**What to track once live:** total visitors, unique visitors per day, spot detail page views, "Add Spot" button clicks (Plausible has custom event tracking — add later).

---

## 3. Start keeping a simple changelog

**What:** A short text file that records what changed in the app and when.

**Why:** When beta testers say "something changed," you need to know what and when. It also helps you remember your own work six months later. And when you eventually hire someone or get a developer to help, they'll need this context.

**How:**
1. Create a file called `CHANGELOG.md` in the project folder (same folder as this file).
2. Every time you make a change to the app, add one line at the top in this format:

```markdown
## Changelog

### 2026-06-13
- Fixed: Add Spot form now shows inline error messages and scrolls to first invalid field

### 2026-05-XX
- Added: Cover photo upload for spots
- Added: Thumbs up / Full Uncle reactions on photos

### [date]
- Added: Dark mode
- Added: Leaderboard and badge system
```

3. Keep entries brief — one line per change is fine.
4. Don't worry about being perfect. Something is better than nothing.

**You can also share this publicly** with beta users so they know the app is actively maintained.

---

## 4. Document your Supabase setup

**What:** Write down your Supabase project details — what the tables are, what the settings are, what your RLS policies do — while you still remember.

**Why:** Supabase is your entire backend. If something breaks (wrong RLS policy, accidental table deletion, need to share access with a developer), you need a record of how it was set up. The free tier also has limits — good to know where you are.

**How — do this in one sitting (~30 minutes):**

1. Log in at [supabase.com](https://supabase.com) → open your project.

2. **Take a screenshot of each table** (Table Editor → click each table → screenshot the column list). Save them in a folder called `supabase-docs/` in this project folder.

3. **Write down your project reference ID and region** (shown in Project Settings → General). Looks like `genqahabkjsmnoqbnkob`. Already in the code but good to have separately.

4. **Check your RLS policies** (Authentication → Policies). Screenshot or write down what each policy does. Key things to verify:
   - `spots` table: anon can SELECT (read). Authenticated users can INSERT.
   - `reviews` table: anon can SELECT. Authenticated can INSERT their own.
   - `profiles` table: authenticated users can SELECT and UPDATE their own row. Admin can UPDATE others.
   - `photos` table: anon can SELECT unflagged. Authenticated can INSERT.

5. **Note your storage bucket** (`spot-photos`) — is it public? (It should be.) Screenshot the bucket settings.

6. **Note your auth settings** (Authentication → Settings):
   - Is email magic link enabled? (Yes — that's how login works.)
   - What's the site URL set to? (Should match your live URL / new domain when you get one.)

7. Save everything (screenshots + a short notes doc) in `supabase-docs/` in this folder. If you eventually work with a developer, hand them this folder.

**Bonus:** In Project Settings → Usage, note your current database size and row count so you can track growth over beta.

---

## Quick Priority Order

If you only do one thing this week: **get the domain** — it unblocks sharing with beta testers cleanly.

Then: **analytics** (takes 10 minutes).  
Then: **Supabase docs** (do this while the project is fresh in your memory).  
Then: **changelog** (start it the next time you make a change).
