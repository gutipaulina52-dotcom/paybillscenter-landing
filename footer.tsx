"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Maria G.", role: "Regular Client · New York", text: "Bills Solutions Center saved me so much time! I used to spend hours trying to pay my bills online. Now it takes just a WhatsApp message. Absolutely love this service!", rating: 5, avatar: "MG" },
  { name: "Carlos R.", role: "Business Owner · Florida", text: "As a business owner, I need reliable bill payments. Their service is fast, affordable, and I always get confirmation within 24 hours. Highly recommended to everyone!", rating: 5, avatar: "CR" },
  { name: "Jennifer L.", role: "Monthly Subscriber · Texas", text: "The premium plan is worth every penny. They remind me when bills are due and process everything on time. My stress levels have dropped significantly. Thank you!", rating: 5, avatar: "JL" },
  { name: "Robert M.", role: "Senior Client · California", text: "I was skeptical at first, but after my first payment I was hooked. Professional, fast, and the team is always available on WhatsApp. 10/10 service!", rating: 5, avatar: "RM" },
  { name: "Ana P.", role: "Homeowner · Illinois", text: "Finally a service that actually works! I pay all my bills through them — electricity, water, internet, and rent. Never missed a payment since I started.", rating: 5, avatar: "AP" },
  { name: "David K.", role: "Entrepreneur · Georgia", text: "The business plan is perfect for my needs. Custom pricing, dedicated support, and same-day processing. This is exactly what busy professionals need.", rating: 5, avatar: "DK" },
];

export default function TestimonialsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block bg-[#1B3A6B]/8 text-[#1B3A6B] text-sm font-bold px-5 py-2 rounded-full mb-5 tracking-wide uppercase">Testimonials</span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-[#0D1F3C] tracking-tight mb-5">
            What Our <span className="text-[#C41E3A]">Clients</span> Say
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">Real reviews from real clients across the United States.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-[#F8FAFC] rounded-3xl p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative border border-gray-100/80 hover:border-transparent hover:bg-white">
              <Quote className="w-10 h-10 text-[#1B3A6B]/8 absolute top-5 right-5" />
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />)}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 relative z-10">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#1B3A6B] to-[#2E5FA1] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{t.avatar}</span>
                </div>
                <div>
                  <p className="font-bold text-[#0D1F3C] text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
