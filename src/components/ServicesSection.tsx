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
    <section className="relative w-full bg-transparent text-neutral-900 py-16 sm:py-24 lg:py-32 xl:py-40 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28 overflow-hidden border-t border-orange-200/50 font-sans">
      
      {/* Warm Ambient Orange Atmospheric Glows (Bari Screen Scale) */}
      <div className="absolute top-1/3 -left-40 w-[450px] lg:w-[700px] xl:w-[950px] h-[450px] lg:h-[700px] xl:h-[950px] bg-gradient-to-tr from-[#ea580c]/18 via-[#f97316]/10 to-transparent blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 -right-36 w-[400px] lg:w-[650px] xl:w-[900px] h-[400px] lg:h-[650px] xl:h-[900px] bg-gradient-to-br from-[#ea580c]/16 via-[#fed7aa]/25 to-transparent blur-[170px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl xl:max-w-[1550px] 2xl:max-w-[1850px] mx-auto space-y-12 sm:space-y-16 lg:space-y-20 xl:space-y-24">

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-end justify-between border-b border-[#ea580c]/20 pb-8 sm:pb-12 xl:pb-16">
          <div className="lg:col-span-8 space-y-4 xl:space-y-6">
         
            
            {/* Heading with layout-matched warm orange tone */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light uppercase tracking-tight leading-[1.08]">
              <span className="text-neutral-500">Crafting digital</span> <br />
              <strong className="font-bold text-[#ea580c]">
                Capabilities.
              </strong>
            </h2>
          </div>

          <p className="lg:col-span-4 text-sm sm:text-base xl:text-lg 2xl:text-xl text-neutral-700 font-medium leading-relaxed border-l-2 border-[#ea580c] pl-4 xl:pl-6">
            Every project is engineered with modern architecture, strict performance standards, and a focus on fast sprint delivery.
          </p>
        </div>

        {/* Services Editorial List */}
        <div className="divide-y divide-[#ea580c]/15 border-b border-[#ea580c]/20">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group relative flex items-center justify-between py-5 sm:py-7 lg:py-9 xl:py-12 2xl:py-14 px-3 sm:px-6 xl:px-10 rounded-2xl xl:rounded-3xl transition-all duration-500 hover:border-[#ea580c]/60 hover:shadow-[0_20px_45px_-12px_rgba(234,88,12,0.28)] hover:-translate-y-1 cursor-pointer overflow-hidden border border-transparent"
            >
              {/* Full Visible Orange Gradient Spread on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#f97316]/18 via-[#ea580c]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Massive Warm Orange Corner Bulb */}
              <div className="absolute -top-16 -right-16 w-56 xl:w-72 h-56 xl:h-72 bg-gradient-to-br from-[#ea580c]/30 via-[#f97316]/20 to-transparent rounded-full blur-2xl xl:blur-3xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 pointer-events-none" />

              {/* Left Active Glow Indicator */}
              <div className="absolute left-0 top-3 bottom-3 w-1.5 xl:w-2 bg-[#ea580c] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 rounded-r-full shadow-[0_0_16px_#ea580c]" />

              {/* Left Column: Number + Title + Description */}
              <div className="relative z-10 flex items-center gap-3 sm:gap-6 lg:gap-8 xl:gap-12 min-w-0 pr-3">
                <span className="text-xs sm:text-sm xl:text-base 2xl:text-lg font-black tracking-widest text-[#ea580c] font-mono px-2.5 sm:px-3 py-1 xl:py-1.5 rounded-lg bg-orange-100/70 border border-orange-200/80 group-hover:bg-neutral-950 group-hover:text-[#f97316] group-hover:border-neutral-900 transition-all duration-300 shrink-0 shadow-xs">
                  {service.id}
                </span>

                <div className="space-y-0.5 xl:space-y-1.5 min-w-0">
                  <h3 className="text-lg sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold tracking-tight text-neutral-900 group-hover:text-[#ea580c] transition-colors truncate sm:whitespace-normal">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm xl:text-base 2xl:text-lg text-neutral-600 font-normal leading-relaxed max-w-xl xl:max-w-3xl hidden md:block group-hover:text-neutral-800 transition-colors">
                    {service.desc}
                  </p>
                </div>
              </div>

              {/* Right Column: Tags & Arrow (Always in one single row on mobile too) */}
              <div className="relative z-10 flex items-center justify-end gap-2 sm:gap-4 xl:gap-6 shrink-0">
                <div className="hidden lg:flex items-center gap-2 xl:gap-3">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 xl:px-4 py-1 xl:py-1.5 text-xs xl:text-sm font-semibold tracking-wide text-neutral-700 bg-white/80 border border-orange-200/80 rounded-full group-hover:bg-white group-hover:border-[#ea580c]/50 group-hover:text-[#ea580c] transition-all duration-300 shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow Pill */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 rounded-full bg-white border border-orange-200 text-[#ea580c] flex items-center justify-center shadow-xs transition-all duration-500 group-hover:bg-[#ea580c] group-hover:text-white group-hover:border-transparent group-hover:scale-110 group-hover:shadow-[0_8px_24px_rgba(234,88,12,0.4)] shrink-0">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 stroke-[2.5] transition-transform duration-500 group-hover:rotate-45" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}