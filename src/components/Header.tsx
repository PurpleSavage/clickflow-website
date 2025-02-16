import style from '../css/header.module.css'
import NavHeader from "./NavHeader"
export default function Header() {
  return (
    <header className="h-screen flex items-start  overflow-hidden justify-center relative">
        <video width="1900" height="1900" autoPlay loop muted playsInline className="">
            <source src="/black-hole.webm" type="video/webm" />
            Tu navegador no soporta la reproducción de videos.
        </video>
        <div className={`absolute flex justify-center items-center  bottom-0 left-0 top-0 right-0 ${style.wrapperMask}`}>
            <NavHeader/>
            <div className='relative h-10 w-1/2 '>
                <div className={`${style.cardWrapper } absolute  -left-60 w-[500px] h-[400px] rounded-t-lg p-2`}  >
                    <div className={`${style.card} h-full w-full flex`}>
                        <div>
                            <p></p>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>

                <div className={`${style.cardWrapper } absolute -right-60 w-[500px] h-[400px] rounded-t-lg`}>

                </div>
            </div>
        </div>
    </header>
  )
}
