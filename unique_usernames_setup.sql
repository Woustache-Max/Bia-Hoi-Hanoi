-- Bác Hơi — enforce unique display names (case-insensitive)
-- The app already blocks duplicates at sign-up and rename (client-side).
-- This adds the hard database guarantee so nothing can slip through.

-- ── STEP 1: find any EXISTING duplicate names first ──────────────────
-- Run this SELECT on its own. If it returns rows, rename those profiles
-- (in the app or in the table) until it returns nothing, THEN run Step 2.
select lower(trim(name)) as name_key, count(*) as how_many,
       array_agg(id) as profile_ids
from public.profiles
where name is not null and trim(name) <> ''
group by lower(trim(name))
having count(*) > 1
order by how_many desc;

-- ── STEP 2: add the unique index (only after Step 1 returns nothing) ──
-- Case-insensitive + trims surrounding spaces, so "Stein", "stein" and
-- " Stein " are all treated as the same name.
create unique index if not exists profiles_name_lower_uidx
  on public.profiles (lower(trim(name)));

-- To undo:  drop index if exists public.profiles_name_lower_uidx;
