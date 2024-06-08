import React from 'react'
import phone from '../../assets/images/icons/phone.svg'
import email from '../../assets/images/icons/email.svg'

const Contact2 = () => {
    return (
        <div className='px-6 md:px-24 flex flex-col font-normal py-12 md:py-24 gap-y-5 md:gap-y-12 '>
            <div className='flex flex-row justify-between border-b-[1px] border-opacity-60 border-white pb-5 md:pb-12'>
                <div className='flex flex-col '>
                    <p className='opacity-40 text-sm md:text-2xl uppercase'>Phone</p>
                    <div className='flex flex-col md:flex-row gap-2 text-2xl md:text-4xl py-2'>
                        <a href='tel:+971503533460'>+971 503533460</a>
                    </div>
                </div>
                <a href='tel:+971503533460'>
                    <img src={phone} alt="phone" className='w-12 md:w-20 md:mr-8' />
                </a>
            </div>
            <div className='flex flex-row justify-between border-b-[1px] border-opacity-60 border-white pb-5 md:pb-12'>
                <div className='flex flex-col '>
                    <p className='opacity-40 text-sm md:text-2xl uppercase'>Email</p>
                    <div className='flex flex-col md:flex-row gap-2 text-2xl md:text-4xl py-2'>
                        <a href='mailto:info@procube.cx'>info@procube.cx</a>
                    </div>
                </div>
                <a href='mailto:info@procube.cx'>
                    <img src={email} alt="phone" className='w-12 md:w-20 md:mr-8' />
                </a>
            </div>

        </div>

    )
}

export default Contact2