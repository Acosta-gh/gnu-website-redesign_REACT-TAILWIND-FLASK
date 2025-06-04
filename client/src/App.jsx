import Layout from './components/Layout';
import { useTranslation } from 'react-i18next';
import { Fade, Slide } from "react-awesome-reveal";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Layout>
        <section className='bg-[var(--primary-color)] block p-4 relative h-lvh overflow-hidden'>
          <h1 className='absolute top-81 left-1/2 text-center transform -translate-x-1/2 text-white font-semibold text-7xl z-20 text-shadow-lg sm:top-95 md:top-90 lg:text-9xl lg:top-85'>
            {t('whatIsGNU')}
          </h1>

          <div className='relative'>
            <Slide direction="right" cascade triggerOnce duration={500}>
              <div className="relative w-full max-w-xl mx-auto z-10 top-20 left-[20%] sm:top-5 sm:left-[15%] lg:max-w-5xl lg:left-[38%] lg:top-20">
                {/* Imagen  Trisquel*/}
                <div className="relative">
                  <img
                    src='trisquel.jpg'
                    alt='Trisquel'
                    className='h-auto opacity-45 block filter grayscale sm:w-[47rem] lg:w-[50rem]'
                  />
                </div>

                {/* Gradiente inferior */}
                <div
                  className="pointer-events-none absolute left-0 right-0 bottom-0 h-1/3"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, var(--primary-color) 100%)'
                  }}
                />
              </div>
              <div className="relative w-full max-w-xl mx-auto z-10 top-10 bottom-3 left-[76%] sm:top-0 sm:left-[75%] lg:max-w-5xl lg:left-[65%] lg:top-10">
                {/* Imagen  Meditate*/}
                <div className="relative">
                  <img
                    src='meditate.jpg'
                    alt='Meditate'
                    className='w-[8rem] h-auto opacity-35 block filter grayscale lg:w-[14rem]'
                  />
                </div>

                {/* Gradiente inferior */}
                <div
                  className="pointer-events-none absolute left-0 right-0 bottom-0 h-1/3"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, var(--primary-color) 100%)'
                  }}
                />
              </div>
            </Slide>
          </div>

          <div className='relative'>
            <Slide direction="left" cascade triggerOnce duration={500} delay={400}>
              <div className="relative w-full max-w-xl mx-auto z-10 top-35 right-[10%] sm:top-23 lg:right-[27rem] lg:max-w-5xl lg:top-0 lg:translate-y-[-10rem]">
                {/* Imagen  Pureos*/}
                <div className="relative">
                  <img
                    src='pureos.jpg'
                    alt='pureos'
                    className='h-auto opacity-35 block filter grayscale lg:w-[40rem]'
                  />
                </div>

                {/* Gradiente inferior */}
                <div
                  className="pointer-events-none absolute left-0 right-0 bottom-0 h-1/3"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, var(--primary-color) 100%)'
                  }}
                />
              </div>
              <div className=" relative w-full max-w-xl mx-auto z-10 top-30 left-3 sm:top-13 lg:max-w-5xl lg:top-0 lg:left-[13rem] lg:translate-y-[-17rem]">
                {/* Imagen  gnu-head*/}
                <div className="relative">
                  <img
                    src='gnu-head.png'
                    alt='gnu-head'
                    className='w-[6rem] h-auto opacity-35 block filter grayscale lg:w-[10rem]'
                  />
                </div>

                {/* Gradiente inferior */}
                <div
                  className="pointer-events-none absolute left-0 right-0 bottom-0 h-1/3"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, var(--primary-color) 100%)'
                  }}
                />
              </div>
            </Slide>
            <Slide direction="right"  triggerOnce duration={500} delay={420}>
              <div className="relative w-full max-w-xl mx-auto z-10 top-23 left-[81%] sm:hidden lg:block lg:max-w-5xl lg:top-0 lg:left-[50rem] lg:translate-y-[-25rem]">
                {/* Imagen  gnu-40-years*/}
                <div className="relative">
                  <img
                    src='GNU40_badge.svg'
                    alt='GNU40_badge'
                    className='w-[5rem] h-auto opacity-35 block filter grayscale lg:w-[6rem]'
                  />
                </div>

                {/* Gradiente inferior */}
                <div
                  className="pointer-events-none absolute left-0 right-0 bottom-0 h-1/3"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, var(--primary-color) 100%)'
                  }}
                />
              </div>
            </Slide>
          </div>
        </section>
      </Layout >
    </>
  )
}

export default App
