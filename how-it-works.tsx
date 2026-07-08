"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Zap, Droplets, Flame, Wifi, Phone, Home, ArrowRight } from "lucide-react";

const services = [
  { icon: Zap, name: "Electricity", desc: "Pay your electric bills from any provider quickly and securely. Never face a late fee again.", color: "#F59E0B", bg: "#FEF3C7", wa: "Electricity" },
  { icon: Droplets, name: "Water", desc: "Never miss a water bill payment again with our reliable and fast processing service.", color: "#3B82F6", bg: "#DBEAFE", wa: "Water" },
  { icon: Flame, name: "Gas", desc: "Gas bill payments made simple — any provider, any amount, processed within 24 hours.", color: "#EF4444", bg: "#FEE2E2", wa: "Gas" },
  { icon: Wifi, name: "Internet", desc: "Stay connected. Pay your internet bills hassle-free with instant confirmation.", color: "#8B5CF6", bg: "#EDE9FE", wa: "Internet" },
  { icon: Phone, name: "Phone", desc: "Mobile and landline payments processed in minutes. All major carriers accepted.", color: "#22C55E", bg: "#DCFCE7", wa: "Phone" },
  { icon: Home, name: "Rent", desc: "Pay your rent on time every month with our secure and reliable processing system.", color: "#1B3A6B", bg: "#DBEAFE", wa: "Rent" },
];

export default function ServicesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="py-24 md:py-32 bg-[#F8FAFC]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block bg-[#1B3A6B]/8 text-[#1B3A6B] text-sm font-bold px-5 py-2 rounded-full mb-5 tracking-wide uppercase">Our Services</span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-[#0D1F3C] tracking-tight mb-5">
            All Your Bills,{" "}
            <span className="text-[#C41E3A]">One Simple</span> Solution
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            We handle all types of bill payments so you can focus on what matters most. Fast, secure, and always on time.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.name} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.08 }}>
              <a href={`https://wa.me/16892985282?text=Hello%2C%20I%20need%20to%20pay%20my%20${encodeURIComponent(s.wa)}%20bill`}
                target="_blank" rel="noopener noreferrer"
                className="group block bg-white rounded-3xl p-7 shadow-sm hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 border border-gray-100/80 hover:border-transparent relative overflow-hidden">
                {/* Hover gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-3xl" style={{ background: `linear-gradient(135deg, ${s.color}08 0%, transparent 60%)` }} />

                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" style={{ backgroundColor: s.bg }}>
                    <s.icon className="w-8 h-8" style={{ color: s.color }} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#0D1F3C] mb-3 group-hover:text-[#1B3A6B] transition-colors">{s.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                  <div className="flex items-center gap-2 text-sm font-bold transition-colors" style={{ color: s.color }}>
                    Pay via WhatsApp <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-14">
          <a href="https://wa.me/16892985282?text=Hello%2C%20I%20need%20help%20with%20my%20bills"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#1B3A6B] hover:bg-[#0f2847] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02]">
            💬 Start Paying Your Bills Now <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
