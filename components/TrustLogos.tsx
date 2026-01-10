import { ShieldCheck, Award, CheckCircle } from "lucide-react";

export function TrustLogos() {
  return (
    <div className="w-full bg-background pt-8 pb-12 border-b border-border/50">
      <div className="container mx-auto px-5 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" />
            <span className="text-xl md:text-2xl font-black tracking-tighter uppercase italic">Precision Nutrition</span>
          </div>
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 md:w-8 md:h-8" />
            <span className="text-xl md:text-2xl font-black tracking-tighter uppercase italic">NASM Certified</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 md:w-8 md:h-8" />
            <span className="text-xl md:text-2xl font-black tracking-tighter uppercase italic">CrossFit L2</span>
          </div>
          <div className="flex items-center gap-3">
             <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-foreground text-background font-bold italic">B</div>
            <span className="text-xl md:text-2xl font-black tracking-tighter uppercase italic">Bio-Kinetics</span>
          </div>
        </div>
        <p className="text-center mt-8 text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
          Industry Certified • Science-Backed Methods • Proven Results
        </p>
      </div>
    </div>
  );
}
