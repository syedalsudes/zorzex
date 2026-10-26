'use client';

import React from 'react';
import { Star, User } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote:
      'Working With Forma Studio Has Completely Transformed Our Online Presence. From The Very Beginning, We Appreciated Their Clarity.',
    name: 'Zaire Aminoff',
    role: 'Marketing Coordinator',
  },
  {
    id: 2,
    quote:
      'Working With Flowrix Felt Like Having An In-House Team. The Results Spoke For Themselves Right From Week One.',
    name: 'Alex Rivera',
    role: 'Product Lead',
  },
  {
    id: 3,
    quote:
      'From The Very Beginning, We Appreciated Their Commitment To Understanding Our Brand, Target Audience, And Long-Term Objectives.',
    name: 'Sophia Patel',
    role: 'Founder & CEO',
  },
  {
    id: 4,
    quote:
      'Their Attention To Detail In UI/UX And Scalable Web Development Set A New Standard For Our Digital Client Experience.',
    name: 'Marcus Sterling',
    role: 'Creative Director',
  },
];

export default function TestimonialsSection() {
  const repeatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative w-full py-20 lg:py-28 overflow-hidden">
      {/* Heading Container: 90% Width alignment */}
      <div className="mx-auto w-[90%] mb-12 md:mb-16">
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
          Clients <br />
          Are Saying
        </h2>
      </div>

      {/* Marquee Wrapper: Left se Right movement */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        {/* '[animation-direction:reverse]' se yeh bina config change kiye Left to Right move karega */}
        <div className="flex w-max gap-6 animate-marquee [animation-direction:reverse] hover:[animation-play-state:paused] py-4">
          {repeatedTestimonials.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[85vw] sm:w-[45vw] lg:w-[calc((90vw-48px)/3)] flex-shrink-0 flex flex-col justify-between rounded-[28px] bg-[#171717] p-8 md:p-9 text-white shadow-2xl transition-all duration-300 hover:-translate-y-1.5 hover:border-neutral-700/60 border border-neutral-800"
            >
              <div>
                {/* 5 Orange Stars */}
                <div className="flex items-center gap-1.5 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#f54e11] text-[#f54e11]"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-base sm:text-lg md:text-[19px] font-medium leading-snug tracking-tight text-neutral-100 line-clamp-4">
                  “{item.quote}”
                </p>
              </div>

              {/* User Details with Lucide User Icon */}
              <div className="flex items-center gap-3.5 mt-8 pt-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-800 border border-neutral-700 text-neutral-300 shadow-inner">
                  <User className="h-5 w-5 text-neutral-300" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold tracking-wide text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs text-neutral-400 font-normal">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}