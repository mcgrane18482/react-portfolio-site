import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'


// Component Imports
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Portfolio/allProjects'

// Page imports
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <main>
      <Header />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>


      <Footer />
    </main>
  );
}

export default App;
