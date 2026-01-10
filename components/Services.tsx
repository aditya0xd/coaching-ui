"use client";

import { useState } from "react";
import { Dumbbell, Apple, TrendingUp } from "lucide-react";

export function Services() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const services = [
    {
      icon: Dumbbell,
      title: "Elite 1-on-1 Mentorship",
      description:
        "Your own dedicated coach who knows your name, your goals, and exactly what you need to succeed. Weekly check-ins keep you accountable and progressing.",
    },
    {
      icon: Apple,
      title: "Metabolic Nutrition System",
      description:
        "Eat the foods you love while losing fat and building muscle. No meal prep marathons. No cutting out carbs. Just smart, sustainable nutrition.",
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Accountability",
      description:
        "Track what matters. See exactly how you're progressing every week. No guesswork—just clear data that shows you're moving in the right direction.",
    },
  ];

  return (
    <section id="services" className="container mx-auto px-5 md:px-12 py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary whitespace-normal">
        What You Get When You Work With Me
      </h2>
      <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 whitespace-normal leading-relaxed">
        This isn't a cookie-cutter program. It's a complete system designed around 
        <span className="font-semibold text-primary"> your goals, your schedule, and your life.</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const isActive = activeIdx === index;
          return (
            <div
              key={service.title}
              onClick={() => setActiveIdx(isActive ? null : index)}
              className={`bg-card text-left border rounded-[18px] p-8 transition-all duration-300 cursor-pointer
                ${isActive ? 'shadow-xl -translate-y-2 border-accent' : 'border-border shadow-sm md:hover:shadow-lg md:hover:-translate-y-1'}
              `}
            >
              <service.icon className={`w-12 h-12 md:w-14 md:h-14 mx-auto mb-6 transition-colors
                ${isActive ? 'text-accent' : 'text-primary'}
              `} />
              <h3 className="text-xl font-bold mb-3 text-primary text-center whitespace-normal">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed whitespace-normal">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

