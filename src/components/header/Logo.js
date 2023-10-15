import React from 'react'
import Link from 'next/link'
import { Permanent_Marker } from 'next/font/google'


const permanent_marker = Permanent_Marker({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
  })

export const Logo = () => {
  return (
    <Link href="/">
         <div className={`${permanent_marker.className} w-fit text-center p-10`}>
        <h1 className='text-4xl'>Giraffen</h1>
        <h2 className='text-lg '>Norsesund</h2>
    </div>
    </Link>
   
  )
}
