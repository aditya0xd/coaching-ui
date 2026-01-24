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
      image: "/assets/CEE/image1.png",
      name: "Hayden",
      result: "Lean Muscle Recomp",
      details:
        "Focused on strategic calorie cycling to shed core fat while building significant shoulder and arm density. Balanced high-volume training with a demanding tech career.",
    },
    {
      image: "/assets/CEE/image2.png",
      name: "Luciano.",
      result: "12-Week Shred Protocol",
      details:
        "Achieved peak vascularity and abdominal definition. Optimized his metabolic rate through a structured 12-week protocol without sacrificing social life.",
    },
    {
      image: "/assets/CEE/image3.png",
      name: "Erick",
      result: "Athletic Body Recomp",
      details:
        "Successfully executed a total body recomposition by uncovering hidden core definition and building lean leg power. Used a 16-week metabolic reset strategy.",
    },
    {
      image: "/assets/CEE/image4.png",
      name: "Francesco",
      result: "Hypertrophy Specialist",
      details:
        "Added 15 lbs of pure lean mass over 6 months. Mastered progressive overload and high-volume training to completely transform a lanky frame.",
    },
    {
      image: "/assets/CEE/image5.png",
      name: "Gilad",
      result: "Executive Lifestyle Recomp",
      details:
        "Transitioned from a 'soft' physique to an athletic build. Prioritized compound lifts and nutrient timing while managing frequent international business travel.",
    },
    {
      image: "/assets/CEE/image6.png",
      name: "Marcus D.",
      result: "Stubborn Fat Loss",
      details:
        "Dropped 22 lbs of stubborn midsection fat. Proved that consistent, logical systems over willpower can deliver a six-pack even at 40+.",
    },
    {
      image: "/assets/CEE/image7.png",
      name: "Jordan H.",
      result: "Skinny-to-Muscular Overhaul",
      details:
        "Gained 18 lbs of stage-quality muscle. Overhauled his entire physique through high-intensity resistance training and a high-protein nutritional framework.",
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
              <button
                onClick={() => setActiveIdx(isActive ? null : index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveIdx(isActive ? null : index);
                  }
                }}
                aria-label={`View transformation details for ${item.name}: ${item.result}`}
                aria-expanded={isActive}
                className="relative aspect-square w-full bg-muted rounded-none overflow-hidden border border-border group cursor-pointer focus-visible:ring-2 focus-visible:ring-accent outline-none"
              >
                <Image
                  src={item.image}
                  alt={`${item.name} - ${item.result}`}
                  fill
                  className={`object-cover transition-transform duration-700 ease-in-out 
                    ${isActive ? "scale-110" : "md:group-hover:scale-110"}
                  `}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Enhanced Info Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6 transition-opacity
                  ${isActive ? "opacity-100" : "opacity-90 md:group-hover:opacity-100"}
                `}
                >
                  <div className="space-y-4">
                    {/* Detailed Reveal Section */}
                    <div
                      className={`transition-opacity duration-500 delay-100
                      ${isActive ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"}
                    `}
                    >
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
              </button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
