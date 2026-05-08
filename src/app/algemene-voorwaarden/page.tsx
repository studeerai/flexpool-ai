import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden — Flexpool.ai",
  description: "Algemene voorwaarden van Flexpool.ai voor dienstverlening op het gebied van AI-staffing, implementatie en consultancy.",
};

const sections = [
  { title: "1. Definities", content: "Flexpool.ai: de handelsnaam van de onderneming die AI-staffing, implementatie en consultancydiensten verleent. Opdrachtgever: de organisatie of persoon die een dienst afneemt. Specialist: de AI-professional die via Flexpool.ai wordt ingezet. Opdracht: de overeengekomen dienstverlening." },
  { title: "2. Toepasselijkheid", content: "Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten van Flexpool.ai. Afwijkende voorwaarden zijn alleen geldig indien schriftelijk overeengekomen." },
  { title: "3. Aanbiedingen en offertes", content: "Alle offertes zijn vrijblijvend tenzij anders vermeld. Een overeenkomst komt tot stand door schriftelijke bevestiging van beide partijen. Flexpool.ai behoudt zich het recht voor om een opdracht te weigeren." },
  { title: "4. Uitvoering van diensten", content: "Flexpool.ai spant zich in om diensten naar beste inzicht en vermogen uit te voeren. Flexpool.ai heeft een inspanningsverplichting, geen resultaatsverplichting, tenzij uitdrukkelijk anders overeengekomen. Bij staffingdiensten is de specialist zelfstandig professional en geen werknemer van Flexpool.ai." },
  { title: "5. Tarieven en betaling", content: "Tarieven zijn exclusief BTW tenzij anders vermeld. Facturen dienen binnen 30 dagen na factuurdatum te worden betaald. Bij te late betaling is Flexpool.ai gerechtigd wettelijke rente en incassokosten in rekening te brengen. Bij projectopdrachten geldt een aanbetaling van 30% bij aanvang." },
  { title: "6. Geheimhouding", content: "Beide partijen zijn verplicht tot geheimhouding van vertrouwelijke informatie. Een NDA kan op verzoek worden opgesteld. De geheimhoudingsplicht geldt voor onbepaalde tijd, ook na beëindiging van de opdracht." },
  { title: "7. Intellectueel eigendom", content: "Tenzij anders overeengekomen, gaan intellectuele eigendomsrechten van specifiek voor de opdrachtgever ontwikkelde werken over op de opdrachtgever na volledige betaling. Generieke methodieken, frameworks en tooling blijven eigendom van Flexpool.ai of de betreffende specialist." },
  { title: "8. Aansprakelijkheid", content: "De aansprakelijkheid van Flexpool.ai is beperkt tot het bedrag dat in het kader van de betreffende opdracht is gefactureerd, met een maximum van €50.000 per gebeurtenis. Aansprakelijkheid voor indirecte schade, gevolgschade of gederfde winst is uitgesloten." },
  { title: "9. Toepasselijk recht", content: "Op alle overeenkomsten is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement waar Flexpool.ai is gevestigd." },
  { title: "10. Wijziging voorwaarden", content: "Flexpool.ai behoudt zich het recht voor deze voorwaarden te wijzigen. Wijzigingen worden minimaal 30 dagen van tevoren aangekondigd. Bij voortgezette opdrachten gelden de gewijzigde voorwaarden automatisch." },
];

export default function AlgemeneVoorwaardenPage() {
  return (
    <>
      <PageHero
        badge="Juridisch"
        title="Algemene Voorwaarden"
        description="Algemene voorwaarden van Flexpool.ai voor dienstverlening op het gebied van AI-staffing, implementatie en consultancy."
        size="sm"
      />
      <section className="bg-[#F8FAFC] py-20">
        <div className="mx-auto max-w-[800px] px-6">
          <p className="text-[14px] text-[#64748B] mb-8">Versie 1.0 — Gepubliceerd mei 2026</p>
          <div className="space-y-4">
            {sections.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#E2E8F0] bg-white p-7">
                <h2 className="text-[16px] font-bold text-[#0F172A] mb-3">{s.title}</h2>
                <p className="text-[14px] text-[#475569] leading-relaxed">{s.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
