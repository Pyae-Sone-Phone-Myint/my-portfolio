import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
const Reveal = ({ children, value=200, duration=0.5, delay=0.25, hFull=false }) => {
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
      style={{ position: "relative" ,height: hFull ? "100%": "auto"}}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, x: value },
          visible: { opacity: 1, x: 0 },
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

export default Reveal;
