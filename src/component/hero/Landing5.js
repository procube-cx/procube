import React, { useEffect, useState } from 'react';
import arrowIcon from '../../assets/images/exploreMore.png';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import './hero.css';
import icon2 from '../../assets/images/icons/icon2.svg'
import CustomEase from 'gsap/CustomEase';
import AnimatedParagraph from '../AnimatedPara';
import img1 from '../../assets/images/OurExpertise/1.webp';
import img2 from '../../assets/images/OurExpertise/2.webp';
import img3 from '../../assets/images/OurExpertise/3.webp';
import img4 from '../../assets/images/OurExpertise/4.webp';

const data = [
    {
        heading: "DIGITAL STRATEGY",
        icon: img1,
        description: " Accelerate Your Business with Our Technology-Driven Strategic Approach. We conduct market research and customize online initiatives to align with your goals. Engaging audiences, boosting brand visibility, and driving conversions are our key strategies, ensuring resounding success in the digital landscape.",
        title: ["Mobile App Design", "Research & Discovery", "Competitive analysis", "Design systems", "Prototyping", "Mobile App Design", "Research & Discovery", "Competitive analysis", "Design systems", "Prototyping"]
    },
    {
        heading: "DESIGNING",
        icon: img2,
        description: "We specialize in creating visually stunning designs that enhance brand recognition, leaving an unforgettable impact on your audience. Whether it's brand kits, graphic posters, motion graphics, or UI/UX designs, we guarantee a lasting impression that sets your brand apart.",
        title: ["User Research", "User Experience Design", "User Interface Design", "User Research", "User Experience Design", "User Interface Design"]
    },
    {
        heading: "DEVELOPMENT",
        icon: img3,
        description: "Enhance your brand's visibility, attract your ideal customers, and boost conversions through our targeted campaigns. We utilize strategic tactics, precise targeting, and compelling messaging to guarantee that your brand distinguishes itself, engages the right audience, and delivers measurable results.",
        title: ["Web Development", "Mobile Development", "Web Development", "Mobile Development"]
    },
    {
        heading: "MARKETING",
        icon: img4,
        description: "Our marketing strategies are designed to elevate your brand's online presence, boost traffic, and drive conversions. We specialize in SEO, social media marketing, and content marketing, ensuring that your brand stands out in the digital landscape.",
        title: ["SEO", "Social Media Marketing", "Content Marketing", "SEO", "Social Media Marketing", "Content Marketing"]
    }
];

const Card = ({ cardDetail, index, toggleCard }) => {
    const { heading, icon, description, isOpen } = cardDetail;
    const first = index === 0;

    useEffect(() => {
        gsap.set(`.line #img-${index}`, { x: 10, y: 100, skewY: -45, opacity: 0, transformOrigin: "right bottom" });
    }, [index]);

    const handleHover = () => {
        gsap.to(`.line #img-${index}`, { 
            x: 0, 
            y: 6, 
            skewY: 0, 
            // skewX: -2,
            duration: 0.325, 
            opacity: 1, 
            transformOrigin: "right top",
            ease: CustomEase.create("easeName", "0.15,0.45,0.15,1.35"),
            onComplete: () => {
                gsap.to(`.line #img-${index}`, { 
                    skewY: 0, 
                    skewX: 0,
                    y: 0,
                    duration: 0.05
                });
            }
        });
    };
    

    const handleHoverExit = () => {
        gsap.to(`.line #img-${index}`, { x: 10, y: 100, skewY: -45, opacity: 0, transformOrigin: "right bottom", duration: 0.325, ease: CustomEase.create("easeName", "0.15,0.45,0.15,1.35") });
    };
    

    const handleClick = () => {
        toggleCard(index);
    };

    return (
        <motion.div className={`flex w-full border-b-[2px] border-opacity-40 border-white gap-2 md:gap-4  ${first && 'border-t-[2px]'}`} key={index}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverExit}
            onClick={handleClick}
        >
            <div className='grid grid-cols-3 flex-1 line my-5 md:my-12 overflow-hidden'>
                <div className='col-span-3 md:col-span-1 md:my-auto flex flex-row '>
                    <p className='font-normal text-2xl md:text-5xl flex-1'>{heading}</p>
                    <img src={icon2} alt="icon" className={`col-span-3 md:col-span-1 w-7 mx-auto my-auto flex md:hidden ${isOpen && 'rotate-180 '}`} />
                </div>
                <img id={`img-${index}`} src={icon} alt="icon" className='col-span-3 md:col-span-1 w-full md:w-[70%] h-full md:h-52  ml-auto my-auto hidden md:flex overflow-hidden object-cover rounded-2xl' />
                <img src={icon} alt="icon" className={`col-span-3 md:col-span-1 w-full my-4 rounded-xl md:hidden ${isOpen ? 'flex' : "hidden"} `} />
                <div className='col-span-3 md:col-span-1 grid grid-cols-2 gap-y-2'>
                    <p className={`col-span-3 md:col-span-2 font-normal text-base md:text-lg ${isOpen ? 'flex' : 'hidden'} md:flex my-auto md:pl-20`}>{description}</p>
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
        <div className='px-6 md:px-24 py-10 md:py-24'>
            <AnimatedParagraph className='font-normal text-4xl md:text-8xl max-w-4xl text-center uppercase mx-auto pb-10 md:pb-[70px]'>OUR EXPERTISE</AnimatedParagraph>
            {cardData.map((cardDetail, index) => (
                <Card
                    key={index}
                    cardDetail={cardDetail}
                    index={index}
                    toggleCard={toggleCard}
                />
            ))}
            <img src={arrowIcon} alt="arrow" className='w-24 md:w-36 mx-auto mt-10 md:mt-24 hover:opacity-55 cursor-pointer' />

        </div>
    );
};

export default Landing5;