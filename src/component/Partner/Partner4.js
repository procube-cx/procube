import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import process1 from '../../assets/images/process/process1.png'
import process2 from '../../assets/images/process/process2.png'
import process3 from '../../assets/images/process/process3.png'
import process4 from '../../assets/images/process/process4.png'
import process5 from '../../assets/images/process/process5.png'
import icon2 from '../../assets/images/icons/icon2.svg';



const data = [
    {
        id: 1,
        title: " UX design branding agency future",
        description: "As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, experiences to personality. ",
        icon: process1
    },
    {
        id: 2,
        title: "Rorks closely with our clients network",
        description: "As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, experiences to personality. ",
        icon: process2
    },
    {
        id: 3,
        title: "Unforgettable experiences that span",
        description: "As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, experiences to personality. ",
        icon: process3
    },
    {
        id: 4,
        title: "through a detailed process of storming",
        description: "As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, experiences to personality. ",
        icon: process4
    },
    {
        id: 5,
        title: "Strategies that revamp the products",
        description: "As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, experiences to personality. ",
        icon: process5
    }

]

const Card = ({ id, title, description, activeCard, onCardClick, pauseTimer, resumeTimer, time }) => {
    const [isOpen, setIsOpen] = useState(activeCard === id);
    const [isHovered, setIsHovered] = useState(false);
    const [isFirst , setIsFirst] = useState(id === 1);

    useEffect(() => {
        setIsOpen(activeCard === id);
    }, [activeCard, id]);

    const handleHover = () => {
        setIsHovered(true);
        pauseTimer();
    };

    const handleHoverExit = () => {
        setIsHovered(false);
        resumeTimer();
    };

    return (
        <div
            className={`flex flex-col w-full border-opacity-40 border-white py-3 md:py-4 gap-2 cursor-pointer ${isFirst && 'border-t-[1px]'} ${!isOpen && 'opacity-40  border-b-2'}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverExit}
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
            {isOpen &&
                <div>
                    <motion.div
                        style={{ scaleX: activeCard ? 1 : 0, transformOrigin: "left" }}
                        className='w-full h-0.5 bg-white'
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isHovered ? time / 240 : activeCard ? 1 : 0 }}
                        transition={{ duration: 6 }}
                    />
                    <div className='w-full h-[1px] bg-white opacity-30 mb-0.5' />
                </div>
            }
        </div>
    );
};

const Partner4 = () => {
    const [time, setTime] = useState(0);
    const [activeCard, setActiveCard] = useState(1);
    const [timerPaused, setTimerPaused] = useState(false);
    const isMobile = window.innerWidth < 768;
    const [ref, inView] = useInView(
        isMobile ? {
            triggerOnce: true,
            threshold: 0.1,
        } : {
            triggerOnce: true,
            threshold: 0.1,
        }
    );

    React.useEffect(() => {
        if (inView) {
            setActiveCard(1);
        }
    }, [inView]);

    const handleCardClick = (id) => {
        setActiveCard(id);
        setTime(0);
    };

    const pauseTimer = () => {
        setTimerPaused(true);
    };

    const resumeTimer = () => {
        setTimerPaused(false);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!timerPaused) {
                setActiveCard((prevActiveCard) => (prevActiveCard === 5 ? 1 : prevActiveCard + 1));
                setTime(0);
            }
        }, 6000);
        
        return () => clearTimeout(timer);

    }, [activeCard, timerPaused, time]);

    return (
        <div className='w-full px-6 md:px-24 py-6  min-h-screen  md:py-16' ref={ref}>
            <p className='w-full md:w-full font-normal text-4xl md:text-8xl !leading-tight uppercase text-center'>How do I get started?</p>
            <div className='w-full flex flex-col-reverse md:flex-row-reverse overflow-hidden gap-x-16 pt-10 md:pt-16 gap-y-10'>
                <div className='flex md:w-[54%] h-full flex-col my-auto '>
                    {data.map((cardDetail) => (
                        <Card
                            key={cardDetail.id} // added key prop
                            id={cardDetail.id}
                            title={cardDetail.title}
                            description={cardDetail.description}
                            activeCard={activeCard}
                            onCardClick={handleCardClick}
                            pauseTimer={pauseTimer}
                            resumeTimer={resumeTimer}
                            time={time}
                        />
                    ))}
                </div>
                <div className='flex md:flex-1 h-full flex-col justify-center'>
                    <img src={data[activeCard - 1].icon} alt="process" className='w-full mx-auto rounded-2xl' />
                </div>
            </div>
        </div>
    );
};

export default Partner4;
