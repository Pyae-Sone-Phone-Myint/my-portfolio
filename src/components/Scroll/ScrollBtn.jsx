import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./scrollBtn.css";

const ScrollBtn = () => {
  const [scrollHeight, setScrollHeight] = React.useState(0);

  React.useEffect(() => {
    const scrollFunc = () => {
      setScrollHeight(parseInt(window.scrollY));
    };

    window.addEventListener("scroll", scrollFunc);

    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, []);
  const handleOnClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      className={`text-white lg:p-4 p-2 rounded-full scroll-btn ${
        scrollHeight > 100 ? "translate-y-0" : "translate-y-[300%]"
      } transition-all
      duration-300 ease-in-out fixed sm:bottom-5 sm:right-5 bottom-2 right-2 z-[1000]`}
      onClick={handleOnClick}
    >
      <AiOutlineArrowUp className=" text-lg lg:text-2xl" />
    </button>
  );
};

export default ScrollBtn;
