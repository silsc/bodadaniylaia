import React from 'react';
import infoTgn1 from '../assets/images/infotgn-1.jpg';
import infoTgn2 from '../assets/images/infotgn-2.jpg';
import infoTgn3 from '../assets/images/infotgn-3.jpg';
import infoTgn4 from '../assets/images/infotgn-4.jpg';
import infoTgn5 from '../assets/images/infotgn-5.jpg';

const TodoSection = () => {
  return (
    <section id="toDoSection" className='max-w-7xl m-auto pb-8 px-5'>
      <div className='md:px-8 px-5'>
        <h2 className='font-sans md:text-8xl text-7xl mb-5'>Información Adicional</h2>
        <div className='mb-5'>
          <h3 className='font-bold mb-3 text-pink text-lg	'>PARKING Y ALOJAMIENTO</h3>
          <p className='text-justify'>Justo enfrente de la Casa Joan Miret, en la Rambla Nova s/n, hay un parking (Aparcament del Balcó del Mediterrani), el cual se puede reservar a un precio de 14€ por día (18€/día sin reserva) llamando al 96 128 06 35.<br></br><br></br>
          Si no os importa caminar un poco más u os pilla más cerca de vuestro alojamiento, los <strong>parkings municipales</strong> tienen una tarifa diaria de 5,95€, aunque no admiten reserva previa. El más cercano al evento es el Parking Corsini (Plaça de Corsini) que está a 450m, unos 7 minutos a pie. Como podría estar lleno, al ser el parking del mercado, nuestra siguiente recomendación sería el Parking Saavedra (C/Josepa Massanès, 4), a 750m o 10min.<br></br><br></br>
          El resto de parkings municipales, por orden de cercanía, son:</p>
          <div className='flex content-center'>
            <svg width="12" height="12" className="self-center mr-2" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_135_479)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3C0 2.20435 0.31607 1.44129 0.87868 0.87868C1.44129 0.31607 2.20435 0 3 0L9 0C9.79565 0 10.5587 0.31607 11.1213 0.87868C11.6839 1.44129 12 2.20435 12 3V9C12 9.79565 11.6839 10.5587 11.1213 11.1213C10.5587 11.6839 9.79565 12 9 12H3C2.20435 12 1.44129 11.6839 0.87868 11.1213C0.31607 10.5587 0 9.79565 0 9L0 3ZM4.46571 2.67171C4.39529 2.6716 4.32554 2.68538 4.26044 2.71225C4.19535 2.73912 4.13619 2.77856 4.08635 2.82832C4.03652 2.87807 3.99698 2.93717 3.97 3.00222C3.94303 3.06727 3.92914 3.13701 3.92914 3.20743V9.23143C3.92914 9.37351 3.98558 9.50977 4.08605 9.61024C4.18652 9.7107 4.32278 9.76714 4.46486 9.76714C4.60694 9.76714 4.7432 9.7107 4.84366 9.61024C4.94413 9.50977 5.00057 9.37351 5.00057 9.23143V7.25657H7.19486C7.43405 7.25657 7.6709 7.20946 7.89189 7.11792C8.11287 7.02639 8.31367 6.89222 8.4828 6.72309C8.65194 6.55395 8.7861 6.35316 8.87764 6.13217C8.96917 5.91119 9.01629 5.67434 9.01629 5.43514V4.49314C9.01629 4.25395 8.96917 4.0171 8.87764 3.79611C8.7861 3.57513 8.65194 3.37433 8.4828 3.2052C8.31367 3.03606 8.11287 2.9019 7.89189 2.81036C7.6709 2.71883 7.43405 2.67171 7.19486 2.67171H4.46571ZM7.19486 6.186H5.00057V3.74314H7.19486C7.60886 3.74314 7.94486 4.07914 7.94486 4.49314V5.436C7.94463 5.63476 7.86551 5.82531 7.72488 5.96578C7.58426 6.10624 7.39362 6.186 7.19486 6.186Z" fill="#E68B7B"/>
              </g>
                <defs>
                <clipPath id="clip0_135_479">
                <rect width="12" height="12" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <p className='self-center'>Parking Avinguda Catalunya</p>
          </div>
          <div className='flex content-center'>
            <svg width="12" height="12" className="self-center mr-2" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_135_479)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3C0 2.20435 0.31607 1.44129 0.87868 0.87868C1.44129 0.31607 2.20435 0 3 0L9 0C9.79565 0 10.5587 0.31607 11.1213 0.87868C11.6839 1.44129 12 2.20435 12 3V9C12 9.79565 11.6839 10.5587 11.1213 11.1213C10.5587 11.6839 9.79565 12 9 12H3C2.20435 12 1.44129 11.6839 0.87868 11.1213C0.31607 10.5587 0 9.79565 0 9L0 3ZM4.46571 2.67171C4.39529 2.6716 4.32554 2.68538 4.26044 2.71225C4.19535 2.73912 4.13619 2.77856 4.08635 2.82832C4.03652 2.87807 3.99698 2.93717 3.97 3.00222C3.94303 3.06727 3.92914 3.13701 3.92914 3.20743V9.23143C3.92914 9.37351 3.98558 9.50977 4.08605 9.61024C4.18652 9.7107 4.32278 9.76714 4.46486 9.76714C4.60694 9.76714 4.7432 9.7107 4.84366 9.61024C4.94413 9.50977 5.00057 9.37351 5.00057 9.23143V7.25657H7.19486C7.43405 7.25657 7.6709 7.20946 7.89189 7.11792C8.11287 7.02639 8.31367 6.89222 8.4828 6.72309C8.65194 6.55395 8.7861 6.35316 8.87764 6.13217C8.96917 5.91119 9.01629 5.67434 9.01629 5.43514V4.49314C9.01629 4.25395 8.96917 4.0171 8.87764 3.79611C8.7861 3.57513 8.65194 3.37433 8.4828 3.2052C8.31367 3.03606 8.11287 2.9019 7.89189 2.81036C7.6709 2.71883 7.43405 2.67171 7.19486 2.67171H4.46571ZM7.19486 6.186H5.00057V3.74314H7.19486C7.60886 3.74314 7.94486 4.07914 7.94486 4.49314V5.436C7.94463 5.63476 7.86551 5.82531 7.72488 5.96578C7.58426 6.10624 7.39362 6.186 7.19486 6.186Z" fill="#E68B7B"/>
              </g>
                <defs>
                <clipPath id="clip0_135_479">
                <rect width="12" height="12" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <p className='self-center'>Parking Imperial Tarraco</p>
          </div>
          <div className='flex content-center'>
            <svg width="12" height="12" className="self-center mr-2" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_135_479)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3C0 2.20435 0.31607 1.44129 0.87868 0.87868C1.44129 0.31607 2.20435 0 3 0L9 0C9.79565 0 10.5587 0.31607 11.1213 0.87868C11.6839 1.44129 12 2.20435 12 3V9C12 9.79565 11.6839 10.5587 11.1213 11.1213C10.5587 11.6839 9.79565 12 9 12H3C2.20435 12 1.44129 11.6839 0.87868 11.1213C0.31607 10.5587 0 9.79565 0 9L0 3ZM4.46571 2.67171C4.39529 2.6716 4.32554 2.68538 4.26044 2.71225C4.19535 2.73912 4.13619 2.77856 4.08635 2.82832C4.03652 2.87807 3.99698 2.93717 3.97 3.00222C3.94303 3.06727 3.92914 3.13701 3.92914 3.20743V9.23143C3.92914 9.37351 3.98558 9.50977 4.08605 9.61024C4.18652 9.7107 4.32278 9.76714 4.46486 9.76714C4.60694 9.76714 4.7432 9.7107 4.84366 9.61024C4.94413 9.50977 5.00057 9.37351 5.00057 9.23143V7.25657H7.19486C7.43405 7.25657 7.6709 7.20946 7.89189 7.11792C8.11287 7.02639 8.31367 6.89222 8.4828 6.72309C8.65194 6.55395 8.7861 6.35316 8.87764 6.13217C8.96917 5.91119 9.01629 5.67434 9.01629 5.43514V4.49314C9.01629 4.25395 8.96917 4.0171 8.87764 3.79611C8.7861 3.57513 8.65194 3.37433 8.4828 3.2052C8.31367 3.03606 8.11287 2.9019 7.89189 2.81036C7.6709 2.71883 7.43405 2.67171 7.19486 2.67171H4.46571ZM7.19486 6.186H5.00057V3.74314H7.19486C7.60886 3.74314 7.94486 4.07914 7.94486 4.49314V5.436C7.94463 5.63476 7.86551 5.82531 7.72488 5.96578C7.58426 6.10624 7.39362 6.186 7.19486 6.186Z" fill="#E68B7B"/>
              </g>
                <defs>
                <clipPath id="clip0_135_479">
                <rect width="12" height="12" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <p className='self-center'>Parking Rambla Companys</p>
          </div>
          <div className='flex content-center'>
            <svg width="12" height="12" className="self-center mr-2" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_135_479)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3C0 2.20435 0.31607 1.44129 0.87868 0.87868C1.44129 0.31607 2.20435 0 3 0L9 0C9.79565 0 10.5587 0.31607 11.1213 0.87868C11.6839 1.44129 12 2.20435 12 3V9C12 9.79565 11.6839 10.5587 11.1213 11.1213C10.5587 11.6839 9.79565 12 9 12H3C2.20435 12 1.44129 11.6839 0.87868 11.1213C0.31607 10.5587 0 9.79565 0 9L0 3ZM4.46571 2.67171C4.39529 2.6716 4.32554 2.68538 4.26044 2.71225C4.19535 2.73912 4.13619 2.77856 4.08635 2.82832C4.03652 2.87807 3.99698 2.93717 3.97 3.00222C3.94303 3.06727 3.92914 3.13701 3.92914 3.20743V9.23143C3.92914 9.37351 3.98558 9.50977 4.08605 9.61024C4.18652 9.7107 4.32278 9.76714 4.46486 9.76714C4.60694 9.76714 4.7432 9.7107 4.84366 9.61024C4.94413 9.50977 5.00057 9.37351 5.00057 9.23143V7.25657H7.19486C7.43405 7.25657 7.6709 7.20946 7.89189 7.11792C8.11287 7.02639 8.31367 6.89222 8.4828 6.72309C8.65194 6.55395 8.7861 6.35316 8.87764 6.13217C8.96917 5.91119 9.01629 5.67434 9.01629 5.43514V4.49314C9.01629 4.25395 8.96917 4.0171 8.87764 3.79611C8.7861 3.57513 8.65194 3.37433 8.4828 3.2052C8.31367 3.03606 8.11287 2.9019 7.89189 2.81036C7.6709 2.71883 7.43405 2.67171 7.19486 2.67171H4.46571ZM7.19486 6.186H5.00057V3.74314H7.19486C7.60886 3.74314 7.94486 4.07914 7.94486 4.49314V5.436C7.94463 5.63476 7.86551 5.82531 7.72488 5.96578C7.58426 6.10624 7.39362 6.186 7.19486 6.186Z" fill="#E68B7B"/>
              </g>
                <defs>
                <clipPath id="clip0_135_479">
                <rect width="12" height="12" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <p className='self-center'>Parking Francesc Bastos</p>
          </div>
          <div className='flex content-center'>
            <svg width="12" height="12" className="self-center mr-2" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_135_479)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3C0 2.20435 0.31607 1.44129 0.87868 0.87868C1.44129 0.31607 2.20435 0 3 0L9 0C9.79565 0 10.5587 0.31607 11.1213 0.87868C11.6839 1.44129 12 2.20435 12 3V9C12 9.79565 11.6839 10.5587 11.1213 11.1213C10.5587 11.6839 9.79565 12 9 12H3C2.20435 12 1.44129 11.6839 0.87868 11.1213C0.31607 10.5587 0 9.79565 0 9L0 3ZM4.46571 2.67171C4.39529 2.6716 4.32554 2.68538 4.26044 2.71225C4.19535 2.73912 4.13619 2.77856 4.08635 2.82832C4.03652 2.87807 3.99698 2.93717 3.97 3.00222C3.94303 3.06727 3.92914 3.13701 3.92914 3.20743V9.23143C3.92914 9.37351 3.98558 9.50977 4.08605 9.61024C4.18652 9.7107 4.32278 9.76714 4.46486 9.76714C4.60694 9.76714 4.7432 9.7107 4.84366 9.61024C4.94413 9.50977 5.00057 9.37351 5.00057 9.23143V7.25657H7.19486C7.43405 7.25657 7.6709 7.20946 7.89189 7.11792C8.11287 7.02639 8.31367 6.89222 8.4828 6.72309C8.65194 6.55395 8.7861 6.35316 8.87764 6.13217C8.96917 5.91119 9.01629 5.67434 9.01629 5.43514V4.49314C9.01629 4.25395 8.96917 4.0171 8.87764 3.79611C8.7861 3.57513 8.65194 3.37433 8.4828 3.2052C8.31367 3.03606 8.11287 2.9019 7.89189 2.81036C7.6709 2.71883 7.43405 2.67171 7.19486 2.67171H4.46571ZM7.19486 6.186H5.00057V3.74314H7.19486C7.60886 3.74314 7.94486 4.07914 7.94486 4.49314V5.436C7.94463 5.63476 7.86551 5.82531 7.72488 5.96578C7.58426 6.10624 7.39362 6.186 7.19486 6.186Z" fill="#E68B7B"/>
              </g>
                <defs>
                <clipPath id="clip0_135_479">
                <rect width="12" height="12" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <p className='self-center'>Parking Joan XXIII</p>
          </div>
          
        </div>
        <div className=''>
          <h3 className='font-bold mb-3 text-pink text-right text-lg'>INFORMACIÓN TARRAGONA</h3>
          <p className='text-right mb-3 '>Algunas ideas para hacer en Tarragona</p>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-4 '>

            <div className='relative md:p-10 p-6 bg-cover bg-no-repeat bg-center bg-[image:var(--image-url)]' style={{'--image-url': `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${infoTgn1})`}}>
              <h4 className='font-serif italic text-white text-lg'>Tocar Ferro</h4>
              <p className='text-white font-bold'>El paseo más típico de Tarragona. Cerca del lugar de la ceremonia en la Rambla, no podéis perderos las espectaculares vistas desde el Balcón del Mediterráneo y aprovechar para atraer a la suerte tocando la barandilla de hierro.</p>
            </div>
            
            <div className='relative md:p-10 p-6 bg-cover bg-no-repeat bg-center bg-[image:var(--image-url)]' style={{'--image-url': `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${infoTgn2})`}}>
              <h4 className='font-serif italic text-white text-lg'>Santa Tecla gloriosa, mare dels tarragonins</h4>
              <p className='text-white'>La boda será el primer finde de las fiestas patronales y la ciudad estará animada. Aprovechad para ver Castells, probar la Mamadeta y bailar el Amparito Roca.<br></br>En cuanto esté disponible, subiremos el programa de las fiestas</p>
            </div>

            <div className='relative md:p-10 p-6 bg-cover bg-no-repeat bg-center bg-[image:var(--image-url)]' style={{'--image-url': `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${infoTgn3})`}}>
              <h4 className='font-serif italic text-white text-lg'>Viure la Part Alta</h4>
              <p className='text-white'>Visitar el casco antiguo: vermutear en una de sus plazas (Font, Rei, Forum), visitar la Catedral, bajar el Carrer Major, etc</p>
            </div>

            <div className='relative md:p-10 p-6 bg-cover bg-no-repeat bg-center bg-[image:var(--image-url)]' style={{'--image-url': `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${infoTgn4})`}}>
              <h4 className='font-serif italic text-white text-lg'>Tarraco Romana</h4>
              <p className='text-white'>Capital de Hispania, en Tarragona hay muchos monumentos que la historia nos ha dejado. El circo romano, el anfiteatro y las murallas son nuestros preferidos.</p>
            </div>

            <div className='relative md:p-10 p-6 bg-cover bg-no-repeat bg-center bg-[image:var(--image-url)]' style={{'--image-url': `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${infoTgn5})`}}>
              <h4 className='font-serif italic text-white text-lg'>Costa Daurada</h4>
              <p className='text-white'>Para los que tengáis más días y mono de mar, os aconsejamos disfrutar del Mediterráneo y sus playas de arena fina y dorada. Recomendamos La Arrabassada, La Savinosa y la Platja Llarga.</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default TodoSection;