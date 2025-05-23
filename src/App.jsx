import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';  
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      {/* Global layout */}
      <div className="container mx-auto px-10 h-screen relative">
        <Header />
        
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
