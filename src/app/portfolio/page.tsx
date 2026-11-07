'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ArrowUpRight, Filter, ExternalLink } from 'lucide-react';

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
          <h1 className="font-heading text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tight text-white leading-[0.88] drop-shadow-[0_15px_35px_rgba(0,0,0,0.7)] select-none">
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

    </div>
  );
}