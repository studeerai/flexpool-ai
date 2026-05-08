import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative bg-[#081120] py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#2563EB]/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] rounded-full bg-[#7C3AED]/8 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-[800px] px-6 text-center">
        <p className="text-[13px] font-semibold uppercase tracking-widest text-[#6D5EF3] mb-5">
          Aan de slag
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight text-white mb-6">
          Waar liggen jouw beste AI-kansen?
        </h2>
        <p className="text-[17px] text-white/60 leading-relaxed mb-10 max-w-[560px] mx-auto">
          Plan een AI Quickscan en ontdek welke processen, teams of klantinteracties met AI verbeterd kunnen worden.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/diensten/ai-quickscan"
            className="btn-primary text-[15px] px-8 py-4 shadow-lg shadow-blue-600/30"
          >
            Plan een vrijblijvende intake
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/contact" className="btn-outline-dark text-[15px] px-8 py-4">
            Bespreek mijn situatie
          </Link>
        </div>
      </div>
    </section>
  );
}
