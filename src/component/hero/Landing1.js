import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import logo from '../../assets/images/Procube-white.png';
import { set1, set2, set3, set4, set5 } from '../../assets/images/Tech Logo/Logo';

const Landing1 = () => {
  const textRef = useRef(null);
  const [index, setIndex] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        let newIndex = prevIndex + 1;
        if (newIndex > 4) {
          newIndex = 0;
        }
        return newIndex;
      });
    }, 5000);
    return () => clearInterval(interval);
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
          <div className='md:hidden leading-tight'>
            <span>Building Your</span><br />
            <span>Future-Proof</span><br />
            <span>Digital Ecosystem</span>
          </div>
        </div>
        <div className='flex flex-row mr-auto gap-3 md:gap-5 mt-14'>
          <div className=' mr-auto relative'>
            <div className='h-16 lg:h-20 w-16 lg:w-20 bg-white opacity-[93%] rounded-2xl relative p-3 overflow-hidden'>
              <div className='flex flex-row gap-5' style={{ transform: `translateX(-${index * (window.innerWidth < 750 ? 60 : 76)}px)`, transition: 'transform 0.3s ease' }}>
                {set1.map((tag, index) => (
                  <img src={tag} key={index} className='aspect-square min-w-10 md:min-w-14' />
                ))}
              </div>
            </div>
          </div>
          <div className=' mr-auto relative'>
            <div className='h-16 lg:h-20 w-16 lg:w-20 bg-white opacity-[93%] rounded-2xl relative p-3 overflow-hidden'>
              <div className='flex flex-row gap-5' style={{ transform: `translateX(-${index * (window.innerWidth < 750 ? 60 : 75)}px)`, transition: 'transform 0.3s ease' }}>
                {set2.map((tag, index) => (
                  <img src={tag} key={index} className='aspect-square min-w-10 md:min-w-14' />
                ))}
              </div>
            </div>
          </div>
          <div className=' mr-auto relative'>
            <div className='h-16 lg:h-20 w-16 lg:w-20 bg-white opacity-[93%] rounded-2xl relative p-3 overflow-hidden'>
              <div className='flex flex-row gap-5' style={{ transform: `translateX(-${index * (window.innerWidth < 750 ? 60 : 75)}px)`, transition: 'transform 0.3s ease' }}>
                {set3.map((tag, index) => (
                  <img src={tag} key={index} className='aspect-square min-w-10 md:min-w-14' />
                ))}
              </div>
            </div>
          </div>
          <div className=' mr-auto relative'>
            <div className='h-16 lg:h-20 w-16 lg:w-20 bg-white opacity-[93%] rounded-2xl relative p-3 overflow-hidden'>
              <div className='flex flex-row gap-5' style={{ transform: `translateX(-${index * (window.innerWidth < 750 ? 60 : 75)}px)`, transition: 'transform 0.3s ease' }}>
                {set4.map((tag, index) => (
                  <img src={tag} key={index} className='aspect-square min-w-10 md:min-w-14' />
                ))}
              </div>
            </div>
          </div>
          <div className=' mr-auto relative hidden md:flex'>
            <div className='h-16 lg:h-20 w-16 lg:w-20 bg-white opacity-[93%] rounded-2xl relative p-3 overflow-hidden'>
              <div className='flex flex-row gap-5' style={{ transform: `translateX(-${index * (window.innerWidth < 750 ? 60 : 75)}px)`, transition: 'transform 0.3s ease' }}>
                {set5.map((tag, index) => (
                  <img src={tag} key={index} className='aspect-square min-w-10 md:min-w-14' />
                ))}
              </div>
            </div>
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
