import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GoDotFill } from 'react-icons/go';
import { AiOutlineClose } from "react-icons/ai";
import logo from '../../assets/images/Procube-white.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import { useMediaQuery } from 'react-responsive';
import './test.css'
import Button from './Button';

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
        // {
        //     title: 'Partners',
        //     links: 'partners'
        // }
    ],
    option3: [
        
        {
            title: 'Projects',
            links: 'projects'
        },
        {
            title: 'Insights',
            links: 'insight'
        },
        {
            title: 'Careers',
            links: 'careers'
        },
        // {
        //     title: 'Contact Us',
        //     links: 'contact'
        // }
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
    ],
    option5: [
        {
            title: 'EnterpriseTech',
            links: 'googe.com'
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
            title: 'EnterpriseTech',
            links: ''
        }
    ]
};


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [activeLink, setActiveLink] = React.useState('/');
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [isHovered, setIsHovered] = React.useState(false);
    const [hoveredId, setHoveredId] = React.useState(null);
    const [id, setId] = React.useState(null);

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    React.useEffect(() => {
        const pathName = window.location.pathname;
        setActiveLink(pathName);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleHover = (id) => {
        setIsHovered(true);
        setHoveredId(id);
    }

    const handleHoverExit = () => {
        setIsHovered(false);
        setHoveredId(hoveredId);
    }





    return (
        <div className={` w-full z-40 ${isMenuOpen ? 'fixed' : 'absolute'}`} >
            {/* Header section */}
            {/* Hamburger menu */}
            <div className="flex items-center justify-between px-6 md:px-24 py-6 md:py-12">
                {/* Contact Us button */}
                <div className="items-center hidden md:flex cursor-pointer">
                    <a href='/contact' className="px-5 py-2 rounded-full border border-1 border-white flex flex-row items-center gap-[2px]">
                        <GoDotFill className="text-white w-7 h-7" />
                        <p className="font-medium text-xl">
                            <Button>Contact&nbsp;Us</Button>
                        </p>
                    </a>
                </div>
                {/* Logo */}
                <div className="items-center md:hidden flex">
                    <img src={logo} alt='logo' className=' w-32' />
                </div>
                {/* Navigation links */}
                {/* <div className="hidden md:flex gap-16 font-medium text-xl">
                    {data.option1.map((item, index) => (
                        <motion.a href={item.links}
                            className={'text-white'}
                            key={index}
                        >
                            <Button>
                                {item.title}
                            </Button>
                        </motion.a>
                    ))
                    }
                </div> */}
                {/* Hamburger menu icon */}
                <div className={`text-white font-medium text-3xl flex cursor-pointer z-30 `} onClick={toggleMenu}>
                    {isMenuOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
                </div>
            </div>
            {/* Mobile view menu */}
            <div className={`absolute w-full ${isMenuOpen ? 'top-0' : 'hidden'}`} >
                <div className='grid grid-cols-7'>
                    <motion.div
                        initial={isMobile ? isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 1, y: "-100vh" } : isMenuOpen ? { opacity: 1, y: -100 } : { opacity: 1, y: "-150vh" }}
                        animate={isMobile ? isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 1, y: "-150vh" } : isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 1, y: "-150vh" }}
                        transition={isMobile ? isMenuOpen ? { duration: 1, delay: 0 } : { duration: 0.5 } : isMenuOpen ? { duration: 1, delay: 0 } : { duration: 0.5, delay: 0 }}
                        className='col-span-7 md:col-span-4 h-[63vh] md:h-screen flex flex-col justify-end md:justify-around bg-[#121212] px-6 md:px-24 gap-24 md:gap-0'>
                        <div className='hidden md:block'></div>
                        <div className=' grid grid-cols-2 md:grid-cols-2 font-normal py-8 gap-y-10 items-center'>
                            {/* <div className='flex flex-col col-span-2 gap-5 md:gap-8'>
                                {data.option1.map((item, index) => (
                                    <a key={index} href={item.links} className='text-2xl md:text-4xl'
                                        onMouseEnter={() => handleHover(index)}
                                        onMouseLeave={handleHoverExit}
                                    >{item.title}
                                        <motion.div
                                            style={{ scaleX: 0, transformOrigin: "left" }}
                                            className='w-4/5 h-0.5 bg-white mt-2'
                                            initial={{ scaleX: 0 }}
                                            animate={hoveredId === index && { scaleX: isHovered ? 1 : 0 }}
                                            exit={hoveredId === index ? { scaleX: 0, transformOrigin: "right" } : { scaleX: 0, transformOrigin: "left" }}
                                            transition={{ duration: 0.3 }}
                                        />


                                    </a>
                                ))}
                            </div> */}
                            <div className='flex flex-col col-span-1 gap-5 md:gap-8'>
                                {data.option2.map((item, index) => (
                                    <a key={index} href={item.links} className='text-2xl md:text-[40px] leading-tight'>
                                        <Button>
                                            {item.title}
                                        </Button>
                                    </a>
                                ))}
                            </div>
                            <div className='flex flex-col col-span-1 gap-5 md:gap-8'>
                                {data.option3.map((item, index) => (
                                    <a key={index} href={item.links} className='text-2xl md:text-[40px] leading-tight'>
                                        <Button>
                                            {item.title}
                                        </Button>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className='flex flex-wrap justify-between '>
                            {data.option4.map((item, index) => (
                                <a key={index} href={item.links} className='  text-sm md:text-xl hover:opacity-50 mb-12 md:mb-0'>{item.title}</a>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={isMobile ? isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 1, y: "-100vh" } : isMenuOpen ? { opacity: 1, y: "-100vh" } : { opacity: 1, y: "-100vh" }}
                        animate={isMobile ? isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 1, y: "-150vh" } : isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 1, y: "-150vh" }}
                        transition={isMobile ? isMenuOpen ? { duration: 1, delay: 0 } : { duration: 0.5 } : isMenuOpen ? { duration: 0.5, delay: 0 } : { duration: 0.5, delay: 0 }}
                        className='col-span-7 md:col-span-3 h-[37vh] md:h-full flex items-center justify-center bg-black py-0 md:py-14 px-6 md:px-24'
                        ref={ref}
                    >
                        <div className='flex flex-col gap-y-[10px]'>
                            <p className='text-normal text-base md:text-2xl opacity-60'>Got An Idea?</p>
                            <p className='font-normal text-2xl md:text-4xl'>Let’s turn your idea into reality</p>
                            <div className='button-hover bg-[#7605C1] mr-auto md:mt-5 font-normal text-base md:text-2xl py-[10px] px-5 md:px-10 md:py-4 rounded-full cursor-pointer'>Get in Touch</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
