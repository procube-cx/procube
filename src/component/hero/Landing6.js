import React, { useState, useEffect, useRef } from 'react';
import process from '../../assets/images/approach.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const data = [
    {
        id: 1,
        title: "Statergy",
        description: "We're a full-service UX design and branding agency that rolls up our sleeves and works closely with our clients. ",
        icon: process
    },
    {
        id: 2,
        title: "Design",
        description: "We're a full-service UX design and branding agency that rolls up our sleeves and works closely with our clients. ",
        icon: process
    },
    {
        id: 3,
        title: "Visualization",
        description: "We're a full-service UX design and branding agency that rolls up our sleeves and works closely with our clients. ",
        icon: process
    },
    {
        id: 4,
        title: "Development",
        description: "We're a full-service UX design and branding agency that rolls up our sleeves and works closely with our clients. ",
        icon: process
    },
    {
        id: 5,
        title: "Improve",
        description: "We're a full-service UX design and branding agency that rolls up our sleeves and works closely with our clients. ",
        icon: process
    }

]

const Card = ({ id, title, description, activeCard, onCardClick, pauseTimer, resumeTimer,ref }) => {
    const [isOpen, setIsOpen] = useState(activeCard === id);
    const [isHovered, setIsHovered] = useState(false);

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
            className={`flex flex-col w-full border-opacity-40 border-white py-3 md:py-4 gap-2 cursor-pointer ${!isOpen && 'opacity-40  border-b-2'}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverExit}
            onClick={() => onCardClick(id)}
        >
            <div className='grid grid-cols-6 flex-1'>
                <p className={`col-span-1 font-normal text-2xl md:text-5xl ${isOpen ? '' : 'italic'}`}>0{id}</p>
                <p className='col-span-5 font-normal text-2xl md:text-5xl'>{title}</p>
            </div>
            {isOpen &&
                <div className='grid grid-cols-6'>
                    <p className='font-normal text-xs md:text-lg col-span-5 col-start-2 '>{description}</p>
                </div>
            }
            {isOpen &&
                <div>
                    <motion.div
                        style={{ scaleX: activeCard ? 1 : 0, transformOrigin: "left" }}
                        className='w-full h-0.5 bg-white'
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isHovered ? 0 : activeCard ? 1 : 0 }}
                        transition={{ duration: 6 }}
                        ref={ref}
                    />
                    <div className='w-full h-[1px] bg-white opacity-30 mb-0.5' />
                </div>
            }
        </div>
    );
};

const Landing6 = () => {
    const [activeCard, setActiveCard] = useState(1);
    const [timerPaused, setTimerPaused] = useState(false);
    const isMobile = window.innerWidth < 768;
    const [ref, inView] = useInView(
        isMobile ? {
            triggerOnce: true,
            threshold: 1
        } : {
            triggerOnce: true,
            threshold: 1
        }
    );

    const handleCardClick = (id) => {
        setActiveCard(id);
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
            }
        }, 5000)
        return () => clearTimeout(timer);
    }, [activeCard, timerPaused]);

    return (
        <div className='w-full px-6 md:px-24 py-6 md:py-0 min-h-screen max-h-[900px] pb-0 md:pb-16'>
            <p className='w-full md:w-full font-normal text-4xl md:text-8xl !leading-tight uppercase text-center'>Process & Approach</p>
            <div className='w-full flex flex-col md:flex-row overflow-hidden gap-x-16 md:pt-16'>
                <div className='flex md:w-[54%] h-full flex-col my-auto'>
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
                            ref={ref}
                        />
                    ))}
                </div>
                <div className='flex md:flex-1 h-full flex-col justify-center'>
                    <img src={data[activeCard - 1].icon} alt="process" className='w-full mx-auto' />
                </div>
            </div>
        </div>
    );
};

export default Landing6;
