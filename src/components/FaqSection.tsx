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
    id: '1',
    question: '1. What services does Zorzex offer?',
    answer:
      'We offer comprehensive digital solutions including UI/UX design, full-stack web and mobile development, branding, AI automation, and performance marketing tailored to accelerate business growth.',
  },
  {
    id: '2',
    question: '2. How can Zorzex help my business grow?',
    answer:
      'We combine data-driven strategy with modern design and high-performance engineering to build digital experiences that drive engagement, convert visitors, and scale operations efficiently.',
  },
  {
    id: '3',
    question: '3. How much do your services cost?',
    answer:
      'Our pricing depends on scope, complexity, and timeline. We offer transparent project-based tiers as well as ongoing retainer models to suit both startups and established businesses.',
  },
  {
    id: '4',
    question: '4. How long does it take to complete a project?',
    answer:
      'Most design and branding projects take between 2 to 4 weeks, while full-scale custom software or web platform development typically ranges from 4 to 8 weeks.',
  },
  {
    id: '5',
    question: '5. How do I get started with Zorzex?',
    answer:
      'Simply book a discovery call via the "Book a Meeting" button above or reach out through our contact form. We will analyze your requirements and outline a tailored roadmap.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number): void => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative w-full bg-black py-16 sm:py-24 md:py-32 xl:py-40 2xl:py-48 px-4 sm:px-6 md:px-12 xl:px-16 text-white overflow-hidden font-sans">
      {/* Container synchronized with Hero, Navbar, Services, and AboutStats */}
      <div className="mx-auto w-[92%] sm:w-[90%] max-w-5xl xl:max-w-[1400px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="mb-10 sm:mb-16 md:mb-20 xl:mb-24 text-center">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight text-white">
            Questions, answered.
          </h2>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col">
          {faqs.map((faq: FaqItem, index: number) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className="border-b border-neutral-800 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="group flex w-full items-center justify-between py-5 sm:py-6 md:py-8 xl:py-10 2xl:py-12 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-medium text-neutral-200 transition-colors duration-200 group-hover:text-white pr-4">
                    {faq.question}
                  </span>

                  <div
                    className={`flex h-7 w-7 sm:h-8 sm:w-8 xl:h-11 xl:w-11 2xl:h-13 2xl:w-13 shrink-0 items-center justify-center rounded-full bg-brand text-white shadow-brand-glow transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : 'rotate-0'
                    }`}
                  >
                    <Plus className="h-4 w-4 xl:h-5 xl:w-5 2xl:h-6 2xl:w-6 stroke-[2.5]" />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100 pb-5 sm:pb-6 md:pb-8 xl:pb-10'
                      : 'grid-rows-[0fr] opacity-0 pb-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl xl:max-w-5xl text-xs sm:text-sm md:text-base xl:text-xl 2xl:text-2xl text-neutral-400 font-normal leading-relaxed pl-3 sm:pl-4 xl:pl-6 border-l-2 xl:border-l-4 border-brand/70">
                      {faq.answer}
                    </p>
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