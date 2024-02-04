import React from "react";
import { motion } from "framer-motion";


const marqueeVariants = {
  animate: {
    x: [0, -1036],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear",
      },
    },
  },
};

const Marquee = () => {
  return (
    <div className="py-16 md:py-48 overflow-x-hidden my-auto overflow-y-hidden -mt-24 md:-mt-32 ">
      <div className="relative w-full">
        <motion.div
          className="track hover-effect" // Add hover-effect class
          variants={marqueeVariants}
          animate="animate"
        >
          <div className="font-normal text-4xl md:text-8xl py-5 md:py-14">
          ImageImageImageImageImageImageImageImageImageImageImageImageImageImageImageImageImageImageImageImageImageImageImage
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
