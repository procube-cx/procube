import React from 'react'
import AnimatedParagraph from '../AnimatedPara'
import img1 from '../../assets/images/Contact/img1.webp'
import img2 from '../../assets/images/Contact/img2.webp'
import img3 from '../../assets/images/Contact/img3.webp'
import img4 from '../../assets/images/Contact/img4.webp'


const cardDetails = [{
  title: 'UAE',
  description: 'Near Al Qiyadha Metro, Dubai , United Arab Emirates',
  icon: img1
}, {
  title: 'INDIA',
  description: 'Hlite Business Park, Calicut, Kerala, India',
  icon: img2
}, {
  title: 'CANADA',
  description: 'North York, Toronto, Ontario M9L1N2',
  icon: img3
}, {
  title: 'saudi arabia',
  description: 'Le Cygne Commercial Center 2, Al-Olaya, Riyadh',
  icon: img4
}]



const card = (title, description, icon,key) => {
  return (
    <div className='flex flex-col max-w-xl text-center gap-2 md:gap-4' key={key}>
      <img src={icon} alt="icon" className='font-normal h-44 md:h-80 object-cover rounded-lg md:rounded-2xl' />
      <p className={`uppercase text-base md:text-2xl`}>{title}</p>
      <p className={`capitalize text-xs md:text-lg mx-auto md:max-w-[78%]`}>{description}</p>
    </div>
  )
}

const Contact3 = () => {
  return (
    <div className='pt-20 px-6 md:px-24'>
      <div className='flex flex-col w-full h-full items-center gap-6 md:gap-20'>
        <div className='flex flex-col md:max-w-4xl text-center gap-2 md:gap-6'>
          <AnimatedParagraph className='font-normal text-4xl md:text-8xl'>GLOBAL PRESENCE</AnimatedParagraph>
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