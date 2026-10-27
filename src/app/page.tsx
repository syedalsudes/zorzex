import AboutStatsSection from "@/components/AboutStatsSection";
import FaqSection from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ServicesTicker from "@/components/ServicesTicker";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";


export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutStatsSection />
      <ServicesSection />
      <TestimonialsSection />
      <ServicesTicker />
      <TeamSection />
      <ServicesTicker />
      <FaqSection />
    </>
  );
}
