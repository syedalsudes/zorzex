'use client';

import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: '01',
    question: 'What kind of digital products does Zorzex build?',
    answer:
      'We engineer high-performance web applications (Next.js, React, TypeScript), cross-platform mobile apps (Flutter), design systems, and custom AI automation pipelines built to scale business revenue.',
  },
  {
    id: '02',
    question: 'How fast can you deliver an MVP or full platform?',
    answer:
      'We operate on continuous 2-week agile sprints. Standard web platforms and landing experiences launch in 10 to 14 business days, while complex custom platforms ship within 3 to 5 weeks.',
  },
  {
    id: '03',
    question: 'Do we get direct access to core engineers?',
    answer:
      '100% direct access. We eliminate non-technical middlemen and account manager bottlenecks. You collaborate directly via dedicated Slack or WhatsApp channels with the engineers building your product.',
  },
  {
    id: '04',
    question: 'How do you guarantee 98+ performance and zero lag?',
    answer:
      'We never touch bloated templates or legacy CMS stacks. Through clean code architecture, dynamic imports, asset compression, and zero main-thread blocking, every build is benchmarked to 98+ Google Lighthouse scores.',
  },
  {
    id: '05',
    question: 'Who retains the intellectual property and code repository?',
    answer:
      'You own 100% of the IP from day one. Upon milestone sign-off, we hand over full GitHub repository access, Figma design tokens, environment variables, and production deployment credentials.',
  },
  {
    id: '06',
    question: 'What does the post-launch sprint support include?',
    answer:
      'Every release includes 30 days of dedicated sprint support covering real-time infrastructure monitoring, priority edge-case bug fixes, and continuous performance fine-tuning.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number): void => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative w-full bg-[#070707] text-white py-28 md:py-36 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-white/5 font-sans">
      {/* Background Giant Orange Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-gradient-to-b from-[#ff4d00]/25 via-[#ff4d00]/10 to-transparent blur-[160px] pointer-events-none rounded-full" />

      {/* Subtle Bottom Ambient Orange Accent */}
      <div className="absolute -bottom-32 right-10 w-[450px] h-[450px] bg-[#ff4d00]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-20">

        {/* Massive High-Impact Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
          <div className="space-y-6 max-w-3xl">
            {/* Massive Bold Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.1]">
              <span className="text-neutral-500 font-light block">Clear Answers.</span>
              <span className="text-white">Zero Bullshit<span className="text-[#ff4d00]">.</span></span>
            </h2>
          </div>

          <p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed max-w-sm">
            Complete transparency across our sprint cycles, code architecture, and direct development workflow.
          </p>
        </div>

        {/* Dark Accordion List */}
        <div className="divide-y divide-white/10 border-b border-white/10">
          {faqs.map((faq: FaqItem, index: number) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className="group transition-colors duration-300 hover:bg-white/[0.015]"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between py-8 md:py-10 text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-6 sm:gap-10 pr-6">
                    {/* Index Number */}
                    <span className="text-xs sm:text-sm md:text-base font-mono font-medium tracking-widest text-[#ff4d00]">
                      {faq.id}
                    </span>

                    {/* Question Title */}
                    <span className={`text-lg sm:text-2xl md:text-3xl font-medium tracking-tight transition-colors duration-300 ${isOpen ? 'text-white' : 'text-neutral-300 group-hover:text-white'
                      }`}>
                      {faq.question}
                    </span>
                  </div>

                  {/* Circular Orange / Dark Icon */}
                  <div
                    className={`flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen
                      ? 'bg-[#ff4d00] border-[#ff4d00] text-white rotate-45 shadow-[0_0_25px_rgba(255,77,0,0.5)]'
                      : 'bg-white/5 border-white/10 text-neutral-400 group-hover:text-white rotate-0'
                      }`}
                  >
                    <Plus className="h-5 w-5 stroke-[2.2]" />
                  </div>
                </button>

                {/* Smooth Expandable Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen
                    ? 'grid-rows-[1fr] opacity-100 pb-8 md:pb-10'
                    : 'grid-rows-[0fr] opacity-0 pb-0'
                    }`}
                >
                  <div className="overflow-hidden pl-12 sm:pl-20">
                    <div className="border-l-2 border-[#ff4d00] pl-6 max-w-3xl">
                      <p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}