'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    id: 1,
    name: 'Elena Rostova',
    role: 'Lead UI/UX Designer',
    description: 'Crafting intuitive user interfaces and modern design systems with seamless interactive experiences.',
    image: '/img.png',
  },
  {
    id: 2,
    name: 'Marcus Vance',
    role: 'Senior Full Stack Engineer',
    description: 'Architecting high-performance web applications, resilient backend services, and scalable cloud APIs.',
    image: '/img.png',
  },
  {
    id: 3,
    name: 'Sophia Lindqvist',
    role: 'Creative Director',
    description: 'Guiding global brand identities, visual storytelling, and high-impact digital campaign directions.',
    image: '/img.png',
  },
  {
    id: 4,
    name: 'David Miller',
    role: 'Head of Growth & AI',
    description: 'Deploying machine learning workflows, automated systems, and data-driven business growth strategies.',
    image: '/img.png',
  },
];

export default function TeamSection() {
  const [flippedCardId, setFlippedCardId] = useState<number | null>(null);

  const toggleFlip = (id: number) => {
    setFlippedCardId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full py-14 sm:py-20 lg:py-28 font-sans">
      <div className="mx-auto w-[92%] sm:w-[90%] max-w-7xl">
        <div className="mb-10 sm:mb-14 md:mb-16 text-center">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900">
            Our Team Experts
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {teamMembers.map((member) => {
            const isFlipped = flippedCardId === member.id;

            return (
              <div
                key={member.id}
                onClick={() => toggleFlip(member.id)}
                className="group [perspective:1000px] h-[360px] sm:h-[390px] md:h-[420px] w-full cursor-pointer"
              >
                <div
                  className={`relative h-full w-full rounded-2xl sm:rounded-[24px] transition-transform duration-700 [transform-style:preserve-3d] shadow-md group-hover:shadow-2xl ${
                    isFlipped
                      ? '[transform:rotateY(180deg)]'
                      : 'group-hover:[transform:rotateY(180deg)]'
                  }`}
                >
                  <div className="absolute inset-0 h-full w-full overflow-hidden rounded-2xl sm:rounded-[24px] bg-neutral-200 [backface-visibility:hidden]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center grayscale-[15%] transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-5 sm:p-6 text-white">
                      <h3 className="font-heading text-lg sm:text-xl font-bold leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-300 font-normal mt-1">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <div className="absolute inset-0 h-full w-full overflow-hidden rounded-2xl sm:rounded-[24px] bg-black p-6 sm:p-7 text-white [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-between border border-neutral-800 shadow-2xl">
                    <div>
                      <span className="inline-block rounded-full bg-brand/10 border border-brand/30 px-3 py-1 text-[11px] font-medium text-brand">
                        Expertise
                      </span>

                      <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-white mt-4">
                        {member.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-brand mt-0.5">
                        {member.role}
                      </p>

                      <p className="text-xs sm:text-sm font-normal leading-relaxed text-neutral-300 mt-4">
                        {member.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                      <span className="text-[11px] text-neutral-400">
                        Zorzex Core Team
                      </span>
                      <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
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