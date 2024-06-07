import React, { useEffect, useState } from 'react';
import icon from '../../assets/images/expertise.png';
import arrowIcon from '../../assets/images/exploreMore.png';
import '../hero/hero.css';
import icon2 from '../../assets/images/icons/icon2.png'
import icon3 from '../../assets/images/icons/icon3_purple.svg'

const data = [
    {
        heading: "Who we are",
        description: "We are Procube, a team of experts in growth, design, innovation, and collaboration. Our mission is to transform brands through strategic planning, creative design, and latest technology. We thrive on collective brilliance, ensuring every project reflects our clients' unique visions and goals.",
    },
    {
        heading:"What we Do",
        description:"Our strategists create  data-driven roadmaps to elevate your brand. Our designers combine stunning visuals with seamless user experiences. Our developers create scalable solutions for effortless user journeys, fostering collaboration to bring your vision to life."
    }
];

const Card = ({ cardDetail, index }) => {
    const { heading, description } = cardDetail;




    return (
        <div className='flex w-full even:border-y-[2px] odd:border-t-[2px] border-opacity-40 border-white gap-2 md:gap-4 ' key={index}>
            <div className='grid grid-cols-8 flex-1 line py-5 md:py-[70px] overflow-hidden gap-y-5'>
                <div className='col-span-8 md:col-span-4 md:my-auto flex flex-row justify-start gap-x-4 md:gap-x-8 md:px-4'>
                    <p className='md:col-span-3 font-normal text-4xl md:text-7xl  uppercase'>{heading}</p>
                    <img src={icon3} alt="icon" className={`w-10 md:w-20 my-auto flex col-span-1 `} />
                </div>
                <div className='col-span-8 md:col-span-4 grid grid-cols-2 gap-y-2'>
                    <p className={`col-span-3 md:col-span-2 font-normal text-base md:text-lg flex my-auto opacity-40`}>{description}</p>
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