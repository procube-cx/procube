import React from 'react'
import join from '../../assets/images/About/joinus.png'

const About5 = () => {
    return (
        <div className="cont mycontainer px-6 md:px-24  pt-12 md:pt-36">
            <div className="flex flex-col md:flex-row bg-[#1A1A1A] rounded-lg md:rounded-2xl">
                <div className='flex flex-col my-auto flex-1 relative justify-center items-center  min-h-60' >
                    <div className='w-4/5 md:w-4/6 flex flex-col gap-3 md:gap-5'>
                        <p className='font-normal text-xs md:text-lg opacity-80'>COME JOIN US</p>
                        <p className='font-normal text-2xl md:text-5xl'>Let’s build the future of education together</p>
                        <div className='button-hover text-sm bg-[#7605C1] px-8 md:px-10 py-2 md:py-3 md:text-2xl rounded-full cursor-pointer mr-auto mt-2 md:mt-3'>See open positions</div>
                    </div>
                </div>
                <div className='flex my-auto flex-1 relative' >
                    <img src={join} alt='join' className='w-full h-full object-cover' />
                </div>
            </div>
        </div>
    )
}

export default About5