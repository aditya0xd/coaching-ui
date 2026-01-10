import { Button } from "@/components/ui/button";

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export function FinalCTA({ onOpenBooking }: FinalCTAProps) {
  return (
    <section className="bg-slate-950 py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />
      
      <div className="container mx-auto px-5 md:px-12 max-w-4xl relative z-10">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight whitespace-normal">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto whitespace-normal">
            Stop waiting for the "perfect time." The best time to start was yesterday. 
            The second best time is right now.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              variant="large" 
              onClick={onOpenBooking}
              className="bg-white text-slate-950 hover:bg-slate-100 text-lg px-10 py-6 h-auto shadow-xl whitespace-normal break-words border-none"
            >
              Book Your Free Strategy Call
            </Button>
            <a 
              href="#transformation"
              className="text-white underline underline-offset-4 hover:text-accent transition-colors font-medium whitespace-normal decoration-white/30"
            >
              See More Results First
            </a>
          </div>

          <p className="text-white/70 text-sm pt-4 whitespace-normal">
            ✓ No credit card required  ✓ No obligation  ✓ 100% free consultation
          </p>
        </div>
      </div>
    </section>
  );
}
