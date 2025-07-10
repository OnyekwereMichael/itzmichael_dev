import { useGSAP } from "@gsap/react";
import { logoIconsList } from "../constants";
import { gsap } from "gsap";
import TitleHeader from "./TitleHeader";

const LogoIcon = ({ icon }: { icon: any }) => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-icon",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: "power2.inout",
      }
    );
  });

  return (
    <div className="tech-icon group flex flex-col items-center justify-center p-3 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl border border-white/10 hover:border-white/30 rounded-xl ">
      <img
        src={icon.imgPath}
        alt={icon.name}
        className="w-[40px] h-[40px] object-contain"
      />
      <p className="text-xs mt-2 text-white/80 group-hover:text-white transition-colors">{icon.name}</p>
    </div>
  );
};

const LogoShowcase = () => (
  <div className="relative md:my-1 my-10 px-4 md:px-6">
    <TitleHeader title="" sub="💼 My Tech Stack" />

    {/* Border Glow */}


    {/* Marquee Box */}
    <div className="marquee h-40 ">
      <div className="marquee-box flex gap-8 md:gap-12">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={`logo-a-${index}`} icon={icon} />
        ))}
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={`logo-b-${index}`} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;
