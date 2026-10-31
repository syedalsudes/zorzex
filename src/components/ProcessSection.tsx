import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const steps = [
  {
    number: '1',
    title: 'Project Discovery & Architecture',
    desc: 'Deep-dive analysis into technical requirements, roadmap planning, and milestone scoping.',
  },
  {
    number: '2',
    title: 'Sprint-Based Development',
    desc: 'Direct engineer access, bi-weekly milestone builds, and access to live staging environments.',
  },
  {
    number: '3',
    title: 'Audit, Launch & Handoff',
    desc: 'Lighthouse 98+ audit, SEO optimization, cloud deployment, and 100% intellectual property handover.',
  },
];

export default function ProcessSection() {
  return (
    <section className="relative w-full bg-white text-neutral-900 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 overflow-hidden border-t border-neutral-100 font-sans">
      {/* Background Soft Orange Glow */}
      <div className="absolute top-1/3 right-10 w-[350px] sm:w-[500px] lg:w-[650px] h-[350px] sm:h-[500px] lg:h-[650px] bg-gradient-to-bl from-[#ff4d00]/10 via-[#ff4d00]/5 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl xl:max-w-[1550px] 2xl:max-w-[1850px] mx-auto space-y-12 sm:space-y-16">

        {/* Top Header & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end justify-between border-b border-neutral-200/80 pb-8 sm:pb-10">
          <div className="lg:col-span-8 space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-neutral-100/90 border border-neutral-200">
              <span className="w-1 h-2.5 rounded-[1px] bg-[#ff4d00]" />
              <span className="text-[10.5px] font-mono font-semibold tracking-[0.16em] uppercase text-neutral-700">
                Methodology &amp; Flow
              </span>
            </div>

            {/* Controlled Heading Size */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light uppercase tracking-wider leading-[1.15]">
              <span className="text-neutral-400">Engineered for</span> <br />
              <strong className="font-semibold text-neutral-950">
                Agile Execution<span className="text-[#ff4d00]">.</span>
              </strong>
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between space-y-4 sm:space-y-6">
            <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
              Zero communication bottlenecks. Direct transition from initial concept to a scalable, high-performance product.
            </p>

            <div>
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-6 py-3.5 bg-neutral-950 text-white rounded-full font-medium text-xs tracking-wider uppercase transition-all duration-300 hover:bg-[#ff4d00] hover:shadow-[0_4px_16px_rgba(255,77,0,0.35)]"
              >
                <span>Start a Project</span>
                <span className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* ================= DESKTOP STAGE (LG & BIG SCREENS: 100% SYNCED) ================= */}
        <div className="hidden lg:block w-full">
          <svg
            viewBox="0 0 1200 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto overflow-visible select-none"
          >
            {/* 1. Curved Line (Glow Shadow) */}
            <path
              d="M 20 230 C 80 270, 110 320, 190 320 C 310 320, 420 180, 580 230 C 720 280, 830 80, 960 70 L 1180 30"
              stroke="rgba(255, 77, 0, 0.15)"
              strokeWidth="14"
              strokeLinecap="round"
            />

            {/* 2. Curved Line (Main Orange Stroke) */}
            <path
              d="M 20 230 C 80 270, 110 320, 190 320 C 310 320, 420 180, 580 230 C 720 280, 830 80, 960 70 L 1180 30"
              stroke="#ff4d00"
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            {/* ================= STEP 1 (Locked at X:190, Y:320) ================= */}
            <circle cx="190" cy="320" r="18" fill="white" stroke="#ff4d00" strokeWidth="2.5" />
            <circle cx="190" cy="320" r="7" fill="#ff4d00" />

            {/* Watermark Number 1 - Vibrant Orange Fill + Crisp Outline */}
            <text
              x="360"
              y="380"
              fontSize="130"
              fontWeight="900"
              fill="rgba(255, 77, 0, 0.16)"
              stroke="#ff4d00"
              strokeWidth="1.2"
              strokeOpacity="0.3"
              fontFamily="sans-serif"
              className="select-none pointer-events-none"
            >
              1
            </text>

            <foreignObject x="175" y="350" width="290" height="200">
              <div className="group space-y-2 font-sans p-2 rounded-xl transition-all duration-300">
                <span className="text-[10px] font-bold text-[#ff4d00] tracking-widest uppercase block">
                  Phase 01
                </span>
                <h3 className="text-base font-semibold text-neutral-900 leading-snug group-hover:text-[#ff4d00] transition-colors">
                  {steps[0].title}
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                  {steps[0].desc}
                </p>
              </div>
            </foreignObject>

            {/* ================= STEP 2 (Locked at X:580, Y:230) ================= */}
            <circle cx="580" cy="230" r="18" fill="white" stroke="#ff4d00" strokeWidth="2.5" />
            <circle cx="580" cy="230" r="7" fill="#ff4d00" />

            {/* Watermark Number 2 - Vibrant Orange Fill + Crisp Outline */}
            <text
              x="750"
              y="290"
              fontSize="130"
              fontWeight="900"
              fill="rgba(255, 77, 0, 0.16)"
              stroke="#ff4d00"
              strokeWidth="1.2"
              strokeOpacity="0.3"
              fontFamily="sans-serif"
              className="select-none pointer-events-none"
            >
              2
            </text>

            <foreignObject x="565" y="260" width="290" height="200">
              <div className="group space-y-2 font-sans p-2 rounded-xl transition-all duration-300">
                <span className="text-[10px] font-bold text-[#ff4d00] tracking-widest uppercase block">
                  Phase 02
                </span>
                <h3 className="text-base font-semibold text-neutral-900 leading-snug group-hover:text-[#ff4d00] transition-colors">
                  {steps[1].title}
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                  {steps[1].desc}
                </p>
              </div>
            </foreignObject>

            {/* ================= STEP 3 (Locked at X:960, Y:70) ================= */}
            <circle cx="960" cy="70" r="18" fill="white" stroke="#ff4d00" strokeWidth="2.5" />
            <circle cx="960" cy="70" r="7" fill="#ff4d00" />

            {/* Watermark Number 3 - Vibrant Orange Fill + Crisp Outline */}
            <text
              x="1110"
              y="140"
              fontSize="130"
              fontWeight="900"
              fill="rgba(255, 77, 0, 0.16)"
              stroke="#ff4d00"
              strokeWidth="1.2"
              strokeOpacity="0.3"
              fontFamily="sans-serif"
              className="select-none pointer-events-none"
            >
              3
            </text>

            <foreignObject x="945" y="100" width="290" height="200">
              <div className="group space-y-2 font-sans p-2 rounded-xl transition-all duration-300">
                <span className="text-[10px] font-bold text-[#ff4d00] tracking-widest uppercase block">
                  Phase 03
                </span>
                <h3 className="text-base font-semibold text-neutral-900 leading-snug group-hover:text-[#ff4d00] transition-colors">
                  {steps[2].title}
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                  {steps[2].desc}
                </p>
              </div>
            </foreignObject>
          </svg>
        </div>

        {/* ================= MOBILE / TABLET TIMELINE (< 1024PX) ================= */}
        <div className="lg:hidden relative border-l-2 border-[#ff4d00] pl-6 ml-4 space-y-8 sm:space-y-10">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group p-3 rounded-2xl transition-colors hover:bg-[#fff9f6]">
              {/* Outer Indicator Dot on Vertical Line */}
              <div className="absolute -left-[37px] top-3.5 w-5 h-5 rounded-full bg-white border-2 border-[#ff4d00] flex items-center justify-center shadow-xs">
                <div className="w-2 h-2 rounded-full bg-[#ff4d00]" />
              </div>

              {/* Mobile Watermark Ghost Number */}
              <span className="absolute -top-5 right-2 text-6xl font-black text-[#ff4d00]/20 pointer-events-none select-none">
                {step.number}
              </span>

              <div className="relative z-10 space-y-1.5">
                <span className="text-[10px] font-bold text-[#ff4d00] tracking-widest uppercase">
                  Phase 0{step.number}
                </span>
                <h3 className="text-base sm:text-lg font-semibold text-neutral-900 group-hover:text-[#ff4d00] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed max-w-sm">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}