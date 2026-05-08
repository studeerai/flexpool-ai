"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { href: "/diensten", label: "Diensten" },
  { href: "/voor-bedrijven", label: "Voor bedrijven" },
  { href: "/voor-specialisten", label: "Voor AI-specialisten" },
  { href: "/trainingen", label: "Trainingen" },
  { href: "/cases", label: "Cases" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#081120]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-white/0"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2563EB] shadow-md shadow-blue-500/30">
              <Zap className="h-4 w-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-[15px] font-semibold tracking-tight text-white">
              Flexpool.ai
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-[13px] font-medium text-white/70 hover:text-white rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/diensten/ai-quickscan" className="btn-primary text-[13px] px-5 py-2.5">
              Plan een AI Quickscan
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden flex h-9 w-9 items-center justify-center rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#0F172A] border-t border-white/10">
          <div className="mx-auto max-w-[1200px] px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/10 mt-2">
              <Link
                href="/diensten/ai-quickscan"
                onClick={() => setOpen(false)}
                className="btn-primary w-full justify-center text-sm"
              >
                Plan een AI Quickscan
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
