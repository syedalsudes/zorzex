'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    id: 1,
    name: 'Elena Rostova',
    role: 'Lead UI/UX Designer',
    shortTitle: 'UI/UX Lead',
    description: 'Crafting intuitive user interfaces and modern design systems with seamless interactive experiences.',
    image: '/img.png',
  },
  {
    id: 2,
    name: 'Marcus Vance',
    role: 'Senior Full Stack Engineer',
    shortTitle: 'Senior Engineer',
    description: 'Architecting high-performance web applications, resilient backend services, and scalable cloud APIs.',
    image: '/img.png',
  },
  {
    id: 3,
    name: 'Sophia Lindqvist',
    role: 'Creative Director',
    shortTitle: 'Creative Director',
    description: 'Guiding global brand identities, visual storytelling, and high-impact digital campaign directions.',
    image: '/img.png',
  },
  {
    id: 4,
    name: 'David Miller',
    role: 'Head of Growth & AI',
    shortTitle: 'AI Lead',
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
    <section className="relative w-full py-16 px-4 sm:px-6 md:px-12 md:py-24 lg:py-28 xl:px-16 xl:py-36 2xl:py-44 font-sans">
      {/* Container synchronized with Hero, Navbar, Services, Testimonials */}
      <div className="mx-auto w-full max-w-7xl xl:max-w-[1600px] 2xl:max-w-[1850px]">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 md:mb-16 xl:mb-20 text-center">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight text-neutral-900">
            Our Team Experts
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 xl:gap-8 2xl:gap-10">
          {teamMembers.map((member) => {
            const isFlipped = flippedCardId === member.id;

            return (
              <div
                key={member.id}
                onClick={() => toggleFlip(member.id)}
                className="group [perspective:1200px] h-[380px] sm:h-[410px] md:h-[430px] xl:h-[490px] 2xl:h-[550px] w-full cursor-pointer select-none"
              >
                <div
                  className={`relative h-full w-full rounded-2xl sm:rounded-[28px] xl:rounded-[36px] transition-transform duration-700 [transform-style:preserve-3d] shadow-md group-hover:shadow-2xl ${
                    isFlipped
                      ? '[transform:rotateY(180deg)]'
                      : 'group-hover:[transform:rotateY(180deg)]'
                  }`}
                >
                  {/* FRONT FACE: Clean Image + Only Title Badge (No Name) */}
                  <div className="absolute inset-0 h-full w-full overflow-hidden rounded-2xl sm:rounded-[28px] xl:rounded-[36px] bg-neutral-900 [backface-visibility:hidden] border border-neutral-200/60 shadow-lg">
                    <Image
                      src={member.image}
                      alt={member.role}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 25vw, 450px"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      priority={member.id <= 2}
                    />

                    {/* Subtle bottom fade to make the title pill pop */}
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

                    {/* Clean Pill Title at Bottom */}
                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 xl:bottom-6 xl:left-6 xl:right-6 flex items-center justify-between">
                      <span className="inline-flex items-center rounded-full bg-black/60 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm xl:text-base font-semibold tracking-wide text-white backdrop-blur-md border border-white/15 shadow-sm">
                        {member.shortTitle}
                      </span>
                      <span className="flex h-8 w-8 sm:h-9 sm:w-9 xl:h-10 xl:w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm transition-transform duration-300 group-hover:rotate-45">
                        ↗
                      </span>
                    </div>
                  </div>

                  {/* BACK FACE: Details, Full Name, Role & Description */}
                  <div className="absolute inset-0 h-full w-full overflow-hidden rounded-2xl sm:rounded-[28px] xl:rounded-[36px] bg-black p-6 sm:p-8 xl:p-10 2xl:p-12 text-white [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-between border border-neutral-800 shadow-2xl">
                    <div>
                      <span className="inline-block rounded-full bg-brand/10 border border-brand/30 px-3.5 py-1 text-xs xl:text-sm font-semibold text-brand">
                        Expertise
                      </span>

                      <h3 className="font-heading text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl font-bold tracking-tight text-white mt-4 sm:mt-6">
                        {member.name}
                      </h3>
                      <p className="text-xs sm:text-sm xl:text-base font-medium text-brand mt-1">
                        {member.role}
                      </p>

                      <p className="text-xs sm:text-sm xl:text-base 2xl:text-lg font-normal leading-relaxed text-neutral-300 mt-4 sm:mt-6 xl:mt-8">
                        {member.description}
                      </p>
                    </div>

                    <div className="pt-4 sm:pt-6 border-t border-neutral-800 flex items-center justify-between">
                      <span className="text-xs xl:text-sm text-neutral-400 font-medium">
                        Zorzex Core Team
                      </span>
                      <span className="h-2.5 w-2.5 rounded-full bg-brand animate-pulse" />
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