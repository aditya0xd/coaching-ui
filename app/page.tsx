"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhoIsThisFor } from "@/components/WhoIsThisFor";
import { HowItWorks } from "@/components/HowItWorks";
import { About } from "@/components/About";
import { Transformations } from "@/components/Transformations";
import { Testimonials } from "@/components/Testimonials";
import { LeadMagnet } from "@/components/LeadMagnet";
import { TrustLogos } from "@/components/TrustLogos";
import { Stats } from "@/components/Stats";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Quiz } from "@/components/Quiz";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="min-h-screen relative">
      <Navbar onOpenBooking={openModal} name="Oskar Michowicz" />
      
      <Hero onOpenBooking={openModal} name="Oskar Michowicz"/>
      <TrustLogos />
      
      <div className="space-y-0">
        <Problem />
        <Solution />
        <Stats />
        <Quiz />
        <Transformations />
        <WhoIsThisFor />
        <Services />
        <Testimonials />
        <LeadMagnet />
        <HowItWorks onOpenBooking={openModal} />
        <About name="Oskar Michowicz" />
        <FAQ />
        <FinalCTA onOpenBooking={openModal} />
      </div>

      <Footer />

      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}
