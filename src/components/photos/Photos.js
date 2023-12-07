import React from 'react'
import photo_1 from '@/assets/IMG_4.jpg'
import photo_2 from '@/assets/IMG_8.jpg'
import photo_3 from '@/assets/IMG_7.jpg'

console.log('yes');
export const Photos = () => {
  return (
    <div>
        <div className='flex justify-around flex-wrap py-5'>
            <img alt='text' src={photo_1.src} className='max-w-md'/>
            <img alt='text' src={photo_2.src} className='max-w-md'/>
            <img alt='text' src={photo_3.src} className='max-w-md'/>
        </div>
    </div>
  )
}
