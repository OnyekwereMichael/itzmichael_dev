import { navLinks } from "../constants";

const NavBar = () => {
  return (
     <header className="navbar bg-[#1D1C2291] backdrop-blur-md shadow-2xl fixed w-full left-1/2 -translate-x-1/2 z-[100] py-5 px-5 md:px-20">
      <div className="inner">
        <a href="#hero" className="logo">
         ItzMichael_Dev
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
}

export default NavBar;