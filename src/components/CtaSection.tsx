'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Clock, Zap, ShieldCheck, Sparkles } from 'lucide-react';

export default function CtaSection() {
  const [copied, setCopied] = useState(false);
  const agencyEmail = 'hello@zorzex.com';

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(agencyEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="relative w-full bg-transparent text-neutral-900 py-20 sm:py-28 lg:py-36 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28 overflow-hidden font-sans">
      
      {/* Background Soft Amber/Orange Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] lg:w-[1000px] h-[550px] lg:h-[750px] bg-gradient-to-tr from-[#ea580c]/18 via-[#f97316]/10 to-[#fed7aa]/25 blur-[170px] pointer-events-none rounded-full" />
      <div className="absolute -top-10 -left-10 w-96 h-96 bg-[#f97316]/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl xl:max-w-[1550px] 2xl:max-w-[1850px] mx-auto space-y-12 sm:space-y-16">

        {/* Main CTA Bento Box */}
        <div className="group relative bg-white/85 backdrop-blur-md border border-orange-200/80 rounded-[36px] sm:rounded-[44px] lg:rounded-[52px] p-8 sm:p-14 lg:p-20 shadow-[0_20px_50px_rgba(234,88,12,0.08)] overflow-hidden transition-all duration-500 hover:border-[#ea580c]/60 hover:shadow-[0_30px_70px_-15px_rgba(234,88,12,0.22)]">

          {/* Active Radiant Top Warm Edge */}
          <div className="absolute top-0 left-12 right-12 h-[2.5px] bg-gradient-to-r from-transparent via-[#ea580c] to-transparent pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Subtle Corner Ambient Inside Card */}
          <div className="absolute -bottom-28 -right-28 w-80 h-80 bg-gradient-to-br from-[#ea580c]/20 to-[#fed7aa]/40 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center justify-between">

            {/* Left Side: Typography & Conversion Action */}
            <div className="lg:col-span-7 space-y-7">

              {/* Headline */}
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-light uppercase tracking-tight leading-[1.08]">
                <span className="text-neutral-400">Ready to build</span> <br />
                <span className="font-semibold text-neutral-950">Something </span>
                <span className="font-semibold text-[#ea580c] underline decoration-[#ea580c]/30 underline-offset-8 decoration-4 hover:decoration-[#ea580c] transition-colors">
                  iconic?
                </span>
              </h2>

              <p className="text-sm md:text-base text-neutral-600 font-normal leading-relaxed max-w-lg">
                Bypass generic templates and slow agency bureaucracy. Collaborate directly with core engineers and ship production-ready software at record velocity.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#ea580c] text-white rounded-full font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-[#c2410c] hover:shadow-[0_10px_30px_rgba(234,88,12,0.4)] active:scale-[0.98] cursor-pointer"
                >
                  <span>Start a Project</span>
                  <span className="w-7 h-7 rounded-full bg-white text-[#ea580c] flex items-center justify-center transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110 shadow-xs">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </span>
                </a>

                {/* Interactive Email Copy Button */}
                <button
                  type="button"
                  onClick={copyEmail}
                  className={`inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full border text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer shadow-xs active:scale-[0.98] ${
                    copied 
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-800' 
                      : 'bg-white hover:bg-orange-50/80 border-orange-200 hover:border-[#ea580c]/60 text-neutral-700 hover:text-neutral-950'
                  }`}
                >
                  {copied ? (
                    <>
                      <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center animate-bounce">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-emerald-700 font-bold">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <div className="w-5 h-5 rounded-full bg-orange-100/80 text-[#ea580c] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Copy className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span className="font-medium">{agencyEmail}</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Right Side: Micro Bento Cards */}
            <div className="lg:col-span-5 flex flex-col gap-4">

              {/* CARD 1: Orange Icon (#ea580c) + Rich Orange Gradient & Glow */}
              <div className="group/card relative bg-white/90 backdrop-blur-md border-2 border-orange-200/80 hover:border-[#ea580c] rounded-2xl p-4 sm:p-5 transition-all duration-500 shadow-xs hover:shadow-[0_20px_45px_-8px_rgba(234,88,12,0.32)] hover:translate-x-2 flex items-center justify-between gap-4 cursor-pointer overflow-hidden">
                
                {/* Visible Warm Orange Gradient Spread */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f97316]/20 via-[#ea580c]/12 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Massive Radiant Glow Bulb */}
                <div className="absolute -top-16 -right-16 w-52 h-52 bg-gradient-to-br from-[#ea580c]/35 via-[#f97316]/20 to-transparent rounded-full blur-2xl opacity-0 group-hover/card:opacity-100 group-hover/card:scale-125 transition-all duration-700 pointer-events-none" />

                <div className="relative z-10 flex items-center gap-4">
                  {/* ICON 1: Orange */}
                  <div className="w-12 h-12 rounded-xl bg-orange-600 border border-orange-200 flex items-center justify-center text-white shrink-0 shadow-[0_4px_14px_rgba(234,88,12,0.18)] transition-all duration-700 group-hover/card:bg-[#ea580c] group-hover/card:text-white group-hover/card:border-transparent group-hover/card:scale-110 group-hover/card:rotate-[360deg] group-hover/card:shadow-[0_8px_20px_rgba(234,88,12,0.4)]">
                    <Clock className="w-5 h-5 transition-transform" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-neutral-900 group-hover/card:text-[#ea580c] tracking-tight transition-colors">
                        Rapid Turnaround
                      </h4>
                      <span className="text-[9px] font-bold uppercase tracking-wider bg-orange-100 text-[#ea580c] px-2 py-0.5 rounded-full border border-orange-200">
                        14 Days
                      </span>
                    </div>
                    <p className="text-xs text-neutral-600 font-normal mt-1">MVP delivery within 14 business days.</p>
                  </div>
                </div>

                {/* Arrow Pill */}
                <div className="relative z-10 w-8 h-8 rounded-full bg-white border border-orange-200 flex items-center justify-center text-[#ea580c] group-hover/card:bg-[#ea580c] group-hover/card:text-white group-hover/card:border-transparent transition-all duration-300 shrink-0 shadow-xs">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-300 group-hover/card:rotate-45" />
                </div>
              </div>

              {/* CARD 2: Black Icon (neutral-950) + Rich Orange Gradient & Glow */}
              <div className="group/card relative bg-white/90 backdrop-blur-md border-2 border-orange-200/80 hover:border-[#ea580c] rounded-2xl p-4 sm:p-5 transition-all duration-500 shadow-xs hover:shadow-[0_20px_45px_-8px_rgba(234,88,12,0.32)] hover:translate-x-2 flex items-center justify-between gap-4 cursor-pointer overflow-hidden">
                
                {/* Visible Warm Orange Gradient Spread */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f97316]/20 via-[#ea580c]/12 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Massive Radiant Glow Bulb */}
                <div className="absolute -top-16 -right-16 w-52 h-52 bg-gradient-to-br from-[#ea580c]/35 via-[#f97316]/20 to-transparent rounded-full blur-2xl opacity-0 group-hover/card:opacity-100 group-hover/card:scale-125 transition-all duration-700 pointer-events-none" />

                <div className="relative z-10 flex items-center gap-4">
                  {/* ICON 2: Black */}
                  <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-white shrink-0 shadow-[0_4px_14px_rgba(0,0,0,0.25)] transition-all duration-700 group-hover/card:bg-black group-hover/card:text-[#ea580c] group-hover/card:scale-110 group-hover/card:rotate-[360deg] group-hover/card:shadow-[0_8px_22px_rgba(0,0,0,0.4)]">
                    <Zap className="w-5 h-5 fill-current transition-transform" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-neutral-900 group-hover/card:text-[#ea580c] tracking-tight transition-colors">
                        Zero Compromise Code
                      </h4>
                      <span className="text-[9px] font-bold uppercase tracking-wider bg-neutral-900 text-white px-2 py-0.5 rounded-full border border-neutral-800">
                        98+ Score
                      </span>
                    </div>
                    <p className="text-xs text-neutral-600 font-normal mt-1">Built on Next.js with Lighthouse 98+ scores.</p>
                  </div>
                </div>

                <div className="relative z-10 w-8 h-8 rounded-full bg-white border border-orange-200 flex items-center justify-center text-neutral-800 group-hover/card:bg-neutral-950 group-hover/card:text-[#ea580c] group-hover/card:border-neutral-900 transition-all duration-300 shrink-0 shadow-xs">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-300 group-hover/card:rotate-45" />
                </div>
              </div>

              {/* CARD 3: Orange Icon (#ea580c) + Rich Orange Gradient & Glow */}
              <div className="group/card relative bg-white/90 backdrop-blur-md border-2 border-orange-200/80 hover:border-[#ea580c] rounded-2xl p-4 sm:p-5 transition-all duration-500 shadow-xs hover:shadow-[0_20px_45px_-8px_rgba(234,88,12,0.32)] hover:translate-x-2 flex items-center justify-between gap-4 cursor-pointer overflow-hidden">
                
                {/* Visible Warm Orange Gradient Spread */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f97316]/20 via-[#ea580c]/12 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Massive Radiant Glow Bulb */}
                <div className="absolute -top-16 -right-16 w-52 h-52 bg-gradient-to-br from-[#ea580c]/35 via-[#f97316]/20 to-transparent rounded-full blur-2xl opacity-0 group-hover/card:opacity-100 group-hover/card:scale-125 transition-all duration-700 pointer-events-none" />

                <div className="relative z-10 flex items-center gap-4">
                  {/* ICON 3: Orange */}
                  <div className="w-12 h-12 rounded-xl bg-orange-600 border border-orange-200 flex items-center justify-center text-white shrink-0 shadow-[0_4px_14px_rgba(234,88,12,0.18)] transition-all duration-700 group-hover/card:bg-[#ea580c] group-hover/card:text-white group-hover/card:border-transparent group-hover/card:scale-110 group-hover/card:rotate-[360deg] group-hover/card:shadow-[0_8px_20px_rgba(234,88,12,0.4)]">
                    <ShieldCheck className="w-5 h-5 transition-transform" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-neutral-900 group-hover/card:text-[#ea580c] tracking-tight transition-colors">
                        Direct Engineer Access
                      </h4>
                      <span className="text-[9px] font-bold uppercase tracking-wider bg-orange-100 text-[#ea580c] px-2 py-0.5 rounded-full border border-orange-200">
                        Live Slack
                      </span>
                    </div>
                    <p className="text-xs text-neutral-600 font-normal mt-1">Daily syncs and instant feedback on Slack.</p>
                  </div>
                </div>

                <div className="relative z-10 w-8 h-8 rounded-full bg-white border border-orange-200 flex items-center justify-center text-[#ea580c] group-hover/card:bg-[#ea580c] group-hover/card:text-white group-hover/card:border-transparent transition-all duration-300 shrink-0 shadow-xs">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-300 group-hover/card:rotate-45" />
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}