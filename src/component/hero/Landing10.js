import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import arrowIcon from '../../assets/images/exploreMore.png';
import image1 from '../../assets/images/project-image/image1.png';
import image2 from '../../assets/images/project-image/image2.png';
import image3 from '../../assets/images/project-image/image3.png';
import image4 from '../../assets/images/project-image/image4.png';

const data = [
  {
    name: 'Louis Vuitton',
    desc: 'Branding, Web Design, App Development, Marketing',
    icon: image1,
  },
  {
    name: 'Pizza Hut',
    desc: 'Branding, Web Design, App Development, Marketing',
    icon: image2,
  },
  {
    name: 'Nike',
    desc: 'Branding, Web Design, App Development, Marketing',
    icon: image3,
  },
  {
    name: 'Apple',
    desc: 'Branding, Web Design, App Development, Marketing',
    icon: image4,
  },
];

const Landing10 = () => {
  const [cardScales, setCardScales] = useState(
    data.map((_, index) => ((index % 4 === 0) || ((index + 1) % 4 === 0) ? 1.15 : 0.7))
  );
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    const handleMouseMove = (event) => {
      const newCardScales = data.map((_, index) => {
        const card = document.getElementById(`card-${index}`);
        if (!card) return cardScales[index];
        const rect = card.getBoundingClientRect();        
        const thresholdDistance = rect.width * 4.5; 
        const height = rect.height;
        if (index % 2 !== 0) {
          const centerX = rect.right;
          const centerY = rect.top;
          const distanceX = 1-(event.clientX - centerX);
          const distanceY = event.clientY - centerY;
          if (distanceX < thresholdDistance && distanceY < (height * 1.1)  && distanceY > 0) {
            return Math.max(0.7, 0.8 - ((1.6 * distanceX - thresholdDistance)/100) / 100);
          }
          else {
            return cardScales[index];
          }
        } else {
          const centerX = rect.left;
          const centerY = rect.top ;
          const distanceX = event.clientX - centerX;
          const distanceY = event.clientY - centerY
          if (distanceX < thresholdDistance && distanceY < (height * 1.1) && distanceY > 0) {
            return Math.max(0.7, 0.8 - ((1.6 * distanceX - thresholdDistance)/100) / 100);
          }
          else {
            return cardScales[index];
          }
        }
      });
      setCardScales(newCardScales);
    };
  
    document.addEventListener('mousemove', handleMouseMove);
  
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [cardScales, data]);
  
  
  



  return (
    <div className='px-6 md:px-24 py-16 md:py-28'>
      <p className='font-normal text-4xl md:text-8xl !leading-tight uppercase text-center'>Our projects</p>
      <div className='grid grid-cols-2 w-full gap-x-8 md:gap-x-16 gap-y-5 md:gap-y-36' >
        {data.map((item, index) => (
          <motion.div
            key={index}
            id={`card-${index}`}
            className='col-span-2 md:col-span-1 flex flex-col justify-center  cursor-pointer'
            style={isMobile ? ({scale:1}) : (index % 2 ? { scale: cardScales[index] , transformOrigin: 'top right'} : { scale: cardScales[index], transformOrigin: 'top left' })}
          >
            <img src={item.icon} alt={item.name} className='w-full mb-7' />
            <p className='text-xl font-normal md:text-4xl'>{item.name}</p>
            <p className='text-xs font-normal md:text-lg opacity-60'>{item.desc}</p>
          </motion.div>
        ))}
      </div>
      <img src={arrowIcon} alt="arrow" className='w-24 md:w-36 mx-auto my-10 md:my-10 hover:opacity-55 cursor-pointer' />
    </div>
  );
};

export default Landing10;
