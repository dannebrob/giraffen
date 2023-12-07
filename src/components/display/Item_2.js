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
    <div className='flex flex-col w-full p-8 md:flex-wrap md:flex-row md:flex-row-reverse'>
        <div className='md:w-6/12 md:flex md:items-center'>
        <Image
            src={item.src}
            width={800}
            height={800}
            alt="Grönsaker på bänk"
            className="w-full top-0 left-0 object-cover rounded-2xl"
        />
        </div>
        <div className='md:w-6/12'> 
        <div className='flex flex-col p-4'>
            <h2 className={`text-4xl p-8 text-center  ${caveat.className}`}>Maten</h2>
            <p>Vi har en egen kock som lagar mat från grunden och i möjligaste mån med ekologiskt, kravodlat och från närproducerade råvaror. På somrarna har vi lyxen att få leverans från ….. nära förskolan. Veckomenyn varierar, det bjuds på fisk minst en gång i veckan, matiga soppor, husmanskost och olika vegitariskt rätter. 
            </p>
        </div>
            <ReadMoreButton link={'mat'}/>
        </div>

    </div>
  )
}
