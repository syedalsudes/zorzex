"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Zap,
  Layers,
  Code2,
  ArrowUpRight,
  Terminal,
  Check,
  Copy,
  Cpu,
  TrendingUp,
  Sparkles,
  ChevronRight
} from "lucide-react";

// --- DATA ARRAYS ---
const SKILLS_DATA = [
  { name: "Full-Stack Architecture & Next.js", value: "98%", tag: "0.1s TTFB" },
  { name: "Cross-Platform Mobile (Flutter)", value: "95%", tag: "Native 60FPS" },
  { name: "Performance & Lighthouse Engineering", value: "99%", tag: "Zero Bloat" },
  { name: "Custom AI Pipelines & Automation", value: "92%", tag: "Sub-Second" },
];

const PILLARS_DATA = [
  {
    title: "Discovery & Strategy",
    description: "We don't do generic templates. We conduct a deep-dive audit into your business goals and technical architecture to lock in a clear, milestone-driven roadmap.",
    icon: Zap,
  },
  {
    title: "Sprint Execution",
    description: "Direct engineer access with zero account manager delays. We ship rapid progress through bi-weekly milestone builds and live staging environments.",
    icon: Layers,
  },
  {
    title: "Audit & 100% IP Handover",
    description: "You own 100% of the intellectual property from day one. Benchmark 98+ Lighthouse performance, cloud CI/CD setup, and full production repository handoff.",
    icon: Code2,
  },
];

const STATS_DATA = [
  { value: "05+", label: "Years Velocity", sub: "Battle-Tested" },
  { value: "140+", label: "Deployments", sub: "Production Scale" },
  { value: "99+", label: "Lighthouse Score", sub: "Zero-Lag Standard" },
  { value: "<14d", label: "Average Delivery", sub: "Sprint Cycles" },
];



