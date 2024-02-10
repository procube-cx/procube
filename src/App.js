import React from 'react';
import Hero from './pages/Hero';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';



function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
