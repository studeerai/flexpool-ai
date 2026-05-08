import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import {
  ScanSearch, UserPlus, Users, BarChart3, GraduationCap, RefreshCw,
  ArrowRight, Clock, Euro,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Diensten — AI-staffing, implementatie en consultancy",
  description: "Flexpool.ai biedt AI Quickscans, tijdelijke AI-experts, implementatieteams, consultancy, trainingen en AI Retainers voor MKB+ en enterprise.",
};

const situations = [
  {
    situation: "We weten niet waar te beginnen",
    service: "AI Quickscan",
    explanation: "Gestructureerde analyse van processen en kansen. Output: use cases met ROI-indicatie.",
    href: "/diensten/ai-quickscan",
    icon: ScanSearch,
  },
  {
    situation: "We zoeken tijdelijke AI-capaciteit",
    service: "AI Expert Flex",
    explanation: "Directe inzet van een AI Engineer, Data Scientist of LLM-specialist.",
    href: "/diensten/ai-expert-flex",
    icon: UserPlus,
  },
  {
    situation: "We willen een concreet AI-project bouwen",
    service: "Implementation Squad",
    explanation: "Een compleet team dat jouw AI-project van A tot Z uitvoert.",
    href: "/diensten/implementation-squad",
    icon: Users,
  },
  {
    situation: "We zoeken strategisch AI-advies",
    service: "AI Consultancy",
    explanation: "Roadmap, toolingselectie, governance en EU AI Act readiness.",
    href: "/diensten/consultancy",
    icon: BarChart3,
  },
  {
    situation: "We willen teams trainen in AI-gebruik",
    service: "AI Training Academy",
    explanation: "Praktische trainingen voor management, teams en developers.",
    href: "/trainingen",
    icon: GraduationCap,
  },
  {
    situation: "We hebben doorlopend AI-ondersteuning nodig",
    service: "AI Retainer",
    explanation: "Maandelijkse toegang tot AI-expertise voor meerdere initiatieven.",
    href: "/diensten/retainer",
    icon: RefreshCw,
  },
];

const primaryServices = [
  {
    icon: ScanSearch,
    title: "AI Quickscan",
    description: "Ontdek binnen 1–2 weken waar AI de meeste waarde kan opleveren voor jouw organisatie.",
    href: "/diensten/ai-quickscan",
    badge: "Aanbevolen startpunt",
    highlights: ["3–5 concrete use cases", "ROI-indicatie per kans", "Prioriteitsmatrix"],
    duration: "1–2 weken",
    price: "v.a. €1.500",
  },
  {
    icon: UserPlus,
    title: "AI Expert Flex",
    description: "Tijdelijke inzet van bewezen AI-specialisten — van LLM Engineers tot Data Scientists.",
    href: "/diensten/ai-expert-flex",
    badge: null,
    highlights: ["8+ gespecialiseerde rollen", "Snelle matching", "Gescreend op praktijkervaring"],
    duration: "Vanaf 1 week",
    price: "€85–€175/uur",
  },
  {
    icon: Users,
    title: "AI Implementation Squad",
    description: "Een tijdelijk AI-projectteam dat een concreet project van ontwerp tot livegang uitvoert.",
    href: "/diensten/implementation-squad",
    badge: "High-value project",
    highlights: ["End-to-end uitvoering", "Vaste deliverables", "Kennisoverdracht"],
    duration: "4–16 weken",
    price: "v.a. €15.000",
  },
];

const secondaryServices = [
  {
    icon: BarChart3,
    title: "AI Consultancy",
    description: "Strategie, roadmap, toolingkeuze, governance en EU AI Act readiness.",
    href: "/diensten/consultancy",
    duration: "2–8 weken",
    price: "€150–€200/uur",
  },
  {
    icon: GraduationCap,
    title: "AI Training Academy",
    description: "Praktische trainingen voor management, teams, developers en operations.",
    href: "/trainingen",
    duration: "Halve tot 2 dagen",
    price: "v.a. €1.500",
  },
  {
    icon: RefreshCw,
    title: "AI Retainer",
    description: "Maandelijkse toegang tot AI-expertise voor doorlopende ondersteuning.",
    href: "/diensten/retainer",
    duration: "Doorlopend",
    price: "v.a. €5.000/mnd",
  },
];

