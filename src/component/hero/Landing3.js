import React, { useEffect,useState } from 'react';
import './test.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Landing3 = () => {
  const [runEffect, setRunEffect] = useState(true);
  useEffect(() => {
    if (!runEffect) return; // If runEffect is false, return early
    
    gsap.registerPlugin(ScrollTrigger);
    const textElements = gsap.utils.toArray('.text');

    textElements.forEach(text => {
      gsap.to(text, {
        backgroundSize: '100%',
        ease: 'none',
        delay: 1.5,
        scrollTrigger: {
          trigger: text,
          start: 'top bottom',
          end: 'bottom center',
          scrub: true,
          markers: false,
        },
      });
    });

    // Set runEffect to false to prevent the effect from running again
    setRunEffect(false);
  }, [runEffect]);


  return (
    <div className='px-6 md:px-24 py-12 md:py-24 '>
      <p className='font-medium text-2xl md:text-5xl leading-10 md:!leading-[78px] text-center'>
      <span className='text'>At Procube, we unlock innovation's power. Collaborating with brands and visionaries, we revitalize identities, craft impactful digital journeys, and lead transformative advancements. Welcome to Procube, where innovation fuels growth, redefines brands, and turns dreams into reality
      </span>
      </p>
    </div>
  );
};

export default Landing3;
