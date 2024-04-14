import React from 'react';
import { useState, useEffect } from 'react';

const DateSection = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "September, 14, 2024, 18:00:00 ";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <section className='max-w-7xl m-auto px-5'>
      <div className='flex md:justify-center justify-between border-y-[1px] mt-5 pt-8 pb-12'>
        <div className='relative basis-1/4 md:pl-0 pl-2'>
          <h2 className='font-sans absolute top-0 text-5xl '>Reserva</h2>
          <h2 className='font-sans absolute top-8 left-5 text-5xl'>la</h2>
          <h2 className='font-sans absolute top-16 left-8 text-5xl'>fecha</h2>
        </div>
        <div className='md:pr-0 pr-2'>
          <div className='timer flex basis-1/2 italic mt-5 mb-5 pt-8 md:text-base text-xs'>
            <div className='flex mr-2'>
              <p className='mr-1'>{days}</p>
              <p>días</p>
            </div>
            <div className='flex mr-2'>
              <p className='mr-1'>{hours}</p>
              <p>horas</p>
            </div>
            <div className='flex mr-2'>
              <p className='mr-1'>{minutes}</p>
              <p>min</p>
            </div>
            <div className='flex'>
              <p className='mr-1'>{seconds}</p>
              <p>seg</p>
            </div>

          </div>
          <p className='text-right text-xs'>14 septiembre 2024</p>
          <p className='text-right text-xs'> Hora de apertura 18:00h</p>

        </div>
      </div>
    </section>
  );
}

export default DateSection;