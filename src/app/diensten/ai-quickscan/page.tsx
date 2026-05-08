import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { QuickscanForm } from "@/components/forms/QuickscanForm";
import { CheckCircle2, Clock, Euro, Target, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Quickscan — Ontdek waar AI waarde levert",
  description: "In 1–2 weken bepalen we waar AI direct waarde levert in uw organisatie. Inclusief ROI-indicatie, concrete use cases en prioriteitsmatrix.",
};

const deliverables = [
  "Kickoff-gesprek met sleutelpersonen (45–90 min)",
  "Analyse van uw processen, data en teams",
  "AI-kansenrapport: 3–5 concrete use cases",
  "ROI-indicatie per use case",
  "Prioriteitsmatrix: impact vs. inspanning",
  "Aanbeveling voor beste vervolgstap",
];

const forWho = [
  "Directeuren en MT-leden die AI serieus willen nemen",
  "Innovation managers die AI willen verkennen",
  "Bedrijven met eerder vastgelopen AI-projecten",
  "Organisaties die een concreet startpunt zoeken",
];

const process = [
  { n: "1", title: "Gratis intakegesprek", desc: "30 minuten. We verkennen jouw situatie en bepalen of de Quickscan zinvol is." },
  { n: "2", title: "Analyse & interviews", desc: "Onze specialist spreekt met sleutelpersonen en analyseert processen en data. Doorlooptijd: 1–2 weken." },
  { n: "3", title: "Rapport & aanbevelingen", desc: "Helder rapport met use cases, ROI-indicaties en een concreet advies voor de volgende stap." },
];

export default function AIQuickscanPage() {
  return (
    <>
      <PageHero
        badge="AI Quickscan"
        title="Ontdek waar AI waarde levert"
        titleAccent="in 2 weken."
        description="De AI Quickscan geeft een helder beeld van de meest waardevolle AI-kansen voor jouw organisatie — inclusief ROI-indicatie en concrete aanbevelingen."
        cta={{ label: "Vraag een gratis intake aan", href: "#aanvragen" }}
      />

      {/* Stats bar */}
      <div className="bg-[#050A14] border-b border-white/8">
        <div className="mx-auto max-w-[1200px] px-6 py-5">
          <div className="flex flex-wrap gap-8">
            {[
              { icon: Clock, text: "1–2 weken doorlooptijd" },
              { icon: Euro, text: "Gratis intake · v.a. €1.500 volledig traject" },
              { icon: Target, text: "3–5 concrete use cases met ROI" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <item.icon className="h-4 w-4 text-[#6D5EF3]" strokeWidth={1.8} />
                <span className="text-[13px] text-white/60">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deliverables + for who */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-8">Wat krijgt u?</h2>
              <ul className="space-y-3.5">
                {deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#2563EB] shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-[15px] text-[#475569]">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-8">Voor wie is dit?</h2>
              <ul className="space-y-3.5 mb-8">
                {forWho.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#2563EB] shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-[15px] text-[#475569]">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6">
                <p className="text-[13px] font-semibold uppercase tracking-widest text-[#94A3B8] mb-3">Investering</p>
                <p className="text-[15px] text-[#475569] leading-relaxed">
                  Het intakegesprek is <strong className="text-[#0F172A]">altijd gratis</strong>. Het volledige Quickscan-traject kost{" "}
                  <strong className="text-[#0F172A]">€1.500–€3.500</strong>, afhankelijk van bedrijfsgrootte en scope. U beslist daarna of u verdergaat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20 border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-12 text-center">Hoe werkt het?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {process.map((s, i) => (
              <div key={s.n} className="relative text-center">
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-[calc(50%+2rem)] right-[-calc(50%-2rem)] h-px bg-[#E2E8F0]" />
                )}
                <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#2563EB]/30 bg-[#F8FAFC] text-[14px] font-bold text-[#2563EB] relative z-10">
                  {s.n}
                </div>
                <h3 className="text-[15px] font-semibold text-[#0F172A] mb-2">{s.title}</h3>
                <p className="text-[14px] text-[#64748B] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="aanvragen" className="bg-[#F8FAFC] py-24 border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-[640px] px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3">Vraag een gratis intakegesprek aan</h2>
            <p className="text-[15px] text-[#64748B]">We nemen binnen 24 uur contact op om een tijd in te plannen.</p>
          </div>
          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-8">
            <QuickscanForm />
          </div>
          <div className="mt-8 text-center">
            <p className="text-[14px] text-[#94A3B8] mb-2">Liever direct contact?</p>
            <Link href="/contact" className="text-[14px] font-medium text-[#2563EB] hover:text-[#1D4ED8] transition-colors inline-flex items-center gap-1">
              Stuur een bericht <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
