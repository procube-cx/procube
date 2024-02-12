import React, { useEffect, useState } from 'react';
import icon from '../../assets/images/expertise.png';
import arrowIcon from '../../assets/images/exploreMore.png';
import '../hero/hero.css';
import icon2 from '../../assets/images/icons/icon2.png'
import icon3 from '../../assets/images/icons/icon3_purple.png'

const data = [
    {
        heading: "Who we are",
        description: "At Procube, we are a passionate team of creators, strategists, and innovators. We're more than just professionals; we're dreamers, thinkers, and doers. Our diverse backgrounds and experiences enrich our approach, allowing us to see challenges from multiple perspectives and find creative solutions. We thrive on collaboration, pushing the boundaries of what's possible, and, most importantly, making a positive impact on the digital landscape",
    },
    {
        heading:"What we Do",
        description:"At Procube, we specialize in crafting exceptional digital experiences with three core pillars: technology, design, and strategy. We empower businesses with cutting-edge technology, create lasting brand impressions through captivating design, and ensure every project becomes a transformative journey. We work closely with clients, diving into brainstorming, design, and strategic development, delivering remarkable results that redefine user engagement."
    }
];

const Card = ({ cardDetail, index }) => {
    const { heading, description } = cardDetail;




    return (
        <div className='flex w-full even:border-y-[2px] odd:border-t-[2px] border-opacity-40 border-white gap-2 md:gap-4 ' key={index}>
            <div className='grid grid-cols-8 flex-1 line py-5 md:py-12 overflow-hidden gap-y-5'>
                <div className='col-span-8 md:col-span-4 md:my-auto flex flex-row justify-between md:justify-start md:gap-x-8'>
                    <p className='md:col-span-3 font-normal text-4xl md:text-7xl  uppercase'>{heading}</p>
                    <img src={icon3} alt="icon" className={`w-10 md:w-20 my-auto flex col-span-1 md:mx-auto`} />
                </div>
                <div className='col-span-8 md:col-span-4 grid grid-cols-2 gap-y-2'>
                    <p className={`col-span-3 md:col-span-2 font-normal text-base md:text-lg flex my-auto opacity-60`}>{description}</p>
                </div>
            </div>
        </div>
    );
};

const About2 = () => {

    return (
        <div className='px-6 md:px-24'>
            {data.map((cardDetail, index) => (
                <Card
                    key={index}
                    cardDetail={cardDetail}
                    index={index}
                />
            ))}
        </div>
    );
};

export default About2;