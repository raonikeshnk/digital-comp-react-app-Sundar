import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'; 

import Index from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Courses from './components/Courses';
import Gallery from './components/Gallery';
import News from './components/News';
import Staff from './components/Staff';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/staff" element={<Staff />} />

      </Routes>
    </Router>
  );
}

export default App;
