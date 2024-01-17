import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Caveat } from 'next/font/google'
import {TopHead} from '@/components/header/TopHead'
import {Footer} from '@/components/footer/Footer'

import item from '@/assets/IMG_11.jpg'
import { Display } from '@/components/display/Display'
import { Photos } from '@/components/photos/Photos'

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})


export default function Pedagogik() {
  return (
    <>
    <TopHead />
    <main className='bg-sand flex flex-col md:flex-row md:justify-start'>
      <div className='mx-10 md:w-1/2'>
        <h1 className={`text-center ${caveat.className} text-4xl py-10`}>Den pedagogiska verksamheten</h1>
        <p className='font-bold pb-4'>
        Ledorden omsorg, utveckling och lärande genomsyrar Förskolan Giraffen
        </p>
        <p className=' pb-4'>
        Här möts vårdnadshavare, barn och kollegor av värme och engagemang
        </p>
        <p className='pb-4'>Vår pedagogiska verksamhet utgår från Skolverkets läroplan för förskolan. Förskolans pedagoger tar tillvara varje barns nyfikenhet och lust att lära. Leken är ett sätt att utvecklas, bearbeta intryck, kommunicera och inspireras. Hos oss är barnens inflytande en stor och viktig del där barns intresse visar vilken väg vi tillsammans ska jobba vidare på. Undervisningen anpassas aktivt efter det enskilda barnet samt barngruppen.
        </p>
        <h2 className={`${caveat.className} text-2xl py-5`}>Omsorg</h2>
        <p>Vi på förskolan Giraffen anser att omsorg har en central del i hela vår verksamhet. Viktigt för oss är att alla känner sig trygga och att vi bygger upp nära relationer med barn och dess vårdnadshavare.
        </p>
        <p>
        I vardagsrutinerna som övergångar, påklädning och matsituationer finns omsorgen där genom uppmuntrande stöttning för att våga prova, för att lära och utmana sig. Men även i den fria leken är vi nära för att kunna möta upp barnens tankar och frågeställningar. Omsorg för oss är mer än bara att lyssna, det är även att kunna läsa av kroppsspråk och vara nära med kropp och själ. 
        </p>
        <p>
        Och hur skulle det kunna se ut? Om ett barn en dag inte klarar att hålla sig vaken över måltiden,  kan vi spara lite mat så barnen får sitt när de vaknar. Eller om barnet har en känslomässigt tuff dag så är vi där och ger stöttning i den form som barnet söker, om det så är att sitta bredvid, bli sedd eller krypa upp i ett knä och bli kramad.
        </p>
        <h2 className={`${caveat.className} text-2xl py-5`}>Utveckling</h2>
        <h2 className={`${caveat.className} text-2xl py-5`}>lärande</h2>
        <p className='pb-4'>
        När förskollärarna planerar in våra lärsituationer har vi tagit tillvara barns intressen och nyfikenhet. Viktigt för oss är att det ska vara lärorikt och lustfyllt tillfälle när vi samlas i våra olika grupper. Dessa tillfällen kan se lite olika ut beroende på vad som är agendan. Här använder vi både innemiljön och utemiljön, i vår skog ges många möjligheter att utforska bland annat småkryp, se årstidsskiftningar och  motorisk träning. 

        </p>
        </div>	
        <div className='md:w-1/2'>
      <Image
          src={item}
          alt="kids playing" 
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
