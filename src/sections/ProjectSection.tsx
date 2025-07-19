import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import project1 from '../assets/public/images/auto-brand1.png'
import project2 from '../assets/public/images/project2.png'
import project3 from '../assets/public/images/project3.png'


gsap.registerPlugin(ScrollTrigger);

const ProjectSection = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        {/* <TitleHeader title="" sub="💼 Projects I've Done" /> */}
        <div className="showcaselayout max-sm:mt-5 cursor-pointer">
          <div ref={rydeRef} className="first-project-wrapper">
          <a href='https://auto-brand-craft-lab.vercel.app/banner-creator'>
            <div className="image-wrapper">
              <img src={project1} alt="Ryde App Interface" className=""/>
            </div>
            <div className="text-content">
              <h2 className="leading-12">
                Get Intervue-Ready with AI-Powered Practice & Feedback
              </h2>

              <div className="flex flex-wrap gap-2 text-sm text-white-50">
                <span className="bg-[#2D2D2D] px-3 py-1 rounded-full">React Native</span>
                <span className="bg-[#2D2D2D] px-3 py-1 rounded-full">Expo</span>
                <span className="bg-[#2D2D2D] px-3 py-1 rounded-full">TailwindCSS</span>
                <span className="bg-[#2D2D2D] px-3 py-1 rounded-full">OpenAI API</span>
                <span className="bg-[#2D2D2D] px-3 py-1 rounded-full">TypeScript</span>
              </div>
              <p className="text-white-50 md:text-xl">
                An app built with React Native, Expo, & TailwindCSS for a fast,
                user-friendly experience.
              </p>
            </div>


          </a>
          </div>

          <div className="project-list-wrapper overflow-hidden">
          <a href='https://xclux-ecommerce-8pc8.vercel.app/home'>
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src={project2}
                  alt="Library Management Platform"
                />
              </div>
              <h2>A Modern Social Media Application</h2>

              <div className="flex flex-wrap gap-2 text-sm text-white-50 mt-3">
                <span className="bg-[#2D2D2D] px-3 py-1 rounded-full">React Native</span>
                <span className="bg-[#2D2D2D] px-3 py-1 rounded-full">Expo</span>
                <span className="bg-[#2D2D2D] px-3 py-1 rounded-full">TailwindCSS</span>
                <span className="bg-[#2D2D2D] px-3 py-1 rounded-full">OpenAI API</span>
                <span className="bg-[#2D2D2D] px-3 py-1 rounded-full">TypeScript</span>
              </div>
            </div>
            </a>
            <a href='https://xclux-ecommerce-8pc8.vercel.app/home'>
            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src={project3} alt="YC Directory App" />
              </div>
              <h2>YC Directory - A Startup Showcase App</h2>
              <div className="flex flex-wrap gap-2 text-sm text-white-50 mt-3">
                <span className="bg-[#2D2D2D] px-3 py-1 rounded-full">React Native</span>
                <span className="bg-[#2D2D2D] px-3 py-1 rounded-full">Expo</span>
                <span className="bg-[#2D2D2D] px-3 py-1 rounded-full">TailwindCSS</span>
                <span className="bg-[#2D2D2D] px-3 py-1 rounded-full">OpenAI API</span>
                <span className="bg-[#2D2D2D] px-3 py-1 rounded-full">TypeScript</span>
              </div>
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;