-- Bác Hơi — add_report RPC
-- Lets ANY signed-in user report a spot by appending to spots.reports.
-- Runs as SECURITY DEFINER so it safely bypasses the spots UPDATE RLS
-- (which only lets the creator / active / admin update a spot). Before this,
-- reports by newcomers on other people's spots silently failed.
-- Safe to re-run.

create or replace function public.add_report(
  p_spot_id text,
  p_reason  text,
  p_details text default ''
) returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_name text;
begin
  if auth.uid() is null then
    raise exception 'You must be signed in to report a spot.';
  end if;

  select name into v_name from public.profiles where id = auth.uid();

  update public.spots
     set reports = coalesce(reports, '[]'::jsonb) || jsonb_build_object(
        'by',      coalesce(v_name, 'User'),
        'user_id', auth.uid()::text,
        'reason',  p_reason,
        'why',     case when coalesce(p_details, '') = '' then p_reason
                        else p_reason || ' — ' || p_details end,
        'when',    to_char(current_date, 'YYYY-MM-DD')
     )
   where id::text = p_spot_id;
end;
$$;

grant execute on function public.add_report(text, text, text) to authenticated;
