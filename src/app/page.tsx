import { ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ArrowRight, CheckCircle2, XCircle, Search, Users, Rocket,
  Target, GraduationCap, RefreshCw, ChevronRight, Zap,
} from "lucide-react";
import Link from "next/link";

const services = [
  { icon: Search, title: "AI Quickscan", description: "Weet in 2 weken waar AI de meeste waarde levert in jouw organisatie — inclusief ROI-indicatie.", href: "/diensten/ai-quickscan", badge: "Meest gekozen" },
  { icon: Users, title: "AI Expert Flex", description: "Tijdelijke inzet van een AI Engineer, Data Scientist of LLM Specialist. Match binnen 48 uur.", href: "/diensten/ai-expert-flex", badge: null },
  { icon: Rocket, title: "AI Implementation Squad", description: "Een projectteam dat jouw AI-use case van A tot Z bouwt en oplevert. Concrete deliverables.", href: "/diensten/implementation-squad", badge: null },
  { icon: Target, title: "Fractional AI Lead", description: "Parttime AI-directeur voor strategie, roadmap en begeleiding. Zonder fulltime salaris.", href: "/diensten/fractional-ai-lead", badge: null },
  { icon: GraduationCap, title: "AI Training Academy", description: "Trainingen voor teams, managers en developers. Van ChatGPT basics tot LLM-implementaties.", href: "/trainingen", badge: null },
  { icon: RefreshCw, title: "AI Retainer", description: "Doorlopende AI-capaciteit op abonnementsbasis. Altijd beschikbare expertise, zonder zorgen.", href: "/diensten/retainer", badge: null },
];

const problems = [
  "Geen intern AI-team om het echt uit te voeren",
  "Externe bureaus zijn te groot, te duur of te vaag",
  "Freelancers zijn moeilijk te vinden en te beoordelen",
  "Projecten blijven steken in pilots en rapporten",
  "Onduidelijke ROI en geen concreet eindresultaat",
];

const usps = [
  { title: "Match binnen 48 uur", description: "Specialist start binnen 1 week" },
  { title: "Bewezen specialisten", description: "Gescreend op techniek én praktijkervaring" },
  { title: "Concrete deliverables", description: "Werkende AI, geen rapporten" },
  { title: "Flexibel op- en afschalen", description: "Van 1 week tot 12 maanden" },
  { title: "Transparante tarieven", description: "Geen verborgen kosten" },
  { title: "Van idee tot implementatie", description: "Wij begeleiden het hele traject" },
];

const steps = [
  { step: "01", title: "Vertel ons uw uitdaging", description: "Plan een gratis intakegesprek. We stellen de juiste vragen en begrijpen wat uw organisatie nodig heeft." },
  { step: "02", title: "Wij matchen de juiste expertise", description: "Op basis van uw vraagstuk selecteren we de best passende specialist of het meest effectieve team." },
  { step: "03", title: "Concrete resultaten, snel geleverd", description: "Uw specialist start binnen enkele dagen. Resultaten binnen weken, niet maanden." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm font-medium">
            <Zap className="h-3.5 w-3.5 mr-1.5 text-primary" />
            AI-staffing & implementatie voor Nederland
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 max-w-4xl mx-auto leading-tight">
            De flexibele AI-afdeling voor bedrijven die{" "}
            <span className="text-primary">AI willen implementeren</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Van AI-ambitie naar werkende implementatie — met tijdelijke AI-specialisten, projectteams en strategisch advies op maat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink href="/diensten/ai-quickscan" size="lg" className="text-base px-8 h-12">
              Gratis AI Quickscan aanvragen <ArrowRight className="ml-2 h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/diensten" size="lg" variant="outline" className="text-base px-8 h-12">
              Bekijk onze diensten
            </ButtonLink>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Gratis intakegesprek · Geen verplichtingen · Match binnen 48 uur
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Waarom AI-implementatie bij de meeste bedrijven mislukt</h2>
            <p className="text-muted-foreground text-lg">Herken jij dit?</p>
          </div>
          <div className="max-w-xl mx-auto space-y-3">
            {problems.map((p) => (
              <div key={p} className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border">
                <XCircle className="h-5 w-5 text-destructive mt-0.5 shrink-0" />
                <p className="text-sm sm:text-base">{p}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-muted-foreground font-medium">
            AI werkt — maar alleen als je de juiste mensen hebt die het daadwerkelijk bouwen.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Wat kunnen wij voor u doen?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Van een snelle Quickscan tot een volledig AI-implementatieteam.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Card key={s.title} className="relative hover:shadow-md transition-shadow">
                {s.badge && (
                  <div className="absolute -top-3 left-4">
                    <Badge className="bg-primary text-primary-foreground text-xs">{s.badge}</Badge>
                  </div>
                )}
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-3">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{s.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.description}</p>
                  <Link href={s.href} className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                    Meer informatie <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Hoe werkt het?</h2>
            <p className="text-muted-foreground text-lg">Drie stappen van uitdaging naar resultaat.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((s, i) => (
              <div key={s.step} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px bg-border" />
                )}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg mx-auto mb-4">{s.step}</div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Waarom kiezen bedrijven voor Flexpool.ai?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {usps.map((u) => (
              <div key={u.title} className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">{u.title}</p>
                  <p className="text-muted-foreground text-sm">{u.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Weet nog niet precies wat u nodig heeft?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Start met een gratis AI Quickscan. In één gesprek identificeren we de 3–5 grootste AI-kansen voor uw organisatie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink href="/diensten/ai-quickscan" size="lg" variant="secondary" className="text-base px-8 h-12">
              Plan een gratis intakegesprek <ArrowRight className="ml-2 h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/contact" size="lg" variant="outline" className="text-base px-8 h-12 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Neem contact op
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Specialists */}
      <section className="py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-1">Ben jij een AI-specialist?</h3>
              <p className="text-muted-foreground">Sluit je aan bij de Flexpool. Interessante projecten, eerlijke tarieven, wij regelen de acquisitie.</p>
            </div>
            <ButtonLink href="/voor-specialisten" variant="outline" className="shrink-0">
              Meld je aan <ArrowRight className="ml-2 h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
