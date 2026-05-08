import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — AI-inzichten en praktijkkennis",
  description: "Artikelen over AI-implementatie, use cases, tools en trends voor bedrijven die AI serieus willen toepassen.",
};

const comingSoon = [
  "Waar te beginnen met AI in jouw bedrijf",
  "Wat is een AI Quickscan en wat levert het op?",
  "De 5 meest waardevolle AI-use cases voor het MKB",
  "RAG-systemen uitgelegd: wanneer gebruik je ze?",
  "EU AI Act: wat betekent dit voor jouw bedrijf?",
  "LLM Engineer vs. Data Scientist: wanneer heb je wie nodig?",
  "Hoe beoordeel je AI-specialisten zonder technische achtergrond?",
  "Van ChatGPT-experimenten naar echte AI-implementatie",
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        badge="Blog"
        title="Praktijkkennis over"
        titleAccent="AI-implementatie."
        description="Artikelen, inzichten en praktische gidsen voor bedrijven die AI serieus willen toepassen — zonder hype, met focus op resultaat."
      />

      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-5 py-2 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] animate-pulse" />
              <span className="text-[13px] text-[#64748B]">Content wordt binnenkort gepubliceerd</span>
            </div>
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Artikelen in voorbereiding</h2>
            <p className="text-[15px] text-[#64748B]">De eerste artikelen worden binnenkort gepubliceerd. Onderwerpen die op de planning staan:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {comingSoon.map((title) => (
              <div key={title} className="rounded-xl border border-[#E2E8F0] bg-white p-5">
                <div className="mb-3 h-1 w-12 rounded-full bg-[#2563EB]/20" />
                <p className="text-[14px] font-medium text-[#0F172A] leading-snug">{title}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-[#E2E8F0] bg-white p-8 max-w-3xl mx-auto">
            <div>
              <h3 className="text-[16px] font-bold text-[#0F172A] mb-1">Ontvang nieuwe artikelen</h3>
              <p className="text-[14px] text-[#64748B]">Meld je aan voor onze nieuwsbrief en ontvang praktische AI-inzichten in je inbox.</p>
            </div>
            <Link href="/contact" className="btn-primary text-[14px] px-6 py-3 shrink-0">
              Houd me op de hoogte <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
