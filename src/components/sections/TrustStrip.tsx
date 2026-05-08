import { Building2, Brain, Zap, ShieldCheck } from "lucide-react";

const items = [
  { icon: Building2, text: "Voor organisaties van scale-up tot enterprise" },
  { icon: Brain,     text: "Toegang tot gespecialiseerde AI-expertise" },
  { icon: Zap,       text: "Snelle start van intake tot kick-off" },
  { icon: ShieldCheck, text: "Focus op veilige en verantwoorde implementatie" },
];

export function TrustStrip() {
  return (
    <section className="bg-[#050A14] border-y border-white/8">
      <div className="mx-auto max-w-[1200px] px-6 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 lg:divide-x lg:divide-white/8">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-3 lg:px-8 first:lg:pl-0 last:lg:pr-0">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                <item.icon className="h-3.5 w-3.5 text-[#6D5EF3]" strokeWidth={1.8} />
              </div>
              <p className="text-[13px] text-white/65 leading-snug">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
