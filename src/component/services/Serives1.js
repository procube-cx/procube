import React from 'react';
import Service1 from '../../assets/images/Services/services1.webp'
import Service2 from '../../assets/images/Services/services2.webp'
import Service3 from '../../assets/images/Services/services3.webp'
import Service4 from '../../assets/images/Services/services4.webp'
import icon from '../../assets/images/icons/icon3.png'
import '../hero/hero.css';

const data = [
    {
        heading: "DIGITAL STRATEGY",
        icon: Service1,
        details: "Supercharge Your Business with Our Tech-Powered Strategic Approach. Our process commences with thorough market research, providing us with the insights necessary to tailor online initiatives that perfectly align with your specific objectives. Our focus revolves around three critical strategies: engaging audiences, enhancing brand visibility, and driving conversions. By immersing ourselves in the nuances of your industry, we craft targeted campaigns that speak directly to your potential customers. This laser-focused approach not only grabs their attention but also maintains their interest. Ultimately, our primary goal is to turn engagement into tangible results. We work diligently to drive conversions, whether it's making a purchase, signing up, or taking any desired action that advances your business goals. Our comprehensive, technology-driven approach paves the way for your resounding success in the dynamic and competitive digital realm.",
        tags: ["Strategic Planning", "Market Research", "Audience Identification", "Competitor Analysis", "Market Positioning", "Digital Roadmap", "Technology Uplifting"]
    },
    {
        heading: "DESIGNING",
        icon: Service2,
        details: "At our core, we excel in the art of crafting visually stunning designs that go beyond aesthetics; they enhance brand recognition and create an indelible impact on your target audience. Our expertise spans a wide spectrum, whether it's the meticulous curation of brand kits, the creation of captivating graphic posters, the dynamic world of motion graphics, or the fine-tuning of UI/UX designs. Our mission is to ensure that every design we produce leaves an enduring impression, setting your brand apart from the crowd. We understand that in today's visually-driven world, your brand's visual identity is a critical element. It's not just about standing out; it's about leaving a mark that your audience won't forget. When you partner with us, you can trust in our commitment to making your brand unforgettable and distinctive.",
        tags: ["Logo Design", "Brand Kit", "Brand Communication", "User Interface Design", "User Experience Design"]
    },
    {
        heading: "DEVELOPMENT",
        icon: Service3,
        details: "Procube takes pride in its expertise, specializing in the development of user-friendly websites, applications, and e-commerce platforms. Our unwavering dedication centers on the creation of seamless customer experiences, where intuitive design seamlessly melds with flawless functionality. This fusion generates exceptional interactions, fundamentally elevating user satisfaction. In the digital realm, the user experience reigns supreme, and we wholeheartedly commit to delivering just that. Our solutions are meticulously crafted to not merely meet but exceed user expectations, guaranteeing that your brand's digital footprint leaves an enduring, positive impression. At Procube, excellence isn't just a goal; it's our standard.",
        tags: ["E-commerce Development", "Android & iOS Apps", "Web Applications", "B2B / Enterprise Software", "Portfolio Websites"]
    },
    {
        heading: "MARKETING",
        icon: Service4,
        details: "We harness the power of strategic tactics, pinpoint precision in targeting, and the art of crafting compelling messaging to ensure your brand not only stands out but shines. Our goal is to captivate the right audience, creating engaging interactions that translate into concrete, measurable outcomes. By engaging Procube, you're not just partnering with a digital marketing agency; you're collaborating with a team dedicated to your brand's success. We're here to help you stand out in the competitive digital landscape, building the brand visibility and engagement that ultimately drives tangible, measurable results. Let us transform your brand's online presence into a compelling, conversion-focused asset. Your success is our mission.",
        tags: ["Search Engine Optimization", "Search Engine Marketing / Google Ads", "Social Media Marketing / Meta Ads", "Social Media Management", "Whatsapp Business Automation"]
    }
];

const Card = ({ heading, icon, details, index, tags }) => {

    const lastcard = index === data.length - 1;


    return (
        <div
            className={`flex w-full py-5 md:py-10 px-4 md:px-24 cursor-pointer border-t-2 border-white border-opacity-40  ${lastcard ? "border-b-2" : "border-b-0"}`}
            key={index}
        >
            <div className='flex flex-col justify-center gap-y-3 md:gap-y-8'>
                <img src={icon} alt={heading} className='w-full md:w-full rounded-3xl mb-2 md:mb-4' />
                <p className=' font-normal text-2xl md:text-5xl'>{heading}</p>
                <p className='text-sm md:text-lg opacity-40'>{details}</p>
                <div className='flex flex-wrap gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-4'>
                    {tags.map((tag, index) => (
                        <p key={index} className='text-sm md:text-base bg-[#870FF3] px-2 md:px-4 py-1 md:py-2 rounded-full'>{tag}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Services1 = () => {
    return (
        <div className='px-6 md:px-24 py-10 md:py-32 md:pt-52 flex flex-col'>
            <p className='flex font-normal text-4xl md:text-8xl text-center uppercase mx-auto pb-5 md:pb-16 !leading-tight'>Crafting Exceptional Digital Products</p>
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
    );
};

export default Services1;
