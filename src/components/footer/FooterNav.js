import Link from 'next/link'
import React from 'react'

const FooterNav = () => {
  return (
    <div>
        <nav className='p-10 bg-sand flex flex-col'>
            <h2 className='font-bold pb-2 md:hidden text-center'>Länkar</h2>
            <ul className='flex flex-wrap justify-center'>
            <li className='px-2 hover:font-bold'><Link href={'/miljo'}>Ute- och innemijön</Link></li>
            <li className='px-2 hover:font-bold'><Link href={'/kooperativ'}>Kooperativ</Link></li>
            <li className='px-2 hover:font-bold'><Link href={'/mat'}>Maten</Link></li>
            <li className='px-2 hover:font-bold'><Link href={'/personalen'}>Personalen</Link></li>
            <li className='px-2 hover:font-bold'><Link href={'/jobb'}>Jobba hos oss</Link></li>
            <li className='px-2 hover:font-bold'><Link href={'/kontakt'}>Kontakta oss</Link></li>
            </ul>


        </nav>
    </div>
  )
}

export default FooterNav