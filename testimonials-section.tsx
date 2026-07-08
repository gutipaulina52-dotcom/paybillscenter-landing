"use client"
import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 5000, suffix: '+', label: 'Happy Customers', icon: '😊' },
  { value: 15000, suffix: '+', label: 'Bills Paid', icon: '✅' },
  { value: 99, suffix: '%', label: 'Success Rate', icon: '🎯' },
  { value: 24, suffix: '/7', label: 'Support Available', icon: '💬' },
]

const FEATURES = [
  { icon: '⚡', title: 'Lightning Fast', desc: 'Most payments processed within minutes. Same-day confirmation guaranteed.' },
  { icon: '🔒', title: 'Bank-Level Security', desc: '256-bit SSL encryption. Your financial data is always protected.' },
  { icon: '💰', title: 'No Hidden Fees', desc: 'Transparent pricing. What you see is what you pay. Always.' },
  { icon: '🇺🇸', title: 'All 50 States', desc: 'We serve customers from New York to California and everywhere in between.' },
  { icon: '📞', title: '24/7 Support', desc: 'Real humans available via WhatsApp, phone, and email around the clock.' },
  { icon: '🏆', title: '5-Star Rated', desc: 'Consistently rated 5 stars by thousands of satisfied customers.' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 2000
        const steps = 60
        const increment = target / steps
        let current = 0
        const timer = setInterval(() => {
          current += increment
          if (current >= target) { setCount(target); clearInterval(timer) }
          else setCount(Math.floor(current))
        }, duration / steps)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

export default function WhyChooseUs() {
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
    <section id="why-us" ref={sectionRef} className="py-24 bg-[#0a1628] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-amber-400/10 border border-amber-400/20 text-amber-400 text-sm font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            The Most Trusted Bill Payment{' '}
            <span className="gradient-text">Service in the USA</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Thousands of families and businesses trust us every month to keep their utilities running.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {STATS.map((s, i) => (
            <div key={s.label}
              className="reveal glass rounded-3xl p-6 text-center hover:bg-white/10 transition-all card-hover"
              style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="text-4xl mb-3">{s.icon}</div>
              <div className="text-4xl font-black text-amber-400 mb-2">
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <p className="text-slate-400 text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <div key={f.title}
              className="reveal group glass rounded-2xl p-6 hover:bg-white/10 transition-all card-hover"
              style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="w-12 h-12 bg-amber-400/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">{f.icon}</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
