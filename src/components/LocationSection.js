import React from 'react';

const LocationSection = () => {
  return (
    <section id="locationSection" className='max-w-7xl m-auto px-5'>
      
      <div className='border-y-[1px] py-8 '>
        <div className='md:px-8'>
          
          <h2 className='font-sans md:text-8xl text-7xl pb-3'>Ubicación</h2>
          <div className='md:flex block justify-between'>
            <div className='basis-6/12 md:pr-5'>
              <div className=''>
                <div className='flex'>
                  <svg className="mr-1" width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 8.58332C5.44747 8.58332 4.91757 8.36383 4.52687 7.97313C4.13617 7.58243 3.91667 7.05252 3.91667 6.49999C3.91667 5.94746 4.13617 5.41755 4.52687 5.02685C4.91757 4.63615 5.44747 4.41666 6 4.41666C6.55254 4.41666 7.08244 4.63615 7.47314 5.02685C7.86384 5.41755 8.08334 5.94746 8.08334 6.49999C8.08334 6.77358 8.02945 7.04449 7.92475 7.29725C7.82006 7.55001 7.6666 7.77967 7.47314 7.97313C7.27969 8.16658 7.05002 8.32004 6.79726 8.42474C6.5445 8.52944 6.27359 8.58332 6 8.58332ZM6 0.666656C4.45291 0.666656 2.96918 1.28124 1.87522 2.3752C0.781253 3.46916 0.166672 4.95289 0.166672 6.49999C0.166672 10.875 6 17.3333 6 17.3333C6 17.3333 11.8333 10.875 11.8333 6.49999C11.8333 4.95289 11.2188 3.46916 10.1248 2.3752C9.03083 1.28124 7.5471 0.666656 6 0.666656Z" fill="#F6D1C9"/>
                  </svg>
                  <h3 className='pb-2'>14 de Septiembre - 18:00h</h3>
                </div>
                <div className='flex'>
                  <svg className="mr-1" width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 8.58332C5.44747 8.58332 4.91757 8.36383 4.52687 7.97313C4.13617 7.58243 3.91667 7.05252 3.91667 6.49999C3.91667 5.94746 4.13617 5.41755 4.52687 5.02685C4.91757 4.63615 5.44747 4.41666 6 4.41666C6.55254 4.41666 7.08244 4.63615 7.47314 5.02685C7.86384 5.41755 8.08334 5.94746 8.08334 6.49999C8.08334 6.77358 8.02945 7.04449 7.92475 7.29725C7.82006 7.55001 7.6666 7.77967 7.47314 7.97313C7.27969 8.16658 7.05002 8.32004 6.79726 8.42474C6.5445 8.52944 6.27359 8.58332 6 8.58332ZM6 0.666656C4.45291 0.666656 2.96918 1.28124 1.87522 2.3752C0.781253 3.46916 0.166672 4.95289 0.166672 6.49999C0.166672 10.875 6 17.3333 6 17.3333C6 17.3333 11.8333 10.875 11.8333 6.49999C11.8333 4.95289 11.2188 3.46916 10.1248 2.3752C9.03083 1.28124 7.5471 0.666656 6 0.666656Z" fill="#F6D1C9"/>
                  </svg>
                  <h3 className='pb-2'>Casa Joan Miret Rambla Nova, 36 - Tarragona </h3>
                </div>

                <p className='pt-2 pb-3 text-justify'>Os invitamos a celebrar nuestra unión en el centro de Tarragona. La Casa Joan Miret, construida en 1859, es un espacio exclusivo con un encanto particular ubicado en el corazón de la Rambla.<br></br><br></br>La celebración pasará por diferentes ubicaciones de la casa, tanto exteriores como interiores. </p>
              </div>
            </div>
            <iframe title="locationMap" className="w-full  basis-6/12 " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.9160226979043!2d1.251715676416107!3d41.11452507133574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a3fcd4956a4561%3A0x22b0550b6518a121!2sCasa%20Joan%20Miret!5e0!3m2!1ses!2ses!4v1712590329193!5m2!1ses!2ses"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        </div>
    </section>
  );
}

export default LocationSection;