import React from 'react';
import Navbar from '../component/hero/Navbar';
import Landing3 from '../component/hero/Landing3';
import Footer from '../component/hero/Footer';
import Partner0 from '../component/Partner/Partner0';
import NextUp from '../component/NextUp';
import Partner1 from '../component/Partner/Partner1';
import Partner2 from '../component/Partner/Partner2';
import Partner4 from '../component/Partner/Partner4';
import Partner6 from '../component/Partner/Partner6';
import Partner3 from '../component/Partner/Partner3';
import Partner5 from '../component/Partner/Partner5';

function Partner() {

  return (
    <div className=' text-white bg-[#121212]' >
      <Navbar />
      <Partner0 />
      <Landing3 />
      <Partner1 />
      <Partner2 />
      <Partner3 />
      <Partner4 />
      <Partner5 />
      <Partner6 />
      <NextUp Heading={'Services'} />
      <Footer />
    </div>
  );
}

export default Partner;
