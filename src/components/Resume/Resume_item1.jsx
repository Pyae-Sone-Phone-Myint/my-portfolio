import React from "react";
import "./Resume";

const Resume_item1 = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col mt-14 gap-10 lg:flex-row pb-20 mb-10">
        <div className=" w-full lg:w-[50%]">
          <div className="text-[15px] mb-3 text-[#ff014f]">2020 - PRESENT</div>
          <div className=" text-[35px] mb-20 font-bold text-[#c4cfde]">
            Education Quality
          </div>
          {/* Personal Portfolio April Fools */}
          <div className=" flex flex-row-reverse w-full gap-10">
            <div className="hover_sibling  w-full hover bg-[#212428] z-50 hover:text-white text-[#7c838e] box-shadow p-10 rounded-lg select-none hover:bg-gradient-to-r from-[#1e2024] to-[#23272b]">
              <div className="flex items-center justify-between pb-10">
                <div className="">
                  <h1 className="text-white font-semibold text-[25px]">
                  Bachelor of Computer Science
                  </h1>
                  <p className="text-[#7c838e] text-[16px]">
                    University of Greenwich (2021-Present)
                  </p>
                </div>
                {/* <div className="text-[#ff014f] text-[16px] shadow-xl bg-[#27292b] px-3 py-1 rounded">
                  4.30/5
                </div> */}
              </div>
              <hr className="border border-[#0d10134f]" />
              <p className="pt-5 text-lg">
                The education should be very interactual. Ut tincidunt est ac
                dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet
                sem in, lobortis mauris hendrerit ante.
              </p>
            </div>
            <div className="w-2 hover_parent rounded-t-lg relative z-10 bg-[#17191c]">
              <div className=" w-5 h-5 hover_child rounded-full relative left-[-6px] top-12"></div>
              <div className=" w-5 h-5 hover_child2 rounded-full absolute left-[-6px] top-12"></div>
              <div className="w-16  -z-10 h-2 top-[55px] absolute bg-[#17191c]"></div>
            </div>
          </div>
          {/* Examples Of Personal Portfolio */}
          <div className=" flex flex-row-reverse w-full gap-10">
            <div className="hover_sibling mt-14 w-full hover bg-[#212428] z-50 hover:text-white text-[#7c838e] box-shadow p-10 rounded-lg select-none hover:bg-gradient-to-r from-[#1e2024] to-[#23272b]">
              <div className="flex items-center justify-between pb-10">
                <div className="">
                  <h1 className="text-white font-semibold text-[25px]">
                    Special Web Design
                  </h1>
                  <p className="text-[#7c838e] text-[16px]">
                    MMS IT (2022 - 2023)
                  </p>
                </div>
              
              </div>
              <hr className="border border-[#0d10134f]" />
              <p className="pt-5 text-lg">
                Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor
                aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in,
                lobortis mauris hendrerit ante.
              </p>
            </div>
            <div className="w-2 hover_parent relative z-10 bg-[#17191c]">
              <div className=" w-5 h-5 hover_child rounded-full relative left-[-6px] top-[105px]"></div>
              <div className="w-16  -z-10 h-2 top-[112px] absolute bg-[#17191c]"></div>
            </div>
          </div>
          {/* Tips For Personal Portfolio */}
          <div className=" flex flex-row-reverse w-full gap-10">
            <div className="hover_sibling mt-14 w-full hover bg-[#212428] z-50 hover:text-white text-[#7c838e] box-shadow p-10 rounded-lg select-none hover:bg-gradient-to-r from-[#1e2024] to-[#23272b]">
              <div className="flex items-center justify-between pb-10">
                <div className="">
                  <h1 className="text-white font-semibold text-[25px]">
                    Web Application Development
                  </h1>
                  <p className="text-[#7c838e] text-[16px]">
                  MMS IT (2022 - 2023)
                  </p>
                </div>
               
              </div>
              <hr className="border border-[#0d10134f]" />
              <p className="pt-5 text-lg">
                If you are going to use a passage. Ut tincidunt est ac dolor
                aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in,
                lobortis mauris hendrerit ante.
              </p>
            </div>
            <div className="w-2 hover_parent rounded-b-lg relative z-10 bg-[#17191c]">
              <div className=" w-5 h-5 hover_child rounded-full relative left-[-6px] top-[105px]"></div>
              <div className="w-16  -z-10 h-2 top-[112px] absolute bg-[#17191c]"></div>
            </div>
          </div>
        </div>
        <div className=" w-full lg:w-[50%]">
          <div className="text-[#ff014f] mb-3 text-[15px]">2007 - 2010</div>
          <div className=" text-[35px] mb-20 font-bold text-[#c4cfde]">
            Job Experience
          </div>
          {/* Diploma in Web Development */}
          <div className=" flex flex-row-reverse w-full gap-10">
            <div className="hover_sibling  w-full hover bg-[#212428] z-50 hover:text-white text-[#7c838e] box-shadow p-10 rounded-lg select-none hover:bg-gradient-to-r from-[#1e2024] to-[#23272b]">
              <div className="flex items-center justify-between pb-10">
                <div className="">
                  <h1 className="text-white font-semibold text-[25px]">
                    Diploma in Web Development
                  </h1>
                  <p className="text-[#7c838e] text-[16px]">
                    BSE In CSE (2004 - 2008)
                  </p>
                </div>
                {/* <div className="text-[#ff014f] text-[16px] shadow-xl bg-[#27292b] px-3 py-1 rounded">
                  4.70/5
                </div> */}
              </div>
              <hr className="border border-[#0d10134f]" />
              <p className="pt-5 text-lg">
                Contrary to popular belief. Ut tincidunt est ac dolor aliquam
                sodales. Phasellus sed mauris hendrerit, laoreet sem in,
                lobortis mauris hendrerit ante.
              </p>
            </div>
            <div className="w-2 hover_parent rounded-t-lg relative z-10 bg-[#17191c]">
              <div className=" w-5 h-5 hover_child rounded-full relative left-[-6px] top-12"></div>
              <div className=" w-5 h-5 hover_child2 rounded-full absolute left-[-6px] top-12"></div>
              <div className="w-16  -z-10 h-2 top-[55px] absolute bg-[#17191c]"></div>
            </div>
          </div>
          {/* The Personal Portfolio Mystery */}
          <div className=" flex flex-row-reverse w-full gap-10">
            <div className="hover_sibling mt-14 w-full hover bg-[#212428] z-50 hover:text-white text-[#7c838e] box-shadow p-10 rounded-lg select-none hover:bg-gradient-to-r from-[#1e2024] to-[#23272b]">
              <div className="flex items-center justify-between pb-10">
                <div className="">
                  <h1 className="text-white font-semibold text-[25px]">
                    The Personal Portfolio Mystery
                  </h1>
                  <p className="text-[#7c838e] text-[16px]">
                    Job at Rainbow-Themes (2008 - 2016)
                  </p>
                </div>
                {/* <div className="text-[#ff014f] text-[16px] shadow-xl bg-[#27292b] px-3 py-1 rounded">
                  4.95/5
                </div> */}
              </div>
              <hr className="border border-[#0d10134f]" />
              <p className="pt-5 text-lg">
                Generate Lorem Ipsum which looks. Ut tincidunt est ac dolor
                aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in,
                lobortis mauris hendrerit ante.
              </p>
            </div>
            <div className="w-2 hover_parent relative z-10 bg-[#17191c]">
              <div className=" w-5 h-5 hover_child rounded-full relative left-[-6px] top-[105px]"></div>
              <div className="w-16  -z-10 h-2 top-[112px] absolute bg-[#17191c]"></div>
            </div>
          </div>
          {/*Diploma in Computer Science */}
          <div className=" flex flex-row-reverse w-full gap-10">
            <div className="hover_sibling mt-14 w-full hover bg-[#212428] z-50 hover:text-white text-[#7c838e] box-shadow p-10 rounded-lg select-none hover:bg-gradient-to-r from-[#1e2024] to-[#23272b]">
              <div className="flex items-center justify-between pb-10">
                <div className="">
                  <h1 className="text-white font-semibold text-[25px]">
                    Diploma in Computer Science
                  </h1>
                  <p className="text-[#7c838e] text-[16px]">
                    Works at Plugin Development (2016 - 2020)
                  </p>
                </div>
                {/* <div className="text-[#ff014f] text-[16px] shadow-xl bg-[#27292b] px-3 py-1 rounded">
                  5.00/5
                </div> */}
              </div>
              <hr className="border border-[#0d10134f]" />
              <p className="pt-5 text-lg">
                Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor
                aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in,
                lobortis mauris hendrerit ante
              </p>
            </div>
            <div className="w-2 hover_parent rounded-b-lg relative z-10 bg-[#17191c]">
              <div className=" w-5 h-5 hover_child rounded-full relative left-[-6px] top-[105px]"></div>
              <div className="w-16  -z-10 h-2 top-[112px] absolute bg-[#17191c]"></div>
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

export default Resume_item1;
