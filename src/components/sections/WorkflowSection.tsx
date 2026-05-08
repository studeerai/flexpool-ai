const steps = [
  {
    n: "01",
    title: "Intake",
    description: "Kennismaking en verkenning van jouw AI-vraagstuk, ambities en organisatiecontext.",
  },
  {
    n: "02",
    title: "AI Quickscan",
    description: "Gestructureerde analyse van processen, data en kansen. Output: concrete use cases met ROI-indicatie.",
  },
  {
    n: "03",
    title: "Expertmatch of projectteam",
    description: "Op basis van het vraagstuk koppelen we de juiste specialist of samenstellen we een implementatieteam.",
  },
  {
    n: "04",
    title: "Implementatie",
    description: "Het team gaat aan de slag. Iteratief, met heldere deliverables en regelmatige voortgangscheck.",
  },
  {
    n: "05",
    title: "Training en overdracht",
    description: "Kennisoverdracht, gebruikerstraining en documentatie zodat jouw organisatie zelfstandig verder kan.",
  },
];

export function WorkflowSection() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-14">
          <p className="text-[13px] font-semibold uppercase tracking-widest text-[#2563EB] mb-4">
            Werkwijze
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight">
            Van intake naar implementatie
          </h2>
        </div>

        {/* Desktop: horizontal stepper */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connector line */}
            <div className="absolute top-5 left-[calc(10%+1.25rem)] right-[calc(10%+1.25rem)] h-px bg-[#E2E8F0]" />
            <div className="grid grid-cols-5 gap-6">
              {steps.map((s) => (
                <div key={s.n} className="relative flex flex-col">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#2563EB]/30 bg-white text-[13px] font-bold text-[#2563EB] shadow-sm shadow-blue-500/10 relative z-10">
                    {s.n}
                  </div>
                  <h3 className="text-[14px] font-semibold text-[#0F172A] mb-2">{s.title}</h3>
                  <p className="text-[13px] leading-relaxed text-[#64748B]">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden space-y-0">
          {steps.map((s, i) => (
            <div key={s.n} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[#2563EB]/30 bg-white text-[12px] font-bold text-[#2563EB]">
                  {s.n}
                </div>
                {i < steps.length - 1 && <div className="mt-2 w-px flex-1 bg-[#E2E8F0] min-h-[32px]" />}
              </div>
              <div className="pb-8">
                <h3 className="text-[15px] font-semibold text-[#0F172A] mb-1.5">{s.title}</h3>
                <p className="text-[14px] leading-relaxed text-[#64748B]">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
