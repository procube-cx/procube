import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import that from '../../assets/images/that.png'

const Landing4 = () => {
    const isMobile = window.innerWidth < 768;
    const [ref, inView] = useInView(
        isMobile ? {
        triggerOnce: true,
        threshold: 0.1
    } : {
        triggerOnce: true,
        threshold: 0.7
    }    
    );

    return (
        <div className='grid grid-cols-3 md:grid-cols-11 w-full px-6 md:px-24 py-3 md:py-0 gap-x-28 md:min-h-screen max-h-[900px] overflow-y-hidden overflow-x-hidden'>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                transition={{ duration: 1 }}
                className='flex md:flex-1 h-full flex-col w-1/2 md:w-full justify-center col-span-3 md:col-span-5'
            >
                <p className='font-normal text-5xl md:text-[90px] lg:text-[93px] xl:text-[98px] 2xl:text-[120px] md:!leading-tight uppercase'>we build brands</p>
                <p className='font-normal md:text-lg !leading-8 opacity-40 hidden md:flex'>At Procube, we are more than a technology and branding firm; we are catalysts of change. Collaborating closely with our valued clients, we craft brands that redefine the digital landscape. Our journey immerses us in an intricate process of ideation, design, and strategic development, allowing us to reshape how users interact with products and services. Our dedication to innovation ensures the delivery of exceptional outcomes, creating brands that drive transformative change</p>
            </motion.div>
            <div className='col-span-3 md:col-span-1 md:-mt:0 md:-mb:0 -mt-4 -mb-24 md:-mr-72 md:-ml-28 flex items-center'>
                <img src={that} alt='that' className='w-4/5 md:w-full' />

            </div>
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
                transition={{ duration: 1, delay: 0.5 }}
                className='flex md:flex-1 h-full w-1/2 md:w-full flex-col ml-auto items-end md:justify-end col-span-3 md:col-span-5'
            >
                <p className='font-normal text-5xl md:text-[90px] lg:text-[93px] xl:text-[98px] 2xl:text-[120px] !leading-tight uppercase italic'>Drive Change</p>
            </motion.div>

        </div>
    )
}

export default Landing4
