import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-center px-6 pt-10">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
