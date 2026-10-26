import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    id: 1,
    name: 'Elena Rostova',
    role: 'Lead UI/UX Designer',
    image: '/img.png',
  },
  {
    id: 2,
    name: 'Marcus Vance',
    role: 'Senior Full Stack Engineer',
    image: '/img.png',
  },
  {
    id: 3,
    name: 'Sophia Lindqvist',
    role: 'Creative Director',
    image: '/img.png',
  },
  {
    id: 4,
    name: 'David Miller',
    role: 'Head of Growth & AI',
    image: '/img.png',
  },
];

export default function TeamSection() {
  return (
    <section className="relative w-full py-20 lg:py-28">
      {/* 90% Width Container taake baaki sections ki tarah 5% left aur 5% right margin balanced rahe */}
      <div className="mx-auto w-[90%]">
        
        {/* Centered Heading */}
        <div className="mb-14 md:mb-16 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900">
            Our Team Experts
          </h2>
        </div>

        {/* 4 Cards Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative overflow-hidden rounded-[24px] bg-neutral-200 transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-xl"
            >
              {/* Image Container with Aspect Ratio */}
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center grayscale-[15%] transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />

                {/* Subtle Hover Gradient & Overlay info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-5 text-white">
                  <h3 className="font-heading text-lg font-semibold leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs text-neutral-300 font-normal mt-1">
                    {member.role}
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