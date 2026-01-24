import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface HeroProps {
  name: string;
}

export function Hero({ name }: HeroProps) {
  return (
    <section
      className="min-h-screen bg-black/50 md:bg-black/10 
    container mx-auto px-5 md:px-12 py-12 md:py-24 flex flex-col md:flex-row items-center gap-10 md:gap-20 mb-0 pb-0"
    >
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary uppercase break-words hyphens-auto whitespace-normal">
          {} <br className="hidden md:block" />
          The <span className="text-accent">Kaizen</span> Physique Protocol™
          <br className="hidden md:block" />
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0 whitespace-normal">
          Sustainable fat loss and muscle gain through small, consistent
          improvements.{" "}
          <span className="font-semibold text-primary">
            Just 3-4 workouts per week.
          </span>
          No crash diets. No BS.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start transition-all">
          <Link
            href="?booking=true"
            className="w-full sm:w-auto"
            scroll={false}
          >
            <Button
              variant="large"
              className="w-full sm:w-auto text-lg px-8 py-6 h-auto shadow-2xl shadow-primary/20"
            >
              Start Your Kaizen Plan
            </Button>
          </Link>
          <Link href="#transformation" className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="w-full sm:w-auto text-lg px-8 py-6 h-auto border-2"
            >
              See Client Results
            </Button>
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 items-center md:items-start pt-2">
          <div className="flex items-center">
            <div className="flex -space-x-3 items-center mr-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative w-10 h-10 rounded-full border-2 border-background overflow-hidden shadow-sm"
                >
                  <Image
                    src={`/assets/CEE/image${i + 3}.png`} // Using available profile image as placeholder for facepile
                    alt="Success Story Transformation"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all cursor-pointer"
                  />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-background bg-accent flex items-center justify-center text-[10px] font-bold text-accent-foreground shadow-sm">
                +100
              </div>
            </div>
            <div className="text-left">
              <div
                className="flex gap-0.5 text-yellow-500 mb-0.5"
                aria-label="100+ five-star reviews"
              >
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm font-semibold text-foreground/90 leading-tight">
                1-on-1 coaching that uses continuous improvement principles.{" "}
                {/* <span className="text-accent underline decoration-accent/20">
                  Luciano
                </span>{" "}
                <br /> */}
              </p>
            </div>
          </div>
        </div>

        <p className="text-xs text-muted-foreground flex items-center gap-2 justify-center md:justify-start opacity-70">
          <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
          Available for new clients • 15-min discovery call
        </p>
      </div>

      <div className="flex-1 w-full max-w-[500px] relative">
        <div className="relative aspect-3/4 w-full">
          <Image
            src="/ee11.jpg"
            alt="Anthony Bell Profile"
            fill
            className="object-cover object-top scale-110 rounded-[24px] shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
