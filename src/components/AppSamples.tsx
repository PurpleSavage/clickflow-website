import { appList } from "@/data/appList"
import Image from "next/image"
export default function AppSamples() {
  return (
    <section className="md:h-screen space-y-10" id="appsamples">
      <div className="w-5/6 mx-auto space-y-2">
        <h3 className='font-bold text-4xl text-white'>Apps</h3>
        <p className='font-bold text-xl text-slate-400'
        >Estas son algunas muestras de nuestras apps desarrolladas para empresas que buscan algo moderno y atractivo</p>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-4 w-5/6 mx-auto">
        {
          appList.map(landing=>(
            <div key={landing.id} className="h-[300px]  rounded-md border border-slate-700/50 flex flex-col cursor-pointer" >
              <div className="w-full h-[280px] overflow-hidden ">
                  <Image
                      src={landing.path}
                      alt={`image reference`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover rounded-sm"
                  />
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}
