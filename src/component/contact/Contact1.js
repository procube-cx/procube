import React, { useState } from 'react'

const filter = ["Development", "User Experience", "Digital  Strategy", "Branding"]


const Contact1 = () => {

  const [id, setId] = React.useState('Development');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [project, setProject] = useState('');
  const [suggestionTaken, setSuggestionTaken] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    console.log('ID:', id);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Project:', project);
  };

  const handleSuggestionTaken = () => {
    setSuggestionTaken(true);
  };



  return (
    <div className='px-6 md:px-24 pb-5 md:pb-20 pt-24 md:pt-32'>
      <p className='font-normal text-4xl md:text-7xl max-w-3xl text-center mx-auto py-5 md:pb-20 uppercase !leading-tight'>Got Ideas? Let’s team up</p>
      <form onSubmit={handleFormSubmit} className='flex flex-col items-start gap-y-8 md:gap-y-14 w-full'>
        <p className='font-normal text-2xl md:text-4xl max-w-xs text-left'>You need to do</p>
        <div className='flex flex-row gap-4 md:gap-8 w-full overflow-x-auto'>
          {filter.map((item, index) => (
            <div className={`flex items-center px-5 py-2 md:px-10 md:py-3 rounded-full cursor-pointer ${item === id ? 'bg-[#7605C1]' : 'border-[0.25px]'}`} key={index} onClick={() => setId(item)} style={{ whiteSpace: 'nowrap', minWidth: 'fit-content' }}>
              <p className='text-sm md:text-lg'>{item}</p>
            </div>
          ))}
        </div>
        <input
          className={`w-full bg-transparent border-b-[1px] border-white border-opacity-50 pb-7 md:pb-12 font-normal text-base md:text-3xl focus:!outline-none ${suggestionTaken ? 'bg-gray-200' : ''
            }`}
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className={`w-full bg-transparent border-b-[1px] border-white border-opacity-50 pb-7 md:pb-12 font-normal text-base md:text-3xl focus:!outline-none ${suggestionTaken ? 'bg-gray-200' : ''
            }`}
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={`w-full bg-transparent border-b-[1px] border-white border-opacity-50 pb-7 md:pb-12 font-normal text-base md:text-3xl focus:!outline-none ${suggestionTaken ? 'bg-gray-200' : ''
            }`}
          placeholder='Phone Number'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <textarea
          className={`w-full bg-transparent border-b-[1px] border-white border-opacity-50 pb-20 md:pb-36 font-normal text-base md:text-3xl focus:!outline-none ${suggestionTaken ? 'bg-gray-200' : ''
            }`}
          placeholder='Tell Us About Your Project'
          value={project}
          onChange={(e) => setProject(e.target.value)}
        />
        <button
          className='flex px-12 py-3 md:px-24 md:py-4 button ml-auto rounded-[78px] bg-[#7605C1] font-normal text-base md:text-3xl'
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact1