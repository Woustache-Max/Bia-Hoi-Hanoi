-- Bác Hơi — Phase 1: social foundation data layer
-- Run once in Supabase → SQL editor. Idempotent / safe to re-run.

-- ── follows ──────────────────────────────────────────────────────────
-- One-way follow. follower_id / following_id are profiles.id (as text).
create table if not exists public.follows (
  follower_id  text        not null,
  following_id text        not null,
  created_at   timestamptz not null default now(),
  primary key (follower_id, following_id)
);

alter table public.follows enable row level security;

grant select, insert, delete on public.follows to authenticated;
grant select on public.follows to anon;

-- Anyone may read follows (for counts + the Following feed).
drop policy if exists follows_select on public.follows;
create policy follows_select on public.follows
  for select using (true);

-- You may only create follows where you are the follower, and not self-follow.
drop policy if exists follows_insert on public.follows;
create policy follows_insert on public.follows
  for insert with check (follower_id = auth.uid()::text and follower_id <> following_id);

-- You may only remove your own follows.
drop policy if exists follows_delete on public.follows;
create policy follows_delete on public.follows
  for delete using (follower_id = auth.uid()::text);

create index if not exists follows_following_idx on public.follows (following_id);

-- ── profiles: new columns ────────────────────────────────────────────
-- top_spots: ordered array of spot ids the user recommends (max 5, enforced in-app).
-- bio: short free-text (length-capped in-app, reportable).
alter table public.profiles add column if not exists top_spots jsonb not null default '[]'::jsonb;
alter table public.profiles add column if not exists bio text;

-- Self-update of these columns relies on the existing "update own profile"
-- policy (the app already updates profiles.name / avatar_url this way).

-- Note: the "new_follower" notification trigger ships in a later step,
-- once the follow action is wired, to match the notifications schema.
