import React, { useEffect, useState } from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { portfolio_data } from "../../data/data.js";
import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import "./portfolio.css";
import { MdArrowForwardIos } from "react-icons/md";

const Portfolio = () => {
  const [detail, setDetail] = useState("");
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    console.log(detail);
  }, [detail]);

  const clickHandler = (item) => {
    setDetail(item);
    setShowDetail(true);
  };

  const card = portfolio_data?.map((item, index) => {
    return (
      <>
        <SplideSlide
          key={item.id}
          onClick={() => clickHandler(item)}
          className=" p-4"
        >
          <div className=" p-7 rounded-2xl card overflow-hidden w-fit mx-auto">
            <div className=" overflow-hidden rounded-xl">
              <img src={item.image} className=" object-cover" alt="" />
            </div>
            <div className="flex justify-between my-3">
              <h1 className=" uppercase text-primary text-[calc(0.7rem+.1vw)] font-semibold">
                {item.usage}
              </h1>
            </div>
            <a
              href="#"
              className=" text-[calc(1.4rem+.1vw)] font-bold text-white hover:text-primary transition-all duration-300 ease-in-out"
            >
              {item.title}
            </a>
          </div>
        </SplideSlide>
      </>
    );
  });

  return (
    <>
      <div className="2xl:max-w-[1305px] xl:max-w-[1240px] lg:max-w-[945px] md:max-w-[705px] sm:max-w-[525px] max-w-[435px] mx-auto">
        <div className=" container mx-auto relative z-50">
          <div className="flex my-7">
            <div className="w-full">
              <div className="text-center">
                <span className=" contact-subtitle">
                  VISIT MY Project AND KEEP YOUR FEEDBACK
                </span>
                <p className=" contact-title lg:text-[60px] md:text-[40px] text-[34px]">
                  My Projects
                </p>
              </div>
            </div>
          </div>

          <Splide
            className=""
            hasTrack={false}
            options={{
              type: "loop",
              speed: 1500,
              // gap: "2rem",
              arrows: true,
              pagination: false,
              perPage: 3,
              breakpoints: {
                // 1024: {
                //   perPage: 3,
                // },
                967: {
                  perPage: 2,
                },
                640: {
                  perPage: 1,
                },
              },
            }}
          >
            <SplideTrack className=" p-10">{card}</SplideTrack>
            <div className="splide__arrows ">
              <button className="splide__arrow splide__arrow--prev bg-[#212428]">
                <BsArrowRightShort className=" btn-arrow prev" />
              </button>
              <button className="splide__arrow splide__arrow--next bg-[#212428]">
                <BsArrowRightShort className=" btn-arrow next" />
              </button>
            </div>
          </Splide>
        </div>
      </div>
      {showDetail && (
        <div className=" bg-[#212428] h-screen w-full fixed top-0 left-0 z-[9999] ">
          <div className="overflow-y-scroll h-full">
            <div className="model_toggle my-10">
              <div className="close-btn" onClick={() => setShowDetail(false)}>
                <AiOutlineClose />
              </div>
              <div className=" flex lg:flex-row flex-col gap-8 items-center">
                <div className=" rounded-xl overflow-hidden  lg:w-6/12">
                  <img
                    src={detail.image}
                    className=" h-full w-full object-contain"
                    alt={detail.title}
                  />
                </div>
                <div className=" lg:w-5/12 flex flex-col justify-between md:gap-5 gap-3">
                  <h4 className=" text-[calc(1rem+.1vw)] font-medium text-[rgb(135,142,153)]">
                    Featured - Design
                  </h4>
                  <h1 className=" md:text-[calc(2.1rem+.1vw)] text-[calc(1.8rem+.1vw)] font-bold text-[rgb(196,207,222)]">
                    {detail.title}
                  </h1>
                  <p className=" md:text-[calc(1.25rem+.1vw)] text-[calc(1.2rem+.1vw)] font-medium text-[rgb(135,142,153)]">
                    {detail.para}
                  </p>
                  <p className=" md:text-[calc(1.25rem+.1vw)] text-[calc(1.2rem+.1vw)] font-medium text-[rgb(135,142,153)]">
                    {detail.para1}
                  </p>
                  <div className=" flex  gap-10">
                    <a href="#" className=" btn">
                      like this
                    </a>
                    <a href="#" className=" btn ">
                      view project
                      <span>
                        <MdArrowForwardIos size={".9rem"} />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
