import React from 'react'
import Navbar from '../component/hero/Navbar';
import Footer from '../component/hero/Footer';
import NextUp from '../component/NextUp';
import Contact1 from '../component/contact/Contact1';
import Contact3 from '../component/contact/Contact3';
import Contact2 from '../component/contact/Contact2';

const Contact = () => {
  return (
    <div className=' text-white bg-[#121212]' >
      <Navbar />
      <Contact1 />
      <Contact2 />
      <Contact3 />

      <NextUp Heading={'Services'} />
      <Footer />
    </div>
  )
}

export default Contact