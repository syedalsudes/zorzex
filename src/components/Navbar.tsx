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

  // Mobile menu khula ho toh background scroll disable karna
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
    <header className="absolute top-0 left-0 w-full z-50 px-5 py-5 md:px-12 pointer-events-none">
      <div className="mx-auto flex max-w-7xl items-center justify-between pointer-events-auto">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-1 group z-50">
          <span className="font-heading text-2xl font-black tracking-tight text-content-primary">
            Zorzex<span className="text-brand">.</span>
          </span>
        </Link>

        {/* Desktop Navigation Pill */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-border bg-white/[0.04] px-4 py-1.5 backdrop-blur-md shadow-2xl">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-1.5 text-sm text-content-secondary transition-colors duration-200 hover:text-content-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA Button (Desktop) & Hamburger Toggle (Mobile) */}
        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <Link
            href="#meeting"
            className="hidden sm:inline-flex rounded-full border border-brand bg-brand px-5 py-2 text-sm font-medium text-white shadow-brand-glow transition-all duration-200 hover:border-border hover:bg-bg-card hover:text-content-primary hover:shadow-none"
          >
            Book a Meeting
          </Link>

          {/* Hamburger / Close Icon Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-border bg-white/[0.06] backdrop-blur-md transition-colors hover:bg-white/10 focus:outline-none"
          >
            <span
              className={`h-0.5 w-5 bg-content-primary transition-all duration-300 ease-in-out ${
                isOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-content-primary transition-all duration-300 ease-in-out ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-content-primary transition-all duration-300 ease-in-out ${
                isOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown / Overlay */}
      <div
        className={`fixed inset-x-0 top-0 min-h-screen bg-black/80 backdrop-blur-xl lg:hidden pointer-events-auto transition-all duration-300 flex flex-col justify-between p-6 pt-24 ${
          isOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <nav className="flex flex-col items-center gap-4 text-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-content-secondary transition-colors duration-200 hover:text-content-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Action Button */}
        <div className="pt-6 pb-8 flex justify-center border-t border-white/10">
          <Link
            href="#meeting"
            onClick={() => setIsOpen(false)}
            className="w-full max-w-xs text-center rounded-full border border-brand bg-brand px-6 py-3 text-base font-semibold text-white shadow-brand-glow transition-all duration-200 hover:border-border hover:bg-bg-card hover:text-content-primary"
          >
            Book a Meeting
          </Link>
        </div>
      </div>
    </header>
  );
}