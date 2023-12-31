import React from "react";
import "./Resume";

const Resume_item2 = () => {
  return (
    <>
      <div className="container flex flex-col mt-10 mx-auto gap-24 lg:flex-row pb-20 ">
        <div className=" w-full lg:w-[50%]">
          <div className="text-[#ff014f] text-[17px] tracking-widest">
            Features
          </div>
          <div className=" text-[35px] mb-7 font-bold text-[#c4cfde]">
            Frontend Development
          </div>
          <div className=" skills">
            <div className="skill mb-10">
              <div className=" flex text-white justify-between mb-3">
                <div className=" text-[13px] text-[#c4cfde] tracking-widest">
                  HTML
                </div>
                <div className=" text-[13px] text-[#c4cfde] tracking-widest">
                  85%
                </div>
              </div>
              <div className="skill-bar">
                <div className="skill-per" style={{ maxWidth: "85%" }}></div>
              </div>
            </div>
            <div className="skill mb-10">
              <div className=" flex text-white justify-between mb-3">
                <div className=" text-[13px] text-[#c4cfde] tracking-widest">
                  CSS
                </div>
                <div className=" text-[13px] text-[#c4cfde] tracking-widest">
                  80%
                </div>
              </div>
              <div className="skill-bar">
                <div className="skill-per" style={{ maxWidth: "80%" }}></div>
              </div>
            </div>
            <div className="skill mb-10">
              <div className=" flex text-white justify-between mb-3">
                <div className=" text-[13px] text-[#c4cfde] tracking-widest">
                  JAVASCRIPT
                </div>
                <div className=" text-[13px] text-[#c4cfde] tracking-widest">
                  90%
                </div>
              </div>
              <div className="skill-bar">
                <div className="skill-per" style={{ maxWidth: "90%" }}></div>
              </div>
            </div>
            <div className="skill mb-10">
              <div className=" flex text-white justify-between mb-3">
                <div className=" text-[13px] text-[#c4cfde] tracking-widest">
                  REACT
                </div>
                <div className=" text-[13px] text-[#c4cfde] tracking-widest">
                  85%
                </div>
              </div>
              <div className="skill-bar">
                <div className="skill-per" style={{ maxWidth: "85%" }}></div>
              </div>
            </div>
            <div className="skill mb-10">
              <div className=" flex text-white justify-between mb-3">
                <div className=" text-[13px] text-[#c4cfde] tracking-widest">
                  TAILWIND
                </div>
                <div className=" text-[13px] text-[#c4cfde] tracking-widest">
                  70%
                </div>
              </div>
              <div className="skill-bar">
                <div className="skill-per" style={{ maxWidth: "70%" }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full lg:w-[50%]">
          <div className="text-[#ff014f] text-[17px] tracking-widest">
            Features
          </div>
          <div className=" text-[35px] mb-7 font-bold text-[#c4cfde]">
            Backend Development
          </div>
          <div className=" skills">
            <div className="skill mb-10">
              <div className=" flex text-white justify-between mb-3">
                <div className=" text-[13px] text-[#c4cfde] tracking-widest">
                  PHP
                </div>
                <div className=" text-[13px] text-[#c4cfde] tracking-widest">
                  65%
                </div>
              </div>
              <div className="skill-bar">
                <div className="skill-per" style={{ maxWidth: "65%" }}></div>
              </div>
            </div>
            <div className="skill mb-10">
              <div className=" flex text-white justify-between mb-3">
                <div className=" text-[13px] text-[#c4cfde] tracking-widest">
                  LARAVEL
                </div>
                <div className=" text-[13px] text-[#c4cfde] tracking-widest">
                  80%
                </div>
              </div>
              <div className="skill-bar">
                <div className="skill-per" style={{ maxWidth: "80%" }}></div>
              </div>
            </div>
            <div className="skill mb-10">
              <div className=" flex text-white justify-between mb-3">
                <div className=" text-[13px] text-[#c4cfde] tracking-widest">
                  MYSQL
                </div>
                <div className=" text-[13px] text-[#c4cfde] tracking-widest">
                  70%
                </div>
              </div>
              <div className="skill-bar">
                <div className="skill-per" style={{ maxWidth: "70%" }}></div>
              </div>
            </div>
            <div className="skill mb-10">
              <div className=" flex text-white justify-between mb-3">
                <div className=" text-[13px] text-[#c4cfde] tracking-widest">
                  GIT
                </div>
                <div className=" text-[13px] text-[#c4cfde] tracking-widest">
                  75%
                </div>
              </div>
              <div className="skill-bar">
                <div className="skill-per" style={{ maxWidth: "75%" }}></div>
              </div>
            </div>
            <div className="skill mb-10">
              <div className=" flex text-white justify-between mb-3">
                <div className=" text-[13px] text-[#c4cfde] tracking-widest">
                  PLUG IN
                </div>
                <div className=" text-[13px] text-[#c4cfde] tracking-widest">
                  60%
                </div>
              </div>
              <div className="skill-bar">
                <div className="skill-per" style={{ maxWidth: "60%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" container mx-auto">
        <hr className="border-b-1 w-full border-black" />
      </div>
    </>
  );
};

export default Resume_item2;
