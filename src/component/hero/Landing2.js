import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import large from '../../assets/images/large.png';
// import video from '../../assets/video/service-1.webm'

const Landing2 = () => {

  useEffect(() => {
    const screenheight = window.innerHeight;
    const screenwidth = window.innerWidth;
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline()
    ScrollTrigger.create({
        trigger: '.cont',
        start: '-50% center',
        end: 'bottom center',
        animation: tl,
        scrub: 1,
    });
    tl.from('.image-wrapper #img', {
      scale: 0.2,
      x: screenwidth/8,
      y: -screenheight/2,
      duration: 2,
      ease: 'power1.out',
      transformOrigin: 'center top',

    });
    tl.to('.image-wrapper  #img', {
      scale: 1,
      x: 0,
      y: 0,
      duration: 2,
      ease: 'power1.out',
    });
  }, []);


  return (
    <div className="cont">
      <div className="image-wrapper ">
        <img src={large} alt="large" id="img" className='hidden md:flex my-auto w-4/5 mx-auto md:pt-36' />
      </div>
      <img src={large} alt="large" className='md:hidden py-9 px-6' />
    </div>
  );
};

export default Landing2;
