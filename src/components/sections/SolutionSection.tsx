import { UserPlus, Rocket, Lightbulb, BookOpen } from "lucide-react";

const solutions = [
  {
    icon: UserPlus,
    title: "Tijdelijke AI-specialisten",
    description: "Directe versterking met senior AI-professionals die precies de kennis hebben die jouw project vereist.",
  },
  {
    icon: Rocket,
    title: "Implementatieteams",
    description: "Van ontwerp tot livegang: een compleet team dat een concreet AI-project bouwt en oplevert.",
  },
  {
    icon: Lightbulb,
    title: "Strategisch AI-advies",
    description: "Roadmap, use-case selectie, toolingkeuze, data readiness en governance — afgestemd op jouw organisatie.",
  },
  {
    icon: BookOpen,
    title: "Training en adoptie",
    description: "Praktische trainingen zodat jouw teams zelfstandig werken met AI-tools en de resultaten vasthouden.",
  },
];

export function SolutionSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-14 max-w-2xl">
          <p className="text-[13px] font-semibold uppercase tracking-widest text-[#2563EB] mb-4">
            Onze aanpak
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight">
            Flexpool.ai levert de expertise die je nodig hebt — precies wanneer je die nodig hebt.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-7 hover:border-[#2563EB]/30 hover:bg-white hover:shadow-md hover:shadow-blue-500/5 transition-all duration-200"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-[#2563EB]/20 bg-[#2563EB]/8 group-hover:bg-[#2563EB]/12 transition-colors">
                <s.icon className="h-5 w-5 text-[#2563EB]" strokeWidth={1.8} />
              </div>
              <h3 className="text-[15px] font-semibold text-[#0F172A] mb-2.5">{s.title}</h3>
              <p className="text-[14px] leading-relaxed text-[#64748B]">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
