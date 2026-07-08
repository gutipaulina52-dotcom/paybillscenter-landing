"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MessageCircle, FileText, CreditCard, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: MessageCircle, step: "01", title: "Contact Us", desc: "Reach out via WhatsApp with your bill details. We respond within minutes.", color: "#22C55E" },
  { icon: FileText, step: "02", title: "Send Bill Info", desc: "Share your bill statement or account number. We handle the rest.", color: "#3B82F6" },
  { icon: CreditCard, step: "03", title: "Make Payment", desc: "Pay the bill amount plus our small, transparent commission fee.", color: "#F59E0B" },
  { icon: CheckCircle2, step: "04", title: "Get Confirmation", desc: "Receive your payment confirmation within 24 hours. Done!", color: "#C41E3A" },
];

export default function HowItWorks() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-gradient-to-b from-[#0D1F3C] via-[#1B3A6B] to-[#0f2847] relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`, backgroundSize: "50px 50px" }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block bg-white/10 text-white text-sm font-bold px-5 py-2 rounded-full mb-5 tracking-wide uppercase border border-white/20">How It Works</span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight mb-5">
            Simple <span className="text-[#22C55E]">4-Step</span> Process
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">Paying your bills has never been this easy. Start in seconds.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {steps.map((s, i) => (
            <motion.div key={s.step} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative group">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-7 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2">
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-black px-3 py-1.5 rounded-full border" style={{ color: s.color, backgroundColor: `${s.color}20`, borderColor: `${s.color}40` }}>
                  Step {s.step}
                </div>

                <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mt-4 mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" style={{ backgroundColor: `${s.color}20` }}>
                  <s.icon className="w-8 h-8" style={{ color: s.color }} />
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-3">{s.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-14">
          <a href="https://wa.me/16892985282?text=Hello%2C%20I%20want%20to%20start%20paying%20my%20bills"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#22C55E] hover:bg-[#16a34a] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-2xl shadow-green-500/30 hover:scale-[1.02]">
            💬 Get Started Now — It's Free to Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
