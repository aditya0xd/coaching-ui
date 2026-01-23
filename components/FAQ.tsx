import { HelpCircle } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      question: "Is this program suitable for beginners?",
      answer: "Absolutely. Whether you're just starting out or getting back into fitness after a break, the program is fully customized to your current level and progresses at your pace."
    },
    {
      question: "Do I need access to a gym?",
      answer: "Not necessarily. I can design effective programs for home workouts, hotel gyms, or full commercial gyms—whatever fits your lifestyle."
    },
    {
      question: "What if I travel frequently for work?",
      answer: "No problem. Your training plan adapts to your schedule and location. I'll provide flexible workout options that work anywhere."
    },
    {
      question: "How much time do I need to commit each week?",
      answer: "Most clients train 3-4 days per week for 45-60 minutes. The program is designed for busy professionals who don't have hours to spend in the gym."
    },
    {
      question: "What makes this different from other online coaching?",
      answer: "You get direct 1-on-1 support, weekly check-ins, and a fully personalized plan—not a cookie-cutter template. Plus, the focus is on sustainable habits, not quick fixes."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most clients notice changes in energy and strength within 2-3 weeks. Visible physical changes typically appear within 4-6 weeks when following the plan consistently."
    }
  ];

  return (
    <section id="faq" className="container mx-auto px-5 md:px-12 py-20 max-w-4xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary whitespace-normal">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground text-lg whitespace-normal">
          Everything you need to know before getting started
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group bg-card border border-border rounded-2xl p-6 hover:shadow-md transition-all cursor-pointer"
          >
            <summary className="flex items-start justify-between gap-4 font-semibold text-primary list-none whitespace-normal">
              <span className="flex-1">{faq.question}</span>
              <HelpCircle className="w-5 h-5 text-accent flex-shrink-0 group-open:rotate-180 transition-transform" aria-hidden="true" />
            </summary>
            <p className="mt-4 text-muted-foreground text-base leading-relaxed whitespace-normal">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>

      {/* FAQ Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
