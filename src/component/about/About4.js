import React, { useEffect } from 'react';
import icon2 from '../../assets/images/icons/icon2.png';
import gsap from 'gsap';
import '../hero/hero.css';
import icon from '../../assets/images/icons/icon4.png';
import arrowIcon from '../../assets/images/exploreMore.png';

const data = [
    {
        heading: "Excellence",
        icon: icon,
        details: "Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Lorem ipsum dolor sit amet consectetur Commodo etiam vestibulum quam tristique non venenatis sed. Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt  Commodo etiam vestibulum quam tristique non venenatis sed.",
    },
    {
        heading: "Team Work",
        icon: icon,
        details: "Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Lorem ipsum dolor sit amet consectetur Commodo etiam vestibulum quam tristique non venenatis sed. Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt  Commodo etiam vestibulum quam tristique non venenatis sed.",
    },
    {
        heading: "Excellence",
        icon: icon,
        details: "Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Lorem ipsum dolor sit amet consectetur Commodo etiam vestibulum quam tristique non venenatis sed. Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt  Commodo etiam vestibulum quam tristique non venenatis sed.",
    },
    {
        heading: "Competence",
        icon: icon,
        details: "Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Lorem ipsum dolor sit amet consectetur Commodo etiam vestibulum quam tristique non venenatis sed. Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt  Commodo etiam vestibulum quam tristique non venenatis sed.",
    },
];

const Card = ({ heading, icon, details, index }) => {

    const isLastCard = index === data.length - 1;

    return (
        <div
            className={`overflow-hidden flex w-full border-t-[1px] border-opacity-40 border-white ${isLastCard ? 'border-b-[2px]' : ''} gap-2 md:gap-4 py-5 md:py-8 cursor-pointer`}
            key={index}
        >
            <div className='md:min-h-[210px] grid grid-cols-12 flex-1 landing md:gap-y-5'>
                <img src={icon} alt="icon" className='col-span-12 md:col-span-3 w-4/12 md:w-6/12 my-auto block md:mx-auto' />
                <div className='col-span-12 md:col-span-8 flex flex-col justify-center md:justify-between gap-y-5 md:gap-y-3'>
                    <p className=' font-normal text-2xl md:text-4xl'>{heading}</p>
                    <p className='text-sm md:text-lg opacity-60'>{details}</p>
                </div>
            </div>
        </div>
    );
};

const About4 = () => {
    return (
        <div className='px-6 md:px-24 py-10 md:py-20 flex flex-col  '>
            <p className='font-normal text-4xl md:text-8xl max-w-4xl text-center uppercase mx-auto pb-6 md:pb-16'>Our Values</p>
                {data.map((cardDetail, index) => (
                    <Card
                        heading={cardDetail.heading}
                        icon={cardDetail.icon}
                        details={cardDetail.details}
                        index={index}
                        key={index}
                    />
                ))}
        </div>
    );
};

export default About4;
