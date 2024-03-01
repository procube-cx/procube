import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import icon2 from '../../assets/images/icons/icon2.svg';



const data = [
    {
        id: 1,
        title: "We're a full-service UX design  branding agency future?",
        description: "As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, experiences to personality. ",
    },
    {
        id: 2,
        title: "Rolls up our sleeves and works closely with our clients?",
        description: "As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, experiences to personality. ",
    },
    {
        id: 3,
        title: "We craft unforgettable experiences that span all platforms?",
        description: "As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, experiences to personality. ",
    },
    {
        id: 4,
        title: "Service network go through a detailed process of brainstorming?",
        description: "As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, experiences to personality. ",
    },
    {
        id: 5,
        title: "Developing strategies that revamp products or services?",
        description: "As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, experiences to personality. ",
    }

]

const Card = ({ id, title, description, activeCard, onCardClick }) => {
    const [isOpen, setIsOpen] = useState(activeCard === id);
    const [isFirstCard, setIsFirstCard] = useState(false);


    useEffect(() => {
        setIsOpen(activeCard === id);
        setIsFirstCard(id === 1);
    }, [activeCard, id]);


    return (
        <div
            className={`flex flex-col w-full border-opacity-40 border-white py-4 gap-2 cursor-pointer  border-b-2 ${isFirstCard && 'border-t-2'}`}
            onClick={() => onCardClick(id)}
        >
            <div className='grid grid-cols-6 flex-1'>
                <p className='col-span-5 font-normal text-2xl md:text-3xl'>{title}</p>
                <img src={icon2} alt="icon" className={`w-9 ml-auto col-span-1 ${isOpen && 'rotate-180'}`} />
            </div>
            {isOpen &&
                <div className='grid grid-cols-6'>
                    <p className='font-normal text-xs md:text-lg col-span-6 col-start-1 opacity-60'>{description}</p>
                </div>
            }
        </div>
    );
};

const Partner6 = () => {
    const [time, setTime] = useState(0);
    const [activeCard, setActiveCard] = useState(1);
    const isMobile = window.innerWidth < 768;

    const handleCardClick = (id) => {
        setActiveCard(id);
    };

    return (
        <div className='w-full px-6 md:px-24 pt-6  min-h-screen md:max-h-[900px] md:pt-16' >
            <p className='w-full md:w-full font-normal text-4xl md:text-8xl !leading-tight uppercase text-center'>Frequently Asked Questions</p>
            <div className='w-full flex flex-col md:flex-row-reverse overflow-hidden gap-x-16 pt-8 md:pt-16'>
                <div className='flex md:w-full h-full flex-col my-auto'>
                    {data.map((cardDetail) => (
                        <Card
                            key={cardDetail.id} // added key prop
                            id={cardDetail.id}
                            title={cardDetail.title}
                            description={cardDetail.description}
                            activeCard={activeCard}
                            onCardClick={handleCardClick}
                            time={time}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Partner6;
