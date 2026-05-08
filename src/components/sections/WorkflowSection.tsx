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

        {/* Single DOM tree — responsive via CSS only */}
        <div className="relative">
          {/* Horizontal connector line — desktop only */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-5 h-px bg-[#E2E8F0]"
            style={{ left: "calc(4% + 20px)", right: "calc(4% + 20px)" }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-6">
            {steps.map((s, i) => (
              <div key={s.n} className="flex lg:flex-col gap-4 lg:gap-0 relative pb-8 lg:pb-0">
                {/* Vertical connector — mobile only */}
                {i < steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="lg:hidden absolute left-[18px] top-[36px] bottom-0 w-px bg-[#E2E8F0]"
                  />
                )}

                {/* Step number */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#2563EB]/30 bg-white text-[13px] font-bold text-[#2563EB] relative z-10 lg:mb-6">
                  {s.n}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-[15px] lg:text-[14px] font-semibold text-[#0F172A] mb-1.5 lg:mb-2">
                    {s.title}
                  </h3>
                  <p className="text-[14px] lg:text-[13px] leading-relaxed text-[#64748B]">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
