"use client";

import Link from "next/link";
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
      {
        label: "Sustainable Fat Loss & Definition",
        value: "fat-loss",
        icon: Target,
      },
      {
        label: "Hypertrophy & Strength Development",
        value: "muscle",
        icon: Zap,
      },
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
      {
        label: "Professional / Executive Schedule",
        value: "work",
        icon: Target,
      },
      { label: "Nutritional Complexity", value: "diet", icon: Dna },
      { label: "Lack of Structured Programming", value: "plan", icon: Zap },
    ],
  },
];

//brain
type Outcome = {
  title: string;
  description: string;
  secondary: string;
  recommendation: string;
};

const OUTCOME_MATRIX: Record<string, Outcome> = {
  // FAT LOSS
  "fat-loss_low_work": {
    title: "Time-Constrained Fat Cutter",
    description:
      "You want fat loss but time is hostile. Efficiency beats intensity.",
    secondary:
      "Short sessions and high adherence matter more than perfect plans.",
    recommendation: "3x/week full body, daily steps, calorie deficit.",
  },
  "fat-loss_low_diet": {
    title: "Diet-Dependent Fat Loss",
    description: "Training is minimal. Nutrition will determine everything.",
    secondary: "Without calorie control, progress is impossible.",
    recommendation: "Simple meals, protein focus, walking-based cardio.",
  },
  "fat-loss_low_plan": {
    title: "Unstructured Fat Loss Beginner",
    description: "Low volume and no plan. Consistency is the real target.",
    secondary: "You need systems, not motivation.",
    recommendation: "Basic template program, habit tracking.",
  },
  "fat-loss_med_work": {
    title: "Busy Fat Loss Optimizer",
    description: "You can train but time pressure limits recovery.",
    secondary: "Missed sessions kill momentum.",
    recommendation: "Upper/lower split, step targets, flexible diet.",
  },
  "fat-loss_med_diet": {
    title: "Nutrition-Limited Fat Loss",
    description: "Diet is blocking visible results.",
    secondary: "Training works only when intake aligns.",
    recommendation: "Macro tracking, protein-first meals.",
  },
  "fat-loss_med_plan": {
    title: "Programless Fat Loss",
    description: "Effort exists but direction is missing.",
    secondary: "Random training wastes calories.",
    recommendation: "Progressive fat-loss program.",
  },
  "fat-loss_high_work": {
    title: "Overworked Fat Loss Grinder",
    description: "High volume but lifestyle stress sabotages recovery.",
    secondary: "More training is not the solution.",
    recommendation: "Reduce volume, improve sleep.",
  },
  "fat-loss_high_diet": {
    title: "High-Output Fat Loss",
    description: "Training is strong. Diet fine-tuning is required.",
    secondary: "Small nutritional errors compound.",
    recommendation: "Calorie cycling, high protein.",
  },
  "fat-loss_high_plan": {
    title: "Undirected Fat Loss Athlete",
    description: "You work hard with no strategy.",
    secondary: "Structure unlocks visible definition.",
    recommendation: "Periodized fat-loss plan.",
  },

  // MUSCLE
  muscle_low_work: {
    title: "Time-Limited Muscle Seeker",
    description: "You want size but have limited sessions.",
    secondary: "Progress depends on exercise selection.",
    recommendation: "Full-body hypertrophy, compound lifts.",
  },
  muscle_low_diet: {
    title: "Underfed Builder",
    description: "Training exists but calories don’t.",
    secondary: "Muscle requires surplus.",
    recommendation: "Increase calories, protein tracking.",
  },
  muscle_low_plan: {
    title: "Beginner Muscle Builder",
    description: "Low volume and no structure.",
    secondary: "Linear progression is ideal.",
    recommendation: "Beginner strength program.",
  },
  muscle_med_work: {
    title: "Busy Hypertrophy Trainee",
    description: "You can grow but stress caps recovery.",
    secondary: "Missed sleep kills gains.",
    recommendation: "Upper/lower split, sleep optimization.",
  },
  muscle_med_diet: {
    title: "Nutrition-Limited Gainer",
    description: "Calories are the bottleneck.",
    secondary: "No surplus, no growth.",
    recommendation: "Lean bulk, macro tracking.",
  },
  muscle_med_plan: {
    title: "Unstructured Hypertrophy",
    description: "Volume exists but no progression.",
    secondary: "You need tracking.",
    recommendation: "Progressive overload program.",
  },
  muscle_high_work: {
    title: "Overtrained Professional",
    description: "High volume, poor recovery.",
    secondary: "Burnout risk is high.",
    recommendation: "Deload cycles, volume reduction.",
  },
  muscle_high_diet: {
    title: "High-Output Gainer",
    description: "Training is optimal, diet is not.",
    secondary: "Minor adjustments unlock growth.",
    recommendation: "Calorie surplus, meal timing.",
  },
  muscle_high_plan: {
    title: "Volume-Driven Builder",
    description: "You train a lot but lack structure.",
    secondary: "Random intensity wastes potential.",
    recommendation: "Periodized hypertrophy blocks.",
  },

  // RECOMP
  recomp_low_work: {
    title: "Time-Limited Recomposer",
    description: "You want everything with little time.",
    secondary: "Efficiency is critical.",
    recommendation: "Full-body training, protein focus.",
  },
  recomp_low_diet: {
    title: "Nutrition-Blocked Recomp",
    description: "Body change depends on diet control.",
    secondary: "Without it, nothing shifts.",
    recommendation: "Macro tracking, calorie balance.",
  },
  recomp_low_plan: {
    title: "Recomp Beginner",
    description: "No structure, low volume.",
    secondary: "Systems beat effort.",
    recommendation: "Simple recomposition template.",
  },
  recomp_med_work: {
    title: "Balanced Recomposition",
    description: "Good volume but stress limits adaptation.",
    secondary: "Recovery is the bottleneck.",
    recommendation: "Upper/lower, mobility, sleep.",
  },
  recomp_med_diet: {
    title: "Body Recomposition Optimizer",
    description: "Nutrition is the limiter.",
    secondary: "Protein intake decides results.",
    recommendation: "Macro tracking, strength focus.",
  },
  recomp_med_plan: {
    title: "Unstructured Recomp",
    description: "Training exists but lacks progression.",
    secondary: "Random workouts stall changes.",
    recommendation: "Linear progression plan.",
  },
  recomp_high_work: {
    title: "Overworked Recomposer",
    description: "High volume but stress prevents change.",
    secondary: "More is not better.",
    recommendation: "Reduce volume, increase recovery.",
  },
  recomp_high_diet: {
    title: "High-Output Recomposition",
    description: "Training is solid, diet refinement needed.",
    secondary: "Minor errors block body change.",
    recommendation: "Calorie cycling, protein priority.",
  },
  recomp_high_plan: {
    title: "Advanced Recomposition Athlete",
    description: "High effort, low direction.",
    secondary: "Structure unlocks visible transformation.",
    recommendation: "Periodized strength + hypertrophy.",
  },
};

