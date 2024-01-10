import React from 'react';

const TimelineSection = () => {
  return (
    <section id="timelineSection" className='max-w-7xl m-auto px-5 py-8'>
        <h2 className='font-sans text-center sm:text-9xl text-7xl pb-3'>Timeline</h2>
        <div className='grid'>
          <div className='flex justify-center pb-3'>
            <h3 className='justify-self-center self-center font-serif text-4xl italic'>16.30</h3>
            <hr className='justify-self-center basis-1/12 self-center mx-5' style={{height: "0", width: "50%", borderWidth: "1px"}}></hr>
            <p className='justify-self-center self-center sm:basis-4/12 basis-7/12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className='flex justify-center pb-3'>
            <h3 className='justify-self-center self-center font-serif text-4xl italic'>16.30</h3>
            <hr className='justify-self-center basis-1/12 self-center mx-5' style={{height: "0", width: "50%", borderWidth: "1px"}}></hr>
            <p className='justify-self-center self-center sm:basis-4/12 basis-7/12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className='flex justify-center'>
            <h3 className='justify-self-center self-center font-serif text-4xl italic'>16.30</h3>
            <hr className='justify-self-center basis-1/12 self-center mx-5' style={{height: "0", width: "50%", borderWidth: "1px"}}></hr>
            <p className='justify-self-center self-center sm:basis-4/12 basis-7/12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

        </div>
    </section>
  );
}

export default TimelineSection;