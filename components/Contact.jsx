import Image from 'next/image'
import React from 'react'

import ContactValidation from './ContactValidation'

const Contact = () => {
  return (
    <div id='contact'>
        <div className='pt-5 pb-10 px-2'>
            <div className='px-2 lg:px-[10rem]'>
                <h1 className='text-4xl lg:text-5xl font-principal'>Contact Us</h1>
                <p className='text-lg lg:text-xl font-secundario'>Reserve the Ultimate Driving Experience: Contact Us to Secure Your Latest BMW M Model</p>
            </div>

            <div className='flex w-full justify-center '>
                
                <div className='w-[600px]'>
                    <ContactValidation  />
                </div>
           
                <div className='mt-10 hidden lg:flex mb-10'>
                   <Image src='/contacto.jpeg' className='rounded-2xl' width={522} height={500} />
                </div>
           
            </div>


        </div>
    </div>
  )
}

export default Contact