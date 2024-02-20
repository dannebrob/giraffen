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
        <div className='md:w-6/12 flex items-center justify-center'>
        <Image
            src={item.src}
            width={800}
            height={800}
            alt="Våran kock lagar mat med barns" 
            className="w-[500px] md:max-w-md top-0 left-0 object-cover rounded-2xl"
        />
        </div>
        <div className='md:w-6/12 pl-4'> 
        <div className=' flex flex-col p-4'>
            <h2 className={`text-4xl p-8 text-center  ${caveat.className}`}>Tyra</h2>
            <p>
            Utöver att vårdnadshavare och personal möts på Giraffen vid lämningar och 
            hämtningar sker mycket kommunikation via appen Tyra. Här delar personalen 
            bilder och information från verksamheten på bloggen, lägger in bilder i 
            barnens egen portfolio, och uppdaterar information om stängningstider. 
            Barnens schema finns också på Tyra, tillsammans med kontaktuppgifter 
            till Giraffen och vårdnadshavare, samt klasslista. Detta är en mycket 
            uppskattad app där du enkelt kan få inblick i barnens dag på förskolan 
            och ha kommunikation med personalen vid behov.  
            </p>
        </div>
            {/* <ReadMoreButton link={'pedagogik'} /> */}
        </div>

    </div>
  )
}
