import React from 'react';

const AttendanceSection = () => {
  return (
    <section className='max-w-7xl m-auto px-5 py-8'>
      <div className='border-y-[1px] mt-5 pt-8 pb-12 h-52'>
        <div className='relative basis-1/4 sm:pl-0 pl-2 sm:w-96 w-auto m-auto'>
          <h2 className='font-sans absolute top-0 text-7xl '>Confirma</h2>
          <h2 className='font-sans absolute top-10 right-2/4	text-7xl'>tu</h2>
          <h2 className='font-sans absolute top-16 right-0 text-7xl'>asistencia</h2>
        </div>
      </div>
      <div className='mt-3 mb-5'>
        <h3 className='text-center sm:text-6xl text-5xl font-sans mb-2'>Nuestro número de cuenta</h3>
        <p className='text-center italic'>IBAN XXXXXXXXXXXXXX</p>
      </div>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSevtross5JByqxLTtFysS0tmXQr1gl1LkQX1S4jJHJ61g0rBA/viewform?embedded=true" width="100%" height="1099" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

    </section>
  );
}

export default AttendanceSection;