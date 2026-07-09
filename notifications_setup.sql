-- Bác Hơi — Notifications
-- Creates the notifications table and DB triggers that fire a notification when:
--   • someone likes your photo        (trigger on photo_likes)
--   • someone replies to your review   (trigger on review_replies)
--   • an admin verifies your spot      (trigger on spots)
--   • someone marks your review helpful (inside toggle_helpful RPC)
-- Triggers/RPC are SECURITY DEFINER so they insert regardless of RLS.
-- Safe to re-run.

-- ── Table ─────────────────────────────────────────────────────────────
create table if not exists public.notifications (
  id         bigserial primary key,
  user_id    text        not null,   -- recipient (profiles.id as text)
  actor_id   text,                   -- who did it
  actor_name text,                   -- denormalized for display
  type       text        not null,   -- 'like' | 'reply' | 'helpful' | 'verified'
  spot_id    text,
  review_id  text,
  photo_id   text,
  body       text,
  read       boolean     not null default false,
  created_at timestamptz not null default now()
);
create index if not exists notifications_user_idx on public.notifications(user_id, created_at desc);

alter table public.notifications enable row level security;
grant select, update on public.notifications to authenticated;

drop policy if exists notif_select on public.notifications;
create policy notif_select on public.notifications
  for select to authenticated using (user_id = auth.uid()::text);

drop policy if exists notif_update on public.notifications;
create policy notif_update on public.notifications
  for update to authenticated
  using (user_id = auth.uid()::text) with check (user_id = auth.uid()::text);
-- No insert policy for users: only the SECURITY DEFINER functions below insert.

-- ── Trigger: photo like ───────────────────────────────────────────────
create or replace function public.notify_photo_like()
returns trigger language plpgsql security definer set search_path=public as $$
declare v_owner text; v_spot text; v_name text;
begin
  select uploaded_by::text, spot_id::text into v_owner, v_spot
    from public.photos where id = NEW.photo_id;
  if v_owner is null or v_owner = NEW.user_id::text then return NEW; end if;
  select name into v_name from public.profiles where id = NEW.user_id::uuid;
  insert into public.notifications(user_id,actor_id,actor_name,type,spot_id,photo_id,body)
    values(v_owner, NEW.user_id::text, coalesce(v_name,'Someone'), 'like', v_spot, NEW.photo_id::text,
           coalesce(v_name,'Someone')||' liked your photo');
  return NEW;
end $$;
drop trigger if exists trg_notify_photo_like on public.photo_likes;
create trigger trg_notify_photo_like after insert on public.photo_likes
  for each row execute function public.notify_photo_like();

-- ── Trigger: reply to review ──────────────────────────────────────────
create or replace function public.notify_reply()
returns trigger language plpgsql security definer set search_path=public as $$
declare v_author text; v_spot text; v_name text;
begin
  select user_id::text, spot_id::text into v_author, v_spot
    from public.reviews where id = NEW.review_id;
  if v_author is null or v_author = NEW.user_id::text then return NEW; end if;
  select name into v_name from public.profiles where id = NEW.user_id::uuid;
  insert into public.notifications(user_id,actor_id,actor_name,type,spot_id,review_id,body)
    values(v_author, NEW.user_id::text, coalesce(v_name,'Someone'), 'reply', v_spot, NEW.review_id::text,
           coalesce(v_name,'Someone')||' replied to your review');
  return NEW;
end $$;
drop trigger if exists trg_notify_reply on public.review_replies;
create trigger trg_notify_reply after insert on public.review_replies
  for each row execute function public.notify_reply();

-- ── Trigger: spot verified ────────────────────────────────────────────
create or replace function public.notify_verified()
returns trigger language plpgsql security definer set search_path=public as $$
declare v_owner text;
begin
  if NEW.verified is true and OLD.verified is distinct from true then
    v_owner := NEW.created_by::text;
    if v_owner is not null and v_owner not in ('anon','seed') then
      insert into public.notifications(user_id,actor_id,actor_name,type,spot_id,body)
        values(v_owner, NEW.verified_by::text, 'Admin', 'verified', NEW.id::text,
               'Your spot "'||coalesce(NEW.name,'')||'" was verified ✅');
    end if;
  end if;
  return NEW;
end $$;
drop trigger if exists trg_notify_verified on public.spots;
create trigger trg_notify_verified after update on public.spots
  for each row execute function public.notify_verified();

-- ── toggle_helpful (updated): also notify the review author on a vote ──
create or replace function public.toggle_helpful(p_review_id text)
returns void language plpgsql security definer set search_path=public as $$
declare
  v_helpful text[];
  v_uid text;
  v_author text;
  v_spot text;
  v_name text;
begin
  if auth.uid() is null then
    raise exception 'You must be signed in to vote.';
  end if;
  v_uid := auth.uid()::text;

  select coalesce(helpful,'{}') into v_helpful
    from public.reviews where id::text = p_review_id;

  if v_uid = any(v_helpful) then
    v_helpful := array_remove(v_helpful, v_uid);        -- un-vote
  else
    v_helpful := array_append(v_helpful, v_uid);        -- vote
    select user_id::text, spot_id::text into v_author, v_spot
      from public.reviews where id::text = p_review_id;
    if v_author is not null and v_author <> v_uid then
      select name into v_name from public.profiles where id = auth.uid();
      insert into public.notifications(user_id,actor_id,actor_name,type,spot_id,review_id,body)
        values(v_author, v_uid, coalesce(v_name,'Someone'), 'helpful', v_spot, p_review_id,
               coalesce(v_name,'Someone')||' found your review helpful');
    end if;
  end if;

  update public.reviews set helpful = v_helpful where id::text = p_review_id;
end $$;
grant execute on function public.toggle_helpful(text) to authenticated;
