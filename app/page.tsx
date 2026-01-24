import { Suspense } from "react";
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
import { connection } from "next/server";

export default async function Home() {
  await connection();
  return (
    <main className="min-h-screen relative">
      <Navbar name="Samuel Fernandez" />

      <div className="min-h-[300vh] relative">
        {/* Sticky background layer */}
        <div className="sticky top-0 h-screen ">
          <div
            className="absolute inset-0 
      bg-[url('/gym-bg.png')] bg-cover bg-center"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Overlay content layer */}
        <div className="absolute top-0 left-0 w-full">
          <Hero name="" />
        </div>

        {/* Normal scrolling content */}
        <div className="relative mt-[60vh] md:mt-[80vh]">
          <Problem />
        </div>
        <div className="mt-[20vh] md:mt-[40vh]">
          <Solution />
        </div>
      </div>

      {/* Normal site */}
      <Stats />
      <Quiz />
      <Transformations />
      <WhoIsThisFor />
      <Testimonials />
      <LeadMagnet />
      <HowItWorks />
      <About name="Samuel Fernandez" />
      <FAQ />
      <FinalCTA />
      <Footer />
      <Suspense fallback={null}>
        <BookingModal />
      </Suspense>
    </main>
  );
}
