"use client"
import { useEffect, useRef } from 'react'

const SERVICES = [
  { icon: '⚡', title: 'Electricity', desc: 'FPL, Duke Energy, Con Edison, PECO, and 50+ providers nationwide.', color: 'from-yellow-400 to-orange-500', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' },
  { icon: '💧', title: 'Water', desc: 'Municipal water bills paid fast. All major water utilities accepted.', color: 'from-blue-400 to-cyan-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
  { icon: '🔥', title: 'Gas', desc: 'National Gas, Atmos Energy, SoCalGas, and more. Same-day processing.', color: 'from-orange-400 to-red-500', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
  { icon: '📡', title: 'Internet', desc: 'Comcast, AT&T, Spectrum, Verizon, T-Mobile, and all major ISPs.', color: 'from-purple-400 to-indigo-500', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
  { icon: '📱', title: 'Phone', desc: 'Prepaid and postpaid plans. All carriers. Instant top-up available.', color: 'from-emerald-400 to-teal-500', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
  { icon: '🏠', title: 'Rent', desc: 'Secure rent payments to your landlord or property management company.', color: 'from-pink-400 to-rose-500', bg: 'bg-pink-500/10', border: 'border-pink-500/20' },
]

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-[#0a1628]/10 text-[#0a1628] text-sm font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0a1628] mb-4">
            Everything You Need to{' '}
            <span className="text-amber-500">Pay Your Bills</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            One platform, all your bills. Fast, secure, and always available — 24 hours a day, 7 days a week.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <div key={s.title}
              className={`reveal card-hover group relative bg-white rounded-3xl p-8 border ${s.border} shadow-sm hover:shadow-xl cursor-pointer`}
              style={{ transitionDelay: `${i * 80}ms` }}>
              {/* Icon */}
              <div className={`w-16 h-16 ${s.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <span className="text-3xl">{s.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-black text-[#0a1628] mb-3">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{s.desc}</p>

              {/* CTA */}
              <a href={`https://wa.me/17869972761?text=Hello!%20I%20need%20to%20pay%20my%20${s.title}%20bill.`}
                target="_blank" rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 bg-gradient-to-r ${s.color} text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:scale-105 transition-all shadow-md`}>
                Pay {s.title} Bill
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* Hover glow */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 reveal">
          <p className="text-slate-500 mb-4">Don't see your provider? We cover 200+ utilities nationwide.</p>
          <a href="https://wa.me/17869972761?text=Hello!%20I%20have%20a%20question%20about%20my%20bill%20provider."
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700 transition-colors">
            Ask us about your provider →
          </a>
        </div>
      </div>
    </section>
  )
}
