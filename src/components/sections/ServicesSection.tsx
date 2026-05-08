import Link from "next/link";
import { ScanSearch, UserPlus, Users, BarChart3, GraduationCap, RefreshCw, ArrowRight } from "lucide-react";

const services = [
  {
    icon: ScanSearch,
    title: "AI Quickscan",
    description: "Ontdek binnen 1–2 weken waar AI de meeste waarde kan opleveren voor jouw organisatie.",
    href: "/diensten/ai-quickscan",
    badge: "Meest gekozen",
  },
  {
    icon: UserPlus,
    title: "AI Expert Flex",
    description: "Huur tijdelijk AI Engineers, ML Engineers, Data Scientists, LLM-specialisten of AI Consultants in.",
    href: "/diensten/ai-expert-flex",
    badge: null,
  },
  {
    icon: Users,
    title: "AI Implementation Squad",
    description: "Een tijdelijk AI-team dat een concreet project ontwerpt, bouwt en implementeert.",
    href: "/diensten/implementation-squad",
    badge: null,
  },
  {
    icon: BarChart3,
    title: "AI Consultancy",
    description: "Van AI-roadmap en toolingselectie tot governance, data readiness en implementatieadvies.",
    href: "/diensten/consultancy",
    badge: null,
  },
  {
    icon: GraduationCap,
    title: "AI Training Academy",
    description: "Praktische AI-trainingen voor management, teams, sales, marketing, HR, finance en developers.",
    href: "/trainingen",
    badge: null,
  },
  {
    icon: RefreshCw,
    title: "AI Retainer",
    description: "Maandelijkse toegang tot AI-expertise voor doorlopende ondersteuning en optimalisatie.",
    href: "/diensten/retainer",
    badge: null,
  },
];

export function ServicesSection() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-widest text-[#2563EB] mb-4">
              Diensten
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight">
              Onze AI-diensten
            </h2>
          </div>
          <Link
            href="/diensten"
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#2563EB] hover:text-[#1D4ED8] transition-colors shrink-0"
          >
            Alle diensten bekijken <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group relative flex flex-col rounded-2xl border border-[#E2E8F0] bg-white p-7 hover:border-[#2563EB]/30 hover:shadow-md hover:shadow-blue-500/5 transition-all duration-200"
            >
              {s.badge && (
                <span className="absolute top-5 right-5 rounded-full bg-[#2563EB]/10 px-3 py-1 text-[11px] font-semibold text-[#2563EB]">
                  {s.badge}
                </span>
              )}
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] group-hover:border-[#2563EB]/20 group-hover:bg-[#2563EB]/6 transition-colors">
                <s.icon className="h-5 w-5 text-[#475569] group-hover:text-[#2563EB] transition-colors" strokeWidth={1.8} />
              </div>
              <h3 className="text-[15px] font-semibold text-[#0F172A] mb-2.5">{s.title}</h3>
              <p className="text-[14px] leading-relaxed text-[#64748B] flex-1">{s.description}</p>
              <div className="mt-5 flex items-center gap-1 text-[13px] font-medium text-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity">
                Meer informatie <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
