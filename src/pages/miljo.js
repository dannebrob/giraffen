import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Caveat } from 'next/font/google'
import {TopHead} from '@/components/header/TopHead'
import {Footer} from '@/components/footer/Footer'

import item1 from '@/assets/lekplats.jpg'
import item2 from '@/assets/skog.jpg'
import item3 from '@/assets/strand.jpg'

import { Display } from '@/components/display/Display'
import { Photos } from '@/components/photos/Photos'

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})


export default function Miljo() {
  return (
    <>
      <TopHead />
      <main className='bg-sand flex flex-col md:flex-row md:justify-start'>
        <div className='mx-10 md:w-1/2 py-10'>
          <h1 className={`text-center ${caveat.className} text-4xl py-10`}>Ute och inne-miljö</h1>
          <h2 className='text-3xl'>Inne</h2>
          <p className='pb-4'>Föräldraföreningen hyr sina lokaler av BRF Nordgård och förskolan finns i samma byggnad
          som föreningens lägenheter. Personal och föräldrar har stor möjlighet att påverka lokalernas
          utformning och underhåll i samarbete med BRF:en.</p>
          <p className='pb-4'>
          I förskolans mest centrala rum finns läs- och myshörna, plats för samlingen, en större golvyta
          för till exempel legobygge eller bygge med klossar och en öppen spis (som vi visserligen inte
          eldar i). Där finns även flera stora bord som används både vid måltider och vid pyssel. I
          anslutning finns ytterligare två rum för lek, kreativ verksamhet och vila, ett kök där förskolans
          kock tillreder alla måltider, samt skötrum med toalett. I husets entré har barnen skåp till sina
          ytterkläder, det finns toalett och ett torkrum. På entréplan har förskolan även ett rum som
          används både till vila för de minsta och till pedagogisk verksamhet av olika slag.            </p>
          <p className='pb-4'>
          Tyvärr är förskolans lokaler inte rullstolsanpassade
            </p>
          <h2 className='text-3xl'>Ute</h2>
          <p className='pb-4'>
          Huset är beläget på en höjd vid sjön Lillelången i Norsesund, med tillgång till egen strand och
          skog inpå knutarna. Giraffens gård finns i direkt anslutning till byggnaden och består av
          lekplats, sandlåda och gräsplan. Strax ovanför lekplatsen finns ett skogsparti med balansgång,
          flera trädkojor samt en grillplats. I förskolans skog tränas barnens motorik och nyfikenhet för
          naturen väcks till liv. I dessa härliga utomhusmiljöer vistas barnen och pedagogerna dagligen.          </p>
          <p className='pb-4'>
          Huset ligger på promenadavstånd till pendeltåg och busshållplats.
            </p>
          </div>	
          <div className='md:w-1/2 '>
       
  
         <Image
            src={item1}
            alt="Lekplatsen som ligger i anslutning till förskolan" 
            width={800}
            height={800}
            className="w-full p-10"
        /> 
          <Image
              src={item2}
              alt="Skogen bakom förskolan" 
              width={800}
              height={800}
              className="w-full p-10"
          />
          <Image
              src={item3}
              alt="Våran vakra strand, nedanför förskolan" 
              width={800}
              height={800}
              className="w-full p-10"
          />
          </div>
      </main>
      <Photos />
      <Footer />
    </>
  )
}
