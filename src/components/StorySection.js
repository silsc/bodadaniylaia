import React from 'react';
import heroImg from '../assets/images/hero.jpg'


const StorySection = () => {
  return (
    <section id="storySection" className='max-w-7xl m-auto px-5'>
      <div className='flex py-8'>
        <div className='flex flex-col basis-5/12 pr-5 content-between'>
          <div className='bg-[image:var(--image-url)] sm:basis-4/12 basis-5/12 bg-cover bg-no-repeat bg-center w-100 mb-5' 
          style={{'--image-url': `url(${heroImg})`}}></div>
          <div className='bg-[image:var(--image-url)] sm:basis-3/12 basis-2/12 bg-cover bg-no-repeat bg-center w-100 mb-5' 
          style={{'--image-url': `url(${heroImg})`}}></div>
          <div className='bg-[image:var(--image-url)] sm:basis-4/12 basis-5/12 bg-cover bg-no-repeat bg-center w-100' 
          style={{'--image-url': `url(${heroImg})`}}></div>
        </div>
        <div className='basis-7/12 pr-1.5'>
          <h2 className='text-right font-sans sm:text-5xl text-4xl pb-3'>Nuestra historia</h2>
          <h3 className='font-serif text-xs text-gray italic pb-3'>20/08/2008</h3>
          <p className='font-serif pb-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis interdum erat. Ut dui felis, molestie eget ullamcorper quis, auctor vel turpis. Praesent in urna sem. Sed ullamcorper, neque sed aliquet congue, orci odio sollicitudin enim, at dapibus ligula eros ac leo. Sed id mauris est. Donec sollicitudin lacinia tortor. Aliquam volutpat tincidunt orci. Nullam nibh sem, pharetra eu tincidunt sed, dignissim in tortor.<br></br>

          Nunc consequat bibendum dolor, et rhoncus dolor mollis vel. Fusce ultrices sem vitae odio dignissim, sed convallis risus cursus. Proin blandit enim diam. Praesent sed risus lacus. Phasellus mattis porttitor velit a faucibus. Vivamus sed mattis urna. Nam sollicitudin purus nec tristique mattis. Fusce a dolor blandit justo laoreet pretium.
          </p>
        </div>
      </div>
    </section>
  );
}

export default StorySection;