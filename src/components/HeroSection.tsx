import React from 'react';

const services = [
  'UI/UX Design',
  'Web Development',
  'App Development',
  'Graphic Design',
  'Figma Design',
  'AI Automation',
];

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
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-bg" />
      </div>

      {/* Main Container */}
      <main className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-4 pb-10 pt-28 sm:px-6 sm:pb-12 md:px-12 md:pt-36 xl:max-w-[1600px] xl:px-16 xl:pb-16 xl:pt-44 2xl:max-w-[1850px] 2xl:pb-20 2xl:pt-48">
        
        {/* Top Tagline */}
        <div className="max-w-md text-center sm:text-left xl:max-w-xl 2xl:max-w-2xl">
          <p className="text-base font-normal leading-relaxed text-content-secondary sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
            Helps You Turn Your Work Into Something People Remember.
          </p>
        </div>

        {/* Center Hero Heading & CTA */}
        <div className="my-8 flex flex-col items-center justify-center text-center sm:my-auto">
          <h1 className="select-none font-heading text-5xl font-extrabold tracking-tight text-content-primary drop-shadow-[0_10px_35px_rgba(255,255,255,0.12)] sm:text-7xl md:text-8xl lg:text-9xl xl:text-[9.5rem] 2xl:text-[11rem] leading-none">
            Zorzex
          </h1>

          <div className="mt-6 sm:mt-8 xl:mt-10">
            <a
              href="#get-started"
              className="inline-block rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white shadow-brand-glow transition duration-200 hover:scale-105 hover:bg-brand-hover active:scale-95 sm:px-10 sm:py-3.5 sm:text-base xl:px-12 xl:py-4 xl:text-lg"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Bottom Section: Subtitle & Services Box */}
        <div className="flex w-full flex-col items-center gap-4 sm:items-end sm:gap-5 xl:gap-6">
          <p className="max-w-sm text-center text-xs leading-snug text-content-secondary sm:text-right sm:text-sm md:text-base xl:max-w-md xl:text-lg">
            We provide end-to-end design, development, and AI-powered automation solutions.
          </p>

          <div className="w-full max-w-xs rounded-2xl border border-border-card bg-bg-card/80 p-2.5 backdrop-blur-md sm:max-w-sm sm:p-3.5 xl:max-w-md xl:p-4">
            {services.map((service, index) => (
              <a
                key={service}
                href={`#${service.toLowerCase().replace(/[\s/]+/g, '-')}`}
                className={`flex items-center justify-between px-3 py-2 text-xs text-content-secondary transition hover:translate-x-1 hover:text-content-primary sm:py-2.5 sm:text-sm xl:py-3 xl:text-base ${
                  index !== services.length - 1 ? 'border-b border-border' : ''
                }`}
              >
                <span className="font-medium">{service}</span>
                <span className="text-xs text-content-muted transition-transform group-hover:translate-x-1 xl:text-sm">→</span>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}