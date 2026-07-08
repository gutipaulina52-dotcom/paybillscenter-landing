import Header from "@/app/_components/header";
import HeroSection from "@/app/_components/hero-section";
import ServicesSection from "@/app/_components/services-section";
import WhyChooseUs from "@/app/_components/why-choose-us";
import HowItWorks from "@/app/_components/how-it-works";
import PricingSection from "@/app/_components/pricing-section";
import TestimonialsSection from "@/app/_components/testimonials-section";
import ContactSection from "@/app/_components/contact-section";
import Footer from "@/app/_components/footer";
import FloatingWhatsApp from "@/app/_components/floating-whatsapp";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <HowItWorks />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
