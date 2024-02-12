import React, { useEffect } from 'react';
import large from '../../assets/images/large-2.png';

const About3 = () => {

  return (
    <div className="cont">
      <div className="image-wrapper ">
        <img src={large} alt="large" className='flex my-auto w-4/5 mx-auto md:pt-36' />
      </div>
      {/* <img src={larges} alt="large" className='md:hidden py-9 px-6' /> */}
    </div>
  );
};

export default About3;
