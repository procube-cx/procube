import React, { useEffect } from 'react';
import icon from '../../assets/images/expertise.png';
import arrowIcon from '../../assets/images/exploreMore.png';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import './hero.css';

const data = [
    {
        heading: "DIGITAL STRATEGY",
        icon: icon,
        title: ["Mobile App Design", "Research & Discovery", "Competitive analysis", "Design systems", "Prototyping", "Mobile App Design", "Research & Discovery", "Competitive analysis", "Design systems", "Prototyping"]
    },
    {
        heading: "BRANDING",
        icon: icon,
        title: ["Brand Strategy", "Brand Identity", "Brand Naming", "Brand Guidelines", "Brand Strategy", "Brand Identity", "Brand Naming", "Brand Guidelines"]
    },
    {
        heading: "UI/UX DESIGN",
        icon: icon,
        title: ["User Research", "User Experience Design", "User Interface Design", "User Research", "User Experience Design", "User Interface Design"]
    },
    {
        heading: "DEVELOPMENT",
        icon: icon,
        title: ["Web Development", "Mobile Development", "Web Development", "Mobile Development"]
    },
    {
        heading: "MARKETING",
        icon: icon,
        title: ["SEO", "Social Media Marketing", "Content Marketing", "SEO", "Social Media Marketing", "Content Marketing"]
    }
];

const Card = (heading, icon, title, key) => {

    useEffect(() => {
        // Set initial CSS properties for the image
        gsap.set(`#img-${key}`, { x: 0, y: 100, skewY: -90, opacity: 0, transformOrigin: "right bottom" });
    }, [key]);

    const handleHover = (e) => {
        gsap.to(`#img-${key}`, { x: 0, y: 0, skewY: 0, duration: 0.3, opacity: 1, transformOrigin: "right bottom" }); // Scale up on hover
    };

    const handleHoverExit = (e) => {
        gsap.to(`#img-${key}`, { x: 0, y: 100, skewY: -90, duration: 0.3, opacity: 0, transformOrigin: "right bottom" }); // Scale down on hover exit
    };

    return (
        <motion.div className='flex w-full odd:border-y-[0.5px] border-opacity-40 border-white gap-2 md:gap-4 py-3' key={key}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverExit}
        >
            <div className='grid grid-cols-3 flex-1 line'>
                <p className='col-span-1 my-auto font-normal text-5xl'>{heading}</p>
                <img id={`img-${key}`} src={icon} alt="icon" className='col-span-1 w-24 md:w-48 mx-auto my-auto' />
                <div className='col-span-1 grid grid-cols-2 gap-y-2'>
                    {title.map((text, index) => <p key={index} className='col-span-1 font-normal text-sm md:text-lg'>{text}</p>)}
                </div>
            </div>
        </motion.div>
    );
};

const Landing5 = () => {
    return (
        <div className='px-6 md:px-24 py-14'>
            {data.map((cardDetail, index) => (Card(cardDetail.heading, cardDetail.icon, cardDetail.title, index)))}
            <img src={arrowIcon} alt="arrow" className='mx-auto my-16 hover:opacity-55' />
        </div>
    );
};

export default Landing5;
