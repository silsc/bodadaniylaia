import React from 'react';
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import DateSection from '../components/DateSection'
import StorySection from '../components/StorySection'
import LocationSection from '../components/LocationSection'
import TimelineSection from '../components/TimelineSection'
import DresscodeSection from '../components/DresscodeSection'
import TodoSection from '../components/TodoSection'
import PhotosSection from '../components/PhotosSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'


const HomePage = () => {
  return (
    <div className='relative'>
      <Navbar/>
      <Hero/>
      <DateSection/>
      <StorySection/>
      <LocationSection/>
      <TimelineSection/>
      <DresscodeSection/>
      <TodoSection/>
      <PhotosSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default HomePage;