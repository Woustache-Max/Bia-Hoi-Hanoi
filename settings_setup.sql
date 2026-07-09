-- ============================================================
-- BÁC HƠI — app_settings (small key/value store)
-- Used to remember the last backup date server-side so the
-- backup reminder survives clearing site data / new devices.
-- Run ONCE in the Supabase SQL Editor.
-- ============================================================

create table public.app_settings (
  k text primary key,
  v text
);

alter table public.app_settings enable row level security;

-- Anyone can read (the app checks last_backup_at on load)
create policy "app_settings_read" on public.app_settings
  for select using (true);

-- Only admins can write
create policy "app_settings_insert" on public.app_settings
  for insert with check (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );
create policy "app_settings_update" on public.app_settings
  for update using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- Table-level grants (or you get "permission denied for table app_settings")
grant select on public.app_settings to anon, authenticated;
grant insert, update on public.app_settings to authenticated;
