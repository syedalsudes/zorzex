"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { 
  Zap, 
  Layers, 
  Code2, 
  ArrowUpRight, 
  Terminal, 
  Check, 
  Copy 
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

// --- FRAMER MOTION VARIANTS ---
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeLeftVariant: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
};

export default function AboutPage() {
  const [copied, setCopied] = useState(false);
  const agencyEmail = "hello@zorzex.com";

  // Smooth Scroll Parallax
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 600], [0, 160]);
  const opacityHero = useTransform(scrollY, [0, 450], [1, 0]);
  const scaleBanner = useTransform(scrollY, [0, 700], [1, 1.12]);

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
    <div className="relative w-full overflow-hidden text-neutral-900 selection:bg-[#ff4d00] selection:text-white">

      {/* ================= HERO SECTION (FULL-BLEED CINEMATIC) ================= */}
      <section className="relative min-h-[90vh] lg:min-h-screen w-full flex items-center justify-center overflow-hidden border-b border-neutral-200/70 pt-24 sm:pt-28">
        
        {/* Parallax Background Banner */}
        <motion.div style={{ scale: scaleBanner }} className="absolute inset-0 z-0">
          <Image
            src="/officebanner.png"
            alt="Studio Banner"
            fill
            priority
            className="object-cover object-center opacity-35 mix-blend-multiply"
          />
       </motion.div>

        <div className="relative z-10 max-w-7xl px-6 sm:px-10 lg:px-12 w-full text-center md:text-left">
          
          {/* Tracking Subtitle Line */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center justify-center md:justify-start gap-4 mb-6 overflow-hidden"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 44 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[2px] bg-[#ff4d00]"
            />
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[#ff4d00] text-[11px] uppercase tracking-[0.45em] font-mono font-bold"
            >
              Who We Are & How We Build
            </motion.span>
          </motion.div>

          {/* Fluid Editorial Giant Headline */}
          <motion.h1
            style={{ y: yText, opacity: opacityHero }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-neutral-950 text-[12vw] md:text-[9.5vw] font-light leading-none tracking-tighter uppercase whitespace-nowrap select-none"
          >
            ABOUT{" "}
            <span className="font-extrabold text-[#ff4d00] drop-shadow-[0_12px_45px_rgba(255,77,0,0.3)]">
              US.
            </span>
          </motion.h1>

          {/* Minimalist Border-Left Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 md:mt-12 max-w-xl border-l-2 border-[#ff4d00] pl-6 md:pl-8 mx-auto md:mx-0"
          >
            <p className="font-body text-neutral-600 text-sm md:text-lg font-normal leading-relaxed">
              We are an autonomous collective of software engineers and product designers dedicated to high-velocity shipping. No agency fluff, no middlemen—just pure production-grade architecture.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ================= SECTION 1: ABOUT / STUDIO LAB SHOWCASE ================= */}
      <section className="relative py-24 sm:py-32 px-6 md:px-12 z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Office Studio Rig */}
          <motion.div
            variants={fadeLeftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden border border-neutral-200/90 shadow-[0_20px_50px_rgba(255,77,0,0.08)] bg-white group"
          >
            <Image
              src="/office.png"
              alt="Zorzex Engineering Studio"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
            
        
          </motion.div>

          {/* Right: Narrative Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            <motion.div variants={fadeUpVariant} >
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-neutral-100/90 border border-neutral-200">
              <span className="w-1 h-2.5 rounded-[1px] bg-[#ff4d00]" />
              <span className="text-[10.5px] font-mono font-semibold tracking-[0.16em] uppercase text-neutral-700">
                Digital Excellence
              </span>
            </div>
            </motion.div>
            

            <motion.h2 variants={fadeUpVariant} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light uppercase tracking-tight text-neutral-950 leading-[1.12]">
              <span className="text-neutral-400">
                Built by engineers, <br />
              </span>
              <strong className="font-extrabold text-neutral-950">
                Driven by<span className="text-[#ff4d00]"> speed.</span>
              </strong>
            </motion.h2>

            <motion.p variants={fadeUpVariant} className="font-body text-neutral-600 text-sm sm:text-base leading-relaxed">
              We eliminate non-technical account managers and bloated development workflows. When you work with Zorzex, you get direct collaboration with core engineers writing clean, tree-shaken, high-conversion code.
            </motion.p>

            {/* Checklist */}
            <motion.div variants={fadeUpVariant} className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "100% Intellectual Property Handover",
                "Bi-Weekly Staging Deployments",
                "Zero Cookie-Cutter Templates",
                "Direct Slack with Core Devs"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-neutral-800">
                  <div className="w-4 h-4 rounded-full bg-[#ff4d00]/10 flex items-center justify-center text-[#ff4d00] shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUpVariant} className="pt-4">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 px-7 py-3.5 bg-neutral-950 text-white rounded-full font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-[#ff4d00] hover:shadow-[0_8px_25px_rgba(255,77,0,0.35)] hover:-translate-y-0.5"
              >
                <span>Initiate Sprint</span>
                <span className="w-6 h-6 rounded-full bg-white text-neutral-950 flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
              </Link>
            </motion.div>
          </motion.div>

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

      {/* ================= SECTION 3: CORE PILLARS / HOW WE OPERATE ================= */}
      <section className="relative py-24 sm:py-32 px-6 md:px-12 z-10 max-w-7xl mx-auto border-t border-neutral-200/80">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 max-w-2xl mx-auto space-y-3"
        >
          <span className="text-[#ff4d00] text-[11px] font-mono font-bold tracking-widest uppercase">
            Our Core Pillars
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-light uppercase tracking-tight text-neutral-950">
            How We <strong className="font-extrabold text-neutral-950">Operate<span className="text-[#ff4d00]">.</span></strong>
          </h2>
        </motion.div>

        {/* 3 Interactive Pillars Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {PILLARS_DATA.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                className="group relative p-8 rounded-[32px] bg-white border border-neutral-200/90 hover:border-[#ff4d00]/70 hover:shadow-[0_20px_45px_-10px_rgba(255,77,0,0.18)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                {/* Subtle Hover Radial Tint */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#ff4d00]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Top Glowing Edge Line */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#ff4d00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon Container */}
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-[#fff0eb] border border-[#ff4d00]/20 flex items-center justify-center mb-7 text-[#ff4d00] group-hover:scale-110 group-hover:bg-[#ff4d00] group-hover:text-white transition-all duration-500 shadow-xs">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-3">
                  <h3 className="font-heading text-xl font-bold text-neutral-950 group-hover:text-[#ff4d00] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-neutral-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ================= SECTION 4: LIGHT MINIMAL CTA BANNER ================= */}
      <section className="relative py-16 sm:py-24 px-6 md:px-12 z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[36px] sm:rounded-[48px] bg-white border border-[#ff4d00]/30 p-8 sm:p-14 lg:p-16 shadow-[0_20px_50px_rgba(255,77,0,0.08)] overflow-hidden"
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#ff4d00] uppercase">
                Sprint Slots Open For Next Cohort
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-neutral-950">
                Ready to build <span className="text-[#ff4d00] underline decoration-[#ff4d00]/30 underline-offset-8">something iconic?</span>
              </h2>
              <p className="font-body text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl">
                Collaborate directly with our lead architects. Skip slow bureaucracy and launch your high-performance product in record time.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-center lg:items-end">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-[#ff4d00] text-white rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-[#e04400] hover:shadow-[0_8px_25px_rgba(255,77,0,0.35)] active:scale-98"
              >
                <span>Start a Project</span>
                <span className="w-6 h-6 rounded-full bg-white text-[#ff4d00] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
                </span>
              </Link>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-neutral-800 text-xs font-mono font-semibold tracking-wider transition-all cursor-pointer group"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#ff4d00] transition-transform group-hover:scale-110" />
                    <span>{agencyEmail}</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </motion.div>
      </section>

    </div>
  );
}