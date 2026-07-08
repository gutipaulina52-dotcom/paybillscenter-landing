"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check, Star, ArrowRight, Zap } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$3.99",
    period: "per bill",
    desc: "Perfect for occasional bill payments.",
    features: ["Single bill payment", "Email confirmation", "48h processing time", "Standard support", "All bill types"],
    popular: false,
    color: "#1B3A6B",
    cta: "Get Started",
  },
  {
    name: "Premium",
    price: "$2.99",
    period: "per bill",
    desc: "Best value for regular payments.",
    features: ["Multiple bill payments", "Instant confirmation", "24h processing time", "Priority WhatsApp support", "Monthly reminders", "Payment history"],
    popular: true,
    color: "#C41E3A",
    cta: "Most Popular",
  },
  {
    name: "Business",
    price: "Custom",
    period: "volume pricing",
    desc: "For businesses with high volume needs.",
    features: ["Unlimited bill payments", "Dedicated account manager", "Same-day processing", "24/7 VIP support", "Custom invoicing", "Bulk discounts", "API access"],
    popular: false,
    color: "#22C55E",
    cta: "Contact Us",
  },
];

export default function PricingSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#F8FAFC]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block bg-[#22C55E]/10 text-[#22C55E] text-sm font-bold px-5 py-2 rounded-full mb-5 tracking-wide uppercase">Pricing</span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-[#0D1F3C] tracking-tight mb-5">
            Transparent & <span className="text-[#C41E3A]">Competitive</span> Pricing
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">No hidden fees. Simple commissions that save you time and money.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          {plans.map((plan, i) => (
            <motion.div key={plan.name} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative bg-white rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${plan.popular ? "ring-2 ring-[#C41E3A] shadow-2xl shadow-red-100 scale-[1.03] md:scale-105" : "shadow-sm hover:shadow-xl border border-gray-100"}`}>
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#C41E3A] text-white text-xs font-black px-5 py-2 rounded-full flex items-center gap-1.5 shadow-lg">
                  <Star className="w-3.5 h-3.5 fill-current" /> Most Popular
                </div>
              )}

              <div className="mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: `${plan.color}12` }}>
                  <Zap className="w-6 h-6" style={{ color: plan.color }} />
                </div>
                <h3 className="font-display font-black text-2xl text-[#0D1F3C] mb-1">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.desc}</p>
              </div>

              <div className="mb-7">
                <span className="font-display font-black text-5xl text-[#0D1F3C]">{plan.price}</span>
                <span className="text-gray-400 text-sm ml-2">/ {plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${plan.color}15` }}>
                      <Check className="w-3 h-3" style={{ color: plan.color }} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <a href={`https://wa.me/16892985282?text=Hello%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(plan.name)}%20plan`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold text-sm transition-all hover:scale-[1.02]"
                style={plan.popular ? { backgroundColor: plan.color, color: "white" } : { backgroundColor: `${plan.color}10`, color: plan.color }}>
                {plan.cta} <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }}
          className="text-center text-gray-400 text-sm mt-10">
          ✅ No contracts. No hidden fees. Cancel anytime. Questions? <a href="https://wa.me/16892985282" target="_blank" rel="noopener noreferrer" className="text-[#22C55E] font-semibold hover:underline">Chat with us</a>.
        </motion.p>
      </div>
    </section>
  );
}
