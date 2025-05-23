import style from '../css/impact.module.css'

export default function Impact() {
  return (
    <section className='md:h-screen flex justify-center ' id='impact'>
        <div className='w-full md:w-3/4  mx-auto space-y-4'>
            <p className={`${style.autoBlur} text-4xl md:text-9xl text-white`}>
                +20 Empresas satisfechas
            </p>
            <p className={`${style.autoBlur} text-4xl md:text-8xl text-end text-white`}>
                +20 Proyectos entregados
            </p>
            <p className={`${style.autoBlur} text-4xl md:text-8xl text-white`}>
                +20 Proyectos realizados
            </p>
            <p className={`${style.autoBlur} text-4xl md:text-8xl text-end text-white`}>
                Soluciones modernas
            </p>
        </div>
    </section>
  )
}
