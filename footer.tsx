import Header from './_components/header'
import HeroSection from './_components/hero-section'
import ServicesSection from './_components/services-section'
import WhyChooseUs from './_components/why-choose-us'
import HowItWorks from './_components/how-it-works'
import PricingSection from './_components/pricing-section'
import Testimonials from './_components/testimonials-section'
import ContactSection from './_components/contact-section'
import Footer from './_components/footer'
import FloatingWhatsApp from './_components/floating-whatsapp'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <HowItWorks />
      <PricingSection />
      <Testimonials />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
