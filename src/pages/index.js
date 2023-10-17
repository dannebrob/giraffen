import Image from 'next/image'
import { Inter } from 'next/font/google'
import { PermanentMarker } from 'next/font/google'
import {TopHead} from '../components/header/TopHead'
import {Footer} from '../components/footer/Footer'
import { Hero } from '../components/Hero'



export default function Home() {
  return (
    <main>
      <TopHead />
      <Hero />
      <Footer />
    </main>
  )
}
