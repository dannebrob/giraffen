import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Caveat } from 'next/font/google'
import {TopHead} from '@/components/header/TopHead'
import {Footer} from '@/components/footer/Footer'

import item from '@/assets/image 6.png'
import { Display } from '@/components/display/Display'

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})


export default function Utemiljo() {
  return (
    <>
      <TopHead />
      <main className='bg-sand flex flex-col md:flex-row md:justify-start'>
        <div className='mx-10 md:w-1/2'>
          <h1 className={`text-center ${caveat.className} text-4xl py-10`}>Utemiljö</h1>
          <p>Löksås ipsum på miljoner erfarenheter rännil dunge enligt på själv, 
            sin denna hav stig nya upprätthållande enligt hwila, annat ser söka se rot ser blivit sin. 
            Annat sitt träutensilierna vi vid helt inom sista vemod, flera kanske göras blivit därmed och sax plats blivit, 
            tiden dimma där hav så sitt där. Helt är både har träutensilierna att erfarenheter lax annat, 
            och rännil det björnbär jäst genom erfarenheter, genom så omfångsrik så sjö häst jäst.
            Del faktor sin söka annan sig som och mot dimmhöljd där, sista göras som varit för år flera stig dag fram erfarenheter, 
            sällan omfångsrik häst nya sax om genom hav smultron. Kom verkligen där redan samtidigt om samtidigt omfångsrik jäst tre,
            ta av i ingalunda blivit icke mjuka både tid, vemod precis faktor gör kunde hans samtidigt det.
          </p>
          <h2 className={`${caveat.className} text-2xl py-5`}>Rubrik</h2>
          <p>Löksås ipsum på miljoner erfarenheter rännil dunge enligt på själv, 
            sin denna hav stig nya upprätthållande enligt hwila, annat ser söka se rot ser blivit sin. 
            Annat sitt träutensilierna vi vid helt inom sista vemod, flera kanske göras blivit därmed och sax plats blivit, 
            tiden dimma där hav så sitt där. Helt är både har träutensilierna att erfarenheter lax annat, 
            och rännil det björnbär jäst genom erfarenheter, genom så omfångsrik så sjö häst jäst.
            Del faktor sin söka annan sig som och mot dimmhöljd där, sista göras som varit för år flera stig dag fram erfarenheter, 
            sällan omfångsrik häst nya sax om genom hav smultron. Kom verkligen där redan samtidigt om samtidigt omfångsrik jäst tre,
            ta av i ingalunda blivit icke mjuka både tid, vemod precis faktor gör kunde hans samtidigt det.
          </p>
          </div>	
          <div className='md:w-1/2'>
        <Image
            src={item}
            alt="kids playing" 
            width={100}
            height={100}
            className="w-full p-10"
        /> 
          </div>
      </main>
      <Display />
      <Footer />
    </>
  )
}
