import React from "react";
import { FiUser } from "react-icons/fi";
import "./Home.css";
import { AiOutlineFile } from "react-icons/ai";
import { BsEnvelope } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Reveal from "../Reveal/Reveal";
const home = () => {
  return (
    <>
      <div className=" 2xl:max-w-[1305px] xl:max-w-[1240px] lg:max-w-[945px] md:max-w-[705px] sm:max-w-[525px] max-w-[435px] mx-auto">
        <div className=" flex gap-5 flex-col-reverse lg:flex-row container mx-auto justify-center w-full">
          <div className="w-full lg:w-1/2 ">
            {/* 1st one */}
            <Reveal value={-200} duration={0.8}>
              <div className=" p-[35px] bg-[#212428] shadow-one home-hover rounded-xl">
                {/* home 1st one */}
                <div className="px-[15px]">
                  <div className=" user mb-4">
                    <FiUser className=" text-2xl" />
                  </div>
                  <h2 className=" text-white text-[40px] font-bold leading-[62px] mb-3">
                    Hi, I’m
                    <span className=" text-[#ff014f] ml-2 ">blah blah </span>
                  </h2>
                  <p className=" text-[#c4cfde] text-sm my-6">
                    Web designer and developer working for envato.com in Paris,
                    France.
                  </p>
                </div>
                {/* home 2nd part */}
                <div className="">
                  <div className="info flex items-center gap-3 mt-3">
                    <AiOutlineFile className=" text-3xl" />
                    <span className=" text-[#c4cfde] ">
                      Web designer & developer
                    </span>
                  </div>
                  <div className=" info flex items-center gap-3 mt-3">
                    <BsEnvelope className=" text-3xl" />
                    <span className=" text-[#c4cfde] ">
                      john.slady@gmail.com
                    </span>
                  </div>
                  <div className="info flex items-center gap-3 mt-3">
                    <HiOutlineLocationMarker className=" text-3xl" />
                    <span className=" text-[#c4cfde] ">Paris fan</span>
                  </div>
                </div>
              </div>
            </Reveal>
            {/* 2nd one */}
            <Reveal value={-200} duration={0.8}>
              <div className=" p-[35px] bg-[#212428] shadow-one">
                <span className=" text-sm text-[#c4cfde]  ">
                  Download my curriculum vitae:
                </span>
                {/* download button */}
                <div className=" flex items-center gap-5 mt-5">
                  <a href="../../../Resume.pdf" target="_blank" className=" px-5 py-2 capitalize text-sm cv-button shadow-one text-[#ff014f]">
                    Download Cv
                  </a>
                  <a
                    href="#contact"
                    className=" px-4 py-2 capitalize text-sm cv-button shadow-one text-[#ff014f]"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="w-full lg:w-1/2 img-hover rounded-xl ">
            <Reveal duration={0.8}  hFull={true}>
              <div className="shadow-one bg-area h-full ">
                <div className=" h-full rounded-lg overflow-hidden ">
                  <img
                    className=" h-full object-cover"
                    src="https://rainbowit.net/html/inbio/assets/images/slider/banner-02.png"
                    alt=""
                  />
                </div>
              </div>
            </Reveal>
          </div>
          {/* fixed button */}
          {/* <div className=" fixed-button">
						<button className=" demos-button">
							<span className=" demos">DEMOS</span>
						</button>
					</div> */}
        </div>
      </div>
    </>
  );
};

export default home;
