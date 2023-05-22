import React from 'react';
import NavBar from './NavBar';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <div className="relative">
            <div className='h-[50rem]'>
                <div className='absolute top-0 left-0 w-full h-full overlay'></div>
                <Image className='w-full h-full object-cover' src="/img3.jpeg" width={1800} height={1600} alt='Image Patch'  />
            </div>
            <div className='absolute w-full h-full top-0 '>
                <NavBar />
                <div className='max-w-[450px] px-2 ml-1 lg:ml-[4rem] pt-44'>
                    <Image src='/m-logo.png' width={180} height={180} alt='Image Logo' />
                    <h1 className='bg-gradient-to-tr from-blue-300 via-blue-700 to-gray-300 bg-clip-text text-transparent flex font-principal  text-left text-5xl  lg:text-7xl'>THE MOST POWERFUL LETTER</h1>
                    <p className='text-white font-secundario font-semibold text-md'>Grip the wheel of any of our M vehicles and elevate your adrenaline rushes to a higher level.</p>
                    <div className='mt-5'>
                        <Link href='#models' className='p-3 pl-4 pr-4  bg-gradient-to-tr from-blue-600 via-blue-700 to-gray-500 font-secundario rounded-sm text-white mt-4'>
                            Explore Models
                        </Link>
                    </div>
                </div>
            </div>    
        </div>
    );
}

export default Header;
