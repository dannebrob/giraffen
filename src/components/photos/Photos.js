import React from 'react'
import Image from 'next/image';

import img from '@/assets/IMG_13.jpg'

console.log('yes');
export const Photos = () => {
  return (
    <div>
        <div className='flex justify-around flex-wrap py-5'>
        <Image src={img} width={200} height={200} quality={100} alt='text'/>
        <Image src={img} width={200} height={200} quality={100} alt='text'/>
        <Image src={img} width={200} height={200} quality={100} alt='text'/>
        </div>
    </div>
  )
}
