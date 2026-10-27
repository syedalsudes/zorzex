import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const services = [
  { id: '(01)', title: 'Ui/Ux', href: '#ui-ux' },
  { id: '(02)', title: 'Digital Marketing', href: '#digital-marketing' },
  { id: '(03)', title: 'Social Media Handling', href: '#social-media' },
  { id: '(04)', title: 'Ai Automation', href: '#ai-automation' },
  { id: '(05)', title: 'Web Design', href: '#web-design' },
  { id: '(06)', title: 'Graphic Designing', href: '#graphic-designing' },
];

export default function ServicesSection() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-24 font-sans">
      <div className="mx-auto w-[92%] sm:w-[90%] max-w-7xl">
        <div className="w-full rounded-3xl sm:rounded-[36px] bg-black p-6 sm:p-10 md:p-14 lg:p-20 text-white shadow-2xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-8 sm:mb-12">
            Services
          </h2>

          <div className="w-full border-t border-neutral-800" />

          <div className="divide-y divide-neutral-800">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group flex items-center justify-between py-5 sm:py-7 md:py-8 transition-colors duration-200"
              >
                <div className="flex items-center gap-4 sm:gap-12 md:gap-20 lg:gap-32">
                  <span className="text-xs sm:text-sm md:text-base font-light text-neutral-400">
                    {service.id}
                  </span>
                  <span className="text-base sm:text-2xl md:text-3xl font-medium tracking-wide text-neutral-200 transition-colors duration-200 group-hover:text-white">
                    {service.title}
                  </span>
                </div>

                <div className="flex h-9 w-9 sm:h-11 sm:w-11 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-full bg-neutral-800/80 text-neutral-400 transition-all duration-200 group-hover:bg-brand group-hover:text-white group-hover:scale-105">
                  <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}