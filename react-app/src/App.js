import {useState} from 'react';
import {Routes, Route} from 'react-router-dom'


// Component Imports
import Footer from './components/Footer';

// Page imports
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <main>
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
