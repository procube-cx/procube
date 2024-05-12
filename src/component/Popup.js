import React from 'react'
import join from '../assets/images/popup.png'
import close from '../assets/images/close.svg'


const Popup = ({open,setOpen}) => {
    return (
        open && (
            <>
                <div className='fixed bg-black opacity-80 w-full h-full top-0 z-50'></div>
                <div className="fixed bottom-10 right-10 z-50 w-1/2">
                    <div className="flex flex-row bg-[#1A1A1A] rounded-lg md:rounded-2xl gap-10">
                        <div className='flex my-auto w-2/5 relative h-full overflow-hidden' >
                            <img src={join} alt='join' className='w-full h-full object-cover' />
                        </div>
                        <div className='flex flex-col my-auto flex-1 relative justify-center items-center pr-20 py-10' >
                            <img src={close} alt='close' className='absolute top-5 right-5 cursor-pointer' onClick={()=> setOpen(false)}/>
                            <div className='w-full flex flex-col gap-3 relative'>
                                <p className='font-normal text-3xl capitalize'>Need help finding the best product for your needs?</p>
                                <p className='font-normal text-lg opacity-60'>Get in touch with us today. Our experts are here to find the solutions that work for you.</p>
                                <div className='button-hover bg-[#7605C1] px-8 py-2 md:text-xl rounded-full cursor-pointer mr-auto mt-1'>Get in Touch</div>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    )
}

export default Popup