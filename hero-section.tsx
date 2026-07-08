export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-[#060e1e] text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <span className="text-[#0a1628] font-black text-lg">B</span>
              </div>
              <div>
                <span className="text-white font-black text-base leading-none block">Bills Solutions</span>
                <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">Center</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Fast, secure, and affordable bill payment services across all 50 states. Trusted by thousands of families and businesses.
            </p>
            <div className="flex gap-3">
              {[
                { label: 'FB', href: 'https://facebook.com/billssolutionscenter' },
                { label: 'IG', href: 'https://instagram.com/billssolutionscenter' },
                { label: 'WA', href: 'https://wa.me/17869972761' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/5 hover:bg-amber-400/20 hover:text-amber-400 rounded-lg flex items-center justify-center text-xs font-bold transition-all">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {['Electricity Bills', 'Water Bills', 'Gas Bills', 'Internet Bills', 'Phone Bills', 'Rent Payments'].map(s => (
                <li key={s}>
                  <a href="#services" className="hover:text-amber-400 transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Why Choose Us', href: '#why-us' },
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'Contact', href: '#contact' },
              ].map(l => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-amber-400 transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">📱</span>
                <a href="tel:+17869972761" className="hover:text-amber-400 transition-colors">(786) 997-2761</a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">✉️</span>
                <a href="mailto:billssolutionscenter@gmail.com" className="hover:text-amber-400 transition-colors break-all">billssolutionscenter@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">🕐</span>
                <span>Mon–Sun: 8AM–10PM EST</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">🇺🇸</span>
                <span>Serving All 50 States</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {year} Bills Solutions Center. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
          </div>
          <button onClick={() => window.scrollTo({top:0,behavior:'smooth'})}
            className="bg-white/5 hover:bg-amber-400/20 hover:text-amber-400 px-4 py-2 rounded-lg text-xs font-medium transition-all">
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}
