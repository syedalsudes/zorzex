'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, MessageSquare, Zap, ShieldCheck, Clock } from 'lucide-react';

export default function CtaSection() {
    const [copied, setCopied] = useState(false);
    const agencyEmail = 'hello@zorzex.com';

    const copyEmail = () => {
        navigator.clipboard.writeText(agencyEmail);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="relative w-full bg-white text-neutral-900 py-24 sm:py-32 px-6 md:px-12 overflow-hidden border-t border-neutral-100 font-sans">
            {/* Background Soft Orange Ambient Light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#ff4d00]/10 via-[#ff4d00]/5 to-transparent blur-[160px] pointer-events-none rounded-full" />

            <div className="relative z-10 max-w-7xl mx-auto space-y-16">

                {/* Main CTA Card Box */}
                <div className="relative bg-[#fffdfc] border border-neutral-200/90 rounded-[36px] sm:rounded-[44px] p-8 sm:p-14 lg:p-20 shadow-sm overflow-hidden hover:border-[#ff4d00]/30 transition-all duration-300">

                    {/* Subtle Corner Background Glow */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#ff4d00]/10 via-transparent to-transparent blur-[100px] pointer-events-none rounded-full" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center justify-between">

                        {/* Left Side: Clean & Punchy Typography */}
                        <div className="lg:col-span-7 space-y-6">

                            {/* Premium Status Pill */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50/80 backdrop-blur-md border border-neutral-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff4d00] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff4d00]"></span>
                                </span>
                                <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-neutral-800">
                                    Sprint Slots Open
                                </span>
                            </div>

                            {/* Natural Agency Headline */}
                            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light uppercase tracking-wider leading-[1.1]">
                                <span className="text-neutral-400">Ready to build</span> <br />
                                <strong className="font-semibold text-neutral-950">Something iconic?</strong>
                            </h2>

                            <p className="text-sm md:text-base text-neutral-600 font-normal leading-relaxed max-w-lg">
                                Generic templates ya slow agency bureaucracy ko skip karein. Direct core engineers ke saath collaborate karein aur apna product record speed me ship karein.
                            </p>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
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

                                {/* Email Copy Button */}
                                <button
                                    onClick={copyEmail}
                                    className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-white border border-neutral-200 hover:border-[#ff4d00]/40 text-neutral-700 hover:text-neutral-950 text-xs font-mono tracking-wider transition-all shadow-xs cursor-pointer"
                                >
                                    {copied ? (
                                        <>
                                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                                            <span className="text-emerald-600 font-semibold">Email Copied!</span>
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-3.5 h-3.5 text-[#ff4d00]" />
                                            <span>{agencyEmail}</span>
                                        </>
                                    )}
                                </button>
                            </div>

                        </div>

                        {/* Right Side: Bento Style Quick-Value Cards */}
                        <div className="lg:col-span-5 flex flex-col gap-4">

                            {/* Feature 1 */}
                            <div className="bg-white border border-neutral-200/80 rounded-[22px] p-5 shadow-xs flex items-center gap-4">
                                <div className="w-10 h-10 rounded-2xl bg-neutral-50 border border-neutral-200/60 flex items-center justify-center text-[#ff4d00] shrink-0">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-neutral-900 tracking-tight">Rapid Turnaround</h4>
                                    <p className="text-xs text-neutral-500 font-normal">MVP delivery within 14 business days.</p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-white border border-neutral-200/80 rounded-[22px] p-5 shadow-xs flex items-center gap-4">
                                <div className="w-10 h-10 rounded-2xl bg-neutral-50 border border-neutral-200/60 flex items-center justify-center text-[#ff4d00] shrink-0">
                                    <Zap className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-neutral-900 tracking-tight">Zero Compromise Code</h4>
                                    <p className="text-xs text-neutral-500 font-normal">Built on Next.js with Lighthouse 98+ scores.</p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="bg-white border border-neutral-200/80 rounded-[22px] p-5 shadow-xs flex items-center gap-4">
                                <div className="w-10 h-10 rounded-2xl bg-neutral-50 border border-neutral-200/60 flex items-center justify-center text-[#ff4d00] shrink-0">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-neutral-900 tracking-tight">Direct Engineer Access</h4>
                                    <p className="text-xs text-neutral-500 font-normal">Daily syncs and instant feedback on Slack.</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                {/* Subtle Footer Prompt */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400 uppercase tracking-widest pt-2">
                    <span>Zorzex Digital Product Studio</span>
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                        Currently accepting Q1 / Q2 Projects
                    </span>
                </div>

            </div>
        </section>
    );
}