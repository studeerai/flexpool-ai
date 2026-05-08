import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { ScanSearch, UserPlus, Users, BarChart3, GraduationCap, RefreshCw, ArrowRight, Clock, Euro } from "lucide-react";

export const metadata: Metadata = {
  title: "Diensten — AI-staffing, implementatie en consultancy",
  description: "Flexpool.ai biedt AI Quickscans, tijdelijke AI-experts, implementatieteams, consultancy, trainingen en AI Retainers voor MKB+ en enterprise.",
};

const services = [
  {
    icon: ScanSearch,
    title: "AI Quickscan",
    description: "Gestructureerde analyse van jouw organisatie: waar levert AI de meeste waarde? Concrete use cases met ROI-indicatie.",
    href: "/diensten/ai-quickscan",
    duration: "1–2 weken",
    price: "v.a. €1.500",
    badge: "Meest gekozen startpunt",
    highlights: ["3–5 concrete use cases", "ROI-indicatie", "Prioriteitsmatrix", "Aanbevolen vervolgstap"],
  },
  {
    icon: UserPlus,
    title: "AI Expert Flex",
    description: "Tijdelijke inzet van bewezen AI-specialisten — van LLM Engineers en Data Scientists tot AI Consultants en MLOps Engineers.",
    href: "/diensten/ai-expert-flex",
    duration: "Vanaf 1 week",
    price: "€85–€175/uur",
    badge: null,
    highlights: ["8+ gespecialiseerde rollen", "Match binnen 48 uur", "Direct inzetbaar", "Gescreend op praktijkervaring"],
  },
  {
    icon: Users,
    title: "AI Implementation Squad",
    description: "Een tijdelijk AI-projectteam dat een concreet project van ontwerp tot livegang uitvoert en oplevert.",
    href: "/diensten/implementation-squad",
    duration: "4–16 weken",
    price: "v.a. €15.000",
    badge: null,
    highlights: ["End-to-end projectuitvoering", "Vaste deliverables", "Kennisoverdracht", "Optionele SLA"],
  },
  {
    icon: BarChart3,
    title: "AI Consultancy",
    description: "Strategisch advies: roadmap, use-case selectie, toolingkeuze, data readiness, governance en EU AI Act readiness.",
    href: "/diensten/consultancy",
    duration: "2–8 weken",
    price: "€150–€200/uur",
    badge: null,
    highlights: ["AI-strategie en roadmap", "Toolingselectie", "Governance framework", "EU AI Act scan"],
  },
  {
    icon: GraduationCap,
    title: "AI Training Academy",
    description: "Praktische trainingen voor management, teams, developers en operations. Van AI-basics tot hands-on automatisering.",
    href: "/trainingen",
    duration: "Halve tot 2 dagen",
    price: "v.a. €1.500",
    badge: null,
    highlights: ["Maatwerk per doelgroep", "Live of online", "Certificering", "Follow-up Q&A"],
  },
  {
    icon: RefreshCw,
    title: "AI Retainer",
    description: "Maandelijkse toegang tot AI-capaciteit voor doorlopende ondersteuning, optimalisatie en nieuwe initiatieven.",
    href: "/diensten/retainer",
    duration: "Doorlopend",
    price: "v.a. €5.000/mnd",
    badge: null,
    highlights: ["Vaste maandelijkse uren", "1–3 specialisten", "Prioriteiten-sessie", "Flexibel inzetbaar"],
  },
];

const selectionGuide = [
  { situation: "Wil weten waar AI waarde levert", dienst: "AI Quickscan", href: "/diensten/ai-quickscan" },
  { situation: "Heb een intern team, mis AI-kennis", dienst: "AI Expert Flex", href: "/diensten/ai-expert-flex" },
  { situation: "Wil een concreet AI-project bouwen", dienst: "Implementation Squad", href: "/diensten/implementation-squad" },
  { situation: "Zoek strategisch AI-advies", dienst: "AI Consultancy", href: "/diensten/consultancy" },
  { situation: "Wil teams trainen in AI-gebruik", dienst: "AI Training Academy", href: "/trainingen" },
  { situation: "Heb doorlopend AI-ondersteuning nodig", dienst: "AI Retainer", href: "/diensten/retainer" },
];

export default function DienstenPage() {
  return (
    <>
      <PageHero
        badge="Diensten"
        title="AI-expertise op maat,"
        titleAccent="precies wat je nodig hebt."
        description="Van een snelle AI Quickscan tot een volledig implementatieteam. Flexpool.ai levert de juiste expertise, op het juiste moment, in de juiste vorm."
        cta={{ label: "Plan een AI Quickscan", href: "/diensten/ai-quickscan" }}
        ctaSecondary={{ label: "Neem contact op", href: "/contact" }}
      />

      {/* Service cards */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((s) => (
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
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] group-hover:border-[#2563EB]/25 group-hover:bg-[#2563EB]/6 transition-colors">
                    <s.icon className="h-5 w-5 text-[#475569] group-hover:text-[#2563EB] transition-colors" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h2 className="text-[17px] font-semibold text-[#0F172A] mb-1">{s.title}</h2>
                    <p className="text-[14px] leading-relaxed text-[#64748B]">{s.description}</p>
                  </div>
                </div>

                <ul className="space-y-1.5 mb-6">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-[13px] text-[#475569]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]/60 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center justify-between pt-5 border-t border-[#F1F5F9]">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 text-[12px] text-[#94A3B8]">
                      <Clock className="h-3.5 w-3.5" />
                      {s.duration}
                    </span>
                    <span className="flex items-center gap-1.5 text-[12px] text-[#94A3B8]">
                      <Euro className="h-3.5 w-3.5" />
                      {s.price}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-[13px] font-medium text-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity">
                    Meer info <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Selection guide */}
      <section className="bg-white py-20 border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3">Welke dienst past bij jou?</h2>
            <p className="text-[16px] text-[#64748B]">Kies op basis van jouw situatie.</p>
          </div>
          <div className="rounded-2xl border border-[#E2E8F0] overflow-hidden">
            {selectionGuide.map((row, i) => (
              <Link
                key={row.situation}
                href={row.href}
                className={`flex items-center justify-between px-7 py-5 hover:bg-[#F8FAFC] transition-colors group ${i > 0 ? "border-t border-[#F1F5F9]" : ""}`}
              >
                <span className="text-[14px] text-[#475569]">Ik {row.situation.toLowerCase()}</span>
                <div className="flex items-center gap-3">
                  <span className="text-[14px] font-semibold text-[#0F172A]">{row.dienst}</span>
                  <ArrowRight className="h-4 w-4 text-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
