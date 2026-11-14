import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
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
    PhoneCall,
    LayoutGrid,
    UserCheck,
    UserPlus,
    Video,
    CheckCircle
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
            {/* ================= 1. HERO SECTION (FULL VIEWPORT FEEL) ================= */}
            <section className="relative w-full min-h-[82vh] sm:min-h-[86vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#1a0702] via-[#2b0e04] to-[#1f0a02] pt-24 pb-28 text-white border-b border-orange-500/15">
                {/* Precision Dot Grid Overlay */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-0 opacity-20"
                    style={{
                        backgroundImage: 'radial-gradient(#ff6b35 1px, transparent 1px)',
                        backgroundSize: '26px 26px',
                    }}
                />

                {/* Ambient Top Flare */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[550px] sm:w-[850px] lg:w-[1050px] h-[320px] sm:h-[420px] bg-gradient-to-b from-[#ea580c]/35 via-[#f97316]/15 to-transparent blur-[120px] rounded-full z-0"
                />

                {/* Center Core Glow behind title */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[550px] lg:w-[700px] h-[220px] sm:h-[300px] bg-[#ff4d00]/22 blur-[100px] rounded-full z-0"
                />

                {/* Hero Content (Centered Vertically) */}
                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-5 sm:space-y-6">
                    {/* Main Heading */}
                    <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.08] drop-shadow-[0_12px_28px_rgba(0,0,0,0.7)]">
                        {service.title}
                        <span className="text-[#ea580c]">.</span>
                    </h1>

                    {/* Breadcrumb Placed Below Heading */}
                    <nav
                        aria-label="Breadcrumb"
                        className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md text-xs sm:text-sm font-medium"
                    >
                        <Link href="/" className="text-orange-200/75 hover:text-white transition-colors">
                            Home
                        </Link>
                        <ChevronRight className="w-3.5 h-3.5 text-orange-400/70" />
                        <Link href="/services" className="text-orange-200/75 hover:text-white transition-colors">
                            Services
                        </Link>
                        <ChevronRight className="w-3.5 h-3.5 text-orange-400/70" />
                        <span className="text-[#ff6b35] font-semibold">
                            {service.title}
                        </span>
                    </nav>
                </div>
            </section>

            {/* ================= 2. FLOATING METRICS / VALUE STRIP ================= */}
            <section className="relative z-20 -mt-12 sm:-mt-14 max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-orange-200/80 shadow-[0_20px_50px_-15px_rgba(234,88,12,0.18)] overflow-hidden">

                    {/* Subtle Top Orange Accent Line */}
                    <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#ea580c] to-transparent opacity-80" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-orange-100">
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
                                    className="group relative flex items-center gap-4 p-5 sm:p-6 hover:bg-gradient-to-br hover:from-orange-50/90 hover:to-amber-50/40 transition-all duration-300"
                                >
                                    {/* Clean Icon Container */}
                                    <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[#ea580c] shrink-0 group-hover:bg-[#ea580c] group-hover:text-white group-hover:border-[#ea580c] group-hover:shadow-[0_6px_18px_rgba(234,88,12,0.32)] transition-all duration-300">
                                        <Icon className="w-5 h-5" />
                                    </div>

                                    {/* Text Details */}
                                    <div className="min-w-0">
                                        <h4 className="text-sm sm:text-base font-bold text-neutral-900 tracking-tight group-hover:text-[#ea580c] transition-colors truncate">
                                            {item.label}
                                        </h4>
                                        <p className="text-xs text-neutral-500 font-medium truncate mt-0.5">
                                            {item.sub}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ================= 3. WHAT WE OFFER (4 DYNAMIC INTERACTIVE CARDS) ================= */}
            <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 font-sans">

                {/* Atmospheric Background Ambient Flare */}
                <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[400px] bg-gradient-to-r from-[#ff4d00]/15 via-[#ea580c]/8 to-transparent blur-[160px] rounded-full" />

                <div className="relative z-10 max-w-7xl xl:max-w-[1550px] mx-auto space-y-10 sm:space-y-14">

                    {/* Section Header */}
                    <div className="text-center space-y-3 max-w-2xl mx-auto">
                        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-950">
                            What We <span className="text-[#ff4d00]">Offer</span>
                        </h2>

                        <p className="font-body text-xs sm:text-sm lg:text-base text-neutral-600 font-normal leading-relaxed">
                            Engineered modules designed to integrate directly with your production infrastructure.[cite: 1]
                        </p>
                    </div>

                    {/* 4 Interactive Cards Single Row (Responsive: 1 -> 2 -> 4) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
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
                                    className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-[26px] border-2 border-orange-200/90 hover:border-[#ff4d00] hover:shadow-[0_20px_45px_-8px_rgba(255,77,0,0.28)] hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300 overflow-hidden cursor-pointer"
                                    style={{
                                        background: 'linear-gradient(160deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 246, 238, 0.92) 55%, rgba(254, 215, 170, 0.45) 100%)',
                                    }}
                                >
                                    {/* 1. Internal Subtle Radial Hover Glow */}
                                    <div className="pointer-events-none absolute -top-14 -right-14 w-36 h-36 bg-[#ff4d00]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#ff4d00]/[0.03] to-[#ea580c]/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Top Content: Icon + Title + Description */}
                                    <div className="relative z-10 space-y-5">

                                        {/* Header inside card: Module Number & Icon Badge */}
                                        <div className="flex items-center justify-between">
                                            <div className="w-12 h-12 rounded-2xl bg-white border border-orange-200/90 shadow-2xs flex items-center justify-center text-[#ff4d00] group-hover:bg-[#ff4d00] group-hover:text-white group-hover:border-[#ff4d00] group-hover:shadow-[0_6px_20px_rgba(255,77,0,0.4)] group-hover:rotate-6 group-hover:scale-105 transition-all duration-300">
                                                <Icon className="w-6 h-6 stroke-[2.2]" />
                                            </div>

                                            <span className="text-[11px] font-mono font-bold tracking-wider text-orange-400 group-hover:text-[#ff4d00] transition-colors">
                                                0{i + 1}
                                            </span>
                                        </div>

                                        {/* Title & Description */}
                                        <div className="space-y-2">
                                            <h3 className="font-heading text-lg sm:text-xl font-bold tracking-tight text-neutral-900 group-hover:text-[#ff4d00] transition-colors leading-snug">
                                                {card.title}
                                            </h3>
                                            <p className="font-body text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                                                {card.desc}
                                            </p>
                                        </div>

                                    </div>

                                    {/* Bottom Card Footer: Tag & Interactive Launch Button */}
                                    <div className="relative z-10 mt-7 pt-4 border-t border-orange-200/70 flex items-center justify-between">
                                        <span className="text-[11px] font-mono font-semibold tracking-wider text-neutral-500 uppercase">
                                            Ready Spec
                                        </span>

                                        <div className="w-8 h-8 rounded-full bg-white/90 border border-orange-200/80 flex items-center justify-center text-neutral-700 shadow-2xs group-hover:bg-[#ff4d00] group-hover:border-[#ff4d00] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                                            <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-300 group-hover:rotate-45" />
                                        </div>
                                    </div>

                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>

            <section className="relative py-20 sm:py-28 lg:py-36 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 border-t border-orange-200/60 font-sans overflow-hidden">

                {/* Atmospheric Background Ambient Core Glow */}
                <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[350px] bg-gradient-to-r from-[#ff4d00]/15 via-[#ea580c]/10 to-transparent blur-[160px] rounded-full" />

                <div className="relative z-10 max-w-7xl xl:max-w-[1600px] mx-auto space-y-16 sm:space-y-24">

                    {/* Section Header */}
                    <div className="text-center space-y-3.5 max-w-2xl mx-auto">

                        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-950">
                            How It <span className="text-[#ff4d00]">Works</span>
                        </h2>

                        <p className="font-body text-xs sm:text-sm lg:text-base text-neutral-600 font-normal leading-relaxed">
                            Systematic, sprint-based deployment pipeline engineered from discovery to production.
                        </p>
                    </div>

                    {/* Connected Interactive Node Track */}
                    <div className="relative">

                        {/* Continuous Connecting Pipeline Line (Runs precisely through circular node centers on desktop) */}
                        <div
                            aria-hidden="true"
                            className="hidden xl:block absolute top-[36px] left-[7%] right-[7%] h-[2px] z-0 pointer-events-none"
                            style={{
                                background: 'linear-gradient(90deg, rgba(255, 77, 0, 0.2) 0%, rgba(255, 77, 0, 0.8) 50%, rgba(255, 77, 0, 0.2) 100%)',
                                boxShadow: '0 0 12px rgba(255, 77, 0, 0.35)',
                            }}
                        />

                        {/* 6 Step Nodes Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-10 sm:gap-8 xl:gap-4 relative z-10">
                            {[
                                {
                                    step: 'STEP 01',
                                    title: 'Book a Call',
                                    desc: 'Schedule an engineering sprint discovery to map technical requirements.',
                                    icon: PhoneCall,
                                },
                                {
                                    step: 'STEP 02',
                                    title: 'Select Scope',
                                    desc: 'Choose the architecture tier and sprint milestones that match your product.',
                                    icon: LayoutGrid,
                                },
                                {
                                    step: 'STEP 03',
                                    title: 'Sign Agreement',
                                    desc: 'Seamless onboarding handshake with strict NDA & code ownership guarantees.',
                                    icon: UserPlus,
                                },
                                {
                                    step: 'STEP 04',
                                    title: 'Lead Onboarding',
                                    desc: 'Direct Slack channel setup, repository access, and technical spec lock.',
                                    icon: UserCheck,
                                },
                                {
                                    step: 'STEP 05',
                                    title: 'Asset Submission',
                                    desc: 'Provide credentials, API tokens, schemas, or design tokens at your convenience.',
                                    icon: Video,
                                },
                                {
                                    step: 'STEP 06',
                                    title: 'Continuous Delivery',
                                    desc: 'Your dedicated team deploys tested, high-velocity increments regularly.',
                                    icon: CheckCircle,
                                },
                            ].map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={i}
                                        className="group relative flex flex-col items-center text-center cursor-pointer"
                                    >
                                        {/* Circular Node with Ambient Orange Halo Glow */}
                                        <div className="relative mb-6">

                                            {/* Dynamic Neon Orange Halo Ring (Expands on Hover) */}
                                            <div className="absolute -inset-2.5 rounded-full bg-[#ff4d00]/20 blur-md opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 pointer-events-none" />

                                            {/* Outer Glass Node Circle */}
                                            <div
                                                className="relative z-10 w-[72px] h-[72px] rounded-full border-2 border-orange-300/80 group-hover:border-[#ff4d00] flex items-center justify-center transition-all duration-300 shadow-[0_8px_24px_rgba(255,77,0,0.18)] group-hover:shadow-[0_0_35px_rgba(255,77,0,0.55)] group-hover:scale-110"
                                                style={{
                                                    background: 'radial-gradient(circle at 35% 30%, #1e0902 0%, #0d0401 70%, #050200 100%)',
                                                }}
                                            >
                                                {/* Glowing Icon inside Dark Obsidian Dome */}
                                                <Icon className="w-6 h-6 text-orange-200 group-hover:text-[#ff4d00] group-hover:scale-110 transition-all duration-300 stroke-[2]" />

                                                {/* Subtle Top-Edge Specular Light */}
                                                <div className="pointer-events-none absolute inset-x-3 top-1 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full" />
                                            </div>

                                            {/* Center Core Micro Pulsing Dot */}
                                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#ff4d00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_#ff4d00]" />
                                        </div>

                                        {/* Step Tag */}
                                        <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-[#ea580c] uppercase mb-1.5 group-hover:text-[#ff4d00] transition-colors">
                                            {item.step}
                                        </span>

                                        {/* Step Title */}
                                        <h3 className="font-heading text-base sm:text-lg font-bold tracking-tight text-neutral-900 group-hover:text-[#ff4d00] transition-colors leading-snug mb-2">
                                            {item.title}
                                        </h3>

                                        {/* Step Description */}
                                        <p className="font-body text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-normal max-w-[210px] group-hover:text-neutral-800 transition-colors">
                                            {item.desc}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                    </div>

                </div>
            </section>
            {/* ================= 6. WHY CHOOSE ZORZEX? (LIGHT ORANGE CARDS + DARK DASHBOARD) ================= */}
            <section className="relative py-20 sm:py-28 lg:py-36 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 border-t border-orange-200/60 font-sans select-none overflow-hidden">

                {/* Ambient Warm Atmosphere Glow */}
                <div className="pointer-events-none absolute top-1/2 -right-24 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-l from-[#ff4d00]/15 via-[#ea580c]/8 to-transparent blur-[160px] rounded-full" />

                <div className="relative z-10 max-w-7xl xl:max-w-[1550px] mx-auto space-y-12 sm:space-y-16">

                    {/* Section Header */}
                    <div className="space-y-3 max-w-2xl">
                        <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-950 leading-[1.05]">
                            Why Choose <span className="text-[#ff4d00]">Zorzex?</span>
                        </h2>

                        <p className="font-body text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
                            Engineered with deterministic cloud standards — converting routine operations into automated, compounding leverage for your business.
                        </p>
                    </div>

                    {/* Symmetrical 12-Column Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch">

                        {/* ================= LEFT COLUMN: 4 LIGHT WARM ORANGE CARDS ================= */}
                        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5 sm:gap-4">
                            {[
                                {
                                    icon: Clock,
                                    title: 'Save 30+ Hrs/Week',
                                    metric: '0.0s Delay',
                                    desc: 'Eliminate repetitive manual spreadsheet and CRM touchpoints completely.',
                                },
                                {
                                    icon: Zap,
                                    title: 'Deterministic Execution',
                                    metric: '99.98% Acc.',
                                    desc: 'Strict type validation preventing costly operational human slip-ups.',
                                },
                                {
                                    icon: Headphones,
                                    title: '24/7 SLA Telemetry',
                                    metric: 'Webhooks',
                                    desc: 'Continuous edge monitoring with automated failover alerting.',
                                },
                                {
                                    icon: Sparkles,
                                    title: 'Modular Scalability',
                                    metric: '100x Concurrency',
                                    desc: 'Cloud-native infrastructure that scales alongside your traffic volume.',
                                },
                            ].map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={i}
                                        className="group relative p-4 sm:p-5 rounded-2xl border-2 border-orange-200/90 hover:border-[#ff4d00] transition-all duration-300 hover:shadow-[0_16px_32px_-6px_rgba(255,77,0,0.22)] hover:-translate-y-0.5 overflow-hidden cursor-pointer"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 246, 238, 0.92) 55%, rgba(254, 215, 170, 0.45) 100%)',
                                        }}
                                    >
                                        {/* Subtle Warm Orange Flare on Hover */}
                                        <div className="pointer-events-none absolute -right-6 -bottom-6 w-20 h-20 bg-[#ff4d00]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#ff4d00]/10 via-[#ea580c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        <div className="relative z-10 flex items-start gap-4">
                                            {/* Crisp White & Orange Icon Box */}
                                            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-orange-200/90 flex items-center justify-center text-[#ff4d00] shrink-0 group-hover:bg-[#ff4d00] group-hover:text-white group-hover:border-[#ff4d00] group-hover:rotate-6 group-hover:scale-105 transition-all duration-300 shadow-2xs">
                                                <Icon className="w-5 h-5 transition-transform duration-300" />
                                            </div>

                                            <div className="min-w-0 flex-1 space-y-1">
                                                <div className="flex items-center justify-between gap-2">
                                                    <h3 className="font-heading text-sm sm:text-base font-bold text-neutral-900 group-hover:text-[#ff4d00] transition-colors truncate">
                                                        {item.title}
                                                    </h3>
                                                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-orange-100/80 text-[#ea580c] border border-orange-200 shrink-0">
                                                        {item.metric}
                                                    </span>
                                                </div>
                                                <p className="font-body text-xs text-neutral-600 font-normal leading-relaxed line-clamp-2">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* ================= RIGHT COLUMN: HIGH-FIDELITY STUDIO DASHBOARD MOCKUP ================= */}
                        <div
                            className="lg:col-span-7 relative p-5 sm:p-7 lg:p-8 rounded-[28px] sm:rounded-[36px] border-2 border-orange-500/35 shadow-[0_30px_80px_rgba(255,77,0,0.28)] space-y-5 text-white overflow-hidden flex flex-col justify-between"
                            style={{
                                background: 'radial-gradient(circle at 35% 25%, #1c0802 0%, #0d0401 65%, #050200 100%)',
                            }}
                        >
                            {/* Top-Edge Specular Glass Light */}
                            <div className="pointer-events-none absolute inset-x-12 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-orange-300/60 to-transparent" />
                            <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 bg-[#ff4d00]/25 rounded-full blur-3xl z-0" />

                            {/* 1. Terminal Window Bar & Edge Monitor Controls */}
                            <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                                    </div>
                                    <div className="h-3.5 w-[1px] bg-white/15" />
                                    <span className="text-[11px] font-mono tracking-wider text-neutral-300 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-[#ff4d00] animate-pulse" />
                                        zorzex-runtime-node-01.internal
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 font-bold">
                                        SYS // HEALTHY
                                    </span>
                                </div>
                            </div>

                            {/* 2. Primary Metric Stats Banner */}
                            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {[
                                    { label: 'Throughput', val: '48.2k', sub: '+18.4% MoM', highlight: true },
                                    { label: 'Median Latency', val: '94ms', sub: 'Global Edge', highlight: false },
                                    { label: 'Error Rate', val: '0.002%', sub: 'Deterministic', highlight: false },
                                    { label: 'Uptime SLA', val: '99.99%', sub: 'Zero Outages', highlight: false },
                                ].map((st, idx) => (
                                    <div
                                        key={idx}
                                        className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.07] space-y-0.5"
                                    >
                                        <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
                                            {st.label}
                                        </span>
                                        <p className={`text-base sm:text-lg font-mono font-black ${st.highlight ? 'text-[#ff4d00]' : 'text-white'}`}>
                                            {st.val}
                                        </p>
                                        <span className="text-[10px] font-mono text-orange-300/80 block">
                                            {st.sub}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* 3. Smooth Area Wave Graph with Axis Grid */}
                            <div className="relative z-10 p-4 rounded-2xl bg-black/40 border border-white/[0.06] space-y-3">
                                <div className="flex items-center justify-between text-xs font-mono">
                                    <span className="text-neutral-400 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d00]" />
                                        Event Dispatch Load (24h)
                                    </span>
                                    <span className="text-emerald-400 font-bold">2,410 req/min peak</span>
                                </div>

                                {/* SVG Vector Line & Gradient Fill */}
                                <div className="relative h-28 sm:h-32 w-full">
                                    <svg
                                        viewBox="0 0 500 120"
                                        preserveAspectRatio="none"
                                        className="w-full h-full overflow-visible"
                                    >
                                        <defs>
                                            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#ff4d00" stopOpacity="0.45" />
                                                <stop offset="60%" stopColor="#ea580c" stopOpacity="0.12" />
                                                <stop offset="100%" stopColor="#ff4d00" stopOpacity="0.0" />
                                            </linearGradient>
                                        </defs>

                                        {/* Background Horizontal Guide Lines */}
                                        <line x1="0" y1="20" x2="500" y2="20" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                                        <line x1="0" y1="60" x2="500" y2="60" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                                        <line x1="0" y1="100" x2="500" y2="100" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />

                                        {/* Area Gradient Fill */}
                                        <path
                                            d="M 0,95 Q 60,85 110,65 T 220,50 T 320,25 T 410,40 T 500,10 L 500,120 L 0,120 Z"
                                            fill="url(#chartGradient)"
                                        />

                                        {/* Glowing Top Curve Stroke */}
                                        <path
                                            d="M 0,95 Q 60,85 110,65 T 220,50 T 320,25 T 410,40 T 500,10"
                                            fill="none"
                                            stroke="#ff4d00"
                                            strokeWidth="2.5"
                                            className="drop-shadow-[0_0_10px_#ff4d00]"
                                        />

                                        {/* Active Marker Pulse Dot */}
                                        <circle cx="500" cy="10" r="4.5" fill="#ffffff" stroke="#ff4d00" strokeWidth="2.5" />
                                    </svg>
                                </div>
                            </div>

                            {/* 4. Live Runtime Terminal Feed (Log Ticker) */}
                            <div className="relative z-10 p-3 rounded-xl bg-black/60 border border-white/[0.08] font-mono text-[11px] space-y-1">
                                <div className="flex items-center justify-between text-neutral-500 text-[10px] pb-1 border-b border-white/[0.06]">
                                    <span>STAGING TELEMETRY STREAM</span>
                                    <span>AUTO-SYNC ACTIVE</span>
                                </div>
                                <div className="flex items-center gap-2 text-emerald-400">
                                    <span className="text-[#ff4d00] font-bold">[12:40:02.14]</span>
                                    <span className="text-neutral-200">POST /v1/webhooks/whatsapp-event</span>
                                    <span className="ml-auto text-emerald-400 font-bold">200 OK (88ms)</span>
                                </div>
                                <div className="flex items-center gap-2 text-neutral-400">
                                    <span className="text-[#ff4d00] font-bold">[12:40:01.89]</span>
                                    <span className="text-neutral-300">QUEUE: crm-lead-pipeline auto-merged</span>
                                    <span className="ml-auto text-orange-300 font-semibold">SUCCESS</span>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* ================= 7. BOTTOM STUDIO BANNER CTA (OBSIDIAN & NEON CONTRAST) ================= */}
            <section className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 font-sans select-none overflow-hidden">
                <div className="relative z-10 max-w-7xl xl:max-w-[1550px] mx-auto">

                    <div
                        className="relative rounded-[32px] sm:rounded-[40px] border-2 border-orange-400/50 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-[0_30px_90px_rgba(255,77,0,0.35)] flex flex-col lg:flex-row items-center justify-between gap-10 text-white"
                        style={{
                            background: 'radial-gradient(circle at 25% 20%, #1e0902 0%, #0d0401 65%, #050200 100%)',
                        }}
                    >
                        {/* 1. Subtle Dot Grid Overlay inside Banner */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 z-0 opacity-15"
                            style={{
                                backgroundImage: 'radial-gradient(#ff6b35 1px, transparent 1px)',
                                backgroundSize: '24px 24px',
                            }}
                        />

                        {/* 2. Top Specular Glass Reflection Edge */}
                        <div className="pointer-events-none absolute inset-x-12 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-orange-300/60 to-transparent" />

                        {/* 3. Volcanic Ambient Orange Flares */}
                        <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 bg-[#ff4d00]/25 rounded-full blur-3xl z-0" />
                        <div className="pointer-events-none absolute -top-24 right-1/4 w-72 h-72 bg-[#ea580c]/15 rounded-full blur-3xl z-0" />

                        {/* Content Column */}
                        <div className="space-y-5 max-w-xl text-center lg:text-left relative z-10">

                            {/* Headline */}
                            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.05]">
                                Ready to Automate <br />
                                <span className="text-[#ff4d00] drop-shadow-[0_0_25px_rgba(255,77,0,0.6)]">Your Operations?</span>
                            </h2>

                            {/* Description */}
                            <p className="font-body text-sm sm:text-base text-neutral-300 font-light leading-relaxed border-l-0 lg:border-l-2 lg:border-[#ff4d00]/60 lg:pl-4">
                                Turn your bottlenecked processes into automated growth engines. Connect directly with our lead architects to spec your solution.
                            </p>

                            {/* Action Button */}
                            <div className="pt-2 flex justify-center lg:justify-start">
                                <Link
                                    href="/contact"
                                    className="group relative inline-flex items-center justify-between gap-6 min-h-[58px] sm:min-h-[62px] px-8 sm:px-10 py-4 rounded-2xl bg-gradient-to-r from-[#ff4d00] via-[#ff5a14] to-[#ea580c] hover:from-[#ea580c] hover:to-[#c2410c] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_12px_32px_rgba(255,77,0,0.45)] hover:shadow-[0_16px_44px_rgba(255,77,0,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer overflow-hidden"
                                >
                                    {/* Shimmer sweep */}
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

                                    <span className="relative z-10 font-heading tracking-wide">
                                        Get Started Now
                                    </span>

                                    <div className="relative z-10 w-9 h-9 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:rotate-45 group-hover:scale-110 group-hover:bg-white group-hover:text-[#ff4d00] shrink-0">
                                        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* Right Brand Mark Showcase */}
                        <div className="relative z-10 flex items-center justify-center lg:pr-6">
                            {/* Glow halo behind logo */}
                            <div className="absolute w-48 sm:w-60 h-48 sm:h-60 rounded-full bg-[#ff4d00]/30 blur-3xl pointer-events-none animate-pulse" />

                            <div className="relative w-36 h-36 sm:w-48 sm:h-48 lg:w-56 lg:h-56 select-none transition-transform duration-500 hover:scale-105">
                                <Image
                                    src="/logo.png" // Apne logo image ka path lagayein (e.g. /logo.svg ya /images/logo.png)
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