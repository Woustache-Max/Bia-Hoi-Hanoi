-- Bác Hơi — review_replies permissions
-- Replying failed with "permission denied for table review_replies" = the
-- authenticated role was missing table-level grants (and needs matching RLS
-- policies). This adds both. Reads already worked; this fixes posting/deleting.
-- Safe to re-run.

grant select, insert, update, delete on public.review_replies to authenticated;
grant select on public.review_replies to anon;

alter table public.review_replies enable row level security;

-- Anyone can read replies
drop policy if exists rr_select on public.review_replies;
create policy rr_select on public.review_replies
  for select using (true);

-- Signed-in users can post a reply as themselves
drop policy if exists rr_insert on public.review_replies;
create policy rr_insert on public.review_replies
  for insert to authenticated
  with check (auth.uid() = user_id);

-- A user can delete their own reply; admins can delete any
drop policy if exists rr_delete on public.review_replies;
create policy rr_delete on public.review_replies
  for delete to authenticated
  using (
    auth.uid() = user_id
    or exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')
  );
