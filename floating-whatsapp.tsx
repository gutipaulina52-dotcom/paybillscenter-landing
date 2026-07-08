"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Send, Phone, Mail, MapPin, CheckCircle2, AlertCircle, MessageCircle } from "lucide-react";

export default function ContactSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Redirect to WhatsApp with form data
    const msg = `Hello! My name is ${form.name}.%0AEmail: ${form.email}%0APhone: ${form.phone}%0AService needed: ${form.service}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/16892985282?text=${msg}`, "_blank");
    setStatus("success");
    setTimeout(() => setStatus("idle"), 4000);
  };

  const contactInfo = [
    { icon: Phone, label: "WhatsApp", value: "+1 (689) 298-5282", href: "https://wa.me/16892985282", color: "#22C55E" },
    { icon: Mail, label: "Email", value: "billserviceamerican@gmail.com", href: "mailto:billserviceamerican@gmail.com", color: "#1B3A6B" },
    { icon: MapPin, label: "Location", value: "Brooklyn Center, MN, United States", href: "#", color: "#C41E3A" },
    { icon: MessageCircle, label: "Facebook", value: "Bills Solutions Center", href: "https://facebook.com", color: "#3B82F6" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F8FAFC]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block bg-[#C41E3A]/8 text-[#C41E3A] text-sm font-bold px-5 py-2 rounded-full mb-5 tracking-wide uppercase">Contact</span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-[#0D1F3C] tracking-tight mb-5">
            Get in <span className="text-[#1B3A6B]">Touch</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">Have questions? Send us a message or reach out via WhatsApp. We respond fast.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-2 space-y-4">
            <div className="bg-gradient-to-br from-[#1B3A6B] to-[#0D1F3C] rounded-3xl p-8 text-white">
              <h3 className="font-display font-black text-2xl mb-2">Contact Information</h3>
              <p className="text-white/60 text-sm mb-8">We're always open. Reach us anytime.</p>
              <div className="space-y-5">
                {contactInfo.map((c, i) => (
                  <a key={i} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                    className="flex items-center gap-4 group">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110" style={{ backgroundColor: `${c.color}25` }}>
                      <c.icon className="w-5 h-5" style={{ color: c.color }} />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs">{c.label}</p>
                      <p className="text-white text-sm font-medium group-hover:text-[#22C55E] transition-colors">{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a href="https://wa.me/16892985282?text=Hello%2C%20I%20need%20help%20with%20my%20bills"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#22C55E] hover:bg-[#16a34a] text-white w-full py-4 rounded-2xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02]">
              💬 Chat on WhatsApp Now
            </a>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#0D1F3C] mb-2">Full Name *</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 outline-none transition-all text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0D1F3C] mb-2">Email *</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 outline-none transition-all text-sm" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#0D1F3C] mb-2">Phone</label>
                  <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 outline-none transition-all text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0D1F3C] mb-2">Service Needed</label>
                  <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 outline-none transition-all text-sm bg-white">
                    <option value="">Select a service</option>
                    <option>Electricity</option>
                    <option>Water</option>
                    <option>Gas</option>
                    <option>Internet</option>
                    <option>Phone</option>
                    <option>Rent</option>
                    <option>Multiple Bills</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0D1F3C] mb-2">Message</label>
                <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your bill payment needs..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 outline-none transition-all text-sm resize-none" />
              </div>

              {status === "success" && (
                <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" /> Opening WhatsApp with your message...
                </div>
              )}

              <button type="submit" disabled={status === "loading"}
                className="w-full bg-[#1B3A6B] hover:bg-[#0f2847] text-white py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl hover:scale-[1.01] disabled:opacity-60">
                {status === "loading" ? "Sending..." : <><Send className="w-5 h-5" /> Send Message via WhatsApp</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
