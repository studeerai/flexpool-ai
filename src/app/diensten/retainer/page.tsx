import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Retainer — Doorlopende AI-expertise op abonnementsbasis",
  description: "Maandelijkse toegang tot AI-expertise voor doorlopende ondersteuning, optimalisatie en nieuwe AI-initiatieven.",
};

const included = [
  "Vaste uren AI-capaciteit per maand (40–160 uur)",
  "Toegang tot 1–3 AI-specialisten",
  "Maandelijkse prioriteiten-sessie",
  "Rapportage en voortgangsbespreking",
  "Flexibele inzet op meerdere projecten",
  "Doorlopende optimalisatie van bestaande systemen",
];

const tiers = [
  { name: "Starter", hours: "40 uur/maand", price: "v.a. €5.000/mnd", specs: "1 specialist · 1 project", best: false },
  { name: "Growth", hours: "80 uur/maand", price: "v.a. €9.500/mnd", specs: "1–2 specialisten · 2 projecten", best: true },
  { name: "Scale", hours: "160 uur/maand", price: "v.a. €18.000/mnd", specs: "2–3 specialisten · meerdere projecten", best: false },
];

export default function RetainerPage() {
  return (
    <>
      <PageHero
        badge="AI Retainer"
        title="Doorlopende AI-expertise,"
        titleAccent="altijd beschikbaar."
        description="Maandelijkse toegang tot AI-capaciteit zonder elke keer opnieuw in te kopen. Schaalbaar, flexibel en gericht op continue verbetering."
        cta={{ label: "Vraag een offerte aan", href: "/contact" }}
      />

      <div className="bg-[#050A14] border-b border-white/8">
        <div className="mx-auto max-w-[1200px] px-6 py-5">
          <div className="flex flex-wrap gap-x-10 gap-y-2">
            {["Minimaal 3 maanden", "v.a. €5.000/maand", "40–160 uur per maand", "Flexibele inzet"].map((t) => (
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
              <p className="text-[13px] font-semibold uppercase tracking-widest text-[#2563EB] mb-3">Inbegrepen</p>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-8">Wat zit er in een AI Retainer?</h2>
              <ul className="space-y-3">
                {included.map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#2563EB] shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-[15px] text-[#475569]">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-widest text-[#2563EB] mb-3">Abonnementen</p>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-8">Kies jouw pakket</h2>
              <div className="space-y-4">
                {tiers.map((t) => (
                  <div key={t.name} className={`rounded-2xl border p-6 ${t.best ? "border-[#2563EB]/40 bg-[#EEF2FF]" : "border-[#E2E8F0] bg-white"}`}>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="text-[15px] font-semibold text-[#0F172A]">{t.name}</p>
                        <p className="text-[13px] text-[#64748B]">{t.hours} · {t.specs}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[15px] font-bold text-[#0F172A]">{t.price}</p>
                        {t.best && <span className="text-[11px] font-semibold text-[#2563EB]">Meest gekozen</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[13px] text-[#94A3B8] mt-4">Alle pakketten zijn op maat aan te passen. Vraag een offerte op maat aan.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-8">
            <div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-1">Interesse in een AI Retainer?</h3>
              <p className="text-[15px] text-[#64748B]">We stellen een offerte op maat samen op basis van jouw situatie.</p>
            </div>
            <Link href="/contact" className="btn-primary text-[14px] px-6 py-3 shrink-0">
              Vraag een offerte aan <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
