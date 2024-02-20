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
            <div className='flex flex-col px-8 md:w-1/2'>
            <h1 className={`${caveat.className} text-5xl py-8 text-center`}>Om Giraffen</h1>
            
            <p>
            Vi har tid för omsorg om våra barn. Genom våra pedagogers och vårdnadshavares närvaro och 
            engagemang för barnen får de goda förutsättningar att känna sig trygga och inspirerade i 
            den miljö de befinner sig under dagarna. Dessutom är vår utemiljö otroligt vacker och 
            våra omgivningar inspirerande i sig!
            </p>
            <p className='py-2'>
            Vi har en åldersintegrerad barngrupp (1–5 år) vilket ger barnen många möjligheter att 
            lära sig av varandra. Tillsammans med pedagogerna skapar de en väldigt dynamisk och 
            naturlig grupp vilket främjar utveckling och sociala färdigheter. Läromiljön anpassas 
            också efter ålder och mognad genom indelningar för specifika aktiviteter och temaarbete. 
            Det sker i mindre grupper vilket främjar möjligheten till koncentration och förmågan att fokusera.
            </p>
            <div className={`${caveat.className}`}>
            <p className='pt-4 font-bold text-start text-lg'>På Giraffen har vi:</p>
            <ul className='text-start text-2xl'>
                <li>● Liten barngrupp</li>
                <li>● Hög personaltäthet</li>
                <li>● Kvalitetssäkrat pedagogiskt arbete</li>
                <li>● Fantastisk utemiljö</li>
                <li>● Mat som lagas på plats</li>
                <li>● Stort engagemang för barnen</li>
                <li>● Genomsyrande gemenskap och delaktighet</li>
                <li>● Insyn i verksamheten</li>
                <li>● Miljö- och hållbarhetstänk</li>
            </ul>
            </div>
            <Link href="/kontakt" className={`p-2 bg-green w-52 my-3 text-center rounded-lg text-2xl text-white ${caveat.className}`}>Ställ ditt barn i kö</Link>
            </div>
        </div>
    </section>
  )
}
