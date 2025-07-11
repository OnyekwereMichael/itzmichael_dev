import bg from '../assets/public/images/bg.png'
import AnimatedCounter from '../components/AnimatedCounter'
import Button from '../components/Buttons'
import HeroImg from '../components/HeroModels/HeroImg'
import { words } from '../constants'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'



const Hero = () => {
  useGSAP(() => {
    gsap.fromTo('.hero-text h1', { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'power2.inout' }); 
  })
  return (
    <section id='hero' className='relative overflow-hidden min-h-screen flex items-center justify-center flex-wrap '>
      {/* Enhanced Background */}
      <div className='absolute top-0 left-0 w-full h-full z-0'>
        <img src={bg} alt='Background' className='w-full h-full object-cover' />
        <div className='absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40'></div>
        <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent'></div>
      </div>

      {/* Main Content Container */}
      <div className='relative z-10 w-full   px-5 md:px-5 lg:px-6 py-20 mb-40 max-sm:mb-0 max-sm:py-0 max-sm:pt-20'>
        <div className='grid grid-cols-1 lg:grid-cols-12  items-center'>
          
          {/* Left: Text Content */}
          <div className='lg:col-span-6 flex flex-col space-y-8'>
            {/* Professional Badge */}
            <div className='inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 w-fit mt-5'>
              <div className='w-2 h-2 bg-emerald-400 rounded-full animate-pulse'></div>
              <span className='text-white/90 text-sm font-medium'>Available for new projects</span>
            </div>

            {/* Main Heading */}
            <div className="hero-text space-y-3">
              <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight text-white'>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="icon"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white/50 backdrop-blur-sm border border-white/20"
                        />
                        <span className='text-emerald-400 font-semibold'>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight text-white'>
                into Real Projects
              </h1>
              <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight text-white'>
                that Deliver Results
              </h1>
            </div>

            {/* Description */}
            <p className="text-white/80 md:text-lg lg:text-xl leading-relaxed max-w-2xl">
              Hi, I'm Michael — a software developer based in Nigeria, passionate about building impactful digital experiences through code.
            </p>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 max-sm:space-y-2'>
              <Button
                text="See My Work"
                className="md:w-64 md:h-14 w-full h-12"
                id="counter" 
              />
              <a 
                href="#contact" 
                className="flex items-center justify-center md:w-64 md:h-14 w-full h-14 px-6 border border-white/20 rounded-xl text-white/80 hover:text-white hover:border-white/40 transition-all duration-300 backdrop-blur-sm bg-white/5"
              >
                <span className="font-medium">Get in Touch</span>
              </a>
            </div>

            
          </div>

          {/* Right: Profile Image */}
          <div className='lg:col-span-6 flex justify-center lg:justify-end mr-10 max-sm:mr-0 max-sm:mt-6'>
            <div className='relative w-full h-full md:w-full md:h-full'>
              {/* Profile Image Container */}
              <div className='relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 bg-black/30'>
                <img 
                  src={'/src/assets/public/images/Michaell.jpg'} 
                  alt="Michael - Software Developer" 
                  className="w-full h-full object-cover"
                />
                {/* Professional overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent'></div>
              </div>
              
              {/* Floating tech badges with enhanced styling */}
              {/* <div className='absolute top-8 -right-6 bg-white/15 backdrop-blur-md border border-white/30 rounded-xl p-3 shadow-lg hover:scale-110 transition-all duration-300'>
                <img src="/src/assets/public/images/logos/react.png" alt="React" className="w-8 h-8" />
              </div>
              <div className='absolute bottom-8 -left-6 bg-white/15 backdrop-blur-md border border-white/30 rounded-xl p-3 shadow-lg hover:scale-110 transition-all duration-300'>
                <img src="/src/assets/public/images/logos/python.svg" alt="Python" className="w-8 h-8" />
              </div>
              <div className='absolute -top-6 -right-6 bg-white/15 backdrop-blur-md border border-white/30 rounded-xl p-3 shadow-lg hover:scale-110 transition-all duration-300'>
                <img src="/src/assets/public/images/logos/node.png" alt="Node.js" className="w-8 h-8" />
              </div>
              <div className='absolute -bottom-6 -left-6 bg-white/15 backdrop-blur-md border border-white/30 rounded-xl p-3 shadow-lg hover:scale-110 transition-all duration-300'>
                <img src="/src/assets/public/images/logos/git.svg" alt="Git" className="w-8 h-8" />
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Animated counter at bottom */}
      <div className='xl:absolute lg:absolute bottom-0 left-0 right-0 z-20 max-sm:bottom-0 max-sm:left-0 max-sm:right-0 max-sm:w-full'>
        <AnimatedCounter />
      </div>
    </section>
  )
}

export default Hero

