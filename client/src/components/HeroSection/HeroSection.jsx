import React from 'react';
import { useTranslation } from 'react-i18next';
import { Slide } from "react-awesome-reveal";
import GradientImage from './GradientImage';

function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className='bg-[var(--primary-color)] block p-4 relative h-lvh overflow-hidden'>
      <h1 className='absolute top-81 left-1/2 text-center transform -translate-x-1/2 text-white font-semibold text-7xl z-20 text-shadow-lg sm:top-95 md:top-90 lg:text-9xl lg:top-85'>
        {t('whatIsGNU')}
      </h1>

      <div className='relative'>
        <Slide direction="right" cascade triggerOnce duration={500}>
          <GradientImage
            src='trisquel.jpg'
            alt='Trisquel'
            containerClass='w-full max-w-xl mx-auto z-10 top-20 left-[20%] sm:top-5 sm:left-[15%] lg:max-w-5xl lg:left-[38%] lg:top-20'
            imageClass='h-auto opacity-45 sm:w-[47rem] lg:w-[50rem]'
          />

          <GradientImage
            src='meditate.jpg'
            alt='Meditate'
            containerClass='w-full max-w-xl mx-auto z-10 top-10 bottom-3 left-[76%] sm:top-0 sm:left-[75%] lg:max-w-5xl lg:left-[65%] lg:top-10'
            imageClass='w-[8rem] h-auto lg:w-[14rem]'
          />
        </Slide>
      </div>

      <div className='relative'>
        <Slide direction="left" cascade triggerOnce duration={500} delay={400}>
          <GradientImage
            src='pureos.jpg'
            alt='pureos'
            containerClass='w-full max-w-xl mx-auto z-10 top-35 right-[10%] sm:top-23 lg:right-[27rem] lg:max-w-5xl lg:top-0 lg:translate-y-[-10rem]'
            imageClass='h-auto lg:w-[40rem]'
          />

          <GradientImage
            src='gnu-head.png'
            alt='gnu-head'
            containerClass='w-full max-w-xl mx-auto z-10 top-30 left-3 sm:top-13 lg:max-w-5xl lg:top-0 lg:left-[13rem] lg:translate-y-[-17rem]'
            imageClass='w-[6rem] h-auto lg:w-[10rem]'
          />
        </Slide>

        <Slide direction="right" triggerOnce duration={500} delay={420}>
          <GradientImage
            src='GNU40_badge.svg'
            alt='GNU40_badge'
            containerClass='w-full max-w-xl mx-auto z-10 top-23 left-[81%] sm:hidden lg:block lg:max-w-5xl lg:top-0 lg:left-[50rem] lg:translate-y-[-25rem]'
            imageClass='w-[5rem] h-auto lg:w-[6rem]'
          />
        </Slide>
      </div>
    </section>
  );
}

export default HeroSection;
