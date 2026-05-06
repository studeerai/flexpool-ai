"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2 } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export function QuickscanForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/quickscan", {
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
        <h3 className="text-xl font-bold mb-2">Aanvraag ontvangen!</h3>
        <p className="text-muted-foreground">
          Bedankt voor je aanvraag. We nemen binnen 24 uur contact op om een intakegesprek in te plannen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1.5" htmlFor="name">Naam *</label>
          <input id="name" name="name" type="text" required placeholder="Jan de Vries"
            className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5" htmlFor="email">E-mailadres *</label>
          <input id="email" name="email" type="email" required placeholder="jan@bedrijf.nl"
            className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1.5" htmlFor="company">Bedrijfsnaam *</label>
          <input id="company" name="company" type="text" required placeholder="Bedrijf B.V."
            className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5" htmlFor="job_title">Functietitel</label>
          <input id="job_title" name="job_title" type="text" placeholder="Directeur / Innovation Manager"
            className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1.5" htmlFor="company_size">Bedrijfsgrootte</label>
          <select id="company_size" name="company_size"
            className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
            <option value="">Selecteer...</option>
            <option value="1-10">1–10 medewerkers</option>
            <option value="11-50">11–50 medewerkers</option>
            <option value="51-200">51–200 medewerkers</option>
            <option value="201-500">201–500 medewerkers</option>
            <option value="500+">500+ medewerkers</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5" htmlFor="sector">Sector</label>
          <select id="sector" name="sector"
            className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
            <option value="">Selecteer...</option>
            <option value="logistics">Logistiek & Transport</option>
            <option value="finance">Finance & Verzekeringen</option>
            <option value="retail">Retail & E-commerce</option>
            <option value="healthcare">Healthcare</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="tech">Tech & Software</option>
            <option value="professional_services">Professional Services</option>
            <option value="other">Anders</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5" htmlFor="challenge">
          Wat is uw grootste uitdaging of AI-vraag? *
        </label>
        <textarea id="challenge" name="challenge" required rows={4}
          placeholder="Beschrijf kort wat u wilt bereiken met AI, of welk probleem u wilt oplossen..."
          className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
      </div>

      {state === "error" && (
        <p className="text-sm text-destructive">
          Er ging iets mis. Probeer het opnieuw of mail naar info@flexpool.ai.
        </p>
      )}

      <Button type="submit" size="lg" disabled={state === "loading"} className="w-full h-12 text-base">
        {state === "loading" ? (
          <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Versturen...</>
        ) : (
          "Verstuur aanvraag"
        )}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        Geen verplichtingen. We nemen binnen 24 uur contact op.
      </p>
    </form>
  );
}
