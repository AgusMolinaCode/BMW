import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { AiFillGithub,AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <div>
        <div className='bg-indigo-900 '>
              <div className='md:flex justify-between h-28 items-center mx-auto px-2'>
                
                  <div className='pt-4 flex justify-center items-center gap-4'>
                      <Image src='/logo2.png' width={40} height={40} />
                      <Link href={'/'} className='text-gray-300 hover:text-gray-100 duration-300 text-3xl font-principal'>HOME</Link>
                  </div>  


                  <div className='pt-2 flex justify-center items-center'>
                    <Link href='https://github.com/AgusMolinaCode' target={'_blank'}>  
                      <h1 className='font-secundario text-gray-400'>Developed By <span className='font-principal text-gray-200 text-2xl hover:text-white duration-300'>Agustin Molina</span></h1>
                    </Link>
                  </div>
                
              </div>
        </div>
    </div>
  )
}

export default Footer