"use client"
import { useEffect, useRef } from 'react'

const REVIEWS = [
  { name: 'Maria G.', city: 'Miami, FL', rating: 5, text: 'I've been using Bills Solutions Center for 8 months and I couldn't be happier. They paid my FPL bill in minutes and I got confirmation right away. Highly recommend!', avatar: 'MG', color: 'from-pink-400 to-rose-500' },
  { name: 'Carlos R.', city: 'New York, NY', rating: 5, text: 'Super fast and reliable. I pay my Spectrum internet and Con Edison electricity every month through them. Never had a single issue. 5 stars!', avatar: 'CR', color: 'from-blue-400 to-indigo-500' },
  { name: 'Jennifer L.', city: 'Houston, TX', rating: 5, text: 'As a landlord with 12 units, I needed a reliable service for bulk payments. Bills Solutions Center handles everything professionally. Best decision I made.', avatar: 'JL', color: 'from-emerald-400 to-teal-500' },
  { name: 'Roberto M.', city: 'Los Angeles, CA', rating: 5, text: 'The WhatsApp support is incredible. I send my bill info and within minutes it's paid. The team is always responsive and professional. 100% trustworthy.', avatar: 'RM', color: 'from-purple-400 to-violet-500' },
  { name: 'Ana P.', city: 'Chicago, IL', rating: 5, text: 'I was skeptical at first but after my first payment I was sold. They paid my Peoples Gas bill instantly and the fee was very reasonable. Will keep using!', avatar: 'AP', color: 'from-amber-400 to-orange-500' },
  { name: 'David K.', city: 'Atlanta, GA', rating: 5, text: 'Excellent service! They helped me pay my Georgia Power and AT&T bills when I was traveling. The 24/7 availability is a game changer. Thank you!', avatar: 'DK', color: 'from-cyan-400 to-blue-500' },
]

export default function Testimonials() {
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
    <section id="testimonials" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-[#0a1628]/10 text-[#0a1628] text-sm font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0a1628] mb-4">
            What Our Customers{' '}
            <span className="text-amber-500">Are Saying</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
            <span className="text-slate-500 text-sm ml-2">5.0 average from 500+ reviews</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <div key={r.name}
              className="reveal card-hover bg-slate-50 rounded-3xl p-6 border border-slate-100 hover:border-amber-200 hover:shadow-xl transition-all"
              style={{ transitionDelay: `${i * 80}ms` }}>
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(r.rating)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">"{r.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${r.color} flex items-center justify-center text-white text-xs font-black`}>
                  {r.avatar}
                </div>
                <div>
                  <p className="text-[#0a1628] font-bold text-sm">{r.name}</p>
                  <p className="text-slate-400 text-xs">{r.city}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-xs bg-emerald-100 text-emerald-700 font-semibold px-2 py-1 rounded-full">Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
