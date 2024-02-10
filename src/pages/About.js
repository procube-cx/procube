import React from 'react';
import Navbar from '../components/Navbar';
import Landing2 from '../components/hero/Landing2';
import Landing3 from '../components/hero/Landing3';
import Landing5 from '../components/hero/Landing5';
import Landing9 from '../components/hero/Landing9';
import Footer from '../components/Footer';

function About() {

  return (
    <div className=' text-white bg-[#121212]' >
          <Navbar />
          <Landing2 />
          <Landing3 />
          <Landing5 />
          <Landing9 />
          <Footer />
    </div>
  );
}

export default About;
