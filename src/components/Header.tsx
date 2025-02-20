import style from '../css/header.module.css'
import NavHeader from "./NavHeader"
import { FaChartLine } from "react-icons/fa6";
import { GiRobotGrab } from "react-icons/gi";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { TiFlowChildren } from "react-icons/ti";
import { BsCursor } from "react-icons/bs";
import { HiMiniWrench } from "react-icons/hi2";
import { FaListCheck } from "react-icons/fa6";
import HourHeader from './HourHeader';
import BlurText from '@/TextAnimations/BlurText/BlurText';
import { IoIosArrowBack,IoIosArrowForward  } from "react-icons/io";
import Calendar from './Calendar';
export default function Header() {
  return (
    <header className="h-screen flex items-start  overflow-hidden justify-center relative">
        <video width="1900" height="1900" autoPlay loop muted playsInline className="">
            <source src="/black-hole.webm" type="video/webm" />
            Tu navegador no soporta la reproducción de videos.
        </video>
        
        <div className={`absolute z-10 flex flex-col justify-center items-center  bottom-0 left-0 top-0 right-0 ${style.wrapperMask}`}>
            <NavHeader/>
            <div className='mb-20 h-1/2 w-full flex justify-center items-center'>
                <BlurText
                    text="ClickFlow: Creando el Futuro Digital"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-5xl  text-white font-bold"
                />
            </div>
            <div className={`relative  w-1/2  h-1/2 `}>
                <div className={`${style.cardWrapper }  absolute -bottom-16  -left-60 w-[500px] h-[400px] rounded-t-lg p-2`}  >
                    <div className={`${style.card} h-full w-full flex items-center`}>
                        <div className='h-full py-4 space-y-4 px-2 text-white border-r border-slate-600/50'>
                            <p className='flex font-bold items-center gap-2 text-sm text-purple-800'><RiLightbulbFlashLine size={10}/>Innovaci&oacute;n</p>
                            <p className='flex font-bold items-center gap-2 text-sm'><GiRobotGrab size={10}/>Modernidad</p>
                            <p className='flex font-bold items-center gap-2 text-sm'><TiFlowChildren size={10}/>Fluidez</p>
                            <p className='flex font-bold items-center gap-2 text-sm'><HiMiniWrench size={10}/> Personalizaci&oacute;n</p>
                            <p className='flex font-bold items-center gap-2 text-sm'><FaChartLine size={10}/>Crecimiento</p>
                            <p className='flex font-bold items-center gap-2 text-sm'><FaListCheck size={10}/>Eficiencia</p>
                            <p className='flex font-bold items-center gap-2 text-sm'><BsCursor size={10}/>Usabilidad</p>
                        </div>
                        <div className='grow h-full  px-2'>
                            <div className='border-b border-slate-600/50 py-1 flex items-center'>
                                <p className='grow font-medium'>Innovaci&oacute;n</p>
                                <div className='w-[50px]  hidden md:flex justify-evenly items-center h-[10px] rounded-lg border border-slate-400/50' style={{ backdropFilter: 'blur(8px)' }}>
                                    {
                                        [1,2,3].map((_,index)=>(
                                            <div key={index} className='size-1 rounded-full border border-slate-400/50' 
                                            style={{ backdropFilter: 'blur(8px)' }}></div>
                                        ))
                                    }
                                </div>
                            </div>
                            <HourHeader/>
                            <p className='text-sm text-white py-2'>
                                Confía en nosotros para llevar tu empresa al siguiente nivel. 
                                Con nuestras soluciones innovadoras, impulsamos tu crecimiento e integramos tecnologías 
                                de vanguardia para que te mantengas a
                                la altura de la nueva era digital. El futuro es ahora, y el software es la clave para liderarlo.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={`${style.cardWrapper } absolute -bottom-16  -right-60 w-[500px] h-[400px] rounded-t-lg p-2`}>
                    <div className={`${style.card} h-full w-full space-y-2 px-2 py-4`}>
                        <p className={`${style.degraded} text-3xl font-bold text-center`}>
                            Fluidez y rapidez en tus aplicaciones 
                        </p>
                        <p className='text-white'>Agenda una cita con nostros</p>
                        <div className={`${style.card} w-full px-2 space-y-4 py-2`}>
                           <div className='flex items-center'>
                                <p className='text-white'>Febrero 2025</p>
                                <div className='grow flex justify-end items-center gap-4 text-white'>
                                    <IoIosArrowBack size={15}/>
                                    <IoIosArrowForward size={15}/>
                                </div>
                           </div>
                           <Calendar/>
                        </div>
                    </div>                       
                </div>
            </div>
        </div>
    </header>
  )
}
