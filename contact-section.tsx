"use client"
import { useEffect, useRef } from 'react'

const BILLS = ['Electricity', 'Water', 'Gas', 'Internet', 'Phone', 'Rent']

export default function HeroSection() {
  const tickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = tickerRef.current
    if (!el) return
    let pos = 0
    const speed = 0.5
    const animate = () => {
      pos -= speed
      if (pos <= -el.scrollWidth / 2) pos = 0
      el.style.transform = `translateX(${pos}px)`
      requestAnimationFrame(animate)
    }
    const id = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0a1628]">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30" />

      {/* Animated blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay:'2s'}} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-5"
        style={{backgroundImage:'linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)',backgroundSize:'60px 60px'}} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-amber-400 text-sm font-semibold tracking-wide">Trusted by 5,000+ Customers Across the USA</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
              Pay Your{' '}
              <span className="gradient-text">Bills</span>
              <br />Fast &{' '}
              <span className="text-emerald-400">Secure</span>
            </h1>

            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Electricity, water, gas, internet, phone, and rent — all in one place.
              No hidden fees. No hassle. Just fast, reliable payments across the United States.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a href="https://wa.me/17869972761?text=Hello!%20I%20want%20to%20pay%20my%20bill%20now."
                target="_blank" rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 to-amber-500 text-[#0a1628] font-black px-8 py-4 rounded-2xl text-lg shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 transition-all overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <svg className="relative w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="relative">Pay via WhatsApp</span>
              </a>
              <a href="#services"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-bold px-8 py-4 rounded-2xl text-lg hover:border-amber-400/50 hover:bg-white/5 transition-all">
                View Services
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {[
                { icon: '🔒', text: '100% Secure' },
                { icon: '⚡', text: 'Same-Day Processing' },
                { icon: '🇺🇸', text: 'All 50 States' },
                { icon: '💬', text: '24/7 Support' },
              ].map(b => (
                <div key={b.text} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                  <span>{b.icon}</span>
                  <span className="text-slate-300 text-xs font-medium">{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — floating card */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Main card */}
              <div className="glass rounded-3xl p-6 shadow-2xl animate-float">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Bills Solutions Center</p>
                    <p className="text-white font-bold text-lg">Payment Portal</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-[#0a1628] font-black text-xl">B</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    { label: 'Electricity', amount: '$124.50', status: 'Paid', color: 'emerald' },
                    { label: 'Internet', amount: '$89.99', status: 'Paid', color: 'emerald' },
                    { label: 'Water', amount: '$45.00', status: 'Processing', color: 'amber' },
                  ].map(item => (
                    <div key={item.label} className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
                      <span className="text-slate-300 text-sm font-medium">{item.label}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-white font-bold text-sm">{item.amount}</span>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                          item.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                        }`}>{item.status}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-amber-400 to-amber-500 rounded-2xl p-4 text-center">
                  <p className="text-[#0a1628] text-xs font-semibold mb-1">Total Saved This Month</p>
                  <p className="text-[#0a1628] font-black text-2xl">$18.50</p>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-emerald-500 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg animate-bounce-slow">
                ✓ Instant Confirmation
              </div>
              <div className="absolute -bottom-4 -left-4 glass text-white text-xs font-medium px-3 py-2 rounded-xl shadow-lg">
                🔐 Bank-Level Security
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling ticker */}
      <div className="relative z-10 border-t border-white/10 bg-white/5 py-3 overflow-hidden">
        <div ref={tickerRef} className="flex gap-12 whitespace-nowrap" style={{width:'max-content'}}>
          {[...BILLS, ...BILLS, ...BILLS, ...BILLS].map((b, i) => (
            <span key={i} className="text-slate-400 text-sm font-medium flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
              {b} Bills
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
