import {useState} from 'react';

const AttendanceSection = () => {
  const [copySuccess, setCopySuccess] = useState('');

  function copyToClipboard(e) {
    navigator.clipboard.writeText('ES6800730100540199528720');
    setCopySuccess('¡Copiado!');
  };

  return (
    <section className='max-w-7xl m-auto px-5 py-8'>
      <div className='border-y-[1px] mt-5 pt-8 pb-12 h-52'>
        <div className='relative basis-1/4 md:pl-0 pl-2 md:w-96 w-auto m-auto'>
          <h2 className='font-sans absolute top-0 text-7xl '>Confirma</h2>
          <h2 className='font-sans absolute top-10 right-2/4	text-7xl'>tu</h2>
          <h2 className='font-sans absolute top-16 right-0 text-7xl'>asistencia</h2>
        </div>
      </div>
      <div className='mt-3 mb-5 grid justify-center content-center'>
        <h3 className='text-center mb-2'>Recordad: lo importante es que vengáis con ilusión, alegría y ganas de pasarlo bien. <br></br>
        Pero si queréis hacernos un regalo, ¡sumad kilómetros a nuestra luna de miel!</h3>
        <div className='m-auto flex flex-col'>
          <button className='text-center italic text-lg border-none' onClick={copyToClipboard}>ES6800730100540199528720</button> 
          <p className='text-gray text-center font-bold'>{copySuccess}</p>
        </div>
        <p className='text-center mb-5 text-orange font-bold'>Daniel Salat Casado & Laia Solé Herrera</p>
        <h3 className='text-center'>Rellena el formulario abajo</h3>
        <svg className="justify-self-center	" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32.495 13.315L20 25.495L7.50501 13.315C7.28177 13.0969 6.98208 12.9748 6.67001 12.9748C6.35793 12.9748 6.05824 13.0969 5.83501 13.315C5.72691 13.4209 5.64104 13.5473 5.58241 13.6868C5.52379 13.8263 5.49359 13.9761 5.49359 14.1275C5.49359 14.2788 5.52379 14.4286 5.58241 14.5681C5.64104 14.7076 5.72691 14.834 5.83501 14.94L19.1275 27.9C19.3609 28.1275 19.674 28.2548 20 28.2548C20.326 28.2548 20.6391 28.1275 20.8725 27.9L34.165 14.9425C34.2739 14.8365 34.3604 14.7097 34.4195 14.5698C34.4785 14.4298 34.509 14.2794 34.509 14.1275C34.509 13.9755 34.4785 13.8251 34.4195 13.6851C34.3604 13.5452 34.2739 13.4184 34.165 13.3125C33.9418 13.0944 33.6421 12.9723 33.33 12.9723C33.0179 12.9723 32.7182 13.0944 32.495 13.3125V13.315Z" fill="#E68B7B"/>
        </svg>

      </div>
      <iframe title="form" src="https://docs.google.com/forms/d/e/1FAIpQLSevtross5JByqxLTtFysS0tmXQr1gl1LkQX1S4jJHJ61g0rBA/viewform?embedded=true" width="100%" height="1099" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

    </section>
  );
}

export default AttendanceSection;