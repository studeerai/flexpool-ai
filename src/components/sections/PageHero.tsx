import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PageHeroProps {
  badge?: string;
  title: string;
  titleAccent?: string;
  description: string;
  cta?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  size?: "default" | "sm";
}

export function PageHero({ badge, title, titleAccent, description, cta, ctaSecondary, size = "default" }: PageHeroProps) {
  return (
    <section className="relative bg-[#081120] overflow-hidden pt-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#2563EB]/6 blur-[100px]" />
      </div>
      <div className={`relative mx-auto max-w-[1200px] px-6 ${size === "sm" ? "py-16 sm:py-20" : "py-20 sm:py-28"}`}>
        <div className="max-w-3xl">
          {badge && (
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
              <span className="text-[13px] font-medium text-white/75 tracking-wide">{badge}</span>
            </div>
          )}
          <h1 className={`font-bold leading-[1.1] tracking-tight text-white mb-5 ${size === "sm" ? "text-3xl sm:text-4xl" : "text-4xl sm:text-5xl"}`}>
            {title}
            {titleAccent && <span className="text-[#E2E8F0]"> {titleAccent}</span>}
          </h1>
          <p className="text-[17px] leading-relaxed text-white/55 mb-8 max-w-2xl">{description}</p>
          {(cta || ctaSecondary) && (
            <div className="flex flex-col sm:flex-row gap-3">
              {cta && (
                <Link href={cta.href} className="btn-primary text-[15px] px-7 py-3.5 shadow-lg shadow-blue-600/25">
                  {cta.label} <ArrowRight className="h-4 w-4" />
                </Link>
              )}
              {ctaSecondary && (
                <Link href={ctaSecondary.href} className="btn-outline-dark text-[15px] px-7 py-3.5">
                  {ctaSecondary.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
