import React from 'react';
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



function App() {

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
