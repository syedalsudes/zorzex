'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Clock, Zap, ShieldCheck } from 'lucide-react';

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
    // FIX: bg-[#fafafa] ko bg-transparent kiya
    <section className="relative w-full bg-transparent text-neutral-900 py-24 sm:py-32 px-6 md:px-12 overflow-hidden border-t border-orange-200/50 font-sans">
      <div className="relative z-10 max-w-7xl mx-auto space-y-16">

        {/* Main CTA Bento Box */}
        <div className="group relative bg-white border-2 border-orange-200/70 rounded-[36px] sm:rounded-[44px] p-8 sm:p-14 lg:p-20 shadow-[0_20px_50px_rgba(255,77,0,0.05)] overflow-hidden transition-all duration-300 hover:border-[#ff4d00]/60">

          {/* Subtle Top Accent Line */}
          <div className="absolute top-0 left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-[#ff4d00]/50 to-transparent pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center justify-between">

            {/* Left Side: Typography & Conversion Action */}
            <div className="lg:col-span-7 space-y-7">

              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-orange-50 border border-orange-200/80 shadow-xs">
                <span className="w-1 h-2.5 rounded-[1px] bg-[#ff4d00]" />
                <span className="text-[10.5px] font-mono font-semibold tracking-[0.16em] uppercase text-neutral-700">
                  Sprint Slots Open
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-light uppercase tracking-tight leading-[1.08]">
                <span className="text-neutral-400">Ready to build</span> <br />
                <span className="font-semibold text-neutral-950">Something </span>
                <span className="font-semibold text-[#ff4d00] underline decoration-[#ff4d00]/25 underline-offset-8 decoration-2">
                  iconic?
                </span>
              </h2>

              <p className="text-sm md:text-base text-neutral-600 font-normal leading-relaxed max-w-lg">
                Bypass generic templates and slow agency bureaucracy. Collaborate directly with core engineers and ship production-ready software at record velocity.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[#ff4d00] text-white rounded-full font-medium text-xs tracking-wider uppercase transition-all duration-200 hover:bg-[#e04400] hover:shadow-[0_8px_24px_rgba(255,77,0,0.32)] active:scale-[0.98] cursor-pointer"
                >
                  <span>Start a Project</span>
                  <span className="w-6 h-6 rounded-full bg-white text-[#ff4d00] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 shadow-xs">
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                </a>

                {/* Email Copy Button */}
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-full bg-orange-50/70 hover:bg-orange-100/70 border border-orange-200 hover:border-[#ff4d00]/50 text-neutral-700 hover:text-neutral-950 text-xs font-mono tracking-wider transition-all cursor-pointer group"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 font-semibold">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#ff4d00] transition-transform group-hover:scale-110" />
                      <span>{agencyEmail}</span>
                    </>
                  )}
                </button>
              </div>

            </div>

         {/* Right Side: Micro Bento Cards */}
