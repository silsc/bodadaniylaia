import React from 'react';
// import heroImg from '../assets/images/hero.jpg'
// import heroImg1 from '../assets/images/hero1.jpg'
// import heroImg2 from '../assets/images/hero2.jpg'
// import heroImg3 from '../assets/images/hero3.jpg'
// import heroImg4 from '../assets/images/hero4.jpg'
import heroLogo from '../assets/images/logoHero.png'

const Hero = () => {
  return (
    <section className='relative h-96 md:h-screen bg-cover bg-no-repeat bg-center bg-[image:var(--image-url)]' 
    style={{'--image-url': `url(${heroImg4})`}}>
      <div className=' md:pt-0 pt-10 absolute top-0 left-0 right-0 bottom-0 backdrop-brightness-50 justify-center align-middle flex flex-col'>
        <img
        src={heroLogo}
        className="h-auto w-1/2 lg:w-96 justify-self-center mx-auto"
        alt="" />
        
        {/* <h1 className='text-center text-7xl lg:text-9xl font-sans text-white'>Dani y Laia</h1> */}
        {/* <h1 className='text-center text-7xl lg:text-7xl font-serif text-white'>Dani <span className='font-sans lg:text-9xl'>&</span> Laia</h1> */}
        <p className='text-center pt-4 text-base italic text-pink'>14 Septiembre 2024</p>
      </div>
    </section>
  );
}

export default Hero;