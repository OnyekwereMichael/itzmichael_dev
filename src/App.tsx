import Hero from './sections/Hero'
import NavBar from './components/Navbar'
import ProjectSection from './sections/ProjectSection'
import LogoShowcase from './sections/LogoShowcase'
import FeatureCards from './sections/FeatureCards'
import Experience from './sections/Experience'
import TechStack from './sections/TechStack'
import Testimonials from './sections/Testimonals'
import Contact from './sections/Contact'
import { Toaster } from 'react-hot-toast'
import Footer from './sections/Footer'

const App = () => {
  return (
    <>
     <Toaster  />
    <NavBar />
      <Hero />
      <ProjectSection />
      <LogoShowcase />
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
