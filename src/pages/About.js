import React from 'react';
import Navbar from '../component/hero/Navbar';
import Landing3 from '../component/hero/Landing3';
import Footer from '../component/hero/Footer';
import About1 from '../component/about/About1';
import About2 from '../component/about/About2';
import About4 from '../component/about/About4';

function About() {

  return (
    <div className=' text-white bg-[#121212]' >
          <Navbar />
          <About1 />
          <Landing3 />
          <About2/>
          <About4 />
          <Footer />
    </div>
  );
}

export default About;
