-- Bác Hơi — ensure reviews have a created_at timestamp
-- The "Golden Hours" badge is earned by posting a review between 5–7pm Hanoi
-- time, so we need the review's submission time. This adds created_at if it's
-- not already there. Existing rows get the current time (one-off); all new
-- reviews get their real submission time automatically. Safe to re-run.

alter table public.reviews
  add column if not exists created_at timestamptz not null default now();
