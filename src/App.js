import React from 'react';
import Hero from './pages/Hero';
import About from './pages/About';
import Portfolio from './pages/Porfolio';
import Insight from './pages/Insight';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';



function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/insight' element={<Insight />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
