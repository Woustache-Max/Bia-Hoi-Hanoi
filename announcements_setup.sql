-- ============================================================
-- BÁC HƠI — Announcements (admin broadcast banner)
-- Run this ONCE in the Supabase SQL Editor.
-- ============================================================

create table public.announcements (
  id         bigint generated always as identity primary key,
  title      text not null default '',
  body       text not null default '',
  active     boolean default true,
  created_at timestamptz default now()
);

alter table public.announcements enable row level security;

-- Anyone (even logged-out visitors) can read announcements
create policy "announcements_read" on public.announcements
  for select using (true);

-- Only admins can post announcements
create policy "announcements_insert" on public.announcements
  for insert with check (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- Only admins can update (e.g. deactivate) announcements
create policy "announcements_update" on public.announcements
  for update using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- ============ GRANTS (table-level access for the app's roles) ============
-- Without these you get "permission denied for table announcements".
grant select on public.announcements to anon, authenticated;
grant insert, update on public.announcements to authenticated;
