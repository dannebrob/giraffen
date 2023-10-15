import Image from 'next/image'
import { Inter } from 'next/font/google'
import { PermanentMarker } from 'next/font/google'
import {TopHead} from '../components/header/TopHead'
import {Footer, footer} from '../components/footer/Footer'


export default function Home() {
  return (
    <main>
      <TopHead />
      <div className='h-96'>asdlksn</div> {/* bara för att visa */}
      <Footer />
    </main>
  )
}
