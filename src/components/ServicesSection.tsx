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
    <section className="relative w-full bg-[#faf8f6] text-neutral-900 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 overflow-hidden border-t border-orange-200/60 font-sans">
      {/* Dynamic Ambient Orange Glows */}
      <div className="absolute -top-24 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#ff5500]/20 via-[#ff7700]/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-[-10%] w-[450px] h-[450px] bg-gradient-to-tr from-[#ff4d00]/15 via-[#ff9900]/10 to-transparent blur-[130px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-12 sm:space-y-16">

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end justify-between border-b border-orange-200/80 pb-8 sm:pb-10">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-neutral-100/90 border border-neutral-200">
              <span className="w-1 h-2.5 rounded-[1px] bg-[#ff4d00]" />
              <span className="text-[10.5px] font-mono font-semibold tracking-[0.16em] uppercase text-neutral-700">
                Capabilities &amp; Scope
              </span>
            </div>
            {/* Heading with Orange Gradient Text */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-tight leading-[1.1]">
              <span className="text-neutral-500">Crafting digital</span> <br />
              <strong className="font-extrabold bg-gradient-to-r from-[#ff4d00] via-[#ff6a00] to-[#e03a00] bg-clip-text text-transparent">
                Capabilities.
              </strong>
            </h2>
          </div>

          <p className="lg:col-span-4 text-sm sm:text-base text-neutral-700 font-medium leading-relaxed border-l-2 border-[#ff4d00] pl-4">
            Every project is engineered with modern architecture, strict performance standards, and a focus on fast sprint delivery.
          </p>
        </div>

        {/* Services Editorial List */}
        <div className="divide-y divide-orange-100/90 border-b border-orange-200/80">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group relative flex flex-col md:flex-row md:items-center justify-between py-6 sm:py-8 lg:py-10 px-4 sm:px-6 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-100/70 hover:via-orange-50/50 hover:to-transparent hover:shadow-sm"
            >
              {/* Left Active Glow Indicator */}
              <div className="absolute left-0 top-3 bottom-3 w-1.5 bg-[#ff4d00] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 rounded-r-full shadow-[0_0_12px_#ff4d00]" />

              {/* Left Column: Number + Title + Description */}
              <div className="flex items-start md:items-center gap-4 sm:gap-7 lg:gap-10">
                {/* Monospace ID Badge */}
                <span className="text-xs sm:text-sm font-black tracking-widest text-[#ff4d00] font-mono px-2.5 py-1 rounded-md bg-[#ff4d00]/10 border border-[#ff4d00]/20 group-hover:bg-[#ff4d00] group-hover:text-white transition-colors duration-300 shrink-0">
                  {service.id}
                </span>

                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-normal tracking-tight text-neutral-900 group-hover:text-[#ff4d00] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed max-w-lg hidden sm:block">
                    {service.desc}
                  </p>
                </div>
              </div>

              {/* Right Column: Tags & Arrow */}
              <div className="mt-4 md:mt-0 flex items-center justify-between md:justify-end gap-3 lg:gap-6">
                {/* Micro Tags */}
                <div className="hidden lg:flex items-center gap-2">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-semibold tracking-wide text-[#b83800] bg-orange-100/80 border border-orange-300/60 rounded-full group-hover:bg-[#ff4d00]/15 group-hover:border-[#ff4d00]/40 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow Button */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#ff4d00] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(255,77,0,0.35)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#e03d00] group-hover:shadow-[0_6px_20px_rgba(255,77,0,0.5)] shrink-0">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}