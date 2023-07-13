import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
const RevealUp = ({ children, value=200, duration=0.5, delay=0.25 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);
  return (
    <div
      className="  relative"
      ref={ref}
      style={{ position: "relative", height:"100%" }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: value },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration:duration, delay: delay }}
        style={{height:"100%"}}
      >
        {children}
      </motion.div>
    
    </div>
  );
};

export default RevealUp;
