import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[100dvh] bg-[#070707] text-white overflow-hidden flex flex-col justify-between px-5 sm:px-8 md:px-12 pt-24 sm:pt-28 md:pt-32 pb-4">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:-translate-y-1/3 w-[320px] sm:w-[450px] md:w-[600px] h-[320px] sm:h-[450px] md:h-[600px] bg-gradient-to-t from-[#ff4d00]/35 via-[#ff3b00]/15 to-transparent blur-[90px] md:blur-[130px] rounded-full pointer-events-none" />

      {/* Top Content Grid (Headline + Paragraphs/CTA) */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-start">
        {/* Left Headline */}
        <div className="md:col-span-5 lg:col-span-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-light uppercase tracking-wider leading-[1.12]">
            Clear <br />
            Brands{' '}
            <span className="inline-block border border-white/60 px-2 py-0.5 rounded-full text-[10px] md:text-xs align-middle">
              ✦
            </span>{' '}
            Stay <br />
            In Memory.
          </h1>
        </div>

        {/* Center Spacer for Desktop (Leaves visual breathing room for the center silhouette) */}
        <div className="hidden md:block md:col-span-2 lg:col-span-4" />

        {/* Right Info Paragraphs & CTA */}
        <div className="md:col-span-5 lg:col-span-4 flex flex-col justify-between space-y-6 text-xs sm:text-sm md:text-xs text-neutral-400 font-light leading-relaxed">
          <div className="space-y-3.5 max-w-md md:max-w-none">
            <p>
              A brand becomes truly memorable when every touchpoint is crafted with purpose and consistency. From identity creation to digital execution.
            </p>
            <p>
              Consistency builds that connection, ensuring that every time your brand appears, it leaves a lasting impression that resonates across all media platforms.
            </p>
          </div>

          <div className="pt-2">
            <button className="group flex items-center justify-between w-full sm:w-auto min-w-[210px] max-w-[240px] px-5 py-3 bg-white text-black rounded-full font-medium text-xs sm:text-sm transition-all hover:bg-neutral-200 active:scale-95">
              <span>Start a project</span>
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black text-white flex items-center justify-center transition-transform group-hover:rotate-45">
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Center Silhouette Image */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[240px] sm:w-[320px] md:w-[420px] lg:w-[480px] h-[45vh] sm:h-[55vh] md:h-[65vh] max-h-[680px] pointer-events-none z-10 flex items-end justify-center">
        <Image
          src="/robot1.png"
          alt="Model silhouette"
          width={480}
          height={650}
          priority
          className="w-full h-full object-contain object-bottom drop-shadow-[0_10px_35px_rgba(255,75,0,0.25)]"
        />
      </div>

      {/* Giant Bottom Typography */}
      <div className="relative z-0 w-full select-none pointer-events-none mt-12 md:mt-auto">
        <h2 className="text-[19vw] font-normal leading-none tracking-tight text-center text-white/90 uppercase font-sans">
          Studios
        </h2>
      </div>
    </section>
  );
}