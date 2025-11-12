import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import project1 from "../assets/public/images/ven.PNG";
import project2 from "/src/assets/public/images/photo.PNG";
import project3 from "../assets/public/images/GIFTY.PNG";
// Add your new projects images
import project5 from "../assets/public/images/react_i.PNG";
import project6 from "../assets/public/images/white.PNG";
import project7 from '../assets/public/images/Gidi1.PNG'

import { BsArrowUpRight } from "react-icons/bs";


gsap.registerPlugin(ScrollTrigger);

const ProjectSection = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);
  const [showMore, setShowMore] = useState(false);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
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
        <div className="showcaselayout  cursor-pointer">
          {/* Project 1 */}
          <div ref={rydeRef} className="first-project-wrapper ">
            <a href="http://tryvendorsapp.com/" className="max-sm:mt-8">
              <div className="image-wrapper relative">
                <img src={project1} alt="Vendors App" />
                <a
      href="http://tryvendorsapp.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-0 right-0 w-8 h-8   /* mobile default */
          sm:top-10 sm:right-2 sm:w-10 sm:h-10  /* desktop */ flex items-center justify-center rounded-full bg-black/70 backdrop-blur-sm border border-white/20 text-white hover:bg-black/90 transition-all duration-300"
    >
      <BsArrowUpRight className="w-3 h-3 sm:w-5 sm:h-5"/>
    </a>
              </div>
              <div className="text-content max-sm:mt-4">
                <h2 className="leading-14 max-sm:leading-10 max-sm:mt-1">
                  Vendors App, a product built for vendors to manage their
                  business
                </h2>
                <p className="text-white-50 md:text-xl leading-8">
                  An app built with Nextjs, Typescript, and TailwindCSS for a
                  fast, user-friendly experience.
                </p>
              </div>
            </a>
          </div>

          {/* Project 2 */}
          <div ref={libraryRef} className="first-project-wrapper">
            <a href="https://www.whitelistproperties.com">
              <div className="image-wrapper relative">
                <img src={project6} alt="Whitelist App " />
                <a
      href="https://www.whitelistproperties.com"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-0 right-0 w-8 h-8    /* mobile default */
          sm:top-10 sm:right-2 sm:w-10 sm:h-10  /* desktop */ flex items-center justify-center rounded-full bg-black/70 backdrop-blur-sm border border-white/20 text-white hover:bg-black/90 transition-all duration-300"
    >
      <BsArrowUpRight className="w-3 h-3 sm:w-5 sm:h-5" />
    </a>
              </div>
              <div className="text-content max-sm:mt-4">
                <h2 className="leading-14 max-sm:leading-10">
                  Whitelist, An App that connects property owners with tenants
                </h2>
                <p className="text-white-50 md:text-xl leading-8">
                  An app built with Nextjs, Typescript, and Material UI for a
                  fast, user-friendly experience.
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="showcaselayout max-sm:mt-0 mt-5 cursor-pointer">
          {/* Project 3 */}
          
          <div className="first-project-wrapper rounded-[10px]">
            <a href="https://www.gidipitch.app/" className="max-sm:mt-8">
              <div className="image-wrapper relative">
                <img src={project7} alt="Twit_Flash" />
                <a
      href="https://react-secure-inputs-guide.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-0 right-0 w-8 h-8   /* mobile default */
          sm:top-10 sm:right-2 sm:w-10 sm:h-10  /* desktop */ flex items-center justify-center rounded-full bg-black/70 backdrop-blur-sm border border-white/20 text-white hover:bg-black/90 transition-all duration-300"
    >
      <BsArrowUpRight className="w-3 h-3 sm:w-5 sm:h-5" />
    </a>
              </div>
              <div className="text-content max-sm:mt-4">
                <h2 className="leading-14 max-sm:leading-10">
                   GidiPitch – Helping founders craft decks that get investors’ attention.
                </h2>
                <p className="text-white-50 md:text-xl leading-8">
                  An app built with Reactjs, Typescript and
                  TailwindCSS.
                </p>
              </div>
            </a>
          </div>
         

          {/* Project 4 */}

          <div className="first-project-wrapper rounded-[10px]">
            <a href="https://react-secure-inputs-guide.vercel.app/" className="max-sm:mt-8">
              <div className="image-wrapper relative">
                <img src={project5} alt="Twit_Flash" />
                <a
      href="https://react-secure-inputs-guide.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-0 right-0 w-8 h-8   /* mobile default */
          sm:top-10 sm:right-2 sm:w-10 sm:h-10  /* desktop */ flex items-center justify-center rounded-full bg-black/70 backdrop-blur-sm border border-white/20 text-white hover:bg-black/90 transition-all duration-300"
    >
      <BsArrowUpRight className="w-3 h-3 sm:w-5 sm:h-5" />
    </a>
              </div>
              <div className="text-content max-sm:mt-4">
                <h2 className="leading-14 max-sm:leading-10">
                React Secure Input – Custom input fields made easy.
                </h2>
                <p className="text-white-50 md:text-xl leading-8">
                  An app built with Reactjs, Typescript and
                  TailwindCSS.
                </p>
              </div>
            </a>
          </div>

        </div>

        {/* ✅ Extra projects - hidden until View More is clicked */}
        {showMore && (
          <div className="showcaselayout mt-5 cursor-pointer">
          


           <div className="first-project-wrapper rounded-[10px]">
            <a href="https://twit-flash-q7bo.vercel.app/signin">
              <div className="image-wrapper relative">
                <img src={project3} alt="Twit_Flash" />
                <a
      href="https://twit-flash-q7bo.vercel.app/signin"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-0 right-0 w-8 h-8   /* mobile default */
          sm:top-10 sm:right-2 sm:w-10 sm:h-10  /* desktop */ flex items-center justify-center rounded-full bg-black/70 backdrop-blur-sm border border-white/20 text-white hover:bg-black/90 transition-all duration-300"
    >
      <BsArrowUpRight className="w-3 h-3 sm:w-5 sm:h-5" />
    </a>
              </div>
              <div className="text-content max-sm:mt-4">
                <h2 className="leading-14 max-sm:leading-10">
                  Twit_Flash – A social app to share and connect with your
                  friends.
                </h2>
                <p className="text-white-50 md:text-xl leading-8">
                  An app built with Nextjs, Nodejs, Typescript, Mongodb and
                  TailwindCSS.
                </p>
              </div>
            </a>
          </div>


<div ref={ycDirectoryRef} className="first-project-wrapper rounded-[10px]">
            <a href="https://xclux-ecommerce-8pc8.vercel.app/home">
              <div className="image-wrapper relative">
                <img src={project2} alt="Xclux Ecommerce" />
                <a
      href="https://xclux-ecommerce-8pc8.vercel.app/home"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-0 right-0 w-8 h-8    /* mobile default */
          sm:top-10 sm:right-2 sm:w-10 sm:h-10  /* desktop */ flex items-center justify-center rounded-full bg-black/70 backdrop-blur-sm border border-white/20 text-white hover:bg-black/90 transition-all duration-300"
    >
      <BsArrowUpRight className="w-3 h-3 sm:w-5 sm:h-5" />
    </a>
              </div>
              <div className="text-content max-sm:mt-4">
                <h2 className="leading-14 max-sm:leading-10">
                  Xclux, an Ecommerce app that makes shopping easy.
                </h2>
                <p className="text-white-50 md:text-xl leading-8">
                  An app built with Reactjs, Typescript, and TailwindCSS for a
                  fast, user-friendly experience.
                </p>
              </div>
            </a>
          </div>

          </div>
        )}


        {/* View More / View Less Button */}
        <div className="flex justify-center mt-6 max-sm:mb-8">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-6 py-2 border border-white/20 rounded-lg text-white/80 hover:text-white hover:border-white/40 transition-all duration-300 bg-white/5"
          >
            {showMore ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
