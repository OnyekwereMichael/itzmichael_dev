import { useGSAP } from "@gsap/react";
import gsap from "gsap";


import { techStackIcons, techStackImgs } from "../constants";
import TitleHeader from "./TitleHeader";
import TechIcon from "../components/TechLogos/TechIcon";
// import { techStackImgs } from "../constants";

const TechStack = () => {
    useGSAP(() => {
        gsap.fromTo(
            ".tech-card",
            {
                // Initial values
                y: 50, // Move the cards down by 50px
                opacity: 0, // Set the opacity to 0
            },
            {
                // Final values
                y: 0, // Move the cards back to the top
                opacity: 1, // Set the opacity to 1
                duration: 1, // Duration of the animation
                ease: "power2.inOut", // Ease of the animation
                stagger: 0.2, // Stagger the animation by 0.2 seconds
                scrollTrigger: {
                    trigger: "#skills", // Trigger the animation when the user scrolls to the #skills wrapper
                    start: "top center", // Start the animation when the top of the wrapper is at the center of the screen
                },
            }
        );
    });

    return (
        <div id="skills" className="flex-center mt-24 max-sm:mt-10">
            <div className="w-full h-full md:pr-10 px-5">
                <TitleHeader
                    title="Tools & Technologies I Use"
                    sub="🤝 What I Bring to the Table"
                />
                <div className="tech-grid">

                    {techStackIcons.map((techStackIcon) => (
                        <div
                            key={techStackIcon.name}
                            className="card-border tech-card overflow-hidden group xl:rounded-lg rounded-lg"
                        >

                            <div className="tech-card-animated-bg" />
                            <div className="tech-card-content">

                                <div className="tech-icon-wrapper">
                                    <TechIcon model={techStackIcon} />
                                </div>

                                <div className="padding-x w-full">
                                    {/* The p tag contains the name of the tech stack icon. */}
                                    {/* <p>{techStackIcon.name}</p> */}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* This is for the img part */}
                    {techStackImgs.map((techStackIcon, index) => (
                        <div
                            key={index}
                            className="card-border tech-card overflow-hidden group xl:rounded-lg rounded-lg"
                        >
                            <div className="tech-card-animated-bg" />
                            <div className="tech-card-content">
                                <div className="tech-icon-wrapper">
                                    <img src={techStackIcon.imgPath} alt="" />
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;