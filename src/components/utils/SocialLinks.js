import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Instagram_logo from '@/assets/instagram.png'
import FaceBook_logo from '@/assets/facebook.png'


export const SocialLinks = () => {
  return (
    <div className='p-10 bg-sand flex justify-center '>
    <Link href={{ pathname: "https://www.instagram.com/giraffeninorsesund/" }} target="_blank">
    <Image src={Instagram_logo} width={50} height={50} alt='Instagram' className='p-2 rounded-2xl'/>
    </Link>
    <Link href={{ pathname: "https://www.facebook.com/GiraffeniNorsesund/" }} target="_blank">
    <Image src={FaceBook_logo} width={50} height={50} alt='Facebook'  className='p-2 rounded-2xl' />
    </Link>
    </div>
  )
}
