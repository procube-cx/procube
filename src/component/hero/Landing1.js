import React, { useEffect } from 'react';
import gsap from 'gsap';
import './hero.css';

const Landing1 = () => {

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".line span", {
      duration: 0.2,
      y: -100,
      opacity: 1,
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
    <div className='flex flex-col md:flex-row w-full h-screen max-h-[900px] pt-0 md:py-4 px-3 bg-black'>
      <div className='w-full h-full purplegradient rounded-md'>
        <div className='flex w-full h-full flex-col justify-center'>
          <div class="container">
            <div class="line">
              <span className='text-white'>Crafting Exceptional </span>
            </div>
            <div class="line">
              <span className='text-white'>Digital Products, Designs,</span>
            </div>
            <div class="line">
              <span className='text-white'> and Branding</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Landing1;
