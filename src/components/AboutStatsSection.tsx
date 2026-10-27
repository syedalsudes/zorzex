import React from 'react';

const statsData = [
  {
    number: '23+',
    label: 'Design Awards',
    isDark: false,
    numberPos: 'top',
  },
  {
    number: '200+',
    label: 'Project Delivery',
    isDark: true,
    numberPos: 'bottom',
  },
  {
    number: '20k',
    label: 'Satisfied Clients',
    isDark: false,
    numberPos: 'top',
  },
];

export default function AboutStatsSection() {
  return (
    <section className="relative w-full py-14 px-4 sm:px-6 md:px-10 md:py-20 lg:py-28 font-sans">
      <div className="mx-auto max-w-4xl lg:max-w-[940px]">
        <div className="max-w-xl mb-8 sm:mb-12 md:mb-14 text-left">
          <p className="text-lg sm:text-2xl md:text-[26px] font-normal leading-[1.4] tracking-tight text-neutral-800">
            We’re a <span className="text-brand font-medium">Creative Agency</span> helping brands grow through strategy, design, and innovation. The focus of our work is to create inspiring digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6 w-full">
          {statsData.map((item, index) => {
            const isDark = item.isDark;
            const isBottom = item.numberPos === 'bottom';

            return (
              <div
                key={index}
                className={`relative flex flex-col justify-between h-[220px] sm:h-[300px] md:h-[330px] rounded-2xl sm:rounded-[26px] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? 'bg-black text-white shadow-xl'
                    : 'bg-white text-neutral-900 shadow-[0_15px_35px_rgba(0,0,0,0.04)] border border-neutral-100/90'
                }`}
              >
                {!isBottom ? (
                  <>
                    <div className="pt-1">
                      <span className="font-heading text-4xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                        {item.number}
                      </span>
                    </div>
                    <div className="text-right pb-1">
                      <span className="text-xs sm:text-xs font-normal text-neutral-500">
                        {item.label}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-right pt-1">
                      <span className="text-xs sm:text-xs font-normal text-neutral-400">
                        {item.label}
                      </span>
                    </div>
                    <div className="pb-1">
                      <span className="font-heading text-4xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                        {item.number}
                      </span>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}