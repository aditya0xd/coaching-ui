"use client";

import { useState } from "react";
import { Salad, Calendar, TrendingUp } from "lucide-react";

interface AboutProps {
  name: string;
}

export function About({ name }: AboutProps) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const features = [
    {
      icon: Salad,
      title: "Sustainable Nutrition",
      description:
        "Flexible eating strategies that work with your lifestyle. Enjoy meals out, travel for work, and still make progress. No food is off-limits when you understand the system.",
    },
    {
      icon: Calendar,
      title: "Consistent Accountability",
      description:
        "Weekly check-ins ensure you never feel lost or stuck. I'll adjust your plan based on what's working, what's not, and what's happening in your life right now.",
    },
    {
      icon: TrendingUp,
      title: "Proven Coaching Framework",
      description:
        "This system has helped hundreds of clients build lean, strong physiques. It's not trendy or experimental—it's what actually works for busy people with real lives.",
    },
  ];

  return (
    <section id="about" className="container mx-auto px-5 md:px-12 py-20 max-w-5xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary whitespace-normal">
          Why Work With {name}?
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto whitespace-normal">
          I've spent years helping busy professionals like you build bodies they're proud of—
          without sacrificing their careers, families, or sanity. <span className="font-semibold text-primary">No extreme diets. 
          No 2-hour gym sessions.</span> Just a proven, sustainable approach that actually fits into real life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {features.map((feature, index) => {
          const isActive = activeIdx === index;
          return (
            <div
              key={feature.title}
              onClick={() => setActiveIdx(isActive ? null : index)}
              className={`rounded-[18px] p-8 transition-all duration-300 border cursor-pointer
                ${isActive ? 'bg-card shadow-xl -translate-y-2 border-border' : 'bg-card/50 border-transparent md:hover:bg-card md:hover:shadow-xl md:hover:-translate-y-2'}
              `}
            >
              <feature.icon className={`w-10 h-10 md:w-12 md:h-12 mx-auto mb-5 transition-colors
                ${isActive ? 'text-accent' : 'text-primary'}
              `} />
              <h3 className="text-lg font-bold mb-3 text-primary whitespace-normal">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed whitespace-normal">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

