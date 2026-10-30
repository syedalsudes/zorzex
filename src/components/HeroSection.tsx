import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#070707] text-white overflow-hidden flex flex-col justify-between px-6 md:px-12 pt-8 pb-4">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[500px] h-[500px] bg-gradient-to-t from-[#ff4d00]/40 via-[#ff3b00]/20 to-transparent blur-[120px] rounded-full pointer-events-none" />

      {/* Top Header / Headline */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-6">
        {/* Left Headline */}
        <div className="md:col-span-4">
          <h1 className="text-3xl md:text-5xl font-light uppercase tracking-wider leading-[1.15]">
            Clear <br />
            Brands <span className="inline-block border border-white/60 px-2.5 py-0.5 rounded-full text-xs align-middle">✦</span> Stay <br />
            In Memory.
          </h1>
        </div>

        {/* Center Space for Image (Blank column in grid) */}
        <div className="hidden md:block md:col-span-4" />

        {/* Right Info Paragraphs & CTA */}
        <div className="md:col-span-4 flex flex-col justify-between h-full space-y-6 text-xs text-neutral-400 font-light leading-relaxed">
          <div className="space-y-4">
            <p>
              A brand becomes truly memorable when every touchpoint is crafted with purpose and consistency. From identity creation to digital execution.
            </p>
            <p>
              Consistency builds that connection, ensuring that every time your brand appears, it leaves a lasting impression that resonates across all media platforms.
            </p>
          </div>

          <div>
            <button className="group flex items-center justify-between w-full max-w-[240px] px-6 py-3.5 bg-white text-black rounded-full font-medium text-sm transition-all hover:bg-neutral-200">
              <span>Start a project</span>
              <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center transition-transform group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Center Silhouette Image */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[360px] md:w-[480px] h-[650px] pointer-events-none z-10 flex items-end justify-center">
        <Image
          src="/robot1.png" 
          alt="Model silhouette"
          width={480}
          height={650}
          priority
          className="object-contain object-bottom drop-shadow-[0_10px_35px_rgba(255,75,0,0.25)]"
        />
      </div>

      {/* Giant Bottom Typography */}
      <div className="relative z-0 w-full select-none pointer-events-none mt-auto">
        <h2 className="text-[19vw] font-normal leading-none tracking-tight text-center text-white/90 uppercase font-sans">
          Studios
        </h2>
      </div>
    </section>
  );
}