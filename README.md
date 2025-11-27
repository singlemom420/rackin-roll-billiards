# Rackin Roll Billiards

Next.js + React + Supabase site for Rackin Roll Billiards.

Updates in this build:
- Top-left logo now uses your original Rackin Roll Billiards logo PNG.
- New **Service** tab between Home and Sell, describing all services.
- A subtle green neon backdrop behind the whole site so the neon sign vibe
  follows you as you scroll through sections and pages.

## Getting started

```bash
npm install
npm run dev
```

Create a `.env.local` file:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Create a `tables` table in Supabase for the Sell page:

- id (uuid or int, primary key)
- name (text)
- brand (text)
- size (text)
- condition (text)
- price (numeric)
- location (text)
