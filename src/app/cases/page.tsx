import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cases — AI-implementaties in de praktijk",
  description: "Voorbeelden van AI-projecten die Flexpool.ai begeleidt: chatbots, automatisering, forecasting en meer.",
};

const exampleCases = [
  {
    sector: "Logistiek",
    title: "Interne kennisbank-chatbot",
    description: "RAG-systeem dat vragen van medewerkers beantwoordt op basis van interne procedures, handleidingen en beleidsdocumenten.",
    impact: "Minder interne vragen en snellere onboarding van nieuwe collega's.",
    tags: ["LLM Engineering", "RAG", "Interne kennisbank"],
  },
  {
    sector: "Finance",
    title: "Automatisering van documentanalyse",
    description: "AI-systeem dat contracten, facturen en rapporten automatisch classificeert, samengevat en relevante data extraheert.",
    impact: "Tijdsbesparing van 60–80% op handmatige documentverwerking.",
    tags: ["Document AI", "LLM", "Procesautomatisering"],
  },
  {
    sector: "Retail",
    title: "AI-agent voor klantservice",
    description: "Conversational AI die veelgestelde vragen afhandelt via chat, e-mail en een klantportaal — 24/7 beschikbaar.",
    impact: "Significant minder herhaalvragen bij de klantenserviceafdeling.",
    tags: ["AI Agents", "NLP", "Customer service"],
  },
  {
    sector: "Manufacturing",
    title: "Forecastingmodel voor vraagplanning",
    description: "ML-model dat op basis van historische sales, seizoenspatronen en externe factoren de vraag voorspelt.",
    impact: "Betere voorraadbeslissingen en lagere opslagkosten.",
    tags: ["ML Engineering", "Forecasting", "Data Science"],
  },
  {
    sector: "Professional Services",
    title: "Copilot-adoptieprogramma",
    description: "Gestructureerd programma dat 200+ medewerkers traint in effectief gebruik van Microsoft Copilot in hun dagelijkse werk.",
    impact: "Hogere productiviteit en actieve adoptie na 6 weken.",
    tags: ["Training", "Adoptie", "Copilot"],
  },
  {
    sector: "Tech",
    title: "AI-workflows voor sales operations",
    description: "Automatisering van leadkwalificatie, offertesamenstelling en CRM-updates via AI-workflows.",
    impact: "Meer output per sales FTE met minder administratief werk.",
    tags: ["Automation", "AI Agents", "Sales"],
  },
];

export default function CasesPage() {
  return (
    <>
      <PageHero
        badge="Cases"
        title="AI in de praktijk —"
        titleAccent="wat we bouwen."
        description="Voorbeelden van AI-projecten die door Flexpool.ai worden begeleid. Van chatbots en documentautomatisering tot forecasting en AI-adoptie."
      />

      {/* Disclaimer */}
      <div className="bg-[#050A14] border-b border-white/8">
        <div className="mx-auto max-w-[1200px] px-6 py-4">
          <p className="text-[13px] text-white/40">
            De onderstaande cases zijn voorbeeldprojecten gebaseerd op veelvoorkomende AI-toepassingen. Specifieke klantcases worden op verzoek en onder NDA gedeeld.
          </p>
        </div>
      </div>

      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {exampleCases.map((c) => (
              <div key={c.title} className="flex flex-col rounded-2xl border border-[#E2E8F0] bg-white p-7 hover:border-[#2563EB]/25 hover:shadow-sm transition-all">
                <span className="mb-4 inline-flex w-fit rounded-md bg-[#F1F5F9] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#475569]">
                  {c.sector}
                </span>
                <h3 className="text-[16px] font-semibold text-[#0F172A] mb-2">{c.title}</h3>
                <p className="text-[14px] text-[#64748B] leading-relaxed mb-5 flex-1">{c.description}</p>
                <div className="rounded-xl bg-emerald-50 border border-emerald-200/60 px-4 py-3 mb-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-emerald-700 mb-1">Impact</p>
                  <p className="text-[13px] text-emerald-800">{c.impact}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {c.tags.map((t) => (
                    <span key={t} className="rounded-md bg-[#EEF2FF] px-2.5 py-1 text-[11px] font-medium text-[#4338CA]">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA: request case */}
      <section className="bg-white py-16 border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-8">
            <div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-1">Wil je specifieke cases zien?</h3>
              <p className="text-[15px] text-[#64748B]">We delen graag relevante referenties en voorbeelden die passen bij jouw sector en vraagstuk.</p>
            </div>
            <Link href="/contact" className="btn-primary text-[14px] px-6 py-3 shrink-0">
              Bespreek mijn situatie <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
