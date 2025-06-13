import Layout from './components/Layout';
import { useTranslation, Trans } from 'react-i18next';
import { Slide, Fade } from 'react-awesome-reveal';
import GradientImage from './components/UI/GradientImage';
import { Link } from 'react-router-dom';
import Button from './components/UI/Button';
import Slideshow from './components/UI/Slideshow';

function App() {
  const { t } = useTranslation();
  const freedoms = t('freeSoftware.freedoms', { returnObjects: true });
  const slidesTexts = t('slidesTexts', { returnObjects: true });

  const images = [
    "/images/distros/dragora.jpg",
    "/images/distros/guix.jpg",
    "/images/distros/hyperbola.png",
    "/images/distros/parabola.jpg",
    "/images/distros/pureos.jpg",
    "/images/distros/t10.jpg"
  ];

  const slidesDistros = images.map((image, i) =>
  (
    {
      image: image,
      text: slidesTexts[i]
    }
  ));

  return (
    <>
      <Layout>
        {/* Sección Principal */}
        <section className='bg-[var(--primary-color)] block p-4 relative h-lvh overflow-hidden'>
          <h1 className='absolute top-81 left-1/2 text-center transform -translate-x-1/2 text-white font-semibold text-7xl z-20 text-shadow-lg sm:top-95 md:top-90 lg:text-8xl lg:top-[36%] 2xl:text-9xl 2xl:top-[38%]'>
            {t('whatIsGNU.title')}
          </h1>

          <div className='relative'>
            <Slide direction="right" cascade triggerOnce duration={500}>
              <GradientImage
                src='/images/trisquel.jpg'
                alt='Trisquel'
                containerClass='w-full max-w-xl mx-auto z-10 top-20 left-[20%] sm:top-5 sm:left-[15%] lg:max-w-3xl lg:left-[36%] lg:top-17 2xl:max-w-5xl 2xl:left-[38%] 2xl:top-20'
                imageClass='h-auto opacity-45 sm:w-[47rem] lg:w-[44rem] 2xl:w-[50rem]'
              />

              <GradientImage
                src='/images/meditate.jpg'
                alt='Meditate'
                containerClass='w-full max-w-xl mx-auto z-10 top-10 bottom-3 left-[76%] sm:top-0 sm:left-[75%] lg:max-w-3xl lg:left-[67%] 2xl:max-w-5xl 2xl:left-[65%] 2xl:top-10'
                imageClass='w-[8rem] h-auto 2xl:w-[14rem]'
              />
            </Slide>
          </div>

          <div className='relative'>
            <Slide direction="left" cascade triggerOnce duration={500} delay={400}>
              <GradientImage
                src='/images/pureos.jpg'
                alt='pureos'
                containerClass='w-full max-w-xl mx-auto z-10 top-35 right-[10%] sm:top-23 lg:top-0 lg:translate-y-[-10rem] lg:max-w-5xl lg:right-[19rem] 2xl:right-[27rem] 2xl:max-w-5xl 2xl:top-0 2xl:translate-y-[-10rem]'
                imageClass='h-auto 2xl:w-[40rem]'
              />

              <GradientImage
                src='/images/gnu-head.png'
                alt='gnu-head'
                containerClass='w-full max-w-xl mx-auto z-10 top-30 left-3 sm:top-13 lg:max-w-[6rem] lg:translate-y-[-27rem] lg:left-[-6rem] 2xl:max-w-5xl 2xl:top-0 2xl:left-[13rem] 2xl:translate-y-[-17rem]'
                imageClass='w-[6rem] lg:w-full h-auto 2xl:w-[10rem]'
              />
            </Slide>
          </div>
        </section>

        {/* Sección ¿Qué es GNU? */}
        <section className='p-5 pt-13 md:pl-[10%] md:pr-[10%]'>
          <div>
            <Trans
              i18nKey="whatIsGNU.text1"
              components={{
                url: <Link to="/philosophy" className="text-blue-800 underline" />
              }}
            />
          </div>
          <div>
            <Trans
              i18nKey="whatIsGNU.text2"
              components={{
                url: <Link to="/philosophy" className="text-blue-800 underline" />,
                url2: <a href="#" className="text-blue-800 underline" />
              }}
            />
          </div>

          <Button className="mt-5" text={t('whatIsGNU.buttonText')} bgColor="bg-[var(--primary-color)]" />
        </section>

        <Fade triggerOnce duration={800}>
          {/* Sección Distros */}
          <section className='p-5 pt-10 md:pl-[20%] md:pr-[20%] '>
            <Slideshow slides={slidesDistros} />
          </section>
        </Fade>
        <Fade triggerOnce duration={800}>

          {/* Sección Movimiento de Software Libre */}
          <section className='p-5 pt-13 md:pl-[10%] md:pr-[10%] '>
            <h2 className='font-bold text-4xl text-red-900 mb-10 flex justify-center items-center'>
              {t('freeSoftwareMovement.title')}
            </h2>
            <p>{t('freeSoftwareMovement.text')}</p>
          </section>
        </Fade>
        <Fade triggerOnce duration={800}>

          {/* Sección de Software Libre */}
          <section className='p-5 pt-13 md:pl-[10%] md:pr-[10%]'>
            <h2 className='font-bold text-4xl text-red-900 mb-10 flex justify-center items-center'>
              {t('freeSoftware.title')}
            </h2>
            <h3 className='font-bold my-2'>{t('freeSoftware.header')}</h3>
            <p>{t('freeSoftware.text')}</p>
            <ul className='list-disc ml-5 my-3'>
              {
                freedoms.map((freedom, i) => {
                  return <li key={i}>{freedom}</li>
                })
              }
            </ul>
          </section>
        </Fade>
        <Fade triggerOnce duration={800}>

          {/* Sección de que es GNU */}
          <section className='p-5 pt-13 md:pl-[10%] md:pr-[10%]  '>
            <h2 className='font-bold text-4xl text-red-900 mb-10 flex justify-center items-center'>
              {t('moreAboutGnu.title')}
            </h2>
            <p className='my-2'>{t('moreAboutGnu.text1')}</p>
            <p className='my-2'>{t('moreAboutGnu.text2')}</p>
            <p className='my-2'>{t('moreAboutGnu.text3')}</p>
            <Button className="mt-5" text={t('moreAboutGnu.buttonText')} bgColor="bg-[var(--primary-color)]" />
          </section>
        </Fade>
        <Fade triggerOnce duration={800}>
          {/*  */}
          <section className='p-5 pt-13 md:pl-[10%] md:pr-[10%]'>
            <blockquote>
              <i className='text-center text-gray-700 font-light'>
                “The Free Software Foundation (FSF) is a nonprofit with a worldwide mission to promote computer user freedom. We defend the rights of all software users.”
              </i>
            </blockquote>

            <div className='mt-5 flex flex-row justify-center gap-5'>
              <Button text="Join" bgColor="bg-[var(--primary-color)] cursor-pointer" />
              <Button text="Donate" bgColor="bg-blue-800 cursor-pointer" />
              <Button text="Shop" bgColor="bg-green-800 cursor-pointer" />
            </div>
          </section>
        </Fade>
      </Layout >
    </>
  );
}

export default App;
