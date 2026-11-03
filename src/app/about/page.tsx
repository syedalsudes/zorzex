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
  Sparkles
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

      {/* ================= HERO SECTION (FULL SCREEN + SOLID WHITE TEXT) ================= */}
      <section className="relative w-full min-h-screen bg-[#070707] text-white overflow-hidden flex flex-col justify-between px-6 sm:px-10 md:px-16 lg:px-24 pt-32 sm:pt-40 pb-12 font-sans">

        {/* 1. Subtle Dark Dot Grid Texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* 2. Deep Orange Ambient Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/3 left-1/4 -translate-y-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] bg-gradient-to-tr from-[#ff4d00]/25 via-[#ff3b00]/10 to-transparent blur-[120px] md:blur-[180px] rounded-full"
        />

        {/* Main Centered / Editorial Content Container */}
        <div className="relative z-10 w-full max-w-6xl my-auto space-y-7 sm:space-y-9">

          {/* Top Subtitle with Accent Dash */}
          <div className="flex items-center gap-3">
            <span className="w-8 sm:w-11 h-[1.5px] bg-[#ff4d00]" />
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#ff4d00]">
              Who We Are
            </span>
          </div>

          {/* Giant Pure White Headline */}
          <h1 className="font-heading text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black uppercase tracking-tight leading-[0.88] select-none text-white">
            About Us.
          </h1>

          {/* Editorial Narrative with Left Border */}
          <div className="pt-2">
            <p className="font-body text-neutral-300 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl border-l-2 border-[#ff4d00] pl-5 sm:pl-7">
              We are a collective of strategists, designers, and engineers dedicated to building digital products that leave a lasting impact. Through purposeful code and visionary design, we transform ideas into world-class experiences.
            </p>
          </div>

        </div>

      </section>

      {/* ================= SECTION 2: STUDIO RIG & OPERATIONAL MODEL ================= */}
      <section className="relative w-full py-16 sm:py-20 lg:py-28 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
        <div className="relative z-10 max-w-7xl xl:max-w-[1550px] 2xl:max-w-[1850px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

            {/* Studio Image Card */}
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-[32px] sm:rounded-[40px] overflow-hidden border-2 border-orange-200/70 shadow-xs group bg-white">
              <Image
                src="/office.png"
                alt="Zorzex Engineering Studio"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white z-10">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Engineering Studio
                </div>
                <span className="text-xs font-mono font-semibold tracking-widest uppercase text-orange-200">
                  Sprint Lab
                </span>
              </div>
            </div>

            {/* Philosophy Content */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-white/80 border border-orange-200/70 shadow-xs">
                <span className="w-1 h-2.5 rounded-[1px] bg-[#ff4d00]" />
                <span className="text-[10.5px] font-mono font-semibold tracking-[0.16em] uppercase text-neutral-700">
                  Engineering Benchmarks
                </span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight leading-[1.12]">
                <span className="text-neutral-500">Built by engineers,</span> <br />
                <strong className="font-extrabold text-neutral-950">
                  Driven by <span className="text-[#ff4d00]">execution.</span>
                </strong>
              </h2>

              <p className="text-sm sm:text-base text-neutral-700 font-medium leading-relaxed">
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
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-orange-200/70 shadow-2xs">
                    <div className="w-6 h-6 rounded-full bg-[#ff4d00]/10 flex items-center justify-center text-[#ff4d00] shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-neutral-900">{item}</span>
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
                      <span className="text-[10px] font-mono uppercase text-neutral-400">{skill.tag}</span>
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
                className="group p-6 sm:p-8 rounded-[28px] bg-white border border-neutral-200/90 shadow-xs hover:border-[#ff4d00]/60 hover:shadow-[0_16px_36px_-10px_rgba(255,77,0,0.15)] hover:-translate-y-1.5 transition-all duration-300 cursor-default"
              >
                <h4 className="text-4xl sm:text-5xl font-black text-neutral-950 font-mono group-hover:text-[#ff4d00] transition-colors">
                  {stat.value}
                </h4>
                <p className="text-xs sm:text-sm font-bold text-neutral-800 mt-2">
                  {stat.label}
                </p>
                <p className="text-[10.5px] font-mono text-neutral-400 mt-0.5">
                  {stat.sub}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>


      {/* ================= SECTION 4: HOW WE OPERATE (PILLARS) ================= */}
      <section className="relative w-full py-16 sm:py-20 lg:py-28 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 border-t border-orange-200/50">
        <div className="relative z-10 max-w-7xl xl:max-w-[1550px] 2xl:max-w-[1850px] mx-auto space-y-12">

          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-white/80 border border-orange-200/70 shadow-xs">
              <span className="w-1 h-2.5 rounded-[1px] bg-[#ff4d00]" />
              <span className="text-[10.5px] font-mono font-semibold tracking-[0.16em] uppercase text-neutral-700">
                Operating Methodology
              </span>
            </div>
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
                  className="group relative bg-white border-2 border-orange-200/70 hover:border-[#ff4d00] rounded-[30px] p-7 sm:p-9 shadow-xs hover:shadow-[0_20px_40px_rgba(255,77,0,0.22)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#ff4d00] border-2 border-white/80 flex items-center justify-center text-white shadow-[0_4px_16px_rgba(255,77,0,0.3)] group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 group-hover:text-[#ff4d00] transition-colors mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="relative z-10 mt-8 pt-5 border-t border-orange-100 flex items-center justify-between text-xs">
                    <span className="font-mono text-sm font-bold text-[#ff4d00]">
                      0{idx + 1}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-orange-100/70 flex items-center justify-center text-[#ff4d00] group-hover:bg-[#ff4d00] group-hover:text-white transition-all">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
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