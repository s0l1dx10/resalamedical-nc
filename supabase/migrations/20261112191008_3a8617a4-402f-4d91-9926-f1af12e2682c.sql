CREATE TABLE public.code_blue_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  college text NOT NULL,
  phone text NOT NULL,
  package text NOT NULL,
  price_egp integer NOT NULL,
  receipt_path text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.code_blue_registrations TO service_role;
ALTER TABLE public.code_blue_registrations ENABLE ROW LEVEL SECURITY;