<div className="lg:col-span-5 flex flex-col gap-3.5">

  {/* Card 1: Rapid Turnaround */}
  <div className="group relative bg-[#fff9f5] hover:bg-white border-2 border-[#ff4d00]/25 hover:border-[#ff4d00] rounded-2xl p-4 sm:p-5 transition-all duration-300 shadow-xs hover:shadow-[0_10px_30px_-5px_rgba(255,77,0,0.25)] hover:translate-x-1.5 flex items-center justify-between gap-4 cursor-pointer overflow-hidden">
    
    {/* Left Accent Bar on Hover */}

    {/* Background Soft Glow on Hover */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#ff4d00]/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

    <div className="relative z-10 flex items-center gap-4">
      <div className="w-11 h-11 rounded-xl bg-white border border-[#ff4d00]/30 group-hover:bg-[#ff4d00] group-hover:border-[#ff4d00] flex items-center justify-center text-[#ff4d00] group-hover:text-white shrink-0 shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:rotate-6">
        <Clock className="w-5 h-5 transition-transform" />
      </div>
      <div>
        <h4 className="text-sm font-bold text-neutral-900 group-hover:text-[#ff4d00] tracking-tight transition-colors">
          Rapid Turnaround
        </h4>
        <p className="text-xs text-neutral-600 font-normal mt-0.5">MVP delivery within 14 business days.</p>
      </div>
    </div>

    {/* Right Arrow Mini Pill */}
    <div className="relative z-10 w-7 h-7 rounded-full bg-[#ff4d00]/10 text-[#ff4d00] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300 shrink-0">
      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
    </div>
  </div>

  {/* Card 2: Zero Compromise Code */}
  <div className="group relative bg-[#fff9f5] hover:bg-white border-2 border-[#ff4d00]/25 hover:border-[#ff4d00] rounded-2xl p-4 sm:p-5 transition-all duration-300 shadow-xs hover:shadow-[0_10px_30px_-5px_rgba(255,77,0,0.25)] hover:translate-x-1.5 flex items-center justify-between gap-4 cursor-pointer overflow-hidden">
    
    <div className="absolute inset-0 bg-gradient-to-r from-[#ff4d00]/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

    <div className="relative z-10 flex items-center gap-4">
      <div className="w-11 h-11 rounded-xl bg-white border border-[#ff4d00]/30 group-hover:bg-[#ff4d00] group-hover:border-[#ff4d00] flex items-center justify-center text-[#ff4d00] group-hover:text-white shrink-0 shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:-rotate-6">
        <Zap className="w-5 h-5 transition-transform" />
      </div>
      <div>
        <h4 className="text-sm font-bold text-neutral-900 group-hover:text-[#ff4d00] tracking-tight transition-colors">
          Zero Compromise Code
        </h4>
        <p className="text-xs text-neutral-600 font-normal mt-0.5">Built on Next.js with Lighthouse 98+ scores.</p>
      </div>
    </div>

    <div className="relative z-10 w-7 h-7 rounded-full bg-[#ff4d00]/10 text-[#ff4d00] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300 shrink-0">
      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
    </div>
  </div>

  {/* Card 3: Direct Engineer Access */}
  <div className="group relative bg-[#fff9f5] hover:bg-white border-2 border-[#ff4d00]/25 hover:border-[#ff4d00] rounded-2xl p-4 sm:p-5 transition-all duration-300 shadow-xs hover:shadow-[0_10px_30px_-5px_rgba(255,77,0,0.25)] hover:translate-x-1.5 flex items-center justify-between gap-4 cursor-pointer overflow-hidden">
    
    <div className="absolute inset-0 bg-gradient-to-r from-[#ff4d00]/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

    <div className="relative z-10 flex items-center gap-4">
      <div className="w-11 h-11 rounded-xl bg-white border border-[#ff4d00]/30 group-hover:bg-[#ff4d00] group-hover:border-[#ff4d00] flex items-center justify-center text-[#ff4d00] group-hover:text-white shrink-0 shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:rotate-6">
        <ShieldCheck className="w-5 h-5 transition-transform" />
      </div>
      <div>
        <h4 className="text-sm font-bold text-neutral-900 group-hover:text-[#ff4d00] tracking-tight transition-colors">
          Direct Engineer Access
        </h4>
        <p className="text-xs text-neutral-600 font-normal mt-0.5">Daily syncs and instant feedback on Slack.</p>
      </div>
    </div>

    <div className="relative z-10 w-7 h-7 rounded-full bg-[#ff4d00]/10 text-[#ff4d00] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300 shrink-0">
      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
    </div>
  </div>

</div>

          </div>

        </div>

        {/* Footer Meta Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-600 uppercase tracking-widest pt-2">
          <span className="flex items-center gap-2">
            <span className="w-1 h-2 rounded-[1px] bg-[#ff4d00]" />
            Zorzex Digital Product Studio
          </span>
          <span className="flex items-center gap-2 text-neutral-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
            Currently accepting Q1 / Q2 Projects
          </span>
        </div>

      </div>
    </section>
  );
}