import Link from 'next/link'
import React from 'react'

import { Caveat } from 'next/font/google'

const caveat = Caveat({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
  })

export const ReadMoreButton = ({link, text} ) => {
  console.log(link);
  console.log(text);

  // Use a default value for text in case it is undefined
  text = text || 'Läs mer';
  // Use a default value for link in case it is undefined
  link = link || '/';


  return (
    <div className='mt-8'>
    <Link href={link}>
        <div className={`p-2 bg-green w-36 text-center rounded-lg text-2xl text-white ${caveat.className}`}>{text}</div>
    </Link>
    </div>
  )
}
