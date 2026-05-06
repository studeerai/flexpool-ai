"use client";

import Link from "next/link";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Zap } from "lucide-react";

const navLinks = [
  { href: "/diensten", label: "Diensten" },
  { href: "/ai-experts", label: "AI Experts" },
  { href: "/trainingen", label: "Trainingen" },
  { href: "/cases", label: "Cases" },
  { href: "/over-ons", label: "Over ons" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Zap className="h-4 w-4 text-primary-foreground" />
            </div>
            <span>Flexpool.ai</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/voor-specialisten" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Voor specialisten
            </Link>
            <ButtonLink href="/diensten/ai-quickscan" size="sm">Gratis AI Quickscan</ButtonLink>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col gap-1 mt-8">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
                    className="px-3 py-3 text-sm font-medium hover:bg-muted rounded-md transition-colors">
                    {link.label}
                  </Link>
                ))}
                <div className="border-t border-border my-3" />
                <Link href="/voor-specialisten" onClick={() => setOpen(false)}
                  className="px-3 py-3 text-sm text-muted-foreground hover:bg-muted rounded-md transition-colors">
                  Voor specialisten
                </Link>
                <ButtonLink href="/diensten/ai-quickscan" className="mt-2" onClick={() => setOpen(false)}>
                  Gratis AI Quickscan
                </ButtonLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
