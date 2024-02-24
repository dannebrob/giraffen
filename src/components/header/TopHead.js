/* import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
    const pathname = usePathname()

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
                     <li className='p-2'>
                     <Link href='/miljo' className={pathname === '/miljo' ? 'p-2 font-bold underline' : 'p-2'}><li>Miljön</li></Link>                     
                     </li>
                     <li className='p-2'>
                         <Link href='/kooperativ' className={pathname === '/kooperativ' ? 'p-2 font-bold underline' : 'p-2'}><li>Föräldrakooperativ</li></Link>
                     </li>
                     <li className='p-2'>
                         <Link href='/pedagogik' className={pathname === '/pedagogik' ? 'p-2 font-bold underline' : 'p-2'}><li>Pedagogik</li></Link>
                     </li>
                     <li className='p-2'>
                         <Link href='/personalen' className={pathname === '/personalen' ? 'p-2 font-bold underline' : 'p-2'}><li>Vår personal</li></Link>
                     </li>
                     <li className='p-2'>
                         <Link href='/mat' className={pathname === '/mat' ? 'p-2 font-bold underline' : 'p-2'}><li>Maten</li></Link>
                     </li>
                     <li className='p-2'>
                         <Link href='/kontakt' className={pathname === '/kontakt' ? 'p-2 font-bold underline' : 'p-2'}><li>Kontakt</li></Link>
                     </li>
               <Link href='/kontakt' className={`bg-green rounded-md mx-3 p-2 text-white ${caveat.className}`}>Ställ ditt barn i kö</Link>
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
            <Link href={'/mat'}><li className='p-5'>Maten</li></Link>
            <Link href={'/kontakt'}><li className='p-5'>Kontakt</li></Link>
          </ul>
        </nav>

    </section>}
    </>
  )
}

*/

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Caveat } from "next/font/google";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})



export const TopHead = () => {

 
  
const pathname = usePathname()

    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "miljo",
    },
    {
      id: 2,
      link: "kooperativ",
    },
    {
      id: 3,
      link: "pedagogik",
    },
    {
      id: 4,
      link: "personalen",
    },
    {
      id: 5,
      link: "mat",
    },
    {
      id: 6,
      link: "kontakt",
    },

  ];


  console.log('pathname:', pathname);

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-greenDark fixed nav">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-5xl font-signature ml-2">
          <Logo />
        </h1>
      </div>

      <ul className="hidden md:flex items-center">
      
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={link} className={pathname === '/' + link ? 'font-bold' : ''}>{link}</Link>
          </li>
        ))}
        <Link href="/kontakt" className={`bg-green rounded-md p-4 text-white ${caveat.className}`}>Ställ ditt barn i kö</Link>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-greenDark from-black to-gray-800 text-gray-500">
           <Link href="/kontakt" className={`bg-green rounded-md p-4 text-white ${caveat.className}`}>Ställ ditt barn i kö</Link>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};