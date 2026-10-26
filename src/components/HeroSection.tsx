import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-bg font-sans text-content-primary selection:bg-brand selection:text-white">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-60"
        >
          <source src="/videos/bg.mp4" type="video/mp4" />
        </video>
        {/* Subtle Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-bg pointer-events-none" />
      </div>

      {/* Hero Layout */}
      <main className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 pb-12 pt-28 md:pt-32 md:px-12">
        {/* Top-Left Tagline */}
        <div className="max-w-md">
          <p className="text-lg md:text-xl font-normal leading-relaxed text-content-secondary">
            Helps You Turn Your Work Into Something People Remember.
          </p>
        </div>

        {/* Center Title + Action */}
        <div className="my-auto flex flex-col items-center justify-center text-center">
          <h1 className="font-heading select-none text-7xl font-extrabold tracking-tight text-content-primary md:text-9xl drop-shadow-[0_10px_35px_rgba(255,255,255,0.12)]">
            Zorzex
          </h1>

          <div className="mt-8">
            <a
              href="#get-started"
              className="inline-block rounded-full bg-brand px-10 py-3.5 text-base font-semibold text-white shadow-brand-glow transition duration-200 hover:scale-105 hover:bg-brand-hover"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Bottom-Right Services Box */}
        <div className="flex flex-col items-end gap-5">
          <p className="max-w-sm text-right text-sm text-content-secondary md:text-base leading-snug">
            We Provide UI/UX Design And Development Services As Well As Branding Services
          </p>

          <div className="w-full max-w-xs rounded-2xl border border-border-card bg-bg-card p-3 backdrop-blur-md">
            {[
              'UI UX Design',
              'Development',
              'Website Design',
              'Motion Design',
            ].map((service, index) => (
              <a
                key={service}
                href={`#${service.toLowerCase().replace(/\s+/g, '-')}`}
                className={`flex items-center justify-between py-2 px-3 text-xs md:text-sm text-content-secondary transition hover:text-content-primary ${
                  index !== 3 ? 'border-b border-border' : ''
                }`}
              >
                <span>{service}</span>
                <span className="text-content-muted text-xs">→</span>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}