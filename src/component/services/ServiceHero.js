import React from 'react'
import AnimatedParagraph from '../AnimatedPara'
import large from '../../assets/images/Services/hero.jpg';

const ServiceHero = () => {
    return (
        <div className="px-6 md:px-24 pt-24 md:pt-48">
            <AnimatedParagraph className='font-normal text-4xl md:text-7xl max-w-4xl text-left pb-10 md:pb-[70px] uppercase !leading-tight'>DIGITAL STRATEGY</AnimatedParagraph>
            <img src={large} alt="large" className='flex my-auto w-full mx-auto rounded-lg md:rounded-3xl h-[50vh] md:h-[90vh] md:object-top' style={{ objectPosition: '70%', objectFit: 'cover' }} />
        </div>
    )
}

export default ServiceHero