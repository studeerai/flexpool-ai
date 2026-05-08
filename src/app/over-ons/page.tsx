import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Target, Zap, ShieldCheck, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Over ons — Flexpool.ai",
  description: "Flexpool.ai helpt bedrijven van AI-ambitie naar werkende implementatie. Leer meer over onze missie, aanpak en waarden.",
};

const values = [
  { icon: Target, title: "Resultaatgericht", desc: "Geen rapporten als eindproduct. We meten succes aan werkende implementaties, niet aan uren of documenten." },
  { icon: Zap, title: "Snelheid zonder concessies", desc: "Snel schakelen is onze kracht. Van eerste contact naar operationele specialist in dagen, niet maanden." },
  { icon: ShieldCheck, title: "Kwaliteit boven kwantiteit", desc: "Liever een selecte pool van bewezen specialisten dan een grote database vol ongetoetste profielen." },
  { icon: Users, title: "Eerlijk voor beide kanten", desc: "Transparante tarieven voor klanten, eerlijke vergoedingen voor specialisten. Geen verdienmodel ten koste van één van beiden." },
];

export default function OverOnsPage() {
  return (
    <>
      <PageHero
        badge="Over ons"
        title="Flexpool.ai — de flexibele AI-afdeling"
        titleAccent="voor bedrijven."
        description="We zijn opgericht vanuit de overtuiging dat elk bedrijf toegang verdient tot AI-expertise — ongeacht de omvang van het interne team."
      />

      {/* Mission */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-widest text-[#2563EB] mb-4">Missie</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
                Van AI-ambitie naar werkende implementatie.
              </h2>
              <p className="text-[16px] text-[#475569] leading-relaxed mb-5">
                Veel organisaties zien de kansen van AI, maar lopen vast op gebrek aan expertise, capaciteit of richting. Flexpool.ai lost dat op: wij leveren tijdelijke AI-specialisten en projectteams die direct aan de slag gaan.
              </p>
              <p className="text-[16px] text-[#475569] leading-relaxed">
                Niet als recruitmentbureau dat CV's stuurt. Niet als consultancy die rapporten schrijft. Maar als een echte AI-afdeling die jouw organisatie tijdelijk of structureel versterkt.
              </p>
            </div>
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-widest text-[#2563EB] mb-4">Visie</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
                Elk bedrijf heeft recht op AI-expertise.
              </h2>
              <p className="text-[16px] text-[#475569] leading-relaxed mb-5">
                AI is geen luxe meer, maar een strategische noodzaak. Toch is de kloof tussen AI-ambitie en AI-realiteit bij de meeste MKB+ bedrijven nog enorm groot.
              </p>
              <p className="text-[16px] text-[#475569] leading-relaxed">
                Flexpool.ai overbrugt die kloof. Door de beste AI-professionals flexibel inzetbaar te maken voor de organisaties die ze het hardst nodig hebben.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="text-[13px] font-semibold uppercase tracking-widest text-[#2563EB] mb-3">Onze waarden</p>
          <h2 className="text-2xl font-bold text-[#0F172A] mb-10">Waar we voor staan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-7">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#2563EB]/20 bg-[#2563EB]/6">
                  <v.icon className="h-5 w-5 text-[#2563EB]" strokeWidth={1.8} />
                </div>
                <h3 className="text-[15px] font-semibold text-[#0F172A] mb-2">{v.title}</h3>
                <p className="text-[14px] text-[#64748B] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we are not */}
      <section className="bg-[#F8FAFC] py-20 border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="max-w-3xl">
            <p className="text-[13px] font-semibold uppercase tracking-widest text-[#2563EB] mb-3">Positionering</p>
            <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Wat Flexpool.ai niet is</h2>
            <div className="space-y-4">
              {[
                { not: "Geen recruitmentbureau", but: "We plaatsen geen vaste medewerkers en sturen geen cv-stacks. We leveren resultaat." },
                { not: "Geen generalist", but: "We zijn uitsluitend gefocust op AI, ML en data — niet op brede IT-staffing of generieke consultancy." },
                { not: "Geen adviesmachine", but: "Dikke rapporten als eindproduct zijn niet ons ding. Werkende implementaties wél." },
              ].map((i) => (
                <div key={i.not} className="rounded-2xl border border-[#E2E8F0] bg-white p-6 flex gap-5">
                  <div className="shrink-0 w-1 rounded-full bg-[#E2E8F0]" />
                  <div>
                    <p className="text-[15px] font-semibold text-[#0F172A] mb-1">{i.not}</p>
                    <p className="text-[14px] text-[#64748B]">{i.but}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
