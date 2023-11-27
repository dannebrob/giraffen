import Link from 'next/link'
import React from 'react'

export const Attention = () => {
  return (
    <>
    <div className='w-full bg-infoSubtle p-4 flex flex-wrap justify-center'>  
        <p className='decoration-wavy'>Vi har för närvarande lediga platser under våren!</p>
        <Link href={'/kontakt'} className='md:pl-10 hover:cursor underline'>Ställ ditt barn i kö</Link>
    </div>
    </>
  )
}
