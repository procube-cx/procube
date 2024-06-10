import React from 'react'
import Navbar from '../component/hero/Navbar';
import Footer from '../component/hero/Footer';
import NextUp from '../component/NextUp';
import Career1 from '../component/career/Career1';
import Career2 from '../component/career/Career2';

const Career = () => {

  React.useEffect(() => {
    document.title = 'Careers | Come Join Us'
    const setMetaDescription = document.querySelector('meta[name="description"]').setAttribute("content", "Join the dynamic team at Procube and advance your career in digital marketing, web development, app development, and more. Explore exciting job opportunities, professional growth, and a collaborative work environment.")

  }, [])

  return (
    <div className=' text-white bg-[#121212]' >
      <Navbar />
      <Career1 />
      <Career2 />
      <NextUp Heading={'About us'} />
      <Footer />
    </div>
  )
}

export default Career