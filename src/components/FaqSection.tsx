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
      'Hum high-performance web applications (Next.js, React, TypeScript), cross-platform mobile apps (Flutter), interactive design systems, aur custom AI automation pipelines develop karte hain jo real business revenue scale karti hain.',
  },
  {
    id: '02',
    question: 'How fast can you deliver an MVP or full platform?',
    answer:
      'Hum 2-week continuous sprint model par kaam karte hain. Standard web platforms aur modern landing experiences 10 se 14 days me live ho jate hain, jabki complex custom platforms 3 se 5 weeks ke andar production-ready ho jate hain.',
  },
  {
    id: '03',
    question: 'Do we get direct access to core engineers?',
    answer:
      'Bilkul 100%. Zorzex me koi non-technical account managers ya delay lane wale middlemen nahi hote. Aap seedha un core software engineers aur designers ke sath direct Slack ya WhatsApp channel me sync karte hain jo code likh rahe hain.',
  },
  {
    id: '04',
    question: 'How do you guarantee 98+ performance and zero lag?',
    answer:
      'Hum bloated templates ya slow WordPress stacks touch bhi nahi karte. Clean code architecture, dynamic imports, asset compression aur zero main-thread blocking ke sath har product Google Lighthouse 98+ score par benchmark hota hai.',
  },
  {
    id: '05',
    question: 'Who retains the intellectual property and code repository?',
    answer:
      'Day one se 100% IP ownership aapki hoti hai. Milestone approval ke baad complete GitHub repository, Figma components, production environment variables aur credentials fully handover kiye jaate hain.',
  },
  {
    id: '06',
    question: 'What does the post-launch sprint support include?',
    answer:
      'Launch ke baad aap akele nahi hote. Har release ke sath 30 days ki dedicated sprint support included hoti hai jisme real-time monitoring, edge bug fixes aur core performance fine-tuning hum handle karte hain.',
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
            {/* Tech Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff4d00] opacity-80" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff4d00]" />
              </span>
              <span className="text-[11px] font-mono tracking-[0.22em] uppercase text-neutral-300">
                FAQS & ARCHITECTURE
              </span>
            </div>

            {/* Massive Bold Heading */}
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.95]">
              <span className="text-neutral-500 font-light block">Clear Answers.</span>
              <span className="text-white">Zero Bullshit<span className="text-[#ff4d00]">.</span></span>
            </h2>
          </div>

          <p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed max-w-sm">
            Hamare sprint cycles, code architecture aur direct development workflow ke baare me sab kuch transparent.
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
                    <span className={`text-lg sm:text-2xl md:text-3xl font-medium tracking-tight transition-colors duration-300 ${
                      isOpen ? 'text-white' : 'text-neutral-300 group-hover:text-white'
                    }`}>
                      {faq.question}
                    </span>
                  </div>

                  {/* Circular Orange / Dark Icon */}
                  <div
                    className={`flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#ff4d00] border-[#ff4d00] text-white rotate-45 shadow-[0_0_25px_rgba(255,77,0,0.5)]'
                        : 'bg-white/5 border-white/10 text-neutral-400 group-hover:border-[#ff4d00]/60 group-hover:text-white rotate-0'
                    }`}
                  >
                    <Plus className="h-5 w-5 stroke-[2.2]" />
                  </div>
                </button>

                {/* Smooth Expandable Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
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

        {/* Bottom Fast Contact Prompt */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 text-xs md:text-sm text-neutral-400">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Developers active on Slack & Discord</span>
          </div>

          <a
            href="#contact"
            className="group flex items-center gap-2 text-white font-medium hover:text-[#ff4d00] transition-colors"
          >
            <span>Have a custom requirement? Book a call directly</span>
            <span className="text-[#ff4d00] transition-transform group-hover:translate-x-1">&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}