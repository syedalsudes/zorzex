import React from 'react';
import {
  TrendingUp,
  Zap,
  Terminal,
  Layers,
  Star,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export default function AboutBentoSection() {
  return (
    <section className="relative w-full bg-white text-neutral-900 py-16 sm:py-24 lg:py-32 xl:py-40 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28 overflow-hidden border-t border-neutral-100 font-sans">
      {/* Ambient Radial Orange Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] sm:w-[600px] lg:w-[850px] xl:w-[1100px] h-[350px] sm:h-[600px] lg:h-[850px] xl:h-[1100px] bg-gradient-to-tr from-[#ff4d00]/15 via-[#ff4d00]/5 to-transparent blur-[140px] xl:blur-[220px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl xl:max-w-[1550px] 2xl:max-w-[1850px] mx-auto space-y-12 sm:space-y-16 lg:space-y-20 xl:space-y-24">

        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between border-b border-neutral-200/80 pb-8 sm:pb-12 xl:pb-16">
          <div className="lg:col-span-8 space-y-4 xl:space-y-6">
            {/* Mission Pill with Glow Pulse */}
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-neutral-100/90 border border-neutral-200">
              <span className="w-1 h-2.5 rounded-[1px] bg-[#ff4d00]" />
              <span className="text-[10.5px] font-mono font-semibold tracking-[0.16em] uppercase text-neutral-700">
                Mission &amp; Velocity
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-wider leading-[1.15]">
              <span className="text-neutral-400">Our focus is simple</span> <br />
              <strong className="font-semibold text-neutral-950">
                Design to <span className="text-[#ff4d00]">convert.</span>
              </strong>
            </h2>
          </div>

          <p className="lg:col-span-4 text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl text-neutral-600 font-normal leading-relaxed">
            Hum slow delivery aur generic templates mein vishwas nahi rakhte. Hamara core promise high-speed execution aur zero-compromise code quality hai.
          </p>
        </div>

        {/* Bento Grid: Fully Scaled for 2K / 4K Screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 xl:gap-10 items-stretch">

          {/* ================= COLUMN 1 (LEFT STACK) ================= */}
          <div className="flex flex-col gap-6 sm:gap-8 xl:gap-10 md:col-span-1">

            {/* Top Pill Card */}
            <div className="group relative bg-gradient-to-br from-white via-white to-[#fff8f5] border border-[#ff4d00]/25 rounded-[28px] xl:rounded-[36px] 2xl:rounded-[42px] p-6 xl:p-8 flex items-center justify-between shadow-xs transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_-10px_rgba(255,77,0,0.22)] hover:border-[#ff4d00]/60 overflow-hidden cursor-pointer">
              {/* Hover Radial Background Shade */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff4d00]/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex items-center -space-x-3 xl:-space-x-4 relative z-10">
                <div className="w-11 h-11 xl:w-14 xl:h-14 rounded-full bg-[#ff4d00] border-2 border-white flex items-center justify-center text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  <Terminal className="w-5 h-5 xl:w-6 xl:h-6" />
                </div>
                <div className="w-11 h-11 xl:w-14 xl:h-14 rounded-full bg-neutral-900 border-2 border-white flex items-center justify-center text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-1">
                  <Zap className="w-5 h-5 xl:w-6 xl:h-6 text-[#ff4d00]" />
                </div>
                <div className="w-11 h-11 xl:w-14 xl:h-14 rounded-full bg-[#fff0eb] border-2 border-white flex items-center justify-center text-[#ff4d00] shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-2">
                  <Layers className="w-5 h-5 xl:w-6 xl:h-6" />
                </div>
              </div>

              <div className="text-right relative z-10">
                <span className="text-xs xl:text-sm tracking-wider text-[#ff4d00] uppercase font-bold block">
                  Modern Stack
                </span>
                <span className="text-[11px] xl:text-xs text-neutral-500 font-medium">Next.js & Flutter</span>
              </div>
            </div>

            {/* Bottom Turnaround Card (<14 Days) */}
            <div className="group relative bg-white border border-[#ff4d00]/25 rounded-[32px] xl:rounded-[40px] 2xl:rounded-[48px] p-8 xl:p-12 flex-1 flex flex-col justify-between overflow-hidden shadow-xs transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_45px_-12px_rgba(255,77,0,0.25)] hover:border-[#ff4d00]/60 min-h-[280px] xl:min-h-[360px] cursor-pointer">
              {/* Permanent Orange Accent Line + Dynamic Hover Expansion */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#ff4d00] to-transparent opacity-70 group-hover:opacity-100 group-hover:h-[3px] transition-all duration-500" />
              <div className="absolute -bottom-16 -right-16 w-44 h-44 bg-[#ff4d00]/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />

              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-md bg-[#ff4d00]/10 text-[#ff4d00] text-[10px] xl:text-xs font-bold tracking-wider uppercase mb-4 transition-colors group-hover:bg-[#ff4d00] group-hover:text-white">
                  Sprint Delivery
                </span>
                <p className="text-neutral-800 text-sm sm:text-base xl:text-lg 2xl:text-xl font-medium leading-relaxed">
                  Concept se production launch tak rapid milestone build.
                </p>
              </div>

              <div className="mt-8 relative z-10">
                <div className="text-5xl sm:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight text-neutral-950 flex items-baseline gap-1.5 transition-transform duration-300 group-hover:translate-x-1">
                  <span className="text-[#ff4d00]">&lt;</span>14{' '}
                  <span className="text-2xl sm:text-3xl xl:text-4xl text-neutral-500 font-normal">Days</span>
                </div>
                <p className="text-[10px] xl:text-xs text-[#ff4d00] font-bold tracking-widest uppercase mt-2">
                  Average Project Turnaround
                </p>
              </div>
            </div>

          </div>

          {/* ================= COLUMN 2 (CENTER PERFORMANCE) ================= */}
          <div className="group relative bg-gradient-to-b from-white via-white to-[#fff8f5] border border-[#ff4d00]/25 rounded-[32px] xl:rounded-[40px] 2xl:rounded-[48px] p-8 xl:p-12 flex flex-col justify-between overflow-hidden shadow-xs transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_45px_-12px_rgba(255,77,0,0.25)] hover:border-[#ff4d00]/60 min-h-[380px] xl:min-h-[460px] cursor-pointer">
            {/* Ambient Corner Glow on Hover */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#ff4d00]/15 rounded-full blur-3xl group-hover:scale-150 group-hover:bg-[#ff4d00]/25 transition-all duration-700 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#ff4d00]/10 text-[#ff4d00] text-[10px] xl:text-xs font-bold tracking-wider uppercase">
                  Benchmark
                </span>
                <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-full bg-[#fff0eb] text-[#ff4d00] flex items-center justify-center transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <Zap className="w-5 h-5 xl:w-6 xl:h-6 fill-[#ff4d00]" />
                </div>
              </div>

              <p className="text-neutral-800 text-sm sm:text-base xl:text-lg 2xl:text-xl font-medium leading-relaxed">
                Clean code architecture aur Lighthouse optimization by default.
              </p>
            </div>

            <div className="my-8 relative z-10">
              <div className="text-6xl sm:text-7xl xl:text-8xl 2xl:text-9xl font-bold tracking-tight text-neutral-950 flex items-baseline transition-transform duration-300 group-hover:translate-x-1">
                99<span className="text-4xl sm:text-5xl xl:text-6xl text-[#ff4d00] font-bold">+</span>
              </div>
              <p className="text-[10px] xl:text-xs text-neutral-500 font-semibold tracking-widest uppercase mt-2">
                Google Lighthouse & SEO Score
              </p>
            </div>

            {/* Live Status Pill with interactive pulse */}
            <div className="relative z-10 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#ff4d00]/[0.08] border border-[#ff4d00]/25 w-fit group-hover:border-[#ff4d00]/60 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff4d00] opacity-80" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff4d00]" />
              </span>
              <span className="text-[10px] xl:text-xs font-bold uppercase tracking-wider text-[#ff4d00]">
                Active Sprint Slots Open
              </span>
            </div>
          </div>

          {/* ================= COLUMN 3 (RIGHT STUDIO CARD) ================= */}
          <div className="group relative bg-gradient-to-br from-[#fffaf7] via-white to-[#fff2ec] border-2 border-[#ff4d00]/30 rounded-[32px] xl:rounded-[40px] 2xl:rounded-[48px] p-8 xl:p-12 flex flex-col justify-between overflow-hidden shadow-xs transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_50px_-10px_rgba(255,77,0,0.3)] hover:border-[#ff4d00]/80 md:col-span-2 lg:col-span-1 min-h-[380px] xl:min-h-[460px] cursor-pointer">
            {/* Background Watermark that highlights on Hover */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[#ff4d00]/10 group-hover:text-[#ff4d00]/20 group-hover:scale-105 transition-all duration-700 pointer-events-none select-none">
              <TrendingUp className="w-64 h-64 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 stroke-[1.2]" />
            </div>

            <div className="relative z-10 space-y-5">
              <div className="w-12 h-12 xl:w-14 xl:h-14 rounded-2xl bg-[#ff4d00] text-white flex items-center justify-center shadow-[0_6px_16px_rgba(255,77,0,0.35)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-45">
                <ArrowUpRight className="w-6 h-6 xl:w-7 xl:h-7" />
              </div>

              <p className="text-neutral-800 text-sm sm:text-base xl:text-lg 2xl:text-xl font-medium leading-relaxed max-w-sm">
                Direct engineer communication. Zero account manager delays, live staging previews, aur dedicated priority support.
              </p>
            </div>

            <div className="relative z-10 pt-10 xl:pt-14 flex items-end justify-between border-t border-[#ff4d00]/20">
              <div>
                <div className="text-5xl sm:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight text-neutral-950 flex items-baseline transition-transform duration-300 group-hover:translate-x-1">
                  &lt;2<span className="text-2xl sm:text-3xl xl:text-4xl text-[#ff4d00] font-bold">hrs</span>
                </div>
                <p className="text-[10px] xl:text-xs text-[#ff4d00] font-bold uppercase tracking-widest mt-1.5">
                  Direct Response Time
                </p>
              </div>

              <div className="text-right">
                <div className="flex items-center justify-end gap-1 text-[#ff4d00] mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 xl:w-5 xl:h-5 fill-[#ff4d00] transition-transform duration-300 group-hover:scale-110" />
                  ))}
                </div>
                <span className="text-[10px] xl:text-xs font-bold tracking-widest uppercase text-neutral-500">
                  Sprint Support
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}