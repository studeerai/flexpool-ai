import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { ArrowRight, ScanSearch, UserPlus, Users, BarChart3, GraduationCap, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Voor bedrijven — AI implementeren zonder vast AI-team",
  description: "Flexpool.ai helpt MKB+ en enterprise bedrijven AI implementeren met tijdelijke specialisten, projectteams en strategisch advies.",
};

const scenarios = [
  { title: "We weten niet waar te beginnen", desc: "Start met een AI Quickscan en ontdek de 3–5 meest waardevolle use cases voor jouw organisatie.", href: "/diensten/ai-quickscan", icon: ScanSearch },
  { title: "We hebben een concreet AI-project", desc: "Een Implementation Squad bouwt jouw project end-to-end op — met kennisoverdracht aan je eigen team.", href: "/diensten/implementation-squad", icon: Users },
  { title: "Ons intern team mist AI-kennis", desc: "Versterk je team tijdelijk met een AI Engineer, LLM-specialist of Data Scientist via AI Expert Flex.", href: "/diensten/ai-expert-flex", icon: UserPlus },
  { title: "We willen AI strategisch aanpakken", desc: "Een AI Consultant of Fractional AI Lead helpt je roadmap, governance en toolingkeuze te structureren.", href: "/diensten/consultancy", icon: BarChart3 },
  { title: "Onze teams moeten AI leren gebruiken", desc: "De AI Training Academy traint management, teams en developers op maat voor jouw sector.", href: "/trainingen", icon: GraduationCap },
  { title: "We hebben doorlopend AI-capaciteit nodig", desc: "Een AI Retainer geeft je maandelijkse toegang tot AI-expertise voor meerdere initiatieven tegelijk.", href: "/diensten/retainer", icon: RefreshCw },
];

const sectors = [
  "Logistiek & Transport", "Finance & Verzekeringen", "Retail & E-commerce",
  "Healthcare", "Manufacturing", "Tech & Software", "Professional Services", "Overheid",
];

const objections = [
  { q: "Is dit niet te duur voor ons?", a: "De AI Quickscan start al vanaf €1.500 en geeft direct inzicht in ROI. Veel projecten betalen zichzelf terug binnen maanden via tijdsbesparing of foutreductie." },
  { q: "Wij zijn te klein voor AI.", a: "Juist MKB+ (50–500 medewerkers) profiteert enorm van AI. Je hebt genoeg data en processen, maar niet het personeel. Dat is precies wat wij oplossen." },
  { q: "We hebben slechte ervaringen met consultants.", a: "We werken met heldere deliverables en vaste projectprijzen. Geen open-ended adviestrajecten. Jij weet vooraf wat je krijgt." },
  { q: "Hoe weten we of de specialisten goed zijn?", a: "Elke specialist is persoonlijk gescreend op techniek én praktijkervaring. We leveren altijd met CV en referenties, en een proefperiode is bespreekbaar." },
];

export default function VoorBedrijvenPage() {
  return (
    <>
      <PageHero
        badge="Voor bedrijven"
        title="AI implementeren,"
        titleAccent="zonder vast AI-team."
        description="Of je net begint of al pilots hebt lopen: Flexpool.ai levert de expertise die je nodig hebt — precies wanneer je die nodig hebt, in de vorm die past."
        cta={{ label: "Plan een AI Quickscan", href: "/diensten/ai-quickscan" }}
        ctaSecondary={{ label: "Bespreek jouw situatie", href: "/contact" }}
      />

      {/* Scenarios */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-12">
            <p className="text-[13px] font-semibold uppercase tracking-widest text-[#2563EB] mb-3">Jouw situatie</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">Herken jij één van deze situaties?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {scenarios.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group rounded-2xl border border-[#E2E8F0] bg-white p-7 hover:border-[#2563EB]/30 hover:shadow-md hover:shadow-blue-500/5 transition-all"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] group-hover:border-[#2563EB]/25 group-hover:bg-[#2563EB]/6 transition-colors">
                  <s.icon className="h-5 w-5 text-[#475569] group-hover:text-[#2563EB] transition-colors" strokeWidth={1.8} />
                </div>
                <h3 className="text-[15px] font-semibold text-[#0F172A] mb-2">{s.title}</h3>
                <p className="text-[14px] text-[#64748B] leading-relaxed mb-4">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-[13px] font-medium text-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity">
                  Meer info <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="bg-white py-20 border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-widest text-[#2563EB] mb-3">Sectoren</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
                We werken in alle sectoren
              </h2>
              <p className="text-[16px] text-[#475569] leading-relaxed mb-8">
                AI is sector-overstijgend. Wij brengen specialisten mee die jouw branche begrijpen en weten welke toepassingen in jouw context echt werken.
              </p>
              <Link href="/contact" className="btn-primary text-[14px] px-6 py-3 inline-flex">
                Bespreek jouw sector <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {sectors.map((s) => (
                <span key={s} className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2 text-[14px] font-medium text-[#475569]">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Objections */}
      <section className="bg-[#F8FAFC] py-20 border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-8">Veelgestelde bezwaren</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {objections.map((o) => (
              <div key={o.q} className="rounded-2xl border border-[#E2E8F0] bg-white p-7">
                <p className="text-[15px] font-semibold text-[#0F172A] mb-3">{o.q}</p>
                <p className="text-[14px] text-[#64748B] leading-relaxed">{o.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <FAQSection />
    </>
  );
}
