import React from 'react';

const ContactSection = () => {
  return (
    <section id="contactSection" className='max-w-7xl m-auto px-5 sm:px-8 pt-8 sm:pb-20 pb-8'>
      <h2 className='font-sans text-right sm:text-8xl text-5xl sm:pb-8 mb-6'>Contacto wedding planner</h2>
      <p className='text-center px-4'>Para cualquier sorpresa que quieras organizar a los novios, no dudes en ponerte en contacto con la organizadora de la boda</p>
      <div className='flex justify-center mt-4'>
        <svg className="self-center mr-3" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 40 40" fill="none">
          <path d="M26.6667 16.6667C26.6667 18.4348 25.9643 20.1305 24.714 21.3807C23.4638 22.631 21.7681 23.3333 20 23.3333C18.2319 23.3333 16.5362 22.631 15.286 21.3807C14.0357 20.1305 13.3333 18.4348 13.3333 16.6667C13.3333 14.8986 14.0357 13.2029 15.286 11.9526C16.5362 10.7024 18.2319 10 20 10C21.7681 10 23.4638 10.7024 24.714 11.9526C25.9643 13.2029 26.6667 14.8986 26.6667 16.6667Z" fill="#F6D1C9"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.32 36.6534C10.4308 36.2967 3.33334 28.9767 3.33334 20C3.33334 10.795 10.795 3.33337 20 3.33337C29.205 3.33337 36.6667 10.795 36.6667 20C36.6667 29.205 29.205 36.6667 20 36.6667C19.9239 36.6672 19.8478 36.6672 19.7717 36.6667C19.6208 36.6667 19.47 36.6617 19.32 36.6534ZM9.305 30.5167C9.18039 30.1588 9.13797 29.7775 9.1809 29.401C9.22383 29.0245 9.35101 28.6625 9.55298 28.3419C9.75496 28.0213 10.0266 27.7503 10.3476 27.549C10.6687 27.3477 11.0309 27.2213 11.4075 27.1792C17.9042 26.46 22.1358 26.525 28.6008 27.1942C28.9779 27.2335 29.3411 27.3583 29.6626 27.5591C29.9842 27.7599 30.2557 28.0315 30.4565 28.3531C30.6572 28.6747 30.7819 29.0379 30.8211 29.415C30.8603 29.7921 30.8129 30.1732 30.6825 30.5292C33.4533 27.7258 35.005 23.9417 35 20C35 11.7159 28.2842 5.00004 20 5.00004C11.7158 5.00004 5 11.7159 5 20C5 24.0967 6.6425 27.81 9.305 30.5167Z" fill="#F6D1C9"/>
        </svg>
        <div className='self-center flex flex-col'>
          <p>Nombre: </p>
          <p>Teléfono: </p>
          <p>Email: </p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;