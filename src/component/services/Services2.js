import React from 'react';
import '../hero/hero.css';
import { Design } from '../../assets/images/Tech Logo/Logo';
import { Ecommerce } from '../../assets/images/Tech Logo/Logo';
import { Front } from '../../assets/images/Tech Logo/Logo';
import { Back } from '../../assets/images/Tech Logo/Logo';
import { Db } from '../../assets/images/Tech Logo/Logo';
import AnimatedParagraph from '../AnimatedPara';

const data = [
    {
        heading: "Design",
        tags: Design
    },
    {
        heading: "Frontend",
        tags: Front
    },
    {
        heading: "Backend",
        tags: Back
    },
    {
        heading: "DB & Cloud",
        tags: Db
    },
    {
        heading: "Ecommerce",
        tags: Ecommerce
    }
];

const Card = ({ heading, index, tags }) => {

    return (
        <div
            className={`flex w-full py-3 md:py-5 cursor-pointer`}
            key={index}
        >
            <div className='grid grid-cols-4 w-full gap-y-3 md:gap-y-8  bg-[#1A1A1A] md:py-16 pl-5 py-5 md:pl-[4.33vw] rounded-xl'>
                <p className='col-span-4 md:col-span-1 font-normal text-2xl md:text-5xl my-0 md:my-auto mx-auto md:mx-0'>{heading}</p>
                <div className='flex flex-row col-span-4 md:col-span-3 gap-x-2 md:gap-x-12 gap-y-2 md:gap-y-4 overflow-hidden justify-center md:justify-start'>
                    {tags.map((tag, index) => (
                        <img src={tag} key={index} className='aspect-square w-10 md:w-20'/>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Services2 = () => {
    return (
        <div className='px-6 md:px-24 pt-0 md:pt-20 flex flex-col'>
            <AnimatedParagraph className='font-normal text-4xl md:text-8xl text-center uppercase mx-auto pb-10 md:pb-[70px] !leading-tight'>THE TECH WE USE</AnimatedParagraph>
            {data.map((cardDetail, index) => (
                <Card
                    heading={cardDetail.heading}
                    index={index}
                    tags={cardDetail.tags}
                    key={index}
                />
            ))}
        </div>
    );
};

export default Services2;
