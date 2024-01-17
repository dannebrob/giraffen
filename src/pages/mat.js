import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Caveat } from 'next/font/google'
import {TopHead} from '@/components/header/TopHead'
import {Footer} from '@/components/footer/Footer'

import item from '@/assets/IMG_5.jpg'
import { Display } from '@/components/display/Display'
import { Photos } from '@/components/photos/Photos'


const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})


export default function Mat() {
  return (
    <>
     <>
      <TopHead />
      <main className='bg-sand flex flex-col md:flex-row md:justify-start'>
        <div className='mx-10 md:w-1/2 py-10'>
          <h1 className={`text-center ${caveat.className} text-4xl py-10`}>Mat</h1>
          <p className='pb-4'>Giraffen har en egen kock som lagar mat från grunden och i möjligaste mån med ekologiska och närproducerade råvaror. Under sommarhalvåret har vi lyxen att få grönsaksleverans från Hemsjö köksträdgård. Veckomenyn varierar, det bjuds på fisk minst en gång i veckan, matiga soppor, husmanskost och olika vegetariska rätter.
          </p>
          <p className='pb-4'>
          Maten är även en del av den pedagogiska verksamheten. Barnen på förskolan är ofta välkomna in i köket där de deltar i förberedelser, tillagning av lunch och mellanmål. Med detta skapas en nyfikenhet och förståelse för matens ursprung och betydelse.
          </p>
          <h2 className={`${caveat.className} text-2xl py-5`}>Kommentar från Andrew</h2>

          <p>Maten är även en del av den pedagogiska verksamheten. Barnen på förskolan är välkomna in i köket och delta i förberedelser, tillagning av lunch och mellanmål. 
            Med detta skapas en nyfikenhet och förståelse för matens ursprung och betydelse.
          </p>
          </div>	
          <div className='md:w-1/2'>
        <Image
            src={item}
            alt="kids playing" 
            width={800}
            height={800}
            className="w-full p-10 md:m-w-[700]"
        /> 
          </div>
      </main>
      <Display />
      <Photos />
      <Footer />
    </>
    </>
  )
}
