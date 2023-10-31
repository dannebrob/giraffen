import React from 'react'
import { Caveat } from 'next/font/google'

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
    <section className='w-full'>
        <div className='w-full flex flex-col md:flex-wrap md:flex-row '>
          <div className='w-full'>
            <Image
            src={heroImg.src}
            alt="profile"
            width={100}
            height={100}
            className="w-full h-full top-0 left-0 object-cover rounded-2xl"
        />
      
          </div>
            <div className='w-full flex flex-col text-center px-8'>
            <h1 className={`${caveat.className} text-5xl py-8`}>Om giraffen</h1>
            
            <p className=''>
                Högt upp på en kulle med utsikt över sjön Lillelången, i natursköna Norsesund som ligger i utkanten av Alingsås, 
                där hittar man Förskolan Giraffen. 
                Förskolan drivs som föräldrakooperativ av föräldraföreningen Nordgård sedan 35 år tillbaka. 
                Fokus för verksamheten ligger på naturen och miljön
            </p>

            <p className=''> Hos oss får du:</p>
            <ul>
                <li> Hög personaltäthet, med professionella pedagoger</li>
                <li>Fokus på natur och miljö, med hemlagad mat och skog och strand om husknuten</li>
                <li>Insyn och delaktighet som förälder</li>
            </ul>
            <p>Gör en intresseanmälan om förskoleplats hos oss.</p>
            </div>
        </div>
    </section>
  )
}
