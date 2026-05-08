"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqs = [
  {
    q: "Wat doet Flexpool.ai precies?",
    a: "Flexpool.ai koppelt bedrijven aan tijdelijke AI-specialisten, consultants en implementatieteams. We helpen organisaties van AI-idee naar werkende implementatie — via een gestructureerde Quickscan, expertmatch of een volledig projectteam.",
  },
  {
    q: "Is Flexpool.ai een recruitmentbureau?",
    a: "Nee. Wij plaatsen geen vaste medewerkers en sturen geen cv-stacks. We leveren resultaatgerichte AI-expertise op basis van een concrete vraag of project, inclusief projectbegeleiding en kwaliteitsborging.",
  },
  {
    q: "Voor welke bedrijven is Flexpool.ai geschikt?",
    a: "Flexpool.ai richt zich op MKB+ en mid-market organisaties (50–2.000 medewerkers) die AI serieus willen toepassen maar geen intern AI-team hebben. We werken ook samen met corporate innovation teams en IT-consultancies.",
  },
  {
    q: "Kunnen jullie ook een volledig AI-project uitvoeren?",
    a: "Ja. Via de AI Implementation Squad leveren we een compleet tijdelijk projectteam dat een concreet AI-project ontwerpt, bouwt en implementeert — inclusief documentatie en kennisoverdracht.",
  },
  {
    q: "Leveren jullie ook trainingen?",
    a: "Ja. De AI Training Academy biedt praktische trainingen voor management, teams, developers en operations. Van ChatGPT-adoptie tot hands-on workshops voor AI-automatisering.",
  },
  {
    q: "Kunnen AI-specialisten zich aanmelden?",
    a: "Ja. AI Engineers, Data Scientists, LLM-specialisten en andere AI-professionals kunnen zich aanmelden via de pagina 'Voor AI-specialisten'. Na een intake en technische beoordeling word je toegevoegd aan de pool.",
  },
  {
    q: "Hoe snel kunnen we starten?",
    a: "Een AI Quickscan is doorgaans binnen 1–2 weken afgerond. Een expertmatch voor een specifieke rol gaat gemiddeld snel. De startdatum van een project is afhankelijk van scope en beschikbaarheid, maar we streven altijd naar een snelle start.",
  },
];

export function FAQSection() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a,
      },
    })),
  };

  return (
    <section className="bg-white py-24 border-t border-[#E2E8F0]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid lg:grid-cols-[300px_1fr] gap-16">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-widest text-[#2563EB] mb-4">
              FAQ
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] leading-tight mb-4">
              Veelgestelde vragen
            </h2>
            <p className="text-[15px] text-[#64748B] leading-relaxed">
              Staat jouw vraag er niet bij? Neem gerust contact op.
            </p>
          </div>

          <Accordion multiple={false} className="space-y-2.5">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={i}
                className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-6 data-[open]:bg-white data-[open]:border-[#2563EB]/20 transition-colors"
              >
                <AccordionTrigger className="py-5 text-[15px] font-semibold text-[#0F172A] text-left hover:no-underline [&>svg]:text-[#2563EB]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[14px] leading-relaxed text-[#475569]">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
