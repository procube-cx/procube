import React from 'react';
import '../hero/hero.css'; // Assuming this is your CSS file path
import image1 from '../../assets/images/Casestudy/Image1.png';
import image2 from '../../assets/images/Casestudy/Image2.png';
import image3 from '../../assets/images/Casestudy/Image3.png';
import image4 from '../../assets/images/Casestudy/Image4.png';
import image5 from '../../assets/images/Casestudy/Image5.png';
import image6 from '../../assets/images/Casestudy/Image6.png';

const data = {
    title: "Kedarkala, a luxury interior design studio",
    coverImage: image1,
    shortdesc: [
        {
            title: "Project",
            description: "kedarkala"
        },
        {
            title: "Industry",
            description: "Fashion"
        },
        {
            title: "Platform",
            description: "Mobile Application"
        },
        {
            title: "Service",
            description: "UX Design, UI Design"
        }
    ],
    details: [
        {
            title: "About project",
            description: ["Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra.", "Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra."],
            icon: image2
        },
        {
            title: "Services We Provide",
            description2: [
                {
                    title: "Logo Design",
                    description: "We're a full-service UX design and branding agency that rolls up our sleeves and works closely with our clients. Together, we craft unforgettable user experiences that span all platforms and touchpoints of products or services, delivering fantastic results."
                },
                {
                    title: "UI/UX Design",
                    description: "We're a full-service UX design and branding agency that rolls up our sleeves and works closely with our clients. Together, we craft unforgettable user experiences that span all platforms and touchpoints of products or services, delivering fantastic results."
                },
                {
                    title: "Web Design",
                    description: "We're a full-service UX design and branding agency that rolls up our sleeves and works closely with our clients. Together, we craft unforgettable user experiences that span all platforms and touchpoints of products or services, delivering fantastic results."
                },
                {
                    title: "Mobile App Design",
                    description: "We're a full-service UX design and branding agency that rolls up our sleeves and works closely with our clients. Together, we craft unforgettable user experiences that span all platforms and touchpoints of products or services, delivering fantastic results."
                }
            ],
            icon: image3
        },
        {
            title: "The Approach",
            description: ["Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra.", "Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra."],
            icon: image4
        },
        {
            title: "The Challenges",
            description: ["Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra.", "Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra."],
            icon: image5
        },
        {
            title: "The Impact",
            description: ["Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra.", "Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra."],
            icon: image6
        }
    ]
};

const Casestudy1 = () => {
    return (
        <div className=' py-24 md:py-32 flex flex-col font-normal'>
            <div className='px-6 md:px-24'>
                <p className='flex text-4xl md:text-7xl uppercase pb-5 md:pb-16 !leading-tight max-w-4xl'>{data.title}</p>
                <img src={data.coverImage} alt='Kedarkala' className='w-full' />
                <div className='grid md:grid-cols-4 grid-cols-2 pb-5 md:pb-8 my-4 md:my-12 border-b-2 border-white border-opacity-55 gap-y-3'>
                    {data.shortdesc.map((desc, index) => (
                        <div key={index} className='flex flex-col col-span-1 gap-y-2 md:gap-y-4'>
                            <p className='text-xl md:text-[32px]'>{desc.title}</p>
                            <p className='text-xs md:text-lg opacity-60 capitalize'>{desc.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            {data.details.map((detail, index) => (
                <>
                    {detail.description ?
                        (
                            <div key={index} className='flex flex-col gap-y-2 md:gap-y-4 py-4 md:py-12 px-6 md:px-24'>
                                <p className='text-xl md:text-5xl uppercase md:px-24'>{detail.title}</p>
                                <div className='flex flex-col gap-y-5 md:gap-y-10 md:px-24'>
                                    {detail.description && detail.description.map((item, idx) => (
                                        <p key={idx} className='text-xs md:text-lg opacity-60'>{item}</p>
                                    ))}
                                </div>
                                <img src={detail.icon} alt={`${detail.title} icon`} className='flex-1 py-6 md:py-12' />
                            </div>
                        ) : (
                            <>
                            <div key={index} className='grid grid-cols-2 py-10 md:py-24 bg-[#1A1A1A] px-6 md:px-24  gap-x-10'>
                                <p className='col-span-2 text-xl md:text-5xl uppercase md:px-24 pb-7 md:pb-16 '>{detail.title}</p>
                                {detail.description2 && detail.description2.map((item, idx) => (
                                    <>
                                        <div className='flex flex-col gap-y-2 md:gap-y-4 col-span-2 md:col-span-1 border-t-2 border-opacity-60 border-white  pt-2 md:pt-5 pb-5 md:pb-10 odd:md:mr-24 even:md:ml-24 '>
                                            <p key={idx} className='text-xs md:text-3xl'>{item.title}</p>
                                            <p key={idx} className='text-xs md:text-lg opacity-60'>{item.description}</p>
                                        </div>
                                    </>
                                ))}
                            </div>
                                <img src={detail.icon} alt={`${detail.title} icon`} className='flex-1 py-10 md:py-24 px-6 md:px-24' />
                            </>

                        )}
                </>
            ))}

        </div>
    );
};

export default Casestudy1;
