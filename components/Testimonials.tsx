"use client";

import { useState } from "react";
import { Star } from "lucide-react";

export function Testimonials() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const testimonials = [
    {
      text: "I started working with Samuel Fernandez at 38, feeling stuck and out of shape. Within 12 weeks, I dropped 18 lbs and gained visible muscle definition. The best part? I never felt deprived or burned out. The plan just... worked.",
      author: "Jamie R., Marketing Director",
    },
    {
      id: "stories",
      text: "I've tried every diet and workout program out there. This was different. No extreme restrictions, no living in the gym. Just smart training and sustainable habits. Six months in, I'm in the best shape of my life—and it feels effortless now.",
      author: "Taylor M., Software Engineer",
    },
    {
      text: "What I appreciate most is Samuel Fernandez's no-BS approach. He doesn't sell magic pills or shortcuts. Just proven methods that work for real people with real lives. I'm stronger, leaner, and more confident than I was in my 20s.",
      author: "Chris D., Business Owner",
    },
  ];

  return (
    <section id="stories" className="container mx-auto px-5 md:px-12 py-20 pb-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-primary whitespace-normal">
        THESE GUYS DID IT
      </h2>
      <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12 whitespace-normal">
        NOW IT'S YOUR TURN
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => {
          const isActive = activeIdx === i;
          return (
            <div
              key={i}
              onClick={() => setActiveIdx(isActive ? null : i)}
              className={`rounded-2xl p-8 transition-all duration-300 border cursor-pointer
                ${isActive ? 'bg-card shadow-lg border-border' : 'bg-card/40 border-transparent md:hover:bg-card md:hover:shadow-lg md:hover:border-border'}
              `}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="w-5 h-5 text-[#00bc5b] fill-[#00bc5b]"
                  />
                ))}
              </div>
              <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed italic whitespace-normal">
                {t.text}
              </p>
              <strong className="block text-primary font-bold whitespace-normal">
                — {t.author}
              </strong>
            </div>
          );
        })}
      </div>
    </section>
  );
}

