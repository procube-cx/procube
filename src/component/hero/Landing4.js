import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import that from '../../assets/images/that.png'

const Landing4 = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5
    });

    return (
        <div className='relative flex flex-col md:flex-row w-full px-6 md:px-24 py-6 md:py-10 overflow-hidden gap-x-28 h-screen max-h-[900px]'>
            <motion.div
                ref={ref}
                initial={{opacity: 0, x: -100}}
                animate={{opacity: inView ? 1 : 0, x: inView ? 0 : -100}}
                transition={{duration: 1}}
                className='flex md:flex-1 h-full flex-col justify-center'
            >
                <p className='font-normal text-[120px] !leading-tight uppercase'>we build brands</p>
                <p className='font-normal md:text-lg !leading-loose opacity-40'>We're a full-service UX design and branding agency that rolls up our sleeves and works closely with our clients. Together, we craft unforgettable user experiences that span all platforms and touchpoints of brands. We go through a detailed process of brainstorming, designing, and developing strategies that revamp how users interact with their products or services, delivering fantastic results.</p>
            </motion.div>
            <motion.div 
                initial={{opacity: 0, x: 100}}
                animate={{opacity: inView ? 1 : 0, x: inView ? 0 : 100}}
                transition={{duration: 1}}  
                className='flex md:flex-1 h-full flex-col justify-end'
            >
                <p className='font-normal text-[120px] !leading-tight uppercase italic'>Drive Change</p>
            </motion.div>
            {/* change this after */}
            <div className='absolute flex justify-center items-center w-full h-full top-0 left-0'>
                <img src={that} alt='that' className='w-1/4' />

            </div>

        </div>
    )
}

export default Landing4
