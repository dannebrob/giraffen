import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Caveat } from 'next/font/google'
import {TopHead} from '@/components/header/TopHead'
import {Footer} from '@/components/footer/Footer'

console.log(process.env.API_KEY);

const caveat = Caveat({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
  })


export default function Kontakt() {
  return (
    <>
      <TopHead />
      <section className='w-full pb-10'>
        <div className='w-full flex flex-col md:flex-wrap md:flex-row '>
          <h1 className='text-center'>Kontakta oss här:</h1>
        <form action="https://api.web3forms.com/submit" method="POST" className='flex flex-col p-10 md:p-32'>
        <input type="hidden" name="access_key" value="69c5f846-9c97-44a5-9ff7-b41d726d697b" />
        <input type="hidden" name="redirect" value="https://google.com/"></input>

        <label>My Name</label>
        <input type="text" name="name" required />
        <label>My Email</label>
        <input type="email" name="email" required />
        <label>My Message</label>
        <textarea name="message" required></textarea>
        <input type="checkbox" name="botcheck" className='hidden'></input>
        <button type="submit" className={`p-2 mt-10 bg-green w-36 text-center rounded-lg text-2xl text-white ${caveat.className}`}>Submit Form</button>

    </form>
      </div>
      </section>

<script src="https://web3forms.com/client/script.js" async defer></script>
      <Footer />
    </>
  )
}
