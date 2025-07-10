import { FaGavel } from "react-icons/fa";
import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-row items-center gap-2">
          <div className="p-3  border border-black-50 bg-black-100 flex justify-center items-center rounded-xl size-10 md:size-12 cursor-pointer transition-all duration-500 hover:bg-black-50 shadow w-12 h-12 ">
            <FaGavel className="text-gray-600" />
            </div>
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <img src={socialImg.imgPath} alt="social icon" />
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Michael. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;