import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const services = [
  { id: '(01)', title: 'UI/UX Design', href: '#ui-ux' },
  { id: '(02)', title: 'Web Development', href: '#web-development' },
  { id: '(03)', title: 'App Development', href: '#app-development' },
  { id: '(04)', title: 'Graphic Design', href: '#graphic-design' },
  { id: '(05)', title: 'Figma Design', href: '#figma-design' },
  { id: '(06)', title: 'AI Automation', href: '#ai-automation' },
];

export default function ServicesSection() {
  return (
    <section className="relative w-full py-14 px-4 sm:px-6 md:px-12 md:py-20 lg:py-28 xl:px-16 xl:py-36 2xl:py-44 font-sans">
      {/* Container synchronized with Hero, Navbar, and AboutStats */}
      <div className="mx-auto w-full max-w-7xl xl:max-w-[1600px] 2xl:max-w-[1850px]">
        <div className="w-full rounded-3xl sm:rounded-[36px] xl:rounded-[44px] 2xl:rounded-[52px] bg-black p-6 sm:p-10 md:p-14 lg:p-20 xl:p-24 2xl:p-28 text-white shadow-2xl">
          {/* Section Header */}
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight text-white mb-8 sm:mb-12 xl:mb-16">
            Services
          </h2>

          <div className="w-full border-t border-neutral-800" />

          {/* Services Rows */}
          <div className="divide-y divide-neutral-800">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group flex items-center justify-between py-5 sm:py-7 md:py-8 xl:py-10 2xl:py-12 transition-all duration-300 hover:px-2"
              >
                <div className="flex items-center gap-4 sm:gap-12 md:gap-20 lg:gap-32 xl:gap-40">
                  <span className="text-xs sm:text-sm md:text-base xl:text-lg 2xl:text-xl font-light text-neutral-400">
                    {service.id}
                  </span>
                  <span className="text-base sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-medium tracking-wide text-neutral-200 transition-colors duration-200 group-hover:text-white">
                    {service.title}
                  </span>
                </div>

                <div className="flex h-9 w-9 sm:h-11 sm:w-11 md:h-12 md:w-12 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16 shrink-0 items-center justify-center rounded-full bg-neutral-800/80 text-neutral-400 transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:scale-110">
                  <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 xl:h-6 xl:w-6 2xl:h-7 2xl:w-7 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}