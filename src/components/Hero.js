import React from 'react';
import heroImg from '../assets/images/hero.jpg'

const Hero = () => {
  return (
    <section className='relative h-96 md:h-screen bg-cover bg-no-repeat bg-center bg-[image:var(--image-url)]' 
    style={{'--image-url': `url(${heroImg})`}}>
      <div className=' md:pt-0 pt-10 absolute top-0 left-0 right-0 bottom-0 backdrop-brightness-50 justify-center align-middle flex flex-col'>
        
        <h1 className='text-center text-7xl lg:text-9xl font-sans text-white'>Dani y Laia</h1>
        
        <p className='text-center pt-4 text-base italic text-pink'>14 Septiembre 2024</p>
      </div>
    </section>
  );
}

export default Hero;