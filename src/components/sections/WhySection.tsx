import { Brain, Sliders, Workflow, Timer, Target } from "lucide-react";

const reasons = [
  {
    icon: Brain,
    title: "Specialistisch in AI en ML",
    description: "Uitsluitend gefocust op AI, machine learning en data — geen generalistisch bureau.",
  },
  {
    icon: Sliders,
    title: "Flexibel inzetbaar",
    description: "Van een specialist voor één sprint tot een volledig implementatieteam voor meerdere maanden.",
  },
  {
    icon: Workflow,
    title: "Van strategie tot uitvoering",
    description: "Wij bridgen het gat tussen AI-strategie en werkende implementatie.",
  },
  {
    icon: Timer,
    title: "Sneller starten",
    description: "Geen lange aanlooptijden. Van intake naar operationele specialist binnen twee weken.",
  },
  {
    icon: Target,
    title: "Gericht op resultaat",
    description: "Heldere deliverables en mijlpalen. Geen open-ended contracten of vage adviesdocumenten.",
  },
];

export function WhySection() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-14 max-w-xl">
          <p className="text-[13px] font-semibold uppercase tracking-widest text-[#2563EB] mb-4">
            Waarom Flexpool.ai
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight">
            Wat ons onderscheidt
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl border border-[#E2E8F0] bg-white p-6 hover:border-[#2563EB]/25 hover:shadow-sm transition-all duration-200"
            >
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl border border-[#2563EB]/20 bg-[#2563EB]/6">
                <r.icon className="h-4 w-4 text-[#2563EB]" strokeWidth={1.8} />
              </div>
              <h3 className="text-[14px] font-semibold text-[#0F172A] mb-2">{r.title}</h3>
              <p className="text-[13px] leading-relaxed text-[#64748B]">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
