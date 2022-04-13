import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Like from './Like';
import Navbar from './Navbar';

const  App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/like' element={<Like/>}>Like Page</Route>
      </Routes>
    </div>
  )
};

export default App;
