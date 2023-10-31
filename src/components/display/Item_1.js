import React from 'react'
import Image from 'next/image'
import { Caveat } from 'next/font/google'


import item from '@/assets/image 3.png'
import { ReadMoreButton } from '@/components/utils/ReadMoreButton'

const caveat = Caveat({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
  })



export const Item1 = () => {
  return (
    <div className='flex flex-col w-full border p-8 md:flex-wrap md:flex-row'>
        <div className='border md:w-6/12 '>
        <Image
            src={item}
            alt="profile" 
            width={100}
            height={100}
            className="w-full top-0 left-0 object-cover rounded-2xl p-4"
        />
        </div>
        <div className='md:w-6/12'> 
        <div className='border flex flex-col items-center p-4'>
            <h2 className={`text-4xl p-8  ${caveat.className}`}>Pedagogik</h2>
            <p>Löksås ipsum på miljoner erfarenheter rännil dunge enligt på själv, sin denna hav stig nya upprätthållande enligt hwila, annat ser söka se rot ser blivit sin. Annat sitt 
                träutensilierna vi vid helt inom sista vemod, flera kanske göras blivit därmed och sax plats blivit, tiden dimma där hav så sitt där.
                Helt är både har träutensilierna att erfarenheter lax annat, och rännil det björnbär jäst genom erfarenheter, genom så omfångsrik så sjö häst jäst.
            </p>
            <p>Del faktor sin söka annan sig som och mot dimmhöljd där, sista göras som varit för år flera
                 stig dag fram erfarenheter, sällan omfångsrik häst nya sax om genom hav smultron. 
                 Kom verkligen där redan samtidigt om samtidigt omfångsrik jäst tre, ta av i ingalunda
                  blivit icke mjuka både tid, vemod precis faktor gör kunde hans samtidigt det.
            </p>
        </div>
            <ReadMoreButton />
        </div>

    </div>
  )
}
