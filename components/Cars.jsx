import Image from 'next/image';
import React from 'react';
import { useSanityContext } from "../contexts/SanityContext";
import { FaArrowUp } from "react-icons/fa";
import Link from 'next/link';

const Cars = () => {

    const { autosUsados, urlFor } = useSanityContext();
    

    return (
        <div id='models' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mx-auto'>
            {autosUsados.map(auto => (

                <div key={auto._id} className='w-full p-2 text-center pt-10'>
                    
                    <h1 className='font-principal text-3xl'>{auto.marca}</h1>
                    <p className='font-secundario text-lg'>{auto.modelo}</p>
                    <Image className='flex mx-auto' src={urlFor(auto.fotos[0].asset).url()} width={600} height={600} alt={auto.marca} />

                    <Link href={`/details/${auto._id}`}>
                        <button className='bg-black flex justify-center items-center mx-auto gap-2 text-white font-secundario rounded-lg p-1'>
                            Details<FaArrowUp />
                        </button>
                    </Link>

                </div>
            ))}
        </div>
    );
}

export default Cars;
