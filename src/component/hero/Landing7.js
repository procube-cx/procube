import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const data = [
    {
        heading: "Procube completely transformed our business",
        details: "Procube completely transformed our business with their careful redesign of my business. They helped us to not only improve the look of our brand, but also to streamline our processes and increase our profits. We've seen tremendous growth since working with them and can't thank them enough for their help. Highly recommend!",
        name: "John Doe",
        position: "Google1"
    },
    {
        heading: "Procube compl",
        details: "Procube compls with their careful redesign of my business. They helped us to not only improve the look of our brand, but also to streamline our processes and increase our profits. We've seen tremendous growth since working with them and can't thank them enough for their help. Highly recommend!",
        name: "John Doe",
        position: "Google2"
    },
    {
        heading: "Procube compls",
        details: "Procube completely transformed our business with their careful redesign of my business. They helped us to not only improve the look of our brand, but also to streamline our processes and increase our profits. We've seen tremendous growth since working with them and can't thank them enough for their help. Highly recommend!",
        name: "John Doe",
        position: "Google3"
    }
]

const Landing7 = () => {

    const [currentItem, setCurrentItem] = useState(0);
    const [direction, setDirection] = useState(false);

    const nextItem = () => {
        setDirection(true);
        setCurrentItem((prevItem) => (prevItem + 1) % data.length);
    };

    const prevItem = () => {
        setDirection(false);
        setCurrentItem((prevItem) => (prevItem === 0 ? data.length - 1 : prevItem - 1));
    };


    return (
        <div className='bg-vector bg-no-repeat px-6 md:px-24  h-screen relative overflow-hidden'>
            <AnimatePresence initial={false} mode="wait">
                <motion.div
                    key={currentItem}
                    initial={direction ? { opacity: 0, x: '-100%' } : { opacity: 0, x: '100%' }}
                    animate={direction ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                    // exit={direction ? { opacity: 0, x: '100%' } : { opacity: 0, x: '-100%' }}
                    transition={{ duration: 0.5 }}
                    className='flex flex-col h-full justify-center'>

                    <div className='flex flex-col gap-12'>
                        <p className=' text-4xl md:text-8xl italic font-normal'>“{data[currentItem].heading}”</p>
                        <p className=' text-xl md:text-4xl opacity-50 font-normal'>{data[currentItem].details}</p>
                        <div className='flex flex-col gap-2 text-base md:text-3xl'>
                            <p className=' font-medium '>{data[currentItem].name}</p>
                            <p className='font-normal italic'>{data[currentItem].position}</p>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
            <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-4'>
                <button
                    className='px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none'
                    onClick={prevItem}
                >
                    Previous
                </button>
                <button
                    className='px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none'
                    onClick={nextItem}
                >
                    Next
                </button>
            </div>

        </div>
    )
}

export default Landing7