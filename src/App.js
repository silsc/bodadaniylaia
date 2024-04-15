import './App.css';
import { useEffect } from 'react';
import HomePage from './views/HomePage';
import { Route, Routes, useLocation } from 'react-router-dom';
import AttendancePage from './views/AttendancePage';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar'
import ScrollToTop from './ScrollToTop';

function App() {
  const location = useLocation();
  const authenticate = () => new Promise((resolve) => setTimeout(resolve, 1000)) ;
  
  useEffect(() => {
    authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator');
      if (ele) {
        // fade out
        ele.classList.add('available');
        setTimeout(() => {
          // remove from DOM
          ele.remove();
        }, 4000);
      }
    })
  }, [])

  return (
    <>
      <Navbar></Navbar>
      <AnimatePresence mode='wait'>
        <ScrollToTop></ScrollToTop>
        <Routes location={location} key={location.pathname}>
            <Route index element={<HomePage/>}/>
            <Route exact path="/asistencia" element={<AttendancePage/>}/>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
