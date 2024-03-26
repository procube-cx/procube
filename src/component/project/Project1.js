import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import arrowIcon from '../../assets/images/exploreMore.png';
import image1 from '../../assets/images/project-image/image1.png';
import image2 from '../../assets/images/project-image/image2.png';
import image3 from '../../assets/images/project-image/image3.png';
import image4 from '../../assets/images/project-image/image4.png';
import image5 from '../../assets/images/project-image/image5.png';
import image6 from '../../assets/images/project-image/image6.png';
import image7 from '../../assets/images/project-image/image7.png';
import image8 from '../../assets/images/project-image/image8.png';
import image9 from '../../assets/images/project-image/image9.png';
import gsap from 'gsap';
import AnimatedParagraph from '../AnimatedPara';

const data = [
  {
    name: 'Hyperama',
    desc: 'Ecommerce Development, Branding and Inventory Management',
    icon: image1,
  },
  {
    name: 'PetBey',
    desc: 'UI/UX, Android & iOS App Development, Website Development',
    icon: image2,
  },
  {
    name: 'Beacon Management Consultant',
    desc: 'Logo, Branding, UI/UX Designing, Website Development',
    icon: image3,
  },
  {
    name: 'NoorJes Perfumes',
    desc: 'Logo, Branding, UI/UX Designing, Website Development',
    icon: image4,
  },
  {
    name: 'Apple',
    desc: 'Branding, Web Design, App Development, Marketing',
    icon: image5,
  },
  {
    name: 'Nike',
    desc: 'Branding, Web Design, App Development, Marketing',
    icon: image6,
  },
  {
    name: 'Google',
    desc: 'Branding, Web Design, App Development, Marketing',
    icon: image7,
  },
  {
    name: 'Facebook',
    desc: 'Branding, Web Design, App Development, Marketing',
    icon: image8,
  },
  {
    name: 'Instagram',
    desc: 'Branding, Web Design, App Development, Marketing',
    icon: image9,
  },
];

const Project1 = () => {





  return (
    <div className='px-6 md:px-24 pt-24 md:pt-48 flex flex-col'>
      <AnimatedParagraph className='font-normal text-4xl md:text-8xl !leading-tight uppercase text-center pb-10 md:pb-[70px]'>Our projects</AnimatedParagraph>
      <div className='grid grid-cols-2 w-full gap-x-8 md:gap-x-16 overflow-x-auto gap-y-5 md:gap-y-14' >
        {data.map((item, index) => (
          <div
            className='flex-1 flex flex-col cursor-pointer w-full col-span-2 md:col-span-1'
          >
            <div className='rounded-lg md:rounded-2xl overflow-hidden'>
              <motion.img
                src={item.icon}
                alt={item.name}
                className='w-full '
                whileHover={{ scale: 1.15, transition: { duration: 0.5, ease: 'easeInOut' } }}
              />
            </div>
            <p className='text-xl font-normal md:text-4xl pt-5 md:pt-8'>{item.name}</p>
            <p className='text-xs font-normal md:text-lg opacity-60'>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project1;
