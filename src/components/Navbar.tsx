import Link from 'next/link';
import React from 'react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Works', href: '#works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Questions', href: '#questions' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 px-6 py-6 md:px-12 pointer-events-none">
      <div className="mx-auto flex max-w-7xl items-center justify-between pointer-events-auto">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-1 group">
          <span className="font-heading text-2xl font-black tracking-tight text-content-primary">
            Zorzex<span className="text-brand">.</span>
          </span>
        </Link>

        {/* Centered Navigation Pill */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-border bg-white/[0.04] px-4 py-1.5 backdrop-blur-md shadow-2xl">
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

        {/* Right CTA Button (Inverted: Solid Orange by default, Transparent on hover) */}
        <div className="flex items-center">
          <Link
            href="#meeting"
            className="rounded-full border border-brand bg-brand px-5 py-2 text-sm font-medium text-white shadow-brand-glow transition-all duration-200 hover:border-border hover:bg-bg-card hover:text-content-primary hover:shadow-none"
          >
            Book a Meeting
          </Link>
        </div>
      </div>
    </header>
  );
}