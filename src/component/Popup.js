import React from 'react'
import join from '../assets/images/popup.png'
import close from '../assets/images/close.svg'

const Popup = ({ open, handleClose }) => {
    return (
        open && (
            <>
                <div className='fixed bg-black opacity-80 w-full h-full top-0 z-50'></div>
                <div className="fixed bottom-3 left-[50%] -translate-x-[50%] md:-translate-x-5 md:bottom-10 md:right-10 z-50 w-[90vw] md:w-1/2">
                    <div className="flex flex-col-reverse md:flex-row bg-[#1A1A1A] rounded-xl md:rounded-2xl overflow-hidden">
                        <div className='flex my-auto md:my-0 md:w-2/5 relative md:h-full w-full max-h-[250px] md:max-h-[1000px]' >
                            <img src={join} alt='join' className='w-full h-full object-cover md:min-h-[350px]' />
                        </div>
                        <div className='flex flex-col my-auto flex-1 relative justify-center items-center px-8 pr-14 md:pr-20 py-10' >
                            <img src={close} alt='close' className='absolute top-3 md:top-5 right-3 md:right-5 cursor-pointer' onClick={handleClose} />
                            <div className='w-full flex flex-col gap-3 relative'>
                                <p className='font-normal text-xl md:text-3xl capitalize'>Book a free consultation with Procube today!</p>
                                <p className='font-normal text-sm md:text-lg opacity-60'>Our experts will work with you to understand your business needs and craft a personalized strategy to elevate your business.</p>
                                <a href='https://calendly.com/procube-cx/30min' className='button-hover bg-[#7605C1] px-8 py-2 text-sm md:text-xl rounded-full cursor-pointer mr-auto mt-1'>
                                    Book Now
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    )
}

export default Popup
