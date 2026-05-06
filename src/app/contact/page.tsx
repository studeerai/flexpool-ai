import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Neem contact op met Flexpool.ai. We reageren binnen 24 uur.",
};

export default function ContactPage() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <div>
            <h1 className="text-4xl font-bold mb-4">Neem contact op</h1>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Heb je een vraag over onze diensten, wil je een Quickscan aanvragen of ben je
              een AI-specialist die zich wil aanmelden? We helpen je graag verder.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="font-medium text-sm">E-mail</p>
                  <a href="mailto:info@flexpool.ai" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    info@flexpool.ai
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="font-medium text-sm">Reactietijd</p>
                  <p className="text-sm text-muted-foreground">Binnen 24 uur op werkdagen</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
