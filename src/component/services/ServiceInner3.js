import React from 'react'
import key from '../../assets/images/icons/key.svg'
import AnimatedParagraph from '../AnimatedPara'


const data = [
    {
        title: 'Business Executives',
        description: "As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, experiences to personality.",
        icon: key
    },
    {
        title: 'Business Executives',
        description: "As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, experiences to personality.",
        icon: key
    },
    {
        title: 'Business Executives',
        description: "As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, experiences to personality.",
        icon: key
    },
    {
        title: 'Business Executives',
        description: "As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, experiences to personality.",
        icon: key
    },
    {
        title: 'Business Executives',
        description: "As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, experiences to personality.",
        icon: key
    },
    {
        title: 'Business Executives',
        description: "As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, experiences to personality.",
        icon: key
    }
]



const ServiceInner3 = () => {

    return (
        <div className='px-6 md:px-24 py-6 md:py-12'>
            <AnimatedParagraph className='font-normal text-4xl md:text-7xl max-w-5xl text-center mx-auto pb-16 md:pb-[110px] uppercase !leading-tight'>Who might find our services appealing?</AnimatedParagraph>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12 md:gap-y-20'>
                {data.map((item, index) => (
                    <div className='relative' key={index}>
                        <img src={item.icon} alt='icon' className='w-10 md:w-16 absolute -top-4 md:-top-8 z-10 left-4 md:left-6' />
                        <div key={index} className='bg-[#1A1A1A] py-5 px-4 md:py-10 md:px-7 rounded-lg md:rounded-2xl relative z-20'>
                            <p className='font-bold text-xl md:text-3xl md:pb-4'>{item.title}</p>
                            <p className='text-sm md:text-lg opacity-60'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServiceInner3