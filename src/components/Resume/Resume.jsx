import React, { useState } from "react";
import "./Resume.css";
import Resume_item1 from "./Resume_item1";
import Resume_item2 from "./Resume_item2";

const Resume = () => {
  const [btn, setBtn] = useState("education");
  return (
    <>
      <div className="  2xl:max-w-[1305px] xl:max-w-[1240px] lg:max-w-[945px] md:max-w-[705px] sm:max-w-[525px] max-w-[435px] mx-auto">
        <div className=" text-center text-[#ff014f] text-[15px] tracking-widest mb-5">
          7+ YEARS OF EXPERIENCE
        </div>
        <h1 className=" mb-16 text-center text-[#c4cfde] text-[8vw] lg:text-[5vw] font-semibold">
          My Resume
        </h1>
        {/* button */}
        <div className="flex flex-col lg:flex-row btn-shadow w-[83%] mx-auto rounded-lg">
          <button
            className={`text-center py-4 lg:py-7 text-xl font-semibold hover:font-normal rounded-lg text-[#c4cfde] hover:shadow hover:shadow-gray-900 ${
              btn == "education"
                ? "shadow-md text-[#ff014f] shadow-gray-900"
                : ""
            } cursor-pointer select-none hover:text-[#ff014f] w-full lg:w-[25%]`}
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
            } cursor-pointer select-none hover:text-[#ff014f] w-full lg:w-[25%]`}
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
            } cursor-pointer select-none hover:text-[#ff014f] w-full lg:w-[25%]`}
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
            } cursor-pointer select-none hover:text-[#ff014f] w-full lg:w-[25%]`}
            onClick={(e) => {
              setBtn(e.target.value);
            }}
            value="interview"
          >
            Interview
          </button>
        </div>
        {/* // */}
        {/* resume_items */}
        <div className=" w-full ">
          {btn === "professional" ? <Resume_item2 /> : <Resume_item1 />}
        </div>
      </div>
    </>
  );
};

export default Resume;
