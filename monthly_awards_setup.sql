-- Bác Hơi — Monthly Awards (repeatable ×N badges)
-- Three awards crowned automatically each month:
--   photo    = uploader of the most-liked photo that month
--   reviewer = most reviews posted that month
--   explorer = most new spots added that month
-- Prestige: winning the same award ×10 unlocks a prestige badge (shown in-app).
-- Safe to re-run.

-- ── 1. Table ──────────────────────────────────────────────────────────
create table if not exists public.monthly_awards (
  id         bigserial primary key,
  period     text        not null,             -- 'YYYY-MM' the award is for
  award_type text        not null,             -- 'photo' | 'reviewer' | 'explorer'
  user_id    text        not null,             -- winner (profiles.id as text)
  metric     int         not null default 0,   -- likes / reviews / spots that month
  photo_id   text,                             -- for the photo award
  created_at timestamptz not null default now(),
  unique (period, award_type)                  -- one winner per award per month
);

alter table public.monthly_awards enable row level security;

grant select on public.monthly_awards to anon, authenticated;

drop policy if exists ma_select on public.monthly_awards;
create policy ma_select on public.monthly_awards for select using (true);
-- No insert/update/delete policy: only the SECURITY DEFINER function writes.

-- ── 2. Crowning function ──────────────────────────────────────────────
create or replace function public.crown_monthly_winners(p_period text default null)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  v_period text;
  v_start  timestamptz;
  v_end    timestamptz;
  v_uid    text;
  v_metric int;
  v_photo  text;
  v_done   int := 0;
begin
  -- Default to the previous calendar month in Hanoi time
  if p_period is null then
    v_period := to_char((now() at time zone 'Asia/Ho_Chi_Minh') - interval '1 month', 'YYYY-MM');
  else
    v_period := p_period;
  end if;
  v_start := (v_period || '-01')::timestamp at time zone 'Asia/Ho_Chi_Minh';
  v_end   := v_start + interval '1 month';

  -- Reviewer of the Month
  select user_id::text, count(*) into v_uid, v_metric
    from public.reviews
    where created_at >= v_start and created_at < v_end and user_id is not null
    group by user_id
    order by count(*) desc, min(created_at) asc
    limit 1;
  if v_uid is not null and v_metric > 0 then
    insert into public.monthly_awards (period, award_type, user_id, metric)
      values (v_period, 'reviewer', v_uid, v_metric)
      on conflict (period, award_type)
      do update set user_id = excluded.user_id, metric = excluded.metric;
    v_done := v_done + 1;
  end if;

  -- Explorer of the Month
  select created_by::text, count(*) into v_uid, v_metric
    from public.spots
    where created_at >= v_start and created_at < v_end
      and created_by is not null and created_by not in ('anon', 'seed')
    group by created_by
    order by count(*) desc, min(created_at) asc
    limit 1;
  if v_uid is not null and v_metric > 0 then
    insert into public.monthly_awards (period, award_type, user_id, metric)
      values (v_period, 'explorer', v_uid, v_metric)
      on conflict (period, award_type)
      do update set user_id = excluded.user_id, metric = excluded.metric;
    v_done := v_done + 1;
  end if;

  -- Photo of the Month (most liked photo uploaded that month; needs >=1 like)
  select p.id::text, p.uploaded_by::text, count(pl.*) into v_photo, v_uid, v_metric
    from public.photos p
    left join public.photo_likes pl on pl.photo_id = p.id
    where p.created_at >= v_start and p.created_at < v_end
      and p.uploaded_by is not null
    group by p.id, p.uploaded_by
    order by count(pl.*) desc, min(p.created_at) asc
    limit 1;
  if v_uid is not null and v_metric > 0 then
    insert into public.monthly_awards (period, award_type, user_id, metric, photo_id)
      values (v_period, 'photo', v_uid, v_metric, v_photo)
      on conflict (period, award_type)
      do update set user_id = excluded.user_id, metric = excluded.metric, photo_id = excluded.photo_id;
    v_done := v_done + 1;
  end if;

  return 'Crowned ' || v_done || ' award(s) for ' || v_period;
end;
$$;

-- ── 3. Automatic schedule (needs the pg_cron extension enabled) ───────
-- Enable once in the dashboard: Database → Extensions → search "pg_cron" → enable.
-- Runs 01:00 UTC on the 1st (= 08:00 Hanoi) and crowns the previous month.
do $$
begin
  if exists (select 1 from pg_extension where extname = 'pg_cron') then
    perform cron.unschedule('crown-monthly-winners')
      where exists (select 1 from cron.job where jobname = 'crown-monthly-winners');
    perform cron.schedule('crown-monthly-winners', '0 1 1 * *',
      $cron$select public.crown_monthly_winners();$cron$);
  end if;
end $$;

-- Manual test / backfill a past month, e.g.:
--   select crown_monthly_winners('2026-06');
