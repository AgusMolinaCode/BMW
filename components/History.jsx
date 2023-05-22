import Image from "next/image"
import Decades from "./Decades"

const History = () => {
  return (
    <div className="px-1 pt-28">
        <div className="flex flex-wrap gap-5 justify-between">
            
            <div className="flex mx-auto justify-center">
                <Image src="/fondo1.jpeg" className="rounded-xl"  width={800} height={800}  alt='imagen_bmw'/>
            </div>

            <div className="flex-col items-center mx-auto  lg:gap-5 justify-center">
                <div className="flex-col">
                    <p className="font-secundario mb-3">HISTORY</p>
                    <h1 className="text-4xl lg:text-5xl font-principal">FIVE DECADES OF POWER</h1>
                </div>

                <div className="max-w-[800px] pt-12">
                    <p className="text-lg lg:text-xl font-secundario font-light">
                        BMW enthusiasts have embraced the letter "M" beyond the racetrack, bringing high-performance engines and aerodynamic design to everyday roads. The M badge symbolizes power, precision, and the relentless pursuit of automotive excellence. With meticulously calibrated engines and sculpted aerodynamics, M cars deliver an exhilarating driving experience that captivates and thrills enthusiasts worldwide.
                    </p>
                </div>

                <div className="flex  justify-start mt-5 lg:mt-14 px-3 h-[200px]">
                    {/* <Image src="/logo2.png" className="rounded-xl"  width={200} height={200}  alt='imagen_bmw'/> */}
                    <Image src="/m-logo2.png" className="rounded-xl"  width={300} height={200}  alt='imagen_bmw'/>
                </div>
                
            </div>

        </div>

        <div className="mt-5 lg:mt-[8rem] px-2 lg:px-[10rem]">
            <Decades/>
        </div>

    </div>
  )
}

export default History