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
    <section className="relative w-full py-16 px-4 sm:px-6 md:px-12 md:py-24 lg:py-28 xl:px-16 xl:py-36 2xl:py-44 font-sans">
      {/* Synchronized container width with Hero and Navbar */}
      <div className="mx-auto max-w-7xl xl:max-w-[1600px] 2xl:max-w-[1850px]">
        {/* Intro Tagline */}
        <div className="max-w-2xl xl:max-w-4xl 2xl:max-w-5xl mb-10 sm:mb-14 md:mb-16 xl:mb-20 text-left">
          <p className="text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-normal leading-[1.35] tracking-tight text-neutral-800">
            We’re a <span className="text-brand font-medium">Creative Agency</span> helping brands grow through strategy, design, and innovation. The focus of our work is to create inspiring digital experiences.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 xl:gap-8 2xl:gap-10 w-full">
          {statsData.map((item, index) => {
            const isDark = item.isDark;
            const isBottom = item.numberPos === 'bottom';

            return (
              <div
                key={index}
                className={`relative flex flex-col justify-between h-[220px] sm:h-[300px] md:h-[340px] xl:h-[400px] 2xl:h-[460px] rounded-2xl sm:rounded-[28px] xl:rounded-[36px] p-6 sm:p-7 md:p-8 xl:p-10 2xl:p-12 transition-all duration-300 hover:-translate-y-2 ${
                  isDark
                    ? 'bg-black text-white shadow-2xl'
                    : 'bg-white text-neutral-900 shadow-[0_20px_45px_rgba(0,0,0,0.04)] border border-neutral-100/90'
                }`}
              >
                {!isBottom ? (
                  <>
                    <div className="pt-1">
                      <span className="font-heading text-4xl sm:text-5xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold tracking-tight leading-none">
                        {item.number}
                      </span>
                    </div>
                    <div className="text-right pb-1">
                      <span className="text-xs sm:text-sm xl:text-base 2xl:text-lg font-medium tracking-wide text-neutral-500">
                        {item.label}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-right pt-1">
                      <span className="text-xs sm:text-sm xl:text-base 2xl:text-lg font-medium tracking-wide text-neutral-400">
                        {item.label}
                      </span>
                    </div>
                    <div className="pb-1">
                      <span className="font-heading text-4xl sm:text-5xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold tracking-tight text-white leading-none">
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