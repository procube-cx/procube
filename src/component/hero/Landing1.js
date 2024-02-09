import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import logo from '../../assets/images/Procube-white.png';

const Landing1 = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const lines = textRef.current.children;
    gsap.fromTo(
      lines,
      {
        opacity: 0,
        y: 1000,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out"
      }
    );
  }, []);

  return (
    <div className='flex flex-col md:flex-row w-full h-screen max-h-[900px] py-0 px-0 md:py-6 md:px-6'>
      <div className='w-full h-full purplegradient rounded-b-xl md:rounded-3xl px-6 md:px-20 py-4 md:pr-10 flex flex-col items-center justify-center'>
        <div ref={textRef} className="font-normal text-5xl md:text-6xl lg:text-7xl xl:text-8xl md:!leading-[110px] md:mt-auto">
          <span>Crafting Your</span>
          <span> Digital Experience</span>
          <span> with Technology,</span>
          <span> Design & Marketing</span>
          <span> Magic!</span>
        </div>
        <div className="md:ml-auto md:mt-auto hidden md:flex">
          <img src={logo} alt="logo" className="w-40 md:w-48 lg:w-52  cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Landing1;
