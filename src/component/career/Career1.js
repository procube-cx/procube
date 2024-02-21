import React, { useState } from 'react'

const filter = ["All", "Marketing", "Production", "Development","Branding"]


const Career1 = () => {

  const [id, setId] = React.useState('All');


  return (
    <div className='px-6 md:px-24 pb-5 md:pb-20 pt-24 md:pt-32'>
      <p className='font-normal text-4xl md:text-7xl max-w-3xl text-center mx-auto py-5 md:pb-20 uppercase !leading-tight'>Got Ideas? Let’s team up</p>
        <div className='flex flex-row gap-4 md:gap-8 w-full overflow-x-auto'>
          {filter.map((item, index) => (
            <div className={`flex items-center px-5 py-2 md:px-10 md:py-3 rounded-full cursor-pointer ${item === id ? 'bg-[#7605C1]' : 'border-[0.25px]'}`} key={index} onClick={() => setId(item)} style={{ whiteSpace: 'nowrap', minWidth: 'fit-content' }}>
              <p className='text-sm md:text-lg'>{item}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Career1