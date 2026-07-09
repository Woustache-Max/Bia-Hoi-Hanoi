-- ============================================================
-- BÁC HƠI — photo_likes (users can "like" spot photos)
-- Run ONCE in the Supabase SQL Editor.
-- ============================================================

create table public.photo_likes (
  photo_id   uuid references public.photos(id) on delete cascade,
  user_id    uuid references public.profiles(id) on delete cascade,
  created_at timestamptz default now(),
  primary key (photo_id, user_id)
);

alter table public.photo_likes enable row level security;

-- Anyone can read likes (to show counts)
create policy "photo_likes_read" on public.photo_likes
  for select using (true);

-- A logged-in user can only add/remove their OWN like
create policy "photo_likes_insert" on public.photo_likes
  for insert with check (auth.uid() = user_id);
create policy "photo_likes_delete" on public.photo_likes
  for delete using (auth.uid() = user_id);

grant select on public.photo_likes to anon, authenticated;
grant insert, delete on public.photo_likes to authenticated;
