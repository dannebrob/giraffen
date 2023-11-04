import Link from 'next/link'
import React from 'react'

import { Caveat } from 'next/font/google'

const caveat = Caveat({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
  })

export const ReadMoreButton = ({link}) => {
  console.log(link);
  return (
    <div className='mt-8'>
    <Link href={link}>
        <div className={`p-2 bg-green w-36 text-center rounded-lg text-2xl text-white ${caveat.className}`}>Läs mer</div>
    </Link>
    </div>
  )
}
