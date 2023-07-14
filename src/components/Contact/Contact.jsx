import React from "react";
import "./contact.css";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";
import RevealUp from "../Reveal/RevealUp";
const Contact = () => {
  return (
    <div className="  2xl:max-w-[1305px] xl:max-w-[1240px] lg:max-w-[945px] md:max-w-[705px] sm:max-w-[525px] max-w-[435px] mx-auto">
      <div className="flex ">
        <div className="w-full ">
        <RevealUp>
        <div className="text-center">
            <span className=" contact-subtitle">Contact</span>
            <p className=" contact-title lg:text-[60px] md:text-[40px] text-[34px]">
              Contact with me
            </p>
          </div>
        </RevealUp>
        </div>
      </div>
      <div className="container flex mt-[50px] lg:flex-nowrap flex-wrap">
        <div className="w-full lg:w-[5/12]">
          <RevealUp delay={0.6}>
          <div className="contact-box-area  lg:mx-0">
              <div className="thumb">
                <img
                  src="https://rainbowit.net/html/inbio/assets/images/contact/contact1.png"
                  alt=""
                />
              </div>
              <div className="title-area">
                <h4 className=" font-bold text-[#e4e6ea] text-3xl mb-2">
                  David Geller
                </h4>
                <span className=" text-[#878e99] text-lg">
                  Junior Web Developer
                </span>
              </div>
              <div className="description-area text-[#878e99]">
                <p className=" text-lg mb-5">
                  {" "}
                  I am available for freelance work. Connect with me via and call
                  in to my account.{" "}
                </p>
                <p>
                  Phone:
                  <a
                    className="contact-link tracking-wide ml-1 text-[#e4e6ea] text-lg"
                    href="tel:0123456789"
                  >
                    +0123456789{" "}
                  </a>
                </p>
                <p>
                  Email:
                  <a
                    className="contact-link tracking-wide ml-1 text-[#e4e6ea] text-lg"
                    href="mailto:admin@example.com"
                  >
                    admin@exmaple.com{" "}
                  </a>
                </p>
              </div>
              <div className="">
                <h3 className=" uppercase tracking-wide text-lg text-[#878e99] font-semibold">
                  Find with me
                </h3>
                <div className=" mt-4 flex text-[#c4cfde] text-lg gap-3 items-center">
                  <a href="#" className=" contact-icon">
                    <FiFacebook />
                  </a>
                  <a href="#" className=" contact-icon">
                    <FiInstagram />
                  </a>
                  <a href="#" className=" contact-icon">
                    <FiLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </RevealUp>
        </div>
        <div className="w-full lg:w-[7/12]">
         <RevealUp delay={0.8} className="h-full">
         <div className="contact-form-wrapper h-full lg:ml-[20px] lg:mr-0 lg:mt-0 mt-[55px]">
            <form action="" method="POST" id="sendForm">
              {" "}
            </form>
            <div className=" w-full lg:flex gap-5  justify-between  ">
              <div className="input-group w-full lg:w-1/2 ">
                <label htmlFor="name">Your Name</label>
                <input
                  form="sendForm"
                  type="text"
                  className=" form-control w-full"
                  name="name"
                  id="name"
                  required
                />
              </div>
              <div className="input-group w-full lg:w-1/2">
                <label htmlFor="phone"> Phone Number</label>
                <input
                  form="sendForm"
                  type="text"
                  className=" form-control w-full"
                  name="phone"
                  id="phone"
                  required
                />
              </div>
            </div>
            <div className="input-group w-full">
              <label htmlFor="name">Email</label>
              <input
                form="sendForm"
                type="email"
                className=" form-control w-full"
                name="email"
                id="email"
                required
              />
            </div>
            <div className="input-group w-full">
              <label htmlFor="subject">Subject</label>
              <input
                form="sendForm"
                type="text"
                className=" form-control w-full"
                name="subject"
                id="subject"
                required
              />
            </div>
            <div className="input-group w-full">
              <label htmlFor="message">Message</label>
              <textarea
                form="sendForm"
                type="text"
                className=" form-control w-full"
                rows={10}
                name="message"
                id="message"
                required
              ></textarea>
            </div>
            <div className="w-full">
              <button
                form="sendForm"
                className="sendBtn gap-3 w-full"
                name="submit"
                type="submit"
              >
                <span className=" font-semibold ">SEND MESSAGE</span>
                <AiOutlineArrowRight className=" text-xl" />
              </button>
            </div>
          </div>
         </RevealUp>
        </div>
      </div>
    </div>
  );
};

export default Contact;
