import React, { useEffect } from 'react';
import large from '../../assets/images/About/img1.webp';
import larges from '../../assets/images/large-1s.png';

const About1 = () => {

  return (
    <div className="image-wrapper pt-28 md:pt-36">
      <img src={large} alt="large" className='hidden md:flex my-auto w-4/5 mx-auto  rounded-3xl' />
      <img src={larges} alt="large" className='md:hidden  px-6' />
    </div>
  );
};

export default About1;
