import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  ChevronRight,
  Zap,
  Terminal,
  Layers,
  Sparkles,
  CheckCircle2,
  PenTool,
  Smartphone,
  Gauge,
  Database,
  Lock,
  Cpu,
  PhoneCall,
  LayoutGrid,
  UserPlus,
  UserCheck,
  Video,
  CheckCircle,
  Code2,
  TrendingUp,
  Rocket,
  Compass,
  ArrowRight,
  Bot,
  Workflow,
  Globe,
  ShieldCheck,
  BarChart3,
  Wrench,
  LucideIcon,
} from "lucide-react";
import { SERVICES_DATA } from "@/data/servicesData";
import FaqSection from "@/components/FaqSection";

// Icon Registry: String names ko Lucide components mein map karta hai
const ICON_MAP: Record<string, LucideIcon> = {
  Zap,
  Terminal,
  Layers,
  Sparkles,
  CheckCircle2,
  PenTool,
  Smartphone,
  Gauge,
  Database,
  Lock,
  Cpu,
  PhoneCall,
  LayoutGrid,
  UserPlus,
  UserCheck,
  Video,
  CheckCircle,
  Code2,
  TrendingUp,
  Rocket,
  Compass,
  Bot,
  Workflow,
  Globe,
  ShieldCheck,
  BarChart3,
  Wrench,
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="relative w-full bg-transparent text-neutral-900 font-sans overflow-hidden selection:bg-[#ff4d00] selection:text-white">
      {/* ================= 1. HERO SECTION ================= */}
      <section
        style={{
          maskImage:
            "radial-gradient(135% 100% at 50% 0%, black 82%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(135% 100% at 50% 0%, black 82%, transparent 100%)",
        }}
        className="relative w-full overflow-hidden bg-[#FF8200] pt-32 sm:pt-40 lg:pt-48 pb-36 sm:pb-48 text-[#0F0F12] shadow-[0_30px_70px_rgba(255,130,0,0.35)]"
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

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-5">
          <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black tracking-tight text-white leading-[0.92] drop-shadow-[0_6px_0_#0F0F12] select-none">
            {service.title}
            <span className="text-[#0F0F12] drop-shadow-none">.</span>
          </h1>

          <nav
            aria-label="Breadcrumb"
            className="inline-flex flex-wrap items-center justify-center gap-2 pt-3 font-body text-xs sm:text-sm font-bold"
          >
            <Link
              href="/"
              className="text-[#0F0F12]/80 hover:text-[#0F0F12] transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#0F0F12] stroke-[2.5]" />
            <Link
              href="/services"
              className="text-[#0F0F12]/80 hover:text-[#0F0F12] transition-colors"
            >
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#0F0F12] stroke-[2.5]" />
            <span className="text-white font-semibold tracking-wide bg-[#0F0F12] px-3.5 py-1 rounded-full shadow-md">
              {service.title}
            </span>
          </nav>
        </div>
      </section>

      {/* ================= 2. OUR APPROACH & SERVICE OVERVIEW ================= */}
      <section className="relative z-20 mt-16 sm:mt-24 lg:mt-28 py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] lg:w-[650px] h-[400px] lg:h-[650px] bg-gradient-to-tr from-[#ff4d00]/12 via-[#ff4d00]/5 to-transparent blur-[140px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-7xl xl:max-w-[1550px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT COLUMN: Dynamic Content & 2x2 Capability Grid */}
          <div className="lg:col-span-6 space-y-7">
            <div className="space-y-3">
              <span className="inline-block text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#ff4d00]">
                {service.approach.eyebrow}
              </span>

              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold uppercase tracking-tight leading-[1.08] text-neutral-950">
                {service.approach.headingNormal}{" "}
                <span className="text-[#ff4d00]">
                  {service.approach.headingHighlight}.
                </span>
              </h2>
            </div>

            <p className="text-sm sm:text-base lg:text-[17px] text-neutral-600 font-medium leading-relaxed max-w-xl">
              {service.approach.description}
            </p>

            {/* 2x2 Dynamic Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {service.approach.capabilities.map((item, idx) => {
                const Icon = ICON_MAP[item.icon] || Layers;
                return (
                  <div
                    key={idx}
                    className="group relative bg-white/80 backdrop-blur-md border border-orange-200/70 rounded-2xl p-4 sm:p-5 flex items-center gap-4 shadow-[0_8px_25px_-10px_rgba(255,77,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ff4d00]/70 hover:shadow-[0_16px_35px_-12px_rgba(255,77,0,0.22)]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#fff0eb] border border-[#ff4d00]/20 text-[#ff4d00] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#ff4d00] group-hover:text-white group-hover:scale-105">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm sm:text-[15px] font-bold text-neutral-900 leading-snug">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

         {/* RIGHT COLUMN: Dynamic Showcase Image Card */}
          <div className="lg:col-span-6">
            <div className="group relative w-full rounded-3xl overflow-hidden border border-orange-300/60 bg-white/40 shadow-[0_20px_50px_-15px_rgba(255,77,0,0.14)] transition-all duration-500 hover:border-[#ff4d00]/70">
              <Image
                src={service.approach.image}
                alt={service.approach.imageAlt || service.title}
                width={1200}
                height={900}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto block object-contain transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-neutral-950/20 via-transparent to-[#ff4d00]/5 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. DYNAMIC TRUST & BENCHMARK BENTO BAR ================= */}
      <section className="relative z-20 mt-16 sm:mt-24 lg:mt-28 px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl xl:max-w-[1550px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {service.benchmarks.map((stat, idx) => {
            const Icon = ICON_MAP[stat.icon] || Zap;
            return (
              <div
                key={idx}
                className="group relative bg-white/80 backdrop-blur-md border border-orange-200/70 rounded-[28px] p-6 sm:p-7 flex flex-col justify-between shadow-[0_12px_30px_-10px_rgba(255,77,0,0.12)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#ff4d00]/70 hover:shadow-[0_20px_40px_-12px_rgba(255,77,0,0.25)] overflow-hidden"
              >
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#ff4d00] to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-[#ff4d00]/10 text-[#ff4d00] text-[10px] font-bold tracking-wider uppercase group-hover:bg-[#ff4d00] group-hover:text-white transition-colors">
                    {stat.tag}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-[#fff0eb] text-[#ff4d00] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <div className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-950 flex items-baseline transition-transform duration-300 group-hover:translate-x-1">
                    {stat.prefix && (
                      <span className="text-[#ff4d00]">{stat.prefix}</span>
                    )}
                    {stat.metric}
                    <span className="text-2xl sm:text-3xl text-[#ff4d00] font-bold ml-0.5">
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-500 font-bold tracking-widest uppercase mt-1.5">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= 4. DYNAMIC KEY DELIVERABLES ================= */}
      <section className="relative w-full bg-transparent text-neutral-900 py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 font-sans">
        <div className="max-w-7xl xl:max-w-[1550px] mx-auto space-y-14 sm:space-y-18">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between border-b border-[#ff4d00]/20 pb-8 sm:pb-12">
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-wider leading-[1.15]">
                <span className="text-neutral-500">Everything included</span>{" "}
                <br />
                <strong className="font-semibold text-neutral-950">
                  Key <span className="text-[#ff4d00]">Deliverables.</span>
                </strong>
              </h2>
            </div>

            <p className="lg:col-span-4 text-sm sm:text-base text-neutral-700 font-medium leading-relaxed border-l-2 border-[#ff4d00] pl-4">
              {service.deliverablesIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {service.deliverables.map((item, idx) => {
              const Icon = ICON_MAP[item.icon] || Layers;
              return (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-3xl bg-white/90 backdrop-blur-md border border-orange-200/80 p-8 sm:p-9 flex flex-col justify-between shadow-[0_2px_12px_-4px_rgba(255,77,0,0.06)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#ff4d00] hover:bg-gradient-to-b hover:from-orange-50/70 hover:to-white hover:shadow-[0_20px_40px_-15px_rgba(255,77,0,0.22)]"
                >
                  <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#ff4d00] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />

                  <span className="pointer-events-none select-none absolute top-5 right-7 font-mono text-5xl font-extrabold tracking-tighter text-orange-500/[0.08] group-hover:text-[#ff4d00]/[0.15] group-hover:-translate-y-1 transition-all duration-300">
                    0{idx + 1}
                  </span>

                  <div className="relative z-10">
                    <div className="relative w-12 h-12 mb-8">
                      <div className="absolute inset-0 rounded-xl bg-[#ff4d00]/15 translate-x-1 translate-y-1 group-hover:translate-x-1.5 group-hover:translate-y-1.5 group-hover:rotate-3 transition-transform duration-300" />
                      <div className="relative w-12 h-12 rounded-xl bg-white border border-orange-200 text-[#ff4d00] flex items-center justify-center shadow-xs transition-all duration-300 group-hover:bg-[#ff4d00] group-hover:text-white group-hover:border-[#ff4d00]">
                        <Icon className="w-5 h-5 stroke-[2] transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110" />
                      </div>
                    </div>

                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#ff4d00] mb-2">
                      {item.tag}
                    </p>

                    <h3 className="text-xl font-bold text-neutral-950 tracking-tight mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm text-neutral-700 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 5. DYNAMIC HOW IT WORKS (6-NODE PIPELINE) ================= */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 border-t border-neutral-200/80 font-sans overflow-hidden">
        <div className="relative z-10 max-w-7xl xl:max-w-[1600px] mx-auto space-y-16 sm:space-y-20">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-5xl font-light uppercase tracking-tight text-neutral-950">
              How It{" "}
              <strong className="font-extrabold text-[#ff4d00]">Works.</strong>
            </h2>
            <p className="font-body text-xs sm:text-sm lg:text-base text-neutral-600 font-normal leading-relaxed">
              {service.processIntro}
            </p>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="hidden xl:block absolute top-[36px] left-[7%] right-[7%] h-[2px] z-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255, 77, 0, 0.15) 0%, rgba(255, 77, 0, 0.75) 50%, rgba(255, 77, 0, 0.15) 100%)",
              }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-10 sm:gap-8 xl:gap-4 relative z-10">
              {service.process.map((item, i) => {
                const Icon = ICON_MAP[item.icon] || CheckCircle;
                return (
                  <div
                    key={i}
                    className="group relative flex flex-col items-center text-center cursor-pointer"
                  >
                    <div className="relative mb-6">
                      <div className="absolute -inset-2.5 rounded-full bg-[#ff4d00]/20 blur-md opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 pointer-events-none" />

                      <div className="relative z-10 w-[72px] h-[72px] rounded-full bg-[#070707] border-2 border-orange-200/90 group-hover:border-[#ff4d00] group-hover:bg-white flex items-center justify-center transition-all duration-300 shadow-[0_10px_25px_rgba(255,77,0,0.14)] group-hover:shadow-[0_14px_30px_rgba(255,77,0,0.35)] group-hover:scale-110">
                        <Icon className="w-6 h-6 text-[#ff4d00] transition-all duration-300 stroke-[2.2]" />
                      </div>
                    </div>

                    <span className="text-[11px] font-mono font-bold tracking-widest text-[#ff4d00] uppercase mb-1.5">
                      {item.step}
                    </span>

                    <h3 className="font-heading text-base sm:text-lg font-bold tracking-tight text-neutral-900 group-hover:text-[#ff4d00] transition-colors leading-snug mb-2">
                      {item.title}
                    </h3>

                    <p className="font-body text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-normal max-w-[215px] group-hover:text-neutral-800 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6. DYNAMIC FAQS ================= */}
      <section>
        <FaqSection items={service.faqs} />
      </section>

      {/* ================= 7. DYNAMIC BOTTOM STUDIO BANNER CTA ================= */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 font-sans select-none overflow-hidden">
        <div className="relative z-10 max-w-7xl xl:max-w-[1550px] mx-auto">
          <div
            className="relative rounded-[32px] sm:rounded-[40px] border-2 border-orange-400/50 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-[0_30px_90px_rgba(255,77,0,0.35)] flex flex-col lg:flex-row items-center justify-between gap-10 text-white"
            style={{
              background:
                "radial-gradient(circle at 25% 20%, #1e0902 0%, #0d0401 65%, #050200 100%)",
            }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-0 opacity-15"
              style={{
                backgroundImage:
                  "radial-gradient(#ff6b35 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="pointer-events-none absolute inset-x-12 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-orange-300/60 to-transparent" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 bg-[#ff4d00]/25 rounded-full blur-3xl z-0" />
            <div className="pointer-events-none absolute -top-24 right-1/4 w-72 h-72 bg-[#ea580c]/15 rounded-full blur-3xl z-0" />

            <div className="space-y-5 max-w-xl text-center lg:text-left relative z-10">
              <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.05]">
                {service.cta.headingNormal} <br />
                <span className="text-[#ff4d00] drop-shadow-[0_0_25px_rgba(255,77,0,0.6)]">
                  {service.cta.headingHighlight}
                </span>
              </h2>

              <p className="font-body text-sm sm:text-base text-neutral-300 font-light leading-relaxed border-l-0 lg:border-l-2 lg:border-[#ff4d00]/60 lg:pl-4">
                {service.cta.description}
              </p>

              <div className="pt-2 flex justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-between gap-6 min-h-[58px] sm:min-h-[62px] px-8 sm:px-10 py-4 rounded-2xl bg-gradient-to-r from-[#ff4d00] via-[#ff5a14] to-[#ea580c] hover:from-[#ea580c] hover:to-[#c2410c] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_12px_32px_rgba(255,77,0,0.45)] hover:shadow-[0_16px_44px_rgba(255,77,0,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

                  <span className="relative z-10 font-heading tracking-wide">
                    {service.cta.buttonText || "Get Started Now"}
                  </span>

                  <div className="relative z-10 w-9 h-9 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:rotate-45 group-hover:scale-110 group-hover:bg-white group-hover:text-[#ff4d00] shrink-0">
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </Link>
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-center lg:pr-6">
              <div className="absolute w-48 sm:w-60 h-48 sm:h-60 rounded-full bg-[#ff4d00]/30 blur-3xl pointer-events-none animate-pulse" />

              <div className="relative w-36 h-36 sm:w-48 sm:h-48 lg:w-56 lg:h-56 select-none transition-transform duration-500 hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_0_40px_rgba(255,77,0,0.65)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}