export default function DienstenPage() {
  return (
    <>
      <PageHero
        badge="Diensten"
        title="AI-expertise voor elke fase"
        titleAccent="van implementatie."
        description="Van Quickscan tot implementatieteam: kies de vorm van AI-expertise die past bij jouw vraagstuk, tempo en interne capaciteit."
        cta={{ label: "Plan een AI Quickscan", href: "/diensten/ai-quickscan" }}
        ctaSecondary={{ label: "Bespreek mijn situatie", href: "/contact" }}
      />

      {/* Keuzehulp — direct na hero */}
      <section className="bg-[#050A14] py-16 border-b border-white/8">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-8">
            <p className="text-[13px] font-semibold uppercase tracking-widest text-[#6D5EF3] mb-3">
              Niet zeker wat je nodig hebt?
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Welke AI-expertise past bij jouw situatie?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {situations.map((s) => (
              <Link
                key={s.service}
                href={s.href}
                className="group flex flex-col gap-3 rounded-xl border border-white/10 bg-white/4 p-5 hover:border-[#2563EB]/40 hover:bg-white/7 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/6">
                    <s.icon className="h-4 w-4 text-[#6D5EF3]" strokeWidth={1.8} />
                  </div>
                  <p className="text-[13px] font-semibold text-[#2563EB]">{s.service}</p>
                </div>
                <div>
                  <p className="text-[13px] font-medium text-white/75 mb-1">{s.situation}</p>
                  <p className="text-[12px] text-white/40 leading-relaxed">{s.explanation}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-[12px] font-medium text-[#2563EB]/70 group-hover:text-[#2563EB] transition-colors mt-auto">
                  Bekijk deze dienst <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Primary services */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-12">
            <p className="text-[13px] font-semibold uppercase tracking-widest text-[#2563EB] mb-3">Primaire diensten</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">De meest gevraagde AI-diensten</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {primaryServices.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group relative flex flex-col rounded-2xl border border-[#E2E8F0] bg-white p-8 hover:border-[#2563EB]/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200"
              >
                {s.badge && (
                  <span className="absolute top-6 right-6 rounded-full bg-[#2563EB]/10 px-3 py-1 text-[11px] font-semibold text-[#2563EB]">
                    {s.badge}
                  </span>
                )}
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] group-hover:border-[#2563EB]/25 group-hover:bg-[#2563EB]/6 transition-colors">
                  <s.icon className="h-5 w-5 text-[#475569] group-hover:text-[#2563EB] transition-colors" strokeWidth={1.8} />
                </div>
                <h3 className="text-[17px] font-semibold text-[#0F172A] mb-2.5">{s.title}</h3>
                <p className="text-[14px] leading-relaxed text-[#64748B] mb-5">{s.description}</p>
                <ul className="space-y-1.5 mb-6">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-[13px] text-[#475569]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]/50 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center justify-between pt-5 border-t border-[#F1F5F9]">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1.5 text-[12px] text-[#94A3B8]">
                      <Clock className="h-3.5 w-3.5" strokeWidth={1.8} />{s.duration}
                    </span>
                    <span className="flex items-center gap-1.5 text-[12px] text-[#94A3B8]">
                      <Euro className="h-3.5 w-3.5" strokeWidth={1.8} />{s.price}
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary services */}
      <section className="bg-white py-16 border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-10">
            <p className="text-[13px] font-semibold uppercase tracking-widest text-[#94A3B8] mb-3">Overige diensten</p>
            <h2 className="text-xl font-bold text-[#0F172A]">Aanvullende AI-diensten</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {secondaryServices.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group flex flex-col rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 hover:border-[#2563EB]/25 hover:bg-white hover:shadow-sm transition-all"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white group-hover:border-[#2563EB]/20 group-hover:bg-[#2563EB]/6 transition-colors">
                  <s.icon className="h-4 w-4 text-[#64748B] group-hover:text-[#2563EB] transition-colors" strokeWidth={1.8} />
                </div>
                <h3 className="text-[15px] font-semibold text-[#0F172A] mb-2">{s.title}</h3>
                <p className="text-[13px] leading-relaxed text-[#64748B] flex-1 mb-4">{s.description}</p>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[12px] text-[#94A3B8]">{s.duration}</span>
                  <span className="text-[#E2E8F0]">·</span>
                  <span className="text-[12px] text-[#94A3B8]">{s.price}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-[13px] font-medium text-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity">
                  Meer informatie <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
