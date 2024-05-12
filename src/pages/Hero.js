import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar2 from '../component/hero/Navbar2';
import Navbar from '../component/hero/Navbar';
import Landing1 from '../component/hero/Landing1';
import Landing2 from '../component/hero/Landing2';
import Landing3 from '../component/hero/Landing3';
import Landing4 from '../component/hero/Landing4';
import Landing5 from '../component/hero/Landing5';
import Marquee from '../component/hero/Marquee';
import Lanidng7 from '../component/hero/Landing7';
import Landing10 from '../component/hero/Landing10';
import Landing6 from '../component/hero/Landing6';
import Landing8 from '../component/hero/Landing8';
import Landing9 from '../component/hero/Landing9';
import Footer from '../component/hero/Footer';
import Preloader from '../component/proloader';
import Popup from '../component/Popup';
import Whatsapp from '../component/Whatsapp';

function Hero() {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [open, setOpen] = React.useState(true)
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading2(true);
    }, 5000);
  }, []);

  React.useEffect(() => {
    const progressBar = document.querySelector('.scroll-progress');
    const scrollHandler = () => {
      let totalHeight = window.innerHeight;
      let progress = (window.pageYOffset / totalHeight) * 100;
      if (progress > 100) {
        progress = 100;
        setNavbar(true);
      }
      else {
        setNavbar(false);
      }
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <div className=' text-white bg-[#121212] ' >
      {loading ?
        (
          <Preloader />
        ) : (
          <div >
            <Navbar2 />
            {
              navbar && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={navbar ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Navbar />
                </motion.div>
              )
            }
            <div className='scroll-progress'>
              <Landing1 />
            </div>
            {/* <Landing2 /> */}
            {loading2 && (
              <Landing3 />
            )}
            <Landing4 />
            <Landing5 />
            <Marquee />
            <Lanidng7 />
            {
              loading2 && (
                <Landing10 />
              )
            }
            <Landing6 />
            <Landing8 />
            <Landing9 />
            <Footer />
          </div>
        )}
        <Popup open={open} setOpen={setOpen}/>
        <Whatsapp />
    </div>
  );
}

export default Hero;
