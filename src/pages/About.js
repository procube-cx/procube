import React from 'react';
import Navbar from '../component/hero/Navbar';
import Landing2 from '../component/hero/Landing2';
import Landing3 from '../component/hero/Landing3';
import Landing5 from '../component/hero/Landing5';
import Landing9 from '../component/hero/Landing9';
import Footer from '../component/hero/Footer';
import About2 from '../component/about/About2';

function About() {

  return (
    <div className=' text-white bg-[#121212]' >
          <Navbar />
          <Landing2 />
          <Landing3 />
          <About2/>
          {/* <Landing5 /> */}
          <Landing9 />
          <Footer />
    </div>
  );
}

export default About;
