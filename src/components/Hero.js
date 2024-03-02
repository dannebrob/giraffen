import React, { useEffect, useState } from 'react'
import { Caveat } from 'next/font/google'
import Link from 'next/link'
import { createBucketClient } from '@cosmicjs/sdk';

import { Attention } from './header/Attention'

import Image from 'next/image'
import heroImg from '@/assets/IMG_11.jpg'
import { env } from '../../next.config';

const caveat = Caveat({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
  })

  const cosmic = createBucketClient({
    bucketSlug: 'my-project-production-d888afc0-d70c-11ee-a373-d7fa93a92d7a',
    readKey: 'hpncy7Fu1xSyMhljuuIoBx6UWyOFuKaOVTX3LlhZVAZt7ZAjig'
  })
  
  
  
  export const Hero = () => {
  const [hero, setHero] = useState(null)
  
  async function getHero() {
    const data =await cosmic.objects.findOne({
      type: "giraffens",
      slug: "giraffen-hero"
    }).props("slug,title,metadata")
    .depth(1);
    console.log(data)
    setHero(data) 
  }

  const fetchData = async () => {
    try {
      const response = await cosmic.objects.findOne({
        type: "giraffens",
        slug: "giraffen-hero"
      }).props("slug,title,metadata")
      .depth(1);
      setHero(response);
      console.log(hero.object.metadata);
    } catch (error) {
      console.error('Fel vid hämtning av data:', error);
    }
  };

  useEffect(() => {
    fetchData()
  }
  , [])


  console.log('// Denna sida skapades av Daniel Brobäck, besök min webbplats på www.danielbroback.se för mer information.')
  return (
    <section className='w-full pb-10 pt-20'>
    <Attention />
    <div className='w-full flex flex-col md:flex-wrap md:flex-row '>
      <div className='w-full md:w-1/2'>
      <Image 
    width={800} 
    height={800} 
    alt='Förskolan giraffen' 
    src={heroImg.src} 
    className='object-cover w-full h-full'
  />
      </div>
            <div className='flex flex-col px-8 md:w-1/2'>
            <h1 className={`${caveat.className} text-5xl py-8 text-center`}>Om Giraffen</h1>
            
            <p>
            {hero?.object.metadata?.hero_text}
            </p>
            <p className='py-2'>
            Vi har en åldersintegrerad barngrupp (1–5 år) vilket ger barnen många möjligheter att 
            lära sig av varandra. Tillsammans med pedagogerna skapar de en väldigt dynamisk och 
            naturlig grupp vilket främjar utveckling och sociala färdigheter. Läromiljön anpassas 
            också efter ålder och mognad genom indelningar för specifika aktiviteter och temaarbete. 
            Det sker i mindre grupper vilket främjar möjligheten till koncentration och förmågan att fokusera.
            </p>
            <div className={`${caveat.className}`}>
            <p className='pt-4 font-bold text-start text-2xl'>På Giraffen har vi:</p>
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
