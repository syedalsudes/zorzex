import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-bg font-sans text-content-primary selection:bg-brand selection:text-white">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-bg pointer-events-none" />
      </div>

      <main className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-4 sm:px-6 pb-10 pt-28 sm:pb-12 md:px-12 md:pt-36">
        <div className="max-w-md text-center sm:text-left">
          <p className="text-base sm:text-lg md:text-xl font-normal leading-relaxed text-content-secondary">
            Helps You Turn Your Work Into Something People Remember.
          </p>
        </div>

        <div className="my-8 sm:my-auto flex flex-col items-center justify-center text-center">
          <h1 className="font-heading select-none text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-content-primary drop-shadow-[0_10px_35px_rgba(255,255,255,0.12)]">
            Zorzex
          </h1>

          <div className="mt-6 sm:mt-8">
            <a
              href="#get-started"
              className="inline-block rounded-full bg-brand px-8 py-3 text-sm sm:px-10 sm:py-3.5 sm:text-base font-semibold text-white shadow-brand-glow transition duration-200 hover:scale-105 hover:bg-brand-hover active:scale-95"
            >
              Get Started
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-end gap-4 sm:gap-5 w-full">
          <p className="max-w-sm text-center sm:text-right text-xs sm:text-sm md:text-base text-content-secondary leading-snug">
            We Provide UI/UX Design And Development Services As Well As Branding Services
          </p>

          <div className="w-full max-w-xs rounded-2xl border border-border-card bg-bg-card p-2.5 sm:p-3 backdrop-blur-md">
            {[
              'UI UX Design',
              'Development',
              'Website Design',
              'Motion Design',
            ].map((service, index) => (
              <a
                key={service}
                href={`#${service.toLowerCase().replace(/\s+/g, '-')}`}
                className={`flex items-center justify-between py-2 sm:py-2.5 px-3 text-xs sm:text-sm text-content-secondary transition hover:text-content-primary ${
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