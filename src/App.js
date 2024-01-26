
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Services from './pages/Services';
import About from './pages/About';
import News from './pages/News';
import Contact from './pages/Contact';


function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 2000,
      }
    );
  }, [])
  return (
    <div>
      <Routes>
        <Route path='/' element={<Services/>} />
        <Route path='/About' element={<About />} />
        <Route path='/News' element={<News />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
