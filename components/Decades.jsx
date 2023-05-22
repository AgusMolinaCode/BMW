import React from 'react'
import Image from 'next/image'

const Decades = () => {
  return (
    <div>
        <div className='gap-5 grid grid-cols-1 md:grid-cols-3'>
            
            <div className=''>
                <h1 className='text-4xl font-principal'>1970</h1>
                <p className='font-secundario font-bold mt-2'>BMW M IS BORN.</p>
                <p className='font-secundario font-extralight text-lg mt-2'>Created as a division of BMW’s racing teams, BMW Motorsport roars onto the scene. Only one year later, the BMW 3.0 CSL wins the Nürburgring 24 Hours.</p>
            </div>

            <div>
                <h1 className='text-4xl font-principal'>1978</h1>
                <p className='font-secundario font-bold mt-2'>BMW M1.</p>
                <p className='font-secundario font-extralight text-lg mt-2'>As the namesake of BMW M vehicles, the BMW M1 launches the career of the letter “M” that is destined to be a synonym for top performance and success.</p>
            </div>

            <div>
                <h1 className='text-4xl font-principal'>1984</h1>
                <p className='font-secundario font-bold mt-2'>BMW M5.</p>
                <p className='font-secundario font-extralight text-lg mt-2'>Making history, this sportscar becomes the first street-legal high-performance sedan.</p>
            </div>

        </div>

        <div className='gap-5 mt-20 grid grid-cols-1 md:grid-cols-3'>
            
            <div className=''>
                <h1 className='text-4xl font-principal'>1997</h1>
                <p className='font-secundario font-bold mt-2'>BMW M ROADSTER.</p>
                <p className='font-secundario font-extralight text-lg mt-2'>With its larger track width and low center of gravity, the BMW M Roadster grips the road like a beast.</p>
            </div>

            <div>
                <h1 className='text-4xl font-principal'>2000</h1>
                <p className='font-secundario font-bold mt-2'>BMW M3 COUPE.</p>
                <p className='font-secundario font-extralight text-lg mt-2'>With the world’s most powerful naturally aspirated 6-cylinder engine, an impressive front spoiler, and classic coupe design, the BMW M3 delivers a thrilling driving experience.</p>
            </div>

            <div>
                <h1 className='text-4xl font-principal'>2015</h1>
                <p className='font-secundario font-bold mt-2'>BMW X6 M.</p>
                <p className='font-secundario font-extralight text-lg mt-2'>Combining the athletic characteristics of a coupe with the motorsport DNA of BMW, the X6 M is the ultimate Sports Activity Coupe.</p>
            </div>

        </div>

        <div className='flex-col justify-between mt-20 gap-2 pb-20 '>
            <div className='w-full'>
                
                <div className='flex-col lg:flex gap-5'>

                    <div className=''>
                        <h1 className='text-4xl font-principal'>2018</h1>
                        <p className='font-secundario font-bold mt-2'>40 YEARS OF BMW M</p>
                        <p className='font-secundario font-extralight text-lg mt-2'>On our momentous 40th anniversary, we reflected upon a remarkable history that has left an indelible mark on drivers and enthusiasts worldwide. With an unwavering commitment to innovation and performance, we embarked on a journey that redefined driving pleasure. As we look towards the future, we embrace new horizons, embracing cutting-edge technologies and sustainable mobility, paving the way for a thrilling and eco-conscious driving experience.</p>
                    </div>

                    <div className=''>
                        <h1 className='text-4xl font-principal'>2022</h1>
                        <p className='font-secundario font-bold mt-2'>50 YEARS OF BMW M</p>
                        <p className='font-secundario font-extralight text-lg mt-2'>On our cherished 50th anniversary, we celebrated a thrilling history that has captivated drivers and enthusiasts worldwide. As we forge ahead into the future, we embrace an era of electrification and powerful technology, promising an exhilarating journey filled with emotion and cutting-edge advancements.</p>
                    </div>

                </div>

                <Image src="/m-perfor.png" className="rounded-xl mt-8"  width={700} height={700}  alt='imagen_bmw'/>
            
            </div>

            <div className=''>
                <Image src="/fondo11.jpeg" className="rounded-xl max-h-[600px]"  width={1700} height={1100}  alt='imagen_bmw'/>
            </div>
        </div>
    </div>
  )
}

export default Decades