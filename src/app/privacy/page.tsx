import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Privacybeleid — Flexpool.ai",
  description: "Privacybeleid van Flexpool.ai. Hoe wij omgaan met persoonsgegevens conform de AVG/GDPR.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        badge="Juridisch"
        title="Privacybeleid"
        description="Flexpool.ai respecteert jouw privacy en verwerkt persoonsgegevens conform de Algemene Verordening Gegevensbescherming (AVG/GDPR)."
        size="sm"
      />
      <section className="bg-[#F8FAFC] py-20">
        <div className="mx-auto max-w-[800px] px-6">
          <div className="prose prose-slate max-w-none">
            <p className="text-[14px] text-[#64748B] mb-8">Laatste update: mei 2026</p>

            {[
              { title: "1. Wie zijn wij?", content: "Flexpool.ai is een dienstverlener op het gebied van AI-staffing, implementatie en consultancy, gevestigd in Nederland en ingeschreven bij de Kamer van Koophandel. Contactgegevens: info@flexpool.ai" },
              { title: "2. Welke gegevens verwerken wij?", content: "Wij verwerken de volgende categorieën persoonsgegevens: contactgegevens (naam, e-mailadres, telefoonnummer), bedrijfsgegevens (naam, sector, functie), projectinformatie die u met ons deelt via formulieren of gesprekken, en voor AI-specialisten: CV-gegevens, LinkedIn-profiel, beschikbaarheid en tarieven." },
              { title: "3. Waarvoor gebruiken wij uw gegevens?", content: "Wij verwerken persoonsgegevens voor: het afhandelen van aanvragen en contactverzoeken, het uitvoeren van AI Quickscans en matchingprocessen, communicatie over onze diensten, facturatie en contractbeheer, en het verbeteren van onze dienstverlening. Wij gebruiken uw gegevens niet voor geautomatiseerde besluitvorming of profilering." },
              { title: "4. Bewaartermijnen", content: "Wij bewaren persoonsgegevens niet langer dan noodzakelijk. Contactformuliergegevens worden maximaal 2 jaar bewaard. Contractgegevens worden conform fiscale bewaarplicht 7 jaar bewaard. Talent-aanmeldingsgegevens worden maximaal 3 jaar bewaard of tot verzoek tot verwijdering." },
              { title: "5. Uw rechten", content: "U heeft het recht op inzage in uw persoonsgegevens, correctie van onjuiste gegevens, verwijdering van uw gegevens, beperking van verwerking, dataportabiliteit, en bezwaar tegen verwerking. Verzoeken kunt u richten aan info@flexpool.ai. Wij reageren binnen 30 dagen." },
              { title: "6. Beveiliging", content: "Wij nemen passende technische en organisatorische maatregelen om persoonsgegevens te beschermen tegen verlies, misbruik en ongeautoriseerde toegang. Onze systemen zijn gehost bij Supabase (EU-regio) en Vercel met standaard beveiligingsmaatregelen." },
              { title: "7. Cookies", content: "Onze website maakt gebruik van functionele cookies voor het goed functioneren van de website en analytische cookies (via Vercel Analytics en PostHog) voor het verbeteren van de gebruikservaring. Er worden geen marketing- of trackinkcookies van derden geplaatst." },
              { title: "8. Klachten", content: "Indien u een klacht heeft over de verwerking van uw persoonsgegevens, kunt u contact opnemen via info@flexpool.ai. U heeft ook het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens (autoriteitpersoonsgegevens.nl)." },
            ].map((section) => (
              <div key={section.title} className="mb-8 rounded-2xl border border-[#E2E8F0] bg-white p-7">
                <h2 className="text-[16px] font-bold text-[#0F172A] mb-3">{section.title}</h2>
                <p className="text-[14px] text-[#475569] leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
