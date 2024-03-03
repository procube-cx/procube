import React from 'react'
import hero from '../../assets/images/insight.png'

const data = [
  {
    heading: "We're a full-service UX design and branding agency that rolls up our sleeves closely.",
    date: "June 23, 2023",
    content: "As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, web applications, and multi-platform experiences to develop user-friendly's personality.As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, web applications, and multi-platform experiences to develop user-friendly's personality.As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, web applications, and multi-platform experiences to develop user-friendly's personality.As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, web applications, and multi-platform experiences to develop user-friendly's personality.As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, web applications, and multi-platform experiences to develop user-friendly's personality.As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, web applications, and multi-platform experiences to develop user-friendly's personality.As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, web applications, and multi-platform experiences to develop user-friendly's personality.As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, web applications, and multi-platform experiences to develop user-friendly's personality.As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, web applications, and multi-platform experiences to develop user-friendly's personality.As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, web applications, and multi-platform experiences to develop user-friendly's personality.",
    icon: hero
  },
]

const Insightview = () => {
  return (
    <div className='px-6 md:px-24  flex flex-col gap-y-5 md:gap-y-10 relative pt-24 md:pt-48'>
      <p className='font-normal text-4xl md:text-7xl max-w-full text-center uppercase mx-auto !leading-tight'>{data[0].heading}</p>
      <div className={`flex items-center px-5 py-2 md:px-10 md:py-3 rounded-full cursor-pointer bg-[#3A3A3A] mx-auto`} style={{ whiteSpace: 'nowrap', minWidth: 'fit-content' }}>
        <p className='text-sm md:text-lg'>{data[0].date}</p>
      </div>
      <img src={data[0].icon} alt="hero" className='w-full md:w-5/6 mx-auto object-cover md:h-[80vh] rounded-lg md:rounded-2xl' />
      <p className='text-center font-normal w-full md:w-5/6 mx-auto text-xs md:text-lg opacity-60'>{data[0].content}</p>


    </div>
  )
}

export default Insightview