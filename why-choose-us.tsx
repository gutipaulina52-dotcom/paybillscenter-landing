"use client";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, CheckCircle2, Star } from "lucide-react";

const badges = [
  { icon: Shield, text: "100% Secure Payments" },
  { icon: Clock, text: "24h Processing" },
  { icon: CheckCircle2, text: "Verified Service" },
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1F3C] via-[#1B3A6B] to-[#0f2847]" />

      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#C41E3A]/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-[#22C55E]/8 rounded-full blur-[150px]" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#2E5FA1]/15 rounded-full blur-[100px]" />
      </div>

      {/* Stars pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
        backgroundSize: "40px 40px"
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-32 md:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            {/* Trust badge */}
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-8">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-[#F59E0B] fill-[#F59E0B]" />)}
              </div>
              <span className="text-white/90 text-sm font-medium">Trusted by 5,000+ clients across the USA</span>
            </motion.div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
              We Pay Your{" "}
              <span className="relative">
                <span className="text-[#22C55E]">Bills</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M0 6 Q100 0 200 6" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6"/>
                </svg>
              </span>
              <br />So You Can{" "}
              <span className="text-[#C41E3A]">Focus</span>
              <br />on What Matters
            </h1>

            <p className="text-white/70 text-xl mb-10 max-w-lg leading-relaxed">
              Fast, secure, and affordable bill payment services. Rent, electricity, water, gas, internet & phone — all in one place. <strong className="text-white/90">Your peace of mind is our mission.</strong>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.a href="https://wa.me/16892985282?text=Hello%2C%20I%20want%20to%20pay%20my%20bills"
                target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="bg-[#22C55E] hover:bg-[#16a34a] text-white px-8 py-4 rounded-2xl text-lg font-bold flex items-center justify-center gap-3 shadow-2xl shadow-green-500/30 transition-colors">
                💬 Pay Now via WhatsApp <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a href="#services" onClick={(e) => { e.preventDefault(); document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" }); }}
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-2xl text-lg font-bold flex items-center justify-center gap-3 backdrop-blur-sm transition-all">
                View Services
              </motion.a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              {badges.map((b, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-2 rounded-xl">
                  <b.icon className="w-4 h-4 text-[#22C55E]" />
                  <span className="text-white/80 text-sm font-medium">{b.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — floating card */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center">
            <div className="relative">
              {/* Main card */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 w-[380px] shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1B3A6B] to-[#2E5FA1] flex items-center justify-center">
                    <span className="text-white font-black text-xl">B</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg leading-tight">Bills Solutions Center</p>
                    <p className="text-[#22C55E] text-xs font-semibold tracking-widest">VERIFIED PAYMENTS</p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  {[
                    { label: "Electricity Bill", amount: "$124.50", status: "Paid ✓", color: "#22C55E" },
                    { label: "Water Bill", amount: "$45.00", status: "Paid ✓", color: "#22C55E" },
                    { label: "Internet Bill", amount: "$89.99", status: "Processing...", color: "#F59E0B" },
                    { label: "Rent Payment", amount: "$1,200.00", status: "Scheduled", color: "#3B82F6" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
                      <div>
                        <p className="text-white text-sm font-medium">{item.label}</p>
                        <p className="text-white/50 text-xs">{item.amount}</p>
                      </div>
                      <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ color: item.color, backgroundColor: `${item.color}20` }}>{item.status}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-[#22C55E]/20 border border-[#22C55E]/30 rounded-xl p-4 text-center">
                  <p className="text-[#22C55E] font-bold text-sm">✅ Fast • Secure • Reliable</p>
                  <p className="text-white/60 text-xs mt-1">Your Peace of Mind is Our Mission</p>
                </div>
              </div>

              {/* Floating mini cards */}
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#22C55E]/10 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-sm">Bill Paid!</p>
                  <p className="text-gray-400 text-xs">Just now</p>
                </div>
              </motion.div>

              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#1B3A6B]/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#1B3A6B]" />
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-sm">100% Secure</p>
                  <p className="text-gray-400 text-xs">Encrypted payments</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
