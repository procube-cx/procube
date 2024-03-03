import React, { useEffect } from 'react';
import large from '../../assets/images/About/img1.webp';
import larges from '../../assets/images/large-1s.png';

const About1 = () => {

  return (
    <div className="cont">
      <div className="image-wrapper md:pt-36">
        <img src={large} alt="large" className='hidden md:flex my-auto w-4/5 mx-auto  rounded-3xl' />
      </div>
      <img src={larges} alt="large" className='md:hidden py-32 px-6' />
    </div>
  );
};

export default About1;
