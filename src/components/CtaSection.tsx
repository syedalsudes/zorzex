'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Clock, Zap, ShieldCheck } from 'lucide-react';

export default function CtaSection() {
    const [copied, setCopied] = useState(false);
    const agencyEmail = 'hello@zorzex.com';

    const copyEmail = () => {
        navigator.clipboard.writeText(agencyEmail);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="relative w-full bg-[#fafafa] text-neutral-900 py-24 sm:py-32 px-6 md:px-12 overflow-hidden border-t border-neutral-200/70 font-sans">
            {/* Background Orange Ambient Lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#ff4d00]/[0.08] blur-[170px] pointer-events-none rounded-full" />
            <div className="absolute -top-32 right-10 w-96 h-96 bg-[#ff4d00]/[0.06] blur-[140px] pointer-events-none rounded-full" />

            <div className="relative z-10 max-w-7xl mx-auto space-y-16">

                {/* Main CTA Bento Box */}
                <div className="relative bg-white border border-neutral-200/90 rounded-[36px] sm:rounded-[44px] p-8 sm:p-14 lg:p-20 shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300 hover:border-[#ff4d00]/40">

                    {/* Subtle Top Accent Line */}
                    <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[#ff4d00]/40 to-transparent pointer-events-none" />

                    {/* Subtle Corner Background Glow */}
                    <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-gradient-to-bl from-[#ff4d00]/12 via-[#ff4d00]/[0.02] to-transparent blur-[110px] pointer-events-none rounded-full" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center justify-between">

                        {/* Left Side: Typography & Conversion Action */}
                        <div className="lg:col-span-7 space-y-7">

                            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-neutral-100/90 border border-neutral-200">
                                <span className="w-1 h-2.5 rounded-[1px] bg-[#ff4d00]" />
                                <span className="text-[10.5px] font-mono font-semibold tracking-[0.16em] uppercase text-neutral-700">
                                    Sprint Slots Open
                                </span>
                            </div>
                            {/* Headline with High-Impact Orange Pop */}
                            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light uppercase tracking-tight leading-[1.08]">
                                <span className="text-neutral-400">Ready to build</span> <br />
                                <span className="font-semibold text-neutral-950">Something </span>
                                <span className="font-semibold text-[#ff4d00] underline decoration-[#ff4d00]/25 underline-offset-8 decoration-2">
                                    iconic?
                                </span>
                            </h2>

                            <p className="text-sm md:text-base text-neutral-600 font-normal leading-relaxed max-w-lg">
                                Generic templates ya slow agency bureaucracy ko skip karein. Direct core engineers ke saath collaborate karein aur apna product record speed me ship karein.
                            </p>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
                                <div>
                                    <a
                                        href="#contact"
                                        className="group inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[#ff4d00] text-white rounded-full font-medium text-xs tracking-wider uppercase transition-all duration-200 hover:bg-[#e04400] hover:shadow-[0_8px_24px_rgba(255,77,0,0.32)] active:scale-[0.98]"
                                    >
                                        <span>Start a Project</span>
                                        <span className="w-6 h-6 rounded-full bg-white text-[#ff4d00] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 shadow-xs">
                                            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                                        </span>
                                    </a>
                                </div>

                                {/* Email Copy Button */}
                                <button
                                    onClick={copyEmail}
                                    className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-full bg-neutral-50/80 hover:bg-neutral-100/80 border border-neutral-200/90 hover:border-[#ff4d00]/40 text-neutral-700 hover:text-neutral-950 text-xs font-mono tracking-wider transition-all cursor-pointer group"
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

                        {/* Right Side: Bento Cards with Subtle Orange Micro-accents */}
                        <div className="lg:col-span-5 flex flex-col gap-3.5">

                            {/* Feature 1 */}
                            <div className="group bg-neutral-50/70 hover:bg-white border border-neutral-200/70 hover:border-[#ff4d00]/30 rounded-2xl p-4 sm:p-5 transition-all duration-300 shadow-2xs hover:shadow-[0_4px_20px_rgba(255,77,0,0.06)] flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200/80 group-hover:border-[#ff4d00]/30 group-hover:bg-[#ff4d00]/[0.06] flex items-center justify-center text-[#ff4d00] shrink-0 transition-colors">
                                    <Clock className="w-4 h-4 transition-transform group-hover:scale-110" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-neutral-900 tracking-tight flex items-center gap-2">
                                        Rapid Turnaround
                                    </h4>
                                    <p className="text-xs text-neutral-500 font-normal mt-0.5">MVP delivery within 14 business days.</p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="group bg-neutral-50/70 hover:bg-white border border-neutral-200/70 hover:border-[#ff4d00]/30 rounded-2xl p-4 sm:p-5 transition-all duration-300 shadow-2xs hover:shadow-[0_4px_20px_rgba(255,77,0,0.06)] flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200/80 group-hover:border-[#ff4d00]/30 group-hover:bg-[#ff4d00]/[0.06] flex items-center justify-center text-[#ff4d00] shrink-0 transition-colors">
                                    <Zap className="w-4 h-4 transition-transform group-hover:scale-110" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-neutral-900 tracking-tight">Zero Compromise Code</h4>
                                    <p className="text-xs text-neutral-500 font-normal mt-0.5">Built on Next.js with Lighthouse 98+ scores.</p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="group bg-neutral-50/70 hover:bg-white border border-neutral-200/70 hover:border-[#ff4d00]/30 rounded-2xl p-4 sm:p-5 transition-all duration-300 shadow-2xs hover:shadow-[0_4px_20px_rgba(255,77,0,0.06)] flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200/80 group-hover:border-[#ff4d00]/30 group-hover:bg-[#ff4d00]/[0.06] flex items-center justify-center text-[#ff4d00] shrink-0 transition-colors">
                                    <ShieldCheck className="w-4 h-4 transition-transform group-hover:scale-110" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-neutral-900 tracking-tight">Direct Engineer Access</h4>
                                    <p className="text-xs text-neutral-500 font-normal mt-0.5">Daily syncs and instant feedback on Slack.</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                {/* Subtle Footer Prompt */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500 uppercase tracking-widest pt-2">
                    <span className="flex items-center gap-2">
                        <span className="w-1 h-2 rounded-[1px] bg-[#ff4d00]" />
                        Zorzex Digital Product Studio
                    </span>
                    <span className="flex items-center gap-2 text-neutral-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                        Currently accepting Q1 / Q2 Projects
                    </span>
                </div>

            </div>
        </section>
    );
}