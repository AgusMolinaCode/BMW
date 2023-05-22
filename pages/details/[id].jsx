import NavBar from '@/components/NavBar';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSanityContext } from "../../contexts/SanityContext";
import Specs from '@/components/Specs';
import { FaArrowLeft } from 'react-icons/fa';

const Id = () => {

    const router = useRouter();

    const { autosUsados, urlFor } = useSanityContext();

    const auto = autosUsados.find(auto => auto._id === router.query.id);

    return (
        <>
            <Head>
                <title>Car Details</title>
                <meta name="description" content="Car details" />
            </Head>
            <main>
                <div className='back'>
                    <NavBar />
                    <div className='pt-16'>
                        <div className='mt-5 lg:pl-10 flex px-2'>
                            <Link href='/#models'>
                                <button className='bg-black flex justify-center items-center mx-auto gap-2 text-white font-secundario rounded-lg p-1'>
                                <FaArrowLeft />Back
                                </button>
                            </Link>
                        </div>
                        {auto && (
                            <div key={auto._id} className='text-center pt-10'>
                                <h1 className='font-principal text-left lg:pl-10 text-5xl lg:text-6xl px-2'>{auto.tituloModelo}</h1>
                                <p className='text-left lg:pl-10 font-secundario text-lg px-2'>{auto.subTituloModelo}</p>

                                <div className='mt-[4rem] px-2'>
                                    <Specs auto={auto} />
                                </div>

                                <div className='grid md:grid-cols-2 justify-center items-center'>
                                    <Image className='flex justify-center mx-auto' src={urlFor(auto.fotos[0].asset).url()} width={600} height={600} alt={auto.marca} />
                                    <Image className='flex justify-center mx-auto' src={urlFor(auto.fotos[1].asset).url()} width={600} height={600} alt={auto.marca} />
                                    <Image className='flex justify-center mx-auto' src={urlFor(auto.fotos[2].asset).url()} width={600} height={600} alt={auto.marca} />
                                    <Image className='flex justify-center mx-auto' src={urlFor(auto.fotos[3].asset).url()} width={600} height={600} alt={auto.marca} />
                                    <Image className='flex justify-center mx-auto' src={urlFor(auto.fotos[4].asset).url()} width={600} height={600} alt={auto.marca} />
                                    <Image className='flex justify-center mx-auto' src={urlFor(auto.fotos[5].asset).url()} width={600} height={600} alt={auto.marca} />
                                </div>


                                <div className='bg-[#414141] w-full '>

                                    <h3 className='text-white uppercase font-secundario pt-8'>Highlights</h3>

                                    <h1 className='text-white text-4xl font-secundario font-extralight pt-5'>{auto.highlightsTitle}</h1>

                                    <p className='text-white text-lg flex justify-center mx-auto max-w-[850px] p-2 font-secundario mt-10 mb-10'>{auto.highlightsText}</p>

                                    <div className='grid xl:grid-cols-3 gap-4 justify-center px-2 lg:px-8'>

                                        <div className='w-full'>
                                            <Image className='rounded-none flex mx-auto 2xl:rounded-s-3xl md:h-[420px] px-1 lg:h-[460px]' src={urlFor(auto.Highlights[0].asset).url()} width={500} height={500} alt={auto.marca} />
                                            <h1 className='text-center mt-5 text-2xl text-white font-secundario'>{auto.tituloinformacionAdicional1}</h1>
                                            <p className='max-w-[350px] text-center mt-5 mb-8 flex justify-center mx-auto font-secundario text-white'>{auto.informacionAdicional1}</p>
                                        </div>

                                        <div className='w-full'>
                                            <Image className=' flex mx-auto md:h-[420px] px-1 lg:h-[460px]' src={urlFor(auto.Highlights[1].asset).url()} width={500} height={500} alt={auto.marca} />
                                            <h1 className='text-center mt-5 text-2xl text-white font-secundario'>{auto.tituloinformacionAdicional2}</h1>
                                            <p className='max-w-[350px] text-center mt-5 mb-8 flex justify-center mx-auto font-secundario text-white'>{auto.informacionAdicional2}</p>
                                        </div>

                                        <div className='w-full'>
                                            <Image className=' md:h-[420px] flex mx-auto px-1 lg:h-[460px] rounded-none 2xl:rounded-e-3xl' src={urlFor(auto.Highlights[2].asset).url()} width={500} height={500} alt={auto.marca} />
                                            <h1 className='text-center mt-5 text-2xl text-white font-secundario'>{auto.tituloinformacionAdicional3}</h1>
                                            <p className='max-w-[350px] text-center mt-5 mb-8 flex justify-center mx-auto font-secundario text-white'>{auto.informacionAdicional3}</p>
                                        </div>

                                    </div>
                                    <Link href='/#contact'>
                                    <button className='mt-10 hover:bg-gray-300 duration-300 bg-white rounded-sm text-black font-principal mb-10 text-lg p-4'>CONTACT US</button>
                                    </Link>
                                </div>

                            </div>
                        )}

                    </div>
                </div>
            </main>
        </>
    );
}

export default Id;
