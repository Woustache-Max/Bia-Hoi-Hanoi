-- ============================================================
-- STEP 1: Run this SQL in your Supabase SQL Editor
-- ============================================================

-- Photos table
CREATE TABLE IF NOT EXISTS public.photos (
  id          uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  spot_id     text NOT NULL REFERENCES public.spots(id) ON DELETE CASCADE,
  uploaded_by uuid REFERENCES public.profiles(id) ON DELETE SET NULL,
  url         text NOT NULL,
  path        text NOT NULL,
  caption     text,
  flagged     boolean DEFAULT false,
  created_at  timestamptz DEFAULT now()
);

-- Index for fast per-spot lookups
CREATE INDEX IF NOT EXISTS photos_spot_id_idx ON public.photos(spot_id);

-- Enable RLS
ALTER TABLE public.photos ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Anyone can view unflagged photos"
  ON public.photos FOR SELECT
  USING (flagged = false OR auth.uid() IN (
    SELECT id FROM public.profiles WHERE role = 'admin'
  ));

CREATE POLICY "Authenticated users can upload photos"
  ON public.photos FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL AND auth.uid() = uploaded_by);

CREATE POLICY "Uploader can delete own photos"
  ON public.photos FOR DELETE
  USING (auth.uid() = uploaded_by);

CREATE POLICY "Admin can update photos (flag/unflag)"
  ON public.photos FOR UPDATE
  USING (auth.uid() IN (
    SELECT id FROM public.profiles WHERE role = 'admin'
  ));

-- Grants
GRANT SELECT, INSERT ON public.photos TO anon, authenticated;
GRANT DELETE, UPDATE ON public.photos TO authenticated;

-- ============================================================
-- STEP 2: Create Storage bucket in Supabase Dashboard
-- ============================================================
-- 1. Go to Storage in your Supabase dashboard
-- 2. Click "New bucket"
-- 3. Name it exactly:  spot-photos
-- 4. Check "Public bucket" (photos need to be publicly viewable)
-- 5. Set file size limit to 5242880 (5 MB in bytes)
-- 6. Allowed MIME types: image/jpeg, image/png, image/webp, image/gif
-- 7. Click Create
--
-- Then come back to SQL Editor and run the three lines below:

-- ============================================================
-- STEP 3: Run these storage policies in the SQL Editor
-- ============================================================

CREATE POLICY "Public read spot-photos"
ON storage.objects FOR SELECT
USING (bucket_id = 'spot-photos');

CREATE POLICY "Authenticated upload spot-photos"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'spot-photos' AND auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated delete spot-photos"
ON storage.objects FOR DELETE
USING (bucket_id = 'spot-photos' AND auth.uid() IS NOT NULL);
