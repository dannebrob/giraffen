import React from 'react'
import { Logo } from '../header/Logo'
import Link from 'next/link'
import FooterNav from '@/components/footer/FooterNav'

export const Footer = () => {
  return (
    <section>
    <div className='wave-container inset-x-0 bottom-0'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F2C48D" fillOpacity="1" d="M0,192L34.3,181.3C68.6,171,137,149,206,128C274.3,107,343,85,411,80C480,75,549,85,617,90.7C685.7,96,754,96,823,112C891.4,128,960,160,1029,149.3C1097.1,139,1166,85,1234,74.7C1302.9,64,1371,96,1406,112L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
        </svg>
    </div>
    <div className='bg-sand flex flex-col items-center'>
        <Logo />
        <div className='text-center'>
            <p>Förskolan Giraffen föräldraförening</p>
            <p>Solvedenvägen 17</p>
            <p>441 60  ALINGSÅS
            </p>
            <p>Telefon: 0735394649</p>
           <p> E-post: info@forskolangiraffen.se</p>
        </div>
    </div>
    <FooterNav />

    </section>
  )
}
