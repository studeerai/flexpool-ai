import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Users, Target, Code2, Workflow, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Training Academy — Praktische AI-trainingen voor teams",
  description: "Praktische AI-trainingen voor management, teams, developers en operations. Van AI-basics tot hands-on AI-automatisering.",
};

const modules = [
  {
    icon: Users,
    level: "Niveau 1",
    title: "AI Basics voor iedereen",
    target: "Alle medewerkers",
    duration: "Halve dag",
    description: "Wat is AI, machine learning en generatieve AI? Hoe gebruik je ChatGPT, Copilot en AI-tools in je dagelijkse werk?",
    topics: ["AI en ML begrijpen", "ChatGPT en Copilot in de praktijk", "Prompt engineering voor beginners", "Veilig en verantwoord gebruik"],
  },
  {
    icon: Target,
    level: "Niveau 2",
    title: "AI voor managers en beslissers",
    target: "MT, managers, PO's",
    duration: "1 dag",
    description: "AI-strategie, ROI, use-case selectie en risico's. Hoe neem je goede AI-beslissingen als leidinggevende?",
    topics: ["AI-kansen identificeren", "Business case en ROI berekenen", "Risico en governance", "AI-strategie presenteren aan board"],
  },
  {
    icon: Code2,
    level: "Niveau 3",
    title: "AI voor developers",
    target: "Developers, data-analisten",
    duration: "1–2 dagen",
    description: "LLMs, RAG, API-gebruik en AI-toepassingen bouwen. Hands-on met OpenAI, Anthropic, Azure AI en open-source modellen.",
    topics: ["LLM API-gebruik", "RAG-systemen bouwen", "Prompt engineering (advanced)", "Fine-tuning en evaluatie"],
  },
  {
    icon: Workflow,
    level: "Niveau 4",
    title: "AI Automatisering",
    target: "Operations, IT, no-code users",
    duration: "1 dag",
    description: "AI-workflows bouwen met n8n, Make en Zapier. Documentautomatisering, slimme routering en repetitieve taken elimineren.",
    topics: ["n8n en Make met AI-calls", "Documentverwerking automatiseren", "AI-agent workflows", "Integraties met bestaande tools"],
  },
];

const formats = [
  { title: "Live workshop", desc: "On-site of online, interactief, maximaal 16 deelnemers." },
  { title: "Maatwerk bedrijfstraining", desc: "Volledig afgestemd op jouw processen, tools en sector." },
  { title: "Meerdaags programma", desc: "Combinatie van modules voor een volledig AI-adoptieprogramma." },
];

export default function TrainingenPage() {
  return (
    <>
      <PageHero
        badge="AI Training Academy"
        title="AI-kennis die blijft hangen,"
        titleAccent="in de praktijk."
        description="Praktische AI-trainingen voor management, teams, developers en operations. Geen theorie, maar direct toepasbare vaardigheden."
        cta={{ label: "Vraag een intake aan", href: "/contact" }}
        ctaSecondary={{ label: "Bekijk trainingsmodules", href: "#modules" }}
      />

      <div className="bg-[#050A14] border-b border-white/8">
        <div className="mx-auto max-w-[1200px] px-6 py-5">
          <div className="flex flex-wrap gap-x-10 gap-y-2">
            {["Live of online", "v.a. €1.500 per groepstraining", "Maatwerk per sector en team", "Follow-up Q&A sessie inbegrepen"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6D5EF3]" />
                <span className="text-[13px] text-white/55">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modules */}
      <section id="modules" className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-12">
            <p className="text-[13px] font-semibold uppercase tracking-widest text-[#2563EB] mb-3">Trainingsmodules</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">Kies het juiste niveau voor jouw team</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {modules.map((m) => (
              <div key={m.title} className="rounded-2xl border border-[#E2E8F0] bg-white p-8">
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]">
                    <m.icon className="h-5 w-5 text-[#475569]" strokeWidth={1.8} />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#94A3B8]">{m.level} · {m.target} · {m.duration}</span>
                    <h3 className="text-[17px] font-semibold text-[#0F172A] mt-0.5">{m.title}</h3>
                  </div>
                </div>
                <p className="text-[14px] text-[#64748B] leading-relaxed mb-5">{m.description}</p>
                <ul className="space-y-1.5">
                  {m.topics.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-[13px] text-[#475569]">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#2563EB] shrink-0" strokeWidth={2.5} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="bg-white py-20 border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-8">Trainingsformaten</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {formats.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6">
                <h3 className="text-[15px] font-semibold text-[#0F172A] mb-2">{f.title}</h3>
                <p className="text-[14px] text-[#64748B]">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-8">
            <div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-1">Maatwerk training voor jouw team?</h3>
              <p className="text-[15px] text-[#64748B]">We bespreken jouw team, doelen en het gewenste niveau.</p>
            </div>
            <Link href="/contact" className="btn-primary text-[14px] px-6 py-3 shrink-0">
              Plan een intake <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
