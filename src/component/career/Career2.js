import React from 'react'
import mic from '../../assets/images/icons/mic.svg'


const data = [
  {
    title: 'Business Executives',
    description: "As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, experiences to personality.",
    icon: mic
  },
  {
    title: 'Business Executives',
    description: "As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, experiences to personality.",
    icon: mic
  },
  {
    title: 'Business Executives',
    description: "As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, experiences to personality.",
    icon: mic
  },
  {
    title: 'Business Executives',
    description: "As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, experiences to personality.",
    icon: mic
  },
  {
    title: 'Business Executives',
    description: "As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, experiences to personality.",
    icon: mic
  },
  {
    title: 'Business Executives',
    description: "As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, experiences to personality.",
    icon: mic
  }
]



const Career2 = () => {

  return (
    <div className='px-6 md:px-24 md:pb-10 pt-24 md:pt-24'>
      <p className='font-normal text-4xl md:text-7xl max-w-5xl text-center mx-auto py-5 md:pb-20 uppercase !leading-tight'>Benefits of working at procube</p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        {data.map((item, index) => (
          <div key={index} className='bg-[#1A1A1A] py-5 px-4 md:py-10 md:px-7 md:rounded-3xl'>
            <p className='font-bold text-xl md:text-3xl md:pb-4'>{item.title}</p>
            <p className='text-sm md:text-lg opacity-60'>{item.description}</p>
            <div className='flex justify-between mt-8 md:mt-16 w-full'>
              <img src={item.icon} alt='icon' className='w-12 h-12 md:w-16 md:h-16' />
              <div className='md:text-lg my-auto'>0{index + 1}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Career2