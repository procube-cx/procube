import React, { useEffect, useState } from 'react';
import icon from '../../assets/images/expertise.png';
import arrowIcon from '../../assets/images/exploreMore.png';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import './hero.css';
import icon2 from '../../assets/images/icons/icon2.png'

const data = [
    {
        heading: "DIGITAL STRATEGY",
        icon: icon,
        description: " Accelerate Your Business with Our Technology-Driven Strategic Approach. We conduct market research and customize online initiatives to align with your goals. Engaging audiences, boosting brand visibility, and driving conversions are our key strategies, ensuring resounding success in the digital landscape.",
        title: ["Mobile App Design", "Research & Discovery", "Competitive analysis", "Design systems", "Prototyping", "Mobile App Design", "Research & Discovery", "Competitive analysis", "Design systems", "Prototyping"]
    },
    {
        heading: "BRANDING",
        icon: icon,
        description: "We specialize in creating visually stunning designs that enhance brand recognition, leaving an unforgettable impact on your audience. Whether it's brand kits, graphic posters, motion graphics, or UI/UX designs, we guarantee a lasting impression that sets your brand apart.",
        title: ["Brand Strategy", "Brand Identity", "Brand Naming", "Brand Guidelines", "Brand Strategy", "Brand Identity", "Brand Naming", "Brand Guidelines"]
    },
    {
        heading: "UI/UX DESIGN",
        icon: icon,
        description: " We excel in developing user-friendly websites, applications, and e-commerce platforms. Our focus lies in crafting seamless customer experiences where intuitive design and smooth functionality come together to provide exceptional interactions, ultimately enhancing user satisfaction.",
        title: ["User Research", "User Experience Design", "User Interface Design", "User Research", "User Experience Design", "User Interface Design"]
    },
    {
        heading: "DEVELOPMENT",
        icon: icon,
        description: "Enhance your brand's visibility, attract your ideal customers, and boost conversions through our targeted campaigns. We utilize strategic tactics, precise targeting, and compelling messaging to guarantee that your brand distinguishes itself, engages the right audience, and delivers measurable results.",
        title: ["Web Development", "Mobile Development", "Web Development", "Mobile Development"]
    },
    {
        heading: "MARKETING",
        icon: icon,
        description: "Our marketing strategies are designed to elevate your brand's online presence, boost traffic, and drive conversions. We specialize in SEO, social media marketing, and content marketing, ensuring that your brand stands out in the digital landscape.",
        title: ["SEO", "Social Media Marketing", "Content Marketing", "SEO", "Social Media Marketing", "Content Marketing"]
    }
];

const Card = ({ cardDetail, index, toggleCard }) => {
    const { heading, icon, description, isOpen } = cardDetail;

    useEffect(() => {
        gsap.set(`.line #img-${index}`, { x: 0, y: 100, skewY: -45, opacity: 0, transformOrigin: "right bottom" });
    }, [index]);

    const handleHover = () => {
        gsap.to(`.line #img-${index}`, { 
            x: 0, 
            y: 0, 
            skewY: 10, // Skew to -47 degrees
            duration: 0.1, 
            opacity: 1, 
            transformOrigin: "right top",
            onComplete: () => {
                gsap.to(`.line #img-${index}`, { 
                    skewY: 0, // Skew back to -45 degrees
                    duration: 0.1
                });
            }
        });
    };
    

    const handleHoverExit = () => {
        gsap.to(`.line #img-${index}`, { 
            x: 0, 
            y: 100, 
            skewY: -47, // Skew to -47 degrees
            duration: 0.1, 
            opacity: 0, 
            transformOrigin: "right bottom",
            onComplete: () => {
                gsap.to(`.line #img-${index}`, { 
                    skewY: -45, // Skew back to -45 degrees
                    duration: 0.1
                });
            }
        });
    };
    

    const handleClick = () => {
        toggleCard(index);
    };

    return (
        <motion.div className='flex w-full even:border-y-[2px] border-opacity-40 border-white gap-2 md:gap-4 ' key={index}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverExit}
            onClick={handleClick}
        >
            <div className='grid grid-cols-3 flex-1 line py-5 md:py-12'>
                <div className='col-span-3 md:col-span-1 md:my-auto flex flex-row '>
                    <p className='font-normal text-2xl md:text-5xl flex-1'>{heading}</p>
                    <img src={icon2} alt="icon" className={`col-span-3 md:col-span-1 w-7 mx-auto my-auto flex md:hidden ${isOpen && 'rotate-180 '}`} />
                </div>
                <img id={`img-${index}`} src={icon} alt="icon" className='col-span-3 md:col-span-1 h-full mx-auto my-auto hidden md:flex' />
                <img src={icon} alt="icon" className={`col-span-3 md:col-span-1 w-full py-4 md:hidden ${isOpen ? 'flex' : "hidden"} `} />
                <div className='col-span-3 md:col-span-1 grid grid-cols-2 gap-y-2'>
                    <p className={`col-span-3 md:col-span-2 font-normal text-base md:text-lg ${isOpen ? 'flex' : 'hidden'} md:flex my-auto`}>{description}</p>
                </div>
            </div>
        </motion.div>
    );
};

const Landing5 = () => {
    const [cardData, setCardData] = useState(data);

    const toggleCard = (index) => {
        const updatedCardData = cardData.map((card, i) => {
            if (i === index) {
                return { ...card, isOpen: !card.isOpen };
            } else {
                return { ...card, isOpen: false };
            }
        });
        setCardData(updatedCardData);
    };

    return (
        <div className='px-6 md:px-24'>
            <p className='font-normal text-4xl md:text-8xl max-w-4xl text-center uppercase mx-auto py-5 md:pt-28 md:pb-20'>OUR EXPERTISE</p>
            {cardData.map((cardDetail, index) => (
                <Card
                    key={index}
                    cardDetail={cardDetail}
                    index={index}
                    toggleCard={toggleCard}
                />
            ))}
            <img src={arrowIcon} alt="arrow" className='w-24 md:w-36 mx-auto my-10 md:my-24 hover:opacity-55 cursor-pointer' />

        </div>
    );
};

export default Landing5;