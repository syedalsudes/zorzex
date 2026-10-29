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
    <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 xl:py-36 2xl:py-44 overflow-hidden font-sans">
      {/* Header Container synchronized with Hero, Navbar, AboutStats & Services */}
      <div className="mx-auto w-[92%] sm:w-[90%] max-w-7xl xl:max-w-[1600px] 2xl:max-w-[1850px] mb-10 sm:mb-14 md:mb-16 xl:mb-20">
        <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold tracking-tight text-neutral-900 leading-[1.12]">
          Clients <br />
          Are Saying
        </h2>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)] xl:[mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="flex w-max gap-4 sm:gap-6 xl:gap-8 2xl:gap-10 animate-marquee [animation-direction:reverse] hover:[animation-play-state:paused] py-4 sm:py-6">
          {repeatedTestimonials.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[82vw] sm:w-[48vw] md:w-[380px] lg:w-[420px] xl:w-[480px] 2xl:w-[540px] flex-shrink-0 flex flex-col justify-between rounded-2xl sm:rounded-[28px] xl:rounded-[36px] bg-[#171717] p-6 sm:p-8 md:p-9 xl:p-11 2xl:p-12 text-white shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-neutral-700/60 border border-neutral-800"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1.5 xl:gap-2 mb-4 sm:mb-6 xl:mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 sm:h-4 sm:w-4 xl:h-5 xl:w-5 2xl:h-6 2xl:w-6 fill-brand text-brand"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl font-medium leading-relaxed tracking-tight text-neutral-100 line-clamp-4">
                  “{item.quote}”
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 sm:gap-4 xl:gap-5 mt-6 sm:mt-8 xl:mt-10 pt-4 xl:pt-6 border-t border-white/5">
                <div className="flex h-9 w-9 sm:h-11 sm:w-11 xl:h-13 xl:w-13 2xl:h-14 2xl:w-14 items-center justify-center rounded-full bg-neutral-800 border border-neutral-700 text-neutral-300 shadow-inner shrink-0">
                  <User className="h-4 w-4 sm:h-5 sm:w-5 xl:h-6 xl:w-6 text-neutral-300" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm xl:text-base 2xl:text-lg font-semibold tracking-wide text-white">
                    {item.name}
                  </h4>
                  <p className="text-[11px] sm:text-xs xl:text-sm 2xl:text-base text-neutral-400 font-normal">
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