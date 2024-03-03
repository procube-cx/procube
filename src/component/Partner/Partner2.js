import React from 'react'
import partner from '../../assets/images/Partner1.png'

const Partner2 = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row w-full h-full py-6 md:py-12 px-6 md:px-36 gap-y-12 overflow-hidden md: gap-x-14'>
            <div className='flex md:flex-1 h-full justify-center my-auto'>
                <img src={partner} alt='family' className='w-full'/>
            </div>
            <div className='flex md:flex-1 h-full flex-col justify-center items-center my-auto'>
                <div className=' flex flex-col gap-4 md:gap-8 text-center md:text-left'>
                    <p className={`font-normal text-[32px] md:text-5xl uppercase !leading-tight`}>We're a full-service UX agency that rolls up our sleeves closely.</p>
                    <p className={`font-normal md:text-lg opacity-60`}>As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, web applications, and multi-platform experiences to develop user-friendly's personality.As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. We go beyond mobile apps, web applications, and multi-platform experiences to develop user-friendly's personality.As a UI/UX design agency, we're committed to creating digital products that convert and engage customers. </p>
                </div>
            </div>
        </div>
  )
}

export default Partner2