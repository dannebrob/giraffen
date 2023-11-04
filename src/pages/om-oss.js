import Image from 'next/image'
import { Inter } from 'next/font/google'
import { PermanentMarker } from 'next/font/google'
import {TopHead} from '@/components/header/TopHead'
import {Footer} from '@/components/footer/Footer'




export default function OmOss() {
  return (
    <main>
      <TopHead />
      Om oss
      <Footer />
    </main>
  )
}
