import React from 'react';

const LocationSection = () => {
  return (
    <section id="locationSection" className='max-w-7xl m-auto px-5'>
      
      <div className='flex justify-between border-y-[1px] py-8'>
        <div className='basis-6/12 pl-1.5 pr-5'>
          <h2 className='font-sans sm:text-7xl text-5xl pb-3'>Ubicación</h2>
          <div className=''>
            <div className='flex'>
              <svg className="mr-1" width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 8.58332C5.44747 8.58332 4.91757 8.36383 4.52687 7.97313C4.13617 7.58243 3.91667 7.05252 3.91667 6.49999C3.91667 5.94746 4.13617 5.41755 4.52687 5.02685C4.91757 4.63615 5.44747 4.41666 6 4.41666C6.55254 4.41666 7.08244 4.63615 7.47314 5.02685C7.86384 5.41755 8.08334 5.94746 8.08334 6.49999C8.08334 6.77358 8.02945 7.04449 7.92475 7.29725C7.82006 7.55001 7.6666 7.77967 7.47314 7.97313C7.27969 8.16658 7.05002 8.32004 6.79726 8.42474C6.5445 8.52944 6.27359 8.58332 6 8.58332ZM6 0.666656C4.45291 0.666656 2.96918 1.28124 1.87522 2.3752C0.781253 3.46916 0.166672 4.95289 0.166672 6.49999C0.166672 10.875 6 17.3333 6 17.3333C6 17.3333 11.8333 10.875 11.8333 6.49999C11.8333 4.95289 11.2188 3.46916 10.1248 2.3752C9.03083 1.28124 7.5471 0.666656 6 0.666656Z" fill="#F6D1C9"/>
              </svg>
              <h3 className='pb-2'>..., Tarragona</h3>
            </div>

            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis interdum erat. Ut dui felis, molestie eget ullamcorper quis, auctor vel turpis. Praesent in urna sem. Sed ullamcorper, neque sed aliquet congue, orci odio sollicitudin enim, at dapibus ligula eros ac leo. Sed id mauris est. Donec sollicitudin lacinia tortor. Aliquam volutpat tincidunt orci. Nullam nibh sem, pharetra eu tincidunt sed, dignissim in tortor.</p>
          </div>
        </div>
        <iframe title="locationMap" className="sm:w-full w-32 basis-6/12 " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48086.39684067673!2d1.1973839706532439!3d41.12579746132925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a3fcdbd3ddf159%3A0x920569a71387a3b2!2sTarragona%2C%20Espa%C3%B1a!5e0!3m2!1ses!2sjp!4v1704758596757!5m2!1ses!2sjp" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  );
}

export default LocationSection;