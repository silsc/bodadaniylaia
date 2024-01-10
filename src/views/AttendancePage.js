import React from 'react';
import Navbar from'../components/Navbar'
import Hero from'../components/Hero'
import AttendanceSection from'../components/AttendanceSection'
import Footer from '../components/Footer'

const AttendancePage = () => {
  return (
    <> 
      <Navbar/>
      <Hero/>
      <AttendanceSection/>
      <Footer/>
    </>
  );
}

export default AttendancePage;