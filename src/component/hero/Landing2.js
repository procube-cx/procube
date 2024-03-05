import React, { useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import large from '../../assets/images/large.png';
// import video from '../../assets/video/service-1.webm'

const Landing2 = () => {

  // useEffect(() => {
  //   const screenheight = window.innerHeight;
  //   const screenwidth = window.innerWidth;
  //   gsap.registerPlugin(ScrollTrigger);
  //   const tl = gsap.timeline()
  //   const scroll2 = ScrollTrigger.create({
  //     trigger: '.cont',
  //     start: '-150% center',
  //     end: 'bottom center',
  //     animation: tl,
  //     scrub: 1,
  //     markers: false
  //   });
  //   tl.from('.image-wrapper #img', {
  //     scale: 0.14,
  //     x: screenwidth / 8,
  //     y: -screenheight / 2 + 30,
  //     duration: 2,
  //     ease: 'linear',
  //     transformOrigin: 'center top',

  //   });
  //   tl.to('.image-wrapper  #img', {
  //     scale: 1,
  //     x: 0,
  //     y: 0,
  //     duration: 2,
  //     ease: 'linear',
  //   });

  // }, [ScrollTrigger]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
        const screenheight = window.innerHeight;
        const screenwidth = window.innerWidth;
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline()
        const scroll2 = ScrollTrigger.create({
          trigger: '.cont',
          start: '-150% center',
          end: 'bottom center',
          animation: tl,
          scrub: 1,
          markers: true
        });
        tl.from('.image-wrapper #img', {
          scale: 0.14,
          x: screenwidth / 8,
          y: -screenheight / 2 + 30,
          duration: 2,
          ease: 'linear',
          transformOrigin: 'center top',

        });
        tl.to('.image-wrapper  #img', {
          scale: 1,
          x: 0,
          y: 0,
          duration: 2,
          ease: 'linear',
        });
      }
    )
    return () => {
      ctx.clear()
    }
  }, [ScrollTrigger, window.innerHeight, window.innerWidth, window.scrollY, window.scrollX, window.scroll, window.scrollBy, window.scrollTo])

  // useEffect(() => {
  //   const screenheight = window.innerHeight;
  //   const screenwidth = window.innerWidth;
  //   gsap.registerPlugin(ScrollTrigger);
  //   const tl = gsap.timeline()
  //   ScrollTrigger.create({
  //       trigger: '.cont',
  //       start: '-150% center',
  //       end: 'bottom center',
  //       animation: tl,
  //       scrub: 1,
  //       markers:false
  //   });
  //   tl.from('.image-wrapper #img', {
  //     scale: 0.14,
  //     x: screenwidth/8,
  //     y: -screenheight/2 + 30,
  //     duration: 2,
  //     ease: 'linear',
  //     transformOrigin: 'center top',
  //   });
  //   tl.to('.image-wrapper  #img', {
  //     scale: 1,
  //     x: 0,
  //     y: 0,
  //     duration: 2,
  //     ease: 'linear',
  //   });
  //   return () => {
  //     ScrollTrigger.getAll().forEach(t => t.kill());
  //   }
  // }, [ScrollTrigger]);

  return (
    <div className="cont">
      <div className="image-wrapper px-6 md:px-24">
        <img src={large} alt="large" id="img" className='hidden md:flex my-auto w-full mx-auto md:pt-36' />
      </div>
      <img src={large} alt="large" className='md:hidden py-9 px-6' />
    </div>
  );
};

export default Landing2;
