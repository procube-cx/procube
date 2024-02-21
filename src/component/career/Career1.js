import React, { useState } from 'react'
import icon from '../../assets/images/expertise.png';
import icon2 from '../../assets/images/icons/icon2.svg';


const filter = ["All", "Marketing", "Production", "Development", "Branding"]
const data = [
  {
    heading: "Trainee Software Engineer",
    description1: [
      "Design, develop, modify, debug and/or maintain software code according to functional, non-functional, and technical design specifications.",
      "Follow Techtic Solutions standards, applicable software development methodology, and release processes, to ensure code is maintainable, scalable, and supportable, and demo the software products to stakeholders.",
      "Investigate issues by reviewing/debugging code, provide fixes and workarounds, and review changes for operability to maintain existing software solutions.",
      "Work within a team, collaborate and add value through participation in peer code reviews, provide comments and suggestions, and work with cross-functional teams to achieve goals.",
      "Assume technical accountability for your specific work products within an application and provide technical support during solution design for new requirements.",
      "You will be encouraged to actively look for innovation, continuous improvement, and efficiency in all assigned tasks."
    ],
    description2: [
      "Writing well-designed, tested, and efficient code",
      "Create and test website applications.",
      "Excellent knowledge of Relational Databases, and SQL.",
      "Knowledge of test-driven development.",
      "Mastery of software engineering tools.",
      "Ability to document requirements and specifications.",
      "Familiarity with software development methodology and release processes."
    ]
  },
  {
    heading: "UIUX Designer - Module Lead",
    description1: [
      "Design, develop, modify, debug and/or maintain software code according to functional, non-functional, and technical design specifications.",
      "Follow Techtic Solutions standards, applicable software development methodology, and release processes, to ensure code is maintainable, scalable, and supportable, and demo the software products to stakeholders.",
      "Investigate issues by reviewing/debugging code, provide fixes and workarounds, and review changes for operability to maintain existing software solutions.",
      "Work within a team, collaborate and add value through participation in peer code reviews, provide comments and suggestions, and work with cross-functional teams to achieve goals.",
      "Assume technical accountability for your specific work products within an application and provide technical support during solution design for new requirements.",
      "You will be encouraged to actively look for innovation, continuous improvement, and efficiency in all assigned tasks."
    ],
    description2: [
      "Writing well-designed, tested, and efficient code",
      "Create and test website applications.",
      "Excellent knowledge of Relational Databases, and SQL.",
      "Knowledge of test-driven development.",
      "Mastery of software engineering tools.",
      "Ability to document requirements and specifications.",
      "Familiarity with software development methodology and release processes."
    ]
  },
  {
    heading: "Illustrator & Animator",
    description1: [
      "Design, develop, modify, debug and/or maintain software code according to functional, non-functional, and technical design specifications.",
      "Follow Techtic Solutions standards, applicable software development methodology, and release processes, to ensure code is maintainable, scalable, and supportable, and demo the software products to stakeholders.",
      "Investigate issues by reviewing/debugging code, provide fixes and workarounds, and review changes for operability to maintain existing software solutions.",
      "Work within a team, collaborate and add value through participation in peer code reviews, provide comments and suggestions, and work with cross-functional teams to achieve goals.",
      "Assume technical accountability for your specific work products within an application and provide technical support during solution design for new requirements.",
      "You will be encouraged to actively look for innovation, continuous improvement, and efficiency in all assigned tasks."
    ],
    description2: [
      "Writing well-designed, tested, and efficient code",
      "Create and test website applications.",
      "Excellent knowledge of Relational Databases, and SQL.",
      "Knowledge of test-driven development.",
      "Mastery of software engineering tools.",
      "Ability to document requirements and specifications.",
      "Familiarity with software development methodology and release processes."
    ]
  },
  {
    heading: "Flutter Developer",
    description1: [
      "Design, develop, modify, debug and/or maintain software code according to functional, non-functional, and technical design specifications.",
      "Follow Techtic Solutions standards, applicable software development methodology, and release processes, to ensure code is maintainable, scalable, and supportable, and demo the software products to stakeholders.",
      "Investigate issues by reviewing/debugging code, provide fixes and workarounds, and review changes for operability to maintain existing software solutions.",
      "Work within a team, collaborate and add value through participation in peer code reviews, provide comments and suggestions, and work with cross-functional teams to achieve goals.",
      "Assume technical accountability for your specific work products within an application and provide technical support during solution design for new requirements.",
      "You will be encouraged to actively look for innovation, continuous improvement, and efficiency in all assigned tasks."
    ],
    description2: [
      "Writing well-designed, tested, and efficient code",
      "Create and test website applications.",
      "Excellent knowledge of Relational Databases, and SQL.",
      "Knowledge of test-driven development.",
      "Mastery of software engineering tools.",
      "Ability to document requirements and specifications.",
      "Familiarity with software development methodology and release processes."
    ]
  },
  {
    heading: "Lead Web Developer",
    description1: [
      "Design, develop, modify, debug and/or maintain software code according to functional, non-functional, and technical design specifications.",
      "Follow Techtic Solutions standards, applicable software development methodology, and release processes, to ensure code is maintainable, scalable, and supportable, and demo the software products to stakeholders.",
      "Investigate issues by reviewing/debugging code, provide fixes and workarounds, and review changes for operability to maintain existing software solutions.",
      "Work within a team, collaborate and add value through participation in peer code reviews, provide comments and suggestions, and work with cross-functional teams to achieve goals.",
      "Assume technical accountability for your specific work products within an application and provide technical support during solution design for new requirements.",
      "You will be encouraged to actively look for innovation, continuous improvement, and efficiency in all assigned tasks."
    ],
    description2: [
      "Writing well-designed, tested, and efficient code",
      "Create and test website applications.",
      "Excellent knowledge of Relational Databases, and SQL.",
      "Knowledge of test-driven development.",
      "Mastery of software engineering tools.",
      "Ability to document requirements and specifications.",
      "Familiarity with software development methodology and release processes."
    ]
  },
  {
    heading: "Front End Developer",
    description1: [
      "Design, develop, modify, debug and/or maintain software code according to functional, non-functional, and technical design specifications.",
      "Follow Techtic Solutions standards, applicable software development methodology, and release processes, to ensure code is maintainable, scalable, and supportable, and demo the software products to stakeholders.",
      "Investigate issues by reviewing/debugging code, provide fixes and workarounds, and review changes for operability to maintain existing software solutions.",
      "Work within a team, collaborate and add value through participation in peer code reviews, provide comments and suggestions, and work with cross-functional teams to achieve goals.",
      "Assume technical accountability for your specific work products within an application and provide technical support during solution design for new requirements.",
      "You will be encouraged to actively look for innovation, continuous improvement, and efficiency in all assigned tasks."
    ],
    description2: [
      "Writing well-designed, tested, and efficient code",
      "Create and test website applications.",
      "Excellent knowledge of Relational Databases, and SQL.",
      "Knowledge of test-driven development.",
      "Mastery of software engineering tools.",
      "Ability to document requirements and specifications.",
      "Familiarity with software development methodology and release processes."
    ]
  },
  {
    heading: "senior graphic designer",
    description1: [
      "Design, develop, modify, debug and/or maintain software code according to functional, non-functional, and technical design specifications.",
      "Follow Techtic Solutions standards, applicable software development methodology, and release processes, to ensure code is maintainable, scalable, and supportable, and demo the software products to stakeholders.",
      "Investigate issues by reviewing/debugging code, provide fixes and workarounds, and review changes for operability to maintain existing software solutions.",
      "Work within a team, collaborate and add value through participation in peer code reviews, provide comments and suggestions, and work with cross-functional teams to achieve goals.",
      "Assume technical accountability for your specific work products within an application and provide technical support during solution design for new requirements.",
      "You will be encouraged to actively look for innovation, continuous improvement, and efficiency in all assigned tasks."
    ],
    description2: [
      "Writing well-designed, tested, and efficient code",
      "Create and test website applications.",
      "Excellent knowledge of Relational Databases, and SQL.",
      "Knowledge of test-driven development.",
      "Mastery of software engineering tools.",
      "Ability to document requirements and specifications.",
      "Familiarity with software development methodology and release processes."
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
      className='overflow-hidden flex flex-col w-full border-[2px] rounded-xl md:rounded-3xl border-opacity-40 border-white gap-2 md:gap-4 py-5 md:py-8 cursor-pointer px-4 md:px-12'
      onClick={onClick}
    >
      <div className='grid grid-cols-12 flex-1 landing gap-y-5'>
        <div className='col-span-12 md:col-span-11 flex flex-col justify-center md:justify-between gap-y-5 md:gap-y-3'>
          <p className='font-normal text-base md:text-2xl my-auto capitalize'>{heading}</p>
        </div>
        <div className={`md:col-span-1 w-full ${isOpen && 'rotate-180'}`}>
          <img src={icon2} alt="icon" className={`w-auto ${isOpen ? 'mr-auto' : 'ml-auto'}`} />
        </div>
      </div>
      {isOpen && (
        <>
          <p className='font-normal text-xs md:text-xl '>Key Responsibilities (What you will be doing?)</p>
          <div>
            <ul style={{ padding: '0' }}>
              {description1.map((item, index) => (
                <li key={index} style={{ paddingBottom: '0.5rem', marginBottom: '0.5rem', listStyleType: 'disc' }}>
                  <p className='font-normal text-xs md:text-xl text-gray-400'>{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <p className='font-normal text-xs md:text-xl '>Technical skills (What is required?)</p>
          <div>
            <ul style={{ padding: '0' }}>
              {description2.map((item, index) => (
                <li key={index} style={{ paddingBottom: '0.5rem', marginBottom: '0.5rem', listStyleType: 'disc' }}>
                  <p className='font-normal text-xs md:text-xl text-gray-400'>{item}</p>
                </li>
              ))}
            </ul>
          </div>
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