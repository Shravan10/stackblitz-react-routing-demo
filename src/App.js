import React from 'react';
import './style.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/service" element={<Service />}></Route>
          <Route exact path="/gallery" element={<Gallery />}></Route>

          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
