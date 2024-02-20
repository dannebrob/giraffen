import React from 'react'
import { Caveat } from 'next/font/google'
import Link from 'next/link'
import { Attention } from './header/Attention'

import Image from 'next/image'
import heroImg from '@/assets/IMG_11.jpg'



const caveat = Caveat({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
  })

export const Hero = () => {
  return (
    <section className='w-full pb-10'>
        <Attention />
        <div className='w-full flex flex-col md:flex-wrap md:flex-row '>
          <div className='w-full md:w-1/2'>
            <Image width={800} height={800} alt='Förskolan giraffen' src={heroImg.src} className='w-full h-full'/>
        </div>
            <div className='flex flex-col text-center px-8 md:w-1/2 items-center'>
            <h1 className={`${caveat.className} text-5xl py-8`}>Om Giraffen</h1>
            
            <p className>
            Hos oss finns tiden för omsorg om barn. Genom våra pedagogers och vårdnadshavares
            närvaro och engagemang för vår relativt lilla grupp barn ger vi barnen goda förutsättningar
            att känna sig trygga, sedda och inspirerade i den miljö de befinner sig under dagarna.
            Dessutom är vår utemiljö otroligt vacker och våra omgivningar inspirerande i sig!

            </p>
            <div className=''>
            <p className='pt-4 font-bold text-start'>Hos Giraffen får du:</p>
            <ul className='text-start'>
                <li>• Liten barngrupp</li>
                <li>• Hög personaltäthet</li>
                <li>• Kvalitetssäkrat pedagogiskt arbete</li>
                <li>• Fantastisk utemiljö</li>
                <li>• Mat som lagas på plats</li>
                <li>• Stort engagemang för barnen</li>
                <li>• Genomsyrande gemenskap och delaktighet</li>
                <li>• Insyn i verksamheten</li>
                <li>• Miljö- och hållbarhetstänk</li>
            </ul>
            </div>
            <Link href="/kontakt" className={`p-2 bg-green w-52 m-3 text-center rounded-lg text-2xl text-white ${caveat.className}`}>Ställ ditt barn i kö</Link>
            </div>
        </div>
    </section>
  )
}
