import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { Permanent_Marker } from 'next/font/google'
import {Logo} from '../header/Logo'

const permanent_marker = Permanent_Marker({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

export const TopHead = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(old => !old);
        console.log('clicked!');
    }

  return (
    <>
    {!isOpen ?
    <section className="w-full bg-lightBlue flex justify-between items-center" >
    <Logo/>
    <div className="flex flex-col aline-end max-w-fit">
        <Link href="/intresse" className={`bg-green rounded-md p-4 text-white ${permanent_marker.className}`}>Ställ ditt barn i kö</Link>
         </div>
      <div className='pr-8 w-max hidden md:block'>
        
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
    <div className='md:hidden pr-5'>
        <button onClick={toggle}>
                    <svg
            className='w-8 h-8'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        </div>
    </section>
    : <section className="w-screen bg-lightBlue flex flex-col items-end  h-screen">
    
       <button onClick={toggle}>
                    <svg
            className='w-8 h-8 mr-6 mt-14'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div className="flex flex-col aline-end max-w-fit">
        <div className='w-screen flex justify-center'>
        <Link href="/intresse" className={`bg-green rounded-md p-4 text-white ${permanent_marker.className}`}>Ställ ditt barn i kö</Link>
        </div>
         </div>
        <nav className='pt-24 w-full text-center text-3xl font-medium'>
          <ul>
            <Link href={'/om'}><li className='p-5'>Om oss</li></Link>
            <Link href={'/nyheter'}><li className='p-5'>Nyheter</li></Link>
            <Link href={'/foraldrar'}><li className='p-5'>För föräldrar</li></Link>
            <Link href={'/kontakt'}><li className='p-5'>Kontakt</li></Link>
          </ul>
        </nav>

    </section>}
    </>
  )
}


