"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  ChevronRight,
  Clock,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const QUICK_TOPICS = [
  "Web Development",
  "AI Automation",
  "Custom Software",
  "App Development",
  "Brand Identity",
  "UI/UX Design",
];

// Clean Custom Social SVGs (No deprecated lucide brand imports)
const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "#",
    svg: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "Web Development",
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
    <div className="relative w-full bg-transparent text-[#0F0F12] font-sans overflow-hidden selection:bg-[#ff4d00] selection:text-white">
      {/* ================= 1. HERO SECTION (EXACT #FF8200 RADIAL MASK) ================= */}
      <section
        style={{
          maskImage:
            "radial-gradient(135% 100% at 50% 0%, black 82%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(135% 100% at 50% 0%, black 82%, transparent 100%)",
        }}
        className="relative w-full overflow-hidden bg-[#FF8200] pt-32 sm:pt-40 lg:pt-48 pb-32 sm:pb-44 text-[#0F0F12] shadow-[0_30px_70px_rgba(255,130,0,0.35)]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(#0F0F12 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] sm:w-[850px] lg:w-[1100px] h-[350px] sm:h-[450px] bg-gradient-to-b from-[#ffb366]/60 via-[#ff9426]/30 to-transparent blur-[110px] rounded-full z-0"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] lg:w-[700px] h-[200px] sm:h-[300px] bg-[#e07200]/45 blur-[90px] rounded-full z-0"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-28 bg-[#ffd9b3]/40 blur-[80px] rounded-full z-0"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-5">
          <h1 className="font-heading text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tight text-white leading-[0.88] drop-shadow-[0_6px_0_#0F0F12] select-none">
            Contact Us<span className="text-[#0F0F12] drop-shadow-none">.</span>
          </h1>

          <nav
            aria-label="Breadcrumb"
            className="inline-flex items-center justify-center gap-2 pt-3 font-body text-xs sm:text-sm font-bold"
          >
            <Link
              href="/"
              className="text-[#0F0F12]/80 hover:text-[#0F0F12] transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#0F0F12] stroke-[2.5]" />
            <span className="text-white font-semibold tracking-wide bg-[#0F0F12] px-3.5 py-1 rounded-full shadow-md">
              Contact Us
            </span>
          </nav>
        </div>
      </section>

      {/* ================= 2. CREATIVE SPLIT STUDIO CONTACT SECTION ================= */}
      <section className="relative w-full py-20 sm:py-28 lg:py-32 px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto space-y-12 sm:space-y-16">
          {/* TOP EDITORIAL HEADER + ARCHITECTURAL STAMP */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-neutral-200/90 pb-10">
            <div className="space-y-3 max-w-2xl">
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight text-[#0F0F12] leading-[1.05]">
                Join Us in Creating <br className="hidden sm:block" />
                <span className="text-[#ff4d00]">Something Great.</span>
              </h2>
            </div>
          </div>

          {/* MAIN 12-COL GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
           {/* LEFT COLUMN (7 Cols): Mature Studio Form */}
            <div className="lg:col-span-7">
              <div className="h-full rounded-[32px] bg-white border border-neutral-200/90 p-7 sm:p-10 lg:p-11 shadow-[0_20px_50px_-20px_rgba(15,15,18,0.08)] flex flex-col justify-between">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Interactive Discipline Pills */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                        Service Interest
                      </label>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {QUICK_TOPICS.map((topic) => {
                        const isSelected = formData.subject === topic;
                        return (
                          <button
                            key={topic}
                            type="button"
                            onClick={() =>
                              setFormData({
                                ...formData,
                                subject: isSelected ? "" : topic,
                              })
                            }
                            className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all duration-150 cursor-pointer ${
                              isSelected
                                ? "bg-[#0F0F12] text-white border-[#0F0F12]"
                                : "bg-neutral-50 text-neutral-600 border-neutral-200/80 hover:border-neutral-300 hover:text-[#0F0F12]"
                            }`}
                          >
                            {topic}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 1: First Name & Last Name (Required) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="firstName"
                        className="text-xs font-semibold text-neutral-700 block"
                      >
                        First Name <span className="text-[#ff4d00]">*</span>
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          })
                        }
                        placeholder="Alex"
                        className="w-full px-4 py-3.5 rounded-xl bg-neutral-50/70 border border-neutral-200/90 text-sm font-medium text-[#0F0F12] placeholder:text-neutral-400 focus:bg-white focus:border-[#ff4d00] focus:ring-2 focus:ring-[#ff4d00]/15 focus:outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="lastName"
                        className="text-xs font-semibold text-neutral-700 block"
                      >
                        Last Name <span className="text-[#ff4d00]">*</span>
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        placeholder="Sterling"
                        className="w-full px-4 py-3.5 rounded-xl bg-neutral-50/70 border border-neutral-200/90 text-sm font-medium text-[#0F0F12] placeholder:text-neutral-400 focus:bg-white focus:border-[#ff4d00] focus:ring-2 focus:ring-[#ff4d00]/15 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone Number (Required) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-xs font-semibold text-neutral-700 block"
                      >
                        Work Email <span className="text-[#ff4d00]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-neutral-50/70 border border-neutral-200/90 text-sm font-medium text-[#0F0F12] placeholder:text-neutral-400 focus:bg-white focus:border-[#ff4d00] focus:ring-2 focus:ring-[#ff4d00]/15 focus:outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="phone"
                        className="text-xs font-semibold text-neutral-700 block"
                      >
                        Phone / WhatsApp{" "}
                        <span className="text-[#ff4d00]">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3.5 rounded-xl bg-neutral-50/70 border border-neutral-200/90 text-sm font-medium text-[#0F0F12] placeholder:text-neutral-400 focus:bg-white focus:border-[#ff4d00] focus:ring-2 focus:ring-[#ff4d00]/15 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3: Subject (Optional) */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="subject"
                        className="text-xs font-semibold text-neutral-700"
                      >
                        Subject
                      </label>
                      <span className="text-[11px] text-neutral-400">
                        Optional
                      </span>
                    </div>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="e.g. Custom SaaS Platform or Website Redesign"
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-50/70 border border-neutral-200/90 text-sm font-medium text-[#0F0F12] placeholder:text-neutral-400 focus:bg-white focus:border-[#ff4d00] focus:ring-2 focus:ring-[#ff4d00]/15 focus:outline-none transition-all"
                    />
                  </div>

                  {/* Row 4: Message (Optional) */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="message"
                        className="text-xs font-semibold text-neutral-700"
                      >
                        Project Brief
                      </label>
                      <span className="text-[11px] text-neutral-400">
                        Optional
                      </span>
                    </div>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Share your goals, rough timeline, or any reference links..."
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-50/70 border border-neutral-200/90 text-sm font-medium text-[#0F0F12] placeholder:text-neutral-400 focus:bg-white focus:border-[#ff4d00] focus:ring-2 focus:ring-[#ff4d00]/15 focus:outline-none transition-all resize-none leading-relaxed"
                    />
                  </div>

                  {/* Full-Width Mature Submit Button */}
                  <div className="pt-2 space-y-4">
                    <button
                      type="submit"
                      className="group w-full min-h-[58px] flex items-center justify-between px-7 py-4 rounded-2xl bg-[#0F0F12] hover:bg-[#ff4d00] text-white font-bold text-sm uppercase tracking-wider shadow-[0_14px_30px_-8px_rgba(15,15,18,0.28)] hover:shadow-[0_16px_36px_-6px_rgba(255,77,0,0.42)] transition-all duration-300 cursor-pointer"
                    >
                      <span className="font-heading tracking-wide">
                        Send Inquiry
                      </span>

                      <span className="w-9 h-9 rounded-xl bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                      </span>
                    </button>

                    {submitted && (
                      <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-[#0F0F12] text-xs sm:text-sm font-semibold flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#ff4d00] text-white flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </span>
                        <span>
                          Inquiry received! Our lead engineer will reach out
                          within 2 hours.
                        </span>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
           {/* RIGHT COLUMN (5 Cols): Vibrant #FF8200 Studio Info Card */}
            <div className="lg:col-span-5">
              <div className="relative h-full rounded-[32px] bg-[#FF8200] text-[#0F0F12] p-8 sm:p-10 lg:p-11 flex flex-col justify-between space-y-8 overflow-hidden shadow-[0_25px_60px_-15px_rgba(255,130,0,0.38)]">
                <div className="pointer-events-none absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-white/25 blur-3xl" />

                <div className="relative z-10 space-y-7">

                  {/* Block 1: Studio Hub */}
                  <div className="space-y-1.5">
                    <h3 className="font-heading text-base font-extrabold uppercase tracking-wider text-[#0F0F12]">
                      Studio Hub
                    </h3>
                    <p className="text-sm font-medium text-[#0F0F12]/85 leading-relaxed">
                      Global Remote • Distributed Engineering Team <br />
                      Serving Founders in US, UK, UAE &amp; EU
                    </p>
                  </div>

                  {/* Block 2: Direct Contact */}
                  <div className="space-y-2">
                    <h3 className="font-heading text-base font-extrabold uppercase tracking-wider text-[#0F0F12]">
                      Direct Contact
                    </h3>
                    <div className="space-y-1.5 text-sm font-medium text-[#0F0F12]/85">
                      <p>
                        Phone:{" "}
                        <a
                          href="tel:+1234567890"
                          className="font-bold text-[#0F0F12] hover:underline"
                        >
                          +1 (234) 567-890
                        </a>
                      </p>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span>Email:</span>
                        <a
                          href={`mailto:${agencyEmail}`}
                          className="font-bold text-[#0F0F12] hover:underline"
                        >
                          {agencyEmail}
                        </a>
                        <button
                          type="button"
                          onClick={copyEmail}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#0F0F12]/12 hover:bg-[#0F0F12] text-[#0F0F12] hover:text-white text-[11px] font-bold transition-colors cursor-pointer"
                          title="Copy Email"
                        >
                          {copied ? (
                            <>
                              <Check className="w-3 h-3" />
                              <span>Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Block 3: Working Hours */}
                  <div className="space-y-1.5">
                    <h3 className="font-heading text-base font-extrabold uppercase tracking-wider text-[#0F0F12] flex items-center gap-2">
                      <Clock className="w-4 h-4 stroke-[2.4]" />
                      Working Hours
                    </h3>
                    <p className="text-sm font-medium text-[#0F0F12]/85">
                      Monday - Saturday : 10:00 - 20:00 (PKT / GMT+5)
                    </p>
                  </div>
                </div>

                {/* Block 4: Stay Connected (Custom Crisp SVGs) */}
                <div className="relative z-10 space-y-3.5 pt-4 border-t border-[#0F0F12]/15">
                  <h3 className="font-heading text-sm font-extrabold uppercase tracking-wider text-[#0F0F12]/80">
                    Stay Connected
                  </h3>
                  <div className="flex items-center gap-3">
                    {SOCIAL_LINKS.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.href}
                        aria-label={social.label}
                        className="w-10 h-10 rounded-full bg-[#0F0F12] text-[#FF8200] hover:bg-white hover:text-[#0F0F12] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                      >
                        {social.svg}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}