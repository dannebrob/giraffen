import Image from 'next/image'
import { Inter } from 'next/font/google'
import { PermanentMarker } from 'next/font/google'
import {TopHead} from '@/components/header/TopHead'
import {Footer} from '@/components/footer/Footer'




export default function Valkommen() {
  return (
    <main>
      <TopHead />
      För föräldrar
      <Footer />
    </main>
  )
}
