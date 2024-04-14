import React from 'react';

const PhotosSection = () => {
  return (
    <section id="photosSection" className='max-w-7xl m-auto md:px-8 px-5'>
      <div className='border-y-[1px] md:px-8 pt-8 md:pb-20 pb-8'>
        <h2 className='font-sans text-right md:text-8xl text-7xl md:pb-8 pb-5'>Álbum de fotos</h2>
        <div className='flex justify-center content-center md:ml-3 md:mr-10 md:px-10 px-3'>
          <p className='md:mr-7 mr-5 self-center'>Ayúdanos a crear nuestro albúm de fotos.<br></br> Sube las fotos que has sacado durante la boda haciéndo click en la carpeta.</p>
          <a target='_blank' className="md:basis-auto basis-2/3 cursor-pointer self-center" rel='noopener noreferrer' href="https://mega.nz/filerequest/e7TxBsKJBJM">
            <svg  xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 60 60" fill="none">
              <path d="M57.5391 38.2031V10.798C57.5391 9.26027 56.2803 7.96875 54.7426 7.96875H39.9762C38.8879 7.96875 37.8993 8.62535 37.4454 9.61453L35.9561 12.8844C35.5022 13.8736 34.5136 14.5313 33.4253 14.5313H7.91461C6.37688 14.5313 5.15625 15.753 5.15625 17.2909V42.6459C5.15625 44.1837 6.37688 45.4688 7.91461 45.4688H54.7426C54.8162 45.4688 54.8889 45.4266 54.9609 45.4209V50.7422H55.001C55.001 51.4453 55.5725 51.9886 56.27 51.9886C56.9675 51.9886 57.5391 51.4065 57.5391 50.709V38.2031Z" fill="#EC998B"/>
              <path d="M56.27 51.9886C55.5725 51.9886 55.001 51.4453 55.001 50.7422H54.9609V24.6306C54.9609 23.0927 53.7493 21.7969 52.2116 21.7969H5.38359C3.84586 21.7969 2.57812 23.0927 2.57812 24.6306V52.6605C2.57812 54.1983 3.84586 55.4297 5.38359 55.4297H52.2116C52.3739 55.4297 52.5328 55.4227 52.6875 55.3959C52.8796 55.4225 53.0754 55.4411 53.2748 55.4411C55.6233 55.4411 57.5095 53.5392 57.5095 51.1908C57.5095 51.1282 57.5053 51.0668 57.5027 51.0049C57.3683 51.5634 56.8658 51.9886 56.27 51.9886Z" fill="#F6D1C9"/>
            </svg>
          </a>

        </div>
      </div>
    </section>
  );
}

export default PhotosSection;