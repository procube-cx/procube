import React, { useEffect , useState } from 'react';
import Hero from './pages/Hero';
import About from './pages/About';
import Portfolio from './pages/Porfolio';
import Insight from './pages/Insight';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Career from './pages/Career';
import InsightSlug from './pages/Insight-slug';
import Partner from './pages/Partner';
import Casestudy from './pages/Casestudy';
import Projects from './pages/Projects';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';



function App() {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.from('.heading', { opacity: 0, y: 100, duration: 1, delay: 0.5, ease: 'power3.out' })
  //   const Heading = gsap.utils.toArray('.heading');
  //   Heading.forEach(heading => {
  //   gsap.to(heading, {
  //     scrollTrigger: {
  //       trigger: heading,
  //       start: 'top 90%',
  //       end: 'top 90%',
  //       markers: false,
  //     },
  //     y: 0,
  //     opacity: 1,
  //     duration: 1,
  //     ease: 'power3.out',
  //   });
  // });
  // }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/insight' element={<Insight />} />
          <Route path='/insight/:id' element={<InsightSlug />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/careers' element={<Career />} />
          <Route path='/partners' element={<Partner />} />
          <Route path='/casestudy' element={<Casestudy />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
