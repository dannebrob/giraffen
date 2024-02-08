import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Caveat } from 'next/font/google'
import {TopHead} from '@/components/header/TopHead'
import {Footer} from '@/components/footer/Footer'
import anna from '@/assets/anna.png'
import andrew from '@/assets/andrew.png'
import johanna from '@/assets/johanna.png'
import alia from '@/assets/alia.png'

import item from '@/assets/IMG_11.jpg'
import { Display } from '@/components/display/Display'
import { Photos } from '@/components/photos/Photos'

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})


export default function Personalen() {

    const personal = [
        {name: 'Johanna', title: 'Rektor/Förskolelärare', image: johanna, text: 'Några väl valda ord om Johanna', color: 'bg-[#3a86ff]'},
        {name: 'Anna', title: 'Förskollärare', image: anna, text: 'Anna har en förskolelärar examen från tyskland. Hon jobbar mycket med den pedagosk', color: 'bg-[#8338ec]'},
        {name: 'Alia', title: 'Barnskötare', image: alia, text: 'Några väl valda ord om Alia', color: 'bg-[#ff006e]'},
        {name: 'Andrew', title: 'Barnskötare/Kock', image: andrew, text: 'Ansvarig för matlagningen på Giraffen och gillar att involvera barnen i tillagningen på ett pedagogiskt sätt', color: 'bg-[#fb5607]'},
    ]
  return (
    <>
    <TopHead />
    <main className='bg-sand flex flex-col md:flex-row md:justify-start'>
      <div className='w-full md:mx-10 p-10'>
        <h1 className={`text-center ${caveat.className} text-4xl py-10`}>Vår fantastiska personal</h1>
        <div className='flex flex-wrap justify-center'>
        <p className='pb-4'>
        Giraffens personalgrupp består av rektor/förskollärare, förskolelärare, barnskötare och kock.
        Föräldraföreningen arbetar för att personalen kontinuerligt ska ges möjligheter till utbildning
        och pedagogisk inspiration. Som arbetsgivare vill vi stötta personalen att utveckla den form av
        pedagogisk verksamhet som de själva finner glädje och trygghet i – då tror vi att barnen också
        känner sig trygga. Vi gläds över att våra pedagoger berikar barnens lärande genom att bjuda
        in att delta i aktiviteter som de själva finner glädje och engagemang i, så som matlagning och
        att utforska och vistas i naturen. Två av våra pedagoger är certifierade inom ledarskap i
        naturen vilket berikar och möjliggör vår utevistelse.
        </p>
        <p className='pb-4'>
        Verksamhetens litenhet och närhet mellan barn, föräldrar och personal skapar en lugn och
        trygg miljö för barnen och en positiv arbetsplats. Grunden för verksamheten är att barnen ska
        känna sig trygga med att det finns vuxna i deras närhet som ingriper om det behövs. Genom
        vår personaltäthet skapas möjlighet att finnas nära och vara tillsammans med barnen med ett
        positivt förhållningssätt. Vi uppmuntrar barnen att säga vad de tycker och känner och arbetar
        aktivt med värdegrundsfrågor.        ¨
        </p>
        <div className='py-10 md:flex md:flex-wrap justify-center'>
         { personal.map((person) => { 
            return(
              <div key={person.name} className='w-96 md my-10 mx-1'>
                <div className={`flex justify-center ${person.color} rounded-t-lg`}>
                    <Image
                        src={person.image}
                        alt="kids playing" 
                        width={800}
                        height={800}
                        className="w-32 h-32 -mt-6" />
                </div>
                <div className='px-4 bg-lightSand py-5 rounded-lg'>
                <h2 className=''>{person.name}</h2>
                <h3 className='font-bold pb-3'>{person.title}</h3>
                {/* <p>{person.text}</p> */}
                </div>
              </div>	)})}
        </div>
        </div>
      </div>
       
    </main>
    <Photos />
    <Footer />
  </>
  )
}
