import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Caveat } from 'next/font/google'


import item from '@/assets/tyra.png'
import { ReadMoreButton } from '@/components/utils/ReadMoreButton'

const caveat = Caveat({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
  })



export const Item1 = () => {
 
  return (
    <div className='bg-lightSand flex flex-col w-full p-8 md:flex-wrap md:flex-row'>
        <div className='md:w-6/12 md:flex md:items-center md:justify-center'>
        <Image
            src={item.src}
            width={800}
            height={800}
            quality={100}
            alt="Våran kock lagar mat med barns" 
            className="w-full md:max-w-md top-0 left-0 object-cover rounded-2xl"
        />
        </div>
        <div className='md:w-6/12 pl-4'> 
        <div className=' flex flex-col p-4'>
            <h2 className={`text-4xl p-8 text-center  ${caveat.className}`}>Tyra</h2>
            <p>Förutsom att förälder och personal möts på Giraffen vid lämning och hämtning sker mycket av kommunikationen mellan förälder och personal via appen Tyra. Här kan föräldrarna se när deras barn checkas in och ut, se bilder från verksamheten på bloggen, bilder till barnen egen protfolio, klasslista, kontaktuppgifter till Giraffen samt andra föräldrar etc. En mycket uppskattad app där du enkelt kan få en större inblick och lättare kommunikation med personalen.
            </p>
        </div>
            {/* <ReadMoreButton link={'pedagogik'} /> */}
        </div>

    </div>
  )
}
