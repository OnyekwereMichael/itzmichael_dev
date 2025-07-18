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
        {/* Big Spinner Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="w-38 h-38 border-8 border-t-transparent border-emerald-400 rounded-full animate-spin" />
        </div>
        {/* Loader Content */}
        <div className="relative z-10 flex flex-col items-center mt-10">
          <img src={favicon} alt="Logo" className="w-14 h-14 mb-6 " />
          {/* <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 animate-fade-in text-center">Welcome to Michael's Portfolio</h1> */}
          <Spinner />
        </div>
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
