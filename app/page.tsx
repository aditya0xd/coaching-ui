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
    <main id="main-content" className="min-h-screen relative">
      <Navbar name="Samuel Fernandez" />

      <Hero name="Samuel Fernandez" />
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
        <HowItWorks />
        <About name="Samuel Fernandez" />
        <FAQ />
        <FinalCTA />
      </div>
      <Footer />
      <Suspense fallback={null}>
        <BookingModal />
      </Suspense>
    </main>
  );
}
