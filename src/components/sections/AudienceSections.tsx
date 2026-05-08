import Link from "next/link";
import { ArrowRight, Zap, Users, Target, Clock } from "lucide-react";

const roles = [
  "AI Consultant", "ML Engineer", "Data Scientist", "LLM Engineer",
  "RAG Specialist", "MLOps Engineer", "Data Engineer", "AI Product Owner",
  "Automation Specialist", "AI Trainer",
];

const credibilityPoints = [
  { icon: Zap, label: "Snelle intake en matching", sub: "Van eerste contact naar specialist" },
  { icon: Users, label: "8+ gespecialiseerde AI-rollen", sub: "Beschikbaar via de Flexpool" },
  { icon: Target, label: "Concrete deliverables", sub: "Geen rapporten als eindproduct" },
  { icon: Clock, label: "Quickscan in 1–2 weken", sub: "Met use cases en ROI-indicatie" },
];

export function ForBusinessSection() {
  return (
    <section className="bg-[#0F172A] py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full bg-[#2563EB]/8 blur-[100px]" />
      </div>
      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-widest text-[#6D5EF3] mb-4">
              Voor bedrijven
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              Voor bedrijven die AI serieus willen toepassen
            </h2>
            <p className="text-[17px] text-white/60 leading-relaxed mb-10">
              Of je nu net begint met AI of al pilots hebt lopen: Flexpool.ai helpt je sneller vooruit met de juiste expertise, zonder dat je direct een volledig AI-team hoeft aan te nemen.
            </p>
            <Link href="/voor-bedrijven" className="btn-primary text-[15px] px-7 py-3.5 shadow-lg shadow-blue-600/30">
              Bespreek mijn situatie
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 lg:mt-0 grid grid-cols-2 gap-4">
            {credibilityPoints.map((p) => (
              <div key={p.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/8">
                  <p.icon className="h-4 w-4 text-[#6D5EF3]" strokeWidth={1.8} />
                </div>
                <p className="text-[14px] font-semibold text-white mb-1">{p.label}</p>
                <p className="text-[12px] text-white/45 leading-snug">{p.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ForSpecialistsSection() {
  return (
    <section className="bg-white py-20 border-t border-[#E2E8F0]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-widest text-[#475569] mb-4">
              Voor AI-specialisten
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] leading-tight mb-4">
              Ben jij AI-specialist?
            </h2>
            <p className="text-[16px] text-[#475569] leading-relaxed mb-8">
              Sluit je aan bij een selecte pool van AI/ML-professionals en werk aan relevante projecten bij ambitieuze organisaties.
            </p>
            <Link href="/voor-specialisten" className="btn-outline-light text-[14px] px-6 py-3">
              Meld je aan als AI-specialist
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 lg:mt-0">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#94A3B8] mb-4">
              Beschikbare rollen
            </p>
            <div className="flex flex-wrap gap-2">
              {roles.map((r) => (
                <span key={r} className="rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-1.5 text-[13px] font-medium text-[#475569]">
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
