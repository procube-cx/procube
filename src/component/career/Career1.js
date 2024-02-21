import React, { useState } from 'react'
import icon from '../../assets/images/expertise.png';
import icon2 from '../../assets/images/icons/icon2.svg';


const filter = ["All", "Marketing", "Production", "Development", "Branding"]
const data = [
  {
    heading: "Trainee Software Engineer",

  },
  {
    heading: "UIUX Designer - Module Lead",

  },
  {
    heading: "Illustrator & Animator",

  },
  {
    heading: "Flutter Developer",

  },
  {
    heading: "Lead Web Developer",

  },
  {
    heading: "Front End Developer",
  },
  {
    heading: "senior graphic designer",
  },
];


const Card = ({ heading, index, open, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    setIsOpen(open === index);
  }, [open, index]);

  return (
    <div
      className='overflow-hidden flex flex-col w-full border-[2px] rounded-xl md:rounded-3xl border-opacity-40 border-white gap-2 md:gap-4 py-5 md:py-8 cursor-pointer px-4 md:pl-12 md:px-0'
      onClick={onClick}
    >
      <div className='grid grid-cols-12 flex-1 landing gap-y-5'>
        <div className='col-span-12 md:col-span-11 flex flex-col justify-center md:justify-between gap-y-5 md:gap-y-3'>
          <p className='font-normal text-base md:text-2xl my-auto'>{heading}</p>
        </div>
        <div className={`md:col-span-1 w-full ${isOpen && 'rotate-180'}`}>
          <img src={icon2} alt="icon" className={`w-auto ${isOpen && 'ml-auto'}`} />
        </div>
      </div>
      {isOpen && (
        <>
          <p className='font-normal text-xs md:text-xl '>Key Responsibilities (What you will be doing?)</p>
          <p className='font-normal text-xs md:text-xl '>Technical skills (What is required?)</p>
          <div className={`flex mr-auto items-center px-5 py-2 md:px-10 md:py-3 rounded-full cursor-pointer bg-[#7605C1]`} style={{ whiteSpace: 'nowrap', minWidth: 'fit-content' }}>
            <p className='text-sm md:text-lg'>Apply Now</p>
          </div>
        </>

      )}
    </div>
  );
};



const Career1 = () => {

  const [id, setId] = React.useState('All');
  const [activeId, setActiveId] = useState(-1);


  return (
    <div className='px-6 md:px-24 pb-5 md:pb-20 pt-24 md:pt-32'>
      <p className='font-normal text-4xl md:text-7xl max-w-3xl text-center mx-auto py-5 md:pb-20 uppercase !leading-tight'>Got Ideas? Let’s team up</p>
      <div className='flex flex-row gap-4 md:gap-8 w-full overflow-x-auto mb-4 md:mb-8'>
        {filter.map((item, index) => (
          <div className={`flex items-center px-5 py-2 md:px-10 md:py-3 rounded-full cursor-pointer ${item === id ? 'bg-[#7605C1]' : 'border-[0.25px]'}`} key={index} onClick={() => setId(item)} style={{ whiteSpace: 'nowrap', minWidth: 'fit-content' }}>
            <p className='text-sm md:text-lg'>{item}</p>
          </div>
        ))}
      </div>

      <div className='flex flex-col gap-y-5 md:gap-y-8'>
        {data.map((cardDetail, index) => (
          <Card
            heading={cardDetail.heading}
            index={index}
            key={index}
            open={activeId}
            onClick={() => setActiveId(index)}
          />
        ))}
      </div>

    </div>
  )
}

export default Career1