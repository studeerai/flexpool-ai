import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, Clock, MapPin, Building2, User, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Flexpool.ai",
  description: "Neem contact op met Flexpool.ai. We reageren binnen 24 uur op werkdagen.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contact"
        title="Hoe kunnen we"
        titleAccent="je helpen?"
        description="We reageren binnen 24 uur op werkdagen."
        size="sm"
      />

      {/* Two routes */}
      <section className="bg-[#050A14] border-b border-white/8">
        <div className="mx-auto max-w-[1200px] px-6 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="#formulier"
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4 hover:border-[#2563EB]/40 hover:bg-white/8 transition-all group"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#2563EB]/30 bg-[#2563EB]/10">
                <Building2 className="h-4 w-4 text-[#2563EB]" strokeWidth={1.8} />
              </div>
              <div className="flex-1">
                <p className="text-[14px] font-semibold text-white">Ik zoek AI-expertise</p>
                <p className="text-[12px] text-white/45">Voor bedrijven die AI willen implementeren</p>
              </div>
              <ArrowRight className="h-4 w-4 text-white/30 group-hover:text-[#2563EB] transition-colors" />
            </Link>
            <Link
              href="/voor-specialisten#aanmelden"
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4 hover:border-white/20 hover:bg-white/8 transition-all group"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/8">
                <User className="h-4 w-4 text-white/60" strokeWidth={1.8} />
              </div>
              <div className="flex-1">
                <p className="text-[14px] font-semibold text-white/80">Ik ben AI-specialist</p>
                <p className="text-[12px] text-white/40">Aanmelden voor de Flexpool</p>
              </div>
              <ArrowRight className="h-4 w-4 text-white/30 group-hover:text-white/60 transition-colors" />
            </Link>
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section id="formulier" className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-16">
            {/* Contact info */}
            <div>
              <h2 className="text-xl font-bold text-[#0F172A] mb-8">Contactinformatie</h2>
              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white">
                    <Mail className="h-4 w-4 text-[#2563EB]" strokeWidth={1.8} />
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
                    <Clock className="h-4 w-4 text-[#2563EB]" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-[#0F172A] mb-0.5">Reactietijd</p>
                    <p className="text-[14px] text-[#475569]">Binnen 24 uur op werkdagen</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white">
                    <MapPin className="h-4 w-4 text-[#2563EB]" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-[#0F172A] mb-0.5">Werkgebied</p>
                    <p className="text-[14px] text-[#475569]">Nederland — remote en on-site</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6">
                <p className="text-[14px] font-semibold text-[#0F172A] mb-2">Direct een AI Quickscan aanvragen?</p>
                <p className="text-[14px] text-[#64748B] mb-4">Gebruik het specifieke formulier voor een snellere verwerking.</p>
                <Link href="/diensten/ai-quickscan#aanvragen" className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#2563EB] hover:text-[#1D4ED8] transition-colors">
                  Naar het Quickscan-formulier <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-8">
              <h2 className="text-xl font-bold text-[#0F172A] mb-2">Stuur een bericht</h2>
              <p className="text-[14px] text-[#64748B] mb-7">Voor vragen over diensten, samenwerkingen of andere onderwerpen.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
