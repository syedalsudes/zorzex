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
  Send 
} from "lucide-react";

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

      {/* ================= HERO SECTION (FULL SCREEN + SOLID WHITE TEXT) ================= */}
      <section className="relative w-full min-h-screen bg-[#070707] text-white overflow-hidden flex flex-col justify-between px-6 sm:px-10 md:px-16 lg:px-24 pt-32 sm:pt-40 pb-12 font-sans">
        
        {/* Subtle Dark Dot Grid Texture */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Deep Orange Ambient Glow */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-1/3 left-1/4 -translate-y-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] bg-gradient-to-tr from-[#ff4d00]/25 via-[#ff3b00]/10 to-transparent blur-[120px] md:blur-[180px] rounded-full" 
        />

        {/* Main Centered Content */}
        <div className="relative z-10 w-full max-w-6xl my-auto space-y-7 sm:space-y-9">
          
          {/* Top Subtitle with Accent Dash */}
          <div className="flex items-center gap-3">
            <span className="w-8 sm:w-11 h-[1.5px] bg-[#ff4d00]" />
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#ff4d00]">
              Get In Touch
            </span>
          </div>

          {/* Giant Pure White Headline */}
          <h1 className="font-heading text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black uppercase tracking-tight leading-[0.88] select-none text-white">
            Contact Us.
          </h1>

          {/* Editorial Narrative with Left Border */}
          <div className="pt-2">
            <p className="font-body text-neutral-300 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl border-l-2 border-[#ff4d00] pl-5 sm:pl-7">
              Ready to ship your next high-performance digital product? Bypass generic agency delays and collaborate directly with our lead architects.
            </p>
          </div>

        </div>

        {/* Bottom Subtle Meta Strip */}
        <div className="relative z-10 w-full max-w-6xl pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d00] animate-pulse" />
            <span className="text-neutral-400 uppercase tracking-widest">
              Direct Engineering Inquiries
            </span>
          </div>

          <div className="text-neutral-400 uppercase tracking-wider text-[11px]">
            Average Response: &lt;2 Business Hours
          </div>
        </div>

      </section>

      {/* ================= INTERACTIVE CONTACT & FORM SECTION ================= */}
      <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 border-t border-orange-200/50">
        <div className="relative z-10 max-w-7xl xl:max-w-[1550px] 2xl:max-w-[1850px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* ================= LEFT COLUMN: CONTACT DETAILS & HIGHLIGHTS ================= */}
            <div className="lg:col-span-5 space-y-10">
              
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-white/80 border border-orange-200/70 shadow-xs">
                  <span className="w-1 h-2.5 rounded-[1px] bg-[#ff4d00]" />
                  <span className="text-[10.5px] font-mono font-semibold tracking-[0.16em] uppercase text-neutral-700">
                    Direct Channels
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight leading-[1.12]">
                  <span className="text-neutral-500">Initiate your</span> <br />
                  <strong className="font-extrabold text-neutral-950">
                    Active <span className="text-[#ff4d00]">Sprint.</span>
                  </strong>
                </h2>

                <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
                  Have a technical roadmap ready or starting from an early concept? Reach out directly and we’ll schedule a technical discovery call.
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-4">
                
                {/* Email Card with Quick Copy */}
                <div className="group relative bg-white border-2 border-orange-200/70 hover:border-[#ff4d00] rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-xs flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[#ff4d00] group-hover:bg-[#ff4d00] group-hover:text-white transition-colors duration-300 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10.5px] font-mono uppercase text-neutral-400 font-semibold tracking-wider block">
                        Direct Email
                      </span>
                      <a href={`mailto:${agencyEmail}`} className="text-sm sm:text-base font-bold text-neutral-900 hover:text-[#ff4d00] transition-colors">
                        {agencyEmail}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className="p-2.5 rounded-lg bg-orange-50 hover:bg-orange-100 text-[#ff4d00] transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Card */}
                <div className="group relative bg-white border-2 border-orange-200/70 hover:border-[#ff4d00] rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-xs flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[#ff4d00] group-hover:bg-[#ff4d00] group-hover:text-white transition-colors duration-300 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10.5px] font-mono uppercase text-neutral-400 font-semibold tracking-wider block">
                      Direct Line / WhatsApp
                    </span>
                    <a href="tel:+1234567890" className="text-sm sm:text-base font-bold text-neutral-900 hover:text-[#ff4d00] transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                {/* Studio Location */}
                <div className="group relative bg-white border-2 border-orange-200/70 hover:border-[#ff4d00] rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-xs flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[#ff4d00] group-hover:bg-[#ff4d00] group-hover:text-white transition-colors duration-300 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10.5px] font-mono uppercase text-neutral-400 font-semibold tracking-wider block">
                      Operations Studio
                    </span>
                    <span className="text-sm sm:text-base font-bold text-neutral-900">
                      Global Remote // Core Hub
                    </span>
                  </div>
                </div>

              </div>

              {/* Guarantees Box */}
              <div className="p-6 rounded-2xl bg-white/70 border border-orange-200/70 space-y-3">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-neutral-900">
                  <Clock className="w-4 h-4 text-[#ff4d00]" />
                  <span>Prompt Response within 2 hours</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-neutral-900">
                  <ShieldCheck className="w-4 h-4 text-[#ff4d00]" />
                  <span>Strict NDA &amp; 100% IP Ownership</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-neutral-900">
                  <Zap className="w-4 h-4 text-[#ff4d00]" />
                  <span>Direct Technical Lead Evaluation</span>
                </div>
              </div>

            </div>

            {/* ================= RIGHT COLUMN: 4-FIELD HIGH CONVERTING FORM ================= */}
            <div className="lg:col-span-7">
              <div className="relative bg-white border-2 border-orange-200/70 rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 shadow-[0_20px_50px_rgba(255,77,0,0.06)]">
                
                {/* Form Top Header */}
                <div className="mb-8 pb-6 border-b border-orange-100 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-950">
                      Send a Message
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                      Fill out the fields below and we'll reply right back.
                    </p>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff4d00] animate-ping hidden sm:block" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Field 1: Name & Field 2: Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700">
                        Full Name <span className="text-[#ff4d00]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3.5 rounded-xl bg-orange-50/40 border border-orange-200/80 focus:border-[#ff4d00] focus:bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700">
                        Email Address <span className="text-[#ff4d00]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-orange-50/40 border border-orange-200/80 focus:border-[#ff4d00] focus:bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none transition-all"
                      />
                    </div>

                  </div>

                  {/* Field 3: Phone Number & Field 4: Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    
                    {/* Number */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700">
                        Phone Number <span className="text-[#ff4d00]">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3.5 rounded-xl bg-orange-50/40 border border-orange-200/80 focus:border-[#ff4d00] focus:bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none transition-all"
                      />
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700">
                        Subject / Project Scope <span className="text-[#ff4d00]">*</span>
                      </label>
                      <input
                        id="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="UI/UX Design, Next.js, Flutter..."
                        className="w-full px-4 py-3.5 rounded-xl bg-orange-50/40 border border-orange-200/80 focus:border-[#ff4d00] focus:bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none transition-all"
                      />
                    </div>

                  </div>

                  {/* Optional Project Brief / Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700">
                      Project Details / Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us a little bit about your timeline and product goals..."
                      className="w-full px-4 py-3.5 rounded-xl bg-orange-50/40 border border-orange-200/80 focus:border-[#ff4d00] focus:bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-neutral-950 text-white rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-[#ff4d00] hover:shadow-[0_8px_25px_rgba(255,77,0,0.35)] cursor-pointer"
                    >
                      <span>Submit Inquiry</span>
                      <span className="w-7 h-7 rounded-full bg-white text-neutral-950 flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                      </span>
                    </button>
                  </div>

                  {submitted && (
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      Inquiry received! We will respond within 2 business hours.
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