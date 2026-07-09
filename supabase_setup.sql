-- ============================================================
-- BIA HƠI HANOI — Supabase Database Setup
-- Run this entire file in the Supabase SQL Editor once
-- ============================================================


-- ============ TABLES ============

-- Spots: every bia hoi location
create table public.spots (
  id             text primary key,
  name           text not null,
  lat            float8 not null,
  lng            float8 not null,
  district       text default '',
  address        text default '',
  price_per_glass text default '',
  open_h         int,
  close_h        int,
  seating        text default '',
  payment        text default '',
  vibes          text[] default '{}',
  description    text default '',
  status         text default 'active' check (status in ('active','temp_closed','perm_closed')),
  photos         text[] default '{}',
  created_by     text default 'anon',
  created_at     timestamptz default now(),
  verified       boolean default false,
  verified_by    text,
  verified_at    text,
  reports        jsonb default '[]'
);

-- Profiles: public user data (linked to Supabase Auth users)
create table public.profiles (
  id         uuid primary key references auth.users(id) on delete cascade,
  name       text not null,
  role       text default 'newcomer' check (role in ('newcomer','active','admin')),
  since      text default to_char(current_date,'YYYY-MM-DD'),
  avatar_url text
);

-- Reviews: ratings and text reviews for spots
create table public.reviews (
  id          text primary key,
  spot_id     text not null references public.spots(id) on delete cascade,
  user_id     uuid references public.profiles(id) on delete set null,
  who         text not null default 'Anonymous',
  ratings     jsonb default '{}',
  txt         text default '',
  review_date text default to_char(current_date,'YYYY-MM-DD'),
  helpful     text[] default '{}',
  created_at  timestamptz default now()
);


-- ============ AUTO-CREATE PROFILE ON SIGNUP ============
-- When a new user signs up, automatically create their profile row

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
declare
  v_role text;
begin
  -- Accept role from signup metadata only if it's a valid value
  v_role := coalesce(new.raw_user_meta_data->>'role', 'newcomer');
  if v_role not in ('newcomer','active','admin') then
    v_role := 'newcomer';
  end if;

  insert into public.profiles (id, name, role, since)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'name', split_part(new.email,'@',1)),
    v_role,
    to_char(current_date,'YYYY-MM-DD')
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();


-- ============ ROW LEVEL SECURITY ============

-- SPOTS --
alter table public.spots enable row level security;

-- Anyone can view spots (including visitors who aren't logged in)
create policy "spots_read" on public.spots
  for select using (true);

-- Anyone can submit a spot (anonymous submissions are fine, they start unverified)
create policy "spots_insert" on public.spots
  for insert with check (true);

-- Spot creators + active/admin users can update
create policy "spots_update" on public.spots
  for update using (
    auth.uid()::text = created_by
    or exists (
      select 1 from public.profiles
      where id = auth.uid() and role in ('active','admin')
    )
  );

-- Only admins can delete spots
create policy "spots_delete" on public.spots
  for delete using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- PROFILES --
alter table public.profiles enable row level security;

create policy "profiles_read" on public.profiles
  for select using (true);

create policy "profiles_insert" on public.profiles
  for insert with check (auth.uid() = id);

create policy "profiles_update" on public.profiles
  for update using (
    auth.uid() = id
    or exists (
      select 1 from public.profiles p2
      where p2.id = auth.uid() and p2.role = 'admin'
    )
  );

-- REVIEWS --
alter table public.reviews enable row level security;

create policy "reviews_read" on public.reviews
  for select using (true);

-- Logged-in users can write text reviews; anyone can submit a rating-only review
create policy "reviews_insert" on public.reviews
  for insert with check (true);

-- Users can delete their own reviews; admins can delete any
create policy "reviews_delete" on public.reviews
  for delete using (
    auth.uid() = user_id
    or exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- Users can update their own reviews (for helpful votes etc); admins can update any
create policy "reviews_update" on public.reviews
  for update using (
    auth.uid() = user_id
    or exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );


-- ============ SEED DATA — 3 demo spots ============

insert into public.spots
  (id, name, lat, lng, district, address, price_per_glass, open_h, close_h,
   seating, payment, vibes, description, status, created_by, verified)
values
  ('s_a',
   'Bia Hơi Corner (Tạ Hiện)',
   21.03448, 105.85247,
   'Hoàn Kiếm', 'Tạ Hiện & Lương Ngọc Quyến', '15,000₫',
   16, 24, 'Outdoor · plastic stools', 'Cash or QR code transfer',
   ARRAY['Touristy','Lively','Street-side'],
   'The legendary Beer Corner — plastic stools spilling into the street.',
   'active', 'seed', true),

  ('s_b',
   'Bia Hơi Hà Nội (Đường Thành)',
   21.03206, 105.84600,
   'Hoàn Kiếm', '34 Đường Thành', '12,000₫',
   15, 23, 'Indoor + street stools', 'Cash or QR code transfer',
   ARRAY['Local-only','Cheap'],
   'Proper local joint, great nem chua rán.',
   'active', 'anon', false),

  ('s_c',
   'Bia Hơi Lan Chín',
   21.00580, 105.84360,
   'Hai Bà Trưng', 'Near Bách Khoa University', '10,000₫',
   16, 24, 'Outdoor · low stools', 'Cash or QR code transfer',
   ARRAY['Local-only','Cheap','Lively'],
   'Student favourite, rock-bottom prices.',
   'active', 'anon', false);
