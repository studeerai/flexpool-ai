"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2 } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/contact", {
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
        <h3 className="text-xl font-bold mb-2">Bericht ontvangen!</h3>
        <p className="text-muted-foreground">We reageren binnen 24 uur op werkdagen.</p>
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
          <label className="block text-sm font-medium mb-1.5" htmlFor="email">E-mail *</label>
          <input id="email" name="email" type="email" required placeholder="jan@bedrijf.nl"
            className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1.5" htmlFor="company">Bedrijf</label>
        <input id="company" name="company" type="text" placeholder="Bedrijf B.V."
          className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1.5" htmlFor="type">Type vraag</label>
        <select id="type" name="type"
          className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
          <option value="bedrijf">Ik ben een bedrijf</option>
          <option value="specialist">Ik ben een AI-specialist</option>
          <option value="algemeen">Algemene vraag</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1.5" htmlFor="message">Bericht *</label>
        <textarea id="message" name="message" required rows={5}
          placeholder="Hoe kunnen we je helpen?"
          className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
      </div>
      {state === "error" && (
        <p className="text-sm text-destructive">Er ging iets mis. Mail ons op info@flexpool.ai.</p>
      )}
      <Button type="submit" size="lg" disabled={state === "loading"} className="w-full h-12 text-base">
        {state === "loading" ? (
          <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Versturen...</>
        ) : "Verstuur bericht"}
      </Button>
    </form>
  );
}
