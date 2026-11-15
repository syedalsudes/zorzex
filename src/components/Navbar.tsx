'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  ArrowUpRight,
  Bot,
  Code2,
  Globe,
  Smartphone,
  Palette,
  Layers,
} from 'lucide-react';

const SERVICES = [
  {
    icon: Bot,
    title: 'AI Automation & Solutions',
    href: '/services/ai-automation',
    desc: 'Custom AI agents, LLM workflows & API integrations.',
  },
  {
    icon: Code2,
    title: 'Custom Software Development',
    href: '/services/custom-software-development',
    desc: 'Scalable SaaS platforms & tailored enterprise systems.',
  },
  {
    icon: Globe,
    title: 'Web Development',
    href: '/services/web-development',
    desc: 'Fast, SEO-ready web apps built with Next.js & TypeScript.',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    href: '/services/app-development',
    desc: 'Smooth cross-platform iOS & Android apps in Flutter.',
  },
  {
    icon: Palette,
    title: 'Graphic & Brand Identity',
    href: '/services/graphic-brand-identity',
    desc: 'Distinctive logos, visual systems & brand guidelines.',
  },
  {
    icon: Layers,
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
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header className="pointer-events-none absolute left-0 top-0 z-50 w-full px-5 py-5 md:px-10 lg:px-14 xl:px-20 xl:py-7 2xl:px-24 2xl:py-9">
      <div className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between xl:max-w-[1540px] 2xl:max-w-[1800px]">

        {/* Brand Logo - Scales cleanly on large screens */}
        <Link href="/" className="group z-50 flex items-center">
          <span className="font-heading text-2xl font-black tracking-tight text-white transition-transform duration-200 sm:text-[26px] xl:text-3xl 2xl:text-[38px]">
            zorzex
            <span className="inline-block text-[#ff4d00] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:scale-110">
              .
            </span>
          </span>
        </Link>

        {/* Desktop Navigation Pill - Spacious & Airy */}
        <nav
          onMouseLeave={() => {
            setHoveredLink(null);
            setServicesOpen(false);
          }}
          className="relative hidden items-center gap-1 rounded-full border border-white/[0.12] bg-[#0a0a0a]/80 p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.5)] backdrop-blur-2xl lg:flex xl:gap-2 xl:p-2 2xl:gap-2.5 2xl:p-2.5"
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.hasDropdown && pathname?.startsWith('/services'));
            const isHovered = hoveredLink === link.label;

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
                  className={`relative z-10 flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-medium tracking-wide transition-colors duration-200 xl:px-6 xl:py-2.5 xl:text-[15px] 2xl:px-7 2xl:py-3 2xl:text-[17px] ${isHovered || isActive
                      ? 'text-white'
                      : 'text-neutral-300 hover:text-white'
                    }`}
                >
                  {/* Clean Frosted Glass Hover Bubble (No Muddy Orange) */}
                  <span
                    className={`pointer-events-none absolute inset-0 -z-10 rounded-full transition-all duration-300 ease-out ${isHovered
                        ? 'scale-100 border border-white/[0.16] bg-white/[0.11] opacity-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]'
                        : isActive
                          ? 'scale-100 border border-white/[0.08] bg-white/[0.06] opacity-100'
                          : 'scale-95 opacity-0'
                      }`}
                  />

                  <span>{link.label}</span>
                  {link.hasDropdown && (
                    <ChevronDown
                      className={`h-3.5 w-3.5 text-neutral-400 transition-transform duration-300 xl:h-4 xl:w-4 ${servicesOpen ? 'rotate-180 text-[#ff4d00]' : ''
                        }`}
                    />
                  )}
                </Link>

                {/* Refined 2-Column Services Dropdown */}
                {link.hasDropdown && (
                  <div
                    onMouseEnter={() => {
                      setHoveredLink('Services');
                      setServicesOpen(true);
                    }}
                    className={`absolute left-1/2 top-full w-[540px] -translate-x-1/2 pt-4 transition-all duration-300 ease-out xl:w-[620px] xl:pt-5 2xl:w-[700px] 2xl:pt-6 ${servicesOpen
                        ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
                        : 'pointer-events-none -translate-y-2 scale-[0.98] opacity-0'
                      }`}
                  >
                    <div className="overflow-hidden rounded-[26px] border border-white/[0.12] bg-[#0b0b0b]/95 p-2.5 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.9)] backdrop-blur-2xl xl:p-3 2xl:rounded-[30px] 2xl:p-4">
                      <div className="grid grid-cols-2 gap-1.5 xl:gap-2 2xl:gap-2.5">
                        {SERVICES.map((service) => {
                          const Icon = service.icon;
                          return (
                            <Link
                              key={service.title}
                              href={service.href}
                              onClick={() => setServicesOpen(false)}
                              className="group/item flex items-start gap-3.5 rounded-2xl p-3 transition-all duration-200 hover:bg-white/[0.06] xl:p-3.5 2xl:gap-4 2xl:p-4"
                            >
                              {/* Clean Minimal Icon */}
                              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-neutral-300 transition-all duration-200 group-hover/item:border-[#ff4d00]/40 group-hover/item:bg-[#ff4d00] group-hover/item:text-white xl:h-10 xl:w-10 2xl:h-11 2xl:w-11">
                                <Icon className="h-4 w-4 stroke-[1.9] xl:h-[18px] xl:w-[18px] 2xl:h-5 2xl:w-5" />
                              </div>

                              <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-between gap-1">
                                  <p className="truncate text-[13.5px] font-semibold text-neutral-100 transition-colors group-hover/item:text-white xl:text-[15px] 2xl:text-[16px]">
                                    {service.title}
                                  </p>
                                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 -translate-x-1 text-[#ff4d00] opacity-0 transition-all duration-200 group-hover/item:translate-x-0 group-hover/item:opacity-100 2xl:h-4 2xl:w-4" />
                                </div>
                                <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-neutral-400 group-hover/item:text-neutral-300 2xl:text-[13px]">
                                  {service.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right CTA Button (Desktop) & Hamburger Toggle (Mobile) */}
        <div className="flex items-center gap-3 xl:gap-5">
          {/* Desktop CTA - Scales properly with navbar height */}
          <Link
            href="#meeting"
            className="hidden rounded-full border border-[#ff4d00] bg-[#ff4d00] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(255,77,0,0.3)] transition-all duration-200 hover:border-white/25 hover:bg-white/[0.08] hover:shadow-none sm:inline-flex xl:px-7 xl:py-3 xl:text-[15px] 2xl:px-9 2xl:py-3.5 2xl:text-[17px]"
          >
            Book a Meeting
          </Link>

          {/* Hamburger / Close Icon Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/[0.07] text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15 focus:outline-none lg:hidden"
          >
            <span
              className={`h-0.5 w-5 bg-white transition-all duration-300 ease-in-out ${isOpen ? 'translate-y-2 rotate-45' : ''
                }`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'
                }`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition-all duration-300 ease-in-out ${isOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown / Fullscreen Overlay */}
      <div
        className={`pointer-events-auto fixed inset-0 z-40 flex min-h-screen flex-col justify-between overflow-y-auto bg-[#070707] px-6 pb-10 pt-28 shadow-2xl transition-all duration-300 ease-in-out lg:hidden ${isOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-full opacity-0'
          }`}
      >
        {/* Navigation Links */}
        <nav className="flex w-full flex-col items-start gap-1">
          <span className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-500">
            Navigation
          </span>

          {NAV_LINKS.map((link) => {
            if (link.hasDropdown) {
              return (
                <div
                  key={link.label}
                  className="w-full border-b border-white/[0.08]"
                >
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                    className="flex w-full items-center justify-between py-4 text-left text-xl font-bold tracking-tight text-neutral-200 transition-colors hover:text-[#ff4d00]"
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-neutral-400 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180 text-[#ff4d00]' : ''
                        }`}
                    />
                  </button>

                  {/* Mobile Services Accordion */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${mobileServicesOpen
                        ? 'grid-rows-[1fr] pb-4 opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-col gap-1 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-2">
                        {SERVICES.map((service) => {
                          const Icon = service.icon;
                          return (
                            <Link
                              key={service.title}
                              href={service.href}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-neutral-300 transition-colors hover:bg-white/[0.07] hover:text-white"
                            >
                              <span className="flex items-center gap-3">
                                <Icon className="h-4 w-4 text-[#ff4d00]" />
                                <span>{service.title}</span>
                              </span>
                              <ArrowUpRight className="h-3.5 w-3.5 text-neutral-500" />
                            </Link>
                          );
                        })}
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
                className="group flex w-full items-center justify-between border-b border-white/[0.08] py-4 text-left text-xl font-bold tracking-tight text-neutral-200 transition-colors duration-200 hover:text-[#ff4d00]"
              >
                <span>{link.label}</span>
                <span className="text-sm text-neutral-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#ff4d00]">
                  →
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom CTA for Mobile */}
        <div className="w-full pt-8">
          <Link
            href="#meeting"
            onClick={() => setIsOpen(false)}
            className="flex w-full items-center justify-center rounded-xl bg-[#ff4d00] py-3.5 text-base font-semibold text-white shadow-[0_0_20px_rgba(255,77,0,0.3)] transition-all active:scale-[0.98]"
          >
            Book a Meeting
          </Link>
        </div>
      </div>
    </header>
  );
}