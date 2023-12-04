import Link from 'next/link'
import React from 'react'

const FooterNav = () => {
  return (
    <div>
        <nav className='p-10 bg-sand flex flex-col'>
            <h2 className='font-bold pb-2 md:hidden'>Länkar</h2>
            <ul className='md:flex md:flex-wrap justify-center'>
            <li className='px-2'><Link href={'/lokalerna'}>Lokalerna</Link></li>
            <li className='px-2'><Link href={'/kooperativ'}>Kooperativ</Link></li>
            <li className='px-2'><Link href={'/mat'}>Maten</Link></li>
            <li className='px-2'><Link href={'/personalen'}>Personalen</Link></li>
            <li className='px-2'><Link href={'/jobb'}>Jobba hos oss</Link></li>
            <li className='px-2'><Link href={'/kontakt'}>Kontakta oss</Link></li>
            </ul>


        </nav>
    </div>
  )
}

export default FooterNav