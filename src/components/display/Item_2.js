import React from 'react'
import Image from 'next/image'
import { Caveat } from 'next/font/google'


import item from '@/assets/IMG_9.jpg'
import { ReadMoreButton } from '@/components/utils/ReadMoreButton'

const caveat = Caveat({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
  })



export const Item2 = () => {
  return (
    <div className='flex flex-col w-full p-8 md:flex-wrap md:flex-row md:flex-row-reverse justify-center'>
        <div className='md:w-6/12 flex items-center justify-center'>
        <Image
            src={item.src}
            width={800}
            height={800}
            alt="Grönsaker på bänk"
            className="w-[500px] md:max-w-md top-0 left-0 object-cover rounded-2xl"
        />
        </div>
        <div className='md:w-6/12'> 
        <div className='flex flex-col p-4'>
            <h2 className={`text-4xl p-8 text-center  ${caveat.className}`}>Maten</h2>
            <p>
            Giraffen har en egen kock som lagar mat från grunden och i möjligaste mån med 
            ekologiska och närproducerade råvaror. Under sommarhalvåret har vi lyxen att få 
            grönsaksleverans från Hemsjö köksträdgård. Maten är även en del av den pedagogiska
             verksamheten. Det skapar nyfikenhet och förståelse för matens ursprung och betydelse.
            </p>
        </div>
            <ReadMoreButton link={'mat'}/>
        </div>

    </div>
  )
}
