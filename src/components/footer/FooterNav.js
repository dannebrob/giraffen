import Link from 'next/link'
import React from 'react'

const FooterNav = () => {
  return (
    <div>
        <nav className='p-10 bg-sand flex flex-col'>
            <h2 className='font-bold pb-2'>Länkar</h2>
            <ul>
            <li><Link href={'/lokalerna'}>Lokalerna</Link></li>
            <li><Link href={'/kooperativ'}>Kooperativ</Link></li>
            <li><Link href={'/mat'}>Maten</Link></li>
            <li><Link href={'/personalen'}>Personalen</Link></li>
            <li><Link href={'/jobb'}>Jobba hos oss</Link></li>
            <li><Link href={'/kontakt'}>Kontakta oss</Link></li>
            </ul>


        </nav>
    </div>
  )
}

export default FooterNav