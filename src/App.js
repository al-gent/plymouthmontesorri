// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './pages/welcome';
import MontessoriTheory from './pages/montessoriTheory.js';
import Locations from './pages/locations';
import Tuition from './pages/tuition';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/montessori-theory" element={<MontessoriTheory />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/tuition" element={<Tuition />} />
      </Routes>
    </Router>
  );
};

export default App;

