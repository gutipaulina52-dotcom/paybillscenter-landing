"use client"
import { useEffect, useRef } from 'react'

const PLANS = [
  {
    name: 'Basic',
    price: '$3.99',
    period: 'per bill',
    desc: 'Perfect for individuals paying 1-2 bills per month.',
    features: ['1-2 bills per month', 'WhatsApp support', 'Same-day processing', 'Digital receipt', 'All utility types'],
    cta: 'Get Started',
    popular: false,
    color: 'border-slate-200',
    btnClass: 'bg-[#0a1628] text-white hover:bg-[#112244]',
  },
  {
    name: 'Premium',
    price: '$2.99',
    period: 'per bill',
    desc: 'Best value for families with multiple monthly bills.',
    features: ['Unlimited bills', 'Priority WhatsApp support', 'Instant processing', 'Digital receipts', 'All utility types', 'Monthly summary report', 'Dedicated agent'],
    cta: 'Most Popular — Start Now',
    popular: true,
    color: 'border-amber-400',
    btnClass: 'bg-gradient-to-r from-amber-400 to-amber-500 text-[#0a1628] hover:from-amber-500 hover:to-amber-600',
  },
  {
    name: 'Business',
    price: 'Custom',
    period: 'pricing',
    desc: 'For businesses, landlords, and property managers.',
    features: ['Bulk bill payments', 'Dedicated account manager', 'API integration available', 'Custom reporting', 'Priority processing', 'Volume discounts', 'SLA guarantee'],
    cta: 'Contact for Pricing',
    popular: false,
    color: 'border-slate-200',
    btnClass: 'bg-[#0a1628] text-white hover:bg-[#112244]',
  },
]

export default function PricingSection() {
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
    <section id="pricing" ref={sectionRef} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-[#0a1628]/10 text-[#0a1628] text-sm font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0a1628] mb-4">
            Simple, Transparent{' '}
            <span className="text-amber-500">Pricing</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            No hidden fees. No surprises. Just honest pricing for a service you can trust.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {PLANS.map((p, i) => (
            <div key={p.name}
              className={`reveal relative bg-white rounded-3xl p-8 border-2 ${p.color} shadow-sm ${p.popular ? 'shadow-amber-500/20 shadow-2xl scale-105' : 'hover:shadow-xl'} card-hover transition-all`}
              style={{ transitionDelay: `${i * 100}ms` }}>
              {p.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-500 text-[#0a1628] text-xs font-black px-6 py-2 rounded-full shadow-lg whitespace-nowrap">
                  ⭐ Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-black text-[#0a1628] mb-1">{p.name}</h3>
                <p className="text-slate-500 text-sm mb-4">{p.desc}</p>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-black text-[#0a1628]">{p.price}</span>
                  <span className="text-slate-400 text-sm mb-2">/{p.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {p.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-slate-600">
                    <span className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="https://wa.me/17869972761?text=Hello!%20I%20am%20interested%20in%20your%20bill%20payment%20service."
                target="_blank" rel="noopener noreferrer"
                className={`block w-full text-center font-bold py-4 rounded-2xl transition-all hover:scale-105 ${p.btnClass}`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-8 reveal">
          All plans include our satisfaction guarantee. Not happy? We'll make it right.
        </p>
      </div>
    </section>
  )
}
