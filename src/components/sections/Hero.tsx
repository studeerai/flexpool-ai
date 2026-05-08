import Link from "next/link";
import { ArrowRight, ScanSearch, UserCheck, Users, Layers } from "lucide-react";

const featureCards = [
  {
    icon: ScanSearch,
    title: "AI Quickscan",
    description: "Inzicht in kansen, risico's en impact binnen 1–2 weken.",
  },
  {
    icon: UserCheck,
    title: "Expert match",
    description: "Wij matchen je met passende AI-experts voor jouw vraagstuk.",
  },
  {
    icon: Users,
    title: "Squad",
    description: "Complete AI-teams voor complexe projecten.",
  },
  {
    icon: Layers,
    title: "8+ rollen",
    description: "Van AI-strateeg en data scientist tot prompt engineer.",
  },
];

const benefits = [
  { title: "Snel de juiste expertise", sub: "Binnen 2 weken geregeld" },
  { title: "Flexibel & schaalbaar", sub: "Opschalen of afschalen wanneer nodig" },
  { title: "Resultaatgedreven", sub: "Van strategie tot implementatie" },
];

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] bg-[#081120] flex items-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-[#2563EB]/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-[#7C3AED]/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6 py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
              <span className="text-[13px] font-medium text-white/80 tracking-wide">
                AI-expertise. Snel geregeld.
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold leading-[1.1] tracking-tight text-white mb-6">
              AI implementeren<br />
              <span className="text-[#E2E8F0]">zonder vast AI-team?</span>
            </h1>

            <p className="text-[17px] leading-relaxed text-white/60 mb-10 max-w-[480px]">
              Flexpool.ai koppelt bedrijven aan tijdelijke AI-specialisten, consultants en implementatieteams. Zo ga je sneller van AI-idee naar concrete resultaten.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <Link href="/diensten/ai-quickscan" className="btn-primary text-[15px] px-7 py-3.5 shadow-lg shadow-blue-600/30">
                Plan een AI Quickscan
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/diensten" className="btn-outline-dark text-[15px] px-7 py-3.5">
                Vind AI-expertise
              </Link>
            </div>

            {/* Benefits */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-white/10">
              {benefits.map((b) => (
                <div key={b.title}>
                  <p className="text-[13px] font-semibold text-white/90 mb-0.5">{b.title}</p>
                  <p className="text-[12px] text-white/45">{b.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: feature panel */}
          <div className="relative hidden lg:block">
            {/* Violet glow behind panel */}
            <div className="absolute inset-0 -m-8 rounded-3xl bg-[#7C3AED]/12 blur-[60px]" />

            <div className="relative rounded-2xl border border-white/10 bg-[#0F172A]/80 p-6 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4">
                {featureCards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-xl border border-white/8 bg-white/4 p-5 hover:border-white/16 hover:bg-white/6 transition-all duration-200"
                  >
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-[#2563EB]/30 bg-[#2563EB]/10">
                      <card.icon className="h-4 w-4 text-[#6D5EF3]" strokeWidth={1.8} />
                    </div>
                    <p className="text-[14px] font-semibold text-white mb-1.5">{card.title}</p>
                    <p className="text-[12px] leading-relaxed text-white/50">{card.description}</p>
                  </div>
                ))}
              </div>

              {/* Panel footer */}
              <div className="mt-5 pt-5 border-t border-white/8 flex items-center justify-between">
                <p className="text-[12px] text-white/40">AI-specialisten in Nederland</p>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] text-white/50">Beschikbaar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
