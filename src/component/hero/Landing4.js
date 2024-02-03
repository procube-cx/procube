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
        <div className='grid grid-cols-3 md:grid-cols-11 w-full px-6 md:px-24 py-6 md:py-10 gap-x-28 min-h-screen max-h-[900px] md:overflow-y-hidden'>
            <motion.div
                ref={ref}
                initial={{opacity: 0, x: -100}}
                animate={{opacity: inView ? 1 : 0, x: inView ? 0 : -100}}
                transition={{duration: 1}}
                className='flex md:flex-1 h-full flex-col w-1/2 md:w-full justify-center col-span-3 md:col-span-5'
            >
                <p className='font-normal text-4xl md:text-[120px] md:!leading-tight uppercase'>we build brands</p>
                <p className='font-normal md:text-lg !leading-loose opacity-40 hidden md:flex'>We're a full-service UX design and branding agency that rolls up our sleeves and works closely with our clients. Together, we craft unforgettable user experiences that span all platforms and touchpoints of brands. We go through a detailed process of brainstorming, designing, and developing strategies that revamp how users interact with their products or services, delivering fantastic results.</p>
            </motion.div>
            <div className='col-span-3 md:col-span-1 md:-mt:0 md:-mb:0 -mt-4 -mb-24 md:-mr-56 md:-ml-36 flex items-center'>
                <img src={that} alt='that' className='w-full' />

            </div>
            <motion.div 
                initial={{opacity: 0, x: 100}}
                animate={{opacity: inView ? 1 : 0, x: inView ? 0 : 100}}
                transition={{duration: 1, delay: 0.5}}  
                className='flex md:flex-1 h-full w-1/2 md:w-full flex-col ml-auto items-end md:justify-end col-span-3 md:col-span-5'
            >
                <p className='font-normal text-4xl md:text-[120px] !leading-tight uppercase italic'>Drive Change</p>
            </motion.div>

        </div>
    )
}

export default Landing4
