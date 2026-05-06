# Technisch Plan — Flexpool.ai

## Stack Keuze

### MVP Stack (aanbevolen)

```
Frontend:     Next.js 15 (App Router) + TypeScript
Styling:      Tailwind CSS + shadcn/ui
Database:     Supabase (PostgreSQL + Auth + Storage)
Hosting:      Vercel
E-mail:       Resend + React Email
Analytics:    Vercel Analytics + PostHog
Forms:        React Hook Form + Zod
```

### Toekomstige uitbreidingen
- **CMS:** Sanity.io (als content-volume groeit)
- **CRM:** HubSpot API-integratie
- **Matching:** Supabase + pgvector (AI-matching)
- **Payments:** Stripe (voor trainingen en Quickscan)

---

## Database Schema (MVP)

### Tabel: contact_submissions
```sql
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  message TEXT NOT NULL,
  type TEXT CHECK (type IN ('bedrijf', 'specialist', 'algemeen')),
  status TEXT DEFAULT 'nieuw',
  source TEXT  -- welke pagina/formulier
);
```

### Tabel: quickscan_requests
```sql
CREATE TABLE quickscan_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  job_title TEXT,
  company_size TEXT,
  sector TEXT,
  ai_experience TEXT,
  main_challenge TEXT,
  availability TEXT,
  status TEXT DEFAULT 'nieuw'
);
```

### Tabel: talent_applications
```sql
CREATE TABLE talent_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  linkedin_url TEXT,
  role TEXT NOT NULL,
  experience_years INTEGER,
  hourly_rate INTEGER,
  availability TEXT,
  work_preference TEXT,
  location TEXT,
  skills TEXT[],
  portfolio_url TEXT,
  motivation TEXT,
  status TEXT DEFAULT 'aangemeld'
);
```

---

## Formulieren

### Contactformulier (algemeen)
- Naam (verplicht)
- E-mail (verplicht)
- Bedrijf
- Telefoonnummer
- Bericht (verplicht)
- Type: Bedrijf / Specialist / Algemeen

### AI Quickscan aanvraag
- Naam (verplicht)
- E-mail (verplicht)
- Bedrijfsnaam (verplicht)
- Functietitel
- Bedrijfsgrootte (dropdown)
- Sector (dropdown)
- Huidige AI-ervaring (radio)
- Grootste uitdaging (textarea)
- Wanneer beschikbaar voor gesprek

### Talent aanmelding
- Naam (verplicht)
- E-mail (verplicht)
- LinkedIn URL
- Primaire rol (dropdown)
- Jaren ervaring
- Uurtarief (range)
- Beschikbaarheid
- Werkvoorkeur (remote/hybrid/on-site)
- Locatie
- Top 5 skills (multi-select of tags)
- Portfolio/GitHub URL
- Motivatie (textarea)

---

## E-mail Flows

### Na contactformulier
1. Bevestiging aan gebruiker (Resend)
2. Notificatie intern (naar info@flexpool.ai)

### Na Quickscan aanvraag
1. Bevestigingsmail met info over het proces
2. Intern: notificatie voor opvolging binnen 24 uur
3. Dag voor gesprek: herinnering

### Na talent aanmelding
1. Bevestiging + verwachting (review binnen 5 werkdagen)
2. Na review: uitnodiging voor intake OF afwijzing

---

## SEO-structuur

```
/robots.txt
/sitemap.xml (automatisch via next-sitemap)

Meta tags per pagina:
- title (max 60 tekens)
- description (max 160 tekens)
- og:title, og:description, og:image
- JSON-LD structured data (Organization, Service)
```

### Core Web Vitals targets
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1
- Lighthouse score 90+

---

## Security

- Environment variables nooit in code
- Supabase Row Level Security (RLS) ingeschakeld
- Input validatie via Zod op alle formulieren
- Rate limiting op API routes (via Upstash Redis)
- GDPR-compliant: cookiebanner, privacybeleid
- Geen persoonlijke data in logs

---

## Deployment Checklist

- [ ] Domein geconfigureerd op Vercel
- [ ] SSL-certificaat actief
- [ ] Environment variables ingesteld
- [ ] Supabase productie-project aangemaakt
- [ ] E-mail templates getest
- [ ] Analytics actief
- [ ] Sitemap gegenereerd
- [ ] robots.txt juist ingesteld
- [ ] Error monitoring (Sentry optioneel)
- [ ] 404 en error pages aanwezig
