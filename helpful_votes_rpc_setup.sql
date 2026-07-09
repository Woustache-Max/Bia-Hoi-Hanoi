-- Bác Hơi — toggle_helpful RPC  (FIXED for text[] column)
-- reviews.helpful is a Postgres text[] array (not jsonb), so we use array ops.
-- Lets any signed-in user mark someone else's review as helpful, bypassing the
-- reviews UPDATE RLS safely. Makes Crowd Favourite & Community Pillar earnable.
-- Safe to re-run.

create or replace function public.toggle_helpful(p_review_id text)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_helpful text[];
  v_uid text;
begin
  if auth.uid() is null then
    raise exception 'You must be signed in to vote.';
  end if;
  v_uid := auth.uid()::text;

  select coalesce(helpful, '{}') into v_helpful
    from public.reviews where id::text = p_review_id;

  if v_uid = any(v_helpful) then
    v_helpful := array_remove(v_helpful, v_uid);   -- un-vote
  else
    v_helpful := array_append(v_helpful, v_uid);   -- vote
  end if;

  update public.reviews set helpful = v_helpful where id::text = p_review_id;
end;
$$;

grant execute on function public.toggle_helpful(text) to authenticated;
