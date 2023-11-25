import React from 'react'
import { Caveat } from 'next/font/google'
import Link from 'next/link'
import { Attention } from './header/Attention'

import Image from 'next/image'
import heroImg from '../assets/hero.png'
import heroMobile from '../assets/hero-mobile.png'



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
            <Image
            src={heroImg.src}
            alt="profile"
            width={100}
            height={100}
            className="w-full h-full top-0 left-0 object-cover"
        />
    
        </div>
            <div className='flex flex-col text-center px-8 md:w-1/2 items-center'>
            <h1 className={`${caveat.className} text-5xl py-8`}>Om giraffen</h1>
            
            <p className=''>
            Förskolan Giraffen är benägen i en skogsglänta med utsikt över sjön Lillelången i natursköna Norsesund. 
            Förskolan drivs som ett föräldrakooperativ och är en icke vinstdrivande förening. 
            Giraffen har plats för 19 barn mellan 1 - 6 år. 
            Gruppen delas upp i lillagruppen 1-3 år och storagruppen 4-6 år under tematider, annars vistas barnen tillsammans.

            </p>

            <p className='pt-4 font-bold'>Hos Giraffen får du:</p>
            <ul>
                <li>Kompetent, engagerad personal med barnet i fokus.</li>
                <li>Ett fokus på natur, miljö och där barnen aktiveras med daglig utevistelse med lek, skogsutflykter etc.</li>
                <li>En egen kock som lagar maten i från grunden och i möjligaste mån närodlade och ekologiska råvaror.</li>
                <li>Möjlighet till insyn och hög delaktighet.</li>
            </ul>
            <Link href="/kontakt" className={`bg-green rounded-md p-4 text-white md:w-64 mt-5 ${caveat.className}`}>Ställ ditt barn i kö</Link>
            </div>
        </div>
    </section>
  )
}
