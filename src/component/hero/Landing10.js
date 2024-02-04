import React, { useState } from 'react';
import { motion } from 'framer-motion';
import arrowIcon from '../../assets/images/exploreMore.png';
import image1 from '../../assets/images/project-image/image1.png';
import image2 from '../../assets/images/project-image/image2.png';
import image3 from '../../assets/images/project-image/image3.png';
import image4 from '../../assets/images/project-image/image4.png';

const data = [
  {
    name: 'Louis Vuitton',
    desc: 'Branding, Web Design, App Development, Marketing',
    icon: image1,
  },
  {
    name: 'Pizza Hut',
    desc: 'Branding, Web Design, App Development, Marketing',
    icon: image2,
  },
  {
    name: 'Nike',
    desc: 'Branding, Web Design, App Development, Marketing',
    icon: image3,
  },
  {
    name: 'Apple',
    desc: 'Branding, Web Design, App Development, Marketing',
    icon: image4,
  },
];

const Landing10 = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const cardVariants = {
    expanded: {
      scale: 1.5,
      transition: {
        layout: true,
      },
    },
    contracted: {
      scale: 1,
      transition: {
        layout: true,
      },
    },
  };

  const handleCardClick = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <div className='px-6 md:px-24 py-16 md:py-48'>
      <p className='font-normal text-4xl md:text-8xl !leading-tight uppercase text-center'>Our projects</p>
      <div className='grid grid-cols-2 w-full gap-x-8'>
        {data.map((item, index) => (
          <motion.div
            key={index}
            className='col-span-2 md:col-span-1 flex flex-col justify-center py-5 md:py-24'
            whileHover="expanded"
            whileTap="contracted"
            variants={cardVariants}
            initial={expandedIndex === index ? "expanded" : "contracted"}
            animate={expandedIndex === index ? "expanded" : "contracted"}
            onClick={() => handleCardClick(index)}
          >
            <img src={item.icon} alt={item.name} className='w-full mb-7' />
            <p className='text-xl font-normal md:text-4xl'>{item.name}</p>
            <p className='text-xs font-normal md:text-lg opacity-60'>{item.desc}</p>
          </motion.div>
        ))}
      </div>
      <img src={arrowIcon} alt="arrow" className='w-24 md:w-48 mx-auto my-10 md:my-24 hover:opacity-55' />
    </div>
  );
};

export default Landing10;
