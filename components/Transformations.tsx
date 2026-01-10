"use client";

import { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";  
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Transformations() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const transformations = [
    {
      image: "/assets/transformation1.png",
      name: "Ernest N.",
      result: "Lost 25 lbs in 12 weeks",
      details: "Decreased body fat by 8% while increasing strength on all major lifts. Balanced a high-stress accounting career with 4 sessions per week."
    },
    {
      image: "/assets/transformation2.png",
      name: "Marcus J.",
      result: "Muscle Gain + Recomp",
      details: "Added 12 lbs of lean mass while dropping 3% body fat. Focused on progressive overload and a strict high-protein protocol."
    },
    {
      image: "/assets/Screenshot_2026_01_06_12_29_24_28_1c337646f29875672b5a61192b9010f9.jpg",
      name: "Sarah T.",
      result: "Dropped 18 lbs Post-Pregnancy",
      details: "Reclaimed abdominal definition and core strength using a low-impact, high-efficiency metabolic circuit system."
    },
    {
      image: "/assets/transformation3.png",
      name: "David L.",
      result: "Executive Transformation",
      details: "Lost 30 lbs of visceral fat. Optimized nutrition around frequent business travel and client dinners."
    },
    {
      image: "/assets/transformation4.png",
      name: "Elena R.",
      result: "Strength & Toning",
      details: "Transitioned from 'skinny fat' to athletic definition. Hit a 200lb deadlift milestone while maintaining a busy legal practice."
    },
    {
      image: "/assets/transformation5.png",
      name: "Elena R.",
      result: "Strength & Toning",
      details: "Transitioned from 'skinny fat' to athletic definition. Hit a 200lb deadlift milestone while maintaining a busy legal practice."
    },
    {
      image: "/assets/transformation6.png",
      name: "Elena R.",
      result: "Strength & Toning",
      details: "Transitioned from 'skinny fat' to athletic definition. Hit a 200lb deadlift milestone while maintaining a busy legal practice."
    },
  ];

  return (
    <section
      id="transformation"
      className="container mx-auto px-5 md:px-12 py-32 border-t border-border/50"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary uppercase tracking-wide whitespace-normal break-words">
        Client
        <br />
        Transformations
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1.1}
        centeredSlides={true}
        initialSlide={2}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          0: { slidesPerView: 1.1 },
          640: { slidesPerView: 1.8 },
          1024: { slidesPerView: 3 },
        }}
        className="!pb-16"
      >
        {transformations.map((item, index) => {
          const isActive = activeIdx === index;
          return (
            <SwiperSlide key={index}>
              <div 
                onClick={() => setActiveIdx(isActive ? null : index)}
                className="relative aspect-square w-full bg-muted rounded-none overflow-hidden border border-border group cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={`${item.name} - ${item.result}`}
                  fill
                  className={`object-cover transition-transform duration-700 ease-in-out 
                    ${isActive ? 'scale-110' : 'md:group-hover:scale-110'}
                  `}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Enhanced Info Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6 transition-opacity
                  ${isActive ? 'opacity-100' : 'opacity-90 md:group-hover:opacity-100'}
                `}>
                  <div className="space-y-4">
                    {/* Detailed Reveal Section */}
                    <div className={`transition-opacity duration-500 delay-100
                      ${isActive ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}
                    `}>
                      <p className="text-white/80 text-xs font-medium leading-relaxed italic border-l-2 border-accent/40 pl-3">
                        "{item.details}"
                      </p>
                    </div>

                    <div className="space-y-0.5">
                      <p className="text-white font-black text-base tracking-widest uppercase whitespace-normal">
                        {item.name}
                      </p>
                      <p className="text-accent font-bold text-[10px] tracking-[0.2em] uppercase whitespace-normal">
                        {item.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

