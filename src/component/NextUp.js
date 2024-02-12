import React, { useState } from 'react'
import { motion } from 'framer-motion'

const NextUp = ({ Heading }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className='px-6 md:px-24 py-10 md:py-48 flex flex-col justify-center items-center'>
            <div>
            <p className='font-normal text-sm md:text-xl uppercase text-left opacity-60 py-3'>Next up</p>
                <p
                    className='font-normal text-4xl md:text-7xl text-center uppercase cursor-pointer'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {Heading}
                </p>
                <motion.div
                    style={{ scaleX: 0, transformOrigin: "left" }}
                    className='w-full h-0.5 bg-white mt-2'
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                />
            </div>

        </div>
    )
}

export default NextUp