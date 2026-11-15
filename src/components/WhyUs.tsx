import React from 'react';
import {
  ShieldCheck,
  Zap,
  Users,
  GitBranch,
  Clock,
  Headphones
} from 'lucide-react';

const guarantees = [
  {
    icon: Users,
    tag: 'Direct Comms',
    title: 'Talk to the Builders',
    desc: 'No account managers playing telephone. You work directly in Slack with the engineers and designers shipping your code.',
  },
  {
    icon: Zap,
    tag: 'Speed & SEO',
    title: '98+ Lighthouse Score',
    desc: 'We optimize bundle sizes, caching, and Core Web Vitals from day one so your app loads instantly on any device.',
  },
  {
    icon: GitBranch,
    tag: 'Full IP Rights',
    title: 'You Own Every Line',
    desc: 'Your repo, your cloud accounts, your infrastructure. Clean Git history and clear docs handed over from day one.',
  },
  {
    icon: Clock,
    tag: '2-Week Sprints',
    title: 'Predictable Delivery',
    desc: 'No vague 6-month roadmaps. We ship working, testable features every two weeks so you can launch and iterate fast.',
  },
  {
    icon: ShieldCheck,
    tag: 'Custom Stack',
    title: 'Zero Template Bloat',
    desc: 'Built from scratch with Next.js, TypeScript, and Flutter—tailored to your product instead of hacked-together themes.',
  },
  {
    icon: Headphones,
    tag: 'Post-Launch',
    title: '30-Day Bug Warranty',
    desc: 'We don’t disappear after deploy. Every launch includes 30 days of active monitoring, hotfixes, and deployment support.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative w-full bg-transparent text-neutral-900 py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto space-y-14 sm:space-y-18">


        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between border-b border-[#ff4d00]/20 pb-8 sm:pb-12">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-wider leading-[1.15]">
              <span className="text-neutral-500">Why fast teams</span> <br />
              <strong className="font-semibold text-neutral-950">
                Choose <span className="text-[#ff4d00]">Zorzex.</span>
              </strong>
            </h2>
          </div>

          <p className="lg:col-span-4 text-sm sm:text-base text-neutral-700 font-medium leading-relaxed border-l-2 border-[#ff4d00] pl-4">
            We replace slow legacy agency models with direct engineering access, rapid deployment cycles, and transparent quality benchmarks.
          </p>
        </div>


        {/* High-Craft Orange & White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-3xl bg-white/90 backdrop-blur-md border border-orange-200/80 p-8 sm:p-9 flex flex-col justify-between shadow-[0_2px_12px_-4px_rgba(255,77,0,0.06)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#ff4d00] hover:bg-gradient-to-b hover:from-orange-50/70 hover:to-white hover:shadow-[0_20px_40px_-15px_rgba(255,77,0,0.22)]"
              >
                {/* Top Sliding Orange Accent Bar */}
                <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#ff4d00] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />

                {/* Subtle Editorial Watermark Number */}
                <span className="pointer-events-none select-none absolute top-5 right-7 font-mono text-5xl font-extrabold tracking-tighter text-orange-500/[0.08] group-hover:text-[#ff4d00]/[0.15] group-hover:-translate-y-1 transition-all duration-300">
                  0{idx + 1}
                </span>

                <div className="relative z-10">
                  {/* Tactile Icon Container */}
                  <div className="relative w-12 h-12 mb-8">
                    {/* Offset Decorative Backplate */}
                    <div className="absolute inset-0 rounded-xl bg-[#ff4d00]/15 translate-x-1 translate-y-1 group-hover:translate-x-1.5 group-hover:translate-y-1.5 group-hover:rotate-3 transition-transform duration-300" />

                    {/* Main Icon Box */}
                    <div className="relative w-12 h-12 rounded-xl bg-white border border-orange-200 text-[#ff4d00] flex items-center justify-center shadow-xs transition-all duration-300 group-hover:bg-[#ff4d00] group-hover:text-white group-hover:border-[#ff4d00]">
                      <Icon className="w-5 h-5 stroke-[2] transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110" />
                    </div>
                  </div>

                  {/* Category Label */}
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#ff4d00] mb-2">
                    {item.tag}
                  </p>

                  {/* Sharp Black Title */}
                  <h3 className="text-xl font-bold text-neutral-950 tracking-tight mb-3">
                    {item.title}
                  </h3>

                  {/* Clean Readable Copy */}
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}