"use client";

import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";

export function Solution() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const pillars = [
    {
      title: "Progressive Output Training",
      label: "Build",
      desc: "3-4 scientifically backed sessions per week that prioritize compound movements. Each workout is designed to trigger maximum metabolic response in under 45 minutes, respect your joints, and fit your schedule.",
    },
    {
      title: "Bio-Individual Nutrition",
      label: "Fuel",
      desc: "Your nutrition evolves as your body changes. Calories and macros are adjusted based on weekly data — not emotions or rigid rules. You eat like a normal human while your physique improves through controlled, logical progression.",
    },
    {
      title: "Deep Accountability",
      label: "Refine",
      desc: "Every week we analyze performance, body composition, recovery, and habits - then make precise adjustments.",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="bg-black/10 backdrop-blur-sm container mx-auto px-5 md:px-12 py-32 relative overflow-hidden"
    >
      <div className="max-w-4xl relative">
        {/* Header */}
        <div className="space-y-4 mb-24">
          <span className="text-[10px] font-black tracking-[0.3em] uppercase text-accent border-b border-accent/20 pb-2 inline-block">
            Framework
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-none tracking-tighter">
            The <span className="text-accent/90 italic">KAIZEN</span> Method{" "}
            <span className="text-foreground/30 italic"></span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline wrapper */}
          <div className="relative">
            {/* Scroll line perfectly centered */}
            <div className="absolute left-[56px] md:left-[64px] top-0 bottom-0 flex justify-center">
              <div className="relative w-px bg-border/40">
                <motion.div
                  className="absolute top-0 left-0 w-full bg-accent origin-top"
                  style={{ height: "100%", scaleY }}
                />
              </div>
            </div>

            {/* Pillars */}
            <div>
              {pillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0.15, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ amount: 0.5 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="py-12 md:py-16 border-t border-border flex gap-10 md:gap-24 items-start"
                >
                  {/* Index column (fixed width) */}
                  <div className="w-[120px] flex flex-col items-center gap-2 relative z-10">
                    <span className="text-4xl font-black text-accent bg-background rounded-full p-3">
                      0{i + 1}
                    </span>
                    <span className="text-[10px] font-black tracking-widest uppercase text-muted-foreground bg-background text-center px-1 rounded">
                      {pillar.label}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl md:text-4xl font-bold tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground text-base md:text-xl leading-relaxed max-w-2xl font-medium italic">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}

              <div className="border-t border-border" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-15">
        <Link href="?booking=true" className="w-full sm:w-auto" scroll={false}>
          <Button
            variant="large"
            className="w-full sm:w-auto text-lg px-8 py-6 h-auto shadow-2xl shadow-primary/20"
          >
            Start Your Kaizen Plan
          </Button>
        </Link>
      </div>
    </section>
  );
}
