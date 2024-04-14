import React from 'react';
import heroImg from '../assets/images/hero.jpg'


const StorySection = () => {
  return (
    <section id="storySection" className='max-w-7xl m-auto px-5'>
      <div className='md:px-8'>
        <h2 className='text-right font-sans md:text-8xl text-7xl pt-8 pb-3'>Nuestra historia</h2>
        <div className='pb-8'>
          <div className='flex-col'>

            <p className='font-serif text-justify pb-3'>
            El año 2010, un 19 de septiembre, nos conocimos en la estación de tren de Tarragona, esperando para ir a Barcelona, a la residencia de estudiantes en la que los dos nos alojaríamos ese año. Tardó unos 6 meses en surgir la llama del amor y, en primavera de 2011, empezó esta historia. <br></br><br></br>
            La época universitaria fue de muchas ideas y venidas, con cambios de piso, ciudad e incluso carrera. Durante los veranos separados y durante el curso aprendiendo lo bonito y lo difícil del amor.<br></br><br></br>
            Después de un tiempo por caminos separados, en marzo de 2017 nos volvimos a encontrar, construyendo una relación más madura pero aventurera, que nos llevó a sitios como Roma, Mallorca, Dublín, Milán y muchos más, disfrutando del tiempo juntos, decidimos dar el siguiente paso: crear nuestro primer hogar.<br></br><br></br>
            En junio de 2019 cerramos nuestro primer contrato de alquiler!!! No sabíamos qué nos depararía la convivencia pero, después de tantos años juntos, estábamos seguros de que todo saldría bien. Poco después, nos fuimos de viaje a Nueva York, nuestro viaje más lejano hasta el momento y del que casi no volvemos porque estalló una pandemia mundial que nos pilló al otro lado del charco.<br></br> <br></br>
            Durante el covid, nos dedicamos a apostar por nuestros proyectos profesionales. Laia estudiaba 24h para aprobar el examen PIR y Dani intentaba hacerse un hueco en el mundo de la música. Laia estudiaba 24h menos los ratos de ir a hacer la compra porque no dejaba bajar a Dani por miedo a que se peleara con alguien. Una época de mucho esfuerzo y sacrificio y clases de gimnasia en Youtube después de la cual siempre caía una pizzita. <br></br><br></br>
            Una vez los proyectos laborales quedaron medio encaminados, seguimos afianzando nuestra relación y conociendo mundo, viaje tras viaje hasta que un día aterrizamos en París. Tras un paseo por el Sena, en un muelle entre ratas parisinas, Dani pidió matrimonio a Laia. Ella dijo que sí, las ratas dijeron oh la là, y nos fuimos a cenar.<br></br><br></br>
            Y casi un año después, toca bodorrio.
            <br></br><br></br>

            
            </p>
            <div className='h-44 bg-[image:var(--image-url)] bg-cover bg-no-repeat bg-center w-100 ' style={{'--image-url': `url(${heroImg})`}}></div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default StorySection;