import Link from "next/link";
import { Zap, ExternalLink } from "lucide-react";

const footerCols = [
  {
    heading: "Diensten",
    links: [
      { href: "/diensten/ai-quickscan", label: "AI Quickscan" },
      { href: "/diensten/ai-expert-flex", label: "AI Expert Flex" },
      { href: "/diensten/implementation-squad", label: "Implementation Squad" },
      { href: "/diensten/consultancy", label: "AI Consultancy" },
      { href: "/trainingen", label: "AI Training Academy" },
      { href: "/diensten/retainer", label: "AI Retainer" },
    ],
  },
  {
    heading: "Voor bedrijven",
    links: [
      { href: "/voor-bedrijven", label: "Overzicht" },
      { href: "/cases", label: "Cases" },
      { href: "/diensten/ai-quickscan", label: "Gratis AI Quickscan" },
    ],
  },
  {
    heading: "Voor specialisten",
    links: [
      { href: "/voor-specialisten", label: "Aanmelden" },
      { href: "/voor-specialisten#rollen", label: "Beschikbare rollen" },
    ],
  },
  {
    heading: "Bedrijf",
    links: [
      { href: "/over-ons", label: "Over ons" },
      { href: "/trainingen", label: "Trainingen" },
      { href: "/contact", label: "Contact" },
      { href: "/blog", label: "Blog" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#050A14] border-t border-white/8">
      <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-10">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-[280px_1fr] lg:gap-16 mb-14">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2563EB]">
                <Zap className="h-4 w-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-[15px] font-semibold text-white">Flexpool.ai</span>
            </Link>
            <p className="text-[14px] leading-relaxed text-white/45 max-w-xs mb-6">
              De flexibele AI-afdeling voor bedrijven die AI willen implementeren.
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-[13px] text-white/60 hover:text-white hover:border-white/25 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              LinkedIn
            </a>
          </div>

          {/* Links */}
          <div className="col-span-2 lg:col-span-1 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {footerCols.map((col) => (
              <div key={col.heading}>
                <p className="text-[12px] font-semibold uppercase tracking-widest text-white/35 mb-4">
                  {col.heading}
                </p>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[13px] text-white/50 hover:text-white/90 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/30">
            © {new Date().getFullYear()} Flexpool.ai — Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-[12px] text-white/30 hover:text-white/60 transition-colors">
              Privacybeleid
            </Link>
            <Link href="/algemene-voorwaarden" className="text-[12px] text-white/30 hover:text-white/60 transition-colors">
              Algemene voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
