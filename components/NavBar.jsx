import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = () => {

    const router = useRouter();
    const [showHr, setShowHr] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY < 729) {
            setShowHr(true);
        } else {
            setShowHr(false);
        }
    };

    return (
        <div className='w-full fixed overlay2'>
            <nav className=' flex items-center justify-around p-2 w-full'>

                <div className='mt-2 items-center flex gap-4'>
                    <Image src='/logo2.png' className='w-[30px] md:w-[40px]' width={40} height={40} />
                    <Link href={'/'} className='text-gray-300 hover:text-gray-100 duration-300 text-2xl lg:text-3xl font-principal'>HOME</Link>
                </div>

                <div className='flex items-center gap-4 mt-2'>
                    <Link href='/#contact'>
                        <h1 className='text-gray-300 hover:text-gray-100 duration-300 text-2xl lg:text-3xl font-principal'>CONTACT</h1>
                    </Link>
                </div>

            </nav>

            <div className=' px-8 lg:px-[18rem]'>
                <hr className={ showHr && router.pathname === '/' ? 'mt-3 border-blue-50 w-full border-1 ' : 'hidden'} />
            </div>
            
        </div>
    );
}

export default NavBar;
