import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './hero.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const data = [
    {
        heading: "Procube completely transformed our business",
        details: "Procube completely transformed our business with their careful redesign of my business. They helped us to not only improve the look of our brand, but also to streamline our processes and increase our profits. We've seen tremendous growth since working with them and can't thank them enough for their help. Highly recommend!",
        name: "Hari Abdurahman",
        position: "Gazaal Perfumes"
    },
    {
        heading: "Procube Team was so easy to approach",
        details: "I just wanted to give a shoutout to the team at Procube for being so easy to approach and work with.They were always available to answer my questions and were super patient with me,even when I had a million things going on.It was pleasure working with such a friendly and approachable team.Thanks guys!",
        name: "Raji Thomas",
        position: "Alweena Perfumes"
    },
    {
        heading: "Their expertise and attention to detail were great",
        details: "Working with the Procube team was an absolute pleasure. Their expertise and meticulous attention to detail were exceptional,surpassing our expectations.We wholwheartedly recommend them for their hardwork and dedication.A heartfelt thank you for their exceptional hard work and commitment throughout the journey.",
        name: "Jaseem ummer",
        position: "Intercool"
    }
]

const Landing7 = () => {

    const [currentItem, setCurrentItem] = useState(0);
    const [direction, setDirection] = useState(false);

    const nextItem = () => {
        setDirection(true);
        setCurrentItem((prevItem) => (prevItem + 1) % data.length);
    };

    const prevItem = () => {
        setDirection(false);
        setCurrentItem((prevItem) => (prevItem === 0 ? data.length - 1 : prevItem - 1));
    };


    return (
        <Carousel 
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // customRightArrow={}        
        >
            {data.map((item, index) => (
                <div className='bg-vector bg-no-repeat bg-cover py-20 md:py-20 px-6 md:px-24 h-full md:min-h-screen relative overflow-hidden' key={index} >
                    <div className='flex flex-col h-full justify-center'>

                        <div className='flex flex-col gap-4 md:gap-12'>
                            <p className=' text-4xl md:text-8xl italic font-normal'>“{data[index].heading}”</p>
                            <p className=' text-xl md:text-4xl opacity-50 font-normal'>{data[index].details}</p>
                            <div className='flex flex-col gap-2 text-base md:text-3xl'>
                                <p className=' font-medium '>{data[index].name}</p>
                                <p className='font-normal italic'>{data[index].position}</p>
                            </div>
                        </div>
                    </div>


                </div>
            ))}
        </Carousel>
    )
}

export default Landing7