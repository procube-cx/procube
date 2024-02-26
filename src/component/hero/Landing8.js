import React from "react";
import { motion } from "framer-motion";
import icon from '../../assets/images/icons/icon3.png'


const marqueeVariants = {
  animate: {
    x: [0, -1036],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
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
          className="track bg-[#7605C1]" 
          variants={marqueeVariants}
          style={{ animationDuration: "30s"}}
          animate="animate"
        >
          <div className="font-normal text-4xl md:text-8xl py-3 md:py-6 flex">
            <img src={icon} className="h-[40px] md:h-3/4 md:my-auto" />&nbsp;DESIGN&nbsp;<img src={icon} className="h-[40px] md:h-3/4 md:my-auto"/>&nbsp;DEVELOP&nbsp;<img src={icon} className="h-[40px] md:h-3/4 md:my-auto" />&nbsp;DELIVER&nbsp;<img src={icon} className="h-[40px] md:h-3/4 md:my-auto" />&nbsp;DESIGN&nbsp;<img src={icon} className="h-[40px] md:h-3/4 md:my-auto"/>&nbsp;DEVELOP&nbsp;<img src={icon} className="h-[40px] md:h-3/4 md:my-auto" />&nbsp;DELIVER&nbsp;<img src={icon} className="h-[40px] md:h-3/4 md:my-auto" />&nbsp;DESIGN&nbsp;<img src={icon} className="h-[40px] md:h-3/4 md:my-auto"/>&nbsp;DEVELOP&nbsp;<img src={icon} className="h-[40px] md:h-3/4 md:my-auto" />&nbsp;DELIVER&nbsp;<img src={icon} className="h-[40px] md:h-3/4 md:my-auto" />&nbsp;DESIGN&nbsp;<img src={icon} className="h-[40px] md:h-3/4 md:my-auto"/>&nbsp;DEVELOP&nbsp;<img src={icon} className="h-[40px] md:h-3/4 md:my-auto" />&nbsp;DELIVER&nbsp;
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
