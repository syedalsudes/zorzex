import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ChevronRight,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Zap,
  TrendingUp,
  ShieldAlert,
  Headphones,
  Cpu,
  Layers,
  Sparkles,
  Workflow,
  Clock,
  ShieldCheck,
  Activity,
  Check,
} from 'lucide-react';
import { SERVICES_DATA } from '@/data/servicesData';

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
    <div className="w-full font-sans text-neutral-900 select-none overflow-hidden">
      
      {/* ================= 1. HERO SECTION (CURVED MASK + DEEP ORANGE/TERRACOTTA GLOW) ================= */}
      <section
        style={{
          maskImage: 'radial-gradient(135% 100% at 50% 0%, black 82%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(135% 100% at 50% 0%, black 82%, transparent 100%)',
        }}
        className="relative w-full overflow-hidden bg-gradient-to-b from-[#1f0a02] via-[#321105] to-[#431407] pt-32 sm:pt-40 lg:pt-48 pb-32 sm:pb-44 text-white shadow-[0_30px_70px_rgba(255,77,0,0.18)]"
      >
        {/* Precision Dot Grid Overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-15"
          style={{
            backgroundImage: 'radial-gradient(#ff6b35 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Ambient Top Flare */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] sm:w-[850px] lg:w-[1100px] h-[350px] sm:h-[450px] bg-gradient-to-b from-[#ff4d00]/45 via-[#ea580c]/25 to-transparent blur-[130px] rounded-full z-0"
        />

        {/* Deep Center Core Glow behind the title */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] lg:w-[700px] h-[200px] sm:h-[300px] bg-[#ff3b00]/30 blur-[90px] rounded-full z-0"
        />

        {/* Bottom Edge Warming Light */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-28 bg-[#f97316]/20 blur-[80px] rounded-full z-0"
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono tracking-widest uppercase text-orange-200">
            <span>Discipline Architecture // {service.id}</span>
          </div>

          <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white leading-[0.92] drop-shadow-[0_15px_35px_rgba(0,0,0,0.7)]">
            {service.title}
            <span className="text-[#ff4d00] drop-shadow-[0_0_25px_#ff4d00]">.</span>
          </h1>

          {/* Dynamic 3-Level Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="inline-flex flex-wrap items-center justify-center gap-2 pt-2 font-body text-xs sm:text-sm font-medium"
          >
            <Link href="/" className="text-orange-200/80 hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-orange-400/70 stroke-[2.5]" />
            <Link href="/services" className="text-orange-200/80 hover:text-white transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-orange-400/70 stroke-[2.5]" />
            <span className="text-white font-semibold tracking-wide bg-white/10 px-3 py-0.5 rounded-full border border-white/15 backdrop-blur-sm">
              {service.title}
            </span>
          </nav>
        </div>
      </section>

      {/* ================= 2. FLOATING STRIP (4 VALUE PILLS) ================= */}
      <section className="relative z-20 -mt-12 sm:-mt-14 max-w-7xl xl:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-4 rounded-3xl bg-white/95 border-2 border-orange-200/80 backdrop-blur-xl shadow-[0_20px_45px_-10px_rgba(255,77,0,0.18)]">
          {[
            { icon: Zap, label: 'Save Time', sub: 'Automate repetitive ops' },
            { icon: TrendingUp, label: 'Boost Output', sub: 'Multiply team bandwidth' },
            { icon: ShieldAlert, label: 'Reduce Costs', sub: 'Cut human operational errors' },
            { icon: Headphones, label: '24/7 SLA Support', sub: 'Zero-downtime reliability' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group relative flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-orange-50/50 border border-orange-200/70 hover:border-[#ff4d00]/70 hover:bg-white hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer shadow-2xs"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#ff4d00]/10 via-[#ea580c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 w-11 h-11 rounded-xl bg-white border border-orange-200 flex items-center justify-center text-[#ff4d00] shrink-0 group-hover:bg-[#070707] group-hover:text-white group-hover:border-neutral-900 group-hover:rotate-6 transition-all duration-300 shadow-xs">
                  <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
                
                <div className="relative z-10 min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-neutral-900 tracking-tight truncate group-hover:text-[#ff4d00] transition-colors">
                    {item.label}
                  </h4>
                  <p className="text-[11px] font-mono text-neutral-500 truncate">
                    {item.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= 3. WHAT WE OFFER (4-CARD GRID) ================= */}
      <section className="relative py-20 sm:py-28 lg:py-36 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#ff4d00]/10 blur-[180px] rounded-full" />

        <div className="relative z-10 max-w-7xl xl:max-w-[1550px] mx-auto space-y-12 sm:space-y-16">
          {/* Header */}
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/70 border border-orange-200/80 text-xs font-mono font-bold tracking-widest text-[#ff4d00] uppercase shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d00] animate-pulse" />
              <span>Core Scope</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-950">
              What We <span className="text-[#ff4d00]">Offer</span>
            </h2>
            <p className="font-body text-sm sm:text-base text-neutral-600 font-normal max-w-xl mx-auto leading-relaxed">
              Engineered modules designed to integrate directly with your production infrastructure.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: '01',
                title: 'Smart Workflow Automation',
                desc: 'Automate complex cross-platform business workflows with API integrations and failover triggers.',
                icon: Workflow,
              },
              {
                id: '02',
                title: 'AI Assistants & Agents',
                desc: 'Deploy custom models that handle customer support, ticket routing, and repetitive operational tasks.',
                icon: Cpu,
              },
              {
                id: '03',
                title: 'Process Modernization',
                desc: 'Streamline operational pipelines and remove manual bottleneck data entries permanently.',
                icon: Activity,
              },
              {
                id: '04',
                title: 'Third-Party Webhooks',
                desc: 'Connect your core apps like Slack, Stripe, CRMs, WhatsApp, and databases with sub-second sync.',
                icon: Layers,
              },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-[30px] bg-white/95 border-2 border-orange-200/75 hover:border-[#ff4d00] hover:shadow-[0_24px_50px_-10px_rgba(255,77,0,0.22)] hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  {/* Subtle Orange Glow Spread on Hover */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#ff4d00]/10 via-[#ea580c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="pointer-events-none absolute -top-12 -right-12 w-28 h-28 bg-[#ff4d00]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="space-y-6 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-[#ff4d00] border-2 border-white/80 flex items-center justify-center text-white shadow-[0_6px_20px_rgba(255,77,0,0.35)] transition-all duration-300 group-hover:bg-[#070707] group-hover:border-neutral-800 group-hover:rotate-6 group-hover:scale-105">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-heading text-lg sm:text-xl font-bold tracking-tight text-neutral-900 group-hover:text-[#ff4d00] transition-colors">
                        {card.title}
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 mt-8 pt-4 border-t border-orange-100/80 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-[#ff4d00] tracking-wider">
                      MODULE {card.id}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-orange-100/70 border border-orange-200/60 flex items-center justify-center text-[#ff4d00] group-hover:bg-[#ff4d00] group-hover:text-white group-hover:border-[#ff4d00] group-hover:scale-110 transition-all">
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-300 group-hover:rotate-45" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 4. WHAT CAN YOU AUTOMATE? (SPLIT SHOWCASE + 3D FLOATING CARDS) ================= */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 border-t border-orange-200/50">
        <div className="relative z-10 max-w-7xl xl:max-w-[1550px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading + Checklist + Action */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/70 border border-orange-200/80 text-xs font-mono font-bold tracking-widest text-[#ff4d00] uppercase shadow-2xs">
              Possibilities
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-950 leading-[1.05]">
              What Can You <br />
              <span className="text-[#ff4d00]">Automate?</span>
            </h2>

            <p className="font-body text-neutral-700 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg border-l-2 border-[#ff4d00] pl-5 sm:pl-6">
              From customer support to business operations — let our custom-tailored automation routines handle the repetitive work for you.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                'WhatsApp & Chat Automations',
                'Customer Support Routing',
                'Lead Generation & Triage',
                'Appointment & Calendar Booking',
                'Email Pipeline Automation',
                'Data Management & Sync',
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="group flex items-center gap-3 p-3 rounded-xl bg-white/90 border border-orange-200/80 shadow-2xs hover:border-[#ff4d00] hover:scale-[1.01] transition-all cursor-pointer"
                >
                  <div className="w-6 h-6 rounded-full bg-orange-100/80 flex items-center justify-center text-[#ff4d00] shrink-0 group-hover:bg-[#ff4d00] group-hover:text-white transition-colors">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-neutral-800">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4.5 rounded-2xl bg-[#ff4d00] hover:bg-[#ff3b00] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_12px_32px_-4px_rgba(255,77,0,0.42)] transition-all hover:scale-105 active:scale-98"
              >
                <span>Automate With Our Team</span>
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column: 3D Floating Action Badges */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[440px] sm:min-h-[500px]">
            {/* Ambient Warm Halo Ring */}
            <div className="absolute w-[340px] sm:w-[460px] h-[340px] sm:h-[460px] rounded-full border border-orange-400/30 bg-gradient-to-tr from-[#ff4d00]/20 via-[#ea580c]/10 to-transparent blur-md pointer-events-none animate-pulse" />

            {/* Floating Card 1: WhatsApp (Top-Left) */}
            <div className="absolute top-6 left-4 sm:left-8 p-4 rounded-2xl bg-white/95 border-2 border-emerald-400/60 backdrop-blur-xl shadow-[0_16px_36px_rgba(16,185,129,0.18)] flex items-center gap-3.5 -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-11 h-11 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                WA
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-neutral-900">WhatsApp Automation</p>
                <p className="text-[10px] font-mono text-emerald-600 font-semibold">Sub-Second Response</p>
              </div>
            </div>

            {/* Floating Card 2: AI Support Chatbot (Top-Right) */}
            <div className="absolute top-20 right-2 sm:right-6 p-4 rounded-2xl bg-[#070707] border-2 border-[#ff4d00]/80 text-white backdrop-blur-xl shadow-[0_16px_36px_rgba(255,77,0,0.25)] flex items-center gap-3.5 rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-11 h-11 rounded-xl bg-[#ff4d00] text-white flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-white">AI Support Chatbot</p>
                <p className="text-[10px] font-mono text-orange-300 font-semibold">Automated Triage</p>
              </div>
            </div>

            {/* Floating Card 3: Appointment Booking (Bottom-Left) */}
            <div className="absolute bottom-16 left-6 sm:left-12 p-4 rounded-2xl bg-white/95 border-2 border-blue-400/60 backdrop-blur-xl shadow-[0_16px_36px_rgba(59,130,246,0.18)] flex items-center gap-3.5 rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-neutral-900">Appointment Booking</p>
                <p className="text-[10px] font-mono text-blue-600 font-semibold">Live Calendar Sync</p>
              </div>
            </div>

            {/* Floating Card 4: Email Automation (Bottom-Right) */}
            <div className="absolute bottom-4 right-6 sm:right-12 p-4 rounded-2xl bg-white/95 border-2 border-orange-400/60 backdrop-blur-xl shadow-[0_16px_36px_rgba(255,77,0,0.18)] flex items-center gap-3.5 -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-11 h-11 rounded-xl bg-[#ea580c] text-white flex items-center justify-center font-bold text-sm">
                API
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-neutral-900">Email Automation</p>
                <p className="text-[10px] font-mono text-orange-600 font-semibold">Dynamic Webhooks</p>
              </div>
            </div>

            {/* Center Core Floating Pill */}
            <div className="relative z-10 px-6 py-3 rounded-full bg-gradient-to-r from-[#ff4d00] to-[#ea580c] text-white font-mono text-xs font-black uppercase tracking-widest shadow-[0_0_35px_rgba(255,77,0,0.6)]">
              Operational Hub
            </div>
          </div>

        </div>
      </section>

      {/* ================= 5. HOW IT WORKS (CONNECTED 4-STEP PIPELINE) ================= */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 border-t border-orange-200/50">
        <div className="relative z-10 max-w-7xl xl:max-w-[1550px] mx-auto space-y-16">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/70 border border-orange-200/80 text-xs font-mono font-bold tracking-widest text-[#ff4d00] uppercase shadow-2xs">
              Our Process
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase tracking-tight text-neutral-950">
              How It <span className="text-[#ff4d00]">Works</span>
            </h2>
            <p className="font-body text-xs sm:text-sm text-neutral-600 font-normal">
              Get your custom digital solutions engineered in just 4 simple steps.
            </p>
          </div>

          {/* 4 Connected Pipeline Steps */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
            
            {/* Orange Pipeline Connector Line for Desktop */}
            <div className="hidden lg:block absolute top-7 left-14 right-14 h-[2px] bg-gradient-to-r from-[#ff4d00] via-[#ea580c]/50 to-orange-200 z-0" />

            {[
              {
                step: '1',
                title: 'Understand Your Business',
                desc: 'Tell us about your goals, stack constraints, and process requirements.',
              },
              {
                step: '2',
                title: 'Design Architecture',
                desc: 'We map the perfect workflow solution and technical logic blueprint.',
              },
              {
                step: '3',
                title: 'Build & Integrate',
                desc: 'Our lead team develops the endpoints, components, and connects everything.',
              },
              {
                step: '4',
                title: 'Launch & Optimize',
                desc: 'Go live with telemetry and let the solution automate heavy daily tasks.',
              },
            ].map((st, i) => (
              <div 
                key={i} 
                className="group relative z-10 flex flex-col items-center text-center space-y-4 p-5 rounded-2xl bg-white/70 border border-orange-200/60 hover:bg-white hover:border-[#ff4d00]/70 hover:shadow-md transition-all duration-300"
              >
                {/* Glowing Step Circle */}
                <div className="w-14 h-14 rounded-full bg-white border-2 border-[#ff4d00] flex items-center justify-center text-[#ff4d00] font-mono font-black text-lg shadow-[0_4px_16px_rgba(255,77,0,0.3)] group-hover:bg-[#ff4d00] group-hover:text-white transition-colors duration-300">
                  {st.step}
                </div>
                <h4 className="font-heading text-lg font-bold text-neutral-900 group-hover:text-[#ff4d00] transition-colors">
                  {st.title}
                </h4>
                <p className="font-body text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-xs">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 6. WHY CHOOSE ZORZEX? (LEFT GRID + RIGHT DARK DASHBOARD MOCKUP) ================= */}
      <section className="relative py-20 sm:py-28 lg:py-36 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 border-t border-orange-200/50">
        <div className="relative z-10 max-w-7xl xl:max-w-[1550px] mx-auto space-y-12">
          
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/70 border border-orange-200/80 text-xs font-mono font-bold tracking-widest text-[#ff4d00] uppercase shadow-2xs">
              The Zorzex Advantage
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-950">
              Why Choose <span className="text-[#ff4d00]">Zorzex?</span>
            </h2>
            <p className="font-body text-sm sm:text-base text-neutral-600 font-normal max-w-xl">
              We focus on ROI &amp; real outcomes — converting repetitive work into compounding growth for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 4 Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Clock,
                  title: 'Save Time',
                  desc: 'Eliminate 30+ hours of routine manual tasks every single week.',
                },
                {
                  icon: Zap,
                  title: 'Reduce Manual Errors',
                  desc: 'Strict automated execution with zero human fatigue slip-ups.',
                },
                {
                  icon: Headphones,
                  title: '24/7 SLA Telemetry',
                  desc: 'Continuous real-time health checks and automated incident alerts.',
                },
                {
                  icon: Sparkles,
                  title: 'Scalable Solutions',
                  desc: 'Built on modular cloud foundations ready to grow alongside you.',
                },
              ].map((box, i) => {
                const Icon = box.icon;
                return (
                  <div
                    key={i}
                    className="group p-5 sm:p-6 rounded-2xl bg-white/95 border-2 border-orange-200/70 hover:border-[#ff4d00] hover:shadow-[0_16px_36px_-8px_rgba(255,77,0,0.2)] hover:-translate-y-1 transition-all duration-300 space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-orange-100/80 border border-orange-200 flex items-center justify-center text-[#ff4d00] group-hover:bg-[#070707] group-hover:text-white group-hover:rotate-6 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading text-sm sm:text-base font-bold text-neutral-900 group-hover:text-[#ff4d00] transition-colors">
                      {box.title}
                    </h4>
                    <p className="font-body text-xs text-neutral-600 leading-relaxed font-normal">
                      {box.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right: Obsidian Studio Dashboard Mockup (Black + Orange Glow) */}
            <div className="lg:col-span-6 relative p-6 sm:p-8 rounded-3xl bg-[#070707] border-2 border-orange-500/30 shadow-[0_30px_70px_rgba(255,77,0,0.28)] space-y-6 text-white overflow-hidden">
              <div className="pointer-events-none absolute -top-20 -right-20 w-56 h-56 bg-[#ff4d00]/25 rounded-full blur-3xl" />

              <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff4d00] animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                    Active Operations Telemetry
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                  Live // Optimal
                </span>
              </div>

              {/* Graphical Trend Wave Mockup */}
              <div className="relative z-10 space-y-3">
                <div className="flex justify-between text-xs font-mono text-neutral-400">
                  <span>Throughput Velocity</span>
                  <span className="text-[#ff4d00] font-bold">+240% MoM</span>
                </div>
                
                <div className="h-28 w-full flex items-end gap-1.5 pt-4">
                  {[20, 35, 28, 52, 45, 68, 60, 82, 88, 76, 95, 100].map((h, idx) => (
                    <div
                      key={idx}
                      style={{ height: `${h}%` }}
                      className="flex-1 bg-gradient-to-t from-[#ff4d00]/30 to-[#ff4d00] rounded-t-sm hover:brightness-125 transition-all"
                    />
                  ))}
                </div>
              </div>

              {/* 3 Metric Pills */}
              <div className="relative z-10 grid grid-cols-3 gap-2.5 pt-4 border-t border-white/10 text-center">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                  <p className="text-[10px] font-mono text-neutral-400 uppercase">Tasks Solved</p>
                  <p className="text-base sm:text-lg font-mono font-bold text-white">12.5K</p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                  <p className="text-[10px] font-mono text-neutral-400 uppercase">Latency</p>
                  <p className="text-base sm:text-lg font-mono font-bold text-[#ff4d00]">142ms</p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                  <p className="text-[10px] font-mono text-neutral-400 uppercase">Efficiency</p>
                  <p className="text-base sm:text-lg font-mono font-bold text-white">99.8%</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= 7. BOTTOM STUDIO BANNER CTA ================= */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="relative z-10 max-w-7xl xl:max-w-[1550px] mx-auto">
          <div className="relative rounded-3xl sm:rounded-[36px] bg-gradient-to-r from-[#180702] via-[#2d0e04] to-[#120401] border-2 border-orange-500/40 p-8 sm:p-14 lg:p-16 overflow-hidden shadow-[0_30px_70px_rgba(255,77,0,0.28)] flex flex-col lg:flex-row items-center justify-between gap-10 text-white">
            
            {/* Shimmer Light Flare */}
            <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 bg-[#ff4d00]/30 rounded-full blur-3xl" />

            <div className="space-y-4 max-w-xl text-center lg:text-left relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-mono font-semibold tracking-wider uppercase text-orange-200">
                Immediate Sprint Openings
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase text-white leading-tight">
                Ready to Automate <br />
                <span className="text-[#ff4d00]">Your Operations?</span>
              </h2>
              <p className="font-body text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                Turn your bottlenecked processes into automated growth engines. Connect directly with our lead architects.
              </p>
              
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4.5 rounded-2xl bg-[#ff4d00] hover:bg-[#ff3b00] text-white font-bold text-sm tracking-wider uppercase shadow-[0_12px_28px_rgba(255,77,0,0.45)] transition-all hover:scale-105 active:scale-95"
                >
                  <span>Get Started Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Glowing Brand Mark from Reference */}
            <div className="relative z-10 flex items-center justify-center">
              <div className="relative text-7xl sm:text-9xl font-black font-heading tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-orange-200 to-[#ff4d00] drop-shadow-[0_0_50px_rgba(255,77,0,0.7)] select-none">
                ZZ
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}