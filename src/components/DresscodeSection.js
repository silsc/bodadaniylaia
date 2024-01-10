import React from 'react';
import heroImg from '../assets/images/hero.jpg'

const DresscodeSection = () => {
  return (
    <section id="dresscodeSection" className='max-w-7xl m-auto px-5'>
      <div className='border-y-[1px] sm:px-8 py-8'>
      <h2 className='font-sans text-right sm:text-8xl text-6xl pb-4 mr-5'>Dresscode</h2>
        <div className='flex sm:pt-8 pt-0 sm:mr-5 mr-0'>
          
          <div className='sm:basis-5/12 basis-1/3 sm:mr-10 mr-5 bg-[image:var(--image-url)] bg-cover bg-no-repeat bg-center w-100 ' style={{'--image-url': `url(${heroImg})`}}></div>
  

          <p className='sm:basis-7/12 basis-2/3 sm:pr-1.5 font-serif pb-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis interdum erat. Ut dui felis, molestie eget ullamcorper quis, auctor vel turpis. Praesent in urna sem. Sed ullamcorper, neque sed aliquet congue, orci odio sollicitudin enim, at dapibus ligula eros ac leo. Sed id mauris est. Donec sollicitudin lacinia tortor. Aliquam volutpat tincidunt orci. Nullam nibh sem, pharetra eu tincidunt sed, dignissim in tortor.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DresscodeSection;