import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Flexpool.ai",
  description: "Neem contact op met Flexpool.ai. We reageren binnen 24 uur op werkdagen.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contact"
        title="We helpen je graag"
        titleAccent="verder."
        description="Heb je een vraag over onze diensten, wil je een Quickscan aanvragen of ben je AI-specialist die zich wil aanmelden? Stuur een bericht."
        size="sm"
      />

      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-16">
            {/* Contact info */}
            <div>
              <h2 className="text-xl font-bold text-[#0F172A] mb-8">Contactinformatie</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white">
                    <Mail className="h-4.5 w-4.5 text-[#2563EB]" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-[#0F172A] mb-0.5">E-mail</p>
                    <a href="mailto:info@flexpool.ai" className="text-[14px] text-[#475569] hover:text-[#2563EB] transition-colors">
                      info@flexpool.ai
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white">
                    <Clock className="h-4.5 w-4.5 text-[#2563EB]" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-[#0F172A] mb-0.5">Reactietijd</p>
                    <p className="text-[14px] text-[#475569]">Binnen 24 uur op werkdagen</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white">
                    <MapPin className="h-4.5 w-4.5 text-[#2563EB]" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-[#0F172A] mb-0.5">Werkgebied</p>
                    <p className="text-[14px] text-[#475569]">Nederland — remote en on-site</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-2xl border border-[#E2E8F0] bg-white p-6">
                <p className="text-[14px] font-semibold text-[#0F172A] mb-2">Direct een AI Quickscan aanvragen?</p>
                <p className="text-[14px] text-[#64748B] mb-4">Gebruik het specifieke aanvraagformulier voor een snellere verwerking.</p>
                <a href="/diensten/ai-quickscan#aanvragen" className="text-[14px] font-medium text-[#2563EB] hover:text-[#1D4ED8] transition-colors">
                  Naar het Quickscan-formulier →
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-8">
              <h2 className="text-xl font-bold text-[#0F172A] mb-6">Stuur een bericht</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