const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AboutPage() {
  const [copied, setCopied] = useState(false);
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

        {/* ================= CONTENT (1:1 EXACT SERVICES STYLE) ================= */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-5">

          {/* Massive Bold Heading */}
          <h1 className="font-heading text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tight text-white leading-[0.88] drop-shadow-[0_15px_35px_rgba(0,0,0,0.7)] select-none">
            About Us<span className="text-[#ff4d00] drop-shadow-[0_0_25px_#ff4d00]">.</span>
          </h1>

          {/* Breadcrumb Navigation: Home > About Us */}
          <nav aria-label="Breadcrumb" className="inline-flex items-center justify-center gap-2 pt-2 font-body text-xs sm:text-sm font-medium">
            <Link
              href="/"
              className="text-orange-200/80 hover:text-white transition-colors"
            >
              Home
            </Link>

            <ChevronRight className="w-3.5 h-3.5 text-orange-400/70 stroke-[2.5]" />

            <span className="text-white font-semibold tracking-wide bg-white/10 px-3 py-0.5 rounded-full border border-white/15 backdrop-blur-sm">
              About Us
            </span>
          </nav>

        </div>
      </section>

      {/* ================= SECTION 2: STUDIO RIG & OPERATIONAL MODEL ================= */}
      <section className="relative w-full py-16 sm:py-20 lg:py-28 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 font-sans">
        <div className="relative z-10 max-w-7xl xl:max-w-[1550px] 2xl:max-w-[1850px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch">

            {/* Studio Image Card (Height perfectly matches the right content) */}
            <div className="lg:col-span-6 relative w-full min-h-[420px] sm:min-h-[520px] lg:min-h-full rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-xs group bg-neutral-900">
              <Image
                src="/office.png"
                alt="Zorzex Engineering Studio"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Philosophy Content */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-8">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight leading-[1.12]">
                <span className="text-neutral-500">Built by engineers,</span> <br />
                <strong className="font-extrabold text-neutral-950">
                  Driven by <span className="text-[#ff4d00]">execution.</span>
                </strong>
              </h2>

              <p className="font-body text-sm sm:text-base text-neutral-700 font-medium leading-relaxed">
                Traditional agencies pad timelines with unnecessary communication layers and generic templates. We deliver clean, tree-shaken, high-conversion code with direct Slack pairing, bi-weekly staging builds, and complete codebase handover from day one.
              </p>

              {/* Guarantees List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  "100% Intellectual Property Handover",
                  "Direct Developer Slack Communication",
                  "Weekly Live Staging URL Previews",
                  "Strict Next.js & Flutter Clean Code",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="group relative flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-white/90 border border-orange-200/80 shadow-xs hover:border-[#ff4d00]/60 hover:shadow-[0_12px_28px_-6px_rgba(255,77,0,0.22)] hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 cursor-pointer overflow-hidden"
                  >
                    {/* 1. Subtle Orange Gradient Spread on Hover */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#ff4d00]/12 via-[#ea580c]/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* 2. Top-Right Ambient Glow Corner */}
                    <div className="pointer-events-none absolute -top-8 -right-8 w-20 h-20 bg-[#ff4d00]/25 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* 3. Left Active Orange Indicator Pill */}
                    <div className="absolute left-0 top-2 bottom-2 w-1 bg-[#ff4d00] rounded-r-full opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />

                    {/* 4. Checkmark Icon with Interactive Hover Fill & Rotation */}
                    <div className="relative z-10 w-7 h-7 rounded-full bg-orange-100/80 border border-orange-200/80 flex items-center justify-center text-[#ff4d00] shrink-0 transition-all duration-300 group-hover:bg-[#ff4d00] group-hover:text-white group-hover:border-[#ff4d00] group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(255,77,0,0.45)]">
                      <Check className="w-4 h-4 stroke-[3] transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    {/* 5. Typography with Contrast Transition */}
                    <span className="relative z-10 text-xs sm:text-sm font-semibold text-neutral-800 group-hover:text-neutral-950 transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 bg-neutral-950 text-white rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-[#ff4d00] hover:shadow-[0_8px_25px_rgba(255,77,0,0.35)] hover:-translate-y-0.5"
                >
                  <span>Start a Project</span>
                  <span className="w-6 h-6 rounded-full bg-white text-neutral-950 flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ================= SECTION 2: SKILLS & STATS ================= */}
      <section className="relative py-24 sm:py-32 px-6 md:px-12 z-10 max-w-7xl mx-auto border-t border-neutral-200/80">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">

          {/* Left: Dynamic Animated Skills */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-heading text-3xl font-light uppercase tracking-tight text-neutral-950">
                Core <strong className="font-extrabold text-[#ff4d00]">Capabilities</strong>
              </h3>
              <p className="font-body text-neutral-600 text-xs sm:text-sm mt-2 max-w-md">
                Continuous performance engineering tailored for speed, type safety, and real conversion metrics.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              {SKILLS_DATA.map((skill, index) => (
                <motion.div key={index} variants={fadeUpVariant} className="space-y-2">
                  <div className="flex justify-between items-center text-xs sm:text-sm font-semibold text-neutral-900 tracking-wide">
                    <span>{skill.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-[#ff4d00] font-mono font-bold">{skill.value}</span>
                    </div>
                  </div>

                  {/* Progress Line */}
                  <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden border border-neutral-200/70 p-[1px]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.value }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.15 + (index * 0.1), ease: [0.22, 1, 0.36, 1] }}
                      className="h-full bg-gradient-to-r from-[#ff4d00] to-[#ff7a3d] rounded-full relative shadow-[0_0_10px_rgba(255,77,0,0.4)]"
                    >
                      <div className="absolute inset-0 bg-white/20 w-full animate-pulse" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Modern Stat Cards Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-4 sm:gap-6 items-center"
          >
            {STATS_DATA.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                className="group relative p-6 sm:p-8 rounded-[28px] bg-white/95 border border-neutral-200/90 shadow-xs hover:border-[#ff4d00]/60 hover:shadow-[0_20px_40px_-12px_rgba(255,77,0,0.22)] hover:-translate-y-1.5 hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 cursor-default overflow-hidden"
              >
                {/* 1. Subtle Orange Gradient Spread on Hover */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#ff4d00]/10 via-[#ea580c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* 2. Top-Right Ambient Glow Corner Spot */}
                <div className="pointer-events-none absolute -top-10 -right-10 w-28 h-28 bg-[#ff4d00]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />

                {/* 3. Bottom-Left Soft Glow */}
                <div className="pointer-events-none absolute -bottom-8 -left-8 w-20 h-20 bg-[#ea580c]/15 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  <h4 className="text-4xl sm:text-5xl font-black text-neutral-950 font-mono tracking-tight group-hover:text-[#ff4d00] transition-colors duration-300 group-hover:drop-shadow-[0_4px_16px_rgba(255,77,0,0.3)]">
                    {stat.value}
                  </h4>

                  <p className="text-xs sm:text-sm font-bold text-neutral-800 mt-2.5 transition-colors group-hover:text-neutral-950">
                    {stat.label}
                  </p>

                  <p className="text-[10.5px] font-mono text-neutral-400 mt-0.5 group-hover:text-neutral-600 transition-colors">
                    {stat.sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>


      {/* ================= SECTION 4: HOW WE OPERATE (PILLARS) ================= */}
      <section className="relative w-full py-16 sm:py-20 lg:py-28 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 border-t border-orange-200/50">
        <div className="relative z-10 max-w-7xl xl:max-w-[1550px] 2xl:max-w-[1850px] mx-auto space-y-12">

          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-heading text-3xl sm:text-5xl font-light uppercase tracking-tight text-neutral-950">
              How We <strong className="font-extrabold text-[#ff4d00]">Operate.</strong>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {PILLARS_DATA.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-white/95 border-2 border-orange-200/70 hover:border-[#ff4d00]/70 rounded-[30px] p-7 sm:p-9 shadow-xs hover:shadow-[0_24px_50px_-10px_rgba(255,77,0,0.25)] hover:-translate-y-2 hover:scale-[1.015] active:scale-[0.99] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer backdrop-blur-xs"
                >
                  {/* 1. Subtle Orange Gradient Spread on Hover */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#ff4d00]/10 via-[#ea580c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* 2. Top-Right Ambient Corner Light */}
                  <div className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 bg-[#ff4d00]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />

                  {/* Top & Main Body Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">

                      {/* Interactive Icon Box: Turns Black + Rotates Right on Hover */}
                      <div className="w-12 h-12 rounded-2xl bg-[#ff4d00] border-2 border-white/80 flex items-center justify-center text-white shadow-[0_6px_20px_rgba(255,77,0,0.35)] transition-all duration-300 group-hover:bg-[#070707] group-hover:border-neutral-800 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
                        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-105" />
                      </div>
                    </div>

                    <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 group-hover:text-[#ff4d00] transition-colors mb-3">
                      {pillar.title}
                    </h3>

                    <p className="font-body text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed group-hover:text-neutral-800 transition-colors">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Card Footer: Index + Interactive Arrow */}
                  <div className="relative z-10 mt-8 pt-5 border-t border-orange-100/80 flex items-center justify-between text-xs">
                    <span className="font-mono text-sm font-bold text-[#ff4d00] tracking-wider">
                      0{idx + 1}
                    </span>

                    <div className="w-8 h-8 rounded-full bg-orange-100/70 border border-orange-200/60 flex items-center justify-center text-[#ff4d00] transition-all duration-300 group-hover:bg-[#ff4d00] group-hover:text-white group-hover:border-[#ff4d00] group-hover:scale-110 group-hover:shadow-[0_4px_14px_rgba(255,77,0,0.4)]">
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-300 group-hover:rotate-45" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}