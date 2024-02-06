import React, { useEffect } from 'react';
import './test.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Landing3 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const textElements = gsap.utils.toArray('.text');

    textElements.forEach(text => {
      gsap.to(text, {
        backgroundSize: '100%',
        ease: 'none',
        delay: 1.5,
        scrollTrigger: {
          trigger: text,
          start: 'center center',
          end: '+=1000px center',
          scrub: true,
        },
      });
    });
  }, []); // Close the useEffect dependencies array

  return (
    <div className='px-6 md:px-24 py-10 md:py-24 container'>
      <p className='font-medium text-2xl md:text-5xl leading-10 md:!leading-[78px] text-center'>
      <span className='text'>At Procube, we unlock innovation's power. Collaborating with brands and visionaries, we revitalize identities, craft impactful digital journeys, and lead transformative advancements. Welcome to Procube, where innovation fuels growth, redefines brands, and turns dreams into reality
      </span>

      </p>
    </div>
  );
};

export default Landing3;
