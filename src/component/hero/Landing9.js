import React, { useEffect } from 'react';
import icon2 from '../../assets/images/icons/icon2.svg';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import './hero.css';
import arrowIcon from '../../assets/images/exploreMore.png';
import AnimatedParagraph from '../AnimatedPara';
import img1 from '../../assets/images/Blogs/img1.webp';
import img2 from '../../assets/images/Blogs/img2.webp';
import img3 from '../../assets/images/Blogs/img3.webp';

const data = [
    {
        heading: "Selling Your Products Online in 2023: A Step-by-Step Guide From Choosing Products to Marketing.",
        icon: img1,
        date: "June 23, 2023",
    },
    {
        heading: "Unlocking the Power of Lead Generation for Your Business; Your B2B Growth Book",
        icon: img2,
        date: "June 23, 2023",
    },
    {
        heading: "Discovering the Ideal Tech Co-Founder for Your Product Venture; From Strategizing to Scaling",
        icon: img3,
        date: "June 23, 2023",
    },
];

const Card = ({ heading, icon, date, index }) => {
    const isMobile = window.innerWidth < 768;
    useEffect(() => {
        // Check if it's a mobile device

        // Apply animation only if it's not a mobile device
        if (!isMobile) {
            gsap.set(`.landing #img-${index}`, { x: "-100%", duration: 0.3, opacity: 0, transformOrigin: "right bottom" });
            gsap.set(`.landing #text-${index}`, { x: "-25%", duration: 0.3, width: "137%", opacity: 1, transformOrigin: "right bottom" });
        }
    }, [index, isMobile]);

    const handleHover = () => {
        const isMobile = window.innerWidth < 768;

        // Apply animation only if it's not a mobile device
        if (!isMobile) {
            gsap.to(`.landing #img-${index}`, { x: 0, duration: 0.3, opacity: 1, transformOrigin: "right bottom" });
            gsap.to(`.landing #text-${index}`, { x: 0, duration: 0.3, width: "100%", opacity: 1, transformOrigin: "right bottom" });
        }
    };

    const handleHoverExit = () => {
        const isMobile = window.innerWidth < 768;

        // Apply animation only if it's not a mobile device
        if (!isMobile) {
            gsap.to(`.landing #img-${index}`, { x: "-100%", duration: 0.3, opacity: 0, transformOrigin: "right bottom" });
            gsap.to(`.landing #text-${index}`, { x: "-25%", duration: 0.3, width: "137%", opacity: 1, transformOrigin: "right bottom" });
        }
    };

    return (
        <motion.div className='overflow-hidden flex w-full odd:border-y-[2px] border-opacity-40 border-white gap-2 md:gap-4 py-5 md:py-8 cursor-pointer' key={index}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverExit}
        >
            <div className='md:min-h-[210px] grid grid-cols-12 flex-1 landing gap-y-5'>
                <img id={`img-${index}`} src={icon} alt="icon" className='col-span-12 md:col-span-3 w-full md:w-11/12 my-auto block rounded-2xl' />
                <div id={`text-${index}`} className='col-span-12 md:col-span-8 flex flex-col justify-center md:justify-around gap-y-5 md:gap-y-3'>
                    <p className=' font-normal text-2xl md:text-5xl'>{heading}</p>
                    <div className='py-2 px-5 md:py-3 md:px-8 rounded-[78px] bg-[#1A1A1A] mr-auto'>
                        <p className='text-sm md:text-lg'>{date}</p>
                    </div>
                </div>
                <div className=' md:col-span-1 w-full hidden md:block'>
                    <img src={icon2} alt="icon" className={` w-9 ml-auto }`} />
                </div>
            </div>
        </motion.div>
    );
};

const Landing9 = () => {
    return (
        <div className='px-6 md:px-24 pb-12 md:pb-24 flex flex-col'>
            <AnimatedParagraph className='font-normal text-4xl md:text-8xl max-w-4xl text-center uppercase mx-auto pb-10 md:pb-[70px]'>BLOGS</AnimatedParagraph>
                
            <div>
            {data.map((cardDetail, index) => (
                <Card
                    heading={cardDetail.heading}
                    icon={cardDetail.icon}
                    date={cardDetail.date}
                    index={index}
                    key={index}
                />
            ))}
            </div>
            <img src={arrowIcon} alt="arrow" className='w-24 md:w-36 mx-auto my-10 md:my-16 hover:opacity-55 cursor-pointer' />
        </div>
    );
};

export default Landing9;
