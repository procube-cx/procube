import React, { useState } from 'react'
import icon from '../../assets/images/expertise.png';
import icon2 from '../../assets/images/icons/icon2.svg';
import AnimatedParagraph from '../AnimatedPara';


const filter = ["All", "Marketing", "Production", "Development", "Branding"]
const data = [
  {
    filter: "Development",
    heading: "MERN Stack Developer",
    description1: [
      "Minimum of 2 years of professional experience in MERN stack development.",
      "Proficiency in JavaScript, React.js, Node.js, and Express.js.",
      "Strong knowledge of database management systems, particularly MongoDB.",
      "Experience with RESTful API design and integration.",
      "Familiarity with Git and version control systems.",
      "Solid understanding of frontend technologies including HTML, CSS, and responsive design.",
      "Fluent in English with excellent communication skills, both written and spoken.",
      "Ability to work independently, manage time efficiently, and meet project deadlines.",
      "Strong problem-solving skills and attention to detail.",
    ],
    description2: [
      "Competitive salary and benefits package.",
      "Opportunity to work on innovative projects with a dynamic and collaborative team.",
      "Remote work flexibility with the ability to work from anywhere.",
      "Ongoing professional development and training opportunities.",
      "Exposure to a diverse range of projects and technologies.",
    ]
  },
  {
    filter: "Branding",
    heading: "Graphic Designer",
    description1: [
      "Conceptualize, design, and produce a wide range of visual materials, including posters, product packaging, marketing collateral, and digital assets.",
      "Collaborate with cross-functional teams, including marketing, product development, and sales, to create compelling and on-brand visual content.",
      "Develop innovative and eye-catching designs that align with project goals and client objectives.",
      "Create engaging and informative posters for marketing campaigns, events, and promotions.",
      "Design posters that effectively convey key messages and enhance brand awareness.",
      "Ensure all posters meet design and quality standards and are ready for print or digital use.",
      "Design product packaging that is not only aesthetically pleasing but also functional, ensuring product safety and protection.",
      "Collaborate with the product development team to create packaging that aligns with product specifications and brand identity.",
    ],
    description2: [
      "Competitive salary and benefits package.",
      "Opportunity to work on innovative projects with a dynamic and collaborative team.",
      "Remote work flexibility with the ability to work from anywhere.",
      "Ongoing professional development and training opportunities.",
      "Exposure to a diverse range of projects and technologies.",
    ]
  },
];


const Card = ({ heading, index, open, onClick, description1, description2 }) => {
  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    setIsOpen(open === index);
  }, [open, index]);

  return (
    <div
      className='overflow-hidden flex flex-col w-full border-[2px] rounded-xl md:rounded-3xl border-opacity-40 border-white gap-2 md:gap-4 py-5 md:py-8 px-4 md:px-12'
    >
      <div
        className='grid grid-cols-12 flex-1 landing gap-y-5 cursor-pointer'
        onClick={onClick}
      >
        <div className='col-span-11 flex flex-col justify-center md:justify-between gap-y-5 md:gap-y-3'>
          <p className='font-normal text-base md:text-2xl my-auto capitalize'>{heading}</p>
        </div>
        <div className={`md:col-span-1 w-full ${isOpen && 'rotate-180'}`}>
          <img src={icon2} alt="icon" className={`w-auto ${isOpen ? 'mr-auto' : 'ml-auto'}`} />
        </div>
      </div>
      {isOpen && (
        <>
          <p className='font-normal text-xs md:text-xl '>Requirements:</p>
          <div>
            <ul style={{ paddingLeft: '16px' }}>
              {description1.map((item, index) => (
                <li key={index} style={{ paddingBottom: '0.5rem', marginBottom: '0.5rem', listStyleType: 'disc', opacity: '60%' }}>
                  <p className='font-normal text-xs md:text-xl'>{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <p className='font-normal text-xs md:text-xl '>What We Offer:</p>
          <div>
            <ul style={{ paddingLeft: '16px' }}>
              {description2.map((item, index) => (
                <li key={index} style={{ paddingBottom: '0.5rem', marginBottom: '0.5rem', listStyleType: 'disc', opacity: '60%' }}>
                  <p className='font-normal text-xs md:text-xl'>{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={`button-hover flex mr-auto items-center px-5 py-2 md:px-10 md:py-3 rounded-full cursor-pointer bg-[#7605C1]`} style={{ whiteSpace: 'nowrap', minWidth: 'fit-content' }}>
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
  const [filteredData, setFilteredData] = useState(data);

  const handleFilter = (item) => {
    setId(item);
    if (item === 'All') {
      setFilteredData(data);
    } else {
      const filtered = data.filter((card) => card.filter === item);
      setFilteredData(filtered);
    }
  }



  return (
    <div className='px-6 md:px-24 pb-0 pt-24 md:pt-32'>
      <AnimatedParagraph
        className='font-normal text-4xl md:text-8xl max-w-7xl text-center mx-auto pb-6 md:pb-[40px] uppercase !leading-tight'>
        DISCOVER YOUR FUTURE AT PROCUBE
      </AnimatedParagraph>
      <div className='flex flex-row gap-4 md:gap-8 w-full overflow-x-auto pb-4 md:pb-[30px]'>
        {filter.map((item, index) => (
          <div className={`flex items-center px-5 py-2 md:px-10 md:py-3 rounded-full cursor-pointer ${item === id ? 'bg-[#7605C1]' : 'border-[0.25px]'}`} key={index} onClick={() => handleFilter(item)} style={{ whiteSpace: 'nowrap', minWidth: 'fit-content' }}>
            <p className='text-sm md:text-lg'>{item}</p>
          </div>
        ))}
      </div>

      <div className='flex flex-col gap-y-5 md:gap-y-8'>
        {filteredData.map((cardDetail, index) => (
          <Card
            heading={cardDetail.heading}
            index={index}
            key={index}
            open={activeId}
            description1={cardDetail.description1}
            description2={cardDetail.description2}
            onClick={() => index === activeId ? setActiveId(-1) : setActiveId(index)}
          />
        ))}
      </div>

    </div>
  )
}

export default Career1