'use client'
import { Link } from "react-scroll"
import style from '../css/header.module.css'



export default function NavHeader() {
  return (
    <div className="flex  z-50 items-center py-3 border-b border-slate-600/50  w-full px-8">
        <span className="text-lg   font-bold">
            ClickFlow
        </span>
        <nav className="grow  flex items-center justify-center">
            <ul className={`flex w-full md:w-1/3  justify-between items-center ${style.card} py-2 px-4`}>
                <li className='cursor-pointer hover:text-slate-400 transition-colors'>
                    <Link to="reasons" smooth={true} duration={800}>Nosotros</Link>
                </li>
                <li className='cursor-pointer hover:text-slate-400 transition-colors'>
                    <Link to="impact" smooth={true} duration={800} >Impacto</Link>
                </li>
                <li className='cursor-pointer hover:text-slate-400 transition-colors'>
                    <Link to="landingsamples" smooth={true} duration={800}>Web sites</Link>
                </li>
                <li className='cursor-pointer hover:text-slate-400 transition-colors'>
                    <Link to="appsamples" smooth={true} duration={800}>Apps</Link>
                </li>
                <li className='cursor-pointer hover:text-slate-400 transition-colors'>
                    <Link to="try" smooth={true} duration={800}>Contacto</Link>
                </li>
            </ul>
        </nav>
        <div className='w-[90px] hidden md:flex justify-evenly items-center h-[20px] rounded-lg border border-slate-400/50' style={{ backdropFilter: 'blur(8px)' }}>
            {
                [1,2,3].map((_,index)=>(
                    <div key={index} className='size-2 rounded-full border border-slate-400/50' 
                    style={{ backdropFilter: 'blur(8px)' }}></div>
                ))
            }
        </div>
    </div>
  )
}
