import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const services = [
  { 
    id: '01', 
    title: 'UI/UX Design', 
    href: '#ui-ux',
    tags: ['Design Systems', 'Wireframing', 'User Flows'],
    desc: 'High-converting design patterns built for seamless and intuitive user experiences.'
  },
  { 
    id: '02', 
    title: 'Web Development', 
    href: '#web-development',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    desc: 'Lightning-fast, SEO-optimized web applications engineered for scalability.'
  },
  { 
    id: '03', 
    title: 'App Development', 
    href: '#app-development',
    tags: ['Flutter', 'iOS & Android', 'Cross-Platform'],
    desc: 'Native-feel mobile applications with fluid interactions and rock-solid architecture.'
  },
  { 
    id: '04', 
    title: 'Graphic & Brand Identity', 
    href: '#graphic-design',
    tags: ['Visual Identity', 'Logos', 'Brand Guidelines'],
    desc: 'Distinctive brand identities and systems designed to leave a memorable impression.'
  },
  { 
    id: '05', 
    title: 'Interactive Prototypes', 
    href: '#prototyping',
    tags: ['Figma Prototypes', 'Micro-interactions', 'Demos'],
    desc: 'High-fidelity clickable product previews to validate flows before writing code.'
  },
  { 
    id: '06', 
    title: 'AI Automation & Solutions', 
    href: '#ai-automation',
    tags: ['Custom Workflows', 'API Integrations', 'AI Agents'],
    desc: 'Smart operational automations and modern model integrations to scale workflows.'
  },
];

export default function ServicesSection() {
  return (
    <section className="relative w-full bg-white text-neutral-900 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 overflow-hidden border-t border-neutral-100 font-sans">
      {/* Background Soft Orange Ambient Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[500px] lg:w-[650px] h-[350px] sm:h-[500px] lg:h-[650px] bg-gradient-to-b from-[#ff4d00]/10 via-[#ff4d00]/5 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end justify-between border-b border-neutral-200/80 pb-8 sm:pb-10">
          <div className="lg:col-span-8 space-y-3 sm:space-y-4">
            {/* Tech Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ff4d00]/[0.08] border border-[#ff4d00]/25 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff4d00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff4d00]"></span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#ff4d00]">
                Capabilities & Scope
              </span>
            </div>

            {/* Controlled Balanced Heading Size */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light uppercase tracking-wider leading-[1.15]">
              <span className="text-neutral-400">Crafting digital</span> <br />
              <strong className="font-semibold text-neutral-950">
                Capabilities<span className="text-[#ff4d00]">.</span>
              </strong>
            </h2>
          </div>

          <p className="lg:col-span-4 text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
            Every project is engineered with modern architecture, strict performance standards, and a focus on fast sprint delivery.
          </p>
        </div>

        {/* Services Editorial List */}
        <div className="divide-y divide-neutral-200/80 border-b border-neutral-200/80">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group relative flex flex-col md:flex-row md:items-center justify-between py-6 sm:py-8 lg:py-9 px-3 sm:px-4 rounded-2xl transition-all duration-300 hover:bg-[#fff9f6]"
            >
              {/* Animated Orange Left Border Indicator on Hover */}
              <div className="absolute left-0 top-3 bottom-3 w-1 bg-[#ff4d00] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 rounded-full" />

              {/* Left Column: Number + Title + Description */}
              <div className="flex items-start md:items-center gap-4 sm:gap-8 lg:gap-12">
                {/* Permanent Orange Monospace ID */}
                <span className="text-xs sm:text-sm font-bold tracking-widest text-[#ff4d00] font-mono shrink-0 pt-1 md:pt-0">
                  {service.id}
                </span>

                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-light tracking-tight text-neutral-900 group-hover:text-neutral-950 group-hover:font-normal transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-500 font-normal leading-relaxed max-w-md hidden sm:block">
                    {service.desc}
                  </p>
                </div>
              </div>

              {/* Right Column: Tags & Interactive Arrow Button */}
              <div className="mt-4 md:mt-0 flex items-center justify-between md:justify-end gap-4 lg:gap-8">
                {/* Micro Tech Tags with Permanent Orange Tint */}
                <div className="hidden lg:flex items-center gap-2">
                  {service.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 text-[11px] font-medium tracking-wide text-neutral-600 bg-white border border-[#ff4d00]/20 rounded-full shadow-xs group-hover:border-[#ff4d00]/40 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow Icon Button with Smooth Orange Glow Hover */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full border border-[#ff4d00]/25 bg-white text-[#ff4d00] flex items-center justify-center shadow-xs transition-all duration-300 group-hover:bg-[#ff4d00] group-hover:border-[#ff4d00] group-hover:text-white group-hover:scale-105 group-hover:shadow-[0_4px_14px_rgba(255,77,0,0.3)] shrink-0">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}