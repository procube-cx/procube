import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import arrowIcon from '../../assets/images/exploreMore.png';
import image1 from '../../assets/images/project-image/image1.png';
import image2 from '../../assets/images/project-image/image2.png';
import image3 from '../../assets/images/project-image/image3.png';
import image4 from '../../assets/images/project-image/image4.png';
import gsap from 'gsap';
import AnimatedParagraph from '../AnimatedPara';

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
    name: 'Apple',
    desc: 'Branding, Web Design, App Development, Marketing',
    icon: image4,
  },
  {
    name: 'Nike',
    desc: 'Branding, Web Design, App Development, Marketing',
    icon: image3,
  },
];

const Landing10 = () => {

 



  return (
    <div className='px-6 md:px-24 py-16 md:py-28 md:gap-16 flex flex-col'>
      <AnimatedParagraph className='font-normal text-4xl md:text-8xl !leading-tight uppercase text-center'>Our projects</AnimatedParagraph>
      <div className='flex flex-row w-full gap-x-8 md:gap-x-16 overflow-x-auto' >
        {data.map((item, index) => (
          <div
            className='flex-1 flex flex-col cursor-pointer w-full'
          >
            <img src={item.icon} alt={item.name} className='w-[600px] mb-7' />
            <p className='text-xl font-normal md:text-4xl'>{item.name}</p>
            <p className='text-xs font-normal md:text-lg opacity-60'>{item.desc}</p>
          </div>
        ))}
      </div>
      <div>

      <img src={arrowIcon} alt="arrow" className='w-24 md:w-36 mx-auto my-10 md:my-10 hover:opacity-55 cursor-pointer' />
      </div>
    </div>
  );
};

export default Landing10;
