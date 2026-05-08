import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { ArrowRight, CheckCircle2, ShieldCheck, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Experts — Bewezen AI-specialisten klaar om te starten",
  description: "Alle AI-specialisten in de Flexpool worden gescreend op technische expertise én praktijkervaring. Bekijk beschikbare rollen en ons screeningsproces.",
};

const roles = [
  { role: "AI Consultant", description: "Strategie, use-case ontwerp, stakeholdermanagement en implementatiebegeleiding.", experience: "5+ jaar" },
  { role: "LLM Engineer", description: "LLM-integraties, RAG-systemen, prompt engineering en model fine-tuning.", experience: "2+ jaar" },
  { role: "ML Engineer", description: "Modellen ontwerpen, trainen en deployen in productie met moderne ML-stacks.", experience: "3+ jaar" },
  { role: "Data Scientist", description: "Analyse, modellering, forecasting en inzichten voor strategische besluitvorming.", experience: "3+ jaar" },
  { role: "RAG Specialist", description: "Retrieval-Augmented Generation, vector databases en kennisbank-chatbots.", experience: "1+ jaar" },
  { role: "MLOps Engineer", description: "CI/CD voor ML, model serving, monitoring en cloud infrastructure voor AI.", experience: "3+ jaar" },
  { role: "Data Engineer", description: "Data pipelines, ETL, warehousing en datatransformaties voor AI-toepassingen.", experience: "3+ jaar" },
  { role: "AI Product Owner", description: "Vertalen van businessdoelen naar AI-product roadmaps en teambegeleiding.", experience: "4+ jaar" },
  { role: "Automation Specialist", description: "AI-workflows bouwen met n8n, Make of Zapier gecombineerd met LLM-calls.", experience: "2+ jaar" },
  { role: "AI Trainer", description: "Maatwerk AI-trainingen en adoptietrajecten voor teams, management en developers.", experience: "2+ jaar" },
];

const screeningSteps = [
  { n: "1", title: "CV- en portfolioreview", desc: "Beoordeling van relevante projecten, resultaten en technische diepgang." },
  { n: "2", title: "Intakegesprek", desc: "45 minuten: achtergrond, projectervaring, werkwijze en verwachtingen." },
  { n: "3", title: "Technische beoordeling", desc: "Korte case of technische vragen afgestemd op het specialisme." },
  { n: "4", title: "Referentiecheck", desc: "Contact met minimaal één eerdere opdrachtgever of collega." },
];

const qualities = [
  "Minimaal 2 jaar aantoonbare ervaring in het specialisme",
  "Concrete projectresultaten en referenties",
  "Technische diepgang én communicatieve vaardigheden",
  "KvK-inschrijving en professionele uitstraling",
  "Commitment aan kwaliteitsborging en feedback",
];

export default function AIExpertsPage() {
  return (
    <>
      <PageHero
        badge="AI Experts"
        title="Bewezen AI-specialisten,"
        titleAccent="klaar om te starten."
        description="Elke specialist in de Flexpool is persoonlijk gescreend op technische expertise, praktijkervaring en communicatieve vaardigheden."
        cta={{ label: "Vind een AI-specialist", href: "/contact" }}
        ctaSecondary={{ label: "Meld je aan als specialist", href: "/voor-specialisten" }}
      />

      {/* Roles */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-12">
            <p className="text-[13px] font-semibold uppercase tracking-widest text-[#2563EB] mb-3">Beschikbare rollen</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">AI-disciplines in onze pool</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {roles.map((r) => (
              <div key={r.role} className="rounded-2xl border border-[#E2E8F0] bg-white p-6 hover:border-[#2563EB]/25 transition-all">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-[15px] font-semibold text-[#0F172A]">{r.role}</h3>
                  <span className="text-[11px] text-[#94A3B8] font-medium shrink-0 ml-4">Min. {r.experience}</span>
                </div>
                <p className="text-[14px] text-[#64748B] leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screening */}
      <section className="bg-white py-20 border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-widest text-[#2563EB] mb-3">Kwaliteitsborging</p>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-8">Hoe screenen we specialisten?</h2>
              <div className="space-y-5">
                {screeningSteps.map((s) => (
                  <div key={s.n} className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#2563EB]/25 bg-[#F8FAFC] text-[13px] font-bold text-[#2563EB]">{s.n}</div>
                    <div>
                      <p className="text-[15px] font-semibold text-[#0F172A] mb-0.5">{s.title}</p>
                      <p className="text-[14px] text-[#64748B]">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-widest text-[#2563EB] mb-3">Onze eisen</p>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-8">Wat we van specialisten verwachten</h2>
              <ul className="space-y-3.5">
                {qualities.map((q) => (
                  <li key={q} className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-[#2563EB] shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-[15px] text-[#475569]">{q}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="h-5 w-5 text-[#2563EB]" />
                  <p className="text-[14px] font-semibold text-[#0F172A]">Kwaliteitsborging achteraf</p>
                </div>
                <p className="text-[14px] text-[#64748B] leading-relaxed">
                  Na elke opdracht vragen we klantfeedback. Specialisten met een score onder 8/10 worden besproken. Wij staan in voor de kwaliteit van elke match.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual CTA */}
      <section className="bg-[#F8FAFC] py-16 border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-8">
              <p className="text-[13px] font-semibold text-[#2563EB] mb-2">Voor bedrijven</p>
              <h3 className="text-xl font-bold text-[#0F172A] mb-2">Zoek je een AI-specialist?</h3>
              <p className="text-[14px] text-[#64748B] mb-6">Vertel ons jouw vraagstuk en wij matchen de juiste expertise.</p>
              <Link href="/contact" className="btn-primary text-[14px] px-6 py-3 inline-flex">
                Start de match <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-8">
              <p className="text-[13px] font-semibold text-[#475569] mb-2">Voor AI-professionals</p>
              <h3 className="text-xl font-bold text-[#0F172A] mb-2">Sluit je aan bij de pool</h3>
              <p className="text-[14px] text-[#64748B] mb-6">Interessante projecten, eerlijke tarieven, wij regelen de acquisitie.</p>
              <Link href="/voor-specialisten" className="btn-outline-light text-[14px] px-6 py-3 inline-flex">
                Meld je aan <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
