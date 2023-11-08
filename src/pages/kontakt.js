import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Caveat } from 'next/font/google'
import {TopHead} from '@/components/header/TopHead'
import {Footer} from '@/components/footer/Footer'


const caveat = Caveat({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
  })


export default function Kontakt() {
  return (
    <>
      <TopHead />
      Kontakt
      <Footer />
    </>
  )
}
