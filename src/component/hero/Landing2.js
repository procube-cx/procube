import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import large from '../../assets/images/large.png';
// import video from '../../assets/video/service-1.webm'

const Landing2 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();
    const halfScreenHeight = 2 * window.innerHeight / 5;

    tl.from(".image-wrapper #img", {
      x: 60,
      y: -halfScreenHeight,
      scale: 0.15,
      transformOrigin: "top center",
      ease: "power4.out",
    });

    tl.to(".image-wrapper #img", {
      x: 0,
      y: 0,
      scale: 1,
      transformOrigin: "top center",
      ease: "power4.out",
    });

    tl.to(".image-wrapper #img", {
      x: 0,
      y: 0,
      scale: 1,
      transformOrigin: "top center",
      ease: "power4.out",
    });

    ScrollTrigger.create({
      trigger: ".cont",
      start: "top bottom",
      end: "bottom bottom",
      animation: tl,
      scrub: true,
      markers: false
    });

    return () => {
      // Clean up function if needed
    };
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
