import HeroSection from "./components/HeroSection";
import VisualShowcase from "./components/VisualShowcase";
import ServicesSection from "./components/ServicesSection";
import WhyUsSection from "./components/WhyUsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <VisualShowcase />
      <ServicesSection />
      <WhyUsSection />
      <ContactSection />
    </main>
  );
}
