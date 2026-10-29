'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Works', href: '#works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Questions', href: '#questions' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Mobile menu open hone par background scroll disable karna
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
    <header className="pointer-events-none absolute left-0 top-0 z-50 w-full px-5 py-5 md:px-12 xl:px-16 2xl:py-8">
      <div className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between xl:max-w-[1600px] 2xl:max-w-[1850px]">
        {/* Brand Logo */}
        <Link href="/" className="group z-50 flex items-center gap-1">
          <span
            className={`font-heading text-2xl font-black tracking-tight transition-colors duration-200 xl:text-3xl 2xl:text-4xl ${
              isOpen ? 'text-neutral-900 lg:text-content-primary' : 'text-content-primary'
            }`}
          >
            Zorzex<span className="text-brand">.</span>
          </span>
        </Link>

        {/* Desktop Navigation Pill - Scaled for Large Screens */}
        <nav className="hidden items-center gap-1.5 rounded-full border border-border bg-white/[0.04] px-4 py-1.5 shadow-2xl backdrop-blur-md lg:flex xl:gap-2.5 xl:px-6 xl:py-2 2xl:px-8 2xl:py-2.5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-1.5 text-sm text-content-secondary transition-colors duration-200 hover:text-content-primary xl:px-5 xl:py-2 xl:text-base 2xl:text-lg"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA Button (Desktop) & Hamburger Toggle (Mobile) */}
        <div className="flex items-center gap-3 xl:gap-5">
          {/* Desktop CTA */}
          <Link
            href="#meeting"
            className="hidden rounded-full border border-brand bg-brand px-5 py-2 text-sm font-medium text-white shadow-brand-glow transition-all duration-200 hover:border-border hover:bg-bg-card hover:text-content-primary hover:shadow-none sm:inline-flex xl:px-7 xl:py-3 xl:text-base 2xl:px-8 2xl:py-3.5 2xl:text-lg"
          >
            Book a Meeting
          </Link>

          {/* Hamburger / Close Icon Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className={`z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border transition-all duration-300 focus:outline-none lg:hidden ${
              isOpen
                ? 'border-neutral-300 bg-neutral-100 text-neutral-900'
                : 'border-border bg-white/[0.06] text-content-primary backdrop-blur-md hover:bg-white/10'
            }`}
          >
            <span
              className={`h-0.5 w-5 transition-all duration-300 ease-in-out ${
                isOpen ? 'translate-y-2 rotate-45 bg-neutral-900' : 'bg-current'
              }`}
            />
            <span
              className={`h-0.5 w-5 transition-all duration-300 ease-in-out ${
                isOpen ? 'opacity-0 bg-neutral-900' : 'opacity-100 bg-current'
              }`}
            />
            <span
              className={`h-0.5 w-5 transition-all duration-300 ease-in-out ${
                isOpen ? '-translate-y-2 -rotate-45 bg-neutral-900' : 'bg-current'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown / Fullscreen Overlay (White Background & Corner/Left-Aligned Links) */}
      <div
        className={`pointer-events-auto fixed inset-0 z-40 flex min-h-screen flex-col justify-between bg-white px-6 pb-10 pt-28 shadow-2xl transition-all duration-300 ease-in-out lg:hidden ${
          isOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-full opacity-0'
        }`}
      >
        {/* Navigation Links (Aligned to Left / Corner) */}
        <nav className="flex w-full flex-col items-start gap-1">
          <span className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Navigation
          </span>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="group flex w-full items-center justify-between border-b border-neutral-100 py-3.5 text-left text-xl font-bold tracking-tight text-neutral-800 transition-colors duration-200 hover:text-brand"
            >
              <span>{link.label}</span>
              <span className="text-sm text-neutral-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-brand">
                →
              </span>
            </Link>
          ))}
        </nav>

        {/* Bottom CTA for Mobile */}
        <div className="w-full pt-6">
          <Link
            href="#meeting"
            onClick={() => setIsOpen(false)}
            className="flex w-full items-center justify-center rounded-xl bg-brand py-3.5 text-base font-semibold text-white shadow-brand-glow transition-all active:scale-[0.98]"
          >
            Book a Meeting
          </Link>
        </div>
      </div>
    </header>
  );
}