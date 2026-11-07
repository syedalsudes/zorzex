"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Check,
  Copy,
  Clock,
  ShieldCheck,
  Zap,
  Send,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const agencyEmail = "hello@zorzex.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(agencyEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="relative w-full bg-transparent text-neutral-900 font-sans overflow-hidden selection:bg-[#ff4d00] selection:text-white">

      <section
        style={{
          maskImage: "radial-gradient(135% 100% at 50% 0%, black 82%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(135% 100% at 50% 0%, black 82%, transparent 100%)",
        }}
        className="relative w-full overflow-hidden bg-gradient-to-b from-[#1f0a02] via-[#321105] to-[#431407] pt-32 sm:pt-40 lg:pt-48 pb-32 sm:pb-44 text-white shadow-[0_30px_70px_rgba(255,77,0,0.18)]"
      >

        {/* 1. Precision Dot Grid Overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-15"
          style={{
            backgroundImage: "radial-gradient(#ff6b35 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* 2. Top Neon Orange Flare */}
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

        {/* ================= CONTENT (1:1 EXACT SAME FORMAT) ================= */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-5">

          {/* Massive Bold Heading */}
          <h1 className="font-heading text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tight text-white leading-[0.88] drop-shadow-[0_15px_35px_rgba(0,0,0,0.7)] select-none">
            Contact Us<span className="text-[#ff4d00] drop-shadow-[0_0_25px_#ff4d00]">.</span>
          </h1>

          {/* Breadcrumb Navigation: Home > Contact Us */}
          <nav aria-label="Breadcrumb" className="inline-flex items-center justify-center gap-2 pt-2 font-body text-xs sm:text-sm font-medium">
            <Link
              href="/"
              className="text-orange-200/80 hover:text-white transition-colors"
            >
              Home
            </Link>

            <ChevronRight className="w-3.5 h-3.5 text-orange-400/70 stroke-[2.5]" />

            <span className="text-white font-semibold tracking-wide bg-white/10 px-3 py-0.5 rounded-full border border-white/15 backdrop-blur-sm">
              Contact Us
            </span>
          </nav>

        </div>
      </section>

      {/* ================= INTERACTIVE CONTACT & FORM SECTION ================= */}
      <section className="relative w-full py-20 sm:py-28 lg:py-36 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 overflow-hidden font-sans">

        {/* Atmospheric Background Glow Behind Grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] lg:w-[1100px] h-[500px] bg-gradient-to-tr from-[#ff4d00]/12 via-[#ea580c]/6 to-transparent blur-[160px] rounded-full -z-10"
        />

        <div className="relative z-10 max-w-7xl xl:max-w-[1550px] 2xl:max-w-[1850px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* ================= LEFT COLUMN: CONTACT DETAILS & OPERATIONAL CHANNELS ================= */}
            <div className="lg:col-span-5 space-y-8 sm:space-y-10">

              {/* Section Header */}
              <div className="space-y-6">


                {/* 2-Word Bold Headline (Clean, Compact & Strictly Single Line) */}
                <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-950 leading-tight whitespace-nowrap">
                  Let's <span className="text-[#ff4d00]">Connect.</span>
                </h2>

                {/* Detailed Editorial Description with Left Orange Border */}
                <div className="pt-1">
                  <p className="font-body text-sm sm:text-base lg:text-lg text-neutral-700 font-normal leading-relaxed max-w-lg border-l-2 border-[#ff4d00] pl-5 sm:pl-6">
                    Bypass generic agency account managers and discuss your roadmap directly with our core engineering leads.
                  </p>

                </div>

              </div>
              {/* Interactive Direct Channel Cards */}
              <div className="space-y-4">

                {/* Email Card with Copy Trigger */}
                <div className="group relative bg-white/90 border-2 border-orange-200/70 hover:border-[#ff4d00] rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-xs hover:shadow-[0_16px_36px_-8px_rgba(255,77,0,0.2)] hover:-translate-y-1 hover:scale-[1.01] flex items-center justify-between gap-4 overflow-hidden backdrop-blur-xs">
                  {/* Subtle Orange Glow Spread on Hover */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#ff4d00]/10 via-[#ea580c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10 flex items-center gap-4 min-w-0">
                    {/* Icon Box: Orange to Jet Black + Rotate on Hover */}
                    <div className="w-12 h-12 rounded-xl bg-orange-100/80 border border-orange-200/80 flex items-center justify-center text-[#ff4d00] group-hover:bg-[#070707] group-hover:text-white group-hover:border-neutral-800 group-hover:rotate-6 transition-all duration-300 shrink-0 shadow-2xs">
                      <Mail className="w-5 h-5 transition-transform group-hover:scale-105" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10.5px] font-mono uppercase text-neutral-400 font-semibold tracking-wider block">
                        Direct Email
                      </span>
                      <a
                        href={`mailto:${agencyEmail}`}
                        className="text-sm sm:text-base font-bold text-neutral-900 group-hover:text-[#ff4d00] transition-colors truncate block"
                      >
                        {agencyEmail}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className="relative z-10 p-2.5 rounded-xl bg-orange-100/70 hover:bg-[#ff4d00] text-[#ff4d00] hover:text-white border border-orange-200/70 hover:border-[#ff4d00] transition-all duration-200 cursor-pointer shadow-2xs shrink-0"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600 group-hover:text-white" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone / WhatsApp Card */}
                <div className="group relative bg-white/90 border-2 border-orange-200/70 hover:border-[#ff4d00] rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-xs hover:shadow-[0_16px_36px_-8px_rgba(255,77,0,0.2)] hover:-translate-y-1 hover:scale-[1.01] flex items-center justify-between gap-4 overflow-hidden backdrop-blur-xs">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#ff4d00]/10 via-[#ea580c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10 flex items-center gap-4 min-w-0">
                    <div className="w-12 h-12 rounded-xl bg-orange-100/80 border border-orange-200/80 flex items-center justify-center text-[#ff4d00] group-hover:bg-[#070707] group-hover:text-white group-hover:border-neutral-800 group-hover:rotate-6 transition-all duration-300 shrink-0 shadow-2xs">
                      <Phone className="w-5 h-5 transition-transform group-hover:scale-105" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10.5px] font-mono uppercase text-neutral-400 font-semibold tracking-wider block">
                        Direct Line &amp; WhatsApp
                      </span>
                      <a
                        href="tel:+1234567890"
                        className="text-sm sm:text-base font-bold text-neutral-900 group-hover:text-[#ff4d00] transition-colors truncate block"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="relative z-10 w-8 h-8 rounded-full bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[#ff4d00] group-hover:bg-[#ff4d00] group-hover:text-white transition-all shrink-0">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-300 group-hover:rotate-45" />
                  </div>
                </div>

                {/* Operations Hub Card */}
                <div className="group relative bg-white/90 border-2 border-orange-200/70 hover:border-[#ff4d00] rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-xs hover:shadow-[0_16px_36px_-8px_rgba(255,77,0,0.2)] hover:-translate-y-1 hover:scale-[1.01] flex items-center gap-4 overflow-hidden backdrop-blur-xs">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#ff4d00]/10 via-[#ea580c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10 flex items-center gap-4 min-w-0">
                    <div className="w-12 h-12 rounded-xl bg-orange-100/80 border border-orange-200/80 flex items-center justify-center text-[#ff4d00] group-hover:bg-[#070707] group-hover:text-white group-hover:border-neutral-800 group-hover:rotate-6 transition-all duration-300 shrink-0 shadow-2xs">
                      <MapPin className="w-5 h-5 transition-transform group-hover:scale-105" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10.5px] font-mono uppercase text-neutral-400 font-semibold tracking-wider block">
                        Engineering Rig
                      </span>
                      <span className="text-sm sm:text-base font-bold text-neutral-900 block truncate">
                        Global Remote // Distributed Studio
                      </span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* ================= RIGHT COLUMN: INTERACTIVE HIGH-CONVERSION FORM ================= */}
            <div className="lg:col-span-7">
              <div className="relative bg-white/95 border-2 border-orange-200/80 rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-12 shadow-[0_24px_55px_-15px_rgba(255,77,0,0.16)] overflow-hidden backdrop-blur-md">

                {/* 1. Subtle Precision Dot Grid Texture inside Form */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-0 opacity-[0.14]"
                  style={{
                    backgroundImage: "radial-gradient(#ff6b35 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                  }}
                />

                {/* 2. Top-Right Atmospheric Orange Flare */}
                <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-[#ff4d00]/25 via-[#ea580c]/12 to-transparent rounded-full blur-3xl z-0" />

                {/* 3. Bottom-Left Warm Ambient Glow */}
                <div className="pointer-events-none absolute -bottom-20 -left-20 w-56 h-56 bg-[#ff6b35]/15 rounded-full blur-2xl z-0" />

                {/* Form Header */}
                <div className="relative z-10 mb-8 pb-6 border-b border-orange-100/90 flex items-center justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-1.5">
                      <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#ff4d00]">
                        Inquiry Terminal
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-tight text-neutral-950">
                      Project Scope Inquiry
                    </h3>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">

                  {/* Field 1: Name & Field 2: Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 flex items-center justify-between">
                        <span>Full Name</span>
                        <span className="text-[#ff4d00]">*</span>
                      </label>
                      <div className="relative group">
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Sterling"
                          className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl bg-orange-50/50 hover:bg-orange-50/80 border border-orange-200/90 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:border-[#ff4d00] focus:shadow-[0_0_0_4px_rgba(255,77,0,0.14)] focus:outline-none transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 flex items-center justify-between">
                        <span>Work Email</span>
                        <span className="text-[#ff4d00]">*</span>
                      </label>
                      <div className="relative group">
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl bg-orange-50/50 hover:bg-orange-50/80 border border-orange-200/90 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:border-[#ff4d00] focus:shadow-[0_0_0_4px_rgba(255,77,0,0.14)] focus:outline-none transition-all duration-200"
                        />
                      </div>
                    </div>

                  </div>

                  {/* Field 3: Phone & Field 4: Target Discipline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

                    {/* Phone */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 flex items-center justify-between">
                        <span>Direct Phone / WhatsApp</span>
                        <span className="text-[#ff4d00]">*</span>
                      </label>
                      <div className="relative group">
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl bg-orange-50/50 hover:bg-orange-50/80 border border-orange-200/90 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:border-[#ff4d00] focus:shadow-[0_0_0_4px_rgba(255,77,0,0.14)] focus:outline-none transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Subject / Scope */}
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 flex items-center justify-between">
                        <span>Target Discipline</span>
                        <span className="text-[#ff4d00]">*</span>
                      </label>
                      <div className="relative group">
                        <input
                          id="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="e.g. Next.js Web App, Flutter, AI Pipeline"
                          className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl bg-orange-50/50 hover:bg-orange-50/80 border border-orange-200/90 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:border-[#ff4d00] focus:shadow-[0_0_0_4px_rgba(255,77,0,0.14)] focus:outline-none transition-all duration-200"
                        />
                      </div>
                    </div>

                  </div>

                  {/* Field 5: Project Brief */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 block">
                      Technical Brief / Deliverable Goals
                    </label>
                    <div className="relative group">
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Outline your timeline, current stack, or specific deliverable goals..."
                        className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl bg-orange-50/50 hover:bg-orange-50/80 border border-orange-200/90 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:border-[#ff4d00] focus:shadow-[0_0_0_4px_rgba(255,77,0,0.14)] focus:outline-none transition-all duration-200 resize-none leading-relaxed"
                      />
                    </div>
                  </div>

                  {/* Prominent Solid Interactive Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      className="group relative w-full min-h-[58px] sm:min-h-[64px] flex items-center justify-between px-7 sm:px-9 py-4 sm:py-5 bg-gradient-to-r from-[#ff4d00] via-[#ff5a14] to-[#ea580c] hover:from-[#ea580c] hover:to-[#c2410c] text-white rounded-2xl font-bold text-sm sm:text-base tracking-wider uppercase shadow-[0_12px_32px_-4px_rgba(255,77,0,0.42)] hover:shadow-[0_18px_44px_-4px_rgba(255,77,0,0.55)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-300 cursor-pointer overflow-hidden"
                    >
                      {/* Subtle button surface shimmer */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

                      <span className="relative z-10 font-heading tracking-wide">
                        Dispatch Technical Inquiry
                      </span>

                      <div className="relative z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:rotate-45 group-hover:scale-110 group-hover:bg-white group-hover:text-[#ff4d00] shrink-0">
                        <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                      </div>
                    </button>
                  </div>

                  {/* Feedback Notification */}
                  {submitted && (
                    <div className="p-4 rounded-xl bg-orange-100/90 border border-orange-300 text-[#ff4d00] text-xs sm:text-sm font-semibold flex items-center gap-3 shadow-xs">
                      <div className="w-6 h-6 rounded-full bg-[#ff4d00] text-white flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>Inquiry successfully queued. Our technical lead will reach out shortly.</span>
                    </div>
                  )}

                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}