import React, { useEffect, useLayoutEffect, useState } from 'react';
import './test.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Landing3 = () => {

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   const textElements = gsap.utils.toArray('.text');

  // const scroll = ScrollTrigger.create({
  //   start: 'top 95%',
  //   end: 'bottom 40%',
  //   markers: false,
  //   scrub: true,
  //   trigger: '.text',
  //   animation: gsap.to(textElements, {
  //     backgroundSize: '100%',
  //     ease: 'none',
  //     delay: 1.5,
  //   }),
  // });

  //   return () => {
  //     if(scroll) {
  //       scroll.kill();
  //     }
  //   }
  // }, [ScrollTrigger]);

  useLayoutEffect(() => {
    let ctx1 = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger)
      const textElements = gsap.utils.toArray('.text');
      const scroll = ScrollTrigger.create({
        start: 'top 95%',
        end: 'bottom 40%',
        markers: false,
        scrub: true,
        trigger: '.text',
        animation: gsap.to(textElements, {
          backgroundSize: '100%',
          ease: 'none',
          delay: 1.5,
        }),
      });
    });
    return () => {
      ctx1.revert()
    }


  }, [ScrollTrigger, gsap]);


  return (
    <div className='px-6 md:px-24 py-12 md:py-24 pt-16 md:pt-36'>
      <p className='font-medium text-2xl md:text-5xl leading-10 md:!leading-[78px] text-center'>
        <span className='text'>At Procube, we unlock innovation's power. Collaborating with brands and visionaries, we revitalize identities, craft impactful digital journeys, and lead transformative advancements. Welcome to Procube, where innovation fuels growth, redefines brands, and turns dreams into reality
        </span>
      </p>
    </div>
  );
};

export default Landing3;
