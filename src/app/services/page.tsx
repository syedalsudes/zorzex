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
        className="relative w-full overflow-hidden bg-[#FF8200] pt-32 sm:pt-40 lg:pt-48 pb-32 sm:pb-44 text-[#0F0F12] shadow-[0_30px_70px_rgba(255,130,0,0.35)]"
      >

        {/* 1. Subtle Precision Dot Grid Overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(#0F0F12 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* 2. Top Warm Highlight Flare */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] sm:w-[850px] lg:w-[1100px] h-[350px] sm:h-[450px] bg-gradient-to-b from-[#ffb366]/60 via-[#ff9426]/30 to-transparent blur-[110px] rounded-full z-0"
        />

        {/* 3. Soft Center Depth Halo behind the title */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] lg:w-[700px] h-[200px] sm:h-[300px] bg-[#e07200]/45 blur-[90px] rounded-full z-0"
        />

        {/* 4. Bottom Edge Warm Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-28 bg-[#ffd9b3]/40 blur-[80px] rounded-full z-0"
        />

        {/* ================= CONTENT ================= */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-5">

          {/* Massive Bold Heading */}
          <h1 className="font-heading text-6xl sm:text-8xl md:text-9xl lg:text-[9.5rem] font-black tracking-tight text-white leading-[0.88] drop-shadow-[0_6px_0_#0F0F12] select-none">
            Our Services<span className="text-[#0F0F12] drop-shadow-none">.</span>
          </h1>

          {/* Breadcrumb Navigation: Home > Our Services */}
          <nav aria-label="Breadcrumb" className="inline-flex items-center justify-center gap-2 pt-3 font-body text-xs sm:text-sm font-bold">
            <Link
              href="/"
              className="text-[#0F0F12]/80 hover:text-[#0F0F12] transition-colors"
            >
              Home
            </Link>

            <ChevronRight className="w-3.5 h-3.5 text-[#0F0F12] stroke-[2.5]" />

            <span className="text-white font-semibold tracking-wide bg-[#0F0F12] px-3.5 py-1 rounded-full shadow-md">
              Our Services
            </span>
          </nav>

        </div>
      </section>

      <ServicesSection />

      <CtaSection />

    </div>
  );
}