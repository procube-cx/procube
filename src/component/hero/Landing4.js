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
        <div className='grid grid-cols-11 w-full px-6 md:px-24 py-6 md:py-10 gap-x-28 h-screen max-h-[900px]'>
            <motion.div
                ref={ref}
                initial={{opacity: 0, x: -100}}
                animate={{opacity: inView ? 1 : 0, x: inView ? 0 : -100}}
                transition={{duration: 1}}
                className='flex md:flex-1 h-full flex-col justify-center col-span-5'
            >
                <p className='font-normal text-[120px] !leading-tight uppercase'>we build brands</p>
                <p className='font-normal md:text-lg !leading-loose opacity-40'>We're a full-service UX design and branding agency that rolls up our sleeves and works closely with our clients. Together, we craft unforgettable user experiences that span all platforms and touchpoints of brands. We go through a detailed process of brainstorming, designing, and developing strategies that revamp how users interact with their products or services, delivering fantastic results.</p>
            </motion.div>
            <div className='col-span-1 -mr-56 -ml-36 flex items-center'>
                <img src={that} alt='that' className='w-full' />

            </div>
            <motion.div 
                initial={{opacity: 0, x: 100}}
                animate={{opacity: inView ? 1 : 0, x: inView ? 0 : 100}}
                transition={{duration: 1, delay: 0.5}}  
                className='flex md:flex-1 h-full flex-col justify-end col-span-5'
            >
                <p className='font-normal text-[120px] !leading-tight uppercase italic'>Drive Change</p>
            </motion.div>

        </div>
    )
}

export default Landing4
