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
        // duration: 5,
        ease: "linear",
      },
    },
  },
};

const Marquee = () => {

  const [hover, setHover] = React.useState(false);

  return (
    <div className="pb-16 md:pb-72 overflow-x-hidden my-auto overflow-y-hidden">
      <div className="relative w-full">
        <motion.div
          className="track"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={hover?{ animationDuration: "30s"}:{ animationDuration: "5s"}}
          variants={marqueeVariants}
          animate="animate"
        >
          <div className="font-normal  py-5 md:py-6  flex flex-row ">
            <img src={image} alt="image" className="h-10 md:h-[80px] px-4 min-w-min"/><img src={image} alt="image" className="h-10 md:h-[80px] px-4 min-w-min"/><img src={image} alt="image" className="h-10 md:h-[80px] px-4 min-w-min"/><img src={image} alt="image" className="h-10 md:h-[80px] px-4 min-w-min"/><img src={image} alt="image" className="h-10 md:h-[80px] px-4 min-w-min"/><img src={image} alt="image" className="h-10 md:h-[80px] px-4 min-w-min"/>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
