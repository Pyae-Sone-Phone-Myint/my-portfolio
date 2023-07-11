import React, { useEffect, useState } from "react";

import "./navbar.css";

import MobileMenuSidebar from "./MobileMenuSiderbar";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  // State variables
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  
   // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

   // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const isScrolled = scrollPosition > 200;
      setIsScrolled(isScrolled);

      // Check which section is currently in view
      const sections = document.querySelectorAll("section");
      const scrollOffset = window.innerHeight * 0.2;
      // Adjust the scroll offset as needed
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const sectionTop = section.offsetTop;
        if (scrollPosition >= sectionTop - scrollOffset) {
          setActiveSection(section.id);
          // console.log(activeSection);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  // Disable scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }
  }, [isMenuOpen]);
  
  // Handle navigation click
  const handleNavClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close the mobile menu after clicking a link
  };

  return (
    <>
      <div
        className={`bg-[#212428]   navbar   header  ${
          isScrolled ? "header-sticky  stickyAdd" : "header-fixed"
        }`}
      >
        <div className="header-wrapper h-[100px] flex items-center py-0 px-[15px] md:px-[30px] xl:px-[64px]">
          <div className=" w-1/2 lg:w-2/12">
            <div className=" flex items-center gap-4 ">
              <a href="#">
                <img
                  src="https://cdn.pixabay.com/photo/2021/06/04/10/28/portrait-6309448_1280.jpg"
                  className="w-[70px] h-[70px] rounded-full sidebar-img border "
                  alt="img"
                />
              </a>
              <h1 className=" select-none text-[#c4cfde] text-xl tracking-wider uppercase font-semibold">
                David
              </h1>
            </div>
          </div>
          <div className="flex justify-end w-1/2 lg:w-10/12 items-center  ">
            <div className="lg:hidden block text-[#ff014f]  text-[30px] ">
              {/* <MobileMenuSidebar /> */}
              <button className="mobile-menu-toggle" onClick={toggleMenu}>
                <FaBars />
              </button>
            </div>
            <div className=" primary-menu lg:flex hidden gap-5 nav-text py-9 pr-5">
              <a
                href="#home"
                className={activeSection === "home" ? "active" : ""}
                onClick={(e) => handleNavClick(e, "home")}
              >
                <span className=" nav-text">Home</span>
              </a>
              <a
                href="#experience"
                className={activeSection === "experience" ? "active" : ""}
                onClick={(e) => handleNavClick(e, "experience")}
              >
                <span className=" nav-text">Experience</span>
              </a>
              <a
                href="#education"
                className={activeSection === "education" ? "active" : ""}
                onClick={(e) => handleNavClick(e, "education")}
              >
                <span className=" nav-text">Education</span>
              </a>

              <a
                href="#resume"
                className={activeSection === "resume" ? "active" : ""}
                onClick={(e) => handleNavClick(e, "resume")}
              >
                <span className=" nav-text">Resume</span>
              </a>
              <a
                href="#portfolio"
                className={activeSection === "portfolio" ? "active" : ""}
                onClick={(e) => handleNavClick(e, "portfolio")}
              >
                <span className=" nav-text">Portfolio</span>
              </a>
              <a
                href="#blog"
                className={activeSection === "blog" ? "active" : ""}
                onClick={(e) => handleNavClick(e, "blog")}
              >
                <span className=" nav-text">Blog</span>
              </a>
              <a
                href="#contact"
                className={activeSection === "contact" ? "active" : ""}
                onClick={(e) => handleNavClick(e, "contact")}
              >
                <span className=" nav-text">Contact</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <MobileMenuSidebar
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        handleNavClick={handleNavClick}
      />
    </>
  );
};

export default Navbar;