const DEFAULT_OUTCOME: Outcome = {
  title: "Structured Optimizer",
  description:
    "You benefit most from structured programming and consistency-focused systems.",
  secondary:
    "Your biggest leverage is removing friction, not adding complexity.",
  recommendation: "Minimum effective volume with long-term habit formation.",
};

export function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleAnswer = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    setStep((s) => s + 1);
  };

  const resetQuiz = () => {
    setStep(1);
    setAnswers({});
  };

  const getOutcome = (): Outcome => {
    if (!answers[1] || !answers[2] || !answers[3]) {
      return DEFAULT_OUTCOME;
    }

    const key = `${answers[1]}_${answers[2]}_${answers[3]}`;
    return OUTCOME_MATRIX[key];
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
                A professional intake process designed to identify the optimal
                physiological path for your specific goals and lifestyle
                constraints.
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
              <span className="text-accent text-[10px] font-black uppercase tracking-[0.2em] block mb-2">
                Phase {step} of 3
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight tracking-tight">
                {QUESTIONS[step - 1].text}
              </h3>
            </div>

            <div className="flex flex-col gap-3 w-full">
              {QUESTIONS[step - 1].options.map((option) => (
                <button
                  key={option.value}
                  onClick={() =>
                    handleAnswer(QUESTIONS[step - 1].id, option.value)
                  }
                  className="w-full text-left px-6 py-4 bg-background border border-border text-foreground/90 font-semibold text-base rounded-lg hover:border-accent hover:bg-accent/[0.03] hover:text-foreground transition-all flex items-center justify-between group active:scale-[0.99]"
                >
                  <span>{option.label}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 4 &&
          (() => {
            const outcome = getOutcome();

            return (
              <div className="w-full space-y-10 animate-in fade-in duration-700">
                <div className="text-center space-y-2 border-b border-border pb-8">
                  <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                    Assessment Complete
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                    Your Profile:{" "}
                    <span className="text-accent uppercase italic">
                      {outcome.title}
                    </span>
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-foreground/90 font-medium text-lg leading-relaxed">
                      {outcome.description}
                    </p>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {outcome.secondary}
                    </p>
                  </div>

                  <div className="bg-muted/5 border-l-4 border-accent p-6 rounded-r-xl">
                    <h4 className="text-sm font-bold text-foreground uppercase tracking-widest mb-2">
                      Primary Recommendation:
                    </h4>
                    <p className="text-muted-foreground text-sm font-medium italic">
                      {outcome.recommendation}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="?booking=true"
                    className="w-full sm:w-auto"
                    scroll={false}
                  >
                    <Button
                      variant="large"
                      className="flex-1 text-base py-6 md:text-lg h-auto rounded-xl shadow-lg hover:shadow-accent/10 transition-all font-bold"
                    >
                      Start Your Kaizen Plan
                    </Button>
                  </Link>
                  <button
                    onClick={resetQuiz}
                    className="text-muted-foreground/60 font-bold uppercase text-[10px] tracking-[0.2em] hover:text-foreground transition-colors px-4"
                  >
                    Retake Assessment
                  </button>
                </div>
              </div>
            );
          })()}
      </div>
    </section>
  );
}
