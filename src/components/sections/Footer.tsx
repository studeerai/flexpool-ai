import Link from "next/link";
import { Zap } from "lucide-react";

const footerLinks = {
  Diensten: [
    { href: "/diensten/ai-quickscan", label: "AI Quickscan" },
    { href: "/diensten/ai-expert-flex", label: "AI Expert Flex" },
    { href: "/diensten/implementation-squad", label: "Implementation Squad" },
    { href: "/diensten/fractional-ai-lead", label: "Fractional AI Lead" },
    { href: "/trainingen", label: "AI Trainingen" },
    { href: "/diensten/retainer", label: "AI Retainer" },
  ],
  Bedrijf: [
    { href: "/over-ons", label: "Over ons" },
    { href: "/ai-experts", label: "AI Experts" },
    { href: "/cases", label: "Cases" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  Specialisten: [
    { href: "/voor-specialisten", label: "Meld je aan" },
    { href: "/voor-specialisten#rollen", label: "Beschikbare rollen" },
    { href: "/voor-specialisten#proces", label: "Hoe het werkt" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-semibold text-lg mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Zap className="h-4 w-4 text-primary-foreground" />
              </div>
              <span>Flexpool.ai</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              De flexibele AI-afdeling voor bedrijven die AI willen implementeren.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              📧 info@flexpool.ai
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold mb-3">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Flexpool.ai. Alle rechten voorbehouden.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacybeleid</Link>
            <Link href="/algemene-voorwaarden" className="hover:text-foreground transition-colors">Algemene voorwaarden</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
