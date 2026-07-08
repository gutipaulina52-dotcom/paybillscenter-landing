"use client"
import { useState, useEffect, useRef } from 'react'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Hello! My name is ${form.name}. I need help paying my ${form.service} bill. Phone: ${form.phone}. ${form.message}`
    window.open(`https://wa.me/17869972761?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const CONTACT_INFO = [
    { icon: '📱', label: 'WhatsApp / Phone', value: '(786) 997-2761', href: 'tel:+17869972761' },
    { icon: '✉️', label: 'Email', value: 'billssolutionscenter@gmail.com', href: 'mailto:billssolutionscenter@gmail.com' },
    { icon: '📍', label: 'Location', value: 'Serving All 50 States — USA', href: '#' },
    { icon: '🕐', label: 'Hours', value: 'Monday – Sunday: 8AM – 10PM EST', href: '#' },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-[#0a1628] relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-amber-400/10 border border-amber-400/20 text-amber-400 text-sm font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Ready to Pay Your Bills?{' '}
            <span className="gradient-text">Let's Talk</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Contact us now and we'll have your bill paid within minutes. No waiting, no hassle.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="reveal space-y-6">
            {CONTACT_INFO.map(c => (
              <a key={c.label} href={c.href}
                className="flex items-center gap-4 glass rounded-2xl p-5 hover:bg-white/10 transition-all group">
                <div className="w-12 h-12 bg-amber-400/10 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform flex-shrink-0">
                  {c.icon}
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">{c.label}</p>
                  <p className="text-white font-semibold">{c.value}</p>
                </div>
              </a>
            ))}

            {/* Social */}
            <div className="glass rounded-2xl p-5">
              <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-4">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { name: 'Facebook', href: 'https://facebook.com/billssolutionscenter', color: 'hover:bg-blue-600' },
                  { name: 'Instagram', href: 'https://instagram.com/billssolutionscenter', color: 'hover:bg-pink-600' },
                  { name: 'WhatsApp', href: 'https://wa.me/17869972761', color: 'hover:bg-green-600' },
                ].map(s => (
                  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                    className={`bg-white/10 ${s.color} text-white text-xs font-bold px-4 py-2 rounded-xl transition-all hover:scale-105`}>
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal">
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 space-y-5">
              <h3 className="text-white font-black text-xl mb-6">Send Us a Message</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-400 text-xs font-medium uppercase tracking-wider block mb-2">Your Name</label>
                  <input type="text" required placeholder="John Smith"
                    value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors" />
                </div>
                <div>
                  <label className="text-slate-400 text-xs font-medium uppercase tracking-wider block mb-2">Phone Number</label>
                  <input type="tel" required placeholder="(555) 000-0000"
                    value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors" />
                </div>
              </div>

              <div>
                <label className="text-slate-400 text-xs font-medium uppercase tracking-wider block mb-2">Bill Type</label>
                <select required value={form.service} onChange={e => setForm({...form, service: e.target.value})}
                  className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors">
                  <option value="" className="bg-[#0a1628]">Select a service...</option>
                  {['Electricity', 'Water', 'Gas', 'Internet', 'Phone', 'Rent', 'Other'].map(s => (
                    <option key={s} value={s} className="bg-[#0a1628]">{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-slate-400 text-xs font-medium uppercase tracking-wider block mb-2">Message (Optional)</label>
                <textarea rows={3} placeholder="Any additional details about your bill..."
                  value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none" />
              </div>

              <button type="submit"
                className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-[#0a1628] font-black py-4 rounded-2xl text-lg hover:from-amber-500 hover:to-amber-600 hover:scale-[1.02] transition-all shadow-xl shadow-amber-500/30 flex items-center justify-center gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
