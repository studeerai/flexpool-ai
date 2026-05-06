import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import { TalentForm } from "@/components/forms/TalentForm";

export const metadata: Metadata = {
  title: "Voor AI-specialisten — Sluit je aan bij de Flexpool",
  description: "Werk aan de beste AI-projecten in Nederland op jouw voorwaarden. Interessante opdrachten, eerlijke tarieven, wij regelen de acquisitie.",
};

const benefits = [
  "Gevarieerde en uitdagende AI-projecten bij MKB+ en enterprise",
  "Wij regelen acquisitie — jij focust op het werk",
  "Eerlijke tarieven, transparant beleid",
  "Snelle matching zonder bureaucratie",
  "Community van gelijkgestemde AI-professionals",
  "Betaling binnen 14 dagen na facturatie",
];

const roles = [
  "AI Consultant", "ML Engineer", "Data Scientist", "LLM Engineer",
  "RAG Specialist", "MLOps Engineer", "Data Engineer", "AI Product Owner",
  "Prompt Engineer", "Automation Specialist", "AI Trainer", "Responsible AI Consultant",
];

export default function VoorSpecialistenPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary/5 to-background pt-16 pb-20 sm:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">Voor AI-professionals</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Werk aan de beste AI-projecten. Op jouw voorwaarden.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sluit je aan bij de Flexpool — een community van top AI-engineers, data scientists
              en consultants die werken aan impactvolle projecten bij Nederlandse bedrijven.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Waarom Flexpool.ai?</h2>
              <ul className="space-y-3 mb-10">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">{b}</span>
                  </li>
                ))}
              </ul>
              <h2 className="text-2xl font-bold mb-4" id="rollen">Welke rollen zoeken we?</h2>
              <div className="flex flex-wrap gap-2">
                {roles.map((r) => (
                  <Badge key={r} variant="secondary" className="text-xs px-3 py-1">{r}</Badge>
                ))}
              </div>
            </div>
            <div id="proces">
              <h2 className="text-2xl font-bold mb-6">Hoe werkt het aanmeldproces?</h2>
              <div className="space-y-6">
                {[
                  { n: "1", t: "Aanmelding", d: "Vul het formulier in. We bekijken je profiel binnen 5 werkdagen." },
                  { n: "2", t: "Intake-gesprek", d: "Een kort gesprek (20–30 min) over je achtergrond, expertise en voorkeuren." },
                  { n: "3", t: "Technische beoordeling", d: "Korte case of technische vraagstelling om je niveau te bevestigen." },
                  { n: "4", t: "Welkom in de pool", d: "Contract getekend, profiel aangemaakt. We matchen je zodra er een passende opdracht is." },
                ].map((s) => (
                  <div key={s.n} className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm shrink-0">{s.n}</div>
                    <div>
                      <p className="font-semibold text-sm">{s.t}</p>
                      <p className="text-muted-foreground text-sm">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Meld je aan als specialist</h2>
            <p className="text-muted-foreground">We beoordelen je aanmelding binnen 5 werkdagen.</p>
          </div>
          <TalentForm />
        </div>
      </section>
    </>
  );
}
