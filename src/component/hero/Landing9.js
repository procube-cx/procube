import React, { useEffect } from 'react';
import icon from '../../assets/images/expertise.png';
import arrowIcon from '../../assets/images/exploreMore.png';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import './hero.css';
import icon2 from '../../assets/images/icons/icon2.png'

const data = [
    {
        heading: "Selling Your Products Online in 2023: A Step-by-Step Guide From Choosing Products to Marketing.",
        icon: icon,
        date: "June 23, 2023",
    },
    {
        heading: "Unlocking the Power of Lead Generation for Your Business; Your B2B Growth Book",
        icon: icon,
        date: "June 23, 2023",
    },
    {
        heading: "Discovering the Ideal Tech Co-Founder for Your Product Venture; From Strategizing to Scaling",
        icon: icon,
        date: "June 23, 2023",
    },
    {
        heading: "Selling Your Products Online in 2023: A Step-by-Step Guide From Choosing Products to Marketing.",
        icon: icon,
        date: "June 23, 2023",
    },
    {
        heading: "Selling Your Products Online in 2023: A Step-by-Step Guide From Choosing Products to Marketing.",
        icon: icon,
        date: "June 23, 2023",
    }
];

const Card = (heading, icon, date, key) => {

    useEffect(() => {
        gsap.set(`.landing #img-${key}`, { x: -300, y: 0, skewY: 0, opacity: 0, transformOrigin: "right bottom" });
    }, [key]);

    const handleHover = (e) => {
        gsap.to(`.landing #img-${key}`, { x: 0, y: 0, skewY: 0, duration: 0.3, opacity: 1, transformOrigin: "right bottom" }); // Scale up on hover
    };

    const handleHoverExit = (e) => {
        gsap.to(`.landing #img-${key}`, { x: -300, y: 0, skewY: 0, duration: 0.3, opacity: 0, transformOrigin: "right bottom" }); // Scale down on hover exit
    };

    return (
        <motion.div className='flex w-full even:border-y-[2px] border-opacity-40 border-white gap-2 md:gap-4 py-5 md:py-8' key={key}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverExit}
        >
            <div className='grid grid-cols-12 flex-1 landing gap-y-5'>
                <img id={`img-${key}`} src={icon} alt="icon" className='col-span-3 w-full md:w-11/12 my-auto hidden md:block' />
                <img src={icon} alt="icon" className='col-span-12 md:col-span-3 w-full md:w-11/12 my-auto md:hidden' />
                <div className='col-span-12 md:col-span-8 flex flex-col justify-center gap-y-5 md:gap-y-16'>
                    <p className='my-auto font-normal text-2xl md:text-5xl'>{heading}</p>
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
        <div className='px-6 md:px-24 py-14'>
            <p className='font-normal text-4xl md:text-8xl max-w-4xl text-center uppercase mx-auto py-5 md:py-20'>BLOGS</p>
            {data.map((cardDetail, index) => (Card(cardDetail.heading, cardDetail.icon, cardDetail.date, index)))}
            <img src={arrowIcon} alt="arrow" className='w-24 md:w-36 mx-auto my-10 md:my-16 hover:opacity-55' />
        </div>
    );
};

export default Landing9;
