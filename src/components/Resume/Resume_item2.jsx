import React from "react";
import "./Resume"

const Resume_item2 = () => {
  return (
    <>
      <div className="w-[80%] mx-auto flex flex-col my-10 gap-10 lg:flex-row pb-5">
        <div className=" w-full lg:w-[50%]">
          <div className="text-[#ff014f] tracking-widest">Features</div>
          <div className=" text-[35px] mb-7 font-bold text-[#c4cfde]">
            Design Skill
          </div>
          <div className=" skills">
            <div className="skill mb-10">
              <div className=" flex text-white justify-between mb-3">
                <div className=" text-[13px] text-[#c4cfde] tracking-widest">
                  PHOTOSHOT
                </div>
                <div className=" text-[13px] text-[#c4cfde] tracking-widest">
                  100%
                </div>
              </div>
              <div className="skill-bar">
                <div className="skill-per" style={{ maxWidth: "100%" }}></div>
              </div>
            </div>
            <div className="skill mb-10">
              <div className=" flex text-white justify-between mb-3">
                <div className=" text-[13px] text-[#c4cfde] tracking-widest">
                  FIGMA
                </div>
                <div className=" text-[13px] text-[#c4cfde] tracking-widest">
                  95%
                </div>
              </div>
              <div className="skill-bar">
                <div className="skill-per" style={{ maxWidth: "95%" }}></div>
              </div>
            </div>
            <div className="skill mb-10">
              <div className=" flex text-white justify-between mb-3">
                <div className=" text-[13px] text-[#c4cfde] tracking-widest">
                  ADOBE XD
                </div>
                <div className=" text-[13px] text-[#c4cfde] tracking-widest">
                  60%
                </div>
              </div>
              <div className="skill-bar">
                <div className="skill-per" style={{ maxWidth: "60%" }}></div>
              </div>
            </div>
            <div className="skill mb-10">
              <div className=" flex text-white justify-between mb-3">
                <div className=" text-[13px] text-[#c4cfde] tracking-widest">
                  ADOBE ILLUSTRATOR
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
                  DESIGN
                </div>
                <div className=" text-[13px] text-[#c4cfde] tracking-widest">
                  90%
                </div>
              </div>
              <div className="skill-bar">
                <div className="skill-per" style={{ maxWidth: "90%" }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full lg:w-[50%]">
          <div className="text-[#ff014f] tracking-widest">Features</div>
          <div className=" text-[35px] mb-7 font-bold text-[#c4cfde]">
            Development Skill
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
                  SOFTWARE
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
                  PLUGIN
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
      </div>
      <hr className="border-b-1 w-full lg:w-[80%] mx-auto border-black" />
    </>
  );
};

export default Resume_item2;
