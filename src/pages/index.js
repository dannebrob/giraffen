import Image from 'next/image'
import { Inter } from 'next/font/google'
import { PermanentMarker } from 'next/font/google'
import {TopHead} from '@/components/header/TopHead'
import {Footer} from '@/components/footer/Footer'
import { Hero } from '@/components/Hero'
import { Display } from '@/components/display/Display'
import { Faq } from '@/components/Faq'



export default function Home() {
  return (
    <main>
      <TopHead />
      <Hero />
      <Display />
      <Faq />
      <Footer />
    </main>
  )
}
