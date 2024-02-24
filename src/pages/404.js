import Link from 'next/link';
import giraffen from '@/assets/404.png';
import Image from 'next/image';
import {ReadMoreButton} from '@/components/utils/ReadMoreButton';


export default function Custom404() {
    return <section className='bg-sand flex flex-col items-center justify-center h-screen'>
        <h1 className='text-4xl pb-10'>Sidan hittas tyvärr inte</h1>
        <p className='text-center pb-5'>Vår giraff är en hejare på kodning, men den här sidan var lite för knepig. Vi ska se om vi kan lösa det!</p>
        <Image src={giraffen} alt='Giraffen kodar' width={400} height={400} />
        <ReadMoreButton link="/" text={'Tillbaka till startsidan'} />
        </section>
  }