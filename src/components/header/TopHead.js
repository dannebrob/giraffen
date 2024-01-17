import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { Caveat } from 'next/font/google'
import {Logo} from '../header/Logo'

const caveat = Caveat({
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
        
         </div>
      <div className='pr-8 w-max hidden md:block'>
         <div>
            <nav>
                <ul className='flex font-medium text-lg items-center'>
              <Link href="/kontakt" className={`bg-green rounded-md p-2 text-white ${caveat.className}`}>Ställ ditt barn i kö</Link>
                    <li className='p-2'>
                    <Link href={'/miljo'}><li className='p-2'>Miljön</li></Link>
                    </li>
                    <li className='p-2'>
                        <Link href="/kooperativ">Föräldrakooperativ</Link>
                    </li>
                    <li className='p-2'>
                        <Link href="/pedagogik">Pedagogik</Link>
                    </li>
                    <li className='p-2'>
                        <Link href="/personalen">Vår personal</Link>
                    </li>
                    <li className='p-2'>
                        <Link href="/kontakt">Kontakt</Link>
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
        <Link href="/kontakt" className={`bg-green rounded-md p-4 text-white ${caveat.className}`}>Ställ ditt barn i kö</Link>
        </div>
         </div>
        <nav className='pt-24 w-full text-center text-3xl font-medium'>
          <ul>
            <Link href={'/miljo'}><li className='p-5'>Miljö</li></Link>
            <Link href={'/kooperativ'}><li className='p-5'>Föräldrakooperativ</li></Link>
            <Link href={'/pedagogik'}><li className='p-5'>Pedagogik</li></Link>
            <Link href={'/personalen'}><li className='p-5'>Vår personal</li></Link>
            <Link href={'/kontakt'}><li className='p-5'>Kontakt</li></Link>
          </ul>
        </nav>

    </section>}
    </>
  )
}


