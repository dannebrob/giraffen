import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Caveat } from 'next/font/google'
import {TopHead} from '@/components/header/TopHead'
import {Footer} from '@/components/footer/Footer'
import Profile_1 from '@/assets/profile-1.png'
import Profile_2 from '@/assets/profile-2.png'

import item from '@/assets/image 6.png'
import { Display } from '@/components/display/Display'

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})


export default function Personalen() {

    const personal = [
        {name: 'Johanna', title: 'Rektor', image: Profile_2, text: 'Löksås ipsum på miljoner erfarenheter rännil dunge enligt på själv,'},
        {name: 'Andrew', title: 'Förskollärare', image: Profile_1, text: 'Löksås ipsum på miljoner erfarenheter rännil dunge enligt på själv,'},
        {name: 'Alia', title: 'Förskollärare', image: Profile_1, text: 'Löksås ipsum på miljoner erfarenheter rännil dunge enligt på själv,'},
        {name: 'Anna', title: 'Förskollärare', image: Profile_1, text: 'Löksås ipsum på miljoner erfarenheter rännil dunge enligt på själv,'},
    ]
  return (
    <>
    <TopHead />
    <main className='bg-sand flex flex-col md:flex-row md:justify-start'>
      <div className='w-full md:mx-10'>
        <h1 className={`text-center ${caveat.className} text-4xl py-10`}>Personalen</h1>
        <div className='border flex flex-wrap justify-center'>
         { personal.map((person) => { 
            return(
              <div key={person.name} className='border w-96 my-10 mx-1'>
                <div className='border flex justify-center bg-greenLight'>
                    <Image
                        src={person.image}
                        alt="kids playing" 
                        width={100}
                        height={100}
                        className="w-32 h-32 -mt-6" />
                </div>
                <div className='px-4'>
                <h2 className=''>{person.name}</h2>
                <h3 className='font-bold pb-3'>{person.title}</h3>
                <p>{person.text}</p>
                </div>
              </div>	)})}
        </div>
      </div>
       
    </main>
    <Display />
    <Footer />
  </>
  )
}
