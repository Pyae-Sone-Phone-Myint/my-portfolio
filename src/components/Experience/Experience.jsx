import React from "react";
import RevealUp from "../Reveal/RevealUp";

const Experience = () => {
  return (
    <>
      <div className="2xl:max-w-[1305px] xl:max-w-[1240px] lg:max-w-[945px] md:max-w-[705px] sm:max-w-[525px] max-w-[435px] mx-auto">
        {/* title */}
        <RevealUp>
          <div className="">
            <div className=" text-center">
              <span className=" text-[#f9004d] leading-1 mb-[10px] text-sm font-normal">
                OVER 10 YEARS OF EXPERIENCE
              </span>
              <h2 className=" text-[#c4cfde] font-bold text-[60px]">
                My Experience
              </h2>
            </div>
          </div>
        </RevealUp>
        {/* experience card */}
        <div className=" container">
          {/* first card */}
         <RevealUp delay={0.6}>
         <div className=" card  flex flex-col lg:flex-row  items-center  gap-10   mx-auto mt-[40px] mb-0 p-[30px] shadow-one rounded-md">
            {/* img  */}
            <div className="  overflow-hidden rounded-xl w-full lg:w-1/4">
              <img
                className="  w-full  h-full rounded-md"
                src="../../../p-1.png"
              />
            </div>
            <div className=" w-full lg:w-2/4">
              <span className=" bg-[#545961] text-sm px-2 py-1 text-[#c4cfde] rounded-3xl">
                2023 -present
              </span>
              <h4 className=" text-[26px] text-[#c4cfde] font-bold mt-3">
                Contact App
              </h4>
              <h6 className=" text-[20px] font-normal my-3 text-[#c4cfde]">
                Co-Founder, Web Designer & Developer
              </h6>
              <p className=" text-[16px] text-[#878e99]">
                Reinvetning the way you create websites
              </p>
            </div>
            {/* button */}
            <div className=" w-full lg:w-1/4  ">
              <a
                href="https://teamd-contactify.netlify.app/"
                target="_blank"
                className=" text-end px-8 py-3 capitalize text-sm cv-button shadow-one text-[#ff014f]"
              >
                View Detail
              </a>
            </div>
          </div>
         </RevealUp>
         <RevealUp delay={0.8}>
         <div className=" card flex flex-col lg:flex-row  items-center  gap-10   mx-auto mt-[40px] mb-0 p-[30px] shadow-one rounded-md">
            {/* img  */}
            <div className="  overflow-hidden rounded-xl w-full lg:w-1/4">
              <img
                className="  w-full  h-full rounded-md"
                src="../../../p-2.png"
              />
            </div>
            <div className=" w-full lg:w-2/4">
              <span className=" bg-[#545961] text-sm px-2 py-1 text-[#c4cfde] rounded-3xl">
                2023 -present
              </span>
              <h4 className=" text-[26px] text-[#c4cfde] font-bold mt-3">
                Go Wild Tour Pages
              </h4>
              <h6 className=" text-[20px] font-normal my-3 text-[#c4cfde]">
                Co-Founder, Web Designer & Developer
              </h6>
              <p className=" text-[16px] text-[#878e99]">
                Reinvetning the way you create websites
              </p>
            </div>
            {/* button */}
            <div className="w-full lg:w-1/4 ">
              <a
                href="https://gowilds-d.netlify.app/"
                target="_blank"
                className=" text-end px-8 py-3 capitalize text-sm cv-button shadow-one text-[#ff014f]"
              >
                View Detail
              </a>
            </div>
          </div>
         </RevealUp>
          <RevealUp delay={1.0}>
          <div className=" card flex flex-col lg:flex-row  items-center  gap-10   mx-auto mt-[40px] mb-0 p-[30px] shadow-one rounded-md">
              {/* img  */}
              <div className="  overflow-hidden rounded-xl w-full lg:w-1/4">
                <img
                  className="  w-full  h-full rounded-md"
                  src="../../../p-3.png"
                />
              </div>
              <div className=" w-full lg:w-2/4">
                <span className=" bg-[#545961] text-sm px-2 py-1 text-[#c4cfde] rounded-3xl">
                  2023 -present
                </span>
                <h4 className=" text-[26px] text-[#c4cfde] font-bold mt-3">
                  Dashboard for you..
                </h4>
                <h6 className=" text-[20px] font-normal my-3 text-[#c4cfde]">
                  Co-Founder, Web Designer & Developer
                </h6>
                <p className=" text-[16px] text-[#878e99]">
                  Reinvetning the way you create websites
                </p>
              </div>
              {/* button */}
              <div className="w-full lg:w-1/4 ">
                <a
                  href="https://goldwilds-dashboard.netlify.app/"
                  target="_blank"
                  className=" text-end px-8 py-3 capitalize text-sm cv-button shadow-one text-[#ff014f]"
                >
                  View Detail
                </a>
              </div>
            </div>
          </RevealUp>
        </div>
      </div>
    </>
  );
};

export default Experience;
