import React, { useEffect } from 'react';
import gsap from 'gsap';
import './hero.css';
import logo from '../../assets/images/Procube-white.png'

const Landing1 = () => {

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".line span", {
      duration: 0.6,
      y: -100,
      opacity: 0,
      ease: "power4.out",
      delay: 1,
      stagger: {
        amount: 0.3
      }
    });
    tl.to(".line span", {
      y: 0,
      opacity: 1,
    });
  }, []);

  return (
    <div className='flex flex-col md:flex-row w-full h-screen max-h-[900px] py-0 px-0 md:py-6 md:px-6'>
      <div className='w-full h-full purplegradient rounded-b-xl md:rounded-3xl px-6 md:px-20 py-4 md:pr-10 flex items-center justify-center'>
        <div className="container font-normal text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[50px]">
          {/* <div className="line h-[98px] md:h-24 lg:h-28">
            <span>Crafting Your Digital Experience</span>
          </div>
          <div className="line h-[152px] md:h-24 lg:h-28">
            <span>with Technology, Design & </span>
          </div>
          <div className="line h-[98px] md:h-24 lg:h-28">
            <span> Marketing Magic!</span>
          </div> */}
          <span>Crafting Your Digital Experience with Technology, Design & Marketing Magic! </span>
        </div>
        {/* <div className="md:ml-auto md:mt-auto hidden md:flex">
          <img src={logo} alt="logo" className="w-40 md:w-48 lg:w-52" />
        </div> */}
      </div>
    </div>
  );
};

export default Landing1;
