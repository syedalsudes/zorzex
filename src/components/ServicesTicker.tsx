import React from 'react';

const servicesList = [
  'Ai Automation',
  'Ui/Ux',
  'Graphic Designing',
  'Web Design',
  'Graphic Designing',
  'Social Media Handling',
  'Digital Marketing',
];

export default function ServicesTicker() {
  // Infinite seamless continuous loop kelye array repeat kiya hai
  const repeatedServices = [...servicesList, ...servicesList, ...servicesList];

  return (
    <div className="relative w-full overflow-hidden py-14 sm:py-20">
      {/* Tilted Marquee Strip Container */}
      <div className="-mx-[10vw] w-[120vw] -rotate-3 sm:-rotate-3 bg-black py-4 sm:py-5 shadow-2xl flex items-center overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-8 sm:gap-14 whitespace-nowrap">
          {repeatedServices.map((service, index) => (
            <div
              key={`${service}-${index}`}
              className="flex items-center gap-8 sm:gap-14"
            >
              <span className="font-heading text-base sm:text-xl md:text-2xl font-medium tracking-wide text-white transition-colors duration-200 hover:text-[#f54e11]">
                {service}
              </span>
              {/* Subtle separator dot */}
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-600" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}