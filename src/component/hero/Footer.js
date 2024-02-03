import React from 'react'
import logo from '../../assets/images/Procube-white.png'
import arrow from '../../assets/images/icons/arrow-icon.png'

const data = {
    option1: [
        {
            title: 'Productlab',
            links: 'google.com'
        },
        {
            title: 'ScaleX',
            links: 'google.com'
        },
        {
            title: 'Launchpad',
            links: 'google.com'
        },
        {
            title: 'Enterprise Tech',
            links: 'google.com'
        }
    ],
    option2: [
        {
            title: 'Home',
            links: 'google.com'
        },
        {
            title: 'About Us',
            links: 'google.com'
        },
        {
            title: 'Services',
            links: 'google.com'
        },
        {
            title: 'Projects',
            links: 'google.com'
        }
    ],
    option3: [
        {
            title: 'Partners',
            links: 'google.com'
        },
        {
            title: 'Insights',
            links: 'google.com'
        },
        {
            title: 'Careers',
            links: 'google.com'
        },
        {
            title: 'Contact Us',
            links: 'google.com'
        }
    ],
    option4: [
        {
            title: 'Twitter',
            links: 'google.com'
        },
        {
            title: 'Instagram',
            links: 'google.com'
        },
        {
            title: 'Dribbble',
            links: 'google.com'
        },
        {
            title: 'Linkedin',
            links: 'google.com'
        }
    ]
};


const Footer = () => {
    return (
            <div className='flex flex-col w-full gap-40 md:px-24 fixed top-0'>
                <div className='flex flex-col w-full items-center gap-8'>
                    <div className='font-normal text-8xl max-w-4xl text-center uppercase'>Let’s turn your idea into reality</div>
                    <div className='bg-[#7605C1] px-16 py-4 text-4xl rounded-full'>Contact Us</div>
                </div>
                <div className='flex flex-row'>
                    <div className='border px-4 py-16 h-full mx-6 text-4xl rounded-full flex'>
                        <img src={arrow} alt='arrow' className='my-auto' />
                    </div>
                    <div className='flex-1'>
                        <div className='flex flex-col gap-10'>
                            <div className='flex flex-wrap justify-between w-3/4'>
                                {data.option4.map((item, index) => {
                                    return (
                                        <a key={index} href={item.links} className='text-xl'>{item.title}</a>
                                    )
                                }
                                )}

                            </div>
                            <div className='font-normal text-xl'>© 2023  All Right Reserved | Powered by procube.cx</div>
                        </div>
                    </div>
                    <div className='flex-1 flex justify-between font-normal'>
                        <div className='flex flex-col col-span-1 gap-10'>
                            {data.option1.map((item, index) => {
                                return (
                                    <a key={index} href={item.links} className='text-xl'>{item.title}</a>
                                )
                            }
                            )}
                        </div>
                        <div className='flex flex-col col-span-1 gap-10'>
                            {data.option2.map((item, index) => {
                                return (
                                    <a key={index} href={item.links} className='text-xl'>{item.title}</a>
                                )
                            }
                            )}
                        </div>
                        <div className='flex flex-col col-span-1 gap-10'>
                            {data.option3.map((item, index) => {
                                return (
                                    <a key={index} href={item.links} className='text-xl'>{item.title}</a>
                                )
                            }
                            )}
                        </div>
                    </div>
                </div>
            <div className='flex flex-col w-full items-center gap-8'>
                <img src={logo} alt='logo' className='w-32' />
            </div>
            </div>
    )
}

export default Footer