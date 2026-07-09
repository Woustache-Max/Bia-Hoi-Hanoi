-- Add badges column to profiles
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS badges text[] DEFAULT '{}';
