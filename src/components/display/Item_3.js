import React from 'react'
import Image from 'next/image'
import { Caveat } from 'next/font/google'


import item from '@/assets/IMG_13.jpg'
import { ReadMoreButton } from '@/components/utils/ReadMoreButton'

const caveat = Caveat({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
  })



export const Item3 = () => {
  return (
    <div className='bg-lightSand flex flex-col w-full p-8 md:flex-wrap md:flex-row '>
        <div className='md:w-6/12 md:flex md:items-center'>
        <Image
            src={item.src}
            width={800}
            height={800}
            quality={100}
            alt="Våran kock lagar mat med barn" 
            className="w-full top-0 left-0 object-cover rounded-2xl max-h-[700px]"
        />
        </div>
        <div className='md:w-6/12 pl-4'> 
        <div className='flex flex-col p-4'>
            <h2 className={`text-4xl p-8 text-center  ${caveat.className}`}>Hög personaltäthet</h2>
            <p>Vi är en engagerad personalgrupp som består av rektor, förskolelärare, barnskötare och kock. Föräldraföreningen arbetar för att personalen kontinuerligt ska ges möjligheter till utbildning och pedagogisk inspiration. Verksamhetens litenhet och närhet mellan barn, föräldrar och personal skapar en lugn och trygg miljö för barnen och en positiv arbetsplats.
            </p>
          
        </div>
            <ReadMoreButton link={'personalen'}/>
        </div>

    </div>
  )
}
