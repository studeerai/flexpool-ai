import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Consultancy — Strategie, roadmap en governance",
  description: "Strategisch AI-advies: roadmap, use-case selectie, toolingkeuze, data readiness, governance en EU AI Act readiness.",
};

const areas = [
  { title: "AI-strategie en roadmap", desc: "Van AI-visie naar een prioriteitsgedreven roadmap met concrete mijlpalen en verantwoordelijkheden." },
  { title: "Use-case discovery", desc: "Gestructureerde verkenning van AI-toepassingen die aansluiten bij jouw bedrijfsdoelen en databeschikbaarheid." },
  { title: "Data readiness assessment", desc: "Analyse van de kwaliteit, beschikbaarheid en governance van data als fundament voor AI." },
  { title: "Tooling- en vendorselectie", desc: "Objectief advies over AI-platforms, modellen, cloud providers en tools — afgestemd op jouw context." },
  { title: "AI governance framework", desc: "Beleid, rollen en processen voor verantwoord AI-gebruik binnen jouw organisatie." },
  { title: "EU AI Act readiness", desc: "Analyse van risicoclassificatie, verplichtingen en compliancestappen onder de EU AI Act." },
];

export default function ConsultancyPage() {
  return (
    <>
      <PageHero
        badge="AI Consultancy"
        title="Strategisch AI-advies"
        titleAccent="met concrete uitkomsten."
        description="Van AI-roadmap en use-case selectie tot governance en EU AI Act readiness. Advies dat aansluit bij jouw organisatie en direct toepasbaar is."
        cta={{ label: "Plan een strategiegesprek", href: "/contact" }}
      />

      <div className="bg-[#050A14] border-b border-white/8">
        <div className="mx-auto max-w-[1200px] px-6 py-5">
          <div className="flex flex-wrap gap-x-10 gap-y-2">
            {["2–8 weken per traject", "€150–€200/uur", "Geen open-ended adviesdocumenten", "Concrete deliverables"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6D5EF3]" />
                <span className="text-[13px] text-white/55">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-12">
            <p className="text-[13px] font-semibold uppercase tracking-widest text-[#2563EB] mb-3">Wat we aanpakken</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">Adviesgebieden</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {areas.map((a) => (
              <div key={a.title} className="rounded-2xl border border-[#E2E8F0] bg-white p-7 hover:border-[#2563EB]/25 hover:shadow-sm transition-all">
                <h3 className="text-[15px] font-semibold text-[#0F172A] mb-2.5">{a.title}</h3>
                <p className="text-[14px] text-[#64748B] leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-8">
            <div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-1">Klaar voor een strategiegesprek?</h3>
              <p className="text-[15px] text-[#64748B]">We bespreken jouw AI-uitdaging en welk traject het beste past.</p>
            </div>
            <Link href="/contact" className="btn-primary text-[14px] px-6 py-3 shrink-0">
              Plan een strategiegesprek <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
