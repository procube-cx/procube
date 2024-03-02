import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import arrowIcon from '../../assets/images/exploreMore.png';
import image1 from '../../assets/images/project-image/image1.png';
import image2 from '../../assets/images/project-image/image2.png';
import image3 from '../../assets/images/project-image/image3.png';
import image4 from '../../assets/images/project-image/image4.png';
import gsap from 'gsap';
import AnimatedParagraph from '../AnimatedPara';
import { ScrollTrigger } from 'gsap/all';

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
  const mobile = window.innerWidth < 768;

  useEffect(() => {
    if (mobile) return;
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.utils.toArray('.panel')
    gsap.to(tl, {
      xPercent: -100 * (tl.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.horizontal-scroll-wrapper',
        pin: true,
        scrub: 1,
        end: () => '+=' + document.querySelector('.horizontal-scroll-wrapper').offsetWidth,
      }
    });
    return () => {
      gsap.killTweensOf('.panel');
    };
  }, []);





  return (
    <div className='px-6 md:px-24 my-16 md:my-28 gap-10 md:gap-16 flex flex-col horizontal-scroll-wrapper'>
      <AnimatedParagraph className='font-normal text-4xl md:text-8xl !leading-tight uppercase text-center'>Our projects</AnimatedParagraph>
      <div className='flex flex-col md:flex-row  overflow-x-hidden'>
        <div className='flex flex-col md:flex-row gap-y-5 md:gap-x-16' >
          {data.map((item, index) => (
            <div className='md:w-[50vw] w-full flex flex-col cursor-pointer  panel'>
              <img src={item.icon} alt={item.name} className='md:w-[600px] mb-3 md:mb-7' />
              <p className='text-xl font-normal md:text-4xl'>{item.name}</p>
              <p className='text-xs font-normal md:text-lg opacity-60'>{item.desc}</p>
            </div>
          ))}
        </div>
        <div>
          <img src={arrowIcon} alt="arrow" className='w-24 md:w-[600px] mx-auto my-10 md:my-10 hover:opacity-55 cursor-pointer panel' />
        </div>
      </div>
    </div>
  );
};

export default Landing10;
