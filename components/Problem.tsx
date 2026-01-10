import { XCircle, ArrowRight } from "lucide-react";

export function Problem() {
  const problems = [
    "No time for 2-hour gym sessions",
    "Confused by conflicting diet advice",
    "Feeling stuck despite 'eating healthy'",
    "Lack of accountability to stay consistent"
  ];

  return (
    <section className="container mx-auto px-5 md:px-12 py-24 border-y border-border/30">
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-5xl font-black text-foreground/90 leading-[1.1] tracking-tight">
            Tired of struggling with <br />
            <span className="text-accent/90 italic">hit-or-miss results?</span>
          </h2>
          <p className="text-muted-foreground/80 text-lg md:text-xl leading-relaxed">
            Most people fail not because they lack willpower, but because they lack a sustainable system designed for their busy lives.
          </p>
          <ul className="space-y-4">
            {problems.map((p, i) => (
              <li key={i} className="flex items-center gap-3 text-foreground/70 font-medium text-base md:text-lg">
                <XCircle className="w-5 h-5 text-accent/40 flex-shrink-0 mt-1" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex-1 w-full bg-muted/10 rounded-2xl p-8 md:p-12 border border-border/50 relative overflow-hidden group">
          <h3 className="text-xl md:text-2xl font-bold text-foreground/90 mb-4">The "Fitness Trap"</h3>
          <p className="text-muted-foreground/80 text-base leading-relaxed mb-6">
            Relying on "motivation" and extreme restrictions is a recipe for burnout. You need a system that works <strong>around</strong> your career and family, not against it.
          </p>
          <div className="flex items-center gap-2 text-foreground/60 font-bold text-sm uppercase tracking-wider">
            <span className="border-b border-foreground/30 pb-0.5">Identify The Cycle</span>
            <ArrowRight className="w-4 h-4 text-foreground/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
