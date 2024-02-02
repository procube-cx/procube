import React from 'react'

const data = [
    {
        heading: "Procube completely transformed our business",
        details:"Procube completely transformed our business with their careful redesign of my business. They helped us to not only improve the look of our brand, but also to streamline our processes and increase our profits. We've seen tremendous growth since working with them and can't thank them enough for their help. Highly recommend!",
        name: "John Doe",
        position: "Google"
    }
]

const Lanidng6 = () => {
  return (
    <div className='bg-vector bg-no-repeat h-screen max-h-[900px] px-6 md:px-24 py-6'>
        <div className='flex flex-col justify-center items-center h-full'>
            <div className='flex flex-col gap-6'>
                <p className=' md:text-8xl italic font-normal'>“{data[0].heading}”</p>
                <p className='md:text-4xl opacity-50 font-normal'>{data[0].details}</p>
                <div className='flex flex-col gap-2  font-medium md:text-3xl'>
                    <p className=''>{data[0].name}</p>
                    <p className='italic'>{data[0].position}</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Lanidng6