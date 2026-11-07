import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import ServicesSection from '@/components/ServicesSection';
import CtaSection from '@/components/CtaSection';

export default function ServicesPage() {
  return (
    <div className="w-full">

      {/* ================= HERO SECTION (RICH BURNT ORANGE GLOW + CURVED MASK) ================= */}
      <section 
        style={{
          maskImage: "radial-gradient(135% 100% at 50% 0%, black 82%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(135% 100% at 50% 0%, black 82%, transparent 100%)",
        }}
        className="relative w-full overflow-hidden bg-gradient-to-b from-[#1f0a02] via-[#321105] to-[#431407] pt-32 sm:pt-40 lg:pt-48 pb-32 sm:pb-44 text-white shadow-[0_30px_70px_rgba(255,77,0,0.18)]"
      >

        {/* 1. Subtle Precision Dot Grid Overlay */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute inset-0 z-0 opacity-15"
          style={{
            backgroundImage: "radial-gradient(#ff6b35 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* 2. Primary Massive Neon Orange Top Flare */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] sm:w-[850px] lg:w-[1100px] h-[350px] sm:h-[450px] bg-gradient-to-b from-[#ff4d00]/45 via-[#ea580c]/25 to-transparent blur-[130px] rounded-full z-0" 
        />

        {/* 3. Deep Center Core Glow behind the title */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] lg:w-[700px] h-[200px] sm:h-[300px] bg-[#ff3b00]/30 blur-[90px] rounded-full z-0" 
        />

        {/* 4. Bottom Edge Warming Light */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-28 bg-[#f97316]/20 blur-[80px] rounded-full z-0" 
        />

        {/* ================= CONTENT ================= */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-5">
          
          {/* Main Centered Heading */}
          <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white leading-[0.95] drop-shadow-[0_12px_30px_rgba(0,0,0,0.6)]">
            Our Services<span className="text-[#ff4d00] drop-shadow-[0_0_25px_#ff4d00]">.</span>
          </h1>

          {/* Breadcrumb Navigation: Home > Our Services */}
          <nav aria-label="Breadcrumb" className="inline-flex items-center justify-center gap-2 pt-1 font-body text-xs sm:text-sm font-medium">
            <Link 
              href="/" 
              className="text-orange-200/80 hover:text-white transition-colors"
            >
              Home
            </Link>
            
            <ChevronRight className="w-3.5 h-3.5 text-orange-400/70 stroke-[2.5]" />
            
            <span className="text-white font-semibold tracking-wide bg-white/10 px-3 py-0.5 rounded-full border border-white/15 backdrop-blur-sm">
              Our Services
            </span>
          </nav>

        </div>
      </section>

      {/* Services List / Grid Section */}
      <ServicesSection />

      <CtaSection />

    </div>
  );
}