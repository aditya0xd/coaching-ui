"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export function HowItWorks({ onOpenBooking }: HowItWorksProps) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const steps = [
    {
      number: "01",
      title: "Free Strategy Call",
      description: "We'll discuss your goals, challenges, and create a custom roadmap for your transformation."
    },
    {
      number: "02",
      title: "Custom Plan Created",
      description: "Get your personalized training program and nutrition system designed around your lifestyle."
    },
    {
      number: "03",
      title: "Weekly Accountability",
      description: "Regular check-ins, progress tracking, and plan adjustments to keep you on track."
    },
    {
      number: "04",
      title: "Transform & Maintain",
      description: "Build the body you want and develop the habits to keep it for life."
    }
  ];

  return (
    <section id="how-it-works" className="container mx-auto px-5 md:px-12 py-20 max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary whitespace-normal">
          How It Works
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto whitespace-normal leading-relaxed">
          A proven 4-step process to take you from where you are to where you want to be
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {steps.map((step, index) => {
          const isActive = activeIdx === index;
          return (
            <button 
              key={index} 
              onClick={() => setActiveIdx(isActive ? null : index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveIdx(isActive ? null : index);
                }
              }}
              aria-label={`Step ${step.number}: ${step.title}. Click for details.`}
              aria-expanded={isActive}
              className="relative cursor-pointer group block w-full text-center focus-visible:ring-2 focus-visible:ring-accent outline-none rounded-2xl"
            >
              {/* Connector Line (hidden on mobile, shown on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-accent/30 z-0" />
              )}
              
              <div className="relative z-10 text-center">
                <div className={`w-24 h-24 mx-auto mb-6 bg-gradient-to-br rounded-full flex items-center justify-center border-4 border-background shadow-lg transition-all duration-300
                  ${isActive ? 'from-accent/40 to-accent/20 scale-110 shadow-accent/20' : 'from-accent/20 to-accent/10 md:group-hover:scale-105'}
                `}>
                  <span className={`text-3xl font-bold transition-colors
                    ${isActive ? 'text-accent' : 'text-primary'}
                  `}>{step.number}</span>
                </div>
                <h3 className={`text-xl font-bold mb-3 transition-colors whitespace-normal
                  ${isActive ? 'text-accent' : 'text-primary'}
                `}>
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-base lg:text-lg leading-relaxed whitespace-normal">
                  {step.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="text-center">
        <Button variant="large" onClick={onOpenBooking} className="text-lg px-10 py-6 h-auto whitespace-normal break-words text-center">
          Start Your Transformation Today
        </Button>
      </div>
    </section>
  );
}

