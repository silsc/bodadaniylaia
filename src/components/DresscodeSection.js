import React from 'react';
import heroImg from '../assets/images/hero.jpg'

const DresscodeSection = () => {
  return (
    <section id="dresscodeSection" className='max-w-7xl m-auto px-5'>
      <div className='border-y-[1px] md:px-8 py-8'>
      <h2 className='font-sans text-right md:text-6xl text-5xl pb-4 mr-5'>Dresscode</h2>
        <div className='flex md:pt-8 pt-0 md:mr-5 mr-0'>
          
          <div className='md:basis-5/12 basis-1/3 md:mr-10 mr-5 bg-[image:var(--image-url)] bg-cover bg-no-repeat bg-center w-100 ' style={{'--image-url': `url(${heroImg})`}}></div>
  

          <p className='md:basis-7/12 basis-2/3 md:pr-1.5 font-serif pb-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis interdum erat. Ut dui felis, molestie eget ullamcorper quis, auctor vel turpis. Praesent in urna sem. Sed ullamcorper, neque sed aliquet congue, orci odio sollicitudin enim, at dapibus ligula eros ac leo. Sed id mauris est. Donec sollicitudin lacinia tortor. Aliquam volutpat tincidunt orci. Nullam nibh sem, pharetra eu tincidunt sed, dignissim in tortor.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DresscodeSection;