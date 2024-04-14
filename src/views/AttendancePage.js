import React from 'react';
import Hero from'../components/Hero'
import AttendanceSection from'../components/AttendanceSection'
import Footer from '../components/Footer'
import transition from '../transition';

const AttendancePage = () => {
  return (
    <> 
      <Hero/>
      <AttendanceSection/>
      <Footer/>
    </>
  );
}

export default transition(AttendancePage);