import React from 'react'
import Navbar from '../component/hero/Navbar';
import Footer from '../component/hero/Footer';
import NextUp from '../component/NextUp';

const Contact = () => {
  return (
    <div className=' text-white bg-[#121212]' >
      <Navbar />

      <NextUp Heading={'Services'} />
      <Footer />
    </div>
  )
}

export default Contact