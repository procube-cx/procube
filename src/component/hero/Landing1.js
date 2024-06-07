import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import logo from '../../assets/images/Procube-white.png';

const Landing1 = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".line span", {
      duration: 0.4,
      y: -130,
      opacity: 1,
      ease: "power4.out",
      delay: 0.1,
      stagger: {
        amount: 0.3
      }
    });
    tl.to(".line span", {
      y: 0,
      opacity: 1,
    });

    return () => {
      tl.kill();
    }
  }, []);

  return (
    <div className='flex flex-col md:flex-row w-full h-screen max-h-[900px] py-0 px-0 md:py-6 md:px-6'>
      <div className='w-full h-full purplegradient rounded-b-xl md:rounded-3xl px-6 md:px-20 py-4 md:pr-10 flex flex-col items-center justify-center'>
        <div ref={textRef} className="container font-normal text-5xl md:text-[42px] lg:text-[63px] xl:text-[80px] 2xl:text-8xl md:!leading-  md:mt-auto flex flex-wrap">
          <div className='line h-16 lg:h-[90px] xl:h-28 hidden md:flex'>
            <span>Building Your Future-Proof</span>
          </div>
          <div className='line h-16 lg:h-[90px] xl:h-28 hidden md:flex'>
            <span> Digital Ecosystem</span>
          </div>
          <div className='md:hidden'>
            <span>Crafting Your</span>
            <span> Digital Experience</span>
            <span> with Technology,</span>
            <span> Design & Marketing</span>
            <span> Magic!</span>
          </div>
        </div>
        <div className="md:ml-auto md:mt-auto hidden md:flex">
          <img src={logo} alt="logo" className="w-40 md:w-48 lg:w-52  cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Landing1;
