import React from 'react'
import Image from 'next/image';

import img_1 from '@/assets/IMG_6.jpg'
import img_2 from '@/assets/IMG_8.JPG'
import img_3 from '@/assets/IMG_9.jpg'

console.log('yes');
export const Photos = () => {
  return (
    <div>
        <div className='flex justify-around flex-wrap py-5'>
        <Image src={img_1} width={400} height={400} alt='text' className='p-2 rounded-2xl'/>
        <Image src={img_2} width={400} height={400}  alt='text' className='p-2 rounded-2xl'/>
        <Image src={img_3} width={400} height={400}  alt='text' className='p-2 rounded-2xl'/>
        </div>
    </div>
  )
}
