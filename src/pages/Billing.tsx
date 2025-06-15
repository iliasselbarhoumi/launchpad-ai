import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Basic",
    price: { monthly: 0, yearly: 0 },
    description:
      "Perfect for aspiring entrepreneurs exploring their potential and seeking initial inspiration.",
    features: [
      "Entrepreneurial Self-Assessment",
      "Entrepreneurial Profiling",
      "Personalized Readiness Summary",
      "Generate 1-3 unique Micro-SaaS ideas",
      "Save your generated ideas",
    ],
    cta: "Your Current Plan",
    isCurrent: true,
  },
  {
    name: "Pro",
    price: { monthly: 39, yearly: 399 },
    description:
      "For serious aspiring entrepreneurs ready to dive deep into ideation and begin detailed MVP planning.",
    features: [
      "Everything in Basic, PLUS:",
      "Unlimited AI Idea Generation",
      "Detailed MVP Planning & Outlines",
      "Basic Market Validation Guidance",
      "Curated Resource Library",
      "Project Dashboard Access",
      "Standard Customer Support",
    ],
    cta: "Upgrade to Pro",
    isMostPopular: true,
  },
  {
    name: "Ultimate",
    price: { monthly: 99, yearly: 999 },
    description:
      "For committed founders who want to accelerate their journey with advanced insights and resources.",
    features: [
      "Everything in Pro, PLUS:",
      "Advanced Market Insights",
      "Personalized Learning Paths",
      "Priority AI Processing",
      "Premium Resource Access",
      "Dedicated Account Manager (Email)",
      "Export Integrations (Beta)",
    ],
    cta: "Upgrade to Ultimate",
  },
];

const BillingPage = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const sectionRef = useRef<HTMLDivElement>(null);
  const plansRef = useRef<HTMLDivElement>(null);
  const offerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );

    const refs = [sectionRef.current, plansRef.current, offerRef.current];
    refs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="bg-slate-50 dark:bg-slate-900">
      <main>
        <section className="relative py-12 md:py-20" id="pricing">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div
              ref={sectionRef}
              className="max-w-3xl mx-auto text-center opacity-0 translate-y-8 transition-all duration-700"
            >
              <div className="inline-block bg-launchpad-purple/10 text-launchpad-purple font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                Pricing
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-800 dark:text-white mb-6">
                Simple, Transparent{" "}
                <span className="gradient-text">Pricing</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
                Choose the plan that best fits your journey. All plans include
                our core AI features to help you succeed.
              </p>
            </div>

            <div className="flex items-center justify-center mb-12">
              <div className="inline-flex items-center justify-center bg-slate-200 dark:bg-slate-800/50 p-1 rounded-full">
                <button
                  onClick={() => setBillingCycle("monthly")}
                  className={cn(
                    "px-6 py-2 rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus:z-10",
                    billingCycle === "monthly"
                      ? "bg-white dark:bg-slate-900 text-slate-800 dark:text-white shadow"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                  )}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle("yearly")}
                  className={cn(
                    "px-6 py-2 rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring relative focus:z-10",
                    billingCycle === "yearly"
                      ? "bg-white dark:bg-slate-900 text-slate-800 dark:text-white shadow"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                  )}
                >
                  Yearly
                  <span className="ml-2 text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300 px-2 py-0.5 rounded-full">
                    SAVE ~15%
                  </span>
                </button>
              </div>
            </div>

            <div
              ref={plansRef}
              className="grid lg:grid-cols-3 gap-8 opacity-0 translate-y-8 transition-all duration-700 delay-300"
            >
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={cn(
                    "bg-white dark:bg-slate-800/50 rounded-2xl border p-8 shadow-sm transition-all duration-300 relative flex flex-col",
                    "hover:shadow-xl hover:-translate-y-1",
                    plan.isMostPopular
                      ? "border-launchpad-purple shadow-xl shadow-launchpad-purple/10 hover:shadow-launchpad-purple/20"
                      : "border-slate-200 dark:border-slate-700 hover:shadow-slate-500/10"
                  )}
                >
                  {plan.isMostPopular && (
                    <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-launchpad-purple text-white font-semibold px-4 py-1 rounded-full text-sm uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}

                  <div className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                    {plan.name}
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 mb-6 min-h-[48px]">
                    {plan.description}
                  </div>

                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl font-extrabold text-slate-900 dark:text-white">
                      $
                      {billingCycle === "monthly"
                        ? plan.price.monthly
                        : Math.floor(plan.price.yearly / 12)}
                    </span>
                    {plan.price.monthly > 0 && (
                      <span className="text-slate-500 dark:text-slate-400">
                        / month
                      </span>
                    )}
                  </div>
                  {plan.price.monthly > 0 && billingCycle === "yearly" && (
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                      Billed as ${plan.price.yearly} per year
                    </p>
                  )}
                  {plan.price.monthly === 0 && <div className="h-[44px]"></div>}

                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span
                          className={cn(
                            "text-slate-700 dark:text-slate-300",
                            feature.startsWith("Everything in") &&
                              "font-semibold text-slate-800 dark:text-slate-200"
                          )}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    size="lg"
                    variant={
                      plan.isCurrent || plan.isMostPopular
                        ? "default"
                        : "outline"
                    }
                    className={cn(
                      "w-full press-effect",
                      plan.isCurrent &&
                        "bg-slate-400 text-white hover:bg-slate-400 dark:bg-slate-700 dark:text-slate-100 cursor-not-allowed",
                      plan.name === "Ultimate" &&
                        !plan.isCurrent &&
                        "text-launchpad-purple border-launchpad-purple hover:bg-launchpad-purple/10 hover:text-launchpad-purple dark:text-launchpad-purple-light dark:border-launchpad-purple-light dark:hover:bg-launchpad-purple/20"
                    )}
                    disabled={plan.isCurrent}
                  >
                    {plan.cta}
                  </Button>
                </div>
              ))}
            </div>

            {/* <div
              ref={offerRef}
              className="mt-20 bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-700/50 dark:to-slate-800/50 rounded-2xl p-8 md:p-12 opacity-0 translate-y-8 transition-all duration-700 delay-[450ms]"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="mb-6 md:mb-0 text-center md:text-left">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
                    <Zap className="w-4 h-4 mr-2" />
                    <span>Ready to Launch?</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Start Your Entrepreneurial Journey Today
                  </h3>
                  <p className="text-white/70 max-w-xl">
                    Pick a plan and get instant access to the tools that will
                    turn your idea into a reality.
                  </p>
                </div>
                <div>
                  <Button
                    size="lg"
                    className="whitespace-nowrap bg-white text-slate-800 hover:bg-slate-200 dark:bg-white dark:text-slate-800 dark:hover:bg-slate-200 press-effect"
                  >
                    Get Started Now
                  </Button>
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default BillingPage;
