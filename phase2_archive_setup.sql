-- Bác Hơi — Phase 2 data layer: check-ins, freshness, closure fields
-- Run once in Supabase → SQL editor. Idempotent / safe to re-run.
-- Covers the whole Phase 2 schema; the closure/memorial UI ships in later steps.

-- ── check_ins ────────────────────────────────────────────────────────
create table if not exists public.check_ins (
  id         bigserial   primary key,
  spot_id    text        not null,
  user_id    text        not null,
  created_at timestamptz not null default now()
);
alter table public.check_ins enable row level security;
grant select, insert on public.check_ins to authenticated;
grant select on public.check_ins to anon;
-- bigserial id needs sequence usage, or inserts fail with "permission denied for sequence".
grant usage, select on sequence public.check_ins_id_seq to authenticated;

drop policy if exists check_ins_select on public.check_ins;
create policy check_ins_select on public.check_ins for select using (true);

drop policy if exists check_ins_insert on public.check_ins;
create policy check_ins_insert on public.check_ins
  for insert with check (user_id = auth.uid()::text);

create index if not exists check_ins_spot_idx on public.check_ins (spot_id, created_at desc);

-- ── spots: freshness + closure columns ───────────────────────────────
alter table public.spots add column if not exists last_checkin_at timestamptz;
alter table public.spots add column if not exists at_risk    boolean not null default false;
alter table public.spots add column if not exists closed_at  date;
alter table public.spots add column if not exists closed_note text;

-- ── trigger: keep spots.last_checkin_at fresh on each check-in ────────
-- SECURITY DEFINER so it can update spots regardless of the checker's RLS.
create or replace function public.bump_spot_checkin()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  update public.spots set last_checkin_at = new.created_at where id = new.spot_id;
  return new;
end;
$$;

drop trigger if exi