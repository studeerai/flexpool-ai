import Link from "next/link";
import { ArrowRight } from "lucide-react";

const roles = [
  "AI Consultant", "ML Engineer", "Data Scientist", "LLM Engineer",
  "RAG Specialist", "MLOps Engineer", "Data Engineer", "AI Product Owner",
  "Automation Specialist", "AI Trainer",
];

export function ForBusinessSection() {
  return (
    <section className="bg-[#0F172A] py-24 relative overflow-hidden">
      {/* Subtle gradient */}
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
              Ik zoek AI-expertise
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 lg:mt-0 grid grid-cols-2 gap-4">
            {[
              { value: "48u", label: "gemiddelde tijd tot eerste match" },
              { value: "8+", label: "beschikbare AI-rollen en profielen" },
              { value: "100%", label: "focus op concrete resultaten" },
              { value: "1–2w", label: "doorlooptijd AI Quickscan" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-3xl font-bold text-white mb-1.5">{s.value}</p>
                <p className="text-[13px] text-white/50 leading-snug">{s.label}</p>
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
            <p className="text-[13px] font-semibold uppercase tracking-widest text-[#2563EB] mb-4">
              Voor AI-specialisten
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] leading-tight mb-4">
              Ben jij AI-specialist?
            </h2>
            <p className="text-[16px] text-[#475569] leading-relaxed mb-8">
              Sluit je aan bij een flexibele pool van AI/ML-professionals en werk aan relevante projecten bij ambitieuze organisaties.
            </p>
            <Link href="/voor-specialisten" className="btn-outline-light text-[14px] px-6 py-3">
              Meld je aan als AI-specialist
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 lg:mt-0">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#64748B] mb-4">
              Beschikbare rollen
            </p>
            <div className="flex flex-wrap gap-2">
              {roles.map((r) => (
                <span
                  key={r}
                  className="rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-1.5 text-[13px] font-medium text-[#475569]"
                >
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
