import React from 'react';
import { useTranslation } from 'react-i18next';
import { Slide } from "react-awesome-reveal";
import GradientImage from './GradientImage';

function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className='bg-[var(--primary-color)] block p-4 relative h-lvh overflow-hidden'>
      <h1 className='absolute top-81 left-1/2 text-center transform -translate-x-1/2 text-white font-semibold text-7xl z-20 text-shadow-lg sm:top-95 md:top-90 lg:text-8xl lg:top-[36%] 2xl:text-9xl 2xl:top-[38%]'>
        {t('whatIsGNU')}
      </h1>

      <div className='relative'>
        <Slide direction="right" cascade triggerOnce duration={500}>
          <GradientImage
            src='trisquel.jpg'
            alt='Trisquel'
            containerClass='w-full max-w-xl mx-auto z-10 top-20 left-[20%] sm:top-5 sm:left-[15%] lg:max-w-3xl lg:left-[36%] lg:top-17 2xl:max-w-5xl 2xl:left-[38%] 2xl:top-20'
            imageClass='h-auto opacity-45 sm:w-[47rem] lg:w-[44rem] 2xl:w-[50rem]'
          />

          <GradientImage
            src='meditate.jpg'
            alt='Meditate'
            containerClass='w-full max-w-xl mx-auto z-10 top-10 bottom-3 left-[76%] sm:top-0 sm:left-[75%] lg:max-w-3xl lg:left-[67%] 2xl:max-w-5xl 2xl:left-[65%] 2xl:top-10'
            imageClass='w-[8rem] h-auto 2xl:w-[14rem]'
          />
        </Slide>
      </div>

      <div className='relative'>
        <Slide direction="left" cascade triggerOnce duration={500} delay={400}>
          <GradientImage
            src='pureos.jpg'
            alt='pureos'
            containerClass='w-full max-w-xl mx-auto z-10 top-35 right-[10%] sm:top-23 lg:top-0 lg:translate-y-[-10rem] lg:max-w-5xl lg:right-[19rem] 2xl:right-[27rem] 2xl:max-w-5xl 2xl:top-0 2xl:translate-y-[-10rem]'
            imageClass='h-auto 2xl:w-[40rem]'
          />

          <GradientImage
            src='gnu-head.png'
            alt='gnu-head'
            containerClass='w-full max-w-xl mx-auto z-10 top-30 left-3 sm:top-13 lg:max-w-[6rem] lg:translate-y-[-27rem] lg:left-[-6rem] 2xl:max-w-5xl 2xl:top-0 2xl:left-[13rem] 2xl:translate-y-[-17rem]'
            imageClass='w-[6rem] lg:w-full h-auto 2xl:w-[10rem]'
          />
        </Slide>

        <Slide direction="right" triggerOnce duration={500} delay={420}>
          <GradientImage
            src='GNU40_badge.svg'
            alt='GNU40_badge'
            containerClass='w-full max-w-xl mx-auto z-10 top-23 left-[81%] sm:hidden 2xl:block 2xl:max-w-5xl 2xl:top-0 2xl:left-[50rem] 2xl:translate-y-[-25rem]'
            imageClass='w-[5rem] h-auto 2xl:w-[6rem]'
          />
        </Slide>
      </div>
    </section>
  );
}

export default HeroSection;
