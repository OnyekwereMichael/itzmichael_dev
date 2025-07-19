import Hero from './sections/Hero'
import NavBar from './components/Navbar'
import ProjectSection from './sections/ProjectSection'
import FeatureCards from './sections/FeatureCards'
import Experience from './sections/Experience'
import TechStack from './sections/TechStack'
import Testimonials from './sections/Testimonals'
import Contact from './sections/Contact'
import { Toaster } from 'react-hot-toast'
import Footer from './sections/Footer'
import Spinner from './components/Spinner';
import { useState, useEffect } from 'react';
import favicon from '/src/assets/public/images/Favicon.png'

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden">
        
          <Spinner />
        {/* </div> */}
      </div>
    );
  }

  return (
    <>
     <Toaster  />
    <NavBar />
      <Hero />
      <ProjectSection />
      {/* <LogoShowcase /> */}
      <FeatureCards />
      <Experience />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
