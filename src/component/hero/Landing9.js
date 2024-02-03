import React, { useEffect } from 'react';
import icon from '../../assets/images/expertise.png';
import arrowIcon from '../../assets/images/exploreMore.png';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import './hero.css';

const data = [
    {
        heading: "Selling Your Products Online in 2023: A Step-by-Step Guide From Choosing Products to Marketing.",
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
        <motion.div className='flex w-full odd:border-y-[0.5px] border-opacity-40 border-white gap-2 md:gap-4 py-3' key={key}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverExit}
        >
            <div className='grid grid-cols-7 flex-1 landing'>
                <img id={`img-${key}`} src={icon} alt="icon" className='col-span-2 w-full md:w-3/4 my-auto' />
                <div className='col-span-5 flex justify-center'>
                <p className='my-auto font-normal text-5xl'>{heading}</p>
                </div>
            </div>
        </motion.div>
    );
};

const Landing9 = () => {
    return (
        <div className='px-6 md:px-24 py-14'>
            {data.map((cardDetail, index) => (Card(cardDetail.heading, cardDetail.icon, cardDetail.date, index)))}
            <img src={arrowIcon} alt="arrow" className='mx-auto my-16 hover:opacity-55' />
        </div>
    );
};

export default Landing9;
