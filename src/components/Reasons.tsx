import style from '../css/reasons.module.css'
import Image from 'next/image'
export default function Reasons() {
  return (
    <section className='h-screen space-y-10'>
      <h2 className='font-bold text-4xl w-3/4 mx-auto'>¿Por qué Nostros?</h2>
      <div className={`${style.parent} mx-auto w-3/4`}>
        <div className={`${style.div6} space-y-2  overflow-hidden rounded-lg p-3 border border-slate-600/50`}>
          <div className='relative'>
            <Image
              width={400}
              height={200}
              alt='background image black hole'
              src='/bg-1.webp'
              className={`${style.wrapperMask} rounded-lg`}
            />
            <div className='absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center'>
              <div className={`w-[250px] space-y-2 flex flex-col rounded-lg skew-x-6 h-[150px] ${style.metallicEffect}`}>
                <div className='w-full h-5 border border-slate-700/50 rounded-lg flex items-center pr-2'>
                    <div className='grow px-2'>
                      <div className='h-2 w-1/2 border border-slate-700/50'></div>
                    </div>
                    <div className='w-1/4 border border-slate-700/50 h-2 flex justify-evenly py-1 items-center'>
                      <div className='size-2 rounded-full border border-slate-700/50'></div>
                      <div className='size-2 rounded-full border border-slate-700/50'></div>
                      <div className='size-2 rounded-full border border-slate-700/50'></div>
                    </div>
                </div>
                <div className='grow space-y-2 overflow-hidden'>
                  <div className='flex items-center px-2'>
                      <div className='size-[40px] border border-slate-700/50'>

                      </div>
                      <div className='grow px-2 space-y-1'>
                        <div className='w-1/2 h-2 bg-slate-900 rounded-lg'></div>
                        <div className='w-3/4 h-2 border border-slate-700/50'></div>
                        <div className='w-1/2 h-2 border border-slate-700/50'></div>
                      </div>
                  </div>
                  <div className='flex justify-between px-2'>
                    <div className='size-[50px] border border-slate-700/50'></div>
                    <div className='size-[40px] border border-slate-700/50'></div>
                    <div className='size-[50px] border border-slate-700/50'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='space-y-1'>
            <p className='text-white text-lg'>Soluciones intuitivas y flexibles</p>
            <p className='text-sm text-slate-400'>Los clientes se pueden adaptar rápido a nuestro software, además es escalable</p>
          </div>
        </div>


        <div className={`${style.div6} space-y-2 rounded-lg p-3 border border-slate-600/50`}>
            <Image
                width={400}
                height={200}
                alt='image software dashboard'
                src='/dashboard.webp'
                className={`${style.wrapperMask} rounded-lg`} 
            />
            <div className='space-y-1'>
              <p className='text-white text-lg'>Software moderno</p>
              <p className='text-sm text-slate-400'>Interfaces modernas y atractivas para nuestros clientes</p>
            </div>
        </div>


        <div className={`${style.div6} space-y-1 rounded-lg p-3 border border-slate-600/50`}>
            <Image
                width={400}
                height={200}
                alt='image software dashboard'
                src='/personalized.webp'
                className={`${style.wrapperMask} rounded-lg`} 
            />
            <div className='space-y-1'>
              <p className='text-white text-lg'>Software a medida</p>
              <p className='text-sm text-slate-400'>PErsonalizamos el software de acuerdo a tus necesidades y requerimeintos</p>
            </div>
        </div>


        <div className={`${style.div6}  space-y-1 rounded-lg p-3 border border-slate-600/50`}>
          <p className='text-white text-lg'>Nos preocupamos por nuestros clientes</p>
          <p className='text-sm text-slate-400'>Nosotros nos encargamos del mantenimiento, capacitar y dar seguimeinto a nuestros softwares</p>
        </div>


        <div className={`${style.div6} space-y-1 rounded-lg p-3 border border-slate-600/50`}>
          <p className='text-white text-lg'>Atención al cliente</p>
          <p className='text-sm text-slate-400'>Nosotros ofrecemos capacitación y estamos en constante comunicación con nuestros clientes</p>
        </div>


        <div className={`${style.div6} space-y-1 rounded-lg p-3 border border-slate-600/50`}>
          <p className='text-white text-lg'>Feedback constante</p>
          <p className='text-sm text-slate-400'>Nos encanta recibir feedback de nuestros clientes para poder mejorar nuestros servicios</p>
        </div>
      </div>
    </section>
  )
}
