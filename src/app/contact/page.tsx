"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Send,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  Clock,
  ShieldCheck,
  Copy,
  Check
} from "lucide-react";

const serviceOptions = [
  "Web Application",
  "UI/UX Design",
  "Mobile App",
  "Full Rebranding",
  "Speed & SEO",
];

const budgetRanges = ["<$5k", "$5k - $10k", "$10k - $25k", "$25k+"];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    service: "Web Application",
    budget: "$5k - $10k",
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@zorzex.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 1200);
  };

  return (
    <section className="relative w-full bg-[#fafafa] text-neutral-900 py-16 sm:py-24 lg:py-32 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 overflow-hidden font-sans">
      {/* Background Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-0 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-gradient-to-bl from-[#ff4d00]/20 via-[#ff4d00]/5 to-transparent blur-[160px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] bg-gradient-to-tr from-[#ff4d00]/15 via-transparent to-transparent blur-[150px] rounded-full"
      />

      <div className="relative z-10 max-w-7xl xl:max-w-[1550px] mx-auto space-y-12 sm:space-y-16">
        
        {/* ================= HUGE BOLD HEADER ================= */}
        <div className="border-b border-neutral-200/90 pb-10 sm:pb-16 space-y-6">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white border border-[#ff4d00]/30 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#ff4d00] animate-pulse" />
            <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-neutral-800">
              Get In Touch &bull; Open For Sprints
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h1 className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-black uppercase tracking-tighter leading-[0.95] text-neutral-950">
              Contact <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d00] via-[#ff6a2b] to-neutral-800">
                Us.
              </span>
            </h1>

            <div className="max-w-md space-y-3">
              <p className="text-base sm:text-lg text-neutral-600 font-medium leading-relaxed border-l-2 border-[#ff4d00] pl-4">
                Seed funding se scale-up tak, hum production-ready websites aur digital products deliver karte hain sprint speed ke sath.
              </p>
              <div className="flex items-center gap-4 text-xs font-mono font-semibold text-neutral-500 pl-4">
                <span className="inline-flex items-center gap-1.5 text-[#ff4d00]">
                  <Clock className="w-3.5 h-3.5" /> &lt;2 Hours Response
                </span>
                <span>&bull;</span>
                <span className="inline-flex items-center gap-1.5 text-neutral-700">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#ff4d00]" /> NDA Protected
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= MAIN INTERACTIVE GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">
          
          {/* ================= LEFT SIDE: INFO & STATS ================= */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick Interactive Copy Card */}
            <div className="group relative bg-white border border-[#ff4d00]/25 rounded-[32px] p-6 sm:p-8 shadow-xs transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(255,77,0,0.18)] hover:border-[#ff4d00]/60">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold tracking-widest text-[#ff4d00] uppercase">
                  Fast Track
                </span>
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#fff0eb] text-[#ff4d00]">
                  Direct Founder Desk
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
                Hassle-free discussion.
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-6">
                Koi sales middleman nahi. Seedha tech aur design leads aapke scope ka breakdown karenge.
              </p>

              {/* Copy Email Button */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 group-hover:border-[#ff4d00]/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#fff0eb] text-[#ff4d00] flex items-center justify-center font-bold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">Direct Email</span>
                    <span className="text-sm sm:text-base font-semibold text-neutral-900">hello@zorzex.com</span>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="px-3.5 py-2 rounded-xl bg-white border border-neutral-200 text-xs font-bold text-neutral-700 hover:text-[#ff4d00] hover:border-[#ff4d00] transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer shadow-2xs"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
            </div>

            {/* Contact Details Stack */}
            <div className="bg-gradient-to-br from-white via-white to-[#fff9f6] border border-[#ff4d00]/25 rounded-[32px] p-6 sm:p-8 space-y-6 shadow-xs">
              
              {/* Phone */}
              <a
                href="tel:+12368884196"
                className="group flex items-center justify-between p-4 rounded-2xl bg-white border border-neutral-200/80 hover:border-[#ff4d00]/60 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#fff0eb] text-[#ff4d00] flex items-center justify-center transition-transform group-hover:scale-110">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold tracking-wider block">
                      Call / WhatsApp
                    </span>
                    <span className="text-base font-bold text-neutral-900 group-hover:text-[#ff4d00] transition-colors">
                      (236) 888-4196[cite: 1]
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-[#ff4d00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* Office Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-neutral-200/80">
                <div className="w-12 h-12 rounded-2xl bg-[#fff0eb] text-[#ff4d00] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold tracking-wider block">
                    Location[cite: 1]
                  </span>
                  <span className="text-base font-bold text-neutral-900">
                    White Rock, BC &bull; Remote Worldwide[cite: 1]
                  </span>
                </div>
              </div>

              {/* Turnaround Pill */}
              <div className="p-4 rounded-2xl bg-[#ff4d00]/[0.06] border border-[#ff4d00]/20 flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold tracking-tight text-neutral-950">
                    &lt;14 <span className="text-sm text-neutral-500 font-normal">Days</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#ff4d00]">
                    Avg. Sprint Delivery
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold tracking-tight text-neutral-950">
                    99<span className="text-[#ff4d00]">+</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-neutral-500">
                    Code Quality
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* ================= RIGHT SIDE: HIGH-CONVERTING FORM ================= */}
          <div className="lg:col-span-7">
            <div className="relative bg-white border-2 border-[#ff4d00]/30 rounded-[36px] sm:rounded-[44px] p-6 sm:p-10 lg:p-12 shadow-sm transition-all duration-300 hover:border-[#ff4d00]/60">
              
              {/* Form Header */}
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-neutral-100">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#ff4d00] mb-1">
                    <Sparkles className="w-3.5 h-3.5" /> Project Blueprint
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">
                    Tell us about your project
                  </h2>
                </div>
                <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-[#ff4d00] text-white items-center justify-center shadow-lg shadow-[#ff4d00]/25">
                  <MessageSquare className="w-6 h-6" />
                </div>
              </div>

              {isSent ? (
                <div className="py-20 text-center space-y-5 animate-in fade-in zoom-in duration-300">
                  <div className="w-20 h-20 rounded-full bg-[#ff4d00]/10 text-[#ff4d00] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-black text-neutral-950 uppercase tracking-tight">
                    Inquiry Received!
                  </h3>
                  <p className="text-neutral-600 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                    Hamari technical team aapki requirements review kar rahi hai. Hum agle <span className="font-bold text-[#ff4d00]">2 ghanton</span> ke andar aapse connect karenge.
                  </p>
                  <button
                    onClick={() => setIsSent(false)}
                    className="mt-6 px-8 py-3.5 rounded-full bg-neutral-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-[#ff4d00] transition-colors shadow-md"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Service Selector Chips */}
                  <div className="space-y-2.5">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-600 block">
                      Interested In
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setFormData({ ...formData, service: item })}
                          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                            formData.service === item
                              ? "bg-[#ff4d00] text-white shadow-md shadow-[#ff4d00]/30 scale-[1.02]"
                              : "bg-neutral-100/80 text-neutral-700 hover:bg-neutral-200/80"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name + Contact Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 block">
                        Full Name <span className="text-[#ff4d00]">*</span>[cite: 1]
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-neutral-50/70 border border-neutral-200 text-neutral-900 text-sm placeholder:text-neutral-400 focus:bg-white focus:outline-hidden focus:border-[#ff4d00] focus:ring-4 focus:ring-[#ff4d00]/10 transition-all duration-200"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 block">
                        Contact Number <span className="text-[#ff4d00]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 / +1 (000) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-neutral-50/70 border border-neutral-200 text-neutral-900 text-sm placeholder:text-neutral-400 focus:bg-white focus:outline-hidden focus:border-[#ff4d00] focus:ring-4 focus:ring-[#ff4d00]/10 transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Email + Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 block">
                        Email Address <span className="text-[#ff4d00]">*</span>[cite: 1]
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-neutral-50/70 border border-neutral-200 text-neutral-900 text-sm placeholder:text-neutral-400 focus:bg-white focus:outline-hidden focus:border-[#ff4d00] focus:ring-4 focus:ring-[#ff4d00]/10 transition-all duration-200"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 block">
                        Subject <span className="text-[#ff4d00]">*</span>[cite: 1]
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. SaaS MVP Development"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-neutral-50/70 border border-neutral-200 text-neutral-900 text-sm placeholder:text-neutral-400 focus:bg-white focus:outline-hidden focus:border-[#ff4d00] focus:ring-4 focus:ring-[#ff4d00]/10 transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Budget Chips */}
                  <div className="space-y-2.5">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-600 block">
                      Approximate Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetRanges.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all duration-200 cursor-pointer ${
                            formData.budget === b
                              ? "bg-[#ff4d00]/10 border-[#ff4d00] text-[#ff4d00]"
                              : "bg-white border-neutral-200 text-neutral-600 hover:border-neutral-300"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 block">
                      Message / Project Scope <span className="text-[#ff4d00]">*</span>[cite: 1]
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Requirements, reference links, ya deliverables brief karein..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-neutral-50/70 border border-neutral-200 text-neutral-900 text-sm placeholder:text-neutral-400 focus:bg-white focus:outline-hidden focus:border-[#ff4d00] focus:ring-4 focus:ring-[#ff4d00]/10 resize-none transition-all duration-200"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-neutral-950 text-white font-bold text-sm tracking-widest uppercase hover:bg-[#ff4d00] transition-all duration-300 shadow-lg hover:shadow-[0_12px_28px_rgba(255,77,0,0.35)] active:scale-[0.99] cursor-pointer disabled:opacity-75 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {isSubmitting ? "Transmitting..." : "Send Inquiry"}[cite: 1]
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>

                  <p className="text-center text-[11px] font-mono text-neutral-400">
                    Spam-free zone. 100% confidential.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}