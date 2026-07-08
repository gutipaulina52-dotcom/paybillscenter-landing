"use client"
import { useEffect, useRef } from 'react'

const STEPS = [
  { num: '01', icon: '📲', title: 'Contact Us', desc: 'Reach us via WhatsApp, phone, or our contact form. Available 24/7 for your convenience.', color: 'from-amber-400 to-orange-500' },
  { num: '02', icon: '📋', title: 'Share Bill Details', desc: 'Send us your bill information — account number, provider, and amount. Simple and secure.', color: 'from-blue-400 to-indigo-500' },
  { num: '03', icon: '💳', title: 'Make Payment', desc: 'Pay securely using your preferred method. We accept all major payment options.', color: 'from-emerald-400 to-teal-500' },
  { num: '04', icon: '✅', title: 'Get Confirmation', desc: 'Receive instant confirmation once your bill is paid. Keep your receipt for records.', color: 'from-purple-400 to-pink-500' },
]

export default function HowItWorks() {
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
    <section id="how-it-works" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-[#0a1628]/10 text-[#0a1628] text-sm font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0a1628] mb-4">
            Pay Your Bills in{' '}
            <span className="text-amber-500">4 Simple Steps</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            No complicated forms. No long waits. Just a simple, fast process designed for your convenience.
          </p>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-amber-400 via-blue-400 via-emerald-400 to-purple-400 opacity-30" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((s, i) => (
              <div key={s.num}
                className="reveal text-center group"
                style={{ transitionDelay: `${i * 120}ms` }}>
                {/* Step circle */}
                <div className="relative inline-flex mb-6">
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                    <span className="text-3xl">{s.icon}</span>
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-[#0a1628] text-white text-xs font-black rounded-full flex items-center justify-center border-2 border-white shadow">
                    {s.num}
                  </span>
                </div>

                <h3 className="text-xl font-black text-[#0a1628] mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 reveal">
          <a href="https://wa.me/17869972761?text=Hello!%20I%20want%20to%20start%20paying%20my%20bills."
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 to-amber-500 text-[#0a1628] font-black px-10 py-5 rounded-2xl text-lg shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 transition-all">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Start Now — It's Free to Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
