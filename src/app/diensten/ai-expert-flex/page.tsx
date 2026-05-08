import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Expert Flex — Tijdelijke AI-specialisten op maat",
  description: "Huur tijdelijk AI Engineers, ML Engineers, Data Scientists, LLM-specialisten of AI Consultants in. Match binnen 48 uur.",
};

const roles = [
  { role: "AI Consultant", description: "AI-strategie, use-case ontwerp, stakeholdermanagement en implementatieadvies.", rate: "€120–€160/uur" },
  { role: "LLM Engineer", description: "LLM-integraties, RAG-systemen, prompt engineering en fine-tuning.", rate: "€110–€155/uur" },
  { role: "ML Engineer", description: "Machine learning modellen ontwerpen, trainen en deployen in productie.", rate: "€105–€150/uur" },
  { role: "Data Scientist", description: "Data-analyse, modellering, forecasting en inzichten voor besluitvorming.", rate: "€95–€140/uur" },
  { role: "RAG Specialist", description: "Retrieval-Augmented Generation, vector databases en kennisbankoplossingen.", rate: "€110–€150/uur" },
  { role: "MLOps Engineer", description: "CI/CD voor ML, model serving, monitoring en cloud infrastructure.", rate: "€105–€145/uur" },
  { role: "Data Engineer", description: "Data pipelines, ETL, warehousing en datatransformatie voor AI-toepassingen.", rate: "€95–€135/uur" },
  { role: "AI Product Owner", description: "Vertalen van businessdoelen naar AI-product roadmaps en team aansturing.", rate: "€100–€140/uur" },
  { role: "Automation Specialist", description: "AI-workflows met n8n, Make of Zapier gecombineerd met LLM-calls.", rate: "€85–€120/uur" },
  { role: "AI Trainer", description: "Maatwerk AI-trainingen en adoptietrajecten voor teams en management.", rate: "€85–€120/uur" },
];

const usecases = [
  "Intern AI-team tijdelijk versterken",
  "Specifieke expertise voor een sprint of project",
  "Kennis overdragen aan intern team",
  "Capaciteitspiek opvangen",
  "Pilot uitvoeren zonder vast personeel",
];

const process = [
  { n: "01", title: "Intake", desc: "Korte call om de rol, het project en de vereiste expertise te begrijpen." },
  { n: "02", title: "Match", desc: "Binnen 48 uur presenteren we 1–3 geschikte kandidaten met CV en referenties." },
  { n: "03", title: "Kennismaking", desc: "Een korte technische kennismaking met de door jou geselecteerde specialist." },
  { n: "04", title: "Start", desc: "Raamovereenkomst getekend, start opdracht — zo snel als jij wilt." },
];

export default function AIExpertFlexPage() {
  return (
    <>
      <PageHero
        badge="AI Expert Flex"
        title="Tijdelijke AI-specialist"
        titleAccent="direct inzetbaar."
        description="Huur bewezen AI-professionals in op het moment dat jij ze nodig hebt. Match binnen 48 uur, start binnen een week."
        cta={{ label: "Vraag een match aan", href: "/contact" }}
        ctaSecondary={{ label: "Bekijk beschikbare rollen", href: "#rollen" }}
      />

      {/* Use cases */}
      <section className="bg-[#050A14] border-b border-white/8">
        <div className="mx-auto max-w-[1200px] px-6 py-6">
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {usecases.map((u) => (
              <div key={u} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6D5EF3]" />
                <span className="text-[13px] text-white/55">{u}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section id="rollen" className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-12">
            <p className="text-[13px] font-semibold uppercase tracking-widest text-[#2563EB] mb-3">Beschikbare rollen</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">Specialisten in alle AI-disciplines</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {roles.map((r) => (
              <div key={r.role} className="rounded-2xl border border-[#E2E8F0] bg-white p-6 hover:border-[#2563EB]/25 hover:shadow-sm transition-all">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-[15px] font-semibold text-[#0F172A]">{r.role}</h3>
                  <span className="text-[12px] text-[#94A3B8] font-medium shrink-0 ml-4">{r.rate}</span>
                </div>
                <p className="text-[14px] text-[#64748B] leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20 border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-12">Hoe werkt de match?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((s) => (
              <div key={s.n} className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6">
                <p className="text-3xl font-bold text-[#2563EB]/20 mb-4">{s.n}</p>
                <h3 className="text-[15px] font-semibold text-[#0F172A] mb-2">{s.title}</h3>
                <p className="text-[14px] text-[#64748B] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA inline */}
      <section className="bg-[#F8FAFC] py-16 border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-[#E2E8F0] bg-white p-8">
            <div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-1">Klaar om een specialist te vinden?</h3>
              <p className="text-[15px] text-[#64748B]">Vertel ons welk profiel je zoekt — we matchen binnen 48 uur.</p>
            </div>
            <Link href="/contact" className="btn-primary text-[14px] px-6 py-3 shrink-0">
              Ik zoek een specialist <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
