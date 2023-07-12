import React, { useEffect, useState } from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { blog_data } from "../../data/data.js";
import { BsArrowRightShort } from "react-icons/bs";
import "./blog.css";
import { AiOutlineClose } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";

const Blog = () => {
  const [detail, setDetail] = useState("");
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    console.log(detail);
  }, [detail]);

  const clickHandler = (item) => {
    setDetail(item);
    setShowDetail(true);
  };

  const card = blog_data?.map((item, index) => {
    return (
      <>
        <div 
          className=" p-7 rounded-2xl card overflow-hidden w-full mx-auto bg-transparent md:w-4/12"
          onClick={() => clickHandler(item)}
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
      <div className="2xl:max-w-[1305px] xl:max-w-[1240px] lg:max-w-[945px] md:max-w-[705px] sm:max-w-[525px] max-w-[435px] mx-auto">
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
      </div>
      {showDetail && (
        <div className=" bg-[#212428] h-screen w-full fixed top-0 left-0 z-[9999] ">
          <div className="overflow-y-scroll w-full h-full ">
            <div className=" my-10 mx-4">
              <div className=" model_toggle blog_toggle  lg:w-6/12 mx-auto ">
                <div className="close-btn" onClick={() => setShowDetail(false)}>
                  <AiOutlineClose />
                </div>
                <div className=" rounded-xl overflow-hidden mb-4">
                  <img
                    src={detail.image}
                    className=" h-full w-full object-contain"
                    alt={detail.title}
                  />
                </div>
                <span className=" text-[calc(.8rem+.1vw)] font-medium text-[#c4cfde]">
                  2 May, 2021
                </span>

                <div className=" my-3">
                  <h1 className=" text-[calc(1.5rem+.1vw)] font-bold text-[#c4cfde] mb-4">
                    {detail.blog_title1}
                  </h1>
                  <p className=" text-[calc(.8rem+.1vw)] text-[#878e99]">
                    {detail.title1_para}
                  </p>
                </div>
                <div className=" my-3">
                  <h1 className=" text-[calc(1.5rem+.1vw)] font-bold text-[#c4cfde] mb-4">
                    {detail.blog_title2}
                  </h1>
                  <p className=" text-[calc(.8rem+.1vw)] text-[#878e99] mb-7">
                    {detail.title2_para1}
                  </p>
                  <p className=" text-[calc(.8rem+.1vw)] text-[#878e99]">
                    {detail.title2_para2}
                  </p>
                </div>
                <div className=" my-3">
                  <h1 className=" text-[calc(1.5rem+.1vw)] font-bold text-[#c4cfde] mb-4">
                    {detail.blog_title3}
                  </h1>
                  <p className=" text-[calc(.8rem+.1vw)] text-[#878e99]">
                    {detail.title3_para}
                  </p>
                </div>
                <div className=" my-3">
                  <h1 className=" text-[calc(1.5rem+.1vw)] font-bold text-[#c4cfde] mb-4">
                    Leave a Reply
                  </h1>
                  <div className="flex lg:flex-row flex-col gap-5">
                    <div className="lg:w-1/2">
                      <div className="input-group w-full ">
                        <input
                          form="sendForm"
                          type="text"
                          className=" form-control w-full h-[45px!important]"
                          name="name"
                          id="name"
                          placeholder="Name"
                          required
                        />
                      </div>
                      <div className="input-group w-full ">
                        <input
                          form="sendForm"
                          type="email"
                          className=" form-control w-full h-[45px!important]"
                          name="email"
                          id="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div className="input-group w-full ">
                        <input
                          form="sendForm"
                          type="text"
                          className=" form-control w-full h-[45px!important]"
                          name="website"
                          id="website"
                          placeholder="Website"
                          required
                        />
                      </div>
                    </div>
                    <div className="input-group w-full lg:w-1/2">
                      <textarea
                        form="sendForm"
                        type="text"
                        className=" form-control w-full h-full"
                        name="comment"
                        id="comment"
                        placeholder="Comment"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <a href="#" className=" text-xs btn w-fit">
                    submit now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
