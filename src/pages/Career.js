import React from 'react'
import Navbar from '../component/hero/Navbar';
import Footer from '../component/hero/Footer';
import NextUp from '../component/NextUp';
import Career1 from '../component/career/Career1';

const Career = () => {
  return (
    <div className=' text-white bg-[#121212]' >
      <Navbar />
      <Career1/>

      <NextUp Heading={'About us'} />
      <Footer />
    </div>
  )
}

export default Career