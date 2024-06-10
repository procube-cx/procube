import React from 'react'
import Navbar from '../component/hero/Navbar';
import Footer from '../component/hero/Footer';
import NextUp from '../component/NextUp';
import Career1 from '../component/career/Career1';
import Career2 from '../component/career/Career2';
import Project1 from '../component/project/Project1';

const Projects = () => {

  React.useEffect(() => {
    document.title = 'Projects | Our Major Works'
    const setMetaDescription = document.querySelector('meta[name="description"]').setAttribute("content", "Discover Procube’s innovative projects that drive digital transformation and growth. Explore our portfolio of web development, app development, digital marketing, and branding solutions, showcasing our commitment to excellence and delivering measurable results. Partner with us to elevate your brand and achieve your business goals.")
  }
  , [])
  return (
    <div className=' text-white bg-[#121212]' >
      <Navbar />
      <Project1 />
      <NextUp Heading={'Services'} />
      <Footer />
    </div>
  )
}

export default Projects