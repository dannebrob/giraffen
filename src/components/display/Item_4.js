import React from 'react'
import Image from 'next/image'
import { Caveat } from 'next/font/google'


import item from '@/assets/IMG_6.jpg'
import { ReadMoreButton } from '@/components/utils/ReadMoreButton'

const caveat = Caveat({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
  })



export const Item4 = () => {
    return (
        <div className='flex flex-col w-full p-8 md:flex-wrap md:flex-row md:flex-row-reverse'>
            <div className='md:w-6/12 md:flex md:items-center'>
            <Image
                src={item.src}
                width={200}
                height={200}
                quality={100}
                alt="burkar med färg" 
                className="w-full top-0 left-0 object-cover rounded-2xl"
            />
            </div>
            <div className='md:w-6/12'> 
            <div className='flex flex-col p-4'>
                <h2 className={`text-4xl p-8 text-center  ${caveat.className}`}>Lokalerna</h2>
                <p>Huset är beläget på en höjd vid sjön Lillelången med tillgång till egen strand och skog inpå knutarna. 
                Huset ligger med promenadavstånd till pendel och busshållplats. Föräldraföreningen hyr lokaler av BRF Nordgård i Norsesund. 
                Personal och föräldrar har stor möjlighet till påverkan när det gäller lokalernas utformning och underhåll.
                </p>
            </div>
                <ReadMoreButton link={'mat'}/>
            </div>
    
        </div>
      )
}
