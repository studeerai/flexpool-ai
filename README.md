# Flexpool.ai

> **De flexibele AI-afdeling voor bedrijven die AI willen implementeren.**

Flexpool.ai helpt bedrijven van AI-ambitie naar werkende implementatie — met tijdelijke AI-specialisten, projectteams, consultancy, training en managed AI-capaciteit.

---

## Wat is Flexpool.ai?

Flexpool.ai is **geen** recruitmentbureau. Flexpool.ai is **geen** standaard consultancy.

Flexpool.ai is een **flexibele AI-afdeling** die jouw bedrijf tijdelijk of structureel versterkt met bewezen AI-specialisten. We combineren strategisch advies met hands-on implementatie — resultaatgericht, transparant en snel.

### Missie
Elk bedrijf krijgt toegang tot AI-expertise, ongeacht de omvang van het interne team.

### Visie
AI-adoptie is geen luxe meer, maar een strategische noodzaak. Flexpool.ai is de snelste weg van AI-idee naar werkende implementatie.

---

## Diensten

| Dienst | Beschrijving | Prijsrange |
|--------|-------------|------------|
| **AI Quickscan** | Analyse in 1–2 weken: waar levert AI waarde? | Gratis intake + €1.500–€3.500 |
| **AI Expert Flex** | Tijdelijke inzet van AI-specialist | €85–€175/uur |
| **AI Implementation Squad** | Projectteam dat een AI-project bouwt en oplevert | €15.000–€75.000 |
| **Fractional AI Lead** | Parttime AI-directeur voor strategie en leiding | €3.500–€8.000/maand |
| **AI Training Academy** | Trainingen voor teams, managers en developers | €1.500–€5.000/training |
| **AI Retainer** | Doorlopende AI-capaciteit op abonnementsbasis | €5.000–€20.000/maand |
| **AI Consultancy** | Strategie, roadmap, governance, EU AI Act | €150–€200/uur |
| **White-label** | AI-capaciteit voor agencies en consultancies | Maatwerk |

---

## Technische Stack

### Frontend
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS + shadcn/ui
- **TypeScript:** Strict mode

### Backend & Database
- **Database:** Supabase (PostgreSQL)
- **Auth:** Supabase Auth
- **API:** Next.js API Routes + Server Actions

### Infrastructuur
- **Hosting:** Vercel
- **CDN:** Vercel Edge Network
- **Email:** Resend + React Email

### CMS & Content
- **Blog/CMS:** Sanity.io (optioneel) of MDX files
- **Forms:** React Hook Form + Zod

### Analytics & Marketing
- **Analytics:** Vercel Analytics + PostHog
- **SEO:** next-sitemap + JSON-LD structured data
- **CRM:** HubSpot (Free tier)

---

## Project Structuur

```
flexpool-ai/
├── README.md
├── docs/
│   ├── strategy.md          # Businessstrategie en positionering
│   ├── positioning.md       # Merkpositionering en messaging
│   ├── services.md          # Alle diensten uitgewerkt
│   ├── website-structure.md # Sitemap en pagina-architectuur
│   ├── copywriting.md       # Websitecopy (NL + EN)
│   ├── marketing-plan.md    # Go-to-market strategie
│   ├── sales-process.md     # Sales funnel en playbook
│   ├── talent-pool.md       # Talentpool strategie en rollen
│   ├── technical-plan.md    # Technische architectuur
│   └── roadmap.md           # Volledige roadmap
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx
│   │   ├── page.tsx         # Homepage
│   │   ├── diensten/
│   │   ├── ai-experts/
│   │   ├── trainingen/
│   │   ├── voor-bedrijven/
│   │   ├── voor-specialisten/
│   │   ├── cases/
│   │   ├── over-ons/
│   │   ├── contact/
│   │   └── blog/
│   ├── components/
│   │   ├── ui/              # Herbruikbare UI-componenten
│   │   ├── sections/        # Paginasecties (Hero, Features, etc.)
│   │   └── forms/           # Formulieren (contact, talent, bedrijf)
│   └── lib/
│       ├── supabase.ts
│       └── utils.ts
├── public/
│   └── images/
├── content/
│   ├── blog/                # Blog artikelen (MDX)
│   └── services/            # Dienst content
└── prompts/                 # AI-prompts voor interne tools
```

---

## Lokaal Starten

### Vereisten
- Node.js 20+
- npm of pnpm
- Supabase account
- Vercel account (optioneel voor lokale dev)

### Installatie

```bash
# Repository clonen
git clone https://github.com/studeerai/flexpool-ai.git
cd flexpool-ai

# Dependencies installeren
npm install

# Environment variables instellen
cp .env.example .env.local
# Vul je Supabase en andere keys in

# Development server starten
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

### Environment Variables

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Resend (e-mail)
RESEND_API_KEY=

# PostHog (analytics)
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=

# HubSpot (CRM)
HUBSPOT_API_KEY=
```

---

## Roadmap

### Week 1–2 (MVP)
- [ ] Next.js project opzetten
- [ ] Homepage bouwen (hero, diensten, werkwijze, CTA)
- [ ] Contactformulier + Supabase koppeling
- [ ] AI Quickscan aanvraagpagina
- [ ] Basale SEO
- [ ] Website live op Vercel

### Maand 1
- [ ] Alle dienstenpagina's live
- [ ] Blog-sectie met 3+ artikelen
- [ ] Talentformulier
- [ ] Analytics actief
- [ ] CRM gekoppeld

### Maand 2–3
- [ ] Kennisbank / FAQ
- [ ] Cases pagina met 2+ cases
- [ ] E-mailautomatisering
- [ ] Performance optimalisatie

### Maand 6+
- [ ] Talentplatform features (matching)
- [ ] Klantportaal
- [ ] Internationalisering (EN)

---

## Openstaande Beslissingen

- [ ] **Startmarkt:** Nederland, Benelux of direct internationaal?
- [ ] **Eerste focus:** Staffing, implementation of consultancy?
- [ ] **Tone of voice:** 100% Nederlands of tweetalig (NL/EN)?
- [ ] **CMS:** Sanity.io, Contentlayer of simpele MDX?
- [ ] **CRM:** HubSpot Free, Pipedrive of Notion?
- [ ] **Juridische entiteit:** Welke BV/eenmanszaak?
- [ ] **Branding:** Eigen ontwerp of designer inhuren?

---

## Bijdragen

Dit is een privéproject. Neem contact op via info@flexpool.ai.

---

## Licentie

Proprietary — Alle rechten voorbehouden © 2026 Flexpool.ai
