import ideasImg from '/src/assets/public/images/ideas.svg';
import conceptsImg from '/src/assets/public/images/concepts.svg';
import designsImg from '/src/assets/public/images/designs.svg';
import codeImg from '/src/assets/public/images/code.svg';

import companyLogo1 from '/src/assets/public/images/logos/company-logo-1.png';
import companyLogo2 from '/src/assets/public/images/logos/company-logo-2.png';
import companyLogo3 from '/src/assets/public/images/logos/company-logo-3.png';
import companyLogo4 from '/src/assets/public/images/logos/company-logo-4.png';
import companyLogo5 from '/src/assets/public/images/logos/company-logo-5.png';
import companyLogo6 from '/src/assets/public/images/logos/company-logo-6.png';
import companyLogo7 from '/src/assets/public/images/logos/company-logo-7.png';
import companyLogo8 from '/src/assets/public/images/logos/company-logo-8.png';

import seoImg from '/src/assets/public/images/seo.png';
import chatImg from '/src/assets/public/images/chat.png';
import timeImg from '/src/assets/public/images/time.png';



import logo1Img from '/src/assets/public/images/logo1.png';
import logo2Img from '/src/assets/public/images/logo2.png';
import logo3Img from '/src/assets/public/images/logo3.png';

import client1 from '/src/assets/public/images/client1.png';
import client2 from '/src/assets/public/images/client2.png';
import client3 from '/src/assets/public/images/client3.png';
import client4 from '/src/assets/public/images/client4.png';
import client5 from '/src/assets/public/images/client5.png';
import client6 from '/src/assets/public/images/client6.png';

import instaImg from '/src/assets/public/images/insta.png';
import fbImg from '/src/assets/public/images/fb.png';
import xImg from '/src/assets/public/images/x.png';
import linkedinImg from '/src/assets/public/images/linkedin.png';

import KainoTech from '/src/assets/public/images/KAINOTech.png'
import Kaino_k from '/src/assets/public/images/KAINO_K.png'
import Vendors_app from '/src/assets/public/images/vendors.webp'
import V from '/src/assets/public/images/v.png'
import Gentori from '/src/assets/public/images/Gentori.png'





const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: ideasImg },
  { text: "Thoughts", imgPath: conceptsImg },
  { text: "Designs", imgPath: designsImg },
  { text: "Code", imgPath: codeImg },
  { text: "Ideas", imgPath: ideasImg },
  { text: "Concepts", imgPath: conceptsImg },
  { text: "Designs", imgPath: designsImg },
  { text: "Code", imgPath: codeImg },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Satisfied Clients" },
  { value: 30, suffix: "+", label: "Completed Projects" },
  { value: 5, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  { imgPath: "https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" },
  { imgPath: "https://www.mongodb.com/assets/images/global/leaf.png" },
  { imgPath: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { imgPath: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { imgPath: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" },
  { imgPath: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
  { imgPath: companyLogo1 },
  { imgPath: companyLogo2 },
  { imgPath: companyLogo3 },
  { imgPath: companyLogo4 },
  { imgPath: companyLogo5 },
  { imgPath: companyLogo6 },
  { imgPath: companyLogo7 },
  { imgPath: companyLogo8 },
];


const abilities = [
  {
    imgPath: seoImg,
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: chatImg,
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: timeImg,
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];


const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png",
  },
  {
    name: "Python Developer",
    imgPath: "https://www.mongodb.com/assets/images/global/leaf.png",
  },
  {
    name: "Backend Developer",
    imgPath: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "Interactive Developer",
    imgPath:"https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
  },
  {
    name: "Project Manager",
    imgPath: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: [1, 1, 1] as [number, number, number],
    rotation: [0, 0, 0] as [number, number, number],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: [0.8, 0.8, 0.8] as [number, number, number],
    rotation: [0, 0, 0] as [number, number, number],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: [5, 5, 5] as [number, number, number],
    rotation: [0, -Math.PI / 2, 0] as [number, number, number],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: [0.05, 0.05, 0.05] as [number, number, number],
    rotation: [0, 0, 0] as [number, number, number],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: [0.05, 0.05, 0.05] as [number, number, number],
    rotation: [0, -Math.PI / 4, 0] as [number, number, number],
  },
];

const expCards = [
  {
    review: "I brought creativity and technical expertise to the team, significantly improving our frontend performance. My contributions played a key role in delivering faster, more efficient user experiences.",
    imgPath: KainoTech,
    logoPath: Kaino_k,
    title: "Frontend Developer",
    date: "July 2024 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review: "My contributions to Vendors App were both impactful and strategic. I approached each challenge with a solution-oriented mindset, helping the team move quickly and effectively in a fast-paced environment.",
    imgPath: Vendors_app,
    logoPath: V,
    title: "Full Stack Developer",
    date: "September 2024 - Present",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review: "I work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: Gentori,
    logoPath: Gentori,
    title: "React Native Developer",
    date: "March 2025 - Present",
    responsibilities: [
      "Developed cross-platform mobile applications using React Native, with a strong focus on performance, usability, and maintainability.",
      "Optimized application performance through thoughtful refactoring, profiling, and testing to enhance the overall user experience.",
      "Collaborated closely with the product team to translate user feedback into well-implemented, high-impact features",
    ],
  },
];


const expLogos = [
  {
    name: "logo1",
    imgPath: logo1Img,
  },
  {
    name: "logo2",
    imgPath: logo2Img,
  },
  {
    name: "logo3",
    imgPath: logo3Img,
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: client1,
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: client3,
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: client2,
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: client5,
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: client4,
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: client6,
  },
];


const socialImgs = [
  {
    name: "insta",
    imgPath: instaImg,
  },
  {
    name: "fb",
    imgPath: fbImg,
  },
  {
    name: "x",
    imgPath: xImg,
  },
  {
    name: "linkedin",
    imgPath: linkedinImg,
  },
];


export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
