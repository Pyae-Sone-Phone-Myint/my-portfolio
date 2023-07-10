import React, { useEffect, useState } from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { blog_data } from "../../data/data.js";
import { BsArrowRightShort } from "react-icons/bs";
import "./blog.css";

const Blog = () => {
  const [detail, setDetail] = useState("");
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    console.log(detail);
  }, [detail]);

  const card = blog_data?.map((item, index) => {
    return (
      <>
        <div
          className=" p-7 rounded-2xl card overflow-hidden w-full mx-auto bg-transparent md:w-4/12"
          onClick={() => console.log(item)}
        >
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
      </>
    );
  });

  return (
    <>
      <div className=" container mx-auto relative z-50">
        <div className="flex my-7">
          <div className="w-full">
            <div className="text-center">
              <span className=" contact-subtitle">
                VISIT MY BLOG AND KEEP YOUR FEEDBACK
              </span>
              <p className=" contact-title lg:text-[60px] md:text-[40px] text-[34px]">
                My Blog
              </p>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col gap-8 ">{card}</div>
      </div>
      {showDetail && (
        <div className=" bg-black h-screen w-full absolute top-0 left-0 z-[9999]"></div>
      )}
    </>
  );
};

export default Blog;
