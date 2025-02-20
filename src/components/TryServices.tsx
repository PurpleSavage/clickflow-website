'use client'
import PixelCard from "./PixelCard/PixelCard"

export default function TryServices() {
  return (
    <section className="space-y-10">
        <div className="w-5/6 mx-auto space-y-2">
            <h3 className='font-bold text-4xl text-white'>Inténtalo y súmate a nuestros clientes!</h3>
            <p className='font-bold text-xl text-slate-400'
            >Nos puedes contactar y agendar una cita para resolver tus problemas brindando soluciones modernas y estéticas</p>
        </div>
        <div className="w-5/6 mx-auto">
            <PixelCard variant="pink" className="rounded-md border cursor-pointer border-slate-700/50 w-full mx-auto text-white">
                <div className="text-white absolute top-0 left-0 bottom-0 right-0 
                flex items-center justify-center gap-4 flex-col ">
                    <p className="text-4xl font-bold">Prueba nuestros servicios</p>
                    <button className="rounded-2xl py-2 px-8 bg-white transition-colors hover:bg-black hover:text-white
                     text-black font-medium text-lg">Contactar</button>
                </div>
                
            </PixelCard>
        </div>
    </section>
  )
}
