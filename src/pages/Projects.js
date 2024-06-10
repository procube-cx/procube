import React from 'react'
import Navbar from '../component/hero/Navbar';
import Footer from '../component/hero/Footer';
import NextUp from '../component/NextUp';
import Career1 from '../component/career/Career1';
import Career2 from '../component/career/Career2';
import Project1 from '../component/project/Project1';

const Projects = () => {

  React.useEffect(() => {
    document.title = 'Projects'
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