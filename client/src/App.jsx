import Layout from './components/Layout';
import { useTranslation } from 'react-i18next';

import HeroSection from './components/HeroSection/HeroSection'


function App() {
  const { t } = useTranslation();

  return (
    <>
      <Layout>
        <HeroSection></HeroSection>
      </Layout >
    </>
  )
}

export default App
