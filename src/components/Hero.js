import React from 'react'
import { Permanent_Marker } from 'next/font/google'

import Image from 'next/image'
import heroMobile from '../assets/hero-mobile.png'

console.log(heroMobile);

const permanent_marker = Permanent_Marker({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
  })

export const Hero = () => {
  return (
    <section className='hero w-full'>
        <div className='w-full'>
            <div className='w-full border-solid border-2 border-indigo-600'>
            <Image
                src={heroMobile}
                width={500}
                height={400}
                alt="Barn som leker"
    />
            </div>
            <div className='w-full border-solid border-2 border-indigo-600 flex flex-col text-center px-8'>
            <h1 className={`${permanent_marker.className} text-5xl py-8`}>Om giraffen</h1>
            
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
