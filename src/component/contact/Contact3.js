import React from 'react'
import icon from '../../assets/images/large-1.png'

const cardDetails = [{
  title: 'UAE',
  description: 'Near Al Qiyadha Metro, Dubai , United Arab Emirates',
  icon: icon
}, {
  title: 'INDIA',
  description: 'Hlite Business Park, Calicut, Kerala, India',
  icon: icon
}, {
  title: 'CANADA',
  description: 'North York, Toronto, Ontario M9L1N2',
  icon: icon
}, {
  title: 'saudi arabia',
  description: 'Hlite Business Park, Calicut, Kerala, India',
  icon: icon
}]



const card = (title, description, icon,key) => {
  return (
    <div className='flex flex-col max-w-xl text-center gap-4' key={key}>
      <img src={icon} alt="icon" className='font-normal md:h-80 object-cover rounded-2xl' />
      <p className={`uppercase text-base md:text-2xl`}>{title}</p>
      <p className={`capitalize text-xs md:text-lg mx-auto max-w-[78%]`}>{description}</p>
    </div>
  )
}

const Contact3 = () => {
  return (
    <div className='pt-20 px-6 md:px-24'>
      <div className='flex flex-col w-full h-full items-center gap-6 md:gap-20'>
        <div className='flex flex-col md:max-w-4xl text-center gap-2 md:gap-6'>
          <p className='font-normal text-4xl md:text-8xl'>GLOBAL PRESENCE</p>
        </div>
        <div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8'>
            {cardDetails.map((cardDetail,index) => card(cardDetail.title, cardDetail.description, cardDetail.icon,index))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact3