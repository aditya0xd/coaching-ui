"use client";

import { useState } from "react";
import { Trophy, Users, Activity, Clock } from "lucide-react";

export function Stats() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const stats = [
    {
      label: "Total Weight Lost",
      value: "1,200+ lbs",
      icon: Trophy,
      description: "Proven results across hundreds of clients."
    },
    {
      label: "Client Success Rate",
      value: "94%",
      icon: Activity,
      description: "Based on our 12-week transformation protocol."
    },
    {
      label: "Busy Professionals",
      value: "150+",
      icon: Users,
      description: "Optimized for high-performance lifestyles."
    },
    {
      label: "Years Experience",
      value: "10+",
      icon: Clock,
      description: "A decade of mastering body transformations."
    }
  ];

  return (
    <section className="py-24 border-y border-border/50 bg-muted/20">
      <div className="container mx-auto px-5 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {stats.map((stat, i) => {
            const isActive = activeIdx === i;
            return (
              <button 
                key={i} 
                onClick={() => setActiveIdx(isActive ? null : i)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveIdx(isActive ? null : i);
                  }
                }}
                aria-label={`Stat: ${stat.label} - ${stat.value}. Click for description.`}
                aria-expanded={isActive}
                className="space-y-4 group cursor-pointer text-left block w-full focus-visible:ring-2 focus-visible:ring-accent outline-none"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-1 h-8 transition-colors duration-300
                    ${isActive ? 'bg-accent' : 'bg-accent/40 md:group-hover:bg-accent'}
                  `} />
                  <span className={`text-[10px] font-black tracking-[0.2em] uppercase transition-colors duration-300
                    ${isActive ? 'text-accent' : 'text-muted-foreground md:group-hover:text-accent'}
                  `}>
                    {stat.label}
                  </span>
                </div>
                <div className={`text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tighter transition-transform duration-500
                  ${isActive ? 'scale-105' : 'md:group-hover:scale-105'}
                `}>
                  {stat.value}
                </div>
                <p className={`text-sm font-medium leading-relaxed max-w-[200px] transition-opacity duration-300
                  ${isActive ? 'text-foreground opacity-100' : 'text-foreground/80 md:group-hover:opacity-100'}
                `}>
                  {stat.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

