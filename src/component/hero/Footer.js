import React from 'react'
import logo from '../../assets/images/Procube-white2.png'
import arrow from '../../assets/images/icons/arrow-icon.png'
import './hero.css'

const data = {
    option1: [
        {
            title: 'Productlab',
            links: ''
        },
        {
            title: 'ScaleX',
            links: ''
        },
        {
            title: 'Launchpad',
            links: ''
        },
        {
            title: 'Enterprise Tech',
            links: ''
        }
    ],
    option2: [
        {
            title: 'Home',
            links: '.'
        },
        {
            title: 'About Us',
            links: 'about'
        },
        {
            title: 'Services',
            links: 'services'
        },
        {
            title: 'Projects',
            links: 'projects'
        }
    ],
    option3: [
        {
            title: 'Partners',
            links: 'partners'
        },
        {
            title: 'Insights',
            links: 'insight'
        },
        {
            title: 'Careers',
            links: 'careers'
        },
        {
            title: 'Contact Us',
            links: 'contact'
        }
    ],
    option4: [
        {
            title: 'Twitter',
            links: ''
        },
        {
            title: 'Instagram',
            links: ''
        },
        {
            title: 'Dribbble',
            links: ''
        },
        {
            title: 'Linkedin',
            links: ''
        }
    ]
};


const Footer = () => {
    return (
        <div className='flex flex-col w-full  px-6 md:px-24 pt-12 md:pt-32 bg-black rounded-t-[30px] md:rounded-t-[60px]'>
            <div className='flex flex-col w-full items-center gap-5 md:gap-14 mb-16 md:mb-36'>
                <div className='font-normal text-4xl md:text-8xl !leading-[45px] md:!leading-[120px] max-w-4xl text-center uppercase'>Let’s turn your idea into reality</div>
                <div className='button-hover bg-[#7605C1] px-12 md:px-16 py-3 md:py-4 text-base md:text-4xl rounded-full cursor-pointer'>Get Started</div>
            </div>
            <div className='flex flex-col md:flex-row mb-10  md:mb-20'>
                <div className=' border px-5 py-10 md:px-7 md:py-16 rounded-full h-auto md:h-44 w-16 md:w-auto my-8 md:my-0 mr-16 md:mr-10 cursor-pointer' onClick={() => window.scrollTo({top:0,behavior:'smooth'})}>
                    <img src={arrow} alt='arrow' className='w-6 md:w-8  ' />
                </div>
                <div className='flex-1 my-auto'>
                    <div className='flex flex-col gap-8'>
                        <div className='flex flex-wrap justify-between w-full md:w-3/4'>
                            {data.option4.map((item, index) => {
                                return (
                                    <a key={index} href={item.links} className='text-sm md:text-xl hover:opacity-40'>{item.title}</a>
                                )
                            }
                            )}

                        </div>
                        <div className='font-normal text-sm md:text-xl'>© 2023  All Right Reserved | Powered by procube.cx</div>
                    </div>
                </div>
                <div className='flex-1 flex justify-between font-normal py-8 md:py-0'>
                    <div className='flex flex-col col-span-1 gap-8'>
                        {data.option1.map((item, index) => {
                            return (
                                <a key={index} href={item.links} className='text-sm md:text-xl hover:opacity-40'>{item.title}</a>
                            )
                        }
                        )}
                    </div>
                    <div className='flex flex-col col-span-1 gap-8'>
                        {data.option2.map((item, index) => {
                            return (
                                <a key={index} href={item.links} className='text-sm md:text-xl hover:opacity-40'>{item.title}</a>
                            )
                        }
                        )}
                    </div>
                    <div className='flex flex-col col-span-1 gap-8'>
                        {data.option3.map((item, index) => {
                            return (
                                <a key={index} href={item.links} className='text-sm md:text-xl hover:opacity-40'>{item.title}</a>
                            )
                        }
                        )}
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-full items-center gap-8'>
                <img src={logo} alt='logo' className='w-full' />
            </div>
        </div>
    )
}

export default Footer