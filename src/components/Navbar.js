import React from 'react';
import { useState, useEffect } from 'react';
import LogoWhite from '../assets/logos/logo-white.svg';
import LogoBlack from '../assets/logos/logo-black.svg';

import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <div className={`navbar top-0 left-0 right-0 fixed z-10 ${scroll ? "bg-pink" : ""} ease-in duration-300`}>
      <div className='p-5 lg:px-12 lg:pt-6 max-w-7xl m-auto'>
        <div className='navbar-top flex justify-between items-center md:pb-5 pb-3'>
          <NavLink className="bg-no-repeat bg-center bg-cover	md:h-16 md:w-16 h-10 w-10" to="/" style={{backgroundImage: `url(${scroll ? LogoBlack : LogoWhite})`}}/>
          <div className=''>
            <NavLink to="/asistencia" className={`hover:text-orange font-bold italic text-sm lg:text-base hover:text-base ease-in duration-300  ${scroll ? "text-black" : "text-pink"}`}>Confirma tu asistencia</NavLink>
          </div>
        </div>
        <div className={`flex md:px-2.5 pt-3 justify-between border-t-[1px] ${scroll ? "border-black text-black" : "border-white text-white "}`}>
          <HashLink smooth to="/#storySection" className='hover:text-orange cursor-pointer text-sm/[7px] lg:text-base'>Nuestra historia</HashLink>
          <HashLink smooth to='/#locationSection' className='hover:text-orange cursor-pointer ease-in duration-300 text-sm/[7px] lg:text-base'>Ubicación</HashLink>
          <HashLink smooth to='/#timelineSection' className='hover:text-orange cursor-pointer ease-in duration-300 text-sm/[7px] lg:text-base'>Programa</HashLink>
          <HashLink smooth to='/#toDoSection'  className='hover:text-orange cursor-pointer ease-in duration-300 text-sm/[7px] lg:text-base'>Más Info</HashLink>
          <HashLink smooth to='/#photosSection'  className='hover:text-orange cursor-pointer ease-in duration-300 text-sm/[7px] lg:text-base'>Fotos</HashLink>
        </div>
      </div>
    </div>
    
  );
}

export default Navbar;