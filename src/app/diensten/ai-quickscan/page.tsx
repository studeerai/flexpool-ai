import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { CheckCircle2, ArrowRight, Clock, Euro, Target } from "lucide-react";
import { QuickscanForm } from "@/components/forms/QuickscanForm";

export const metadata: Metadata = {
  title: "AI Quickscan — Ontdek waar AI waarde levert in jouw bedrijf",
  description:
    "In 1–2 weken bepalen we waar AI direct waarde levert in uw organisatie. Inclusief ROI-indicatie, concrete use cases en prioriteitsmatrix.",
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

export default function AIQuickscanPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary/5 to-background pt-16 pb-20 sm:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">Meest gekozen startpunt</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Ontdek waar AI waarde levert in uw organisatie — in 2 weken
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              De AI Quickscan geeft u een helder beeld van de meest waardevolle AI-kansen,
              inclusief ROI-indicatie en concrete aanbevelingen. Zonder verplichtingen.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-primary" />1–2 weken doorlooptijd</span>
              <span className="flex items-center gap-1.5"><Euro className="h-4 w-4 text-primary" />Gratis intake · €1.500–€3.500 volledig traject</span>
              <span className="flex items-center gap-1.5"><Target className="h-4 w-4 text-primary" />Concrete use cases met ROI</span>
            </div>
            <ButtonLink href="#aanvragen" size="lg" className="h-12 px-8 text-base">
              Plan een gratis intakegesprek <ArrowRight className="ml-2 h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Wat krijgt u?</h2>
              <ul className="space-y-3">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Voor wie is dit?</h2>
              <ul className="space-y-3 mb-8">
                {forWho.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-5 bg-muted/50 rounded-xl border border-border">
                <p className="font-semibold mb-1">Kosten</p>
                <p className="text-sm text-muted-foreground">
                  Het intakegesprek is <strong>altijd gratis</strong>. Het volledige traject kost{" "}
                  <strong>€1.500–€3.500</strong>, afhankelijk van bedrijfsgrootte. U betaalt niets totdat u akkoord gaat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Hoe werkt de AI Quickscan?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { n: "1", t: "Gratis intakegesprek", d: "30 minuten. We bespreken uw situatie en bepalen samen of de Quickscan zinvol is." },
              { n: "2", t: "Analyse & interviews", d: "We spreken met sleutelpersonen en analyseren processen, data en kansen. Doorlooptijd: 1–2 weken." },
              { n: "3", t: "Rapport & aanbevelingen", d: "U ontvangt een helder rapport met use cases, ROI-indicaties en een concreet advies voor de volgende stap." },
            ].map((s) => (
              <div key={s.n} className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg mx-auto mb-4">{s.n}</div>
                <h3 className="font-semibold mb-2">{s.t}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="aanvragen" className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Vraag een gratis intakegesprek aan</h2>
            <p className="text-muted-foreground">We nemen binnen 24 uur contact op om een tijd in te plannen.</p>
          </div>
          <QuickscanForm />
        </div>
      </section>
    </>
  );
}
