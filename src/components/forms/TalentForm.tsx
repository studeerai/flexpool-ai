"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2 } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

const roles = [
  "AI Consultant", "ML Engineer", "Data Scientist", "LLM Engineer",
  "RAG Specialist", "MLOps Engineer", "Data Engineer", "AI Product Owner",
  "Prompt Engineer", "Automation Specialist", "AI Trainer", "Responsible AI Consultant",
];

export function TalentForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/talent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setState("success");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="text-center py-12 px-6 bg-muted/30 rounded-xl border border-border">
        <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">Aanmelding ontvangen!</h3>
        <p className="text-muted-foreground">
          We beoordelen je profiel binnen 5 werkdagen en nemen contact op voor een intake-gesprek.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1.5" htmlFor="t-name">Naam *</label>
          <input id="t-name" name="name" type="text" required placeholder="Jan de Vries"
            className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5" htmlFor="t-email">E-mail *</label>
          <input id="t-email" name="email" type="email" required placeholder="jan@example.com"
            className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5" htmlFor="t-linkedin">LinkedIn URL *</label>
        <input id="t-linkedin" name="linkedin_url" type="url" required placeholder="https://linkedin.com/in/jannaam"
          className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1.5" htmlFor="t-role">Primaire rol *</label>
          <select id="t-role" name="role" required
            className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
            <option value="">Selecteer rol...</option>
            {roles.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5" htmlFor="t-exp">Jaren ervaring *</label>
          <select id="t-exp" name="experience_years" required
            className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
            <option value="">Selecteer...</option>
            <option value="1">1 jaar</option>
            <option value="2">2 jaar</option>
            <option value="3">3 jaar</option>
            <option value="5">4–5 jaar</option>
            <option value="7">6–8 jaar</option>
            <option value="10">9+ jaar</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1.5" htmlFor="t-rate">Uurtarief (€/uur)</label>
          <input id="t-rate" name="hourly_rate" type="number" min="50" max="300" placeholder="120"
            className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5" htmlFor="t-avail">Beschikbaarheid</label>
          <select id="t-avail" name="availability"
            className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
            <option value="">Selecteer...</option>
            <option value="direct">Direct beschikbaar</option>
            <option value="1month">Over 1 maand</option>
            <option value="3months">Over 2–3 maanden</option>
            <option value="later">Later / oriënterend</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5" htmlFor="t-work">Werkvoorkeur</label>
        <select id="t-work" name="work_preference"
          className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
          <option value="remote">Remote</option>
          <option value="hybrid">Hybrid</option>
          <option value="onsite">On-site</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5" htmlFor="t-portfolio">Portfolio / GitHub URL</label>
        <input id="t-portfolio" name="portfolio_url" type="url" placeholder="https://github.com/jannaam"
          className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5" htmlFor="t-motivation">
          Korte motivatie (optioneel)
        </label>
        <textarea id="t-motivation" name="motivation" rows={3}
          placeholder="Vertel kort waarom je bij de Flexpool wilt aansluiten..."
          className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
      </div>

      {state === "error" && (
        <p className="text-sm text-destructive">Er ging iets mis. Probeer opnieuw of mail info@flexpool.ai.</p>
      )}

      <Button type="submit" size="lg" disabled={state === "loading"} className="w-full h-12 text-base">
        {state === "loading" ? (
          <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Versturen...</>
        ) : "Verstuur aanmelding"}
      </Button>
    </form>
  );
}
