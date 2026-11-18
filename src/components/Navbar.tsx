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
    <header className="pointer-events-none absolute left-0 top-0 z-50 w-full px-5 py-5 md:px-10 lg:px-14 xl:px-20 xl:py-6 2xl:px-24 2xl:py-8">
      {/* Water-Glass Bubble Liquid Morph & Light Shimmer Keyframes */}
      <style jsx global>{`
        @keyframes waterBubbleMorph {
          0%, 100% {
            border-radius: 9999px;
            transform: scale(1) translateY(0px);
          }
          33% {
            border-radius: 46% 54% 52% 48% / 56% 46% 54% 44%;
            transform: scale(1.03, 0.98) translateY(-0.5px);
          }
          66% {
            border-radius: 54% 46% 48% 52% / 46% 55% 45% 54%;
            transform: scale(0.985, 1.025) translateY(0.5px);
          }
        }
        .animate-water-bubble {
          animation: waterBubbleMorph 3.2s ease-in-out infinite;
        }
      `}</style>

      <div className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between xl:max-w-[1540px] 2xl:max-w-[1800px]">
        {/* Brand Logo - Larger Size + High Contrast */}
        <Link href="/" className="group z-50 flex items-center">
          <span
            className="font-heading text-3xl font-black tracking-tight text-white transition-transform duration-200 sm:text-4xl xl:text-[42px] 2xl:text-[48px]"
            style={{
              textShadow: isOpen
                ? 'none'
                : '0 2px 0 rgba(15,15,18,0.85), 0 6px 20px rgba(15,15,18,0.22)',
            }}
          >
            <span className={isOpen ? 'text-[#0F0F12]' : 'text-white'}>
              zorzex
            </span>
            <span
              className={`inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:scale-110 ${
                isOpen ? 'text-[#FF8200]' : 'text-[#0F0F12]'
              }`}
              style={{ textShadow: 'none' }}
            >
              .
            </span>
          </span>
        </Link>

        {/* Desktop Navigation Pill - Pure Crisp White Glass */}
        <nav
          onMouseLeave={() => {
            setHoveredLink(null);
            setServicesOpen(false);
          }}
          className="relative hidden items-center gap-1 rounded-full border border-[#0F0F12]/10 bg-white/95 p-1.5 shadow-[0_12px_36px_rgba(15,15,18,0.14)] backdrop-blur-xl lg:flex xl:gap-1.5 xl:p-2 2xl:gap-2 2xl:p-2"
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.hasDropdown && pathname?.startsWith('/services'));
            const isHovered = hoveredLink === link.label;
            const showBubble = isHovered || isActive;

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
                  className={`relative z-10 flex items-center gap-1.5 rounded-full px-5 py-2 text-[14px] font-bold tracking-wide transition-colors duration-200 xl:px-6 xl:py-2.5 xl:text-[15px] 2xl:px-7 2xl:py-2.5 2xl:text-[16px] ${
                    isHovered
                      ? 'text-[#FF6A00]'
                      : isActive
                      ? 'text-[#0F0F12]'
                      : 'text-[#0F0F12]/85 hover:text-[#FF6A00]'
                  }`}
                >
                  {/* Animated Water / Glass Bubble with Light Specular Reflection */}
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden transition-all duration-300 ease-out ${
                      showBubble
                        ? 'animate-water-bubble scale-100 opacity-100'
                        : 'scale-75 rounded-full opacity-0'
                    }`}
                    style={{
                      background: isHovered
                        ? 'radial-gradient(120% 100% at 30% 15%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 244, 232, 0.65) 45%, rgba(255, 130, 0, 0.16) 100%)'
                        : 'radial-gradient(120% 100% at 30% 15%, rgba(255, 255, 255, 0.9) 0%, rgba(244, 244, 246, 0.7) 55%, rgba(15, 15, 18, 0.06) 100%)',
                      boxShadow: isHovered
                        ? 'inset 0 2px 3px rgba(255, 255, 255, 1), inset 0 -3px 6px rgba(255, 130, 0, 0.24), inset 2px 0 4px rgba(255, 255, 255, 0.85), 0 6px 16px -3px rgba(255, 130, 0, 0.25), 0 2px 5px rgba(15, 15, 18, 0.08)'
                        : 'inset 0 2px 3px rgba(255, 255, 255, 1), inset 0 -2px 5px rgba(15, 15, 18, 0.1), 0 3px 10px rgba(15, 15, 18, 0.07)',
                      border: isHovered
                        ? '1px solid rgba(255, 130, 0, 0.32)'
                        : '1px solid rgba(15, 15, 18, 0.1)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    {/* Top-Left Water Droplet Light Reflection Glint */}
                    <span
                      className="absolute left-2.5 top-[3px] h-[5px] w-[42%] rounded-full opacity-95 blur-[0.3px]"
                      style={{
                        background:
                          'linear-gradient(90deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.35) 100%)',
                      }}
                    />
                    {/* Secondary Tiny Light Sparkle Dot */}
                    <span className="absolute right-3 top-[5px] h-[3.5px] w-[3.5px] rounded-full bg-white/95" />
                    {/* Bottom Curved Rim Refraction */}
                    <span
                      className="absolute bottom-[2px] left-1/2 h-[3px] w-[65%] -translate-x-1/2 rounded-full opacity-75"
                      style={{
                        background: isHovered
                          ? 'linear-gradient(90deg, transparent, rgba(255, 130, 0, 0.35), transparent)'
                          : 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9), transparent)',
                      }}
                    />
                  </span>

                  <span>{link.label}</span>
                  {link.hasDropdown && (
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        servicesOpen
                          ? 'rotate-180 text-[#FF6A00]'
                          : isHovered
                          ? 'text-[#FF6A00]'
                          : 'text-[#0F0F12]/70'
                      }`}
                    />
                  )}
                </Link>

                {/* Pure White 2-Column Services Dropdown */}
                {link.hasDropdown && (
                  <div
                    onMouseEnter={() => {
                      setHoveredLink('Services');
                      setServicesOpen(true);
                    }}
                    className={`absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-4 transition-all duration-300 ease-out xl:w-[630px] xl:pt-5 2xl:w-[680px] ${
                      servicesOpen
                        ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
                        : 'pointer-events-none -translate-y-2 scale-[0.98] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden rounded-[26px] border border-[#0F0F12]/10 bg-white p-3 shadow-[0_24px_60px_-12px_rgba(15,15,18,0.22)] xl:p-3.5 2xl:rounded-[30px] 2xl:p-4">
                      <div className="grid grid-cols-2 gap-1.5 xl:gap-2">
                        {SERVICES.map((service) => {
                          const Icon = service.icon;
                          return (
                            <Link
                              key={service.title}
                              href={service.href}
                              onClick={() => setServicesOpen(false)}
                              className="group/item flex items-start gap-3.5 rounded-2xl p-3 transition-all duration-200 hover:bg-[#FF8200]/[0.08] xl:p-3.5"
                            >
                              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#FF8200]/20 bg-[#FF8200]/10 text-[#FF8200] transition-all duration-200 group-hover/item:border-[#FF8200] group-hover/item:bg-[#FF8200] group-hover/item:text-white">
                                <Icon className="h-[18px] w-[18px] stroke-[2]" />
                              </div>

                              <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-between gap-1">
                                  <p className="truncate text-[14px] font-bold text-[#0F0F12] transition-colors group-hover/item:text-[#FF8200] xl:text-[15px]">
                                    {service.title}
                                  </p>
                                  <ArrowUpRight className="h-4 w-4 shrink-0 -translate-x-1 text-[#FF8200] opacity-0 transition-all duration-200 group-hover/item:translate-x-0 group-hover/item:opacity-100" />
                                </div>
                                <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-zinc-600">
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
        <div className="flex items-center gap-3 xl:gap-4">
          <Link
            href="#meeting"
            className="hidden items-center justify-center rounded-full border border-[#0F0F12]/12 bg-white px-6 py-2.5 text-[14px] font-extrabold tracking-wide text-[#0F0F12] shadow-[0_10px_28px_rgba(15,15,18,0.16)] transition-all duration-200 hover:scale-[1.03] hover:border-[#0F0F12] hover:bg-[#0F0F12] hover:text-white sm:inline-flex xl:px-7 xl:py-3 xl:text-[15px] 2xl:px-8 2xl:py-3.5 2xl:text-[16px]"
          >
            Book a Meeting
          </Link>

          {/* Mobile Hamburger / Close Icon Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-[#0F0F12]/12 bg-white text-[#0F0F12] shadow-md transition-all duration-300 hover:bg-zinc-50 focus:outline-none lg:hidden"
          >
            <span
              className={`h-0.5 w-5 bg-[#0F0F12] transition-all duration-300 ease-in-out ${
                isOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-[#0F0F12] transition-all duration-300 ease-in-out ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-[#0F0F12] transition-all duration-300 ease-in-out ${
                isOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown / Fullscreen Overlay */}
      <div
        className={`pointer-events-auto fixed inset-0 z-40 flex min-h-screen flex-col justify-between overflow-y-auto bg-white px-6 pb-10 pt-28 shadow-2xl transition-all duration-300 ease-in-out lg:hidden ${
          isOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-full opacity-0'
        }`}
      >
        <nav className="flex w-full flex-col items-start gap-1">
          <span className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8200]">
            Navigation
          </span>

          {NAV_LINKS.map((link) => {
            if (link.hasDropdown) {
              return (
                <div
                  key={link.label}
                  className="w-full border-b border-zinc-200"
                >
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                    className="flex w-full items-center justify-between py-4 text-left text-2xl font-extrabold tracking-tight text-[#0F0F12] transition-colors hover:text-[#FF8200]"
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-zinc-500 transition-transform duration-300 ${
                        mobileServicesOpen ? 'rotate-180 text-[#FF8200]' : ''
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      mobileServicesOpen
                        ? 'grid-rows-[1fr] pb-4 opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-col gap-1 rounded-2xl border border-zinc-200 bg-zinc-50 p-2">
                        {SERVICES.map((service) => {
                          const Icon = service.icon;
                          return (
                            <Link
                              key={service.title}
                              href={service.href}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-[#0F0F12] transition-colors hover:bg-[#FF8200]/10 hover:text-[#FF8200]"
                            >
                              <span className="flex items-center gap-3">
                                <Icon className="h-4 w-4 text-[#FF8200]" />
                                <span>{service.title}</span>
                              </span>
                              <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400" />
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
                className="group flex w-full items-center justify-between border-b border-zinc-200 py-4 text-left text-2xl font-extrabold tracking-tight text-[#0F0F12] transition-colors duration-200 hover:text-[#FF8200]"
              >
                <span>{link.label}</span>
                <span className="text-base text-zinc-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#FF8200]">
                  →
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="w-full pt-8">
          <Link
            href="#meeting"
            onClick={() => setIsOpen(false)}
            className="flex w-full items-center justify-center rounded-full bg-[#FF8200] py-4 text-base font-extrabold text-white shadow-[0_10px_25px_rgba(255,130,0,0.35)] transition-all active:scale-[0.98]"
          >
            Book a Meeting
          </Link>
        </div>
      </div>
    </header>
  );
}