import React from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Users, 
  GitBranch, 
  Clock, 
  Headphones,
  ArrowUpRight
} from 'lucide-react';

const guarantees = [
  {
    icon: Users,
    tag: 'Zero Friction',
    title: 'Direct Developer Access',
    desc: 'No account managers or non-technical intermediaries. Communicate directly with the engineers and designers building your product.',
  },
  {
    icon: Zap,
    tag: 'Performance First',
    title: 'Lighthouse 98+ Guarantee',
    desc: 'Every web application is deployed lightning-fast, SEO-optimized, and free of main-thread blocking by default.',
  },
  {
    icon: GitBranch,
    tag: '100% Ownership',
    title: 'Clean Code & Full IP Handover',
    desc: 'Complete code ownership from day one. You receive clean GitHub repositories, system documentation, and full cloud environment control.',
  },
  {
    icon: Clock,
    tag: 'Sprint Delivery',
    title: 'Strict Timeline Commitments',
    desc: 'We replace bloated multi-month agency cycles with focused 2-week active sprints to get your product to market faster.',
  },
  {
    icon: ShieldCheck,
    tag: 'Modern Architecture',
    title: 'No Bloated Templates',
    desc: 'Zero generic templates or outdated stacks. Every platform is custom-engineered using Next.js, Flutter, TypeScript, and modern systems.',
  },
  {
    icon: Headphones,
    tag: 'Post-Launch',
    title: '30-Day Sprint Warranty',
    desc: 'We stay on board post-deployment. Includes complimentary real-time monitoring, edge bug fixes, and continuous technical support.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative w-full bg-white text-neutral-900 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 overflow-hidden border-t border-neutral-100 font-sans">
      {/* Dynamic Background Orange Rays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[650px] lg:w-[850px] h-[450px] sm:h-[650px] lg:h-[850px] bg-gradient-to-tr from-[#ff4d00]/20 via-[#ff4d00]/10 to-transparent blur-[160px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl xl:max-w-[1550px] 2xl:max-w-[1850px] mx-auto space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end justify-between border-b-2 border-neutral-100 pb-8 sm:pb-10">
          <div className="lg:col-span-8 space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-neutral-100/90 border border-neutral-200">
  <span className="w-1 h-2.5 rounded-[1px] bg-[#ff4d00]" />
  <span className="text-[10.5px] font-mono font-semibold tracking-[0.16em] uppercase text-neutral-700">
    The Zorzex Standard
  </span>
</div>

            {/* Balanced Controlled Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light uppercase tracking-wider leading-[1.15]">
              <span className="text-neutral-400">Why fast teams</span> <br />
              <strong className="font-semibold text-neutral-950">
                Choose Zorzex<span className="text-[#ff4d00]">.</span>
              </strong>
            </h2>
          </div>

          <p className="lg:col-span-4 text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
            We replace slow legacy agency models with direct engineering access, rapid deployment cycles, and transparent quality benchmarks.
          </p>
        </div>

        {/* 6 Grid Pillars - Heavy Orange Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#fffaf8] border-2 border-[#ff4d00]/25 rounded-[30px] p-7 sm:p-9 shadow-[0_4px_20px_rgba(255,77,0,0.06)] hover:bg-[#ff4d00] hover:border-[#ff4d00] hover:shadow-[0_20px_40px_rgba(255,77,0,0.35)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden"
              >
                {/* Subtle Top Inner Highlight */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff4d00] to-transparent opacity-50 group-hover:opacity-0 transition-opacity" />

                {/* Top: Icon + Tag */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    {/* Bold Solid Orange Icon Badge */}
                    <div className="w-13 h-13 rounded-2xl bg-[#ff4d00] border-2 border-white/80 flex items-center justify-center text-white shadow-[0_4px_16px_rgba(255,77,0,0.3)] group-hover:bg-white group-hover:text-[#ff4d00] group-hover:border-transparent transition-all duration-300">
                      <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    {/* Tag Pill with Solid Contrast */}
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#ff4d00] bg-white border border-[#ff4d00]/30 px-3 py-1 rounded-full shadow-xs group-hover:bg-white/20 group-hover:text-white group-hover:border-white/40 transition-colors">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900 mb-3 group-hover:text-white transition-colors duration-200">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed group-hover:text-white/90 transition-colors duration-200">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Line Accent & Interactive Indicator */}
                <div className="relative z-10 mt-8 pt-5 border-t border-[#ff4d00]/20 group-hover:border-white/25 flex items-center justify-between text-xs transition-colors">
                  <span className="font-mono text-sm font-bold text-[#ff4d00] group-hover:text-white transition-colors">
                    0{idx + 1}
                  </span>
                  
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#ff4d00] group-hover:text-white transition-colors">
                    <span>Guaranteed</span>
                    <div className="w-7 h-7 rounded-full bg-[#ff4d00]/10 flex items-center justify-center text-[#ff4d00] group-hover:bg-white group-hover:text-[#ff4d00] transition-all">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Assurance Bar */}
        <div className="bg-[#fff9f6] border-2 border-[#ff4d00]/30 rounded-[24px] p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff4d00] opacity-80"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ff4d00]"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold text-neutral-800">
              Risk-free sprint execution: Continuous staging environment preview links and weekly live checkpoints.
            </span>
          </div>

          <span className="text-[10px] font-bold tracking-widest uppercase text-white bg-[#ff4d00] px-4 py-2 rounded-full shadow-[0_2px_10px_rgba(255,77,0,0.3)] shrink-0">
            Engineering Benchmarks
          </span>
        </div>

      </div>
    </section>
  );
}