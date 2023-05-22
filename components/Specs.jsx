import Image from 'next/image'
import React from 'react'

const Specs = ({ auto }) => {
    return (
        <div className='max-w-[1400px]  justify-center mx-auto'>
            <hr className='border-1 border-gray-400 mb-10' />

            {auto && (
                <div className='flex flex-wrap mx-auto justify-around'>

                    <div>

                        <h1 className='font-principal text-4xl text-left'>Specs</h1>
                        <p className='font-secundario text-lg max-w-[620px] text-left mt-5'>{auto.specText}</p>

                    </div>

                    <div className='flex flex-col justify-between py-10 w-[450px]'>

                        <div className='flex justify-between mb-5 gap-10'>
                            <div className='flex flex-col'>
                                <p className='text-5xl font-thin font-secundario'>{auto.hp}</p>
                                <p className='font-thin font-secundario text-xl'>MAXIMUN HP</p>
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-5xl font-thin font-secundario'>{auto.kmh}</p>
                                <p className='font-thin font-secundario text-xl'>0 - 100 KM/H</p>
                            </div>
                        </div>

                        <hr className='border-1 border-gray-400' />

                        <div className='flex justify-between mt-5 gap-10'>
                            <div className='flex flex-col'>
                                <p className='text-5xl font-thin font-secundario'>{auto.torque}</p>
                                <p className='font-thin font-secundario text-xl'>LB - FT TORQUE</p>
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-5xl font-thin font-secundario'>{auto.transmission}</p>
                                <p className='font-thin font-secundario text-xl'>TRANSMISSION</p>
                            </div>
                        </div>

                    </div>

                </div>
            )}

            <hr className='border-1 border-gray-400 mt-10' />

        </div>
    )
}

export default Specs