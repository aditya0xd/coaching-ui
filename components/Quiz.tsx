"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Target, Zap, Dna, Rocket } from "lucide-react";

type Question = {
  id: number;
  text: string;
  options: { label: string; value: string; icon: any }[];
};

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Define your primary fitness objective:",
    options: [
      { label: "Sustainable Fat Loss & Definition", value: "fat-loss", icon: Target },
      { label: "Hypertrophy & Strength Development", value: "muscle", icon: Zap },
      { label: "Long-term Body Recomposition", value: "recomp", icon: Dna },
    ],
  },
  {
    id: 2,
    text: "Identify your realistic weekly training capacity:",
    options: [
      { label: "2-3 Sessions (Efficient / 45m)", value: "low", icon: Rocket },
      { label: "4-5 Sessions (Moderate Volume)", value: "med", icon: Target },
      { label: "Daily / High Volume Programming", value: "high", icon: Zap },
    ],
  },
  {
    id: 3,
    text: "Select your primary constraint to consistent progression:",
    options: [
      { label: "Professional / Executive Schedule", value: "work", icon: Target },
      { label: "Nutritional Complexity", value: "diet", icon: Dna },
      { label: "Lack of Structured Programming", value: "plan", icon: Zap },
    ],
  },
];

export function Quiz() {
  const [step, setStep] = useState(0); 
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleAnswer = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    setStep(step + 1);
  };

  const resetQuiz = () => {
    setStep(1);
    setAnswers({});
  };

  return (
    <section className="container mx-auto px-5 md:px-12 py-24 bg-background">
      <div className="max-w-2xl mx-auto min-h-[500px] bg-background border-2 border-border/60 flex flex-col items-center justify-center p-8 md:p-16 relative overflow-hidden transition-all duration-300">
        
        {/* Subtle Progress Bar */}
        {step >= 1 && step <= 3 && (
          <div 
            className="absolute top-0 left-0 w-full h-1 bg-muted"
            role="progressbar"
            aria-valuenow={step}
            aria-valuemin={1}
            aria-valuemax={3}
            aria-label={`Assessment progress: Phase ${step} of 3`}
          >
            <div 
              className="h-full bg-accent transition-all duration-500 ease-out" 
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        )}

        {step === 0 && (
          <div className="w-full space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 text-center">
            <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-[10px] font-bold tracking-[0.2em] uppercase mb-4 border border-accent/20">
              Diagnostic Intake
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight leading-tight">
                Evaluate Your Training Approach
              </h2>
              <p className="text-muted-foreground text-lg font-medium max-w-lg mx-auto leading-relaxed">
                A professional intake process designed to identify the optimal physiological path for your specific goals and lifestyle constraints.
              </p>
            </div>

            <div className="pt-6">
              <Button 
                variant="large"
                onClick={() => setStep(1)}
                className="px-8 py-4 h-auto text-lg rounded-lg transition-all hover:shadow-accent/10"
              >
                Assess My Training Approach
              </Button>
            </div>
            <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-[0.3em] pt-4">
              Private Assessment • 60-Second Duration
            </p>
          </div>
        )}

        {step >= 1 && step <= 3 && (
          <div className="w-full h-full flex flex-col animate-in fade-in duration-500">
            <div className="text-left mb-10">
              <span className="text-accent text-[10px] font-black uppercase tracking-[0.2em] block mb-2">Phase {step} of 3</span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight tracking-tight">
                {QUESTIONS[step - 1].text}
              </h3>
            </div>

            <div className="flex flex-col gap-3 w-full">
              {QUESTIONS[step - 1].options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(QUESTIONS[step - 1].id, option.value)}
                  className="w-full text-left px-6 py-4 bg-background border border-border text-foreground/90 font-semibold text-base rounded-lg hover:border-accent hover:bg-accent/[0.03] hover:text-foreground transition-all flex items-center justify-between group active:scale-[0.99]"
                >
                  <span>{option.label}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="w-full space-y-10 animate-in fade-in duration-700">
            <div className="text-center space-y-2 border-b border-border pb-8">
              <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                Assessment Complete
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                Your Profile: <span className="text-accent uppercase italic">Structured Optimizer</span>
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-foreground/90 font-medium text-lg leading-relaxed">
                  Based on your goals, availability, and consistency barriers, you respond best to a structured, 
                  low-friction training system that prioritizes physiological efficiency over sheer volume.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Clients with this profile typically see the highest ROI through personalized programming that incorporates 
                  managed intensity cycles and direct accountability check-ins.
                </p>
              </div>

              <div className="bg-muted/5 border-l-4 border-accent p-6 rounded-r-xl">
                 <h4 className="text-sm font-bold text-foreground uppercase tracking-widest mb-2">Primary Recommendation:</h4>
                 <p className="text-muted-foreground text-sm font-medium italic">
                    Focus on 'Minimum Effective Dose' training and a low-friction nutritional framework to ensure long-term adherence.
                 </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="large" 
                onClick={() => window.location.href='#how-it-works'}
                className="flex-1 text-base py-6 md:text-lg h-auto rounded-xl shadow-lg hover:shadow-accent/10 transition-all font-bold"
              >
                Review Recommended Coaching Path
              </Button>
              <button 
                onClick={resetQuiz}
                className="text-muted-foreground/60 font-bold uppercase text-[10px] tracking-[0.2em] hover:text-foreground transition-colors px-4"
              >
                Retake Assessment
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
