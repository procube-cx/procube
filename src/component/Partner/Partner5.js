import React, { useEffect, useRef } from 'react';
import bg from '../../assets/images/Partner/background.png'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Partner5 = () => {



  return (
    <div className=' px-6 md:px-24  py-9 md:py-24'>
      <div className=' bg-vector2 bg-no-repeat bg-cover bg-center rounded-xl md:rounded-3xl flex flex-col justify-center items-center mx-auto h-full  gap-y-5 md:gap-y-10 min-h-[50vh] md:min-h-[80vh]'>
        <p className='text-2xl md:text-5xl text-center uppercase max-w-4xl !leading-tight'>We're a full-service UX agency that rolls up our sleeves </p>
        <div className='button-hover bg-[#7605C1] px-12 md:px-16 py-3 md:py-4 text-base md:text-4xl rounded-full cursor-pointer'>Join Now</div>
      </div>



    </div>
  )
};

export default Partner5;
