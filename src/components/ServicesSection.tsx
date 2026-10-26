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
    <section className="relative w-full py-16 lg:py-24">
      {/* 90% Width Container (5% left aur 5% right margin) */}
      <div className="mx-auto w-[90%]">
        {/* Full Wide Dark Card */}
        <div className="w-full rounded-[36px] bg-black p-8 sm:p-12 md:p-16 lg:p-20 text-white shadow-2xl">
          {/* Section Heading */}
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-10 sm:mb-14">
            Services
          </h2>

          {/* Top Divider */}
          <div className="w-full border-t border-neutral-700/80" />

          {/* Services Rows */}
          <div className="divide-y divide-neutral-700/80">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group flex items-center justify-between py-7 sm:py-8 transition-colors duration-200"
              >
                {/* Left Side: Number + Title */}
                <div className="flex items-center gap-10 sm:gap-20 md:gap-32">
                  <span className="text-sm sm:text-base font-light text-neutral-400">
                    {service.id}
                  </span>
                  <span className="text-lg sm:text-2xl md:text-3xl font-medium tracking-wide text-neutral-200 transition-colors duration-200 group-hover:text-white">
                    {service.title}
                  </span>
                </div>

                {/* Right Side: Circular Arrow Button */}
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-neutral-800/80 text-neutral-400 transition-all duration-200 group-hover:bg-[#f54e11] group-hover:text-white group-hover:scale-105">
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}