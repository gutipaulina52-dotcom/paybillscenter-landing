"use client";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import { Users, Star, Clock, ShieldCheck, Zap, HeartHandshake } from "lucide-react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, { stiffness: 40, damping: 18 });

  useEffect(() => { if (inView) motionVal.set(target); }, [inView, target, motionVal]);
  useEffect(() => {
    const unsub = springVal.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${Math.round(v).toLocaleString("en-US")}${suffix}`;
    });
    return unsub;
  }, [springVal, suffix]);

  return <span ref={(node) => { (ref as any).current = node; inViewRef(node); }} className="font-display font-black text-5xl text-[#1B3A6B]">0{suffix}</span>;
}

const stats = [
  { icon: Users, value: 5000, suffix: "+", label: "Happy Clients", color: "#1B3A6B" },
  { icon: Star, value: 15000, suffix: "+", label: "Bills Paid", color: "#C41E3A" },
  { icon: Clock, value: 24, suffix: "h", label: "Fast Processing", color: "#22C55E" },
  { icon: ShieldCheck, value: 100, suffix: "%", label: "Guaranteed", color: "#F59E0B" },
];

const features = [
  { icon: Zap, title: "Lightning Fast", desc: "Bills processed within 24 hours. No delays, no excuses.", color: "#F59E0B" },
  { icon: ShieldCheck, title: "100% Secure", desc: "Your payment information is always encrypted and protected.", color: "#22C55E" },
  { icon: HeartHandshake, title: "Personal Service", desc: "Real humans ready to help you via WhatsApp, anytime.", color: "#C41E3A" },
  { icon: Star, title: "Best Rates", desc: "Competitive commissions with no hidden fees. Ever.", color: "#1B3A6B" },
];

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="why-choose-us" className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block bg-[#C41E3A]/8 text-[#C41E3A] text-sm font-bold px-5 py-2 rounded-full mb-5 tracking-wide uppercase">Why Choose Us</span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-[#0D1F3C] tracking-tight mb-5">
            Numbers That <span className="text-[#1B3A6B]">Speak</span> for Themselves
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">Trusted by thousands of clients across the United States.</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#F8FAFC] rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style={{ backgroundColor: `${s.color}15` }}>
                <s.icon className="w-7 h-7" style={{ color: s.color }} />
              </div>
              <AnimatedCounter target={s.value} suffix={s.suffix} />
              <p className="text-gray-500 text-sm font-medium mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="group bg-white border border-gray-100 rounded-3xl p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 group-hover:rotate-3" style={{ backgroundColor: `${f.color}12` }}>
                <f.icon className="w-7 h-7" style={{ color: f.color }} />
              </div>
              <h3 className="font-display font-bold text-lg text-[#0D1F3C] mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
