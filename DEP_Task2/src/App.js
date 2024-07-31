import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';

import About from './components/About';

import './App.css';
import './components/navbar.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <Link className="navbar-logo" to="/">ѕωєєт ωнιѕк α∂νєηтυяєѕ</Link>
          <div className="navbar-links">
            <Link className="navbar-link" to="/">му вℓσgѕ</Link>
         
            <Link className="navbar-link" to="/about">αвσυт </Link>
           
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
    
          <Route path="/about" element={<About />} />
    
        </Routes>
      </div>
    </Router>
  );
}

export default App;
