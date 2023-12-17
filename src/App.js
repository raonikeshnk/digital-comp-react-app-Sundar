import React, { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Index from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Courses from './components/Courses';
import Gallery from './components/Gallery';
import News from './components/News';
import Staff from './components/Staff';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/user/Profile';
import { Contextapi } from './components/admin/Contextapi';
import Admindash from './components/admin/Admindash';
import Team from './components/admin/Team';
import Addteamform from './components/admin/Addteamform';
import TeamUpdate from './components/admin/TeamUpdate';
import GalleryMngt from './components/admin/GalleryMngt';

function App() {
  const [loginname, setLoginname] = useState(localStorage.getItem('loginname'))
  return (
    <Router>
      <Contextapi.Provider value={{ loginname, setLoginname }}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/staff" element={<Staff />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/dashboard' element={<Admindash />} />
          <Route path='/team' element={<Team />} />
          <Route path='/addteam' element={<Addteamform />} />
          <Route path="/teamupdate/:id"  element={<TeamUpdate />} />
          <Route path="/gallerymngt"  element={<GalleryMngt/>} />




          
          











        </Routes>
      </Contextapi.Provider>
    </Router>
  );
}

export default App;
