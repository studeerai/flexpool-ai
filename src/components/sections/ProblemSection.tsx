import { Users, HelpCircle, Cpu, GraduationCap } from "lucide-react";

const problems = [
  {
    icon: Users,
    title: "Geen intern AI-team",
    description: "De meeste organisaties beschikken niet over de specialisten die AI daadwerkelijk kunnen ontwerpen, bouwen en implementeren.",
  },
  {
    icon: HelpCircle,
    title: "Onduidelijke use-cases",
    description: "Waar levert AI de meeste waarde? Zonder gestructureerde verkenning blijven initiatieven steken in vage pilots.",
  },
  {
    icon: Cpu,
    title: "Te weinig technische capaciteit",
    description: "Data, infrastructuur en integraties vereisen specifieke kennis. Die kennis is schaars en duur om vast in te huren.",
  },
  {
    icon: GraduationCap,
    title: "Teams missen praktische AI-kennis",
    description: "Tools als Copilot en ChatGPT zijn beschikbaar, maar zonder goede begeleiding blijft adoptie achter bij de mogelijkheden.",
  },
];

export function ProblemSection() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-14 max-w-2xl">
          <p className="text-[13px] font-semibold uppercase tracking-widest text-[#2563EB] mb-4">
            De uitdaging
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight mb-5">
            AI-kansen genoeg. Maar wie gaat het uitvoeren?
          </h2>
          <p className="text-[17px] text-[#475569] leading-relaxed">
            Veel organisaties zien de mogelijkheden van AI, maar lopen vast op expertise, capaciteit, technische keuzes, datakwaliteit of adoptie binnen teams.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-[#E2E8F0] bg-white p-7 hover:border-[#CBD5E1] hover:shadow-sm transition-all duration-200"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]">
                <p.icon className="h-5 w-5 text-[#475569]" strokeWidth={1.8} />
              </div>
              <h3 className="text-[15px] font-semibold text-[#0F172A] mb-2.5">{p.title}</h3>
              <p className="text-[14px] leading-relaxed text-[#64748B]">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
