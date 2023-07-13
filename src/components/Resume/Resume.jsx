import React, { useState } from "react";
import "./Resume.css";
import Resume_item1 from "./Resume_item1";
import Resume_item2 from "./Resume_item2";
import RevealUp from "../Reveal/RevealUp";

const Resume = () => {
  const [btn, setBtn] = useState("education");
  return (
    <>
      <div className="2xl:max-w-[1305px] xl:max-w-[1240px] lg:max-w-[945px] md:max-w-[705px] sm:max-w-[525px] max-w-[435px] mx-auto">
        <div className=" flex justify-center flex-col items-center">
          <RevealUp>
          <div className="text-center pb-[40px]">
              <span className=" contact-subtitle">  7+ YEARS OF EXPERIENCE</span>
              <p className=" contact-title lg:text-[60px] md:text-[40px] text-[34px]">
            My Resume
              </p>
            </div>
            {/* <div className="flex flex-col">
              <div className=" text-center text-[#ff014f] text-[15px] tracking-widest mb-10">
              
              </div>
              <p className=" contact-title lg:text-[60px] md:text-[40px] text-[34px]">
                
              </p>
            </div> */}
          </RevealUp>
          {/* button */}
          <div className="container mx-auto">
            <RevealUp delay={0.6}>
              <div className="flex flex-col lg:flex-row w-full btn-shadow mx-auto rounded-lg justify-center">
                <button
                  className={`text-center py-4 lg:py-7 text-xl font-semibold hover:font-normal rounded-lg text-[#c4cfde] hover:shadow hover:shadow-gray-900 ${
                    btn == "education"
                      ? "shadow-md text-[#ff014f] shadow-gray-900"
                      : ""
                  } cursor-pointer select-none hover:text-[#ff014f] w-full `}
                  onClick={(e) => {
                    setBtn(e.target.value);
                  }}
                  value="education"
                >
                  Education
                </button>
                <button
                  className={`text-center py-4 lg:py-7 text-xl font-semibold hover:font-normal rounded-lg text-[#c4cfde] hover:shadow hover:shadow-gray-900 ${
                    btn == "professional"
                      ? "shadow-md text-[#ff014f] shadow-gray-900"
                      : ""
                  } cursor-pointer select-none hover:text-[#ff014f] w-full `}
                  onClick={(e) => {
                    setBtn(e.target.value);
                  }}
                  value="professional"
                >
                  Professional Skills
                </button>
                <button
                  className={`text-center py-4 lg:py-7 text-xl font-semibold hover:font-normal rounded-lg text-[#c4cfde] hover:shadow hover:shadow-gray-900 ${
                    btn == "experience"
                      ? "shadow-md text-[#ff014f] shadow-gray-900"
                      : ""
                  } cursor-pointer select-none hover:text-[#ff014f] w-full `}
                  onClick={(e) => {
                    setBtn(e.target.value);
                  }}
                  value="experience"
                >
                  Experience
                </button>
                <button
                  className={`text-center py-4 lg:py-7 text-xl font-semibold hover:font-normal rounded-lg text-[#c4cfde] hover:shadow hover:shadow-gray-900 ${
                    btn == "interview"
                      ? "shadow-md text-[#ff014f] shadow-gray-900"
                      : ""
                  } cursor-pointer select-none hover:text-[#ff014f] w-full `}
                  onClick={(e) => {
                    setBtn(e.target.value);
                  }}
                  value="interview"
                >
                  Interview
                </button>
              </div>
            </RevealUp>
          </div>
          {/* // */}
          {/* resume_items */}
          <div className=" w-full ">
          <RevealUp delay={0.8}>
          {btn === "professional" ? <Resume_item2 /> : <Resume_item1 />}
          </RevealUp>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
