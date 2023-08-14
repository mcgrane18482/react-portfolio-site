import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'


// Component Imports
import Header from './components/Header';
import Footer from './components/Footer';
// import Projects from './components/Portfolio/allProjects'

// Page imports
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';


function App() {
  return (
    <main>
      <Header />
      <div className="page-content">
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </main>
  );
}

export default App;
