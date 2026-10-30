'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    name: 'X (Twitter)',
    href: 'https://twitter.com',
    icon: (
      <svg className="h-3.5 w-3.5 fill-current xl:h-4 xl:w-4" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg className="h-3.5 w-3.5 fill-current xl:h-4 xl:w-4" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg className="h-3.5 w-3.5 fill-current xl:h-4 xl:w-4" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const footerServices = [
  { label: 'UI/UX Design', href: '#ui-ux' },
  { label: 'Web Development', href: '#web-development' },
  { label: 'App Development', href: '#app-development' },
  { label: 'Graphic Design', href: '#graphic-design' },
  { label: 'Figma Design', href: '#figma-design' },
  { label: 'AI Automation', href: '#ai-automation' },
];

export default function Footer() {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <section className="relative w-full pt-10 sm:pt-16 md:pt-20 xl:pt-28 font-sans bg-transparent">
      <footer className="relative w-full overflow-hidden rounded-t-[36px] sm:rounded-t-[50px] md:rounded-t-[72px] lg:rounded-t-[90px] xl:rounded-t-[110px] bg-black text-white shadow-2xl">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-50"
          >
            <source src="/videos/bg.mp4" type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black" />
        </div>

        {/* Content Container synchronized with Hero, Navbar, Services & About */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-12 pt-12 sm:pt-16 md:pt-24 xl:max-w-[1600px] xl:px-16 xl:pt-32 2xl:max-w-[1850px] 2xl:pt-36">
          
          {/* Top Brand Identity */}
          <div className="mb-10 sm:mb-14 md:mb-16 xl:mb-20">
            <div className="flex items-center gap-3">
              <span className="font-heading text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold tracking-tight text-white">
                zorzex<span className="text-brand">.</span>
              </span>
            </div>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base xl:text-lg text-neutral-400 font-normal">
              Systematic growth for ambitious businesses.
            </p>
          </div>

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 xl:gap-12 items-start mb-14 sm:mb-20 md:mb-24">
            
            {/* Left: Call to Action & Newsletter */}
            <div className="lg:col-span-5 flex flex-col justify-start">
              <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 sm:mb-8">
                Let’s Work <br />
                Together.
              </h2>

              <form onSubmit={handleSubmit} className="w-full max-w-md xl:max-w-lg">
                <div className="relative flex items-center rounded-full bg-white p-1 sm:p-1.5 xl:p-2 shadow-2xl">
                  <input
                    type="email"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    placeholder="EMAIL ADDRESS"
                    required
                    className="w-full rounded-full bg-transparent px-4 sm:px-5 xl:px-6 py-2 text-xs sm:text-sm xl:text-base font-semibold tracking-wider text-black placeholder-neutral-500 uppercase focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Submit Email"
                    className="flex h-9 w-9 sm:h-10 sm:w-10 xl:h-12 xl:w-12 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-transform duration-200 hover:scale-105 hover:bg-brand-hover shadow-md"
                  >
                    <ArrowRight className="h-4 w-4 xl:h-5 xl:w-5 stroke-[2.5]" />
                  </button>
                </div>
              </form>
            </div>

            {/* Right: Navigation Columns */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 xl:gap-12 text-sm xl:text-base">
              
              {/* Pages Column */}
              <div>
                <h3 className="font-medium text-white text-sm md:text-base xl:text-lg mb-3 sm:mb-4 xl:mb-6">
                  Pages
                </h3>
                <ul className="flex flex-col space-y-2 sm:space-y-2.5 xl:space-y-3.5 text-xs sm:text-sm xl:text-base text-neutral-400">
                  <li>
                    <Link href="#about" className="hover:text-white transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#services" className="hover:text-white transition-colors">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="#works" className="hover:text-white transition-colors">
                      Works
                    </Link>
                  </li>
                  <li>
                    <Link href="#pricing" className="hover:text-white transition-colors">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="#questions" className="hover:text-white transition-colors">
                      Questions
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services Column (Updated with Exact Services) */}
              <div>
                <h3 className="font-medium text-white text-sm md:text-base xl:text-lg mb-3 sm:mb-4 xl:mb-6">
                  Services
                </h3>
                <ul className="flex flex-col space-y-2 sm:space-y-2.5 xl:space-y-3.5 text-xs sm:text-sm xl:text-base text-neutral-400">
                  {footerServices.map((service) => (
                    <li key={service.label}>
                      <Link href={service.href} className="hover:text-white transition-colors">
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Column */}
              <div className="col-span-2 sm:col-span-1">
                <h3 className="font-medium text-white text-sm md:text-base xl:text-lg mb-3 sm:mb-4 xl:mb-6">
                  Contact
                </h3>
                <div className="flex flex-col space-y-2 sm:space-y-2.5 text-xs sm:text-sm xl:text-base text-neutral-400 mb-5 sm:mb-6 xl:mb-8">
                  <p>
                    Email:{' '}
                    <a href="mailto:hello@zorzex.com" className="text-neutral-300 hover:text-white transition-colors">
                      hello@zorzex.com
                    </a>
                  </p>
                  <p>
                    Phone:{' '}
                    <a href="tel:+1234567890" className="text-neutral-300 hover:text-white transition-colors">
                      +1 (234) 567-890
                    </a>
                  </p>
                </div>

                <div className="flex items-center gap-2 xl:gap-3">
                  {socialLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.name}
                      className="flex h-7 w-7 xl:h-9 xl:w-9 items-center justify-center rounded-md bg-white text-black transition-all duration-200 hover:scale-110 hover:bg-brand hover:text-white"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Independent Full-Width Zorzex Watermark - SVG Scaled (Never Cut Off) */}
        <div className="relative w-full pointer-events-none select-none overflow-hidden leading-none px-2 sm:px-4">
          <svg
            viewBox="0 0 1200 240"
            className="w-full h-auto text-white/[0.13]"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="50%"
              y="120%"
              textAnchor="middle"
              className="font-heading font-black tracking-tighter"
              style={{ fontSize: '290px' }}
            >
              Zorzex
            </text>
          </svg>
        </div>
      </footer>
    </section>
  );
}