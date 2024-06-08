import React from 'react'
import icon1 from '../../assets/images/icons/career1.svg'
import icon2 from '../../assets/images/icons/career2.svg'
import icon3 from '../../assets/images/icons/career3.svg'
import icon4 from '../../assets/images/icons/career4.svg'
import icon5 from '../../assets/images/icons/career5.svg'
import icon6 from '../../assets/images/icons/career6.svg'
import AnimatedParagraph from '../AnimatedPara';


const data = [
  {
    title: 'Collaborative Environment',
    description: "We foster a team-oriented culture where collaboration and open communication are key. You'll work alongside passionate professionals who are dedicated to achieving collective success, ensuring you always have support and inspiration.",
    icon: icon1
  },
  {
    title: 'Professional Growth',
    description: "We are committed to your professional development. With regular training sessions, workshops, and opportunities for advancement, Procube ensures that you are continually expanding your skills and advancing your career.",
    icon: icon2
  },
  {
    title: 'Innovative Projects',
    description: "Work on cutting-edge projects that challenge and excite you. From digital marketing campaigns to advanced web and app development, you'll have the chance to innovate and contribute to impactful solutions.",
    icon: icon3
  },
  {
    title: 'Work-Life Balance',
    description: "We understand the importance of work-life balance. At Procube, we offer flexible working hours and remote work options, allowing you to manage your professional and personal life effectively.",
    icon: icon4
  },
  {
    title: 'Inclusive Culture',
    description: "Diversity and inclusion are at the heart of our company values. We celebrate differences and ensure a welcoming environment where everyone can bring their authentic selves to work.",
    icon: icon5
  },
  {
    title: 'Competitive Salary',
    description: "Procube offers attractive compensation packages, including competitive salaries, bonuses, and benefits. We believe in rewarding our employees for their hard work and dedication, ensuring you feel valued and motivated.",
    icon: icon6
  }
]



const Career2 = () => {



  return (
    <div className='px-6 md:px-24 pt-12 md:pt-24 heading1'>
      <AnimatedParagraph
        className='font-normal text-4xl md:text-7xl max-w-5xl text-center mx-auto pb-10 md:pb-[70px] uppercase !leading-tight heading'>
        Benefits of working at procube
      </AnimatedParagraph>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        {data.map((item, index) => (
          <div key={index} className='bg-[#1A1A1A] py-5 px-4 md:py-10 md:px-7 md:rounded-3xl flex flex-col justify-between'>
            <div>
              <p className='font-bold text-xl md:text-3xl md:pb-4'>{item.title}</p>
              <p className='text-sm md:text-lg opacity-60'>{item.description}</p>
            </div>
            <div className='flex justify-between pt-8 md:pt-16 w-full mt-auto'>
              <img src={item.icon} alt='icon' className='w-12 h-12 md:w-16 md:h-16' />
              <div className='md:text-lg my-auto'>0{index + 1}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Career2