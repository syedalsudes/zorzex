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
    <section className="relative w-full bg-transparent text-neutral-900 py-16 sm:py-24 lg:py-32 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28 overflow-hidden font-sans">
      
      {/* Heavy Section Ambient Glows */}
      <div className="absolute top-1/4 -left-40 w-[550px] lg:w-[850px] h-[550px] lg:h-[850px] bg-gradient-to-tr from-[#ff4d00]/25 via-[#ff4d00]/10 to-transparent blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute -bottom-32 -right-32 w-[500px] lg:w-[750px] h-[500px] lg:h-[750px] bg-gradient-to-br from-[#ff4d00]/20 via-[#ff4d00]/8 to-transparent blur-[180px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl xl:max-w-[1550px] 2xl:max-w-[1850px] mx-auto space-y-12 sm:space-y-16 lg:space-y-20">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between border-b border-[#ff4d00]/20 pb-8 sm:pb-12">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-wider leading-[1.15]">
              <span className="text-neutral-500">Why fast teams</span> <br />
              <strong className="font-semibold text-neutral-950">
                Choose <span className="text-[#ff4d00]">Zorzex.</span>
              </strong>
            </h2>
          </div>

          <p className="lg:col-span-4 text-sm sm:text-base text-neutral-700 font-medium leading-relaxed border-l-2 border-[#ff4d00] pl-4">
            We replace slow legacy agency models with direct engineering access, rapid deployment cycles, and transparent quality benchmarks.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white/80 backdrop-blur-md border border-orange-200/70 rounded-[32px] p-7 sm:p-9 shadow-sm hover:border-[#ff4d00] hover:shadow-[0_22px_50px_-10px_rgba(255,77,0,0.35)] hover:-translate-y-2.5 transition-all duration-500 flex flex-col justify-between cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#f97316]/20 via-[#ea580c]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* 2. Top-Right Radiant Orange Bulb */}
                <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br from-[#ea580c]/35 via-[#f97316]/25 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 pointer-events-none" />

                {/* 3. Bottom Accent Warm Glow */}
                <div className="absolute -bottom-16 -left-16 w-52 h-52 bg-[#fed7aa]/70 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

                {/* Top Border Warm Orange Shimmer */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ea580c] to-transparent opacity-30 group-hover:opacity-100 group-hover:h-[3px] transition-all duration-500" />
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    {/* Icon Box: White se Black shift + 360 Spin + Scale */}
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-white border border-orange-200/80 flex items-center justify-center text-[#ff4d00] shadow-[0_4px_14px_rgba(255,77,0,0.12)] transition-all duration-700 ease-out group-hover:bg-neutral-950 group-hover:text-white group-hover:border-neutral-900 group-hover:scale-110 group-hover:shadow-[0_10px_25px_rgba(0,0,0,0.35)]">
                      <Icon className="w-6 h-6 transition-all duration-700 ease-in-out group-hover:rotate-[360deg] group-hover:scale-110 group-hover:text-[#ff4d00]" />
                    </div>

                     <span className="text-[10px] xl:text-[11px] font-bold tracking-widest uppercase text-[#ff4d00] bg-[#ff4d00]/[0.08] border border-[#ff4d00]/20 px-3 py-1 rounded-full group-hover:bg-[#ff4d00] group-hover:text-white transition-colors duration-300">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#ff4d00] mb-3 group-hover:text-neutral-950 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed group-hover:text-neutral-800 transition-colors">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Bar: Black accent number badge + Interactive Arrow */}
                <div className="relative z-10 mt-8 pt-5 border-t border-[#ff4d00]/15 group-hover:border-[#ff4d00]/35 flex items-center justify-between transition-colors">
                  <span className="font-mono text-sm font-bold text-neutral-400 group-hover:text-neutral-950 transition-colors flex items-center gap-1.5">
                    0{idx + 1}
                  </span>
                  
                  <div className="flex items-center gap-2 text-xs font-semibold text-neutral-700 group-hover:text-neutral-950 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-white border border-orange-200/80 flex items-center justify-center text-neutral-700 shadow-xs transition-all duration-500 group-hover:bg-[#ff4d00] group-hover:text-white group-hover:scale-110">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:rotate-45" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}