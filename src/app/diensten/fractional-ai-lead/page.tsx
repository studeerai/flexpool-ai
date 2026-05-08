import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Fractional AI Lead — Parttime AI-directeur voor uw organisatie",
  description: "Ervaren AI-leider parttime beschikbaar als strategisch aanspreekpunt en AI-directeur — zonder de kosten van een fulltime hire.",
};

const tasks = [
  "AI-strategie en prioriteiten bepalen",
  "Tooling- en vendorselectie begeleiden",
  "Intern team coachen en begeleiden",
  "Rapporteren aan MT en board",
  "AI-roadmap opstellen en bewaken",
  "Data governance en kwaliteitsborging",
  "EU AI Act readiness bewaken",
  "AI-gebruik en ROI rapporteren",
];

const forWho = [
  { title: "Scale-ups", desc: "AI serieus nemen zonder fulltime CTO te betalen." },
  { title: "MKB+ bedrijven", desc: "Een ervaren AI-leider die richting geeft aan het AI-programma." },
  { title: "Corporate teams", desc: "Tijdelijke dekking bij vertrek van een AI Lead of CDO." },
  { title: "Boards & MT", desc: "Onafhankelijk strategisch aanspreekpunt voor AI-beslissingen." },
];

export default function FractionalAILeadPage() {
  return (
    <>
      <PageHero
        badge="Fractional AI Lead"
        title="Strategische AI-leiding,"
        titleAccent="zonder fulltime salaris."
        description="Een ervaren AI Lead die parttime beschikbaar is als strategisch aanspreekpunt, teamcoach en AI-directeur voor uw organisatie."
        cta={{ label: "Bespreek de mogelijkheden", href: "/contact" }}
      />

      <div className="bg-[#050A14] border-b border-white/8">
        <div className="mx-auto max-w-[1200px] px-6 py-5">
          <div className="flex flex-wrap gap-x-10 gap-y-2">
            {["2–4 dagen per maand", "€3.500–€8.000/maand", "3–12 maanden inzet", "Direct beschikbaar"].map((t) => (
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-widest text-[#2563EB] mb-3">Taken</p>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-8">Wat doet een Fractional AI Lead?</h2>
              <ul className="space-y-3">
                {tasks.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#2563EB] shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-[15px] text-[#475569]">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-widest text-[#2563EB] mb-3">Voor wie</p>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-8">Is dit voor jouw organisatie?</h2>
              <div className="space-y-4">
                {forWho.map((f) => (
                  <div key={f.title} className="rounded-xl border border-[#E2E8F0] bg-white p-5">
                    <p className="text-[14px] font-semibold text-[#0F172A] mb-1">{f.title}</p>
                    <p className="text-[14px] text-[#64748B]">{f.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border border-[#E2E8F0] bg-white p-6">
                <p className="text-[13px] font-semibold uppercase tracking-widest text-[#94A3B8] mb-3">Investering</p>
                <p className="text-[15px] text-[#475569] leading-relaxed">
                  <strong className="text-[#0F172A]">€3.500–€8.000 per maand</strong> voor 2–4 dagen inzet. Minimale commitment van 3 maanden. Op maat te bespreken.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-8">
            <div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-1">Past een Fractional AI Lead bij jouw organisatie?</h3>
              <p className="text-[15px] text-[#64748B]">Plan een kennismakingsgesprek en bespreek de mogelijkheden.</p>
            </div>
            <Link href="/contact" className="btn-primary text-[14px] px-6 py-3 shrink-0">
              Plan een gesprek <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
