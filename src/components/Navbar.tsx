'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

const SERVICES = [
  {
    num: '01',
    title: 'AI Automation & Solutions',
    href: '/services/ai-automation',
    desc: 'Custom AI agents, LLM workflows & API integrations.',
  },
  {
    num: '02',
    title: 'Custom Software',
    href: '/services/custom-software',
    desc: 'Scalable SaaS platforms & tailored enterprise systems.',
  },
  {
    num: '03',
    title: 'Web Development',
    href: '/services/web-development',
    desc: 'Fast, SEO-ready web apps built with Next.js & TypeScript.',
  },
  {
    num: '04',
    title: 'Mobile App Development',
    href: '/services/mobile-app-development',
    desc: 'Smooth cross-platform iOS & Android apps in Flutter.',
  },
  {
    num: '05',
    title: 'Graphic & Brand Identity',
    href: '/services/graphic-brand-identity',
    desc: 'Distinctive logos, visual systems & brand guidelines.',
  },
  {
    num: '06',
    title: 'UI/UX Design',
    href: '/services/ui-ux-design',
    desc: 'Intuitive product interfaces, wireframes & design systems.',
  },
];

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header className="pointer-events-none absolute left-0 top-0 z-50 w-full px-5 py-5 md:px-10 lg:px-14 xl:px-20 xl:py-6 2xl:px-24 2xl:py-8">
      <div className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between xl:max-w-[1540px] 2xl:max-w-[1800px]">
        
        {/* Brand Logo - Bold & Architectural (Matches Hero Typography) */}
        <Link href="/" className="group z-50 flex items-center">
          <span className="font-heading text-3xl font-black tracking-[-0.04em] text-[#0F0F12] transition-opacity duration-200 sm:text-4xl xl:text-[42px] 2xl:text-[46px]">
            zorzex
            <span
              className={`inline-block transition-transform duration-300 group-hover:translate-x-0.5 ${
                isOpen ? 'text-[#FF8200]' : 'text-white'
              }`}
              style={{
                textShadow: isOpen ? 'none' : '0 2px 0 #0F0F12',
              }}
            >
              .
            </span>
          </span>
        </Link>

        {/* Desktop Navigation Pill - Clean Tactile Matte Surface */}
        <nav
          onMouseLeave={() => {
            setHoveredLink(null);
            setServicesOpen(false);
          }}
          className="relative hidden items-center gap-1 rounded-full border-2 border-[#0F0F12] bg-white p-1.5 shadow-[0_6px_0_#0F0F12] lg:flex xl:gap-1.5"
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.hasDropdown && pathname?.startsWith('/services'));
            const isHighlighted =
              hoveredLink === link.label || (!hoveredLink && isActive);

            return (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => {
                  setHoveredLink(link.label);
                  setServicesOpen(Boolean(link.hasDropdown));
                }}
              >
                <Link
                  href={link.href}
                  className={`relative z-10 flex items-center gap-1.5 rounded-full px-5 py-2 text-[14px] font-extrabold tracking-tight transition-colors duration-200 xl:px-6 xl:py-2.5 xl:text-[15px] ${
                    isHighlighted
                      ? 'bg-[#0F0F12] text-white'
                      : 'text-[#0F0F12] hover:text-[#0F0F12]'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.hasDropdown && (
                    <ChevronDown
                      className={`h-3.5 w-3.5 stroke-[2.75] transition-transform duration-200 ${
                        servicesOpen ? 'rotate-180 text-[#FF8200]' : ''
                      }`}
                    />
                  )}
                </Link>

                {/* Editorial Architectural Mega-Dropdown (No Generic Icon Boxes) */}
                {link.hasDropdown && (
                  <div
                    onMouseEnter={() => {
                      setHoveredLink('Services');
                      setServicesOpen(true);
                    }}
                    className={`absolute left-1/2 top-full w-[680px] -translate-x-1/2 pt-4 transition-all duration-200 ease-out xl:w-[760px] ${
                      servicesOpen
                        ? 'pointer-events-auto translate-y-0 opacity-100'
                        : 'pointer-events-none -translate-y-1.5 opacity-0'
                    }`}
                  >
                    <div className="grid grid-cols-12 overflow-hidden rounded-[24px] border-2 border-[#0F0F12] bg-white shadow-[0_12px_0_#0F0F12,0_25px_50px_rgba(15,15,18,0.25)]">
                      
                      {/* Left Dark Feature Anchor Column */}
                      <div className="col-span-4 flex flex-col justify-between bg-[#0F0F12] p-6 text-white">
                        <div>
                          <span className="inline-block rounded-full bg-[#FF8200] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest text-[#0F0F12]">
                            Capabilities
                          </span>
                          <h3 className="mt-4 text-xl font-black leading-snug tracking-tight">
                            Built for speed &amp; market dominance.
                          </h3>
                          <p className="mt-2.5 text-xs leading-relaxed text-zinc-400">
                            End-to-end engineering, AI systems, and conversion-focused design.
                          </p>
                        </div>

                        <Link
                          href="/services"
                          onClick={() => setServicesOpen(false)}
                          className="group/all mt-6 inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#FF8200] transition-colors hover:text-white"
                        >
                          <span>Explore All</span>
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/all:translate-x-0.5 group-hover/all:-translate-y-0.5" />
                        </Link>
                      </div>

                      {/* Right Numbered Editorial Index Grid */}
                      <div className="col-span-8 grid grid-cols-2 gap-x-2 gap-y-1 p-4">
                        {SERVICES.map((service) => (
                          <Link
                            key={service.title}
                            href={service.href}
                            onClick={() => setServicesOpen(false)}
                            className="group/item flex flex-col justify-between rounded-xl border border-transparent p-3 transition-all duration-150 hover:border-[#0F0F12]/15 hover:bg-[#FF8200]/[0.09]"
                          >
                            <div>
                              <div className="flex items-center justify-between">
                                <span className="font-mono text-[11px] font-bold text-[#FF8200]">
                                  {service.num}
                                </span>
                                <ArrowUpRight className="h-3.5 w-3.5 text-[#0F0F12] opacity-0 transition-all duration-150 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 group-hover/item:opacity-100" />
                              </div>

                              <p className="mt-1 text-[14px] font-extrabold leading-snug text-[#0F0F12] transition-colors group-hover/item:text-[#d96b00]">
                                {service.title}
                              </p>
                              <p className="mt-1 line-clamp-2 text-[11.5px] leading-relaxed text-zinc-600">
                                {service.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right CTA Button (Desktop) & Hamburger Toggle (Mobile) */}
        <div className="flex items-center gap-3 xl:gap-4">
          <Link
            href="#meeting"
            className="hidden items-center justify-center gap-2 rounded-full border-2 border-[#0F0F12] bg-[#0F0F12] px-6 py-2.5 text-[13px] font-extrabold uppercase tracking-[0.1em] text-white shadow-[0_5px_0_rgba(15,15,18,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[#0F0F12] sm:inline-flex xl:px-7 xl:py-3 xl:text-[14px]"
          >
            <span>Book a Meeting</span>
            <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
          </Link>

          {/* Mobile Hamburger / Close Icon Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border-2 border-[#0F0F12] bg-white text-[#0F0F12] shadow-[0_4px_0_#0F0F12] transition-transform duration-150 active:translate-y-0.5 lg:hidden"
          >
            <span
              className={`h-0.5 w-5 bg-[#0F0F12] transition-all duration-200 ${
                isOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-[#0F0F12] transition-all duration-200 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-[#0F0F12] transition-all duration-200 ${
                isOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`pointer-events-auto fixed inset-0 z-40 flex min-h-screen flex-col justify-between overflow-y-auto bg-white px-6 pb-10 pt-28 transition-all duration-300 ease-out lg:hidden ${
          isOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-full opacity-0'
        }`}
      >
        <nav className="flex w-full flex-col items-start">
          <span className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-[#FF8200]">
            // Menu
          </span>

          {NAV_LINKS.map((link) => {
            if (link.hasDropdown) {
              return (
                <div
                  key={link.label}
                  className="w-full border-b-2 border-[#0F0F12]/10"
                >
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                    className="flex w-full items-center justify-between py-4 text-left text-2xl font-black tracking-tight text-[#0F0F12]"
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={`h-5 w-5 stroke-[2.5] transition-transform duration-200 ${
                        mobileServicesOpen ? 'rotate-180 text-[#FF8200]' : ''
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-200 ease-out ${
                      mobileServicesOpen
                        ? 'grid-rows-[1fr] pb-4 opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-col divide-y divide-zinc-200 rounded-2xl border-2 border-[#0F0F12] bg-zinc-50 px-4">
                        {SERVICES.map((service) => (
                          <Link
                            key={service.title}
                            href={service.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between py-3 text-sm font-bold text-[#0F0F12] transition-colors hover:text-[#FF8200]"
                          >
                            <span className="flex items-center gap-3">
                              <span className="font-mono text-xs font-bold text-[#FF8200]">
                                {service.num}
                              </span>
                              <span>{service.title}</span>
                            </span>
                            <ArrowUpRight className="h-4 w-4 text-zinc-400" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="group flex w-full items-center justify-between border-b-2 border-[#0F0F12]/10 py-4 text-left text-2xl font-black tracking-tight text-[#0F0F12] transition-colors hover:text-[#FF8200]"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="h-5 w-5 text-zinc-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#FF8200]" />
              </Link>
            );
          })}
        </nav>

        <div className="w-full pt-8">
          <Link
            href="#meeting"
            onClick={() => setIsOpen(false)}
            className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#0F0F12] bg-[#FF8200] py-4 text-sm font-black uppercase tracking-widest text-[#0F0F12] shadow-[0_6px_0_#0F0F12] transition-transform active:translate-y-0.5"
          >
            <span>Book a Meeting</span>
            <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
          </Link>
        </div>
      </div>
    </header>
  );
}