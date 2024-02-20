import React from 'react'
import phone from '../../assets/images/icons/phone.svg'
import email from '../../assets/images/icons/email.svg'

const Contact2 = () => {
    return (
        <div className='px-6 md:px-24 flex flex-col font-normal py-6 md:py-24'>
            <div className='flex flex-row justify-between py-5 md:py-16 border-b-[1px] border-opacity-60 border-white'>
                <div className='flex flex-col '>
                    <p className='opacity-40 text-sm md:text-2xl uppercase'>Phone</p>
                    <div className='flex flex-col md:flex-row gap-2 text-2xl md:text-4xl py-2'>
                        <p>+91 8589972200,</p>
                        <p>+91 8589973300</p>
                    </div>
                </div>
                <img src={phone} alt="phone" className='w-12 md:w-20 md:mr-8' />
            </div>
            <div className='flex flex-row justify-between py-5 md:py-16 border-b-[1px] border-opacity-60 border-white'>
                <div className='flex flex-col '>
                    <p className='opacity-40 text-sm md:text-2xl uppercase'>Email</p>
                    <div className='flex flex-col md:flex-row gap-2 text-2xl md:text-4xl py-2'>
                        <p>procube@gmail.com</p>
                    </div>
                </div>
                <img src={email} alt="phone" className='w-12 md:w-20 md:mr-8' />
            </div>

        </div>

    )
}

export default Contact2