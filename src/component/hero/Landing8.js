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
    <div className="py-16 md:py-10 md:pb-48 overflow-x-hidden my-auto overflow-y-hidden">
      <div className="relative w-full">
        <motion.div
          className="track bg-[#7605C1] hover-effect" // Add hover-effect class
          variants={marqueeVariants}
          animate="animate"
        >
          <div className="font-normal text-4xl md:text-8xl pb-5 md:py-6  hover:-translate-x-28">
            JUST GREAT WORK JUST GREAT WORK JUST GREAT WORK JUST GREAT WORK JUST GREAT WORK JUST GREAT WORK JUST GREAT WORK
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
