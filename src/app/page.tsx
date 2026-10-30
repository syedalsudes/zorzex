import AboutStatsSection from "@/components/AboutStatsSection";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import ServicesTicker from "@/components/ServicesTicker";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUsSection from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutStatsSection />
      <ServicesSection />
      <ProcessSection />
      <WhyChooseUsSection />
      {/* <TestimonialsSection /> */}
      {/* <ServicesTicker /> */}
      {/* <TeamSection /> */}
      {/* <ServicesTicker /> */}
      <FaqSection />
      <CtaSection />
    </>
  );
}
