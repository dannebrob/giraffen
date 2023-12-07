import React from 'react'
import Image from 'next/image'
import { Caveat } from 'next/font/google'
import {TopHead} from '@/components/header/TopHead'
import {Footer} from '@/components/footer/Footer'

import item from '@/assets/IMG_11.jpg'
import { Display } from '@/components/display/Display'


const caveat = Caveat({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
  })
const jobb = () => {
    
  return (
    <>
    <TopHead />
    <main className='bg-sand flex flex-col md:flex-row md:justify-center'>
      <div className='mx-10 md:w-1/2'>
        <h1 className={`text-center ${caveat.className} text-4xl py-10`}>Lediga tjänster</h1>
       
       <div>
        <h2 className='font-bold'>Är du vår nästa vikarie?</h2>
        <p>Förskolan Giraffen är en mysig förskola som drivs som föräldrakooperativ i Norsesund med utsikt över Lillelången. Vi söker nu timvikarier som kan hoppa in och jobba dagar då ordinarie personal inte är på plats.
            Är du intresserad?</p>
            <p>Hör av dig till vår förskolechef Helen Hultstrand: info@forskolangiraffen.se eller på tel: tel:0735-39 46 49</p>
            <p> http://www.forskolangiraffen.se</p>
       </div>
      <Image
          src={item}
          alt="kids playing" 
          width={800}
          height={800}
          className="w-full p-10"
      /> 
        </div>
    </main>
    <Display />
    <Footer />
  </>
  )
}

export default jobb