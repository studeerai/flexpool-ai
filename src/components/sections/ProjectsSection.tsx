const projects = [
  {
    title: "Interne kennisbank-chatbot",
    description: "RAG-systeem op basis van interne documentatie, policies en kennisartikelen.",
    impact: "Minder interne vragen",
    expertise: "LLM Engineering, RAG",
  },
  {
    title: "Documentanalyse en samenvatting",
    description: "Automatisch verwerken, classificeren en samenvatten van grote volumes contracten of rapporten.",
    impact: "Tijdsbesparing 60–80%",
    expertise: "Document AI, LLM",
  },
  {
    title: "Automatisering van klantvragen",
    description: "AI-agent die veelgestelde klantvragen afhandelt via chat, e-mail of portaal.",
    impact: "Minder handmatig werk",
    expertise: "AI Agents, NLP",
  },
  {
    title: "AI-workflows voor sales en operations",
    description: "Automatisering van offertes, rapportages, leadkwalificatie en planningsprocessen.",
    impact: "Hogere output per fte",
    expertise: "Automation, LLM",
  },
  {
    title: "Forecasting en datamodellen",
    description: "Voorspellende modellen voor vraag, omzet, risico of onderhoud op basis van historische data.",
    impact: "Betere besluitvorming",
    expertise: "ML Engineering, Data Science",
  },
  {
    title: "Copilot- en ChatGPT-adoptie",
    description: "Gestructureerd adoptieprogramma zodat teams AI-tools effectief en verantwoord inzetten.",
    impact: "Hogere productiviteit",
    expertise: "Training, Change",
  },
  {
    title: "AI-agents voor repetitieve processen",
    description: "Autonome agenten die taken uitvoeren zoals data-extractie, matching of rapportage.",
    impact: "Forse kostenbesparing",
    expertise: "AI Agents, MLOps",
  },
  {
    title: "RAG-systeem voor documenten",
    description: "Directe antwoorden uit grote documentcollecties — voor compliance, legal of HR.",
    impact: "Sneller antwoord",
    expertise: "RAG, Vector DB",
  },
];

export function ProjectsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-14">
          <p className="text-[13px] font-semibold uppercase tracking-widest text-[#2563EB] mb-4">
            Voorbeeldprojecten
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight max-w-xl">
            Voorbeelden van wat we kunnen bouwen
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 hover:border-[#CBD5E1] hover:bg-white hover:shadow-sm transition-all duration-200"
            >
              <h3 className="text-[14px] font-semibold text-[#0F172A] mb-2.5 leading-snug">{p.title}</h3>
              <p className="text-[13px] leading-relaxed text-[#64748B] mb-5">{p.description}</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-medium text-[#475569] w-16 shrink-0">Impact</span>
                  <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700 border border-emerald-200/70">
                    {p.impact}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-medium text-[#475569] w-16 shrink-0">Expertise</span>
                  <span className="rounded-md bg-[#EEF2FF] px-2 py-0.5 text-[11px] font-medium text-[#4338CA] border border-indigo-200/70">
                    {p.expertise}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
