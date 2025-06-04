import Layout from './components/Layout';
import { useTranslation } from 'react-i18next';
import { Fade, Slide } from "react-awesome-reveal";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Layout>
        <section className='bg-[var(--primary-color)] block p-4 relative min-h-screen overflow-x-hidden'>
          <h1 className='absolute top-70 left-1/2 text-center transform -translate-x-1/2 text-white font-semibold text-7xl z-20 text-shadow-lg'>
            {t('whatIsGNU')}
          </h1>

          <div className='relative bottom-0'>
            <Slide direction="right" cascade triggerOnce duration={500}>

              <div className="relative w-full max-w-xl mx-auto mt-8 z-10 top-13 left-[20%]">
                {/* Imagen  Trisquel*/}
                <div className="relative">
                  <img
                    src='trisquel.jpg'
                    alt='Trisquel'
                    className='w-100 h-auto opacity-45 block filter grayscale'
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
              <div className="relative w-full max-w-xl mx-auto mt-8 z-10 bottom-3 left-[80%]">
                {/* Imagen  Meditate*/}
                <div className="relative">
                  <img
                    src='meditate.jpg'
                    alt='Meditate'
                    className='w-30 h-auto opacity-35 block filter grayscale'
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

          <div className='relative top-15'>
            <Slide direction="left" cascade triggerOnce duration={500} delay={400}>
              <div className="relative w-full max-w-xl mx-auto mt-8 z-10 bottom-25 right-[10%]">
                {/* Imagen  Pureos*/}
                <div className="relative">
                  <img
                    src='pureos.jpg'
                    alt='pureos'
                    className='w-60 h-auto opacity-35 block filter grayscale'
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
              <div className="relative w-full max-w-xl mx-auto mt-8 z-10 bottom-35 left-3">
                {/* Imagen  gnu-head*/}
                <div className="relative">
                  <img
                    src='gnu-head.png'
                    alt='gnu-head'
                    className='w-20 h-auto opacity-35 block filter grayscale'
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
            <Slide direction="right" cascade triggerOnce duration={500} delay={400}>
              <div className="relative w-full max-w-xl mx-auto mt-8 z-10 bottom-50 left-[60%]">
                {/* Imagen  gnu-40-years*/}
                <div className="relative">
                  <img
                    src='GNU40_badge.svg'
                    alt='GNU40_badge'
                    className='w-50 h-auto opacity-35 block filter grayscale'
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
