import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Implementation Squad — Compleet AI-projectteam",
  description: "Een tijdelijk AI-team dat een concreet project van ontwerp tot livegang uitvoert. Vaste deliverables, kennisoverdracht en optionele SLA.",
};

const examples = [
  { title: "Interne kennisbank-chatbot", desc: "RAG-systeem op basis van interne documentatie en policies." },
  { title: "Documentautomatisering", desc: "Automatisch verwerken en samenvatten van contracten, facturen of rapporten." },
  { title: "Customer support AI-agent", desc: "AI-agent die veelgestelde klantvragen afhandelt via chat of e-mail." },
  { title: "Forecastingmodel", desc: "Voorspellende modellen voor vraag, omzet of risico op basis van historische data." },
  { title: "AI-workflow automatisering", desc: "Automatisering van repetitieve processen met AI-calls en API-integraties." },
  { title: "AI-adoptieprogramma", desc: "Gestructureerde implementatie van Copilot, ChatGPT of andere AI-tools." },
];

const deliverables = [
  "Werkende AI-implementatie in productie",
  "Technische documentatie",
  "Kennisoverdracht aan intern team",
  "Testrapportage en kwaliteitsborging",
  "Optionele SLA voor nazorg en onderhoud",
];

const team = [
  { role: "AI Consultant (lead)", task: "Projectleiding, stakeholdermanagement, architectuurkeuzes" },
  { role: "LLM / ML Engineer", task: "Bouwen van het AI-systeem, model integratie" },
  { role: "Data Engineer", task: "Data pipelines, preprocessing, datastroom" },
  { role: "MLOps Engineer", task: "Deployment, monitoring, CI/CD" },
];

export default function ImplementationSquadPage() {
  return (
    <>
      <PageHero
        badge="AI Implementation Squad"
        title="Van AI-idee naar werkende"
        titleAccent="implementatie."
        description="Een tijdelijk AI-projectteam dat een concreet project van A tot Z uitvoert en oplevert — inclusief documentatie en kennisoverdracht."
        cta={{ label: "Bespreek jouw project", href: "/contact" }}
        ctaSecondary={{ label: "Bekijk voorbeeldprojecten", href: "#projecten" }}
      />

      {/* Highlights bar */}
      <div className="bg-[#050A14] border-b border-white/8">
        <div className="mx-auto max-w-[1200px] px-6 py-5">
          <div className="flex flex-wrap gap-x-10 gap-y-2">
            {["4–16 weken doorlooptijd", "v.a. €15.000 project-based", "Vaste deliverables", "Overdracht aan intern team"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6D5EF3]" />
                <span className="text-[13px] text-white/55">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Examples */}
      <section id="projecten" className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-12">
            <p className="text-[13px] font-semibold uppercase tracking-widest text-[#2563EB] mb-3">Voorbeeldprojecten</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">Wat kan een Squad bouwen?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {examples.map((e) => (
              <div key={e.title} className="rounded-2xl border border-[#E2E8F0] bg-white p-6 hover:border-[#2563EB]/25 hover:shadow-sm transition-all">
                <h3 className="text-[15px] font-semibold text-[#0F172A] mb-2">{e.title}</h3>
                <p className="text-[14px] text-[#64748B] leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables + Team */}
      <section className="bg-white py-20 border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-8">Wat levert het op?</h2>
              <ul className="space-y-3.5">
                {deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#2563EB] shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-[15px] text-[#475569]">{d}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6">
                <p className="text-[13px] font-semibold uppercase tracking-widest text-[#94A3B8] mb-3">Investering</p>
                <p className="text-[15px] text-[#475569] leading-relaxed">
                  Projecten starten vanaf <strong className="text-[#0F172A]">€15.000</strong>. Prijs afhankelijk van scope, teamgrootte en doorlooptijd. We hanteren vaste projectprijzen of T&M met cap.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-8">Typische teamsamenstelling</h2>
              <div className="space-y-4">
                {team.map((t) => (
                  <div key={t.role} className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
                    <p className="text-[14px] font-semibold text-[#0F172A] mb-1">{t.role}</p>
                    <p className="text-[13px] text-[#64748B]">{t.task}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-[#E2E8F0] bg-white p-8">
            <div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-1">Klaar om te bouwen?</h3>
              <p className="text-[15px] text-[#64748B]">Plan een gratis projectgesprek en bespreek jouw use case.</p>
            </div>
            <Link href="/contact" className="btn-primary text-[14px] px-6 py-3 shrink-0">
              Plan een projectgesprek <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
