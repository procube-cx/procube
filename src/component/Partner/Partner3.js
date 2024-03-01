import React from 'react'
import key from '../../assets/images/icons/key.svg'


const data = [
  {
    title: 'Business Executives',
    description: "As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, experiences to personality.",
    icon: key
  },
  {
    title: 'Business Executives',
    description: "As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, experiences to personality.",
    icon: key
  },
  {
    title: 'Business Executives',
    description: "As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, experiences to personality.",
    icon: key
  },
  {
    title: 'Business Executives',
    description: "As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, experiences to personality.",
    icon: key
  },
  {
    title: 'Business Executives',
    description: "As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, experiences to personality.",
    icon: key
  },
  {
    title: 'Business Executives',
    description: "As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, experiences to personality.",
    icon: key
  }
]



const Partner3 = () => {

  return (
    <div className='px-6 md:px-24 pb-20 pt-24 md:pt-32'>
      <p className='font-normal text-4xl md:text-7xl max-w-5xl text-center mx-auto pb-20 uppercase !leading-tight'>Who might find our services appealing?</p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12 md:gap-y-20'>
        {data.map((item, index) => (
          <div key={index} className='bg-[#1A1A1A] py-5 px-4 md:py-10 md:px-7 rounded-lg md:rounded-2xl relative'>
            <img src={item.icon} alt='icon' className='w-10 md:w-16 absolute -top-8' />
            <p className='font-bold text-xl md:text-3xl md:pb-4'>{item.title}</p>
            <p className='text-sm md:text-lg opacity-60'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Partner3