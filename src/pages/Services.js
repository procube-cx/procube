import React from 'react';
import Landing10 from '../component/hero/Landing10';
import Footer from '../component/hero/Footer';
import NextUp from '../component/NextUp';
import Navbar from '../component/hero/Navbar';
import Landing6 from '../component/hero/Landing6';
import Landing8 from '../component/hero/Landing8';
import Services1 from '../component/services/Serives1';
import Services2 from '../component/services/Services2';

function Services() {

  React.useEffect(() => {
    document.title = 'Services'
  }, [])


  return (
    <div className=' text-white bg-[#121212]' >
      <Navbar />
      <Services1 />
      <Landing6 />
      <div className='md:h-10 w-full'></div>
      <Landing8 />
      <Services2 />
      <NextUp Heading={'Projects'} />
      <Footer />
    </div>

  );
}

export default Services;
