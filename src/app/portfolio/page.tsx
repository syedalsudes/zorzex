'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ArrowUpRight, Sparkles, Filter, ExternalLink } from 'lucide-react';

type ProjectCategory = 'all' | 'web' | 'app' | 'graphic' | 'ai';

interface Project {
  id: string;
  title: string;
  client: string;
  category: ProjectCategory;
  categoryLabel: string;
  year: string;
  metric: string;
  desc: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: '01',
    title: 'Autonomous Multi-Channel AI Assistant',
    client: 'Nexbit Core',
    category: 'ai',
    categoryLabel: 'AI Automation',
    year: '2026',
    metric: '82% Ticket Automation',
    desc: 'Self-hosted agentic pipeline with dynamic tool calling, knowledge-base vector retrieval, and zero-latency WebSocket streaming.',
    tags: ['Next.js', 'LLM Agents', 'FastAPI', 'Vector DB'],
    link: '#',
  },
  {
    id: '02',
    title: 'High-Frequency Logistics & Bidding Platform',
    client: 'TransPulse Global',
    category: 'web',
    categoryLabel: 'Web Development',
    year: '2025',
    metric: '<140ms Global P95',
    desc: 'Enterprise dispatch terminal featuring real-time spatial fleet mapping, automated rate negotiations, and strict SSR caching.',
    tags: ['Next.js App Router', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    link: '#',
  },
  {
    id: '03',
    title: 'Cross-Platform Real-Time Field App',
    client: 'OmniGuard Mobile',
    category: 'app',
    categoryLabel: 'App Development',
    year: '2026',
    metric: '60fps Native UI',
    desc: 'Mission-critical mobile application with local SQLite caching, offline sync engine, and low-latency hardware camera integrations.',
    tags: ['Flutter', 'Dart', 'WebRTC', 'Go Backend'],
    link: '#',
  },
  {
    id: '04',
    title: 'Digitalix Brand Identity & Kinetic System',
    client: 'Digitalix Creative',
    category: 'graphic',
    categoryLabel: 'Graphic Design',
    year: '2025',
    metric: 'Global Identity Kit',
    desc: 'Comprehensive visual architecture: responsive SVG logotypes, spatial design tokens, 3D motion guidelines, and print collateral.',
    tags: ['Brand Guidelines', 'Typography', 'Figma Tokens', 'Vector Art'],
    link: '#',
  },
  {
    id: '05',
    title: 'Distributed Workflow Orchestration Engine',
    client: 'SyncFlow Systems',
    category: 'ai',
    categoryLabel: 'AI Automation',
    year: '2026',
    metric: '14.5x Task Velocity',
    desc: 'Event-driven internal workflow orchestration replacing manual CRM data entry with intelligent document parsing and webhooks.',
    tags: ['AI Pipelines', 'Node.js', 'Redis', 'REST APIs'],
    link: '#',
  },
  {
    id: '06',
    title: 'Luxury Real-Estate Interactive Showcase',
    client: 'Arabian Prime',
    category: 'web',
    categoryLabel: 'Web Development',
    year: '2025',
    metric: '99/100 Core Web Vitals',
    desc: 'Kinetic architectural showcase featuring dynamic 3D unit walkthroughs, headless CMS synchronization, and automated lead capture.',
    tags: ['Next.js', 'Three.js', 'Tailwind CSS', 'Sanity'],
    link: '#',
  },
];

const filterCategories = [
  { id: 'all', label: 'All Works' },
  { id: 'web', label: 'Web Development' },
  { id: 'app', label: 'App Development' },
  { id: 'graphic', label: 'Graphic Design' },
  { id: 'ai', label: 'AI Automation' },
] as const;

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((item) => item.category === activeCategory);

  return (
    <div className="w-full">

      {/* ================= HERO SECTION (MATCHES SERVICES & ABOUT EXACTLY) ================= */}
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

        {/* 2. Primary Massive Neon Orange Top Flare */}
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

        {/* ================= CONTENT ================= */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-5">
          
          {/* Main Centered Heading */}
          <h1 className="font-heading text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black uppercase tracking-tight text-white leading-[0.88] drop-shadow-[0_15px_35px_rgba(0,0,0,0.7)] select-none">
            Our Work<span className="text-[#ff4d00] drop-shadow-[0_0_25px_#ff4d00]">.</span>
          </h1>

          {/* Breadcrumb Navigation: Home > Our Work */}
          <nav aria-label="Breadcrumb" className="inline-flex items-center justify-center gap-2 pt-2 font-body text-xs sm:text-sm font-medium">
            <Link 
              href="/" 
              className="text-orange-200/80 hover:text-white transition-colors"
            >
              Home
            </Link>
            
            <ChevronRight className="w-3.5 h-3.5 text-orange-400/70 stroke-[2.5]" />
            
            <span className="text-white font-semibold tracking-wide bg-white/10 px-3 py-0.5 rounded-full border border-white/15 backdrop-blur-sm">
              Our Work
            </span>
          </nav>

        </div>
      </section>

      {/* ================= PORTFOLIO SHOWCASE SECTION ================= */}
      <section className="relative w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 overflow-hidden font-sans">
        <div className="relative z-10 max-w-7xl xl:max-w-[1550px] mx-auto space-y-12 sm:space-y-16">

          {/* Interactive Filter Pill Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#ea580c]/20 pb-8">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#ff4d00]">
                Case Studies
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-neutral-900">
                Selected Productions ({filteredProjects.length})
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {filterCategories.map((tab) => {
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id as ProjectCategory)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-[#ff4d00] text-white shadow-[0_4px_16px_rgba(255,77,0,0.35)] scale-105'
                        : 'bg-white/80 border border-neutral-200 text-neutral-700 hover:border-orange-300 hover:text-[#ff4d00]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project Cards (Modern 2-Column Tech Studio Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative flex flex-col justify-between rounded-3xl bg-white/75 border border-orange-200/70 p-7 sm:p-10 hover:border-[#ff4d00]/60 hover:shadow-[0_24px_55px_-12px_rgba(255,77,0,0.22)] hover:-translate-y-1 transition-all duration-300 overflow-hidden backdrop-blur-xs"
              >
                {/* Subtle Hover Gradient Spread */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#ff4d00]/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  {/* Card Top: ID + Category Tag + External Icon */}
                  <div className="flex items-center justify-between pb-6 border-b border-orange-100/80 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-orange-100/70 text-[#ff4d00] border border-orange-200">
                        {project.id}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                        {project.client} • {project.year}
                      </span>
                    </div>

                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium tracking-wide bg-neutral-100 border border-neutral-200 text-neutral-700 group-hover:bg-[#ff4d00] group-hover:text-white group-hover:border-transparent transition-colors">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Highlight Metric Badge */}
                  <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-md bg-orange-50 border border-orange-200/60 text-[#ea580c] font-mono text-xs font-semibold">
                    <Sparkles className="w-3 h-3 text-[#ff4d00]" />
                    <span>{project.metric}</span>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 group-hover:text-[#ff4d00] transition-colors mb-3">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed font-normal mb-8">
                    {project.desc}
                  </p>
                </div>

                {/* Card Bottom: Tech Stack Tags + View Action */}
                <div className="relative z-10 pt-6 border-t border-orange-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 text-[11px] font-mono text-neutral-600 bg-white border border-neutral-200 rounded-md group-hover:border-orange-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-900 group-hover:text-[#ff4d00] transition-colors"
                  >
                    <span>View Architecture</span>
                    <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center group-hover:bg-[#ff4d00] group-hover:text-white group-hover:border-transparent transition-all">
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}