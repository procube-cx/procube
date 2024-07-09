import React, { useState } from 'react';
import '../hero/hero.css';
import AnimatedParagraph from '../AnimatedPara';
import emailjs from '@emailjs/browser';

const filter = ["DIGITAL STRATEGY", "DESIGNING", "DEVELOPMENT", "MARKETING"];

const Contact1 = () => {
  const [id, setId] = useState(['']);
  const [FirstName, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [PhoneNumber, setPhone] = useState('');
  const [Message, setProject] = useState('');
  const [suggestionTaken, setSuggestionTaken] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [Services, setServices] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!FirstName || !Email || !PhoneNumber || !Message) {
      setError('Please fill out all required fields');
      setServices(id)
      return;
    }
    const formData = {
      id: id.join(', '),
      FirstName,
      Email,
      PhoneNumber,
      Message,
      Services
    };
    console.log('Form Data:', formData);

    emailjs.send('service_dqzou3d', 'template_ndyp3qv', formData, 'OSdguLHcc1wS19BTq')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccess(true);
        setError('');
        // Clear form fields
        setName('');
        setEmail('');
        setPhone('');
        setProject('');
        setId([]);
      }, (error) => {
        console.log('FAILED...', error.text);
        setError(error.text);
      });
  };

  return (
    <div className='px-6 md:px-24 pt-24 md:pt-48'>
      <AnimatedParagraph className='font-normal text-4xl md:text-7xl max-w-3xl text-center mx-auto pb-10 md:pb-[70px] uppercase !leading-tight'>Got Ideas? Let’s team up</AnimatedParagraph>
      <form onSubmit={handleFormSubmit} className='flex flex-col items-start gap-y-8 md:gap-y-10 w-full'>
        <p className='font-normal text-2xl md:text-4xl max-w-xs text-left'>You need to do</p>
        <div className='flex flex-row gap-4 md:gap-8 w-full overflow-x-auto' style={{ scrollbarWidth: 'none' }}>
          {filter.map((item, index) => (
            <div className={`flex items-center px-5 py-2 md:px-10 md:py-3 rounded-full cursor-pointer ${id.includes(item) ? 'bg-[#7605C1]' : 'border-[0.25px]'}`} key={index} onClick={() => id.includes(item) ? setId(id.filter(i => i !== item)) : setId([...id, item])} style={{ whiteSpace: 'nowrap', minWidth: 'fit-content' }}>
              <p className='text-sm md:text-lg'>{item}</p>
            </div>
          ))}
        </div>
        <input
          className={`w-full bg-transparent border-b-[1px] border-white border-opacity-50 pb-7 md:pb-12 font-normal text-base md:text-3xl focus:!outline-none ${suggestionTaken ? 'bg-gray-200' : ''
            }`}
          placeholder='Name'
          value={FirstName}
          onChange={(e) => setName(e.target.value)}
          autoComplete={`no-${Math.random()}`}
        />
        <input
          className={`w-full bg-transparent border-b-[1px] border-white border-opacity-50 pb-7 md:pb-12 font-normal text-base md:text-3xl focus:!outline-none ${suggestionTaken ? 'bg-gray-200' : ''
            }`}
          placeholder='Email'
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete={`no-${Math.random()}`}
        />
        <input
          className={`w-full bg-transparent border-b-[1px] border-white border-opacity-50 pb-7 md:pb-12 font-normal text-base md:text-3xl focus:!outline-none ${suggestionTaken ? 'bg-gray-200' : ''
            }`}
          placeholder='Phone Number'
          value={PhoneNumber}
          onChange={(e) => setPhone(e.target.value)}
          autoComplete={`no-${Math.random()}`}
        />
        <textarea
          className={`w-full bg-transparent border-b-[1px] border-white border-opacity-50 pb-20 md:pb-36 font-normal text-base md:text-3xl focus:!outline-none ${suggestionTaken ? 'bg-gray-200' : ''
            }`}
          placeholder='Tell Us About Your Project'
          value={Message}
          onChange={(e) => setProject(e.target.value)}
        />
        <button
          className='button-hover flex ml-auto items-center px-5 py-2 md:px-10 md:py-3 rounded-full cursor-pointer bg-[#7605C1] md:text-3xl '
          type='submit'
          autoComplete={`no-${Math.random()}`}
        >
          Submit
        </button>
        {error && <p className='text-red-500'>{error}</p>}
      </form>
    </div>
  );
};

export default Contact1;
