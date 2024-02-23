import React from 'react';
import Navbar from '../component/hero/Navbar';
import Landing3 from '../component/hero/Landing3';
import Footer from '../component/hero/Footer';
import About1 from '../component/about/About1';
import About2 from '../component/about/About2';
import About4 from '../component/about/About4';
import About3 from '../component/about/About3';
import NextUp from '../component/NextUp';
import Partner1 from '../component/Partner/Partner1';
import Partner2 from '../component/Partner/Partner2';
import Partner4 from '../component/Partner/Partner4';
import Partner6 from '../component/Partner/Partner6';
import Partner3 from '../component/Partner/Partner3';

function Partner() {

  return (
    <div className=' text-white bg-[#121212]' >
      <Navbar />
      <About1 />
      <Landing3 />
      <Partner1 />
      <Partner2 />
      <Partner3 />
      <Partner4 />
      <Partner6 />
      <NextUp Heading={'Services'} />
      <Footer />
    </div>
  );
}

export default Partner;
