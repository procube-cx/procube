import React from 'react';
import Hero from './pages/Hero';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';



function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
