import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { TalentForm } from "@/components/forms/TalentForm";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Voor AI-specialisten — Sluit je aan bij de Flexpool",
  description: "Werk aan uitdagende AI-projecten bij ambitieuze organisaties. Eerlijke tarieven, wij regelen de acquisitie.",
};

const benefits = [
  "Uitdagende AI-projecten bij MKB+ en enterprise organisaties",
  "Wij regelen acquisitie — jij focust op het werk",
  "Eerlijke tarieven, transparant beleid",
  "Snelle matching zonder bureaucratie",
  "Betaling binnen 14 dagen na facturatie",
  "Community van AI/ML-professionals",
];

const roles = [
  "AI Consultant", "ML Engineer", "Data Scientist", "LLM Engineer",
  "RAG Specialist", "MLOps Engineer", "Data Engineer", "AI Product Owner",
  "Automation Specialist", "AI Trainer", "Responsible AI Consultant", "Prompt Engineer",
];

const process = [
  { n: "1", title: "Aanmelding", desc: "Vul het formulier in. We beoordelen je profiel binnen 5 werkdagen." },
  { n: "2", title: "Intakegesprek", desc: "20–30 minuten: achtergrond, expertise, beschikbaarheid en verwachtingen." },
  { n: "3", title: "Technische check", desc: "Korte case of vragen om je expertise te bevestigen." },
  { n: "4", title: "Welkom in de pool", desc: "Raamovereenkomst getekend, profiel aangemaakt. Match bij eerste passende opdracht." },
];

export default function VoorSpecialistenPage() {
  return (
    <>
      <PageHero
        badge="Voor AI-specialisten"
        title="Werk aan de beste AI-projecten."
        titleAccent="Op jouw voorwaarden."
        description="Sluit je aan bij een selecte pool van AI/ML-professionals. Wij matchen jou met uitdagende opdrachten bij ambitieuze organisaties in Nederland."
        cta={{ label: "Meld je aan", href: "#aanmelden" }}
      />

      {/* Benefits + roles */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-widest text-[#2563EB] mb-3">Voordelen</p>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-8">Waarom de Flexpool?</h2>
              <ul className="space-y-3.5 mb-10">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#2563EB] shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-[15px] text-[#475569]">{b}</span>
                  </li>
                ))}
              </ul>

              <p className="text-[13px] font-semibold uppercase tracking-widest text-[#2563EB] mb-3" id="rollen">Beschikbare rollen</p>
              <div className="flex flex-wrap gap-2">
                {roles.map((r) => (
                  <span key={r} className="rounded-full border border-[#E2E8F0] bg-white px-3.5 py-1.5 text-[13px] font-medium text-[#475569]">
                    {r}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[13px] font-semibold uppercase tracking-widest text-[#2563EB] mb-3" id="proces">Aanmeldproces</p>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-8">Hoe werkt het?</h2>
              <div className="space-y-5">
                {process.map((s) => (
                  <div key={s.n} className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[#2563EB]/25 bg-white text-[13px] font-bold text-[#2563EB]">{s.n}</div>
                    <div className="pt-1">
                      <p className="text-[15px] font-semibold text-[#0F172A] mb-0.5">{s.title}</p>
                      <p className="text-[14px] text-[#64748B]">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="aanmelden" className="bg-white py-24 border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-[640px] px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3">Meld je aan als specialist</h2>
            <p className="text-[15px] text-[#64748B]">We beoordelen je aanmelding binnen 5 werkdagen.</p>
          </div>
          <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-8">
            <TalentForm />
          </div>
        </div>
      </section>
    </>
  );
}
