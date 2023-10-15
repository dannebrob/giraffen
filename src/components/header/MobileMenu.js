import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import hamburgerIcon from 'src/assets/align-justify-svgrepo-com.svg'

export const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(old => !old);
    }

  return (
    <div>
    <div className='md:hidden pr-5'>
        <button onClick={toggle}>
                    <svg
            className='w-6 h-6'
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
        {isOpen ? 
        <div className='h-96'>
            <nav>
                <ul>
                    <li><Link href='/'>Om oss</Link></li>
                    <li><Link href='/'>Nyheter</Link></li>
                    <li><Link href='/'>För föräldrar</Link></li>
                    <li><Link href='/'>Kontakt</Link></li>
                </ul>
            </nav>
        </div> : <></>}
</div>
  )
}
