import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiFacebook, FiLinkedin, FiInstagram } from "react-icons/fi";
import "./navbar.css";

const MobileMenuSidebar = ({ toggleMenu, isMenuOpen, handleNavClick }) => {
  return (
    <div className="mobile-menu-wrapper ">
      {/* Mobile menu overlay */}
      <div
        className={`mobile-menu-overlay ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      ></div>
      {/* Mobile menu sidebar */}
      <div className={`mobile-menu-sidebar md:w-[50%] md:left-[-50%] w-[70%] left-[-70%]   ${isMenuOpen ? "open" : ""}`}>
        {/* Mobile menu header */}
        <div className="mobile-menu-header  my-3">
          <div className=" flex items-center gap-4 ">
            <img
              src="https://cdn.pixabay.com/photo/2021/06/04/10/28/portrait-6309448_1280.jpg"
              className="w-[50px] h-[50px] rounded-full sidebar-img border "
              alt="img"
            />
            <h1 className=" text-[#c4cfde] text-xl tracking-wider uppercase font-semibold">
              David
            </h1>
          </div>
          {/* Close button */}
          <button className="mobile-menu-close" onClick={toggleMenu}>
            <MdClose className="mx-auto text-2xl" />
          </button>
        </div>
        {/* Sidebar description */}
        <p className="text-[#6d6d6d] mt-8  tracking-wider ">
          Passionate web developer with a strong focus on creating immersive
          user experiences through innovative design and cutting-edge
          technologies.
        </p>
        <hr className=" my-4 opacity-30" />
        <ul className="mobile-menu-links uppercase mb-32   text-[#1C231F]">
          <li>
            <a href="#home" onClick={(e) => handleNavClick(e, "home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#home" onClick={(e) => handleNavClick(e, "home")}>
              Experience
            </a>
          </li>
          {/* <li>
            <a
              href="#education"
              onClick={(e) => handleNavClick(e, "education")}
            >
              Education
            </a>
          </li> */}

          <li>
            <a href="#resume" onClick={(e) => handleNavClick(e, "resume")}>
              Resume
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={(e) => handleNavClick(e, "portfolio")}
            >
              Projects
            </a>
          </li>
          <li>
            <a href="#blog" onClick={(e) => handleNavClick(e, "blog")}>
              Blog
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
              Contact
            </a>
          </li>
        </ul>
        <hr className=" my-4 opacity-30" />
        <div className="">
          <h3 className=" uppercase tracking-wide text-lg text-[#c4cfde] font-semibold">
            Find with me
          </h3>
          <div className=" mt-4 flex text-[#c4cfde] text-lg gap-3 items-center">
            <a href="#" className=" sidebar-icon">
              <FiFacebook />
            </a>
            <a href="#" className=" sidebar-icon">
              <FiInstagram />
            </a>
            <a href="#" className=" sidebar-icon">
              <FiLinkedin />
            </a>
          </div>
        </div>
      </div>
      {/* <button className="mobile-menu-toggle" onClick={toggleMenu}>
        <FaBars />
      </button> */}
    </div>
  );
};

export default MobileMenuSidebar;
