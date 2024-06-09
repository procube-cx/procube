import React, { useEffect } from 'react';
import Service1 from '../../assets/images/Services/services1.webp'
import Service2 from '../../assets/images/Services/services2.webp'
import Service3 from '../../assets/images/Services/services3.png'
import Service4 from '../../assets/images/Services/services4.png'
import '../hero/hero.css';
import AnimatedParagraph from '../AnimatedPara';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';


gsap.registerPlugin(ScrollTrigger);



const data = [
    {
        heading: "DIGITAL STRATEGY",
        icon: Service1,
        details: "We create tailored strategies that align with your business goals, leveraging market intelligence, audience insights, and competitor analysis to ensure your brand stands out. Our focus revolves around three critical strategies: engaging audiences, enhancing brand visibility, and driving conversions. By immersing ourselves in the nuances of your industry, we craft targeted campaigns that speak directly to your potential customers.",
        tags: ["Strategic Planning", "Market Research", "Audience Identification", "Competitor Analysis", "Market Positioning", "Digital Roadmap", "Technology Uplifting"]
    },
    {
        heading: "DESIGNING",
        icon: Service2,
        details: "We translate strategy into experiences that captivate. Every detail, from visuals to user interactions, resonates with your audience. Our mission is to ensure that every design we produce leaves an enduring impression, setting your brand apart from the crowd. We understand that in today's visually-driven world, your brand's visual identity is a critical element. It's not just about standing out; it's about leaving a mark that your audience won't forget.",
        tags: ["Logo Design", "Brand Kit", "Brand Communication", "User Interface Design", "User Experience Design"]
    },
    {
        heading: "DEVELOPMENT",
        icon: Service3,
        details: "We craft captivating, user-centric solutions that fuel business growth. Every element, from interface to functionality, is meticulously designed to delight users and propel your digital success. Our solutions are meticulously crafted to not merely meet but exceed user expectations, guaranteeing that your brand's digital footprint leaves an enduring, positive impression.",
        tags: ["E-commerce Development", "Android & iOS Apps", "Web Applications", "B2B / Enterprise Software", "Portfolio Websites"]
    },
    {
        heading: "MARKETING",
        icon: Service4,
        details: "We're here to help you stand out in the competitive digital landscape, building the brand visibility and engagement that ultimately drives tangible, measurable results. We craft compelling narratives that ignite user passion and drive product adoption. Leveraging data, we design targeted campaigns.",
        tags: ["Search Engine Optimization", "Search Engine Marketing / Google Ads", "Social Media Marketing / Meta Ads", "Social Media Management", "Whatsapp Business Automation"]
    }
];

const Card = ({ heading, icon, details, index, tags }) => {
    const [isHovered, setIsHovered] = React.useState(false);


    return (
        <div
            className={`flex w-full py-7 md:py-10 md:min-h-[80vh]`}
            key={index}
        >
            <div className='flex flex-col justify-center gap-y-3 md:gap-y-8'>
                <img src={icon} alt={heading} className='w-full md:w-full rounded-lg md:rounded-3xl mb-2 md:mb-4 h-[30vh] md:h-[70vh] object-cover md:hidden' />
                <div className='flex flex-row overflow-hidden'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <p className=' font-normal text-2xl md:text-5xl'>{heading}</p>
                    {/* dont remove this line might need in future */}
                    {/* <img src={icon2} alt={heading} className={`w-8 md:w-14 ml-3 ${isHovered && 'translate-x-14 -translate-y-14 transition-transform duration-300 ease-in-out'}`} />
                    <img src={icon2} alt={heading} className={`w-8 md:w-14 ml-2 -translate-x-32 translate-y-14  ${isHovered && '!-translate-x-10 md:!-translate-x-16 !-translate-y-0 transition-transform duration-300 ease-in-out'}`} /> */}
                </div>
                <p className='text-sm md:text-lg opacity-60 !leading-relaxed'>{details}</p>
                <div className='flex flex-wrap gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-4'>
                    {tags.map((tag, index) => (
                        <p key={index} className='text-sm md:text-base bg-white bg-opacity-10 px-2 md:px-4 py-1 md:py-2 rounded-full'>{tag}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Services1 = () => {

    const [index, setIndex] = React.useState(0);
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                scrub: 1,
                pin: true,
                pinSpacing: false,
                trigger: ".pin-windmill-wrap",
                start: "top 20%",
                endTrigger: ".pin-windmill-wrap",
                end: "bottom 90%",
                markers: false,
                onUpdate: (self) => {
                    setIndex(Math.round((self.progress + 0.010) * (data.length - 1)));
                },
            },
        });
        
        return () => {
          tl.kill();
        };
      }, []);



    return (
        <div className='px-6 md:px-24 pt-24 pb-12 md:pb-24 md:pt-48 flex flex-col'>
            <AnimatedParagraph className='flex font-normal text-4xl md:text-8xl text-center uppercase mx-auto pb-10 md:pb-[70px] !leading-tight max-w-4xl'>We Build Your Digital Edge </AnimatedParagraph>
            <div className='flex flex-row gap-14 cards '>
                <div className='w-full md:w-1/2'>
                    {data.map((cardDetail, index) => (
                        <Card
                            heading={cardDetail.heading}
                            icon={cardDetail.icon}
                            details={cardDetail.details}
                            index={index}
                            tags={cardDetail.tags}
                            key={index}
                        />
                    ))}
                </div>
                <div className='w-full md:w-1/2 pin-windmill-wrap relative imageContainer hidden md:block'>
                    <img src={data[index].icon} alt={data[0].heading} className='w-full md:w-full rounded-lg md:rounded-3xl mb-2 md:mb-4 h-[30vh] md:h-[70vh] object-cover hidden md:flex flex-col absolute top-0' />
                </div>
            </div>
        </div>
    );
};

export default Services1;
