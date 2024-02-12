import React from 'react';
import Landing10 from '../component/hero/Landing10';
import Footer from '../component/hero/Footer';
import NextUp from '../component/NextUp';
import Navbar from '../component/hero/Navbar';

function Portfolio() {


  return (
    <div className=' text-white bg-[#121212]' >
      <Navbar />
      <Landing10 />
      <NextUp Heading={'Insights'} />
      <Footer />
    </div>

  );
}

export default Portfolio;
