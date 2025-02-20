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
                    <Link to="testimonials" smooth={false} duration={800}>Nosotros</Link>
                </li>
                <li className='cursor-pointer hover:text-slate-400 transition-colors'>
                    <Link to="services" smooth={false} duration={800} >Landings</Link>
                </li>
                <li className='cursor-pointer hover:text-slate-400 transition-colors'>
                    <Link to="guide" smooth={false} duration={800}>Software</Link>
                </li>
                <li className='cursor-pointer hover:text-slate-400 transition-colors'>
                    <Link to="tech" smooth={false} duration={800}>Mobile</Link>
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
