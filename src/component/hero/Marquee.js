import React from "react";
import { motion } from "framer-motion";
import image from '../../assets/images/marquee.png';


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
    <div className="pb-16 md:pb-72 overflow-x-hidden my-auto overflow-y-hidden">
      <div className="relative w-full">
        <motion.div
          className="track hover-effect" // Add hover-effect class
          variants={marqueeVariants}
          animate="animate"
        >
          <div className="font-normal  py-5 md:py-6 hover:-translate-x-96 flex flex-row ">
            <img src={image} alt="image" className="h-full px-4"/><img src={image} alt="image" className="h-full px-4"/><img src={image} alt="image" className="h-full px-4"/><img src={image} alt="image" className="h-full px-4"/><img src={image} alt="image" className="h-full px-4"/><img src={image} alt="image" className="h-full px-4"/>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
