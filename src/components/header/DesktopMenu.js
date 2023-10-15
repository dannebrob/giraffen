import React from 'react'
import { Permanent_Marker } from 'next/font/google'
import Link from 'next/link'

const permanent_marker = Permanent_Marker({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
  })

export const DesktopMenu = () => {
  return (
    <div className='pr-8 w-max hidden md:block'>
        <div className="flex flex-col aline-end max-w-fit">
        <Link href="/intresse" className={`bg-green rounded-md p-4 text-white ${permanent_marker.className}`}>Ställ ditt barn i kö</Link>
         </div>
         <div>
            <nav>
                <ul className='flex font-medium text-lg'>
                    <li className='p-2'>
                      <Link href="/om-oss">Om oss</Link> 
                    </li>
                    <li className='p-2'>
                        <Link href="/nyheter">Nyheter</Link>
                    </li>
                    <li className='p-2'>
                        <Link href="/foraldrar">För föräldrar</Link>
                    </li>
                    <li className='p-2'>
                        <Link href="/kontakt">kontakt</Link>
                    </li>
                </ul>
            </nav>
         </div>

    </div>

  )
    
}
