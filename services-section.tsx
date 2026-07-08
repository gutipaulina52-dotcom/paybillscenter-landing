"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-choose-us" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1B3A6B] to-[#2E5FA1] flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
            <span className="text-white font-black text-lg">B</span>
          </div>
          <div className="hidden sm:block">
            <span className={`font-display font-bold text-base leading-tight block transition-colors ${scrolled ? "text-[#1B3A6B]" : "text-white"}`}>Bills Solutions</span>
            <span className="text-[#C41E3A] text-[10px] font-bold tracking-[0.2em] uppercase">Center</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleNav(e, link.href)}
              className={`text-sm font-medium transition-colors hover:text-[#C41E3A] ${scrolled ? "text-[#1B3A6B]" : "text-white/90"}`}>
              {link.label}
            </a>
          ))}
          <a href="https://wa.me/16892985282?text=Hello%2C%20I%20need%20help%20paying%20my%20bills"
            target="_blank" rel="noopener noreferrer"
            className="bg-[#22C55E] hover:bg-[#16a34a] text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-md hover:shadow-lg hover:scale-[1.02]">
            <Phone className="w-4 h-4" /> Get Started
          </a>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-[#1B3A6B]" : "text-white"}`} aria-label="Toggle menu">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-xl">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={(e) => handleNav(e, link.href)}
                  className="block px-4 py-3 text-[#1B3A6B] font-medium rounded-xl hover:bg-gray-50 transition-colors">
                  {link.label}
                </a>
              ))}
              <a href="https://wa.me/16892985282?text=Hello%2C%20I%20need%20help%20paying%20my%20bills"
                target="_blank" rel="noopener noreferrer"
                className="block mt-2 bg-[#22C55E] text-white text-center px-4 py-3 rounded-xl font-bold transition-all hover:bg-[#16a34a]">
                💬 Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
