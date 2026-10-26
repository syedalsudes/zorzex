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
    <section className="relative w-full bg-black py-24 sm:py-32 px-6 text-white overflow-hidden">
      <div className="mx-auto w-[90%] max-w-5xl">
        {/* Main Heading */}
        <div className="mb-16 md:mb-20 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Questions, answered.
          </h2>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col">
          {faqs.map((faq: FaqItem, index: number) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className="border-b border-neutral-700/80 transition-colors"
              >
                {/* Accordion Header / Trigger */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="group flex w-full items-center justify-between py-6 sm:py-7 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg md:text-xl font-medium text-neutral-200 transition-colors duration-200 group-hover:text-white">
                    {faq.question}
                  </span>

                  {/* Orange Plus Icon Button */}
                  <div
                    className={`ml-4 flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-[#f54e11] text-white shadow-[0_0_15px_rgba(245,78,17,0.35)] transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : 'rotate-0'
                    }`}
                  >
                    <Plus className="h-4 w-4 stroke-[2.5]" />
                  </div>
                </button>

                {/* Accordion Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100 pb-6'
                      : 'grid-rows-[0fr] opacity-0 pb-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl text-sm sm:text-base text-neutral-400 font-normal leading-relaxed pl-4 border-l-2 border-[#f54e11]/60">
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