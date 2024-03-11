import React, { useEffect, useRef } from 'react';
import large from '../../assets/images/large-2.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const About3 = () => {


  return (
    <div className="cont mycontainer" >
      <div className="image-wrapper md:pt-36">

        <div className='flex my-auto w-4/5 h-[60vh] mx-auto overflow-hidden rounded-2xl relative' >
          <img src={large} alt="large" className='flex absolute h-full top-0 ' />
          <p className='flex z-20 justify-center items-center mx-auto text-xl md:text-5xl font-normal uppercase max-w-6xl text-center !leading-snug'>“With the brush of technology, the colors of design, and the canvas of strategy, we paint masterpieces.”</p>
        </div>
      </div>
    </div>
  );
};

export default About3;
