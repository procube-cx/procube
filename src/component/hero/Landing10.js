// import React, { useState, useEffect, useLayoutEffect } from 'react';
// import { motion } from 'framer-motion';
// import arrowIcon from '../../assets/images/exploreMore.png';
// import image1 from '../../assets/images/project-image/image1.png';
// import image2 from '../../assets/images/project-image/image2.png';
// import image3 from '../../assets/images/project-image/image3.png';
// import image4 from '../../assets/images/project-image/image4.png';
// import gsap from 'gsap';
// import AnimatedParagraph from '../AnimatedPara';
// import { ScrollTrigger } from 'gsap/all';

// const data = [
//   {
//     name: 'Louis Vuitton',
//     desc: 'Branding, Web Design, App Development, Marketing',
//     icon: image1,
//   },
//   {
//     name: 'Pizza Hut',
//     desc: 'Branding, Web Design, App Development, Marketing',
//     icon: image2,
//   },
//   {
//     name: 'Apple',
//     desc: 'Branding, Web Design, App Development, Marketing',
//     icon: image4,
//   },
//   {
//     name: 'Nike',
//     desc: 'Branding, Web Design, App Development, Marketing',
//     icon: image3,
//   },
// ];

// const Landing10 = () => {
//   const mobile = window.innerWidth < 768;
//   const [display, setDisplay] = useState(false);
//   const [margin, setMargin] = useState(0);



//   // useEffect(() => {
//   //   if (mobile) return;

//   //   gsap.registerPlugin(ScrollTrigger);
//   //   const tl = gsap.utils.toArray('.panel');

//   //   const scroll1 = ScrollTrigger.create({
//   //     trigger: '.horizontal-scroll-wrapper',
//   //     pin: true,
//   //     scrub: 1,
//   //     end: () => '+=' + document.querySelector('.horizontal-scroll-wrapper').offsetWidth,
//   //     markers: false,
//   //     animation: gsap.to(tl, {
//   //       xPercent: -100 * (tl.length - 1),
//   //       ease: 'none',
//   //     }),
//   //   });

//   //   return () => {
//   //     if (scroll1) {
//   //       scroll1.kill();
//   //     }
//   //   }
//   // }, [ScrollTrigger]);

//   useLayoutEffect(() => {
//     let ctx2 = gsap.context(() => {
//       if (mobile) return;

//       gsap.registerPlugin(ScrollTrigger);
//       const tl = gsap.utils.toArray('.panel');

//       const scroll1 = ScrollTrigger.create({
//         trigger: '.horizontal-scroll-wrapper',
//         pin: true,
//         scrub: 1,
//         end: () => '+=' + document.querySelector('.horizontal-scroll-wrapper').offsetWidth,
//         markers: false,
//         animation: gsap.to(tl, {
//           xPercent: -100 * (tl.length - 2.1),
//           ease: 'none',
//         }),
//         onUpdate(self) {
//           console.log(self.progress.toFixed(3) * 100)
//           if (self.progress.toFixed(3) > 0.75) {
//             let margin1 = (self.progress.toFixed(3) * 600) + 1300
//             setMargin(margin1)
//             setMargin(1300)
//             setDisplay(true)
//           }
//           else {
//             setDisplay(false)
//           }
//         }
//       });
//     });
//     return () => {
//       ctx2.revert()
//     }
//   }, [ScrollTrigger, gsap, mobile]);




//   return (
//     <div className='px-6 md:px-0 py-12 md:py-14 md:mt-14 flex flex-col horizontal-scroll-wrapper md:h-[130vh]'>
//       <AnimatedParagraph className='font-normal text-4xl md:text-8xl !leading-tight uppercase text-center pb-10 md:pb-[50px]'>Our projects</AnimatedParagraph>
//       <div className='flex flex-col md:flex-row  overflow-x-hidden overflow-y-hidden '>
//         <div className='flex flex-col md:flex-row gap-y-5 md:gap-x-10 md:pl-28' >
//           {data.map((item, index) => (
//             <div className={`md:w-[50vw] w-full flex flex-col cursor-pointer  panel `} key={index}>
//               <img src={item.icon} alt={item.name} className='md:w-[600px] mb-3 md:mb-7' />
//               <p className='text-xl font-normal md:text-4xl'>{item.name}</p>
//               <p className='text-xs font-normal md:text-lg opacity-60'>{item.desc}</p>
//             </div>
//           ))}
//             <img src={arrowIcon} alt="arrow" className={`w-24 md:w-48 hidden md:flex flex-row my-auto hover:opacity-55 cursor-pointer panel -ml-[${margin}px] flex-end ${!display && 'md:hidden'} `} />
//         </div>
//         <div className='md:hidden'>
//           <img src={arrowIcon} alt="arrow" className='w-24 md:hidden mx-auto mt-10 hover:opacity-55 cursor-pointer' />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Landing10;


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import arrowIcon from '../../assets/images/exploreMore.png';
import image1 from '../../assets/images/project-image/image1.png';
import image2 from '../../assets/images/project-image/image2.png';
import image3 from '../../assets/images/project-image/image3.png';
import image4 from '../../assets/images/project-image/image4.png';
import gsap from 'gsap';
import AnimatedParagraph from '../AnimatedPara';

const data = [
  {
    name: 'Hyperama',
    desc: 'Ecommerce Development, Branding and Inventory Management',
    icon: image1,
  },
  {
    name: 'PetBey',
    desc: 'UI/UX, Android & iOS App Development, Website Development',
    icon: image2,
  },
  {
    name: 'Beacon Management Consultant',
    desc: 'Logo, Branding, UI/UX Designing, Website Development',
    icon: image3,
  },
  {
    name: 'Riyas Hakkim',
    desc: 'Logo, Branding, UI/UX Designing, Website Development',
    icon: image4,
  },

];

const Project1 = () => {





  return (
    <div className='px-6 md:px-24 py-12 md:py-24 flex flex-col'>
      <AnimatedParagraph className='font-normal text-4xl md:text-8xl !leading-tight uppercase text-center pb-10 md:pb-[70px]'>Our projects</AnimatedParagraph>
      <div className='grid grid-cols-2 w-full gap-x-8 md:gap-x-16 overflow-x-auto gap-y-5 md:gap-y-14' >
        {data.map((item, index) => (
          <div
            className='flex-1 flex flex-col cursor-pointer w-full col-span-2 md:col-span-1 overflow-hidden'
          >
            <div className='rounded-lg md:rounded-2xl overflow-hidden'>
              <motion.img
                src={item.icon}
                alt={item.name}
                className='w-full '
                whileHover={{ scale: 1.15, transition: { duration: 0.5, ease: 'easeInOut' } }}
              />
            </div>
            <p className='text-xl font-normal md:text-4xl mt-3 md:mt-7'>{item.name}</p>
            <p className='text-xs font-normal md:text-lg opacity-60'>{item.desc}</p>
          </div>
        ))}
      </div>
      <a href='/projects'>
        <img src={arrowIcon} alt="arrow" className='w-24 md:w-36 mx-auto mt-10 md:mt-16 hover:opacity-55 cursor-pointer' />
      </a>
    </div>
  );
};

export default Project1;

