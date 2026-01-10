"use client";

import Image from "next/image";
import { useState } from "react";

export function WhoIsThisFor() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const audiences = [
    {
      image: "/assets/audiences/busy-pro.png",
      title: "Busy Professionals",
      description: "You have a demanding career but refuse to sacrifice your health and physique.",
      height: "h-[450px] md:h-[550px]"
    },
    {
      image: "/assets/audiences/family-man.png",
      title: "Dads & Family Men",
      description: "You want to be strong and energetic for your family without living in the gym.",
      height: "h-[450px] md:h-[650px] md:-mt-12"
    },
    {
      image: "/assets/audiences/comeback-athlete.png",
      title: "Comeback Athletes",
      description: "You used to be in great shape and want to reclaim that version of yourself.",
      height: "h-[450px] md:h-[550px]"
    }
  ];

  return (
    <section className="bg-black py-24 overflow-hidden border-y border-zinc-900">
      <div className="container mx-auto px-5 md:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-7xl font-black mb-8 text-white tracking-tighter uppercase italic leading-none">
              Who Is <span className="text-accent">This For?</span>
            </h2>
            <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed font-light">
              This program is designed for driven individuals who want real results without the BS. We don't do "easy," we do effective.
            </p>
          </div>
          <div className="hidden md:block text-accent font-mono text-xs tracking-widest uppercase border-b border-accent/20 pb-2">
            [ SELECT YOUR PROFILE ]
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {audiences.map((audience, index) => {
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
                aria-label={`Audience Profile: ${audience.title}. Click for more details.`}
                aria-expanded={isActive}
                className={`relative group overflow-hidden bg-zinc-900 ${audience.height} transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer block w-full text-left focus-visible:ring-2 focus-visible:ring-accent outline-none ring-inset`}
              >
                <Image
                  src={audience.image}
                  alt={audience.title}
                  fill
                  className={`object-cover transition-all duration-1000 ease-out 
                    ${isActive ? 'grayscale-0 scale-110 opacity-100' : 'grayscale md:group-hover:grayscale-0 md:group-hover:scale-110 opacity-60 md:group-hover:opacity-100'}
                  `}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent transition-opacity duration-700 
                  ${isActive ? 'opacity-70' : 'opacity-90 md:group-hover:opacity-70'}
                `} />
                
                <div className="absolute bottom-0 left-0 right-0 p-10 transform transition-transform duration-700">
                  <div className={`w-16 h-1 bg-accent mb-6 transform origin-left transition-transform duration-700 
                    ${isActive ? 'scale-x-100' : 'scale-x-50 md:group-hover:scale-x-100'}
                  `} />
                  <h3 className="text-2xl mb-2 md:text-4xl font-black md:mb-4 text-white uppercase tracking-tighter italic leading-none">
                    {audience.title}
                  </h3>
                  <div className="overflow-hidden">
                    <p className={`text-zinc-300 text-lg leading-snug transform transition-all duration-700 delay-100 font-light
                      ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100'}
                    `}>
                      {audience.description}
                    </p>
                  </div>
                </div>
                
                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-accent transition-all duration-700 m-4
                  ${isActive ? 'border-accent/50 opacity-100' : 'border-accent/0 md:group-hover:border-accent/50 opacity-0 md:group-hover:opacity-100'}
                `} />
              </button>
            );
          })}
        </div>

        <div className="mt-24 border-t border-zinc-800 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-bold text-white uppercase tracking-widest mb-6 italic flex items-center gap-4">
                <span className="w-12 h-[2px] bg-red-600"></span>
                NOT A GOOD FIT?
              </h4>
              <p className="text-zinc-500 text-lg leading-relaxed">
                If you're looking for a magic pill, a 30-day "challenge" that leads to nowhere, or aren't willing to put in consistent effort, 
                this program won't work for you. We value our time and yours.
              </p>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 p-10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
              <p className="text-xl md:text-2xl text-white font-medium italic relative z-10">
                "Stop looking for the easy way out. Start looking for the way that <span className="text-accent font-black uppercase">actually works.</span>"
              </p>
              <div className="absolute -bottom-10 -right-10 text-9xl font-black text-white/5 italic select-none">
                FIT
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

