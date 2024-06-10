import React from 'react'
import whatsapp_icon from '../assets/images/whatsapp.svg'

const Whatsapp = () => {
  return (
    <div className='fixed bottom-5 md:bottom-10 md:right-10 right-5'>
        <a href='https://wa.me/+971503533460' target='_blank' rel='noreferrer' >
            <img src={whatsapp_icon} alt="whatsapp" className='w-14 h-14 md:w-20 md:h-20' />
        </a>
    </div>
  )
}

export default Whatsapp