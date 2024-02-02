import React, { useState, useEffect } from 'react';
import process from '../../assets/images/approach.png';

const data = [
    {
        id: 1,
        title: "Statergy",
        description: "We're a full-service UX design and branding agency that rolls up our sleeves and works closely with our clients. "
    },
    {
        id: 2,
        title: "Design",
        description: "We're a full-service UX design and branding agency that rolls up our sleeves and works closely with our clients. "
    },
    {
        id: 3,
        title: "Visualization",
        description: "We're a full-service UX design and branding agency that rolls up our sleeves and works closely with our clients. "
    },
    {
        id: 4,
        title: "Development",
        description: "We're a full-service UX design and branding agency that rolls up our sleeves and works closely with our clients. "
    },
    {
        id: 5,
        title: "Improve",
        description: "We're a full-service UX design and branding agency that rolls up our sleeves and works closely with our clients. "
    }

]

const Card = ({ id, title, description, activeCard, onCardClick }) => {
    const [isOpen, setIsOpen] = useState(activeCard === id);
    if (activeCard === id && !isOpen) {
        setIsOpen(true);
    }
    else if (activeCard !== id && isOpen) {
        setIsOpen(false);
    }

    return (
        <div
            className={`flex flex-col w-full border-b-2 border-opacity-40 border-white py-3 gap-2 ${!isOpen && 'opacity-40'}`}
            onClick={() => onCardClick(id)}
        >
            <div className='grid grid-cols-6 flex-1'>
                <p className='col-span-1 font-normal text-5xl'>0{id}</p>
                <p className='col-span-5 font-normal text-5xl'>{title}</p>
            </div>
            {isOpen &&
                <div className='grid grid-cols-6'>
                    <p className='col-span-5 col-start-2 '>{description}</p>
                </div>
            }
        </div>
    );
};

const Landing6 = () => {
    const [activeCard, setActiveCard] = useState(1);

    const handleCardClick = (id) => {
        setActiveCard((prevActiveCard) => (prevActiveCard === id ? null : id));
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setActiveCard((prevActiveCard) => (prevActiveCard === 5 ? 1 : prevActiveCard + 1));
        }, 5000);
        console.log('activeCard', activeCard);
        return () => clearTimeout(timer);
    }, [activeCard]);

    return (
        <div className='relative flex flex-col md:flex-row w-full px-6 md:px-24 py-6 md:py-10 overflow-hidden gap-x-28 h-screen max-h-[900px]'>
            <div className='flex md:flex-1 h-full flex-col justify-center'>
                {data.map((cardDetail) => (
                    <Card
                        key={cardDetail.id} // added key prop
                        id={cardDetail.id}
                        title={cardDetail.title}
                        description={cardDetail.description}
                        activeCard={activeCard}
                        onCardClick={handleCardClick}
                    />
                ))}
            </div>
            <div className='flex md:flex-1 h-full flex-col justify-center'>
                <img src={process} alt="process" className='w-full mx-auto' />
            </div>
        </div>
    );
};

export default Landing6;
