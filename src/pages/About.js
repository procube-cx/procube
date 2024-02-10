import React, { useState } from 'react';
import Navbar from '../component/hero/Navbar';
import Landing1 from '../component/hero/Landing1';
import Landing2 from '../component/hero/Landing2';
import Landing3 from '../component/hero/Landing3';
import Landing4 from '../component/hero/Landing4';
import Landing5 from '../component/hero/Landing5';
import Marquee from '../component/hero/Marquee';
import Lanidng7 from '../component/hero/Landing7';
import Landing10 from '../component/hero/Landing10';
import Landing6 from '../component/hero/Landing6';
import Landing8 from '../component/hero/Landing8';
import Landing9 from '../component/hero/Landing9';
import Footer from '../component/hero/Footer';
import Preloader from '../component/proloader';

function About() {

  return (
    <div className=' text-white bg-[#121212]' >
          <Navbar />
          {/* <Landing1 /> */}
          <Landing2 />
          <Landing3 />
          <Landing5 />
          <Landing9 />
          <Footer />
    </div>
  );
}

export default About;
