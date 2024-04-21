import React from 'react';

import Logo from '../assets/logos/logo-black.svg';

const Footer = () => {
  return (
    <div className='bg-pink'>
      <div className='grid p-5 lg:px-12 lg:pt-6 max-w-7xl m-auto'>
        <div className="self-center justify-self-center bg-no-repeat bg-center bg-cover	h-20 w-20 " to="/" style={{backgroundImage: `url(${Logo})`}}></div>
      </div>
    </div>
  );
}

export default Footer;