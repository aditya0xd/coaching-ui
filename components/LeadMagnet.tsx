"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Download } from "lucide-react";

export function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isImageActive, setIsImageActive] = useState(false);

  useEffect(() => {
    emailjs.init("e7R7kSAq67Y8B2FZ4");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      user_email: email,
      blueprint_name: "7-Day Sustainable Fat Loss Blueprint",
    };

    try {
      // 1. Send notification to yourself via EmailJS
      await emailjs.send(
        "service_7quctin",
        "template_e80zpbp", // You might want to create a specific template for this later
        {
          name: "Lead Magnet Subscriber",
          email: email,
          phone: "N/A",
          service: "Blueprint Download",
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),
        },
        { publicKey: "e7R7kSAq67Y8B2FZ4" },
      );

      // 2. Trigger the automatic download
      const link = document.createElement("a");
      link.href = "/assets/fat-loss-blueprint.pdf"; // Make sure to place your PDF here!
      link.download = "7-Day-Fat-Loss-Blueprint.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setSubmitted(true);
    } catch (error) {
      console.error("Lead Magnet Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container mx-auto px-5 md:px-12 py-16 md:py-32 max-w-7xl">
      <div className="bg-card border border-border rounded-[24px] md:rounded-[48px] overflow-hidden shadow-2xl flex flex-col lg:flex-row lg:items-stretch">
        {/* Image / Mockup Side */}
        <button
          onClick={() => setIsImageActive(!isImageActive)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsImageActive(!isImageActive);
            }
          }}
          aria-label="Toggle blueprint preview image animation"
          aria-expanded={isImageActive}
          className="w-full lg:w-2/5 bg-muted/5 p-10 md:p-16 lg:p-20 flex items-center justify-center relative overflow-hidden group border-b lg:border-b-0 lg:border-r border-border cursor-pointer focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-accent outline-none"
        >
          <div
            className={`absolute inset-0 blur-3xl rounded-full scale-150 transition-colors
            ${isImageActive ? "bg-accent/10" : "bg-accent/5 md:group-hover:bg-accent/10"}
          `}
          />
          <div
            className={`relative w-full max-w-[280px] md:max-w-[360px] aspect-[3/4] shadow-2xl transition-transform duration-700
            ${isImageActive ? "scale-105 -rotate-1" : "md:group-hover:scale-105 md:group-hover:-rotate-1"}
          `}
          >
            <Image
              src="/assets/CEE/fat-loss-blueprint.png"
              alt="7-Day Sustainable Fat Loss Blueprint Cover"
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 280px, 360px"
              priority
            />
          </div>
        </button>

        {/* Content Side */}
        <div className="w-full lg:w-3/5 p-8 md:p-16 lg:p-24 flex flex-col justify-center space-y-10">
          {!submitted ? (
            <>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold tracking-wider uppercase text-[10px] md:text-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                  </span>
                  Expert Resource: Free Download
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] tracking-tight whitespace-normal break-words">
                  The 7-Day <br className="hidden sm:block" />
                  <span className="text-accent">Fat Loss Blueprint</span>
                </h2>
                <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl whitespace-normal font-medium">
                  Stop guessing and start seeing results. Grab the exact system
                  I use with my high-level clients to kickstart their
                  transformation.
                </p>
              </div>

              <ul className="grid grid-cols-1 gap-4">
                {[
                  "Complete 7-day meal framework",
                  "3 efficient workouts you can do anywhere",
                  "The 'Hidden Killers' of fat loss cheat sheet",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-foreground/90"
                  >
                    <div className="p-1 bg-accent/10 rounded-full">
                      <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-accent shrink-0" />
                    </div>
                    <span className="text-base md:text-lg lg:text-xl font-semibold leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col md:flex-row gap-4 w-full max-w-2xl"
                >
                  <div className="flex-[3] relative">
                    <input
                      type="email"
                      required
                      placeholder="Enter your work email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-6 py-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all font-medium text-base md:text-lg placeholder:text-muted-foreground/40 shadow-sm"
                    />
                  </div>
                  <Button
                    variant="default"
                    type="submit"
                    disabled={loading}
                    className="flex-[1.2] group text-base md:text-lg px-8 py-4 h-auto rounded-xl shadow-lg transition-all hover:-translate-y-0.5 active:scale-95 whitespace-nowrap"
                  >
                    {loading ? "Sending..." : "Get Access"}
                    {!loading && (
                      <Download className="w-5 h-5 ml-2 transition-transform group-hover:translate-y-1" />
                    )}
                  </Button>
                </form>
                <div className="mt-5 flex flex-wrap items-center justify-center md:justify-start gap-5 text-xs md:text-sm text-muted-foreground/60 font-medium">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-accent/50" /> No
                    Credit Card
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-accent/50" /> Instant
                    Access
                  </span>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center space-y-6 md:space-y-8 py-10 md:py-20 animate-in fade-in zoom-in slide-in-from-bottom-4 duration-700">
              <div className="w-20 h-20 md:w-28 md:h-28 bg-accent/20 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10 md:w-14 md:h-14 text-accent" />
              </div>
              <div className="space-y-3">
                <h3 className="text-3xl md:text-4xl font-extrabold text-foreground">
                  Check Your Inbox!
                </h3>
                <p className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto leading-relaxed">
                  The Blueprint is on its way to{" "}
                  <span className="font-bold text-foreground underline decoration-accent/30 decoration-2 underline-offset-4">
                    {email}
                  </span>
                  .
                </p>
                <p className="text-sm text-muted-foreground opacity-70">
                  Can't see it? Check your spam folder!
                </p>
              </div>
              <Button
                variant="outline"
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-xl px-10"
              >
                Go back
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
