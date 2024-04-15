import React from 'react';

import timelineImg from '../assets/images/timeline.png'

const TimelineSection = () => {
  return (
    <section id="timelineSection" className=' max-w-7xl m-auto px-5 py-8 '>
      <div className='grid flex-col border-b-[1px] md:px-8 pb-10'>

        <h2 className='font-sans text-right md:text-8xl text-6xl pb-3'>Programa</h2>
        <img
        src={timelineImg}
        className="h-auto md:w-1/2  w-11/12 justify-self-center"
        alt="" />
      </div>

    </section>
  );
}

export default TimelineSection;